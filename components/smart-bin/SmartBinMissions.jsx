"use client";
import React, { useState, useEffect } from 'react';

export default function SmartBinMissions() {
  const [completed, setCompleted] = useState(new Set());
  const [demoDistance, setDemoDistance] = useState(25);
  const [demoAngle, setDemoAngle] = useState(0);
  const [safetyChecked, setSafetyChecked] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
      if (Array.isArray(stored)) {
        setCompleted(new Set(stored));
      }
    } catch {}
  }, []);

  const saveProgress = (newCompleted) => {
    setCompleted(newCompleted);
    try {
      window.localStorage.setItem('maskido-smart-bin-progress-v1', JSON.stringify([...newCompleted]));
    } catch {}
  };

  const markComplete = (n) => {
    const next = new Set(completed);
    next.add(n);
    saveProgress(next);
  };

  const isDone = (n) => completed.has(n);

  return (
    <article className="min-w-0">
      {/* MISSION 1 */}
      <section className="section" id="mission-1" data-module="1">
        <div className="section-head">
          <div className="section-number">01</div>
          <div><span className="lesson-kicker">Mission briefing</span><h2>The Challenge</h2><p>Find the problem, understand the goal, and meet your invention.</p></div>
        </div>

        <div className="story-panel">
          <div className="story-copy">
            <h3>Problem spotted!</h3>
            <p>People often touch waste-bin lids with dirty hands. What if a bin could notice a hand and open before anyone touches it?</p>
            <p><strong>Your mission:</strong> build a touch-free smart trash bin that detects a hand, opens its lid, waits, and closes safely.</p>
          </div>
          <div className="story-visual">
            <div className="logic-flow" aria-label="Sensor, Arduino and servo workflow">
              <div className="logic-node"><span className="big">👀</span><strong>Eyes</strong><small>Sensor detects</small></div>
              <span className="logic-arrow">→</span>
              <div className="logic-node"><span className="big">🧠</span><strong>Brain</strong><small>Arduino decides</small></div>
              <span className="logic-arrow">→</span>
              <div className="logic-node"><span className="big">💪</span><strong>Muscle</strong><small>Servo moves</small></div>
            </div>
          </div>
        </div>

        <h3>By the end of this project, you will be able to:</h3>
        <div className="objective-grid">
          <div className="info-card"><div className="icon">📡</div><h3>Measure distance</h3><p>Use an ultrasonic sensor to detect nearby objects.</p></div>
          <div className="info-card"><div className="icon">💻</div><h3>Write control code</h3><p>Teach an Arduino when to open and close the lid.</p></div>
          <div className="info-card"><div className="icon">🛠️</div><h3>Build a prototype</h3><p>Turn electronics and foam board into a finished product.</p></div>
        </div>

        <div className="callout tech"><strong>Engineer’s question</strong>How can the bin tell the difference between a hand that is close and an object that is far away?</div>
        <div className="complete-row">
          <span>Say your own answer before moving on.</span>
          <button className={`complete-btn ${isDone(1) ? 'done' : ''}`} onClick={() => markComplete(1)} type="button">
            {isDone(1) ? 'Mission 01 completed ✓' : 'Mark Mission 01 complete'}
          </button>
        </div>
      </section>

      {/* MISSION 2 */}
      <section className="section" id="mission-2" data-module="2">
        <div className="section-head">
          <div className="section-number">02</div>
          <div><span className="lesson-kicker">Know your tools</span><h2>Meet the Invention Team</h2><p>Every component has one clear job. Tap each card to reveal it.</p></div>
        </div>

        <div className="component-grid">
          <ComponentCard icon="🧠" title="Arduino Uno" subtitle="The brain" 
            desc={<><strong>What it is:</strong> a microcontroller board - a tiny programmable computer.<br/><strong>Its job:</strong> read the sensor, make a decision, and command the servo.<br/><strong>Handle carefully:</strong> hold it by the edges and keep metal objects away from its underside.</>} />
          <ComponentCard icon="📡" title="HC-SR04 Sensor" subtitle="The eyes" 
            desc={<><strong>What it is:</strong> an ultrasonic distance sensor.<br/><strong>Its job:</strong> send a high-frequency sound pulse and time the returning echo.<br/><strong>Pins:</strong> VCC, TRIG, ECHO and GND.</>} />
          <ComponentCard icon="💪" title="SG90 Micro Servo" subtitle="The muscle" 
            desc={<><strong>What it is:</strong> a position-controlled motor.<br/><strong>Its job:</strong> rotate the lid to a chosen angle.<br/><strong>Wires:</strong> brown/black = GND, red = 5V, orange/yellow = signal.</>} />
          <ComponentCard icon="⚡" title="Approved 5V Power Module" subtitle="The energy source" 
            desc={<><strong>What it is:</strong> a regulated 5V supply rated for at least 2A.<br/><strong>Its job:</strong> provide stable energy without overloading the Arduino.<br/><strong>Important:</strong> use only the protected supply included or approved by your instructor.</>} />
          <ComponentCard icon="🔗" title="Jumper Wires + Breadboard" subtitle="The communication lines" 
            desc={<><strong>What they do:</strong> carry power and signals between the parts.<br/><strong>Best practice:</strong> red for 5V, black/brown for GND, and other colours for signals.</>} />
          <ComponentCard icon="📐" title="5 mm Foam Board" subtitle="The body" 
            desc={<><strong>What it is:</strong> a lightweight sheet material for prototyping.<br/><strong>Its job:</strong> form the bin body, top deck, lid and electronics tray.<br/><strong>Alternative:</strong> strong cardboard can be used for a low-cost prototype.</>} />
        </div>

        <div className="callout"><strong>Notice the upgrade</strong>This design does not use an L298N motor driver. A motor driver is made for controlling DC motors and is unnecessary for this lightweight servo project.</div>
        <div className="complete-row">
          <span>Quick check: Which component makes the decision?</span>
          <button className={`complete-btn ${isDone(2) ? 'done' : ''}`} onClick={() => markComplete(2)} type="button">
            {isDone(2) ? 'Mission 02 completed ✓' : 'Mark Mission 02 complete'}
          </button>
        </div>
      </section>

      {/* MISSION 3 */}
      <section className="section" id="mission-3" data-module="3">
        <div className="section-head">
          <div className="section-number">03</div>
          <div><span className="lesson-kicker">Before you build</span><h2>Pass the Safety Gate</h2><p>A real engineer protects people, tools, and equipment.</p></div>
        </div>

        <div className="callout safety"><strong>Adult-supervision zone</strong>A responsible adult must handle the craft knife, hot-glue gun, mains adapter, and any drilling or cutting. Never use loose or damaged lithium cells.</div>

        <div className="check-list" id="safetyChecklist">
          {[
            ['Clear workspace', 'No drinks, metal scraps, or loose wires near the circuit.'],
            ['Power off before rewiring', 'I will disconnect power before moving any wire.'],
            ['Correct polarity', 'I will check 5V and GND twice before switching on.'],
            ['Protected power only', 'I will use the approved regulated 5V supply - not loose cells.'],
            ['Adult handles sharp and hot tools', 'I will ask for help with cutting and hot glue.'],
            ['Keep fingers clear', 'I will not place my fingers in the servo linkage while it is powered.']
          ].map((item, i) => (
            <label key={i} className="check-item">
              <input type="checkbox" onChange={(e) => setSafetyChecked(prev => prev + (e.target.checked ? 1 : -1))} />
              <span><strong>{item[0]}</strong>{item[1]}</span>
            </label>
          ))}
        </div>

        <div className="checkpoint"><div className="badge">✓</div><div><h3>Safety unlock</h3><p>Tick all six boxes. The completion button will unlock when you are ready.</p></div></div>
        <div className="complete-row">
          <span id="safetyStatus">{safetyChecked} of 6 safety promises confirmed.</span>
          <button className={`complete-btn ${isDone(3) ? 'done' : ''}`} onClick={() => markComplete(3)} type="button" disabled={safetyChecked < 6 && !isDone(3)}>
            {isDone(3) ? 'Mission 03 completed ✓' : 'Complete Safety Gate'}
          </button>
        </div>
      </section>

      {/* MISSION 4 */}
      <section className="section" id="mission-4" data-module="4">
        <div className="section-head">
          <div className="section-number">04</div>
          <div><span className="lesson-kicker">Experiment first</span><h2>Sensor Lab: How Far Is the Hand?</h2><p>Test the eyes before connecting the muscle.</p></div>
        </div>

        <div className="lab">
          <div className="lab-grid">
            <div><h3>Move the virtual hand</h3><p>The sensor sends an ultrasonic pulse. The pulse bounces from the hand and returns as an echo. A shorter journey means the hand is closer.</p><p><strong>Opening rule:</strong> 12 cm or closer.</p></div>
            <div className="meter">
              <div className="meter-label"><span>Hand distance</span><span><b>{demoDistance}</b> cm</span></div>
              <input type="range" min="4" max="45" value={demoDistance} onChange={(e) => setDemoDistance(e.target.value)} aria-label="Virtual hand distance" />
              <div className={`status-chip ${demoDistance > 12 ? 'closed' : ''}`}>{demoDistance <= 12 ? 'Lid opens' : 'Lid stays closed'}</div>
            </div>
          </div>
        </div>

        <h3>Sensor-only wiring</h3>
        <div className="table-wrap"><table><thead><tr><th>From</th><th>To Arduino</th><th>Suggested wire</th><th>Purpose</th></tr></thead><tbody>
          <tr><td>HC-SR04 VCC</td><td>5V</td><td><span className="wire-chip" style={{'--wire':'#E5484D'}}>Red</span></td><td>Powers the sensor</td></tr>
          <tr><td>HC-SR04 GND</td><td>GND</td><td><span className="wire-chip" style={{'--wire':'#1D2733'}}>Black</span></td><td>Common ground</td></tr>
          <tr><td>HC-SR04 TRIG</td><td>D10</td><td><span className="wire-chip" style={{'--wire':'#F0B429'}}>Yellow</span></td><td>Sends the sound pulse</td></tr>
          <tr><td>HC-SR04 ECHO</td><td>D9</td><td><span className="wire-chip" style={{'--wire':'#00B8D9'}}>Blue</span></td><td>Returns the echo timing</td></tr>
        </tbody></table></div>

        <div className="callout tech"><strong>Mini experiment</strong>Open the Serial Monitor at 9600 baud. Move your hand from 30 cm to 5 cm. Record five readings in your workbook. Are the numbers perfectly steady? Why might they change?</div>
        <div className="checkpoint"><div className="badge">🔎</div><div><h3>Checkpoint</h3><p>The sensor should show sensible distance values before you connect the servo.</p></div></div>
        <div className="complete-row"><span>Record at least five distance readings.</span><button className={`complete-btn ${isDone(4) ? 'done' : ''}`} onClick={() => markComplete(4)} type="button">{isDone(4) ? 'Mission 04 completed ✓' : 'Mark Mission 04 complete'}</button></div>
      </section>

      {/* MISSIONS 5-8 */}
      <section className="section" id="mission-5" data-module="5">
        <div className="section-head">
          <div className="section-number">05</div>
          <div><span className="lesson-kicker">Movement test</span><h2>Servo Lab: Teach the Lid to Move</h2><p>Calibrate the muscle before attaching it to the bin.</p></div>
        </div>

        <div className="lab">
          <div className="lab-grid">
            <div><h3>Choose a servo angle</h3><p>A servo moves to an angle instead of continuously spinning. Start small. Never force the servo horn past its natural limit.</p></div>
            <div className="meter">
              <div className="meter-label"><span>Servo angle</span><span><b>{demoAngle}</b>°</span></div>
              <input type="range" min="0" max="110" value={demoAngle} onChange={(e) => setDemoAngle(e.target.value)} aria-label="Servo angle simulator" />
              <div className={`status-chip ${demoAngle < 20 ? 'closed' : ''}`}>{demoAngle < 20 ? 'Closed position' : demoAngle < 70 ? 'Opening...' : 'Open position'}</div>
            </div>
          </div>
        </div>

        <h3>Servo wiring</h3>
        <div className="table-wrap"><table><thead><tr><th>Servo wire</th><th>Connect to</th><th>Reason</th></tr></thead><tbody>
          <tr><td>Signal - orange/yellow</td><td>Arduino D11</td><td>Position command from the Arduino</td></tr>
          <tr><td>Power - red</td><td>Approved external 5V rail</td><td>Stable servo power</td></tr>
          <tr><td>Ground - brown/black</td><td>External GND rail</td><td>Return path</td></tr>
          <tr><td>Arduino GND</td><td>The same external GND rail</td><td>Creates one shared electrical reference</td></tr>
        </tbody></table></div>

        <div className="callout safety"><strong>Do not skip the shared ground</strong>The servo signal may behave unpredictably unless the Arduino and the external 5V servo supply share GND.</div>
        <div className="callout success"><strong>Calibration target</strong>Find one angle that closes the lid without pushing hard and another that opens it wide enough. Write both values in the workbook.</div>
        <div className="complete-row"><span>My closed and open angles are recorded.</span><button className={`complete-btn ${isDone(5) ? 'done' : ''}`} onClick={() => markComplete(5)} type="button">{isDone(5) ? 'Mission 05 completed ✓' : 'Mark Mission 05 complete'}</button></div>
      </section>

      <section className="section" id="mission-6" data-module="6">
        <div className="section-head">
          <div className="section-number">06</div>
          <div><span className="lesson-kicker">Bring it to life</span><h2>Connect, Upload and Test</h2><p>Combine the eyes, brain and muscle into one reliable system.</p></div>
        </div>

        <div className="live-lab-launch">
          <div className="lab-launch-copy">
            <span className="lesson-kicker">Maskido Live Lab · Interactive</span>
            <h3>Build it before you touch it.</h3>
            <p>Drag the Arduino, sensor, servo and 5V supply onto a digital workbench. Draw wires between exact pins, run a safety check, then move a virtual hand and watch the smart-bin lid respond live.</p>
            <div className="lab-feature-row"><span>🧩 Drag components</span><span>〰 Wire exact pins</span><span>▶ Run simulation</span><span>🏆 Earn XP</span></div>
            <a className="btn primary lab-launch-button" href="/lab">Launch the Live Invention Lab →</a>
          </div>
          <div className="lab-launch-visual" aria-hidden="true">
            <div className="mini-workbench">
              <div className="mini-board">ARDUINO<i></i><i></i><i></i></div>
              <div className="mini-sensor"><i></i><i></i></div>
              <div className="mini-servo">⚙</div>
              <svg viewBox="0 0 400 220"><path d="M110 130 C180 20 225 55 290 72" fill="none" stroke="#F1A400" strokeWidth="4"/><path d="M110 150 C190 210 250 160 304 158" fill="none" stroke="#00B8D9" strokeWidth="4"/><path d="M290 98 C330 110 330 140 304 154" fill="none" stroke="#E5484D" strokeWidth="4"/></svg>
              <div className="mini-hand">🤚</div>
            </div>
          </div>
        </div>

        <div className="visual-flow-strip">
          <div><span>1</span><b>BUILD</b><small>Place the parts</small></div><i>→</i>
          <div><span>2</span><b>WIRE</b><small>Connect the pins</small></div><i>→</i>
          <div><span>3</span><b>SIMULATE</b><small>Move the hand</small></div><i>→</i>
          <div><span>4</span><b>CHALLENGE</b><small>Win your badge</small></div>
        </div>

        <details className="reference-drawer">
          <summary><span>📘</span><div><strong>Open technical reference</strong><small>Connection map, Arduino code and power notes</small></div><b>＋</b></summary>
          <div className="reference-inner">
            <h3>Final connection map</h3>
            <div className="table-wrap"><table><thead><tr><th>Component</th><th>Pin / wire</th><th>Connect to</th><th>Check</th></tr></thead><tbody>
              <tr><td>Ultrasonic sensor</td><td>VCC / GND</td><td>Arduino 5V / GND</td><td>Power pins are not reversed</td></tr>
              <tr><td>Ultrasonic sensor</td><td>TRIG / ECHO</td><td>D10 / D9</td><td>Signal pins match the code</td></tr>
              <tr><td>Servo</td><td>Signal</td><td>D11</td><td>Orange/yellow wire only</td></tr>
              <tr><td>Servo</td><td>5V / GND</td><td>Approved external 5V / GND</td><td>Do not power a loaded servo from Arduino 5V</td></tr>
              <tr><td>Shared reference</td><td>Arduino GND</td><td>External supply GND</td><td>Both systems share ground</td></tr>
            </tbody></table></div>

            <div className="callout"><strong>Power-on sequence</strong>1) Check every connection. 2) Keep the lid linkage disconnected. 3) Upload the code. 4) Power the servo supply. 5) Test with your hand. 6) Disconnect power before attaching the linkage.</div>

            <div className="code-wrap">
              <div className="code-head"><span>smart_trash_bin.ino · robust beginner version</span><span className="code-actions"><button id="copyCode" type="button">Copy code</button><a href="/downloads/smart_trash_bin.ino" download>Download .ino</a></span></div>
