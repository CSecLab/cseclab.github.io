---
layout: page
title: FCDroid
---

**FCDroid** (**F**rame **C**onfusion An**droid**)  is a tool to detect automatically the **Frame** **Confusion** vulnerability in Android hybrid apps. 
**Hybrid apps** have been proposed to overcome the limitations of both native and web apps, namely granting: 

* portability over platforms, 
* access to the whole OS API, 
* reasonable performance. 

Hybrid apps are programmed once in cross-platform web technologies (i.e., HTML, CSS, and JavaScript) as web apps, and then wrapped into a platform-specific native container, i.e., the WebView. The WebView may also allow the interaction between the web and the native part, acting like a bridge between the web code and the host OS API, thereby allowing to render HTML/CSS content, executeJavaScript code, and get access to the full OS API.

The **WebView** is an Android app component which embeds a mini-browser or rendering HTML/web pages and execute JavaScript code in mobile apps. The WebView allows defining ad-hoc interfaces, called *JavascriptInterfaces*, that enable to invoke Java methods from the JavaScript code. This feature allows cross-platform frameworks (e.g., Cordova, PhoneGap) to design a set of plugins that can be embedded in apps and offer platform-specific functionality, such as the API for the file-system or the GPS location. To enable JavaScript interfaces, the developer needs to bind a set of Java methods to a WebView component using the *addJavascriptInterface* method. The communication between the JavaScript and the Java code is handled by the WebView using asynchronous callbacks. In detail, when some JavaScript code invokes Java code through an interface bounded to the WebView, it does not wait for the result: instead, when the result is ready, the Java code outside the WebView invokes a JavaScript callback function, passing the result back to the web page. This mechanism provides improved app performance and responsiveness, particularly in the case of long-running operations that would block the UI.

The **Frame Confusion** is a vulnerability affecting hybrid apps that allows malicious interactions among the main web page (hereafter, *main frame*) and different web domains hosted in inner Iframe elements (hereafter, *child frames*) through the asynchronous bridge between the Java and the JavaScript code, granted by the WebView.To this aim, the WebView maintains a map that links the WebView instance with a list of function calls in the native code registered to the *JavascriptInterface*. However, such a map does not include any restriction on web domains (and thus web pages) that can access the attached interfaces. Thus, if the main frame contains multiple child frames, each of them can independently and asynchronously access all the interfaces bound to the WebView component, in order to interact with the Java code. For this reason, the WebView is forced to return the results of each native method invocation to the main frame and not to the actual caller, be it the main frame or a child frame, thereby causing potentially unintended interactions between different frames, i.e., the Frame Confusion. Such interaction between the native and the web worlds allows bypassing the **Same Origin Policy (SOP)**, which - in a standard web browser - completely isolates the contents of the main frame from the child frames, since they belong to different domains.


