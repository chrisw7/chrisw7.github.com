---
title: Quantum in Python
layout: page
mathjax: true
school: University of Waterloo
categories: python
order: 8
years: Spring 2017 - Spring 2018
img: qho.png
links:
  - "[Repo on GitHub](https://github.com/chrisw7/quantum-in-jupyter)"
---

  <div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="1-The-Quantum-Harmonic-Oscillator">The Quantum Harmonic Oscillator<a class="anchor-link" href="#1-The-Quantum-Harmonic-Oscillator">&#182;</a></h3><p>Applying the Hamiltonian Operator on a given wave function, $\Psi$ results in the Schrödinger Equation,</p>
<p>$$ i\hbar  {\frac {\partial }{\partial t}}\Psi (\mathbf {r} ,t)={\hat {H}}\Psi (\mathbf {r} ,t) $$</p>
<p>for which solutions (to the time-independent Schrödinger eqn) exist for certan 'eigenenergies'. To visualize these eigenenergies and their corresponding eigenfunctions for a quantum harmonic oscillator, we must first construct the system in which the quantum mechanical particle will exist.</p>
<h3 id="Constructing-a-parabolic-potential">Constructing a parabolic potential<a class="anchor-link" href="#Constructing-a-parabolic-potential">&#182;</a></h3><p>To start, import required libraries and define the required constants used to define potential energy of the system.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="o">%</span><span class="k">matplotlib</span> inline

<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">matplotlib.mlab</span> <span class="k">as</span> <span class="nn">mlab</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="c1">#import plotly.plotly as py</span>

<span class="kn">from</span> <span class="nn">ipywidgets</span> <span class="k">import</span> <span class="o">*</span>
<span class="kn">from</span> <span class="nn">matplotlib</span> <span class="k">import</span> <span class="n">animation</span><span class="p">,</span> <span class="n">rc</span>
<span class="kn">from</span> <span class="nn">IPython.display</span> <span class="k">import</span> <span class="n">HTML</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">hbar</span> <span class="o">=</span> <span class="mf">1.05e-14</span>      <span class="c1">#reduced planks constant in units of Å^2*kg/s</span>
<span class="n">hbarSI</span> <span class="o">=</span> <span class="mf">1.055e-34</span>   <span class="c1">#&quot;---------------------&quot; in units of m^2*kg/s</span>
<span class="n">m</span> <span class="o">=</span> <span class="mf">1.6266e-27</span>       <span class="c1">#mass of particle in units of kg</span>
<span class="n">eV</span> <span class="o">=</span> <span class="mf">1.602e-19</span>       <span class="c1">#1 electron volt in units of J</span>

<span class="c1">#Define QHO potential parameters</span>
<span class="n">omega</span> <span class="o">=</span> <span class="mf">5.6339e14</span>
<span class="n">eta</span> <span class="o">=</span> <span class="mi">2</span>
<span class="n">x_0</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">hbar</span><span class="o">/</span><span class="p">(</span><span class="n">m</span><span class="o">*</span><span class="n">omega</span><span class="p">))</span>
<span class="n">a</span> <span class="o">=</span> <span class="mi">4</span><span class="o">*</span><span class="n">x_0</span> <span class="c1">#width of potential in Å</span>

<span class="c1"># of finite difference steps</span>
<span class="n">N</span> <span class="o">=</span> <span class="mi">100</span>

