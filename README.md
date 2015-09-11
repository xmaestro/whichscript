# whichscript
A script for detecting which scripts are already present on a web page
## Usage
Include *whichscript*
```javascript
<script src="path/to/whichscript.js"></script>
```
Detect existing scripts on page like so
```javascript
var scripts = whichscript.detect();
```
`detect()` function returns an object with scrip names as keys and `true` or `false` as values. `true` is to say the script exists and `false` to say it does not. 
