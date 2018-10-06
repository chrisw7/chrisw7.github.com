---
title: Sensorized CPR Mannequins
layout: page
school: McMaster University
categories: RD bio MATLAB
order: 1
years: FEB 2015 - MAY 2016
img: cpr.png
links:
  - "[<em>Reference Paper</em>: Feedback on the Rate and Depth of Chest Compressions during Cardiopulmonary Resuscitation Using Only Accelerometers](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0150139)"
  - "[Project Repository on GitHub](https://github.com/chrisw7/SMART-Moyo)"
---
<div class="intro mc">
   Low-cost, lightweight, sensor enabled CPR training mannequins
</div>

Although CPR mannequins with electronic feedback already exist, they are prohibitively expensive, offer limited feedback, and are typically difficult to transport. 

Under the direct supervision of the President of the Royal Society of Canada's Academy of Science, Prof. Jamal Deen,<b>I designed and patented a lightweight prototype CPR mannequin outfitted with electronic feedback</b> that is inexpensive enough to be distributed in developing countries.

<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/lWmUnHOuilY?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
<div style="color:#999;text-align: center;">
  <b>Left:</b> A video I created showing early prototypes and explaining the motivation for the project. Promotional content for this technology would be translated into a number of languages to make it accessible to developing countries that stand to beenefit the most from acessible CPR training technology.
</div>

The main challenge associated with using inexpensive sensors to provide feedback on the depth and rate of CPR compressions is the inherent drift associated with the signal from accelerometers and other intertial sensors. The necessary double integration of this acceleration signal to derive the depth of compression only exaggerates this problem, making if difficult to provide the trainee with accurate feedback on their performance. 
 
<div style="color:#999;text-align: center;">
  <img src="images/drift.png">
  The spectral analysis technique used to reconstruct a drift-free displacement signal from an accelerometer is shown above using real compression data (implemented in MATLAB).
</div>

To circumvent this issue, I identified a novel digital signal processing technique in a 2016 PLOS One <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0150139">publication</a> that takes advantage of the periodic nature of CPR compressions and the fast Fourier transform (fft) algorithm to extract fundamental information from finite segments of accelerometer data that can be used to reconstruct a drift free signal in real time. Determining the rate of compression from this periodic reconstructed signal was trivial.

Early trials using this algorihtm and an inexpensive infltable CPR manequin equipped with a wireless accelerometer were promising enough to prompt the disclosure of our work to the Unversity patent office. As part of this disclosure process I worked with a medical doctor experienced in training CPR to draft a detailed patent claim & conflict analysis as well as tentative distribution plans.

Work developing a refined protoype featuring a mobile app (in compliance with the 2016 Canadian Consensus Guidelines on First Aid and CPR which emphasized a focus on acessible, mobile-first training technology) and identifying collaborators in developing countries continued after my departure.