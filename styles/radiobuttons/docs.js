module.exports = {
  name:   'Radio Buttons',
  state:  'Alpha',
  examples: [
    {
      html: '\
<form>\n\
	<input type="radio" name="item-name" value="item-1">\n\
	<label>Static Item</label>\n\
	<br>\n\
	<input type="radio" name="item-name" value="item-2" checked="true">\n\
	<label>Selected Item</label>\n\
	<br>\n\
	<input type="radio" name="item-name" value="item-3" disabled="true">\n\
	<label>Disabled Item</label>\n\
</form>'
	}
  ]
};