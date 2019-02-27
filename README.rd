
1. Final decision on approach:
	- Since the JS logic supporting the creating and communication of the iframe will be generated and served from the OMNI-API server, an ad hoc solution for has been chosen: creating a custom web component, using no framework
	- Bundle all the omni js in the omni microserver using webpack
	- Tranpile ES6 using webpack to ensure IE11 support

2. Polyfills
	- Our custom web component will be provided in the platform, using the same one currenly supporting the new FE Architecture
For local development, custom polyfills will be provided. 

3. Potential issues:
	- Investigate relevance of console warning message on why having sandbox attribute -> issue?
	-