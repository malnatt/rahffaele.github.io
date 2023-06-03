function play(){

let synth = new Tone.MonoSynth({
  oscillator: {type: 'sawtooth'},
  filterEnvelope: {
    baseFrequency: 200,
    octaves: 4
  }
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
}

{}