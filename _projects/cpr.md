---
title: SmartCPR
layout: page
school: McMaster University
categories: RD bio MATLAB
order: 2
years: FEB 2015 - MAY 2016
img: cpr.png
links:
  - "[<em>Reference Paper</em>: Feedback on the Rate and Depth of Chest Compressions during CPR Using Only Accelerometers](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0150139)"
  - "[Project Repository on GitHub](https://github.com/chrisw7/SMART-Moyo)"
  - "[Companion App (under development)](https://play.google.com/store/apps/details?id=com.smartcpr.junaid.smartcpr)"
---
<div class="intro mc">
   Low-cost, lightweight, sensor-enabled CPR training mannequins
</div>

Under the direct supervision of the President of the Royal Society of Canada's Academy of Science I <b>designed and patented</b> a low-cost and lightweight prototype CPR mannequin outfitted with real-time objective feedback.

<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/lWmUnHOuilY?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
<div style="color:#999;text-align: center;">
  <b>Left:</b> A video I created showing early prototypes and explaining the motivation for the project.
</div>

As part of McMaster University's ongoing CPR initiative, promotional content for this technology was be translated into a number of languages to make it available to developing countries that stand to benefit the most from accessible CPR training technology.

The main challenge associated with using low-cost sensors to provide feedback on the depth and rate of CPR compressions is the inherent drift associated with the signal from inertial sensors like accelerometers, which is only exacerbated by the double-integration required to extract displacements.
 
<div style="color:#999;text-align: center;">
  <img src="images/drift.png">
  The spectral analysis technique used to reconstruct a drift-free displacement signal from an accelerometer is shown above using real compression data (implemented in MATLAB).
</div>

To circumvent this issue, I identified a novel digital signal processing technique in a 2016 PLOS One <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0150139">publication</a> that takes advantage of the periodic nature of CPR compressions and the fast Fourier transform (`fft`) algorithm to extract fundamental info from finite segments of sensor data that can be used to reconstruct a drift free signal in near real-time. 

My implementation of this algorithm for our prototype <b>formed the basis of a companion training <a href="https://play.google.com/store/apps/details?id=com.smartcpr.junaid.smartcpr">app</a></b> that was developled after my departure and is currently under developlment.

Early trials using the protoype mannequin and software were promising enough to prompt the disclosure of our work to the university patent office. As part of this disclosure process I worked closely with a medical doctor to draft a detailed patent claim & conflict analysis (as well as tentative distribution plans).