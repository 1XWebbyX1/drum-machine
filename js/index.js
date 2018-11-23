var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //Array of Objects to map keys and audio----------------------------
var obj = [
{ key: 'Q', keyCode: 81, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', text: 'Heater-1' },
{ key: 'W', keyCode: 87, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', text: 'Heater-2' },
{ key: 'E', keyCode: 69, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', text: 'Heater-3' },
{ key: 'A', keyCode: 65, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', text: 'Heater-4' },
{ key: 'S', keyCode: 83, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', text: 'Clap' },
{ key: 'D', keyCode: 68, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', text: 'Open-HH' },
{ key: 'Z', keyCode: 90, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', text: "Kick-n'-Hat" },
{ key: 'X', keyCode: 88, audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', text: 'Kick' },
{ key: 'C', keyCode: 67, audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', text: 'Closed-HH' }];




//REACT___________________________________________________________________________


//Drum pads _______________________________________________________________
var DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this.state = {
      id: '' };

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }

  //adding event listener _______________________________________
  _createClass(DrumPad, [{ key: 'componentDidMount', value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    //-------------------------------------------------------------

    //removing event listener________________________________________
  }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    //-----------------------------------------------------------------
  }, { key: 'handleKeyPress', value: function handleKeyPress(
    e) {
      if (e.keyCode === this.props.keyCode) {
        this.handleClick();
      }
    } }, { key: 'handleClick', value: function handleClick()

    {
      //playing audio for a key 
      var audio = document.getElementById(this.props.id);
      audio.currentTime = 0;
      audio.play();
      //----------------------

      //adding animation for current pressed key
      var str = 'div-' + this.props.id;
      $('#' + str).addClass('float');
      setTimeout(function () {
        $('#' + str).removeClass('float');
      }, 1000);
      //--------------------------------------


      //animations for display text
      $('.display-text').animate(
      { opacity: 0.5 },
      100,
      function () {
        $('.display-text').animate({ opacity: 1 }, 100);
      });

      $('.display-text').text(this.props.display);
      //--------------------------------
    } }, { key: 'render', value: function render()


    {
      return (
        React.createElement('div', { id: 'div-' + this.props.id, className: 'drum-pad', onClick: this.handleClick },
          React.createElement('h3', { id: 'h3-' + this.props.id }, this.props.text),
          React.createElement('audio', { id: this.props.id, className: 'clip', src: this.props.src })));


    } }]);return DrumPad;}(React.Component);

//--------------------------------------------------------------------------------


//PadStore holding all the drum pads________________________________________________
var PadStore = function (_React$Component2) {_inherits(PadStore, _React$Component2);function PadStore() {_classCallCheck(this, PadStore);return _possibleConstructorReturn(this, (PadStore.__proto__ || Object.getPrototypeOf(PadStore)).apply(this, arguments));}_createClass(PadStore, [{ key: 'render', value: function render()
    {
      var padStore = obj.map(function (a) {
        return (
          React.createElement(DrumPad, { id: a.key, text: a.key, src: a.audio, keyCode: a.keyCode, color: a.color, display: a.text }));

      });

      return (
        React.createElement('div', { 'class': 'pad-store' },
          padStore));


    } }]);return PadStore;}(React.Component);

//------------------------------------------------------------------------------------



//wrapping component___________________________________
var
App = function (_React$Component3) {_inherits(App, _React$Component3);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'wrapper' },
          React.createElement(Svg, null),
          React.createElement('h3', { 'class': 'display-text' }),
          React.createElement(PadStore, null)));


    } }]);return App;}(React.Component);

//-----------------------------------------------------




