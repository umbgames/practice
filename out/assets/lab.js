(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const STORAGE = 'maskido-live-lab-v2';
  const COURSE_KEY = 'maskido-smart-bin-progress-v1';

  const state = {
    components: {},
    connections: [],
    selectedPart: null,
    wireSource: null,
    tool: 'move',
    simulation: false,
    distance: 30,
    lidOpen: false,
    xp: 0,
    sound: true,
    awardedEdges: new Set(),
    round: 0,
    score: 0,
    hearts: 3,
    streak: 0,
    sequence: [],
    quizLocked: false,
    loop: 1
  };

  const defaultPositions = {
    arduino: {x: 75, y: 220}, sensor: {x: 430, y: 80}, servo: {x: 615, y: 355}, power: {x: 390, y: 460}, breadboard: {x: 365, y: 260}
  };

  const partSizes = {
    arduino: [260,176], sensor:[190,105], servo:[130,102], power:[140,88], breadboard:[260,125]
  };

  const requiredParts = ['arduino','sensor','servo','power'];
  const requiredEdges = [
    edgeKey('arduino','5V','sensor','VCC'),
    edgeKey('arduino','GND','sensor','GND'),
    edgeKey('arduino','D10','sensor','TRIG'),
    edgeKey('arduino','D9','sensor','ECHO'),
    edgeKey('arduino','D11','servo','SIG'),
    edgeKey('power','5V','servo','VCC'),
    edgeKey('power','GND','servo','GND'),
    edgeKey('arduino','GND2','power','GND2')
  ];

  const pinDefs = {
    arduino: [
      {id:'5V',label:'5V',type:'power',x:88,y:158},
      {id:'GND',label:'GND',type:'ground',x:112,y:158},
      {id:'GND2',label:'GND',type:'ground',x:136,y:158},
      {id:'D11',label:'D11',type:'signal',x:184,y:17},
      {id:'D10',label:'D10',type:'signal',x:208,y:17},
      {id:'D9',label:'D9',type:'signal',x:232,y:17}
    ],
    sensor: [
      {id:'VCC',label:'VCC',type:'power',x:36,y:100},
      {id:'TRIG',label:'TRIG',type:'signal',x:76,y:100},
      {id:'ECHO',label:'ECHO',type:'signal',x:115,y:100},
      {id:'GND',label:'GND',type:'ground',x:154,y:100}
    ],
    servo: [
      {id:'SIG',label:'SIGNAL',type:'signal',x:130,y:50},
      {id:'VCC',label:'5V',type:'power',x:130,y:72},
      {id:'GND',label:'GND',type:'ground',x:130,y:94}
    ],
    power: [
      {id:'5V',label:'+5V',type:'power',x:28,y:0},
      {id:'GND',label:'GND',type:'ground',x:60,y:0},
      {id:'GND2',label:'GND',type:'ground',x:92,y:0}
    ],
    breadboard: []
  };

  const wireColors = {power:'#e5484d',ground:'#232c37',signal:'#f1a400'};
  let dragState = null;
  let audioCtx = null;
  let toastTimer = null;

  function storeGet(kind,key){try{return window[kind].getItem(key)}catch{return null}}
  function storeSet(kind,key,value){try{window[kind].setItem(key,value);return true}catch{return false}}

  function edgeKey(c1,p1,c2,p2){
    return [`${c1}:${p1}`,`${c2}:${p2}`].sort().join('|');
  }

  function componentMarkup(type){
    if(type === 'arduino') return `<div class="arduino-board"><div class="usb"></div><div class="barrel"></div><div class="chip"></div><div class="reset"></div><div class="led"></div><div class="header top"></div><div class="header bottom"></div></div>`;
    if(type === 'sensor') return `<div class="sensor-board"><div class="sensor-eye left"></div><div class="sensor-eye right"></div><div class="crystal"></div></div>`;
    if(type === 'servo') return `<div class="servo-body"><div class="servo-top"></div><div class="servo-horn"></div><div class="servo-wire-tail"></div></div>`;
    if(type === 'power') return `<div class="power-module"><div class="usb-port"></div></div>`;
    return `<div class="breadboard"></div>`;
  }

  function partLabel(type){
    return ({arduino:'Arduino Uno · brain',sensor:'HC-SR04 · eyes',servo:'SG90 Servo · muscle',power:'Safe 5V · energy',breadboard:'Mini breadboard · optional'})[type];
  }

  function loadState(){
    try{
      const saved = JSON.parse(localStorage.getItem(STORAGE) || '{}');
      if(saved.components && typeof saved.components === 'object') state.components = saved.components;
      if(Array.isArray(saved.connections)) state.connections = saved.connections;
      if(Number.isFinite(saved.xp)) state.xp = saved.xp;
      if(Array.isArray(saved.awardedEdges)) state.awardedEdges = new Set(saved.awardedEdges);
      if(typeof saved.sound === 'boolean') state.sound = saved.sound;
    }catch{}
  }

  function saveState(){
    try{
      localStorage.setItem(STORAGE, JSON.stringify({components:state.components,connections:state.connections,xp:state.xp,awardedEdges:[...state.awardedEdges],sound:state.sound}));
    }catch{}
  }

  function addCourseProgress(n){
    try{
      const arr = JSON.parse(localStorage.getItem(COURSE_KEY) || '[]');
      const set = new Set(Array.isArray(arr) ? arr : []); set.add(n);
      localStorage.setItem(COURSE_KEY, JSON.stringify([...set]));
    }catch{}
  }

  function tone(freq=620,duration=.08,type='sine'){
    if(!state.sound) return;
    try{
      audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
      const osc=audioCtx.createOscillator(), gain=audioCtx.createGain();
      osc.type=type; osc.frequency.value=freq; gain.gain.value=.045;
      osc.connect(gain); gain.connect(audioCtx.destination); osc.start();
      gain.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);
      osc.stop(audioCtx.currentTime+duration);
    }catch{}
  }

  function successSound(){tone(520,.08);setTimeout(()=>tone(760,.11),90)}
  function errorSound(){tone(190,.15,'square')}

  function showToast(message, kind=''){
    const toast=$('#toast'); toast.textContent=message; toast.className=`toast show ${kind}`;
    clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.className='toast',2200);
  }

  function celebrate(count=70){
    const box=$('#celebration');
    const colors=['#ff7a00','#00b8d9','#16a36a','#ffca28','#7c5cff'];
    for(let i=0;i<count;i++){
      const p=document.createElement('i'); p.style.left=`${Math.random()*100}%`; p.style.setProperty('--c',colors[i%colors.length]);
      p.style.animationDelay=`${Math.random()*.45}s`; p.style.transform=`rotate(${Math.random()*180}deg)`; box.appendChild(p);
      setTimeout(()=>p.remove(),2800);
    }
  }

  function addXP(amount,label){
    state.xp += amount; $('#xpValue').textContent=state.xp; $('#levelValue').textContent=Math.max(1,Math.floor(state.xp/250)+1);
    showToast(`+${amount} XP · ${label}`,'good'); successSound(); saveState();
  }

  function placePart(type,x,y,quiet=false){
    if(state.components[type]){selectNode(type);return;}
    const ws=$('#workspace'); const [w,h]=partSizes[type];
    x=Math.max(20,Math.min(x,ws.clientWidth-w-20)); y=Math.max(36,Math.min(y,ws.clientHeight-h-20));
    state.components[type]={x,y};
    renderComponent(type); updateAll(); saveState();
    if(!quiet && requiredParts.includes(type)) addXP(25,`${partLabel(type).split(' · ')[0]} placed`);
  }

  function renderComponent(type){
    const ws=$('#workspace'); const info=state.components[type]; if(!info) return;
    let node=$(`.component-node[data-type="${type}"]`,ws);
    if(!node){
      node=document.createElement('div'); node.className='component-node'; node.dataset.type=type;
      node.innerHTML=`<div class="node-label">${partLabel(type)}</div><button class="remove-node" type="button" aria-label="Remove ${type}">×</button><div class="component-body">${componentMarkup(type)}</div>`;
      (pinDefs[type]||[]).forEach(pin=>{
        const b=document.createElement('button'); b.type='button'; b.className=`pin ${pin.type}`; b.dataset.component=type;b.dataset.pin=pin.id;b.dataset.label=pin.label;b.dataset.type=pin.type;b.title=`${partLabel(type).split(' · ')[0]} ${pin.label}`;b.style.left=`${pin.x}px`;b.style.top=`${pin.y}px`;node.appendChild(b);
      });
      ws.appendChild(node); bindNode(node);
    }
    node.style.left=`${info.x}px`;node.style.top=`${info.y}px`;
  }

  function bindNode(node){
    node.addEventListener('pointerdown',e=>{
      if(e.target.closest('.pin')||e.target.closest('.remove-node')) return;
      if(state.tool!=='move') return;
      e.preventDefault(); selectNode(node.dataset.type);
      const r=node.getBoundingClientRect(); dragState={type:node.dataset.type,offsetX:e.clientX-r.left,offsetY:e.clientY-r.top};
      node.setPointerCapture?.(e.pointerId);
    });
    node.addEventListener('pointermove',e=>{
      if(!dragState||dragState.type!==node.dataset.type) return;
      const wr=$('#workspace').getBoundingClientRect(); const [w,h]=partSizes[dragState.type];
      const x=Math.max(0,Math.min(e.clientX-wr.left-dragState.offsetX,$('#workspace').clientWidth-w));
      const y=Math.max(28,Math.min(e.clientY-wr.top-dragState.offsetY,$('#workspace').clientHeight-h));
      state.components[dragState.type]={x,y}; node.style.left=`${x}px`;node.style.top=`${y}px`; updateWires();
    });
    node.addEventListener('pointerup',()=>{if(dragState){dragState=null;saveState();}});
    $('.remove-node',node).addEventListener('click',()=>removePart(node.dataset.type));
    $$('.pin',node).forEach(pin=>{
      pin.addEventListener('pointerdown',e=>{e.stopPropagation();e.preventDefault();startWire(pin,e)});
    });
  }

  function removePart(type){
    $(`.component-node[data-type="${type}"]`)?.remove(); delete state.components[type];
    state.connections=state.connections.filter(c=>c.a.component!==type&&c.b.component!==type); selectNode(null); updateAll(); saveState();
  }

  function selectNode(type){
    state.selectedPart=type; $$('.component-node').forEach(n=>n.classList.toggle('selected',n.dataset.type===type));
  }

  function setTool(tool){
    state.tool=tool; $('#selectTool').classList.toggle('active',tool==='move');$('#wireTool').classList.toggle('active',tool==='wire');
    $('#selectTool').setAttribute('aria-pressed',String(tool==='move'));$('#wireTool').setAttribute('aria-pressed',String(tool==='wire'));
    $('#workspace').style.cursor=tool==='wire'?'crosshair':'default';
  }

  function startWire(pin,e){
    setTool('wire');
    if(state.wireSource){finishWire(pin);return;}
    state.wireSource={component:pin.dataset.component,pin:pin.dataset.pin,type:pin.dataset.type,el:pin}; pin.classList.add('source');
    const layer=$('#wireLayer'); const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.id='draftWire';path.setAttribute('class','draft-wire');layer.appendChild(path);
    const move=ev=>updateDraft(ev.clientX,ev.clientY);
    const up=ev=>{
      document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);
      const target=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('.pin');
      if(target && !(target.dataset.component===state.wireSource?.component && target.dataset.pin===state.wireSource?.pin)) finishWire(target); else cancelWire();
    };
    document.addEventListener('pointermove',move);document.addEventListener('pointerup',up);
    if(e.clientX) updateDraft(e.clientX,e.clientY);
  }

  function pinCenter(component,pin){
    const el=$(`.pin[data-component="${component}"][data-pin="${pin}"]`); if(!el)return{x:0,y:0};
    const r=el.getBoundingClientRect(),wr=$('#workspace').getBoundingClientRect();
    return{x:r.left+9-wr.left,y:r.top+9-wr.top};
  }

  function curvePath(a,b){
    const dx=Math.max(45,Math.abs(b.x-a.x)*.45); return `M ${a.x} ${a.y} C ${a.x+dx} ${a.y}, ${b.x-dx} ${b.y}, ${b.x} ${b.y}`;
  }

  function updateDraft(clientX,clientY){
    if(!state.wireSource)return; const wr=$('#workspace').getBoundingClientRect();
    const a=pinCenter(state.wireSource.component,state.wireSource.pin),b={x:clientX-wr.left,y:clientY-wr.top};$('#draftWire')?.setAttribute('d',curvePath(a,b));
  }

  function cancelWire(){
    state.wireSource?.el?.classList.remove('source');state.wireSource=null;$('#draftWire')?.remove();
  }

  function finishWire(pin){
    if(!state.wireSource)return;
    const a={component:state.wireSource.component,pin:state.wireSource.pin,type:state.wireSource.type};
    const b={component:pin.dataset.component,pin:pin.dataset.pin,type:pin.dataset.type};
    cancelWire();
    if(a.component===b.component){showToast('Connect two different components','bad');errorSound();return;}
    const key=edgeKey(a.component,a.pin,b.component,b.pin);
    if(state.connections.some(c=>c.key===key)){showToast('That wire is already connected');return;}
    const valid=requiredEdges.includes(key);
    state.connections.push({a,b,key,valid});
    if(valid&&!state.awardedEdges.has(key)){state.awardedEdges.add(key);addXP(35,'Correct connection');}else if(!valid){showToast('Wire added — run Circuit Check to test it','bad');tone(240,.1,'square');}
    updateAll();saveState();
  }

  function updateWires(){
    const layer=$('#wireLayer');
    $$('.wire-render',layer).forEach(n=>n.remove());
    state.connections.forEach((c,index)=>{
      const a=pinCenter(c.a.component,c.a.pin),b=pinCenter(c.b.component,c.b.pin); if(!a.x||!b.x)return;
      const group=document.createElementNS('http://www.w3.org/2000/svg','g');group.setAttribute('class','wire-render');
      const shadow=document.createElementNS('http://www.w3.org/2000/svg','path');shadow.setAttribute('d',curvePath(a,b));shadow.setAttribute('class','wire-shadow');
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',curvePath(a,b));path.setAttribute('class',`wire-path ${c.valid?'correct':'invalid'}`);path.style.setProperty('--wire',wireColors[c.a.type]||wireColors.signal);path.dataset.index=index;
      path.style.pointerEvents='stroke'; path.addEventListener('click',()=>{state.connections.splice(index,1);updateAll();saveState();showToast('Wire removed');});
      group.append(shadow,path);layer.appendChild(group);
    });
  }

  function validConnectionCount(){return state.connections.filter(c=>c.valid).length}
  function circuitReady(){return requiredParts.every(p=>state.components[p])&&requiredEdges.every(e=>state.connections.some(c=>c.key===e))&&state.connections.every(c=>c.valid)}

  function updateAll(){
    requiredParts.forEach(type=>{
      const card=$(`.part-card[data-part="${type}"]`);card?.classList.toggle('placed',!!state.components[type]);
      const item=$(`[data-check="${type}"]`);item?.classList.toggle('done',!!state.components[type]); if(item)$('span',item).textContent=state.components[type]?'✓':'○';
    });
    const placed=requiredParts.filter(p=>state.components[p]).length;$('#placedCount').textContent=`${placed}/4 placed`;
    $('#dropGuide').classList.toggle('hidden',Object.keys(state.components).length>0);$('#ghostLayout').classList.toggle('hide',placed===4);
    const correct=validConnectionCount();$('#connectionCount').textContent=`${correct} / 8`;$('#connectionMeter').style.width=`${correct/8*100}%`;
    updateWires();updateMissionUI(placed,correct);$('#xpValue').textContent=state.xp;$('#levelValue').textContent=Math.max(1,Math.floor(state.xp/250)+1);
    const ready=circuitReady();$('#simulateBtn').disabled=!ready;$('#simulateBtn small').textContent=ready?'Power on your digital twin':'Complete the circuit first';
    if(ready){$('#benchStatus').textContent='Circuit ready to simulate';$('#consoleText').textContent='CIRCUIT CHECK: PASS\n8/8 connections correct.\nSafe to start simulation.';}
  }

  function updateMissionUI(placed,correct){
    const tabs=$$('.stage-tab');
    tabs[0].classList.toggle('complete',placed===4);tabs[1].classList.toggle('complete',correct===8&&state.connections.every(c=>c.valid));tabs[2].classList.toggle('complete',state.simulation);
    let progress=(placed/4)*25+(correct/8)*25+(state.simulation?25:0)+(storeGet('localStorage','maskido-quiz-complete')?25:0);$('#missionProgress').style.width=`${progress}%`;
    if(placed<4){$('#missionTitle').textContent='Build the team';$('#missionStars').textContent=placed>=3?'★★☆':placed>=1?'★☆☆':'☆☆☆';$('#objectiveText').textContent='Place the four required components';$('#objectiveSub').textContent='Arduino + Sensor + Servo + 5V Supply';$('#coachText').textContent=`Place ${partLabel(requiredParts.find(p=>!state.components[p])||'arduino').split(' · ')[0]} on the workbench.`;}
    else if(correct<8||state.connections.some(c=>!c.valid)){$('#missionTitle').textContent='Wire the system';$('#missionStars').textContent=correct>=6?'★★☆':correct>=3?'★☆☆':'☆☆☆';$('#objectiveText').textContent='Connect the exact pins';$('#objectiveSub').textContent='Click or drag from one pin to another';$('#coachText').textContent='Choose Wire, then drag from a coloured pin to its matching destination.';}
    else{$('#missionTitle').textContent='Ready for launch';$('#missionStars').textContent='★★★';$('#objectiveText').textContent='Run the digital twin';$('#objectiveSub').textContent='Move the hand and observe the system';$('#coachText').textContent='Perfect circuit! Start the simulation and test the open distance.';}
  }

  function checkCircuit(){
    if(!requiredParts.every(p=>state.components[p])){const missing=requiredParts.filter(p=>!state.components[p]).map(p=>partLabel(p).split(' · ')[0]);showToast(`Missing: ${missing.join(', ')}`,'bad');errorSound();return;}
    const wrong=state.connections.filter(c=>!c.valid);const missing=requiredEdges.filter(e=>!state.connections.some(c=>c.key===e));
    if(wrong.length){showToast(`${wrong.length} incorrect wire${wrong.length>1?'s':''}. Tap the red dashed wire to remove it.`,'bad');$('#consoleText').textContent=`CIRCUIT CHECK: FAILED\n${wrong.length} incorrect connection detected.\nRed dashed wires must be removed.`;errorSound();return;}
    if(missing.length){showToast(`${missing.length} connection${missing.length>1?'s':''} still missing. Use the hint button.`,'bad');$('#consoleText').textContent=`CIRCUIT CHECK: INCOMPLETE\n${validConnectionCount()}/8 correct connections.\nUse HINT for the next wire.`;tone(260,.1,'square');return;}
    showToast('Circuit perfect — 8/8!','good');$('#consoleText').textContent='CIRCUIT CHECK: PASS\nVoltage paths correct.\nSignal paths correct.\nShared ground confirmed.';if(!storeGet('sessionStorage','circuitBonus')){storeSet('sessionStorage','circuitBonus','1');addXP(100,'Circuit master bonus');}celebrate(35);addCourseProgress(6);
  }

  function showHint(){
    $$('.pin.hint').forEach(p=>p.classList.remove('hint'));
    const missing=requiredEdges.find(e=>!state.connections.some(c=>c.key===e));
    if(!missing){showToast('No hints needed — your circuit is complete!','good');return;}
    const [a,b]=missing.split('|').map(x=>x.split(':'));
    const p1=$(`.pin[data-component="${a[0]}"][data-pin="${a[1]}"]`),p2=$(`.pin[data-component="${b[0]}"][data-pin="${b[1]}"]`);
    [p1,p2].forEach(p=>p?.classList.add('hint'));showToast(`Connect ${a[0].toUpperCase()} ${a[1]} → ${b[0].toUpperCase()} ${b[1]}`);setTimeout(()=>[p1,p2].forEach(p=>p?.classList.remove('hint')),5000);
  }

  function autoPlaceNext(){
    const type=requiredParts.find(p=>!state.components[p]);if(type){const p=defaultPositions[type];placePart(type,p.x,p.y);$(`.component-node[data-type="${type}"]`)?.classList.add('hint-pulse');setTimeout(()=>$(`.component-node[data-type="${type}"]`)?.classList.remove('hint-pulse'),2500);}else showHint();
  }

  function resetLab(){
    if(!confirm('Reset all placed components and wires? Your XP will stay.'))return;
    state.components={};state.connections=[];state.wireSource=null;$$('.component-node').forEach(n=>n.remove());updateAll();saveState();showToast('Workbench reset');
  }

  function startSimulation(){
    if(!circuitReady()){checkCircuit();return;}
    state.simulation=true;$('#labLayout').hidden=true;$('#simulationStage').hidden=false;$('#challengeStage').hidden=true;setActiveStage('simulate');
    $('#simBin').classList.add('powered');updateLiveSimulation();addCourseProgress(6);if(!storeGet('sessionStorage','simBonus')){storeSet('sessionStorage','simBonus','1');addXP(100,'Digital twin activated');}window.scrollTo({top:0,behavior:'smooth'});loopAnimation();
  }

  function stopSimulation(){state.simulation=false;$('#simulationStage').hidden=true;$('#labLayout').hidden=false;setActiveStage('wire');updateAll();window.scrollTo({top:0,behavior:'smooth'});}

  function updateLiveSimulation(){
    const d=Number($('#liveDistance').value);state.distance=d;$('#liveDistanceValue').textContent=d;$('#telemetryDistance').textContent=d;
    const handRight=-155+Math.round((45-d)/43*210);$('#virtualHand').style.right=`${handRight}px`;
    if(d<=12) state.lidOpen=true; else if(d>18) state.lidOpen=false;
    $('#simBin').classList.toggle('open',state.lidOpen);const angle=state.lidOpen?90:5;$('#servoAngle').textContent=angle;
    $('#decisionText').textContent=state.lidOpen?'OPEN':'WAIT';$('#decisionState').textContent=state.lidOpen?'HAND DETECTED':'HAND IS FAR';$('#servoState').textContent=state.lidOpen?'OPEN':'CLOSED';$('#sensorState').textContent=d<=12?'OBJECT FOUND':'SCANNING';
    $('#consoleText').textContent=`Distance: ${d} cm\nDecision: ${state.lidOpen?'OPEN LID':'KEEP CLOSED'}\nServo target: ${angle}°`;
    flashLogic(state.lidOpen?'act':'sense');
    if(d===12&&!storeGet('sessionStorage','thresholdBonus')){storeSet('sessionStorage','thresholdBonus','1');addXP(50,'Open threshold discovered');}
  }

  function flashLogic(finalStep){
    const order=['sense','decide',finalStep];let i=0;
    const tick=()=>{$$('.logic-step').forEach(s=>s.classList.remove('active'));$$('[data-line]').forEach(s=>s.classList.remove('active'));const step=order[i];$(`.logic-step[data-logic="${step}"]`)?.classList.add('active');$$(`[data-line="${step}"]`).forEach(s=>s.classList.add('active'));i++;if(i<order.length)setTimeout(tick,190)};tick();
  }

  function loopAnimation(){
    if(!state.simulation)return;state.loop++;$('#loopCounter').textContent=`loop #${String(state.loop).padStart(4,'0')}`;setTimeout(loopAnimation,800);
  }

  function setActiveStage(screen){
    $$('.stage-tab').forEach(t=>t.classList.toggle('active',t.dataset.screen===screen));
  }

  function showBuild(){state.simulation=false;$('#labLayout').hidden=false;$('#simulationStage').hidden=true;$('#challengeStage').hidden=true;setActiveStage('build');}
  function showWire(){showBuild();setActiveStage('wire');setTool('wire');}
  function showChallenge(){state.simulation=false;$('#labLayout').hidden=true;$('#simulationStage').hidden=true;$('#challengeStage').hidden=false;setActiveStage('challenge');startChallenge();window.scrollTo({top:0,behavior:'smooth'});}

  const rounds=[
    {title:'Spot the eyes',subtitle:'Which component measures the distance to a hand?',type:'component',answer:'sensor'},
    {title:'Connect the trigger',subtitle:'Which signal wire tells the sensor to send an ultrasonic pulse?',type:'wire',answer:'D10→TRIG'},
    {title:'Predict the bin',subtitle:'A hand is 8 cm away. What should the lid do?',type:'predict',answer:'open'},
    {title:'Fault hunt',subtitle:'One connection can damage or confuse the system. Find it.',type:'fault',answer:'5V→GND'},
    {title:'Program the behaviour',subtitle:'Tap the events in the correct order.',type:'sequence',answer:'sense,decide,act'}
  ];

  function startChallenge(){
    state.round=0;state.score=0;state.hearts=3;state.streak=0;state.sequence=[];state.quizLocked=false;updateArena();renderRound();
  }

  function updateArena(){
    $('#heartsValue').textContent=state.hearts;$('#streakValue').textContent=state.streak;$('#quizScore').textContent=state.score;
    $$('#roundProgress span').forEach((s,i)=>{s.classList.toggle('active',i===state.round);s.classList.toggle('done',i<state.round)});
  }

  function renderRound(){
    state.quizLocked=false;state.sequence=[];updateArena();const r=rounds[state.round];const card=$('#challengeCard');
    let body='';
    if(r.type==='component') body=`<div class="visual-options"><button class="visual-option" data-answer="arduino" type="button"><span class="quiz-component arduino">🧠</span><strong>Arduino Uno</strong><small>The brain</small></button><button class="visual-option" data-answer="sensor" type="button"><span class="quiz-component sensor"><i></i><i></i></span><strong>HC-SR04</strong><small>The eyes</small></button><button class="visual-option" data-answer="servo" type="button"><span class="quiz-component servo">⚙️</span><strong>Micro Servo</strong><small>The muscle</small></button></div>`;
    if(r.type==='wire') body=`<div class="visual-options"><button class="visual-option" data-answer="D9→TRIG" type="button"><span class="mini-wire-option"><span>D9</span><i></i><span>TRIG</span></span><strong>D9 → TRIG</strong></button><button class="visual-option" data-answer="D10→TRIG" type="button"><span class="mini-wire-option"><span>D10</span><i></i><span>TRIG</span></span><strong>D10 → TRIG</strong></button><button class="visual-option" data-answer="5V→TRIG" type="button"><span class="mini-wire-option" style="--wire-color:#e5484d"><span>5V</span><i></i><span>TRIG</span></span><strong>5V → TRIG</strong></button></div>`;
    if(r.type==='predict') body=`<div class="visual-options"><button class="visual-option" data-answer="closed" type="button"><span class="prediction-visual"><span class="prediction-bin"></span><span class="prediction-hand">🤚</span></span><strong>Stay closed</strong></button><button class="visual-option" data-answer="open" type="button"><span class="prediction-visual"><span class="prediction-bin" style="--lid-angle:-52deg"></span><span class="prediction-hand" style="--hand-x:-20px">🤚</span></span><strong>Open the lid</strong></button><button class="visual-option" data-answer="reset" type="button"><span style="font-size:3rem">↻</span><strong>Restart Arduino</strong></button></div>`;
    if(r.type==='fault') body=`<div class="fault-board"><div class="fault-device">ARDUINO</div><div class="fault-wires"><button class="fault-wire" data-answer="D10→TRIG" type="button">D10 → TRIG</button><button class="fault-wire" data-answer="5V→GND" type="button">5V → GND ⚠</button><button class="fault-wire" data-answer="GND→GND" type="button">GND → GND</button></div><div class="fault-device" style="background:#178c9f">SENSOR / POWER</div></div>`;
    if(r.type==='sequence') body=`<div class="sequence-board"><button class="sequence-card" data-seq="act" type="button"><span>⚙️</span>Move servo</button><button class="sequence-card" data-seq="sense" type="button"><span>📡</span>Measure distance</button><button class="sequence-card" data-seq="decide" type="button"><span>🧠</span>Compare with 12 cm</button></div><div class="sequence-output" id="sequenceOutput">Your order: —</div>`;
    card.innerHTML=`<span class="round-badge">ROUND ${state.round+1} OF 5</span><h3>${r.title}</h3><p>${r.subtitle}</p>${body}<div class="feedback-panel" id="feedbackPanel"><span id="feedbackIcon">✓</span><div><strong id="feedbackTitle"></strong><small id="feedbackText"></small></div><button id="nextRoundBtn" type="button">Next round →</button></div>`;
    $$('[data-answer]',card).forEach(btn=>btn.addEventListener('click',()=>answerRound(btn.dataset.answer,btn)));
    $$('[data-seq]',card).forEach(btn=>btn.addEventListener('click',()=>sequenceTap(btn)));
    $('#nextRoundBtn').addEventListener('click',nextRound);
  }

  function sequenceTap(btn){
    if(state.quizLocked||btn.classList.contains('selected'))return;btn.classList.add('selected');state.sequence.push(btn.dataset.seq);$('#sequenceOutput').textContent=`Your order: ${state.sequence.map(x=>({sense:'📡 Sense',decide:'🧠 Decide',act:'⚙️ Act'})[x]).join(' → ')}`;tone(480+state.sequence.length*100,.06);if(state.sequence.length===3)answerRound(state.sequence.join(','),btn);
  }

  function answerRound(answer,btn){
    if(state.quizLocked)return;state.quizLocked=true;const correct=answer===rounds[state.round].answer;
    if(btn&&btn.classList.contains('visual-option'))btn.classList.add(correct?'correct':'wrong');
    const panel=$('#feedbackPanel');panel.classList.add('show',correct?'good':'bad');$('#feedbackIcon').textContent=correct?'✓':'×';
    if(correct){state.streak++;const gain=100+(state.streak-1)*20;state.score+=gain;$('#feedbackTitle').textContent=`Correct! +${gain} points`;$('#feedbackText').textContent=feedbackFor(state.round,true);successSound();}
    else{state.hearts=Math.max(0,state.hearts-1);state.streak=0;$('#feedbackTitle').textContent='Not quite — engineer and improve';$('#feedbackText').textContent=feedbackFor(state.round,false);errorSound();$$('[data-answer]',$('#challengeCard')).forEach(b=>{if(b.dataset.answer===rounds[state.round].answer)b.classList.add('correct')});}
    updateArena();
  }

  function feedbackFor(round,correct){
    const good=['The two silver circles transmit and receive ultrasonic sound.','D10 is the TRIG pin in this project code.','8 cm is inside the 12 cm open zone.','Never connect 5V directly to GND — that creates a short circuit.','A smart system senses first, decides second, then acts.'];
    const bad=['Look for the component with two round ultrasonic transducers.','TRIG is connected to Arduino D10; ECHO returns on D9.','Any distance at or below 12 cm opens the lid.','5V → GND is the dangerous fault. The other two are correct signal/reference paths.','The correct flow is Sense → Decide → Act.'];return correct?good[round]:bad[round];
  }

  function nextRound(){
    if(state.round<rounds.length-1){state.round++;renderRound();}else finishChallenge();
  }

  function finishChallenge(){
    storeSet('localStorage','maskido-quiz-complete','1');addCourseProgress(8);if(!storeGet('sessionStorage','quizBonus')){storeSet('sessionStorage','quizBonus','1');addXP(Math.max(150,state.score),'Challenge Arena complete');}
    celebrate(100);const stars=state.hearts===3?'★★★':state.hearts===2?'★★☆':'★☆☆';
    $('#challengeCard').innerHTML=`<div class="result-shield">🏆</div><div class="result-stars">${stars}</div><h3>Smart Systems Builder!</h3><p>You completed all five visual engineering rounds with <strong>${state.score} points</strong> and ${state.hearts} heart${state.hearts===1?'':'s'} remaining.</p><div class="result-actions"><button id="replayQuiz" type="button">Replay challenge</button><a href="index.html#mission-8">Return to course →</a></div>`;
    $('#replayQuiz').addEventListener('click',startChallenge);$$('#roundProgress span').forEach(s=>{s.classList.remove('active');s.classList.add('done')});
  }

  function bindUI(){
    $$('.part-card').forEach(card=>{
      card.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',card.dataset.part);e.dataTransfer.effectAllowed='copy';});
      card.addEventListener('click',()=>{const type=card.dataset.part;if(state.components[type]){selectNode(type);return;}const p=defaultPositions[type];placePart(type,p.x,p.y);});
    });
    const ws=$('#workspace');ws.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy'});ws.addEventListener('drop',e=>{e.preventDefault();const type=e.dataTransfer.getData('text/plain');if(!type)return;const r=ws.getBoundingClientRect(),[w,h]=partSizes[type];placePart(type,e.clientX-r.left-w/2,e.clientY-r.top-h/2)});
    $('#selectTool').addEventListener('click',()=>setTool('move'));$('#wireTool').addEventListener('click',()=>setTool('wire'));$('#hintBtn').addEventListener('click',showHint);$('#resetBtn').addEventListener('click',resetLab);$('#coachAction').addEventListener('click',autoPlaceNext);$('#checkCircuitBtn').addEventListener('click',checkCircuit);$('#simulateBtn').addEventListener('click',startSimulation);$('#stopSimBtn').addEventListener('click',stopSimulation);$('#liveDistance').addEventListener('input',updateLiveSimulation);$('#goChallengeBtn').addEventListener('click',showChallenge);
    $$('.stage-tab').forEach(tab=>tab.addEventListener('click',()=>{if(tab.dataset.screen==='build')showBuild();if(tab.dataset.screen==='wire')showWire();if(tab.dataset.screen==='simulate'){if(circuitReady())startSimulation();else{showWire();showToast('Complete the circuit before simulation','bad')}}if(tab.dataset.screen==='challenge')showChallenge();}));
    $('#soundToggle').addEventListener('click',e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?'🔊':'🔇';e.currentTarget.setAttribute('aria-pressed',String(state.sound));saveState();if(state.sound)tone(620,.08)});
    $('#launchLab').addEventListener('click',closeWelcome);$('#skipWelcome').addEventListener('click',closeWelcome);
    window.addEventListener('resize',updateWires);
  }

  function closeWelcome(){
    $('#welcomeModal').classList.add('hide');storeSet('localStorage','maskido-lab-welcome','seen');tone(520,.07);setTimeout(()=>tone(720,.09),80);
  }

  function init(){
    loadState();bindUI();Object.keys(state.components).forEach(renderComponent);updateAll();$('#soundToggle').textContent=state.sound?'🔊':'🔇';
    if(storeGet('localStorage','maskido-lab-welcome')==='seen')$('#welcomeModal').classList.add('hide');
    if(location.hash==='#challenge')showChallenge();else if(location.hash==='#simulate'&&circuitReady())startSimulation();
  }

  init();
})();
