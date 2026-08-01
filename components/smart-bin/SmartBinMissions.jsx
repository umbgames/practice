"use client";
import React, { useState, useEffect } from 'react';
import { UltrasonicSensor, PushButton } from '../../lib/lab-components/input';
import { ArduinoUno } from '../../lib/lab-components/microcontrollers';
import { ServoMotor } from '../../lib/lab-components/output';
import { ClearWorkspace, PowerOff, CorrectPolarity, ProtectedPower, AdultSupervision, KeepFingersClear, SafetyDesk, SafetyBattery, DangerPlug, DangerGear, SafetyAdult, SafetyShield } from '../../lib/lab-components/safety';

export default function SmartBinMissions({ activeMission, onNext, onBack, onXP }) {
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
    } catch { }
  }, []);

  const saveProgress = (newCompleted) => {
    setCompleted(newCompleted);
    try {
      window.localStorage.setItem('maskido-smart-bin-progress-v1', JSON.stringify([...newCompleted]));
    } catch { }
  };

  const markComplete = (n) => {
    const next = new Set(completed);
    next.add(n);
    saveProgress(next);
  };

  const isDone = (n) => completed.has(n);

  return (
    <article className={`min-w-0 mx-auto w-full my-auto relative flex flex-col justify-center ${activeMission === 4 ? 'max-w-6xl px-6' : 'max-w-2xl'}`}>

      {/* MISSION 1 */}
      {activeMission === 1 && (
        <section className="" id="mission-1" data-module="1">
          <h2 className="text-4xl font-black mb-8 text-center text-[#071A33]">The Challenge</h2>

          <InteractiveMission1
            isDone={isDone(1)}
            onComplete={() => { if (!isDone(1)) { markComplete(1); onXP(100); } onNext(); }}
          />
        </section>
      )}

      {/* MISSION 2 */}
      {activeMission === 2 && (
        <section className="" id="mission-2" data-module="2">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Meet the Invention Team</h2>

          <InteractiveMission2
            isDone={isDone(2)}
            onComplete={() => { if (!isDone(2)) { markComplete(2); onXP(100); } onNext(); }}
          />
        </section>
      )}

      {/* MISSION 3 */}
      {activeMission === 3 && (
        <section className="" id="mission-3" data-module="3">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Pass the Safety Gate</h2>
          <InteractiveMission3
            isDone={isDone(3)}
            onComplete={() => { if (!isDone(3)) { markComplete(3); onXP(100); } onNext(); }}
          />
        </section>
      )}

      {/* MISSION 4 */}
      {activeMission === 4 && (
        <section className="" id="mission-4" data-module="4">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Sensor Lab: How Far Is the Hand?</h2>

          <InteractiveMission4
            demoDistance={demoDistance}
            setDemoDistance={setDemoDistance}
            isDone={isDone(4)}
            onComplete={() => { if (!isDone(4)) { markComplete(4); onXP(100); } onNext(); }}
          />
        </section>
      )}

      {/* MISSIONS 5 */}
      {activeMission === 5 && (
        <section className="" id="mission-5" data-module="5">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Servo Lab: Teach the Lid to Move</h2>

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
          <div className="complete-row mt-12">
            <span className="font-bold text-gray-500">My closed and open angles are recorded.</span>
            <button className={`complete-btn shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 px-8 py-4 ${isDone(5) ? 'bg-green-500' : 'bg-[var(--ink)]'}`} onClick={() => { if (!isDone(5)) { markComplete(5); onXP(100); } onNext(); }} type="button">
              {isDone(5) ? 'Continue ✓' : 'Continue'}
            </button>
          </div>
        </section>
      )}

      {activeMission === 6 && (
        <section className="" id="mission-6" data-module="6">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Connect, Upload and Test</h2>

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
                <svg viewBox="0 0 400 220"><path d="M110 130 C180 20 225 55 290 72" fill="none" stroke="#F1A400" strokeWidth="4" /><path d="M110 150 C190 210 250 160 304 158" fill="none" stroke="#00B8D9" strokeWidth="4" /><path d="M290 98 C330 110 330 140 304 154" fill="none" stroke="#E5484D" strokeWidth="4" /></svg>
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
          <div className="complete-row mt-12">
            <span className="font-bold text-gray-500">The circuit passes the bench test.</span>
            <button className={`complete-btn shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 px-8 py-4 ${isDone(6) ? 'bg-green-500' : 'bg-[var(--ink)]'}`} onClick={() => { if (!isDone(6)) { markComplete(6); onXP(100); } onNext(); }} type="button">
              {isDone(6) ? 'Continue ✓' : 'Continue'}
            </button>
          </div>
        </section>
      )}

      {activeMission === 7 && (
        <section className="" id="mission-7" data-module="7">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Build the Bin Body</h2>

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
          <div className="complete-row mt-12">
            <span className="font-bold text-gray-500">The body passes the quality check.</span>
            <button className={`complete-btn shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 px-8 py-4 ${isDone(7) ? 'bg-green-500' : 'bg-[var(--ink)]'}`} onClick={() => { if (!isDone(7)) { markComplete(7); onXP(100); } onNext(); }} type="button">
              {isDone(7) ? 'Continue ✓' : 'Continue'}
            </button>
          </div>
        </section>
      )}

      {activeMission === 8 && (
        <section className="" id="mission-8" data-module="8">
          <h2 className="text-3xl font-black mb-8 text-center text-[#071A33]">Install, Test and Level Up</h2>

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
          <div className="complete-row mt-12">
            <span className="font-bold text-gray-500">Submit your evidence and earn the Smart Systems Builder badge.</span>
            <button className={`complete-btn shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 px-8 py-4 ${isDone(8) ? 'bg-green-500' : 'bg-[var(--ink)]'}`} onClick={() => { if (!isDone(8)) { markComplete(8); onXP(100); } onNext(); }} type="button">
              {isDone(8) ? 'Module Completed ✓' : 'Complete Module'}
            </button>
          </div>
        </section>
      )}
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

function InteractiveMission1({ isDone, onComplete }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const handleSelection = (answer) => {
    setSelected(answer);
    if (answer === 'sensor') {
      setError(false);
      setTimeout(() => setStep(1), 1200);
    } else {
      setError(true);
    }
  };

  return (
    <div className="interactive-mission">
      {step === 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-2xl font-black mb-4">Problem spotted!</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            People often touch waste-bin lids with dirty hands. We need a way to open the bin <b>without anyone touching it</b>. Which of these inputs would be the best "eyes" for our smart bin?
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => handleSelection('button')}
              className={`flex flex-col items-center gap-4 p-6 border-2 rounded-2xl transition-all ${selected === 'button' ? (error ? 'border-red-400 bg-red-50' : 'border-[var(--orange)]') : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="h-24 flex items-center justify-center">
                <PushButton width={64} height={64} />
              </div>
              <div className="text-center">
                <strong className="block text-lg">Push Button</strong>
                <span className="text-sm text-gray-500">Requires physical contact</span>
              </div>
            </button>

            <button
              onClick={() => handleSelection('sensor')}
              className={`flex flex-col items-center gap-4 p-6 border-2 rounded-2xl transition-all ${selected === 'sensor' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="h-24 flex items-center justify-center">
                <UltrasonicSensor width={120} height={80} />
              </div>
              <div className="text-center">
                <strong className="block text-lg">Ultrasonic Sensor</strong>
                <span className="text-sm text-gray-500">Detects objects at a distance</span>
              </div>
            </button>
          </div>

          {error && <div className="mt-4 text-red-500 font-bold text-center">Not quite. If we use a button, people still have to touch it!</div>}
          {selected === 'sensor' && !error && <div className="mt-4 text-green-600 font-bold text-center">Correct! The sensor will act as our eyes.</div>}
        </div>
      )}

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
          <h3 className="text-2xl font-black mb-4">You solved it!</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            You will give a trash bin “eyes” to detect a hand, a “brain” to make decisions, and a “muscle” to lift the lid automatically.
          </p>

          <div className="story-visual mb-8 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="logic-flow p-8 bg-gray-50" aria-label="Sensor, Arduino and servo workflow">
              <div className="logic-node"><span className="big">👀</span><strong>Eyes</strong><small>Sensor detects</small></div>
              <span className="logic-arrow">→</span>
              <div className="logic-node"><span className="big">🧠</span><strong>Brain</strong><small>Arduino decides</small></div>
              <span className="logic-arrow">→</span>
              <div className="logic-node"><span className="big">💪</span><strong>Muscle</strong><small>Servo moves</small></div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              className={`px-12 py-4 rounded-xl font-bold text-lg transition-transform w-full md:w-auto ${isDone ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-[#000] text-white hover:-translate-y-1 hover:shadow-xl shadow-black/20'}`}
              onClick={onComplete}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InteractiveMission2({ isDone, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  const handleSelection = (answer) => {
    setSelected(answer);
    if (answer === 'brain') {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="interactive-mission animate-in fade-in slide-in-from-bottom-4 duration-500">
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl mx-auto">
        Every component has one clear job. Which of these components acts as the <b>"Brain"</b> to read the sensor, make a decision, and command the lid to move?
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => handleSelection('sensor')}
          className={`flex flex-col items-center gap-4 p-6 border-2 rounded-2xl transition-all ${selected === 'sensor' ? (error ? 'border-red-400 bg-red-50' : '') : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
        >
          <div className="h-24 flex items-center justify-center"><UltrasonicSensor width={90} height={70} /></div>
          <div className="text-center">
            <strong className="block text-lg">HC-SR04</strong>
            <span className="text-sm text-gray-500">The Eyes</span>
          </div>
        </button>

        <button
          onClick={() => handleSelection('brain')}
          className={`flex flex-col items-center gap-4 p-6 border-2 rounded-2xl transition-all ${selected === 'brain' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
        >
          <div className="h-24 flex items-center justify-center"><ArduinoUno width={80} height={80} /></div>
          <div className="text-center">
            <strong className="block text-lg">Arduino Uno</strong>
            <span className="text-sm text-gray-500">The Brain</span>
          </div>
        </button>

        <button
          onClick={() => handleSelection('muscle')}
          className={`flex flex-col items-center gap-4 p-6 border-2 rounded-2xl transition-all ${selected === 'muscle' ? (error ? 'border-red-400 bg-red-50' : '') : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
        >
          <div className="h-24 flex items-center justify-center"><ServoMotor width={80} height={80} /></div>
          <div className="text-center">
            <strong className="block text-lg">Micro Servo</strong>
            <span className="text-sm text-gray-500">The Muscle</span>
          </div>
        </button>
      </div>

      <div className="min-h-[120px] mt-8 flex flex-col items-center">
        {error && <div className="text-red-500 font-bold text-center animate-in fade-in bg-red-50 px-6 py-3 rounded-xl border border-red-100">Not quite! That component has a different job.</div>}
        {selected === 'brain' && !error && (
          <div className="animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center w-full">
            <div className="text-green-600 font-bold text-center mb-6 bg-green-50 px-6 py-3 rounded-xl border border-green-100">Correct! The Arduino Uno is a tiny computer that acts as the brain.</div>
            <button
              className={`px-12 py-4 rounded-xl font-bold text-lg transition-transform w-full md:w-auto ${isDone ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-[#000] text-white hover:-translate-y-1 hover:shadow-xl shadow-black/20'}`}
              onClick={onComplete}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function InteractiveMission3({ isDone, onComplete }) {
  const [round, setRound] = useState(1);
  const [error, setError] = useState(null);
  const [phase, setPhase] = useState('typing'); // Always play the game
  const [typedText, setTypedText] = useState('');

  const text = round === 1
    ? "Let's pass the safety gate! Weed out the bad behavior. Which of these is DANGEROUS?"
    : "Awesome! Now find the next bad behavior.";

  useEffect(() => {
    if (phase === 'typing') {
      let index = 0;
      setTypedText('');
      const interval = setInterval(() => {
        if (index <= text.length) {
          setTypedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setPhase('game'), 1000);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [phase, text]);

  const handleSelection = (item) => {
    if (phase !== 'game') return;
    if (item.isBad) {
      if (round === 1) {
        setPhase('typing');
        setRound(2);
      } else {
        setPhase('complete');
      }
    } else {
      setError(item.id);
      setTimeout(() => setError(null), 800);
    }
  };

  const round1 = [
    { id: 'good1', icon: <SafetyDesk width={100} height={100} />, title: 'Clear Workspace', desc: 'Keep drinks and scraps away', isBad: false },
    { id: 'bad1', icon: <DangerPlug width={100} height={100} />, title: 'Rewire While On', desc: 'Moving wires while plugged in', isBad: true },
    { id: 'good2', icon: <SafetyBattery width={100} height={100} />, title: 'Check Polarity', desc: 'Double check + and -', isBad: false },
  ];

  const round2 = [
    { id: 'good3', icon: <SafetyShield width={100} height={100} />, title: 'Safe Power', desc: 'Use only approved adapters', isBad: false },
    { id: 'good4', icon: <SafetyAdult width={100} height={100} />, title: 'Ask an Adult', desc: 'For sharp tools or hot glue', isBad: false },
    { id: 'bad2', icon: <DangerGear width={100} height={100} />, title: 'Touch Moving Parts', desc: 'Fingers near the servo gear', isBad: true },
  ];

  const currentRound = round === 1 ? round1 : round2;

  return (
    <div className="interactive-mission relative min-h-[400px]">
      {(phase === 'typing' || phase === 'game') && (
        <div className={`mb-12 transition-opacity duration-500 ${phase === 'typing' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <p className="text-2xl text-gray-700 font-medium text-center max-w-2xl mx-auto min-h-[80px]">
            {typedText}<span className="animate-pulse">|</span>
          </p>
        </div>
      )}

      {phase === 'game' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-xl font-bold text-center mb-8 text-[#071A33]">Round {round} of 2</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentRound.map((item) => {
              const isError = error === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelection(item)}
                  className={`flex flex-col items-center gap-4 p-8 border-2 rounded-3xl transition-all text-center ${isError ? 'border-red-500 bg-red-50 animate-shake' : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-xl hover:-translate-y-2'
                    }`}
                >
                  <div className="h-32 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-xl mb-2 text-[#071A33]">{item.title}</strong>
                    <span className="text-gray-500">{item.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {phase === 'complete' && (
        <div className="animate-in zoom-in duration-500 flex flex-col items-center w-full mt-12 py-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <span className="text-5xl">🏆</span>
          </div>
          <h3 className="text-2xl font-black text-[#071A33] mb-8">Safety Gate Passed!</h3>
          <button
            className="px-12 py-4 rounded-xl font-bold text-lg transition-transform w-full md:w-auto bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105"
            onClick={onComplete}
          >
          </button>
        </div>
      )}
    </div>
  );
}

function InteractiveMission4({ demoDistance, setDemoDistance, isDone, onComplete }) {
  const [view, setView] = useState('explanation'); // 'explanation' | 'workspace'

  const [phase, setPhase] = useState('tutorial'); // 'tutorial', 'play', 'complete'
  const [connections, setConnections] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);
  const [errorPin, setErrorPin] = useState(null);

  useEffect(() => {
    if (phase === 'tutorial') {
      const timer = setTimeout(() => {
        setPhase('play');
        setConnections([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const steps = [
    { pin: 'VCC', correct: '5V', color: '#E5484D', desc: 'Powers the sensor' },
    { pin: 'GND', correct: 'GND', color: '#1D2733', desc: 'Common ground' },
    { pin: 'TRIG', correct: 'D10', color: '#F0B429', desc: 'Sends the sound pulse' },
    { pin: 'ECHO', correct: 'D9', color: '#00B8D9', desc: 'Returns the echo timing' },
  ];

  // Exact coordinates for paths (mapped from internal SVG cx/cy)
  const coords = {
    '5V': { x: 143, y: 497 },
    'GND_ARD': { x: 153.5, y: 497 },
    'D10': { x: 224, y: 368 },
    'D9': { x: 234.5, y: 368 },
    'VCC': { x: 522, y: 217 },
    'TRIG': { x: 534, y: 217 },
    'ECHO': { x: 546, y: 217 },
    'GND_SEN': { x: 558, y: 217 },
  };

  const wirePaths = {
    'VCC-5V': `M ${coords['VCC'].x} ${coords['VCC'].y} C ${coords['VCC'].x} 350, ${coords['5V'].x} 350, ${coords['5V'].x} ${coords['5V'].y}`,
    'GND-GND': `M ${coords['GND_SEN'].x} ${coords['GND_SEN'].y} C ${coords['GND_SEN'].x} 350, ${coords['GND_ARD'].x} 350, ${coords['GND_ARD'].x} ${coords['GND_ARD'].y}`,
    'TRIG-D10': `M ${coords['TRIG'].x} ${coords['TRIG'].y} C ${coords['TRIG'].x} 250, ${coords['D10'].x} 250, ${coords['D10'].x} ${coords['D10'].y}`,
    'ECHO-D9': `M ${coords['ECHO'].x} ${coords['ECHO'].y} C ${coords['ECHO'].x} 250, ${coords['D9'].x} 250, ${coords['D9'].x} ${coords['D9'].y}`,
  };

  const handlePinClick = (pin) => {
    if (phase !== 'play') return;

    const isSensorPin = ['VCC', 'TRIG', 'ECHO', 'GND_SEN'].includes(pin);
    const pinName = pin === 'GND_SEN' || pin === 'GND_ARD' ? 'GND' : pin;

    if (!selectedPin) {
      setSelectedPin(pin);
      return;
    }

    const isSelectedSensorPin = ['VCC', 'TRIG', 'ECHO', 'GND_SEN'].includes(selectedPin);

    if (isSensorPin === isSelectedSensorPin) {
      setSelectedPin(pin); // Switch selection on same component
      return;
    }

    const sensorPin = isSensorPin ? pin : selectedPin;
    const arduinoPin = !isSensorPin ? pin : selectedPin;

    const sensorPinName = sensorPin === 'GND_SEN' ? 'GND' : sensorPin;
    const arduinoPinName = arduinoPin === 'GND_ARD' ? 'GND' : arduinoPin;

    const target = steps.find(s => s.pin === sensorPinName);

    if (target.correct === arduinoPinName) {
      setConnections(prev => [...prev, { from: sensorPinName, to: arduinoPinName, color: target.color, pathId: `${sensorPinName}-${arduinoPinName}` }]);
      setSelectedPin(null);
      if (connections.length === 3) {
        setTimeout(() => setPhase('complete'), 500);
      }
    } else {
      setErrorPin(pin);
      setTimeout(() => setErrorPin(null), 800);
      setSelectedPin(null);
    }
  };

  if (view === 'explanation') {
    return (
      <div className="interactive-mission-4 flex flex-col gap-12 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Explanation Text Block - NO BACKGROUND */}
          <div className="w-full md:w-[400px] shrink-0 flex flex-col justify-center">
            <h3 className="text-[2.2rem] leading-tight font-black mb-6 text-[#071A33]">Move the virtual hand</h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              The sensor sends an ultrasonic pulse that bounces from the hand and returns as an echo. A shorter journey means the hand is closer.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50/50 text-blue-600 px-6 py-3 rounded-xl font-bold text-sm w-fit border border-blue-100/50">
              <span className="text-lg">📏</span> Opening rule: 12 cm or closer
            </div>
          </div>

          {/* Live Prototype Visual Block - Wider */}
          <div className="flex-1 w-full relative bg-gradient-to-br from-[#0A2547] to-[#071A33] rounded-[34px] p-6 md:p-8 text-white shadow-[0_30px_80px_rgba(7,26,51,.28)] overflow-hidden min-h-[460px] flex flex-col">
            <div className="absolute inset-[auto_-120px_-140px_auto] w-[340px] h-[340px] rounded-full bg-[rgba(0,184,217,.18)] blur-[4px]"></div>
            <div className="absolute inset-[-100px_auto_auto_-120px] w-[260px] h-[260px] rounded-full bg-[rgba(255,122,0,.22)]"></div>

            <div className="relative z-10 flex items-center justify-between text-[0.8rem] font-black uppercase tracking-widest text-white/80">
              <span className="inline-flex gap-2 items-center before:content-[''] before:w-[9px] before:h-[9px] before:rounded-full before:bg-[#56E39F] before:shadow-[0_0_0_7px_rgba(86,227,159,.12)]">Live prototype</span>
              <span className={demoDistance <= 12 ? 'text-green-400' : 'text-white/60'}>
                {demoDistance <= 12 ? 'Lid Open 🔓' : 'Lid Closed 🔒'}
              </span>
            </div>

            <div className="relative z-10 flex-1 grid place-items-center my-6">
              <div className={`bin-illustration pointer-events-none ${demoDistance <= 12 ? 'open' : ''}`}>
                <div className="signal"><span></span><span></span><span></span></div>
                <div className="hand" style={{ transform: demoDistance > 12 ? `translateX(${Math.min(100, (demoDistance - 12) * 5)}px)` : 'translateX(-20px) rotate(-6deg)' }}></div>
                <div className="bin-lid" style={{ transform: demoDistance <= 12 ? 'rotate(52deg) translateY(-4px)' : 'none' }}></div>
                <div className="bin-body"><div className="bin-sensor"><span></span><span></span></div></div>
              </div>
            </div>

            <div className="relative z-10 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 mt-auto">
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold text-white/70">Hand distance</span>
                <span className="text-2xl font-black text-white">{demoDistance} <span className="text-sm">cm</span></span>
              </div>

              <input
                type="range"
                min="4"
                max="45"
                value={demoDistance}
                onChange={(e) => setDemoDistance(Number(e.target.value))}
                aria-label="Virtual hand distance"
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00B8D9]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setView('workspace')}
            className="px-8 py-4 bg-[#071A33] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            Enter Workbench ➔
          </button>
        </div>
      </div>
    );
  }

  const getPinState = (pinId) => {
    const isError = errorPin === pinId;
    const isSelected = selectedPin === pinId;
    const pinName = pinId === 'GND_SEN' || pinId === 'GND_ARD' ? 'GND' : pinId;
    const isConnected = connections.some(c => c.from === pinName || c.to === pinName) || phase === 'tutorial';

    if (isConnected) return 'connected';
    if (isError) return 'error';
    if (isSelected) return 'selected';
    if (phase !== 'play') return 'disabled';
    return 'normal';
  };

  const getPinColor = (pinId) => {
    const pinName = pinId === 'GND_SEN' || pinId === 'GND_ARD' ? 'GND' : pinId;
    const stepTarget = steps.find(s => s.pin === pinName || s.correct === pinName);
    return stepTarget ? stepTarget.color : '#666';
  };

  const arduinoInteractivePins = {
    '5V': { color: getPinColor('5V'), state: getPinState('5V') },
    'GND_ARD': { color: getPinColor('GND_ARD'), state: getPinState('GND_ARD') },
    'D10': { color: getPinColor('D10'), state: getPinState('D10') },
    'D9': { color: getPinColor('D9'), state: getPinState('D9') },
  };

  const sensorInteractivePins = {
    'VCC': { color: getPinColor('VCC'), state: getPinState('VCC') },
    'TRIG': { color: getPinColor('TRIG'), state: getPinState('TRIG') },
    'ECHO': { color: getPinColor('ECHO'), state: getPinState('ECHO') },
    'GND_SEN': { color: getPinColor('GND_SEN'), state: getPinState('GND_SEN') },
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full items-stretch">

      {/* Workspace Modal */}
      <div className="interactive-mission-4 flex-1 h-[600px] border-2 border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm relative">
        <div className="w-full h-full min-w-[700px] relative overflow-auto" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "20px 20px" }}>

          {/* Floating Top Banner */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
            {phase === 'tutorial' && (
              <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                🚨 Setup Flash! Memorize the wiring layout!
              </div>
            )}

            {phase === 'play' && (
              <div className=" text-white px-6 py-2 text-sm font-bold shadow-lg">
                Your turn! Click the colored pins to connect them.
              </div>
            )}
          </div>

          <svg width="100%" height="100%" className="absolute inset-0 z-10 pointer-events-none min-h-[600px] min-w-[700px]">
            {phase === 'tutorial' ? (
              // Draw all correct wires in tutorial mode
              steps.map(step => (
                <path key={step.pin} d={wirePaths[`${step.pin}-${step.correct}`]} fill="none" stroke={step.color} strokeWidth="5" strokeLinecap="round" opacity="0.8" />
              ))
            ) : (
              // Draw active connections in play mode
              connections.map(conn => (
                <path key={conn.pathId} d={wirePaths[conn.pathId]} fill="none" stroke={conn.color} strokeWidth="5" strokeLinecap="round" className="animate-in fade-in" />
              ))
            )}
          </svg>

          {/* Arduino on grid */}
          <div className="absolute" style={{ left: 50, top: 350 }}>
            <div className="absolute -top-8 left-0 bg-[#071A33] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm pointer-events-none">Arduino Uno - brain</div>
            <ArduinoUno width={240} height={165} interactivePins={arduinoInteractivePins} onPinClick={handlePinClick} />
          </div>

          {/* Sensor on grid */}
          <div className="absolute" style={{ left: 450, top: 100 }}>
            <div className="absolute -top-8 left-0 bg-[#071A33] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm pointer-events-none">HC-SR04 - eyes</div>
            <UltrasonicSensor width={180} height={120} interactivePins={sensorInteractivePins} onPinClick={handlePinClick} />
          </div>
        </div>
      </div>

      {/* Minimal Right Side Completion Panel (Outside Workspace) */}
      {phase === 'complete' && (
        <div className="w-full xl:w-[320px] bg-white border-2 border-green-200 rounded-3xl flex flex-col justify-center items-center p-8 shadow-sm animate-in slide-in-from-right-8 shrink-0 h-[600px]">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <span className="text-4xl">🔬</span>
          </div>
          <h3 className="text-2xl font-black text-[#071A33] text-center mb-2">Wired Successfully!</h3>
          <p className="text-sm text-gray-500 text-center mb-10">Great job assembling the circuit perfectly.</p>

          <button onClick={onComplete} className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-transform hover:-translate-y-1 hover:scale-[1.02]">
            Continue ✓
          </button>
        </div>
      )}
    </div>
  );
}
