export const packages = [
  { id: 'starter', name: 'Creative Mind Starter', short: 'Starter', icon: '🚀', desc: 'Begin with playful coding, simple circuits and cause-and-effect.', age: 'Age 6–8 • Class 1–3' },
  { id: 'tinker', name: 'Creative Mind Tinker', short: 'Tinker', icon: '⚙️', desc: 'Explore components, experiment and build first projects.', age: 'Age 8–10 • Class 3–5' },
  { id: 'explorer', name: 'Creative Mind Explorer', short: 'Explorer', icon: '🔎', desc: 'Solve real-world problems using sensors, coding and prototyping.', age: 'Age 10–12 • Class 5–7' },
  { id: 'inventor', name: 'Creative Mind Inventor', short: 'Inventor', icon: '💡', desc: 'Design, debug and optimise advanced smart systems.', age: 'Age 12–14 • Class 7–9' },
  { id: 'entrepreneur', name: 'Creative Mind Entrepreneur', short: 'Entrepreneur', icon: '📈', desc: 'Build, pitch and launch market-ready innovations.', age: 'Age 14+ • SS3+' }
];

export const categories = [
  ['Coding Studio', '</>'], 
  ['Electronics Lab', '🔌'], 
  ['Robotics Arena', '🤖'], 
  ['Makerspace', '🛠️'], 
  ['Drone Academy', '🚁'], 
  ['Future Tech Hub', '🥽']
];

export const projects = [
  { name: 'Smart Trash Bin', pkg: 'explorer', cat: 'Electronics Lab', level: 'Beginner', icon: '🗑️', progress: 72, live: true, desc: 'Build a touch-free bin using Arduino, ultrasonic sensing and servo movement.' },
  { name: 'Smart Gate', pkg: 'tinker', cat: 'Electronics Lab', level: 'Beginner', icon: '🚧', progress: 45, live: true, desc: 'Detect an approaching vehicle and open a gate automatically.' },
  { name: 'Automatic Irrigation', pkg: 'explorer', cat: 'Electronics Lab', level: 'Intermediate', icon: '🌱', progress: 30, live: false, desc: 'Measure soil moisture and activate a water pump when plants are dry.' },
  { name: 'RFID Access System', pkg: 'explorer', cat: 'Electronics Lab', level: 'Intermediate', icon: '🪪', progress: 15, live: false, desc: 'Create secure card-based access with status feedback.' },
  { name: 'Obstacle Avoidance Robot', pkg: 'inventor', cat: 'Robotics Arena', level: 'Advanced', icon: '🤖', progress: 60, live: false, desc: 'Build a robot that scans, reverses and selects a safe direction.' },
  { name: 'Delivery Robot', pkg: 'inventor', cat: 'Robotics Arena', level: 'Advanced', icon: '🚚', progress: 10, live: false, desc: 'Design a controllable robot for moving small payloads.' },
  { name: 'Clap Lamp', pkg: 'tinker', cat: 'Electronics Lab', level: 'Beginner', icon: '💡', progress: 0, live: false, desc: 'Use sound to control a lamp.' },
  { name: 'DIY Elevator', pkg: 'tinker', cat: 'Makerspace', level: 'Beginner', icon: '🛗', progress: 20, live: false, desc: 'Create a moving lift model with floor control.' },
  { name: 'Line Following Robot', pkg: 'explorer', cat: 'Robotics Arena', level: 'Intermediate', icon: '🏎️', progress: 0, live: false, desc: 'Use IR sensors to follow a path.' },
  { name: 'Drone Fundamentals', pkg: 'inventor', cat: 'Drone Academy', level: 'Advanced', icon: '🚁', progress: 0, live: false, desc: 'Learn drone components, safety and mission planning.' },
  { name: 'Wildlife Explorer', pkg: 'starter', cat: 'Future Tech Hub', level: 'Beginner', icon: '🦁', progress: 80, live: false, desc: 'Build an interactive animal-learning app.' },
  { name: 'Smart Home Venture', pkg: 'entrepreneur', cat: 'Future Tech Hub', level: 'Advanced', icon: '🏠', progress: 0, live: false, desc: 'Prototype, cost and pitch a connected-home product.' }
];

export const componentsList = [
  ['Arduino Uno', '🧠'], 
  ['Breadboard', '▦'], 
  ['Ultrasonic', '👀'], 
  ['Servo Motor', '💪'], 
  ['LED', '💡'], 
  ['Buzzer', '🔔'], 
  ['RFID RC522', '🪪'], 
  ['Soil Sensor', '🌱'], 
  ['Rain Sensor', '🌧️'], 
  ['L298N', '⚙️'], 
  ['DC Motor', '⚡'], 
  ['5V Supply', '🔋']
];