<pre id="codeBlock"><code>{`#include <Servo.h>

const byte TRIG_PIN = 10;
const byte ECHO_PIN = 9;
const byte SERVO_PIN = 11;

const int OPEN_DISTANCE_CM = 12;
const int CLOSE_DISTANCE_CM = 18;
const int CLOSED_ANGLE = 5;
const int OPEN_ANGLE = 90;

const unsigned long HOLD_OPEN_MS = 1800;
const unsigned long SERVO_STEP_MS = 15;
const unsigned long PRINT_MS = 200;

Servo lidServo;
int currentAngle = CLOSED_ANGLE;
int targetAngle = CLOSED_ANGLE;
unsigned long lastHandSeen = 0;
unsigned long lastServoStep = 0;
unsigned long lastPrint = 0;

int readDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long duration = pulseIn(ECHO_PIN, HIGH, 30000UL);
  if (duration == 0) return -1;
  return (int)(duration * 0.0343 / 2.0);
}

void moveServoSmoothly() {
  if (millis() - lastServoStep < SERVO_STEP_MS) return;
  lastServoStep = millis();

  if (currentAngle < targetAngle) currentAngle++;
  if (currentAngle > targetAngle) currentAngle--;
  lidServo.write(currentAngle);
}

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);

  lidServo.attach(SERVO_PIN);
  lidServo.write(CLOSED_ANGLE);
}

void loop() {
  int distance = readDistanceCm();

  if (distance > 0 && distance <= OPEN_DISTANCE_CM) {
    lastHandSeen = millis();
    targetAngle = OPEN_ANGLE;
  }

  if (distance > CLOSE_DISTANCE_CM &&
      millis() - lastHandSeen > HOLD_OPEN_MS) {
    targetAngle = CLOSED_ANGLE;
  }

  if (distance == -1 &&
      millis() - lastHandSeen > HOLD_OPEN_MS) {
    targetAngle = CLOSED_ANGLE;
  }

  moveServoSmoothly();

  if (millis() - lastPrint >= PRINT_MS) {
    lastPrint = millis();
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.print(" cm | Target angle: ");
    Serial.println(targetAngle);
  }
}`}</code></pre>
            </div>
            <div className="callout tech"><strong>How the finished bin is powered</strong>During coding, the Arduino can stay connected by USB while the servo uses the approved external 5V supply. For the finished bin, use the kit's protected 5V, 2A supply: power the Arduino through its USB connector, power the servo from the regulated 5V output, and keep both grounds connected. Never connect a regulated 5V output to VIN.</div>
          </div>
        </details>

        <div className="checkpoint"><div className="badge">⚙</div><div><h3>Bench-test checkpoint</h3><p>The servo should open when your hand is within 12 cm, remain open briefly, and close only after the hand moves beyond 18 cm.</p></div></div>
        <div className="complete-row"><span>The circuit passes the bench test.</span><button className={`complete-btn ${isDone(6) ? 'done' : ''}`} onClick={() => markComplete(6)} type="button">{isDone(6) ? 'Mission 06 completed ✓' : 'Mark Mission 06 complete'}</button></div>
      </section>

      <section className="section" id="mission-7" data-module="7">
        <div className="section-head">
          <div className="section-number">07</div>
          <div><span className="lesson-kicker">Prototype studio</span><h2>Build the Bin Body</h2><p>Measure twice, cut once, and leave room for repairs.</p></div>
        </div>

        <div className="blueprint">
          <div className="blueprint-grid">
            <div className="piece"><span className="qty">x2</span><div><strong>Front + Back</strong><span>22 × 34 cm</span><small>5 mm foam board</small></div></div>
            <div className="piece"><span className="qty">x2</span><div><strong>Left + Right</strong><span>22 × 34 cm</span><small>5 mm foam board</small></div></div>
            <div className="piece"><span className="qty">x1</span><div><strong>Base</strong><span>22 × 22 cm</span><small>Glue inside the walls</small></div></div>
            <div className="piece"><span className="qty">x1</span><div><strong>Top Deck</strong><span>22 × 22 cm</span><small>14 × 14 cm opening</small></div></div>
            <div className="piece"><span className="qty">x1</span><div><strong>Lid</strong><span>13.5 × 13.5 cm</span><small>Allows movement clearance</small></div></div>
            <div className="piece"><span className="qty">x1</span><div><strong>Electronics Tray</strong><span>18 × 8 cm</span><small>Removable for maintenance</small></div></div>
          </div>
        </div>

        <div className="callout safety"><strong>Cutting rule</strong>An adult should cut the foam board on a cutting mat using a metal ruler. Keep fingers behind the ruler and away from the blade path.</div>

        <div className="steps">
          <div className="step"><h3>Label every panel</h3><p>Write FRONT, BACK, LEFT, RIGHT, BASE and TOP lightly in pencil on the inside surfaces.</p></div>
          <div className="step"><h3>Cut the lid opening</h3><p>Mark a centred 14 × 14 cm square in the top deck. Keep the 13.5 × 13.5 cm lid separate.</p></div>
          <div className="step"><h3>Make the sensor window</h3><p>Create two neat 16 mm circular openings near the front edge of the top deck. Confirm the holes fit the sensor before gluing.</p></div>
          <div className="step"><h3>Build the box square</h3><p>Attach the four walls around the base. Use a set square or book corner to keep each wall at 90°.</p></div>
          <div className="step"><h3>Create an access panel</h3><p>Do not permanently seal the back-bottom electronics area. Use hook-and-loop tape or removable tabs.</p></div>
          <div className="step"><h3>Finish before mounting</h3><p>Cover rough edges with paper tape, add the Maskido label, and keep all ventilation and access openings clear.</p></div>
        </div>

        <div className="checkpoint"><div className="badge">📐</div><div><h3>Quality check</h3><p>The bin stands upright, the lid moves freely, and the electronics tray can be removed without breaking the body.</p></div></div>
        <div className="complete-row"><span>The body passes the quality check.</span><button className={`complete-btn ${isDone(7) ? 'done' : ''}`} onClick={() => markComplete(7)} type="button">{isDone(7) ? 'Mission 07 completed ✓' : 'Mark Mission 07 complete'}</button></div>
      </section>

      <section className="section" id="mission-8" data-module="8">
        <div className="section-head">
          <div className="section-number">08</div>
          <div><span className="lesson-kicker">Final challenge</span><h2>Install, Test and Level Up</h2><p>Turn a working circuit into a finished invention.</p></div>
        </div>

        <div className="steps">
          <div className="step"><h3>Mount the sensor</h3><p>Push the two sensor “eyes” through the top deck. Secure the board underneath without covering any pin labels.</p></div>
          <div className="step"><h3>Mount the servo</h3><p>Fix the servo underneath the top deck near the rear edge of the lid. Keep the rotating horn clear of foam and wires.</p></div>
          <div className="step"><h3>Add the hinge and linkage</h3><p>Tape-hinge the lid at the back. Connect the servo horn to the lid using a light linkage. The servo should guide - not force - the lid.</p></div>
          <div className="step"><h3>Secure the electronics</h3><p>Use removable mounting tape or small cable ties on the electronics tray. Do not glue directly over solder joints or ports.</p></div>
          <div className="step"><h3>Manage every wire</h3><p>Keep wires away from the servo arm and waste area. Bundle them neatly and leave enough slack for maintenance.</p></div>
          <div className="step"><h3>Run the final test</h3><p>Complete 10 open-close cycles. Watch for shaking, resets, weak movement, stuck lids or false detections.</p></div>
        </div>

        <h3>Troubleshooting station</h3>
        <div className="table-wrap"><table><thead><tr><th>What you notice</th><th>Most likely cause</th><th>Try this</th></tr></thead><tbody>
          <tr><td>Distance always reads -1</td><td>No echo or wrong TRIG/ECHO wiring</td><td>Check D10 and D9, power, and whether the sensor faces open space</td></tr>
          <tr><td>Servo shakes or Arduino restarts</td><td>Weak or unstable servo power</td><td>Use the approved 5V 2A supply and confirm shared ground</td></tr>
          <tr><td>Lid opens in the wrong direction</td><td>Servo angle or horn position is reversed</td><td>Reposition the horn with power off or swap the open/closed angle values</td></tr>
          <tr><td>Lid does not close</td><td>Hand remains inside the close zone or linkage is tight</td><td>Move the hand beyond 18 cm and reduce friction</td></tr>
          <tr><td>Random opening</td><td>Reflections, loose wires or noisy readings</td><td>Tighten connections, aim the sensor forward, and keep moving parts away from it</td></tr>
        </tbody></table></div>

        <h3>Final knowledge challenge</h3>
        <div className="quiz-arena-launch">
          <div className="arena-copy">
            <span className="lesson-kicker">Visual Challenge Arena</span>
            <h3>No boring exam. Five engineering missions.</h3>
            <p>Spot components, repair a broken circuit, predict the lid movement and arrange the system logic. Instant feedback, hearts, streaks and XP make every answer feel like a game.</p>
            <div className="arena-chips"><span>❤️ 3 lives</span><span>🔥 Streak bonus</span><span>⭐ Live score</span><span>🏆 Builder badge</span></div>
            <a className="btn primary" href="/lab#challenge">Enter Challenge Arena →</a>
          </div>
          <div className="arena-preview" aria-hidden="true">
            <span className="arena-round">ROUND 3/5</span>
            <strong>A hand is 8 cm away.</strong>
            <small>What should the smart bin do?</small>
            <div className="arena-options"><i>Stay closed</i><i className="chosen">Open lid ✓</i><i>Restart</i></div>
            <div className="arena-score"><span>❤️❤️❤️</span><b>+100 XP</b></div>
          </div>
        </div>

        <h3>Choose your level-up challenge</h3>
        <div className="challenge-grid">
          <div className="info-card"><div className="icon">💡</div><h3>Level 1: Status light</h3><p>Add a green LED when ready and an orange LED while the lid is moving.</p></div>
          <div className="info-card"><div className="icon">🔊</div><h3>Level 2: Friendly sound</h3><p>Add a short buzzer tone after the lid closes.</p></div>
          <div className="info-card"><div className="icon">📊</div><h3>Level 3: Fill monitor</h3><p>Add a second sensor inside to estimate when the bin is full.</p></div>
        </div>

        <div className="achievement-card">
          <img src="/assets/builder_badge.png" alt="Smart Systems Builder project badge" />
          <div><span className="lesson-kicker">Project reward</span><h3>Earn the Smart Systems Builder Badge</h3><p>Complete all eight missions, score at least 6/8 in the knowledge challenge, submit your evidence, and pass the instructor's safety and function review.</p><small>The printable certificate template is included in the instructor pack.</small></div>
        </div>

        <div className="callout success"><strong>Final submission</strong>Upload one clear photo and a 30-second video showing: hand approaches → lid opens → waste is dropped → hand moves away → lid closes. Explain one problem you solved during the build.</div>
        <div className="complete-row"><span>Submit your evidence and earn the Smart Systems Builder badge.</span><button className={`complete-btn ${isDone(8) ? 'done' : ''}`} onClick={() => markComplete(8)} type="button">{isDone(8) ? 'Project completed ✓' : 'Complete the project'}</button></div>
      </section>
    </article>
  );
}

function ComponentCard({ icon, title, subtitle, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`component ${open ? 'open' : ''}`}>
      <button type="button" onClick={() => setOpen(!open)}>
        <span className="component-icon">{icon}</span>
        <span><h3>{title}</h3><small>{subtitle}</small></span>
        <span className="toggle">＋</span>
      </button>
      <div className="detail">{desc}</div>
    </article>
  );
}
