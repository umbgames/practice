"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SmartGateMissions() {
  const [completed, setCompleted] = useState(new Set());
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem('maskido-smart-gate-progress-v1') || '[]');
      if (Array.isArray(stored)) {
        setCompleted(new Set(stored));
      }
    } catch {}
  }, []);

  const markComplete = (id) => {
    const next = new Set(completed);
    next.add(id);
    setCompleted(next);
    try {
      window.localStorage.setItem('maskido-smart-gate-progress-v1', JSON.stringify([...next]));
    } catch {}
  };

  return (
    <div className="course">
      {/* MISSION 1 */}
      <section id="mission-1" className="section">
        <div className="section-head">
          <div className="section-number">01</div>
          <div>
            <span className="lesson-kicker">MISSION 01</span>
            <h2>The Gate Challenge</h2>
            <p>Welcome to your first smart systems project.</p>
          </div>
        </div>
        
        <div className="story-panel">
          <div className="story-copy">
            <h3>We have a problem</h3>
            <p>
              Security guards have to manually open the boom gate every time a car arrives. 
              This is slow, especially when it rains!
            </p>
            <p>
              Your mission is to build an <strong>Automatic Smart Gate</strong> that senses when a vehicle is nearby, 
              turns on a green light, and automatically opens the boom barrier.
            </p>
          </div>
          <div className="story-visual bg-gradient-to-br from-[#1b3f66] to-[#0A2547] text-white">
            <div className="text-center">
              <span className="text-[4rem] block mb-2">🚧</span>
              <strong>Manual Gates are slow!</strong>
            </div>
          </div>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 10 XP</strong><br/><small className="text-[var(--muted)]">Mission accomplished</small></div>
          </div>
          <button onClick={() => markComplete(1)} className={`complete-btn ${completed.has(1) ? 'done' : ''}`}>
            {completed.has(1) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 2 */}
      <section id="mission-2" className="section">
        <div className="section-head">
          <div className="section-number">02</div>
          <div>
            <span className="lesson-kicker">MISSION 02</span>
            <h2>Meet the Components</h2>
            <p>What do we need to build a smart gate?</p>
          </div>
        </div>

        <div className="component-grid">
          <ComponentCard icon="💻" title="Arduino Uno" subtitle="The brain" 
            desc={<><strong>What it is:</strong> a microcontroller board - a tiny programmable computer.<br/><strong>Its job:</strong> read the sensor, make a decision, and command the servo, LED, and buzzer.<br/><strong>Handle carefully:</strong> hold it by the edges and keep metal objects away from its underside.</>} />
          <ComponentCard icon="👀" title="HC-SR04 Sensor" subtitle="The eyes" 
            desc={<><strong>What it is:</strong> an ultrasonic distance sensor.<br/><strong>Its job:</strong> send a high-frequency sound pulse and time the returning echo to detect a vehicle.<br/><strong>Pins:</strong> VCC, TRIG, ECHO and GND.</>} />
          <ComponentCard icon="🦾" title="SG90 Micro Servo" subtitle="The muscle" 
            desc={<><strong>What it is:</strong> a position-controlled motor.<br/><strong>Its job:</strong> rotate the boom arm to open and close the gate.<br/><strong>Wires:</strong> brown/black = GND, red = 5V, orange/yellow = signal.</>} />
          <ComponentCard icon="🚦" title="LED Traffic Light" subtitle="The indicator" 
            desc={<><strong>What it is:</strong> a dual-color (Red/Green) Light Emitting Diode module.<br/><strong>Its job:</strong> show a red light when the gate is closed (stop) and green when it is open (go).<br/><strong>Wires:</strong> R = red signal, G = green signal, GND = ground.</>} />
          <ComponentCard icon="🔔" title="Buzzer" subtitle="The alarm" 
            desc={<><strong>What it is:</strong> an active piezo buzzer.<br/><strong>Its job:</strong> emit an alert sound while the gate is opening or closing to warn pedestrians and drivers.<br/><strong>Wires:</strong> (+) goes to the Arduino signal pin, (-) goes to GND.</>} />
          <ComponentCard icon="🔌" title="Jumper Wires + Breadboard" subtitle="The nerves" 
            desc={<><strong>What they do:</strong> carry power and signals between the parts.<br/><strong>Best practice:</strong> red for 5V, black for GND, and other colors for signals.</>} />
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 20 XP</strong><br/><small className="text-[var(--muted)]">Hardware recognized</small></div>
          </div>
          <button onClick={() => markComplete(2)} className={`complete-btn ${completed.has(2) ? 'done' : ''}`}>
            {completed.has(2) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 3 */}
      <section id="mission-3" className="section">
        <div className="section-head">
          <div className="section-number">03</div>
          <div>
            <span className="lesson-kicker">MISSION 03</span>
            <h2>Breadboard Basics</h2>
            <p>Distribute power across your circuit safely.</p>
          </div>
        </div>

        <div className="blueprint">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[var(--ink)] text-white w-8 h-8 rounded-full grid place-items-center font-bold">1</span>
            <strong>Power Rails Setup</strong>
          </div>
          <p className="text-[0.9rem] mb-4">
            A breadboard lets us connect multiple components together without soldering. 
            Connect the Arduino's 5V and GND to the breadboard's power rails.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>From (Arduino)</th>
                  <th>Wire Color</th>
                  <th>To (Breadboard)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>5V</strong> pin</td>
                  <td><span className="wire-chip" style={{'--wire':'#e5484d'}}>Red Wire</span></td>
                  <td><strong>+ (Red Rail)</strong></td>
                </tr>
                <tr>
                  <td><strong>GND</strong> pin</td>
                  <td><span className="wire-chip" style={{'--wire':'#111'}}>Black Wire</span></td>
                  <td><strong>- (Blue Rail)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 20 XP</strong><br/><small className="text-[var(--muted)]">Power connected</small></div>
          </div>
          <button onClick={() => markComplete(3)} className={`complete-btn ${completed.has(3) ? 'done' : ''}`}>
            {completed.has(3) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 4 */}
      <section id="mission-4" className="section">
        <div className="section-head">
          <div className="section-number">04</div>
          <div>
            <span className="lesson-kicker">MISSION 04</span>
            <h2>Ultrasonic Vision</h2>
            <p>Connect the sensor that detects approaching cars.</p>
          </div>
        </div>

        <div className="callout tech">
          <strong>How does the ultrasonic sensor work?</strong>
          It sends out high-frequency sound waves (Trigger) and waits for the echo (Echo). By timing how long the echo takes, it calculates the distance!
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>HC-SR04 Pin</th>
                <th>Wire Color</th>
                <th>Arduino / Breadboard Pin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>VCC</strong> (Power)</td>
                <td><span className="wire-chip" style={{'--wire':'#e5484d'}}>Red</span></td>
                <td>Breadboard <strong>+ Rail</strong></td>
              </tr>
              <tr>
                <td><strong>GND</strong> (Ground)</td>
                <td><span className="wire-chip" style={{'--wire':'#111'}}>Black</span></td>
                <td>Breadboard <strong>- Rail</strong></td>
              </tr>
              <tr>
                <td><strong>TRIG</strong> (Shout)</td>
                <td><span className="wire-chip" style={{'--wire':'#f3a000'}}>Yellow</span></td>
                <td>Arduino Pin <strong>9</strong></td>
              </tr>
              <tr>
                <td><strong>ECHO</strong> (Listen)</td>
                <td><span className="wire-chip" style={{'--wire':'#00b8d9'}}>Cyan</span></td>
                <td>Arduino Pin <strong>10</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 30 XP</strong><br/><small className="text-[var(--muted)]">Sensor wired</small></div>
          </div>
          <button onClick={() => markComplete(4)} className={`complete-btn ${completed.has(4) ? 'done' : ''}`}>
            {completed.has(4) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 5 */}
      <section id="mission-5" className="section">
        <div className="section-head">
          <div className="section-number">05</div>
          <div>
            <span className="lesson-kicker">MISSION 05</span>
            <h2>Servo & LED Setup</h2>
            <p>Wire the boom gate muscle and traffic light indicators.</p>
          </div>
        </div>

        <div className="table-wrap mb-6">
          <table>
            <thead>
              <tr>
                <th>Servo Motor Wire</th>
                <th>Wire Color</th>
                <th>Arduino / Breadboard Pin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Brown / Black</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#111'}}>Black</span></td>
                <td>Breadboard <strong>- Rail</strong></td>
              </tr>
              <tr>
                <td><strong>Red</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#e5484d'}}>Red</span></td>
                <td>Breadboard <strong>+ Rail</strong></td>
              </tr>
              <tr>
                <td><strong>Orange / Yellow</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#f3a000'}}>Yellow</span></td>
                <td>Arduino Pin <strong>3</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>LED / Buzzer Pin</th>
                <th>Wire Color</th>
                <th>Arduino / Breadboard Pin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Red LED (+)</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#e5484d'}}>Red</span></td>
                <td>Arduino Pin <strong>5</strong></td>
              </tr>
              <tr>
                <td><strong>Green LED (+)</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#22b45e'}}>Green</span></td>
                <td>Arduino Pin <strong>6</strong></td>
              </tr>
              <tr>
                <td><strong>Buzzer (+)</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#9b51e0'}}>Purple</span></td>
                <td>Arduino Pin <strong>7</strong></td>
              </tr>
              <tr>
                <td><strong>All GND (-)</strong></td>
                <td><span className="wire-chip" style={{'--wire':'#111'}}>Black</span></td>
                <td>Breadboard <strong>- Rail</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 40 XP</strong><br/><small className="text-[var(--muted)]">Outputs connected</small></div>
          </div>
          <button onClick={() => markComplete(5)} className={`complete-btn ${completed.has(5) ? 'done' : ''}`}>
            {completed.has(5) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 6 */}
      <section id="mission-6" className="section">
        <div className="section-head">
          <div className="section-number">06</div>
          <div>
            <span className="lesson-kicker">MISSION 06</span>
            <h2>Gate Logic Code</h2>
            <p>Upload the code that makes decisions.</p>
          </div>
        </div>

        <div className="live-lab-launch">
          <div className="lab-launch-copy">
            <span className="inline-flex gap-2 items-center text-[0.7rem] font-bold tracking-widest uppercase before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[#56e39f] before:shadow-[0_0_0_5px_rgba(86,227,159,.15)] mb-2">Interactive Mode</span>
            <h3>Test the logic before uploading</h3>
            <p>Open the Live Circuit Lab to wire your digital twin and simulate the code running in real time!</p>
            <div className="lab-feature-row">
              <span>🔌 Drag-and-drop wiring</span>
              <span>📡 Live sensor physics</span>
              <span>⚙️ Real-time code execution</span>
            </div>
            <div className="lab-launch-button">
              <Link href="/smart-gate-lab" className="live-lab-btn inline-flex items-center gap-2 px-[18px] py-[14px] rounded-xl font-bold no-underline transition-transform hover:-translate-y-1">
                ⚡ Launch Digital Twin
              </Link>
            </div>
          </div>
          <div className="lab-launch-visual hidden md:grid">
            <div className="mini-workbench">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 46 45 C 50 20, 60 20, 70 25" style={{stroke: '#111', opacity: 0.7}} />
                <path d="M 46 50 C 50 30, 60 30, 70 20" style={{stroke: '#e5484d', opacity: 0.7}} />
                <path d="M 46 55 C 50 35, 60 35, 75 35" style={{stroke: '#ffb000'}} />
                <path d="M 46 60 C 60 60, 60 70, 75 70" style={{stroke: '#ffb000'}} />
                <path d="M 46 65 C 50 80, 55 80, 56 88" style={{stroke: '#22b45e'}} />
                <path d="M 46 70 C 50 90, 60 90, 69 88" style={{stroke: '#9b51e0'}} />
              </svg>
              <div className="mini-board">UNO<i></i><i></i><i></i></div>
              <div className="mini-sensor"><i></i><i></i></div>
              <div className="mini-servo">⚙️</div>
              <div className="mini-led"></div>
              <div className="mini-buzzer"></div>
            </div>
          </div>
        </div>

        <div className="code-wrap">
          <div className="code-head">
            <span>smart_gate.ino</span>
            <div className="code-actions">
              <button>Copy</button>
            </div>
          </div>
          <pre><code><span className="code-comment">// Smart Gate Code</span>
<span style={{color:'#D276A8'}}>#include</span> <span style={{color:'#8CDA99'}}>&lt;Servo.h&gt;</span>

<span style={{color:'#D276A8'}}>Servo</span> gateServo;

<span style={{color:'#5CA6D6'}}>int</span> trigPin = <span style={{color:'#F3A000'}}>9</span>;
<span style={{color:'#5CA6D6'}}>int</span> echoPin = <span style={{color:'#F3A000'}}>10</span>;
<span style={{color:'#5CA6D6'}}>int</span> redLed = <span style={{color:'#F3A000'}}>5</span>;
<span style={{color:'#5CA6D6'}}>int</span> greenLed = <span style={{color:'#F3A000'}}>6</span>;
<span style={{color:'#5CA6D6'}}>int</span> buzzer = <span style={{color:'#F3A000'}}>7</span>;

<span style={{color:'#5CA6D6'}}>void</span> <span style={{color:'#E2C085'}}>setup</span>() {'{'}
  <span className="code-comment">  // Setup pins</span>
  gateServo.<span style={{color:'#E2C085'}}>attach</span>(<span style={{color:'#F3A000'}}>3</span>);
  pinMode(trigPin, <span style={{color:'#7AB1D6'}}>OUTPUT</span>);
  pinMode(echoPin, <span style={{color:'#7AB1D6'}}>INPUT</span>);
  pinMode(redLed, <span style={{color:'#7AB1D6'}}>OUTPUT</span>);
  pinMode(greenLed, <span style={{color:'#7AB1D6'}}>OUTPUT</span>);
  pinMode(buzzer, <span style={{color:'#7AB1D6'}}>OUTPUT</span>);
  
  <span className="code-comment">  // Initial state: gate closed</span>
  gateServo.<span style={{color:'#E2C085'}}>write</span>(<span style={{color:'#F3A000'}}>90</span>); 
  digitalWrite(redLed, <span style={{color:'#7AB1D6'}}>HIGH</span>);
  digitalWrite(greenLed, <span style={{color:'#7AB1D6'}}>LOW</span>);
{'}'}

<span style={{color:'#5CA6D6'}}>void</span> <span style={{color:'#E2C085'}}>loop</span>() {'{'}
  <span className="code-comment">  // Measure distance</span>
  digitalWrite(trigPin, <span style={{color:'#7AB1D6'}}>LOW</span>);
  delayMicroseconds(<span style={{color:'#F3A000'}}>2</span>);
  digitalWrite(trigPin, <span style={{color:'#7AB1D6'}}>HIGH</span>);
  delayMicroseconds(<span style={{color:'#F3A000'}}>10</span>);
  digitalWrite(trigPin, <span style={{color:'#7AB1D6'}}>LOW</span>);

  <span style={{color:'#5CA6D6'}}>long</span> duration = pulseIn(echoPin, <span style={{color:'#7AB1D6'}}>HIGH</span>);
  <span style={{color:'#5CA6D6'}}>int</span> distance = duration * <span style={{color:'#F3A000'}}>0.034</span> / <span style={{color:'#F3A000'}}>2</span>;

  <span style={{color:'#D276A8'}}>if</span> (distance &lt;= <span style={{color:'#F3A000'}}>15</span>) {'{'}
    <span className="code-comment">    // Car detected! Open gate.</span>
    digitalWrite(redLed, <span style={{color:'#7AB1D6'}}>LOW</span>);
    digitalWrite(greenLed, <span style={{color:'#7AB1D6'}}>HIGH</span>);
    gateServo.<span style={{color:'#E2C085'}}>write</span>(<span style={{color:'#F3A000'}}>0</span>);
    
    <span className="code-comment">    // Beep buzzer</span>
    digitalWrite(buzzer, <span style={{color:'#7AB1D6'}}>HIGH</span>);
    delay(<span style={{color:'#F3A000'}}>200</span>);
    digitalWrite(buzzer, <span style={{color:'#7AB1D6'}}>LOW</span>);
    
    delay(<span style={{color:'#F3A000'}}>3000</span>); <span className="code-comment">// Keep gate open for 3 seconds</span>
  {'}'} <span style={{color:'#D276A8'}}>else</span> {'{'}
    <span className="code-comment">    // No car. Close gate.</span>
    digitalWrite(redLed, <span style={{color:'#7AB1D6'}}>HIGH</span>);
    digitalWrite(greenLed, <span style={{color:'#7AB1D6'}}>LOW</span>);
    gateServo.<span style={{color:'#E2C085'}}>write</span>(<span style={{color:'#F3A000'}}>90</span>);
  {'}'}
  delay(<span style={{color:'#F3A000'}}>100</span>);
{'}'}
</code></pre>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 60 XP</strong><br/><small className="text-[var(--muted)]">Code compiled</small></div>
          </div>
          <button onClick={() => markComplete(6)} className={`complete-btn ${completed.has(6) ? 'done' : ''}`}>
            {completed.has(6) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 7 */}
      <section id="mission-7" className="section">
        <div className="section-head">
          <div className="section-number">07</div>
          <div>
            <span className="lesson-kicker">MISSION 07</span>
            <h2>Assemble the Gate</h2>
            <p>Put the hardware together into a physical model.</p>
          </div>
        </div>

        <div className="blueprint">
          <img src="/assets/smart-gate-blueprint.png" alt="Gate Blueprint" className="w-full rounded-[14px] shadow-sm mb-6" />
          <div className="steps">
            <div className="step">
              <h3>Mount the Servo</h3>
              <p>Secure the servo motor to the base post. Attach a popsicle stick to the servo arm to act as the boom barrier.</p>
            </div>
            <div className="step">
              <h3>Position the Ultrasonic Sensor</h3>
              <p>Place the sensor at the base of the gate, pointing towards the approaching "road" so it can see cars coming.</p>
            </div>
            <div className="step">
              <h3>Place the Traffic Light & Buzzer</h3>
              <p>Mount the LEDs in a visible spot on the gate post. Place the buzzer inside the control box.</p>
            </div>
          </div>
        </div>

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 50 XP</strong><br/><small className="text-[var(--muted)]">Physical build done</small></div>
          </div>
          <button onClick={() => markComplete(7)} className={`complete-btn ${completed.has(7) ? 'done' : ''}`}>
            {completed.has(7) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>

      {/* MISSION 8 */}
      <section id="mission-8" className="section">
        <div className="section-head">
          <div className="section-number">08</div>
          <div>
            <span className="lesson-kicker">MISSION 08</span>
            <h2>Final Tests</h2>
            <p>Ensure the system operates perfectly.</p>
          </div>
        </div>

        <div className="check-list mb-8">
          <label className="check-item">
            <input type="checkbox" />
            <div>
              <strong>Does the red LED stay on when idle?</strong>
              <small className="text-[var(--muted)]">The gate should default to a closed state with a red warning light.</small>
            </div>
          </label>
          <label className="check-item">
            <input type="checkbox" />
            <div>
              <strong>Does it detect a toy car?</strong>
              <small className="text-[var(--muted)]">Move a toy car within 15cm. The sensor should register the distance.</small>
            </div>
          </label>
          <label className="check-item">
            <input type="checkbox" />
            <div>
              <strong>Does the gate open and beep?</strong>
              <small className="text-[var(--muted)]">The servo should move the boom 90 degrees up, the buzzer should beep, and the LED should turn green.</small>
            </div>
          </label>
          <label className="check-item">
            <input type="checkbox" />
            <div>
              <strong>Does it close after 3 seconds?</strong>
              <small className="text-[var(--muted)]">When the car is removed, the gate should lower back down and turn red.</small>
            </div>
          </label>
        </div>

        {completed.has(1) && completed.has(2) && completed.has(3) && completed.has(4) && completed.has(5) && completed.has(6) && completed.has(7) && (
          <div className="achievement-card">
            <img src="/assets/builder_badge.png" alt="Badge" />
            <div>
              <small>COURSE COMPLETE</small>
              <h3>Smart Gate Engineer</h3>
              <p>You successfully built an automated security system with intelligent sensors and traffic signals.</p>
              <div className="flex gap-2">
                <span className="bg-white/20 px-3 py-1.5 rounded-full text-[0.8rem] font-bold">+ 300 XP Bonus</span>
              </div>
            </div>
          </div>
        )}

        <div className="complete-row">
          <div className="flex gap-3">
            <span className="text-[1.8rem]">🏆</span>
            <div><strong>Reward: 70 XP</strong><br/><small className="text-[var(--muted)]">Testing approved</small></div>
          </div>
          <button onClick={() => markComplete(8)} className={`complete-btn ${completed.has(8) ? 'done' : ''}`}>
            {completed.has(8) ? '✓ Completed' : 'Mark as complete'}
          </button>
        </div>
      </section>
    </div>
  );
}

function ComponentCard({ icon, title, subtitle, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={"component "}>
      <button type="button" onClick={() => setOpen(!open)}>
        <span className="component-icon">{icon}</span>
        <span><h3>{title}</h3><small>{subtitle}</small></span>
        <span className="toggle">&lt;</span>
      </button>
      <div className="detail">{desc}</div>
    </article>
  );
}
