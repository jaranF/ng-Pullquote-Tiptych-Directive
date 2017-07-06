# Pullquote Triptych Angular Directive
![alt text](http://www.currahee.co.uk/media/i/ng-pullquote-triptych1.jpg "Desktop Triptych Directive")

The task is to make a CSS pullquote tryptich featuring elements in these order that sit side-by-side (desktop)
1\ A list of benfits on the lefthand side.
2\ A marketing picture in the middle
3\ A 'speech bubble'-like quote box with the words 'Oh Yes' in it or some other such text.

Other specifications for this Angular directive are that it should work responsively and also use SASS

## Usage 
**HTML**
```html
<div promo-triptych i8n-data="ctrl.i8nMessages"></div>`
```
**JavaScript**
```javascript
    .controller('MyControllerName', [function() {
            var self = this;
            self.i8nMessages = {
                quoteBoxMsg: '...Oh Yes!',
                promoBenefits: [
                    {reason: 'We believe in being there for you.'},
                    {reason: 'It\'s important that we live this through our policies.'},
                    {reason: 'We believe that every interaction matters.'},
                    {reason: 'We spend time making sure you\'re happy. Oh Yes!'}
                ]
            };
        }]
```