<span class="c1">#Create potential</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="o">-</span><span class="n">a</span><span class="p">,</span><span class="n">a</span><span class="p">,</span><span class="n">N</span><span class="p">)</span>
<span class="n">V</span> <span class="o">=</span> <span class="mf">0.5</span><span class="o">*</span><span class="n">omega</span><span class="o">**</span><span class="mi">2</span><span class="o">*</span><span class="n">m</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">power</span><span class="p">(</span><span class="nb">abs</span><span class="p">(</span><span class="n">x</span><span class="p">),</span><span class="n">eta</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Discretizing-the-1D-Hamiltonian">Discretizing the 1D Hamiltonian<a class="anchor-link" href="#Discretizing-the-1D-Hamiltonian">&#182;</a></h3><p>In order to solve the Schrodinger equation analytically we will discretize the Hamiltonian operator using a fintite-difference approximation. In matrix form, the discretized Hamiltonian can be written in the form</p>
<p>$$
{\mathbf  {\hat{H}}}={\frac  {\hbar ^{2}}{2m}}{\frac  {d^{2}}{dx^{2}}}+V(x)={\begin{pmatrix}\ldots &amp;-t&amp;0&amp;0&amp;0\\-t&amp;V_{{-1}}+2t&amp;-t&amp;0&amp;0\\0&amp;-t&amp;V_{0}+2t&amp;-t&amp;0\\0&amp;0&amp;-t&amp;V_{1}+2t&amp;-t\\0&amp;0&amp;0&amp;-t&amp;\ldots \\\end{pmatrix}}
$$</p>
<p>where $V(x)$ is the potential energy of the system and $t\equiv {\frac  {\hbar ^{2}}{2ma^{2}}}$. Because the Hamiltonian is the operator associated with the total energy of the system, applying the Hamiltonian to a wavefunction creates an eigenvalue problem that we can solve to determine the eigenenergies &amp; eigenfunctions associated with the system we've constructed.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">dx</span> <span class="o">=</span> <span class="mi">2</span><span class="o">*</span><span class="n">a</span><span class="o">/</span><span class="n">N</span>