//svg Component-------------------------------------------------------------------
var Svg = function (_React$Component4) {_inherits(Svg, _React$Component4);function Svg() {_classCallCheck(this, Svg);return _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));}_createClass(Svg, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', height: '200px', viewBox: '-8 0 512 512.00015', width: '200px' }, React.createElement('path', { d: 'm102.226562 461.925781 49.648438-103.199219h-99.300781zm0 0', fill: '#717582' }), React.createElement('path', { d: 'm248.347656 461.394531 48.484375-102.667969h-96.972656zm0 0', fill: '#717582' }), React.createElement('path', { d: 'm394.46875 461.929688 49.648438-103.203126h-99.300782zm0 0', fill: '#717582' }), React.createElement('path', { d: 'm380.820312 503.421875-59.964843-124.644531-58.816407 124.546875c-2.5 5.296875-7.835937 8.675781-13.691406 8.675781-5.859375 0-11.191406-3.378906-13.691406-8.675781l-58.820312-124.546875-59.964844 124.644531c-2.523438 5.242187-7.828125 8.578125-13.644532 8.578125-5.820312 0-11.125-3.335938-13.648437-8.578125l-69.609375-144.695313h-5.625v138.128907c0 8.363281 6.78125 15.144531 15.140625 15.144531h365.984375c-5.820312 0-11.125-3.335938-13.648438-8.578125zm0 0', fill: '#333436' }), React.createElement('path', { d: 'm408.113281 503.421875c-2.523437 5.242187-7.828125 8.578125-13.648437 8.578125h73.742187c8.363281 0 15.140625-6.78125 15.140625-15.144531v-138.128907h-5.621094zm0 0', fill: '#333436' }), React.createElement('path', { d: 'm408.148438 165.582031 86.351562-142.59375c4.332031-7.152343 2.042969-16.460937-5.109375-20.796875-7.15625-4.332031-16.46875-2.042968-20.796875 5.109375l-86.367188 142.613281c4.757813 1.734376 9.355469 3.925782 13.726563 6.570313 4.398437 2.664063 8.472656 5.714844 12.195313 9.097656zm0 0', fill: '#18181A' }), React.createElement('path', { d: 'm396.371094 247.964844c6.609375-10.910156 8.570312-23.738282 5.527344-36.125-3.042969-12.382813-10.726563-22.84375-21.632813-29.449219-7.464844-4.519531-16.007813-6.910156-24.703125-6.910156-16.613281 0-32.273438 8.820312-40.871094 23.015625-6.605468 10.910156-8.570312 23.738281-5.527344 36.125 3.042969 12.382812 10.726563 22.84375 21.632813 29.449218 7.46875 4.519532 16.007813 6.910157 24.703125 6.910157 16.613281 0 32.273438-8.820313 40.871094-23.015625zm0 0', fill: '#18181A' }), React.createElement('path', { d: 'm114.464844 149.914062-86.367188-142.613281c-4.328125-7.152343-13.640625-9.441406-20.796875-5.109375-7.152343 4.335938-9.441406 13.644532-5.109375 20.796875l86.351563 142.59375c3.722656-3.382812 7.796875-6.433593 12.195312-9.097656 4.371094-2.644531 8.972657-4.835937 13.726563-6.570313zm0 0', fill: '#18181A' }), React.createElement('path', { d: 'm187.527344 234.621094c3.042968-12.386719 1.078125-25.214844-5.527344-36.121094-8.597656-14.199219-24.257812-23.019531-40.871094-23.019531-8.695312 0-17.238281 2.390625-24.703125 6.910156-10.90625 6.605469-18.589843 17.066406-21.632812 29.453125-3.042969 12.382812-1.082031 25.210938 5.527343 36.121094 8.597657 14.195312 24.257813 23.015625 40.871094 23.015625 8.695313 0 17.234375-2.386719 24.699219-6.90625 10.910156-6.609375 18.59375-17.070313 21.636719-29.453125zm0 0', fill: '#18181A' }), React.createElement('path', { d: 'm483.351562 328.441406v-28.480468c0-8.363282-6.78125-15.144532-15.144531-15.144532h-439.722656c-8.363281 0-15.140625 6.78125-15.140625 15.144532v28.480468zm0 0', fill: '#000d33' })));


    } }]);return Svg;}(React.Component);



//render app___________________________________________________________-
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));