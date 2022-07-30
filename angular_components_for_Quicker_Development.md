---
layout: page
title: Angular Components for Quicker Development
description: Creating an angular component library with a storybook
image: assets/images/navitus-storybook.jpg
nav-menu: true
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1>Angular Components at Navitus</h1>
		</header>
<!-- Content -->
<h2 id="content">An easier way to do work</h2>
	<p>
Currently today Navitus has entire angular webpage templates that you can start a website from the ground up with, but this library is inaccessible unless the proper credentials are sought out. On top of this, Navitus suffers from a problem of not having a standardized look and feel across all of its websites. Thus with this in mind I wanted to make a standardized look and feel to all components we use in our websites, and make them easily accessible to the everyday developer. With that in mind the following were made
	</p>
<div class="row">
	<div class="6u 12u$(small)">
		<h3>NPM Package</h3>
			<p><span class="image left"><img src="{% link assets/images/npm-logo.jpg %}" alt="" /></span>
We often take for granted these things, something as easy as running one line in cli, and then you have access to all these things. Well Navitus currently doesn't have any such package "publically" available, but they could have one in the future (or even privately available). Currently it's difficult to find, and thus I just made one of my own. This can be found <a href="https://www.npmjs.com/package/navitus-components-library">here</a>. The components added are the following
			</p>
    	<h4>Components</h4>
    	<ul>
    		<li>Checkbox</li>
    		<li>Modal</li>
    		<li>Percentage</li>
			<li>Polar</li>
    	</ul>
    </div>
    <div class="6u$ 12u$(small)">
    	<h3>Storybook</h3>
    		<p><span class="image right"><img src="{% link assets/images/storybook-logo.jpg %}" alt="" /></span>
We also have a need to physically interact with these components to learn about them. This streamlines UI development, testing, and documentation. We have one physical repository that just downloads our npm package into a project, and then we create a storybook story for each component in the npm package.
		</p>
		<p>
A link to the components storybook can be found <a href="https://dillonreedy.github.io/navitus-hiltc-storybook/?path=/story/example-introduction--page">here</a>. While the storybook documentation can be found <a href="https://storybook.js.org/">here</a>.
	    	</p>
    </div>
</div>
<hr class="major" />
<h2 id="content">In the future</h2>
<p>Some upcoming things we have planned for this work are:
    	<ol>
    		<li>Creating an automated pipeline to publish the npm package on push</li>
    		<li>Adding all of our components to the storybook</li>
    	</ol>
</p>
