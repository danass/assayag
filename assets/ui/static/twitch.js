!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Twitch = t() : e.Twitch = t() }(self, (function () {
    return function () {
        var e = { 228: function (e) { e.exports = function (e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)n[r] = e[r]; return n }, e.exports.__esModule = !0, e.exports.default = e.exports }, 858: function (e) { e.exports = function (e) { if (Array.isArray(e)) return e }, e.exports.__esModule = !0, e.exports.default = e.exports }, 646: function (e, t, r) { var n = r(228); e.exports = function (e) { if (Array.isArray(e)) return n(e) }, e.exports.__esModule = !0, e.exports.default = e.exports }, 713: function (e) { e.exports = function (e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }, e.exports.__esModule = !0, e.exports.default = e.exports }, 860: function (e) { e.exports = function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }, e.exports.__esModule = !0, e.exports.default = e.exports }, 884: function (e) { e.exports = function (e, t) { var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != r) { var n, o, a = [], i = !0, s = !1; try { for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0); } catch (e) { s = !0, o = e } finally { try { i || null == r.return || r.return() } finally { if (s) throw o } } return a } }, e.exports.__esModule = !0, e.exports.default = e.exports }, 521: function (e) { e.exports = function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }, e.exports.__esModule = !0, e.exports.default = e.exports }, 206: function (e) { e.exports = function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }, e.exports.__esModule = !0, e.exports.default = e.exports }, 38: function (e, t, r) { var n = r(858), o = r(884), a = r(379), i = r(521); e.exports = function (e, t) { return n(e) || o(e, t) || a(e, t) || i() }, e.exports.__esModule = !0, e.exports.default = e.exports }, 319: function (e, t, r) { var n = r(646), o = r(860), a = r(379), i = r(206); e.exports = function (e) { return n(e) || o(e) || a(e) || i() }, e.exports.__esModule = !0, e.exports.default = e.exports }, 8: function (e) { function t(r) { return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r) } e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports }, 379: function (e, t, r) { var n = r(228); e.exports = function (e, t) { if (e) { if ("string" == typeof e) return n(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0 } }, e.exports.__esModule = !0, e.exports.default = e.exports }, 545: function (e, t, r) { "use strict"; var n = r(713), o = r(38), a = r(8), i = r(319); function s(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) { if (Array.isArray(e) || (r = function (e, t) { if (!e) return; if ("string" == typeof e) return l(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r) return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t) }(e)) || t && e && "number" == typeof e.length) { r && (e = r); var n = 0, o = function () { }; return { s: o, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function (e) { throw e }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, i = !0, s = !1; return { s: function () { r = r.call(e) }, n: function () { var e = r.next(); return i = e.done, e }, e: function (e) { s = !0, a = e }, f: function () { try { i || null == r.return || r.return() } finally { if (s) throw a } } } } function l(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)n[r] = e[r]; return n } var u = r(447), c = r(20), p = r(490), f = r(806), d = Symbol("encodeFragmentIdentifier"); function y(e) { if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string") } function h(e, t) { return t.encode ? t.strict ? u(e) : encodeURIComponent(e) : e } function m(e, t) { return t.decode ? c(e) : e } function v(e) { return Array.isArray(e) ? e.sort() : "object" === a(e) ? v(Object.keys(e)).sort((function (e, t) { return Number(e) - Number(t) })).map((function (t) { return e[t] })) : e } function g(e) { var t = e.indexOf("#"); return -1 !== t && (e = e.slice(0, t)), e } function b(e) { var t = (e = g(e)).indexOf("?"); return -1 === t ? "" : e.slice(t + 1) } function _(e, t) { return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e } function E(e, t) { y((t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, t)).arrayFormatSeparator); var r = function (e) { var t; switch (e.arrayFormat) { case "index": return function (e, r, n) { t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r }; case "bracket": return function (e, r, n) { t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r }; case "colon-list-separator": return function (e, r, n) { t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r }; case "comma": case "separator": return function (t, r, n) { var o = "string" == typeof r && r.includes(e.arrayFormatSeparator), a = "string" == typeof r && !o && m(r, e).includes(e.arrayFormatSeparator); r = a ? m(r, e) : r; var i = o || a ? r.split(e.arrayFormatSeparator).map((function (t) { return m(t, e) })) : null === r ? r : m(r, e); n[t] = i }; case "bracket-separator": return function (t, r, n) { var o = /(\[\])$/.test(t); if (t = t.replace(/\[\]$/, ""), o) { var a = null === r ? [] : r.split(e.arrayFormatSeparator).map((function (t) { return m(t, e) })); void 0 !== n[t] ? n[t] = [].concat(n[t], a) : n[t] = a } else n[t] = r ? m(r, e) : r }; default: return function (e, t, r) { void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t } } }(t), n = Object.create(null); if ("string" != typeof e) return n; if (!(e = e.trim().replace(/^[?#&]/, ""))) return n; var i, l = s(e.split("&")); try { for (l.s(); !(i = l.n()).done;) { var u = i.value; if ("" !== u) { var c = p(t.decode ? u.replace(/\+/g, " ") : u, "="), f = o(c, 2), d = f[0], h = f[1]; h = void 0 === h ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? h : m(h, t), r(m(d, t), h, n) } } } catch (e) { l.e(e) } finally { l.f() } for (var g = 0, b = Object.keys(n); g < b.length; g++) { var E = b[g], S = n[E]; if ("object" === a(S) && null !== S) for (var A = 0, C = Object.keys(S); A < C.length; A++) { var P = C[A]; S[P] = _(S[P], t) } else n[E] = _(S, t) } return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((function (e, t) { var r = n[t]; return Boolean(r) && "object" === a(r) && !Array.isArray(r) ? e[t] = v(r) : e[t] = r, e }), Object.create(null)) } t.extract = b, t.parse = E, t.stringify = function (e, t) { if (!e) return ""; y((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, t)).arrayFormatSeparator); for (var r = function (r) { return t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r] }, n = function (e) { switch (e.arrayFormat) { case "index": return function (t) { return function (r, n) { var o = r.length; return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(i(r), null === n ? [[h(t, e), "[", o, "]"].join("")] : [[h(t, e), "[", h(o, e), "]=", h(n, e)].join("")]) } }; case "bracket": return function (t) { return function (r, n) { return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(i(r), null === n ? [[h(t, e), "[]"].join("")] : [[h(t, e), "[]=", h(n, e)].join("")]) } }; case "colon-list-separator": return function (t) { return function (r, n) { return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(i(r), null === n ? [[h(t, e), ":list="].join("")] : [[h(t, e), ":list=", h(n, e)].join("")]) } }; case "comma": case "separator": case "bracket-separator": var t = "bracket-separator" === e.arrayFormat ? "[]=" : "="; return function (r) { return function (n, o) { return void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : (o = null === o ? "" : o, 0 === n.length ? [[h(r, e), t, h(o, e)].join("")] : [[n, h(o, e)].join(e.arrayFormatSeparator)]) } }; default: return function (t) { return function (r, n) { return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(i(r), null === n ? [h(t, e)] : [[h(t, e), "=", h(n, e)].join("")]) } } } }(t), o = {}, a = 0, s = Object.keys(e); a < s.length; a++) { var l = s[a]; r(l) || (o[l] = e[l]) } var u = Object.keys(o); return !1 !== t.sort && u.sort(t.sort), u.map((function (r) { var o = e[r]; return void 0 === o ? "" : null === o ? h(r, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? h(r, t) + "[]" : o.reduce(n(r), []).join("&") : h(r, t) + "=" + h(o, t) })).filter((function (e) { return e.length > 0 })).join("&") }, t.parseUrl = function (e, t) { t = Object.assign({ decode: !0 }, t); var r = p(e, "#"), n = o(r, 2), a = n[0], i = n[1]; return Object.assign({ url: a.split("?")[0] || "", query: E(b(e), t) }, t && t.parseFragmentIdentifier && i ? { fragmentIdentifier: m(i, t) } : {}) }, t.stringifyUrl = function (e, r) { r = Object.assign(n({ encode: !0, strict: !0 }, d, !0), r); var o = g(e.url).split("?")[0] || "", a = t.extract(e.url), i = t.parse(a, { sort: !1 }), s = Object.assign(i, e.query), l = t.stringify(s, r); l && (l = "?".concat(l)); var u = function (e) { var t = "", r = e.indexOf("#"); return -1 !== r && (t = e.slice(r)), t }(e.url); return e.fragmentIdentifier && (u = "#".concat(r[d] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier)), "".concat(o).concat(l).concat(u) }, t.pick = function (e, r, o) { o = Object.assign(n({ parseFragmentIdentifier: !0 }, d, !1), o); var a = t.parseUrl(e, o), i = a.url, s = a.query, l = a.fragmentIdentifier; return t.stringifyUrl({ url: i, query: f(s, r), fragmentIdentifier: l }, o) }, t.exclude = function (e, r, n) { var o = Array.isArray(r) ? function (e) { return !r.includes(e) } : function (e, t) { return !r(e, t) }; return t.pick(e, o, n) } }, 490: function (e) { "use strict"; e.exports = function (e, t) { if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`"); if ("" === t) return [e]; var r = e.indexOf(t); return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)] } }, 447: function (e) { "use strict"; e.exports = function (e) { return encodeURIComponent(e).replace(/[!'()*]/g, (function (e) { return "%".concat(e.charCodeAt(0).toString(16).toUpperCase()) })) } }, 20: function (e) { "use strict"; var t = "%[a-f0-9]{2}", r = new RegExp(t, "gi"), n = new RegExp("(" + t + ")+", "gi"); function o(e, t) { try { return decodeURIComponent(e.join("")) } catch (e) { } if (1 === e.length) return e; t = t || 1; var r = e.slice(0, t), n = e.slice(t); return Array.prototype.concat.call([], o(r), o(n)) } function a(e) { try { return decodeURIComponent(e) } catch (a) { for (var t = e.match(r), n = 1; n < t.length; n++)t = (e = o(t, n).join("")).match(r); return e } } e.exports = function (e) { if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"); try { return e = e.replace(/\+/g, " "), decodeURIComponent(e) } catch (t) { return function (e) { for (var t = { "%FE%FF": "ï¿½ï¿½", "%FF%FE": "ï¿½ï¿½" }, r = n.exec(e); r;) { try { t[r[0]] = decodeURIComponent(r[0]) } catch (e) { var o = a(r[0]); o !== r[0] && (t[r[0]] = o) } r = n.exec(e) } t["%C2"] = "ï¿½"; for (var i = Object.keys(t), s = 0; s < i.length; s++) { var l = i[s]; e = e.replace(new RegExp(l, "g"), t[l]) } return e }(e) } } }, 729: function (e) { "use strict"; var t = Object.prototype.hasOwnProperty, r = "~"; function n() { } function o(e, t, r) { this.fn = e, this.context = t, this.once = r || !1 } function a(e, t, n, a, i) { if ("function" != typeof n) throw new TypeError("The listener must be a function"); var s = new o(n, a || e, i), l = r ? r + t : t; return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], s] : e._events[l].push(s) : (e._events[l] = s, e._eventsCount++), e } function i(e, t) { 0 == --e._eventsCount ? e._events = new n : delete e._events[t] } function s() { this._events = new n, this._eventsCount = 0 } Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), s.prototype.eventNames = function () { var e, n, o = []; if (0 === this._eventsCount) return o; for (n in e = this._events) t.call(e, n) && o.push(r ? n.slice(1) : n); return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o }, s.prototype.listeners = function (e) { var t = r ? r + e : e, n = this._events[t]; if (!n) return []; if (n.fn) return [n.fn]; for (var o = 0, a = n.length, i = new Array(a); o < a; o++)i[o] = n[o].fn; return i }, s.prototype.listenerCount = function (e) { var t = r ? r + e : e, n = this._events[t]; return n ? n.fn ? 1 : n.length : 0 }, s.prototype.emit = function (e, t, n, o, a, i) { var s = r ? r + e : e; if (!this._events[s]) return !1; var l, u, c = this._events[s], p = arguments.length; if (c.fn) { switch (c.once && this.removeListener(e, c.fn, void 0, !0), p) { case 1: return c.fn.call(c.context), !0; case 2: return c.fn.call(c.context, t), !0; case 3: return c.fn.call(c.context, t, n), !0; case 4: return c.fn.call(c.context, t, n, o), !0; case 5: return c.fn.call(c.context, t, n, o, a), !0; case 6: return c.fn.call(c.context, t, n, o, a, i), !0 }for (u = 1, l = new Array(p - 1); u < p; u++)l[u - 1] = arguments[u]; c.fn.apply(c.context, l) } else { var f, d = c.length; for (u = 0; u < d; u++)switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), p) { case 1: c[u].fn.call(c[u].context); break; case 2: c[u].fn.call(c[u].context, t); break; case 3: c[u].fn.call(c[u].context, t, n); break; case 4: c[u].fn.call(c[u].context, t, n, o); break; default: if (!l) for (f = 1, l = new Array(p - 1); f < p; f++)l[f - 1] = arguments[f]; c[u].fn.apply(c[u].context, l) } } return !0 }, s.prototype.on = function (e, t, r) { return a(this, e, t, r, !1) }, s.prototype.once = function (e, t, r) { return a(this, e, t, r, !0) }, s.prototype.removeListener = function (e, t, n, o) { var a = r ? r + e : e; if (!this._events[a]) return this; if (!t) return i(this, a), this; var s = this._events[a]; if (s.fn) s.fn !== t || o && !s.once || n && s.context !== n || i(this, a); else { for (var l = 0, u = [], c = s.length; l < c; l++)(s[l].fn !== t || o && !s[l].once || n && s[l].context !== n) && u.push(s[l]); u.length ? this._events[a] = 1 === u.length ? u[0] : u : i(this, a) } return this }, s.prototype.removeAllListeners = function (e) { var t; return e ? (t = r ? r + e : e, this._events[t] && i(this, t)) : (this._events = new n, this._eventsCount = 0), this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s }, 806: function (e) { "use strict"; e.exports = function (e, t) { for (var r = {}, n = Object.keys(e), o = Array.isArray(t), a = 0; a < n.length; a++) { var i = n[a], s = e[i]; (o ? -1 !== t.indexOf(i) : t(i, s, e)) && (r[i] = s) } return r } } }, t = {}; function r(n) { var o = t[n]; if (void 0 !== o) return o.exports; var a = t[n] = { exports: {} }; return e[n](a, a.exports, r), a.exports } r.d = function (e, t) { for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }; var n = {}; return function () {
            "use strict"; r.d(n, { default: function () { return A } });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var e = function (t, r) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]) })(t, r) }; function t(t, r) { if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null"); function n() { this.constructor = t } e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } var o = function () { return (o = Object.assign || function (e) { for (var t, r = 1, n = arguments.length; r < n; r++)for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; Object.create; Object.create; var a, i, s, l, u = r(729), c = "twitch-embed-player-proxy"; !function (e) { e.UpdateState = "UPDATE_STATE" }(a || (a = {})), function (e) { e.VideoWithChat = "video-with-chat", e.Video = "video" }(i || (i = {})), function (e) { e.AUTHENTICATE = "authenticate", e.VIDEO_READY = "video.ready", e.VIDEO_PLAY = "video.play", e.VIDEO_PAUSE = "video.pause", e.CAPTIONS = "captions", e.ENDED = "ended", e.ERROR = "error", e.ONLINE = "online", e.OFFLINE = "offline", e.PAUSE = "pause", e.PLAY = "play", e.PLAYBACK_BLOCKED = "playbackBlocked", e.PLAYING = "playing", e.READY = "ready", e.SEEK = "seek" }(s || (s = {})), function (e) { e[e.DisableCaptions = 0] = "DisableCaptions", e[e.EnableCaptions = 1] = "EnableCaptions", e[e.Pause = 2] = "Pause", e[e.Play = 3] = "Play", e[e.Seek = 4] = "Seek", e[e.SetChannel = 5] = "SetChannel", e[e.SetChannelID = 6] = "SetChannelID", e[e.SetCollection = 7] = "SetCollection", e[e.SetQuality = 8] = "SetQuality", e[e.SetVideo = 9] = "SetVideo", e[e.SetMuted = 10] = "SetMuted", e[e.SetVolume = 11] = "SetVolume" }(l || (l = {})); var p, f, d = function () { }; !function (e) { e[e.GeoBlocked = 1] = "GeoBlocked", e[e.UnsupportedDevice = 2] = "UnsupportedDevice", e[e.AnonymizerBlocked = 3] = "AnonymizerBlocked", e[e.CellularNetworkProhibited = 4] = "CellularNetworkProhibited", e[e.UnauthorizationEntitlements = 5] = "UnauthorizationEntitlements", e[e.VodRestricted = 6] = "VodRestricted", e[e.LVSCCUCap = 509] = "LVSCCUCap", e[e.Aborted = 1e3] = "Aborted", e[e.Network = 2e3] = "Network", e[e.CCUCapReached = 2001] = "CCUCapReached", e[e.Decode = 3e3] = "Decode", e[e.FormatNotSupported = 4e3] = "FormatNotSupported", e[e.ContentNotAvailable = 5e3] = "ContentNotAvailable", e[e.RendererNotAvailable = 6e3] = "RendererNotAvailable", e[e.SafariUnsupportedDevice = 7004] = "SafariUnsupportedDevice", e[e.Fatal = 8001] = "Fatal", e[e.FatalAuth = 8003] = "FatalAuth", e[e.Offline = 8002] = "Offline", e[e.WarnAuth = 8004] = "WarnAuth" }(p || (p = {})), function (e) { e.PREMIUM_CONTENT_RESTRICTED = "PREMIUM_CONTENT", e.VOD_RESTRICTED = "vod_manifest_restricted" }(f || (f = {})); var y = function (e) { function r(t) { var r = this.constructor, n = e.call(this, t) || this; return Object.setPrototypeOf(n, r.prototype), n.name = "MissingParameterError", n } return t(r, e), r }(Error), h = function (e) { function r(t) { var r = this.constructor, n = e.call(this, "Could not find the provided element: " + t) || this; return Object.setPrototypeOf(n, r.prototype), n.name = "MissingElementError", n } return t(r, e), r }(Error), m = r(545); var v; function g(e, t) { var r = m.stringify(o(o({}, e), { parent: b(e.parent), referrer: document.location.href })), n = ({ BUILD_BRANCH_NAME: '"main"' }.IS_DEV_BUILD ? function (e, t, r) { if (!t) return "²&"; var n = e.replace(/"/g, ""); return isNaN(parseInt(n, 10)) ? "https://" + r + "-" + n + ".twitch.tech" : "https://" + r + "-pr" + parseInt(n, 10) + ".twitch.tech" }('"main"', !0, t) : "https://" + t + ".twitch.tv") + "?" + r, a = document.createElement("iframe"); a.setAttribute("src", n), a.setAttribute("allowfullscreen", ""), a.setAttribute("scrolling", "no"), a.setAttribute("frameborder", "0"), a.setAttribute("allow", "autoplay; fullscreen"), a.setAttribute("title", "Twitch"); var i = "allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"; return "function" == typeof document.hasStorageAccess && "function" == typeof document.requestStorageAccess && (i += " allow-storage-access-by-user-activation"), a.setAttribute("sandbox", i), e.width && a.setAttribute("width", String(e.width)), e.height && a.setAttribute("height", String(e.height)), a } function b(e) { var t = document.domain; if (!e) return [t]; var r = Array.isArray(e) ? e : [e]; return t && -1 === r.indexOf(t) ? r.concat(t) : r } !function (e) { e.IDLE = "Idle", e.READY = "Ready", e.BUFFERING = "Buffering", e.PLAYING = "Playing", e.ENDED = "Ended" }(v || (v = {})); var _ = { channelName: "", channelID: "", collectionID: "", currentTime: 0, duration: 0, muted: !1, playback: v.IDLE, quality: "", qualitiesAvailable: [], stats: { videoStats: { backendVersion: "", bufferSize: 0, codecs: "", displayResolution: "", fps: 0, hlsLatencyBroadcaster: 0, latencyMode: "", playbackRate: 0, skippedFrames: 0, videoResolution: "" } }, videoID: "", volume: 0, ended: !1 }, E = function (e) { function r() { var t = e.call(this) || this; return t._embedWindow = null, t._playerState = _, window.addEventListener("message", t._handleResponses.bind(t)), t } return t(r, e), r.prototype._setWindowRef = function (e) { this._embedWindow = e }, r.prototype.disableCaptions = function () { this._sendCommand(l.DisableCaptions, null) }, r.prototype.enableCaptions = function () { this._sendCommand(l.EnableCaptions, null) }, r.prototype.pause = function () { this._sendCommand(l.Pause, null) }, r.prototype.play = function () { this._sendCommand(l.Play, null) }, r.prototype.seek = function (e) { this._sendCommand(l.Seek, e) }, r.prototype.setChannel = function (e) { this._sendCommand(l.SetChannel, e) }, r.prototype.setChannelId = function (e) { this._sendCommand(l.SetChannelID, e) }, r.prototype.setCollection = function (e, t) { this._sendCommand(l.SetCollection, [e, t]) }, r.prototype.setQuality = function (e) { this._sendCommand(l.SetQuality, e) }, r.prototype.setVideo = function (e) { this._sendCommand(l.SetVideo, e) }, r.prototype.setMuted = function (e) { var t = "boolean" != typeof e || e; this._sendCommand(l.SetMuted, t) }, r.prototype.setVolume = function (e) { this._sendCommand(l.SetVolume, e) }, r.prototype.getMuted = function () { return this._playerState.muted }, r.prototype.getVolume = function () { return this._playerState.volume }, r.prototype.getChannel = function () { return this._playerState.channelName }, r.prototype.getChannelId = function () { return this._playerState.channelID }, r.prototype.getCollection = function () { return this._playerState.collectionID }, r.prototype.getCurrentTime = function () { return this._playerState.currentTime }, r.prototype.getDuration = function () { return this._playerState.duration }, r.prototype.getEnded = function () { return this._playerState.ended }, r.prototype.getPlaybackStats = function () { return this._playerState.stats.videoStats }, r.prototype.getQualities = function () { return this._playerState.qualitiesAvailable }, r.prototype.getQuality = function () { return this._playerState.quality }, r.prototype.getVideo = function () { return this._playerState.videoID }, r.prototype.isPaused = function () { return this._playerState.playback === v.IDLE }, r.prototype.getPlayerState = function () { return this._playerState }, r.prototype._sendCommand = function (e, t) { if (this._embedWindow) { var r = { eventName: e, params: t, namespace: c }; this._embedWindow.postMessage(r, "*") } else console.warn("Cannot send player commands before the video player is initialized.          Please wait for the VIDEO_READY event before using the player API.") }, r.prototype._handleResponses = function (e) { if (this._embedWindow) { var t = e.data, r = e.source === this._embedWindow, n = t.namespace === c, o = t.eventName === a.UpdateState; r && n && o && (this._playerState = Object.assign({}, this._playerState, t.params)) } }, r }(d), S = function (e) { function r(t, r) { var n = e.call(this) || this; return n._options = {}, n._target = null, n._player = new E, n._eventEmitter = null, n._iframe = null, n._forwardEmbedEvents = function (e) { if (n._iframe) { var t = e.data, r = e.source === n._iframe.contentWindow, o = "twitch-embed" === t.namespace; r && o && n._eventEmitter.emit(t.eventName, t.params) } }, n.disableCaptions = n.getPlayer().disableCaptions.bind(n.getPlayer()), n.enableCaptions = n.getPlayer().enableCaptions.bind(n.getPlayer()), n.pause = n.getPlayer().pause.bind(n.getPlayer()), n.play = n.getPlayer().play.bind(n.getPlayer()), n.seek = n.getPlayer().seek.bind(n.getPlayer()), n.setChannel = n.getPlayer().setChannel.bind(n.getPlayer()), n.setChannelId = n.getPlayer().setChannelId.bind(n.getPlayer()), n.setCollection = n.getPlayer().setCollection.bind(n.getPlayer()), n.setQuality = n.getPlayer().setQuality.bind(n.getPlayer()), n.setVideo = n.getPlayer().setVideo.bind(n.getPlayer()), n.setMuted = n.getPlayer().setMuted.bind(n.getPlayer()), n.setVolume = n.getPlayer().setVolume.bind(n.getPlayer()), n.getMuted = n.getPlayer().getMuted.bind(n.getPlayer()), n.getVolume = n.getPlayer().getVolume.bind(n.getPlayer()), n.getChannel = n.getPlayer().getChannel.bind(n.getPlayer()), n.getChannelId = n.getPlayer().getChannelId.bind(n.getPlayer()), n.getCollection = n.getPlayer().getCollection.bind(n.getPlayer()), n.getCurrentTime = n.getPlayer().getCurrentTime.bind(n.getPlayer()), n.getDuration = n.getPlayer().getDuration.bind(n.getPlayer()), n.getEnded = n.getPlayer().getEnded.bind(n.getPlayer()), n.getPlaybackStats = n.getPlayer().getPlaybackStats.bind(n.getPlayer()), n.getPlayerState = n.getPlayer().getPlayerState.bind(n.getPlayer()), n.getQualities = n.getPlayer().getQualities.bind(n.getPlayer()), n.getQuality = n.getPlayer().getQuality.bind(n.getPlayer()), n.getVideo = n.getPlayer().getVideo.bind(n.getPlayer()), n.isPaused = n.getPlayer().isPaused.bind(n.getPlayer()), function (e) { var t = (null == e ? void 0 : e.channelId) && (null == e ? void 0 : e.stream); if (!e || !e.channel && !e.video && !e.collection && !t) throw new y("A channel, video, or collection id must be provided in options") }(r), n._options = r, n._target = function (e) { if (!e) throw new y("An element of type String or Element is required"); var t = "string" == typeof e ? document.getElementById(e) : e; if (!t) throw new h(e); if (1 !== t.nodeType) throw new y("An element of type String or Element is required"); return t }(t), n._eventEmitter = new u, n.render(), n } return t(r, e), r.prototype.addEventListener = function (e, t) { this._eventEmitter && this._eventEmitter.on(e, t) }, r.prototype.removeEventListener = function (e, t) { this._eventEmitter && this._eventEmitter.removeListener(e, t) }, r.prototype.getPlayer = function () { return this._player }, r.prototype.destroy = function () { var e, t; this._eventEmitter && this._eventEmitter.removeAllListeners(), window.removeEventListener("message", this._forwardEmbedEvents), null === (t = null === (e = this._iframe) || void 0 === e ? void 0 : e.parentNode) || void 0 === t || t.removeChild(this._iframe), this._eventEmitter = null, this._player._setWindowRef(null), this._target = null, this._iframe = null }, r.prototype.buildIframe = function () { return g(this._options, "embed") }, r.prototype.render = function () { if (this._target) { var e = this.buildIframe(); this._target.appendChild(e), this._iframe = e, window.addEventListener("message", this._forwardEmbedEvents), this._player._setWindowRef(this._iframe.contentWindow) } }, r.AUTHENTICATE = s.AUTHENTICATE, r.CAPTIONS = s.CAPTIONS, r.ENDED = s.ENDED, r.ERROR = s.ERROR, r.OFFLINE = s.OFFLINE, r.ONLINE = s.ONLINE, r.PAUSE = s.PAUSE, r.PLAY = s.PLAY, r.PLAYBACK_BLOCKED = s.PLAYBACK_BLOCKED, r.PLAYING = s.PLAYING, r.VIDEO_PAUSE = s.VIDEO_PAUSE, r.VIDEO_PLAY = s.VIDEO_PLAY, r.VIDEO_READY = s.VIDEO_READY, r.READY = s.READY, r.SEEK = s.SEEK, r.Errors = o({ ABORTED: p.Aborted, NETWORK: p.Network, DECODE: p.Decode, FORMAT_NOT_SUPPORTED: p.FormatNotSupported, CONTENT_NOT_AVAILABLE: p.ContentNotAvailable, RENDERER_NOT_AVAILABLE: p.RendererNotAvailable }, p), r }(d); var A = { Embed: S, Player: function (e) { function r(t, r) { return e.call(this, t, r) || this } return t(r, e), r.prototype.buildIframe = function () { return g(this._options, "player") }, r }(S) }
        }(), n = n.default
    }()
}));