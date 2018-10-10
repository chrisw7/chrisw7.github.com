---
title: CVD Graphene Membranes
layout: page
school: MIT/Harvard
categories: RD LabVIEW
order: 1
dates: Sep 2015 - Apr 2016
img-wide: graphene.png
links:
  - "[Publication: <em>Single-Layer Graphene Membranes Withstand Ultrahigh Applied Pressure - ACS Nano</em>](https://pubs.acs.org/doi/abs/10.1021/acs.nanolett.7b00442)"
  - "[Press Release: Graphene holds up under high pressure - phys.org](https://phys.org/news/2017-04-graphene-high-pressure.html)"
  - "[Profile: Prof. Karnik](http://meche.mit.edu/people/faculty/karnik@mit.edu)"
  - "[Example CVD Graphene Transfer by Dr. Ghoneim](https://www.youtube.com/watch?v=6M8mg2nDkL4)"
  - "[Engineering Report: Burst Strength of Atomically Thin Graphene Membranes](https://drive.google.com/file/d/1z-exmXpsXBgWXGzG2eFWdYn6lYXNllPZ/view?usp=sharing)"
  - "[LabVIEW DAQ Repository on GitHub](https://github.com/chrisw7/grnp-daq)"
---
<div class="intro mit">
  Atomically-thin high performance CVD graphene membranes
</div>

 Graphene consists of a single-layer network of <em>sp<sup>2</sup></em> bonded carbon atoms arranged in a hexagonal honeycomb lattice and is the simplest known allotrope of carbon. Despite its remarkable thinness, graphene is more than 100 times stronger than steel and conducts heat and electricity better than any material known to man. The isolation of these mono-crystalline graphitic films described in Novoselov and Geim’s seminal paper in late 2004 was of enormous interest to the world of academic science.

During my time as a visiting research assistant in the MIT Micro and Nanofluidics Lab I worked with Post-Doctoral Associate Dr. Luda Wang to investigate the mechanical strength graphene membranes (under the supervision of Professor <a href="http://meche.mit.edu/people/faculty/karnik@mit.edu">Rohit Karnik</a>). 

<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/6M8mg2nDkL4?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
<div style="color:#999;text-align: center;">A CVD Graphene Transfer close to the one used to fabricate our devices (performed by Dr. Mohamed Ghoneim of the Conformable Decoders Group at the MIT Media Lab).</div>

To measure the mechanical strength of the thin-film membranes, centimeter-sized sheets of CVD graphene were transferred onto a porous polymeric support before being mounted in a specially-designed high precision pressure measurement setup. 

Applying a pressure across the suspended membranes resulted in membrane deflection, and eventually, membrane failure, both of which could be observed through changes in flow resistance (as predicted by our theoretical models). The results of our work were <a href="https://pubs.acs.org/doi/abs/10.1021/acs.nanolett.7b00442">published</a> in ACS Nano in the Spring of 2017 and summarized in an engineering <a href="https://drive.google.com/file/d/1z-exmXpsXBgWXGzG2eFWdYn6lYXNllPZ/view?usp=sharing">report</a>.

<div style="color:#999;text-align: center;">
  <img src="images/splash.png">
  <b>Left:</b> Up- and downstream pressure sensors, pressure cell, and SLPM flow meter used in measurements. <b>Right:</b> Front panel of the custom LabVIEW Virtual Instrument (VI) used to acquire and process experiment data
</div>

I was solely responsible for the fabrication of each device and made recommendations for methods of improving the CVD Transfer Process that resulted in improved fabrication yield and turnaround. My biggest contribution, however, was facilitating the acquisition of critical data by designing automated data acquisition (DAQ) infrastructure using LabVIEW and compatible hardware that interfaced with the pressure sensors and flow meter used in our setup.

<div style="width: 600px; padding: 10px 20px; background-color: rgba(205,20,6,0.1); margin-bottom: 10px;">
<p style="float: left; width: 280px;padding-right: 20px;"><b>Supervisor Comments</b>: After I made the criterion clear, Chris made his own choice to contribute more to the project. I am impressed how quickly he responded to my constructive criticism and went above and beyond to adjust his schedule.
<br><br>
He independently taught himself the necessary skills to create relatively complicated data acquisition software, which was crucial to the success of the project. He is a nice and sweet person, and I enjoyed my time working with him</p>
<img style="margin: 10px 0px 5px 0;" src="images/karnik.jpg">
</div>