## Robot Challenge

`Company: NetConsult`

`Language: TypeScript`

`Start time: 12:44 - 2024-03-12`

- Develop an api that moves a robot around on a grid (flat surface with defined size)
- Grid position (0, 0) should be the upper left corner
- You are given the initial starting point (x,y) of a robot and the direction (N,S,E,W) it is facing.
- The robot receives an array of commands.
- Implement commands that move the robot forward/backward (f,b).
- Implement commands that turn the robot left/right (l,r).
- "If a given sequence of commands encounters an obstacle or is out of bounds, the robot should stop and report the obstacle. For example if it hits an obstacle or wall it should stop immediately without executing any more commands.
- Implement detection if the new position is inside the bounds before moving to the new position.
- Implement obstacle detection before each move to a new square.

Test Cases

- The robot is on a 100×100 grid at location (0, 0) and facing SOUTH. The robot is given the commands "fflff" and should end up at (2, 2)
- The robot is on a 50×50 grid at location (1, 1) and facing NORTH. The robot is given the commands "fflff" and should end up at (1, 0)
- The robot is on a 100×100 grid at location (50, 50) and facing NORTH. The robot is given the commands "fflffrbb" but there is an obstacle at (48, 50) and should end up at (48, 49)

Bonus

- Ability to implement different rule sets for flat surface or a globe where you warp when you get out of bounds

Hints: use multiple classes, TDD and a healthy approach to VCS

---

Created git repository and added my first init.
Created my .gitignore with some basic values, which I will add to if needed.

Map structure

```
project-root/
|-- api/
|   |-- src/
|   |   |-- classes/
|   |   |   |-- Board.ts
|   |   |   |-- Position.ts
|   |   |   |-- Robot.ts
|   |   |-- __tests__/
|   |   |   |-- Robot.test.ts
|-- build/
|-- node_modules/
|-- tsconfig.json
|-- package.json
```

```
npm init -y
npm i jest @types/jest ts-node typescript ts-jest
tsc --init
```

Created jest.config.ts and tslint.json with configuration.

Created my first test to check startposition for the robot, making sure it is correct at x: 0 and y: 0.
I built the test which failed, then I created the class to set the values for the robot and the test passes.
