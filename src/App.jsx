import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  {
    name: 'neural net in c++',
    desc: 'a feedforward neural network from scratch, no libraries. learns XOR via backprop.',
    tags: ['c++', 'ml'],
    link: 'https://github.com/xafffix/NeuralNet',
  },
  {
    name: 'neuron-shit-visualization',
    desc: '3d viz of a neural net. glowing neurons, pulses crawling the wires. computes nothing, looks sick.',
    tags: ['three.js', 'webgl'],
    link: 'https://github.com/xafffix/neuron-shit-visualization',
  },
  {
    name: 'this portfolio',
    desc: 'the thing you are looking at right now. react + vite, dark and minimal.',
    tags: ['react', 'vite'],
    link: 'https://github.com/xafffix',
  },
]

const STACK = ['c++', 'javascript', 'react', 'three.js', 'python', 'node', 'lua', 'css']

export default function App() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = 0.5
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [])

  function toggleMusic() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play(); setPlaying(true) }
    else { a.pause(); setPlaying(false) }
  }

  return (
    <div className="page">
      {/* hero */}
      <section className="hero">
        <img className="pfp" src="/pfp.png" alt="me" />
        <h1 className="name">xafffix</h1>
        <p className="loc">France, Paris</p>

        <button className={`music ${playing ? 'on' : ''}`} onClick={toggleMusic}>
          <span className="bars"><i></i><i></i><i></i><i></i></span>
          {playing ? 'now playing' : 'play music'}
        </button>

        <nav className="links">
          <a href="https://github.com/xafffix" target="_blank" rel="noreferrer">github</a>
          <a href="https://discord.com/invite/Qjz5Hdxram" target="_blank" rel="noreferrer">discord</a>
        </nav>
      </section>

      {/* about */}
      <section className="block">
        <h2 className="h2">about</h2>
        <p className="prose">
          self-taught dev who builds weird stuff for fun. mostly low-level things, graphics,
          and whatever keeps me up at night. i like making computers do pointless things
          beautifully.
        </p>
      </section>

      {/* projects */}
      <section className="block">
        <h2 className="h2">projects</h2>
        <div className="projects">
          {PROJECTS.map(p => (
            <a key={p.name} className="project" href={p.link} target="_blank" rel="noreferrer">
              <div className="project__top">
                <span className="project__name">{p.name}</span>
                <span className="project__arrow">→</span>
              </div>
              <p className="project__desc">{p.desc}</p>
              <div className="project__tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* stack */}
      <section className="block">
        <h2 className="h2">stack</h2>
        <div className="stack">
          {STACK.map(s => <span key={s} className="chip">{s}</span>)}
        </div>
      </section>

      {/* contact */}
      <section className="block contact">
        <h2 className="h2">say hi</h2>
        <p className="prose">
          want to build something dumb together? or just say hi. find me on github or discord up top.
        </p>
      </section>

      <footer className="foot">© {new Date().getFullYear()}xafffix · paris</footer>

      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  )
}
