import { useState } from "react";

export function Welcome() {
  // State to hold the rotation angle of the background colors (0 to 360 degrees)
  const [hue, setHue] = useState(0);

  return (
    /* The parent wrapper with a deep dark gradient base */
    <main className="relative min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center text-white px-8 py-6 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* DYNAMIC CSS MESH GRADIENT BLOBS                                           */}
      {/* Controlled interactively by the hue slider state                         */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-all duration-75"
        style={{ filter: `hue-rotate(${hue}deg)` }}
      >
        
        {/* Top-Left Glowing Orb */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/25 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Mid-Right Glowing Orb */}
        <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Bottom-Left Glowing Orb */}
        <div className="absolute bottom-[-5%] left-[15%] w-[600px] h-[600px] rounded-full bg-green-500/20 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
        
      </div>
      {/* ========================================================================= */}

      {/* Interactive Translucent Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <title>Final Project</title>

        <div className="space-y-4 pt-4">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md">Our Final Project</h1>
          <h2>
            <span className="text-blue-400 font-semibold">Afra Batum</span>,{" "}
            <span className="text-pink-400 font-semibold">Deniz Boz</span> and{" "}
            <span className="text-green-400 font-semibold">Teun Nijeboer</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE BACKGROUND CONTROL PANEL                                      */}
        {/* ========================================================================= */}
        <div className="max-w-md mx-auto p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center gap-3 shadow-2xl">
          <label htmlFor="hue-slider" className="text-sm font-medium text-gray-300 flex justify-between w-full px-1">
            <span className="flex items-center gap-1.5">&#127912; Customize Background Theme</span>
            <span className="font-mono text-sm bg-slate-950/60 px-2 py-0.5 rounded-md border border-white/5 text-blue-400">{hue}°</span>
          </label>
          <input
            id="hue-slider"
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            className="w-full accent-blue-500 h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer border border-white/5"
          />
          <p className="text-[11px] text-gray-400 italic">Drag the slider to shift the gradient color wheel seamlessly.</p>
        </div>
        {/* ========================================================================= */}
      
        {/* Profile Cards Grid */}
        <div className="grid grid-cols-3 gap-4 min-h-[300px]">
          
          {/* Left Column: Afra */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-blue-500/20 text-white p-6 rounded-2xl flex flex-col items-center justify-start shadow-xl shadow-blue-950/10">
            <img 
              src="/afra.jpg" 
              alt="Afra" 
              className="w-24 h-24 rounded-full mx-auto my-4 object-cover border-2 border-blue-400/40 hover:scale-105 transition-transform shadow-md"
            />
            <h3 className="font-bold text-lg text-blue-300">About Me</h3>
            <p className="text-sm opacity-90">Hi! My name is Afra, I am 21 years old, and I am from Turkey. Currently, I am studying Industrial Engineering, which keeps me busy and motivated.</p>
            <br />
            <h3 className="font-bold text-lg text-blue-300">Hobbies</h3>
            <p className="text-sm opacity-90">In my free time, I have a wide range of interests. I absolutely love listening to music and trying new things, as I am always open to fresh experiences. I am also passionate about the outdoors, so hiking and nature photography are among my favorite activities.</p>
            <br />
            <h3 className="font-bold text-lg text-blue-300">Foods</h3>
            <ul className="list-disc list-inside text-left space-y-2 max-w-xs mx-auto text-gray-200">
              <li>&#127791; Lachmacun</li>
              <li>&#129365; Potatoes</li>
              <li>&#127846; Ice cream</li>
            </ul>
            <br />
            <div className="mt-auto w-full flex flex-col items-center gap-2">
              <h3 className="font-bold text-lg text-blue-300">Socials</h3>
              <a href="https://github.com/teunnije" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center border border-white/10"><span>View my GitHub</span></a>
              <a href="https://www.instagram.com/w.afra_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-amber-500/80 via-pink-500/80 to-purple-600/80 hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center shadow-lg"><span>Follow on Instagram</span></a>
              <a href="https://open.spotify.com/user/amftjcn7cpchhf5u8jj68rcra?si=6cec2728b8564e09" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#1DB954]/80 hover:bg-[#1DB954] text-black px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all w-full justify-center"><span>Listen on Spotify</span></a>
            </div>
          </div>

          {/* Middle Column: Deniz */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-pink-500/20 text-white p-6 rounded-2xl flex flex-col items-center justify-start shadow-xl shadow-pink-950/10">
            <img 
              src="/deniz.jpeg" 
              alt="Deniz" 
              className="w-24 h-24 rounded-full mx-auto my-4 object-cover border-2 border-pink-400/40 hover:scale-105 transition-transform shadow-md"
            />
            <h3 className="font-bold text-lg text-pink-300">About Me</h3>
            <p className="text-sm opacity-90">Hello, I am Deniz. I am 20 years old. I am an industrial engineering student and I am doing my exchange year at Mosbach.</p>
            <br />
            <h3 className="font-bold text-lg text-pink-300">Hobbies</h3>
            <p className="text-sm opacity-90">I enjoy playing volleyball, watching movies, listening to music, and playing the piano. I also like spending time with my friends and traveling to new places.</p>
            <br />
            <h3 className="font-bold text-lg text-pink-300">Foods</h3>
            <ul className="list-disc list-inside text-left space-y-2 max-w-xs mx-auto text-gray-200">
              <li>&#128566; Pastas</li>
              <li>&#129367; Chicken salad</li>
              <li>&#129478; Meatballs</li>
            </ul>
            <br />
            <div className="mt-auto w-full flex flex-col items-center gap-2">
              <h3 className="font-bold text-lg text-pink-300">Socials</h3>
              <a href="https://github.com/teunnije" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center border border-white/10"><span>View my GitHub</span></a>
              <a href="https://www.instagram.com/deniizboz_/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-amber-500/80 via-pink-500/80 to-purple-600/80 hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center shadow-lg"><span>Follow on Instagram</span></a>
              <a href="https://open.spotify.com/user/deniz_boz?si=65f3071184c84319" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#1DB954]/80 hover:bg-[#1DB954] text-black px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all w-full justify-center"><span>Listen on Spotify</span></a>
            </div>
          </div>

          {/* Right Column: Teun */}
          <div className="bg-slate-900/40 backdrop-blur-md border border-green-500/20 text-white p-6 rounded-2xl flex flex-col items-center justify-start shadow-xl shadow-green-950/10">
            <img 
              src="/teun.jpg" 
              alt="Teun" 
              className="w-24 h-24 rounded-full mx-auto my-4 object-cover border-2 border-green-400/40 hover:scale-105 transition-transform shadow-md"
            />
            <h3 className="font-bold text-lg text-green-300">About Me</h3>
            <p className="text-sm opacity-90">I'm Teun, 21 years old from The Netherlands. I'm a 3rd year mechatronics student who currently does an exchange in Mosbach</p>
            <br />
            <h3 className="font-bold text-lg text-green-300">Hobbies</h3>
            <p className="text-sm opacity-90">I like everything that has to do with music: listening, going to concerts and festivals, and collecting vinyl.</p>
            <br />
            <h3 className="font-bold text-lg text-green-300">Foods</h3>
            <ul className="list-disc list-inside text-left space-y-2 max-w-xs mx-auto text-gray-200">
              <li>&#127790; Nachos</li>
              <li>&#127830; Spareribs</li>
              <li>&#127828; Burgers</li>
            </ul>
            <br />
            <div className="mt-auto w-full flex flex-col items-center gap-2">
              <h3 className="font-bold text-lg text-green-300">Socials</h3>
              <a href="https://github.com/teunnije" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center border border-white/10"><span>View my GitHub</span></a>
              <a href="https://www.instagram.com/teun.nb/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-amber-500/80 via-pink-500/80 to-purple-600/80 hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all w-full justify-center shadow-lg"><span>Follow on Instagram</span></a>
              <a href="https://open.spotify.com/user/wkv9tytsol9nk0aean2utw3rg?si=1d0f3dd0e96d4cfc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#1DB954]/80 hover:bg-[#1DB954] text-black px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all w-full justify-center"><span>Listen on Spotify</span></a>
            </div>
          </div>

        </div>

        {/* Video Wrapper Box */}
        <div className="w-full flex flex-col items-center px-12 py-12 mt-12 bg-slate-900/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-6">Our Arduino Project: Home Safety System</h1>

          <div className="w-full flex flex-col items-center px-12 py-16 mt-6 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/5">
            <video src="/project.mp4" controls className="w-full aspect-video rounded-2xl shadow-2xl border border-white/10">
              Your browser does not support the video tag.
            </video>
            <p>The Smart Home Safety & Comfort Monitor is an integrated embedded system designed to automate home environments for enhanced energy efficiency and real-time hazard prevention. Built on the Arduino platform, this prototype seamlessly bridges environmental data collection with automated physical responses to simulate a modern smart home ecosystem.</p>
          </div>

          {/* Components Section */}
          <div className="w-full mt-12 p-6 bg-slate-900/20 border border-white/10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Components Used</h2>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
              
              {/* Sensors */}
              <div className="flex-1 bg-blue-500/5 backdrop-blur-sm p-5 rounded-xl shadow-md border border-blue-500/20 text-white">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">Sensors</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-lg text-center border border-blue-500/20 shadow-inner">
                    <span className="text-2xl mb-2 block">&#127777;</span>
                    <h4 className="font-semibold text-sm text-white">Temperature</h4>
                    <p className="text-xs text-gray-300 mt-1">DS18B20 Sensor</p>
                    <img src="/temperature.jpg" alt="temperature" className="w-50 h-50 rounded-xl mx-auto my-4 object-cover border border-white/10 hover:scale-105 transition-transform" />
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-lg text-center border border-blue-500/20 shadow-inner">
                    <span className="text-2xl mb-2 block">&#128266;</span>
                    <h4 className="font-semibold text-sm text-white">Ultrasonic</h4>
                    <p className="text-xs text-gray-300 mt-1">HC-SR04 distance</p>
                    <img src="/ultrasonic.jpg" alt="ultrasonic" className="w-50 h-50 rounded-xl mx-auto my-4 object-cover border border-white/10 hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Actuators */}
              <div className="flex-1 bg-green-500/5 backdrop-blur-sm p-5 rounded-xl shadow-md border border-green-500/20 text-white">
                <h3 className="text-lg font-semibold text-green-400 mb-4 text-center">Actuators</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-lg text-center border border-green-500/20 shadow-inner">
                    <span className="text-2xl mb-2 block">&#128680;</span>
                    <h4 className="font-semibold text-sm text-white">Buzzer</h4>
                    <p className="text-xs text-gray-300 mt-1">Piezo Alarm</p>
                    <img src="/piezo.jpg" alt="piezo" className="w-50 h-50 rounded-xl mx-auto my-4 object-cover border border-white/10 hover:scale-105 transition-transform" />
                  </div>
                  <div className="bg-slate-950/50 p-4 rounded-lg text-center border border-green-500/20 shadow-inner">
                    <span className="text-2xl mb-2 block">&#128161;</span>
                    <h4 className="font-semibold text-sm text-white">LED Light</h4>
                    <p className="text-xs text-gray-300 mt-1">Warning Indicator</p>
                    <img src="/led.jpg" alt="led" className="w-50 h-50 rounded-xl mx-auto my-4 object-cover border border-white/10 hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}