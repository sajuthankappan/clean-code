import './style.css'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highligtht from 'reveal.js/plugin/highlight/highlight.esm'
import Notes from 'reveal.js/plugin/notes/notes.esm';

let deck = new Reveal({
  plugins: [ Markdown, Highligtht, Notes ]
})
deck.initialize({
  slideNumber: true,
  hash: true
});