<span class="c1">#Create tridiagonal Laplacian for Hamiltonian (TODO: use diag insead?)</span>
<span class="k">def</span> <span class="nf">hamiltonian2</span><span class="p">(</span><span class="n">N</span><span class="p">,</span> <span class="n">V</span><span class="p">,</span> <span class="n">m</span><span class="p">):</span>
    
    <span class="n">U</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">((</span><span class="n">N</span><span class="p">,</span><span class="n">N</span><span class="p">))</span>
    
    
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="n">N</span><span class="p">):</span>
        <span class="n">U</span><span class="p">[</span><span class="n">i</span><span class="p">,</span><span class="n">i</span><span class="p">]</span><span class="o">=</span> <span class="o">-</span><span class="mi">2</span>
        <span class="k">if</span> <span class="n">i</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
            <span class="n">U</span><span class="p">[</span><span class="n">i</span><span class="p">,</span> <span class="n">i</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
        <span class="k">if</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">N</span><span class="o">-</span><span class="mi">1</span><span class="p">:</span>
            <span class="n">U</span><span class="p">[</span><span class="n">i</span><span class="p">,</span><span class="n">i</span><span class="o">+</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>

    <span class="c1">#Compute Hamiltonian and solve eigenvalue problem</span>
    <span class="k">return</span> <span class="o">-</span><span class="p">(</span><span class="n">hbar</span><span class="o">**</span><span class="mi">2</span><span class="o">/</span><span class="p">(</span><span class="mi">2</span><span class="o">*</span><span class="n">m</span><span class="o">*</span><span class="n">eV</span><span class="p">))</span><span class="o">*</span><span class="n">U</span><span class="o">/</span><span class="n">dx</span><span class="o">**</span><span class="mi">2</span> <span class="o">+</span> <span class="n">np</span><span class="o">.</span><span class="n">diag</span><span class="p">(</span><span class="n">V</span><span class="p">)</span>

<span class="n">E</span><span class="p">,</span><span class="n">v</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">eigh</span><span class="p">(</span><span class="n">hamiltonian2</span><span class="p">(</span><span class="n">N</span><span class="p">,</span> <span class="n">V</span><span class="p">,</span> <span class="n">m</span><span class="p">))</span>
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>With the eigenvalue problem solved we can visualize the eigenfunctions of the quantum harmonic oscillator we've constructed for a few of the low-energy eigenstates. The QHO is a good approximation of simple chemical bonds (see original pdf). Note that the absolute magnitudes of the position/energy are not meaningfully normalized.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#Plot QHO potential</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="n">V</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">ylim</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span><span class="mf">1.25</span><span class="o">*</span><span class="n">np</span><span class="o">.</span><span class="n">max</span><span class="p">(</span><span class="n">v</span><span class="p">[:,</span><span class="mi">2</span><span class="p">]</span><span class="o">/</span><span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">dx</span><span class="p">)</span><span class="o">+</span><span class="n">E</span><span class="p">[</span><span class="mi">2</span><span class="p">])])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlim</span><span class="p">([</span><span class="o">-.</span><span class="mi">3</span><span class="p">,</span><span class="o">.</span><span class="mi">3</span><span class="p">])</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">&#39;QHO Eigenfunctions&#39;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">&#39;Position [Å]&#39;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">&#39;Energy&#39;</span><span class="p">)</span>

<span class="c1">#Overlay eigenfunctions</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">):</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">axhline</span><span class="p">(</span><span class="n">y</span><span class="o">=</span><span class="n">E</span><span class="p">[</span><span class="n">i</span><span class="p">],</span><span class="n">color</span><span class="o">=</span><span class="s1">&#39;k&#39;</span><span class="p">,</span><span class="n">ls</span><span class="o">=</span><span class="s2">&quot;:&quot;</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="o">-</span><span class="n">v</span><span class="p">[:,</span><span class="n">i</span><span class="p">]</span><span class="o">/</span><span class="n">np</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">dx</span><span class="p">)</span><span class="o">+</span><span class="n">E</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>

<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="Visualizing-a-time-dependent-wavepacket">Visualizing a time-dependent wavepacket<a class="anchor-link" href="#Visualizing-a-time-dependent-wavepacket">&#182;</a></h3><p>Using our solutions to the eigenvalue problem presented by the Schrodinger equation we can create a wavepacket in the center of the potential by weighting the eigenfunctions with a Gaussian distribution and re-introducing the time-dependent term.</p>
<p>Whereas the momentum of a single wave can be known with certainty (consequently implying that its position in space is uncertain and that its wave function is evenly distributed throughout space), the superposition of a number of waves plane waves results in a distribution of momentums and a wave 'packet' whose position is increasingly localized in space. Here we use a normal/Gaussian distribution of waves to create a 'Gaussian' wavepacket. The general form of a wavepacket (from <a href="https://www.wikipedia.com/en/Wave_packet">Wikipedia</a>) can be expressed as:</p>
<p>$$
u(x,t) = \frac{1}{\sqrt{2\pi}} \int^{\infty}_{-\infty} A(k) ~ e^{i(kx-\omega(k)t)}dk
$$</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">normalize</span><span class="p">(</span><span class="n">vec</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">vec</span><span class="o">/</span><span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">norm</span><span class="p">(</span><span class="n">vec</span><span class="p">)</span>

<span class="c1">#Project normalized Gaussian onto eigenfunction</span>
<span class="k">def</span> <span class="nf">createPacket</span><span class="p">(</span><span class="n">mu</span><span class="p">,</span> <span class="n">sig</span><span class="p">,</span> <span class="n">e_functions</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">normalize</span><span class="p">(</span><span class="n">mlab</span><span class="o">.</span><span class="n">normpdf</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="n">N</span><span class="p">),</span><span class="n">mu</span><span class="p">,</span><span class="n">sig</span><span class="p">))</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">v</span><span class="p">)</span>

<span class="c1">#Create wavepacket centered in well</span>
<span class="n">mu</span> <span class="o">=</span> <span class="mf">0.5</span>
<span class="n">sig</span> <span class="o">=</span> <span class="mf">0.05</span>
<span class="n">wavePacket</span> <span class="o">=</span> <span class="n">createPacket</span><span class="p">(</span><span class="n">mu</span><span class="p">,</span><span class="n">sig</span><span class="p">,</span><span class="n">v</span><span class="p">)</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt"></div>


<div class="output_subarea output_stream output_stderr output_text">
<pre>C:\Users\cm3willi\anaconda3\lib\site-packages\ipykernel_launcher.py:6: MatplotlibDeprecationWarning: scipy.stats.norm.pdf
  
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[20]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="o">%%</span><span class="k">capture</span>

steps = 100
t = np.linspace(.18e-51,.19e-51,steps)

timePacket = np.zeros((steps,N))

#Introduce time dependency and project new amplitudes onto eigenfunctions
for i in range(steps):
    timeDep = np.exp(-1j*E*t[i]/hbarSI)
    b1 = np.diag(wavePacket*np.real(timeDep))
    c1 = normalize(np.sum(v.dot(b1),axis=1).T)
    timePacket[i,:] = np.conj(c1)*c1 #square wavefuntion to obtain probabilities

#Static plot of time evolution of probability densities 
def pltProb(i):
    #Generate Plot    
    fig, ax1 = plt.subplots()
    plt.title(&#39;Probability Distribution of Wavepacket Over Time&#39;)
    plt.xlabel(&#39;x [Å]&#39;)
    plt.ylabel(&#39;$\mathregular{|\Psi|^2}$&#39;)
    ax2 = ax1.twinx()
    
    #Handle array inputs
    if np.size(i) == 1:
        ax1.plot(x,np.real(timePacket[i-1,:].T))
    else:
        ax1.plot(x,np.real(timePacket[i[0]:i[-1]+1,:].T))
        ax1.legend([&#39;$\mathregular{t_&#39; + str(i) + &#39;}$&#39; for i in range(steps)])
    
    #Overlay parabolic potential
    ax2.plot(x,V,&#39;g--&#39;)
    ax2.legend(&#39;V(x)&#39;, loc=&#39;best&#39;)
    ax1.set_ylim([0,1.25*np.max(timePacket[0,:])])
    ax2.yaxis.set_visible(False)
    plt.show
    

fig, ax = plt.subplots();

ax2 = ax.twinx();
ax2.yaxis.set_visible(False)

ax.set_xlim(-0.5,0.5)
ax.set_ylim(0, 0.15)

line, = ax.plot([],[], lw=2);
plt.title(&#39;Probability Distribution of Wavepacket Over Time&#39;)

def init():
    ax.legend([&#39;$\Psi^2(x)$&#39;], loc=4)
    ax2.legend([&#39;V(x)&#39;],       loc=3)
    ax2.plot(x,V,&#39;k--&#39;)

    line.set_data([],[])
    return line,

def animate(i):
    x_out = x;
    y_out = np.real(timePacket[i-1,:].T)
    line.set_data(x_out, y_out)
    return line,

anim = animation.FuncAnimation(fig, animate, init_func=init, frames=steps, interval=50, blit=True)
pltProb(range(steps))
#Uncomment to enable interactivity:
interact(pltProb,i=IntSlider(min = 1,max = steps, value = 1));
</pre></div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[21]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">HTML</span><span class="p">(</span><span class="n">anim</span><span class="o">.</span><span class="n">to_jshtml</span><span class="p">())</span>
</pre></div>

</div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

<div class="prompt output_prompt">Out[21]:</div>



<div class="output_html rendered_html output_subarea output_execute_result">

<link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/
css/font-awesome.min.css">
<script language="javascript">
  /* Define the Animation class */
  function Animation(frames, img_id, slider_id, interval, loop_select_id){
    this.img_id = img_id;
    this.slider_id = slider_id;
    this.loop_select_id = loop_select_id;
    this.interval = interval;
    this.current_frame = 0;
    this.direction = 0;
    this.timer = null;
    this.frames = new Array(frames.length);

    for (var i=0; i<frames.length; i++)
    {
     this.frames[i] = new Image();
     this.frames[i].src = frames[i];
    }
    document.getElementById(this.slider_id).max = this.frames.length - 1;
    this.set_frame(this.current_frame);
  }

  Animation.prototype.get_loop_state = function(){
    var button_group = document[this.loop_select_id].state;
    for (var i = 0; i < button_group.length; i++) {
        var button = button_group[i];
        if (button.checked) {
            return button.value;
        }
    }
    return undefined;
  }

  Animation.prototype.set_frame = function(frame){
    this.current_frame = frame;
    document.getElementById(this.img_id).src =
            this.frames[this.current_frame].src;
    document.getElementById(this.slider_id).value = this.current_frame;
  }

  Animation.prototype.next_frame = function()
  {
    this.set_frame(Math.min(this.frames.length - 1, this.current_frame + 1));
  }

  Animation.prototype.previous_frame = function()
  {
    this.set_frame(Math.max(0, this.current_frame - 1));
  }

  Animation.prototype.first_frame = function()
  {
    this.set_frame(0);
  }

  Animation.prototype.last_frame = function()
  {
    this.set_frame(this.frames.length - 1);
  }

  Animation.prototype.slower = function()
  {
    this.interval /= 0.7;
    if(this.direction > 0){this.play_animation();}
    else if(this.direction < 0){this.reverse_animation();}
  }

  Animation.prototype.faster = function()
  {
    this.interval *= 0.7;
    if(this.direction > 0){this.play_animation();}
    else if(this.direction < 0){this.reverse_animation();}
  }

  Animation.prototype.anim_step_forward = function()
  {
    this.current_frame += 1;
    if(this.current_frame < this.frames.length){
      this.set_frame(this.current_frame);
    }else{
      var loop_state = this.get_loop_state();
      if(loop_state == "loop"){
        this.first_frame();
      }else if(loop_state == "reflect"){
        this.last_frame();
        this.reverse_animation();
      }else{
        this.pause_animation();
        this.last_frame();
      }
    }
  }

  Animation.prototype.anim_step_reverse = function()
  {
    this.current_frame -= 1;
    if(this.current_frame >= 0){
      this.set_frame(this.current_frame);
    }else{
      var loop_state = this.get_loop_state();
      if(loop_state == "loop"){
        this.last_frame();
      }else if(loop_state == "reflect"){
        this.first_frame();
        this.play_animation();
      }else{
        this.pause_animation();
        this.first_frame();
      }
    }
  }

  Animation.prototype.pause_animation = function()
  {
    this.direction = 0;
    if (this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  Animation.prototype.play_animation = function()
  {
    this.pause_animation();
    this.direction = 1;
    var t = this;
    if (!this.timer) this.timer = setInterval(function() {
        t.anim_step_forward();
    }, this.interval);
  }

  Animation.prototype.reverse_animation = function()
  {
    this.pause_animation();
    this.direction = -1;
    var t = this;
    if (!this.timer) this.timer = setInterval(function() {
        t.anim_step_reverse();
    }, this.interval);
  }
</script>

<div class="animation" align="center">
    <img id="_anim_imgf9f96c36e021490d82ff3c39e9b4c168">
    <br>
    <input id="_anim_sliderf9f96c36e021490d82ff3c39e9b4c168" type="range" style="width:350px"
           name="points" min="0" max="1" step="1" value="0"
           onchange="animf9f96c36e021490d82ff3c39e9b4c168.set_frame(parseInt(this.value));">
    <br>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.slower()"><i class="fa fa-minus"></i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.first_frame()"><i class="fa fa-fast-backward">
        </i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.previous_frame()">
        <i class="fa fa-step-backward"></i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.reverse_animation()">
        <i class="fa fa-play fa-flip-horizontal"></i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.pause_animation()"><i class="fa fa-pause">
        </i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.play_animation()"><i class="fa fa-play"></i>
        </button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.next_frame()"><i class="fa fa-step-forward">
        </i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.last_frame()"><i class="fa fa-fast-forward">
        </i></button>
    <button onclick="animf9f96c36e021490d82ff3c39e9b4c168.faster()"><i class="fa fa-plus"></i></button>
  <form action="#n" name="_anim_loop_selectf9f96c36e021490d82ff3c39e9b4c168" class="anim_control">
    <input type="radio" name="state"
           value="once" > Once
    <input type="radio" name="state"
           value="loop" checked> Loop
    <input type="radio" name="state"
           value="reflect" > Reflect
  </form>
</div>


<script src="{{ site.baseurl }}/assets/anim.js" type="text/javascript"></script>

</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div>
<div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>As expected of a harmonic oscillator, the wavefunction oscillates (over an extremely short period) while remaining centered in the harmonic potential. Because the wavefunction remains centered, the expectation of the position and momentum of the particle will be zero while it remains in its bound state.</p>
<hr>
<h3 id="References">References<a class="anchor-link" href="#References">&#182;</a></h3><ol>
<li><a href="https://wiki.physics.udel.edu/phys824/Discretization_of_1D_Hamiltonian">Discretization of 1D Hamiltonian</a></li>
<li><a href="https://www.wikipedia.com/en/Schr%C3%B6dinger_equation">Schrodinger Equation</a></li>
<li><a href="http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/eigen.html">Eigenvalues and Eigenfunctions</a></li>
<li><a href="http://nbviewer.jupyter.org/gist/rpmuller/5920182">A Crash Course in Python for Scientists</a></li>
</ol>
<p><span style="color:gray;">Based on projects assigned in University of Waterloo NanoEng Program's Quantum Mechanics course (NE 232 - Instructor/Year: David Corey, 2015). Created as an introduction to using  Python/Jupyter notebooks</span></p>
</div>
</div>
</div>
    </div>
  </div>


