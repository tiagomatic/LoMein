module.exports = {
  name:   'Checkboxes',
  state:  'Alpha',
  examples: [
    {
      html: '\
<form>\n\
	<p>\n\
	    <label for="choice-1" class="checkbox-label">\n\
		    <input type="checkbox" id="choice-1">\n\
		    <span class="label-text">Unchecked Item</span>\n\
	    </label>\n\
	</p>\n\
	<p>\n\
	    <label for="choice-2" class="checkbox-label">\n\
		    <input type="checkbox" id="choice-2" checked="checked">\n\
		    <span class="label-text">Checked Item</span>\n\
	    </label>\n\
	</p>\n\
</form>'
}
  ]
};