(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{8459:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(19),o=n.n(a),i=n(88),s=n.n(i),c=n(92),r=n.n(c),l=n(97),u=n(99),p=n(100),d=n(93),h=n(106),m=n(426),g=n(115);class y extends s.a.PureComponent{constructor(){super(...arguments),o()(this,"onOkClick",()=>{this.props.onFinished()}),o()(this,"onGoToSettingsClick",()=>{this.props.onFinished(),p.a.fire(g.a.ViewUserSettings)}),o()(this,"onSetupClick",async()=>{h.a.createTrackedDialog("Restore Backup","",m.a,{onFinished:this.props.onFinished},null,!1,!0)})}render(){const e=l.getComponent("views.dialogs.BaseDialog"),t=l.getComponent("views.elements.DialogButtons"),n=s.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(d.a)("New Recovery Method")),a=s.a.createElement("p",null,Object(d.a)("A new Security Phrase and key for Secure Messages have been detected.")),o=s.a.createElement("p",{className:"warning"},Object(d.a)("If you didn't set the new recovery method, an attacker may be trying to access your account. Change your account password and set a new recovery method immediately in Settings."));let i;return i=u.a.get().getKeyBackupEnabled()?s.a.createElement("div",null,a,s.a.createElement("p",null,Object(d.a)("This session is encrypting history using the new recovery method.")),o,s.a.createElement(t,{primaryButton:Object(d.a)("OK"),onPrimaryButtonClick:this.onOkClick,cancelButton:Object(d.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})):s.a.createElement("div",null,a,o,s.a.createElement(t,{primaryButton:Object(d.a)("Set up Secure Messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(d.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})),s.a.createElement(e,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:n},i)}}o()(y,"propTypes",{newVersionInfo:r.a.object,onFinished:r.a.func.isRequired})}}]);
//# sourceMappingURL=6.js.map