"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import './lab.css'; // specific styles for the live lab

export default function LabPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/lab.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="lab-wrapper">
      <header className="lab-topbar">
        <Link className="back-link" href="/smart-trash-bin#mission-6" aria-label="Return to course">← <span>Course</span></Link>
        <Link className="lab-brand" href="/" aria-label="Maskido Innovation Academy">
          <img src="/assets/maskido-wordmark.png" alt="Maskido" style={{ height: '32px', objectFit: 'contain' }} />
          <span className="hidden md:flex" style={{ borderLeft: '1px solid var(--line)', paddingLeft: '10px', flexDirection: 'column', justifyContent: 'center' }}>
            <strong style={{ fontSize: '0.85rem', letterSpacing: '0.04em', lineHeight: '1' }}>LIVE INVENTION LAB</strong>
          </span>
        </Link>
        <div className="top-stats">
          <span className="sound-pill"><button id="soundToggle" type="button" aria-pressed="true" title="Toggle sound">🔊</button></span>
          <span className="xp-pill">⚡ <strong id="xpValue">0</strong> XP</span>
          <span className="level-pill">Level <strong id="levelValue">1</strong></span>
        </div>
      </header>

      <main className="lab-app">
        <section className="mission-strip" aria-label="Lab stages">
          <button className="stage-tab active" data-screen="build" type="button"><span>1</span><b>Build</b><small>Place components</small></button>
          <button className="stage-tab" data-screen="wire" type="button"><span>2</span><b>Wire</b><small>Make connections</small></button>
          <button className="stage-tab" data-screen="simulate" type="button"><span>3</span><b>Simulate</b><small>Bring it alive</small></button>
          <button className="stage-tab" data-screen="challenge" type="button"><span>4</span><b>Challenge</b><small>Win your badge</small></button>
          <div className="mission-progress"><span id="missionProgress"></span></div>
        </section>

        <section className="lab-layout" id="labLayout">
          <aside className="parts-panel">
            <div className="panel-heading">
              <div><small>PARTS DRAWER</small><h1>Grab a component</h1></div>
              <span className="count-badge" id="placedCount">0/4 placed</span>
            </div>
            <p className="microcopy">Drag each part onto the grid. On a phone, tap a part to place it.</p>
            <div className="parts-list" id="partsList">
              <button className="part-card" draggable="true" data-part="arduino" type="button">
                <span className="part-thumb arduino-thumb" aria-hidden="true"><i></i><i></i><i></i></span>
                <span><strong>Arduino Uno</strong><small>Brain</small></span><em>Drag</em>
              </button>
              <button className="part-card" draggable="true" data-part="sensor" type="button">
                <span className="part-thumb sensor-thumb" aria-hidden="true"><i></i><i></i></span>
                <span><strong>Ultrasonic Sensor</strong><small>Eyes</small></span><em>Drag</em>
              </button>
              <button className="part-card" draggable="true" data-part="servo" type="button">
                <span className="part-thumb servo-thumb" aria-hidden="true"><i></i></span>
                <span><strong>Micro Servo</strong><small>Muscle</small></span><em>Drag</em>
              </button>
              <button className="part-card" draggable="true" data-part="power" type="button">
                <span className="part-thumb power-thumb" aria-hidden="true"><i>5V</i></span>
                <span><strong>Safe 5V Supply</strong><small>Energy</small></span><em>Drag</em>
              </button>
              <button className="part-card optional" draggable="true" data-part="breadboard" type="button">
                <span className="part-thumb breadboard-thumb" aria-hidden="true"></span>
                <span><strong>Mini Breadboard</strong><small>Optional workspace</small></span><em>Drag</em>
              </button>
            </div>

            <div className="mini-legend">
              <h2>Pin colours</h2>
              <div><span className="dot power"></span>5V power</div>
              <div><span className="dot ground"></span>Ground</div>
              <div><span className="dot signal"></span>Signal</div>
            </div>
          </aside>

          <section className="workspace-panel">
            <div className="workspace-toolbar">
              <div className="tool-group">
                <button className="tool active" id="selectTool" type="button" aria-pressed="true">↖ Move</button>
                <button className="tool" id="wireTool" type="button" aria-pressed="false">〰 Wire</button>
              </div>
              <div className="workspace-title"><span className="live-dot"></span><strong>Smart Bin Workbench</strong><small id="benchStatus">Place the four required parts</small></div>
              <div className="tool-group">
                <button className="icon-tool" id="hintBtn" type="button" title="Show one hint">💡</button>
                <button className="icon-tool" id="resetBtn" type="button" title="Reset lab">↻</button>
              </div>
            </div>

            <div className="workspace-scroll">
              <div className="workspace" id="workspace" aria-label="Circuit building workbench">
                <svg className="wire-layer" id="wireLayer" aria-hidden="true"></svg>
                <div className="drop-guide" id="dropGuide">
                  <span>＋</span><strong>Drop components here</strong><small>Build your circuit from scratch</small>
                </div>
                <div className="ghost-layout" id="ghostLayout" aria-hidden="true">
                  <span className="ghost ghost-a">ARDUINO</span><span className="ghost ghost-s">SENSOR</span><span className="ghost ghost-v">SERVO</span><span className="ghost ghost-p">5V</span>
                </div>
              </div>
            </div>

            <div className="coach-bar" id="coachBar" aria-live="polite">
              <span className="coach-avatar">M</span>
              <div><small>MASKIDO COACH</small><strong id="coachText">Start by dragging the Arduino onto the grid.</strong></div>
              <button id="coachAction" type="button">Show me</button>
            </div>
          </section>

          <aside className="inspector-panel">
            <div className="panel-heading compact"><div><small>MISSION CONTROL</small><h2 id="missionTitle">Build the team</h2></div><span className="stars" id="missionStars">☆☆☆</span></div>
            <div className="objective-card" id="objectiveCard">
              <div className="objective-icon">🧩</div>
              <div><strong id="objectiveText">Place the four required components</strong><small id="objectiveSub">Arduino + Sensor + Servo + 5V Supply</small></div>
            </div>

            <div className="checklist" id="checklist">
              <div data-check="arduino"><span>○</span>Arduino on workbench</div>
              <div data-check="sensor"><span>○</span>Sensor on workbench</div>
              <div data-check="servo"><span>○</span>Servo on workbench</div>
              <div data-check="power"><span>○</span>5V supply on workbench</div>
            </div>

            <button className="primary-action" id="checkCircuitBtn" type="button">Check my circuit</button>
            <button className="simulate-action" id="simulateBtn" type="button" disabled><span className="power-symbol">⏻</span><span><strong>Start simulation</strong><small>Complete the circuit first</small></span></button>

            <div className="connection-meter">
              <div><span>Correct connections</span><strong id="connectionCount">0 / 8</strong></div>
              <div className="meter"><span id="connectionMeter"></span></div>
            </div>


          </aside>
        </section>

        <section className="simulation-stage" id="simulationStage" hidden>
          <div className="simulation-top">
            <div>
              <span className="eyebrow">LIVE DIGITAL TWIN</span>
              <h2>Your circuit is alive!</h2>
              <p>Move the virtual hand. Watch the sensor, Arduino decision and servo response happen in real time.</p>
            </div>
            <button className="stop-sim" id="stopSimBtn" type="button">■ Stop simulation</button>
          </div>

          <div className="digital-twin-grid">
            <div className="twin-visual">
              <div className="room-scene">
                <div className="wall-label">MASKIDO SMART LAB</div>
                <div className="floor"></div>
                <div className="smart-bin" id="simBin">
                  <div className="sensor-waves"><i></i><i></i><i></i></div>
                  <div className="virtual-hand" id="virtualHand"><span></span></div>
                  <div className="sim-lid"></div>
                  <div className="sim-bin-body"><div className="sim-eyes"><i></i><i></i></div><b>SMART BIN</b><small>MASKIDO</small></div>
                  <div className="servo-link"><i></i></div>
                </div>
              </div>
              <div className="distance-control">
                <label htmlFor="liveDistance"><span>Move hand</span><strong><output id="liveDistanceValue">30</output> cm</strong></label>
                <input id="liveDistance" type="range" min="2" max="45" defaultValue="30" />
                <div className="range-labels"><span>Near</span><span>Open zone ≤12 cm</span><span>Far</span></div>
              </div>
            </div>

            <div className="telemetry-panel">
              <div className="telemetry-grid">
                <div className="telemetry-card"><span className="telemetry-icon">📡</span><small>DISTANCE</small><strong><output id="telemetryDistance">30</output> cm</strong><i id="sensorState">SCANNING</i></div>
                <div className="telemetry-card"><span className="telemetry-icon">🧠</span><small>ARDUINO DECISION</small><strong id="decisionText">WAIT</strong><i id="decisionState">HAND IS FAR</i></div>
                <div className="telemetry-card"><span className="telemetry-icon">⚙️</span><small>SERVO ANGLE</small><strong><output id="servoAngle">5</output>°</strong><i id="servoState">CLOSED</i></div>
                <div className="telemetry-card"><span className="telemetry-icon">⚡</span><small>SYSTEM POWER</small><strong>5.0 V</strong><i className="good">STABLE</i></div>
              </div>

              <div className="logic-player">
                <div className="logic-step active" data-logic="sense"><span>1</span><div><strong>Sense</strong><small>Measure the echo</small></div><b>📡</b></div>
                <div className="logic-arrow">↓</div>
                <div className="logic-step" data-logic="decide"><span>2</span><div><strong>Decide</strong><small>Is distance ≤ 12 cm?</small></div><b>🧠</b></div>
                <div className="logic-arrow">↓</div>
                <div className="logic-step" data-logic="act"><span>3</span><div><strong>Act</strong><small>Move servo to target angle</small></div><b>⚙️</b></div>
              </div>



              <button className="challenge-cta" id="goChallengeBtn" type="button"><span>🏆</span><span><strong>Enter Challenge Arena</strong><small>5 visual rounds · earn up to 500 XP</small></span><b>→</b></button>
            </div>
          </div>
        </section>

        <section className="challenge-stage" id="challengeStage" hidden>
          <div className="arena-top">
            <div><span className="eyebrow">FINAL BOSS</span><h2>Smart Systems Challenge</h2><p>No boring exam. Solve five visual engineering missions.</p></div>
            <div className="arena-stats"><span>❤️ <b id="heartsValue">3</b></span><span>🔥 <b id="streakValue">0</b></span><span>⭐ <b id="quizScore">0</b></span></div>
          </div>
          <div className="round-progress" id="roundProgress"><span></span><span></span><span></span><span></span><span></span></div>
          <div className="challenge-card" id="challengeCard" aria-live="polite"></div>
        </section>
      </main>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>
      <div className="celebration" id="celebration" aria-hidden="true"></div>

      <div className="welcome-modal" id="welcomeModal" role="dialog" aria-modal="true" aria-labelledby="welcomeTitle">
        <div className="welcome-card">
          <button className="skip-welcome" id="skipWelcome" type="button">Skip intro</button>
          <div className="welcome-visual">
            <div className="orbit arduino-orbit">🧠</div><div className="orbit sensor-orbit">📡</div><div className="orbit servo-orbit">⚙️</div>
            <div className="welcome-bin"><div></div><span></span></div>
          </div>
          <span className="eyebrow">WELCOME, YOUNG INNOVATOR</span>
          <h2 id="welcomeTitle">Build it. Wire it. Watch it think.</h2>
          <p>You are entering a live engineering lab. Drag real components, connect exact pins and run a digital version of your smart bin before touching the physical kit.</p>
          <div className="welcome-features"><span>🧩 Drag components</span><span>〰 Draw real wires</span><span>▶ Run simulation</span><span>🏆 Win XP</span></div>
          <button className="launch-lab" id="launchLab" type="button">Enter the live lab →</button>
        </div>
      </div>
    </div>
  );
}
