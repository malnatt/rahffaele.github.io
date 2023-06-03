function play(){

let synth = new Tone.DuoSynth({
  voice0: {
    oscillator: {type: 'sawtooth'},
    envelope: {
      attack: 0.1,
      release: 4,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 200,
      octaves: 1,
      attack: 0,
      decay: 0,
      release: 1000
    }
  },
  voice1: {
    oscillator: {type: 'sawtooth'},
    envelope: {
      attack: 0.1,
      release: 4,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 200,
      octaves: 0,
      attack: 0,
      decay: 0,
      release: 1000
    }
  }
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
}

{}