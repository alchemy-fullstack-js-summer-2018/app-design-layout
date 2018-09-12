import React, { Component } from 'react';

import hiwatt from '../../assets/hiwatt-dr103.jpg';
import deluxe from '../../assets/1964-fender-deluxe-reverb.jpg';
import ac30 from '../../assets/1964-vox-ac30tb-amp-u2.jpg';
import bassman from '../../assets/bassman-50.jpg';
import ampeg from '../../assets/AmpegV4.jpg';
import superbass from '../../assets/1974-Marshall-MKII-Super-Bass.jpg';


export default class Amps extends Component {

  render() {

    return (
      <div>
        <section className="amps-container">
          <div>
            <h2>Hiwatt</h2>
            <img className="amp-image" src={hiwatt}></img>
            <p>Although its often associated with the Pete Townshend (who would test their durability night after night), it was a favorite of  David Gilmour, in Pink FLoyd, not to mention the Moody Blues, the Stones and beyond. Although the DR103 looks a bit like a Marshall, it certainly does not sound like one. This was the result of a vastly different design.</p>
            <p>The Hiwatt DR103 is notably louder and can also run much cleaner than 100-watt Marshalls when needed, and they also have tremendous headroom available. Playing a Hiwatt at a loud volume is, well, an experience. The Hiwatt DR103 design is based around the use of four EL-34 power tubes and four 12AX7 preamp tubes. The transformers are set up so that the amp can be used with various line voltages around the world and speaker impedance can also be set to 4, 8, or 16 ohms with two speaker outputs wired in parallel.</p>
          </div>
          <div>
            <h2>Vox AC 30 Top Boost</h2>
            <img className="amp-image" src={ac30}></img>
            <p>Vox engineer Dick Denney created the AC30 when Hank Marvin, guitarist for Britain’s the Shadows, complained that his 15-watt Vox AC15 couldn’t be heard over the screams of fans when they backed pop sensation Cliff Richard. Vox introduced the 30-watt AC30 in 1958, offering it in 1x12 and 2x12 configurations, and with a single tone control.</p>
            <p>In late 1960, the amp was redesigned with three, rather than two, channels, each with two inputs, and offered with an optional Top Boost, or Brilliance, circuit, which introduced an extra gain stage and separate bass and treble controls. The Top Boost feature proved popular enough that it became standard on the AC30/6 (so named for its six inputs). Its chimey high end was a signature of the Beatles’ early recordings and was later favored by guitarists like Brian May, Tom Petty, Peter Buck and The Edge, whose 1964 AC30/6 has been featured on every U2 album.</p>
          </div>
          <div>
            <h2>Fender Bassman</h2>
            <img className="amp-image" src={bassman}></img>
            <p>Launched in 1951, the Bassman was one of Fender&apos;s original iconic amps. Starting in 1972, Fender produced a number of variations on the Bassman with varying wattage and speaker size. These amps had a separate head and cabinet. The Bassman 50 specifically used two 15-inch speakers and 50 watts. </p>
          </div>
          <div>
            <h2>Ampeg V-4</h2>
            <img className="amp-image" src={ampeg}></img>
            <p>How’s the V4 different? For starters, it has an extremely unique tube complement in both the preamp and the power stage. Two 12AX7s drive the front end, which has a passive James tone stack—an interesting circuit with a pair of filters that have an almost notching effect at lower settings, but that instill a bit of character when set flat, and offer a surprising boost when cranked. It’s a subtractive filter, meaning that it takes away some guitar signal when used, but its tweakability is worth the tradeoff. There are also two switches that set either input’s sensitivity at 0 dB or pads them at -9 or -6 dBs. A 6K11 tube—a nifty bottle containing two 12AX7 sections and one lower-gain triode section (that’s right, three triodes in one valve!)—boosts and changes the input-signal impedance (via the cathode follower) in order to better drive the inductor-based midrange-selection switch, which sets the midrange knob’s midpoint at 300, 1,000, or 3,000 Hz. Each of the switch’s settings effectively reinvents the way the bass and treble controls react.</p>
            <p>But wait, there’s more! A 12DW7 valve (which is similar to a 12AU7) drives the preamp-out and power-amp-in connections—two flexible options that, even today, are pretty specialized and forward thinking. Meanwhile, the 12DW7’s second triode stage is used as a paraphase inverter, and a 6CG7 drives the reverb tank. The V4 also uses a solid-state rectifier and offers separate taps for screen voltages on the power transformer.</p>
            <p>As with the Beamish, the unusual circuit would mean nothing if the V4’s full-bodied tone didn’t utterly dominate. If you want to brutalize your audience with thunderous lows, this amp has you covered—especially through something like an old Kustom 2x15 speaker cabinet. The 7027-driven power section stays pretty clean throughout the travel of the volume controls, although higher settings do elicit a pleasing distortion with glassy top end but no hint of harshness. Even aggressive tones remain smooth and creamy. The input-sensitivity options are fantastic for making sure you get the amp’s best tones from guitars with varying output levels—but they’re also great for getting the drive characteristics you prefer at different amp volumes. The tone controls offer incredible flexibility, and at higher settings they can have a big impact on the amount of drive available.</p>
            <p>Though V4s have gained some momentum in the used market recently, you can still find them for around $450 to $600—which is truly a steal!</p>
          </div>
          <div>
            <h2>Fender Deluxe Reverb</h2>
            <img className="amp-image" src={deluxe}></img>
            <p>Fender’s Deluxe Reverb, introduced late 1963, has become a standard on the scene for several good reasons. Though there are many contenders, this is arguably the ultimate club amp – the ideal grab-and-go for virtually any gig with minimal fuss. A lot of studio players have preferred the Princeton Reverb – which also has a two-6V6 output stage, tremolo, and reverb – but the Deluxe’s heftier 22-watt output and larger speaker (12″ versus 10″) give it enough firmness and headroom to hold its onions for pristine clean tones at reasonable volumes if you don’t push it too hard, and pedal-steel players have even been known to get away with a Deluxe Reverb in some venues. That said, it’s still not difficult to get it to break up sweetly without blowing the doors off most establishments.</p>
            <p>Without jumping to modern channel-switchers and exotic multi-effects units, a Deluxe Reverb can handle anything this side of metal. Heard all over classic pop and country recordings of the ’60s and ’70s (Roy Buchanan cranked one into ecstasy for his extreme Tele wrangling), it has long been a favorite of indie-roots-leaning Telecaster player Chuck Prophet, and Blink-182’s Tom Delonge, who uses a pair of ’em.</p>
          </div>
          <div>
            <h2>Marshall Super Bass</h2>
            <img className="amp-image" src={superbass}></img>
            <p>A Super Bass from the late 60 era will have just a hair less gain and in fact will sound closer to the MK II and JTM 45/100 amps that preceded it. Super Bass amps pack quite a wallop of power – or at least they feel that way because of how the circuit is tuned. In any case, the basic Super Lead and Super Bass circuit are both extremely similar and conversion to either type is very easy to do.</p>
          </div>
        </section>  
      </div>

    );
  }
}