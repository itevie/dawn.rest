/*! For license information please see main.2e254cc4.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      730: (t, e, n) => {
        var r = n(43), i = n(853);
        function a(t) {
          for (
            var e = "https://reactjs.org/docs/error-decoder.html?invariant=" +
                t,
              n = 1;
            n < arguments.length;
            n++
          ) e += "&args[]=" + encodeURIComponent(arguments[n]);
          return "Minified React error #" + t + "; visit " + e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var o = new Set(), s = {};
        function l(t, e) {
          c(t, e), c(t + "Capture", e);
        }
        function c(t, e) {
          for (s[t] = e, t = 0; t < e.length; t++) o.add(e[t]);
        }
        var u = !("undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement),
          h = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function g(t, e, n, r, i, a, o) {
          this.acceptsBooleans = 2 === e || 3 === e || 4 === e,
            this.attributeName = r,
            this.attributeNamespace = i,
            this.mustUseProperty = n,
            this.propertyName = t,
            this.type = e,
            this.sanitizeURL = a,
            this.removeEmptyString = o;
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ").forEach(function (t) {
            m[t] = new g(t, 0, !1, t, null, !1, !1);
          }),
          [["acceptCharset", "accept-charset"], ["className", "class"], [
            "htmlFor",
            "for",
          ], ["httpEquiv", "http-equiv"]].forEach(function (t) {
            var e = t[0];
            m[e] = new g(e, 1, !1, t[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (t) {
              m[t] = new g(t, 2, !1, t.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (t) {
            m[t] = new g(t, 2, !1, t, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ").forEach(function (t) {
              m[t] = new g(t, 3, !1, t.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (t) {
            m[t] = new g(t, 3, !0, t, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (t) {
            m[t] = new g(t, 4, !1, t, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (t) {
            m[t] = new g(t, 6, !1, t, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (t) {
            m[t] = new g(t, 5, !1, t.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function y(t) {
          return t[1].toUpperCase();
        }
        function v(t, e, n, r) {
          var i = m.hasOwnProperty(e) ? m[e] : null;
          (null !== i
            ? 0 !== i.type
            : r || !(2 < e.length) || "o" !== e[0] && "O" !== e[0] ||
              "n" !== e[1] && "N" !== e[1]) && (function (t, e, n, r) {
              if (
                null === e || "undefined" === typeof e ||
                function (t, e, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof e) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                            "aria-" !== t);
                    default:
                      return !1;
                  }
                }(t, e, n, r)
              ) return !0;
              if (r) return !1;
              if (null !== n) {
                switch (n.type) {
                  case 3:
                    return !e;
                  case 4:
                    return !1 === e;
                  case 5:
                    return isNaN(e);
                  case 6:
                    return isNaN(e) || 1 > e;
                }
              }
              return !1;
            }(e, n, i, r) && (n = null),
              r || null === i
                ? function (t) {
                  return !!h.call(p, t) ||
                    !h.call(f, t) && (d.test(t) ? p[t] = !0 : (f[t] = !0, !1));
                }(e) && (null === n
                  ? t.removeAttribute(e)
                  : t.setAttribute(e, "" + n))
                : i.mustUseProperty
                ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n
                : (e = i.attributeName,
                  r = i.attributeNamespace,
                  null === n
                    ? t.removeAttribute(e)
                    : (n = 3 === (i = i.type) || 4 === i && !0 === n
                      ? ""
                      : "" + n,
                      r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ").forEach(function (t) {
            var e = t.replace(b, y);
            m[e] = new g(e, 1, !1, t, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ").forEach(function (t) {
              var e = t.replace(b, y);
              m[e] = new g(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
            var e = t.replace(b, y);
            m[e] = new g(
              e,
              1,
              !1,
              t,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (t) {
            m[t] = new g(t, 1, !1, t.toLowerCase(), null, !1, !1);
          }),
          m.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          ),
          ["src", "href", "action", "formAction"].forEach(function (t) {
            m[t] = new g(t, 1, !1, t.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          M = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          D = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function F(t) {
          return null === t || "object" !== typeof t
            ? null
            : "function" === typeof (t = A && t[A] || t["@@iterator"])
            ? t
            : null;
        }
        var j, z = Object.assign;
        function N(t) {
          if (void 0 === j) {
            try {
              throw Error();
            } catch (n) {
              var e = n.stack.trim().match(/\n( *(at )?)/);
              j = e && e[1] || "";
            }
          }
          return "\n" + j + t;
        }
        var I = !1;
        function B(t, e) {
          if (!t || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e) {
              if (
                e = function () {
                  throw Error();
                },
                  Object.defineProperty(e.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" === typeof Reflect && Reflect.construct
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (c) {
                  r = c;
                }
                t.call(e.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              t();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var i = c.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];
              ) s--;
              for (; 1 <= o && 0 <= s; o--, s--) {
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s) {
                    do {
                      if (o--, 0 > --s || i[o] !== a[s]) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return t.displayName && l.includes("<anonymous>") &&
                          (l = l.replace("<anonymous>", t.displayName)),
                          l;
                      }
                    } while (1 <= o && 0 <= s);
                  }
                  break;
                }
              }
            }
          } finally {
            I = !1, Error.prepareStackTrace = n;
          }
          return (t = t ? t.displayName || t.name : "") ? N(t) : "";
        }
        function V(t) {
          switch (t.tag) {
            case 5:
              return N(t.type);
            case 16:
              return N("Lazy");
            case 13:
              return N("Suspense");
            case 19:
              return N("SuspenseList");
            case 0:
            case 2:
            case 15:
              return t = B(t.type, !1);
            case 11:
              return t = B(t.type.render, !1);
            case 1:
              return t = B(t.type, !0);
            default:
              return "";
          }
        }
        function H(t) {
          if (null == t) return null;
          if ("function" === typeof t) return t.displayName || t.name || null;
          if ("string" === typeof t) return t;
          switch (t) {
            case k:
              return "Fragment";
            case _:
              return "Portal";
            case M:
              return "Profiler";
            case S:
              return "StrictMode";
            case T:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof t) {
            switch (t.$$typeof) {
              case C:
                return (t.displayName || "Context") + ".Consumer";
              case E:
                return (t._context.displayName || "Context") + ".Provider";
              case P:
                var e = t.render;
                return (t = t.displayName) ||
                  (t = "" !== (t = e.displayName || e.name || "")
                    ? "ForwardRef(" + t + ")"
                    : "ForwardRef"),
                  t;
              case O:
                return null !== (e = t.displayName || null)
                  ? e
                  : H(t.type) || "Memo";
              case D:
                e = t._payload, t = t._init;
                try {
                  return H(t(e));
                } catch (n) {}
            }
          }
          return null;
        }
        function U(t) {
          var e = t.type;
          switch (t.tag) {
            case 24:
              return "Cache";
            case 9:
              return (e.displayName || "Context") + ".Consumer";
            case 10:
              return (e._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return t = (t = e.render).displayName || t.name || "",
                e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return e;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(e);
            case 8:
              return e === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof e) {
                return e.displayName || e.name || null;
              }
              if ("string" === typeof e) return e;
          }
          return null;
        }
        function W(t) {
          switch (typeof t) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return t;
            default:
              return "";
          }
        }
        function $(t) {
          var e = t.type;
          return (t = t.nodeName) && "input" === t.toLowerCase() &&
            ("checkbox" === e || "radio" === e);
        }
        function q(t) {
          t._valueTracker || (t._valueTracker = function (t) {
            var e = $(t) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
              r = "" + t[e];
            if (
              !t.hasOwnProperty(e) && "undefined" !== typeof n &&
              "function" === typeof n.get && "function" === typeof n.set
            ) {
              var i = n.get, a = n.set;
              return Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                  return i.call(this);
                },
                set: function (t) {
                  r = "" + t, a.call(this, t);
                },
              }),
                Object.defineProperty(t, e, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (t) {
                    r = "" + t;
                  },
                  stopTracking: function () {
                    t._valueTracker = null, delete t[e];
                  },
                };
            }
          }(t));
        }
        function Y(t) {
          if (!t) return !1;
          var e = t._valueTracker;
          if (!e) return !0;
          var n = e.getValue(), r = "";
          return t && (r = $(t) ? t.checked ? "true" : "false" : t.value),
            (t = r) !== n && (e.setValue(t), !0);
        }
        function Q(t) {
          if (
            "undefined" ===
              typeof (t = t ||
                ("undefined" !== typeof document ? document : void 0))
          ) return null;
          try {
            return t.activeElement || t.body;
          } catch (e) {
            return t.body;
          }
        }
        function K(t, e) {
          var n = e.checked;
          return z({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked,
          });
        }
        function X(t, e) {
          var n = null == e.defaultValue ? "" : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
          n = W(null != e.value ? e.value : n),
            t._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === e.type || "radio" === e.type
                ? null != e.checked
                : null != e.value,
            };
        }
        function J(t, e) {
          null != (e = e.checked) && v(t, "checked", e, !1);
        }
        function G(t, e) {
          J(t, e);
          var n = W(e.value), r = e.type;
          if (null != n) {
            "number" === r
              ? (0 === n && "" === t.value || t.value != n) &&
                (t.value = "" + n)
              : t.value !== "" + n && (t.value = "" + n);
          } else if ("submit" === r || "reset" === r) {
            return void t.removeAttribute("value");
          }
          e.hasOwnProperty("value")
            ? tt(t, e.type, n)
            : e.hasOwnProperty("defaultValue") &&
              tt(t, e.type, W(e.defaultValue)),
            null == e.checked && null != e.defaultChecked &&
            (t.defaultChecked = !!e.defaultChecked);
        }
        function Z(t, e, n) {
          if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
            var r = e.type;
            if (
              !("submit" !== r && "reset" !== r ||
                void 0 !== e.value && null !== e.value)
            ) return;
            e = "" + t._wrapperState.initialValue,
              n || e === t.value || (t.value = e),
              t.defaultValue = e;
          }
          "" !== (n = t.name) && (t.name = ""),
            t.defaultChecked = !!t._wrapperState.initialChecked,
            "" !== n && (t.name = n);
        }
        function tt(t, e, n) {
          "number" === e && Q(t.ownerDocument) === t ||
            (null == n
              ? t.defaultValue = "" + t._wrapperState.initialValue
              : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
        }
        var et = Array.isArray;
        function nt(t, e, n, r) {
          if (t = t.options, e) {
            e = {};
            for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
            for (n = 0; n < t.length; n++) {
              i = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== i && (t[n].selected = i),
                i && r && (t[n].defaultSelected = !0);
            }
          } else {
            for (n = "" + W(n), e = null, i = 0; i < t.length; i++) {
              if (t[i].value === n) {
                return t[i].selected = !0,
                  void (r && (t[i].defaultSelected = !0));
              }
              null !== e || t[i].disabled || (e = t[i]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function rt(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
          return z({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue,
          });
        }
        function it(t, e) {
          var n = e.value;
          if (null == n) {
            if (n = e.children, e = e.defaultValue, null != n) {
              if (null != e) throw Error(a(92));
              if (et(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              e = n;
            }
            null == e && (e = ""), n = e;
          }
          t._wrapperState = { initialValue: W(n) };
        }
        function at(t, e) {
          var n = W(e.value), r = W(e.defaultValue);
          null != n &&
          ((n = "" + n) !== t.value && (t.value = n),
            null == e.defaultValue && t.defaultValue !== n &&
            (t.defaultValue = n)), null != r && (t.defaultValue = "" + r);
        }
        function ot(t) {
          var e = t.textContent;
          e === t._wrapperState.initialValue && "" !== e && null !== e &&
            (t.value = e);
        }
        function st(t) {
          switch (t) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function lt(t, e) {
          return null == t || "http://www.w3.org/1999/xhtml" === t
            ? st(e)
            : "http://www.w3.org/2000/svg" === t && "foreignObject" === e
            ? "http://www.w3.org/1999/xhtml"
            : t;
        }
        var ct,
          ut,
          ht = (ut = function (t, e) {
            if (
              "http://www.w3.org/2000/svg" !== t.namespaceURI ||
              "innerHTML" in t
            ) t.innerHTML = e;
            else {
              for (
                (ct = ct || document.createElement("div")).innerHTML = "<svg>" +
                  e.valueOf().toString() + "</svg>", e = ct.firstChild;
                t.firstChild;
              ) t.removeChild(t.firstChild);
              for (; e.firstChild;) t.appendChild(e.firstChild);
            }
          },
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (t, e, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ut(t, e);
                });
              }
              : ut);
        function dt(t, e) {
          if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType) {
              return void (n.nodeValue = e);
            }
          }
          t.textContent = e;
        }
        var ft = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pt = ["Webkit", "ms", "Moz", "O"];
        function gt(t, e, n) {
          return null == e || "boolean" === typeof e || "" === e
            ? ""
            : n || "number" !== typeof e || 0 === e ||
                ft.hasOwnProperty(t) && ft[t]
            ? ("" + e).trim()
            : e + "px";
        }
        function mt(t, e) {
          for (var n in t = t.style, e) {
            if (e.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"), i = gt(n, e[n], r);
              "float" === n && (n = "cssFloat"),
                r ? t.setProperty(n, i) : t[n] = i;
            }
          }
        }
        Object.keys(ft).forEach(function (t) {
          pt.forEach(function (e) {
            e = e + t.charAt(0).toUpperCase() + t.substring(1), ft[e] = ft[t];
          });
        });
        var bt = z({ menuitem: !0 }, {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        });
        function yt(t, e) {
          if (e) {
            if (
              bt[t] && (null != e.children || null != e.dangerouslySetInnerHTML)
            ) throw Error(a(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(a(60));
              if (
                "object" !== typeof e.dangerouslySetInnerHTML ||
                !("__html" in e.dangerouslySetInnerHTML)
              ) throw Error(a(61));
            }
            if (null != e.style && "object" !== typeof e.style) {
              throw Error(a(62));
            }
          }
        }
        function vt(t, e) {
          if (-1 === t.indexOf("-")) return "string" === typeof e.is;
          switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xt = null;
        function wt(t) {
          return (t = t.target || t.srcElement || window)
            .correspondingUseElement && (t = t.correspondingUseElement),
            3 === t.nodeType ? t.parentNode : t;
        }
        var _t = null, kt = null, St = null;
        function Mt(t) {
          if (t = vi(t)) {
            if ("function" !== typeof _t) throw Error(a(280));
            var e = t.stateNode;
            e && (e = wi(e), _t(t.stateNode, t.type, e));
          }
        }
        function Et(t) {
          kt ? St ? St.push(t) : St = [t] : kt = t;
        }
        function Ct() {
          if (kt) {
            var t = kt, e = St;
            if (St = kt = null, Mt(t), e) {
              for (t = 0; t < e.length; t++) Mt(e[t]);
            }
          }
        }
        function Pt(t, e) {
          return t(e);
        }
        function Tt() {}
        var Rt = !1;
        function Ot(t, e, n) {
          if (Rt) return t(e, n);
          Rt = !0;
          try {
            return Pt(t, e, n);
          } finally {
            Rt = !1, (null !== kt || null !== St) && (Tt(), Ct());
          }
        }
        function Dt(t, e) {
          var n = t.stateNode;
          if (null === n) return null;
          var r = wi(n);
          if (null === r) return null;
          n = r[e];
          t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
              (r = !("button" === (t = t.type) || "input" === t ||
                "select" === t || "textarea" === t)), t = !r;
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (n && "function" !== typeof n) throw Error(a(231, e, typeof n));
          return n;
        }
        var Lt = !1;
        if (u) {
          try {
            var At = {};
            Object.defineProperty(At, "passive", {
              get: function () {
                Lt = !0;
              },
            }),
              window.addEventListener("test", At, At),
              window.removeEventListener("test", At, At);
          } catch (ut) {
            Lt = !1;
          }
        }
        function Ft(t, e, n, r, i, a, o, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var jt = !1,
          zt = null,
          Nt = !1,
          It = null,
          Bt = {
            onError: function (t) {
              jt = !0, zt = t;
            },
          };
        function Vt(t, e, n, r, i, a, o, s, l) {
          jt = !1, zt = null, Ft.apply(Bt, arguments);
        }
        function Ht(t) {
          var e = t, n = t;
          if (t.alternate) { for (; e.return;) e = e.return; }
          else {
            t = e;
            do {
              0 !== (4098 & (e = t).flags) && (n = e.return), t = e.return;
            } while (t);
          }
          return 3 === e.tag ? n : null;
        }
        function Ut(t) {
          if (13 === t.tag) {
            var e = t.memoizedState;
            if (
              null === e &&
              (null !== (t = t.alternate) && (e = t.memoizedState)), null !== e
            ) return e.dehydrated;
          }
          return null;
        }
        function Wt(t) {
          if (Ht(t) !== t) throw Error(a(188));
        }
        function $t(t) {
          return null !== (t = function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Ht(t))) throw Error(a(188));
                return e !== t ? null : t;
              }
              for (var n = t, r = e;;) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o;) {
                    if (o === n) return Wt(i), t;
                    if (o === r) return Wt(i), e;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) n = i, r = o;
                else {
                  for (var s = !1, l = i.child; l;) {
                    if (l === n) {
                      s = !0, n = i, r = o;
                      break;
                    }
                    if (l === r) {
                      s = !0, r = i, n = o;
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l;) {
                      if (l === n) {
                        s = !0, n = o, r = i;
                        break;
                      }
                      if (l === r) {
                        s = !0, r = o, n = i;
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? t : e;
            }(t))
            ? qt(t)
            : null;
        }
        function qt(t) {
          if (5 === t.tag || 6 === t.tag) return t;
          for (t = t.child; null !== t;) {
            var e = qt(t);
            if (null !== e) return e;
            t = t.sibling;
          }
          return null;
        }
        var Yt = i.unstable_scheduleCallback,
          Qt = i.unstable_cancelCallback,
          Kt = i.unstable_shouldYield,
          Xt = i.unstable_requestPaint,
          Jt = i.unstable_now,
          Gt = i.unstable_getCurrentPriorityLevel,
          Zt = i.unstable_ImmediatePriority,
          te = i.unstable_UserBlockingPriority,
          ee = i.unstable_NormalPriority,
          ne = i.unstable_LowPriority,
          re = i.unstable_IdlePriority,
          ie = null,
          ae = null;
        var oe = Math.clz32 ? Math.clz32 : function (t) {
            return t >>>= 0, 0 === t ? 32 : 31 - (se(t) / le | 0) | 0;
          },
          se = Math.log,
          le = Math.LN2;
        var ce = 64, ue = 4194304;
        function he(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function de(t, e) {
          var n = t.pendingLanes;
          if (0 === n) return 0;
          var r = 0, i = t.suspendedLanes, a = t.pingedLanes, o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? r = he(s) : 0 !== (a &= o) && (r = he(a));
          } else 0 !== (o = n & ~i) ? r = he(o) : 0 !== a && (r = he(a));
          if (0 === r) return 0;
          if (
            0 !== e && e !== r && 0 === (e & i) &&
            ((i = r & -r) >= (a = e & -e) || 16 === i && 0 !== (4194240 & a))
          ) return e;
          if (
            0 !== (4 & r) && (r |= 16 & n), 0 !== (e = t.entangledLanes)
          ) {
            for (
              t = t.entanglements, e &= r;
              0 < e;
            ) i = 1 << (n = 31 - oe(e)), r |= t[n], e &= ~i;
          }
          return r;
        }
        function fe(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
              return e + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e + 5e3;
            default:
              return -1;
          }
        }
        function pe(t) {
          return 0 !== (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
            ? 1073741824
            : 0;
        }
        function ge() {
          var t = ce;
          return 0 === (4194240 & (ce <<= 1)) && (ce = 64), t;
        }
        function me(t) {
          for (var e = [], n = 0; 31 > n; n++) e.push(t);
          return e;
        }
        function be(t, e, n) {
          t.pendingLanes |= e,
            536870912 !== e && (t.suspendedLanes = 0, t.pingedLanes = 0),
            (t = t.eventTimes)[e = 31 - oe(e)] = n;
        }
        function ye(t, e) {
          var n = t.entangledLanes |= e;
          for (t = t.entanglements; n;) {
            var r = 31 - oe(n), i = 1 << r;
            i & e | t[r] & e && (t[r] |= e), n &= ~i;
          }
        }
        var ve = 0;
        function xe(t) {
          return 1 < (t &= -t)
            ? 4 < t ? 0 !== (268435455 & t) ? 16 : 536870912 : 4
            : 1;
        }
        var we,
          _e,
          ke,
          Se,
          Me,
          Ee = !1,
          Ce = [],
          Pe = null,
          Te = null,
          Re = null,
          Oe = new Map(),
          De = new Map(),
          Le = [],
          Ae =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
              .split(" ");
        function Fe(t, e) {
          switch (t) {
            case "focusin":
            case "focusout":
              Pe = null;
              break;
            case "dragenter":
            case "dragleave":
              Te = null;
              break;
            case "mouseover":
            case "mouseout":
              Re = null;
              break;
            case "pointerover":
            case "pointerout":
              Oe.delete(e.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              De.delete(e.pointerId);
          }
        }
        function je(t, e, n, r, i, a) {
          return null === t || t.nativeEvent !== a
            ? (t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: a,
              targetContainers: [i],
            },
              null !== e && (null !== (e = vi(e)) && _e(e)),
              t)
            : (t.eventSystemFlags |= r,
              e = t.targetContainers,
              null !== i && -1 === e.indexOf(i) && e.push(i),
              t);
        }
        function ze(t) {
          var e = yi(t.target);
          if (null !== e) {
            var n = Ht(e);
            if (null !== n) {
              if (13 === (e = n.tag)) {
                if (null !== (e = Ut(n))) {
                  return t.blockedOn = e,
                    void Me(t.priority, function () {
                      ke(n);
                    });
                }
              } else if (
                3 === e && n.stateNode.current.memoizedState.isDehydrated
              ) {
                return void (t.blockedOn = 3 === n.tag
                  ? n.stateNode.containerInfo
                  : null);
              }
            }
          }
          t.blockedOn = null;
        }
        function Ne(t) {
          if (null !== t.blockedOn) return !1;
          for (var e = t.targetContainers; 0 < e.length;) {
            var n = Ke(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== n) {
              return null !== (e = vi(n)) && _e(e), t.blockedOn = n, !1;
            }
            var r = new (n = t.nativeEvent).constructor(n.type, n);
            xt = r, n.target.dispatchEvent(r), xt = null, e.shift();
          }
          return !0;
        }
        function Ie(t, e, n) {
          Ne(t) && n.delete(e);
        }
        function Be() {
          Ee = !1,
            null !== Pe && Ne(Pe) && (Pe = null),
            null !== Te && Ne(Te) && (Te = null),
            null !== Re && Ne(Re) && (Re = null),
            Oe.forEach(Ie),
            De.forEach(Ie);
        }
        function Ve(t, e) {
          t.blockedOn === e &&
            (t.blockedOn = null,
              Ee ||
              (Ee = !0,
                i.unstable_scheduleCallback(i.unstable_NormalPriority, Be)));
        }
        function He(t) {
          function e(e) {
            return Ve(e, t);
          }
          if (0 < Ce.length) {
            Ve(Ce[0], t);
            for (var n = 1; n < Ce.length; n++) {
              var r = Ce[n];
              r.blockedOn === t && (r.blockedOn = null);
            }
          }
          for (
            null !== Pe && Ve(Pe, t),
              null !== Te && Ve(Te, t),
              null !== Re && Ve(Re, t),
              Oe.forEach(e),
              De.forEach(e),
              n = 0;
            n < Le.length;
            n++
          ) (r = Le[n]).blockedOn === t && (r.blockedOn = null);
          for (; 0 < Le.length && null === (n = Le[0]).blockedOn;) {
            ze(n), null === n.blockedOn && Le.shift();
          }
        }
        var Ue = x.ReactCurrentBatchConfig, We = !0;
        function $e(t, e, n, r) {
          var i = ve, a = Ue.transition;
          Ue.transition = null;
          try {
            ve = 1, Ye(t, e, n, r);
          } finally {
            ve = i, Ue.transition = a;
          }
        }
        function qe(t, e, n, r) {
          var i = ve, a = Ue.transition;
          Ue.transition = null;
          try {
            ve = 4, Ye(t, e, n, r);
          } finally {
            ve = i, Ue.transition = a;
          }
        }
        function Ye(t, e, n, r) {
          if (We) {
            var i = Ke(t, e, n, r);
            if (null === i) Wr(t, e, r, Qe, n), Fe(t, r);
            else if (
              function (t, e, n, r, i) {
                switch (e) {
                  case "focusin":
                    return Pe = je(Pe, t, e, n, r, i), !0;
                  case "dragenter":
                    return Te = je(Te, t, e, n, r, i), !0;
                  case "mouseover":
                    return Re = je(Re, t, e, n, r, i), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Oe.set(a, je(Oe.get(a) || null, t, e, n, r, i)), !0;
                  case "gotpointercapture":
                    return a = i.pointerId,
                      De.set(a, je(De.get(a) || null, t, e, n, r, i)),
                      !0;
                }
                return !1;
              }(i, t, e, n, r)
            ) r.stopPropagation();
            else if (Fe(t, r), 4 & e && -1 < Ae.indexOf(t)) {
              for (; null !== i;) {
                var a = vi(i);
                if (
                  null !== a && we(a),
                    null === (a = Ke(t, e, n, r)) && Wr(t, e, r, Qe, n),
                    a === i
                ) break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Wr(t, e, r, null, n);
          }
        }
        var Qe = null;
        function Ke(t, e, n, r) {
          if (Qe = null, null !== (t = yi(t = wt(r)))) {
            if (null === (e = Ht(t))) {
              t = null;
            } else if (13 === (n = e.tag)) {
              if (null !== (t = Ut(e))) return t;
              t = null;
            } else if (3 === n) {
              if (e.stateNode.current.memoizedState.isDehydrated) {
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              }
              t = null;
            } else e !== t && (t = null);
          }
          return Qe = t, null;
        }
        function Xe(t) {
          switch (t) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Gt()) {
                case Zt:
                  return 1;
                case te:
                  return 4;
                case ee:
                case ne:
                  return 16;
                case re:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Je = null, Ge = null, Ze = null;
        function tn() {
          if (Ze) return Ze;
          var t,
            e,
            n = Ge,
            r = n.length,
            i = "value" in Je ? Je.value : Je.textContent,
            a = i.length;
          for (t = 0; t < r && n[t] === i[t]; t++);
          var o = r - t;
          for (e = 1; e <= o && n[r - e] === i[a - e]; e++);
          return Ze = i.slice(t, 1 < e ? 1 - e : void 0);
        }
        function en(t) {
          var e = t.keyCode;
          return "charCode" in t
            ? 0 === (t = t.charCode) && 13 === e && (t = 13)
            : t = e,
            10 === t && (t = 13),
            32 <= t || 13 === t ? t : 0;
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(t) {
          function e(e, n, r, i, a) {
            for (
              var o in this._reactName = e,
                this._targetInst = r,
                this.type = n,
                this.nativeEvent = i,
                this.target = a,
                this.currentTarget = null,
                t
            ) t.hasOwnProperty(o) && (e = t[o], this[o] = e ? e(i) : i[o]);
            return this.isDefaultPrevented = (null != i.defaultPrevented
                ? i.defaultPrevented
                : !1 === i.returnValue)
              ? nn
              : rn,
              this.isPropagationStopped = rn,
              this;
          }
          return z(e.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var t = this.nativeEvent;
              t &&
                (t.preventDefault
                  ? t.preventDefault()
                  : "unknown" !== typeof t.returnValue && (t.returnValue = !1),
                  this.isDefaultPrevented = nn);
            },
            stopPropagation: function () {
              var t = this.nativeEvent;
              t &&
                (t.stopPropagation
                  ? t.stopPropagation()
                  : "unknown" !== typeof t.cancelBubble &&
                    (t.cancelBubble = !0),
                  this.isPropagationStopped = nn);
            },
            persist: function () {},
            isPersistent: nn,
          }),
            e;
        }
        var on,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          hn = z({}, cn, { view: 0, detail: 0 }),
          dn = an(hn),
          fn = z({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
              return void 0 === t.relatedTarget
                ? t.fromElement === t.srcElement ? t.toElement : t.fromElement
                : t.relatedTarget;
            },
            movementX: function (t) {
              return "movementX" in t
                ? t.movementX
                : (t !== ln && (ln && "mousemove" === t.type
                  ? (on = t.screenX - ln.screenX, sn = t.screenY - ln.screenY)
                  : sn = on = 0,
                  ln = t),
                  on);
            },
            movementY: function (t) {
              return "movementY" in t ? t.movementY : sn;
            },
          }),
          pn = an(fn),
          gn = an(z({}, fn, { dataTransfer: 0 })),
          mn = an(z({}, hn, { relatedTarget: 0 })),
          bn = an(
            z({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = z({}, cn, {
            clipboardData: function (t) {
              return "clipboardData" in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          vn = an(yn),
          xn = an(z({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          _n = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(t) {
          var e = this.nativeEvent;
          return e.getModifierState
            ? e.getModifierState(t)
            : !!(t = kn[t]) && !!e[t];
        }
        function Mn() {
          return Sn;
        }
        var En = z({}, hn, {
            key: function (t) {
              if (t.key) {
                var e = wn[t.key] || t.key;
                if ("Unidentified" !== e) return e;
              }
              return "keypress" === t.type
                ? 13 === (t = en(t)) ? "Enter" : String.fromCharCode(t)
                : "keydown" === t.type || "keyup" === t.type
                ? _n[t.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mn,
            charCode: function (t) {
              return "keypress" === t.type ? en(t) : 0;
            },
            keyCode: function (t) {
              return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return "keypress" === t.type
                ? en(t)
                : "keydown" === t.type || "keyup" === t.type
                ? t.keyCode
                : 0;
            },
          }),
          Cn = an(En),
          Pn = an(
            z({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Tn = an(
            z({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Mn,
            }),
          ),
          Rn = an(
            z({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          On = z({}, fn, {
            deltaX: function (t) {
              return "deltaX" in t
                ? t.deltaX
                : "wheelDeltaX" in t
                ? -t.wheelDeltaX
                : 0;
            },
            deltaY: function (t) {
              return "deltaY" in t
                ? t.deltaY
                : "wheelDeltaY" in t
                ? -t.wheelDeltaY
                : "wheelDelta" in t
                ? -t.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Dn = an(On),
          Ln = [9, 13, 27, 32],
          An = u && "CompositionEvent" in window,
          Fn = null;
        u && "documentMode" in document && (Fn = document.documentMode);
        var jn = u && "TextEvent" in window && !Fn,
          zn = u && (!An || Fn && 8 < Fn && 11 >= Fn),
          Nn = String.fromCharCode(32),
          In = !1;
        function Bn(t, e) {
          switch (t) {
            case "keyup":
              return -1 !== Ln.indexOf(e.keyCode);
            case "keydown":
              return 229 !== e.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(t) {
          return "object" === typeof (t = t.detail) && "data" in t
            ? t.data
            : null;
        }
        var Hn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return "input" === e ? !!Un[t.type] : "textarea" === e;
        }
        function $n(t, e, n, r) {
          Et(r),
            0 < (e = qr(e, "onChange")).length &&
            (n = new un("onChange", "change", null, n, r),
              t.push({ event: n, listeners: e }));
        }
        var qn = null, Yn = null;
        function Qn(t) {
          Nr(t, 0);
        }
        function Kn(t) {
          if (Y(xi(t))) return t;
        }
        function Xn(t, e) {
          if ("change" === t) return e;
        }
        var Jn = !1;
        if (u) {
          var Gn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var tr = document.createElement("div");
              tr.setAttribute("oninput", "return;"),
                Zn = "function" === typeof tr.oninput;
            }
            Gn = Zn;
          } else Gn = !1;
          Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function er() {
          qn && (qn.detachEvent("onpropertychange", nr), Yn = qn = null);
        }
        function nr(t) {
          if ("value" === t.propertyName && Kn(Yn)) {
            var e = [];
            $n(e, Yn, t, wt(t)), Ot(Qn, e);
          }
        }
        function rr(t, e, n) {
          "focusin" === t
            ? (er(), Yn = n, (qn = e).attachEvent("onpropertychange", nr))
            : "focusout" === t && er();
        }
        function ir(t) {
          if ("selectionchange" === t || "keyup" === t || "keydown" === t) {
            return Kn(Yn);
          }
        }
        function ar(t, e) {
          if ("click" === t) return Kn(e);
        }
        function or(t, e) {
          if ("input" === t || "change" === t) return Kn(e);
        }
        var sr = "function" === typeof Object.is ? Object.is : function (t, e) {
          return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e;
        };
        function lr(t, e) {
          if (sr(t, e)) return !0;
          if (
            "object" !== typeof t || null === t || "object" !== typeof e ||
            null === e
          ) return !1;
          var n = Object.keys(t), r = Object.keys(e);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!h.call(e, i) || !sr(t[i], e[i])) return !1;
          }
          return !0;
        }
        function cr(t) {
          for (; t && t.firstChild;) t = t.firstChild;
          return t;
        }
        function ur(t, e) {
          var n, r = cr(t);
          for (t = 0; r;) {
            if (3 === r.nodeType) {
              if (n = t + r.textContent.length, t <= e && n >= e) {
                return { node: r, offset: e - t };
              }
              t = n;
            }
            t: {
              for (; r;) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break t;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function hr(t, e) {
          return !(!t || !e) &&
            (t === e ||
              (!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? hr(t, e.parentNode)
                  : "contains" in t
                  ? t.contains(e)
                  : !!t.compareDocumentPosition &&
                    !!(16 & t.compareDocumentPosition(e))));
        }
        function dr() {
          for (var t = window, e = Q(); e instanceof t.HTMLIFrameElement;) {
            try {
              var n = "string" === typeof e.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            e = Q((t = e.contentWindow).document);
          }
          return e;
        }
        function fr(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return e &&
            ("input" === e &&
                ("text" === t.type || "search" === t.type || "tel" === t.type ||
                  "url" === t.type || "password" === t.type) ||
              "textarea" === e || "true" === t.contentEditable);
        }
        function pr(t) {
          var e = dr(), n = t.focusedElem, r = t.selectionRange;
          if (
            e !== n && n && n.ownerDocument &&
            hr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n)) {
              if (
                e = r.start,
                  void 0 === (t = r.end) && (t = e),
                  "selectionStart" in n
              ) {
                n.selectionStart = e,
                  n.selectionEnd = Math.min(t, n.value.length);
              } else if (
                (t = (e = n.ownerDocument || document) && e.defaultView ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var i = n.textContent.length, a = Math.min(r.start, i);
                r = void 0 === r.end ? a : Math.min(r.end, i),
                  !t.extend && a > r && (i = r, r = a, a = i),
                  i = ur(n, a);
                var o = ur(n, r);
                i && o &&
                  (1 !== t.rangeCount || t.anchorNode !== i.node ||
                    t.anchorOffset !== i.offset || t.focusNode !== o.node ||
                    t.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(i.node, i.offset),
                    t.removeAllRanges(),
                    a > r
                      ? (t.addRange(e), t.extend(o.node, o.offset))
                      : (e.setEnd(o.node, o.offset), t.addRange(e)));
              }
            }
            for (e = [], t = n; t = t.parentNode;) {
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            }
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < e.length;
              n++
            ) {
              (t = e[n]).element.scrollLeft = t.left,
                t.element.scrollTop = t.top;
            }
          }
        }
        var gr = u && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          br = null,
          yr = null,
          vr = !1;
        function xr(t, e, n) {
          var r = n.window === n
            ? n.document
            : 9 === n.nodeType
            ? n
            : n.ownerDocument;
          vr || null == mr || mr !== Q(r) ||
            ("selectionStart" in (r = mr) && fr(r)
              ? r = { start: r.selectionStart, end: r.selectionEnd }
              : r = {
                anchorNode:
                  (r =
                    (r.ownerDocument && r.ownerDocument.defaultView || window)
                      .getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              },
              yr && lr(yr, r) ||
              (yr = r,
                0 < (r = qr(br, "onSelect")).length &&
                (e = new un("onSelect", "select", null, e, n),
                  t.push({ event: e, listeners: r }),
                  e.target = mr)));
        }
        function wr(t, e) {
          var n = {};
          return n[t.toLowerCase()] = e.toLowerCase(),
            n["Webkit" + t] = "webkit" + e,
            n["Moz" + t] = "moz" + e,
            n;
        }
        var _r = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Mr(t) {
          if (kr[t]) return kr[t];
          if (!_r[t]) return t;
          var e, n = _r[t];
          for (e in n) if (n.hasOwnProperty(e) && e in Sr) return kr[t] = n[e];
          return t;
        }
        u &&
          (Sr = document.createElement("div").style,
            "AnimationEvent" in window ||
            (delete _r.animationend.animation,
              delete _r.animationiteration.animation,
              delete _r.animationstart.animation),
            "TransitionEvent" in window || delete _r.transitionend.transition);
        var Er = Mr("animationend"),
          Cr = Mr("animationiteration"),
          Pr = Mr("animationstart"),
          Tr = Mr("transitionend"),
          Rr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
              .split(" ");
        function Dr(t, e) {
          Rr.set(t, e), l(e, [t]);
        }
        for (var Lr = 0; Lr < Or.length; Lr++) {
          var Ar = Or[Lr];
          Dr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        Dr(Er, "onAnimationEnd"),
          Dr(Cr, "onAnimationIteration"),
          Dr(Pr, "onAnimationStart"),
          Dr("dblclick", "onDoubleClick"),
          Dr("focusin", "onFocus"),
          Dr("focusout", "onBlur"),
          Dr(Tr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange"
              .split(" "),
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange"
              .split(" "),
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
              .split(" "),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr),
          );
        function zr(t, e, n) {
          var r = t.type || "unknown-event";
          t.currentTarget = n,
            function (t, e, n, r, i, o, s, l, c) {
              if (Vt.apply(this, arguments), jt) {
                if (!jt) throw Error(a(198));
                var u = zt;
                jt = !1, zt = null, Nt || (Nt = !0, It = u);
              }
            }(r, e, void 0, t),
            t.currentTarget = null;
        }
        function Nr(t, e) {
          e = 0 !== (4 & e);
          for (var n = 0; n < t.length; n++) {
            var r = t[n], i = r.event;
            r = r.listeners;
            t: {
              var a = void 0;
              if (e) {
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o], l = s.instance, c = s.currentTarget;
                  if (
                    s = s.listener, l !== a && i.isPropagationStopped()
                  ) break t;
                  zr(i, s, c), a = l;
                }
              } else {for (o = 0; o < r.length; o++) {
                  if (
                    l = (s = r[o]).instance,
                      c = s.currentTarget,
                      s = s.listener,
                      l !== a && i.isPropagationStopped()
                  ) break t;
                  zr(i, s, c), a = l;
                }}
            }
          }
          if (Nt) throw t = It, Nt = !1, It = null, t;
        }
        function Ir(t, e) {
          var n = e[gi];
          void 0 === n && (n = e[gi] = new Set());
          var r = t + "__bubble";
          n.has(r) || (Ur(e, t, 2, !1), n.add(r));
        }
        function Br(t, e, n) {
          var r = 0;
          e && (r |= 4), Ur(n, t, r, e);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(t) {
          if (!t[Vr]) {
            t[Vr] = !0,
              o.forEach(function (e) {
                "selectionchange" !== e &&
                  (jr.has(e) || Br(e, !1, t), Br(e, !0, t));
              });
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[Vr] || (e[Vr] = !0, Br("selectionchange", !1, e));
          }
        }
        function Ur(t, e, n, r) {
          switch (Xe(e)) {
            case 1:
              var i = $e;
              break;
            case 4:
              i = qe;
              break;
            default:
              i = Ye;
          }
          n = i.bind(null, e, n, t),
            i = void 0,
            !Lt || "touchstart" !== e && "touchmove" !== e && "wheel" !== e ||
            (i = !0),
            r
              ? void 0 !== i
                ? t.addEventListener(e, n, { capture: !0, passive: i })
                : t.addEventListener(e, n, !0)
              : void 0 !== i
              ? t.addEventListener(e, n, { passive: i })
              : t.addEventListener(e, n, !1);
        }
        function Wr(t, e, n, r, i) {
          var a = r;
          if (0 === (1 & e) && 0 === (2 & e) && null !== r) {
            t: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || 8 === s.nodeType && s.parentNode === i) break;
                if (4 === o) {
                  for (o = r.return; null !== o;) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        8 === l.nodeType && l.parentNode === i)
                    ) return;
                    o = o.return;
                  }
                }
                for (; null !== s;) {
                  if (null === (o = yi(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue t;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          }
          Ot(function () {
            var r = a, i = wt(n), o = [];
            t: {
              var s = Rr.get(t);
              if (void 0 !== s) {
                var l = un, c = t;
                switch (t) {
                  case "keypress":
                    if (0 === en(n)) break t;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    c = "focus", l = mn;
                    break;
                  case "focusout":
                    c = "blur", l = mn;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = mn;
                    break;
                  case "click":
                    if (2 === n.button) break t;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Tn;
                    break;
                  case Er:
                  case Cr:
                  case Pr:
                    l = bn;
                    break;
                  case Tr:
                    l = Rn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = Dn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = vn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var u = 0 !== (4 & e),
                  h = !u && "scroll" === t,
                  d = u ? null !== s ? s + "Capture" : null : s;
                u = [];
                for (var f, p = r; null !== p;) {
                  var g = (f = p).stateNode;
                  if (
                    5 === f.tag && null !== g &&
                    (f = g,
                      null !== d &&
                      (null != (g = Dt(p, d)) && u.push($r(p, g, f)))), h
                  ) break;
                  p = p.return;
                }
                0 < u.length &&
                  (s = new l(s, c, null, n, i),
                    o.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & e)) {
              if (
                l = "mouseout" === t || "pointerout" === t,
                  (!(s = "mouseover" === t || "pointerover" === t) ||
                    n === xt || !(c = n.relatedTarget || n.fromElement) ||
                    !yi(c) && !c[pi]) &&
                  (l || s) && (s = i.window === i
                    ? i
                    : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window,
                    l
                      ? (l = r,
                        null !== (c = (c = n.relatedTarget || n.toElement)
                            ? yi(c)
                            : null) &&
                        (c !== (h = Ht(c)) || 5 !== c.tag && 6 !== c.tag) &&
                        (c = null))
                      : (l = null, c = r),
                    l !== c)
              ) {
                if (
                  u = pn,
                    g = "onMouseLeave",
                    d = "onMouseEnter",
                    p = "mouse",
                    "pointerout" !== t && "pointerover" !== t ||
                    (u = Pn,
                      g = "onPointerLeave",
                      d = "onPointerEnter",
                      p = "pointer"),
                    h = null == l ? s : xi(l),
                    f = null == c ? s : xi(c),
                    (s = new u(g, p + "leave", l, n, i)).target = h,
                    s.relatedTarget = f,
                    g = null,
                    yi(i) === r &&
                    ((u = new u(d, p + "enter", c, n, i)).target = f,
                      u.relatedTarget = h,
                      g = u),
                    h = g,
                    l && c
                ) {
                  t: {
                    for (d = c, p = 0, f = u = l; f; f = Yr(f)) p++;
                    for (f = 0, g = d; g; g = Yr(g)) f++;
                    for (; 0 < p - f;) u = Yr(u), p--;
                    for (; 0 < f - p;) d = Yr(d), f--;
                    for (; p--;) {
                      if (u === d || null !== d && u === d.alternate) break t;
                      u = Yr(u), d = Yr(d);
                    }
                    u = null;
                  }
                } else u = null;
                null !== l && Qr(o, s, l, u, !1),
                  null !== c && null !== h && Qr(o, h, c, u, !0);
              }
              if (
                "select" ===
                  (l = (s = r ? xi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                "input" === l && "file" === s.type
              ) { var m = Xn; } else if (Wn(s)) {
                if (Jn) m = or;
                else {
                  m = ir;
                  var b = rr;
                }
              } else {(l = s.nodeName) && "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) && (m = ar);}
              switch (
                m && (m = m(t, r))
                  ? $n(o, m, n, i)
                  : (b && b(t, s, r),
                    "focusout" === t && (b = s._wrapperState) && b.controlled &&
                    "number" === s.type && tt(s, "number", s.value)),
                  b = r ? xi(r) : window,
                  t
              ) {
                case "focusin":
                  (Wn(b) || "true" === b.contentEditable) &&
                    (mr = b, br = r, yr = null);
                  break;
                case "focusout":
                  yr = br = mr = null;
                  break;
                case "mousedown":
                  vr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  vr = !1, xr(o, n, i);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (An) {
                t: {
                  switch (t) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break t;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break t;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break t;
                  }
                  v = void 0;
                }
              } else {Hn
                  ? Bn(t, n) && (v = "onCompositionEnd")
                  : "keydown" === t && 229 === n.keyCode &&
                    (v = "onCompositionStart");}
              v &&
              (zn && "ko" !== n.locale &&
                (Hn || "onCompositionStart" !== v
                  ? "onCompositionEnd" === v && Hn && (y = tn())
                  : (Ge = "value" in (Je = i) ? Je.value : Je.textContent,
                    Hn = !0)),
                0 < (b = qr(r, v)).length &&
                (v = new xn(v, t, null, n, i),
                  o.push({ event: v, listeners: b }),
                  y ? v.data = y : null !== (y = Vn(n)) && (v.data = y))),
                (y = jn
                  ? function (t, e) {
                    switch (t) {
                      case "compositionend":
                        return Vn(e);
                      case "keypress":
                        return 32 !== e.which ? null : (In = !0, Nn);
                      case "textInput":
                        return (t = e.data) === Nn && In ? null : t;
                      default:
                        return null;
                    }
                  }(t, n)
                  : function (t, e) {
                    if (Hn) {
                      return "compositionend" === t || !An && Bn(t, e)
                        ? (t = tn(), Ze = Ge = Je = null, Hn = !1, t)
                        : null;
                    }
                    switch (t) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(e.ctrlKey || e.altKey || e.metaKey) ||
                          e.ctrlKey && e.altKey
                        ) {
                          if (e.char && 1 < e.char.length) return e.char;
                          if (e.which) return String.fromCharCode(e.which);
                        }
                        return null;
                      case "compositionend":
                        return zn && "ko" !== e.locale ? null : e.data;
                    }
                  }(t, n)) &&
                (0 < (r = qr(r, "onBeforeInput")).length &&
                  (i = new xn("onBeforeInput", "beforeinput", null, n, i),
                    o.push({ event: i, listeners: r }),
                    i.data = y));
            }
            Nr(o, e);
          });
        }
        function $r(t, e, n) {
          return { instance: t, listener: e, currentTarget: n };
        }
        function qr(t, e) {
          for (var n = e + "Capture", r = []; null !== t;) {
            var i = t, a = i.stateNode;
            5 === i.tag && null !== a &&
            (i = a,
              null != (a = Dt(t, n)) && r.unshift($r(t, a, i)),
              null != (a = Dt(t, e)) && r.push($r(t, a, i))), t = t.return;
          }
          return r;
        }
        function Yr(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Qr(t, e, n, r, i) {
          for (var a = e._reactName, o = []; null !== n && n !== r;) {
            var s = n, l = s.alternate, c = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag && null !== c &&
            (s = c,
              i
                ? null != (l = Dt(n, a)) && o.unshift($r(n, l, s))
                : i || null != (l = Dt(n, a)) && o.push($r(n, l, s))),
              n = n.return;
          }
          0 !== o.length && t.push({ event: e, listeners: o });
        }
        var Kr = /\r\n?/g, Xr = /\u0000|\uFFFD/g;
        function Jr(t) {
          return ("string" === typeof t ? t : "" + t).replace(Kr, "\n").replace(
            Xr,
            "",
          );
        }
        function Gr(t, e, n) {
          if (e = Jr(e), Jr(t) !== e && n) throw Error(a(425));
        }
        function Zr() {}
        var ti = null, ei = null;
        function ni(t, e) {
          return "textarea" === t || "noscript" === t ||
            "string" === typeof e.children || "number" === typeof e.children ||
            "object" === typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html;
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi = "function" === typeof queueMicrotask
            ? queueMicrotask
            : "undefined" !== typeof ai
            ? function (t) {
              return ai.resolve(null).then(t).catch(si);
            }
            : ri;
        function si(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function li(t, e) {
          var n = e, r = 0;
          do {
            var i = n.nextSibling;
            if (t.removeChild(n), i && 8 === i.nodeType) {
              if ("/$" === (n = i.data)) {
                if (0 === r) {
                  return t.removeChild(i), void He(e);
                }
                r--;
              } else "$" !== n && "$?" !== n && "$!" !== n || r++;
            }
            n = i;
          } while (n);
          He(e);
        }
        function ci(t) {
          for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break;
            if (8 === e) {
              if ("$" === (e = t.data) || "$!" === e || "$?" === e) break;
              if ("/$" === e) return null;
            }
          }
          return t;
        }
        function ui(t) {
          t = t.previousSibling;
          for (var e = 0; t;) {
            if (8 === t.nodeType) {
              var n = t.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === e) return t;
                e--;
              } else "/$" === n && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        var hi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + hi,
          fi = "__reactProps$" + hi,
          pi = "__reactContainer$" + hi,
          gi = "__reactEvents$" + hi,
          mi = "__reactListeners$" + hi,
          bi = "__reactHandles$" + hi;
        function yi(t) {
          var e = t[di];
          if (e) return e;
          for (var n = t.parentNode; n;) {
            if (e = n[pi] || n[di]) {
              if (
                n = e.alternate,
                  null !== e.child || null !== n && null !== n.child
              ) {
                for (t = ui(t); null !== t;) {
                  if (n = t[di]) return n;
                  t = ui(t);
                }
              }
              return e;
            }
            n = (t = n).parentNode;
          }
          return null;
        }
        function vi(t) {
          return !(t = t[di] || t[pi]) ||
              5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag
            ? null
            : t;
        }
        function xi(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(a(33));
        }
        function wi(t) {
          return t[fi] || null;
        }
        var _i = [], ki = -1;
        function Si(t) {
          return { current: t };
        }
        function Mi(t) {
          0 > ki || (t.current = _i[ki], _i[ki] = null, ki--);
        }
        function Ei(t, e) {
          ki++, _i[ki] = t.current, t.current = e;
        }
        var Ci = {}, Pi = Si(Ci), Ti = Si(!1), Ri = Ci;
        function Oi(t, e) {
          var n = t.type.contextTypes;
          if (!n) return Ci;
          var r = t.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) {
            return r.__reactInternalMemoizedMaskedChildContext;
          }
          var i, a = {};
          for (i in n) a[i] = e[i];
          return r &&
            ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e,
              t.__reactInternalMemoizedMaskedChildContext = a),
            a;
        }
        function Di(t) {
          return null !== (t = t.childContextTypes) && void 0 !== t;
        }
        function Li() {
          Mi(Ti), Mi(Pi);
        }
        function Ai(t, e, n) {
          if (Pi.current !== Ci) throw Error(a(168));
          Ei(Pi, e), Ei(Ti, n);
        }
        function Fi(t, e, n) {
          var r = t.stateNode;
          if (
            e = e.childContextTypes, "function" !== typeof r.getChildContext
          ) return n;
          for (var i in r = r.getChildContext()) {
            if (!(i in e)) throw Error(a(108, U(t) || "Unknown", i));
          }
          return z({}, n, r);
        }
        function ji(t) {
          return t =
            (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext ||
            Ci,
            Ri = Pi.current,
            Ei(Pi, t),
            Ei(Ti, Ti.current),
            !0;
        }
        function zi(t, e, n) {
          var r = t.stateNode;
          if (!r) throw Error(a(169));
          n
            ? (t = Fi(t, e, Ri),
              r.__reactInternalMemoizedMergedChildContext = t,
              Mi(Ti),
              Mi(Pi),
              Ei(Pi, t))
            : Mi(Ti), Ei(Ti, n);
        }
        var Ni = null, Ii = !1, Bi = !1;
        function Vi(t) {
          null === Ni ? Ni = [t] : Ni.push(t);
        }
        function Hi() {
          if (!Bi && null !== Ni) {
            Bi = !0;
            var t = 0, e = ve;
            try {
              var n = Ni;
              for (ve = 1; t < n.length; t++) {
                var r = n[t];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              Ni = null, Ii = !1;
            } catch (i) {
              throw null !== Ni && (Ni = Ni.slice(t + 1)), Yt(Zt, Hi), i;
            } finally {
              ve = e, Bi = !1;
            }
          }
          return null;
        }
        var Ui = [],
          Wi = 0,
          $i = null,
          qi = 0,
          Yi = [],
          Qi = 0,
          Ki = null,
          Xi = 1,
          Ji = "";
        function Gi(t, e) {
          Ui[Wi++] = qi, Ui[Wi++] = $i, $i = t, qi = e;
        }
        function Zi(t, e, n) {
          Yi[Qi++] = Xi, Yi[Qi++] = Ji, Yi[Qi++] = Ki, Ki = t;
          var r = Xi;
          t = Ji;
          var i = 32 - oe(r) - 1;
          r &= ~(1 << i), n += 1;
          var a = 32 - oe(e) + i;
          if (30 < a) {
            var o = i - i % 5;
            a = (r & (1 << o) - 1).toString(32),
              r >>= o,
              i -= o,
              Xi = 1 << 32 - oe(e) + i | n << i | r,
              Ji = a + t;
          } else Xi = 1 << a | n << i | r, Ji = t;
        }
        function ta(t) {
          null !== t.return && (Gi(t, 1), Zi(t, 1, 0));
        }
        function ea(t) {
          for (; t === $i;) {
            $i = Ui[--Wi], Ui[Wi] = null, qi = Ui[--Wi], Ui[Wi] = null;
          }
          for (; t === Ki;) {
            Ki = Yi[--Qi],
              Yi[Qi] = null,
              Ji = Yi[--Qi],
              Yi[Qi] = null,
              Xi = Yi[--Qi],
              Yi[Qi] = null;
          }
        }
        var na = null, ra = null, ia = !1, aa = null;
        function oa(t, e) {
          var n = Oc(5, null, null, 0);
          n.elementType = "DELETED",
            n.stateNode = e,
            n.return = t,
            null === (e = t.deletions)
              ? (t.deletions = [n], t.flags |= 16)
              : e.push(n);
        }
        function sa(t, e) {
          switch (t.tag) {
            case 5:
              var n = t.type;
              return null !==
                  (e = 1 !== e.nodeType ||
                      n.toLowerCase() !== e.nodeName.toLowerCase()
                    ? null
                    : e) &&
                (t.stateNode = e, na = t, ra = ci(e.firstChild), !0);
            case 6:
              return null !==
                  (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                (t.stateNode = e, na = t, ra = null, !0);
            case 13:
              return null !== (e = 8 !== e.nodeType ? null : e) &&
                (n = null !== Ki ? { id: Xi, overflow: Ji } : null,
                  t.memoizedState = {
                    dehydrated: e,
                    treeContext: n,
                    retryLane: 1073741824,
                  },
                  (n = Oc(18, null, null, 0)).stateNode = e,
                  n.return = t,
                  t.child = n,
                  na = t,
                  ra = null,
                  !0);
            default:
              return !1;
          }
        }
        function la(t) {
          return 0 !== (1 & t.mode) && 0 === (128 & t.flags);
        }
        function ca(t) {
          if (ia) {
            var e = ra;
            if (e) {
              var n = e;
              if (!sa(t, e)) {
                if (la(t)) throw Error(a(418));
                e = ci(n.nextSibling);
                var r = na;
                e && sa(t, e)
                  ? oa(r, n)
                  : (t.flags = -4097 & t.flags | 2, ia = !1, na = t);
              }
            } else {
              if (la(t)) throw Error(a(418));
              t.flags = -4097 & t.flags | 2, ia = !1, na = t;
            }
          }
        }
        function ua(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;
          ) t = t.return;
          na = t;
        }
        function ha(t) {
          if (t !== na) return !1;
          if (!ia) return ua(t), ia = !0, !1;
          var e;
          if (
            (e = 3 !== t.tag) && !(e = 5 !== t.tag) &&
            (e = "head" !== (e = t.type) && "body" !== e &&
              !ni(t.type, t.memoizedProps)), e && (e = ra)
          ) {
            if (la(t)) throw da(), Error(a(418));
            for (; e;) oa(t, e), e = ci(e.nextSibling);
          }
          if (ua(t), 13 === t.tag) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) {
              throw Error(a(317));
            }
            t: {
              for (t = t.nextSibling, e = 0; t;) {
                if (8 === t.nodeType) {
                  var n = t.data;
                  if ("/$" === n) {
                    if (0 === e) {
                      ra = ci(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else "$" !== n && "$!" !== n && "$?" !== n || e++;
                }
                t = t.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ci(t.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var t = ra; t;) t = ci(t.nextSibling);
        }
        function fa() {
          ra = na = null, ia = !1;
        }
        function pa(t) {
          null === aa ? aa = [t] : aa.push(t);
        }
        var ga = x.ReactCurrentBatchConfig;
        function ma(t, e, n) {
          if (
            null !== (t = n.ref) && "function" !== typeof t &&
            "object" !== typeof t
          ) {
            if (n._owner) {
              if (n = n._owner) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, t));
              var i = r, o = "" + t;
              return null !== e && null !== e.ref &&
                  "function" === typeof e.ref && e.ref._stringRef === o
                ? e.ref
                : (e = function (t) {
                  var e = i.refs;
                  null === t ? delete e[o] : e[o] = t;
                },
                  e._stringRef = o,
                  e);
            }
            if ("string" !== typeof t) throw Error(a(284));
            if (!n._owner) throw Error(a(290, t));
          }
          return t;
        }
        function ba(t, e) {
          throw t = Object.prototype.toString.call(e),
            Error(
              a(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t,
              ),
            );
        }
        function ya(t) {
          return (0, t._init)(t._payload);
        }
        function va(t) {
          function e(e, n) {
            if (t) {
              var r = e.deletions;
              null === r ? (e.deletions = [n], e.flags |= 16) : r.push(n);
            }
          }
          function n(n, r) {
            if (!t) return null;
            for (; null !== r;) e(n, r), r = r.sibling;
            return null;
          }
          function r(t, e) {
            for (t = new Map(); null !== e;) {
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                e = e.sibling;
            }
            return t;
          }
          function i(t, e) {
            return (t = Lc(t, e)).index = 0, t.sibling = null, t;
          }
          function o(e, n, r) {
            return e.index = r,
              t
                ? null !== (r = e.alternate)
                  ? (r = r.index) < n ? (e.flags |= 2, n) : r
                  : (e.flags |= 2, n)
                : (e.flags |= 1048576, n);
          }
          function s(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function l(t, e, n, r) {
            return null === e || 6 !== e.tag
              ? ((e = zc(n, t.mode, r)).return = t, e)
              : ((e = i(e, n)).return = t, e);
          }
          function c(t, e, n, r) {
            var a = n.type;
            return a === k ? h(t, e, n.props.children, r, n.key) : null !== e &&
                (e.elementType === a ||
                  "object" === typeof a && null !== a && a.$$typeof === D &&
                    ya(a) === e.type)
              ? ((r = i(e, n.props)).ref = ma(t, e, n), r.return = t, r)
              : ((r = Ac(n.type, n.key, n.props, null, t.mode, r)).ref = ma(
                t,
                e,
                n,
              ),
                r.return = t,
                r);
          }
          function u(t, e, n, r) {
            return null === e || 4 !== e.tag ||
                e.stateNode.containerInfo !== n.containerInfo ||
                e.stateNode.implementation !== n.implementation
              ? ((e = Nc(n, t.mode, r)).return = t, e)
              : ((e = i(e, n.children || [])).return = t, e);
          }
          function h(t, e, n, r, a) {
            return null === e || 7 !== e.tag
              ? ((e = Fc(n, t.mode, r, a)).return = t, e)
              : ((e = i(e, n)).return = t, e);
          }
          function d(t, e, n) {
            if ("string" === typeof e && "" !== e || "number" === typeof e) {
              return (e = zc("" + e, t.mode, n)).return = t, e;
            }
            if ("object" === typeof e && null !== e) {
              switch (e.$$typeof) {
                case w:
                  return (n = Ac(e.type, e.key, e.props, null, t.mode, n)).ref =
                    ma(t, null, e),
                    n.return = t,
                    n;
                case _:
                  return (e = Nc(e, t.mode, n)).return = t, e;
                case D:
                  return d(t, (0, e._init)(e._payload), n);
              }
              if (et(e) || F(e)) {
                return (e = Fc(e, t.mode, n, null)).return = t, e;
              }
              ba(t, e);
            }
            return null;
          }
          function f(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if ("string" === typeof n && "" !== n || "number" === typeof n) {
              return null !== i ? null : l(t, e, "" + n, r);
            }
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? c(t, e, n, r) : null;
                case _:
                  return n.key === i ? u(t, e, n, r) : null;
                case D:
                  return f(t, e, (i = n._init)(n._payload), r);
              }
              if (et(n) || F(n)) return null !== i ? null : h(t, e, n, r, null);
              ba(t, n);
            }
            return null;
          }
          function p(t, e, n, r, i) {
            if ("string" === typeof r && "" !== r || "number" === typeof r) {
              return l(e, t = t.get(n) || null, "" + r, i);
            }
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    e,
                    t = t.get(null === r.key ? n : r.key) || null,
                    r,
                    i,
                  );
                case _:
                  return u(
                    e,
                    t = t.get(null === r.key ? n : r.key) || null,
                    r,
                    i,
                  );
                case D:
                  return p(t, e, n, (0, r._init)(r._payload), i);
              }
              if (et(r) || F(r)) return h(e, t = t.get(n) || null, r, i, null);
              ba(e, r);
            }
            return null;
          }
          function g(i, a, s, l) {
            for (
              var c = null, u = null, h = a, g = a = 0, m = null;
              null !== h && g < s.length;
              g++
            ) {
              h.index > g ? (m = h, h = null) : m = h.sibling;
              var b = f(i, h, s[g], l);
              if (null === b) {
                null === h && (h = m);
                break;
              }
              t && h && null === b.alternate && e(i, h),
                a = o(b, a, g),
                null === u ? c = b : u.sibling = b,
                u = b,
                h = m;
            }
            if (g === s.length) return n(i, h), ia && Gi(i, g), c;
            if (null === h) {
              for (; g < s.length; g++) {
                null !== (h = d(i, s[g], l)) &&
                  (a = o(h, a, g), null === u ? c = h : u.sibling = h, u = h);
              }
              return ia && Gi(i, g), c;
            }
            for (h = r(i, h); g < s.length; g++) {
              null !== (m = p(h, i, g, s[g], l)) &&
                (t && null !== m.alternate &&
                  h.delete(null === m.key ? g : m.key),
                  a = o(m, a, g),
                  null === u ? c = m : u.sibling = m,
                  u = m);
            }
            return t && h.forEach(function (t) {
              return e(i, t);
            }),
              ia && Gi(i, g),
              c;
          }
          function m(i, s, l, c) {
            var u = F(l);
            if ("function" !== typeof u) throw Error(a(150));
            if (null == (l = u.call(l))) throw Error(a(151));
            for (
              var h = u = null, g = s, m = s = 0, b = null, y = l.next();
              null !== g && !y.done;
              m++, y = l.next()
            ) {
              g.index > m ? (b = g, g = null) : b = g.sibling;
              var v = f(i, g, y.value, c);
              if (null === v) {
                null === g && (g = b);
                break;
              }
              t && g && null === v.alternate && e(i, g),
                s = o(v, s, m),
                null === h ? u = v : h.sibling = v,
                h = v,
                g = b;
            }
            if (y.done) return n(i, g), ia && Gi(i, m), u;
            if (null === g) {
              for (; !y.done; m++, y = l.next()) {
                null !== (y = d(i, y.value, c)) &&
                  (s = o(y, s, m), null === h ? u = y : h.sibling = y, h = y);
              }
              return ia && Gi(i, m), u;
            }
            for (g = r(i, g); !y.done; m++, y = l.next()) {
              null !== (y = p(g, i, m, y.value, c)) &&
                (t && null !== y.alternate &&
                  g.delete(null === y.key ? m : y.key),
                  s = o(y, s, m),
                  null === h ? u = y : h.sibling = y,
                  h = y);
            }
            return t && g.forEach(function (t) {
              return e(i, t);
            }),
              ia && Gi(i, m),
              u;
          }
          return function t(r, a, o, l) {
            if (
              "object" === typeof o && null !== o && o.type === k &&
              null === o.key && (o = o.props.children),
                "object" === typeof o && null !== o
            ) {
              switch (o.$$typeof) {
                case w:
                  t: {
                    for (var c = o.key, u = a; null !== u;) {
                      if (u.key === c) {
                        if ((c = o.type) === k) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              (a = i(u, o.props.children)).return = r,
                              r = a;
                            break t;
                          }
                        } else if (
                          u.elementType === c ||
                          "object" === typeof c && null !== c &&
                            c.$$typeof === D && ya(c) === u.type
                        ) {
                          n(r, u.sibling),
                            (a = i(u, o.props)).ref = ma(r, u, o),
                            a.return = r,
                            r = a;
                          break t;
                        }
                        n(r, u);
                        break;
                      }
                      e(r, u), u = u.sibling;
                    }
                    o.type === k
                      ? ((a = Fc(o.props.children, r.mode, l, o.key)).return =
                        r,
                        r = a)
                      : ((l = Ac(o.type, o.key, o.props, null, r.mode, l)).ref =
                        ma(r, a, o),
                        l.return = r,
                        r = l);
                  }
                  return s(r);
                case _:
                  t: {
                    for (u = o.key; null !== a;) {
                      if (a.key === u) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            (a = i(a, o.children || [])).return = r,
                            r = a;
                          break t;
                        }
                        n(r, a);
                        break;
                      }
                      e(r, a), a = a.sibling;
                    }
                    (a = Nc(o, r.mode, l)).return = r, r = a;
                  }
                  return s(r);
                case D:
                  return t(r, a, (u = o._init)(o._payload), l);
              }
              if (et(o)) return g(r, a, o, l);
              if (F(o)) return m(r, a, o, l);
              ba(r, o);
            }
            return "string" === typeof o && "" !== o || "number" === typeof o
              ? (o = "" + o,
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), (a = i(a, o)).return = r, r = a)
                  : (n(r, a), (a = zc(o, r.mode, l)).return = r, r = a),
                s(r))
              : n(r, a);
          };
        }
        var xa = va(!0),
          wa = va(!1),
          _a = Si(null),
          ka = null,
          Sa = null,
          Ma = null;
        function Ea() {
          Ma = Sa = ka = null;
        }
        function Ca(t) {
          var e = _a.current;
          Mi(_a), t._currentValue = e;
        }
        function Pa(t, e, n) {
          for (; null !== t;) {
            var r = t.alternate;
            if (
              (t.childLanes & e) !== e
                ? (t.childLanes |= e, null !== r && (r.childLanes |= e))
                : null !== r && (r.childLanes & e) !== e && (r.childLanes |= e),
                t === n
            ) break;
            t = t.return;
          }
        }
        function Ta(t, e) {
          ka = t,
            Ma = Sa = null,
            null !== (t = t.dependencies) && null !== t.firstContext &&
            (0 !== (t.lanes & e) && (vs = !0), t.firstContext = null);
        }
        function Ra(t) {
          var e = t._currentValue;
          if (Ma !== t) {
            if (t = { context: t, memoizedValue: e, next: null }, null === Sa) {
              if (null === ka) {
                throw Error(a(308));
              }
              Sa = t, ka.dependencies = { lanes: 0, firstContext: t };
            } else Sa = Sa.next = t;
          }
          return e;
        }
        var Oa = null;
        function Da(t) {
          null === Oa ? Oa = [t] : Oa.push(t);
        }
        function La(t, e, n, r) {
          var i = e.interleaved;
          return null === i
            ? (n.next = n, Da(e))
            : (n.next = i.next, i.next = n),
            e.interleaved = n,
            Aa(t, r);
        }
        function Aa(t, e) {
          t.lanes |= e;
          var n = t.alternate;
          for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t;) {
            t.childLanes |= e,
              null !== (n = t.alternate) && (n.childLanes |= e),
              n = t,
              t = t.return;
          }
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fa = !1;
        function ja(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function za(t, e) {
          t = t.updateQueue,
            e.updateQueue === t &&
            (e.updateQueue = {
              baseState: t.baseState,
              firstBaseUpdate: t.firstBaseUpdate,
              lastBaseUpdate: t.lastBaseUpdate,
              shared: t.shared,
              effects: t.effects,
            });
        }
        function Na(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ia(t, e, n) {
          var r = t.updateQueue;
          if (null === r) return null;
          if (r = r.shared, 0 !== (2 & Pl)) {
            var i = r.pending;
            return null === i ? e.next = e : (e.next = i.next, i.next = e),
              r.pending = e,
              Aa(t, n);
          }
          return null === (i = r.interleaved)
            ? (e.next = e, Da(r))
            : (e.next = i.next, i.next = e),
            r.interleaved = e,
            Aa(t, n);
        }
        function Ba(t, e, n) {
          if (
            null !== (e = e.updateQueue) && (e = e.shared, 0 !== (4194240 & n))
          ) {
            var r = e.lanes;
            n |= r &= t.pendingLanes, e.lanes = n, ye(t, n);
          }
        }
        function Va(t, e) {
          var n = t.updateQueue, r = t.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null, a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? i = a = o : a = a.next = o, n = n.next;
              } while (null !== n);
              null === a ? i = a = e : a = a.next = e;
            } else i = a = e;
            return n = {
              baseState: r.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects,
            },
              void (t.updateQueue = n);
          }
          null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e,
            n.lastBaseUpdate = e;
        }
        function Ha(t, e, n, r) {
          var i = t.updateQueue;
          Fa = !1;
          var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s, c = l.next;
            l.next = null, null === o ? a = c : o.next = c, o = l;
            var u = t.alternate;
            null !== u &&
              ((s = (u = u.updateQueue).lastBaseUpdate) !== o &&
                (null === s ? u.firstBaseUpdate = c : s.next = c,
                  u.lastBaseUpdate = l));
          }
          if (null !== a) {
            var h = i.baseState;
            for (o = 0, u = c = l = null, s = a;;) {
              var d = s.lane, f = s.eventTime;
              if ((r & d) === d) {
                null !== u &&
                  (u = u.next = {
                    eventTime: f,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                  });
                t: {
                  var p = t, g = s;
                  switch (d = e, f = n, g.tag) {
                    case 1:
                      if ("function" === typeof (p = g.payload)) {
                        h = p.call(f, h, d);
                        break t;
                      }
                      h = p;
                      break t;
                    case 3:
                      p.flags = -65537 & p.flags | 128;
                    case 0:
                      if (
                        null ===
                          (d = "function" === typeof (p = g.payload)
                            ? p.call(f, h, d)
                            : p) || void 0 === d
                      ) break t;
                      h = z({}, h, d);
                      break t;
                    case 2:
                      Fa = !0;
                  }
                }
                null !== s.callback && 0 !== s.lane &&
                  (t.flags |= 64,
                    null === (d = i.effects) ? i.effects = [s] : d.push(s));
              } else {f = {
                  eventTime: f,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                },
                  null === u ? (c = u = f, l = h) : u = u.next = f,
                  o |= d;}
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                s = (d = s).next,
                  d.next = null,
                  i.lastBaseUpdate = d,
                  i.shared.pending = null;
              }
            }
            if (
              null === u && (l = h),
                i.baseState = l,
                i.firstBaseUpdate = c,
                i.lastBaseUpdate = u,
                null !== (e = i.shared.interleaved)
            ) {
              i = e;
              do {
                o |= i.lane, i = i.next;
              } while (i !== e);
            } else null === a && (i.shared.lanes = 0);
            jl |= o, t.lanes = o, t.memoizedState = h;
          }
        }
        function Ua(t, e, n) {
          if (t = e.effects, e.effects = null, null !== t) {
            for (e = 0; e < t.length; e++) {
              var r = t[e], i = r.callback;
              if (null !== i) {
                if (r.callback = null, r = n, "function" !== typeof i) {
                  throw Error(a(191, i));
                }
                i.call(r);
              }
            }
          }
        }
        var Wa = {}, $a = Si(Wa), qa = Si(Wa), Ya = Si(Wa);
        function Qa(t) {
          if (t === Wa) throw Error(a(174));
          return t;
        }
        function Ka(t, e) {
          switch (Ei(Ya, e), Ei(qa, t), Ei($a, Wa), t = e.nodeType) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : lt(null, "");
              break;
            default:
              e = lt(
                e = (t = 8 === t ? e.parentNode : e).namespaceURI || null,
                t = t.tagName,
              );
          }
          Mi($a), Ei($a, e);
        }
        function Xa() {
          Mi($a), Mi(qa), Mi(Ya);
        }
        function Ja(t) {
          Qa(Ya.current);
          var e = Qa($a.current), n = lt(e, t.type);
          e !== n && (Ei(qa, t), Ei($a, n));
        }
        function Ga(t) {
          qa.current === t && (Mi($a), Mi(qa));
        }
        var Za = Si(0);
        function to(t) {
          for (var e = t; null !== e;) {
            if (13 === e.tag) {
              var n = e.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || "$?" === n.data ||
                  "$!" === n.data)
              ) return e;
            } else if (
              19 === e.tag && void 0 !== e.memoizedProps.revealOrder
            ) {
              if (0 !== (128 & e.flags)) return e;
            } else if (null !== e.child) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling;) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          return null;
        }
        var eo = [];
        function no() {
          for (var t = 0; t < eo.length; t++) {
            eo[t]._workInProgressVersionPrimary = null;
          }
          eo.length = 0;
        }
        var ro = x.ReactCurrentDispatcher,
          io = x.ReactCurrentBatchConfig,
          ao = 0,
          oo = null,
          so = null,
          lo = null,
          co = !1,
          uo = !1,
          ho = 0,
          fo = 0;
        function po() {
          throw Error(a(321));
        }
        function go(t, e) {
          if (null === e) return !1;
          for (var n = 0; n < e.length && n < t.length; n++) {
            if (!sr(t[n], e[n])) return !1;
          }
          return !0;
        }
        function mo(t, e, n, r, i, o) {
          if (
            ao = o,
              oo = e,
              e.memoizedState = null,
              e.updateQueue = null,
              e.lanes = 0,
              ro.current = null === t || null === t.memoizedState ? Zo : ts,
              t = n(r, i),
              uo
          ) {
            o = 0;
            do {
              if (uo = !1, ho = 0, 25 <= o) throw Error(a(301));
              o += 1,
                lo = so = null,
                e.updateQueue = null,
                ro.current = es,
                t = n(r, i);
            } while (uo);
          }
          if (
            ro.current = Go,
              e = null !== so && null !== so.next,
              ao = 0,
              lo = so = oo = null,
              co = !1,
              e
          ) throw Error(a(300));
          return t;
        }
        function bo() {
          var t = 0 !== ho;
          return ho = 0, t;
        }
        function yo() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === lo ? oo.memoizedState = lo = t : lo = lo.next = t, lo;
        }
        function vo() {
          if (null === so) {
            var t = oo.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = so.next;
          var e = null === lo ? oo.memoizedState : lo.next;
          if (null !== e) lo = e, so = t;
          else {
            if (null === t) throw Error(a(310));
            t = {
              memoizedState: (so = t).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }, null === lo ? oo.memoizedState = lo = t : lo = lo.next = t;
          }
          return lo;
        }
        function xo(t, e) {
          return "function" === typeof e ? e(t) : e;
        }
        function wo(t) {
          var e = vo(), n = e.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = t;
          var r = so, i = r.baseQueue, o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              i.next = o.next, o.next = s;
            }
            r.baseQueue = i = o, n.pending = null;
          }
          if (null !== i) {
            o = i.next, r = r.baseState;
            var l = s = null, c = null, u = o;
            do {
              var h = u.lane;
              if ((ao & h) === h) {
                null !== c &&
                (c = c.next = {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }), r = u.hasEagerState ? u.eagerState : t(r, u.action);
              } else {
                var d = {
                  lane: h,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? (l = c = d, s = r) : c = c.next = d,
                  oo.lanes |= h,
                  jl |= h;
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === c ? s = r : c.next = l,
              sr(r, e.memoizedState) || (vs = !0),
              e.memoizedState = r,
              e.baseState = s,
              e.baseQueue = c,
              n.lastRenderedState = r;
          }
          if (null !== (t = n.interleaved)) {
            i = t;
            do {
              o = i.lane, oo.lanes |= o, jl |= o, i = i.next;
            } while (i !== t);
          } else null === i && (n.lanes = 0);
          return [e.memoizedState, n.dispatch];
        }
        function _o(t) {
          var e = vo(), n = e.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = t;
          var r = n.dispatch, i = n.pending, o = e.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = i = i.next;
            do {
              o = t(o, s.action), s = s.next;
            } while (s !== i);
            sr(o, e.memoizedState) || (vs = !0),
              e.memoizedState = o,
              null === e.baseQueue && (e.baseState = o),
              n.lastRenderedState = o;
          }
          return [o, r];
        }
        function ko() {}
        function So(t, e) {
          var n = oo, r = vo(), i = e(), o = !sr(r.memoizedState, i);
          if (
            o && (r.memoizedState = i, vs = !0),
              r = r.queue,
              jo(Co.bind(null, n, r, t), [t]),
              r.getSnapshot !== e || o ||
              null !== lo && 1 & lo.memoizedState.tag
          ) {
            if (
              n.flags |= 2048,
                Oo(9, Eo.bind(null, n, r, i, e), void 0, null),
                null === Tl
            ) throw Error(a(349));
            0 !== (30 & ao) || Mo(n, e, i);
          }
          return i;
        }
        function Mo(t, e, n) {
          t.flags |= 16384,
            t = { getSnapshot: e, value: n },
            null === (e = oo.updateQueue)
              ? (e = { lastEffect: null, stores: null },
                oo.updateQueue = e,
                e.stores = [t])
              : null === (n = e.stores)
              ? e.stores = [t]
              : n.push(t);
        }
        function Eo(t, e, n, r) {
          e.value = n, e.getSnapshot = r, Po(e) && To(t);
        }
        function Co(t, e, n) {
          return n(function () {
            Po(e) && To(t);
          });
        }
        function Po(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !sr(t, n);
          } catch (r) {
            return !0;
          }
        }
        function To(t) {
          var e = Aa(t, 1);
          null !== e && nc(e, t, 1, -1);
        }
        function Ro(t) {
          var e = yo();
          return "function" === typeof t && (t = t()),
            e.memoizedState = e.baseState = t,
            t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xo,
              lastRenderedState: t,
            },
            e.queue = t,
            t = t.dispatch = Qo.bind(null, oo, t),
            [e.memoizedState, t];
        }
        function Oo(t, e, n, r) {
          return t = { tag: t, create: e, destroy: n, deps: r, next: null },
            null === (e = oo.updateQueue)
              ? (e = { lastEffect: null, stores: null },
                oo.updateQueue = e,
                e.lastEffect = t.next = t)
              : null === (n = e.lastEffect)
              ? e.lastEffect = t.next = t
              : (r = n.next, n.next = t, t.next = r, e.lastEffect = t),
            t;
        }
        function Do() {
          return vo().memoizedState;
        }
        function Lo(t, e, n, r) {
          var i = yo();
          oo.flags |= t,
            i.memoizedState = Oo(1 | e, n, void 0, void 0 === r ? null : r);
        }
        function Ao(t, e, n, r) {
          var i = vo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (a = o.destroy, null !== r && go(r, o.deps)) {
              return void (i.memoizedState = Oo(e, n, a, r));
            }
          }
          oo.flags |= t, i.memoizedState = Oo(1 | e, n, a, r);
        }
        function Fo(t, e) {
          return Lo(8390656, 8, t, e);
        }
        function jo(t, e) {
          return Ao(2048, 8, t, e);
        }
        function zo(t, e) {
          return Ao(4, 2, t, e);
        }
        function No(t, e) {
          return Ao(4, 4, t, e);
        }
        function Io(t, e) {
          return "function" === typeof e
            ? (t = t(), e(t), function () {
              e(null);
            })
            : null !== e && void 0 !== e
            ? (t = t(), e.current = t, function () {
              e.current = null;
            })
            : void 0;
        }
        function Bo(t, e, n) {
          return n = null !== n && void 0 !== n ? n.concat([t]) : null,
            Ao(4, 4, Io.bind(null, e, t), n);
        }
        function Vo() {}
        function Ho(t, e) {
          var n = vo();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && go(e, r[1])
            ? r[0]
            : (n.memoizedState = [t, e], t);
        }
        function Uo(t, e) {
          var n = vo();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && go(e, r[1])
            ? r[0]
            : (t = t(), n.memoizedState = [t, e], t);
        }
        function Wo(t, e, n) {
          return 0 === (21 & ao)
            ? (t.baseState && (t.baseState = !1, vs = !0), t.memoizedState = n)
            : (sr(n, e) || (n = ge(), oo.lanes |= n, jl |= n, t.baseState = !0),
              e);
        }
        function $o(t, e) {
          var n = ve;
          ve = 0 !== n && 4 > n ? n : 4, t(!0);
          var r = io.transition;
          io.transition = {};
          try {
            t(!1), e();
          } finally {
            ve = n, io.transition = r;
          }
        }
        function qo() {
          return vo().memoizedState;
        }
        function Yo(t, e, n) {
          var r = ec(t);
          if (
            n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }, Ko(t)
          ) Xo(e, n);
          else if (null !== (n = La(t, e, n, r))) {
            nc(n, t, r, tc()), Jo(n, e, r);
          }
        }
        function Qo(t, e, n) {
          var r = ec(t),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ko(t)) Xo(e, i);
          else {
            var a = t.alternate;
            if (
              0 === t.lanes && (null === a || 0 === a.lanes) &&
              null !== (a = e.lastRenderedReducer)
            ) {
              try {
                var o = e.lastRenderedState, s = a(o, n);
                if (i.hasEagerState = !0, i.eagerState = s, sr(s, o)) {
                  var l = e.interleaved;
                  return null === l
                    ? (i.next = i, Da(e))
                    : (i.next = l.next, l.next = i),
                    void (e.interleaved = i);
                }
              } catch (c) {}
            }
            null !== (n = La(t, e, i, r)) &&
              (nc(n, t, r, i = tc()), Jo(n, e, r));
          }
        }
        function Ko(t) {
          var e = t.alternate;
          return t === oo || null !== e && e === oo;
        }
        function Xo(t, e) {
          uo = co = !0;
          var n = t.pending;
          null === n ? e.next = e : (e.next = n.next, n.next = e),
            t.pending = e;
        }
        function Jo(t, e, n) {
          if (0 !== (4194240 & n)) {
            var r = e.lanes;
            n |= r &= t.pendingLanes, e.lanes = n, ye(t, n);
          }
        }
        var Go = {
            readContext: Ra,
            useCallback: po,
            useContext: po,
            useEffect: po,
            useImperativeHandle: po,
            useInsertionEffect: po,
            useLayoutEffect: po,
            useMemo: po,
            useReducer: po,
            useRef: po,
            useState: po,
            useDebugValue: po,
            useDeferredValue: po,
            useTransition: po,
            useMutableSource: po,
            useSyncExternalStore: po,
            useId: po,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Ra,
            useCallback: function (t, e) {
              return yo().memoizedState = [t, void 0 === e ? null : e], t;
            },
            useContext: Ra,
            useEffect: Fo,
            useImperativeHandle: function (t, e, n) {
              return n = null !== n && void 0 !== n ? n.concat([t]) : null,
                Lo(4194308, 4, Io.bind(null, e, t), n);
            },
            useLayoutEffect: function (t, e) {
              return Lo(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return Lo(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var n = yo();
              return e = void 0 === e ? null : e,
                t = t(),
                n.memoizedState = [t, e],
                t;
            },
            useReducer: function (t, e, n) {
              var r = yo();
              return e = void 0 !== n ? n(e) : e,
                r.memoizedState = r.baseState = e,
                t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                },
                r.queue = t,
                t = t.dispatch = Yo.bind(null, oo, t),
                [r.memoizedState, t];
            },
            useRef: function (t) {
              return t = { current: t }, yo().memoizedState = t;
            },
            useState: Ro,
            useDebugValue: Vo,
            useDeferredValue: function (t) {
              return yo().memoizedState = t;
            },
            useTransition: function () {
              var t = Ro(!1), e = t[0];
              return t = $o.bind(null, t[1]), yo().memoizedState = t, [e, t];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, n) {
              var r = oo, i = yo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (n = e(), null === Tl) throw Error(a(349));
                0 !== (30 & ao) || Mo(r, e, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: e };
              return i.queue = o,
                Fo(Co.bind(null, r, o, t), [t]),
                r.flags |= 2048,
                Oo(9, Eo.bind(null, r, o, n, e), void 0, null),
                n;
            },
            useId: function () {
              var t = yo(), e = Tl.identifierPrefix;
              if (ia) {
                var n = Ji;
                e = ":" + e + "R" +
                  (n = (Xi & ~(1 << 32 - oe(Xi) - 1)).toString(32) + n),
                  0 < (n = ho++) && (e += "H" + n.toString(32)),
                  e += ":";
              } else e = ":" + e + "r" + (n = fo++).toString(32) + ":";
              return t.memoizedState = e;
            },
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Ra,
            useCallback: Ho,
            useContext: Ra,
            useEffect: jo,
            useImperativeHandle: Bo,
            useInsertionEffect: zo,
            useLayoutEffect: No,
            useMemo: Uo,
            useReducer: wo,
            useRef: Do,
            useState: function () {
              return wo(xo);
            },
            useDebugValue: Vo,
            useDeferredValue: function (t) {
              return Wo(vo(), so.memoizedState, t);
            },
            useTransition: function () {
              return [wo(xo)[0], vo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: So,
            useId: qo,
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Ra,
            useCallback: Ho,
            useContext: Ra,
            useEffect: jo,
            useImperativeHandle: Bo,
            useInsertionEffect: zo,
            useLayoutEffect: No,
            useMemo: Uo,
            useReducer: _o,
            useRef: Do,
            useState: function () {
              return _o(xo);
            },
            useDebugValue: Vo,
            useDeferredValue: function (t) {
              var e = vo();
              return null === so
                ? e.memoizedState = t
                : Wo(e, so.memoizedState, t);
            },
            useTransition: function () {
              return [_o(xo)[0], vo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: So,
            useId: qo,
            unstable_isNewReconciler: !1,
          };
        function ns(t, e) {
          if (t && t.defaultProps) {
            for (var n in e = z({}, e), t = t.defaultProps) {
              void 0 === e[n] && (e[n] = t[n]);
            }
            return e;
          }
          return e;
        }
        function rs(t, e, n, r) {
          n = null === (n = n(r, e = t.memoizedState)) || void 0 === n
            ? e
            : z({}, e, n),
            t.memoizedState = n,
            0 === t.lanes && (t.updateQueue.baseState = n);
        }
        var is = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Ht(t) === t;
          },
          enqueueSetState: function (t, e, n) {
            t = t._reactInternals;
            var r = tc(), i = ec(t), a = Na(r, i);
            a.payload = e,
              void 0 !== n && null !== n && (a.callback = n),
              null !== (e = Ia(t, a, i)) && (nc(e, t, i, r), Ba(e, t, i));
          },
          enqueueReplaceState: function (t, e, n) {
            t = t._reactInternals;
            var r = tc(), i = ec(t), a = Na(r, i);
            a.tag = 1,
              a.payload = e,
              void 0 !== n && null !== n && (a.callback = n),
              null !== (e = Ia(t, a, i)) && (nc(e, t, i, r), Ba(e, t, i));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var n = tc(), r = ec(t), i = Na(n, r);
            i.tag = 2,
              void 0 !== e && null !== e && (i.callback = e),
              null !== (e = Ia(t, i, r)) && (nc(e, t, r, n), Ba(e, t, r));
          },
        };
        function as(t, e, n, r, i, a, o) {
          return "function" === typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(r, a, o)
            : !e.prototype || !e.prototype.isPureReactComponent ||
              (!lr(n, r) || !lr(i, a));
        }
        function os(t, e, n) {
          var r = !1, i = Ci, a = e.contextType;
          return "object" === typeof a && null !== a
            ? a = Ra(a)
            : (i = Di(e) ? Ri : Pi.current,
              a = (r = null !== (r = e.contextTypes) && void 0 !== r)
                ? Oi(t, i)
                : Ci),
            e = new e(n, a),
            t.memoizedState = null !== e.state && void 0 !== e.state
              ? e.state
              : null,
            e.updater = is,
            t.stateNode = e,
            e._reactInternals = t,
            r &&
            ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i,
              t.__reactInternalMemoizedMaskedChildContext = a),
            e;
        }
        function ss(t, e, n, r) {
          t = e.state,
            "function" === typeof e.componentWillReceiveProps &&
            e.componentWillReceiveProps(n, r),
            "function" === typeof e.UNSAFE_componentWillReceiveProps &&
            e.UNSAFE_componentWillReceiveProps(n, r),
            e.state !== t && is.enqueueReplaceState(e, e.state, null);
        }
        function ls(t, e, n, r) {
          var i = t.stateNode;
          i.props = n, i.state = t.memoizedState, i.refs = {}, ja(t);
          var a = e.contextType;
          "object" === typeof a && null !== a
            ? i.context = Ra(a)
            : (a = Di(e) ? Ri : Pi.current, i.context = Oi(t, a)),
            i.state = t.memoizedState,
            "function" === typeof (a = e.getDerivedStateFromProps) &&
            (rs(t, e, a, n), i.state = t.memoizedState),
            "function" === typeof e.getDerivedStateFromProps ||
            "function" === typeof i.getSnapshotBeforeUpdate ||
            "function" !== typeof i.UNSAFE_componentWillMount &&
              "function" !== typeof i.componentWillMount ||
            (e = i.state,
              "function" === typeof i.componentWillMount &&
              i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
              e !== i.state && is.enqueueReplaceState(i, i.state, null),
              Ha(t, n, i, r),
              i.state = t.memoizedState),
            "function" === typeof i.componentDidMount && (t.flags |= 4194308);
        }
        function cs(t, e) {
          try {
            var n = "", r = e;
            do {
              n += V(r), r = r.return;
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: t, source: e, stack: i, digest: null };
        }
        function us(t, e, n) {
          return {
            value: t,
            source: null,
            stack: null != n ? n : null,
            digest: null != e ? e : null,
          };
        }
        function hs(t, e) {
          try {
            console.error(e.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ds = "function" === typeof WeakMap ? WeakMap : Map;
        function fs(t, e, n) {
          (n = Na(-1, n)).tag = 3, n.payload = { element: null };
          var r = e.value;
          return n.callback = function () {
            Wl || (Wl = !0, $l = r), hs(0, e);
          },
            n;
        }
        function ps(t, e, n) {
          (n = Na(-1, n)).tag = 3;
          var r = t.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = e.value;
            n.payload = function () {
              return r(i);
            },
              n.callback = function () {
                hs(0, e);
              };
          }
          var a = t.stateNode;
          return null !== a && "function" === typeof a.componentDidCatch &&
            (n.callback = function () {
              hs(0, e),
                "function" !== typeof r &&
                (null === ql ? ql = new Set([this]) : ql.add(this));
              var t = e.stack;
              this.componentDidCatch(e.value, {
                componentStack: null !== t ? t : "",
              });
            }),
            n;
        }
        function gs(t, e, n) {
          var r = t.pingCache;
          if (null === r) {
            r = t.pingCache = new ds();
            var i = new Set();
            r.set(e, i);
          } else void 0 === (i = r.get(e)) && (i = new Set(), r.set(e, i));
          i.has(n) || (i.add(n), t = Mc.bind(null, t, e, n), e.then(t, t));
        }
        function ms(t) {
          do {
            var e;
            if (
              (e = 13 === t.tag) &&
              (e = null === (e = t.memoizedState) || null !== e.dehydrated), e
            ) return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function bs(t, e, n, r, i) {
          return 0 === (1 & t.mode)
            ? (t === e
              ? t.flags |= 65536
              : (t.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate
                  ? n.tag = 17
                  : ((e = Na(-1, 1)).tag = 2, Ia(n, e, 1))),
                n.lanes |= 1),
              t)
            : (t.flags |= 65536, t.lanes = i, t);
        }
        var ys = x.ReactCurrentOwner, vs = !1;
        function xs(t, e, n, r) {
          e.child = null === t ? wa(e, null, n, r) : xa(e, t.child, n, r);
        }
        function ws(t, e, n, r, i) {
          n = n.render;
          var a = e.ref;
          return Ta(e, i),
            r = mo(t, e, n, r, a, i),
            n = bo(),
            null === t || vs
              ? (ia && n && ta(e), e.flags |= 1, xs(t, e, r, i), e.child)
              : (e.updateQueue = t.updateQueue,
                e.flags &= -2053,
                t.lanes &= ~i,
                Ws(t, e, i));
        }
        function _s(t, e, n, r, i) {
          if (null === t) {
            var a = n.type;
            return "function" !== typeof a || Dc(a) ||
                void 0 !== a.defaultProps || null !== n.compare ||
                void 0 !== n.defaultProps
              ? ((t = Ac(n.type, null, r, e, e.mode, i)).ref = e.ref,
                t.return = e,
                e.child = t)
              : (e.tag = 15, e.type = a, ks(t, e, a, r, i));
          }
          if (a = t.child, 0 === (t.lanes & i)) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) && t.ref === e.ref
            ) return Ws(t, e, i);
          }
          return e.flags |= 1,
            (t = Lc(a, r)).ref = e.ref,
            t.return = e,
            e.child = t;
        }
        function ks(t, e, n, r, i) {
          if (null !== t) {
            var a = t.memoizedProps;
            if (lr(a, r) && t.ref === e.ref) {
              if (vs = !1, e.pendingProps = r = a, 0 === (t.lanes & i)) {
                return e.lanes = t.lanes, Ws(t, e, i);
              }
              0 !== (131072 & t.flags) && (vs = !0);
            }
          }
          return Es(t, e, n, r, i);
        }
        function Ss(t, e, n) {
          var r = e.pendingProps,
            i = r.children,
            a = null !== t ? t.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 === (1 & e.mode)) {
              e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              },
                Ei(Ll, Dl),
                Dl |= n;
            } else {
              if (0 === (1073741824 & n)) {
                return t = null !== a ? a.baseLanes | n : n,
                  e.lanes = e.childLanes = 1073741824,
                  e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  },
                  e.updateQueue = null,
                  Ei(Ll, Dl),
                  Dl |= t,
                  null;
              }
              e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              },
                r = null !== a ? a.baseLanes : n,
                Ei(Ll, Dl),
                Dl |= r;
            }
          } else {null !== a
              ? (r = a.baseLanes | n, e.memoizedState = null)
              : r = n,
              Ei(Ll, Dl),
              Dl |= r;}
          return xs(t, e, i, n), e.child;
        }
        function Ms(t, e) {
          var n = e.ref;
          (null === t && null !== n || null !== t && t.ref !== n) &&
            (e.flags |= 512, e.flags |= 2097152);
        }
        function Es(t, e, n, r, i) {
          var a = Di(n) ? Ri : Pi.current;
          return a = Oi(e, a),
            Ta(e, i),
            n = mo(t, e, n, r, a, i),
            r = bo(),
            null === t || vs
              ? (ia && r && ta(e), e.flags |= 1, xs(t, e, n, i), e.child)
              : (e.updateQueue = t.updateQueue,
                e.flags &= -2053,
                t.lanes &= ~i,
                Ws(t, e, i));
        }
        function Cs(t, e, n, r, i) {
          if (Di(n)) {
            var a = !0;
            ji(e);
          } else a = !1;
          if (Ta(e, i), null === e.stateNode) {
            Us(t, e), os(e, n, r), ls(e, n, r, i), r = !0;
          } else if (null === t) {
            var o = e.stateNode, s = e.memoizedProps;
            o.props = s;
            var l = o.context, c = n.contextType;
            "object" === typeof c && null !== c
              ? c = Ra(c)
              : c = Oi(e, c = Di(n) ? Ri : Pi.current);
            var u = n.getDerivedStateFromProps,
              h = "function" === typeof u ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            h ||
            "function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps ||
            (s !== r || l !== c) && ss(e, o, r, c), Fa = !1;
            var d = e.memoizedState;
            o.state = d,
              Ha(e, r, o, i),
              l = e.memoizedState,
              s !== r || d !== l || Ti.current || Fa
                ? ("function" === typeof u &&
                  (rs(e, n, u, r), l = e.memoizedState),
                  (s = Fa || as(e, n, s, r, d, l, c))
                    ? (h ||
                      "function" !== typeof o.UNSAFE_componentWillMount &&
                        "function" !== typeof o.componentWillMount ||
                      ("function" === typeof o.componentWillMount &&
                        o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                      (e.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                      (e.flags |= 4194308),
                      e.memoizedProps = r,
                      e.memoizedState = l),
                  o.props = r,
                  o.state = l,
                  o.context = c,
                  r = s)
                : ("function" === typeof o.componentDidMount &&
                  (e.flags |= 4194308),
                  r = !1);
          } else {
            o = e.stateNode,
              za(t, e),
              s = e.memoizedProps,
              c = e.type === e.elementType ? s : ns(e.type, s),
              o.props = c,
              h = e.pendingProps,
              d = o.context,
              "object" === typeof (l = n.contextType) && null !== l
                ? l = Ra(l)
                : l = Oi(e, l = Di(n) ? Ri : Pi.current);
            var f = n.getDerivedStateFromProps;
            (u = "function" === typeof f ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
            "function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps ||
            (s !== h || d !== l) && ss(e, o, r, l),
              Fa = !1,
              d = e.memoizedState,
              o.state = d,
              Ha(e, r, o, i);
            var p = e.memoizedState;
            s !== h || d !== p || Ti.current || Fa
              ? ("function" === typeof f &&
                (rs(e, n, f, r), p = e.memoizedState),
                (c = Fa || as(e, n, c, r, d, p, l) || !1)
                  ? (u ||
                    "function" !== typeof o.UNSAFE_componentWillUpdate &&
                      "function" !== typeof o.componentWillUpdate ||
                    ("function" === typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                    (e.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                    (e.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                    s === t.memoizedProps && d === t.memoizedState ||
                    (e.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                    s === t.memoizedProps && d === t.memoizedState ||
                    (e.flags |= 1024),
                    e.memoizedProps = r,
                    e.memoizedState = p),
                o.props = r,
                o.state = p,
                o.context = l,
                r = c)
              : ("function" !== typeof o.componentDidUpdate ||
                s === t.memoizedProps && d === t.memoizedState ||
                (e.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                s === t.memoizedProps && d === t.memoizedState ||
                (e.flags |= 1024),
                r = !1);
          }
          return Ps(t, e, n, r, a, i);
        }
        function Ps(t, e, n, r, i, a) {
          Ms(t, e);
          var o = 0 !== (128 & e.flags);
          if (!r && !o) return i && zi(e, n, !1), Ws(t, e, a);
          r = e.stateNode, ys.current = e;
          var s = o && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
          return e.flags |= 1,
            null !== t && o
              ? (e.child = xa(e, t.child, null, a), e.child = xa(e, null, s, a))
              : xs(t, e, s, a),
            e.memoizedState = r.state,
            i && zi(e, n, !0),
            e.child;
        }
        function Ts(t) {
          var e = t.stateNode;
          e.pendingContext
            ? Ai(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && Ai(0, e.context, !1), Ka(t, e.containerInfo);
        }
        function Rs(t, e, n, r, i) {
          return fa(), pa(i), e.flags |= 256, xs(t, e, n, r), e.child;
        }
        var Os,
          Ds,
          Ls,
          As,
          Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function js(t) {
          return { baseLanes: t, cachePool: null, transitions: null };
        }
        function zs(t, e, n) {
          var r,
            i = e.pendingProps,
            o = Za.current,
            s = !1,
            l = 0 !== (128 & e.flags);
          if (
            (r = l) ||
            (r = (null === t || null !== t.memoizedState) && 0 !== (2 & o)),
              r
                ? (s = !0, e.flags &= -129)
                : null !== t && null === t.memoizedState || (o |= 1),
              Ei(Za, 1 & o),
              null === t
          ) {
            return ca(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 === (1 & e.mode)
                  ? e.lanes = 1
                  : "$!" === t.data
                  ? e.lanes = 8
                  : e.lanes = 1073741824,
                  null)
                : (l = i.children,
                  t = i.fallback,
                  s
                    ? (i = e.mode,
                      s = e.child,
                      l = { mode: "hidden", children: l },
                      0 === (1 & i) && null !== s
                        ? (s.childLanes = 0, s.pendingProps = l)
                        : s = jc(l, i, 0, null),
                      t = Fc(t, i, n, null),
                      s.return = e,
                      t.return = e,
                      s.sibling = t,
                      e.child = s,
                      e.child.memoizedState = js(n),
                      e.memoizedState = Fs,
                      t)
                    : Ns(e, l));
          }
          if (null !== (o = t.memoizedState) && null !== (r = o.dehydrated)) {
            return function (t, e, n, r, i, o, s) {
              if (n) {
                return 256 & e.flags
                  ? (e.flags &= -257, Is(t, e, s, r = us(Error(a(422)))))
                  : null !== e.memoizedState
                  ? (e.child = t.child, e.flags |= 128, null)
                  : (o = r.fallback,
                    i = e.mode,
                    r = jc(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null,
                    ),
                    (o = Fc(o, i, s, null)).flags |= 2,
                    r.return = e,
                    o.return = e,
                    r.sibling = o,
                    e.child = r,
                    0 !== (1 & e.mode) && xa(e, t.child, null, s),
                    e.child.memoizedState = js(s),
                    e.memoizedState = Fs,
                    o);
              }
              if (0 === (1 & e.mode)) return Is(t, e, s, null);
              if ("$!" === i.data) {
                if (r = i.nextSibling && i.nextSibling.dataset) {
                  var l = r.dgst;
                }
                return r = l, Is(t, e, s, r = us(o = Error(a(419)), r, void 0));
              }
              if (l = 0 !== (s & t.childLanes), vs || l) {
                if (null !== (r = Tl)) {
                  switch (s & -s) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | s)) ? 0 : i) &&
                    i !== o.retryLane &&
                    (o.retryLane = i, Aa(t, i), nc(r, t, i, -1));
                }
                return gc(), Is(t, e, s, r = us(Error(a(421))));
              }
              return "$?" === i.data
                ? (e.flags |= 128,
                  e.child = t.child,
                  e = Cc.bind(null, t),
                  i._reactRetry = e,
                  null)
                : (t = o.treeContext,
                  ra = ci(i.nextSibling),
                  na = e,
                  ia = !0,
                  aa = null,
                  null !== t &&
                  (Yi[Qi++] = Xi,
                    Yi[Qi++] = Ji,
                    Yi[Qi++] = Ki,
                    Xi = t.id,
                    Ji = t.overflow,
                    Ki = e),
                  e = Ns(e, r.children),
                  e.flags |= 4096,
                  e);
            }(t, e, l, i, r, o, n);
          }
          if (s) {
            s = i.fallback, l = e.mode, r = (o = t.child).sibling;
            var c = { mode: "hidden", children: i.children };
            return 0 === (1 & l) && e.child !== o
              ? ((i = e.child).childLanes = 0,
                i.pendingProps = c,
                e.deletions = null)
              : (i = Lc(o, c)).subtreeFlags = 14680064 & o.subtreeFlags,
              null !== r ? s = Lc(r, s) : (s = Fc(s, l, n, null)).flags |= 2,
              s.return = e,
              i.return = e,
              i.sibling = s,
              e.child = i,
              i = s,
              s = e.child,
              l = null === (l = t.child.memoizedState) ? js(n) : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              },
              s.memoizedState = l,
              s.childLanes = t.childLanes & ~n,
              e.memoizedState = Fs,
              i;
          }
          return t = (s = t.child).sibling,
            i = Lc(s, { mode: "visible", children: i.children }),
            0 === (1 & e.mode) && (i.lanes = n),
            i.return = e,
            i.sibling = null,
            null !== t &&
            (null === (n = e.deletions)
              ? (e.deletions = [t], e.flags |= 16)
              : n.push(t)),
            e.child = i,
            e.memoizedState = null,
            i;
        }
        function Ns(t, e) {
          return (e = jc({ mode: "visible", children: e }, t.mode, 0, null))
            .return = t,
            t.child = e;
        }
        function Is(t, e, n, r) {
          return null !== r && pa(r),
            xa(e, t.child, null, n),
            (t = Ns(e, e.pendingProps.children)).flags |= 2,
            e.memoizedState = null,
            t;
        }
        function Bs(t, e, n) {
          t.lanes |= e;
          var r = t.alternate;
          null !== r && (r.lanes |= e), Pa(t.return, e, n);
        }
        function Vs(t, e, n, r, i) {
          var a = t.memoizedState;
          null === a
            ? t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
            }
            : (a.isBackwards = e,
              a.rendering = null,
              a.renderingStartTime = 0,
              a.last = r,
              a.tail = n,
              a.tailMode = i);
        }
        function Hs(t, e, n) {
          var r = e.pendingProps, i = r.revealOrder, a = r.tail;
          if (xs(t, e, r.children, n), 0 !== (2 & (r = Za.current))) {
            r = 1 & r | 2, e.flags |= 128;
          } else {
            if (null !== t && 0 !== (128 & t.flags)) {
              t: for (t = e.child; null !== t;) {
                if (13 === t.tag) {
                  null !== t.memoizedState && Bs(t, n, e);
                } else if (19 === t.tag) Bs(t, n, e);
                else if (null !== t.child) {
                  t.child.return = t, t = t.child;
                  continue;
                }
                if (t === e) break t;
                for (; null === t.sibling;) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
              }
            }
            r &= 1;
          }
          if (Ei(Za, r), 0 === (1 & e.mode)) e.memoizedState = null;
          else {switch (i) {
              case "forwards":
                for (n = e.child, i = null; null !== n;) {
                  null !== (t = n.alternate) && null === to(t) && (i = n),
                    n = n.sibling;
                }
                null === (n = i)
                  ? (i = e.child, e.child = null)
                  : (i = n.sibling, n.sibling = null), Vs(e, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = e.child, e.child = null; null !== i;) {
                  if (null !== (t = i.alternate) && null === to(t)) {
                    e.child = i;
                    break;
                  }
                  t = i.sibling, i.sibling = n, n = i, i = t;
                }
                Vs(e, !0, n, null, a);
                break;
              case "together":
                Vs(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }}
          return e.child;
        }
        function Us(t, e) {
          0 === (1 & e.mode) && null !== t &&
            (t.alternate = null, e.alternate = null, e.flags |= 2);
        }
        function Ws(t, e, n) {
          if (
            null !== t && (e.dependencies = t.dependencies),
              jl |= e.lanes,
              0 === (n & e.childLanes)
          ) return null;
          if (null !== t && e.child !== t.child) throw Error(a(153));
          if (null !== e.child) {
            for (
              n = Lc(t = e.child, t.pendingProps), e.child = n, n.return = e;
              null !== t.sibling;
            ) t = t.sibling, (n = n.sibling = Lc(t, t.pendingProps)).return = e;
            n.sibling = null;
          }
          return e.child;
        }
        function $s(t, e) {
          if (!ia) {
            switch (t.tailMode) {
              case "hidden":
                e = t.tail;
                for (
                  var n = null;
                  null !== e;
                ) null !== e.alternate && (n = e), e = e.sibling;
                null === n ? t.tail = null : n.sibling = null;
                break;
              case "collapsed":
                n = t.tail;
                for (
                  var r = null;
                  null !== n;
                ) null !== n.alternate && (r = n), n = n.sibling;
                null === r
                  ? e || null === t.tail ? t.tail = null : t.tail.sibling = null
                  : r.sibling = null;
            }
          }
        }
        function qs(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            n = 0,
            r = 0;
          if (e) {
            for (var i = t.child; null !== i;) {
              n |= i.lanes | i.childLanes,
                r |= 14680064 & i.subtreeFlags,
                r |= 14680064 & i.flags,
                i.return = t,
                i = i.sibling;
            }
          } else {for (i = t.child; null !== i;) {
              n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = t,
                i = i.sibling;
            }}
          return t.subtreeFlags |= r, t.childLanes = n, e;
        }
        function Ys(t, e, n) {
          var r = e.pendingProps;
          switch (ea(e), e.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qs(e), null;
            case 1:
            case 17:
              return Di(e.type) && Li(), qs(e), null;
            case 3:
              return r = e.stateNode,
                Xa(),
                Mi(Ti),
                Mi(Pi),
                no(),
                r.pendingContext &&
                (r.context = r.pendingContext, r.pendingContext = null),
                null !== t && null !== t.child ||
                (ha(e) ? e.flags |= 4 : null === t ||
                  t.memoizedState.isDehydrated && 0 === (256 & e.flags) ||
                  (e.flags |= 1024, null !== aa && (oc(aa), aa = null))),
                Ds(t, e),
                qs(e),
                null;
            case 5:
              Ga(e);
              var i = Qa(Ya.current);
              if (n = e.type, null !== t && null != e.stateNode) {
                Ls(t, e, n, r, i),
                  t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
              } else {
                if (!r) {
                  if (null === e.stateNode) throw Error(a(166));
                  return qs(e), null;
                }
                if (t = Qa($a.current), ha(e)) {
                  r = e.stateNode, n = e.type;
                  var o = e.memoizedProps;
                  switch (r[di] = e, r[fi] = o, t = 0 !== (1 & e.mode), n) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Fr.length; i++) Ir(Fr[i], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      X(r, o), Ir("invalid", r);
                      break;
                    case "select":
                      r._wrapperState = { wasMultiple: !!o.multiple },
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      it(r, o), Ir("invalid", r);
                  }
                  for (var l in yt(n, o), i = null, o) {
                    if (o.hasOwnProperty(l)) {
                      var c = o[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, c, t),
                              i = ["children", c])
                          : "number" === typeof c && r.textContent !== "" + c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Gr(r.textContent, c, t),
                              i = ["children", "" + c])
                        : s.hasOwnProperty(l) && null != c &&
                          "onScroll" === l && Ir("scroll", r);
                    }
                  }
                  switch (n) {
                    case "input":
                      q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      q(r), ot(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  r = i, e.updateQueue = r, null !== r && (e.flags |= 4);
                } else {
                  l = 9 === i.nodeType ? i : i.ownerDocument,
                    "http://www.w3.org/1999/xhtml" === t && (t = st(n)),
                    "http://www.w3.org/1999/xhtml" === t
                      ? "script" === n
                        ? ((t = l.createElement("div")).innerHTML =
                          "<script><\/script>",
                          t = t.removeChild(t.firstChild))
                        : "string" === typeof r.is
                        ? t = l.createElement(n, { is: r.is })
                        : (t = l.createElement(n),
                          "select" === n &&
                          (l = t,
                            r.multiple
                              ? l.multiple = !0
                              : r.size && (l.size = r.size)))
                      : t = l.createElementNS(t, n),
                    t[di] = e,
                    t[fi] = r,
                    Os(t, e, !1, !1),
                    e.stateNode = t;
                  t: {
                    switch (l = vt(n, r), n) {
                      case "dialog":
                        Ir("cancel", t), Ir("close", t), i = r;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", t), i = r;
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Fr.length; i++) Ir(Fr[i], t);
                        i = r;
                        break;
                      case "source":
                        Ir("error", t), i = r;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", t), Ir("load", t), i = r;
                        break;
                      case "details":
                        Ir("toggle", t), i = r;
                        break;
                      case "input":
                        X(t, r), i = K(t, r), Ir("invalid", t);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        t._wrapperState = { wasMultiple: !!r.multiple },
                          i = z({}, r, { value: void 0 }),
                          Ir("invalid", t);
                        break;
                      case "textarea":
                        it(t, r), i = rt(t, r), Ir("invalid", t);
                    }
                    for (o in yt(n, i), c = i) {
                      if (c.hasOwnProperty(o)) {
                        var u = c[o];
                        "style" === o
                          ? mt(t, u)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (u = u ? u.__html : void 0) && ht(t, u)
                          : "children" === o
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && dt(t, u)
                            : "number" === typeof u && dt(t, "" + u)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o && (s.hasOwnProperty(o)
                              ? null != u && "onScroll" === o && Ir("scroll", t)
                              : null != u && v(t, o, u, l));
                      }
                    }
                    switch (n) {
                      case "input":
                        q(t), Z(t, r, !1);
                        break;
                      case "textarea":
                        q(t), ot(t);
                        break;
                      case "option":
                        null != r.value &&
                          t.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        t.multiple = !!r.multiple,
                          null != (o = r.value)
                            ? nt(t, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              nt(t, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (t.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break t;
                      case "img":
                        r = !0;
                        break t;
                      default:
                        r = !1;
                    }
                  }
                  r && (e.flags |= 4);
                }
                null !== e.ref && (e.flags |= 512, e.flags |= 2097152);
              }
              return qs(e), null;
            case 6:
              if (t && null != e.stateNode) As(t, e, t.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === e.stateNode) {
                  throw Error(a(166));
                }
                if (n = Qa(Ya.current), Qa($a.current), ha(e)) {
                  if (
                    r = e.stateNode,
                      n = e.memoizedProps,
                      r[di] = e,
                      (o = r.nodeValue !== n) && null !== (t = na)
                  ) {
                    switch (t.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & t.mode));
                        break;
                      case 5:
                        !0 !== t.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & t.mode));
                    }
                  }
                  o && (e.flags |= 4);
                } else {(r = (9 === n.nodeType ? n : n.ownerDocument)
                    .createTextNode(r))[di] = e,
                    e.stateNode = r;}
              }
              return qs(e), null;
            case 13:
              if (
                Mi(Za),
                  r = e.memoizedState,
                  null === t ||
                  null !== t.memoizedState &&
                    null !== t.memoizedState.dehydrated
              ) {
                if (
                  ia && null !== ra && 0 !== (1 & e.mode) &&
                  0 === (128 & e.flags)
                ) da(), fa(), e.flags |= 98560, o = !1;
                else if (o = ha(e), null !== r && null !== r.dehydrated) {
                  if (null === t) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o = null !== (o = e.memoizedState)
                        ? o.dehydrated
                        : null)
                    ) throw Error(a(317));
                    o[di] = e;
                  } else {fa(),
                      0 === (128 & e.flags) && (e.memoizedState = null),
                      e.flags |= 4;}
                  qs(e), o = !1;
                } else null !== aa && (oc(aa), aa = null), o = !0;
                if (!o) return 65536 & e.flags ? e : null;
              }
              return 0 !== (128 & e.flags)
                ? (e.lanes = n, e)
                : ((r = null !== r) !==
                    (null !== t && null !== t.memoizedState) &&
                  r &&
                  (e.child.flags |= 8192,
                    0 !== (1 & e.mode) && (null === t || 0 !== (1 & Za.current)
                      ? 0 === Al && (Al = 3)
                      : gc())),
                  null !== e.updateQueue && (e.flags |= 4),
                  qs(e),
                  null);
            case 4:
              return Xa(),
                Ds(t, e),
                null === t && Hr(e.stateNode.containerInfo),
                qs(e),
                null;
            case 10:
              return Ca(e.type._context), qs(e), null;
            case 19:
              if (Mi(Za), null === (o = e.memoizedState)) return qs(e), null;
              if (r = 0 !== (128 & e.flags), null === (l = o.rendering)) {
                if (r) {
                  $s(o, !1);
                } else {
                  if (0 !== Al || null !== t && 0 !== (128 & t.flags)) {
                    for (t = e.child; null !== t;) {
                      if (null !== (l = to(t))) {
                        for (
                          e.flags |= 128,
                            $s(o, !1),
                            null !== (r = l.updateQueue) &&
                            (e.updateQueue = r, e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child;
                          null !== n;
                        ) {
                          t = r,
                            (o = n).flags &= 14680066,
                            null === (l = o.alternate)
                              ? (o.childLanes = 0,
                                o.lanes = t,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null)
                              : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                t = l.dependencies,
                                o.dependencies = null === t ? null : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                }),
                            n = n.sibling;
                        }
                        return Ei(Za, 1 & Za.current | 2), e.child;
                      }
                      t = t.sibling;
                    }
                  }
                  null !== o.tail && Jt() > Hl &&
                    (e.flags |= 128, r = !0, $s(o, !1), e.lanes = 4194304);
                }
              } else {
                if (!r) {
                  if (null !== (t = to(l))) {
                    if (
                      e.flags |= 128,
                        r = !0,
                        null !== (n = t.updateQueue) &&
                        (e.updateQueue = n, e.flags |= 4),
                        $s(o, !0),
                        null === o.tail && "hidden" === o.tailMode &&
                        !l.alternate && !ia
                    ) return qs(e), null;
                  } else {2 * Jt() - o.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      (e.flags |= 128, r = !0, $s(o, !1), e.lanes = 4194304);}
                }
                o.isBackwards
                  ? (l.sibling = e.child, e.child = l)
                  : (null !== (n = o.last) ? n.sibling = l : e.child = l,
                    o.last = l);
              }
              return null !== o.tail
                ? (e = o.tail,
                  o.rendering = e,
                  o.tail = e.sibling,
                  o.renderingStartTime = Jt(),
                  e.sibling = null,
                  n = Za.current,
                  Ei(Za, r ? 1 & n | 2 : 1 & n),
                  e)
                : (qs(e), null);
            case 22:
            case 23:
              return hc(),
                r = null !== e.memoizedState,
                null !== t && null !== t.memoizedState !== r &&
                (e.flags |= 8192),
                r && 0 !== (1 & e.mode)
                  ? 0 !== (1073741824 & Dl) &&
                    (qs(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : qs(e),
                null;
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, e.tag));
        }
        function Qs(t, e) {
          switch (ea(e), e.tag) {
            case 1:
              return Di(e.type) && Li(),
                65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
            case 3:
              return Xa(),
                Mi(Ti),
                Mi(Pi),
                no(),
                0 !== (65536 & (t = e.flags)) && 0 === (128 & t)
                  ? (e.flags = -65537 & t | 128, e)
                  : null;
            case 5:
              return Ga(e), null;
            case 13:
              if (
                Mi(Za), null !== (t = e.memoizedState) && null !== t.dehydrated
              ) {
                if (null === e.alternate) throw Error(a(340));
                fa();
              }
              return 65536 & (t = e.flags)
                ? (e.flags = -65537 & t | 128, e)
                : null;
            case 19:
              return Mi(Za), null;
            case 4:
              return Xa(), null;
            case 10:
              return Ca(e.type._context), null;
            case 22:
            case 23:
              return hc(), null;
            default:
              return null;
          }
        }
        Os = function (t, e) {
          for (var n = e.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling;) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        },
          Ds = function () {},
          Ls = function (t, e, n, r) {
            var i = t.memoizedProps;
            if (i !== r) {
              t = e.stateNode, Qa($a.current);
              var a, o = null;
              switch (n) {
                case "input":
                  i = K(t, i), r = K(t, r), o = [];
                  break;
                case "select":
                  i = z({}, i, { value: void 0 }),
                    r = z({}, r, { value: void 0 }),
                    o = [];
                  break;
                case "textarea":
                  i = rt(t, i), r = rt(t, r), o = [];
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick && (t.onclick = Zr);
              }
              for (u in yt(n, r), n = null, i) {
                if (
                  !r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u]
                ) {
                  if ("style" === u) {
                    var l = i[u];
                    for (a in l) {
                      l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
                    }
                  } else {"dangerouslySetInnerHTML" !== u && "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u && "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? o || (o = [])
                        : (o = o || []).push(u, null));}
                }
              }
              for (u in r) {
                var c = r[u];
                if (
                  l = null != i ? i[u] : void 0,
                    r.hasOwnProperty(u) && c !== l && (null != c || null != l)
                ) {
                  if ("style" === u) {
                    if (l) {
                      for (a in l) {
                        !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) ||
                          (n || (n = {}), n[a] = "");
                      }
                      for (a in c) {
                        c.hasOwnProperty(a) && l[a] !== c[a] &&
                          (n || (n = {}), n[a] = c[a]);
                      }
                    } else n || (o || (o = []), o.push(u, n)), n = c;
                  } else {"dangerouslySetInnerHTML" === u
                      ? (c = c ? c.__html : void 0,
                        l = l ? l.__html : void 0,
                        null != c && l !== c && (o = o || []).push(u, c))
                      : "children" === u
                      ? "string" !== typeof c && "number" !== typeof c ||
                        (o = o || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u && (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ir("scroll", t),
                            o || l === c || (o = []))
                          : (o = o || []).push(u, c));}
                }
              }
              n && (o = o || []).push("style", n);
              var u = o;
              (e.updateQueue = u) && (e.flags |= 4);
            }
          },
          As = function (t, e, n, r) {
            n !== r && (e.flags |= 4);
          };
        var Ks = !1,
          Xs = !1,
          Js = "function" === typeof WeakSet ? WeakSet : Set,
          Gs = null;
        function Zs(t, e) {
          var n = t.ref;
          if (null !== n) {
            if ("function" === typeof n) {
              try {
                n(null);
              } catch (r) {
                Sc(t, e, r);
              }
            } else n.current = null;
          }
        }
        function tl(t, e, n) {
          try {
            n();
          } catch (r) {
            Sc(t, e, r);
          }
        }
        var el = !1;
        function nl(t, e, n) {
          var r = e.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = r = r.next;
            do {
              if ((i.tag & t) === t) {
                var a = i.destroy;
                i.destroy = void 0, void 0 !== a && tl(e, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rl(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var n = e = e.next;
            do {
              if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== e);
          }
        }
        function il(t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            t.tag, t = n, "function" === typeof e ? e(t) : e.current = t;
          }
        }
        function al(t) {
          var e = t.alternate;
          null !== e && (t.alternate = null, al(e)),
            t.child = null,
            t.deletions = null,
            t.sibling = null,
            5 === t.tag &&
            (null !== (e = t.stateNode) &&
              (delete e[di],
                delete e[fi],
                delete e[gi],
                delete e[mi],
                delete e[bi])),
            t.stateNode = null,
            t.return = null,
            t.dependencies = null,
            t.memoizedProps = null,
            t.memoizedState = null,
            t.pendingProps = null,
            t.stateNode = null,
            t.updateQueue = null;
        }
        function ol(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function sl(t) {
          t: for (;;) {
            for (; null === t.sibling;) {
              if (null === t.return || ol(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;
            ) {
              if (2 & t.flags) continue t;
              if (null === t.child || 4 === t.tag) continue t;
              t.child.return = t, t = t.child;
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function ll(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r) {
            t = t.stateNode,
              e
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(t, e)
                  : n.insertBefore(t, e)
                : (8 === n.nodeType
                  ? (e = n.parentNode).insertBefore(t, n)
                  : (e = n).appendChild(t),
                  null !== (n = n._reactRootContainer) && void 0 !== n ||
                  null !== e.onclick || (e.onclick = Zr));
          } else if (4 !== r && null !== (t = t.child)) {
            for (ll(t, e, n), t = t.sibling; null !== t;) {
              ll(t, e, n), t = t.sibling;
            }
          }
        }
        function cl(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r) {
            t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
          } else if (4 !== r && null !== (t = t.child)) {
            for (cl(t, e, n), t = t.sibling; null !== t;) {
              cl(t, e, n), t = t.sibling;
            }
          }
        }
        var ul = null, hl = !1;
        function dl(t, e, n) {
          for (n = n.child; null !== n;) fl(t, e, n), n = n.sibling;
        }
        function fl(t, e, n) {
          if (ae && "function" === typeof ae.onCommitFiberUnmount) {
            try {
              ae.onCommitFiberUnmount(ie, n);
            } catch (s) {}
          }
          switch (n.tag) {
            case 5:
              Xs || Zs(n, e);
            case 6:
              var r = ul, i = hl;
              ul = null,
                dl(t, e, n),
                hl = i,
                null !== (ul = r) && (hl
                  ? (t = ul,
                    n = n.stateNode,
                    8 === t.nodeType
                      ? t.parentNode.removeChild(n)
                      : t.removeChild(n))
                  : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (hl
                  ? (t = ul,
                    n = n.stateNode,
                    8 === t.nodeType
                      ? li(t.parentNode, n)
                      : 1 === t.nodeType && li(t, n),
                    He(t))
                  : li(ul, n.stateNode));
              break;
            case 4:
              r = ul,
                i = hl,
                ul = n.stateNode.containerInfo,
                hl = !0,
                dl(t, e, n),
                ul = r,
                hl = i;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))
              ) {
                i = r = r.next;
                do {
                  var a = i, o = a.destroy;
                  a = a.tag,
                    void 0 !== o && (0 !== (2 & a) || 0 !== (4 & a)) &&
                    tl(n, e, o),
                    i = i.next;
                } while (i !== r);
              }
              dl(t, e, n);
              break;
            case 1:
              if (
                !Xs &&
                (Zs(n, e),
                  "function" === typeof (r = n.stateNode).componentWillUnmount)
              ) {
                try {
                  r.props = n.memoizedProps,
                    r.state = n.memoizedState,
                    r.componentWillUnmount();
                } catch (s) {
                  Sc(n, e, s);
                }
              }
              dl(t, e, n);
              break;
            case 21:
              dl(t, e, n);
              break;
            case 22:
              1 & n.mode
                ? (Xs = (r = Xs) || null !== n.memoizedState,
                  dl(t, e, n),
                  Xs = r)
                : dl(t, e, n);
              break;
            default:
              dl(t, e, n);
          }
        }
        function pl(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var n = t.stateNode;
            null === n && (n = t.stateNode = new Js()),
              e.forEach(function (e) {
                var r = Pc.bind(null, t, e);
                n.has(e) || (n.add(e), e.then(r, r));
              });
          }
        }
        function gl(t, e) {
          var n = e.deletions;
          if (null !== n) {
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = t, s = e, l = s;
                t: for (; null !== l;) {
                  switch (l.tag) {
                    case 5:
                      ul = l.stateNode, hl = !1;
                      break t;
                    case 3:
                    case 4:
                      ul = l.stateNode.containerInfo, hl = !0;
                      break t;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(a(160));
                fl(o, s, i), ul = null, hl = !1;
                var c = i.alternate;
                null !== c && (c.return = null), i.return = null;
              } catch (u) {
                Sc(i, e, u);
              }
            }
          }
          if (12854 & e.subtreeFlags) {
            for (e = e.child; null !== e;) ml(e, t), e = e.sibling;
          }
        }
        function ml(t, e) {
          var n = t.alternate, r = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (gl(e, t), bl(t), 4 & r) {
                try {
                  nl(3, t, t.return), rl(3, t);
                } catch (m) {
                  Sc(t, t.return, m);
                }
                try {
                  nl(5, t, t.return);
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              break;
            case 1:
              gl(e, t), bl(t), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                gl(e, t),
                  bl(t),
                  512 & r && null !== n && Zs(n, n.return),
                  32 & t.flags
              ) {
                var i = t.stateNode;
                try {
                  dt(i, "");
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              if (4 & r && null != (i = t.stateNode)) {
                var o = t.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = t.type,
                  c = t.updateQueue;
                if (t.updateQueue = null, null !== c) {
                  try {
                    "input" === l && "radio" === o.type && null != o.name &&
                    J(i, o), vt(l, s);
                    var u = vt(l, o);
                    for (s = 0; s < c.length; s += 2) {
                      var h = c[s], d = c[s + 1];
                      "style" === h
                        ? mt(i, d)
                        : "dangerouslySetInnerHTML" === h
                        ? ht(i, d)
                        : "children" === h
                        ? dt(i, d)
                        : v(i, h, d, u);
                    }
                    switch (l) {
                      case "input":
                        G(i, o);
                        break;
                      case "textarea":
                        at(i, o);
                        break;
                      case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? nt(i, !!o.multiple, p, !1)
                          : f !== !!o.multiple && (null != o.defaultValue
                            ? nt(i, !!o.multiple, o.defaultValue, !0)
                            : nt(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[fi] = o;
                  } catch (m) {
                    Sc(t, t.return, m);
                  }
                }
              }
              break;
            case 6:
              if (gl(e, t), bl(t), 4 & r) {
                if (null === t.stateNode) throw Error(a(162));
                i = t.stateNode, o = t.memoizedProps;
                try {
                  i.nodeValue = o;
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              break;
            case 3:
              if (
                gl(e, t),
                  bl(t),
                  4 & r && null !== n && n.memoizedState.isDehydrated
              ) {
                try {
                  He(e.containerInfo);
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              break;
            case 4:
            default:
              gl(e, t), bl(t);
              break;
            case 13:
              gl(e, t),
                bl(t),
                8192 & (i = t.child).flags &&
                (o = null !== i.memoizedState,
                  i.stateNode.isHidden = o,
                  !o ||
                  null !== i.alternate && null !== i.alternate.memoizedState ||
                  (Vl = Jt())),
                4 & r && pl(t);
              break;
            case 22:
              if (
                h = null !== n && null !== n.memoizedState,
                  1 & t.mode
                    ? (Xs = (u = Xs) || h, gl(e, t), Xs = u)
                    : gl(e, t),
                  bl(t),
                  8192 & r
              ) {
                if (
                  u = null !== t.memoizedState,
                    (t.stateNode.isHidden = u) && !h && 0 !== (1 & t.mode)
                ) {
                  for (Gs = t, h = t.child; null !== h;) {
                    for (d = Gs = h; null !== Gs;) {
                      switch (p = (f = Gs).child, f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, f, f.return);
                          break;
                        case 1:
                          Zs(f, f.return);
                          var g = f.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            r = f, n = f.return;
                            try {
                              e = r,
                                g.props = e.memoizedProps,
                                g.state = e.memoizedState,
                                g.componentWillUnmount();
                            } catch (m) {
                              Sc(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Zs(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            wl(d);
                            continue;
                          }
                      }
                      null !== p ? (p.return = f, Gs = p) : wl(d);
                    }
                    h = h.sibling;
                  }
                }
                t: for (h = null, d = t;;) {
                  if (5 === d.tag) {
                    if (null === h) {
                      h = d;
                      try {
                        i = d.stateNode,
                          u
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : o.display = "none"
                            : (l = d.stateNode,
                              s = void 0 !== (c = d.memoizedProps.style) &&
                                  null !== c && c.hasOwnProperty("display")
                                ? c.display
                                : null,
                              l.style.display = gt("display", s));
                      } catch (m) {
                        Sc(t, t.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === h) {
                      try {
                        d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                      } catch (m) {
                        Sc(t, t.return, m);
                      }
                    }
                  } else if (
                    (22 !== d.tag && 23 !== d.tag || null === d.memoizedState ||
                      d === t) && null !== d.child
                  ) {
                    d.child.return = d, d = d.child;
                    continue;
                  }
                  if (d === t) break t;
                  for (; null === d.sibling;) {
                    if (null === d.return || d.return === t) break t;
                    h === d && (h = null), d = d.return;
                  }
                  h === d && (h = null),
                    d.sibling.return = d.return,
                    d = d.sibling;
                }
              }
              break;
            case 19:
              gl(e, t), bl(t), 4 & r && pl(t);
            case 21:
          }
        }
        function bl(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              t: {
                for (var n = t.return; null !== n;) {
                  if (ol(n)) {
                    var r = n;
                    break t;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (dt(i, ""), r.flags &= -33), cl(t, sl(t), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ll(t, sl(t), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Sc(t, t.return, s);
            }
            t.flags &= -3;
          }
          4096 & e && (t.flags &= -4097);
        }
        function yl(t, e, n) {
          Gs = t, vl(t, e, n);
        }
        function vl(t, e, n) {
          for (var r = 0 !== (1 & t.mode); null !== Gs;) {
            var i = Gs, a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Ks;
              if (!o) {
                var s = i.alternate,
                  l = null !== s && null !== s.memoizedState || Xs;
                s = Ks;
                var c = Xs;
                if (Ks = o, (Xs = l) && !c) {
                  for (Gs = i; null !== Gs;) {
                    l = (o = Gs).child,
                      22 === o.tag && null !== o.memoizedState
                        ? _l(i)
                        : null !== l
                        ? (l.return = o, Gs = l)
                        : _l(i);
                  }
                }
                for (; null !== a;) Gs = a, vl(a, e, n), a = a.sibling;
                Gs = i, Ks = s, Xs = c;
              }
              xl(t);
            } else {0 !== (8772 & i.subtreeFlags) && null !== a
                ? (a.return = i, Gs = a)
                : xl(t);}
          }
        }
        function xl(t) {
          for (; null !== Gs;) {
            var e = Gs;
            if (0 !== (8772 & e.flags)) {
              var n = e.alternate;
              try {
                if (0 !== (8772 & e.flags)) {
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || rl(5, e);
                      break;
                    case 1:
                      var r = e.stateNode;
                      if (4 & e.flags && !Xs) {
                        if (null === n) r.componentDidMount();
                        else {
                          var i = e.elementType === e.type
                            ? n.memoizedProps
                            : ns(e.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      }
                      var o = e.updateQueue;
                      null !== o && Ua(e, o, r);
                      break;
                    case 3:
                      var s = e.updateQueue;
                      if (null !== s) {
                        if (n = null, null !== e.child) {
                          switch (e.child.tag) {
                            case 5:
                            case 1:
                              n = e.child.stateNode;
                          }
                        }
                        Ua(e, s, n);
                      }
                      break;
                    case 5:
                      var l = e.stateNode;
                      if (null === n && 4 & e.flags) {
                        n = l;
                        var c = e.memoizedProps;
                        switch (e.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === e.memoizedState) {
                        var u = e.alternate;
                        if (null !== u) {
                          var h = u.memoizedState;
                          if (null !== h) {
                            var d = h.dehydrated;
                            null !== d && He(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                }
                Xs || 512 & e.flags && il(e);
              } catch (f) {
                Sc(e, e.return, f);
              }
            }
            if (e === t) {
              Gs = null;
              break;
            }
            if (null !== (n = e.sibling)) {
              n.return = e.return, Gs = n;
              break;
            }
            Gs = e.return;
          }
        }
        function wl(t) {
          for (; null !== Gs;) {
            var e = Gs;
            if (e === t) {
              Gs = null;
              break;
            }
            var n = e.sibling;
            if (null !== n) {
              n.return = e.return, Gs = n;
              break;
            }
            Gs = e.return;
          }
        }
        function _l(t) {
          for (; null !== Gs;) {
            var e = Gs;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var n = e.return;
                  try {
                    rl(4, e);
                  } catch (l) {
                    Sc(e, n, l);
                  }
                  break;
                case 1:
                  var r = e.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = e.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Sc(e, i, l);
                    }
                  }
                  var a = e.return;
                  try {
                    il(e);
                  } catch (l) {
                    Sc(e, a, l);
                  }
                  break;
                case 5:
                  var o = e.return;
                  try {
                    il(e);
                  } catch (l) {
                    Sc(e, o, l);
                  }
              }
            } catch (l) {
              Sc(e, e.return, l);
            }
            if (e === t) {
              Gs = null;
              break;
            }
            var s = e.sibling;
            if (null !== s) {
              s.return = e.return, Gs = s;
              break;
            }
            Gs = e.return;
          }
        }
        var kl,
          Sl = Math.ceil,
          Ml = x.ReactCurrentDispatcher,
          El = x.ReactCurrentOwner,
          Cl = x.ReactCurrentBatchConfig,
          Pl = 0,
          Tl = null,
          Rl = null,
          Ol = 0,
          Dl = 0,
          Ll = Si(0),
          Al = 0,
          Fl = null,
          jl = 0,
          zl = 0,
          Nl = 0,
          Il = null,
          Bl = null,
          Vl = 0,
          Hl = 1 / 0,
          Ul = null,
          Wl = !1,
          $l = null,
          ql = null,
          Yl = !1,
          Ql = null,
          Kl = 0,
          Xl = 0,
          Jl = null,
          Gl = -1,
          Zl = 0;
        function tc() {
          return 0 !== (6 & Pl) ? Jt() : -1 !== Gl ? Gl : Gl = Jt();
        }
        function ec(t) {
          return 0 === (1 & t.mode)
            ? 1
            : 0 !== (2 & Pl) && 0 !== Ol
            ? Ol & -Ol
            : null !== ga.transition
            ? (0 === Zl && (Zl = ge()), Zl)
            : 0 !== (t = ve)
            ? t
            : t = void 0 === (t = window.event) ? 16 : Xe(t.type);
        }
        function nc(t, e, n, r) {
          if (50 < Xl) throw Xl = 0, Jl = null, Error(a(185));
          be(t, n, r),
            0 !== (2 & Pl) && t === Tl ||
            (t === Tl && (0 === (2 & Pl) && (zl |= n), 4 === Al && sc(t, Ol)),
              rc(t, r),
              1 === n && 0 === Pl && 0 === (1 & e.mode) &&
              (Hl = Jt() + 500, Ii && Hi()));
        }
        function rc(t, e) {
          var n = t.callbackNode;
          !function (t, e) {
            for (
              var n = t.suspendedLanes,
                r = t.pingedLanes,
                i = t.expirationTimes,
                a = t.pendingLanes;
              0 < a;
            ) {
              var o = 31 - oe(a), s = 1 << o, l = i[o];
              -1 === l
                ? 0 !== (s & n) && 0 === (s & r) || (i[o] = fe(s, e))
                : l <= e && (t.expiredLanes |= s), a &= ~s;
            }
          }(t, e);
          var r = de(t, t === Tl ? Ol : 0);
          if (0 === r) {
            null !== n && Qt(n), t.callbackNode = null, t.callbackPriority = 0;
          } else if (e = r & -r, t.callbackPriority !== e) {
            if (null != n && Qt(n), 1 === e) {
              0 === t.tag
                ? function (t) {
                  Ii = !0, Vi(t);
                }(lc.bind(null, t))
                : Vi(lc.bind(null, t)),
                oi(function () {
                  0 === (6 & Pl) && Hi();
                }),
                n = null;
            } else {
              switch (xe(r)) {
                case 1:
                  n = Zt;
                  break;
                case 4:
                  n = te;
                  break;
                case 16:
                default:
                  n = ee;
                  break;
                case 536870912:
                  n = re;
              }
              n = Tc(n, ic.bind(null, t));
            }
            t.callbackPriority = e, t.callbackNode = n;
          }
        }
        function ic(t, e) {
          if (Gl = -1, Zl = 0, 0 !== (6 & Pl)) throw Error(a(327));
          var n = t.callbackNode;
          if (_c() && t.callbackNode !== n) return null;
          var r = de(t, t === Tl ? Ol : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & t.expiredLanes) || e) e = mc(t, r);
          else {
            e = r;
            var i = Pl;
            Pl |= 2;
            var o = pc();
            for (
              Tl === t && Ol === e || (Ul = null, Hl = Jt() + 500, dc(t, e));;
            ) {
              try {
                yc();
                break;
              } catch (l) {
                fc(t, l);
              }
            }
            Ea(),
              Ml.current = o,
              Pl = i,
              null !== Rl ? e = 0 : (Tl = null, Ol = 0, e = Al);
          }
          if (0 !== e) {
            if (
              2 === e && (0 !== (i = pe(t)) && (r = i, e = ac(t, i))), 1 === e
            ) throw n = Fl, dc(t, 0), sc(t, r), rc(t, Jt()), n;
            if (6 === e) sc(t, r);
            else {
              if (
                i = t.current.alternate,
                  0 === (30 & r) && !function (t) {
                    for (var e = t;;) {
                      if (16384 & e.flags) {
                        var n = e.updateQueue;
                        if (null !== n && null !== (n = n.stores)) {
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r], a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!sr(a(), i)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                        }
                      }
                      if (n = e.child, 16384 & e.subtreeFlags && null !== n) {
                        n.return = e, e = n;
                      } else {
                        if (e === t) {
                          break;
                        }
                        for (; null === e.sibling;) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        e.sibling.return = e.return, e = e.sibling;
                      }
                    }
                    return !0;
                  }(i) &&
                  (2 === (e = mc(t, r)) &&
                    (0 !== (o = pe(t)) && (r = o, e = ac(t, o))),
                    1 === e)
              ) throw n = Fl, dc(t, 0), sc(t, r), rc(t, Jt()), n;
              switch (t.finishedWork = i, t.finishedLanes = r, e) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  wc(t, Bl, Ul);
                  break;
                case 3:
                  if (
                    sc(t, r),
                      (130023424 & r) === r && 10 < (e = Vl + 500 - Jt())
                  ) {
                    if (0 !== de(t, 0)) break;
                    if (((i = t.suspendedLanes) & r) !== r) {
                      tc(), t.pingedLanes |= t.suspendedLanes & i;
                      break;
                    }
                    t.timeoutHandle = ri(wc.bind(null, t, Bl, Ul), e);
                    break;
                  }
                  wc(t, Bl, Ul);
                  break;
                case 4:
                  if (sc(t, r), (4194240 & r) === r) break;
                  for (e = t.eventTimes, i = -1; 0 < r;) {
                    var s = 31 - oe(r);
                    o = 1 << s, (s = e[s]) > i && (i = s), r &= ~o;
                  }
                  if (
                    r = i,
                      10 <
                        (r = (120 > (r = Jt() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Sl(r / 1960)) - r)
                  ) {
                    t.timeoutHandle = ri(wc.bind(null, t, Bl, Ul), r);
                    break;
                  }
                  wc(t, Bl, Ul);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return rc(t, Jt()), t.callbackNode === n ? ic.bind(null, t) : null;
        }
        function ac(t, e) {
          var n = Il;
          return t.current.memoizedState.isDehydrated &&
            (dc(t, e).flags |= 256),
            2 !== (t = mc(t, e)) && (e = Bl, Bl = n, null !== e && oc(e)),
            t;
        }
        function oc(t) {
          null === Bl ? Bl = t : Bl.push.apply(Bl, t);
        }
        function sc(t, e) {
          for (
            e &= ~Nl,
              e &= ~zl,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;
          ) {
            var n = 31 - oe(e), r = 1 << n;
            t[n] = -1, e &= ~r;
          }
        }
        function lc(t) {
          if (0 !== (6 & Pl)) throw Error(a(327));
          _c();
          var e = de(t, 0);
          if (0 === (1 & e)) return rc(t, Jt()), null;
          var n = mc(t, e);
          if (0 !== t.tag && 2 === n) {
            var r = pe(t);
            0 !== r && (e = r, n = ac(t, r));
          }
          if (1 === n) throw n = Fl, dc(t, 0), sc(t, e), rc(t, Jt()), n;
          if (6 === n) throw Error(a(345));
          return t.finishedWork = t.current.alternate,
            t.finishedLanes = e,
            wc(t, Bl, Ul),
            rc(t, Jt()),
            null;
        }
        function cc(t, e) {
          var n = Pl;
          Pl |= 1;
          try {
            return t(e);
          } finally {
            0 === (Pl = n) && (Hl = Jt() + 500, Ii && Hi());
          }
        }
        function uc(t) {
          null !== Ql && 0 === Ql.tag && 0 === (6 & Pl) && _c();
          var e = Pl;
          Pl |= 1;
          var n = Cl.transition, r = ve;
          try {
            if (Cl.transition = null, ve = 1, t) return t();
          } finally {
            ve = r, Cl.transition = n, 0 === (6 & (Pl = e)) && Hi();
          }
        }
        function hc() {
          Dl = Ll.current, Mi(Ll);
        }
        function dc(t, e) {
          t.finishedWork = null, t.finishedLanes = 0;
          var n = t.timeoutHandle;
          if (-1 !== n && (t.timeoutHandle = -1, ii(n)), null !== Rl) {
            for (n = Rl.return; null !== n;) {
              var r = n;
              switch (ea(r), r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r &&
                    Li();
                  break;
                case 3:
                  Xa(), Mi(Ti), Mi(Pi), no();
                  break;
                case 5:
                  Ga(r);
                  break;
                case 4:
                  Xa();
                  break;
                case 13:
                case 19:
                  Mi(Za);
                  break;
                case 10:
                  Ca(r.type._context);
                  break;
                case 22:
                case 23:
                  hc();
              }
              n = n.return;
            }
          }
          if (
            Tl = t,
              Rl = t = Lc(t.current, null),
              Ol = Dl = e,
              Al = 0,
              Fl = null,
              Nl = zl = jl = 0,
              Bl = Il = null,
              null !== Oa
          ) {
            for (e = 0; e < Oa.length; e++) {
              if (null !== (r = (n = Oa[e]).interleaved)) {
                n.interleaved = null;
                var i = r.next, a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  a.next = i, r.next = o;
                }
                n.pending = r;
              }
            }
            Oa = null;
          }
          return t;
        }
        function fc(t, e) {
          for (;;) {
            var n = Rl;
            try {
              if (Ea(), ro.current = Go, co) {
                for (var r = oo.memoizedState; null !== r;) {
                  var i = r.queue;
                  null !== i && (i.pending = null), r = r.next;
                }
                co = !1;
              }
              if (
                ao = 0,
                  lo = so = oo = null,
                  uo = !1,
                  ho = 0,
                  El.current = null,
                  null === n || null === n.return
              ) {
                Al = 1, Fl = e, Rl = null;
                break;
              }
              t: {
                var o = t, s = n.return, l = n, c = e;
                if (
                  e = Ol,
                    l.flags |= 32768,
                    null !== c && "object" === typeof c &&
                    "function" === typeof c.then
                ) {
                  var u = c, h = l, d = h.tag;
                  if (0 === (1 & h.mode) && (0 === d || 11 === d || 15 === d)) {
                    var f = h.alternate;
                    f
                      ? (h.updateQueue = f.updateQueue,
                        h.memoizedState = f.memoizedState,
                        h.lanes = f.lanes)
                      : (h.updateQueue = null, h.memoizedState = null);
                  }
                  var p = ms(s);
                  if (null !== p) {
                    p.flags &= -257,
                      bs(p, s, l, 0, e),
                      1 & p.mode && gs(o, u, e),
                      c = u;
                    var g = (e = p).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(c), e.updateQueue = m;
                    } else g.add(c);
                    break t;
                  }
                  if (0 === (1 & e)) {
                    gs(o, u, e), gc();
                    break t;
                  }
                  c = Error(a(426));
                } else if (ia && 1 & l.mode) {
                  var b = ms(s);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      bs(b, s, l, 0, e),
                      pa(cs(c, l));
                    break t;
                  }
                }
                o = c = cs(c, l),
                  4 !== Al && (Al = 2),
                  null === Il ? Il = [o] : Il.push(o),
                  o = s;
                do {
                  switch (o.tag) {
                    case 3:
                      o.flags |= 65536,
                        e &= -e,
                        o.lanes |= e,
                        Va(o, fs(0, c, e));
                      break t;
                    case 1:
                      l = c;
                      var y = o.type, v = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === ql || !ql.has(v)))
                      ) {
                        o.flags |= 65536,
                          e &= -e,
                          o.lanes |= e,
                          Va(o, ps(o, l, e));
                        break t;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xc(n);
            } catch (x) {
              e = x, Rl === n && null !== n && (Rl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pc() {
          var t = Ml.current;
          return Ml.current = Go, null === t ? Go : t;
        }
        function gc() {
          0 !== Al && 3 !== Al && 2 !== Al || (Al = 4),
            null === Tl || 0 === (268435455 & jl) && 0 === (268435455 & zl) ||
            sc(Tl, Ol);
        }
        function mc(t, e) {
          var n = Pl;
          Pl |= 2;
          var r = pc();
          for (Tl === t && Ol === e || (Ul = null, dc(t, e));;) {
            try {
              bc();
              break;
            } catch (i) {
              fc(t, i);
            }
          }
          if (Ea(), Pl = n, Ml.current = r, null !== Rl) throw Error(a(261));
          return Tl = null, Ol = 0, Al;
        }
        function bc() {
          for (; null !== Rl;) vc(Rl);
        }
        function yc() {
          for (; null !== Rl && !Kt();) vc(Rl);
        }
        function vc(t) {
          var e = kl(t.alternate, t, Dl);
          t.memoizedProps = t.pendingProps,
            null === e ? xc(t) : Rl = e,
            El.current = null;
        }
        function xc(t) {
          var e = t;
          do {
            var n = e.alternate;
            if (t = e.return, 0 === (32768 & e.flags)) {
              if (null !== (n = Ys(n, e, Dl))) {
                return void (Rl = n);
              }
            } else {
              if (null !== (n = Qs(n, e))) {
                return n.flags &= 32767, void (Rl = n);
              }
              if (null === t) return Al = 6, void (Rl = null);
              t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            }
            if (null !== (e = e.sibling)) return void (Rl = e);
            Rl = e = t;
          } while (null !== e);
          0 === Al && (Al = 5);
        }
        function wc(t, e, n) {
          var r = ve, i = Cl.transition;
          try {
            Cl.transition = null,
              ve = 1,
              function (t, e, n, r) {
                do {
                  _c();
                } while (null !== Ql);
                if (0 !== (6 & Pl)) throw Error(a(327));
                n = t.finishedWork;
                var i = t.finishedLanes;
                if (null === n) return null;
                if (
                  t.finishedWork = null, t.finishedLanes = 0, n === t.current
                ) throw Error(a(177));
                t.callbackNode = null, t.callbackPriority = 0;
                var o = n.lanes | n.childLanes;
                if (
                  function (t, e) {
                    var n = t.pendingLanes & ~e;
                    t.pendingLanes = e,
                      t.suspendedLanes = 0,
                      t.pingedLanes = 0,
                      t.expiredLanes &= e,
                      t.mutableReadLanes &= e,
                      t.entangledLanes &= e,
                      e = t.entanglements;
                    var r = t.eventTimes;
                    for (t = t.expirationTimes; 0 < n;) {
                      var i = 31 - oe(n), a = 1 << i;
                      e[i] = 0, r[i] = -1, t[i] = -1, n &= ~a;
                    }
                  }(t, o),
                    t === Tl && (Rl = Tl = null, Ol = 0),
                    0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) ||
                    Yl || (Yl = !0,
                      Tc(ee, function () {
                        return _c(), null;
                      })),
                    o = 0 !== (15990 & n.flags),
                    0 !== (15990 & n.subtreeFlags) || o
                ) {
                  o = Cl.transition, Cl.transition = null;
                  var s = ve;
                  ve = 1;
                  var l = Pl;
                  Pl |= 4,
                    El.current = null,
                    function (t, e) {
                      if (ti = We, fr(t = dr())) {
                        if ("selectionStart" in t) {
                          var n = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        } else {t: {
                            var r =
                              (n = (n = t.ownerDocument) && n.defaultView ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset, o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break t;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                h = 0,
                                d = t,
                                f = null;
                              e: for (;;) {
                                for (
                                  var p;
                                  d !== n || 0 !== i && 3 !== d.nodeType ||
                                  (l = s + i),
                                    d !== o || 0 !== r && 3 !== d.nodeType ||
                                    (c = s + r),
                                    3 === d.nodeType &&
                                    (s += d.nodeValue.length),
                                    null !== (p = d.firstChild);
                                ) f = d, d = p;
                                for (;;) {
                                  if (d === t) break e;
                                  if (
                                    f === n && ++u === i && (l = s),
                                      f === o && ++h === r && (c = s),
                                      null !== (p = d.nextSibling)
                                  ) break;
                                  f = (d = f).parentNode;
                                }
                                d = p;
                              }
                              n = -1 === l || -1 === c
                                ? null
                                : { start: l, end: c };
                            } else n = null;
                          }}
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ei = { focusedElem: t, selectionRange: n },
                          We = !1,
                          Gs = e;
                        null !== Gs;
                      ) {
                        if (
                          t = (e = Gs).child,
                            0 !== (1028 & e.subtreeFlags) && null !== t
                        ) t.return = e, Gs = t;
                        else {for (; null !== Gs;) {
                            e = Gs;
                            try {
                              var g = e.alternate;
                              if (0 !== (1024 & e.flags)) {
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        b = g.memoizedState,
                                        y = e.stateNode,
                                        v = y.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? m
                                            : ns(e.type, m),
                                          b,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var x = e.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? x.textContent = ""
                                      : 9 === x.nodeType && x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                              }
                            } catch (w) {
                              Sc(e, e.return, w);
                            }
                            if (null !== (t = e.sibling)) {
                              t.return = e.return, Gs = t;
                              break;
                            }
                            Gs = e.return;
                          }}
                      }
                      g = el, el = !1;
                    }(t, n),
                    ml(n, t),
                    pr(ei),
                    We = !!ti,
                    ei = ti = null,
                    t.current = n,
                    yl(n, t, i),
                    Xt(),
                    Pl = l,
                    ve = s,
                    Cl.transition = o;
                } else t.current = n;
                if (
                  Yl && (Yl = !1, Ql = t, Kl = i),
                    o = t.pendingLanes,
                    0 === o && (ql = null),
                    function (t) {
                      if (ae && "function" === typeof ae.onCommitFiberRoot) {
                        try {
                          ae.onCommitFiberRoot(
                            ie,
                            t,
                            void 0,
                            128 === (128 & t.current.flags),
                          );
                        } catch (e) {}
                      }
                    }(n.stateNode),
                    rc(t, Jt()),
                    null !== e
                ) {
                  for (r = t.onRecoverableError, n = 0; n < e.length; n++) {
                    i = e[n],
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                  }
                }
                if (Wl) throw Wl = !1, t = $l, $l = null, t;
                0 !== (1 & Kl) && 0 !== t.tag && _c(),
                  o = t.pendingLanes,
                  0 !== (1 & o) ? t === Jl ? Xl++ : (Xl = 0, Jl = t) : Xl = 0,
                  Hi();
              }(t, e, n, r);
          } finally {
            Cl.transition = i, ve = r;
          }
          return null;
        }
        function _c() {
          if (null !== Ql) {
            var t = xe(Kl), e = Cl.transition, n = ve;
            try {
              if (
                Cl.transition = null, ve = 16 > t ? 16 : t, null === Ql
              ) { var r = !1; } else {
                if (t = Ql, Ql = null, Kl = 0, 0 !== (6 & Pl)) {
                  throw Error(a(331));
                }
                var i = Pl;
                for (Pl |= 4, Gs = t.current; null !== Gs;) {
                  var o = Gs, s = o.child;
                  if (0 !== (16 & Gs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Gs = u; null !== Gs;) {
                          var h = Gs;
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, h, o);
                          }
                          var d = h.child;
                          if (null !== d) d.return = h, Gs = d;
                          else {for (; null !== Gs;) {
                              var f = (h = Gs).sibling, p = h.return;
                              if (al(h), h === u) {
                                Gs = null;
                                break;
                              }
                              if (null !== f) {
                                f.return = p, Gs = f;
                                break;
                              }
                              Gs = p;
                            }}
                        }
                      }
                      var g = o.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var b = m.sibling;
                            m.sibling = null, m = b;
                          } while (null !== m);
                        }
                      }
                      Gs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s) {
                    s.return = o, Gs = s;
                  } else {t: for (; null !== Gs;) {
                      if (0 !== (2048 & (o = Gs).flags)) {
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, o, o.return);
                        }
                      }
                      var y = o.sibling;
                      if (null !== y) {
                        y.return = o.return, Gs = y;
                        break t;
                      }
                      Gs = o.return;
                    }}
                }
                var v = t.current;
                for (Gs = v; null !== Gs;) {
                  var x = (s = Gs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x) {
                    x.return = s, Gs = x;
                  } else {t: for (s = v; null !== Gs;) {
                      if (0 !== (2048 & (l = Gs).flags)) {
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (_) {
                          Sc(l, l.return, _);
                        }
                      }
                      if (l === s) {
                        Gs = null;
                        break t;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        w.return = l.return, Gs = w;
                        break t;
                      }
                      Gs = l.return;
                    }}
                }
                if (
                  Pl = i,
                    Hi(),
                    ae && "function" === typeof ae.onPostCommitFiberRoot
                ) {
                  try {
                    ae.onPostCommitFiberRoot(ie, t);
                  } catch (_) {}
                }
                r = !0;
              }
              return r;
            } finally {
              ve = n, Cl.transition = e;
            }
          }
          return !1;
        }
        function kc(t, e, n) {
          t = Ia(t, e = fs(0, e = cs(n, e), 1), 1),
            e = tc(),
            null !== t && (be(t, 1, e), rc(t, e));
        }
        function Sc(t, e, n) {
          if (3 === t.tag) kc(t, t, n);
          else {for (; null !== e;) {
              if (3 === e.tag) {
                kc(e, t, n);
                break;
              }
              if (1 === e.tag) {
                var r = e.stateNode;
                if (
                  "function" === typeof e.type.getDerivedStateFromError ||
                  "function" === typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r))
                ) {
                  e = Ia(e, t = ps(e, t = cs(n, t), 1), 1),
                    t = tc(),
                    null !== e && (be(e, 1, t), rc(e, t));
                  break;
                }
              }
              e = e.return;
            }}
        }
        function Mc(t, e, n) {
          var r = t.pingCache;
          null !== r && r.delete(e),
            e = tc(),
            t.pingedLanes |= t.suspendedLanes & n,
            Tl === t && (Ol & n) === n &&
            (4 === Al || 3 === Al && (130023424 & Ol) === Ol && 500 > Jt() - Vl
              ? dc(t, 0)
              : Nl |= n),
            rc(t, e);
        }
        function Ec(t, e) {
          0 === e &&
            (0 === (1 & t.mode)
              ? e = 1
              : (e = ue, 0 === (130023424 & (ue <<= 1)) && (ue = 4194304)));
          var n = tc();
          null !== (t = Aa(t, e)) && (be(t, e, n), rc(t, n));
        }
        function Cc(t) {
          var e = t.memoizedState, n = 0;
          null !== e && (n = e.retryLane), Ec(t, n);
        }
        function Pc(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var r = t.stateNode, i = t.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = t.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(e), Ec(t, n);
        }
        function Tc(t, e) {
          return Yt(t, e);
        }
        function Rc(t, e, n, r) {
          this.tag = t,
            this.key = n,
            this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null,
            this.index = 0,
            this.ref = null,
            this.pendingProps = e,
            this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null,
            this.mode = r,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null;
        }
        function Oc(t, e, n, r) {
          return new Rc(t, e, n, r);
        }
        function Dc(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function Lc(t, e) {
          var n = t.alternate;
          return null === n
            ? ((n = Oc(t.tag, e, t.key, t.mode)).elementType = t.elementType,
              n.type = t.type,
              n.stateNode = t.stateNode,
              n.alternate = t,
              t.alternate = n)
            : (n.pendingProps = e,
              n.type = t.type,
              n.flags = 0,
              n.subtreeFlags = 0,
              n.deletions = null),
            n.flags = 14680064 & t.flags,
            n.childLanes = t.childLanes,
            n.lanes = t.lanes,
            n.child = t.child,
            n.memoizedProps = t.memoizedProps,
            n.memoizedState = t.memoizedState,
            n.updateQueue = t.updateQueue,
            e = t.dependencies,
            n.dependencies = null === e
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext },
            n.sibling = t.sibling,
            n.index = t.index,
            n.ref = t.ref,
            n;
        }
        function Ac(t, e, n, r, i, o) {
          var s = 2;
          if (r = t, "function" === typeof t) Dc(t) && (s = 1);
          else if ("string" === typeof t) s = 5;
          else {t: switch (t) {
              case k:
                return Fc(n.children, i, o, e);
              case S:
                s = 8, i |= 8;
                break;
              case M:
                return (t = Oc(12, n, e, 2 | i)).elementType = M,
                  t.lanes = o,
                  t;
              case T:
                return (t = Oc(13, n, e, i)).elementType = T, t.lanes = o, t;
              case R:
                return (t = Oc(19, n, e, i)).elementType = R, t.lanes = o, t;
              case L:
                return jc(n, i, o, e);
              default:
                if ("object" === typeof t && null !== t) {
                  switch (t.$$typeof) {
                    case E:
                      s = 10;
                      break t;
                    case C:
                      s = 9;
                      break t;
                    case P:
                      s = 11;
                      break t;
                    case O:
                      s = 14;
                      break t;
                    case D:
                      s = 16, r = null;
                      break t;
                  }
                }
                throw Error(a(130, null == t ? t : typeof t, ""));
            }}
          return (e = Oc(s, n, e, i)).elementType = t,
            e.type = r,
            e.lanes = o,
            e;
        }
        function Fc(t, e, n, r) {
          return (t = Oc(7, t, r, e)).lanes = n, t;
        }
        function jc(t, e, n, r) {
          return (t = Oc(22, t, r, e)).elementType = L,
            t.lanes = n,
            t.stateNode = { isHidden: !1 },
            t;
        }
        function zc(t, e, n) {
          return (t = Oc(6, t, null, e)).lanes = n, t;
        }
        function Nc(t, e, n) {
          return (e = Oc(4, null !== t.children ? t.children : [], t.key, e))
            .lanes = n,
            e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            },
            e;
        }
        function Ic(t, e, n, r, i) {
          this.tag = e,
            this.containerInfo = t,
            this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null,
            this.timeoutHandle = -1,
            this.callbackNode = this.pendingContext = this.context = null,
            this.callbackPriority = 0,
            this.eventTimes = me(0),
            this.expirationTimes = me(-1),
            this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0,
            this.entanglements = me(0),
            this.identifierPrefix = r,
            this.onRecoverableError = i,
            this.mutableSourceEagerHydrationData = null;
        }
        function Bc(t, e, n, r, i, a, o, s, l) {
          return t = new Ic(t, e, n, s, l),
            1 === e ? (e = 1, !0 === a && (e |= 8)) : e = 0,
            a = Oc(3, null, null, e),
            t.current = a,
            a.stateNode = t,
            a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            },
            ja(a),
            t;
        }
        function Vc(t) {
          if (!t) return Ci;
          t: {
            if (Ht(t = t._reactInternals) !== t || 1 !== t.tag) {
              throw Error(a(170));
            }
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Di(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(a(171));
          }
          if (1 === t.tag) {
            var n = t.type;
            if (Di(n)) return Fi(t, n, e);
          }
          return e;
        }
        function Hc(t, e, n, r, i, a, o, s, l) {
          return (t = Bc(n, r, !0, t, 0, a, 0, s, l)).context = Vc(null),
            n = t.current,
            (a = Na(r = tc(), i = ec(n))).callback = void 0 !== e && null !== e
              ? e
              : null,
            Ia(n, a, i),
            t.current.lanes = i,
            be(t, i, r),
            rc(t, r),
            t;
        }
        function Uc(t, e, n, r) {
          var i = e.current, a = tc(), o = ec(i);
          return n = Vc(n),
            null === e.context ? e.context = n : e.pendingContext = n,
            (e = Na(a, o)).payload = { element: t },
            null !== (r = void 0 === r ? null : r) && (e.callback = r),
            null !== (t = Ia(i, e, o)) && (nc(t, i, o, a), Ba(t, i, o)),
            o;
        }
        function Wc(t) {
          return (t = t.current).child
            ? (t.child.tag, t.child.stateNode)
            : null;
        }
        function $c(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var n = t.retryLane;
            t.retryLane = 0 !== n && n < e ? n : e;
          }
        }
        function qc(t, e) {
          $c(t, e), (t = t.alternate) && $c(t, e);
        }
        kl = function (t, e, n) {
          if (null !== t) {
            if (t.memoizedProps !== e.pendingProps || Ti.current) {
              vs = !0;
            } else {
              if (0 === (t.lanes & n) && 0 === (128 & e.flags)) {
                return vs = !1,
                  function (t, e, n) {
                    switch (e.tag) {
                      case 3:
                        Ts(e), fa();
                        break;
                      case 5:
                        Ja(e);
                        break;
                      case 1:
                        Di(e.type) && ji(e);
                        break;
                      case 4:
                        Ka(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = e.type._context, i = e.memoizedProps.value;
                        Ei(_a, r._currentValue), r._currentValue = i;
                        break;
                      case 13:
                        if (null !== (r = e.memoizedState)) {
                          return null !== r.dehydrated
                            ? (Ei(Za, 1 & Za.current), e.flags |= 128, null)
                            : 0 !== (n & e.child.childLanes)
                            ? zs(t, e, n)
                            : (Ei(Za, 1 & Za.current),
                              null !== (t = Ws(t, e, n)) ? t.sibling : null);
                        }
                        Ei(Za, 1 & Za.current);
                        break;
                      case 19:
                        if (
                          r = 0 !== (n & e.childLanes), 0 !== (128 & t.flags)
                        ) {
                          if (r) return Hs(t, e, n);
                          e.flags |= 128;
                        }
                        if (
                          null !== (i = e.memoizedState) &&
                          (i.rendering = null,
                            i.tail = null,
                            i.lastEffect = null),
                            Ei(Za, Za.current),
                            r
                        ) break;
                        return null;
                      case 22:
                      case 23:
                        return e.lanes = 0, Ss(t, e, n);
                    }
                    return Ws(t, e, n);
                  }(t, e, n);
              }
              vs = 0 !== (131072 & t.flags);
            }
          } else vs = !1, ia && 0 !== (1048576 & e.flags) && Zi(e, qi, e.index);
          switch (e.lanes = 0, e.tag) {
            case 2:
              var r = e.type;
              Us(t, e), t = e.pendingProps;
              var i = Oi(e, Pi.current);
              Ta(e, n), i = mo(null, e, r, t, i, n);
              var o = bo();
              return e.flags |= 1,
                "object" === typeof i && null !== i &&
                  "function" === typeof i.render && void 0 === i.$$typeof
                  ? (e.tag = 1,
                    e.memoizedState = null,
                    e.updateQueue = null,
                    Di(r) ? (o = !0, ji(e)) : o = !1,
                    e.memoizedState = null !== i.state && void 0 !== i.state
                      ? i.state
                      : null,
                    ja(e),
                    i.updater = is,
                    e.stateNode = i,
                    i._reactInternals = e,
                    ls(e, r, t, n),
                    e = Ps(null, e, r, !0, o, n))
                  : (e.tag = 0,
                    ia && o && ta(e),
                    xs(null, e, i, n),
                    e = e.child),
                e;
            case 16:
              r = e.elementType;
              t: {
                switch (
                  Us(t, e),
                    t = e.pendingProps,
                    r = (i = r._init)(r._payload),
                    e.type = r,
                    i = e.tag = function (t) {
                      if ("function" === typeof t) return Dc(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === P) return 11;
                        if (t === O) return 14;
                      }
                      return 2;
                    }(r),
                    t = ns(r, t),
                    i
                ) {
                  case 0:
                    e = Es(null, e, r, t, n);
                    break t;
                  case 1:
                    e = Cs(null, e, r, t, n);
                    break t;
                  case 11:
                    e = ws(null, e, r, t, n);
                    break t;
                  case 14:
                    e = _s(null, e, r, ns(r.type, t), n);
                    break t;
                }
                throw Error(a(306, r, ""));
              }
              return e;
            case 0:
              return r = e.type,
                i = e.pendingProps,
                Es(t, e, r, i = e.elementType === r ? i : ns(r, i), n);
            case 1:
              return r = e.type,
                i = e.pendingProps,
                Cs(t, e, r, i = e.elementType === r ? i : ns(r, i), n);
            case 3:
              t: {
                if (Ts(e), null === t) throw Error(a(387));
                r = e.pendingProps,
                  i = (o = e.memoizedState).element,
                  za(t, e),
                  Ha(e, r, null, n);
                var s = e.memoizedState;
                if (r = s.element, o.isDehydrated) {
                  if (
                    o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    },
                      e.updateQueue.baseState = o,
                      e.memoizedState = o,
                      256 & e.flags
                  ) {
                    e = Rs(t, e, r, n, i = cs(Error(a(423)), e));
                    break t;
                  }
                  if (r !== i) {
                    e = Rs(t, e, r, n, i = cs(Error(a(424)), e));
                    break t;
                  }
                  for (
                    ra = ci(e.stateNode.containerInfo.firstChild),
                      na = e,
                      ia = !0,
                      aa = null,
                      n = wa(e, null, r, n),
                      e.child = n;
                    n;
                  ) n.flags = -3 & n.flags | 4096, n = n.sibling;
                } else {
                  if (fa(), r === i) {
                    e = Ws(t, e, n);
                    break t;
                  }
                  xs(t, e, r, n);
                }
                e = e.child;
              }
              return e;
            case 5:
              return Ja(e),
                null === t && ca(e),
                r = e.type,
                i = e.pendingProps,
                o = null !== t ? t.memoizedProps : null,
                s = i.children,
                ni(r, i) ? s = null : null !== o && ni(r, o) && (e.flags |= 32),
                Ms(t, e),
                xs(t, e, s, n),
                e.child;
            case 6:
              return null === t && ca(e), null;
            case 13:
              return zs(t, e, n);
            case 4:
              return Ka(e, e.stateNode.containerInfo),
                r = e.pendingProps,
                null === t ? e.child = xa(e, null, r, n) : xs(t, e, r, n),
                e.child;
            case 11:
              return r = e.type,
                i = e.pendingProps,
                ws(t, e, r, i = e.elementType === r ? i : ns(r, i), n);
            case 7:
              return xs(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
              return xs(t, e, e.pendingProps.children, n), e.child;
            case 10:
              t: {
                if (
                  r = e.type._context,
                    i = e.pendingProps,
                    o = e.memoizedProps,
                    s = i.value,
                    Ei(_a, r._currentValue),
                    r._currentValue = s,
                    null !== o
                ) {
                  if (sr(o.value, s)) {
                    if (o.children === i.children && !Ti.current) {
                      e = Ws(t, e, n);
                      break t;
                    }
                  } else {for (
                      null !== (o = e.child) && (o.return = e);
                      null !== o;
                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var c = l.firstContext; null !== c;) {
                          if (c.context === r) {
                            if (1 === o.tag) {
                              (c = Na(-1, n & -n)).tag = 2;
                              var u = o.updateQueue;
                              if (null !== u) {
                                var h = (u = u.shared).pending;
                                null === h
                                  ? c.next = c
                                  : (c.next = h.next, h.next = c),
                                  u.pending = c;
                              }
                            }
                            o.lanes |= n,
                              null !== (c = o.alternate) && (c.lanes |= n),
                              Pa(o.return, n, e),
                              l.lanes |= n;
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === o.tag) {
                        s = o.type === e.type ? null : o.child;
                      } else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(a(341));
                        s.lanes |= n,
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Pa(s, n, e),
                          s = o.sibling;
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else {for (s = o; null !== s;) {
                          if (s === e) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            o.return = s.return, s = o;
                            break;
                          }
                          s = s.return;
                        }}
                      o = s;
                    }}
                }
                xs(t, e, i.children, n), e = e.child;
              }
              return e;
            case 9:
              return i = e.type,
                r = e.pendingProps.children,
                Ta(e, n),
                r = r(i = Ra(i)),
                e.flags |= 1,
                xs(t, e, r, n),
                e.child;
            case 14:
              return i = ns(r = e.type, e.pendingProps),
                _s(t, e, r, i = ns(r.type, i), n);
            case 15:
              return ks(t, e, e.type, e.pendingProps, n);
            case 17:
              return r = e.type,
                i = e.pendingProps,
                i = e.elementType === r ? i : ns(r, i),
                Us(t, e),
                e.tag = 1,
                Di(r) ? (t = !0, ji(e)) : t = !1,
                Ta(e, n),
                os(e, r, i),
                ls(e, r, i, n),
                Ps(null, e, r, !0, t, n);
            case 19:
              return Hs(t, e, n);
            case 22:
              return Ss(t, e, n);
          }
          throw Error(a(156, e.tag));
        };
        var Yc = "function" === typeof reportError
          ? reportError
          : function (t) {
            console.error(t);
          };
        function Qc(t) {
          this._internalRoot = t;
        }
        function Kc(t) {
          this._internalRoot = t;
        }
        function Xc(t) {
          return !(!t ||
            1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType);
        }
        function Jc(t) {
          return !(!t ||
            1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType &&
              (8 !== t.nodeType ||
                " react-mount-point-unstable " !== t.nodeValue));
        }
        function Gc() {}
        function Zc(t, e, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var s = i;
              i = function () {
                var t = Wc(o);
                s.call(t);
              };
            }
            Uc(e, o, t, i);
          } else {o = function (t, e, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var t = Wc(o);
                    a.call(t);
                  };
                }
                var o = Hc(e, r, t, 0, null, !1, 0, "", Gc);
                return t._reactRootContainer = o,
                  t[pi] = o.current,
                  Hr(8 === t.nodeType ? t.parentNode : t),
                  uc(),
                  o;
              }
              for (; i = t.lastChild;) t.removeChild(i);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var t = Wc(l);
                  s.call(t);
                };
              }
              var l = Bc(t, 0, !1, null, 0, !1, 0, "", Gc);
              return t._reactRootContainer = l,
                t[pi] = l.current,
                Hr(8 === t.nodeType ? t.parentNode : t),
                uc(function () {
                  Uc(e, l, n, r);
                }),
                l;
            }(n, e, t, i, r);}
          return Wc(o);
        }
        Kc.prototype.render = Qc.prototype.render = function (t) {
          var e = this._internalRoot;
          if (null === e) throw Error(a(409));
          Uc(t, e, null, null);
        },
          Kc.prototype.unmount = Qc.prototype.unmount = function () {
            var t = this._internalRoot;
            if (null !== t) {
              this._internalRoot = null;
              var e = t.containerInfo;
              uc(function () {
                Uc(null, t, null, null);
              }), e[pi] = null;
            }
          },
          Kc.prototype.unstable_scheduleHydration = function (t) {
            if (t) {
              var e = Se();
              t = { blockedOn: null, target: t, priority: e };
              for (
                var n = 0;
                n < Le.length && 0 !== e && e < Le[n].priority;
                n++
              );
              Le.splice(n, 0, t), 0 === n && ze(t);
            }
          },
          we = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var n = he(e.pendingLanes);
                  0 !== n &&
                    (ye(e, 1 | n),
                      rc(e, Jt()),
                      0 === (6 & Pl) && (Hl = Jt() + 500, Hi()));
                }
                break;
              case 13:
                uc(function () {
                  var e = Aa(t, 1);
                  if (null !== e) {
                    var n = tc();
                    nc(e, t, 1, n);
                  }
                }), qc(t, 1);
            }
          },
          _e = function (t) {
            if (13 === t.tag) {
              var e = Aa(t, 134217728);
              if (null !== e) nc(e, t, 134217728, tc());
              qc(t, 134217728);
            }
          },
          ke = function (t) {
            if (13 === t.tag) {
              var e = ec(t), n = Aa(t, e);
              if (null !== n) nc(n, t, e, tc());
              qc(t, e);
            }
          },
          Se = function () {
            return ve;
          },
          Me = function (t, e) {
            var n = ve;
            try {
              return ve = t, e();
            } finally {
              ve = n;
            }
          },
          _t = function (t, e, n) {
            switch (e) {
              case "input":
                if (G(t, n), e = n.name, "radio" === n.type && null != e) {
                  for (n = t; n.parentNode;) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + e) +
                        '][type="radio"]',
                    ), e = 0;
                    e < n.length;
                    e++
                  ) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                      var i = wi(r);
                      if (!i) throw Error(a(90));
                      Y(r), G(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                at(t, n);
                break;
              case "select":
                null != (e = n.value) && nt(t, !!n.multiple, e, !1);
            }
          },
          Pt = cc,
          Tt = uc;
        var tu = {
            usingClientEntryPoint: !1,
            Events: [vi, xi, wi, Et, Ct, cc],
          },
          eu = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: eu.bundleType,
            version: eu.version,
            rendererPackageName: eu.rendererPackageName,
            rendererConfig: eu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (t) {
              return null === (t = $t(t)) ? null : t.stateNode;
            },
            findFiberByHostInstance: eu.findFiberByHostInstance || function () {
              return null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber) {
            try {
              ie = ru.inject(nu), ae = ru;
            } catch (ut) {}
          }
        }
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu,
          e.createPortal = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
            if (!Xc(e)) throw Error(a(200));
            return function (t, e, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
              return {
                $$typeof: _,
                key: null == r ? null : "" + r,
                children: t,
                containerInfo: e,
                implementation: n,
              };
            }(t, e, null, n);
          },
          e.createRoot = function (t, e) {
            if (!Xc(t)) throw Error(a(299));
            var n = !1, r = "", i = Yc;
            return null !== e && void 0 !== e &&
              (!0 === e.unstable_strictMode && (n = !0),
                void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (i = e.onRecoverableError)),
              e = Bc(t, 1, !1, null, 0, n, 0, r, i),
              t[pi] = e.current,
              Hr(8 === t.nodeType ? t.parentNode : t),
              new Qc(e);
          },
          e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ("function" === typeof t.render) throw Error(a(188));
              throw t = Object.keys(t).join(","), Error(a(268, t));
            }
            return t = null === (t = $t(e)) ? null : t.stateNode;
          },
          e.flushSync = function (t) {
            return uc(t);
          },
          e.hydrate = function (t, e, n) {
            if (!Jc(e)) throw Error(a(200));
            return Zc(null, t, e, !0, n);
          },
          e.hydrateRoot = function (t, e, n) {
            if (!Xc(t)) throw Error(a(405));
            var r = null != n && n.hydratedSources || null,
              i = !1,
              o = "",
              s = Yc;
            if (
              null !== n && void 0 !== n &&
              (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
                e = Hc(e, null, t, 1, null != n ? n : null, i, 0, o, s),
                t[pi] = e.current,
                Hr(t),
                r
            ) {
              for (t = 0; t < r.length; t++) {
                i = (i = (n = r[t])._getVersion)(n._source),
                  null == e.mutableSourceEagerHydrationData
                    ? e.mutableSourceEagerHydrationData = [n, i]
                    : e.mutableSourceEagerHydrationData.push(n, i);
              }
            }
            return new Kc(e);
          },
          e.render = function (t, e, n) {
            if (!Jc(e)) throw Error(a(200));
            return Zc(null, t, e, !1, n);
          },
          e.unmountComponentAtNode = function (t) {
            if (!Jc(t)) throw Error(a(40));
            return !!t._reactRootContainer && (uc(function () {
              Zc(null, null, t, !1, function () {
                t._reactRootContainer = null, t[pi] = null;
              });
            }),
              !0);
          },
          e.unstable_batchedUpdates = cc,
          e.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
            if (!Jc(n)) throw Error(a(200));
            if (null == t || void 0 === t._reactInternals) throw Error(a(38));
            return Zc(t, e, n, !1, r);
          },
          e.version = "18.3.1-next-f1338f8080-20240426";
      },
      391: (t, e, n) => {
        var r = n(950);
        e.createRoot = r.createRoot, e.hydrateRoot = r.hydrateRoot;
      },
      950: (t, e, n) => {
        !function t() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          ) {
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (e) {
              console.error(e);
            }
          }
        }(), t.exports = n(730);
      },
      153: (t, e, n) => {
        var r = n(43),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(t, e, n) {
          var r, a = {}, c = null, u = null;
          for (
            r in void 0 !== n && (c = "" + n),
              void 0 !== e.key && (c = "" + e.key),
              void 0 !== e.ref && (u = e.ref),
              e
          ) o.call(e, r) && !l.hasOwnProperty(r) && (a[r] = e[r]);
          if (t && t.defaultProps) {
            for (r in e = t.defaultProps) void 0 === a[r] && (a[r] = e[r]);
          }
          return {
            $$typeof: i,
            type: t,
            key: c,
            ref: u,
            props: a,
            _owner: s.current,
          };
        }
        e.Fragment = a, e.jsx = c, e.jsxs = c;
      },
      202: (t, e) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          h = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function b(t, e, n) {
          this.props = t,
            this.context = e,
            this.refs = m,
            this.updater = n || p;
        }
        function y() {}
        function v(t, e, n) {
          this.props = t,
            this.context = e,
            this.refs = m,
            this.updater = n || p;
        }
        b.prototype.isReactComponent = {},
          b.prototype.setState = function (t, e) {
            if ("object" !== typeof t && "function" !== typeof t && null != t) {
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            }
            this.updater.enqueueSetState(this, t, e, "setState");
          },
          b.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, "forceUpdate");
          },
          y.prototype = b.prototype;
        var x = v.prototype = new y();
        x.constructor = v, g(x, b.prototype), x.isPureReactComponent = !0;
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function M(t, e, r) {
          var i, a = {}, o = null, s = null;
          if (null != e) {
            for (
              i in void 0 !== e.ref && (s = e.ref),
                void 0 !== e.key && (o = "" + e.key),
                e
            ) _.call(e, i) && !S.hasOwnProperty(i) && (a[i] = e[i]);
          }
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            a.children = c;
          }
          if (t && t.defaultProps) {
            for (i in l = t.defaultProps) void 0 === a[i] && (a[i] = l[i]);
          }
          return {
            $$typeof: n,
            type: t,
            key: o,
            ref: s,
            props: a,
            _owner: k.current,
          };
        }
        function E(t) {
          return "object" === typeof t && null !== t && t.$$typeof === n;
        }
        var C = /\/+/g;
        function P(t, e) {
          return "object" === typeof t && null !== t && null != t.key
            ? function (t) {
              var e = { "=": "=0", ":": "=2" };
              return "$" + t.replace(/[=:]/g, function (t) {
                return e[t];
              });
            }("" + t.key)
            : e.toString(36);
        }
        function T(t, e, i, a, o) {
          var s = typeof t;
          "undefined" !== s && "boolean" !== s || (t = null);
          var l = !1;
          if (null === t) l = !0;
          else {switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }}
          if (l) {
            return o = o(l = t),
              t = "" === a ? "." + P(l, 0) : a,
              w(o)
                ? (i = "",
                  null != t && (i = t.replace(C, "$&/") + "/"),
                  T(o, e, i, "", function (t) {
                    return t;
                  }))
                : null != o && (E(o) && (o = function (t, e) {
                  return {
                    $$typeof: n,
                    type: t.type,
                    key: e,
                    ref: t.ref,
                    props: t.props,
                    _owner: t._owner,
                  };
                }(
                  o,
                  i + (!o.key || l && l.key === o.key
                    ? ""
                    : ("" + o.key).replace(C, "$&/") + "/") +
                    t,
                )),
                  e.push(o)),
              1;
          }
          if (l = 0, a = "" === a ? "." : a + ":", w(t)) {
            for (var c = 0; c < t.length; c++) {
              var u = a + P(s = t[c], c);
              l += T(s, e, i, u, o);
            }
          } else if (
            u = function (t) {
              return null === t || "object" !== typeof t
                ? null
                : "function" === typeof (t = f && t[f] || t["@@iterator"])
                ? t
                : null;
            }(t), "function" === typeof u
          ) {
            for (t = u.call(t), c = 0; !(s = t.next()).done;) {
              l += T(s = s.value, e, i, u = a + P(s, c++), o);
            }
          } else if ("object" === s) {
            throw e = String(t),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === e
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e) +
                  "). If you meant to render a collection of children, use an array instead.",
              );
          }
          return l;
        }
        function R(t, e, n) {
          if (null == t) return t;
          var r = [], i = 0;
          return T(t, r, "", "", function (t) {
            return e.call(n, t, i++);
          }),
            r;
        }
        function O(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()).then(function (e) {
              0 !== t._status && -1 !== t._status ||
                (t._status = 1, t._result = e);
            }, function (e) {
              0 !== t._status && -1 !== t._status ||
                (t._status = 2, t._result = e);
            }), -1 === t._status && (t._status = 0, t._result = e);
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var D = { current: null },
          L = { transition: null },
          A = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: k,
          };
        function F() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        e.Children = {
          map: R,
          forEach: function (t, e, n) {
            R(t, function () {
              e.apply(this, arguments);
            }, n);
          },
          count: function (t) {
            var e = 0;
            return R(t, function () {
              e++;
            }),
              e;
          },
          toArray: function (t) {
            return R(t, function (t) {
              return t;
            }) || [];
          },
          only: function (t) {
            if (!E(t)) {
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            }
            return t;
          },
        },
          e.Component = b,
          e.Fragment = i,
          e.Profiler = o,
          e.PureComponent = v,
          e.StrictMode = a,
          e.Suspense = u,
          e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A,
          e.act = F,
          e.cloneElement = function (t, e, r) {
            if (null === t || void 0 === t) {
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  t + ".",
              );
            }
            var i = g({}, t.props), a = t.key, o = t.ref, s = t._owner;
            if (null != e) {
              if (
                void 0 !== e.ref && (o = e.ref, s = k.current),
                  void 0 !== e.key && (a = "" + e.key),
                  t.type && t.type.defaultProps
              ) { var l = t.type.defaultProps; }
              for (c in e) {
                _.call(e, c) && !S.hasOwnProperty(c) &&
                  (i[c] = void 0 === e[c] && void 0 !== l ? l[c] : e[c]);
              }
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: t.type,
              key: a,
              ref: o,
              props: i,
              _owner: s,
            };
          },
          e.createContext = function (t) {
            return (t = {
              $$typeof: l,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: s, _context: t },
              t.Consumer = t;
          },
          e.createElement = M,
          e.createFactory = function (t) {
            var e = M.bind(null, t);
            return e.type = t, e;
          },
          e.createRef = function () {
            return { current: null };
          },
          e.forwardRef = function (t) {
            return { $$typeof: c, render: t };
          },
          e.isValidElement = E,
          e.lazy = function (t) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: t },
              _init: O,
            };
          },
          e.memo = function (t, e) {
            return { $$typeof: h, type: t, compare: void 0 === e ? null : e };
          },
          e.startTransition = function (t) {
            var e = L.transition;
            L.transition = {};
            try {
              t();
            } finally {
              L.transition = e;
            }
          },
          e.unstable_act = F,
          e.useCallback = function (t, e) {
            return D.current.useCallback(t, e);
          },
          e.useContext = function (t) {
            return D.current.useContext(t);
          },
          e.useDebugValue = function () {},
          e.useDeferredValue = function (t) {
            return D.current.useDeferredValue(t);
          },
          e.useEffect = function (t, e) {
            return D.current.useEffect(t, e);
          },
          e.useId = function () {
            return D.current.useId();
          },
          e.useImperativeHandle = function (t, e, n) {
            return D.current.useImperativeHandle(t, e, n);
          },
          e.useInsertionEffect = function (t, e) {
            return D.current.useInsertionEffect(t, e);
          },
          e.useLayoutEffect = function (t, e) {
            return D.current.useLayoutEffect(t, e);
          },
          e.useMemo = function (t, e) {
            return D.current.useMemo(t, e);
          },
          e.useReducer = function (t, e, n) {
            return D.current.useReducer(t, e, n);
          },
          e.useRef = function (t) {
            return D.current.useRef(t);
          },
          e.useState = function (t) {
            return D.current.useState(t);
          },
          e.useSyncExternalStore = function (t, e, n) {
            return D.current.useSyncExternalStore(t, e, n);
          },
          e.useTransition = function () {
            return D.current.useTransition();
          },
          e.version = "18.3.1";
      },
      43: (t, e, n) => {
        t.exports = n(202);
      },
      579: (t, e, n) => {
        t.exports = n(153);
      },
      234: (t, e) => {
        function n(t, e) {
          var n = t.length;
          t.push(e);
          t: for (; 0 < n;) {
            var r = n - 1 >>> 1, i = t[r];
            if (!(0 < a(i, e))) break t;
            t[r] = e, t[n] = i, n = r;
          }
        }
        function r(t) {
          return 0 === t.length ? null : t[0];
        }
        function i(t) {
          if (0 === t.length) return null;
          var e = t[0], n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var r = 0, i = t.length, o = i >>> 1; r < o;) {
              var s = 2 * (r + 1) - 1, l = t[s], c = s + 1, u = t[c];
              if (0 > a(l, n)) {
                c < i && 0 > a(u, l)
                  ? (t[r] = u, t[c] = n, r = c)
                  : (t[r] = l, t[s] = n, r = s);
              } else {
                if (!(c < i && 0 > a(u, n))) break t;
                t[r] = u, t[c] = n, r = c;
              }
            }
          }
          return e;
        }
        function a(t, e) {
          var n = t.sortIndex - e.sortIndex;
          return 0 !== n ? n : t.id - e.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          e.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date, l = s.now();
          e.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          h = 1,
          d = null,
          f = 3,
          p = !1,
          g = !1,
          m = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(t) {
          for (var e = r(u); null !== e;) {
            if (null === e.callback) i(u);
            else {
              if (!(e.startTime <= t)) break;
              i(u), e.sortIndex = e.expirationTime, n(c, e);
            }
            e = r(u);
          }
        }
        function w(t) {
          if (m = !1, x(t), !g) {
            if (null !== r(c)) g = !0, L(_);
            else {
              var e = r(u);
              null !== e && A(w, e.startTime - t);
            }
          }
        }
        function _(t, n) {
          g = !1, m && (m = !1, y(E), E = -1), p = !0;
          var a = f;
          try {
            for (
              x(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || t && !T());
            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                d.callback = null, f = d.priorityLevel;
                var s = o(d.expirationTime <= n);
                n = e.unstable_now(),
                  "function" === typeof s ? d.callback = s : d === r(c) && i(c),
                  x(n);
              } else i(c);
              d = r(c);
            }
            if (null !== d) { var l = !0; }
            else {
              var h = r(u);
              null !== h && A(w, h.startTime - n), l = !1;
            }
            return l;
          } finally {
            d = null, f = a, p = !1;
          }
        }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k, S = !1, M = null, E = -1, C = 5, P = -1;
        function T() {
          return !(e.unstable_now() - P < C);
        }
        function R() {
          if (null !== M) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
              n = M(!0, t);
            } finally {
              n ? k() : (S = !1, M = null);
            }
          } else S = !1;
        }
        if ("function" === typeof v) {
          k = function () {
            v(R);
          };
        } else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(), D = O.port2;
          O.port1.onmessage = R,
            k = function () {
              D.postMessage(null);
            };
        } else {k = function () {
            b(R, 0);
          };}
        function L(t) {
          M = t, S || (S = !0, k());
        }
        function A(t, n) {
          E = b(function () {
            t(e.unstable_now());
          }, n);
        }
        e.unstable_IdlePriority = 5,
          e.unstable_ImmediatePriority = 1,
          e.unstable_LowPriority = 4,
          e.unstable_NormalPriority = 3,
          e.unstable_Profiling = null,
          e.unstable_UserBlockingPriority = 2,
          e.unstable_cancelCallback = function (t) {
            t.callback = null;
          },
          e.unstable_continueExecution = function () {
            g || p || (g = !0, L(_));
          },
          e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
              : C = 0 < t ? Math.floor(1e3 / t) : 5;
          },
          e.unstable_getCurrentPriorityLevel = function () {
            return f;
          },
          e.unstable_getFirstCallbackNode = function () {
            return r(c);
          },
          e.unstable_next = function (t) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break;
              default:
                e = f;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          },
          e.unstable_pauseExecution = function () {},
          e.unstable_requestPaint = function () {},
          e.unstable_runWithPriority = function (t, e) {
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                t = 3;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          },
          e.unstable_scheduleCallback = function (t, i, a) {
            var o = e.unstable_now();
            switch (
              "object" === typeof a && null !== a
                ? a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o
                : a = o, t
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return t = {
              id: h++,
              callback: i,
              priorityLevel: t,
              startTime: a,
              expirationTime: s = a + s,
              sortIndex: -1,
            },
              a > o
                ? (t.sortIndex = a,
                  n(u, t),
                  null === r(c) && t === r(u) &&
                  (m ? (y(E), E = -1) : m = !0, A(w, a - o)))
                : (t.sortIndex = s, n(c, t), g || p || (g = !0, L(_))),
              t;
          },
          e.unstable_shouldYield = T,
          e.unstable_wrapCallback = function (t) {
            var e = f;
            return function () {
              var n = f;
              f = e;
              try {
                return t.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          };
      },
      853: (t, e, n) => {
        t.exports = n(234);
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var a = e[r] = { exports: {} };
    return t[r](a, a.exports, n), a.exports;
  }
  (() => {
    var t,
      e = Object.getPrototypeOf
        ? (t) => Object.getPrototypeOf(t)
        : (t) => t.__proto__;
    n.t = function (r, i) {
      if (1 & i && (r = this(r)), 8 & i) return r;
      if ("object" === typeof r && r) {
        if (4 & i && r.__esModule) return r;
        if (16 & i && "function" === typeof r.then) return r;
      }
      var a = Object.create(null);
      n.r(a);
      var o = {};
      t = t || [null, e({}), e([]), e(e)];
      for (
        var s = 2 & i && r;
        "object" == typeof s && !~t.indexOf(s);
        s = e(s)
      ) Object.getOwnPropertyNames(s).forEach((t) => o[t] = () => r[t]);
      return o.default = () => r, n.d(a, o), a;
    };
  })(),
    n.d = (t, e) => {
      for (var r in e) {
        n.o(e, r) && !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      }
    },
    n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    n.r = (t) => {
      "undefined" !== typeof Symbol && Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    };
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => qr,
      hasStandardBrowserEnv: () => Qr,
      hasStandardBrowserWebWorkerEnv: () => Kr,
      navigator: () => Yr,
      origin: () => Xr,
    });
  var i = n(43), a = n.t(i, 2), o = n(391), s = n(579);
  function l(t) {
    let { children: e, href: n, ...r } = t;
    return (0, s.jsx)("a", {
      href: n,
      className: "dawn-link",
      ...r,
      children: e,
    });
  }
  function c() {
    const t = (0, i.useMemo)(() => {
      const t = window.location.pathname.split("/");
      t.shift();
      let e = [["dawn.rest", "/"]], n = "";
      for (const r of t) 0 !== r.length && (n += `/${r}`, e.push([r, n]));
      return 1 === e.length ? [] : e;
    }, []);
    return (0, s.jsx)("div", {
      className: "dawn-breadcrumb",
      children: t.map(
        (t) =>
          (0, s.jsxs)("label", {
            children: [
              (0, s.jsx)(l, { href: t[1], children: t[0] }),
              " ",
              (0, s.jsx)("small", { style: { color: "gray" }, children: "/" }),
            ],
          }, t[1]),
      ),
    });
  }
  function u(t) {
    let { children: e, title: n } = t;
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("div", { className: "dawn-navbar", children: e }),
        (0, s.jsxs)("div", {
          className: "dawn-navbar-below",
          children: [
            null !== n && void 0 !== n ? n : (0, s.jsx)("div", {}),
            (0, s.jsx)(c, {}),
          ],
        }),
      ],
    });
  }
  function h(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: "dawn-row", children: e });
  }
  function d(t) {
    return (0, s.jsx)("p", {
      className: "dawn-text " + (t.type ? `dawn-text-${t.type}` : ""),
      children: t.children,
    });
  }
  function f(t) {
    let { children: e, title: n } = t;
    return (0, s.jsx)(u, {
      title: n,
      children: (0, s.jsxs)(h, {
        children: [
          (0, s.jsx)(d, {
            type: "navbar",
            children: (0, s.jsx)(l, { href: "/", children: "dawn.rest" }),
          }),
          null !== e && void 0 !== e ? e : (0, s.jsx)(h, { children: e }),
        ],
      }),
    });
  }
  function p(t) {
    return (0, s.jsx)("div", {
      className: "dawn-banner",
      children: (0, s.jsxs)("div", {
        style: { display: "flex", flexDirection: "row" },
        children: [
          (0, s.jsxs)("div", {
            style: { flex: "1" },
            children: [
              (0, s.jsx)(d, { type: "page-title", children: t.title }),
              t.children,
            ],
          }),
          (0, s.jsx)("img", {
            className: "dawn-banner-image",
            src: "/images/dawn.png",
          }),
        ],
      }),
    });
  }
  function g(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: "dawn-content", children: e });
  }
  function m(t) {
    let { children: e } = t;
    return (0, s.jsxs)("div", {
      className: "dawn-page",
      children: [
        e[0],
        (0, s.jsx)("div", { className: "dawn-page-content", children: e[1] }),
      ],
    });
  }
  function b(t) {
    let { width: e, title: n, children: r, ...i } = t;
    return (0, s.jsxs)("div", {
      ...i,
      className: "dawn-panel",
      style: {
        ...i.style,
        ...e && { width: `${{ full: "100%", fit: "fit-content" }[e] || e}` },
      },
      children: [
        (0, s.jsx)("div", {
          className: "dawn-panel-title",
          children: (0, s.jsx)(d, { type: "heading", children: n }),
        }),
        (0, s.jsx)("div", { className: "dawn-content", children: r }),
      ],
    });
  }
  function y(t) {
    let { children: e, fullWidth: n } = t;
    return (0, s.jsx)("div", {
      className: `dawn-panel-row ${n && "dawn-panel-row-full"}`,
      children: e,
    });
  }
  const v = function () {
    return (0, s.jsxs)(m, {
      children: [
        (0, s.jsx)(f, {}),
        (0, s.jsxs)(g, {
          children: [
            (0, s.jsx)(p, {
              title: "Welcome to dawn.rest",
              children: (0, s.jsxs)(d, {
                children: [
                  "Hello, I am Dawn! This is my website where I'll put all my projects, hypnosis files, etc.",
                  (0, s.jsx)("br", {}),
                  "You can see my projects / things relating to me below!",
                ],
              }),
            }),
            (0, s.jsxs)(y, {
              children: [
                (0, s.jsx)(l, {
                  href: "/hypno",
                  children: (0, s.jsx)(b, {
                    title: "Hypnosis",
                    style: { backgroundImage: "url(/images/spiral.svg)" },
                    children: (0, s.jsx)(d, {
                      children:
                        "Discover the wonders of hypnosis. See my hypno files, visualisations, and more.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "https://discord.gg/invite/zZw7ZCRy",
                  children: (0, s.jsx)(b, {
                    title: "Discord",
                    style: { backgroundImage: "url(/images/discord.svg)" },
                    children: (0, s.jsx)(d, {
                      children:
                        "Join my Discord server where we talk about hypnosis, have fun events, and have a generally nice community.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "/trancer",
                  children: (0, s.jsx)(b, {
                    title: "Trancer",
                    style: { backgroundImage: "url(/images/discord.svg)" },
                    children: (0, s.jsx)(d, {
                      children: "See my hypnosis-related Discord bot: Trancer.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "https://youtube.com/@trancebydawn",
                  children: (0, s.jsx)(b, {
                    title: "Trance By Dawn",
                    style: { backgroundImage: "url(/images/youtube.svg)" },
                    children: (0, s.jsx)(d, {
                      children:
                        "This is my YouTube channel where I post my files too.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "https://github.com/itevie",
                  children: (0, s.jsx)(b, {
                    title: "GitHub",
                    style: { backgroundImage: "url(/images/github.svg)" },
                    children: (0, s.jsx)(d, {
                      children: "See all my code projects I make here.",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  var x, w = n(950), _ = n.t(w, 2);
  function k() {
    return k = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    },
      k.apply(this, arguments);
  }
  !function (t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
  }(x || (x = {}));
  const S = "popstate";
  function M(t, e) {
    if (!1 === t || null === t || "undefined" === typeof t) throw new Error(e);
  }
  function E(t, e) {
    if (!t) {
      "undefined" !== typeof console && console.warn(e);
      try {
        throw new Error(e);
      } catch (n) {}
    }
  }
  function C(t, e) {
    return { usr: t.state, key: t.key, idx: e };
  }
  function P(t, e, n, r) {
    return void 0 === n && (n = null),
      k(
        {
          pathname: "string" === typeof t ? t : t.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof e ? R(e) : e,
        {
          state: n,
          key: e && e.key || r || Math.random().toString(36).substr(2, 8),
        },
      );
  }
  function T(t) {
    let { pathname: e = "/", search: n = "", hash: r = "" } = t;
    return n && "?" !== n && (e += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (e += "#" === r.charAt(0) ? r : "#" + r),
      e;
  }
  function R(t) {
    let e = {};
    if (t) {
      let n = t.indexOf("#");
      n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
      let r = t.indexOf("?");
      r >= 0 && (e.search = t.substr(r), t = t.substr(0, r)),
        t && (e.pathname = t);
    }
    return e;
  }
  function O(t, e, n, r) {
    void 0 === r && (r = {});
    let { window: i = document.defaultView, v5Compat: a = !1 } = r,
      o = i.history,
      s = x.Pop,
      l = null,
      c = u();
    function u() {
      return (o.state || { idx: null }).idx;
    }
    function h() {
      s = x.Pop;
      let t = u(), e = null == t ? null : t - c;
      c = t, l && l({ action: s, location: f.location, delta: e });
    }
    function d(t) {
      let e = "null" !== i.location.origin
          ? i.location.origin
          : i.location.href,
        n = "string" === typeof t ? t : T(t);
      return n = n.replace(/ $/, "%20"),
        M(
          e,
          "No window.location.(origin|href) available to create URL for href: " +
            n,
        ),
        new URL(n, e);
    }
    null == c && (c = 0, o.replaceState(k({}, o.state, { idx: c }), ""));
    let f = {
      get action() {
        return s;
      },
      get location() {
        return t(i, o);
      },
      listen(t) {
        if (l) throw new Error("A history only accepts one active listener");
        return i.addEventListener(S, h), l = t, () => {
          i.removeEventListener(S, h), l = null;
        };
      },
      createHref: (t) => e(i, t),
      createURL: d,
      encodeLocation(t) {
        let e = d(t);
        return { pathname: e.pathname, search: e.search, hash: e.hash };
      },
      push: function (t, e) {
        s = x.Push;
        let r = P(f.location, t, e);
        n && n(r, t), c = u() + 1;
        let h = C(r, c), d = f.createHref(r);
        try {
          o.pushState(h, "", d);
        } catch (p) {
          if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
          i.location.assign(d);
        }
        a && l && l({ action: s, location: f.location, delta: 1 });
      },
      replace: function (t, e) {
        s = x.Replace;
        let r = P(f.location, t, e);
        n && n(r, t), c = u();
        let i = C(r, c), h = f.createHref(r);
        o.replaceState(i, "", h),
          a && l && l({ action: s, location: f.location, delta: 0 });
      },
      go: (t) => o.go(t),
    };
    return f;
  }
  var D;
  !function (t) {
    t.data = "data",
      t.deferred = "deferred",
      t.redirect = "redirect",
      t.error = "error";
  }(D || (D = {}));
  const L = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
  ]);
  function A(t, e, n, r) {
    return void 0 === n && (n = []),
      void 0 === r && (r = {}),
      t.map((t, i) => {
        let a = [...n, String(i)],
          o = "string" === typeof t.id ? t.id : a.join("-");
        if (
          M(
            !0 !== t.index || !t.children,
            "Cannot specify children on an index route",
          ),
            M(
              !r[o],
              'Found a route id collision on id "' + o +
                "\".  Route id's must be globally unique within Data Router usages",
            ),
            function (t) {
              return !0 === t.index;
            }(t)
        ) {
          let n = k({}, t, e(t), { id: o });
          return r[o] = n, n;
        }
        {
          let n = k({}, t, e(t), { id: o, children: void 0 });
          return r[o] = n,
            t.children && (n.children = A(t.children, e, a, r)),
            n;
        }
      });
  }
  function F(t, e, n) {
    return void 0 === n && (n = "/"), j(t, e, n, !1);
  }
  function j(t, e, n, r) {
    let i = X(("string" === typeof e ? R(e) : e).pathname || "/", n);
    if (null == i) return null;
    let a = z(t);
    !function (t) {
      t.sort(
        (t, e) =>
          t.score !== e.score ? e.score - t.score : function (t, e) {
            let n = t.length === e.length &&
              t.slice(0, -1).every((t, n) => t === e[n]);
            return n ? t[t.length - 1] - e[e.length - 1] : 0;
          }(
            t.routesMeta.map((t) => t.childrenIndex),
            e.routesMeta.map((t) => t.childrenIndex),
          ),
      );
    }(a);
    let o = null;
    for (let s = 0; null == o && s < a.length; ++s) {
      let t = K(i);
      o = Y(a[s], t, r);
    }
    return o;
  }
  function z(t, e, n, r) {
    void 0 === e && (e = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let i = (t, i, a) => {
      let o = {
        relativePath: void 0 === a ? t.path || "" : a,
        caseSensitive: !0 === t.caseSensitive,
        childrenIndex: i,
        route: t,
      };
      o.relativePath.startsWith("/") &&
        (M(
          o.relativePath.startsWith(r),
          'Absolute route path "' + o.relativePath + '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
        ),
          o.relativePath = o.relativePath.slice(r.length));
      let s = tt([r, o.relativePath]), l = n.concat(o);
      t.children && t.children.length > 0 &&
      (M(
        !0 !== t.index,
        'Index routes must not have child routes. Please remove all child routes from route path "' +
          s + '".',
      ),
        z(t.children, e, l, s)),
        (null != t.path || t.index) &&
        e.push({ path: s, score: q(s, t.index), routesMeta: l });
    };
    return t.forEach((t, e) => {
      var n;
      if ("" !== t.path && null != (n = t.path) && n.includes("?")) {
        for (let r of N(t.path)) {
          i(t, e, r);
        }
      } else i(t, e);
    }),
      e;
  }
  function N(t) {
    let e = t.split("/");
    if (0 === e.length) return [];
    let [n, ...r] = e, i = n.endsWith("?"), a = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [a, ""] : [a];
    let o = N(r.join("/")), s = [];
    return s.push(...o.map((t) => "" === t ? a : [a, t].join("/"))),
      i && s.push(...o),
      s.map((e) => t.startsWith("/") && "" === e ? "/" : e);
  }
  const I = /^:[\w-]+$/,
    B = 3,
    V = 2,
    H = 1,
    U = 10,
    W = -2,
    $ = (t) => "*" === t;
  function q(t, e) {
    let n = t.split("/"), r = n.length;
    return n.some($) && (r += W),
      e && (r += V),
      n.filter((t) => !$(t)).reduce(
        (t, e) => t + (I.test(e) ? B : "" === e ? H : U),
        r,
      );
  }
  function Y(t, e, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = t, i = {}, a = "/", o = [];
    for (let s = 0; s < r.length; ++s) {
      let t = r[s],
        l = s === r.length - 1,
        c = "/" === a ? e : e.slice(a.length) || "/",
        u = Q(
          { path: t.relativePath, caseSensitive: t.caseSensitive, end: l },
          c,
        ),
        h = t.route;
      if (
        !u && l && n && !r[r.length - 1].route.index &&
        (u = Q({
          path: t.relativePath,
          caseSensitive: t.caseSensitive,
          end: !1,
        }, c)), !u
      ) return null;
      Object.assign(i, u.params),
        o.push({
          params: i,
          pathname: tt([a, u.pathname]),
          pathnameBase: et(tt([a, u.pathnameBase])),
          route: h,
        }),
        "/" !== u.pathnameBase && (a = tt([a, u.pathnameBase]));
    }
    return o;
  }
  function Q(t, e) {
    "string" === typeof t && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, r] = function (t, e, n) {
        void 0 === e && (e = !1);
        void 0 === n && (n = !0);
        E(
          "*" === t || !t.endsWith("*") || t.endsWith("/*"),
          'Route path "' + t + '" will be treated as if it were "' +
            t.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            t.replace(/\*$/, "/*") + '".',
        );
        let r = [],
          i = "^" +
            t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(
              /[\\.*+^${}|()[\]]/g,
              "\\$&",
            ).replace(
              /\/:([\w-]+)(\?)?/g,
              (
                t,
                e,
                n,
              ) => (r.push({ paramName: e, isOptional: null != n }),
                n ? "/?([^\\/]+)?" : "/([^\\/]+)"),
            );
        t.endsWith("*")
          ? (r.push({ paramName: "*" }),
            i += "*" === t || "/*" === t ? "(.*)$" : "(?:\\/(.+)|\\/*)$")
          : n
          ? i += "\\/*$"
          : "" !== t && "/" !== t && (i += "(?:(?=\\/|$))");
        let a = new RegExp(i, e ? void 0 : "i");
        return [a, r];
      }(t.path, t.caseSensitive, t.end),
      i = e.match(n);
    if (!i) return null;
    let a = i[0],
      o = a.replace(/(.)\/+$/, "$1"),
      s = i.slice(1),
      l = r.reduce((t, e, n) => {
        let { paramName: r, isOptional: i } = e;
        if ("*" === r) {
          let t = s[n] || "";
          o = a.slice(0, a.length - t.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return t[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/"), t;
      }, {});
    return { params: l, pathname: a, pathnameBase: o, pattern: t };
  }
  function K(t) {
    try {
      return t.split("/").map(
        (t) => decodeURIComponent(t).replace(/\//g, "%2F"),
      ).join("/");
    } catch (e) {
      return E(
        !1,
        'The URL path "' + t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
          e + ").",
      ),
        t;
    }
  }
  function X(t, e) {
    if ("/" === e) return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length, r = t.charAt(n);
    return r && "/" !== r ? null : t.slice(n) || "/";
  }
  function J(t, e, n, r) {
    return "Cannot include a '" + t +
      "' character in a manually specified `to." + e + "` field [" +
      JSON.stringify(r) + "].  Please separate it out to the `to." + n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
  }
  function G(t) {
    return t.filter(
      (t, e) => 0 === e || t.route.path && t.route.path.length > 0,
    );
  }
  function Z(t, e, n, r) {
    let i;
    void 0 === r && (r = !1),
      "string" === typeof t ? i = R(t) : (i = k({}, t),
        M(
          !i.pathname || !i.pathname.includes("?"),
          J("?", "pathname", "search", i),
        ),
        M(
          !i.pathname || !i.pathname.includes("#"),
          J("#", "pathname", "hash", i),
        ),
        M(!i.search || !i.search.includes("#"), J("#", "search", "hash", i)));
    let a, o = "" === t || "" === i.pathname, s = o ? "/" : i.pathname;
    if (null == s) a = n;
    else {
      let t = e.length - 1;
      if (!r && s.startsWith("..")) {
        let e = s.split("/");
        for (; ".." === e[0];) e.shift(), t -= 1;
        i.pathname = e.join("/");
      }
      a = t >= 0 ? e[t] : "/";
    }
    let l = function (t, e) {
        void 0 === e && (e = "/");
        let { pathname: n, search: r = "", hash: i = "" } =
            "string" === typeof t ? R(t) : t,
          a = n
            ? n.startsWith("/") ? n : function (t, e) {
              let n = e.replace(/\/+$/, "").split("/");
              return t.split("/").forEach((t) => {
                ".." === t ? n.length > 1 && n.pop() : "." !== t && n.push(t);
              }),
                n.length > 1 ? n.join("/") : "/";
            }(n, e)
            : e;
        return { pathname: a, search: nt(r), hash: rt(i) };
      }(i, a),
      c = s && "/" !== s && s.endsWith("/"),
      u = (o || "." === s) && n.endsWith("/");
    return l.pathname.endsWith("/") || !c && !u || (l.pathname += "/"), l;
  }
  const tt = (t) => t.join("/").replace(/\/\/+/g, "/"),
    et = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    nt = (t) => t && "?" !== t ? t.startsWith("?") ? t : "?" + t : "",
    rt = (t) => t && "#" !== t ? t.startsWith("#") ? t : "#" + t : "";
  Error;
  class it {
    constructor(t, e, n, r) {
      void 0 === r && (r = !1),
        this.status = t,
        this.statusText = e || "",
        this.internal = r,
        n instanceof Error
          ? (this.data = n.toString(), this.error = n)
          : this.data = n;
    }
  }
  function at(t) {
    return null != t && "number" === typeof t.status &&
      "string" === typeof t.statusText && "boolean" === typeof t.internal &&
      "data" in t;
  }
  const ot = ["post", "put", "patch", "delete"],
    st = new Set(ot),
    lt = ["get", ...ot],
    ct = new Set(lt),
    ut = new Set([301, 302, 303, 307, 308]),
    ht = new Set([307, 308]),
    dt = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
    },
    ft = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
    },
    pt = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0,
    },
    gt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    mt = (t) => ({ hasErrorBoundary: Boolean(t.hasErrorBoundary) }),
    bt = "remix-router-transitions";
  function yt(t) {
    const e = t.window
        ? t.window
        : "undefined" !== typeof window
        ? window
        : void 0,
      n = "undefined" !== typeof e && "undefined" !== typeof e.document &&
        "undefined" !== typeof e.document.createElement,
      r = !n;
    let i;
    if (
      M(
        t.routes.length > 0,
        "You must provide a non-empty routes array to createRouter",
      ), t.mapRouteProperties
    ) i = t.mapRouteProperties;
    else if (t.detectErrorBoundary) {
      let e = t.detectErrorBoundary;
      i = (t) => ({ hasErrorBoundary: e(t) });
    } else i = mt;
    let a,
      o,
      s,
      l = {},
      c = A(t.routes, i, void 0, l),
      u = t.basename || "/",
      h = t.dataStrategy || Pt,
      d = t.patchRoutesOnNavigation,
      f = k({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      }, t.future),
      p = null,
      g = new Set(),
      m = null,
      b = null,
      y = null,
      v = null != t.hydrationData,
      w = F(c, t.history.location, u),
      _ = null;
    if (null == w && !d) {
      let e = Ht(404, { pathname: t.history.location.pathname }),
        { matches: n, route: r } = Vt(c);
      w = n, _ = { [r.id]: e };
    }
    if (w && !t.hydrationData) {
      le(w, c, t.history.location.pathname).active && (w = null);
    }
    if (w) {
      if (w.some((t) => t.route.lazy)) o = !1;
      else if (w.some((t) => t.route.loader)) {
        if (f.v7_partialHydration) {
          let e = t.hydrationData ? t.hydrationData.loaderData : null,
            n = t.hydrationData ? t.hydrationData.errors : null;
          if (n) {
            let t = w.findIndex((t) => void 0 !== n[t.route.id]);
            o = w.slice(0, t + 1).every((t) => !kt(t.route, e, n));
          } else o = w.every((t) => !kt(t.route, e, n));
        } else o = null != t.hydrationData;
      } else o = !0;
    } else if (o = !1, w = [], f.v7_partialHydration) {
      let e = le(null, c, t.history.location.pathname);
      e.active && e.matches && (w = e.matches);
    }
    let S,
      C,
      T = {
        historyAction: t.history.action,
        location: t.history.location,
        matches: w,
        initialized: o,
        navigation: dt,
        restoreScrollPosition: null == t.hydrationData && null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: t.hydrationData && t.hydrationData.loaderData || {},
        actionData: t.hydrationData && t.hydrationData.actionData || null,
        errors: t.hydrationData && t.hydrationData.errors || _,
        fetchers: new Map(),
        blockers: new Map(),
      },
      R = x.Pop,
      O = !1,
      L = !1,
      z = new Map(),
      N = null,
      I = !1,
      B = !1,
      V = [],
      H = new Set(),
      U = new Map(),
      W = 0,
      $ = -1,
      q = new Map(),
      Y = new Set(),
      Q = new Map(),
      K = new Map(),
      J = new Set(),
      G = new Map(),
      Z = new Map();
    function tt(t, e) {
      void 0 === e && (e = {}), T = k({}, T, t);
      let n = [], r = [];
      f.v7_fetcherPersist && T.fetchers.forEach((t, e) => {
        "idle" === t.state && (J.has(e) ? r.push(e) : n.push(e));
      }),
        [...g].forEach(
          (t) =>
            t(T, {
              deletedFetchers: r,
              viewTransitionOpts: e.viewTransitionOpts,
              flushSync: !0 === e.flushSync,
            }),
        ),
        f.v7_fetcherPersist &&
        (n.forEach((t) => T.fetchers.delete(t)), r.forEach((t) => wt(t)));
    }
    function et(e, n, r) {
      var i, o;
      let s,
        { flushSync: l } = void 0 === r ? {} : r,
        u = null != T.actionData && null != T.navigation.formMethod &&
          Gt(T.navigation.formMethod) && "loading" === T.navigation.state &&
          !0 !== (null == (i = e.state) ? void 0 : i._isRedirect);
      s = n.actionData
        ? Object.keys(n.actionData).length > 0 ? n.actionData : null
        : u
        ? T.actionData
        : null;
      let h = n.loaderData
          ? Nt(T.loaderData, n.loaderData, n.matches || [], n.errors)
          : T.loaderData,
        d = T.blockers;
      d.size > 0 && (d = new Map(d), d.forEach((t, e) => d.set(e, pt)));
      let f,
        p = !0 === O ||
          null != T.navigation.formMethod && Gt(T.navigation.formMethod) &&
            !0 !== (null == (o = e.state) ? void 0 : o._isRedirect);
      if (
        a && (c = a, a = void 0),
          I || R === x.Pop ||
          (R === x.Push
            ? t.history.push(e, e.state)
            : R === x.Replace && t.history.replace(e, e.state)),
          R === x.Pop
      ) {
        let t = z.get(T.location.pathname);
        t && t.has(e.pathname)
          ? f = { currentLocation: T.location, nextLocation: e }
          : z.has(e.pathname) &&
            (f = { currentLocation: e, nextLocation: T.location });
      } else if (L) {
        let t = z.get(T.location.pathname);
        t
          ? t.add(e.pathname)
          : (t = new Set([e.pathname]), z.set(T.location.pathname, t)),
          f = { currentLocation: T.location, nextLocation: e };
      }
      tt(
        k({}, n, {
          actionData: s,
          loaderData: h,
          historyAction: R,
          location: e,
          initialized: !0,
          navigation: dt,
          revalidation: "idle",
          restoreScrollPosition: ne(e, n.matches || T.matches),
          preventScrollReset: p,
          blockers: d,
        }),
        { viewTransitionOpts: f, flushSync: !0 === l },
      ),
        R = x.Pop,
        O = !1,
        L = !1,
        I = !1,
        B = !1,
        V = [];
    }
    async function nt(e, n, r) {
      S && S.abort(),
        S = null,
        R = e,
        I = !0 === (r && r.startUninterruptedRevalidation),
        function (t, e) {
          if (m && y) {
            let n = Jt(t, e);
            m[n] = y();
          }
        }(T.location, T.matches),
        O = !0 === (r && r.preventScrollReset),
        L = !0 === (r && r.enableViewTransition);
      let i = a || c,
        o = r && r.overrideNavigation,
        s = F(i, n, u),
        l = !0 === (r && r.flushSync),
        h = le(s, i, n.pathname);
      if (h.active && h.matches && (s = h.matches), !s) {
        let { error: t, notFoundMatches: e, route: r } = Kt(n.pathname);
        return void et(
          n,
          { matches: e, loaderData: {}, errors: { [r.id]: t } },
          { flushSync: l },
        );
      }
      if (
        T.initialized && !B && function (t, e) {
          if (t.pathname !== e.pathname || t.search !== e.search) return !1;
          if ("" === t.hash) return "" !== e.hash;
          if (t.hash === e.hash) return !0;
          if ("" !== e.hash) return !0;
          return !1;
        }(T.location, n) && !(r && r.submission && Gt(r.submission.formMethod))
      ) return void et(n, { matches: s }, { flushSync: l });
      S = new AbortController();
      let d, p = Lt(t.history, n, S.signal, r && r.submission);
      if (r && r.pendingError) {
        d = [Bt(s).route.id, { type: D.error, error: r.pendingError }];
      } else if (r && r.submission && Gt(r.submission.formMethod)) {
        let e = await async function (t, e, n, r, i, a) {
          void 0 === a && (a = {});
          lt();
          let o,
            s = function (t, e) {
              let n = {
                state: "submitting",
                location: t,
                formMethod: e.formMethod,
                formAction: e.formAction,
                formEncType: e.formEncType,
                formData: e.formData,
                json: e.json,
                text: e.text,
              };
              return n;
            }(e, n);
          if (tt({ navigation: s }, { flushSync: !0 === a.flushSync }), i) {
            let n = await ce(r, e.pathname, t.signal);
            if ("aborted" === n.type) return { shortCircuited: !0 };
            if ("error" === n.type) {
              let t = Bt(n.partialMatches).route.id;
              return {
                matches: n.partialMatches,
                pendingActionResult: [t, { type: D.error, error: n.error }],
              };
            }
            if (!n.matches) {
              let { notFoundMatches: t, error: n, route: r } = Kt(e.pathname);
              return {
                matches: t,
                pendingActionResult: [r.id, { type: D.error, error: n }],
              };
            }
            r = n.matches;
          }
          let l = re(r, e);
          if (l.route.action || l.route.lazy) {
            if (
              o = (await ot("action", T, t, [l], r, null))[l.route.id],
                t.signal.aborted
            ) return { shortCircuited: !0 };
          } else {o = {
              type: D.error,
              error: Ht(405, {
                method: t.method,
                pathname: e.pathname,
                routeId: l.route.id,
              }),
            };}
          if (Qt(o)) {
            let e;
            if (a && null != a.replace) e = a.replace;
            else {e =
                Dt(o.response.headers.get("Location"), new URL(t.url), u) ===
                  T.location.pathname + T.location.search;}
            return await it(t, o, !0, { submission: n, replace: e }),
              { shortCircuited: !0 };
          }
          if (qt(o)) throw Ht(400, { type: "defer-action" });
          if (Yt(o)) {
            let t = Bt(r, l.route.id);
            return !0 !== (a && a.replace) && (R = x.Push),
              { matches: r, pendingActionResult: [t.route.id, o] };
          }
          return { matches: r, pendingActionResult: [l.route.id, o] };
        }(p, n, r.submission, s, h.active, {
          replace: r.replace,
          flushSync: l,
        });
        if (e.shortCircuited) return;
        if (e.pendingActionResult) {
          let [t, r] = e.pendingActionResult;
          if (Yt(r) && at(r.error) && 404 === r.error.status) {
            return S = null,
              void et(n, {
                matches: e.matches,
                loaderData: {},
                errors: { [t]: r.error },
              });
          }
        }
        s = e.matches || s,
          d = e.pendingActionResult,
          o = ae(n, r.submission),
          l = !1,
          h.active = !1,
          p = Lt(t.history, p.url, p.signal);
      }
      let { shortCircuited: g, matches: b, loaderData: v, errors: w } =
        await async function (e, n, r, i, o, s, l, h, d, p, g) {
          let m = o || ae(n, s),
            b = s || l || ie(m),
            y = !I && (!f.v7_partialHydration || !d);
          if (i) {
            if (y) {
              let t = rt(g);
              tt(k({ navigation: m }, void 0 !== t ? { actionData: t } : {}), {
                flushSync: p,
              });
            }
            let t = await ce(r, n.pathname, e.signal);
            if ("aborted" === t.type) return { shortCircuited: !0 };
            if ("error" === t.type) {
              let e = Bt(t.partialMatches).route.id;
              return {
                matches: t.partialMatches,
                loaderData: {},
                errors: { [e]: t.error },
              };
            }
            if (!t.matches) {
              let { error: t, notFoundMatches: e, route: r } = Kt(n.pathname);
              return { matches: e, loaderData: {}, errors: { [r.id]: t } };
            }
            r = t.matches;
          }
          let v = a || c,
            [x, w] = _t(
              t.history,
              T,
              r,
              b,
              n,
              f.v7_partialHydration && !0 === d,
              f.v7_skipActionErrorRevalidation,
              B,
              V,
              H,
              J,
              Q,
              Y,
              v,
              u,
              g,
            );
          if (
            Xt((t) =>
              !(r && r.some((e) => e.route.id === t)) ||
              x && x.some((e) => e.route.id === t)
            ),
              $ = ++W,
              0 === x.length && 0 === w.length
          ) {
            let t = Ct();
            return et(
              n,
              k(
                {
                  matches: r,
                  loaderData: {},
                  errors: g && Yt(g[1]) ? { [g[0]]: g[1].error } : null,
                },
                It(g),
                t ? { fetchers: new Map(T.fetchers) } : {},
              ),
              { flushSync: p },
            ),
              { shortCircuited: !0 };
          }
          if (y) {
            let t = {};
            if (!i) {
              t.navigation = m;
              let e = rt(g);
              void 0 !== e && (t.actionData = e);
            }
            w.length > 0 && (t.fetchers = function (t) {
              return t.forEach((t) => {
                let e = T.fetchers.get(t.key),
                  n = oe(void 0, e ? e.data : void 0);
                T.fetchers.set(t.key, n);
              }),
                new Map(T.fetchers);
            }(w)), tt(t, { flushSync: p });
          }
          w.forEach((t) => {
            St(t.key), t.controller && U.set(t.key, t.controller);
          });
          let _ = () => w.forEach((t) => St(t.key));
          S && S.signal.addEventListener("abort", _);
          let { loaderResults: M, fetcherResults: E } = await st(T, r, x, w, e);
          if (e.signal.aborted) return { shortCircuited: !0 };
          S && S.signal.removeEventListener("abort", _);
          w.forEach((t) => U.delete(t.key));
          let C = Ut(M);
          if (C) {
            return await it(e, C.result, !0, { replace: h }),
              { shortCircuited: !0 };
          }
          if (C = Ut(E), C) {
            return Y.add(C.key),
              await it(e, C.result, !0, { replace: h }),
              { shortCircuited: !0 };
          }
          let { loaderData: P, errors: R } = zt(T, r, M, g, w, E, G);
          G.forEach((t, e) => {
            t.subscribe((n) => {
              (n || t.done) && G.delete(e);
            });
          }),
            f.v7_partialHydration && d && T.errors && (R = k({}, T.errors, R));
          let O = Ct(), D = At($), L = O || D || w.length > 0;
          return k(
            { matches: r, loaderData: P, errors: R },
            L ? { fetchers: new Map(T.fetchers) } : {},
          );
        }(
          p,
          n,
          s,
          h.active,
          o,
          r && r.submission,
          r && r.fetcherSubmission,
          r && r.replace,
          r && !0 === r.initialHydration,
          l,
          d,
        );
      g ||
        (S = null,
          et(n, k({ matches: b || s }, It(d), { loaderData: v, errors: w })));
    }
    function rt(t) {
      return t && !Yt(t[1])
        ? { [t[0]]: t[1].data }
        : T.actionData
        ? 0 === Object.keys(T.actionData).length ? null : T.actionData
        : void 0;
    }
    async function it(r, i, a, o) {
      let {
        submission: s,
        fetcherSubmission: l,
        preventScrollReset: c,
        replace: h,
      } = void 0 === o ? {} : o;
      i.response.headers.has("X-Remix-Revalidate") && (B = !0);
      let d = i.response.headers.get("Location");
      M(d, "Expected a Location header on the redirect Response"),
        d = Dt(d, new URL(r.url), u);
      let f = P(T.location, d, { _isRedirect: !0 });
      if (n) {
        let n = !1;
        if (i.response.headers.has("X-Remix-Reload-Document")) n = !0;
        else if (gt.test(d)) {
          const r = t.history.createURL(d);
          n = r.origin !== e.location.origin || null == X(r.pathname, u);
        }
        if (n) return void (h ? e.location.replace(d) : e.location.assign(d));
      }
      S = null;
      let p = !0 === h || i.response.headers.has("X-Remix-Replace")
          ? x.Replace
          : x.Push,
        { formMethod: g, formAction: m, formEncType: b } = T.navigation;
      !s && !l && g && m && b && (s = ie(T.navigation));
      let y = s || l;
      if (ht.has(i.response.status) && y && Gt(y.formMethod)) {
        await nt(p, f, {
          submission: k({}, y, { formAction: d }),
          preventScrollReset: c || O,
          enableViewTransition: a ? L : void 0,
        });
      } else {
        let t = ae(f, s);
        await nt(p, f, {
          overrideNavigation: t,
          fetcherSubmission: l,
          preventScrollReset: c || O,
          enableViewTransition: a ? L : void 0,
        });
      }
    }
    async function ot(t, e, n, r, a, o) {
      let s, c = {};
      try {
        s = await Tt(h, t, e, n, r, a, o, l, i);
      } catch (d) {
        return r.forEach((t) => {
          c[t.route.id] = { type: D.error, error: d };
        }),
          c;
      }
      for (let [i, l] of Object.entries(s)) {
        if ($t(l)) {
          let t = l.result;
          c[i] = {
            type: D.redirect,
            response: Ot(t, n, i, a, u, f.v7_relativeSplatPath),
          };
        } else c[i] = await Rt(l);
      }
      return c;
    }
    async function st(e, n, r, i, a) {
      let o = e.matches,
        s = ot("loader", e, a, r, n, null),
        l = Promise.all(i.map(async (n) => {
          if (n.matches && n.match && n.controller) {
            let r = (await ot(
              "loader",
              e,
              Lt(t.history, n.path, n.controller.signal),
              [n.match],
              n.matches,
              n.key,
            ))[n.match.route.id];
            return { [n.key]: r };
          }
          return Promise.resolve({
            [n.key]: { type: D.error, error: Ht(404, { pathname: n.path }) },
          });
        })),
        c = await s,
        u = (await l).reduce((t, e) => Object.assign(t, e), {});
      return await Promise.all([
        Zt(n, c, a.signal, o, e.loaderData),
        te(n, u, i),
      ]),
        { loaderResults: c, fetcherResults: u };
    }
    function lt() {
      B = !0,
        V.push(...Xt()),
        Q.forEach((t, e) => {
          U.has(e) && H.add(e), St(e);
        });
    }
    function ct(t, e, n) {
      void 0 === n && (n = {}),
        T.fetchers.set(t, e),
        tt({ fetchers: new Map(T.fetchers) }, {
          flushSync: !0 === (n && n.flushSync),
        });
    }
    function ut(t, e, n, r) {
      void 0 === r && (r = {});
      let i = Bt(T.matches, e);
      wt(t),
        tt({ errors: { [i.route.id]: n }, fetchers: new Map(T.fetchers) }, {
          flushSync: !0 === (r && r.flushSync),
        });
    }
    function yt(t) {
      return f.v7_fetcherPersist &&
        (K.set(t, (K.get(t) || 0) + 1), J.has(t) && J.delete(t)),
        T.fetchers.get(t) || ft;
    }
    function wt(t) {
      let e = T.fetchers.get(t);
      !U.has(t) || e && "loading" === e.state && q.has(t) || St(t),
        Q.delete(t),
        q.delete(t),
        Y.delete(t),
        J.delete(t),
        H.delete(t),
        T.fetchers.delete(t);
    }
    function St(t) {
      let e = U.get(t);
      e && (e.abort(), U.delete(t));
    }
    function Mt(t) {
      for (let e of t) {
        let t = se(yt(e).data);
        T.fetchers.set(e, t);
      }
    }
    function Ct() {
      let t = [], e = !1;
      for (let n of Y) {
        let r = T.fetchers.get(n);
        M(r, "Expected fetcher: " + n),
          "loading" === r.state && (Y.delete(n), t.push(n), e = !0);
      }
      return Mt(t), e;
    }
    function At(t) {
      let e = [];
      for (let [n, r] of q) {
        if (r < t) {
          let t = T.fetchers.get(n);
          M(t, "Expected fetcher: " + n),
            "loading" === t.state && (St(n), q.delete(n), e.push(n));
        }
      }
      return Mt(e), e.length > 0;
    }
    function Ft(t) {
      T.blockers.delete(t), Z.delete(t);
    }
    function jt(t, e) {
      let n = T.blockers.get(t) || pt;
      M(
        "unblocked" === n.state && "blocked" === e.state ||
          "blocked" === n.state && "blocked" === e.state ||
          "blocked" === n.state && "proceeding" === e.state ||
          "blocked" === n.state && "unblocked" === e.state ||
          "proceeding" === n.state && "unblocked" === e.state,
        "Invalid blocker state transition: " + n.state + " -> " + e.state,
      );
      let r = new Map(T.blockers);
      r.set(t, e), tt({ blockers: r });
    }
    function Wt(t) {
      let { currentLocation: e, nextLocation: n, historyAction: r } = t;
      if (0 === Z.size) return;
      Z.size > 1 && E(!1, "A router only supports one blocker at a time");
      let i = Array.from(Z.entries()),
        [a, o] = i[i.length - 1],
        s = T.blockers.get(a);
      return s && "proceeding" === s.state
        ? void 0
        : o({ currentLocation: e, nextLocation: n, historyAction: r })
        ? a
        : void 0;
    }
    function Kt(t) {
      let e = Ht(404, { pathname: t }),
        n = a || c,
        { matches: r, route: i } = Vt(n);
      return Xt(), { notFoundMatches: r, route: i, error: e };
    }
    function Xt(t) {
      let e = [];
      return G.forEach((n, r) => {
        t && !t(r) || (n.cancel(), e.push(r), G.delete(r));
      }),
        e;
    }
    function Jt(t, e) {
      if (b) {
        return b(
          t,
          e.map((t) =>
            function (t, e) {
              let { route: n, pathname: r, params: i } = t;
              return {
                id: n.id,
                pathname: r,
                params: i,
                data: e[n.id],
                handle: n.handle,
              };
            }(t, T.loaderData)
          ),
        ) || t.key;
      }
      return t.key;
    }
    function ne(t, e) {
      if (m) {
        let n = Jt(t, e), r = m[n];
        if ("number" === typeof r) return r;
      }
      return null;
    }
    function le(t, e, n) {
      if (d) {
        if (!t) return { active: !0, matches: j(e, n, u, !0) || [] };
        if (Object.keys(t[0].params).length > 0) {
          return { active: !0, matches: j(e, n, u, !0) };
        }
      }
      return { active: !1, matches: null };
    }
    async function ce(t, e, n) {
      if (!d) return { type: "success", matches: t };
      let r = t;
      for (;;) {
        let t = null == a, s = a || c, h = l;
        try {
          await d({
            path: e,
            matches: r,
            patch: (t, e) => {
              n.aborted || Et(t, e, s, h, i);
            },
          });
        } catch (o) {
          return { type: "error", error: o, partialMatches: r };
        } finally {
          t && !n.aborted && (c = [...c]);
        }
        if (n.aborted) return { type: "aborted" };
        let f = F(s, e, u);
        if (f) return { type: "success", matches: f };
        let p = j(s, e, u, !0);
        if (
          !p ||
          r.length === p.length &&
            r.every((t, e) => t.route.id === p[e].route.id)
        ) return { type: "success", matches: null };
        r = p;
      }
    }
    return s = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return T;
      },
      get routes() {
        return c;
      },
      get window() {
        return e;
      },
      initialize: function () {
        if (
          p = t.history.listen((e) => {
            let { action: n, location: r, delta: i } = e;
            if (C) return C(), void (C = void 0);
            E(
              0 === Z.size || null != i,
              "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
            );
            let a = Wt({
              currentLocation: T.location,
              nextLocation: r,
              historyAction: n,
            });
            if (a && null != i) {
              let e = new Promise((t) => {
                C = t;
              });
              return t.history.go(-1 * i),
                void jt(a, {
                  state: "blocked",
                  location: r,
                  proceed() {
                    jt(a, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: r,
                    }), e.then(() => t.history.go(i));
                  },
                  reset() {
                    let t = new Map(T.blockers);
                    t.set(a, pt), tt({ blockers: t });
                  },
                });
            }
            return nt(n, r);
          }), n
        ) {
          !function (t, e) {
            try {
              let n = t.sessionStorage.getItem(bt);
              if (n) {
                let t = JSON.parse(n);
                for (let [n, r] of Object.entries(t || {})) {
                  r && Array.isArray(r) && e.set(n, new Set(r || []));
                }
              }
            } catch (n) {}
          }(e, z);
          let t = () =>
            function (t, e) {
              if (e.size > 0) {
                let r = {};
                for (let [t, n] of e) r[t] = [...n];
                try {
                  t.sessionStorage.setItem(bt, JSON.stringify(r));
                } catch (n) {
                  E(
                    !1,
                    "Failed to save applied view transitions in sessionStorage (" +
                      n + ").",
                  );
                }
              }
            }(e, z);
          e.addEventListener("pagehide", t),
            N = () => e.removeEventListener("pagehide", t);
        }
        return T.initialized || nt(x.Pop, T.location, { initialHydration: !0 }),
          s;
      },
      subscribe: function (t) {
        return g.add(t), () => g.delete(t);
      },
      enableScrollRestoration: function (t, e, n) {
        if (m = t, y = e, b = n || null, !v && T.navigation === dt) {
          v = !0;
          let t = ne(T.location, T.matches);
          null != t && tt({ restoreScrollPosition: t });
        }
        return () => {
          m = null, y = null, b = null;
        };
      },
      navigate: async function e(n, r) {
        if ("number" === typeof n) return void t.history.go(n);
        let i = vt(
            T.location,
            T.matches,
            u,
            f.v7_prependBasename,
            n,
            f.v7_relativeSplatPath,
            null == r ? void 0 : r.fromRouteId,
            null == r ? void 0 : r.relative,
          ),
          { path: a, submission: o, error: s } = xt(
            f.v7_normalizeFormMethod,
            !1,
            i,
            r,
          ),
          l = T.location,
          c = P(T.location, a, r && r.state);
        c = k({}, c, t.history.encodeLocation(c));
        let h = r && null != r.replace ? r.replace : void 0, d = x.Push;
        !0 === h ? d = x.Replace : !1 === h ||
          null != o && Gt(o.formMethod) &&
            o.formAction === T.location.pathname + T.location.search &&
            (d = x.Replace);
        let p = r && "preventScrollReset" in r
            ? !0 === r.preventScrollReset
            : void 0,
          g = !0 === (r && r.flushSync),
          m = Wt({ currentLocation: l, nextLocation: c, historyAction: d });
        if (!m) {
          return await nt(d, c, {
            submission: o,
            pendingError: s,
            preventScrollReset: p,
            replace: r && r.replace,
            enableViewTransition: r && r.viewTransition,
            flushSync: g,
          });
        }
        jt(m, {
          state: "blocked",
          location: c,
          proceed() {
            jt(m, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: c,
            }), e(n, r);
          },
          reset() {
            let t = new Map(T.blockers);
            t.set(m, pt), tt({ blockers: t });
          },
        });
      },
      fetch: function (e, n, i, o) {
        if (r) {
          throw new Error(
            "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
          );
        }
        St(e);
        let s = !0 === (o && o.flushSync),
          l = a || c,
          h = vt(
            T.location,
            T.matches,
            u,
            f.v7_prependBasename,
            i,
            f.v7_relativeSplatPath,
            n,
            null == o ? void 0 : o.relative,
          ),
          d = F(l, h, u),
          p = le(d, l, h);
        if (p.active && p.matches && (d = p.matches), !d) {
          return void ut(e, n, Ht(404, { pathname: h }), { flushSync: s });
        }
        let { path: g, submission: m, error: b } = xt(
          f.v7_normalizeFormMethod,
          !0,
          h,
          o,
        );
        if (b) return void ut(e, n, b, { flushSync: s });
        let y = re(d, g), v = !0 === (o && o.preventScrollReset);
        m && Gt(m.formMethod)
          ? async function (e, n, r, i, o, s, l, h, d) {
            function p(t) {
              if (!t.route.action && !t.route.lazy) {
                let t = Ht(405, {
                  method: d.formMethod,
                  pathname: r,
                  routeId: n,
                });
                return ut(e, n, t, { flushSync: l }), !0;
              }
              return !1;
            }
            if (lt(), Q.delete(e), !s && p(i)) return;
            let g = T.fetchers.get(e);
            ct(
              e,
              function (t, e) {
                let n = {
                  state: "submitting",
                  formMethod: t.formMethod,
                  formAction: t.formAction,
                  formEncType: t.formEncType,
                  formData: t.formData,
                  json: t.json,
                  text: t.text,
                  data: e ? e.data : void 0,
                };
                return n;
              }(d, g),
              { flushSync: l },
            );
            let m = new AbortController(), b = Lt(t.history, r, m.signal, d);
            if (s) {
              let t = await ce(o, r, b.signal);
              if ("aborted" === t.type) return;
              if ("error" === t.type) {
                return void ut(e, n, t.error, {
                  flushSync: l,
                });
              }
              if (!t.matches) {
                return void ut(e, n, Ht(404, { pathname: r }), {
                  flushSync: l,
                });
              }
              if (p(i = re(o = t.matches, r))) return;
            }
            U.set(e, m);
            let y = W,
              v = await ot("action", T, b, [i], o, e),
              x = v[i.route.id];
            if (b.signal.aborted) return void (U.get(e) === m && U.delete(e));
            if (f.v7_fetcherPersist && J.has(e)) {
              if (Qt(x) || Yt(x)) {
                return void ct(e, se(void 0));
              }
            } else {
              if (Qt(x)) {
                return U.delete(e),
                  $ > y
                    ? void ct(e, se(void 0))
                    : (Y.add(e),
                      ct(e, oe(d)),
                      it(b, x, !1, {
                        fetcherSubmission: d,
                        preventScrollReset: h,
                      }));
              }
              if (Yt(x)) return void ut(e, n, x.error);
            }
            if (qt(x)) throw Ht(400, { type: "defer-action" });
            let w = T.navigation.location || T.location,
              _ = Lt(t.history, w, m.signal),
              k = a || c,
              E = "idle" !== T.navigation.state
                ? F(k, T.navigation.location, u)
                : T.matches;
            M(E, "Didn't find any matches after fetcher action");
            let C = ++W;
            q.set(e, C);
            let P = oe(d, x.data);
            T.fetchers.set(e, P);
            let [O, D] = _t(
              t.history,
              T,
              E,
              d,
              w,
              !1,
              f.v7_skipActionErrorRevalidation,
              B,
              V,
              H,
              J,
              Q,
              Y,
              k,
              u,
              [i.route.id, x],
            );
            D.filter((t) => t.key !== e).forEach((t) => {
              let e = t.key,
                n = T.fetchers.get(e),
                r = oe(void 0, n ? n.data : void 0);
              T.fetchers.set(e, r),
                St(e),
                t.controller && U.set(e, t.controller);
            }), tt({ fetchers: new Map(T.fetchers) });
            let L = () => D.forEach((t) => St(t.key));
            m.signal.addEventListener("abort", L);
            let { loaderResults: A, fetcherResults: j } = await st(
              T,
              E,
              O,
              D,
              _,
            );
            if (m.signal.aborted) return;
            m.signal.removeEventListener("abort", L),
              q.delete(e),
              U.delete(e),
              D.forEach((t) => U.delete(t.key));
            let z = Ut(A);
            if (z) return it(_, z.result, !1, { preventScrollReset: h });
            if (z = Ut(j), z) {
              return Y.add(z.key),
                it(_, z.result, !1, { preventScrollReset: h });
            }
            let { loaderData: N, errors: I } = zt(T, E, A, void 0, D, j, G);
            if (T.fetchers.has(e)) {
              let t = se(x.data);
              T.fetchers.set(e, t);
            }
            At(C),
              "loading" === T.navigation.state && C > $
                ? (M(R, "Expected pending action"),
                  S && S.abort(),
                  et(T.navigation.location, {
                    matches: E,
                    loaderData: N,
                    errors: I,
                    fetchers: new Map(T.fetchers),
                  }))
                : (tt({
                  errors: I,
                  loaderData: Nt(T.loaderData, N, E, I),
                  fetchers: new Map(T.fetchers),
                }),
                  B = !1);
          }(e, n, g, y, d, p.active, s, v, m)
          : (Q.set(e, { routeId: n, path: g }),
            async function (e, n, r, i, a, o, s, l, c) {
              let u = T.fetchers.get(e);
              ct(e, oe(c, u ? u.data : void 0), { flushSync: s });
              let h = new AbortController(), d = Lt(t.history, r, h.signal);
              if (o) {
                let t = await ce(a, r, d.signal);
                if ("aborted" === t.type) return;
                if ("error" === t.type) {
                  return void ut(e, n, t.error, { flushSync: s });
                }
                if (!t.matches) {
                  return void ut(e, n, Ht(404, { pathname: r }), {
                    flushSync: s,
                  });
                }
                i = re(a = t.matches, r);
              }
              U.set(e, h);
              let f = W,
                p = await ot("loader", T, d, [i], a, e),
                g = p[i.route.id];
              qt(g) && (g = await ee(g, d.signal, !0) || g);
              U.get(e) === h && U.delete(e);
              if (d.signal.aborted) return;
              if (J.has(e)) return void ct(e, se(void 0));
              if (Qt(g)) {
                return $ > f
                  ? void ct(e, se(void 0))
                  : (Y.add(e),
                    void await it(d, g, !1, { preventScrollReset: l }));
              }
              if (Yt(g)) return void ut(e, n, g.error);
              M(!qt(g), "Unhandled fetcher deferred data"), ct(e, se(g.data));
            }(e, n, g, y, d, p.active, s, v, m));
      },
      revalidate: function () {
        lt(),
          tt({ revalidation: "loading" }),
          "submitting" !== T.navigation.state &&
          ("idle" !== T.navigation.state
            ? nt(R || T.historyAction, T.navigation.location, {
              overrideNavigation: T.navigation,
              enableViewTransition: !0 === L,
            })
            : nt(T.historyAction, T.location, {
              startUninterruptedRevalidation: !0,
            }));
      },
      createHref: (e) => t.history.createHref(e),
      encodeLocation: (e) => t.history.encodeLocation(e),
      getFetcher: yt,
      deleteFetcher: function (t) {
        if (f.v7_fetcherPersist) {
          let e = (K.get(t) || 0) - 1;
          e <= 0 ? (K.delete(t), J.add(t)) : K.set(t, e);
        } else wt(t);
        tt({ fetchers: new Map(T.fetchers) });
      },
      dispose: function () {
        p && p(),
          N && N(),
          g.clear(),
          S && S.abort(),
          T.fetchers.forEach((t, e) => wt(e)),
          T.blockers.forEach((t, e) => Ft(e));
      },
      getBlocker: function (t, e) {
        let n = T.blockers.get(t) || pt;
        return Z.get(t) !== e && Z.set(t, e), n;
      },
      deleteBlocker: Ft,
      patchRoutes: function (t, e) {
        let n = null == a;
        Et(t, e, a || c, l, i), n && (c = [...c], tt({}));
      },
      _internalFetchControllers: U,
      _internalActiveDeferreds: G,
      _internalSetRoutes: function (t) {
        l = {}, a = A(t, i, void 0, l);
      },
    },
      s;
  }
  Symbol("deferred");
  function vt(t, e, n, r, i, a, o, s) {
    let l, c;
    if (o) {
      l = [];
      for (let t of e) {
        if (l.push(t), t.route.id === o) {
          c = t;
          break;
        }
      }
    } else l = e, c = e[e.length - 1];
    let u = Z(
      i || ".",
      function (t, e) {
        let n = G(t);
        return e
          ? n.map((t, e) => e === n.length - 1 ? t.pathname : t.pathnameBase)
          : n.map((t) => t.pathnameBase);
      }(l, a),
      X(t.pathname, n) || t.pathname,
      "path" === s,
    );
    if (
      null == i && (u.search = t.search, u.hash = t.hash),
        (null == i || "" === i || "." === i) && c
    ) {
      let t = ne(u.search);
      if (c.route.index && !t) {
        u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index";
      } else if (!c.route.index && t) {
        let t = new URLSearchParams(u.search), e = t.getAll("index");
        t.delete("index"),
          e.filter((t) => t).forEach((e) => t.append("index", e));
        let n = t.toString();
        u.search = n ? "?" + n : "";
      }
    }
    return r && "/" !== n &&
      (u.pathname = "/" === u.pathname ? n : tt([n, u.pathname])),
      T(u);
  }
  function xt(t, e, n, r) {
    if (
      !r || !function (t) {
        return null != t &&
          ("formData" in t && null != t.formData ||
            "body" in t && void 0 !== t.body);
      }(r)
    ) return { path: n };
    if (r.formMethod && !Jt(r.formMethod)) {
      return { path: n, error: Ht(405, { method: r.formMethod }) };
    }
    let i,
      a,
      o = () => ({ path: n, error: Ht(400, { type: "invalid-body" }) }),
      s = r.formMethod || "get",
      l = t ? s.toUpperCase() : s.toLowerCase(),
      c = Wt(n);
    if (void 0 !== r.body) {
      if ("text/plain" === r.formEncType) {
        if (!Gt(l)) return o();
        let t = "string" === typeof r.body
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((t, e) => {
            let [n, r] = e;
            return "" + t + n + "=" + r + "\n";
          }, "")
          : String(r.body);
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: void 0,
            text: t,
          },
        };
      }
      if ("application/json" === r.formEncType) {
        if (!Gt(l)) return o();
        try {
          let t = "string" === typeof r.body ? JSON.parse(r.body) : r.body;
          return {
            path: n,
            submission: {
              formMethod: l,
              formAction: c,
              formEncType: r.formEncType,
              formData: void 0,
              json: t,
              text: void 0,
            },
          };
        } catch (d) {
          return o();
        }
      }
    }
    if (
      M(
        "function" === typeof FormData,
        "FormData is not available in this environment",
      ), r.formData
    ) i = At(r.formData), a = r.formData;
    else if (r.body instanceof FormData) i = At(r.body), a = r.body;
    else if (r.body instanceof URLSearchParams) i = r.body, a = Ft(i);
    else if (null == r.body) i = new URLSearchParams(), a = new FormData();
    else {try {
        i = new URLSearchParams(r.body), a = Ft(i);
      } catch (d) {
        return o();
      }}
    let u = {
      formMethod: l,
      formAction: c,
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: a,
      json: void 0,
      text: void 0,
    };
    if (Gt(u.formMethod)) return { path: n, submission: u };
    let h = R(n);
    return e && h.search && ne(h.search) && i.append("index", ""),
      h.search = "?" + i,
      { path: T(h), submission: u };
  }
  function wt(t, e, n) {
    void 0 === n && (n = !1);
    let r = t.findIndex((t) => t.route.id === e);
    return r >= 0 ? t.slice(0, n ? r + 1 : r) : t;
  }
  function _t(t, e, n, r, i, a, o, s, l, c, u, h, d, f, p, g) {
    let m = g ? Yt(g[1]) ? g[1].error : g[1].data : void 0,
      b = t.createURL(e.location),
      y = t.createURL(i),
      v = n;
    a && e.errors
      ? v = wt(n, Object.keys(e.errors)[0], !0)
      : g && Yt(g[1]) && (v = wt(n, g[0]));
    let x = g ? g[1].statusCode : void 0,
      w = o && x && x >= 400,
      _ = v.filter((t, n) => {
        let { route: i } = t;
        if (i.lazy) return !0;
        if (null == i.loader) return !1;
        if (a) return kt(i, e.loaderData, e.errors);
        if (
          function (t, e, n) {
            let r = !e || n.route.id !== e.route.id,
              i = void 0 === t[n.route.id];
            return r || i;
          }(e.loaderData, e.matches[n], t) || l.some((e) => e === t.route.id)
        ) return !0;
        let o = e.matches[n], c = t;
        return Mt(
          t,
          k(
            {
              currentUrl: b,
              currentParams: o.params,
              nextUrl: y,
              nextParams: c.params,
            },
            r,
            {
              actionResult: m,
              actionStatus: x,
              defaultShouldRevalidate: !w &&
                (s || b.pathname + b.search === y.pathname + y.search ||
                  b.search !== y.search || St(o, c)),
            },
          ),
        );
      }),
      S = [];
    return h.forEach((t, i) => {
      if (a || !n.some((e) => e.route.id === t.routeId) || u.has(i)) return;
      let o = F(f, t.path, p);
      if (!o) {
        return void S.push({
          key: i,
          routeId: t.routeId,
          path: t.path,
          matches: null,
          match: null,
          controller: null,
        });
      }
      let l = e.fetchers.get(i), h = re(o, t.path), g = !1;
      d.has(i)
        ? g = !1
        : c.has(i)
        ? (c.delete(i), g = !0)
        : g = l && "idle" !== l.state && void 0 === l.data ? s : Mt(
          h,
          k(
            {
              currentUrl: b,
              currentParams: e.matches[e.matches.length - 1].params,
              nextUrl: y,
              nextParams: n[n.length - 1].params,
            },
            r,
            {
              actionResult: m,
              actionStatus: x,
              defaultShouldRevalidate: !w && s,
            },
          ),
        ),
        g &&
        S.push({
          key: i,
          routeId: t.routeId,
          path: t.path,
          matches: o,
          match: h,
          controller: new AbortController(),
        });
    }),
      [_, S];
  }
  function kt(t, e, n) {
    if (t.lazy) return !0;
    if (!t.loader) return !1;
    let r = null != e && void 0 !== e[t.id],
      i = null != n && void 0 !== n[t.id];
    return !(!r && i) &&
      ("function" === typeof t.loader && !0 === t.loader.hydrate || !r && !i);
  }
  function St(t, e) {
    let n = t.route.path;
    return t.pathname !== e.pathname ||
      null != n && n.endsWith("*") && t.params["*"] !== e.params["*"];
  }
  function Mt(t, e) {
    if (t.route.shouldRevalidate) {
      let n = t.route.shouldRevalidate(e);
      if ("boolean" === typeof n) return n;
    }
    return e.defaultShouldRevalidate;
  }
  function Et(t, e, n, r, i) {
    var a;
    let o;
    if (t) {
      let e = r[t];
      M(e, "No route found to patch children into: routeId = " + t),
        e.children || (e.children = []),
        o = e.children;
    } else o = n;
    let s = A(e.filter((t) => !o.some((e) => Ct(t, e))), i, [
      t || "_",
      "patch",
      String((null == (a = o) ? void 0 : a.length) || "0"),
    ], r);
    o.push(...s);
  }
  function Ct(t, e) {
    return "id" in t && "id" in e && t.id === e.id ||
      t.index === e.index && t.path === e.path &&
        t.caseSensitive === e.caseSensitive &&
        (!(t.children && 0 !== t.children.length ||
          e.children && 0 !== e.children.length) || t.children.every((t, n) => {
            var r;
            return null == (r = e.children) ? void 0 : r.some((e) => Ct(t, e));
          }));
  }
  async function Pt(t) {
    let { matches: e } = t, n = e.filter((t) => t.shouldLoad);
    return (await Promise.all(n.map((t) => t.resolve()))).reduce(
      (t, e, r) => Object.assign(t, { [n[r].route.id]: e }),
      {},
    );
  }
  async function Tt(t, e, n, r, i, a, o, s, l, c) {
    let u = a.map((t) =>
        t.route.lazy
          ? async function (t, e, n) {
            if (!t.lazy) return;
            let r = await t.lazy();
            if (!t.lazy) return;
            let i = n[t.id];
            M(i, "No route found in manifest");
            let a = {};
            for (let o in r) {
              let t = void 0 !== i[o] && "hasErrorBoundary" !== o;
              E(
                !t,
                'Route "' + i.id + '" has a static property "' + o +
                  '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                  o + '" will be ignored.',
              ), t || L.has(o) || (a[o] = r[o]);
            }
            Object.assign(i, a),
              Object.assign(i, k({}, e(i), { lazy: void 0 }));
          }(t.route, l, s)
          : void 0
      ),
      h = a.map((t, n) => {
        let a = u[n], o = i.some((e) => e.route.id === t.route.id);
        return k({}, t, {
          shouldLoad: o,
          resolve: async (n) => (n && "GET" === r.method &&
            (t.route.lazy || t.route.loader) && (o = !0),
            o
              ? async function (t, e, n, r, i, a) {
                let o,
                  s,
                  l = (r) => {
                    let o, l = new Promise((t, e) => o = e);
                    s = () => o(), e.signal.addEventListener("abort", s);
                    let c = (i) =>
                        "function" !== typeof r
                          ? Promise.reject(
                            new Error(
                              'You cannot call the handler for a route which defines a boolean "' +
                                t + '" [routeId: ' + n.route.id + "]",
                            ),
                          )
                          : r(
                            { request: e, params: n.params, context: a },
                            ...void 0 !== i ? [i] : [],
                          ),
                      u = (async () => {
                        try {
                          return {
                            type: "data",
                            result: await (i ? i((t) => c(t)) : c()),
                          };
                        } catch (t) {
                          return { type: "error", result: t };
                        }
                      })();
                    return Promise.race([u, l]);
                  };
                try {
                  let i = n.route[t];
                  if (r) {
                    if (i) {
                      let t,
                        [e] = await Promise.all([
                          l(i).catch((e) => {
                            t = e;
                          }),
                          r,
                        ]);
                      if (void 0 !== t) throw t;
                      o = e;
                    } else {
                      if (await r, i = n.route[t], !i) {
                        if ("action" === t) {
                          let t = new URL(e.url), r = t.pathname + t.search;
                          throw Ht(405, {
                            method: e.method,
                            pathname: r,
                            routeId: n.route.id,
                          });
                        }
                        return { type: D.data, result: void 0 };
                      }
                      o = await l(i);
                    }
                  } else {
                    if (!i) {
                      let t = new URL(e.url);
                      throw Ht(404, { pathname: t.pathname + t.search });
                    }
                    o = await l(i);
                  }
                  M(
                    void 0 !== o.result,
                    "You defined " +
                      ("action" === t ? "an action" : "a loader") +
                      ' for route "' + n.route.id +
                      "\" but didn't return anything from your `" + t +
                      "` function. Please return a value or `null`.",
                  );
                } catch (c) {
                  return { type: D.error, result: c };
                } finally {
                  s && e.signal.removeEventListener("abort", s);
                }
                return o;
              }(e, r, t, a, n, c)
              : Promise.resolve({ type: D.data, result: void 0 })),
        });
      }),
      d = await t({
        matches: h,
        request: r,
        params: a[0].params,
        fetcherKey: o,
        context: c,
      });
    try {
      await Promise.all(u);
    } catch (f) {}
    return d;
  }
  async function Rt(t) {
    let { result: e, type: n } = t;
    if (Xt(e)) {
      let t;
      try {
        let n = e.headers.get("Content-Type");
        t = n && /\bapplication\/json\b/.test(n)
          ? null == e.body ? null : await e.json()
          : await e.text();
      } catch (c) {
        return { type: D.error, error: c };
      }
      return n === D.error
        ? {
          type: D.error,
          error: new it(e.status, e.statusText, t),
          statusCode: e.status,
          headers: e.headers,
        }
        : { type: D.data, data: t, statusCode: e.status, headers: e.headers };
    }
    if (n === D.error) {
      if (Kt(e)) {
        var r, i;
        if (e.data instanceof Error) {
          return {
            type: D.error,
            error: e.data,
            statusCode: null == (i = e.init) ? void 0 : i.status,
          };
        }
        e = new it(
          (null == (r = e.init) ? void 0 : r.status) || 500,
          void 0,
          e.data,
        );
      }
      return { type: D.error, error: e, statusCode: at(e) ? e.status : void 0 };
    }
    var a, o, s, l;
    return (function (t) {
        let e = t;
        return e && "object" === typeof e && "object" === typeof e.data &&
          "function" === typeof e.subscribe && "function" === typeof e.cancel &&
          "function" === typeof e.resolveData;
      })(e)
      ? {
        type: D.deferred,
        deferredData: e,
        statusCode: null == (a = e.init) ? void 0 : a.status,
        headers: (null == (o = e.init) ? void 0 : o.headers) &&
          new Headers(e.init.headers),
      }
      : Kt(e)
      ? {
        type: D.data,
        data: e.data,
        statusCode: null == (s = e.init) ? void 0 : s.status,
        headers: null != (l = e.init) && l.headers
          ? new Headers(e.init.headers)
          : void 0,
      }
      : { type: D.data, data: e };
  }
  function Ot(t, e, n, r, i, a) {
    let o = t.headers.get("Location");
    if (
      M(
        o,
        "Redirects returned/thrown from loaders/actions must have a Location header",
      ), !gt.test(o)
    ) {
      let s = r.slice(0, r.findIndex((t) => t.route.id === n) + 1);
      o = vt(new URL(e.url), s, i, !0, o, a), t.headers.set("Location", o);
    }
    return t;
  }
  function Dt(t, e, n) {
    if (gt.test(t)) {
      let r = t,
        i = r.startsWith("//") ? new URL(e.protocol + r) : new URL(r),
        a = null != X(i.pathname, n);
      if (i.origin === e.origin && a) return i.pathname + i.search + i.hash;
    }
    return t;
  }
  function Lt(t, e, n, r) {
    let i = t.createURL(Wt(e)).toString(), a = { signal: n };
    if (r && Gt(r.formMethod)) {
      let { formMethod: t, formEncType: e } = r;
      a.method = t.toUpperCase(),
        "application/json" === e
          ? (a.headers = new Headers({ "Content-Type": e }),
            a.body = JSON.stringify(r.json))
          : "text/plain" === e
          ? a.body = r.text
          : "application/x-www-form-urlencoded" === e && r.formData
          ? a.body = At(r.formData)
          : a.body = r.formData;
    }
    return new Request(i, a);
  }
  function At(t) {
    let e = new URLSearchParams();
    for (let [n, r] of t.entries()) {
      e.append(n, "string" === typeof r ? r : r.name);
    }
    return e;
  }
  function Ft(t) {
    let e = new FormData();
    for (let [n, r] of t.entries()) e.append(n, r);
    return e;
  }
  function jt(t, e, n, r, i) {
    let a,
      o = {},
      s = null,
      l = !1,
      c = {},
      u = n && Yt(n[1]) ? n[1].error : void 0;
    return t.forEach((n) => {
      if (!(n.route.id in e)) return;
      let h = n.route.id, d = e[h];
      if (
        M(!Qt(d), "Cannot handle redirect results in processLoaderData"), Yt(d)
      ) {
        let e = d.error;
        if (void 0 !== u && (e = u, u = void 0), s = s || {}, i) s[h] = e;
        else {
          let n = Bt(t, h);
          null == s[n.route.id] && (s[n.route.id] = e);
        }
        o[h] = void 0,
          l || (l = !0, a = at(d.error) ? d.error.status : 500),
          d.headers && (c[h] = d.headers);
      } else {qt(d)
          ? (r.set(h, d.deferredData),
            o[h] = d.deferredData.data,
            null == d.statusCode || 200 === d.statusCode || l ||
            (a = d.statusCode),
            d.headers && (c[h] = d.headers))
          : (o[h] = d.data,
            d.statusCode && 200 !== d.statusCode && !l && (a = d.statusCode),
            d.headers && (c[h] = d.headers));}
    }),
      void 0 !== u && n && (s = { [n[0]]: u }, o[n[0]] = void 0),
      { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: c };
  }
  function zt(t, e, n, r, i, a, o) {
    let { loaderData: s, errors: l } = jt(e, n, r, o, !1);
    return i.forEach((e) => {
      let { key: n, match: r, controller: i } = e, o = a[n];
      if (
        M(o, "Did not find corresponding fetcher result"),
          !i || !i.signal.aborted
      ) {
        if (Yt(o)) {
          let e = Bt(t.matches, null == r ? void 0 : r.route.id);
          l && l[e.route.id] || (l = k({}, l, { [e.route.id]: o.error })),
            t.fetchers.delete(n);
        } else if (Qt(o)) M(!1, "Unhandled fetcher revalidation redirect");
        else if (qt(o)) M(!1, "Unhandled fetcher deferred data");
        else {
          let e = se(o.data);
          t.fetchers.set(n, e);
        }
      }
    }),
      { loaderData: s, errors: l };
  }
  function Nt(t, e, n, r) {
    let i = k({}, e);
    for (let a of n) {
      let n = a.route.id;
      if (
        e.hasOwnProperty(n)
          ? void 0 !== e[n] && (i[n] = e[n])
          : void 0 !== t[n] && a.route.loader && (i[n] = t[n]),
          r && r.hasOwnProperty(n)
      ) break;
    }
    return i;
  }
  function It(t) {
    return t
      ? Yt(t[1]) ? { actionData: {} } : { actionData: { [t[0]]: t[1].data } }
      : {};
  }
  function Bt(t, e) {
    return (e ? t.slice(0, t.findIndex((t) => t.route.id === e) + 1) : [...t])
      .reverse().find((t) => !0 === t.route.hasErrorBoundary) || t[0];
  }
  function Vt(t) {
    let e = 1 === t.length
      ? t[0]
      : t.find((t) => t.index || !t.path || "/" === t.path) ||
        { id: "__shim-error-route__" };
    return {
      matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
      route: e,
    };
  }
  function Ht(t, e) {
    let { pathname: n, routeId: r, method: i, type: a, message: o } =
        void 0 === e ? {} : e,
      s = "Unknown Server Error",
      l = "Unknown @remix-run/router error";
    return 400 === t
      ? (s = "Bad Request",
        i && n && r
          ? l = "You made a " + i + ' request to "' + n +
            '" but did not provide a `loader` for route "' + r +
            '", so there is no way to handle the request.'
          : "defer-action" === a
          ? l = "defer() is not supported in actions"
          : "invalid-body" === a && (l = "Unable to encode submission body"))
      : 403 === t
      ? (s = "Forbidden",
        l = 'Route "' + r + '" does not match URL "' + n + '"')
      : 404 === t
      ? (s = "Not Found", l = 'No route matches URL "' + n + '"')
      : 405 === t &&
        (s = "Method Not Allowed",
          i && n && r
            ? l = "You made a " + i.toUpperCase() + ' request to "' + n +
              '" but did not provide an `action` for route "' + r +
              '", so there is no way to handle the request.'
            : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
      new it(t || 500, s, new Error(l), !0);
  }
  function Ut(t) {
    let e = Object.entries(t);
    for (let n = e.length - 1; n >= 0; n--) {
      let [t, r] = e[n];
      if (Qt(r)) return { key: t, result: r };
    }
  }
  function Wt(t) {
    return T(k({}, "string" === typeof t ? R(t) : t, { hash: "" }));
  }
  function $t(t) {
    return Xt(t.result) && ut.has(t.result.status);
  }
  function qt(t) {
    return t.type === D.deferred;
  }
  function Yt(t) {
    return t.type === D.error;
  }
  function Qt(t) {
    return (t && t.type) === D.redirect;
  }
  function Kt(t) {
    return "object" === typeof t && null != t && "type" in t && "data" in t &&
      "init" in t && "DataWithResponseInit" === t.type;
  }
  function Xt(t) {
    return null != t && "number" === typeof t.status &&
      "string" === typeof t.statusText && "object" === typeof t.headers &&
      "undefined" !== typeof t.body;
  }
  function Jt(t) {
    return ct.has(t.toLowerCase());
  }
  function Gt(t) {
    return st.has(t.toLowerCase());
  }
  async function Zt(t, e, n, r, i) {
    let a = Object.entries(e);
    for (let o = 0; o < a.length; o++) {
      let [s, l] = a[o],
        c = t.find((t) => (null == t ? void 0 : t.route.id) === s);
      if (!c) continue;
      let u = r.find((t) => t.route.id === c.route.id),
        h = null != u && !St(u, c) && void 0 !== (i && i[c.route.id]);
      qt(l) && h && await ee(l, n, !1).then((t) => {
        t && (e[s] = t);
      });
    }
  }
  async function te(t, e, n) {
    for (let r = 0; r < n.length; r++) {
      let { key: i, routeId: a, controller: o } = n[r], s = e[i];
      t.find((t) => (null == t ? void 0 : t.route.id) === a) &&
        (qt(s) &&
          (M(
            o,
            "Expected an AbortController for revalidating fetcher deferred result",
          ),
            await ee(s, o.signal, !0).then((t) => {
              t && (e[i] = t);
            })));
    }
  }
  async function ee(t, e, n) {
    if (void 0 === n && (n = !1), !await t.deferredData.resolveData(e)) {
      if (n) {
        try {
          return { type: D.data, data: t.deferredData.unwrappedData };
        } catch (r) {
          return { type: D.error, error: r };
        }
      }
      return { type: D.data, data: t.deferredData.data };
    }
  }
  function ne(t) {
    return new URLSearchParams(t).getAll("index").some((t) => "" === t);
  }
  function re(t, e) {
    let n = "string" === typeof e ? R(e).search : e.search;
    if (t[t.length - 1].route.index && ne(n || "")) return t[t.length - 1];
    let r = G(t);
    return r[r.length - 1];
  }
  function ie(t) {
    let {
      formMethod: e,
      formAction: n,
      formEncType: r,
      text: i,
      formData: a,
      json: o,
    } = t;
    if (e && n && r) {
      return null != i
        ? {
          formMethod: e,
          formAction: n,
          formEncType: r,
          formData: void 0,
          json: void 0,
          text: i,
        }
        : null != a
        ? {
          formMethod: e,
          formAction: n,
          formEncType: r,
          formData: a,
          json: void 0,
          text: void 0,
        }
        : void 0 !== o
        ? {
          formMethod: e,
          formAction: n,
          formEncType: r,
          formData: void 0,
          json: o,
          text: void 0,
        }
        : void 0;
    }
  }
  function ae(t, e) {
    if (e) {
      return {
        state: "loading",
        location: t,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
      };
    }
    return {
      state: "loading",
      location: t,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
    };
  }
  function oe(t, e) {
    if (t) {
      return {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: e,
      };
    }
    return {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: e,
    };
  }
  function se(t) {
    return {
      state: "idle",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: t,
    };
  }
  function le() {
    return le = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    },
      le.apply(this, arguments);
  }
  const ce = i.createContext(null);
  const ue = i.createContext(null);
  const he = i.createContext(null);
  const de = i.createContext(null);
  const fe = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const pe = i.createContext(null);
  function ge() {
    return null != i.useContext(de);
  }
  function me() {
    return ge() || M(!1), i.useContext(de).location;
  }
  function be(t, e, n, r) {
    ge() || M(!1);
    let { navigator: a } = i.useContext(he),
      { matches: o } = i.useContext(fe),
      s = o[o.length - 1],
      l = s ? s.params : {},
      c = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let u, h = me();
    if (e) {
      var d;
      let t = "string" === typeof e ? R(e) : e;
      "/" === c || (null == (d = t.pathname) ? void 0 : d.startsWith(c)) ||
      M(!1), u = t;
    } else u = h;
    let f = u.pathname || "/", p = f;
    if ("/" !== c) {
      let t = c.replace(/^\//, "").split("/");
      p = "/" + f.replace(/^\//, "").split("/").slice(t.length).join("/");
    }
    let g = F(t, { pathname: p });
    let m = _e(
      g && g.map((t) =>
        Object.assign({}, t, {
          params: Object.assign({}, l, t.params),
          pathname: tt([
            c,
            a.encodeLocation
              ? a.encodeLocation(t.pathname).pathname
              : t.pathname,
          ]),
          pathnameBase: "/" === t.pathnameBase ? c : tt([
            c,
            a.encodeLocation
              ? a.encodeLocation(t.pathnameBase).pathname
              : t.pathnameBase,
          ]),
        })
      ),
      o,
      n,
      r,
    );
    return e && m
      ? i.createElement(de.Provider, {
        value: {
          location: le({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
          }, u),
          navigationType: x.Pop,
        },
      }, m)
      : m;
  }
  function ye() {
    let t = function () {
        var t;
        let e = i.useContext(pe),
          n = Se(ke.UseRouteError),
          r = Me(ke.UseRouteError);
        if (void 0 !== e) return e;
        return null == (t = n.errors) ? void 0 : t[r];
      }(),
      e = at(t)
        ? t.status + " " + t.statusText
        : t instanceof Error
        ? t.message
        : JSON.stringify(t),
      n = t instanceof Error ? t.stack : null,
      r = "rgba(200,200,200, 0.5)",
      a = { padding: "0.5rem", backgroundColor: r };
    return i.createElement(
      i.Fragment,
      null,
      i.createElement("h2", null, "Unexpected Application Error!"),
      i.createElement("h3", { style: { fontStyle: "italic" } }, e),
      n ? i.createElement("pre", { style: a }, n) : null,
      null,
    );
  }
  const ve = i.createElement(ye, null);
  class xe extends i.Component {
    constructor(t) {
      super(t),
        this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        };
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, e) {
      return e.location !== t.location ||
          "idle" !== e.revalidation && "idle" === t.revalidation
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
          error: void 0 !== t.error ? t.error : e.error,
          location: e.location,
          revalidation: t.revalidation || e.revalidation,
        };
    }
    componentDidCatch(t, e) {
      console.error(
        "React Router caught the following error during render",
        t,
        e,
      );
    }
    render() {
      return void 0 !== this.state.error
        ? i.createElement(
          fe.Provider,
          { value: this.props.routeContext },
          i.createElement(pe.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
        : this.props.children;
    }
  }
  function we(t) {
    let { routeContext: e, match: n, children: r } = t, a = i.useContext(ce);
    return a && a.static && a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
      i.createElement(fe.Provider, { value: e }, r);
  }
  function _e(t, e, n, r) {
    var a;
    if (
      void 0 === e && (e = []),
        void 0 === n && (n = null),
        void 0 === r && (r = null),
        null == t
    ) {
      var o;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else {
        if (
          !(null != (o = r) && o.v7_partialHydration && 0 === e.length &&
            !n.initialized && n.matches.length > 0)
        ) return null;
        t = n.matches;
      }
    }
    let s = t, l = null == (a = n) ? void 0 : a.errors;
    if (null != l) {
      let t = s.findIndex(
        (t) => t.route.id && void 0 !== (null == l ? void 0 : l[t.route.id]),
      );
      t >= 0 || M(!1), s = s.slice(0, Math.min(s.length, t + 1));
    }
    let c = !1, u = -1;
    if (n && r && r.v7_partialHydration) {
      for (let i = 0; i < s.length; i++) {
        let t = s[i];
        if (
          (t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
          (u = i), t.route.id
        ) {
          let { loaderData: e, errors: r } = n,
            i = t.route.loader && void 0 === e[t.route.id] &&
              (!r || void 0 === r[t.route.id]);
          if (t.route.lazy || i) {
            c = !0, s = u >= 0 ? s.slice(0, u + 1) : [s[0]];
            break;
          }
        }
      }
    }
    return s.reduceRight((t, r, a) => {
      let o, h = !1, d = null, f = null;
      var p;
      n &&
        (o = l && r.route.id ? l[r.route.id] : void 0,
          d = r.route.errorElement || ve,
          c &&
          (u < 0 && 0 === a
            ? (p = "route-fallback",
              !1 || Ee[p] || (Ee[p] = !0),
              h = !0,
              f = null)
            : u === a && (h = !0, f = r.route.hydrateFallbackElement || null)));
      let g = e.concat(s.slice(0, a + 1)),
        m = () => {
          let e;
          return e = o
            ? d
            : h
            ? f
            : r.route.Component
            ? i.createElement(r.route.Component, null)
            : r.route.element
            ? r.route.element
            : t,
            i.createElement(we, {
              match: r,
              routeContext: { outlet: t, matches: g, isDataRoute: null != n },
              children: e,
            });
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
        ? i.createElement(xe, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: o,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
        : m();
    }, null);
  }
  var ke = function (t) {
    return t.UseBlocker = "useBlocker",
      t.UseLoaderData = "useLoaderData",
      t.UseActionData = "useActionData",
      t.UseRouteError = "useRouteError",
      t.UseNavigation = "useNavigation",
      t.UseRouteLoaderData = "useRouteLoaderData",
      t.UseMatches = "useMatches",
      t.UseRevalidator = "useRevalidator",
      t.UseNavigateStable = "useNavigate",
      t.UseRouteId = "useRouteId",
      t;
  }(ke || {});
  function Se(t) {
    let e = i.useContext(ue);
    return e || M(!1), e;
  }
  function Me(t) {
    let e = function () {
        let t = i.useContext(fe);
        return t || M(!1), t;
      }(),
      n = e.matches[e.matches.length - 1];
    return n.route.id || M(!1), n.route.id;
  }
  const Ee = {};
  a.startTransition;
  function Ce(t) {
    let {
      basename: e = "/",
      children: n = null,
      location: r,
      navigationType: a = x.Pop,
      navigator: o,
      static: s = !1,
      future: l,
    } = t;
    ge() && M(!1);
    let c = e.replace(/^\/*/, "/"),
      u = i.useMemo(
        () => ({
          basename: c,
          navigator: o,
          static: s,
          future: le({ v7_relativeSplatPath: !1 }, l),
        }),
        [c, l, o, s],
      );
    "string" === typeof r && (r = R(r));
    let {
        pathname: h = "/",
        search: d = "",
        hash: f = "",
        state: p = null,
        key: g = "default",
      } = r,
      m = i.useMemo(() => {
        let t = X(h, c);
        return null == t ? null : {
          location: { pathname: t, search: d, hash: f, state: p, key: g },
          navigationType: a,
        };
      }, [c, h, d, f, p, g, a]);
    return null == m ? null : i.createElement(
      he.Provider,
      { value: u },
      i.createElement(de.Provider, { children: n, value: m }),
    );
  }
  new Promise(() => {});
  i.Component;
  function Pe(t) {
    let e = {
      hasErrorBoundary: null != t.ErrorBoundary || null != t.errorElement,
    };
    return t.Component &&
      Object.assign(e, {
        element: i.createElement(t.Component),
        Component: void 0,
      }),
      t.HydrateFallback &&
      Object.assign(e, {
        hydrateFallbackElement: i.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
      t.ErrorBoundary &&
      Object.assign(e, {
        errorElement: i.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
      e;
  }
  function Te() {
    return Te = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    },
      Te.apply(this, arguments);
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  try {
    window.__reactRouterVersion = "6";
  } catch (qd) {}
  function Re() {
    var t;
    let e = null == (t = window) ? void 0 : t.__staticRouterHydrationData;
    return e && e.errors && (e = Te({}, e, { errors: Oe(e.errors) })), e;
  }
  function Oe(t) {
    if (!t) return null;
    let e = Object.entries(t), n = {};
    for (let [r, i] of e) {
      if (i && "RouteErrorResponse" === i.__type) {
        n[r] = new it(i.status, i.statusText, i.data, !0 === i.internal);
      } else if (i && "Error" === i.__type) {
        if (i.__subType) {
          let t = window[i.__subType];
          if ("function" === typeof t) {
            try {
              let e = new t(i.message);
              e.stack = "", n[r] = e;
            } catch (qd) {
            }
          }
        }
        if (null == n[r]) {
          let t = new Error(i.message);
          t.stack = "", n[r] = t;
        }
      } else n[r] = i;
    }
    return n;
  }
  const De = i.createContext({ isTransitioning: !1 });
  const Le = i.createContext(new Map());
  const Ae = a.startTransition, Fe = _.flushSync;
  a.useId;
  function je(t) {
    Fe ? Fe(t) : t();
  }
  class ze {
    constructor() {
      this.status = "pending",
        this.promise = new Promise((t, e) => {
          this.resolve = (e) => {
            "pending" === this.status && (this.status = "resolved", t(e));
          },
            this.reject = (t) => {
              "pending" === this.status && (this.status = "rejected", e(t));
            };
        });
    }
  }
  function Ne(t) {
    let { fallbackElement: e, router: n, future: r } = t,
      [a, o] = i.useState(n.state),
      [s, l] = i.useState(),
      [c, u] = i.useState({ isTransitioning: !1 }),
      [h, d] = i.useState(),
      [f, p] = i.useState(),
      [g, m] = i.useState(),
      b = i.useRef(new Map()),
      { v7_startTransition: y } = r || {},
      v = i.useCallback((t) => {
        y
          ? function (t) {
            Ae ? Ae(t) : t();
          }(t)
          : t();
      }, [y]),
      x = i.useCallback((t, e) => {
        let { deletedFetchers: r, flushSync: i, viewTransitionOpts: a } = e;
        r.forEach((t) => b.current.delete(t)),
          t.fetchers.forEach((t, e) => {
            void 0 !== t.data && b.current.set(e, t.data);
          });
        let s = null == n.window || null == n.window.document ||
          "function" !== typeof n.window.document.startViewTransition;
        if (a && !s) {
          if (i) {
            je(() => {
              f && (h && h.resolve(), f.skipTransition()),
                u({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: a.currentLocation,
                  nextLocation: a.nextLocation,
                });
            });
            let e = n.window.document.startViewTransition(() => {
              je(() => o(t));
            });
            return e.finished.finally(() => {
              je(() => {
                d(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
              });
            }),
              void je(() => p(e));
          }
          f
            ? (h && h.resolve(),
              f.skipTransition(),
              m({
                state: t,
                currentLocation: a.currentLocation,
                nextLocation: a.nextLocation,
              }))
            : (l(t),
              u({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: a.currentLocation,
                nextLocation: a.nextLocation,
              }));
        } else i ? je(() => o(t)) : v(() => o(t));
      }, [n.window, f, h, b, v]);
    i.useLayoutEffect(() => n.subscribe(x), [n, x]),
      i.useEffect(() => {
        c.isTransitioning && !c.flushSync && d(new ze());
      }, [c]),
      i.useEffect(() => {
        if (h && s && n.window) {
          let t = s,
            e = h.promise,
            r = n.window.document.startViewTransition(async () => {
              v(() => o(t)), await e;
            });
          r.finished.finally(() => {
            d(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
          }), p(r);
        }
      }, [v, s, h, n.window]),
      i.useEffect(() => {
        h && s && a.location.key === s.location.key && h.resolve();
      }, [h, f, a.location, s]),
      i.useEffect(() => {
        !c.isTransitioning && g &&
          (l(g.state),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: g.currentLocation,
              nextLocation: g.nextLocation,
            }),
            m(void 0));
      }, [c.isTransitioning, g]),
      i.useEffect(() => {}, []);
    let w = i.useMemo(() => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (t) => n.navigate(t),
        push: (t, e, r) =>
          n.navigate(t, {
            state: e,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
        replace: (t, e, r) =>
          n.navigate(t, {
            replace: !0,
            state: e,
            preventScrollReset: null == r ? void 0 : r.preventScrollReset,
          }),
      }), [n]),
      _ = n.basename || "/",
      k = i.useMemo(
        () => ({ router: n, navigator: w, static: !1, basename: _ }),
        [n, w, _],
      ),
      S = i.useMemo(
        () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
        [n.future.v7_relativeSplatPath],
      );
    return i.createElement(
      i.Fragment,
      null,
      i.createElement(
        ce.Provider,
        { value: k },
        i.createElement(
          ue.Provider,
          { value: a },
          i.createElement(
            Le.Provider,
            { value: b.current },
            i.createElement(
              De.Provider,
              { value: c },
              i.createElement(
                Ce,
                {
                  basename: _,
                  location: a.location,
                  navigationType: a.historyAction,
                  navigator: w,
                  future: S,
                },
                a.initialized || n.future.v7_partialHydration
                  ? i.createElement(Ie, {
                    routes: n.routes,
                    future: n.future,
                    state: a,
                  })
                  : e,
              ),
            ),
          ),
        ),
      ),
      null,
    );
  }
  const Ie = i.memo(Be);
  function Be(t) {
    let { routes: e, future: n, state: r } = t;
    return be(e, void 0, r, n);
  }
  "undefined" !== typeof window && "undefined" !== typeof window.document &&
    window.document.createElement;
  var Ve, He;
  (function (t) {
    t.UseScrollRestoration = "useScrollRestoration",
      t.UseSubmit = "useSubmit",
      t.UseSubmitFetcher = "useSubmitFetcher",
      t.UseFetcher = "useFetcher",
      t.useViewTransitionState = "useViewTransitionState";
  })(Ve || (Ve = {})),
    function (t) {
      t.UseFetcher = "useFetcher",
        t.UseFetchers = "useFetchers",
        t.UseScrollRestoration = "useScrollRestoration";
    }(He || (He = {}));
  function Ue() {
    return (0, s.jsxs)(m, {
      children: [
        (0, s.jsx)(f, {}),
        (0, s.jsxs)(g, {
          children: [
            (0, s.jsx)(p, {
              title: "Hypnosis",
              children:
                "Hypnosis is a big hobby of mine, I hope you can enjoy my hypnosis files and my visualisations.",
            }),
            (0, s.jsxs)(y, {
              children: [
                (0, s.jsx)(l, {
                  href: "/hypno/files",
                  children: (0, s.jsx)(b, {
                    title: "Files",
                    children: (0, s.jsx)(d, {
                      children: "Get in trance with my various hypnosis files.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "/hypno/visuals",
                  children: (0, s.jsx)(b, {
                    title: "Visuals",
                    children: (0, s.jsx)(d, {
                      children:
                        "Get mesmerised with some cool patterns and shapes.",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function We(t) {
    return { x: t.canvas.width / 2, y: t.canvas.height / 2 };
  }
  function $e(t, e) {
    return "rgba(" + parseInt(t.slice(1, 3), 16) + ", " +
      parseInt(t.slice(3, 5), 16) + ", " + parseInt(t.slice(5, 7), 16) + ", " +
      e + ")";
  }
  function qe(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  }
  class Ye {
    constructor() {
      this.name = "name",
        this.description = "description",
        this.fps = 60,
        this.interval = void 0;
    }
    getOptions() {
      throw new Error("This visualiser does not implement getOptions");
    }
    getPresets() {
      return {};
    }
    draw(t, e) {
      throw new Error("This visualiser does not implement draw");
    }
    stop() {
      clearInterval(this.interval);
    }
  }
  function Qe(t) {
    return Qe =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
          return typeof t;
        }
        : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol &&
              t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        },
      Qe(t);
  }
  var Ke = /^\s+/, Xe = /\s+$/;
  function Je(t, e) {
    if (e = e || {}, (t = t || "") instanceof Je) return t;
    if (!(this instanceof Je)) return new Je(t, e);
    var n = function (t) {
      var e = { r: 0, g: 0, b: 0 },
        n = 1,
        r = null,
        i = null,
        a = null,
        o = !1,
        s = !1;
      "string" == typeof t && (t = function (t) {
        t = t.replace(Ke, "").replace(Xe, "").toLowerCase();
        var e, n = !1;
        if (gn[t]) t = gn[t], n = !0;
        else if ("transparent" == t) {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        if (e = Mn.rgb.exec(t)) return { r: e[1], g: e[2], b: e[3] };
        if (e = Mn.rgba.exec(t)) return { r: e[1], g: e[2], b: e[3], a: e[4] };
        if (e = Mn.hsl.exec(t)) return { h: e[1], s: e[2], l: e[3] };
        if (e = Mn.hsla.exec(t)) return { h: e[1], s: e[2], l: e[3], a: e[4] };
        if (e = Mn.hsv.exec(t)) return { h: e[1], s: e[2], v: e[3] };
        if (e = Mn.hsva.exec(t)) return { h: e[1], s: e[2], v: e[3], a: e[4] };
        if (e = Mn.hex8.exec(t)) {
          return {
            r: xn(e[1]),
            g: xn(e[2]),
            b: xn(e[3]),
            a: Sn(e[4]),
            format: n ? "name" : "hex8",
          };
        }
        if (e = Mn.hex6.exec(t)) {
          return {
            r: xn(e[1]),
            g: xn(e[2]),
            b: xn(e[3]),
            format: n ? "name" : "hex",
          };
        }
        if (e = Mn.hex4.exec(t)) {
          return {
            r: xn(e[1] + "" + e[1]),
            g: xn(e[2] + "" + e[2]),
            b: xn(e[3] + "" + e[3]),
            a: Sn(e[4] + "" + e[4]),
            format: n ? "name" : "hex8",
          };
        }
        if (e = Mn.hex3.exec(t)) {
          return {
            r: xn(e[1] + "" + e[1]),
            g: xn(e[2] + "" + e[2]),
            b: xn(e[3] + "" + e[3]),
            format: n ? "name" : "hex",
          };
        }
        return !1;
      }(t));
      "object" == Qe(t) &&
        (En(t.r) && En(t.g) && En(t.b)
          ? (l = t.r,
            c = t.g,
            u = t.b,
            e = {
              r: 255 * yn(l, 255),
              g: 255 * yn(c, 255),
              b: 255 * yn(u, 255),
            },
            o = !0,
            s = "%" === String(t.r).substr(-1) ? "prgb" : "rgb")
          : En(t.h) && En(t.s) && En(t.v)
          ? (r = _n(t.s),
            i = _n(t.v),
            e = function (t, e, n) {
              t = 6 * yn(t, 360), e = yn(e, 100), n = yn(n, 100);
              var r = Math.floor(t),
                i = t - r,
                a = n * (1 - e),
                o = n * (1 - i * e),
                s = n * (1 - (1 - i) * e),
                l = r % 6,
                c = [n, o, a, a, s, n][l],
                u = [s, n, n, o, a, a][l],
                h = [a, a, s, n, n, o][l];
              return { r: 255 * c, g: 255 * u, b: 255 * h };
            }(t.h, r, i),
            o = !0,
            s = "hsv")
          : En(t.h) && En(t.s) && En(t.l) &&
            (r = _n(t.s),
              a = _n(t.l),
              e = function (t, e, n) {
                var r, i, a;
                function o(t, e, n) {
                  return n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? t + 6 * (e - t) * n
                      : n < .5
                      ? e
                      : n < 2 / 3
                      ? t + (e - t) * (2 / 3 - n) * 6
                      : t;
                }
                if (t = yn(t, 360), e = yn(e, 100), n = yn(n, 100), 0 === e) {
                  r = i = a = n;
                } else {
                  var s = n < .5 ? n * (1 + e) : n + e - n * e, l = 2 * n - s;
                  r = o(l, s, t + 1 / 3),
                    i = o(l, s, t),
                    a = o(l, s, t - 1 / 3);
                }
                return { r: 255 * r, g: 255 * i, b: 255 * a };
              }(t.h, r, a),
              o = !0,
              s = "hsl"),
          t.hasOwnProperty("a") && (n = t.a));
      var l, c, u;
      return n = bn(n), {
        ok: o,
        format: t.format || s,
        r: Math.min(255, Math.max(e.r, 0)),
        g: Math.min(255, Math.max(e.g, 0)),
        b: Math.min(255, Math.max(e.b, 0)),
        a: n,
      };
    }(t);
    this._originalInput = t,
      this._r = n.r,
      this._g = n.g,
      this._b = n.b,
      this._a = n.a,
      this._roundA = Math.round(100 * this._a) / 100,
      this._format = e.format || n.format,
      this._gradientType = e.gradientType,
      this._r < 1 && (this._r = Math.round(this._r)),
      this._g < 1 && (this._g = Math.round(this._g)),
      this._b < 1 && (this._b = Math.round(this._b)),
      this._ok = n.ok;
  }
  function Ge(t, e, n) {
    t = yn(t, 255), e = yn(e, 255), n = yn(n, 255);
    var r, i, a = Math.max(t, e, n), o = Math.min(t, e, n), s = (a + o) / 2;
    if (a == o) r = i = 0;
    else {
      var l = a - o;
      switch (i = s > .5 ? l / (2 - a - o) : l / (a + o), a) {
        case t:
          r = (e - n) / l + (e < n ? 6 : 0);
          break;
        case e:
          r = (n - t) / l + 2;
          break;
        case n:
          r = (t - e) / l + 4;
      }
      r /= 6;
    }
    return { h: r, s: i, l: s };
  }
  function Ze(t, e, n) {
    t = yn(t, 255), e = yn(e, 255), n = yn(n, 255);
    var r, i, a = Math.max(t, e, n), o = Math.min(t, e, n), s = a, l = a - o;
    if (i = 0 === a ? 0 : l / a, a == o) r = 0;
    else {
      switch (a) {
        case t:
          r = (e - n) / l + (e < n ? 6 : 0);
          break;
        case e:
          r = (n - t) / l + 2;
          break;
        case n:
          r = (t - e) / l + 4;
      }
      r /= 6;
    }
    return { h: r, s: i, v: s };
  }
  function tn(t, e, n, r) {
    var i = [
      wn(Math.round(t).toString(16)),
      wn(Math.round(e).toString(16)),
      wn(Math.round(n).toString(16)),
    ];
    return r && i[0].charAt(0) == i[0].charAt(1) &&
        i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1)
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
      : i.join("");
  }
  function en(t, e, n, r) {
    return [
      wn(kn(r)),
      wn(Math.round(t).toString(16)),
      wn(Math.round(e).toString(16)),
      wn(Math.round(n).toString(16)),
    ].join("");
  }
  function nn(t, e) {
    e = 0 === e ? 0 : e || 10;
    var n = Je(t).toHsl();
    return n.s -= e / 100, n.s = vn(n.s), Je(n);
  }
  function rn(t, e) {
    e = 0 === e ? 0 : e || 10;
    var n = Je(t).toHsl();
    return n.s += e / 100, n.s = vn(n.s), Je(n);
  }
  function an(t) {
    return Je(t).desaturate(100);
  }
  function on(t, e) {
    e = 0 === e ? 0 : e || 10;
    var n = Je(t).toHsl();
    return n.l += e / 100, n.l = vn(n.l), Je(n);
  }
  function sn(t, e) {
    e = 0 === e ? 0 : e || 10;
    var n = Je(t).toRgb();
    return n.r = Math.max(0, Math.min(255, n.r - Math.round(-e / 100 * 255))),
      n.g = Math.max(0, Math.min(255, n.g - Math.round(-e / 100 * 255))),
      n.b = Math.max(0, Math.min(255, n.b - Math.round(-e / 100 * 255))),
      Je(n);
  }
  function ln(t, e) {
    e = 0 === e ? 0 : e || 10;
    var n = Je(t).toHsl();
    return n.l -= e / 100, n.l = vn(n.l), Je(n);
  }
  function cn(t, e) {
    var n = Je(t).toHsl(), r = (n.h + e) % 360;
    return n.h = r < 0 ? 360 + r : r, Je(n);
  }
  function un(t) {
    var e = Je(t).toHsl();
    return e.h = (e.h + 180) % 360, Je(e);
  }
  function hn(t, e) {
    if (isNaN(e) || e <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    for (var n = Je(t).toHsl(), r = [Je(t)], i = 360 / e, a = 1; a < e; a++) {
      r.push(Je({ h: (n.h + a * i) % 360, s: n.s, l: n.l }));
    }
    return r;
  }
  function dn(t) {
    var e = Je(t).toHsl(), n = e.h;
    return [
      Je(t),
      Je({ h: (n + 72) % 360, s: e.s, l: e.l }),
      Je({ h: (n + 216) % 360, s: e.s, l: e.l }),
    ];
  }
  function fn(t, e, n) {
    e = e || 6, n = n || 30;
    var r = Je(t).toHsl(), i = 360 / n, a = [Je(t)];
    for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) {
      r.h = (r.h + i) % 360, a.push(Je(r));
    }
    return a;
  }
  function pn(t, e) {
    e = e || 6;
    for (
      var n = Je(t).toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / e;
      e--;
    ) o.push(Je({ h: r, s: i, v: a })), a = (a + s) % 1;
    return o;
  }
  Je.prototype = {
    isDark: function () {
      return this.getBrightness() < 128;
    },
    isLight: function () {
      return !this.isDark();
    },
    isValid: function () {
      return this._ok;
    },
    getOriginalInput: function () {
      return this._originalInput;
    },
    getFormat: function () {
      return this._format;
    },
    getAlpha: function () {
      return this._a;
    },
    getBrightness: function () {
      var t = this.toRgb();
      return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
    },
    getLuminance: function () {
      var t, e, n, r = this.toRgb();
      return t = r.r / 255,
        e = r.g / 255,
        n = r.b / 255,
        .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) +
        .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) +
        .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4));
    },
    setAlpha: function (t) {
      return this._a = bn(t),
        this._roundA = Math.round(100 * this._a) / 100,
        this;
    },
    toHsv: function () {
      var t = Ze(this._r, this._g, this._b);
      return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
    },
    toHsvString: function () {
      var t = Ze(this._r, this._g, this._b),
        e = Math.round(360 * t.h),
        n = Math.round(100 * t.s),
        r = Math.round(100 * t.v);
      return 1 == this._a
        ? "hsv(" + e + ", " + n + "%, " + r + "%)"
        : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
    },
    toHsl: function () {
      var t = Ge(this._r, this._g, this._b);
      return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
    },
    toHslString: function () {
      var t = Ge(this._r, this._g, this._b),
        e = Math.round(360 * t.h),
        n = Math.round(100 * t.s),
        r = Math.round(100 * t.l);
      return 1 == this._a
        ? "hsl(" + e + ", " + n + "%, " + r + "%)"
        : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")";
    },
    toHex: function (t) {
      return tn(this._r, this._g, this._b, t);
    },
    toHexString: function (t) {
      return "#" + this.toHex(t);
    },
    toHex8: function (t) {
      return function (t, e, n, r, i) {
        var a = [
          wn(Math.round(t).toString(16)),
          wn(Math.round(e).toString(16)),
          wn(Math.round(n).toString(16)),
          wn(kn(r)),
        ];
        if (
          i && a[0].charAt(0) == a[0].charAt(1) &&
          a[1].charAt(0) == a[1].charAt(1) &&
          a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1)
        ) {
          return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) +
            a[3].charAt(0);
        }
        return a.join("");
      }(this._r, this._g, this._b, this._a, t);
    },
    toHex8String: function (t) {
      return "#" + this.toHex8(t);
    },
    toRgb: function () {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a,
      };
    },
    toRgbString: function () {
      return 1 == this._a
        ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " +
          Math.round(this._b) + ")"
        : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " +
          Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function () {
      return {
        r: Math.round(100 * yn(this._r, 255)) + "%",
        g: Math.round(100 * yn(this._g, 255)) + "%",
        b: Math.round(100 * yn(this._b, 255)) + "%",
        a: this._a,
      };
    },
    toPercentageRgbString: function () {
      return 1 == this._a
        ? "rgb(" + Math.round(100 * yn(this._r, 255)) + "%, " +
          Math.round(100 * yn(this._g, 255)) + "%, " +
          Math.round(100 * yn(this._b, 255)) + "%)"
        : "rgba(" + Math.round(100 * yn(this._r, 255)) + "%, " +
          Math.round(100 * yn(this._g, 255)) + "%, " +
          Math.round(100 * yn(this._b, 255)) + "%, " + this._roundA + ")";
    },
    toName: function () {
      return 0 === this._a
        ? "transparent"
        : !(this._a < 1) && (mn[tn(this._r, this._g, this._b, !0)] || !1);
    },
    toFilter: function (t) {
      var e = "#" + en(this._r, this._g, this._b, this._a),
        n = e,
        r = this._gradientType ? "GradientType = 1, " : "";
      if (t) {
        var i = Je(t);
        n = "#" + en(i._r, i._g, i._b, i._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + r +
        "startColorstr=" + e + ",endColorstr=" + n + ")";
    },
    toString: function (t) {
      var e = !!t;
      t = t || this._format;
      var n = !1, r = this._a < 1 && this._a >= 0;
      return e || !r ||
          "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t &&
            "hex8" !== t && "name" !== t
        ? ("rgb" === t && (n = this.toRgbString()),
          "prgb" === t && (n = this.toPercentageRgbString()),
          "hex" !== t && "hex6" !== t || (n = this.toHexString()),
          "hex3" === t && (n = this.toHexString(!0)),
          "hex4" === t && (n = this.toHex8String(!0)),
          "hex8" === t && (n = this.toHex8String()),
          "name" === t && (n = this.toName()),
          "hsl" === t && (n = this.toHslString()),
          "hsv" === t && (n = this.toHsvString()),
          n || this.toHexString())
        : "name" === t && 0 === this._a
        ? this.toName()
        : this.toRgbString();
    },
    clone: function () {
      return Je(this.toString());
    },
    _applyModification: function (t, e) {
      var n = t.apply(null, [this].concat([].slice.call(e)));
      return this._r = n._r,
        this._g = n._g,
        this._b = n._b,
        this.setAlpha(n._a),
        this;
    },
    lighten: function () {
      return this._applyModification(on, arguments);
    },
    brighten: function () {
      return this._applyModification(sn, arguments);
    },
    darken: function () {
      return this._applyModification(ln, arguments);
    },
    desaturate: function () {
      return this._applyModification(nn, arguments);
    },
    saturate: function () {
      return this._applyModification(rn, arguments);
    },
    greyscale: function () {
      return this._applyModification(an, arguments);
    },
    spin: function () {
      return this._applyModification(cn, arguments);
    },
    _applyCombination: function (t, e) {
      return t.apply(null, [this].concat([].slice.call(e)));
    },
    analogous: function () {
      return this._applyCombination(fn, arguments);
    },
    complement: function () {
      return this._applyCombination(un, arguments);
    },
    monochromatic: function () {
      return this._applyCombination(pn, arguments);
    },
    splitcomplement: function () {
      return this._applyCombination(dn, arguments);
    },
    triad: function () {
      return this._applyCombination(hn, [3]);
    },
    tetrad: function () {
      return this._applyCombination(hn, [4]);
    },
  },
    Je.fromRatio = function (t, e) {
      if ("object" == Qe(t)) {
        var n = {};
        for (var r in t) {
          t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : _n(t[r]));
        }
        t = n;
      }
      return Je(t, e);
    },
    Je.equals = function (t, e) {
      return !(!t || !e) && Je(t).toRgbString() == Je(e).toRgbString();
    },
    Je.random = function () {
      return Je.fromRatio({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
      });
    },
    Je.mix = function (t, e, n) {
      n = 0 === n ? 0 : n || 50;
      var r = Je(t).toRgb(), i = Je(e).toRgb(), a = n / 100;
      return Je({
        r: (i.r - r.r) * a + r.r,
        g: (i.g - r.g) * a + r.g,
        b: (i.b - r.b) * a + r.b,
        a: (i.a - r.a) * a + r.a,
      });
    },
    Je.readability = function (t, e) {
      var n = Je(t), r = Je(e);
      return (Math.max(n.getLuminance(), r.getLuminance()) + .05) /
        (Math.min(n.getLuminance(), r.getLuminance()) + .05);
    },
    Je.isReadable = function (t, e, n) {
      var r, i, a = Je.readability(t, e);
      switch (
        i = !1,
          (r = function (t) {
            var e, n;
            e = ((t = t || { level: "AA", size: "small" }).level || "AA")
              .toUpperCase(),
              n = (t.size || "small").toLowerCase(),
              "AA" !== e && "AAA" !== e && (e = "AA");
            "small" !== n && "large" !== n && (n = "small");
            return { level: e, size: n };
          }(n)).level + r.size
      ) {
        case "AAsmall":
        case "AAAlarge":
          i = a >= 4.5;
          break;
        case "AAlarge":
          i = a >= 3;
          break;
        case "AAAsmall":
          i = a >= 7;
      }
      return i;
    },
    Je.mostReadable = function (t, e, n) {
      var r, i, a, o, s = null, l = 0;
      i = (n = n || {}).includeFallbackColors, a = n.level, o = n.size;
      for (var c = 0; c < e.length; c++) {
        (r = Je.readability(t, e[c])) > l && (l = r, s = Je(e[c]));
      }
      return Je.isReadable(t, s, { level: a, size: o }) || !i
        ? s
        : (n.includeFallbackColors = !1,
          Je.mostReadable(t, ["#fff", "#000"], n));
    };
  var gn = Je.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    },
    mn = Je.hexNames = function (t) {
      var e = {};
      for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
      return e;
    }(gn);
  function bn(t) {
    return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
  }
  function yn(t, e) {
    (function (t) {
      return "string" == typeof t && -1 != t.indexOf(".") &&
        1 === parseFloat(t);
    })(t) && (t = "100%");
    var n = function (t) {
      return "string" === typeof t && -1 != t.indexOf("%");
    }(t);
    return t = Math.min(e, Math.max(0, parseFloat(t))),
      n && (t = parseInt(t * e, 10) / 100),
      Math.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e);
  }
  function vn(t) {
    return Math.min(1, Math.max(0, t));
  }
  function xn(t) {
    return parseInt(t, 16);
  }
  function wn(t) {
    return 1 == t.length ? "0" + t : "" + t;
  }
  function _n(t) {
    return t <= 1 && (t = 100 * t + "%"), t;
  }
  function kn(t) {
    return Math.round(255 * parseFloat(t)).toString(16);
  }
  function Sn(t) {
    return xn(t) / 255;
  }
  var Mn = function () {
    var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
      e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
      n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t +
        ")[,|\\s]+(" + t + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(t),
      rgb: new RegExp("rgb" + e),
      rgba: new RegExp("rgba" + n),
      hsl: new RegExp("hsl" + e),
      hsla: new RegExp("hsla" + n),
      hsv: new RegExp("hsv" + e),
      hsva: new RegExp("hsva" + n),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4:
        /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8:
        /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  }();
  function En(t) {
    return !!Mn.CSS_UNIT.exec(t);
  }
  function Cn(t, e, n, r, i, a) {
    let o = e, s = n, l = r, c = i;
    t.save(), t.beginPath();
    let u = .3 * c;
    t.moveTo(o, s + u),
      t.bezierCurveTo(o, s, o - l / 2, s, o - l / 2, s + u),
      t.bezierCurveTo(o - l / 2, s + (c + u) / 2, o, s + (c + u) / 2, o, s + c),
      t.bezierCurveTo(
        o,
        s + (c + u) / 2,
        o + l / 2,
        s + (c + u) / 2,
        o + l / 2,
        s + u,
      ),
      t.bezierCurveTo(o + l / 2, s, o, s, o, s + u),
      t.closePath(),
      t.fillStyle = a,
      t.fill(),
      t.restore();
  }
  const Pn = [
      class extends Ye {
        constructor() {
          super(...arguments),
            this.name = "Hearts",
            this.description = "Hearts fading in or out",
            this.hearts = [],
            this.spawnHeartInterval = void 0,
            this.renderFrameInterval = void 0,
            this.currentColorIndex = 0;
        }
        getOptions() {
          return {
            reverse: { type: "boolean", human: "Reverse", default: !0 },
            spawnSpeed: {
              type: "number",
              human: "Rate (ms)",
              rangeMin: 100,
              rangeMax: 2e3,
              default: 250,
            },
            backgroundColor: {
              type: "color",
              human: "Backgrond",
              default: "#000000",
            },
            colors: {
              type: "array",
              human: "Colors",
              default: ["#FF0000"],
              inner: { type: "color", default: "#FF0000", human: "Yes" },
            },
          };
        }
        addHeart(t, e) {
          const { x: n, y: r } = We(t);
          this.currentColorIndex === e.colors.length &&
          (this.currentColorIndex = 0),
            this.hearts.push({
              location: { x: n, y: e.reverse ? r - 1e3 : r },
              size: e.reverse ? 2e3 : 50,
              opacity: e.reverse ? 0 : 1,
              color: e.colors[this.currentColorIndex],
            }),
            this.currentColorIndex++;
        }
        draw(t, e) {
          t.canvas.style.backgroundColor = e.backgroundColor,
            this.addHeart(t, e),
            this.spawnHeartInterval = setInterval(() => {
              this.addHeart(t, e);
            }, e.spawnSpeed),
            this.renderFrameInterval = setInterval(() => {
              t.clearRect(0, 0, t.canvas.width, t.canvas.height);
              for (const n of this.hearts) {
                const r = this.hearts.indexOf(n);
                Cn(
                  t,
                  n.location.x,
                  n.location.y,
                  n.size,
                  n.size,
                  $e(n.color, n.opacity),
                ),
                  e.reverse
                    ? (n.size -= 20, n.location.y += 10, n.opacity += .01)
                    : (n.size += 20, n.location.y -= 10, n.opacity -= .01),
                  e.reverse && n.opacity > 1 && (this.hearts[r] = null),
                  !e.reverse && n.opacity < 0 && (this.hearts[r] = null);
              }
              this.hearts = this.hearts.filter((t) => t);
            }, 1e3 / 60);
        }
        stop() {
          clearInterval(this.renderFrameInterval),
            clearInterval(this.spawnHeartInterval);
        }
      },
      class extends Ye {
        constructor() {
          super(...arguments),
            this.name = "Spiral",
            this.description = "Simple rotating spiral",
            this.angle = 0,
            this.angleOffset = 0,
            this.radius = 0,
            this.angleIncrement = .01,
            this.radiusIncrement = .1;
        }
        getOptions() {
          return {
            spinSpeed: {
              type: "number",
              human: "Spin Speed",
              rangeMin: .01,
              rangeMax: .6,
              default: .2,
            },
            segments: {
              type: "number",
              human: "Segments",
              default: 0,
              rangeMin: -32,
              rangeMax: 32,
            },
            reverse: { type: "boolean", human: "Reverse", default: !1 },
            backgroundColor: {
              type: "color",
              human: "Background",
              default: "#000000",
            },
            colors: {
              type: "array",
              human: "Colors",
              default: ["#FFFFFF"],
              inner: { type: "color", default: "#FFFFFF", human: "Yes" },
            },
          };
        }
        getPresets() {
          return {
            sinkhole: { spinSpeed: .2, segments: 20 },
            staircase: {
              colors: [
                "#FFFFFF",
                "#cccccc",
                "#b3b3b3",
                "#8a8a8a",
                "#5c5c5c",
                "#404040",
                "#2b2b2b",
                "#141414",
              ],
              spinSpeed: .01,
              reverse: !0,
            },
          };
        }
        draw(t, e) {
          t.canvas.style.backgroundColor = e.backgroundColor,
            this.interval = setInterval(() => {
              this.radius = 0,
                this.angleOffset += e.reverse ? -e.spinSpeed : e.spinSpeed,
                this.angle = this.angleOffset,
                t.lineWidth = 1,
                t.clearRect(0, 0, t.canvas.width, t.canvas.height),
                this.drawFrame(t, e);
            }, 1e3 / this.fps);
        }
        drawFrame(t, e) {
          const { x: n, y: r } = We(t);
          let [i, a] = [n, r];
          for (let o = 0; o < 2e4; o++) {
            t.beginPath();
            const s = n + this.radius * Math.cos(this.angle),
              l = r + this.radius * Math.sin(this.angle);
            t.lineWidth = Math.max(1, this.radius / 15),
              t.moveTo(i, a),
              t.lineTo(s, l),
              i = s,
              a = l,
              this.angle += this.angleIncrement,
              this.radius += this.radiusIncrement;
            const c = e.colors[o % e.colors.length];
            e.segments < 0
              ? (t.strokeStyle = "transparent",
                o % e.segments && (t.strokeStyle = c))
              : (t.strokeStyle = c,
                o % e.segments && (t.strokeStyle = "transparent")), t.stroke();
          }
        }
      },
      class extends Ye {
        constructor() {
          super(...arguments),
            this.name = "Dashes",
            this.description = "Dashes dashing with dashing dashes",
            this.timer = void 0,
            this.spawnTimer = void 0,
            this.dashes = [],
            this.currentColorIndex = 0;
        }
        getOptions() {
          return {
            spawnSpeed: {
              type: "number",
              human: "Spawn Rate (ms)",
              default: 100,
              rangeMin: 10,
              rangeMax: 1e3,
            },
            maxLifespan: {
              type: "number",
              human: "Max Length",
              default: 100,
              rangeMin: 20,
              rangeMax: 100,
            },
            size: {
              type: "number",
              human: "Size",
              default: 10,
              rangeMin: 5,
              rangeMax: 100,
            },
            diagonals: { type: "boolean", human: "Diagonals", default: !1 },
            backgroundColor: {
              type: "color",
              default: "#000000",
              human: "Background",
            },
            colors: {
              type: "array",
              human: "Colors",
              default: ["#FFFFFF"],
              inner: { type: "color", human: "Yes", default: "#FFFFFF" },
            },
          };
        }
        getPresets() {
          return {
            matrix: { maxLifespan: 10, spawnSpeed: 10, colors: ["#00FF00"] },
          };
        }
        addDash(t, e) {
          let n = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
          ];
          e.diagonals || (n = [[-1, 0], [1, 0], [0, -1], [0, 1]]);
          const r = n[Math.floor(Math.random() * n.length)];
          var i;
          this.currentColorIndex === e.colors.length &&
          (this.currentColorIndex = 0),
            this.dashes.push({
              position: (i = t, {
                x: Math.floor(Math.random() * i.canvas.width),
                y: Math.floor(Math.random() * i.canvas.height),
              }),
              direction: { x: r[0], y: r[1] },
              previousPoints: [],
              lifespan: qe(20, e.maxLifespan),
              life: 0,
              size: e.size,
              opacity: 1,
              color: e.colors[this.currentColorIndex],
            }),
            this.currentColorIndex++;
        }
        draw(t, e) {
          t.canvas.style.backgroundColor = e.backgroundColor,
            this.addDash(t, e),
            this.spawnTimer = setInterval(() => {
              this.addDash(t, e);
            }, e.spawnSpeed),
            this.timer = setInterval(() => {
              t.clearRect(0, 0, t.canvas.width, t.canvas.height);
              for (const e of this.dashes) {
                e.life < e.lifespan &&
                  (t.fillStyle = $e(e.color, e.opacity),
                    t.fillRect(e.position.x, e.position.y, e.size, e.size));
                for (
                  const n in e.previousPoints
                ) {
                  t.fillStyle = $e(e.color, 0 + parseInt(n) / 50),
                    t.fillRect(
                      e.previousPoints[n].x,
                      e.previousPoints[n].y,
                      e.size,
                      e.size,
                    );
                }
                if (e.life > e.lifespan && 0 === e.previousPoints.length) {
                  this
                    .dashes[this.dashes.indexOf(e)] = null;
                } else if (e.life > e.lifespan) {
                  e.previousPoints.shift();
                  for (
                    const t of e.previousPoints
                  ) {
                    t.x += e.direction.x * e.size,
                      t.y += e.direction.y * e.size;
                  }
                } else {e.previousPoints.push({ ...e.position }),
                    e.position.x += e.direction.x * e.size,
                    e.position.y += e.direction.y * e.size,
                    e.life++;}
              }
              this.dashes = this.dashes.filter((t) => t);
            }, 1e3 / 60);
        }
        stop() {
          clearInterval(this.timer), clearInterval(this.spawnTimer);
        }
      },
      class extends Ye {
        constructor() {
          super(...arguments),
            this.name = "Fireworks",
            this.description = "Fireworks go boom",
            this.fireworks = [],
            this.spawnTimer = void 0,
            this.drawTimer = void 0,
            this.opacityChange = .2;
        }
        getOptions() {
          return {
            spawnSpeed: {
              type: "number",
              human: "Spawn Speed (ms)",
              rangeMin: 50,
              rangeMax: 1e3,
              default: 200,
            },
            spawnChance: {
              type: "number",
              human: "Spawn Chance",
              rangeMin: 10,
              rangeMax: 100,
              default: 80,
            },
            xDeviation: {
              type: "number",
              human: "Spawn Deviation",
              rangeMin: 0,
              rangeMax: 500,
              default: 100,
            },
            spread: {
              type: "number",
              human: "Spread",
              rangeMin: 5,
              default: 30,
              rangeMax: 100,
            },
            maxBurst: {
              type: "number",
              human: "Max Burst",
              rangeMin: 1,
              rangeMax: 10,
              default: 5,
            },
            maxFragments: {
              type: "number",
              human: "Max Fragments",
              default: 15,
              rangeMin: 5,
              rangeMax: 50,
            },
            maxFragmentLife: {
              type: "number",
              human: "Fragment Life",
              default: 70,
              rangeMin: 10,
              rangeMax: 200,
            },
            maxFragmentSpeed: {
              type: "number",
              human: "Fragment Speed",
              default: 5,
              rangeMin: 1,
              rangeMax: 15,
            },
            backgroundColor: {
              type: "color",
              default: "#000000",
              human: "Background Color",
            },
            colors: {
              type: "array",
              human: "Colors",
              default: ["#FF0000"],
              inner: { type: "color", human: "Yes", default: "#FF0000" },
            },
            useTrailColor: {
              type: "boolean",
              human: "Use Trail Color",
              default: !0,
            },
            trailColor: {
              type: "color",
              default: "#FFFFFF",
              human: "Trail Color",
            },
          };
        }
        getPresets() {
          return {
            rainbow: {
              colors: [
                "#FF0018",
                "#FFA52C",
                "#FFFF41",
                "#008018",
                "#0000F9",
                "#86007D",
              ],
            },
            circles: {
              maxFragmentSpeed: 1,
              maxFragmentLife: 200,
              maxFragments: 50,
            },
          };
        }
        addFirework(t, e) {
          this.fireworks.push({
            position: {
              x: t.canvas.width / 2 + qe(-e.xDeviation, e.xDeviation),
              y: t.canvas.height + 50,
            },
            direction: qe(-e.spread, e.spread) / 100,
            exponent: 0,
            fragments: [],
            yDeath: qe(100, 400),
            color: e.colors[Math.floor(Math.random() * e.colors.length)],
          });
        }
        draw(t, e) {
          t.canvas.style.backgroundColor = e.backgroundColor,
            this.addFirework(t, e),
            this.spawnTimer = setInterval(() => {
              if (Math.random() < e.spawnChance / 100) {
                const n = qe(1, e.maxBurst);
                for (let r = 0; r !== n; r++) this.addFirework(t, e);
              }
            }, e.spawnSpeed),
            this.drawTimer = setInterval(() => {
              t.clearRect(0, 0, t.canvas.width, t.canvas.height);
              for (const n of this.fireworks) {
                if (n.position.y < n.yDeath) {
                  if (0 === n.fragments.length) {
                    const t = qe(5, e.maxFragments);
                    for (let r = 0; r !== t; r++) {
                      n.fragments.push({
                        position: { ...n.position },
                        angle: qe(0, 360),
                        life: 0,
                        maxLife: qe(10, e.maxFragmentLife),
                        speed: qe(1, e.maxFragmentSpeed),
                        color: (Math.random() > .5
                          ? Je(n.color).lighten(qe(10, 50))
                          : Je(n.color).darken(qe(10, 50))).toHexString(),
                      });
                    }
                  }
                  for (const e of n.fragments) {
                    if (t.fillStyle = e.color, e.life > e.maxLife) {
                      const n = (e.life - e.maxLife) /
                        (100 * this.opacityChange);
                      t.fillStyle = $e(e.color, 1 - n);
                    }
                    t.fillRect(e.position.x, e.position.y, 5, 5);
                    const r = e.angle * Math.PI / 180;
                    e.position.x += Math.cos(r) * e.speed,
                      e.position.y += Math.sin(r) * e.speed,
                      e.life++,
                      e.life > e.maxLife + 100 * this.opacityChange &&
                      (n.fragments[n.fragments.indexOf(e)] = null);
                  }
                  n.fragments = n.fragments.filter((t) => t),
                    0 === n.fragments.length &&
                    (this.fireworks[this.fireworks.indexOf(n)] = null);
                } else {t.fillStyle = e.useTrailColor ? e.trailColor : n.color,
                    t.fillRect(n.position.x, n.position.y, 10, 10),
                    n.position.y -= 10,
                    n.position.x += n.exponent,
                    n.exponent += n.direction;}
              }
              this.fireworks = this.fireworks.filter((t) => t);
            }, 1e3 / 60);
        }
        stop() {
          clearInterval(this.drawTimer), clearInterval(this.spawnTimer);
        }
      },
    ],
    Tn = Pn;
  function Rn() {
    return (0, s.jsxs)(m, {
      children: [
        (0, s.jsx)(f, {}),
        (0, s.jsx)(g, {
          children: (0, s.jsx)(y, {
            children: Tn.map((t, e) =>
              (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(l, {
                  href: `/hypno/visuals/${e}`,
                  children: (0, s.jsx)(b, {
                    title: `${(new t()).name}`,
                    children: (0, s.jsx)(d, {
                      children: (new t()).description,
                    }),
                  }),
                }),
              })
            ),
          }),
        }),
      ],
    });
  }
  function On(t) {
    let { type: e, big: n, href: r, children: i, ...a } = t;
    const o = `dawn-button ${n && "dawn-big-control"} ${e ? `dawn-${e}` : ""}`;
    return r
      ? (0, s.jsx)("a", {
        href: r,
        className: "dawn-link " + o,
        ...a,
        children: i,
      })
      : (0, s.jsx)("button", { className: o, ...a, children: i });
  }
  function Dn(t) {
    const [e, n] = (0, i.useState)([]), [r, a] = (0, i.useState)([]);
    function o() {
      a((e) => [...e, t.input.value || "1"]),
        t.onChange([...r, t.input.value || "1"]),
        n((t) => [...t, Math.random()]);
    }
    return (0, i.useEffect)(() => {
      if (t.currentValues) {
        t.currentValues
          ? (a([...t.currentValues]), t.onChange([...t.currentValues]))
          : (a([t.input.value || "1"]), t.onChange([t.input.value || "1"]));
        const e = [];
        for (let n = 0; n != t.currentValues.length; n++) e.push(Math.random());
        n(e);
      } else o();
    }, [t.updateKey]),
      (0, s.jsxs)("div", {
        children: [
          e.map((i) =>
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("input", {
                  ...t.input,
                  ..."checkbox" === t.input.type
                    ? { checked: r[e.findIndex((t) => t === i)] }
                    : { value: r[e.findIndex((t) => t === i)] },
                  onChange: (n) =>
                    function (n, r) {
                      let i = n.target.value;
                      "checkbox" === n.target.type && (i = n.target.checked);
                      const o = e.findIndex((t) => t === r);
                      -1 !== o && a((e) => {
                        const n = [...e];
                        return n[o] = i,
                          setTimeout(() => {
                            t.onChange(n);
                          }, 100),
                          n;
                      });
                    }(n, i),
                }),
                (0, s.jsx)(On, {
                  onClick: () => {
                    return r = i,
                      a((n) => {
                        const i = [...n];
                        return i.splice(e.findIndex((t) => t === r), 1),
                          setTimeout(() => {
                            t.onChange(i);
                          }, 100),
                          i;
                      }),
                      void n((t) => {
                        const n = [...t];
                        return n.splice(
                          e.findIndex((t) => t === r),
                          1,
                        ),
                          n;
                      });
                    var r;
                  },
                  children: "X",
                }),
                (0, s.jsx)("br", {}),
              ],
            }, i)
          ),
          (0, s.jsx)(On, { onClick: o, children: "Add" }),
        ],
      });
  }
  function Ln(t) {
    return "number" === t.type
      ? {
        type: "range",
        min: t.rangeMin,
        max: t.rangeMax,
        step: t.rangeMin || 1,
      }
      : "boolean" === t.type
      ? { type: "checkbox", value: t.default ? "on" : "off" }
      : "array" === t.type
      ? Ln(t.inner)
      : "color" === t.type
      ? { type: "color", value: t.default }
      : {};
  }
  function An(t) {
    var e, n, r, i, a;
    let { name: o, option: l, current: c, set: u } = t;
    const h = Ln(l);
    return (0, s.jsx)(s.Fragment, {
      children: {
        number: (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("input", {
              ...h,
              value: null !== (e = c[o]) && void 0 !== e ? e : l.default,
              onChange: (t) => u(l, o, t),
            }),
            (0, s.jsx)("label", {
              children: null !== (n = c[o]) && void 0 !== n ? n : l.default,
            }),
          ],
        }),
        color: (0, s.jsx)("input", {
          ...h,
          value: null !== (r = c[o]) && void 0 !== r ? r : l.default,
          onChange: (t) => u(l, o, t),
        }),
        boolean: (0, s.jsx)("input", {
          ...h,
          checked: null !== (i = c[o]) && void 0 !== i ? i : l.default,
          onChange: (t) => u(l, o, t),
        }),
        array: (0, s.jsx)(Dn, {
          currentValues: null !== (a = c[o]) && void 0 !== a ? a : l.default,
          input: h,
          onChange: (t) => u(l, o, t),
        }),
      }[l.type],
    });
  }
  let Fn = [], jn = () => {};
  function zn() {
    const [t, e] = (0, i.useState)(null);
    function n() {
      e(Fn[Fn.length - 1]);
    }
    return (0, i.useEffect)(() => {
      jn = (t) => {
        Fn.push(t), n();
      };
    }, []),
      t && (0, s.jsx)("div", {
        className: "dawn-fullscreen",
        children: (0, s.jsx)("div", {
          className: "dawn-page-center",
          children: (0, s.jsxs)("div", {
            className: "dawn-alert",
            children: [
              (0, s.jsx)("label", {
                className: "dawn-alert-title",
                children: t.title,
              }),
              (0, s.jsx)("div", {
                className: "dawn-alert-content",
                children: t.body,
              }),
              (0, s.jsx)(h, {
                children: t.buttons.map((t) =>
                  (0, s.jsx)(On, {
                    big: !0,
                    onClick: () => t.click(() => (Fn.pop(), void n())),
                    children: t.text,
                  })
                ),
              }),
            ],
          }),
        }),
      });
  }
  const Nn = {
      deep: [
        "drop",
        "deeper",
        "down",
        "snap",
        "relax",
        "sinking",
        "drifting",
        "dropping",
        "dropped",
        "sinked",
        "now",
        "sleep",
        "rest",
        "calm",
      ],
      numbers: "0,1,2,3,4,5,6,7,8,9,10".split(","),
    },
    In = {
      usePreset: !0,
      preset: "deep",
      customWords: "",
      enabled: !0,
      opacity: .5,
    };
  function Bn() {
    var t, e, n, r, a;
    const [o, l] = (0, i.useState)(void 0),
      [c, u] = (0, i.useState)({}),
      [h, p] = (0, i.useState)(-1),
      [v, x] = (0, i.useState)(""),
      [w, _] = (0, i.useState)(""),
      [k, S] = (0, i.useState)({ ...In }),
      [M, E] = (0, i.useState)(!1),
      C = (0, i.useRef)(null);
    function P(t, e, n) {
      const r = { ...c };
      switch (t.type) {
        case "number":
          r[e] = parseFloat(n.target.value);
          break;
        case "boolean":
          r[e] = n.target.checked;
          break;
        case "array":
          r[e] = n;
          break;
        case "color":
          r[e] = n.target.value;
      }
      u(r), T(r);
    }
    function T(t) {
      x(`${window.location.protocol}//${window.location.host}${window.location.pathname}?options=${
        btoa(JSON.stringify(t))
      }`);
    }
    function R(t, e) {
      console.log(t, e),
        S((n) => {
          const r = { ...n };
          return r[t] = e,
            localStorage.setItem("text_flash_options", JSON.stringify(r)),
            { ...r };
        });
    }
    return (0, i.useEffect)(() => {
      const t = window.location.pathname.match(/[0-9]+/);
      if (!t || parseInt(t[0]) >= Tn.length) {
        return void (window.location.href = "/hypno/visuals");
      }
      const e = parseInt(t[0]);
      p(e);
      const n = Tn[parseInt(t[0])];
      if (l(new n()), window.location.search) {
        let t = window.location.search.match(/options=[a-zA-Z0-9=]+/);
        if (t) {
          try {
            const e = JSON.parse(atob(t[0].replace(/options=/, "")));
            u(e);
          } catch {}
        }
      }
      const r = localStorage.getItem("text_flash_options");
      r && S(JSON.parse(r));
    }, []),
      M
        ? (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("canvas", { style: { overflow: "hidden" }, ref: C }),
            (0, s.jsx)("label", {
              style: { opacity: k.opacity },
              className: "dawn-visual-text",
              children: w,
            }),
          ],
        })
        : (0, s.jsxs)(m, {
          children: [
            (0, s.jsx)(f, {
              title: (0, s.jsxs)(d, {
                type: "heading",
                children: [
                  "Configure: ",
                  (null === o || void 0 === o ? void 0 : o.name) || "???",
                ],
              }),
            }),
            (0, s.jsxs)(g, {
              children: [
                (0, s.jsxs)(y, {
                  fullWidth: !0,
                  children: [
                    (0, s.jsxs)(b, {
                      title: "Visual's Settings",
                      children: [
                        (0, s.jsx)(d, {
                          children: null === o || void 0 === o
                            ? void 0
                            : o.description,
                        }),
                        (0, s.jsx)("table", {
                          children: (0, s.jsxs)("tbody", {
                            children: [
                              Object.entries(
                                null !== (t = null === o || void 0 === o
                                      ? void 0
                                      : o.getOptions()) && void 0 !== t
                                  ? t
                                  : {},
                              ).map((t) => {
                                let [e, n] = t;
                                return (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("td", {
                                      children: (0, s.jsx)("b", {
                                        children: n.human,
                                      }),
                                    }),
                                    (0, s.jsx)("td", {
                                      children: (0, s.jsx)(An, {
                                        name: e,
                                        option: n,
                                        current: c,
                                        set: P,
                                      }),
                                    }),
                                  ],
                                }, e);
                              }),
                              (0, s.jsx)("tr", {
                                children: Object.keys(
                                      null !== (e = null === o || void 0 === o
                                            ? void 0
                                            : o.getPresets()) && void 0 !== e
                                        ? e
                                        : {},
                                    ).length > 0 && (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)("td", {
                                        children: (0, s.jsx)("b", {
                                          children: "Presets:",
                                        }),
                                      }),
                                      (0, s.jsx)("td", {
                                        children: Object.entries(
                                          null !==
                                              (n = null === o || void 0 === o
                                                ? void 0
                                                : o.getPresets()) &&
                                            void 0 !== n
                                            ? n
                                            : {},
                                        ).map((t) => {
                                          let [e, n] = t;
                                          return (0, s.jsx)(On, {
                                            onClick: () =>
                                              function (t) {
                                                const e = { ...c };
                                                u({ ...e, ...t }),
                                                  T({ ...e, ...t }),
                                                  E(!0),
                                                  setTimeout(() => {
                                                    E(!1);
                                                  }, 10);
                                              }(n),
                                            children: e,
                                          }, e);
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(On, {
                          onClick: function () {
                            E(!0),
                              setTimeout(async () => {
                                const t = C.current;
                                if (!t) return alert("Failed to get canvas.");
                                var e;
                                window.chrome ||
                                localStorage.getItem("browser_warn") ||
                                (localStorage.setItem("browser_warn", "true"),
                                  await (e =
                                    "You are not using a chromium-based web browser. You may see stutters.",
                                    new Promise((t) => {
                                      jn({
                                        title: "Information",
                                        body: (0, s.jsx)("label", {
                                          children: e,
                                        }),
                                        buttons: [{
                                          id: "ok",
                                          text: "OK!",
                                          click: (e) => {
                                            e(), t();
                                          },
                                        }],
                                      });
                                    }))),
                                  t.width = window.innerWidth,
                                  t.height = window.innerHeight;
                                const n = {};
                                for (
                                  const [s, c] of Object.entries(o.getOptions())
                                ) {
                                  n[s] = c.default;
                                }
                                const r = new (0, Tn[h])(),
                                  i = document.body.style.overflow;
                                document.body.style.overflow = "hidden";
                                const a = t.getContext("2d");
                                let l;
                                a.textBaseline = "middle",
                                  a.textAlign = "center",
                                  a.font = "30px Arial",
                                  a.fillStyle = "white",
                                  a.fillText(
                                    "Click anywhere to stop",
                                    t.width / 2,
                                    t.height / 2,
                                  ),
                                  setTimeout(() => {
                                    if (r.draw(a, { ...n, ...c }), k.enabled) {
                                      const t = k.customWords.split(",");
                                      let e = 0;
                                      l = setInterval(() => {
                                        if (
                                          Math.random() > .8 && "" === w &&
                                          700 - (Date.now() - e) < 0
                                        ) {
                                          const n = k.usePreset
                                            ? Nn[k.preset][
                                              Math.floor(
                                                Math.random() *
                                                  Nn[k.preset].length,
                                              )
                                            ]
                                            : t[
                                              Math.floor(
                                                Math.random() * t.length,
                                              )
                                            ];
                                          _(n.trim()),
                                            e = Date.now(),
                                            setTimeout(() => {
                                              _("");
                                            }, qe(100, 400));
                                        }
                                      }, 100);
                                    }
                                  }, 1e3),
                                  t.onclick = () => {
                                    r.stop(),
                                      E(!1),
                                      clearInterval(l),
                                      _(""),
                                      document.body.style.overflow = i;
                                  };
                              }, 10);
                          },
                          big: !0,
                          children: "Play",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(b, {
                      title: "Text Flashing",
                      children: [
                        (0, s.jsx)(d, {
                          children:
                            "Flash different words on the screen randomly.",
                        }),
                        (0, s.jsx)("table", {
                          children: (0, s.jsxs)("tbody", {
                            children: [
                              (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("b", {
                                      children: "Enabled",
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("input", {
                                      onChange: (t) =>
                                        R("enabled", t.currentTarget.checked),
                                      checked: k.enabled,
                                      type: "checkbox",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("b", {
                                      children: "Use Preset",
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("input", {
                                      onChange: (t) =>
                                        R("usePreset", t.currentTarget.checked),
                                      checked: k.usePreset,
                                      type: "checkbox",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("b", {
                                      children: "Preset",
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("select", {
                                      onChange: (t) =>
                                        R(
                                          "preset",
                                          t.currentTarget[
                                            t.currentTarget.selectedIndex
                                          ].value,
                                        ),
                                      defaultValue:
                                        null !== (r = k.preset) && void 0 !== r
                                          ? r
                                          : "deep",
                                      children: Object.keys(Nn).map((t) =>
                                        (0, s.jsx)("option", {
                                          value: t,
                                          children: t,
                                        }, t)
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("b", {
                                      children: "Custom Words",
                                    }),
                                  }),
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("textarea", {
                                      onChange: (t) =>
                                        R("customWords", t.currentTarget.value),
                                      value: k.customWords,
                                      placeholder:
                                        "Words / Phrases split by commas",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("td", {
                                    children: (0, s.jsx)("b", {
                                      children: "Opacity",
                                    }),
                                  }),
                                  (0, s.jsxs)("td", {
                                    children: [
                                      (0, s.jsx)("input", {
                                        type: "range",
                                        step: .05,
                                        min: .05,
                                        max: 1,
                                        value: k.opacity,
                                        onChange: (t) =>
                                          R(
                                            "opacity",
                                            parseFloat(t.currentTarget.value),
                                          ),
                                      }),
                                      (0, s.jsxs)("label", {
                                        children: [
                                          (100 * k.opacity).toFixed(0),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("b", {
                          children: "Words that will be shown:",
                        }),
                        (0, s.jsx)("br", {}),
                        k.usePreset
                          ? Nn[
                            null !== (a = k.preset) && void 0 !== a ? a : "deep"
                          ].join(", ")
                          : k.customWords,
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(y, {
                  children: (0, s.jsxs)(b, {
                    width: "400px",
                    title: "Share",
                    children: [
                      (0, s.jsx)(d, {
                        children:
                          "Share the following link to show others this visual.",
                      }),
                      (0, s.jsx)("input", { readOnly: !0, value: v }),
                      (0, s.jsx)(On, {
                        onClick: () =>
                          window.navigator.clipboard.writeText(v),
                        children: "Copy",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
  }
  function Vn(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  const { toString: Hn } = Object.prototype,
    { getPrototypeOf: Un } = Object,
    Wn = ($n = Object.create(null), (t) => {
      const e = Hn.call(t);
      return $n[e] || ($n[e] = e.slice(8, -1).toLowerCase());
    });
  var $n;
  const qn = (t) => (t = t.toLowerCase(), (e) => Wn(e) === t),
    Yn = (t) => (e) => typeof e === t,
    { isArray: Qn } = Array,
    Kn = Yn("undefined");
  const Xn = qn("ArrayBuffer");
  const Jn = Yn("string"),
    Gn = Yn("function"),
    Zn = Yn("number"),
    tr = (t) => null !== t && "object" === typeof t,
    er = (t) => {
      if ("object" !== Wn(t)) return !1;
      const e = Un(t);
      return (null === e || e === Object.prototype ||
        null === Object.getPrototypeOf(e)) &&
        !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
    },
    nr = qn("Date"),
    rr = qn("File"),
    ir = qn("Blob"),
    ar = qn("FileList"),
    or = qn("URLSearchParams"),
    [sr, lr, cr, ur] = ["ReadableStream", "Request", "Response", "Headers"].map(
      qn,
    );
  function hr(t, e) {
    let n,
      r,
      { allOwnKeys: i = !1 } = arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : {};
    if (null !== t && "undefined" !== typeof t) {
      if ("object" !== typeof t && (t = [t]), Qn(t)) {
        for (n = 0, r = t.length; n < r; n++) {
          e.call(null, t[n], n, t);
        }
      } else {
        const r = i ? Object.getOwnPropertyNames(t) : Object.keys(t),
          a = r.length;
        let o;
        for (n = 0; n < a; n++) o = r[n], e.call(null, t[o], o, t);
      }
    }
  }
  function dr(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let r, i = n.length;
    for (; i-- > 0;) if (r = n[i], e === r.toLowerCase()) return r;
    return null;
  }
  const fr = "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self
      ? self
      : "undefined" !== typeof window
      ? window
      : global,
    pr = (t) => !Kn(t) && t !== fr;
  const gr =
    (mr = "undefined" !== typeof Uint8Array && Un(Uint8Array),
      (t) => mr && t instanceof mr);
  var mr;
  const br = qn("HTMLFormElement"),
    yr = ((t) => {
      let { hasOwnProperty: e } = t;
      return (t, n) => e.call(t, n);
    })(Object.prototype),
    vr = qn("RegExp"),
    xr = (t, e) => {
      const n = Object.getOwnPropertyDescriptors(t), r = {};
      hr(n, (n, i) => {
        let a;
        !1 !== (a = e(n, i, t)) && (r[i] = a || n);
      }), Object.defineProperties(t, r);
    },
    wr = "abcdefghijklmnopqrstuvwxyz",
    _r = "0123456789",
    kr = { DIGIT: _r, ALPHA: wr, ALPHA_DIGIT: wr + wr.toUpperCase() + _r };
  const Sr = qn("AsyncFunction"),
    Mr = ((t, e) => {
      return t
        ? setImmediate
        : e
        ? (n = `axios@${Math.random()}`,
          r = [],
          fr.addEventListener("message", (t) => {
            let { source: e, data: i } = t;
            e === fr && i === n && r.length && r.shift()();
          }, !1),
          (t) => {
            r.push(t), fr.postMessage(n, "*");
          })
        : (t) => setTimeout(t);
      var n, r;
    })("function" === typeof setImmediate, Gn(fr.postMessage)),
    Er = "undefined" !== typeof queueMicrotask
      ? queueMicrotask.bind(fr)
      : "undefined" !== typeof process && process.nextTick || Mr,
    Cr = {
      isArray: Qn,
      isArrayBuffer: Xn,
      isBuffer: function (t) {
        return null !== t && !Kn(t) && null !== t.constructor &&
          !Kn(t.constructor) && Gn(t.constructor.isBuffer) &&
          t.constructor.isBuffer(t);
      },
      isFormData: (t) => {
        let e;
        return t &&
          ("function" === typeof FormData && t instanceof FormData ||
            Gn(t.append) &&
              ("formdata" === (e = Wn(t)) ||
                "object" === e && Gn(t.toString) &&
                  "[object FormData]" === t.toString()));
      },
      isArrayBufferView: function (t) {
        let e;
        return e = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && Xn(t.buffer),
          e;
      },
      isString: Jn,
      isNumber: Zn,
      isBoolean: (t) => !0 === t || !1 === t,
      isObject: tr,
      isPlainObject: er,
      isReadableStream: sr,
      isRequest: lr,
      isResponse: cr,
      isHeaders: ur,
      isUndefined: Kn,
      isDate: nr,
      isFile: rr,
      isBlob: ir,
      isRegExp: vr,
      isFunction: Gn,
      isStream: (t) => tr(t) && Gn(t.pipe),
      isURLSearchParams: or,
      isTypedArray: gr,
      isFileList: ar,
      forEach: hr,
      merge: function t() {
        const { caseless: e } = pr(this) && this || {},
          n = {},
          r = (r, i) => {
            const a = e && dr(n, i) || i;
            er(n[a]) && er(r)
              ? n[a] = t(n[a], r)
              : er(r)
              ? n[a] = t({}, r)
              : Qn(r)
              ? n[a] = r.slice()
              : n[a] = r;
          };
        for (let i = 0, a = arguments.length; i < a; i++) {
          arguments[i] && hr(arguments[i], r);
        }
        return n;
      },
      extend: function (t, e, n) {
        let { allOwnKeys: r } = arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : {};
        return hr(e, (e, r) => {
          n && Gn(e) ? t[r] = Vn(e, n) : t[r] = e;
        }, { allOwnKeys: r }),
          t;
      },
      trim: (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
      inherits: (t, e, n, r) => {
        t.prototype = Object.create(e.prototype, r),
          t.prototype.constructor = t,
          Object.defineProperty(t, "super", { value: e.prototype }),
          n && Object.assign(t.prototype, n);
      },
      toFlatObject: (t, e, n, r) => {
        let i, a, o;
        const s = {};
        if (e = e || {}, null == t) return e;
        do {
          for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0;) {
            o = i[a], r && !r(o, t, e) || s[o] || (e[o] = t[o], s[o] = !0);
          }
          t = !1 !== n && Un(t);
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e;
      },
      kindOf: Wn,
      kindOfTest: qn,
      endsWith: (t, e, n) => {
        t = String(t),
          (void 0 === n || n > t.length) && (n = t.length),
          n -= e.length;
        const r = t.indexOf(e, n);
        return -1 !== r && r === n;
      },
      toArray: (t) => {
        if (!t) return null;
        if (Qn(t)) return t;
        let e = t.length;
        if (!Zn(e)) return null;
        const n = new Array(e);
        for (; e-- > 0;) n[e] = t[e];
        return n;
      },
      forEachEntry: (t, e) => {
        const n = (t && t[Symbol.iterator]).call(t);
        let r;
        for (; (r = n.next()) && !r.done;) {
          const n = r.value;
          e.call(t, n[0], n[1]);
        }
      },
      matchAll: (t, e) => {
        let n;
        const r = [];
        for (; null !== (n = t.exec(e));) r.push(n);
        return r;
      },
      isHTMLForm: br,
      hasOwnProperty: yr,
      hasOwnProp: yr,
      reduceDescriptors: xr,
      freezeMethods: (t) => {
        xr(t, (e, n) => {
          if (Gn(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) {
            return !1;
          }
          const r = t[n];
          Gn(r) &&
            (e.enumerable = !1,
              "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
        });
      },
      toObjectSet: (t, e) => {
        const n = {},
          r = (t) => {
            t.forEach((t) => {
              n[t] = !0;
            });
          };
        return Qn(t) ? r(t) : r(String(t).split(e)), n;
      },
      toCamelCase: (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
          return e.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (t, e) => null != t && Number.isFinite(t = +t) ? t : e,
      findKey: dr,
      global: fr,
      isContextDefined: pr,
      ALPHABET: kr,
      generateString: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 16,
          e = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : kr.ALPHA_DIGIT,
          n = "";
        const { length: r } = e;
        for (; t--;) n += e[Math.random() * r | 0];
        return n;
      },
      isSpecCompliantForm: function (t) {
        return !!(t && Gn(t.append) && "FormData" === t[Symbol.toStringTag] &&
          t[Symbol.iterator]);
      },
      toJSONObject: (t) => {
        const e = new Array(10),
          n = (t, r) => {
            if (tr(t)) {
              if (e.indexOf(t) >= 0) return;
              if (!("toJSON" in t)) {
                e[r] = t;
                const i = Qn(t) ? [] : {};
                return hr(t, (t, e) => {
                  const a = n(t, r + 1);
                  !Kn(a) && (i[e] = a);
                }),
                  e[r] = void 0,
                  i;
              }
            }
            return t;
          };
        return n(t, 0);
      },
      isAsyncFn: Sr,
      isThenable: (t) => t && (tr(t) || Gn(t)) && Gn(t.then) && Gn(t.catch),
      setImmediate: Mr,
      asap: Er,
    };
  function Pr(t, e, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : this.stack = (new Error()).stack,
      this.message = t,
      this.name = "AxiosError",
      e && (this.code = e),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i, this.status = i.status ? i.status : null);
  }
  Cr.inherits(Pr, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Cr.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Tr = Pr.prototype, Rr = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((t) => {
    Rr[t] = { value: t };
  }),
    Object.defineProperties(Pr, Rr),
    Object.defineProperty(Tr, "isAxiosError", { value: !0 }),
    Pr.from = (t, e, n, r, i, a) => {
      const o = Object.create(Tr);
      return Cr.toFlatObject(t, o, function (t) {
        return t !== Error.prototype;
      }, (t) => "isAxiosError" !== t),
        Pr.call(o, t.message, e, n, r, i),
        o.cause = t,
        o.name = t.name,
        a && Object.assign(o, a),
        o;
    };
  const Or = Pr;
  function Dr(t) {
    return Cr.isPlainObject(t) || Cr.isArray(t);
  }
  function Lr(t) {
    return Cr.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function Ar(t, e, n) {
    return t
      ? t.concat(e).map(function (t, e) {
        return t = Lr(t), !n && e ? "[" + t + "]" : t;
      }).join(n ? "." : "")
      : e;
  }
  const Fr = Cr.toFlatObject(Cr, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  const jr = function (t, e, n) {
    if (!Cr.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData();
    const r = (n = Cr.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (t, e) {
          return !Cr.isUndefined(e[t]);
        },
      )).metaTokens,
      i = n.visitor || c,
      a = n.dots,
      o = n.indexes,
      s = (n.Blob || "undefined" !== typeof Blob && Blob) &&
        Cr.isSpecCompliantForm(e);
    if (!Cr.isFunction(i)) throw new TypeError("visitor must be a function");
    function l(t) {
      if (null === t) return "";
      if (Cr.isDate(t)) return t.toISOString();
      if (!s && Cr.isBlob(t)) {
        throw new Or("Blob is not supported. Use a Buffer instead.");
      }
      return Cr.isArrayBuffer(t) || Cr.isTypedArray(t)
        ? s && "function" === typeof Blob ? new Blob([t]) : Buffer.from(t)
        : t;
    }
    function c(t, n, i) {
      let s = t;
      if (t && !i && "object" === typeof t) {
        if (Cr.endsWith(n, "{}")) {
          n = r ? n : n.slice(0, -2), t = JSON.stringify(t);
        } else if (
          Cr.isArray(t) && function (t) {
              return Cr.isArray(t) && !t.some(Dr);
            }(t) ||
          (Cr.isFileList(t) || Cr.endsWith(n, "[]")) && (s = Cr.toArray(t))
        ) {
          return n = Lr(n),
            s.forEach(function (t, r) {
              !Cr.isUndefined(t) && null !== t &&
                e.append(
                  !0 === o ? Ar([n], r, a) : null === o ? n : n + "[]",
                  l(t),
                );
            }),
            !1;
        }
      }
      return !!Dr(t) || (e.append(Ar(i, n, a), l(t)), !1);
    }
    const u = [],
      h = Object.assign(Fr, {
        defaultVisitor: c,
        convertValue: l,
        isVisitable: Dr,
      });
    if (!Cr.isObject(t)) throw new TypeError("data must be an object");
    return function t(n, r) {
      if (!Cr.isUndefined(n)) {
        if (-1 !== u.indexOf(n)) {
          throw Error("Circular reference detected in " + r.join("."));
        }
        u.push(n),
          Cr.forEach(n, function (n, a) {
            !0 ===
                (!(Cr.isUndefined(n) || null === n) &&
                  i.call(e, n, Cr.isString(a) ? a.trim() : a, r, h)) &&
              t(n, r ? r.concat(a) : [a]);
          }),
          u.pop();
      }
    }(t),
      e;
  };
  function zr(t) {
    const e = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
      return e[t];
    });
  }
  function Nr(t, e) {
    this._pairs = [], t && jr(t, this, e);
  }
  const Ir = Nr.prototype;
  Ir.append = function (t, e) {
    this._pairs.push([t, e]);
  },
    Ir.toString = function (t) {
      const e = t
        ? function (e) {
          return t.call(this, e, zr);
        }
        : zr;
      return this._pairs.map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "").join("&");
    };
  const Br = Nr;
  function Vr(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$")
      .replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(
        /%5D/gi,
        "]",
      );
  }
  function Hr(t, e, n) {
    if (!e) return t;
    const r = n && n.encode || Vr, i = n && n.serialize;
    let a;
    if (
      a = i
        ? i(e, n)
        : Cr.isURLSearchParams(e)
        ? e.toString()
        : new Br(e, n).toString(r), a
    ) {
      const e = t.indexOf("#");
      -1 !== e && (t = t.slice(0, e)),
        t += (-1 === t.indexOf("?") ? "?" : "&") + a;
    }
    return t;
  }
  const Ur = class {
      constructor() {
        this.handlers = [];
      }
      use(t, e, n) {
        return this.handlers.push({
          fulfilled: t,
          rejected: e,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
          this.handlers.length - 1;
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        Cr.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
    },
    Wr = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    $r = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" !== typeof URLSearchParams
          ? URLSearchParams
          : Br,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    qr = "undefined" !== typeof window && "undefined" !== typeof document,
    Yr = "object" === typeof navigator && navigator || void 0,
    Qr = qr &&
      (!Yr || ["ReactNative", "NativeScript", "NS"].indexOf(Yr.product) < 0),
    Kr = "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    Xr = qr && window.location.href || "http://localhost",
    Jr = { ...r, ...$r };
  const Gr = function (t) {
    function e(t, n, r, i) {
      let a = t[i++];
      if ("__proto__" === a) return !0;
      const o = Number.isFinite(+a), s = i >= t.length;
      if (a = !a && Cr.isArray(r) ? r.length : a, s) {
        return Cr.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !o;
      }
      r[a] && Cr.isObject(r[a]) || (r[a] = []);
      return e(t, n, r[a], i) && Cr.isArray(r[a]) && (r[a] = function (t) {
        const e = {}, n = Object.keys(t);
        let r;
        const i = n.length;
        let a;
        for (r = 0; r < i; r++) a = n[r], e[a] = t[a];
        return e;
      }(r[a])),
        !o;
    }
    if (Cr.isFormData(t) && Cr.isFunction(t.entries)) {
      const n = {};
      return Cr.forEachEntry(t, (t, r) => {
        e(
          function (t) {
            return Cr.matchAll(/\w+|\[(\w*)]/g, t).map(
              (t) => "[]" === t[0] ? "" : t[1] || t[0],
            );
          }(t),
          r,
          n,
          0,
        );
      }),
        n;
    }
    return null;
  };
  const Zr = {
    transitional: Wr,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (t, e) {
      const n = e.getContentType() || "",
        r = n.indexOf("application/json") > -1,
        i = Cr.isObject(t);
      i && Cr.isHTMLForm(t) && (t = new FormData(t));
      if (Cr.isFormData(t)) return r ? JSON.stringify(Gr(t)) : t;
      if (
        Cr.isArrayBuffer(t) || Cr.isBuffer(t) || Cr.isStream(t) ||
        Cr.isFile(t) || Cr.isBlob(t) || Cr.isReadableStream(t)
      ) return t;
      if (Cr.isArrayBufferView(t)) return t.buffer;
      if (Cr.isURLSearchParams(t)) {
        return e.setContentType(
          "application/x-www-form-urlencoded;charset=utf-8",
          !1,
        ),
          t.toString();
      }
      let a;
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) {
          return function (t, e) {
            return jr(
              t,
              new Jr.classes.URLSearchParams(),
              Object.assign({
                visitor: function (t, e, n, r) {
                  return Jr.isNode && Cr.isBuffer(t)
                    ? (this.append(e, t.toString("base64")), !1)
                    : r.defaultVisitor.apply(this, arguments);
                },
              }, e),
            );
          }(t, this.formSerializer).toString();
        }
        if ((a = Cr.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const e = this.env && this.env.FormData;
          return jr(
            a ? { "files[]": t } : t,
            e && new e(),
            this.formSerializer,
          );
        }
      }
      return i || r
        ? (e.setContentType("application/json", !1),
          function (t, e, n) {
            if (Cr.isString(t)) {
              try {
                return (e || JSON.parse)(t), Cr.trim(t);
              } catch (qd) {
                if ("SyntaxError" !== qd.name) throw qd;
              }
            }
            return (n || JSON.stringify)(t);
          }(t))
        : t;
    }],
    transformResponse: [function (t) {
      const e = this.transitional || Zr.transitional,
        n = e && e.forcedJSONParsing,
        r = "json" === this.responseType;
      if (Cr.isResponse(t) || Cr.isReadableStream(t)) return t;
      if (t && Cr.isString(t) && (n && !this.responseType || r)) {
        const n = !(e && e.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (qd) {
          if (n) {
            if ("SyntaxError" === qd.name) {
              throw Or.from(qd, Or.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw qd;
          }
        }
      }
      return t;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Jr.classes.FormData, Blob: Jr.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  Cr.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Zr.headers[t] = {};
  });
  const ti = Zr,
    ei = Cr.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    ni = Symbol("internals");
  function ri(t) {
    return t && String(t).trim().toLowerCase();
  }
  function ii(t) {
    return !1 === t || null == t ? t : Cr.isArray(t) ? t.map(ii) : String(t);
  }
  function ai(t, e, n, r, i) {
    return Cr.isFunction(r)
      ? r.call(this, e, n)
      : (i && (e = n),
        Cr.isString(e)
          ? Cr.isString(r)
            ? -1 !== e.indexOf(r)
            : Cr.isRegExp(r)
            ? r.test(e)
            : void 0
          : void 0);
  }
  class oi {
    constructor(t) {
      t && this.set(t);
    }
    set(t, e, n) {
      const r = this;
      function i(t, e, n) {
        const i = ri(e);
        if (!i) throw new Error("header name must be a non-empty string");
        const a = Cr.findKey(r, i);
        (!a || void 0 === r[a] || !0 === n || void 0 === n && !1 !== r[a]) &&
          (r[a || e] = ii(t));
      }
      const a = (t, e) => Cr.forEach(t, (t, n) => i(t, n, e));
      if (Cr.isPlainObject(t) || t instanceof this.constructor) a(t, e);
      else if (
        Cr.isString(t) && (t = t.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
      ) {
        a(
          ((t) => {
            const e = {};
            let n, r, i;
            return t && t.split("\n").forEach(function (t) {
              i = t.indexOf(":"),
                n = t.substring(0, i).trim().toLowerCase(),
                r = t.substring(i + 1).trim(),
                !n || e[n] && ei[n] || ("set-cookie" === n
                  ? e[n] ? e[n].push(r) : e[n] = [r]
                  : e[n] = e[n] ? e[n] + ", " + r : r);
            }),
              e;
          })(t),
          e,
        );
      } else if (Cr.isHeaders(t)) {
        for (const [o, s] of t.entries()) {
          i(s, o, n);
        }
      } else null != t && i(e, t, n);
      return this;
    }
    get(t, e) {
      if (t = ri(t)) {
        const n = Cr.findKey(this, t);
        if (n) {
          const t = this[n];
          if (!e) return t;
          if (!0 === e) {
            return function (t) {
              const e = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; r = n.exec(t);) e[r[1]] = r[2];
              return e;
            }(t);
          }
          if (Cr.isFunction(e)) return e.call(this, t, n);
          if (Cr.isRegExp(e)) return e.exec(t);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, e) {
      if (t = ri(t)) {
        const n = Cr.findKey(this, t);
        return !(!n || void 0 === this[n] || e && !ai(0, this[n], n, e));
      }
      return !1;
    }
    delete(t, e) {
      const n = this;
      let r = !1;
      function i(t) {
        if (t = ri(t)) {
          const i = Cr.findKey(n, t);
          !i || e && !ai(0, n[i], i, e) || (delete n[i], r = !0);
        }
      }
      return Cr.isArray(t) ? t.forEach(i) : i(t), r;
    }
    clear(t) {
      const e = Object.keys(this);
      let n = e.length, r = !1;
      for (; n--;) {
        const i = e[n];
        t && !ai(0, this[i], i, t, !0) || (delete this[i], r = !0);
      }
      return r;
    }
    normalize(t) {
      const e = this, n = {};
      return Cr.forEach(this, (r, i) => {
        const a = Cr.findKey(n, i);
        if (a) return e[a] = ii(r), void delete e[i];
        const o = t
          ? function (t) {
            return t.trim().toLowerCase().replace(
              /([a-z\d])(\w*)/g,
              (t, e, n) => e.toUpperCase() + n,
            );
          }(i)
          : String(i).trim();
        o !== i && delete e[i], e[o] = ii(r), n[o] = !0;
      }),
        this;
    }
    concat() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      return this.constructor.concat(this, ...e);
    }
    toJSON(t) {
      const e = Object.create(null);
      return Cr.forEach(this, (n, r) => {
        null != n && !1 !== n && (e[r] = t && Cr.isArray(n) ? n.join(", ") : n);
      }),
        e;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map((t) => {
        let [e, n] = t;
        return e + ": " + n;
      }).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t) {
      const e = new this(t);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
        i < n;
        i++
      ) r[i - 1] = arguments[i];
      return r.forEach((t) => e.set(t)), e;
    }
    static accessor(t) {
      const e = (this[ni] = this[ni] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(t) {
        const r = ri(t);
        e[r] || (!function (t, e) {
          const n = Cr.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((r) => {
            Object.defineProperty(t, r + n, {
              value: function (t, n, i) {
                return this[r].call(this, e, t, n, i);
              },
              configurable: !0,
            });
          });
        }(n, t),
          e[r] = !0);
      }
      return Cr.isArray(t) ? t.forEach(r) : r(t), this;
    }
  }
  oi.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Cr.reduceDescriptors(oi.prototype, (t, e) => {
      let { value: n } = t, r = e[0].toUpperCase() + e.slice(1);
      return {
        get: () => n,
        set(t) {
          this[r] = t;
        },
      };
    }),
    Cr.freezeMethods(oi);
  const si = oi;
  function li(t, e) {
    const n = this || ti, r = e || n, i = si.from(r.headers);
    let a = r.data;
    return Cr.forEach(t, function (t) {
      a = t.call(n, a, i.normalize(), e ? e.status : void 0);
    }),
      i.normalize(),
      a;
  }
  function ci(t) {
    return !(!t || !t.__CANCEL__);
  }
  function ui(t, e, n) {
    Or.call(this, null == t ? "canceled" : t, Or.ERR_CANCELED, e, n),
      this.name = "CanceledError";
  }
  Cr.inherits(ui, Or, { __CANCEL__: !0 });
  const hi = ui;
  function di(t, e, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? e(
        new Or(
          "Request failed with status code " + n.status,
          [
            Or.ERR_BAD_REQUEST,
            Or.ERR_BAD_RESPONSE,
          ][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      )
      : t(n);
  }
  const fi = function (t, e) {
    t = t || 10;
    const n = new Array(t), r = new Array(t);
    let i, a = 0, o = 0;
    return e = void 0 !== e ? e : 1e3, function (s) {
      const l = Date.now(), c = r[o];
      i || (i = l), n[a] = s, r[a] = l;
      let u = o, h = 0;
      for (; u !== a;) h += n[u++], u %= t;
      if (a = (a + 1) % t, a === o && (o = (o + 1) % t), l - i < e) return;
      const d = c && l - c;
      return d ? Math.round(1e3 * h / d) : void 0;
    };
  };
  const pi = function (t, e) {
      let n, r, i = 0, a = 1e3 / e;
      const o = function (e) {
        let a = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Date.now();
        i = a, n = null, r && (clearTimeout(r), r = null), t.apply(null, e);
      };
      return [function () {
        const t = Date.now(), e = t - i;
        for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) {
          l[c] = arguments[c];
        }
        e >= a ? o(l, t) : (n = l,
          r || (r = setTimeout(() => {
            r = null, o(n);
          }, a - e)));
      }, () => n && o(n)];
    },
    gi = function (t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : 3,
        r = 0;
      const i = fi(50, 250);
      return pi((n) => {
        const a = n.loaded,
          o = n.lengthComputable ? n.total : void 0,
          s = a - r,
          l = i(s);
        r = a;
        t({
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && o && a <= o ? (o - a) / l : void 0,
          event: n,
          lengthComputable: null != o,
          [e ? "download" : "upload"]: !0,
        });
      }, n);
    },
    mi = (t, e) => {
      const n = null != t;
      return [(r) => e[0]({ lengthComputable: n, total: t, loaded: r }), e[1]];
    },
    bi = (t) =>
      function () {
        for (
          var e = arguments.length, n = new Array(e), r = 0;
          r < e;
          r++
        ) n[r] = arguments[r];
        return Cr.asap(() => t(...n));
      },
    yi = Jr.hasStandardBrowserEnv
      ? function () {
        const t = Jr.navigator &&
            /(msie|trident)/i.test(Jr.navigator.userAgent),
          e = document.createElement("a");
        let n;
        function r(n) {
          let r = n;
          return t && (e.setAttribute("href", r), r = e.href),
            e.setAttribute("href", r),
            {
              href: e.href,
              protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
              host: e.host,
              search: e.search ? e.search.replace(/^\?/, "") : "",
              hash: e.hash ? e.hash.replace(/^#/, "") : "",
              hostname: e.hostname,
              port: e.port,
              pathname: "/" === e.pathname.charAt(0)
                ? e.pathname
                : "/" + e.pathname,
            };
        }
        return n = r(window.location.href), function (t) {
          const e = Cr.isString(t) ? r(t) : t;
          return e.protocol === n.protocol && e.host === n.host;
        };
      }()
      : function () {
        return !0;
      },
    vi = Jr.hasStandardBrowserEnv
      ? {
        write(t, e, n, r, i, a) {
          const o = [t + "=" + encodeURIComponent(e)];
          Cr.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            Cr.isString(r) && o.push("path=" + r),
            Cr.isString(i) && o.push("domain=" + i),
            !0 === a && o.push("secure"),
            document.cookie = o.join("; ");
        },
        read(t) {
          const e = document.cookie.match(
            new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5);
        },
      }
      : { write() {}, read: () => null, remove() {} };
  function xi(t, e) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
      ? function (t, e) {
        return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
      }(t, e)
      : e;
  }
  const wi = (t) => t instanceof si ? { ...t } : t;
  function _i(t, e) {
    e = e || {};
    const n = {};
    function r(t, e, n) {
      return Cr.isPlainObject(t) && Cr.isPlainObject(e)
        ? Cr.merge.call({ caseless: n }, t, e)
        : Cr.isPlainObject(e)
        ? Cr.merge({}, e)
        : Cr.isArray(e)
        ? e.slice()
        : e;
    }
    function i(t, e, n) {
      return Cr.isUndefined(e)
        ? Cr.isUndefined(t) ? void 0 : r(void 0, t, n)
        : r(t, e, n);
    }
    function a(t, e) {
      if (!Cr.isUndefined(e)) return r(void 0, e);
    }
    function o(t, e) {
      return Cr.isUndefined(e)
        ? Cr.isUndefined(t) ? void 0 : r(void 0, t)
        : r(void 0, e);
    }
    function s(n, i, a) {
      return a in e ? r(n, i) : a in t ? r(void 0, n) : void 0;
    }
    const l = {
      url: a,
      method: a,
      data: a,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: s,
      headers: (t, e) => i(wi(t), wi(e), !0),
    };
    return Cr.forEach(Object.keys(Object.assign({}, t, e)), function (r) {
      const a = l[r] || i, o = a(t[r], e[r], r);
      Cr.isUndefined(o) && a !== s || (n[r] = o);
    }),
      n;
  }
  const ki = (t) => {
      const e = _i({}, t);
      let n,
        {
          data: r,
          withXSRFToken: i,
          xsrfHeaderName: a,
          xsrfCookieName: o,
          headers: s,
          auth: l,
        } = e;
      if (
        e.headers = s = si.from(s),
          e.url = Hr(xi(e.baseURL, e.url), t.params, t.paramsSerializer),
          l &&
          s.set(
            "Authorization",
            "Basic " + btoa(
              (l.username || "") + ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
          ),
          Cr.isFormData(r)
      ) {
        if (Jr.hasStandardBrowserEnv || Jr.hasStandardBrowserWebWorkerEnv) {
          s.setContentType(void 0);
        } else if (!1 !== (n = s.getContentType())) {
          const [t, ...e] = n
            ? n.split(";").map((t) => t.trim()).filter(Boolean)
            : [];
          s.setContentType([t || "multipart/form-data", ...e].join("; "));
        }
      }
      if (
        Jr.hasStandardBrowserEnv &&
        (i && Cr.isFunction(i) && (i = i(e)), i || !1 !== i && yi(e.url))
      ) {
        const t = a && o && vi.read(o);
        t && s.set(a, t);
      }
      return e;
    },
    Si = "undefined" !== typeof XMLHttpRequest && function (t) {
      return new Promise(function (e, n) {
        const r = ki(t);
        let i = r.data;
        const a = si.from(r.headers).normalize();
        let o,
          s,
          l,
          c,
          u,
          { responseType: h, onUploadProgress: d, onDownloadProgress: f } = r;
        function p() {
          c && c(),
            u && u(),
            r.cancelToken && r.cancelToken.unsubscribe(o),
            r.signal && r.signal.removeEventListener("abort", o);
        }
        let g = new XMLHttpRequest();
        function m() {
          if (!g) return;
          const r = si.from(
            "getAllResponseHeaders" in g && g.getAllResponseHeaders(),
          );
          di(function (t) {
            e(t), p();
          }, function (t) {
            n(t), p();
          }, {
            data: h && "text" !== h && "json" !== h
              ? g.response
              : g.responseText,
            status: g.status,
            statusText: g.statusText,
            headers: r,
            config: t,
            request: g,
          }), g = null;
        }
        g.open(r.method.toUpperCase(), r.url, !0),
          g.timeout = r.timeout,
          "onloadend" in g
            ? g.onloadend = m
            : g.onreadystatechange = function () {
              g && 4 === g.readyState &&
                (0 !== g.status ||
                  g.responseURL && 0 === g.responseURL.indexOf("file:")) &&
                setTimeout(m);
            },
          g.onabort = function () {
            g &&
              (n(new Or("Request aborted", Or.ECONNABORTED, t, g)), g = null);
          },
          g.onerror = function () {
            n(new Or("Network Error", Or.ERR_NETWORK, t, g)), g = null;
          },
          g.ontimeout = function () {
            let e = r.timeout
              ? "timeout of " + r.timeout + "ms exceeded"
              : "timeout exceeded";
            const i = r.transitional || Wr;
            r.timeoutErrorMessage && (e = r.timeoutErrorMessage),
              n(
                new Or(
                  e,
                  i.clarifyTimeoutError ? Or.ETIMEDOUT : Or.ECONNABORTED,
                  t,
                  g,
                ),
              ),
              g = null;
          },
          void 0 === i && a.setContentType(null),
          "setRequestHeader" in g && Cr.forEach(a.toJSON(), function (t, e) {
            g.setRequestHeader(e, t);
          }),
          Cr.isUndefined(r.withCredentials) ||
          (g.withCredentials = !!r.withCredentials),
          h && "json" !== h && (g.responseType = r.responseType),
          f && ([l, u] = gi(f, !0), g.addEventListener("progress", l)),
          d && g.upload &&
          ([s, c] = gi(d),
            g.upload.addEventListener("progress", s),
            g.upload.addEventListener("loadend", c)),
          (r.cancelToken || r.signal) && (o = (e) => {
            g &&
              (n(!e || e.type ? new hi(null, t, g) : e), g.abort(), g = null);
          },
            r.cancelToken && r.cancelToken.subscribe(o),
            r.signal &&
            (r.signal.aborted ? o() : r.signal.addEventListener("abort", o)));
        const b = function (t) {
          const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return e && e[1] || "";
        }(r.url);
        b && -1 === Jr.protocols.indexOf(b)
          ? n(new Or("Unsupported protocol " + b + ":", Or.ERR_BAD_REQUEST, t))
          : g.send(i || null);
      });
    },
    Mi = (t, e) => {
      const { length: n } = t = t ? t.filter(Boolean) : [];
      if (e || n) {
        let n, r = new AbortController();
        const i = function (t) {
          if (!n) {
            n = !0, o();
            const e = t instanceof Error ? t : this.reason;
            r.abort(
              e instanceof Or ? e : new hi(e instanceof Error ? e.message : e),
            );
          }
        };
        let a = e && setTimeout(() => {
          a = null, i(new Or(`timeout ${e} of ms exceeded`, Or.ETIMEDOUT));
        }, e);
        const o = () => {
          t && (a && clearTimeout(a),
            a = null,
            t.forEach((t) => {
              t.unsubscribe
                ? t.unsubscribe(i)
                : t.removeEventListener("abort", i);
            }),
            t = null);
        };
        t.forEach((t) => t.addEventListener("abort", i));
        const { signal: s } = r;
        return s.unsubscribe = () => Cr.asap(o), s;
      }
    },
    Ei = function* (t, e) {
      let n = t.byteLength;
      if (!e || n < e) return void (yield t);
      let r, i = 0;
      for (; i < n;) r = i + e, yield t.slice(i, r), i = r;
    },
    Ci = async function* (t) {
      if (t[Symbol.asyncIterator]) return void (yield* t);
      const e = t.getReader();
      try {
        for (;;) {
          const { done: t, value: n } = await e.read();
          if (t) break;
          yield n;
        }
      } finally {
        await e.cancel();
      }
    },
    Pi = (t, e, n, r) => {
      const i = async function* (t, e) {
        for await (const n of Ci(t)) yield* Ei(n, e);
      }(t, e);
      let a,
        o = 0,
        s = (t) => {
          a || (a = !0, r && r(t));
        };
      return new ReadableStream({
        async pull(t) {
          try {
            const { done: e, value: r } = await i.next();
            if (e) return s(), void t.close();
            let a = r.byteLength;
            if (n) {
              let t = o += a;
              n(t);
            }
            t.enqueue(new Uint8Array(r));
          } catch (e) {
            throw s(e), e;
          }
        },
        cancel: (t) => (s(t), i.return()),
      }, { highWaterMark: 2 });
    },
    Ti = "function" === typeof fetch && "function" === typeof Request &&
      "function" === typeof Response,
    Ri = Ti && "function" === typeof ReadableStream,
    Oi = Ti &&
      ("function" === typeof TextEncoder
        ? (Di = new TextEncoder(), (t) => Di.encode(t))
        : async (t) => new Uint8Array(await new Response(t).arrayBuffer()));
  var Di;
  const Li = function (t) {
      try {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        ) n[r - 1] = arguments[r];
        return !!t(...n);
      } catch (qd) {
        return !1;
      }
    },
    Ai = Ri && Li(() => {
      let t = !1;
      const e = new Request(Jr.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return t = !0, "half";
        },
      }).headers.has("Content-Type");
      return t && !e;
    }),
    Fi = Ri && Li(() => Cr.isReadableStream(new Response("").body)),
    ji = { stream: Fi && ((t) => t.body) };
  var zi;
  Ti &&
    (zi = new Response(),
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
        !ji[t] && (ji[t] = Cr.isFunction(zi[t]) ? (e) => e[t]() : (e, n) => {
          throw new Or(
            `Response type '${t}' is not supported`,
            Or.ERR_NOT_SUPPORT,
            n,
          );
        });
      }));
  const Ni = async (t, e) => {
      const n = Cr.toFiniteNumber(t.getContentLength());
      return null == n
        ? (async (t) => {
          if (null == t) return 0;
          if (Cr.isBlob(t)) return t.size;
          if (Cr.isSpecCompliantForm(t)) {
            const e = new Request(Jr.origin, { method: "POST", body: t });
            return (await e.arrayBuffer()).byteLength;
          }
          return Cr.isArrayBufferView(t) || Cr.isArrayBuffer(t)
            ? t.byteLength
            : (Cr.isURLSearchParams(t) && (t += ""),
              Cr.isString(t) ? (await Oi(t)).byteLength : void 0);
        })(e)
        : n;
    },
    Ii = Ti && (async (t) => {
      let {
        url: e,
        method: n,
        data: r,
        signal: i,
        cancelToken: a,
        timeout: o,
        onDownloadProgress: s,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: h = "same-origin",
        fetchOptions: d,
      } = ki(t);
      c = c ? (c + "").toLowerCase() : "text";
      let f, p = Mi([i, a && a.toAbortSignal()], o);
      const g = p && p.unsubscribe && (() => {
        p.unsubscribe();
      });
      let m;
      try {
        if (
          l && Ai && "get" !== n && "head" !== n && 0 !== (m = await Ni(u, r))
        ) {
          let t,
            n = new Request(e, { method: "POST", body: r, duplex: "half" });
          if (
            Cr.isFormData(r) && (t = n.headers.get("content-type")) &&
            u.setContentType(t), n.body
          ) {
            const [t, e] = mi(m, gi(bi(l)));
            r = Pi(n.body, 65536, t, e);
          }
        }
        Cr.isString(h) || (h = h ? "include" : "omit");
        const i = "credentials" in Request.prototype;
        f = new Request(e, {
          ...d,
          signal: p,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: i ? h : void 0,
        });
        let a = await fetch(f);
        const o = Fi && ("stream" === c || "response" === c);
        if (Fi && (s || o && g)) {
          const t = {};
          ["status", "statusText", "headers"].forEach((e) => {
            t[e] = a[e];
          });
          const e = Cr.toFiniteNumber(a.headers.get("content-length")),
            [n, r] = s && mi(e, gi(bi(s), !0)) || [];
          a = new Response(
            Pi(a.body, 65536, n, () => {
              r && r(), g && g();
            }),
            t,
          );
        }
        c = c || "text";
        let b = await ji[Cr.findKey(ji, c) || "text"](a, t);
        return !o && g && g(),
          await new Promise((e, n) => {
            di(e, n, {
              data: b,
              headers: si.from(a.headers),
              status: a.status,
              statusText: a.statusText,
              config: t,
              request: f,
            });
          });
      } catch (b) {
        if (g && g(), b && "TypeError" === b.name && /fetch/i.test(b.message)) {
          throw Object.assign(new Or("Network Error", Or.ERR_NETWORK, t, f), {
            cause: b.cause || b,
          });
        }
        throw Or.from(b, b && b.code, t, f);
      }
    }),
    Bi = { http: null, xhr: Si, fetch: Ii };
  Cr.forEach(Bi, (t, e) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: e });
      } catch (qd) {}
      Object.defineProperty(t, "adapterName", { value: e });
    }
  });
  const Vi = (t) => `- ${t}`,
    Hi = (t) => Cr.isFunction(t) || null === t || !1 === t,
    Ui = (t) => {
      t = Cr.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, r;
      const i = {};
      for (let a = 0; a < e; a++) {
        let e;
        if (
          n = t[a],
            r = n,
            !Hi(n) && (r = Bi[(e = String(n)).toLowerCase()], void 0 === r)
        ) throw new Or(`Unknown adapter '${e}'`);
        if (r) break;
        i[e || "#" + a] = r;
      }
      if (!r) {
        const t = Object.entries(i).map((t) => {
          let [e, n] = t;
          return `adapter ${e} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build");
        });
        let n = e
          ? t.length > 1 ? "since :\n" + t.map(Vi).join("\n") : " " + Vi(t[0])
          : "as no adapter specified";
        throw new Or(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    };
  function Wi(t) {
    if (
      t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted
    ) throw new hi(null, t);
  }
  function $i(t) {
    Wi(t),
      t.headers = si.from(t.headers),
      t.data = li.call(t, t.transformRequest),
      -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Ui(t.adapter || ti.adapter)(t).then(function (e) {
      return Wi(t),
        e.data = li.call(t, t.transformResponse, e),
        e.headers = si.from(e.headers),
        e;
    }, function (e) {
      return ci(e) ||
        (Wi(t),
          e && e.response &&
          (e.response.data = li.call(t, t.transformResponse, e.response),
            e.response.headers = si.from(e.response.headers))),
        Promise.reject(e);
    });
  }
  const qi = "1.7.7", Yi = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, e) => {
      Yi[t] = function (n) {
        return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
      };
    },
  );
  const Qi = {};
  Yi.transitional = function (t, e, n) {
    function r(t, e) {
      return "[Axios v1.7.7] Transitional option '" + t + "'" + e +
        (n ? ". " + n : "");
    }
    return (n, i, a) => {
      if (!1 === t) {
        throw new Or(
          r(i, " has been removed" + (e ? " in " + e : "")),
          Or.ERR_DEPRECATED,
        );
      }
      return e && !Qi[i] &&
        (Qi[i] = !0,
          console.warn(
            r(
              i,
              " has been deprecated since v" + e +
                " and will be removed in the near future",
            ),
          )),
        !t || t(n, i, a);
    };
  };
  const Ki = {
      assertOptions: function (t, e, n) {
        if ("object" !== typeof t) {
          throw new Or("options must be an object", Or.ERR_BAD_OPTION_VALUE);
        }
        const r = Object.keys(t);
        let i = r.length;
        for (; i-- > 0;) {
          const a = r[i], o = e[a];
          if (o) {
            const e = t[a], n = void 0 === e || o(e, a, t);
            if (!0 !== n) {
              throw new Or(
                "option " + a + " must be " + n,
                Or.ERR_BAD_OPTION_VALUE,
              );
            }
          } else if (!0 !== n) {
            throw new Or("Unknown option " + a, Or.ERR_BAD_OPTION);
          }
        }
      },
      validators: Yi,
    },
    Xi = Ki.validators;
  class Ji {
    constructor(t) {
      this.defaults = t,
        this.interceptors = { request: new Ur(), response: new Ur() };
    }
    async request(t, e) {
      try {
        return await this._request(t, e);
      } catch (n) {
        if (n instanceof Error) {
          let t;
          Error.captureStackTrace
            ? Error.captureStackTrace(t = {})
            : t = new Error();
          const e = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? e && !String(n.stack).endsWith(e.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + e)
              : n.stack = e;
          } catch (qd) {}
        }
        throw n;
      }
    }
    _request(t, e) {
      "string" === typeof t ? (e = e || {}).url = t : e = t || {},
        e = _i(this.defaults, e);
      const { transitional: n, paramsSerializer: r, headers: i } = e;
      void 0 !== n &&
      Ki.assertOptions(n, {
        silentJSONParsing: Xi.transitional(Xi.boolean),
        forcedJSONParsing: Xi.transitional(Xi.boolean),
        clarifyTimeoutError: Xi.transitional(Xi.boolean),
      }, !1),
        null != r &&
        (Cr.isFunction(r)
          ? e.paramsSerializer = { serialize: r }
          : Ki.assertOptions(
            r,
            { encode: Xi.function, serialize: Xi.function },
            !0,
          )),
        e.method = (e.method || this.defaults.method || "get").toLowerCase();
      let a = i && Cr.merge(i.common, i[e.method]);
      i &&
      Cr.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (t) => {
          delete i[t];
        },
      ), e.headers = si.concat(a, i);
      const o = [];
      let s = !0;
      this.interceptors.request.forEach(function (t) {
        "function" === typeof t.runWhen && !1 === t.runWhen(e) ||
          (s = s && t.synchronous, o.unshift(t.fulfilled, t.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (t) {
        l.push(t.fulfilled, t.rejected);
      });
      let u, h = 0;
      if (!s) {
        const t = [$i.bind(this), void 0];
        for (
          t.unshift.apply(t, o),
            t.push.apply(t, l),
            u = t.length,
            c = Promise.resolve(e);
          h < u;
        ) c = c.then(t[h++], t[h++]);
        return c;
      }
      u = o.length;
      let d = e;
      for (h = 0; h < u;) {
        const t = o[h++], e = o[h++];
        try {
          d = t(d);
        } catch (f) {
          e.call(this, f);
          break;
        }
      }
      try {
        c = $i.call(this, d);
      } catch (f) {
        return Promise.reject(f);
      }
      for (h = 0, u = l.length; h < u;) c = c.then(l[h++], l[h++]);
      return c;
    }
    getUri(t) {
      return Hr(
        xi((t = _i(this.defaults, t)).baseURL, t.url),
        t.params,
        t.paramsSerializer,
      );
    }
  }
  Cr.forEach(["delete", "get", "head", "options"], function (t) {
    Ji.prototype[t] = function (e, n) {
      return this.request(
        _i(n || {}, { method: t, url: e, data: (n || {}).data }),
      );
    };
  }),
    Cr.forEach(["post", "put", "patch"], function (t) {
      function e(e) {
        return function (n, r, i) {
          return this.request(
            _i(i || {}, {
              method: t,
              headers: e ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            }),
          );
        };
      }
      Ji.prototype[t] = e(), Ji.prototype[t + "Form"] = e(!0);
    });
  const Gi = Ji;
  class Zi {
    constructor(t) {
      if ("function" !== typeof t) {
        throw new TypeError("executor must be a function.");
      }
      let e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      const n = this;
      this.promise.then((t) => {
        if (!n._listeners) return;
        let e = n._listeners.length;
        for (; e-- > 0;) n._listeners[e](t);
        n._listeners = null;
      }),
        this.promise.then = (t) => {
          let e;
          const r = new Promise((t) => {
            n.subscribe(t), e = t;
          }).then(t);
          return r.cancel = function () {
            n.unsubscribe(e);
          },
            r;
        },
        t(function (t, r, i) {
          n.reason || (n.reason = new hi(t, r, i), e(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      this.reason
        ? t(this.reason)
        : this._listeners
        ? this._listeners.push(t)
        : this._listeners = [t];
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const e = this._listeners.indexOf(t);
      -1 !== e && this._listeners.splice(e, 1);
    }
    toAbortSignal() {
      const t = new AbortController(),
        e = (e) => {
          t.abort(e);
        };
      return this.subscribe(e),
        t.signal.unsubscribe = () => this.unsubscribe(e),
        t.signal;
    }
    static source() {
      let t;
      return {
        token: new Zi(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
  }
  const ta = Zi;
  const ea = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(ea).forEach((t) => {
    let [e, n] = t;
    ea[n] = e;
  });
  const na = ea;
  const ra = function t(e) {
    const n = new Gi(e), r = Vn(Gi.prototype.request, n);
    return Cr.extend(r, Gi.prototype, n, { allOwnKeys: !0 }),
      Cr.extend(r, n, null, { allOwnKeys: !0 }),
      r.create = function (n) {
        return t(_i(e, n));
      },
      r;
  }(ti);
  ra.Axios = Gi,
    ra.CanceledError = hi,
    ra.CancelToken = ta,
    ra.isCancel = ci,
    ra.VERSION = qi,
    ra.toFormData = jr,
    ra.AxiosError = Or,
    ra.Cancel = ra.CanceledError,
    ra.all = function (t) {
      return Promise.all(t);
    },
    ra.spread = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    },
    ra.isAxiosError = function (t) {
      return Cr.isObject(t) && !0 === t.isAxiosError;
    },
    ra.mergeConfig = _i,
    ra.AxiosHeaders = si,
    ra.formToJSON = (t) => Gr(Cr.isHTMLForm(t) ? new FormData(t) : t),
    ra.getAdapter = Ui,
    ra.HttpStatusCode = na,
    ra.default = ra;
  const ia = ra;
  function aa(t) {
    return t + .5 | 0;
  }
  const oa = (t, e, n) => Math.max(Math.min(t, n), e);
  function sa(t) {
    return oa(aa(2.55 * t), 0, 255);
  }
  function la(t) {
    return oa(aa(255 * t), 0, 255);
  }
  function ca(t) {
    return oa(aa(t / 2.55) / 100, 0, 1);
  }
  function ua(t) {
    return oa(aa(100 * t), 0, 100);
  }
  const ha = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    da = [..."0123456789ABCDEF"],
    fa = (t) => da[15 & t],
    pa = (t) => da[(240 & t) >> 4] + da[15 & t],
    ga = (t) => (240 & t) >> 4 === (15 & t);
  function ma(t) {
    var e = ((t) => ga(t.r) && ga(t.g) && ga(t.b) && ga(t.a))(t) ? fa : pa;
    return t
      ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e)
      : void 0;
  }
  const ba =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function ya(t, e, n) {
    const r = e * Math.min(n, 1 - n),
      i = function (e) {
        let i = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (e + t / 30) % 12;
        return n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
      };
    return [i(0), i(8), i(4)];
  }
  function va(t, e, n) {
    const r = function (r) {
      let i = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : (r + t / 60) % 6;
      return n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
    };
    return [r(5), r(3), r(1)];
  }
  function xa(t, e, n) {
    const r = ya(t, 1, .5);
    let i;
    for (e + n > 1 && (i = 1 / (e + n), e *= i, n *= i), i = 0; i < 3; i++) {
      r[i] *= 1 - e - n, r[i] += e;
    }
    return r;
  }
  function wa(t) {
    const e = t.r / 255,
      n = t.g / 255,
      r = t.b / 255,
      i = Math.max(e, n, r),
      a = Math.min(e, n, r),
      o = (i + a) / 2;
    let s, l, c;
    return i !== a &&
      (c = i - a,
        l = o > .5 ? c / (2 - i - a) : c / (i + a),
        s = function (t, e, n, r, i) {
          return t === i
            ? (e - n) / r + (e < n ? 6 : 0)
            : e === i
            ? (n - t) / r + 2
            : (t - e) / r + 4;
        }(e, n, r, c, i),
        s = 60 * s + .5),
      [0 | s, l || 0, o];
  }
  function _a(t, e, n, r) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(la);
  }
  function ka(t, e, n) {
    return _a(ya, t, e, n);
  }
  function Sa(t) {
    return (t % 360 + 360) % 360;
  }
  function Ma(t) {
    const e = ba.exec(t);
    let n, r = 255;
    if (!e) return;
    e[5] !== n && (r = e[6] ? sa(+e[5]) : la(+e[5]));
    const i = Sa(+e[2]), a = +e[3] / 100, o = +e[4] / 100;
    return n = "hwb" === e[1]
      ? function (t, e, n) {
        return _a(xa, t, e, n);
      }(i, a, o)
      : "hsv" === e[1]
      ? function (t, e, n) {
        return _a(va, t, e, n);
      }(i, a, o)
      : ka(i, a, o),
      { r: n[0], g: n[1], b: n[2], a: r };
  }
  const Ea = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh",
    },
    Ca = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32",
    };
  let Pa;
  function Ta(t) {
    Pa || (Pa = function () {
      const t = {}, e = Object.keys(Ca), n = Object.keys(Ea);
      let r, i, a, o, s;
      for (r = 0; r < e.length; r++) {
        for (o = s = e[r], i = 0; i < n.length; i++) {
          a = n[i], s = s.replace(a, Ea[a]);
        }
        a = parseInt(Ca[o], 16), t[s] = [a >> 16 & 255, a >> 8 & 255, 255 & a];
      }
      return t;
    }(),
      Pa.transparent = [0, 0, 0, 0]);
    const e = Pa[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
  }
  const Ra =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const Oa = (t) =>
      t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
    Da = (t) => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  function La(t, e, n) {
    if (t) {
      let r = wa(t);
      r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1)),
        r = ka(r),
        t.r = r[0],
        t.g = r[1],
        t.b = r[2];
    }
  }
  function Aa(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Fa(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return Array.isArray(t)
      ? t.length >= 3 &&
        (e = { r: t[0], g: t[1], b: t[2], a: 255 },
          t.length > 3 && (e.a = la(t[3])))
      : (e = Aa(t, { r: 0, g: 0, b: 0, a: 1 })).a = la(e.a),
      e;
  }
  function ja(t) {
    return "r" === t.charAt(0)
      ? function (t) {
        const e = Ra.exec(t);
        let n, r, i, a = 255;
        if (e) {
          if (e[7] !== n) {
            const t = +e[7];
            a = e[8] ? sa(t) : oa(255 * t, 0, 255);
          }
          return n = +e[1],
            r = +e[3],
            i = +e[5],
            n = 255 & (e[2] ? sa(n) : oa(n, 0, 255)),
            r = 255 & (e[4] ? sa(r) : oa(r, 0, 255)),
            i = 255 & (e[6] ? sa(i) : oa(i, 0, 255)),
            { r: n, g: r, b: i, a: a };
        }
      }(t)
      : Ma(t);
  }
  class za {
    constructor(t) {
      if (t instanceof za) return t;
      const e = typeof t;
      let n;
      "object" === e ? n = Fa(t) : "string" === e && (n = function (t) {
        var e, n = t.length;
        return "#" === t[0] &&
          (4 === n || 5 === n
            ? e = {
              r: 255 & 17 * ha[t[1]],
              g: 255 & 17 * ha[t[2]],
              b: 255 & 17 * ha[t[3]],
              a: 5 === n ? 17 * ha[t[4]] : 255,
            }
            : 7 !== n && 9 !== n ||
              (e = {
                r: ha[t[1]] << 4 | ha[t[2]],
                g: ha[t[3]] << 4 | ha[t[4]],
                b: ha[t[5]] << 4 | ha[t[6]],
                a: 9 === n ? ha[t[7]] << 4 | ha[t[8]] : 255,
              })),
          e;
      }(t) || Ta(t) || ja(t)),
        this._rgb = n,
        this._valid = !!n;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = Aa(this._rgb);
      return t && (t.a = ca(t.a)), t;
    }
    set rgb(t) {
      this._rgb = Fa(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${ca(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
        : void 0;
      var t;
    }
    hexString() {
      return this._valid ? ma(this._rgb) : void 0;
    }
    hslString() {
      return this._valid
        ? function (t) {
          if (!t) return;
          const e = wa(t), n = e[0], r = ua(e[1]), i = ua(e[2]);
          return t.a < 255
            ? `hsla(${n}, ${r}%, ${i}%, ${ca(t.a)})`
            : `hsl(${n}, ${r}%, ${i}%)`;
        }(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const n = this.rgb, r = t.rgb;
        let i;
        const a = e === i ? .5 : e,
          o = 2 * a - 1,
          s = n.a - r.a,
          l = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
        i = 1 - l,
          n.r = 255 & l * n.r + i * r.r + .5,
          n.g = 255 & l * n.g + i * r.g + .5,
          n.b = 255 & l * n.b + i * r.b + .5,
          n.a = a * n.a + (1 - a) * r.a,
          this.rgb = n;
      }
      return this;
    }
    interpolate(t, e) {
      return t && (this._rgb = function (t, e, n) {
        const r = Da(ca(t.r)), i = Da(ca(t.g)), a = Da(ca(t.b));
        return {
          r: la(Oa(r + n * (Da(ca(e.r)) - r))),
          g: la(Oa(i + n * (Da(ca(e.g)) - i))),
          b: la(Oa(a + n * (Da(ca(e.b)) - a))),
          a: t.a + n * (e.a - t.a),
        };
      }(this._rgb, t._rgb, e)),
        this;
    }
    clone() {
      return new za(this.rgb);
    }
    alpha(t) {
      return this._rgb.a = la(t), this;
    }
    clearer(t) {
      return this._rgb.a *= 1 - t, this;
    }
    greyscale() {
      const t = this._rgb, e = aa(.3 * t.r + .59 * t.g + .11 * t.b);
      return t.r = t.g = t.b = e, this;
    }
    opaquer(t) {
      return this._rgb.a *= 1 + t, this;
    }
    negate() {
      const t = this._rgb;
      return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
    }
    lighten(t) {
      return La(this._rgb, 2, t), this;
    }
    darken(t) {
      return La(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return La(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return La(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return function (t, e) {
        var n = wa(t);
        n[0] = Sa(n[0] + e), n = ka(n), t.r = n[0], t.g = n[1], t.b = n[2];
      }(this._rgb, t),
        this;
    }
  }
  function Na() {}
  const Ia = (() => {
    let t = 0;
    return () => t++;
  })();
  function Ba(t) {
    return null === t || "undefined" === typeof t;
  }
  function Va(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }
  function Ha(t) {
    return null !== t &&
      "[object Object]" === Object.prototype.toString.call(t);
  }
  function Ua(t) {
    return ("number" === typeof t || t instanceof Number) && isFinite(+t);
  }
  function Wa(t, e) {
    return Ua(t) ? t : e;
  }
  function $a(t, e) {
    return "undefined" === typeof t ? e : t;
  }
  const qa = (t, e) =>
    "string" === typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
  function Ya(t, e, n) {
    if (t && "function" === typeof t.call) return t.apply(n, e);
  }
  function Qa(t, e, n, r) {
    let i, a, o;
    if (Va(t)) {
      if (a = t.length, r) { for (i = a - 1; i >= 0; i--) e.call(n, t[i], i); }
      else for (i = 0; i < a; i++) e.call(n, t[i], i);
    } else if (Ha(t)) {
      for (o = Object.keys(t), a = o.length, i = 0; i < a; i++) {
        e.call(n, t[o[i]], o[i]);
      }
    }
  }
  function Ka(t, e) {
    let n, r, i, a;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, r = t.length; n < r; ++n) {
      if (
        i = t[n],
          a = e[n],
          i.datasetIndex !== a.datasetIndex || i.index !== a.index
      ) return !1;
    }
    return !0;
  }
  function Xa(t) {
    if (Va(t)) return t.map(Xa);
    if (Ha(t)) {
      const e = Object.create(null), n = Object.keys(t), r = n.length;
      let i = 0;
      for (; i < r; ++i) e[n[i]] = Xa(t[n[i]]);
      return e;
    }
    return t;
  }
  function Ja(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function Ga(t, e, n, r) {
    if (!Ja(t)) return;
    const i = e[t], a = n[t];
    Ha(i) && Ha(a) ? Za(i, a, r) : e[t] = Xa(a);
  }
  function Za(t, e, n) {
    const r = Va(e) ? e : [e], i = r.length;
    if (!Ha(t)) return t;
    const a = (n = n || {}).merger || Ga;
    let o;
    for (let s = 0; s < i; ++s) {
      if (o = r[s], !Ha(o)) continue;
      const e = Object.keys(o);
      for (let r = 0, i = e.length; r < i; ++r) a(e[r], t, o, n);
    }
    return t;
  }
  function to(t, e) {
    return Za(t, e, { merger: eo });
  }
  function eo(t, e, n) {
    if (!Ja(t)) return;
    const r = e[t], i = n[t];
    Ha(r) && Ha(i)
      ? to(r, i)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Xa(i));
  }
  const no = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
  function ro(t, e) {
    const n = no[e] || (no[e] = function (t) {
      const e = function (t) {
        const e = t.split("."), n = [];
        let r = "";
        for (const i of e) {
          r += i,
            r.endsWith("\\") ? r = r.slice(0, -1) + "." : (n.push(r), r = "");
        }
        return n;
      }(t);
      return (t) => {
        for (const n of e) {
          if ("" === n) break;
          t = t && t[n];
        }
        return t;
      };
    }(e));
    return n(t);
  }
  function io(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const ao = (t) => "undefined" !== typeof t,
    oo = (t) => "function" === typeof t,
    so = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const n of t) if (!e.has(n)) return !1;
      return !0;
    };
  const lo = Math.PI,
    co = 2 * lo,
    uo = co + lo,
    ho = Number.POSITIVE_INFINITY,
    fo = lo / 180,
    po = lo / 2,
    go = lo / 4,
    mo = 2 * lo / 3,
    bo = Math.log10,
    yo = Math.sign;
  function vo(t, e, n) {
    return Math.abs(t - e) < n;
  }
  function xo(t) {
    const e = Math.round(t);
    t = vo(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(bo(t))), r = t / n;
    return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
  }
  function wo(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function _o(t, e, n) {
    let r, i, a;
    for (r = 0, i = t.length; r < i; r++) {
      a = t[r][n],
        isNaN(a) || (e.min = Math.min(e.min, a), e.max = Math.max(e.max, a));
    }
  }
  function ko(t) {
    return t * (lo / 180);
  }
  function So(t) {
    return t * (180 / lo);
  }
  function Mo(t) {
    if (!Ua(t)) return;
    let e = 1, n = 0;
    for (; Math.round(t * e) / e !== t;) e *= 10, n++;
    return n;
  }
  function Eo(t, e) {
    const n = e.x - t.x, r = e.y - t.y, i = Math.sqrt(n * n + r * r);
    let a = Math.atan2(r, n);
    return a < -.5 * lo && (a += co), { angle: a, distance: i };
  }
  function Co(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Po(t, e) {
    return (t - e + uo) % co - lo;
  }
  function To(t) {
    return (t % co + co) % co;
  }
  function Ro(t, e, n, r) {
    const i = To(t),
      a = To(e),
      o = To(n),
      s = To(a - i),
      l = To(o - i),
      c = To(i - a),
      u = To(i - o);
    return i === a || i === o || r && a === o || s > l && c < u;
  }
  function Oo(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function Do(t, e, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3]
      ? arguments[3]
      : 1e-6;
    return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r;
  }
  function Lo(t, e, n) {
    n = n || ((n) => t[n] < e);
    let r, i = t.length - 1, a = 0;
    for (; i - a > 1;) r = a + i >> 1, n(r) ? a = r : i = r;
    return { lo: a, hi: i };
  }
  const Ao = (t, e, n, r) =>
      Lo(
        t,
        n,
        r
          ? (r) => {
            const i = t[r][e];
            return i < n || i === n && t[r + 1][e] === n;
          }
          : (r) => t[r][e] < n,
      ),
    Fo = (t, e, n) => Lo(t, n, (r) => t[r][e] >= n);
  const jo = ["push", "pop", "shift", "splice", "unshift"];
  function zo(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const r = n.listeners, i = r.indexOf(e);
    -1 !== i && r.splice(i, 1),
      r.length > 0 || (jo.forEach((e) => {
        delete t[e];
      }),
        delete t._chartjs);
  }
  function No(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const Io = "undefined" === typeof window
    ? function (t) {
      return t();
    }
    : window.requestAnimationFrame;
  function Bo(t, e) {
    let n = [], r = !1;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) {
        a[o] = arguments[o];
      }
      n = a,
        r || (r = !0,
          Io.call(window, () => {
            r = !1, t.apply(e, n);
          }));
    };
  }
  const Vo = (t) => "start" === t ? "left" : "end" === t ? "right" : "center",
    Ho = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2;
  function Uo(t, e, n) {
    const r = e.length;
    let i = 0, a = r;
    if (t._sorted) {
      const { iScale: o, _parsed: s } = t,
        l = o.axis,
        { min: c, max: u, minDefined: h, maxDefined: d } = o.getUserBounds();
      h &&
      (i = Oo(
        Math.min(Ao(s, l, c).lo, n ? r : Ao(e, l, o.getPixelForValue(c)).lo),
        0,
        r - 1,
      )),
        a = d
          ? Oo(
            Math.max(
              Ao(s, o.axis, u, !0).hi + 1,
              n ? 0 : Ao(e, l, o.getPixelForValue(u), !0).hi + 1,
            ),
            i,
            r,
          ) - i
          : r - i;
    }
    return { start: i, count: a };
  }
  function Wo(t) {
    const { xScale: e, yScale: n, _scaleRanges: r } = t,
      i = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!r) return t._scaleRanges = i, !0;
    const a = r.xmin !== e.min || r.xmax !== e.max || r.ymin !== n.min ||
      r.ymax !== n.max;
    return Object.assign(r, i), a;
  }
  const $o = (t) => 0 === t || 1 === t,
    qo = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * co / n),
    Yo = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * co / n) + 1,
    Qo = {
      linear: (t) => t,
      easeInQuad: (t) => t * t,
      easeOutQuad: (t) => -t * (t - 2),
      easeInOutQuad: (t) =>
        (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
      easeInCubic: (t) => t * t * t,
      easeOutCubic: (t) => (t -= 1) * t * t + 1,
      easeInOutCubic: (t) =>
        (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
      easeInQuart: (t) => t * t * t * t,
      easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: (t) =>
        (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: (t) => t * t * t * t * t,
      easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: (t) =>
        (t /= .5) < 1
          ? .5 * t * t * t * t * t
          : .5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: (t) => 1 - Math.cos(t * po),
      easeOutSine: (t) => Math.sin(t * po),
      easeInOutSine: (t) => -.5 * (Math.cos(lo * t) - 1),
      easeInExpo: (t) => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
      easeOutExpo: (t) => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
      easeInOutExpo: (t) =>
        $o(t)
          ? t
          : t < .5
          ? .5 * Math.pow(2, 10 * (2 * t - 1))
          : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: (t) => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
      easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: (t) =>
        (t /= .5) < 1
          ? -.5 * (Math.sqrt(1 - t * t) - 1)
          : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: (t) => $o(t) ? t : qo(t, .075, .3),
      easeOutElastic: (t) => $o(t) ? t : Yo(t, .075, .3),
      easeInOutElastic(t) {
        const e = .1125;
        return $o(t)
          ? t
          : t < .5
          ? .5 * qo(2 * t, e, .45)
          : .5 + .5 * Yo(2 * t - 1, e, .45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= .5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * .5
          : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: (t) => 1 - Qo.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625, n = 2.75;
        return t < 1 / n
          ? e * t * t
          : t < 2 / n
          ? e * (t -= 1.5 / n) * t + .75
          : t < 2.5 / n
          ? e * (t -= 2.25 / n) * t + .9375
          : e * (t -= 2.625 / n) * t + .984375;
      },
      easeInOutBounce: (t) =>
        t < .5
          ? .5 * Qo.easeInBounce(2 * t)
          : .5 * Qo.easeOutBounce(2 * t - 1) + .5,
    };
  function Ko(t) {
    if (t && "object" === typeof t) {
      const e = t.toString();
      return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
    }
    return !1;
  }
  function Xo(t) {
    return Ko(t) ? t : new za(t);
  }
  function Jo(t) {
    return Ko(t) ? t : new za(t).saturate(.5).darken(.1).hexString();
  }
  const Go = ["x", "y", "borderWidth", "radius", "tension"],
    Zo = ["color", "borderColor", "backgroundColor"];
  const ts = new Map();
  function es(t, e, n) {
    return function (t, e) {
      e = e || {};
      const n = t + JSON.stringify(e);
      let r = ts.get(n);
      return r || (r = new Intl.NumberFormat(t, e), ts.set(n, r)), r;
    }(e, n).format(t);
  }
  const ns = {
    values: (t) => Va(t) ? t : "" + t,
    numeric(t, e, n) {
      if (0 === t) return "0";
      const r = this.chart.options.locale;
      let i, a = t;
      if (n.length > 1) {
        const e = Math.max(
          Math.abs(n[0].value),
          Math.abs(n[n.length - 1].value),
        );
        (e < 1e-4 || e > 1e15) && (i = "scientific"),
          a = function (t, e) {
            let n = e.length > 3
              ? e[2].value - e[1].value
              : e[1].value - e[0].value;
            Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
            return n;
          }(t, n);
      }
      const o = bo(Math.abs(a)),
        s = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
        l = { notation: i, minimumFractionDigits: s, maximumFractionDigits: s };
      return Object.assign(l, this.options.ticks.format), es(t, r, l);
    },
    logarithmic(t, e, n) {
      if (0 === t) return "0";
      const r = n[e].significand || t / Math.pow(10, Math.floor(bo(t)));
      return [1, 2, 3, 5, 10, 15].includes(r) || e > .8 * n.length
        ? ns.numeric.call(this, t, e, n)
        : "";
    },
  };
  var rs = { formatters: ns };
  const is = Object.create(null), as = Object.create(null);
  function os(t, e) {
    if (!e) return t;
    const n = e.split(".");
    for (let r = 0, i = n.length; r < i; ++r) {
      const e = n[r];
      t = t[e] || (t[e] = Object.create(null));
    }
    return t;
  }
  function ss(t, e, n) {
    return "string" === typeof e ? Za(os(t, e), n) : Za(os(t, ""), e);
  }
  class ls {
    constructor(t, e) {
      this.animation = void 0,
        this.backgroundColor = "rgba(0,0,0,0.1)",
        this.borderColor = "rgba(0,0,0,0.1)",
        this.color = "#666",
        this.datasets = {},
        this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio(),
        this.elements = {},
        this.events = [
          "mousemove",
          "mouseout",
          "click",
          "touchstart",
          "touchmove",
        ],
        this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null,
        },
        this.hover = {},
        this.hoverBackgroundColor = (t, e) => Jo(e.backgroundColor),
        this.hoverBorderColor = (t, e) => Jo(e.borderColor),
        this.hoverColor = (t, e) => Jo(e.color),
        this.indexAxis = "x",
        this.interaction = {
          mode: "nearest",
          intersect: !0,
          includeInvisible: !1,
        },
        this.maintainAspectRatio = !0,
        this.onHover = null,
        this.onClick = null,
        this.parsing = !0,
        this.plugins = {},
        this.responsive = !0,
        this.scale = void 0,
        this.scales = {},
        this.showLine = !0,
        this.drawActiveElementsOnTop = !0,
        this.describe(t),
        this.apply(e);
    }
    set(t, e) {
      return ss(this, t, e);
    }
    get(t) {
      return os(this, t);
    }
    describe(t, e) {
      return ss(as, t, e);
    }
    override(t, e) {
      return ss(is, t, e);
    }
    route(t, e, n, r) {
      const i = os(this, t), a = os(this, n), o = "_" + e;
      Object.defineProperties(i, {
        [o]: { value: i[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[o], e = a[r];
            return Ha(t) ? Object.assign({}, e, t) : $a(t, e);
          },
          set(t) {
            this[o] = t;
          },
        },
      });
    }
    apply(t) {
      t.forEach((t) => t(this));
    }
  }
  var cs = new ls({
    _scriptable: (t) => !t.startsWith("on"),
    _indexable: (t) => "events" !== t,
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  }, [function (t) {
    t.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0,
    }),
      t.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (t) =>
          "onProgress" !== t && "onComplete" !== t && "fn" !== t,
      }),
      t.set("animations", {
        colors: { type: "color", properties: Zo },
        numbers: { type: "number", properties: Go },
      }),
      t.describe("animations", { _fallback: "animation" }),
      t.set("transitions", {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: {
          animations: {
            colors: { from: "transparent" },
            visible: { type: "boolean", duration: 0 },
          },
        },
        hide: {
          animations: {
            colors: { to: "transparent" },
            visible: {
              type: "boolean",
              easing: "linear",
              fn: (t) => 0 | t,
            },
          },
        },
      });
  }, function (t) {
    t.set("layout", {
      autoPadding: !0,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  }, function (t) {
    t.set("scale", {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: "ticks",
      clip: !0,
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (t, e) => e.lineWidth,
        tickColor: (t, e) => e.color,
        offset: !1,
      },
      border: { display: !0, dash: [], dashOffset: 0, width: 1 },
      title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: rs.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2,
      },
    }),
      t.route("scale.ticks", "color", "", "color"),
      t.route("scale.grid", "color", "", "borderColor"),
      t.route("scale.border", "color", "", "borderColor"),
      t.route("scale.title", "color", "", "color"),
      t.describe("scale", {
        _fallback: !1,
        _scriptable: (t) =>
          !t.startsWith("before") && !t.startsWith("after") &&
          "callback" !== t && "parser" !== t,
        _indexable: (t) =>
          "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
      }),
      t.describe("scales", { _fallback: "scale" }),
      t.describe("scale.ticks", {
        _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
        _indexable: (t) => "backdropPadding" !== t,
      });
  }]);
  function us(t, e, n, r, i) {
    let a = e[i];
    return a || (a = e[i] = t.measureText(i).width, n.push(i)),
      a > r && (r = a),
      r;
  }
  function hs(t, e, n, r) {
    let i = (r = r || {}).data = r.data || {},
      a = r.garbageCollect = r.garbageCollect || [];
    r.font !== e && (i = r.data = {}, a = r.garbageCollect = [], r.font = e),
      t.save(),
      t.font = e;
    let o = 0;
    const s = n.length;
    let l, c, u, h, d;
    for (l = 0; l < s; l++) {
      if (h = n[l], void 0 === h || null === h || Va(h)) {
        if (Va(h)) {
          for (c = 0, u = h.length; c < u; c++) {
            d = h[c],
              void 0 === d || null === d || Va(d) || (o = us(t, i, a, o, d));
          }
        }
      } else o = us(t, i, a, o, h);
    }
    t.restore();
    const f = a.length / 2;
    if (f > n.length) {
      for (l = 0; l < f; l++) delete i[a[l]];
      a.splice(0, f);
    }
    return o;
  }
  function ds(t, e, n) {
    const r = t.currentDevicePixelRatio, i = 0 !== n ? Math.max(n / 2, .5) : 0;
    return Math.round((e - i) * r) / r + i;
  }
  function fs(t, e) {
    (e || t) &&
      ((e = e || t.getContext("2d")).save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore());
  }
  function ps(t, e, n, r) {
    gs(t, e, n, r, null);
  }
  function gs(t, e, n, r, i) {
    let a, o, s, l, c, u, h, d;
    const f = e.pointStyle, p = e.rotation, g = e.radius;
    let m = (p || 0) * fo;
    if (
      f && "object" === typeof f &&
      (a = f.toString(),
        "[object HTMLImageElement]" === a || "[object HTMLCanvasElement]" === a)
    ) {
      return t.save(),
        t.translate(n, r),
        t.rotate(m),
        t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
        void t.restore();
    }
    if (!(isNaN(g) || g <= 0)) {
      switch (t.beginPath(), f) {
        default:
          i ? t.ellipse(n, r, i / 2, g, 0, 0, co) : t.arc(n, r, g, 0, co),
            t.closePath();
          break;
        case "triangle":
          u = i ? i / 2 : g,
            t.moveTo(n + Math.sin(m) * u, r - Math.cos(m) * g),
            m += mo,
            t.lineTo(n + Math.sin(m) * u, r - Math.cos(m) * g),
            m += mo,
            t.lineTo(n + Math.sin(m) * u, r - Math.cos(m) * g),
            t.closePath();
          break;
        case "rectRounded":
          c = .516 * g,
            l = g - c,
            o = Math.cos(m + go) * l,
            h = Math.cos(m + go) * (i ? i / 2 - c : l),
            s = Math.sin(m + go) * l,
            d = Math.sin(m + go) * (i ? i / 2 - c : l),
            t.arc(n - h, r - s, c, m - lo, m - po),
            t.arc(n + d, r - o, c, m - po, m),
            t.arc(n + h, r + s, c, m, m + po),
            t.arc(n - d, r + o, c, m + po, m + lo),
            t.closePath();
          break;
        case "rect":
          if (!p) {
            l = Math.SQRT1_2 * g,
              u = i ? i / 2 : l,
              t.rect(n - u, r - l, 2 * u, 2 * l);
            break;
          }
          m += go;
        case "rectRot":
          h = Math.cos(m) * (i ? i / 2 : g),
            o = Math.cos(m) * g,
            s = Math.sin(m) * g,
            d = Math.sin(m) * (i ? i / 2 : g),
            t.moveTo(n - h, r - s),
            t.lineTo(n + d, r - o),
            t.lineTo(n + h, r + s),
            t.lineTo(n - d, r + o),
            t.closePath();
          break;
        case "crossRot":
          m += go;
        case "cross":
          h = Math.cos(m) * (i ? i / 2 : g),
            o = Math.cos(m) * g,
            s = Math.sin(m) * g,
            d = Math.sin(m) * (i ? i / 2 : g),
            t.moveTo(n - h, r - s),
            t.lineTo(n + h, r + s),
            t.moveTo(n + d, r - o),
            t.lineTo(n - d, r + o);
          break;
        case "star":
          h = Math.cos(m) * (i ? i / 2 : g),
            o = Math.cos(m) * g,
            s = Math.sin(m) * g,
            d = Math.sin(m) * (i ? i / 2 : g),
            t.moveTo(n - h, r - s),
            t.lineTo(n + h, r + s),
            t.moveTo(n + d, r - o),
            t.lineTo(n - d, r + o),
            m += go,
            h = Math.cos(m) * (i ? i / 2 : g),
            o = Math.cos(m) * g,
            s = Math.sin(m) * g,
            d = Math.sin(m) * (i ? i / 2 : g),
            t.moveTo(n - h, r - s),
            t.lineTo(n + h, r + s),
            t.moveTo(n + d, r - o),
            t.lineTo(n - d, r + o);
          break;
        case "line":
          o = i ? i / 2 : Math.cos(m) * g,
            s = Math.sin(m) * g,
            t.moveTo(n - o, r - s),
            t.lineTo(n + o, r + s);
          break;
        case "dash":
          t.moveTo(n, r),
            t.lineTo(n + Math.cos(m) * (i ? i / 2 : g), r + Math.sin(m) * g);
          break;
        case !1:
          t.closePath();
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function ms(t, e, n) {
    return n = n || .5,
      !e ||
      t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n &&
        t.y < e.bottom + n;
  }
  function bs(t, e) {
    t.save(),
      t.beginPath(),
      t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
      t.clip();
  }
  function ys(t) {
    t.restore();
  }
  function vs(t, e, n, r, i) {
    if (!e) return t.lineTo(n.x, n.y);
    if ("middle" === i) {
      const r = (e.x + n.x) / 2;
      t.lineTo(r, e.y), t.lineTo(r, n.y);
    } else "after" === i !== !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
  }
  function xs(t, e, n, r) {
    if (!e) return t.lineTo(n.x, n.y);
    t.bezierCurveTo(
      r ? e.cp1x : e.cp2x,
      r ? e.cp1y : e.cp2y,
      r ? n.cp2x : n.cp1x,
      r ? n.cp2y : n.cp1y,
      n.x,
      n.y,
    );
  }
  function ws(t, e, n, r, i) {
    if (i.strikethrough || i.underline) {
      const a = t.measureText(r),
        o = e - a.actualBoundingBoxLeft,
        s = e + a.actualBoundingBoxRight,
        l = n - a.actualBoundingBoxAscent,
        c = n + a.actualBoundingBoxDescent,
        u = i.strikethrough ? (l + c) / 2 : c;
      t.strokeStyle = t.fillStyle,
        t.beginPath(),
        t.lineWidth = i.decorationWidth || 2,
        t.moveTo(o, u),
        t.lineTo(s, u),
        t.stroke();
    }
  }
  function _s(t, e) {
    const n = t.fillStyle;
    t.fillStyle = e.color,
      t.fillRect(e.left, e.top, e.width, e.height),
      t.fillStyle = n;
  }
  function ks(t, e, n, r, i) {
    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    const o = Va(e) ? e : [e], s = a.strokeWidth > 0 && "" !== a.strokeColor;
    let l, c;
    for (
      t.save(),
        t.font = i.string,
        function (t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            Ba(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline);
        }(t, a),
        l = 0;
      l < o.length;
      ++l
    ) {
      c = o[l],
        a.backdrop && _s(t, a.backdrop),
        s &&
        (a.strokeColor && (t.strokeStyle = a.strokeColor),
          Ba(a.strokeWidth) || (t.lineWidth = a.strokeWidth),
          t.strokeText(c, n, r, a.maxWidth)),
        t.fillText(c, n, r, a.maxWidth),
        ws(t, n, r, c, a),
        r += Number(i.lineHeight);
    }
    t.restore();
  }
  function Ss(t, e) {
    const { x: n, y: r, w: i, h: a, radius: o } = e;
    t.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * lo, lo, !0),
      t.lineTo(n, r + a - o.bottomLeft),
      t.arc(n + o.bottomLeft, r + a - o.bottomLeft, o.bottomLeft, lo, po, !0),
      t.lineTo(n + i - o.bottomRight, r + a),
      t.arc(
        n + i - o.bottomRight,
        r + a - o.bottomRight,
        o.bottomRight,
        po,
        0,
        !0,
      ),
      t.lineTo(n + i, r + o.topRight),
      t.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -po, !0),
      t.lineTo(n + o.topLeft, r);
  }
  const Ms = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    Es =
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function Cs(t, e) {
    const n = ("" + t).match(Ms);
    if (!n || "normal" === n[1]) return 1.2 * e;
    switch (t = +n[2], n[3]) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  function Ps(t, e) {
    const n = {},
      r = Ha(e),
      i = r ? Object.keys(e) : e,
      a = Ha(t) ? r ? (n) => $a(t[n], t[e[n]]) : (e) => t[e] : () => t;
    for (const o of i) n[o] = +a(o) || 0;
    return n;
  }
  function Ts(t) {
    return Ps(t, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function Rs(t) {
    return Ps(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function Os(t) {
    const e = Ts(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }
  function Ds(t, e) {
    t = t || {}, e = e || cs.font;
    let n = $a(t.size, e.size);
    "string" === typeof n && (n = parseInt(n, 10));
    let r = $a(t.style, e.style);
    r && !("" + r).match(Es) &&
      (console.warn('Invalid font style specified: "' + r + '"'), r = void 0);
    const i = {
      family: $a(t.family, e.family),
      lineHeight: Cs($a(t.lineHeight, e.lineHeight), n),
      size: n,
      style: r,
      weight: $a(t.weight, e.weight),
      string: "",
    };
    return i.string = function (t) {
      return !t || Ba(t.size) || Ba(t.family)
        ? null
        : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") +
          t.size + "px " + t.family;
    }(i),
      i;
  }
  function Ls(t, e, n, r) {
    let i, a, o, s = !0;
    for (i = 0, a = t.length; i < a; ++i) {
      if (
        o = t[i],
          void 0 !== o &&
          (void 0 !== e && "function" === typeof o && (o = o(e), s = !1),
            void 0 !== n && Va(o) && (o = o[n % o.length], s = !1),
            void 0 !== o)
      ) return r && !s && (r.cacheable = !1), o;
    }
  }
  function As(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Fs(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : [""],
      n = arguments.length > 3 ? arguments[3] : void 0,
      r = arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : () => t[0];
    const i = (arguments.length > 2 ? arguments[2] : void 0) || t;
    "undefined" === typeof n && (n = qs("_fallback", t));
    const a = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: t,
      _rootScopes: i,
      _fallback: n,
      _getTarget: r,
      override: (r) => Fs([r, ...t], e, i, n),
    };
    return new Proxy(a, {
      deleteProperty: (
        e,
        n,
      ) => (delete e[n], delete e._keys, delete t[0][n], !0),
      get: (n, r) =>
        Bs(n, r, () =>
          function (t, e, n, r) {
            let i;
            for (const a of e) {
              if (i = qs(Ns(a, t), n), "undefined" !== typeof i) {
                return Is(t, i) ? Ws(n, r, t, i) : i;
              }
            }
          }(r, e, t, n)),
      getOwnPropertyDescriptor: (t, e) =>
        Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => Ys(t).includes(e),
      ownKeys: (t) => Ys(t),
      set(t, e, n) {
        const i = t._storage || (t._storage = r());
        return t[e] = i[e] = n, delete t._keys, !0;
      },
    });
  }
  function js(t, e, n, r) {
    const i = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: zs(t, r),
      setContext: (e) => js(t, e, n, r),
      override: (i) => js(t.override(i), e, n, r),
    };
    return new Proxy(i, {
      deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
      get: (t, e, n) =>
        Bs(t, e, () =>
          function (t, e, n) {
            const { _proxy: r, _context: i, _subProxy: a, _descriptors: o } = t;
            let s = r[e];
            oo(s) && o.isScriptable(e) && (s = function (t, e, n, r) {
              const { _proxy: i, _context: a, _subProxy: o, _stack: s } = n;
              if (s.has(t)) {
                throw new Error(
                  "Recursion detected: " + Array.from(s).join("->") + "->" + t,
                );
              }
              s.add(t);
              let l = e(a, o || r);
              s.delete(t), Is(t, l) && (l = Ws(i._scopes, i, t, l));
              return l;
            }(e, s, t, n));
            Va(s) && s.length && (s = function (t, e, n, r) {
              const { _proxy: i, _context: a, _subProxy: o, _descriptors: s } =
                n;
              if ("undefined" !== typeof a.index && r(t)) {
                return e[a.index % e.length];
              }
              if (Ha(e[0])) {
                const n = e, r = i._scopes.filter((t) => t !== n);
                e = [];
                for (const l of n) {
                  const n = Ws(r, i, t, l);
                  e.push(js(n, a, o && o[t], s));
                }
              }
              return e;
            }(e, s, t, o.isIndexable));
            Is(e, s) && (s = js(s, i, a && a[e], o));
            return s;
          }(t, e, n)),
      getOwnPropertyDescriptor: (e, n) =>
        e._descriptors.allKeys
          ? Reflect.has(t, n) ? { enumerable: !0, configurable: !0 } : void 0
          : Reflect.getOwnPropertyDescriptor(t, n),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, n) => Reflect.has(t, n),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, n, r) => (t[n] = r, delete e[n], !0),
    });
  }
  function zs(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : { scriptable: !0, indexable: !0 };
    const {
      _scriptable: n = e.scriptable,
      _indexable: r = e.indexable,
      _allKeys: i = e.allKeys,
    } = t;
    return {
      allKeys: i,
      scriptable: n,
      indexable: r,
      isScriptable: oo(n) ? n : () => n,
      isIndexable: oo(r) ? r : () => r,
    };
  }
  const Ns = (t, e) => t ? t + io(e) : e,
    Is = (t, e) =>
      Ha(e) && "adapters" !== t &&
      (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function Bs(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) {
      return t[e];
    }
    const r = n();
    return t[e] = r, r;
  }
  function Vs(t, e, n) {
    return oo(t) ? t(e, n) : t;
  }
  const Hs = (t, e) => !0 === t ? e : "string" === typeof t ? ro(e, t) : void 0;
  function Us(t, e, n, r, i) {
    for (const a of e) {
      const e = Hs(n, a);
      if (e) {
        t.add(e);
        const a = Vs(e._fallback, n, i);
        if ("undefined" !== typeof a && a !== n && a !== r) return a;
      } else if (!1 === e && "undefined" !== typeof r && n !== r) return null;
    }
    return !1;
  }
  function Ws(t, e, n, r) {
    const i = e._rootScopes,
      a = Vs(e._fallback, n, r),
      o = [...t, ...i],
      s = new Set();
    s.add(r);
    let l = $s(s, o, n, a || n, r);
    return null !== l &&
      (("undefined" === typeof a || a === n ||
        (l = $s(s, o, a, l, r), null !== l)) &&
        Fs(Array.from(s), [""], i, a, () =>
          function (t, e, n) {
            const r = t._getTarget();
            e in r || (r[e] = {});
            const i = r[e];
            if (Va(i) && Ha(n)) return n;
            return i || {};
          }(e, n, r)));
  }
  function $s(t, e, n, r, i) {
    for (; n;) n = Us(t, e, n, r, i);
    return n;
  }
  function qs(t, e) {
    for (const n of e) {
      if (!n) continue;
      const e = n[t];
      if ("undefined" !== typeof e) return e;
    }
  }
  function Ys(t) {
    let e = t._keys;
    return e || (e = t._keys = function (t) {
      const e = new Set();
      for (const n of t) {
        for (const t of Object.keys(n).filter((t) => !t.startsWith("_"))) {
          e.add(t);
        }
      }
      return Array.from(e);
    }(t._scopes)),
      e;
  }
  function Qs(t, e, n, r) {
    const { iScale: i } = t, { key: a = "r" } = this._parsing, o = new Array(r);
    let s, l, c, u;
    for (s = 0, l = r; s < l; ++s) {
      c = s + n, u = e[c], o[s] = { r: i.parse(ro(u, a), c) };
    }
    return o;
  }
  const Ks = Number.EPSILON || 1e-14,
    Xs = (t, e) => e < t.length && !t[e].skip && t[e],
    Js = (t) => "x" === t ? "y" : "x";
  function Gs(t, e, n, r) {
    const i = t.skip ? e : t,
      a = e,
      o = n.skip ? e : n,
      s = Co(a, i),
      l = Co(o, a);
    let c = s / (s + l), u = l / (s + l);
    c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
    const h = r * c, d = r * u;
    return {
      previous: { x: a.x - h * (o.x - i.x), y: a.y - h * (o.y - i.y) },
      next: { x: a.x + d * (o.x - i.x), y: a.y + d * (o.y - i.y) },
    };
  }
  function Zs(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : "x";
    const n = Js(e), r = t.length, i = Array(r).fill(0), a = Array(r);
    let o, s, l, c = Xs(t, 0);
    for (o = 0; o < r; ++o) {
      if (s = l, l = c, c = Xs(t, o + 1), l) {
        if (c) {
          const t = c[e] - l[e];
          i[o] = 0 !== t ? (c[n] - l[n]) / t : 0;
        }
        a[o] = s
          ? c ? yo(i[o - 1]) !== yo(i[o]) ? 0 : (i[o - 1] + i[o]) / 2 : i[o - 1]
          : i[o];
      }
    }
    !function (t, e, n) {
      const r = t.length;
      let i, a, o, s, l, c = Xs(t, 0);
      for (let u = 0; u < r - 1; ++u) {
        l = c,
          c = Xs(t, u + 1),
          l && c && (vo(e[u], 0, Ks)
            ? n[u] = n[u + 1] = 0
            : (i = n[u] / e[u],
              a = n[u + 1] / e[u],
              s = Math.pow(i, 2) + Math.pow(a, 2),
              s <= 9 ||
              (o = 3 / Math.sqrt(s),
                n[u] = i * o * e[u],
                n[u + 1] = a * o * e[u])));
      }
    }(t, i, a),
      function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "x";
        const r = Js(n), i = t.length;
        let a, o, s, l = Xs(t, 0);
        for (let c = 0; c < i; ++c) {
          if (o = s, s = l, l = Xs(t, c + 1), !s) continue;
          const i = s[n], u = s[r];
          o &&
          (a = (i - o[n]) / 3,
            s[`cp1${n}`] = i - a,
            s[`cp1${r}`] = u - a * e[c]),
            l &&
            (a = (l[n] - i) / 3,
              s[`cp2${n}`] = i + a,
              s[`cp2${r}`] = u + a * e[c]);
        }
      }(t, a, e);
  }
  function tl(t, e, n) {
    return Math.max(Math.min(t, n), e);
  }
  function el(t, e, n, r, i) {
    let a, o, s, l;
    if (
      e.spanGaps && (t = t.filter((t) => !t.skip)),
        "monotone" === e.cubicInterpolationMode
    ) Zs(t, i);
    else {
      let n = r ? t[t.length - 1] : t[0];
      for (a = 0, o = t.length; a < o; ++a) {
        s = t[a],
          l = Gs(n, s, t[Math.min(a + 1, o - (r ? 0 : 1)) % o], e.tension),
          s.cp1x = l.previous.x,
          s.cp1y = l.previous.y,
          s.cp2x = l.next.x,
          s.cp2y = l.next.y,
          n = s;
      }
    }
    e.capBezierPoints && function (t, e) {
      let n, r, i, a, o, s = ms(t[0], e);
      for (n = 0, r = t.length; n < r; ++n) {
        o = a,
          a = s,
          s = n < r - 1 && ms(t[n + 1], e),
          a &&
          (i = t[n],
            o &&
            (i.cp1x = tl(i.cp1x, e.left, e.right),
              i.cp1y = tl(i.cp1y, e.top, e.bottom)),
            s &&
            (i.cp2x = tl(i.cp2x, e.left, e.right),
              i.cp2y = tl(i.cp2y, e.top, e.bottom)));
      }
    }(t, n);
  }
  function nl() {
    return "undefined" !== typeof window && "undefined" !== typeof document;
  }
  function rl(t) {
    let e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function il(t, e, n) {
    let r;
    return "string" === typeof t
      ? (r = parseInt(t, 10),
        -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n]))
      : r = t,
      r;
  }
  const al = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  const ol = ["top", "right", "bottom", "left"];
  function sl(t, e, n) {
    const r = {};
    n = n ? "-" + n : "";
    for (let i = 0; i < 4; i++) {
      const a = ol[i];
      r[a] = parseFloat(t[e + "-" + a + n]) || 0;
    }
    return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
  }
  function ll(t, e) {
    if ("native" in t) return t;
    const { canvas: n, currentDevicePixelRatio: r } = e,
      i = al(n),
      a = "border-box" === i.boxSizing,
      o = sl(i, "padding"),
      s = sl(i, "border", "width"),
      { x: l, y: c, box: u } = function (t, e) {
        const n = t.touches,
          r = n && n.length ? n[0] : t,
          { offsetX: i, offsetY: a } = r;
        let o, s, l = !1;
        if (
          ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
            i,
            a,
            t.target,
          )
        ) o = i, s = a;
        else {
          const t = e.getBoundingClientRect();
          o = r.clientX - t.left, s = r.clientY - t.top, l = !0;
        }
        return { x: o, y: s, box: l };
      }(t, n),
      h = o.left + (u && s.left),
      d = o.top + (u && s.top);
    let { width: f, height: p } = e;
    return a && (f -= o.width + s.width, p -= o.height + s.height), {
      x: Math.round((l - h) / f * n.width / r),
      y: Math.round((c - d) / p * n.height / r),
    };
  }
  const cl = (t) => Math.round(10 * t) / 10;
  function ul(t, e, n, r) {
    const i = al(t),
      a = sl(i, "margin"),
      o = il(i.maxWidth, t, "clientWidth") || ho,
      s = il(i.maxHeight, t, "clientHeight") || ho,
      l = function (t, e, n) {
        let r, i;
        if (void 0 === e || void 0 === n) {
          const a = t && rl(t);
          if (a) {
            const t = a.getBoundingClientRect(),
              o = al(a),
              s = sl(o, "border", "width"),
              l = sl(o, "padding");
            e = t.width - l.width - s.width,
              n = t.height - l.height - s.height,
              r = il(o.maxWidth, a, "clientWidth"),
              i = il(o.maxHeight, a, "clientHeight");
          } else e = t.clientWidth, n = t.clientHeight;
        }
        return { width: e, height: n, maxWidth: r || ho, maxHeight: i || ho };
      }(t, e, n);
    let { width: c, height: u } = l;
    if ("content-box" === i.boxSizing) {
      const t = sl(i, "border", "width"), e = sl(i, "padding");
      c -= e.width + t.width, u -= e.height + t.height;
    }
    c = Math.max(0, c - a.width),
      u = Math.max(0, r ? c / r : u - a.height),
      c = cl(Math.min(c, o, l.maxWidth)),
      u = cl(Math.min(u, s, l.maxHeight)),
      c && !u && (u = cl(c / 2));
    return (void 0 !== e || void 0 !== n) && r && l.height && u > l.height &&
      (u = l.height, c = cl(Math.floor(u * r))),
      { width: c, height: u };
  }
  function hl(t, e, n) {
    const r = e || 1, i = Math.floor(t.height * r), a = Math.floor(t.width * r);
    t.height = Math.floor(t.height), t.width = Math.floor(t.width);
    const o = t.canvas;
    return o.style && (n || !o.style.height && !o.style.width) &&
      (o.style.height = `${t.height}px`, o.style.width = `${t.width}px`),
      (t.currentDevicePixelRatio !== r || o.height !== i || o.width !== a) &&
      (t.currentDevicePixelRatio = r,
        o.height = i,
        o.width = a,
        t.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0);
  }
  const dl = function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return t = !0, !1;
        },
      };
      nl() &&
        (window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e));
    } catch (qd) {}
    return t;
  }();
  function fl(t, e) {
    const n = function (t, e) {
        return al(t).getPropertyValue(e);
      }(t, e),
      r = n && n.match(/^(\d+)(\.\d+)?px$/);
    return r ? +r[1] : void 0;
  }
  function pl(t, e, n, r) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
  }
  function gl(t, e, n, r) {
    return {
      x: t.x + n * (e.x - t.x),
      y: "middle" === r
        ? n < .5 ? t.y : e.y
        : "after" === r
        ? n < 1 ? t.y : e.y
        : n > 0
        ? e.y
        : t.y,
    };
  }
  function ml(t, e, n, r) {
    const i = { x: t.cp2x, y: t.cp2y },
      a = { x: e.cp1x, y: e.cp1y },
      o = pl(t, i, n),
      s = pl(i, a, n),
      l = pl(a, e, n),
      c = pl(o, s, n),
      u = pl(s, l, n);
    return pl(c, u, n);
  }
  function bl(t, e, n) {
    return t
      ? function (t, e) {
        return {
          x: (n) => t + t + e - n,
          setWidth(t) {
            e = t;
          },
          textAlign: (t) =>
            "center" === t ? t : "right" === t ? "left" : "right",
          xPlus: (t, e) => t - e,
          leftForLtr: (t, e) => t - e,
        };
      }(e, n)
      : {
        x: (t) => t,
        setWidth(t) {},
        textAlign: (t) => t,
        xPlus: (t, e) => t + e,
        leftForLtr: (t, e) => t,
      };
  }
  function yl(t, e) {
    let n, r;
    "ltr" !== e && "rtl" !== e ||
      (n = t.canvas.style,
        r = [
          n.getPropertyValue("direction"),
          n.getPropertyPriority("direction"),
        ],
        n.setProperty("direction", e, "important"),
        t.prevTextDirection = r);
  }
  function vl(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection,
        t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function xl(t) {
    return "angle" === t
      ? { between: Ro, compare: Po, normalize: To }
      : { between: Do, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function wl(t) {
    let { start: e, end: n, count: r, loop: i, style: a } = t;
    return {
      start: e % r,
      end: n % r,
      loop: i && (n - e + 1) % r === 0,
      style: a,
    };
  }
  function _l(t, e, n) {
    if (!n) return [t];
    const { property: r, start: i, end: a } = n,
      o = e.length,
      { compare: s, between: l, normalize: c } = xl(r),
      { start: u, end: h, loop: d, style: f } = function (t, e, n) {
        const { property: r, start: i, end: a } = n,
          { between: o, normalize: s } = xl(r),
          l = e.length;
        let c, u, { start: h, end: d, loop: f } = t;
        if (f) {
          for (
            h += l, d += l, c = 0, u = l;
            c < u && o(s(e[h % l][r]), i, a);
            ++c
          ) h--, d--;
          h %= l, d %= l;
        }
        return d < h && (d += l), { start: h, end: d, loop: f, style: t.style };
      }(t, e, n),
      p = [];
    let g, m, b, y = !1, v = null;
    const x = () => y || l(i, b, g) && 0 !== s(i, b),
      w = () => !y || 0 === s(a, g) || l(a, b, g);
    for (let _ = u, k = u; _ <= h; ++_) {
      m = e[_ % o],
        m.skip ||
        (g = c(m[r]),
          g !== b &&
          (y = l(g, i, a),
            null === v && x() && (v = 0 === s(g, i) ? _ : k),
            null !== v && w() &&
            (p.push(wl({ start: v, end: _, loop: d, count: o, style: f })),
              v = null),
            k = _,
            b = g));
    }
    return null !== v &&
      p.push(wl({ start: v, end: h, loop: d, count: o, style: f })),
      p;
  }
  function kl(t, e) {
    const n = [], r = t.segments;
    for (let i = 0; i < r.length; i++) {
      const a = _l(r[i], t.points, e);
      a.length && n.push(...a);
    }
    return n;
  }
  function Sl(t, e, n, r) {
    return r && r.setContext && n
      ? function (t, e, n, r) {
        const i = t._chart.getContext(),
          a = Ml(t.options),
          { _datasetIndex: o, options: { spanGaps: s } } = t,
          l = n.length,
          c = [];
        let u = a, h = e[0].start, d = h;
        function f(t, e, r, i) {
          const a = s ? -1 : 1;
          if (t !== e) {
            for (t += l; n[t % l].skip;) t -= a;
            for (; n[e % l].skip;) e += a;
            t % l !== e % l &&
              (c.push({ start: t % l, end: e % l, loop: r, style: i }),
                u = i,
                h = e % l);
          }
        }
        for (const p of e) {
          h = s ? h : p.start;
          let t, e = n[h % l];
          for (d = h + 1; d <= p.end; d++) {
            const a = n[d % l];
            t = Ml(
              r.setContext(
                As(i, {
                  type: "segment",
                  p0: e,
                  p1: a,
                  p0DataIndex: (d - 1) % l,
                  p1DataIndex: d % l,
                  datasetIndex: o,
                }),
              ),
            ),
              El(t, u) && f(h, d - 1, p.loop, u),
              e = a,
              u = t;
          }
          h < d - 1 && f(h, d - 1, p.loop, u);
        }
        return c;
      }(t, e, n, r)
      : e;
  }
  function Ml(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor,
    };
  }
  function El(t, e) {
    if (!e) return !1;
    const n = [],
      r = function (t, e) {
        return Ko(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e;
      };
    return JSON.stringify(t, r) !== JSON.stringify(e, r);
  }
  class Cl {
    constructor() {
      this._request = null,
        this._charts = new Map(),
        this._running = !1,
        this._lastDate = void 0;
    }
    _notify(t, e, n, r) {
      const i = e.listeners[r], a = e.duration;
      i.forEach(
        (r) =>
          r({
            chart: t,
            initial: e.initial,
            numSteps: a,
            currentStep: Math.min(n - e.start, a),
          }),
      );
    }
    _refresh() {
      this._request ||
        (this._running = !0,
          this._request = Io.call(window, () => {
            this._update(),
              this._request = null,
              this._running && this._refresh();
          }));
    }
    _update() {
      let t = arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : Date.now(),
        e = 0;
      this._charts.forEach((n, r) => {
        if (!n.running || !n.items.length) return;
        const i = n.items;
        let a, o = i.length - 1, s = !1;
        for (; o >= 0; --o) {
          a = i[o],
            a._active
              ? (a._total > n.duration && (n.duration = a._total),
                a.tick(t),
                s = !0)
              : (i[o] = i[i.length - 1], i.pop());
        }
        s && (r.draw(), this._notify(r, n, t, "progress")),
          i.length ||
          (n.running = !1, this._notify(r, n, t, "complete"), n.initial = !1),
          e += i.length;
      }),
        this._lastDate = t,
        0 === e && (this._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let n = e.get(t);
      return n ||
        (n = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        },
          e.set(t, n)),
        n;
    }
    listen(t, e, n) {
      this._getAnims(t).listeners[e].push(n);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e &&
        (e.running = !0,
          e.start = Date.now(),
          e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0),
          this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const n = e.items;
      let r = n.length - 1;
      for (; r >= 0; --r) n[r].cancel();
      e.items = [], this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var Pl = new Cl();
  const Tl = "transparent",
    Rl = {
      boolean: (t, e, n) => n > .5 ? e : t,
      color(t, e, n) {
        const r = Xo(t || Tl), i = r.valid && Xo(e || Tl);
        return i && i.valid ? i.mix(r, n).hexString() : e;
      },
      number: (t, e, n) => t + (e - t) * n,
    };
  class Ol {
    constructor(t, e, n, r) {
      const i = e[n];
      r = Ls([t.to, r, i, t.from]);
      const a = Ls([t.from, i, r]);
      this._active = !0,
        this._fn = t.fn || Rl[t.type || typeof a],
        this._easing = Qo[t.easing] || Qo.linear,
        this._start = Math.floor(Date.now() + (t.delay || 0)),
        this._duration = this._total = Math.floor(t.duration),
        this._loop = !!t.loop,
        this._target = e,
        this._prop = n,
        this._from = a,
        this._to = r,
        this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(t, e, n) {
      if (this._active) {
        this._notify(!1);
        const r = this._target[this._prop],
          i = n - this._start,
          a = this._duration - i;
        this._start = n,
          this._duration = Math.floor(Math.max(a, t.duration)),
          this._total += i,
          this._loop = !!t.loop,
          this._to = Ls([t.to, e, r, t.from]),
          this._from = Ls([t.from, r, e]);
      }
    }
    cancel() {
      this._active &&
        (this.tick(Date.now()), this._active = !1, this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        n = this._duration,
        r = this._prop,
        i = this._from,
        a = this._loop,
        o = this._to;
      let s;
      if (this._active = i !== o && (a || e < n), !this._active) {
        return this._target[r] = o, void this._notify(!0);
      }
      e < 0
        ? this._target[r] = i
        : (s = e / n % 2,
          s = a && s > 1 ? 2 - s : s,
          s = this._easing(Math.min(1, Math.max(0, s))),
          this._target[r] = this._fn(i, o, s));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, n) => {
        t.push({ res: e, rej: n });
      });
    }
    _notify(t) {
      const e = t ? "res" : "rej", n = this._promises || [];
      for (let r = 0; r < n.length; r++) n[r][e]();
    }
  }
  class Dl {
    constructor(t, e) {
      this._chart = t, this._properties = new Map(), this.configure(e);
    }
    configure(t) {
      if (!Ha(t)) return;
      const e = Object.keys(cs.animation), n = this._properties;
      Object.getOwnPropertyNames(t).forEach((r) => {
        const i = t[r];
        if (!Ha(i)) return;
        const a = {};
        for (const t of e) a[t] = i[t];
        (Va(i.properties) && i.properties || [r]).forEach((t) => {
          t !== r && n.has(t) || n.set(t, a);
        });
      });
    }
    _animateOptions(t, e) {
      const n = e.options,
        r = function (t, e) {
          if (!e) return;
          let n = t.options;
          if (!n) return void (t.options = e);
          n.$shared &&
            (t.options = n = Object.assign({}, n, {
              $shared: !1,
              $animations: {},
            }));
          return n;
        }(t, n);
      if (!r) return [];
      const i = this._createAnimations(r, n);
      return n.$shared && function (t, e) {
        const n = [], r = Object.keys(e);
        for (let i = 0; i < r.length; i++) {
          const e = t[r[i]];
          e && e.active() && n.push(e.wait());
        }
        return Promise.all(n);
      }(t.options.$animations, n).then(() => {
        t.options = n;
      }, () => {}),
        i;
    }
    _createAnimations(t, e) {
      const n = this._properties,
        r = [],
        i = t.$animations || (t.$animations = {}),
        a = Object.keys(e),
        o = Date.now();
      let s;
      for (s = a.length - 1; s >= 0; --s) {
        const l = a[s];
        if ("$" === l.charAt(0)) continue;
        if ("options" === l) {
          r.push(...this._animateOptions(t, e));
          continue;
        }
        const c = e[l];
        let u = i[l];
        const h = n.get(l);
        if (u) {
          if (h && u.active()) {
            u.update(h, c, o);
            continue;
          }
          u.cancel();
        }
        h && h.duration ? (i[l] = u = new Ol(h, t, l, c), r.push(u)) : t[l] = c;
      }
      return r;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const n = this._createAnimations(t, e);
      return n.length ? (Pl.add(this._chart, n), !0) : void 0;
    }
  }
  function Ll(t, e) {
    const n = t && t.options || {},
      r = n.reverse,
      i = void 0 === n.min ? e : 0,
      a = void 0 === n.max ? e : 0;
    return { start: r ? a : i, end: r ? i : a };
  }
  function Al(t, e) {
    const n = [], r = t._getSortedDatasetMetas(e);
    let i, a;
    for (i = 0, a = r.length; i < a; ++i) n.push(r[i].index);
    return n;
  }
  function Fl(t, e, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const i = t.keys, a = "single" === r.mode;
    let o, s, l, c;
    if (null !== e) {
      for (o = 0, s = i.length; o < s; ++o) {
        if (l = +i[o], l === n) {
          if (r.all) continue;
          break;
        }
        c = t.values[l], Ua(c) && (a || 0 === e || yo(e) === yo(c)) && (e += c);
      }
      return e;
    }
  }
  function jl(t, e) {
    const n = t && t.options.stacked;
    return n || void 0 === n && void 0 !== e.stack;
  }
  function zl(t, e, n) {
    const r = t[e] || (t[e] = {});
    return r[n] || (r[n] = {});
  }
  function Nl(t, e, n, r) {
    for (const i of e.getMatchingVisibleMetas(r).reverse()) {
      const e = t[i.index];
      if (n && e > 0 || !n && e < 0) return i.index;
    }
    return null;
  }
  function Il(t, e) {
    const { chart: n, _cachedMeta: r } = t,
      i = n._stacks || (n._stacks = {}),
      { iScale: a, vScale: o, index: s } = r,
      l = a.axis,
      c = o.axis,
      u = function (t, e, n) {
        return `${t.id}.${e.id}.${n.stack || n.type}`;
      }(a, o, r),
      h = e.length;
    let d;
    for (let f = 0; f < h; ++f) {
      const t = e[f], { [l]: n, [c]: a } = t;
      d = (t._stacks || (t._stacks = {}))[c] = zl(i, u, n),
        d[s] = a,
        d._top = Nl(d, o, !0, r.type),
        d._bottom = Nl(d, o, !1, r.type);
      (d._visualValues || (d._visualValues = {}))[s] = a;
    }
  }
  function Bl(t, e) {
    const n = t.scales;
    return Object.keys(n).filter((t) => n[t].axis === e).shift();
  }
  function Vl(t, e) {
    const n = t.controller.index, r = t.vScale && t.vScale.axis;
    if (r) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[r] || void 0 === e[r][n]) return;
        delete e[r][n],
          void 0 !== e[r]._visualValues && void 0 !== e[r]._visualValues[n] &&
          delete e[r]._visualValues[n];
      }
    }
  }
  const Hl = (t) => "reset" === t || "none" === t,
    Ul = (t, e) => e ? t : Object.assign({}, t);
  class Wl {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(t, e) {
      this.chart = t,
        this._ctx = t.ctx,
        this.index = e,
        this._cachedDataOpts = {},
        this._cachedMeta = this.getMeta(),
        this._type = this._cachedMeta.type,
        this.options = void 0,
        this._parsing = !1,
        this._data = void 0,
        this._objectData = void 0,
        this._sharedOptions = void 0,
        this._drawStart = void 0,
        this._drawCount = void 0,
        this.enableOptionSharing = !1,
        this.supportsDecimation = !1,
        this.$context = void 0,
        this._syncList = [],
        this.datasetElementType = new.target.datasetElementType,
        this.dataElementType = new.target.dataElementType,
        this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(),
        this.linkScales(),
        t._stacked = jl(t.vScale, t),
        this.addElements(),
        this.options.fill && !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
    }
    updateIndex(t) {
      this.index !== t && Vl(this._cachedMeta), this.index = t;
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        n = this.getDataset(),
        r = (t, e, n, r) => "x" === t ? e : "r" === t ? r : n,
        i = e.xAxisID = $a(n.xAxisID, Bl(t, "x")),
        a = e.yAxisID = $a(n.yAxisID, Bl(t, "y")),
        o = e.rAxisID = $a(n.rAxisID, Bl(t, "r")),
        s = e.indexAxis,
        l = e.iAxisID = r(s, i, a, o),
        c = e.vAxisID = r(s, a, i, o);
      e.xScale = this.getScaleForId(i),
        e.yScale = this.getScaleForId(a),
        e.rScale = this.getScaleForId(o),
        e.iScale = this.getScaleForId(l),
        e.vScale = this.getScaleForId(c);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && zo(this._data, this), t._stacked && Vl(t);
    }
    _dataCheck() {
      const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
      if (Ha(e)) {
        const t = this._cachedMeta;
        this._data = function (t, e) {
          const { iScale: n, vScale: r } = e,
            i = "x" === n.axis ? "x" : "y",
            a = "x" === r.axis ? "x" : "y",
            o = Object.keys(t),
            s = new Array(o.length);
          let l, c, u;
          for (l = 0, c = o.length; l < c; ++l) {
            u = o[l], s[l] = { [i]: u, [a]: t[u] };
          }
          return s;
        }(e, t);
      } else if (n !== e) {
        if (n) {
          zo(n, this);
          const t = this._cachedMeta;
          Vl(t), t._parsed = [];
        }
        e && Object.isExtensible(e) &&
        (i = this,
          (r = e)._chartjs
            ? r._chartjs.listeners.push(i)
            : (Object.defineProperty(r, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [i] },
            }),
              jo.forEach((t) => {
                const e = "_onData" + io(t), n = r[t];
                Object.defineProperty(r, t, {
                  configurable: !0,
                  enumerable: !1,
                  value() {
                    for (
                      var t = arguments.length, i = new Array(t), a = 0;
                      a < t;
                      a++
                    ) i[a] = arguments[a];
                    const o = n.apply(this, i);
                    return r._chartjs.listeners.forEach((t) => {
                      "function" === typeof t[e] && t[e](...i);
                    }),
                      o;
                  },
                });
              }))),
          this._syncList = [],
          this._data = e;
      }
      var r, i;
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta, n = this.getDataset();
      let r = !1;
      this._dataCheck();
      const i = e._stacked;
      e._stacked = jl(e.vScale, e),
        e.stack !== n.stack && (r = !0, Vl(e), e.stack = n.stack),
        this._resyncElements(t),
        (r || i !== e._stacked) && Il(this, e._parsed);
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        n = t.getOptionScopes(this.getDataset(), e, !0);
      this.options = t.createResolver(n, this.getContext()),
        this._parsing = this.options.parsing,
        this._cachedDataOpts = {};
    }
    parse(t, e) {
      const { _cachedMeta: n, _data: r } = this,
        { iScale: i, _stacked: a } = n,
        o = i.axis;
      let s,
        l,
        c,
        u = 0 === t && e === r.length || n._sorted,
        h = t > 0 && n._parsed[t - 1];
      if (!1 === this._parsing) n._parsed = r, n._sorted = !0, c = r;
      else {
        c = Va(r[t])
          ? this.parseArrayData(n, r, t, e)
          : Ha(r[t])
          ? this.parseObjectData(n, r, t, e)
          : this.parsePrimitiveData(n, r, t, e);
        const i = () => null === l[o] || h && l[o] < h[o];
        for (s = 0; s < e; ++s) {
          n._parsed[s + t] = l = c[s], u && (i() && (u = !1), h = l);
        }
        n._sorted = u;
      }
      a && Il(this, c);
    }
    parsePrimitiveData(t, e, n, r) {
      const { iScale: i, vScale: a } = t,
        o = i.axis,
        s = a.axis,
        l = i.getLabels(),
        c = i === a,
        u = new Array(r);
      let h, d, f;
      for (h = 0, d = r; h < d; ++h) {
        f = h + n, u[h] = { [o]: c || i.parse(l[f], f), [s]: a.parse(e[f], f) };
      }
      return u;
    }
    parseArrayData(t, e, n, r) {
      const { xScale: i, yScale: a } = t, o = new Array(r);
      let s, l, c, u;
      for (s = 0, l = r; s < l; ++s) {
        c = s + n,
          u = e[c],
          o[s] = { x: i.parse(u[0], c), y: a.parse(u[1], c) };
      }
      return o;
    }
    parseObjectData(t, e, n, r) {
      const { xScale: i, yScale: a } = t,
        { xAxisKey: o = "x", yAxisKey: s = "y" } = this._parsing,
        l = new Array(r);
      let c, u, h, d;
      for (c = 0, u = r; c < u; ++c) {
        h = c + n,
          d = e[h],
          l[c] = { x: i.parse(ro(d, o), h), y: a.parse(ro(d, s), h) };
      }
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, n) {
      const r = this.chart, i = this._cachedMeta, a = e[t.axis];
      return Fl(
        { keys: Al(r, !0), values: e._stacks[t.axis]._visualValues },
        a,
        i.index,
        { mode: n },
      );
    }
    updateRangeFromParsed(t, e, n, r) {
      const i = n[e.axis];
      let a = null === i ? NaN : i;
      const o = r && n._stacks[e.axis];
      r && o && (r.values = o, a = Fl(r, i, this._cachedMeta.index)),
        t.min = Math.min(t.min, a),
        t.max = Math.max(t.max, a);
    }
    getMinMax(t, e) {
      const n = this._cachedMeta,
        r = n._parsed,
        i = n._sorted && t === n.iScale,
        a = r.length,
        o = this._getOtherScale(t),
        s =
          ((t, e, n) =>
            t && !e.hidden && e._stacked && { keys: Al(n, !0), values: null })(
              e,
              n,
              this.chart,
            ),
        l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: c, max: u } = function (t) {
          const { min: e, max: n, minDefined: r, maxDefined: i } = t
            .getUserBounds();
          return {
            min: r ? e : Number.NEGATIVE_INFINITY,
            max: i ? n : Number.POSITIVE_INFINITY,
          };
        }(o);
      let h, d;
      function f() {
        d = r[h];
        const e = d[o.axis];
        return !Ua(d[t.axis]) || c > e || u < e;
      }
      for (
        h = 0;
        h < a && (f() || (this.updateRangeFromParsed(l, t, d, s), !i));
        ++h
      );
      if (i) {
        for (h = a - 1; h >= 0; --h) {
          if (!f()) {
            this.updateRangeFromParsed(l, t, d, s);
            break;
          }
        }
      }
      return l;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed, n = [];
      let r, i, a;
      for (r = 0, i = e.length; r < i; ++r) {
        a = e[r][t.axis], Ua(a) && n.push(a);
      }
      return n;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = e.iScale,
        r = e.vScale,
        i = this.getParsed(t);
      return {
        label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
        value: r ? "" + r.getLabelForValue(i[r.axis]) : "",
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || "default"),
        e._clip = function (t) {
          let e, n, r, i;
          return Ha(t)
            ? (e = t.top, n = t.right, r = t.bottom, i = t.left)
            : e =
              n =
              r =
              i =
                t,
            { top: e, right: n, bottom: r, left: i, disabled: !1 === t };
        }($a(
          this.options.clip,
          function (t, e, n) {
            if (!1 === n) return !1;
            const r = Ll(t, n), i = Ll(e, n);
            return { top: i.end, right: r.end, bottom: i.start, left: r.start };
          }(e.xScale, e.yScale, this.getMaxOverflow()),
        ));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        n = this._cachedMeta,
        r = n.data || [],
        i = e.chartArea,
        a = [],
        o = this._drawStart || 0,
        s = this._drawCount || r.length - o,
        l = this.options.drawActiveElementsOnTop;
      let c;
      for (n.dataset && n.dataset.draw(t, i, o, s), c = o; c < o + s; ++c) {
        const e = r[c];
        e.hidden || (e.active && l ? a.push(e) : e.draw(t, i));
      }
      for (c = 0; c < a.length; ++c) a[c].draw(t, i);
    }
    getStyle(t, e) {
      const n = e ? "active" : "default";
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(n)
        : this.resolveDataElementOptions(t || 0, n);
    }
    getContext(t, e, n) {
      const r = this.getDataset();
      let i;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        i = e.$context || (e.$context = function (t, e, n) {
          return As(t, {
            active: !1,
            dataIndex: e,
            parsed: void 0,
            raw: void 0,
            element: n,
            index: e,
            mode: "default",
            type: "data",
          });
        }(this.getContext(), t, e)),
          i.parsed = this.getParsed(t),
          i.raw = r.data[t],
          i.index = i.dataIndex = t;
      } else {i = this.$context || (this.$context = function (t, e) {
          return As(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset",
          });
        }(this.chart.getContext(), this.index)),
          i.dataset = r,
          i.index = i.datasetIndex = this.index;}
      return i.active = !!e, i.mode = n, i;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "default",
        n = arguments.length > 2 ? arguments[2] : void 0;
      const r = "active" === e,
        i = this._cachedDataOpts,
        a = t + "-" + e,
        o = i[a],
        s = this.enableOptionSharing && ao(n);
      if (o) return Ul(o, s);
      const l = this.chart.config,
        c = l.datasetElementScopeKeys(this._type, t),
        u = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        h = l.getOptionScopes(this.getDataset(), c),
        d = Object.keys(cs.elements[t]),
        f = l.resolveNamedOptions(h, d, () => this.getContext(n, r, e), u);
      return f.$shared && (f.$shared = s, i[a] = Object.freeze(Ul(f, s))), f;
    }
    _resolveAnimations(t, e, n) {
      const r = this.chart,
        i = this._cachedDataOpts,
        a = `animation-${e}`,
        o = i[a];
      if (o) return o;
      let s;
      if (!1 !== r.options.animation) {
        const r = this.chart.config,
          i = r.datasetAnimationScopeKeys(this._type, e),
          a = r.getOptionScopes(this.getDataset(), i);
        s = r.createResolver(a, this.getContext(t, n, e));
      }
      const l = new Dl(r, s && s.animations);
      return s && s._cacheable && (i[a] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared) {
        return this._sharedOptions ||
          (this._sharedOptions = Object.assign({}, t));
      }
    }
    includeOptions(t, e) {
      return !e || Hl(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const n = this.resolveDataElementOptions(t, e),
        r = this._sharedOptions,
        i = this.getSharedOptions(n),
        a = this.includeOptions(e, i) || i !== r;
      return this.updateSharedOptions(i, e, n),
        { sharedOptions: i, includeOptions: a };
    }
    updateElement(t, e, n, r) {
      Hl(r) ? Object.assign(t, n) : this._resolveAnimations(e, r).update(t, n);
    }
    updateSharedOptions(t, e, n) {
      t && !Hl(e) && this._resolveAnimations(void 0, e).update(t, n);
    }
    _setStyle(t, e, n, r) {
      t.active = r;
      const i = this.getStyle(e, r);
      this._resolveAnimations(e, n, r).update(t, {
        options: !r && this.getSharedOptions(i) || i,
      });
    }
    removeHoverStyle(t, e, n) {
      this._setStyle(t, n, "active", !1);
    }
    setHoverStyle(t, e, n) {
      this._setStyle(t, n, "active", !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
      const e = this._data, n = this._cachedMeta.data;
      for (const [o, s, l] of this._syncList) this[o](s, l);
      this._syncList = [];
      const r = n.length, i = e.length, a = Math.min(i, r);
      a && this.parse(0, a),
        i > r
          ? this._insertElements(r, i - r, t)
          : i < r && this._removeElements(i, r - i);
    }
    _insertElements(t, e) {
      let n = !(arguments.length > 2 && void 0 !== arguments[2]) ||
        arguments[2];
      const r = this._cachedMeta, i = r.data, a = t + e;
      let o;
      const s = (t) => {
        for (t.length += e, o = t.length - 1; o >= a; o--) t[o] = t[o - e];
      };
      for (s(i), o = t; o < a; ++o) i[o] = new this.dataElementType();
      this._parsing && s(r._parsed),
        this.parse(t, e),
        n && this.updateElements(i, t, e, "reset");
    }
    updateElements(t, e, n, r) {}
    _removeElements(t, e) {
      const n = this._cachedMeta;
      if (this._parsing) {
        const r = n._parsed.splice(t, e);
        n._stacked && Vl(n, r);
      }
      n.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, n, r] = t;
        this[e](n, r);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(["_removeElements", t, e]);
      const n = arguments.length - 2;
      n && this._sync(["_insertElements", t, n]);
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  }
  function $l(t) {
    const e = t.iScale,
      n = function (t, e) {
        if (!t._cache.$bar) {
          const n = t.getMatchingVisibleMetas(e);
          let r = [];
          for (let e = 0, i = n.length; e < i; e++) {
            r = r.concat(n[e].controller.getAllParsedValues(t));
          }
          t._cache.$bar = No(r.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      }(e, t.type);
    let r, i, a, o, s = e._length;
    const l = () => {
      32767 !== a && -32768 !== a &&
        (ao(o) && (s = Math.min(s, Math.abs(a - o) || s)), o = a);
    };
    for (r = 0, i = n.length; r < i; ++r) a = e.getPixelForValue(n[r]), l();
    for (o = void 0, r = 0, i = e.ticks.length; r < i; ++r) {
      a = e.getPixelForTick(r), l();
    }
    return s;
  }
  function ql(t, e, n, r) {
    return Va(t)
      ? function (t, e, n, r) {
        const i = n.parse(t[0], r),
          a = n.parse(t[1], r),
          o = Math.min(i, a),
          s = Math.max(i, a);
        let l = o, c = s;
        Math.abs(o) > Math.abs(s) && (l = s, c = o),
          e[n.axis] = c,
          e._custom = {
            barStart: l,
            barEnd: c,
            start: i,
            end: a,
            min: o,
            max: s,
          };
      }(t, e, n, r)
      : e[n.axis] = n.parse(t, r),
      e;
  }
  function Yl(t, e, n, r) {
    const i = t.iScale, a = t.vScale, o = i.getLabels(), s = i === a, l = [];
    let c, u, h, d;
    for (c = n, u = n + r; c < u; ++c) {
      d = e[c],
        h = {},
        h[i.axis] = s || i.parse(o[c], c),
        l.push(ql(d, h, a, c));
    }
    return l;
  }
  function Ql(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function Kl(t, e, n, r) {
    let i = e.borderSkipped;
    const a = {};
    if (!i) return void (t.borderSkipped = a);
    if (!0 === i) {
      return void (t.borderSkipped = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
      });
    }
    const { start: o, end: s, reverse: l, top: c, bottom: u } = function (t) {
      let e, n, r, i, a;
      return t.horizontal
        ? (e = t.base > t.x, n = "left", r = "right")
        : (e = t.base < t.y, n = "bottom", r = "top"),
        e ? (i = "end", a = "start") : (i = "start", a = "end"),
        { start: n, end: r, reverse: e, top: i, bottom: a };
    }(t);
    "middle" === i && n &&
    (t.enableBorderRadius = !0,
      (n._top || 0) === r
        ? i = c
        : (n._bottom || 0) === r
        ? i = u
        : (a[Xl(u, o, s, l)] = !0, i = c)),
      a[Xl(i, o, s, l)] = !0,
      t.borderSkipped = a;
  }
  function Xl(t, e, n, r) {
    var i, a, o;
    return r
      ? (o = n, t = Jl(t = (i = t) === (a = e) ? o : i === o ? a : i, n, e))
      : t = Jl(t, e, n),
      t;
  }
  function Jl(t, e, n) {
    return "start" === t ? e : "end" === t ? n : t;
  }
  function Gl(t, e, n) {
    let { inflateAmount: r } = e;
    t.inflateAmount = "auto" === r ? 1 === n ? .33 : 0 : r;
  }
  class Zl extends Wl {
    static id = "bar";
    static defaults = {
      datasetElementType: !1,
      dataElementType: "bar",
      categoryPercentage: .8,
      barPercentage: .9,
      grouped: !0,
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "base", "width", "height"],
        },
      },
    };
    static overrides = {
      scales: {
        _index_: { type: "category", offset: !0, grid: { offset: !0 } },
        _value_: { type: "linear", beginAtZero: !0 },
      },
    };
    parsePrimitiveData(t, e, n, r) {
      return Yl(t, e, n, r);
    }
    parseArrayData(t, e, n, r) {
      return Yl(t, e, n, r);
    }
    parseObjectData(t, e, n, r) {
      const { iScale: i, vScale: a } = t,
        { xAxisKey: o = "x", yAxisKey: s = "y" } = this._parsing,
        l = "x" === i.axis ? o : s,
        c = "x" === a.axis ? o : s,
        u = [];
      let h, d, f, p;
      for (h = n, d = n + r; h < d; ++h) {
        p = e[h],
          f = {},
          f[i.axis] = i.parse(ro(p, l), h),
          u.push(ql(ro(p, c), f, a, h));
      }
      return u;
    }
    updateRangeFromParsed(t, e, n, r) {
      super.updateRangeFromParsed(t, e, n, r);
      const i = n._custom;
      i && e === this._cachedMeta.vScale &&
        (t.min = Math.min(t.min, i.min), t.max = Math.max(t.max, i.max));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { iScale: n, vScale: r } = e,
        i = this.getParsed(t),
        a = i._custom,
        o = Ql(a)
          ? "[" + a.start + ", " + a.end + "]"
          : "" + r.getLabelForValue(i[r.axis]);
      return { label: "" + n.getLabelForValue(i[n.axis]), value: o };
    }
    initialize() {
      this.enableOptionSharing = !0, super.initialize();
      this._cachedMeta.stack = this.getDataset().stack;
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, n, r) {
      const i = "reset" === r,
        { index: a, _cachedMeta: { vScale: o } } = this,
        s = o.getBasePixel(),
        l = o.isHorizontal(),
        c = this._getRuler(),
        { sharedOptions: u, includeOptions: h } = this._getSharedOptions(e, r);
      for (let d = e; d < e + n; d++) {
        const e = this.getParsed(d),
          n = i || Ba(e[o.axis])
            ? { base: s, head: s }
            : this._calculateBarValuePixels(d),
          f = this._calculateBarIndexPixels(d, c),
          p = (e._stacks || {})[o.axis],
          g = {
            horizontal: l,
            base: n.base,
            enableBorderRadius: !p || Ql(e._custom) || a === p._top ||
              a === p._bottom,
            x: l ? n.head : f.center,
            y: l ? f.center : n.head,
            height: l ? f.size : Math.abs(n.size),
            width: l ? Math.abs(n.size) : f.size,
          };
        h &&
          (g.options = u ||
            this.resolveDataElementOptions(d, t[d].active ? "active" : r));
        const m = g.options || t[d].options;
        Kl(g, m, p, a), Gl(g, m, c.ratio), this.updateElement(t[d], d, g, r);
      }
    }
    _getStacks(t, e) {
      const { iScale: n } = this._cachedMeta,
        r = n.getMatchingVisibleMetas(this._type).filter(
          (t) => t.controller.options.grouped,
        ),
        i = n.options.stacked,
        a = [],
        o = this._cachedMeta.controller.getParsed(e),
        s = o && o[n.axis],
        l = (t) => {
          const e = t._parsed.find((t) => t[n.axis] === s),
            r = e && e[t.vScale.axis];
          if (Ba(r) || isNaN(r)) return !0;
        };
      for (const c of r) {
        if (
          (void 0 === e || !l(c)) &&
          ((!1 === i || -1 === a.indexOf(c.stack) ||
            void 0 === i && void 0 === c.stack) && a.push(c.stack),
            c.index === t)
        ) break;
      }
      return a.length || a.push(void 0), a;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, n) {
      const r = this._getStacks(t, n), i = void 0 !== e ? r.indexOf(e) : -1;
      return -1 === i ? r.length - 1 : i;
    }
    _getRuler() {
      const t = this.options, e = this._cachedMeta, n = e.iScale, r = [];
      let i, a;
      for (i = 0, a = e.data.length; i < a; ++i) {
        r.push(n.getPixelForValue(this.getParsed(i)[n.axis], i));
      }
      const o = t.barThickness;
      return {
        min: o || $l(e),
        pixels: r,
        start: n._startPixel,
        end: n._endPixel,
        stackCount: this._getStackCount(),
        scale: n,
        grouped: t.grouped,
        ratio: o ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: { vScale: e, _stacked: n, index: r },
          options: { base: i, minBarLength: a },
        } = this,
        o = i || 0,
        s = this.getParsed(t),
        l = s._custom,
        c = Ql(l);
      let u, h, d = s[e.axis], f = 0, p = n ? this.applyStack(e, s, n) : d;
      p !== d && (f = p - d, p = d),
        c &&
        (d = l.barStart,
          p = l.barEnd - l.barStart,
          0 !== d && yo(d) !== yo(l.barEnd) && (f = 0),
          f += d);
      const g = Ba(i) || c ? f : i;
      let m = e.getPixelForValue(g);
      if (
        u = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m,
          h = u - m,
          Math.abs(h) < a
      ) {
        h = function (t, e, n) {
          return 0 !== t
            ? yo(t)
            : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
        }(h, e, o) * a, d === o && (m -= h / 2);
        const t = e.getPixelForDecimal(0),
          i = e.getPixelForDecimal(1),
          l = Math.min(t, i),
          f = Math.max(t, i);
        m = Math.max(Math.min(m, f), l),
          u = m + h,
          n && !c &&
          (s._stacks[e.axis]._visualValues[r] = e.getValueForPixel(u) -
            e.getValueForPixel(m));
      }
      if (m === e.getPixelForValue(o)) {
        const t = yo(h) * e.getLineWidthForValue(o) / 2;
        m += t, h -= t;
      }
      return { size: h, base: m, head: u, center: u + h / 2 };
    }
    _calculateBarIndexPixels(t, e) {
      const n = e.scale,
        r = this.options,
        i = r.skipNull,
        a = $a(r.maxBarThickness, 1 / 0);
      let o, s;
      if (e.grouped) {
        const n = i ? this._getStackCount(t) : e.stackCount,
          l = "flex" === r.barThickness
            ? function (t, e, n, r) {
              const i = e.pixels, a = i[t];
              let o = t > 0 ? i[t - 1] : null,
                s = t < i.length - 1 ? i[t + 1] : null;
              const l = n.categoryPercentage;
              null === o && (o = a - (null === s ? e.end - e.start : s - a)),
                null === s && (s = a + a - o);
              const c = a - (a - Math.min(o, s)) / 2 * l;
              return {
                chunk: Math.abs(s - o) / 2 * l / r,
                ratio: n.barPercentage,
                start: c,
              };
            }(t, e, r, n)
            : function (t, e, n, r) {
              const i = n.barThickness;
              let a, o;
              return Ba(i)
                ? (a = e.min * n.categoryPercentage, o = n.barPercentage)
                : (a = i * r, o = 1),
                { chunk: a / r, ratio: o, start: e.pixels[t] - a / 2 };
            }(t, e, r, n),
          c = this._getStackIndex(
            this.index,
            this._cachedMeta.stack,
            i ? t : void 0,
          );
        o = l.start + l.chunk * c + l.chunk / 2,
          s = Math.min(a, l.chunk * l.ratio);
      } else {o = n.getPixelForValue(this.getParsed(t)[n.axis], t),
          s = Math.min(a, e.min * e.ratio);}
      return { base: o - s / 2, head: o + s / 2, center: o, size: s };
    }
    draw() {
      const t = this._cachedMeta, e = t.vScale, n = t.data, r = n.length;
      let i = 0;
      for (; i < r; ++i) {
        null === this.getParsed(i)[e.axis] || n[i].hidden ||
          n[i].draw(this._ctx);
      }
    }
  }
  class tc extends Wl {
    static id = "doughnut";
    static defaults = {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing",
          ],
        },
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r",
    };
    static descriptors = {
      _scriptable: (t) => "spacing" !== t,
      _indexable: (t) =>
        "spacing" !== t && !t.startsWith("borderDash") &&
        !t.startsWith("hoverBorderDash"),
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const { labels: { pointStyle: n, color: r } } =
                  t.legend.options;
                return e.labels.map((e, i) => {
                  const a = t.getDatasetMeta(0).controller.getStyle(i);
                  return {
                    text: e,
                    fillStyle: a.backgroundColor,
                    strokeStyle: a.borderColor,
                    fontColor: r,
                    lineWidth: a.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(i),
                    index: i,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, n) {
            n.chart.toggleDataVisibility(e.index), n.chart.update();
          },
        },
      },
    };
    constructor(t, e) {
      super(t, e),
        this.enableOptionSharing = !0,
        this.innerRadius = void 0,
        this.outerRadius = void 0,
        this.offsetX = void 0,
        this.offsetY = void 0;
    }
    linkScales() {}
    parse(t, e) {
      const n = this.getDataset().data, r = this._cachedMeta;
      if (!1 === this._parsing) r._parsed = n;
      else {
        let i, a, o = (t) => +n[t];
        if (Ha(n[t])) {
          const { key: t = "value" } = this._parsing;
          o = (e) => +ro(n[e], t);
        }
        for (i = t, a = t + e; i < a; ++i) r._parsed[i] = o(i);
      }
    }
    _getRotation() {
      return ko(this.options.rotation - 90);
    }
    _getCircumference() {
      return ko(this.options.circumference);
    }
    _getRotationExtents() {
      let t = co, e = -co;
      for (let n = 0; n < this.chart.data.datasets.length; ++n) {
        if (
          this.chart.isDatasetVisible(n) &&
          this.chart.getDatasetMeta(n).type === this._type
        ) {
          const r = this.chart.getDatasetMeta(n).controller,
            i = r._getRotation(),
            a = r._getCircumference();
          t = Math.min(t, i), e = Math.max(e, i + a);
        }
      }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this.chart,
        { chartArea: n } = e,
        r = this._cachedMeta,
        i = r.data,
        a = this.getMaxBorderWidth() + this.getMaxOffset(i) +
          this.options.spacing,
        o = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
        s = Math.min(
          (l = this.options.cutout,
            c = o,
            "string" === typeof l && l.endsWith("%")
              ? parseFloat(l) / 100
              : +l / c),
          1,
        );
      var l, c;
      const u = this._getRingWeight(this.index),
        { circumference: h, rotation: d } = this._getRotationExtents(),
        { ratioX: f, ratioY: p, offsetX: g, offsetY: m } = function (t, e, n) {
          let r = 1, i = 1, a = 0, o = 0;
          if (e < co) {
            const s = t,
              l = s + e,
              c = Math.cos(s),
              u = Math.sin(s),
              h = Math.cos(l),
              d = Math.sin(l),
              f = (t, e, r) =>
                Ro(t, s, l, !0) ? 1 : Math.max(e, e * n, r, r * n),
              p = (t, e, r) =>
                Ro(t, s, l, !0) ? -1 : Math.min(e, e * n, r, r * n),
              g = f(0, c, h),
              m = f(po, u, d),
              b = p(lo, c, h),
              y = p(lo + po, u, d);
            r = (g - b) / 2,
              i = (m - y) / 2,
              a = -(g + b) / 2,
              o = -(m + y) / 2;
          }
          return { ratioX: r, ratioY: i, offsetX: a, offsetY: o };
        }(d, h, s),
        b = (n.width - a) / f,
        y = (n.height - a) / p,
        v = Math.max(Math.min(b, y) / 2, 0),
        x = qa(this.options.radius, v),
        w = (x - Math.max(x * s, 0)) / this._getVisibleDatasetWeightTotal();
      this.offsetX = g * x,
        this.offsetY = m * x,
        r.total = this.calculateTotal(),
        this.outerRadius = x - w * this._getRingWeightOffset(this.index),
        this.innerRadius = Math.max(this.outerRadius - w * u, 0),
        this.updateElements(i, 0, i.length, t);
    }
    _circumference(t, e) {
      const n = this.options,
        r = this._cachedMeta,
        i = this._getCircumference();
      return e && n.animation.animateRotate ||
          !this.chart.getDataVisibility(t) || null === r._parsed[t] ||
          r.data[t].hidden
        ? 0
        : this.calculateCircumference(r._parsed[t] * i / co);
    }
    updateElements(t, e, n, r) {
      const i = "reset" === r,
        a = this.chart,
        o = a.chartArea,
        s = a.options.animation,
        l = (o.left + o.right) / 2,
        c = (o.top + o.bottom) / 2,
        u = i && s.animateScale,
        h = u ? 0 : this.innerRadius,
        d = u ? 0 : this.outerRadius,
        { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, r);
      let g, m = this._getRotation();
      for (g = 0; g < e; ++g) m += this._circumference(g, i);
      for (g = e; g < e + n; ++g) {
        const e = this._circumference(g, i),
          n = t[g],
          a = {
            x: l + this.offsetX,
            y: c + this.offsetY,
            startAngle: m,
            endAngle: m + e,
            circumference: e,
            outerRadius: d,
            innerRadius: h,
          };
        p &&
        (a.options = f ||
          this.resolveDataElementOptions(g, n.active ? "active" : r)),
          m += e,
          this.updateElement(n, g, a, r);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta, e = t.data;
      let n, r = 0;
      for (n = 0; n < e.length; n++) {
        const i = t._parsed[n];
        null === i || isNaN(i) || !this.chart.getDataVisibility(n) ||
          e[n].hidden || (r += Math.abs(i));
      }
      return r;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? co * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart,
        r = n.data.labels || [],
        i = es(e._parsed[t], n.options.locale);
      return { label: r[t] || "", value: i };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const n = this.chart;
      let r, i, a, o, s;
      if (!t) {
        for (r = 0, i = n.data.datasets.length; r < i; ++r) {
          if (n.isDatasetVisible(r)) {
            a = n.getDatasetMeta(r), t = a.data, o = a.controller;
            break;
          }
        }
      }
      if (!t) return 0;
      for (r = 0, i = t.length; r < i; ++r) {
        s = o.resolveDataElementOptions(r),
          "inner" !== s.borderAlign &&
          (e = Math.max(e, s.borderWidth || 0, s.hoverBorderWidth || 0));
      }
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let n = 0, r = t.length; n < r; ++n) {
        const t = this.resolveDataElementOptions(n);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let n = 0; n < t; ++n) {
        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
      }
      return e;
    }
    _getRingWeight(t) {
      return Math.max($a(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  class ec extends Wl {
    static id = "line";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: !0,
      spanGaps: !1,
    };
    static overrides = {
      scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
    };
    initialize() {
      this.enableOptionSharing = !0,
        this.supportsDecimation = !0,
        super.initialize();
    }
    update(t) {
      const e = this._cachedMeta,
        { dataset: n, data: r = [], _dataset: i } = e,
        a = this.chart._animationsDisabled;
      let { start: o, count: s } = Uo(e, r, a);
      this._drawStart = o,
        this._drawCount = s,
        Wo(e) && (o = 0, s = r.length),
        n._chart = this.chart,
        n._datasetIndex = this.index,
        n._decimated = !!i._decimated,
        n.points = r;
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0),
        l.segment = this.options.segment,
        this.updateElement(n, void 0, { animated: !a, options: l }, t),
        this.updateElements(r, o, s, t);
    }
    updateElements(t, e, n, r) {
      const i = "reset" === r,
        { iScale: a, vScale: o, _stacked: s, _dataset: l } = this._cachedMeta,
        { sharedOptions: c, includeOptions: u } = this._getSharedOptions(e, r),
        h = a.axis,
        d = o.axis,
        { spanGaps: f, segment: p } = this.options,
        g = wo(f) ? f : Number.POSITIVE_INFINITY,
        m = this.chart._animationsDisabled || i || "none" === r,
        b = e + n,
        y = t.length;
      let v = e > 0 && this.getParsed(e - 1);
      for (let x = 0; x < y; ++x) {
        const n = t[x], f = m ? n : {};
        if (x < e || x >= b) {
          f.skip = !0;
          continue;
        }
        const y = this.getParsed(x),
          w = Ba(y[d]),
          _ = f[h] = a.getPixelForValue(y[h], x),
          k = f[d] = i || w
            ? o.getBasePixel()
            : o.getPixelForValue(s ? this.applyStack(o, y, s) : y[d], x);
        f.skip = isNaN(_) || isNaN(k) || w,
          f.stop = x > 0 && Math.abs(y[h] - v[h]) > g,
          p && (f.parsed = y, f.raw = l.data[x]),
          u &&
          (f.options = c ||
            this.resolveDataElementOptions(x, n.active ? "active" : r)),
          m || this.updateElement(n, x, f, r),
          v = y;
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        n = e.options && e.options.borderWidth || 0,
        r = t.data || [];
      if (!r.length) return n;
      const i = r[0].size(this.resolveDataElementOptions(0)),
        a = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
      return Math.max(n, i, a) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw();
    }
  }
  class nc extends Wl {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ],
        },
      },
      indexAxis: "r",
      startAngle: 0,
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const { labels: { pointStyle: n, color: r } } =
                  t.legend.options;
                return e.labels.map((e, i) => {
                  const a = t.getDatasetMeta(0).controller.getStyle(i);
                  return {
                    text: e,
                    fillStyle: a.backgroundColor,
                    strokeStyle: a.borderColor,
                    fontColor: r,
                    lineWidth: a.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(i),
                    index: i,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, e, n) {
            n.chart.toggleDataVisibility(e.index), n.chart.update();
          },
        },
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    };
    constructor(t, e) {
      super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart,
        r = n.data.labels || [],
        i = es(e._parsed[t].r, n.options.locale);
      return { label: r[t] || "", value: i };
    }
    parseObjectData(t, e, n, r) {
      return Qs.bind(this)(t, e, n, r);
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return t.data.forEach((t, n) => {
        const r = this.getParsed(n).r;
        !isNaN(r) && this.chart.getDataVisibility(n) &&
          (r < e.min && (e.min = r), r > e.max && (e.max = r));
      }),
        e;
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        n = t.options,
        r = Math.min(e.right - e.left, e.bottom - e.top),
        i = Math.max(r / 2, 0),
        a = (i -
          Math.max(
            n.cutoutPercentage ? i / 100 * n.cutoutPercentage : 1,
            0,
          )) / t.getVisibleDatasetCount();
      this.outerRadius = i - a * this.index,
        this.innerRadius = this.outerRadius - a;
    }
    updateElements(t, e, n, r) {
      const i = "reset" === r,
        a = this.chart,
        o = a.options.animation,
        s = this._cachedMeta.rScale,
        l = s.xCenter,
        c = s.yCenter,
        u = s.getIndexAngle(0) - .5 * lo;
      let h, d = u;
      const f = 360 / this.countVisibleElements();
      for (h = 0; h < e; ++h) d += this._computeAngle(h, r, f);
      for (h = e; h < e + n; h++) {
        const e = t[h];
        let n = d,
          p = d + this._computeAngle(h, r, f),
          g = a.getDataVisibility(h)
            ? s.getDistanceFromCenterForValue(this.getParsed(h).r)
            : 0;
        d = p, i && (o.animateScale && (g = 0), o.animateRotate && (n = p = u));
        const m = {
          x: l,
          y: c,
          innerRadius: 0,
          outerRadius: g,
          startAngle: n,
          endAngle: p,
          options: this.resolveDataElementOptions(h, e.active ? "active" : r),
        };
        this.updateElement(e, h, m, r);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let e = 0;
      return t.data.forEach((t, n) => {
        !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
      }),
        e;
    }
    _computeAngle(t, e, n) {
      return this.chart.getDataVisibility(t)
        ? ko(this.resolveDataElementOptions(t, e).angle || n)
        : 0;
    }
  }
  var rc = Object.freeze({
    __proto__: null,
    BarController: Zl,
    BubbleController: class extends Wl {
      static id = "bubble";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      };
      static overrides = {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      };
      initialize() {
        this.enableOptionSharing = !0, super.initialize();
      }
      parsePrimitiveData(t, e, n, r) {
        const i = super.parsePrimitiveData(t, e, n, r);
        for (let a = 0; a < i.length; a++) {
          i[a]._custom = this.resolveDataElementOptions(a + n).radius;
        }
        return i;
      }
      parseArrayData(t, e, n, r) {
        const i = super.parseArrayData(t, e, n, r);
        for (let a = 0; a < i.length; a++) {
          const t = e[n + a];
          i[a]._custom = $a(t[2], this.resolveDataElementOptions(a + n).radius);
        }
        return i;
      }
      parseObjectData(t, e, n, r) {
        const i = super.parseObjectData(t, e, n, r);
        for (let a = 0; a < i.length; a++) {
          const t = e[n + a];
          i[a]._custom = $a(
            t && t.r && +t.r,
            this.resolveDataElementOptions(a + n).radius,
          );
        }
        return i;
      }
      getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for (let n = t.length - 1; n >= 0; --n) {
          e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
        }
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          n = this.chart.data.labels || [],
          { xScale: r, yScale: i } = e,
          a = this.getParsed(t),
          o = r.getLabelForValue(a.x),
          s = i.getLabelForValue(a.y),
          l = a._custom;
        return {
          label: n[t] || "",
          value: "(" + o + ", " + s + (l ? ", " + l : "") + ")",
        };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, n, r) {
        const i = "reset" === r,
          { iScale: a, vScale: o } = this._cachedMeta,
          { sharedOptions: s, includeOptions: l } = this._getSharedOptions(
            e,
            r,
          ),
          c = a.axis,
          u = o.axis;
        for (let h = e; h < e + n; h++) {
          const e = t[h],
            n = !i && this.getParsed(h),
            d = {},
            f = d[c] = i ? a.getPixelForDecimal(.5) : a.getPixelForValue(n[c]),
            p = d[u] = i ? o.getBasePixel() : o.getPixelForValue(n[u]);
          d.skip = isNaN(f) || isNaN(p),
            l &&
            (d.options = s ||
              this.resolveDataElementOptions(h, e.active ? "active" : r),
              i && (d.options.radius = 0)),
            this.updateElement(e, h, d, r);
        }
      }
      resolveDataElementOptions(t, e) {
        const n = this.getParsed(t);
        let r = super.resolveDataElementOptions(t, e);
        r.$shared && (r = Object.assign({}, r, { $shared: !1 }));
        const i = r.radius;
        return "active" !== e && (r.radius = 0),
          r.radius += $a(n && n._custom, i),
          r;
      }
    },
    DoughnutController: tc,
    LineController: ec,
    PieController: class extends tc {
      static id = "pie";
      static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      };
    },
    PolarAreaController: nc,
    RadarController: class extends Wl {
      static id = "radar";
      static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      };
      static overrides = {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta.vScale, n = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(n[e.axis]),
        };
      }
      parseObjectData(t, e, n, r) {
        return Qs.bind(this)(t, e, n, r);
      }
      update(t) {
        const e = this._cachedMeta,
          n = e.dataset,
          r = e.data || [],
          i = e.iScale.getLabels();
        if (n.points = r, "resize" !== t) {
          const e = this.resolveDatasetElementOptions(t);
          this.options.showLine || (e.borderWidth = 0);
          const a = { _loop: !0, _fullLoop: i.length === r.length, options: e };
          this.updateElement(n, void 0, a, t);
        }
        this.updateElements(r, 0, r.length, t);
      }
      updateElements(t, e, n, r) {
        const i = this._cachedMeta.rScale, a = "reset" === r;
        for (let o = e; o < e + n; o++) {
          const e = t[o],
            n = this.resolveDataElementOptions(o, e.active ? "active" : r),
            s = i.getPointPositionForValue(o, this.getParsed(o).r),
            l = a ? i.xCenter : s.x,
            c = a ? i.yCenter : s.y,
            u = {
              x: l,
              y: c,
              angle: s.angle,
              skip: isNaN(l) || isNaN(c),
              options: n,
            };
          this.updateElement(e, o, u, r);
        }
      }
    },
    ScatterController: class extends Wl {
      static id = "scatter";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1,
      };
      static overrides = {
        interaction: { mode: "point" },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          n = this.chart.data.labels || [],
          { xScale: r, yScale: i } = e,
          a = this.getParsed(t),
          o = r.getLabelForValue(a.x),
          s = i.getLabelForValue(a.y);
        return { label: n[t] || "", value: "(" + o + ", " + s + ")" };
      }
      update(t) {
        const e = this._cachedMeta,
          { data: n = [] } = e,
          r = this.chart._animationsDisabled;
        let { start: i, count: a } = Uo(e, n, r);
        if (
          this._drawStart = i,
            this._drawCount = a,
            Wo(e) && (i = 0, a = n.length),
            this.options.showLine
        ) {
          this.datasetElementType || this.addElements();
          const { dataset: i, _dataset: a } = e;
          i._chart = this.chart,
            i._datasetIndex = this.index,
            i._decimated = !!a._decimated,
            i.points = n;
          const o = this.resolveDatasetElementOptions(t);
          o.segment = this.options.segment,
            this.updateElement(i, void 0, { animated: !r, options: o }, t);
        } else {this.datasetElementType &&
            (delete e.dataset, this.datasetElementType = !1);}
        this.updateElements(n, i, a, t);
      }
      addElements() {
        const { showLine: t } = this.options;
        !this.datasetElementType && t &&
        (this.datasetElementType = this.chart.registry.getElement("line")),
          super.addElements();
      }
      updateElements(t, e, n, r) {
        const i = "reset" === r,
          { iScale: a, vScale: o, _stacked: s, _dataset: l } = this._cachedMeta,
          c = this.resolveDataElementOptions(e, r),
          u = this.getSharedOptions(c),
          h = this.includeOptions(r, u),
          d = a.axis,
          f = o.axis,
          { spanGaps: p, segment: g } = this.options,
          m = wo(p) ? p : Number.POSITIVE_INFINITY,
          b = this.chart._animationsDisabled || i || "none" === r;
        let y = e > 0 && this.getParsed(e - 1);
        for (let v = e; v < e + n; ++v) {
          const e = t[v],
            n = this.getParsed(v),
            c = b ? e : {},
            p = Ba(n[f]),
            x = c[d] = a.getPixelForValue(n[d], v),
            w = c[f] = i || p
              ? o.getBasePixel()
              : o.getPixelForValue(s ? this.applyStack(o, n, s) : n[f], v);
          c.skip = isNaN(x) || isNaN(w) || p,
            c.stop = v > 0 && Math.abs(n[d] - y[d]) > m,
            g && (c.parsed = n, c.raw = l.data[v]),
            h &&
            (c.options = u ||
              this.resolveDataElementOptions(v, e.active ? "active" : r)),
            b || this.updateElement(e, v, c, r),
            y = n;
        }
        this.updateSharedOptions(u, r, c);
      }
      getMaxOverflow() {
        const t = this._cachedMeta, e = t.data || [];
        if (!this.options.showLine) {
          let t = 0;
          for (let n = e.length - 1; n >= 0; --n) {
            t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2);
          }
          return t > 0 && t;
        }
        const n = t.dataset, r = n.options && n.options.borderWidth || 0;
        if (!e.length) return r;
        const i = e[0].size(this.resolveDataElementOptions(0)),
          a = e[e.length - 1].size(
            this.resolveDataElementOptions(e.length - 1),
          );
        return Math.max(r, i, a) / 2;
      }
    },
  });
  function ic() {
    throw new Error(
      "This method is not implemented: Check that a complete date adapter is provided.",
    );
  }
  class ac {
    static override(t) {
      Object.assign(ac.prototype, t);
    }
    options;
    constructor(t) {
      this.options = t || {};
    }
    init() {}
    formats() {
      return ic();
    }
    parse() {
      return ic();
    }
    format() {
      return ic();
    }
    add() {
      return ic();
    }
    diff() {
      return ic();
    }
    startOf() {
      return ic();
    }
    endOf() {
      return ic();
    }
  }
  var oc = ac;
  function sc(t, e, n, r) {
    const { controller: i, data: a, _sorted: o } = t, s = i._cachedMeta.iScale;
    if (s && e === s.axis && "r" !== e && o && a.length) {
      const t = s._reversePixels ? Fo : Ao;
      if (!r) return t(a, e, n);
      if (i._sharedOptions) {
        const r = a[0], i = "function" === typeof r.getRange && r.getRange(e);
        if (i) {
          const r = t(a, e, n - i), o = t(a, e, n + i);
          return { lo: r.lo, hi: o.hi };
        }
      }
    }
    return { lo: 0, hi: a.length - 1 };
  }
  function lc(t, e, n, r, i) {
    const a = t.getSortedVisibleDatasetMetas(), o = n[e];
    for (let s = 0, l = a.length; s < l; ++s) {
      const { index: t, data: n } = a[s], { lo: l, hi: c } = sc(a[s], e, o, i);
      for (let e = l; e <= c; ++e) {
        const i = n[e];
        i.skip || r(i, t, e);
      }
    }
  }
  function cc(t, e, n, r, i) {
    const a = [];
    if (!i && !t.isPointInArea(e)) return a;
    return lc(t, n, e, function (n, o, s) {
      (i || ms(n, t.chartArea, 0)) && n.inRange(e.x, e.y, r) &&
        a.push({ element: n, datasetIndex: o, index: s });
    }, !0),
      a;
  }
  function uc(t, e, n, r, i, a) {
    let o = [];
    const s = function (t) {
      const e = -1 !== t.indexOf("x"), n = -1 !== t.indexOf("y");
      return function (t, r) {
        const i = e ? Math.abs(t.x - r.x) : 0, a = n ? Math.abs(t.y - r.y) : 0;
        return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
      };
    }(n);
    let l = Number.POSITIVE_INFINITY;
    return lc(t, n, e, function (n, c, u) {
      const h = n.inRange(e.x, e.y, i);
      if (r && !h) return;
      const d = n.getCenterPoint(i);
      if (!(!!a || t.isPointInArea(d)) && !h) return;
      const f = s(e, d);
      f < l
        ? (o = [{ element: n, datasetIndex: c, index: u }], l = f)
        : f === l && o.push({ element: n, datasetIndex: c, index: u });
    }),
      o;
  }
  function hc(t, e, n, r, i, a) {
    return a || t.isPointInArea(e)
      ? "r" !== n || r ? uc(t, e, n, r, i, a) : function (t, e, n, r) {
        let i = [];
        return lc(t, n, e, function (t, n, a) {
          const { startAngle: o, endAngle: s } = t.getProps([
              "startAngle",
              "endAngle",
            ], r),
            { angle: l } = Eo(t, { x: e.x, y: e.y });
          Ro(l, o, s) && i.push({ element: t, datasetIndex: n, index: a });
        }),
          i;
      }(t, e, n, i)
      : [];
  }
  function dc(t, e, n, r, i) {
    const a = [], o = "x" === n ? "inXRange" : "inYRange";
    let s = !1;
    return lc(t, n, e, (t, r, l) => {
      t[o] && t[o](e[n], i) &&
        (a.push({ element: t, datasetIndex: r, index: l }),
          s = s || t.inRange(e.x, e.y, i));
    }),
      r && !s ? [] : a;
  }
  var fc = {
    evaluateInteractionItems: lc,
    modes: {
      index(t, e, n, r) {
        const i = ll(e, t),
          a = n.axis || "x",
          o = n.includeInvisible || !1,
          s = n.intersect ? cc(t, i, a, r, o) : hc(t, i, a, !1, r, o),
          l = [];
        return s.length
          ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
            const e = s[0].index, n = t.data[e];
            n && !n.skip &&
              l.push({ element: n, datasetIndex: t.index, index: e });
          }),
            l)
          : [];
      },
      dataset(t, e, n, r) {
        const i = ll(e, t), a = n.axis || "xy", o = n.includeInvisible || !1;
        let s = n.intersect ? cc(t, i, a, r, o) : hc(t, i, a, !1, r, o);
        if (s.length > 0) {
          const e = s[0].datasetIndex, n = t.getDatasetMeta(e).data;
          s = [];
          for (let t = 0; t < n.length; ++t) {
            s.push({ element: n[t], datasetIndex: e, index: t });
          }
        }
        return s;
      },
      point: (t, e, n, r) =>
        cc(t, ll(e, t), n.axis || "xy", r, n.includeInvisible || !1),
      nearest(t, e, n, r) {
        const i = ll(e, t), a = n.axis || "xy", o = n.includeInvisible || !1;
        return hc(t, i, a, n.intersect, r, o);
      },
      x: (t, e, n, r) => dc(t, ll(e, t), "x", n.intersect, r),
      y: (t, e, n, r) => dc(t, ll(e, t), "y", n.intersect, r),
    },
  };
  const pc = ["left", "top", "right", "bottom"];
  function gc(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function mc(t, e) {
    return t.filter((t) => -1 === pc.indexOf(t.pos) && t.box.axis === e);
  }
  function bc(t, e) {
    return t.sort((t, n) => {
      const r = e ? n : t, i = e ? t : n;
      return r.weight === i.weight ? r.index - i.index : r.weight - i.weight;
    });
  }
  function yc(t, e) {
    const n = function (t) {
        const e = {};
        for (const n of t) {
          const { stack: t, pos: r, stackWeight: i } = n;
          if (!t || !pc.includes(r)) continue;
          const a = e[t] ||
            (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
          a.count++, a.weight += i;
        }
        return e;
      }(t),
      { vBoxMaxWidth: r, hBoxMaxHeight: i } = e;
    let a, o, s;
    for (a = 0, o = t.length; a < o; ++a) {
      s = t[a];
      const { fullSize: o } = s.box,
        l = n[s.stack],
        c = l && s.stackWeight / l.weight;
      s.horizontal
        ? (s.width = c ? c * r : o && e.availableWidth, s.height = i)
        : (s.width = r, s.height = c ? c * i : o && e.availableHeight);
    }
    return n;
  }
  function vc(t, e, n, r) {
    return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
  }
  function xc(t, e) {
    t.top = Math.max(t.top, e.top),
      t.left = Math.max(t.left, e.left),
      t.bottom = Math.max(t.bottom, e.bottom),
      t.right = Math.max(t.right, e.right);
  }
  function wc(t, e, n, r) {
    const { pos: i, box: a } = n, o = t.maxPadding;
    if (!Ha(i)) {
      n.size && (t[i] -= n.size);
      const e = r[n.stack] || { size: 0, count: 1 };
      e.size = Math.max(e.size, n.horizontal ? a.height : a.width),
        n.size = e.size / e.count,
        t[i] += n.size;
    }
    a.getPadding && xc(o, a.getPadding());
    const s = Math.max(0, e.outerWidth - vc(o, t, "left", "right")),
      l = Math.max(0, e.outerHeight - vc(o, t, "top", "bottom")),
      c = s !== t.w,
      u = l !== t.h;
    return t.w = s,
      t.h = l,
      n.horizontal ? { same: c, other: u } : { same: u, other: c };
  }
  function _c(t, e) {
    const n = e.maxPadding;
    function r(t) {
      const r = { left: 0, top: 0, right: 0, bottom: 0 };
      return t.forEach((t) => {
        r[t] = Math.max(e[t], n[t]);
      }),
        r;
    }
    return r(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function kc(t, e, n, r) {
    const i = [];
    let a, o, s, l, c, u;
    for (a = 0, o = t.length, c = 0; a < o; ++a) {
      s = t[a],
        l = s.box,
        l.update(s.width || e.w, s.height || e.h, _c(s.horizontal, e));
      const { same: o, other: h } = wc(e, n, s, r);
      c |= o && i.length, u = u || h, l.fullSize || i.push(s);
    }
    return c && kc(i, e, n, r) || u;
  }
  function Sc(t, e, n, r, i) {
    t.top = n,
      t.left = e,
      t.right = e + r,
      t.bottom = n + i,
      t.width = r,
      t.height = i;
  }
  function Mc(t, e, n, r) {
    const i = n.padding;
    let { x: a, y: o } = e;
    for (const s of t) {
      const t = s.box,
        l = r[s.stack] || { count: 1, placed: 0, weight: 1 },
        c = s.stackWeight / l.weight || 1;
      if (s.horizontal) {
        const r = e.w * c, a = l.size || t.height;
        ao(l.start) && (o = l.start),
          t.fullSize
            ? Sc(t, i.left, o, n.outerWidth - i.right - i.left, a)
            : Sc(t, e.left + l.placed, o, r, a),
          l.start = o,
          l.placed += r,
          o = t.bottom;
      } else {
        const r = e.h * c, o = l.size || t.width;
        ao(l.start) && (a = l.start),
          t.fullSize
            ? Sc(t, a, i.top, o, n.outerHeight - i.bottom - i.top)
            : Sc(t, a, e.top + l.placed, o, r),
          l.start = a,
          l.placed += r,
          a = t.right;
      }
    }
    e.x = a, e.y = o;
  }
  var Ec = {
    addBox(t, e) {
      t.boxes || (t.boxes = []),
        e.fullSize = e.fullSize || !1,
        e.position = e.position || "top",
        e.weight = e.weight || 0,
        e._layers = e._layers || function () {
          return [{
            z: 0,
            draw(t) {
              e.draw(t);
            },
          }];
        },
        t.boxes.push(e);
    },
    removeBox(t, e) {
      const n = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== n && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
      e.fullSize = n.fullSize, e.position = n.position, e.weight = n.weight;
    },
    update(t, e, n, r) {
      if (!t) return;
      const i = Os(t.options.layout.padding),
        a = Math.max(e - i.width, 0),
        o = Math.max(n - i.height, 0),
        s = function (t) {
          const e = function (t) {
              const e = [];
              let n, r, i, a, o, s;
              for (n = 0, r = (t || []).length; n < r; ++n) {
                i = t[n],
                  ({ position: a, options: { stack: o, stackWeight: s = 1 } } =
                    i),
                  e.push({
                    index: n,
                    box: i,
                    pos: a,
                    horizontal: i.isHorizontal(),
                    weight: i.weight,
                    stack: o && a + o,
                    stackWeight: s,
                  });
              }
              return e;
            }(t),
            n = bc(e.filter((t) => t.box.fullSize), !0),
            r = bc(gc(e, "left"), !0),
            i = bc(gc(e, "right")),
            a = bc(gc(e, "top"), !0),
            o = bc(gc(e, "bottom")),
            s = mc(e, "x"),
            l = mc(e, "y");
          return {
            fullSize: n,
            leftAndTop: r.concat(a),
            rightAndBottom: i.concat(l).concat(o).concat(s),
            chartArea: gc(e, "chartArea"),
            vertical: r.concat(i).concat(l),
            horizontal: a.concat(o).concat(s),
          };
        }(t.boxes),
        l = s.vertical,
        c = s.horizontal;
      Qa(t.boxes, (t) => {
        "function" === typeof t.beforeLayout && t.beforeLayout();
      });
      const u = l.reduce(
          (t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1,
          0,
        ) || 1,
        h = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: i,
          availableWidth: a,
          availableHeight: o,
          vBoxMaxWidth: a / 2 / u,
          hBoxMaxHeight: o / 2,
        }),
        d = Object.assign({}, i);
      xc(d, Os(r));
      const f = Object.assign({
          maxPadding: d,
          w: a,
          h: o,
          x: i.left,
          y: i.top,
        }, i),
        p = yc(l.concat(c), h);
      kc(s.fullSize, f, h, p),
        kc(l, f, h, p),
        kc(c, f, h, p) && kc(l, f, h, p),
        function (t) {
          const e = t.maxPadding;
          function n(n) {
            const r = Math.max(e[n] - t[n], 0);
            return t[n] += r, r;
          }
          t.y += n("top"), t.x += n("left"), n("right"), n("bottom");
        }(f),
        Mc(s.leftAndTop, f, h, p),
        f.x += f.w,
        f.y += f.h,
        Mc(s.rightAndBottom, f, h, p),
        t.chartArea = {
          left: f.left,
          top: f.top,
          right: f.left + f.w,
          bottom: f.top + f.h,
          height: f.h,
          width: f.w,
        },
        Qa(s.chartArea, (e) => {
          const n = e.box;
          Object.assign(n, t.chartArea),
            n.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class Cc {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, n) {}
    removeEventListener(t, e, n) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, n, r) {
      return e = Math.max(0, e || t.width),
        n = n || t.height,
        { width: e, height: Math.max(0, r ? Math.floor(e / r) : n) };
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class Pc extends Cc {
    acquireContext(t) {
      return t && t.getContext && t.getContext("2d") || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Tc = "$chartjs",
    Rc = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout",
    },
    Oc = (t) => null === t || "" === t;
  const Dc = !!dl && { passive: !0 };
  function Lc(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, Dc);
  }
  function Ac(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
  }
  function Fc(t, e, n) {
    const r = t.canvas,
      i = new MutationObserver((t) => {
        let e = !1;
        for (const n of t) {
          e = e || Ac(n.addedNodes, r), e = e && !Ac(n.removedNodes, r);
        }
        e && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  function jc(t, e, n) {
    const r = t.canvas,
      i = new MutationObserver((t) => {
        let e = !1;
        for (const n of t) {
          e = e || Ac(n.removedNodes, r), e = e && !Ac(n.addedNodes, r);
        }
        e && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  const zc = new Map();
  let Nc = 0;
  function Ic() {
    const t = window.devicePixelRatio;
    t !== Nc && (Nc = t,
      zc.forEach((e, n) => {
        n.currentDevicePixelRatio !== t && e();
      }));
  }
  function Bc(t, e, n) {
    const r = t.canvas, i = r && rl(r);
    if (!i) return;
    const a = Bo((t, e) => {
        const r = i.clientWidth;
        n(t, e), r < i.clientWidth && n();
      }, window),
      o = new ResizeObserver((t) => {
        const e = t[0], n = e.contentRect.width, r = e.contentRect.height;
        0 === n && 0 === r || a(n, r);
      });
    return o.observe(i),
      function (t, e) {
        zc.size || window.addEventListener("resize", Ic), zc.set(t, e);
      }(t, a),
      o;
  }
  function Vc(t, e, n) {
    n && n.disconnect(),
      "resize" === e && function (t) {
        zc.delete(t), zc.size || window.removeEventListener("resize", Ic);
      }(t);
  }
  function Hc(t, e, n) {
    const r = t.canvas,
      i = Bo((e) => {
        null !== t.ctx && n(function (t, e) {
          const n = Rc[t.type] || t.type, { x: r, y: i } = ll(t, e);
          return {
            type: n,
            chart: e,
            native: t,
            x: void 0 !== r ? r : null,
            y: void 0 !== i ? i : null,
          };
        }(e, t));
      }, t);
    return function (t, e, n) {
      t && t.addEventListener(e, n, Dc);
    }(r, e, i),
      i;
  }
  class Uc extends Cc {
    acquireContext(t, e) {
      const n = t && t.getContext && t.getContext("2d");
      return n && n.canvas === t
        ? (function (t, e) {
          const n = t.style,
            r = t.getAttribute("height"),
            i = t.getAttribute("width");
          if (
            t[Tc] = {
              initial: {
                height: r,
                width: i,
                style: { display: n.display, height: n.height, width: n.width },
              },
            },
              n.display = n.display || "block",
              n.boxSizing = n.boxSizing || "border-box",
              Oc(i)
          ) {
            const e = fl(t, "width");
            void 0 !== e && (t.width = e);
          }
          if (Oc(r)) {
            if ("" === t.style.height) t.height = t.width / (e || 2);
            else {
              const e = fl(t, "height");
              void 0 !== e && (t.height = e);
            }
          }
        }(t, e),
          n)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Tc]) return !1;
      const n = e[Tc].initial;
      ["height", "width"].forEach((t) => {
        const r = n[t];
        Ba(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
      });
      const r = n.style || {};
      return Object.keys(r).forEach((t) => {
        e.style[t] = r[t];
      }),
        e.width = e.width,
        delete e[Tc],
        !0;
    }
    addEventListener(t, e, n) {
      this.removeEventListener(t, e);
      const r = t.$proxies || (t.$proxies = {}),
        i = { attach: Fc, detach: jc, resize: Bc }[e] || Hc;
      r[e] = i(t, e, n);
    }
    removeEventListener(t, e) {
      const n = t.$proxies || (t.$proxies = {}), r = n[e];
      if (!r) return;
      ({ attach: Vc, detach: Vc, resize: Vc }[e] || Lc)(t, e, r), n[e] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, n, r) {
      return ul(t, e, n, r);
    }
    isAttached(t) {
      const e = t && rl(t);
      return !(!e || !e.isConnected);
    }
  }
  class Wc {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = !1;
    options;
    $animations;
    tooltipPosition(t) {
      const { x: e, y: n } = this.getProps(["x", "y"], t);
      return { x: e, y: n };
    }
    hasValue() {
      return wo(this.x) && wo(this.y);
    }
    getProps(t, e) {
      const n = this.$animations;
      if (!e || !n) return this;
      const r = {};
      return t.forEach((t) => {
        r[t] = n[t] && n[t].active() ? n[t]._to : this[t];
      }),
        r;
    }
  }
  function $c(t, e) {
    const n = t.options.ticks,
      r = function (t) {
        const e = t.options.offset,
          n = t._tickSize(),
          r = t._length / n + (e ? 0 : 1),
          i = t._maxLength / n;
        return Math.floor(Math.min(r, i));
      }(t),
      i = Math.min(n.maxTicksLimit || r, r),
      a = n.major.enabled
        ? function (t) {
          const e = [];
          let n, r;
          for (n = 0, r = t.length; n < r; n++) t[n].major && e.push(n);
          return e;
        }(e)
        : [],
      o = a.length,
      s = a[0],
      l = a[o - 1],
      c = [];
    if (o > i) {
      return function (t, e, n, r) {
        let i, a = 0, o = n[0];
        for (r = Math.ceil(r), i = 0; i < t.length; i++) {
          i === o && (e.push(t[i]), a++, o = n[a * r]);
        }
      }(e, c, a, o / i),
        c;
    }
    const u = function (t, e, n) {
      const r = function (t) {
          const e = t.length;
          let n, r;
          if (e < 2) return !1;
          for (r = t[0], n = 1; n < e; ++n) {
            if (t[n] - t[n - 1] !== r) return !1;
          }
          return r;
        }(t),
        i = e.length / n;
      if (!r) return Math.max(i, 1);
      const a = function (t) {
        const e = [], n = Math.sqrt(t);
        let r;
        for (r = 1; r < n; r++) t % r === 0 && (e.push(r), e.push(t / r));
        return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
      }(r);
      for (let o = 0, s = a.length - 1; o < s; o++) {
        const t = a[o];
        if (t > i) return t;
      }
      return Math.max(i, 1);
    }(a, e, i);
    if (o > 0) {
      let t, n;
      const r = o > 1 ? Math.round((l - s) / (o - 1)) : null;
      for (qc(e, c, u, Ba(r) ? 0 : s - r, s), t = 0, n = o - 1; t < n; t++) {
        qc(e, c, u, a[t], a[t + 1]);
      }
      return qc(e, c, u, l, Ba(r) ? e.length : l + r), c;
    }
    return qc(e, c, u), c;
  }
  function qc(t, e, n, r, i) {
    const a = $a(r, 0), o = Math.min($a(i, t.length), t.length);
    let s, l, c, u = 0;
    for (
      n = Math.ceil(n), i && (s = i - r, n = s / Math.floor(s / n)), c = a;
      c < 0;
    ) u++, c = Math.round(a + u * n);
    for (l = Math.max(a, 0); l < o; l++) {
      l === c && (e.push(t[l]), u++, c = Math.round(a + u * n));
    }
  }
  const Yc = (t, e, n) => "top" === e || "left" === e ? t[e] + n : t[e] - n,
    Qc = (t, e) => Math.min(e || t, t);
  function Kc(t, e) {
    const n = [], r = t.length / e, i = t.length;
    let a = 0;
    for (; a < i; a += r) n.push(t[Math.floor(a)]);
    return n;
  }
  function Xc(t, e, n) {
    const r = t.ticks.length,
      i = Math.min(e, r - 1),
      a = t._startPixel,
      o = t._endPixel,
      s = 1e-6;
    let l, c = t.getPixelForTick(i);
    if (
      !(n &&
        (l = 1 === r
          ? Math.max(c - a, o - c)
          : 0 === e
          ? (t.getPixelForTick(1) - c) / 2
          : (c - t.getPixelForTick(i - 1)) / 2,
          c += i < e ? l : -l,
          c < a - s || c > o + s))
    ) return c;
  }
  function Jc(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Gc(t, e) {
    if (!t.display) return 0;
    const n = Ds(t.font, e), r = Os(t.padding);
    return (Va(t.text) ? t.text.length : 1) * n.lineHeight + r.height;
  }
  function Zc(t, e, n) {
    let r = Vo(t);
    return (n && "right" !== e || !n && "right" === e) &&
      (r = ((t) => "left" === t ? "right" : "right" === t ? "left" : t)(r)),
      r;
  }
  class tu extends Wc {
    constructor(t) {
      super(),
        this.id = t.id,
        this.type = t.type,
        this.options = void 0,
        this.ctx = t.ctx,
        this.chart = t.chart,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.width = void 0,
        this.height = void 0,
        this._margins = { left: 0, right: 0, top: 0, bottom: 0 },
        this.maxWidth = void 0,
        this.maxHeight = void 0,
        this.paddingTop = void 0,
        this.paddingBottom = void 0,
        this.paddingLeft = void 0,
        this.paddingRight = void 0,
        this.axis = void 0,
        this.labelRotation = void 0,
        this.min = void 0,
        this.max = void 0,
        this._range = void 0,
        this.ticks = [],
        this._gridLineItems = null,
        this._labelItems = null,
        this._labelSizes = null,
        this._length = 0,
        this._maxLength = 0,
        this._longestTextCache = {},
        this._startPixel = void 0,
        this._endPixel = void 0,
        this._reversePixels = !1,
        this._userMax = void 0,
        this._userMin = void 0,
        this._suggestedMax = void 0,
        this._suggestedMin = void 0,
        this._ticksLength = 0,
        this._borderValue = 0,
        this._cache = {},
        this._dataLimitsCached = !1,
        this.$context = void 0;
    }
    init(t) {
      this.options = t.setContext(this.getContext()),
        this.axis = t.axis,
        this._userMin = this.parse(t.min),
        this._userMax = this.parse(t.max),
        this._suggestedMin = this.parse(t.suggestedMin),
        this._suggestedMax = this.parse(t.suggestedMax);
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: r } =
        this;
      return t = Wa(t, Number.POSITIVE_INFINITY),
        e = Wa(e, Number.NEGATIVE_INFINITY),
        n = Wa(n, Number.POSITIVE_INFINITY),
        r = Wa(r, Number.NEGATIVE_INFINITY),
        { min: Wa(t, n), max: Wa(e, r), minDefined: Ua(t), maxDefined: Ua(e) };
    }
    getMinMax(t) {
      let e,
        { min: n, max: r, minDefined: i, maxDefined: a } = this.getUserBounds();
      if (i && a) return { min: n, max: r };
      const o = this.getMatchingVisibleMetas();
      for (let s = 0, l = o.length; s < l; ++s) {
        e = o[s].controller.getMinMax(this, t),
          i || (n = Math.min(n, e.min)),
          a || (r = Math.max(r, e.max));
      }
      return n = a && n > r ? r : n,
        r = i && n > r ? n : r,
        { min: Wa(n, Wa(r, n)), max: Wa(r, Wa(n, r)) };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    }
    getLabelItems() {
      let t = arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : this.chart.chartArea;
      return this._labelItems ||
        (this._labelItems = this._computeLabelItems(t));
    }
    beforeLayout() {
      this._cache = {}, this._dataLimitsCached = !1;
    }
    beforeUpdate() {
      Ya(this.options.beforeUpdate, [this]);
    }
    update(t, e, n) {
      const { beginAtZero: r, grace: i, ticks: a } = this.options,
        o = a.sampleSize;
      this.beforeUpdate(),
        this.maxWidth = t,
        this.maxHeight = e,
        this._margins = n = Object.assign({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }, n),
        this.ticks = null,
        this._labelSizes = null,
        this._gridLineItems = null,
        this._labelItems = null,
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        this._maxLength = this.isHorizontal()
          ? this.width + n.left + n.right
          : this.height + n.top + n.bottom,
        this._dataLimitsCached ||
        (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          this._range = function (t, e, n) {
            const { min: r, max: i } = t,
              a = qa(e, (i - r) / 2),
              o = (t, e) => n && 0 === t ? 0 : t + e;
            return { min: o(r, -Math.abs(a)), max: o(i, a) };
          }(this, i, r),
          this._dataLimitsCached = !0),
        this.beforeBuildTicks(),
        this.ticks = this.buildTicks() || [],
        this.afterBuildTicks();
      const s = o < this.ticks.length;
      this._convertTicksToLabels(s ? Kc(this.ticks, o) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        a.display && (a.autoSkip || "auto" === a.source) &&
        (this.ticks = $c(this, this.ticks),
          this._labelSizes = null,
          this.afterAutoSkip()),
        s && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let t, e, n = this.options.reverse;
      this.isHorizontal()
        ? (t = this.left, e = this.right)
        : (t = this.top, e = this.bottom, n = !n),
        this._startPixel = t,
        this._endPixel = e,
        this._reversePixels = n,
        this._length = e - t,
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      Ya(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      Ya(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? (this.width = this.maxWidth, this.left = 0, this.right = this.width)
        : (this.height = this.maxHeight,
          this.top = 0,
          this.bottom = this.height),
        this.paddingLeft = 0,
        this.paddingTop = 0,
        this.paddingRight = 0,
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
      Ya(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()),
        Ya(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      Ya(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let n, r, i;
      for (n = 0, r = t.length; n < r; n++) {
        i = t[n], i.label = Ya(e.callback, [i.value, n, t], this);
      }
    }
    afterTickToLabelConversion() {
      Ya(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      Ya(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        n = Qc(this.ticks.length, t.ticks.maxTicksLimit),
        r = e.minRotation || 0,
        i = e.maxRotation;
      let a, o, s, l = r;
      if (
        !this._isVisible() || !e.display || r >= i || n <= 1 ||
        !this.isHorizontal()
      ) return void (this.labelRotation = r);
      const c = this._getLabelSizes(),
        u = c.widest.width,
        h = c.highest.height,
        d = Oo(this.chart.width - u, 0, this.maxWidth);
      a = t.offset ? this.maxWidth / n : d / (n - 1),
        u + 6 > a &&
        (a = d / (n - (t.offset ? .5 : 1)),
          o = this.maxHeight - Jc(t.grid) - e.padding -
            Gc(t.title, this.chart.options.font),
          s = Math.sqrt(u * u + h * h),
          l = So(
            Math.min(
              Math.asin(Oo((c.highest.height + 6) / a, -1, 1)),
              Math.asin(Oo(o / s, -1, 1)) - Math.asin(Oo(h / s, -1, 1)),
            ),
          ),
          l = Math.max(r, Math.min(i, l))),
        this.labelRotation = l;
    }
    afterCalculateLabelRotation() {
      Ya(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      Ya(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        { chart: e, options: { ticks: n, title: r, grid: i } } = this,
        a = this._isVisible(),
        o = this.isHorizontal();
      if (a) {
        const a = Gc(r, e.options.font);
        if (
          o
            ? (t.width = this.maxWidth, t.height = Jc(i) + a)
            : (t.height = this.maxHeight, t.width = Jc(i) + a),
            n.display && this.ticks.length
        ) {
          const { first: e, last: r, widest: i, highest: a } = this
              ._getLabelSizes(),
            s = 2 * n.padding,
            l = ko(this.labelRotation),
            c = Math.cos(l),
            u = Math.sin(l);
          if (o) {
            const e = n.mirror ? 0 : u * i.width + c * a.height;
            t.height = Math.min(this.maxHeight, t.height + e + s);
          } else {
            const e = n.mirror ? 0 : c * i.width + u * a.height;
            t.width = Math.min(this.maxWidth, t.width + e + s);
          }
          this._calculatePadding(e, r, u, c);
        }
      }
      this._handleMargins(),
        o
          ? (this.width = this._length = e.width - this._margins.left -
            this._margins.right,
            this.height = t.height)
          : (this.width = t.width,
            this.height = this._length = e.height - this._margins.top -
              this._margins.bottom);
    }
    _calculatePadding(t, e, n, r) {
      const { ticks: { align: i, padding: a }, position: o } = this.options,
        s = 0 !== this.labelRotation,
        l = "top" !== o && "x" === this.axis;
      if (this.isHorizontal()) {
        const o = this.getPixelForTick(0) - this.left,
          c = this.right - this.getPixelForTick(this.ticks.length - 1);
        let u = 0, h = 0;
        s
          ? l
            ? (u = r * t.width, h = n * e.height)
            : (u = n * t.height, h = r * e.width)
          : "start" === i
          ? h = e.width
          : "end" === i
          ? u = t.width
          : "inner" !== i && (u = t.width / 2, h = e.width / 2),
          this.paddingLeft = Math.max(
            (u - o + a) * this.width / (this.width - o),
            0,
          ),
          this.paddingRight = Math.max(
            (h - c + a) * this.width / (this.width - c),
            0,
          );
      } else {
        let n = e.height / 2, r = t.height / 2;
        "start" === i
          ? (n = 0, r = t.height)
          : "end" === i && (n = e.height, r = 0),
          this.paddingTop = n + a,
          this.paddingBottom = r + a;
      }
    }
    _handleMargins() {
      this._margins &&
        (this._margins.left = Math.max(this.paddingLeft, this._margins.left),
          this._margins.top = Math.max(this.paddingTop, this._margins.top),
          this._margins.right = Math.max(
            this.paddingRight,
            this._margins.right,
          ),
          this._margins.bottom = Math.max(
            this.paddingBottom,
            this._margins.bottom,
          ));
    }
    afterFit() {
      Ya(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: e } = this.options;
      return "top" === e || "bottom" === e || "x" === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      let e, n;
      for (
        this.beforeTickToLabelConversion(),
          this.generateTickLabels(t),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) Ba(t[e].label) && (t.splice(e, 1), n--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let n = this.ticks;
        e < n.length && (n = Kc(n, e)),
          this._labelSizes = t = this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit,
          );
      }
      return t;
    }
    _computeLabelSizes(t, e, n) {
      const { ctx: r, _longestTextCache: i } = this,
        a = [],
        o = [],
        s = Math.floor(e / Qc(e, n));
      let l, c, u, h, d, f, p, g, m, b, y, v = 0, x = 0;
      for (l = 0; l < e; l += s) {
        if (
          h = t[l].label,
            d = this._resolveTickFontOptions(l),
            r.font = f = d.string,
            p = i[f] = i[f] || { data: {}, gc: [] },
            g = d.lineHeight,
            m = b = 0,
            Ba(h) || Va(h)
        ) {
          if (Va(h)) {
            for (c = 0, u = h.length; c < u; ++c) {
              y = h[c],
                Ba(y) || Va(y) || (m = us(r, p.data, p.gc, m, y), b += g);
            }
          }
        } else m = us(r, p.data, p.gc, m, h), b = g;
        a.push(m), o.push(b), v = Math.max(m, v), x = Math.max(b, x);
      }
      !function (t, e) {
        Qa(t, (t) => {
          const n = t.gc, r = n.length / 2;
          let i;
          if (r > e) {
            for (i = 0; i < r; ++i) delete t.data[n[i]];
            n.splice(0, r);
          }
        });
      }(i, e);
      const w = a.indexOf(v),
        _ = o.indexOf(x),
        k = (t) => ({ width: a[t] || 0, height: o[t] || 0 });
      return {
        first: k(0),
        last: k(e - 1),
        widest: k(w),
        highest: k(_),
        widths: a,
        heights: o,
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return Oo(this._alignToPixels ? ds(this.chart, e, 0) : e, -32768, 32767);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: e } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return n.$context || (n.$context = function (t, e, n) {
          return As(t, { tick: n, index: e, type: "tick" });
        }(this.getContext(), t, n));
      }
      return this.$context ||
        (this.$context = As(this.chart.getContext(), {
          scale: this,
          type: "scale",
        }));
    }
    _tickSize() {
      const t = this.options.ticks,
        e = ko(this.labelRotation),
        n = Math.abs(Math.cos(e)),
        r = Math.abs(Math.sin(e)),
        i = this._getLabelSizes(),
        a = t.autoSkipPadding || 0,
        o = i ? i.widest.width + a : 0,
        s = i ? i.highest.height + a : 0;
      return this.isHorizontal()
        ? s * n > o * r ? o / n : s / r
        : s * r < o * n
        ? s / n
        : o / r;
    }
    _isVisible() {
      const t = this.options.display;
      return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        n = this.chart,
        r = this.options,
        { grid: i, position: a, border: o } = r,
        s = i.offset,
        l = this.isHorizontal(),
        c = this.ticks.length + (s ? 1 : 0),
        u = Jc(i),
        h = [],
        d = o.setContext(this.getContext()),
        f = d.display ? d.width : 0,
        p = f / 2,
        g = function (t) {
          return ds(n, t, f);
        };
      let m, b, y, v, x, w, _, k, S, M, E, C;
      if ("top" === a) {
        m = g(this.bottom),
          w = this.bottom - u,
          k = m - p,
          M = g(t.top) + p,
          C = t.bottom;
      } else if ("bottom" === a) {
        m = g(this.top),
          M = t.top,
          C = g(t.bottom) - p,
          w = m + p,
          k = this.top + u;
      } else if ("left" === a) {
        m = g(this.right),
          x = this.right - u,
          _ = m - p,
          S = g(t.left) + p,
          E = t.right;
      } else if ("right" === a) {
        m = g(this.left),
          S = t.left,
          E = g(t.right) - p,
          x = m + p,
          _ = this.left + u;
      } else if ("x" === e) {
        if ("center" === a) m = g((t.top + t.bottom) / 2 + .5);
        else if (Ha(a)) {
          const t = Object.keys(a)[0], e = a[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        M = t.top, C = t.bottom, w = m + p, k = w + u;
      } else if ("y" === e) {
        if ("center" === a) m = g((t.left + t.right) / 2);
        else if (Ha(a)) {
          const t = Object.keys(a)[0], e = a[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        x = m - p, _ = x - u, S = t.left, E = t.right;
      }
      const P = $a(r.ticks.maxTicksLimit, c), T = Math.max(1, Math.ceil(c / P));
      for (b = 0; b < c; b += T) {
        const t = this.getContext(b),
          e = i.setContext(t),
          r = o.setContext(t),
          a = e.lineWidth,
          c = e.color,
          u = r.dash || [],
          d = r.dashOffset,
          f = e.tickWidth,
          p = e.tickColor,
          g = e.tickBorderDash || [],
          m = e.tickBorderDashOffset;
        y = Xc(this, b, s),
          void 0 !== y && (v = ds(n, y, a),
            l
              ? x =
                _ =
                S =
                E =
                  v
              : w =
                k =
                M =
                C =
                  v,
            h.push({
              tx1: x,
              ty1: w,
              tx2: _,
              ty2: k,
              x1: S,
              y1: M,
              x2: E,
              y2: C,
              width: a,
              color: c,
              borderDash: u,
              borderDashOffset: d,
              tickWidth: f,
              tickColor: p,
              tickBorderDash: g,
              tickBorderDashOffset: m,
            }));
      }
      return this._ticksLength = c, this._borderValue = m, h;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        n = this.options,
        { position: r, ticks: i } = n,
        a = this.isHorizontal(),
        o = this.ticks,
        { align: s, crossAlign: l, padding: c, mirror: u } = i,
        h = Jc(n.grid),
        d = h + c,
        f = u ? -c : d,
        p = -ko(this.labelRotation),
        g = [];
      let m, b, y, v, x, w, _, k, S, M, E, C, P = "middle";
      if ("top" === r) w = this.bottom - f, _ = this._getXAxisLabelAlignment();
      else if ("bottom" === r) {
        w = this.top + f, _ = this._getXAxisLabelAlignment();
      } else if ("left" === r) {
        const t = this._getYAxisLabelAlignment(h);
        _ = t.textAlign, x = t.x;
      } else if ("right" === r) {
        const t = this._getYAxisLabelAlignment(h);
        _ = t.textAlign, x = t.x;
      } else if ("x" === e) {
        if ("center" === r) w = (t.top + t.bottom) / 2 + d;
        else if (Ha(r)) {
          const t = Object.keys(r)[0], e = r[t];
          w = this.chart.scales[t].getPixelForValue(e) + d;
        }
        _ = this._getXAxisLabelAlignment();
      } else if ("y" === e) {
        if ("center" === r) x = (t.left + t.right) / 2 - d;
        else if (Ha(r)) {
          const t = Object.keys(r)[0], e = r[t];
          x = this.chart.scales[t].getPixelForValue(e);
        }
        _ = this._getYAxisLabelAlignment(h).textAlign;
      }
      "y" === e && ("start" === s ? P = "top" : "end" === s && (P = "bottom"));
      const T = this._getLabelSizes();
      for (m = 0, b = o.length; m < b; ++m) {
        y = o[m], v = y.label;
        const t = i.setContext(this.getContext(m));
        k = this.getPixelForTick(m) + i.labelOffset,
          S = this._resolveTickFontOptions(m),
          M = S.lineHeight,
          E = Va(v) ? v.length : 1;
        const e = E / 2,
          n = t.color,
          s = t.textStrokeColor,
          c = t.textStrokeWidth;
        let h, d = _;
        if (
          a
            ? (x = k,
              "inner" === _ &&
              (d = m === b - 1
                ? this.options.reverse ? "left" : "right"
                : 0 === m
                ? this.options.reverse ? "right" : "left"
                : "center"),
              C = "top" === r
                ? "near" === l || 0 !== p
                  ? -E * M + M / 2
                  : "center" === l
                  ? -T.highest.height / 2 - e * M + M
                  : -T.highest.height + M / 2
                : "near" === l || 0 !== p
                ? M / 2
                : "center" === l
                ? T.highest.height / 2 - e * M
                : T.highest.height - E * M,
              u && (C *= -1),
              0 === p || t.showLabelBackdrop || (x += M / 2 * Math.sin(p)))
            : (w = k, C = (1 - E) * M / 2), t.showLabelBackdrop
        ) {
          const e = Os(t.backdropPadding), n = T.heights[m], r = T.widths[m];
          let i = C - e.top, a = 0 - e.left;
          switch (P) {
            case "middle":
              i -= n / 2;
              break;
            case "bottom":
              i -= n;
          }
          switch (_) {
            case "center":
              a -= r / 2;
              break;
            case "right":
              a -= r;
              break;
            case "inner":
              m === b - 1 ? a -= r : m > 0 && (a -= r / 2);
          }
          h = {
            left: a,
            top: i,
            width: r + e.width,
            height: n + e.height,
            color: t.backdropColor,
          };
        }
        g.push({
          label: v,
          font: S,
          textOffset: C,
          options: {
            rotation: p,
            color: n,
            strokeColor: s,
            strokeWidth: c,
            textAlign: d,
            textBaseline: P,
            translation: [x, w],
            backdrop: h,
          },
        });
      }
      return g;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-ko(this.labelRotation)) return "top" === t ? "left" : "right";
      let n = "center";
      return "start" === e.align
        ? n = "left"
        : "end" === e.align
        ? n = "right"
        : "inner" === e.align && (n = "inner"),
        n;
    }
    _getYAxisLabelAlignment(t) {
      const { position: e, ticks: { crossAlign: n, mirror: r, padding: i } } =
          this.options,
        a = t + i,
        o = this._getLabelSizes().widest.width;
      let s, l;
      return "left" === e
        ? r
          ? (l = this.right + i,
            "near" === n
              ? s = "left"
              : "center" === n
              ? (s = "center", l += o / 2)
              : (s = "right", l += o))
          : (l = this.right - a,
            "near" === n
              ? s = "right"
              : "center" === n
              ? (s = "center", l -= o / 2)
              : (s = "left", l = this.left))
        : "right" === e
        ? r
          ? (l = this.left + i,
            "near" === n
              ? s = "right"
              : "center" === n
              ? (s = "center", l -= o / 2)
              : (s = "left", l -= o))
          : (l = this.left + a,
            "near" === n
              ? s = "left"
              : "center" === n
              ? (s = "center", l += o / 2)
              : (s = "right", l = this.right))
        : s = "right",
        { textAlign: s, x: l };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart, e = this.options.position;
      return "left" === e || "right" === e
        ? { top: 0, left: this.left, bottom: t.height, right: this.right }
        : "top" === e || "bottom" === e
        ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
        : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: e },
        left: n,
        top: r,
        width: i,
        height: a,
      } = this;
      e && (t.save(), t.fillStyle = e, t.fillRect(n, r, i, a), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const n = this.ticks.findIndex((e) => e.value === t);
      if (n >= 0) return e.setContext(this.getContext(n)).lineWidth;
      return 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        n = this.ctx,
        r = this._gridLineItems ||
          (this._gridLineItems = this._computeGridLineItems(t));
      let i, a;
      const o = (t, e, r) => {
        r.width && r.color &&
          (n.save(),
            n.lineWidth = r.width,
            n.strokeStyle = r.color,
            n.setLineDash(r.borderDash || []),
            n.lineDashOffset = r.borderDashOffset,
            n.beginPath(),
            n.moveTo(t.x, t.y),
            n.lineTo(e.x, e.y),
            n.stroke(),
            n.restore());
      };
      if (e.display) {
        for (i = 0, a = r.length; i < a; ++i) {
          const t = r[i];
          e.drawOnChartArea && o({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            e.drawTicks &&
            o({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, {
              color: t.tickColor,
              width: t.tickWidth,
              borderDash: t.tickBorderDash,
              borderDashOffset: t.tickBorderDashOffset,
            });
        }
      }
    }
    drawBorder() {
      const { chart: t, ctx: e, options: { border: n, grid: r } } = this,
        i = n.setContext(this.getContext()),
        a = n.display ? i.width : 0;
      if (!a) return;
      const o = r.setContext(this.getContext(0)).lineWidth,
        s = this._borderValue;
      let l, c, u, h;
      this.isHorizontal()
        ? (l = ds(t, this.left, a) - a / 2,
          c = ds(t, this.right, o) + o / 2,
          u = h = s)
        : (u = ds(t, this.top, a) - a / 2,
          h = ds(t, this.bottom, o) + o / 2,
          l = c = s),
        e.save(),
        e.lineWidth = i.width,
        e.strokeStyle = i.color,
        e.beginPath(),
        e.moveTo(l, u),
        e.lineTo(c, h),
        e.stroke(),
        e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx, n = this._computeLabelArea();
      n && bs(e, n);
      const r = this.getLabelItems(t);
      for (const i of r) {
        const t = i.options, n = i.font;
        ks(e, i.label, 0, i.textOffset, n, t);
      }
      n && ys(e);
    }
    drawTitle() {
      const { ctx: t, options: { position: e, title: n, reverse: r } } = this;
      if (!n.display) return;
      const i = Ds(n.font), a = Os(n.padding), o = n.align;
      let s = i.lineHeight / 2;
      "bottom" === e || "center" === e || Ha(e)
        ? (s += a.bottom,
          Va(n.text) && (s += i.lineHeight * (n.text.length - 1)))
        : s += a.top;
      const { titleX: l, titleY: c, maxWidth: u, rotation: h } = function (
        t,
        e,
        n,
        r,
      ) {
        const { top: i, left: a, bottom: o, right: s, chart: l } = t,
          { chartArea: c, scales: u } = l;
        let h, d, f, p = 0;
        const g = o - i, m = s - a;
        if (t.isHorizontal()) {
          if (d = Ho(r, a, s), Ha(n)) {
            const t = Object.keys(n)[0], r = n[t];
            f = u[t].getPixelForValue(r) + g - e;
          } else {f = "center" === n
              ? (c.bottom + c.top) / 2 + g - e
              : Yc(t, n, e);}
          h = s - a;
        } else {
          if (Ha(n)) {
            const t = Object.keys(n)[0], r = n[t];
            d = u[t].getPixelForValue(r) - m + e;
          } else {d = "center" === n
              ? (c.left + c.right) / 2 - m + e
              : Yc(t, n, e);}
          f = Ho(r, o, i), p = "left" === n ? -po : po;
        }
        return { titleX: d, titleY: f, maxWidth: h, rotation: p };
      }(this, s, e, o);
      ks(t, n.text, 0, 0, i, {
        color: n.color,
        maxWidth: u,
        rotation: h,
        textAlign: Zc(o, e, r),
        textBaseline: "middle",
        translation: [l, c],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
          this.drawGrid(t),
          this.drawBorder(),
          this.drawTitle(),
          this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = t.ticks && t.ticks.z || 0,
        n = $a(t.grid && t.grid.z, -1),
        r = $a(t.border && t.border.z, 0);
      return this._isVisible() && this.draw === tu.prototype.draw
        ? [{
          z: n,
          draw: (t) => {
            this.drawBackground(), this.drawGrid(t), this.drawTitle();
          },
        }, {
          z: r,
          draw: () => {
            this.drawBorder();
          },
        }, {
          z: e,
          draw: (t) => {
            this.drawLabels(t);
          },
        }]
        : [{
          z: e,
          draw: (t) => {
            this.draw(t);
          },
        }];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        n = this.axis + "AxisID",
        r = [];
      let i, a;
      for (i = 0, a = e.length; i < a; ++i) {
        const a = e[i];
        a[n] !== this.id || t && a.type !== t || r.push(a);
      }
      return r;
    }
    _resolveTickFontOptions(t) {
      return Ds(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class eu {
    constructor(t, e, n) {
      this.type = t,
        this.scope = e,
        this.override = n,
        this.items = Object.create(null);
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(
        this.type.prototype,
        t.prototype,
      );
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let n;
      (function (t) {
        return "id" in t && "defaults" in t;
      })(e) && (n = this.register(e));
      const r = this.items, i = t.id, a = this.scope + "." + i;
      if (!i) throw new Error("class does not have id: " + t);
      return i in r || (r[i] = t,
        function (t, e, n) {
          const r = Za(Object.create(null), [
            n ? cs.get(n) : {},
            cs.get(e),
            t.defaults,
          ]);
          cs.set(e, r),
            t.defaultRoutes && function (t, e) {
              Object.keys(e).forEach((n) => {
                const r = n.split("."),
                  i = r.pop(),
                  a = [t].concat(r).join("."),
                  o = e[n].split("."),
                  s = o.pop(),
                  l = o.join(".");
                cs.route(a, i, l, s);
              });
            }(e, t.defaultRoutes);
          t.descriptors && cs.describe(e, t.descriptors);
        }(t, a, n),
        this.override && cs.override(t.id, t.overrides)),
        a;
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items, n = t.id, r = this.scope;
      n in e && delete e[n],
        r && n in cs[r] && (delete cs[r][n], this.override && delete is[n]);
    }
  }
  class nu {
    constructor() {
      this.controllers = new eu(Wl, "datasets", !0),
        this.elements = new eu(Wc, "elements"),
        this.plugins = new eu(Object, "plugins"),
        this.scales = new eu(tu, "scales"),
        this._typedRegistries = [this.controllers, this.scales, this.elements];
    }
    add() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("register", e);
    }
    remove() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("unregister", e);
    }
    addControllers() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("register", e, this.controllers);
    }
    addElements() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("register", e, this.elements);
    }
    addPlugins() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("register", e, this.plugins);
    }
    addScales() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("register", e, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
      return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
      return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
      return this._get(t, this.scales, "scale");
    }
    removeControllers() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("unregister", e, this.controllers);
    }
    removeElements() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("unregister", e, this.elements);
    }
    removePlugins() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("unregister", e, this.plugins);
    }
    removeScales() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }
      this._each("unregister", e, this.scales);
    }
    _each(t, e, n) {
      [...e].forEach((e) => {
        const r = n || this._getRegistryForType(e);
        n || r.isForType(e) || r === this.plugins && e.id
          ? this._exec(t, r, e)
          : Qa(e, (e) => {
            const r = n || this._getRegistryForType(e);
            this._exec(t, r, e);
          });
      });
    }
    _exec(t, e, n) {
      const r = io(t);
      Ya(n["before" + r], [], n), e[t](n), Ya(n["after" + r], [], n);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const n = this._typedRegistries[e];
        if (n.isForType(t)) return n;
      }
      return this.plugins;
    }
    _get(t, e, n) {
      const r = e.get(t);
      if (void 0 === r) {
        throw new Error('"' + t + '" is not a registered ' + n + ".");
      }
      return r;
    }
  }
  var ru = new nu();
  class iu {
    constructor() {
      this._init = [];
    }
    notify(t, e, n, r) {
      "beforeInit" === e &&
        (this._init = this._createDescriptors(t, !0),
          this._notify(this._init, t, "install"));
      const i = r ? this._descriptors(t).filter(r) : this._descriptors(t),
        a = this._notify(i, t, e, n);
      return "afterDestroy" === e &&
        (this._notify(i, t, "stop"), this._notify(this._init, t, "uninstall")),
        a;
    }
    _notify(t, e, n, r) {
      r = r || {};
      for (const i of t) {
        const t = i.plugin;
        if (!1 === Ya(t[n], [e, r, i.options], t) && r.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      Ba(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = this._cache = this._createDescriptors(t);
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const n = t && t.config,
        r = $a(n.options && n.options.plugins, {}),
        i = function (t) {
          const e = {}, n = [], r = Object.keys(ru.plugins.items);
          for (let a = 0; a < r.length; a++) n.push(ru.getPlugin(r[a]));
          const i = t.plugins || [];
          for (let a = 0; a < i.length; a++) {
            const t = i[a];
            -1 === n.indexOf(t) && (n.push(t), e[t.id] = !0);
          }
          return { plugins: n, localIds: e };
        }(n);
      return !1 !== r || e
        ? function (t, e, n, r) {
          let { plugins: i, localIds: a } = e;
          const o = [], s = t.getContext();
          for (const l of i) {
            const e = l.id, i = au(n[e], r);
            null !== i &&
              o.push({
                plugin: l,
                options: ou(t.config, { plugin: l, local: a[e] }, i, s),
              });
          }
          return o;
        }(t, i, r, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        n = this._cache,
        r = (t, e) =>
          t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      this._notify(r(e, n), t, "stop"), this._notify(r(n, e), t, "start");
    }
  }
  function au(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }
  function ou(t, e, n, r) {
    let { plugin: i, local: a } = e;
    const o = t.pluginScopeKeys(i), s = t.getOptionScopes(n, o);
    return a && i.defaults && s.push(i.defaults),
      t.createResolver(s, r, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      });
  }
  function su(t, e) {
    const n = cs.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis ||
      n.indexAxis || "x";
  }
  function lu(t) {
    if ("x" === t || "y" === t || "r" === t) return t;
  }
  function cu(t) {
    if (lu(t)) return t;
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
      r < e;
      r++
    ) n[r - 1] = arguments[r];
    for (const a of n) {
      const e = a.axis || ("top" === (i = a.position) || "bottom" === i
        ? "x"
        : "left" === i || "right" === i
        ? "y"
        : void 0) ||
        t.length > 1 && lu(t[0].toLowerCase());
      if (e) {
        return e;
      }
    }
    var i;
    throw new Error(
      `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`,
    );
  }
  function uu(t, e, n) {
    if (n[e + "AxisID"] === t) return { axis: e };
  }
  function hu(t, e) {
    const n = is[t.type] || { scales: {} },
      r = e.scales || {},
      i = su(t.type, e),
      a = Object.create(null);
    return Object.keys(r).forEach((e) => {
      const o = r[e];
      if (!Ha(o)) {
        return console.error(`Invalid scale configuration for scale: ${e}`);
      }
      if (o._proxy) {
        return console.warn(
          `Ignoring resolver passed as options for scale: ${e}`,
        );
      }
      const s = cu(
          e,
          o,
          function (t, e) {
            if (e.data && e.data.datasets) {
              const n = e.data.datasets.filter(
                (e) => e.xAxisID === t || e.yAxisID === t,
              );
              if (n.length) return uu(t, "x", n[0]) || uu(t, "y", n[0]);
            }
            return {};
          }(e, t),
          cs.scales[o.type],
        ),
        l = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(s, i),
        c = n.scales || {};
      a[e] = to(Object.create(null), [{ axis: s }, o, c[s], c[l]]);
    }),
      t.data.datasets.forEach((n) => {
        const i = n.type || t.type,
          o = n.indexAxis || su(i, e),
          s = (is[i] || {}).scales || {};
        Object.keys(s).forEach((t) => {
          const e = function (t, e) {
              let n = t;
              return "_index_" === t
                ? n = e
                : "_value_" === t && (n = "x" === e ? "y" : "x"),
                n;
            }(t, o),
            i = n[e + "AxisID"] || e;
          a[i] = a[i] || Object.create(null),
            to(a[i], [{ axis: e }, r[i], s[t]]);
        });
      }),
      Object.keys(a).forEach((t) => {
        const e = a[t];
        to(e, [cs.scales[e.type], cs.scale]);
      }),
      a;
  }
  function du(t) {
    const e = t.options || (t.options = {});
    e.plugins = $a(e.plugins, {}), e.scales = hu(t, e);
  }
  function fu(t) {
    return (t = t || {}).datasets = t.datasets || [],
      t.labels = t.labels || [],
      t;
  }
  const pu = new Map(), gu = new Set();
  function mu(t, e) {
    let n = pu.get(t);
    return n || (n = e(), pu.set(t, n), gu.add(n)), n;
  }
  const bu = (t, e, n) => {
    const r = ro(e, n);
    void 0 !== r && t.add(r);
  };
  class yu {
    constructor(t) {
      this._config = function (t) {
        return (t = t || {}).data = fu(t.data), du(t), t;
      }(t),
        this._scopeCache = new Map(),
        this._resolverCache = new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = fu(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), du(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return mu(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, e) {
      return mu(
        `${t}.transition.${e}`,
        () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [
          `datasets.${t}`,
          "",
        ]],
      );
    }
    datasetElementScopeKeys(t, e) {
      return mu(
        `${t}-${e}`,
        () => [[
          `datasets.${t}.elements.${e}`,
          `datasets.${t}`,
          `elements.${e}`,
          "",
        ]],
      );
    }
    pluginScopeKeys(t) {
      const e = t.id;
      return mu(
        `${this.type}-plugin-${e}`,
        () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]],
      );
    }
    _cachedScopes(t, e) {
      const n = this._scopeCache;
      let r = n.get(t);
      return r && !e || (r = new Map(), n.set(t, r)), r;
    }
    getOptionScopes(t, e, n) {
      const { options: r, type: i } = this,
        a = this._cachedScopes(t, n),
        o = a.get(e);
      if (o) return o;
      const s = new Set();
      e.forEach((e) => {
        t && (s.add(t), e.forEach((e) => bu(s, t, e))),
          e.forEach((t) => bu(s, r, t)),
          e.forEach((t) => bu(s, is[i] || {}, t)),
          e.forEach((t) => bu(s, cs, t)),
          e.forEach((t) => bu(s, as, t));
      });
      const l = Array.from(s);
      return 0 === l.length && l.push(Object.create(null)),
        gu.has(e) && a.set(e, l),
        l;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, is[e] || {}, cs.datasets[e] || {}, { type: e }, cs, as];
    }
    resolveNamedOptions(t, e, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : [""];
      const i = { $shared: !0 },
        { resolver: a, subPrefixes: o } = vu(this._resolverCache, t, r);
      let s = a;
      if (
        function (t, e) {
          const { isScriptable: n, isIndexable: r } = zs(t);
          for (const i of e) {
            const e = n(i), a = r(i), o = (a || e) && t[i];
            if (e && (oo(o) || xu(o)) || a && Va(o)) return !0;
          }
          return !1;
        }(a, e)
      ) {
        i.$shared = !1;
        s = js(a, n = oo(n) ? n() : n, this.createResolver(t, n, o));
      }
      for (const l of e) i[l] = s[l];
      return i;
    }
    createResolver(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : [""],
        r = arguments.length > 3 ? arguments[3] : void 0;
      const { resolver: i } = vu(this._resolverCache, t, n);
      return Ha(e) ? js(i, e, void 0, r) : i;
    }
  }
  function vu(t, e, n) {
    let r = t.get(e);
    r || (r = new Map(), t.set(e, r));
    const i = n.join();
    let a = r.get(i);
    if (!a) {
      a = {
        resolver: Fs(e, n),
        subPrefixes: n.filter((t) => !t.toLowerCase().includes("hover")),
      }, r.set(i, a);
    }
    return a;
  }
  const xu = (t) =>
    Ha(t) && Object.getOwnPropertyNames(t).some((e) => oo(t[e]));
  const wu = ["top", "bottom", "left", "right", "chartArea"];
  function _u(t, e) {
    return "top" === t || "bottom" === t || -1 === wu.indexOf(t) && "x" === e;
  }
  function ku(t, e) {
    return function (n, r) {
      return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
    };
  }
  function Su(t) {
    const e = t.chart, n = e.options.animation;
    e.notifyPlugins("afterRender"), Ya(n && n.onComplete, [t], e);
  }
  function Mu(t) {
    const e = t.chart, n = e.options.animation;
    Ya(n && n.onProgress, [t], e);
  }
  function Eu(t) {
    return nl() && "string" === typeof t
      ? t = document.getElementById(t)
      : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t;
  }
  const Cu = {},
    Pu = (t) => {
      const e = Eu(t);
      return Object.values(Cu).filter((t) => t.canvas === e).pop();
    };
  function Tu(t, e, n) {
    const r = Object.keys(t);
    for (const i of r) {
      const r = +i;
      if (r >= e) {
        const a = t[i];
        delete t[i], (n > 0 || r > e) && (t[r + n] = a);
      }
    }
  }
  function Ru(t, e, n) {
    return t.options.clip ? t[n] : e[n];
  }
  class Ou {
    static defaults = (() => cs)();
    static instances = (() => Cu)();
    static overrides = (() => is)();
    static registry = (() => ru)();
    static version = "4.4.4";
    static getChart = (() => Pu)();
    static register() {
      ru.add(...arguments), Du();
    }
    static unregister() {
      ru.remove(...arguments), Du();
    }
    constructor(t, e) {
      const n = this.config = new yu(e), r = Eu(t), i = Pu(r);
      if (i) {
        throw new Error(
          "Canvas is already in use. Chart with ID '" + i.id +
            "' must be destroyed before the canvas with ID '" + i.canvas.id +
            "' can be reused.",
        );
      }
      const a = n.createResolver(n.chartOptionScopes(), this.getContext());
      this.platform = new (n.platform || function (t) {
        return !nl() ||
            "undefined" !== typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas
          ? Pc
          : Uc;
      }(r))(), this.platform.updateConfig(n);
      const o = this.platform.acquireContext(r, a.aspectRatio),
        s = o && o.canvas,
        l = s && s.height,
        c = s && s.width;
      this.id = Ia(),
        this.ctx = o,
        this.canvas = s,
        this.width = c,
        this.height = l,
        this._options = a,
        this._aspectRatio = this.aspectRatio,
        this._layers = [],
        this._metasets = [],
        this._stacks = void 0,
        this.boxes = [],
        this.currentDevicePixelRatio = void 0,
        this.chartArea = void 0,
        this._active = [],
        this._lastEvent = void 0,
        this._listeners = {},
        this._responsiveListeners = void 0,
        this._sortedMetasets = [],
        this.scales = {},
        this._plugins = new iu(),
        this.$proxies = {},
        this._hiddenIndices = {},
        this.attached = !1,
        this._animationsDisabled = void 0,
        this.$context = void 0,
        this._doResize = function (t, e) {
          let n;
          return function () {
            for (
              var r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            ) i[a] = arguments[a];
            return e
              ? (clearTimeout(n), n = setTimeout(t, e, i))
              : t.apply(this, i),
              e;
          };
        }((t) => this.update(t), a.resizeDelay || 0),
        this._dataChanges = [],
        Cu[this.id] = this,
        o && s
          ? (Pl.listen(this, "complete", Su),
            Pl.listen(this, "progress", Mu),
            this._initialize(),
            this.attached && this.update())
          : console.error(
            "Failed to create chart: can't acquire context from the given item",
          );
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: n,
        height: r,
        _aspectRatio: i,
      } = this;
      return Ba(t) ? e && i ? i : r ? n / r : null : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return ru;
    }
    _initialize() {
      return this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : hl(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this;
    }
    clear() {
      return fs(this.canvas, this.ctx), this;
    }
    stop() {
      return Pl.stop(this), this;
    }
    resize(t, e) {
      Pl.running(this)
        ? this._resizeBeforeDraw = { width: t, height: e }
        : this._resize(t, e);
    }
    _resize(t, e) {
      const n = this.options,
        r = this.canvas,
        i = n.maintainAspectRatio && this.aspectRatio,
        a = this.platform.getMaximumSize(r, t, e, i),
        o = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        s = this.width ? "resize" : "attach";
      this.width = a.width,
        this.height = a.height,
        this._aspectRatio = this.aspectRatio,
        hl(this, o, !0) &&
        (this.notifyPlugins("resize", { size: a }),
          Ya(n.onResize, [this, a], this),
          this.attached && this._doResize(s) && this.render());
    }
    ensureScalesHaveIDs() {
      Qa(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        n = this.scales,
        r = Object.keys(n).reduce((t, e) => (t[e] = !1, t), {});
      let i = [];
      e && (i = i.concat(
        Object.keys(e).map((t) => {
          const n = e[t], r = cu(t, n), i = "r" === r, a = "x" === r;
          return {
            options: n,
            dposition: i ? "chartArea" : a ? "bottom" : "left",
            dtype: i ? "radialLinear" : a ? "category" : "linear",
          };
        }),
      )),
        Qa(i, (e) => {
          const i = e.options, a = i.id, o = cu(a, i), s = $a(i.type, e.dtype);
          void 0 !== i.position && _u(i.position, o) === _u(e.dposition) ||
          (i.position = e.dposition), r[a] = !0;
          let l = null;
          if (a in n && n[a].type === s) l = n[a];
          else {l = new (ru.getScale(s))({
              id: a,
              type: s,
              ctx: this.ctx,
              chart: this,
            }),
              n[l.id] = l;}
          l.init(i, t);
        }),
        Qa(r, (t, e) => {
          t || delete n[e];
        }),
        Qa(n, (t) => {
          Ec.configure(this, t, t.options), Ec.addBox(this, t);
        });
    }
    _updateMetasets() {
      const t = this._metasets, e = this.data.datasets.length, n = t.length;
      if (t.sort((t, e) => t.index - e.index), n > e) {
        for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
        t.splice(e, n - e);
      }
      this._sortedMetasets = t.slice(0).sort(ku("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: t, data: { datasets: e } } = this;
      t.length > e.length && delete this._stacks,
        t.forEach((t, n) => {
          0 === e.filter((e) => e === t._dataset).length &&
            this._destroyDatasetMeta(n);
        });
    }
    buildOrUpdateControllers() {
      const t = [], e = this.data.datasets;
      let n, r;
      for (
        this._removeUnreferencedMetasets(), n = 0, r = e.length;
        n < r;
        n++
      ) {
        const r = e[n];
        let i = this.getDatasetMeta(n);
        const a = r.type || this.config.type;
        if (
          i.type && i.type !== a &&
          (this._destroyDatasetMeta(n), i = this.getDatasetMeta(n)),
            i.type = a,
            i.indexAxis = r.indexAxis || su(a, this.options),
            i.order = r.order || 0,
            i.index = n,
            i.label = "" + r.label,
            i.visible = this.isDatasetVisible(n),
            i.controller
        ) i.controller.updateIndex(n), i.controller.linkScales();
        else {
          const e = ru.getController(a),
            { datasetElementType: r, dataElementType: o } = cs.datasets[a];
          Object.assign(e, {
            dataElementType: ru.getElement(o),
            datasetElementType: r && ru.getElement(r),
          }),
            i.controller = new e(this, n),
            t.push(i.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      Qa(this.data.datasets, (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const e = this.config;
      e.update();
      const n = this._options = e.createResolver(
          e.chartOptionScopes(),
          this.getContext(),
        ),
        r = this._animationsDisabled = !n.animation;
      if (
        this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 })
      ) return;
      const i = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let a = 0;
      for (let l = 0, c = this.data.datasets.length; l < c; l++) {
        const { controller: t } = this.getDatasetMeta(l),
          e = !r && -1 === i.indexOf(t);
        t.buildOrUpdateElements(e), a = Math.max(+t.getMaxOverflow(), a);
      }
      a = this._minPadding = n.layout.autoPadding ? a : 0,
        this._updateLayout(a),
        r || Qa(i, (t) => {
          t.reset();
        }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(ku("z", "_idx"));
      const { _active: o, _lastEvent: s } = this;
      s
        ? this._eventHandler(s, !0)
        : o.length && this._updateHoverStyles(o, o, !0), this.render();
    }
    _updateScales() {
      Qa(this.scales, (t) => {
        Ec.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      so(e, n) && !!this._responsiveListeners === t.responsive ||
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: n, start: r, count: i } of e) {
        Tu(t, r, "_removeElements" === n ? -i : i);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        n = (e) =>
          new Set(
            t.filter((t) => t[0] === e).map((t, e) =>
              e + "," + t.splice(1).join(",")
            ),
          ),
        r = n(0);
      for (let i = 1; i < e; i++) if (!so(r, n(i))) return;
      return Array.from(r).map((t) => t.split(",")).map(
        (t) => ({ method: t[1], start: +t[2], count: +t[3] }),
      );
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
      Ec.update(this, this.width, this.height, t);
      const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
      this._layers = [],
        Qa(this.boxes, (t) => {
          n && "chartArea" === t.position ||
            (t.configure && t.configure(), this._layers.push(...t._layers()));
        }, this),
        this._layers.forEach((t, e) => {
          t._idx = e;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        !1 !==
          this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0,
          })
      ) {
        for (let t = 0, e = this.data.datasets.length; t < e; ++t) {
          this.getDatasetMeta(t).controller.configure();
        }
        for (let e = 0, n = this.data.datasets.length; e < n; ++e) {
          this._updateDataset(e, oo(t) ? t({ datasetIndex: e }) : t);
        }
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, e) {
      const n = this.getDatasetMeta(t),
        r = { meta: n, index: t, mode: e, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetUpdate", r) &&
        (n.controller._update(e),
          r.cancelable = !1,
          this.notifyPlugins("afterDatasetUpdate", r));
    }
    render() {
      !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
        (Pl.has(this)
          ? this.attached && !Pl.running(this) && Pl.start(this)
          : (this.draw(), Su({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: t, height: e } = this._resizeBeforeDraw;
        this._resizeBeforeDraw = null, this._resize(t, e);
      }
      if (this.clear(), this.width <= 0 || this.height <= 0) return;
      if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets, n = [];
      let r, i;
      for (r = 0, i = e.length; r < i; ++r) {
        const i = e[r];
        t && !i.visible || n.push(i);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) {
        return;
      }
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const e = this.ctx,
        n = t._clip,
        r = !n.disabled,
        i = function (t, e) {
          const { xScale: n, yScale: r } = t;
          return n && r
            ? {
              left: Ru(n, e, "left"),
              right: Ru(n, e, "right"),
              top: Ru(r, e, "top"),
              bottom: Ru(r, e, "bottom"),
            }
            : e;
        }(t, this.chartArea),
        a = { meta: t, index: t.index, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetDraw", a) &&
        (r &&
          bs(e, {
            left: !1 === n.left ? 0 : i.left - n.left,
            right: !1 === n.right ? this.width : i.right + n.right,
            top: !1 === n.top ? 0 : i.top - n.top,
            bottom: !1 === n.bottom ? this.height : i.bottom + n.bottom,
          }),
          t.controller.draw(),
          r && ys(e),
          a.cancelable = !1,
          this.notifyPlugins("afterDatasetDraw", a));
    }
    isPointInArea(t) {
      return ms(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, n, r) {
      const i = fc.modes[e];
      return "function" === typeof i ? i(this, t, n, r) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t], n = this._metasets;
      let r = n.filter((t) => t && t._dataset === e).pop();
      return r ||
        (r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: e && e.order || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        },
          n.push(r)),
        r;
    }
    getContext() {
      return this.$context ||
        (this.$context = As(null, { chart: this, type: "chart" }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const n = this.getDatasetMeta(t);
      return "boolean" === typeof n.hidden ? !n.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, n) {
      const r = n ? "show" : "hide",
        i = this.getDatasetMeta(t),
        a = i.controller._resolveAnimations(void 0, r);
      ao(e)
        ? (i.data[e].hidden = !n, this.update())
        : (this.setDatasetVisibility(t, n),
          a.update(i, { visible: n }),
          this.update((e) => e.datasetIndex === t ? r : void 0));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, e;
      for (
        this.stop(), Pl.remove(this), t = 0, e = this.data.datasets.length;
        t < e;
        ++t
      ) this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: e } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
        (this.unbindEvents(),
          fs(t, e),
          this.platform.releaseContext(e),
          this.canvas = null,
          this.ctx = null),
        delete Cu[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image() {
      return this.canvas.toDataURL(...arguments);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : this.attached = !0;
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        n = (n, r) => {
          e.addEventListener(this, n, r), t[n] = r;
        },
        r = (t, e, n) => {
          t.offsetX = e, t.offsetY = n, this._eventHandler(t);
        };
      Qa(this.options.events, (t) => n(t, r));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        n = (n, r) => {
          e.addEventListener(this, n, r), t[n] = r;
        },
        r = (n, r) => {
          t[n] && (e.removeEventListener(this, n, r), delete t[n]);
        },
        i = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let a;
      const o = () => {
        r("attach", o),
          this.attached = !0,
          this.resize(),
          n("resize", i),
          n("detach", a);
      };
      a = () => {
        this.attached = !1,
          r("resize", i),
          this._stop(),
          this._resize(0, 0),
          n("attach", o);
      }, e.isAttached(this.canvas) ? o() : a();
    }
    unbindEvents() {
      Qa(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        this._listeners = {},
        Qa(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        this._responsiveListeners = void 0;
    }
    updateHoverStyle(t, e, n) {
      const r = n ? "set" : "remove";
      let i, a, o, s;
      for (
        "dataset" === e &&
        (i = this.getDatasetMeta(t[0].datasetIndex),
          i.controller["_" + r + "DatasetHoverStyle"]()),
          o = 0,
          s = t.length;
        o < s;
        ++o
      ) {
        a = t[o];
        const e = a && this.getDatasetMeta(a.datasetIndex).controller;
        e && e[r + "HoverStyle"](a.element, a.datasetIndex, a.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        n = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const r = this.getDatasetMeta(e);
          if (!r) throw new Error("No dataset found at index " + e);
          return { datasetIndex: e, element: r.data[n], index: n };
        });
      !Ka(n, e) &&
        (this._active = n,
          this._lastEvent = null,
          this._updateHoverStyles(n, e));
    }
    notifyPlugins(t, e, n) {
      return this._plugins.notify(this, t, e, n);
    }
    isPluginEnabled(t) {
      return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
    }
    _updateHoverStyles(t, e, n) {
      const r = this.options.hover,
        i = (t, e) =>
          t.filter(
            (t) =>
              !e.some((e) =>
                t.datasetIndex === e.datasetIndex && t.index === e.index
              ),
          ),
        a = i(e, t),
        o = n ? t : i(t, e);
      a.length && this.updateHoverStyle(a, r.mode, !1),
        o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
    }
    _eventHandler(t, e) {
      const n = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        r = (e) =>
          (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins("beforeEvent", n, r)) return;
      const i = this._handleEvent(t, e, n.inChartArea);
      return n.cancelable = !1,
        this.notifyPlugins("afterEvent", n, r),
        (i || n.changed) && this.render(),
        this;
    }
    _handleEvent(t, e, n) {
      const { _active: r = [], options: i } = this,
        a = e,
        o = this._getActiveElements(t, r, n, a),
        s = function (t) {
          return "mouseup" === t.type || "click" === t.type ||
            "contextmenu" === t.type;
        }(t),
        l = function (t, e, n, r) {
          return n && "mouseout" !== t.type ? r ? e : t : null;
        }(t, this._lastEvent, n, s);
      n &&
        (this._lastEvent = null,
          Ya(i.onHover, [t, o, this], this),
          s && Ya(i.onClick, [t, o, this], this));
      const c = !Ka(o, r);
      return (c || e) && (this._active = o, this._updateHoverStyles(o, r, e)),
        this._lastEvent = l,
        c;
    }
    _getActiveElements(t, e, n, r) {
      if ("mouseout" === t.type) return [];
      if (!n) return e;
      const i = this.options.hover;
      return this.getElementsAtEventForMode(t, i.mode, i, r);
    }
  }
  function Du() {
    return Qa(Ou.instances, (t) => t._plugins.invalidate());
  }
  function Lu(t, e, n, r) {
    const i = Ps(t.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]);
    const a = (n - e) / 2,
      o = Math.min(a, r * e / 2),
      s = (t) => {
        const e = (n - Math.min(a, t)) * r / 2;
        return Oo(t, 0, Math.min(a, e));
      };
    return {
      outerStart: s(i.outerStart),
      outerEnd: s(i.outerEnd),
      innerStart: Oo(i.innerStart, 0, o),
      innerEnd: Oo(i.innerEnd, 0, o),
    };
  }
  function Au(t, e, n, r) {
    return { x: n + t * Math.cos(e), y: r + t * Math.sin(e) };
  }
  function Fu(t, e, n, r, i, a) {
    const { x: o, y: s, startAngle: l, pixelMargin: c, innerRadius: u } = e,
      h = Math.max(e.outerRadius + r + n - c, 0),
      d = u > 0 ? u + r + n + c : 0;
    let f = 0;
    const p = i - l;
    if (r) {
      const t = ((u > 0 ? u - r : 0) + (h > 0 ? h - r : 0)) / 2;
      f = (p - (0 !== t ? p * t / (t + r) : p)) / 2;
    }
    const g = (p - Math.max(.001, p * h - n / lo) / h) / 2,
      m = l + g + f,
      b = i - g - f,
      { outerStart: y, outerEnd: v, innerStart: x, innerEnd: w } = Lu(
        e,
        d,
        h,
        b - m,
      ),
      _ = h - y,
      k = h - v,
      S = m + y / _,
      M = b - v / k,
      E = d + x,
      C = d + w,
      P = m + x / E,
      T = b - w / C;
    if (t.beginPath(), a) {
      const e = (S + M) / 2;
      if (t.arc(o, s, h, S, e), t.arc(o, s, h, e, M), v > 0) {
        const e = Au(k, M, o, s);
        t.arc(e.x, e.y, v, M, b + po);
      }
      const n = Au(C, b, o, s);
      if (t.lineTo(n.x, n.y), w > 0) {
        const e = Au(C, T, o, s);
        t.arc(e.x, e.y, w, b + po, T + Math.PI);
      }
      const r = (b - w / d + (m + x / d)) / 2;
      if (
        t.arc(o, s, d, b - w / d, r, !0),
          t.arc(o, s, d, r, m + x / d, !0),
          x > 0
      ) {
        const e = Au(E, P, o, s);
        t.arc(e.x, e.y, x, P + Math.PI, m - po);
      }
      const i = Au(_, m, o, s);
      if (t.lineTo(i.x, i.y), y > 0) {
        const e = Au(_, S, o, s);
        t.arc(e.x, e.y, y, m - po, S);
      }
    } else {
      t.moveTo(o, s);
      const e = Math.cos(S) * h + o, n = Math.sin(S) * h + s;
      t.lineTo(e, n);
      const r = Math.cos(M) * h + o, i = Math.sin(M) * h + s;
      t.lineTo(r, i);
    }
    t.closePath();
  }
  function ju(t, e, n, r, i) {
    const { fullCircles: a, startAngle: o, circumference: s, options: l } = e,
      {
        borderWidth: c,
        borderJoinStyle: u,
        borderDash: h,
        borderDashOffset: d,
      } = l,
      f = "inner" === l.borderAlign;
    if (!c) return;
    t.setLineDash(h || []),
      t.lineDashOffset = d,
      f
        ? (t.lineWidth = 2 * c, t.lineJoin = u || "round")
        : (t.lineWidth = c, t.lineJoin = u || "bevel");
    let p = e.endAngle;
    if (a) {
      Fu(t, e, n, r, p, i);
      for (let e = 0; e < a; ++e) t.stroke();
      isNaN(s) || (p = o + (s % co || co));
    }
    f && function (t, e, n) {
      const {
        startAngle: r,
        pixelMargin: i,
        x: a,
        y: o,
        outerRadius: s,
        innerRadius: l,
      } = e;
      let c = i / s;
      t.beginPath(),
        t.arc(a, o, s, r - c, n + c),
        l > i
          ? (c = i / l, t.arc(a, o, l, n + c, r - c, !0))
          : t.arc(a, o, i, n + po, r - po),
        t.closePath(),
        t.clip();
    }(t, e, p), a || (Fu(t, e, n, r, p, i), t.stroke());
  }
  function zu(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
    t.lineCap = $a(n.borderCapStyle, e.borderCapStyle),
      t.setLineDash($a(n.borderDash, e.borderDash)),
      t.lineDashOffset = $a(n.borderDashOffset, e.borderDashOffset),
      t.lineJoin = $a(n.borderJoinStyle, e.borderJoinStyle),
      t.lineWidth = $a(n.borderWidth, e.borderWidth),
      t.strokeStyle = $a(n.borderColor, e.borderColor);
  }
  function Nu(t, e, n) {
    t.lineTo(n.x, n.y);
  }
  function Iu(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r = t.length,
      { start: i = 0, end: a = r - 1 } = n,
      { start: o, end: s } = e,
      l = Math.max(i, o),
      c = Math.min(a, s),
      u = i < o && a < o || i > s && a > s;
    return {
      count: r,
      start: l,
      loop: e.loop,
      ilen: c < l && !u ? r + c - l : c - l,
    };
  }
  function Bu(t, e, n, r) {
    const { points: i, options: a } = e,
      { count: o, start: s, loop: l, ilen: c } = Iu(i, n, r),
      u = function (t) {
        return t.stepped
          ? vs
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? xs
          : Nu;
      }(a);
    let h, d, f, { move: p = !0, reverse: g } = r || {};
    for (h = 0; h <= c; ++h) {
      d = i[(s + (g ? c - h : h)) % o],
        d.skip ||
        (p ? (t.moveTo(d.x, d.y), p = !1) : u(t, f, d, g, a.stepped), f = d);
    }
    return l && (d = i[(s + (g ? c : 0)) % o], u(t, f, d, g, a.stepped)), !!l;
  }
  function Vu(t, e, n, r) {
    const i = e.points,
      { count: a, start: o, ilen: s } = Iu(i, n, r),
      { move: l = !0, reverse: c } = r || {};
    let u, h, d, f, p, g, m = 0, b = 0;
    const y = (t) => (o + (c ? s - t : t)) % a,
      v = () => {
        f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
      };
    for (l && (h = i[y(0)], t.moveTo(h.x, h.y)), u = 0; u <= s; ++u) {
      if (h = i[y(u)], h.skip) continue;
      const e = h.x, n = h.y, r = 0 | e;
      r === d
        ? (n < f ? f = n : n > p && (p = n), m = (b * m + e) / ++b)
        : (v(), t.lineTo(e, n), d = r, b = 0, f = p = n), g = n;
    }
    v();
  }
  function Hu(t) {
    const e = t.options, n = e.borderDash && e.borderDash.length;
    return !t._decimated && !t._loop && !e.tension &&
        "monotone" !== e.cubicInterpolationMode && !e.stepped && !n
      ? Vu
      : Bu;
  }
  const Uu = "function" === typeof Path2D;
  function Wu(t, e, n, r) {
    Uu && !e.options.segment
      ? function (t, e, n, r) {
        let i = e._path;
        i || (i = e._path = new Path2D(), e.path(i, n, r) && i.closePath()),
          zu(t, e.options),
          t.stroke(i);
      }(t, e, n, r)
      : function (t, e, n, r) {
        const { segments: i, options: a } = e, o = Hu(e);
        for (const s of i) {
          zu(t, a, s.style),
            t.beginPath(),
            o(t, e, s, { start: n, end: n + r - 1 }) && t.closePath(),
            t.stroke();
        }
      }(t, e, n, r);
  }
  class $u extends Wc {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: "default",
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    };
    static descriptors = {
      _scriptable: !0,
      _indexable: (t) => "borderDash" !== t && "fill" !== t,
    };
    constructor(t) {
      super(),
        this.animated = !0,
        this.options = void 0,
        this._chart = void 0,
        this._loop = void 0,
        this._fullLoop = void 0,
        this._path = void 0,
        this._points = void 0,
        this._segments = void 0,
        this._decimated = !1,
        this._pointsUpdated = !1,
        this._datasetIndex = void 0,
        t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const n = this.options;
      if (
        (n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped &&
        !this._pointsUpdated
      ) {
        const r = n.spanGaps ? this._loop : this._fullLoop;
        el(this._points, n, t, r, e), this._pointsUpdated = !0;
      }
    }
    set points(t) {
      this._points = t,
        delete this._segments,
        delete this._path,
        this._pointsUpdated = !1;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = function (t, e) {
        const n = t.points, r = t.options.spanGaps, i = n.length;
        if (!i) return [];
        const a = !!t._loop,
          { start: o, end: s } = function (t, e, n, r) {
            let i = 0, a = e - 1;
            if (n && !r) { for (; i < e && !t[i].skip;) i++; }
            for (; i < e && t[i].skip;) i++;
            for (i %= e, n && (a += i); a > i && t[a % e].skip;) a--;
            return a %= e, { start: i, end: a };
          }(n, i, a, r);
        return Sl(
          t,
          !0 === r ? [{ start: o, end: s, loop: a }] : function (t, e, n, r) {
            const i = t.length, a = [];
            let o, s = e, l = t[e];
            for (o = e + 1; o <= n; ++o) {
              const n = t[o % i];
              n.skip || n.stop
                ? l.skip ||
                  (r = !1,
                    a.push({ start: e % i, end: (o - 1) % i, loop: r }),
                    e = s = n.stop ? o : null)
                : (s = o, l.skip && (e = o)), l = n;
            }
            return null !== s && a.push({ start: e % i, end: s % i, loop: r }),
              a;
          }(n, o, s < o ? s + i : s, !!t._fullLoop && 0 === o && s === i - 1),
          n,
          e,
        );
      }(this, this.options.segment));
    }
    first() {
      const t = this.segments, e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments, e = this.points, n = t.length;
      return n && e[t[n - 1].end];
    }
    interpolate(t, e) {
      const n = this.options,
        r = t[e],
        i = this.points,
        a = kl(this, { property: e, start: r, end: r });
      if (!a.length) return;
      const o = [],
        s = function (t) {
          return t.stepped
            ? gl
            : t.tension || "monotone" === t.cubicInterpolationMode
            ? ml
            : pl;
        }(n);
      let l, c;
      for (l = 0, c = a.length; l < c; ++l) {
        const { start: c, end: u } = a[l], h = i[c], d = i[u];
        if (h === d) {
          o.push(h);
          continue;
        }
        const f = s(h, d, Math.abs((r - h[e]) / (d[e] - h[e])), n.stepped);
        f[e] = t[e], o.push(f);
      }
      return 1 === o.length ? o[0] : o;
    }
    pathSegment(t, e, n) {
      return Hu(this)(t, this, e, n);
    }
    path(t, e, n) {
      const r = this.segments, i = Hu(this);
      let a = this._loop;
      e = e || 0, n = n || this.points.length - e;
      for (const o of r) a &= i(t, this, o, { start: e, end: e + n - 1 });
      return !!a;
    }
    draw(t, e, n, r) {
      const i = this.options || {};
      (this.points || []).length && i.borderWidth &&
      (t.save(), Wu(t, this, n, r), t.restore()),
        this.animated && (this._pointsUpdated = !1, this._path = void 0);
    }
  }
  function qu(t, e, n, r) {
    const i = t.options, { [n]: a } = t.getProps([n], r);
    return Math.abs(e - a) < i.radius + i.hitRadius;
  }
  function Yu(t, e) {
    const { x: n, y: r, base: i, width: a, height: o } = t.getProps([
      "x",
      "y",
      "base",
      "width",
      "height",
    ], e);
    let s, l, c, u, h;
    return t.horizontal
      ? (h = o / 2,
        s = Math.min(n, i),
        l = Math.max(n, i),
        c = r - h,
        u = r + h)
      : (h = a / 2,
        s = n - h,
        l = n + h,
        c = Math.min(r, i),
        u = Math.max(r, i)),
      { left: s, top: c, right: l, bottom: u };
  }
  function Qu(t, e, n, r) {
    return t ? 0 : Oo(e, n, r);
  }
  function Ku(t) {
    const e = Yu(t),
      n = e.right - e.left,
      r = e.bottom - e.top,
      i = function (t, e, n) {
        const r = t.options.borderWidth, i = t.borderSkipped, a = Ts(r);
        return {
          t: Qu(i.top, a.top, 0, n),
          r: Qu(i.right, a.right, 0, e),
          b: Qu(i.bottom, a.bottom, 0, n),
          l: Qu(i.left, a.left, 0, e),
        };
      }(t, n / 2, r / 2),
      a = function (t, e, n) {
        const { enableBorderRadius: r } = t.getProps(["enableBorderRadius"]),
          i = t.options.borderRadius,
          a = Rs(i),
          o = Math.min(e, n),
          s = t.borderSkipped,
          l = r || Ha(i);
        return {
          topLeft: Qu(!l || s.top || s.left, a.topLeft, 0, o),
          topRight: Qu(!l || s.top || s.right, a.topRight, 0, o),
          bottomLeft: Qu(!l || s.bottom || s.left, a.bottomLeft, 0, o),
          bottomRight: Qu(!l || s.bottom || s.right, a.bottomRight, 0, o),
        };
      }(t, n / 2, r / 2);
    return {
      outer: { x: e.left, y: e.top, w: n, h: r, radius: a },
      inner: {
        x: e.left + i.l,
        y: e.top + i.t,
        w: n - i.l - i.r,
        h: r - i.t - i.b,
        radius: {
          topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
          topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
          bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
          bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r)),
        },
      },
    };
  }
  function Xu(t, e, n, r) {
    const i = null === e, a = null === n, o = t && !(i && a) && Yu(t, r);
    return o && (i || Do(e, o.left, o.right)) && (a || Do(n, o.top, o.bottom));
  }
  function Ju(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function Gu(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r = t.x !== n.x ? -e : 0,
      i = t.y !== n.y ? -e : 0,
      a = (t.x + t.w !== n.x + n.w ? e : 0) - r,
      o = (t.y + t.h !== n.y + n.h ? e : 0) - i;
    return { x: t.x + r, y: t.y + i, w: t.w + a, h: t.h + o, radius: t.radius };
  }
  var Zu = Object.freeze({
    __proto__: null,
    ArcElement: class extends Wc {
      static id = "arc";
      static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
      };
      static defaultRoutes = { backgroundColor: "backgroundColor" };
      static descriptors = {
        _scriptable: !0,
        _indexable: (t) => "borderDash" !== t,
      };
      circumference;
      endAngle;
      fullCircles;
      innerRadius;
      outerRadius;
      pixelMargin;
      startAngle;
      constructor(t) {
        super(),
          this.options = void 0,
          this.circumference = void 0,
          this.startAngle = void 0,
          this.endAngle = void 0,
          this.innerRadius = void 0,
          this.outerRadius = void 0,
          this.pixelMargin = 0,
          this.fullCircles = 0,
          t && Object.assign(this, t);
      }
      inRange(t, e, n) {
        const r = this.getProps(["x", "y"], n),
          { angle: i, distance: a } = Eo(r, { x: t, y: e }),
          {
            startAngle: o,
            endAngle: s,
            innerRadius: l,
            outerRadius: c,
            circumference: u,
          } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference",
          ], n),
          h = (this.options.spacing + this.options.borderWidth) / 2,
          d = $a(u, s - o),
          f = Ro(i, o, s) && o !== s,
          p = d >= co || f,
          g = Do(a, l + h, c + h);
        return p && g;
      }
      getCenterPoint(t) {
        const {
            x: e,
            y: n,
            startAngle: r,
            endAngle: i,
            innerRadius: a,
            outerRadius: o,
          } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ], t),
          { offset: s, spacing: l } = this.options,
          c = (r + i) / 2,
          u = (a + o + l + s) / 2;
        return { x: e + Math.cos(c) * u, y: n + Math.sin(c) * u };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        const { options: e, circumference: n } = this,
          r = (e.offset || 0) / 4,
          i = (e.spacing || 0) / 2,
          a = e.circular;
        if (
          this.pixelMargin = "inner" === e.borderAlign ? .33 : 0,
            this.fullCircles = n > co ? Math.floor(n / co) : 0,
            0 === n || this.innerRadius < 0 || this.outerRadius < 0
        ) return;
        t.save();
        const o = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(o) * r, Math.sin(o) * r);
        const s = r * (1 - Math.sin(Math.min(lo, n || 0)));
        t.fillStyle = e.backgroundColor,
          t.strokeStyle = e.borderColor,
          function (t, e, n, r, i) {
            const { fullCircles: a, startAngle: o, circumference: s } = e;
            let l = e.endAngle;
            if (a) {
              Fu(t, e, n, r, l, i);
              for (let e = 0; e < a; ++e) t.fill();
              isNaN(s) || (l = o + (s % co || co));
            }
            Fu(t, e, n, r, l, i), t.fill();
          }(t, this, s, i, a),
          ju(t, this, s, i, a),
          t.restore();
      }
    },
    BarElement: class extends Wc {
      static id = "bar";
      static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      };
      constructor(t) {
        super(),
          this.options = void 0,
          this.horizontal = void 0,
          this.base = void 0,
          this.width = void 0,
          this.height = void 0,
          this.inflateAmount = void 0,
          t && Object.assign(this, t);
      }
      draw(t) {
        const {
            inflateAmount: e,
            options: { borderColor: n, backgroundColor: r },
          } = this,
          { inner: i, outer: a } = Ku(this),
          o = (s = a.radius).topLeft || s.topRight || s.bottomLeft ||
              s.bottomRight
            ? Ss
            : Ju;
        var s;
        t.save(),
          a.w === i.w && a.h === i.h ||
          (t.beginPath(),
            o(t, Gu(a, e, i)),
            t.clip(),
            o(t, Gu(i, -e, a)),
            t.fillStyle = n,
            t.fill("evenodd")),
          t.beginPath(),
          o(t, Gu(i, e)),
          t.fillStyle = r,
          t.fill(),
          t.restore();
      }
      inRange(t, e, n) {
        return Xu(this, t, e, n);
      }
      inXRange(t, e) {
        return Xu(this, t, null, e);
      }
      inYRange(t, e) {
        return Xu(this, null, t, e);
      }
      getCenterPoint(t) {
        const { x: e, y: n, base: r, horizontal: i } = this.getProps([
          "x",
          "y",
          "base",
          "horizontal",
        ], t);
        return { x: i ? (e + r) / 2 : e, y: i ? n : (n + r) / 2 };
      }
      getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    },
    LineElement: $u,
    PointElement: class extends Wc {
      static id = "point";
      parsed;
      skip;
      stop;
      static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0,
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      };
      constructor(t) {
        super(),
          this.options = void 0,
          this.parsed = void 0,
          this.skip = void 0,
          this.stop = void 0,
          t && Object.assign(this, t);
      }
      inRange(t, e, n) {
        const r = this.options, { x: i, y: a } = this.getProps(["x", "y"], n);
        return Math.pow(t - i, 2) + Math.pow(e - a, 2) <
          Math.pow(r.hitRadius + r.radius, 2);
      }
      inXRange(t, e) {
        return qu(this, t, "x", e);
      }
      inYRange(t, e) {
        return qu(this, t, "y", e);
      }
      getCenterPoint(t) {
        const { x: e, y: n } = this.getProps(["x", "y"], t);
        return { x: e, y: n };
      }
      size(t) {
        let e = (t = t || this.options || {}).radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        return 2 * (e + (e && t.borderWidth || 0));
      }
      draw(t, e) {
        const n = this.options;
        this.skip || n.radius < .1 || !ms(this, e, this.size(n) / 2) ||
          (t.strokeStyle = n.borderColor,
            t.lineWidth = n.borderWidth,
            t.fillStyle = n.backgroundColor,
            ps(t, n, this.x, this.y));
      }
      getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
      }
    },
  });
  const th = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    eh = th.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function nh(t) {
    return th[t % th.length];
  }
  function rh(t) {
    return eh[t % eh.length];
  }
  function ih(t) {
    let e = 0;
    return (n, r) => {
      const i = t.getDatasetMeta(r).controller;
      i instanceof tc
        ? e = function (t, e) {
          return t.backgroundColor = t.data.map(() => nh(e++)), e;
        }(n, e)
        : i instanceof nc
        ? e = function (t, e) {
          return t.backgroundColor = t.data.map(() => rh(e++)), e;
        }(n, e)
        : i && (e = function (t, e) {
          return t.borderColor = nh(e), t.backgroundColor = rh(e), ++e;
        }(n, e));
    };
  }
  function ah(t) {
    let e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
  }
  var oh = {
    id: "colors",
    defaults: { enabled: !0, forceOverride: !1 },
    beforeLayout(t, e, n) {
      if (!n.enabled) return;
      const { data: { datasets: r }, options: i } = t.config,
        { elements: a } = i;
      if (
        !n.forceOverride &&
        (ah(r) || (o = i) && (o.borderColor || o.backgroundColor) || a && ah(a))
      ) return;
      var o;
      const s = ih(t);
      r.forEach(s);
    },
  };
  function sh(t) {
    if (t._decimated) {
      const e = t._data;
      delete t._decimated,
        delete t._data,
        Object.defineProperty(t, "data", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: e,
        });
    }
  }
  function lh(t) {
    t.data.datasets.forEach((t) => {
      sh(t);
    });
  }
  var ch = {
    id: "decimation",
    defaults: { algorithm: "min-max", enabled: !1 },
    beforeElementsUpdate: (t, e, n) => {
      if (!n.enabled) return void lh(t);
      const r = t.width;
      t.data.datasets.forEach((e, i) => {
        const { _data: a, indexAxis: o } = e,
          s = t.getDatasetMeta(i),
          l = a || e.data;
        if ("y" === Ls([o, t.options.indexAxis])) return;
        if (!s.controller.supportsDecimation) return;
        const c = t.scales[s.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;
        let { start: u, count: h } = function (t, e) {
          const n = e.length;
          let r, i = 0;
          const { iScale: a } = t,
            { min: o, max: s, minDefined: l, maxDefined: c } = a
              .getUserBounds();
          return l && (i = Oo(Ao(e, a.axis, o).lo, 0, n - 1)),
            r = c ? Oo(Ao(e, a.axis, s).hi + 1, i, n) - i : n - i,
            { start: i, count: r };
        }(s, l);
        if (h <= (n.threshold || 4 * r)) return void sh(e);
        let d;
        switch (
          Ba(a) &&
          (e._data = l,
            delete e.data,
            Object.defineProperty(e, "data", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this._decimated;
              },
              set: function (t) {
                this._data = t;
              },
            })), n.algorithm
        ) {
          case "lttb":
            d = function (t, e, n, r, i) {
              const a = i.samples || r;
              if (a >= n) return t.slice(e, e + n);
              const o = [], s = (n - 2) / (a - 2);
              let l = 0;
              const c = e + n - 1;
              let u, h, d, f, p, g = e;
              for (o[l++] = t[g], u = 0; u < a - 2; u++) {
                let r, i = 0, a = 0;
                const c = Math.floor((u + 1) * s) + 1 + e,
                  m = Math.min(Math.floor((u + 2) * s) + 1, n) + e,
                  b = m - c;
                for (r = c; r < m; r++) i += t[r].x, a += t[r].y;
                i /= b, a /= b;
                const y = Math.floor(u * s) + 1 + e,
                  v = Math.min(Math.floor((u + 1) * s) + 1, n) + e,
                  { x: x, y: w } = t[g];
                for (d = f = -1, r = y; r < v; r++) {
                  f = .5 *
                    Math.abs((x - i) * (t[r].y - w) - (x - t[r].x) * (a - w)),
                    f > d && (d = f, h = t[r], p = r);
                }
                o[l++] = h, g = p;
              }
              return o[l++] = t[c], o;
            }(l, u, h, r, n);
            break;
          case "min-max":
            d = function (t, e, n, r) {
              let i, a, o, s, l, c, u, h, d, f, p = 0, g = 0;
              const m = [], b = e + n - 1, y = t[e].x, v = t[b].x - y;
              for (i = e; i < e + n; ++i) {
                a = t[i], o = (a.x - y) / v * r, s = a.y;
                const e = 0 | o;
                if (e === l) {
                  s < d ? (d = s, c = i) : s > f && (f = s, u = i),
                    p = (g * p + a.x) / ++g;
                } else {
                  const n = i - 1;
                  if (!Ba(c) && !Ba(u)) {
                    const e = Math.min(c, u), r = Math.max(c, u);
                    e !== h && e !== n && m.push({ ...t[e], x: p }),
                      r !== h && r !== n && m.push({ ...t[r], x: p });
                  }
                  i > 0 && n !== h && m.push(t[n]),
                    m.push(a),
                    l = e,
                    g = 0,
                    d = f = s,
                    c = u = h = i;
                }
              }
              return m;
            }(l, u, h, r);
            break;
          default:
            throw new Error(
              `Unsupported decimation algorithm '${n.algorithm}'`,
            );
        }
        e._decimated = d;
      });
    },
    destroy(t) {
      lh(t);
    },
  };
  function uh(t, e, n, r) {
    if (r) return;
    let i = e[t], a = n[t];
    return "angle" === t && (i = To(i), a = To(a)),
      { property: t, start: i, end: a };
  }
  function hh(t, e, n) {
    for (; e > t; e--) {
      const t = n[e];
      if (!isNaN(t.x) && !isNaN(t.y)) break;
    }
    return e;
  }
  function dh(t, e, n, r) {
    return t && e ? r(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
  }
  function fh(t, e) {
    let n = [], r = !1;
    return Va(t) ? (r = !0, n = t) : n = function (t, e) {
      const { x: n = null, y: r = null } = t || {}, i = e.points, a = [];
      return e.segments.forEach((t) => {
        let { start: e, end: o } = t;
        o = hh(e, o, i);
        const s = i[e], l = i[o];
        null !== r
          ? (a.push({ x: s.x, y: r }), a.push({ x: l.x, y: r }))
          : null !== n && (a.push({ x: n, y: s.y }), a.push({ x: n, y: l.y }));
      }),
        a;
    }(t, e),
      n.length
        ? new $u({ points: n, options: { tension: 0 }, _loop: r, _fullLoop: r })
        : null;
  }
  function ph(t) {
    return t && !1 !== t.fill;
  }
  function gh(t, e, n) {
    let r = t[e].fill;
    const i = [e];
    let a;
    if (!n) return r;
    for (; !1 !== r && -1 === i.indexOf(r);) {
      if (!Ua(r)) return r;
      if (a = t[r], !a) return !1;
      if (a.visible) return r;
      i.push(r), r = a.fill;
    }
    return !1;
  }
  function mh(t, e, n) {
    const r = function (t) {
      const e = t.options, n = e.fill;
      let r = $a(n && n.target, n);
      void 0 === r && (r = !!e.backgroundColor);
      if (!1 === r || null === r) return !1;
      if (!0 === r) return "origin";
      return r;
    }(t);
    if (Ha(r)) return !isNaN(r.value) && r;
    let i = parseFloat(r);
    return Ua(i) && Math.floor(i) === i
      ? function (t, e, n, r) {
        "-" !== t && "+" !== t || (n = e + n);
        if (n === e || n < 0 || n >= r) return !1;
        return n;
      }(r[0], e, i, n)
      : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r;
  }
  function bh(t, e, n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
      const a = n[i], { first: o, last: s, point: l } = yh(a, e, "x");
      if (!(!l || o && s)) {
        if (o) r.unshift(l);
        else if (t.push(l), !s) break;
      }
    }
    t.push(...r);
  }
  function yh(t, e, n) {
    const r = t.interpolate(e, n);
    if (!r) return {};
    const i = r[n], a = t.segments, o = t.points;
    let s = !1, l = !1;
    for (let c = 0; c < a.length; c++) {
      const t = a[c], e = o[t.start][n], r = o[t.end][n];
      if (Do(i, e, r)) {
        s = i === e, l = i === r;
        break;
      }
    }
    return { first: s, last: l, point: r };
  }
  class vh {
    constructor(t) {
      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    pathSegment(t, e, n) {
      const { x: r, y: i, radius: a } = this;
      return e = e || { start: 0, end: co },
        t.arc(r, i, a, e.end, e.start, !0),
        !n.bounds;
    }
    interpolate(t) {
      const { x: e, y: n, radius: r } = this, i = t.angle;
      return { x: e + Math.cos(i) * r, y: n + Math.sin(i) * r, angle: i };
    }
  }
  function xh(t) {
    const { chart: e, fill: n, line: r } = t;
    if (Ua(n)) {
      return function (t, e) {
        const n = t.getDatasetMeta(e), r = n && t.isDatasetVisible(e);
        return r ? n.dataset : null;
      }(e, n);
    }
    if ("stack" === n) {
      return function (t) {
        const { scale: e, index: n, line: r } = t,
          i = [],
          a = r.segments,
          o = r.points,
          s = function (t, e) {
            const n = [], r = t.getMatchingVisibleMetas("line");
            for (let i = 0; i < r.length; i++) {
              const t = r[i];
              if (t.index === e) break;
              t.hidden || n.unshift(t.dataset);
            }
            return n;
          }(e, n);
        s.push(fh({ x: null, y: e.bottom }, r));
        for (let l = 0; l < a.length; l++) {
          const t = a[l];
          for (let e = t.start; e <= t.end; e++) bh(i, o[e], s);
        }
        return new $u({ points: i, options: {} });
      }(t);
    }
    if ("shape" === n) return !0;
    const i = function (t) {
      const e = t.scale || {};
      if (e.getPointPositionForValue) {
        return function (t) {
          const { scale: e, fill: n } = t,
            r = e.options,
            i = e.getLabels().length,
            a = r.reverse ? e.max : e.min,
            o = function (t, e, n) {
              let r;
              return r = "start" === t
                ? n
                : "end" === t
                ? e.options.reverse ? e.min : e.max
                : Ha(t)
                ? t.value
                : e.getBaseValue(),
                r;
            }(n, e, a),
            s = [];
          if (r.grid.circular) {
            const t = e.getPointPositionForValue(0, a);
            return new vh({
              x: t.x,
              y: t.y,
              radius: e.getDistanceFromCenterForValue(o),
            });
          }
          for (let l = 0; l < i; ++l) s.push(e.getPointPositionForValue(l, o));
          return s;
        }(t);
      }
      return function (t) {
        const { scale: e = {}, fill: n } = t,
          r = function (t, e) {
            let n = null;
            return "start" === t
              ? n = e.bottom
              : "end" === t
              ? n = e.top
              : Ha(t)
              ? n = e.getPixelForValue(t.value)
              : e.getBasePixel && (n = e.getBasePixel()),
              n;
          }(n, e);
        if (Ua(r)) {
          const t = e.isHorizontal();
          return { x: t ? r : null, y: t ? null : r };
        }
        return null;
      }(t);
    }(t);
    return i instanceof vh ? i : fh(i, r);
  }
  function wh(t, e, n) {
    const r = xh(e),
      { line: i, scale: a, axis: o } = e,
      s = i.options,
      l = s.fill,
      c = s.backgroundColor,
      { above: u = c, below: h = c } = l || {};
    r && i.points.length && (bs(t, n),
      function (t, e) {
        const { line: n, target: r, above: i, below: a, area: o, scale: s } = e,
          l = n._loop ? "angle" : e.axis;
        t.save(),
          "x" === l && a !== i &&
          (_h(t, r, o.top),
            kh(t, { line: n, target: r, color: i, scale: s, property: l }),
            t.restore(),
            t.save(),
            _h(t, r, o.bottom));
        kh(t, { line: n, target: r, color: a, scale: s, property: l }),
          t.restore();
      }(t, {
        line: i,
        target: r,
        above: u,
        below: h,
        area: n,
        scale: a,
        axis: o,
      }),
      ys(t));
  }
  function _h(t, e, n) {
    const { segments: r, points: i } = e;
    let a = !0, o = !1;
    t.beginPath();
    for (const s of r) {
      const { start: r, end: l } = s, c = i[r], u = i[hh(r, l, i)];
      a ? (t.moveTo(c.x, c.y), a = !1) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
        o = !!e.pathSegment(t, s, { move: o }),
        o ? t.closePath() : t.lineTo(u.x, n);
    }
    t.lineTo(e.first().x, n), t.closePath(), t.clip();
  }
  function kh(t, e) {
    const { line: n, target: r, property: i, color: a, scale: o } = e,
      s = function (t, e, n) {
        const r = t.segments, i = t.points, a = e.points, o = [];
        for (const s of r) {
          let { start: t, end: r } = s;
          r = hh(t, r, i);
          const l = uh(n, i[t], i[r], s.loop);
          if (!e.segments) {
            o.push({ source: s, target: l, start: i[t], end: i[r] });
            continue;
          }
          const c = kl(e, l);
          for (const e of c) {
            const t = uh(n, a[e.start], a[e.end], e.loop), r = _l(s, i, t);
            for (const i of r) {
              o.push({
                source: i,
                target: e,
                start: { [n]: dh(l, t, "start", Math.max) },
                end: { [n]: dh(l, t, "end", Math.min) },
              });
            }
          }
        }
        return o;
      }(n, r, i);
    for (const { source: l, target: c, start: u, end: h } of s) {
      const { style: { backgroundColor: e = a } = {} } = l, s = !0 !== r;
      t.save(), t.fillStyle = e, Sh(t, o, s && uh(i, u, h)), t.beginPath();
      const d = !!n.pathSegment(t, l);
      let f;
      if (s) {
        d ? t.closePath() : Mh(t, r, h, i);
        const e = !!r.pathSegment(t, c, { move: d, reverse: !0 });
        f = d && e, f || Mh(t, r, u, i);
      }
      t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
    }
  }
  function Sh(t, e, n) {
    const { top: r, bottom: i } = e.chart.chartArea,
      { property: a, start: o, end: s } = n || {};
    "x" === a && (t.beginPath(), t.rect(o, r, s - o, i - r), t.clip());
  }
  function Mh(t, e, n, r) {
    const i = e.interpolate(n, r);
    i && t.lineTo(i.x, i.y);
  }
  var Eh = {
    id: "filler",
    afterDatasetsUpdate(t, e, n) {
      const r = (t.data.datasets || []).length, i = [];
      let a, o, s, l;
      for (o = 0; o < r; ++o) {
        a = t.getDatasetMeta(o),
          s = a.dataset,
          l = null,
          s && s.options && s instanceof $u &&
          (l = {
            visible: t.isDatasetVisible(o),
            index: o,
            fill: mh(s, o, r),
            chart: t,
            axis: a.controller.options.indexAxis,
            scale: a.vScale,
            line: s,
          }),
          a.$filler = l,
          i.push(l);
      }
      for (o = 0; o < r; ++o) {
        l = i[o], l && !1 !== l.fill && (l.fill = gh(i, o, n.propagate));
      }
    },
    beforeDraw(t, e, n) {
      const r = "beforeDraw" === n.drawTime,
        i = t.getSortedVisibleDatasetMetas(),
        a = t.chartArea;
      for (let o = i.length - 1; o >= 0; --o) {
        const e = i[o].$filler;
        e &&
          (e.line.updateControlPoints(a, e.axis),
            r && e.fill && wh(t.ctx, e, a));
      }
    },
    beforeDatasetsDraw(t, e, n) {
      if ("beforeDatasetsDraw" !== n.drawTime) return;
      const r = t.getSortedVisibleDatasetMetas();
      for (let i = r.length - 1; i >= 0; --i) {
        const e = r[i].$filler;
        ph(e) && wh(t.ctx, e, t.chartArea);
      }
    },
    beforeDatasetDraw(t, e, n) {
      const r = e.meta.$filler;
      ph(r) && "beforeDatasetDraw" === n.drawTime && wh(t.ctx, r, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
  };
  const Ch = (t, e) => {
    let { boxHeight: n = e, boxWidth: r = e } = t;
    return t.usePointStyle &&
      (n = Math.min(n, e), r = t.pointStyleWidth || Math.min(r, e)),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(e, n) };
  };
  class Ph extends Wc {
    constructor(t) {
      super(),
        this._added = !1,
        this.legendHitBoxes = [],
        this._hoveredItem = null,
        this.doughnutMode = !1,
        this.chart = t.chart,
        this.options = t.options,
        this.ctx = t.ctx,
        this.legendItems = void 0,
        this.columnSizes = void 0,
        this.lineWidths = void 0,
        this.maxHeight = void 0,
        this.maxWidth = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.height = void 0,
        this.width = void 0,
        this._margins = void 0,
        this.position = void 0,
        this.weight = void 0,
        this.fullSize = void 0;
    }
    update(t, e, n) {
      this.maxWidth = t,
        this.maxHeight = e,
        this._margins = n,
        this.setDimensions(),
        this.buildLabels(),
        this.fit();
    }
    setDimensions() {
      this.isHorizontal()
        ? (this.width = this.maxWidth,
          this.left = this._margins.left,
          this.right = this.width)
        : (this.height = this.maxHeight,
          this.top = this._margins.top,
          this.bottom = this.height);
    }
    buildLabels() {
      const t = this.options.labels || {};
      let e = Ya(t.generateLabels, [this.chart], this) || [];
      t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
        t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
        this.options.reverse && e.reverse(),
        this.legendItems = e;
    }
    fit() {
      const { options: t, ctx: e } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const n = t.labels,
        r = Ds(n.font),
        i = r.size,
        a = this._computeTitleHeight(),
        { boxWidth: o, itemHeight: s } = Ch(n, i);
      let l, c;
      e.font = r.string,
        this.isHorizontal()
          ? (l = this.maxWidth, c = this._fitRows(a, i, o, s) + 10)
          : (c = this.maxHeight, l = this._fitCols(a, r, o, s) + 10),
        this.width = Math.min(l, t.maxWidth || this.maxWidth),
        this.height = Math.min(c, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, n, r) {
      const { ctx: i, maxWidth: a, options: { labels: { padding: o } } } = this,
        s = this.legendHitBoxes = [],
        l = this.lineWidths = [0],
        c = r + o;
      let u = t;
      i.textAlign = "left", i.textBaseline = "middle";
      let h = -1, d = -c;
      return this.legendItems.forEach((t, f) => {
        const p = n + e / 2 + i.measureText(t.text).width;
        (0 === f || l[l.length - 1] + p + 2 * o > a) &&
        (u += c, l[l.length - (f > 0 ? 0 : 1)] = 0, d += c, h++),
          s[f] = { left: 0, top: d, row: h, width: p, height: r },
          l[l.length - 1] += p + o;
      }),
        u;
    }
    _fitCols(t, e, n, r) {
      const { ctx: i, maxHeight: a, options: { labels: { padding: o } } } =
          this,
        s = this.legendHitBoxes = [],
        l = this.columnSizes = [],
        c = a - t;
      let u = o, h = 0, d = 0, f = 0, p = 0;
      return this.legendItems.forEach((t, a) => {
        const { itemWidth: g, itemHeight: m } = function (t, e, n, r, i) {
          const a = function (t, e, n, r) {
              let i = t.text;
              i && "string" !== typeof i &&
                (i = i.reduce((t, e) => t.length > e.length ? t : e));
              return e + n.size / 2 + r.measureText(i).width;
            }(r, t, e, n),
            o = function (t, e, n) {
              let r = t;
              "string" !== typeof e.text && (r = Th(e, n));
              return r;
            }(i, r, e.lineHeight);
          return { itemWidth: a, itemHeight: o };
        }(n, e, i, t, r);
        a > 0 && d + m + 2 * o > c &&
        (u += h + o,
          l.push({ width: h, height: d }),
          f += h + o,
          p++,
          h = d = 0),
          s[a] = { left: f, top: d, col: p, width: g, height: m },
          h = Math.max(h, g),
          d += m + o;
      }),
        u += h,
        l.push({ width: h, height: d }),
        u;
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: { align: n, labels: { padding: r }, rtl: i },
        } = this,
        a = bl(i, this.left, this.width);
      if (this.isHorizontal()) {
        let i = 0, o = Ho(n, this.left + r, this.right - this.lineWidths[i]);
        for (const s of e) {
          i !== s.row &&
          (i = s.row,
            o = Ho(n, this.left + r, this.right - this.lineWidths[i])),
            s.top += this.top + t + r,
            s.left = a.leftForLtr(a.x(o), s.width),
            o += s.width + r;
        }
      } else {
        let i = 0,
          o = Ho(n, this.top + t + r, this.bottom - this.columnSizes[i].height);
        for (const s of e) {
          s.col !== i &&
          (i = s.col,
            o = Ho(
              n,
              this.top + t + r,
              this.bottom - this.columnSizes[i].height,
            )),
            s.top = o,
            s.left += this.left + r,
            s.left = a.leftForLtr(a.x(s.left), s.width),
            o += s.height + r;
        }
      }
    }
    isHorizontal() {
      return "top" === this.options.position ||
        "bottom" === this.options.position;
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        bs(t, this), this._draw(), ys(t);
      }
    }
    _draw() {
      const { options: t, columnSizes: e, lineWidths: n, ctx: r } = this,
        { align: i, labels: a } = t,
        o = cs.color,
        s = bl(t.rtl, this.left, this.width),
        l = Ds(a.font),
        { padding: c } = a,
        u = l.size,
        h = u / 2;
      let d;
      this.drawTitle(),
        r.textAlign = s.textAlign("left"),
        r.textBaseline = "middle",
        r.lineWidth = .5,
        r.font = l.string;
      const { boxWidth: f, boxHeight: p, itemHeight: g } = Ch(a, u),
        m = this.isHorizontal(),
        b = this._computeTitleHeight();
      d = m
        ? {
          x: Ho(i, this.left + c, this.right - n[0]),
          y: this.top + c + b,
          line: 0,
        }
        : {
          x: this.left + c,
          y: Ho(i, this.top + b + c, this.bottom - e[0].height),
          line: 0,
        }, yl(this.ctx, t.textDirection);
      const y = g + c;
      this.legendItems.forEach((v, x) => {
        r.strokeStyle = v.fontColor, r.fillStyle = v.fontColor;
        const w = r.measureText(v.text).width,
          _ = s.textAlign(v.textAlign || (v.textAlign = a.textAlign)),
          k = f + h + w;
        let S = d.x, M = d.y;
        s.setWidth(this.width),
          m
            ? x > 0 && S + k + c > this.right &&
              (M = d.y += y,
                d.line++,
                S = d.x = Ho(i, this.left + c, this.right - n[d.line]))
            : x > 0 && M + y > this.bottom &&
              (S = d.x = S + e[d.line].width + c,
                d.line++,
                M = d.y = Ho(
                  i,
                  this.top + b + c,
                  this.bottom - e[d.line].height,
                ));
        if (
          function (t, e, n) {
            if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
            r.save();
            const i = $a(n.lineWidth, 1);
            if (
              r.fillStyle = $a(n.fillStyle, o),
                r.lineCap = $a(n.lineCap, "butt"),
                r.lineDashOffset = $a(n.lineDashOffset, 0),
                r.lineJoin = $a(n.lineJoin, "miter"),
                r.lineWidth = i,
                r.strokeStyle = $a(n.strokeStyle, o),
                r.setLineDash($a(n.lineDash, [])),
                a.usePointStyle
            ) {
              const o = {
                  radius: p * Math.SQRT2 / 2,
                  pointStyle: n.pointStyle,
                  rotation: n.rotation,
                  borderWidth: i,
                },
                l = s.xPlus(t, f / 2);
              gs(r, o, l, e + h, a.pointStyleWidth && f);
            } else {
              const a = e + Math.max((u - p) / 2, 0),
                o = s.leftForLtr(t, f),
                l = Rs(n.borderRadius);
              r.beginPath(),
                Object.values(l).some((t) => 0 !== t)
                  ? Ss(r, { x: o, y: a, w: f, h: p, radius: l })
                  : r.rect(o, a, f, p),
                r.fill(),
                0 !== i && r.stroke();
            }
            r.restore();
          }(s.x(S), M, v),
            S = ((t, e, n, r) =>
              t === (r ? "left" : "right")
                ? n
                : "center" === t
                ? (e + n) / 2
                : e)(_, S + f + h, m ? S + k : this.right, t.rtl),
            function (t, e, n) {
              ks(r, n.text, t, e + g / 2, l, {
                strikethrough: n.hidden,
                textAlign: s.textAlign(n.textAlign),
              });
            }(s.x(S), M, v),
            m
        ) d.x += k + c;
        else if ("string" !== typeof v.text) {
          const t = l.lineHeight;
          d.y += Th(v, t) + c;
        } else d.y += y;
      }), vl(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options, e = t.title, n = Ds(e.font), r = Os(e.padding);
      if (!e.display) return;
      const i = bl(t.rtl, this.left, this.width),
        a = this.ctx,
        o = e.position,
        s = n.size / 2,
        l = r.top + s;
      let c, u = this.left, h = this.width;
      if (this.isHorizontal()) {
        h = Math.max(...this.lineWidths),
          c = this.top + l,
          u = Ho(t.align, u, this.right - h);
      } else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        c = l +
          Ho(
            t.align,
            this.top,
            this.bottom - e - t.labels.padding - this._computeTitleHeight(),
          );
      }
      const d = Ho(o, u, u + h);
      a.textAlign = i.textAlign(Vo(o)),
        a.textBaseline = "middle",
        a.strokeStyle = e.color,
        a.fillStyle = e.color,
        a.font = n.string,
        ks(a, e.text, d, c, n);
    }
    _computeTitleHeight() {
      const t = this.options.title, e = Ds(t.font), n = Os(t.padding);
      return t.display ? e.lineHeight + n.height : 0;
    }
    _getLegendItemAt(t, e) {
      let n, r, i;
      if (Do(t, this.left, this.right) && Do(e, this.top, this.bottom)) {
        for (i = this.legendHitBoxes, n = 0; n < i.length; ++n) {
          if (
            r = i[n],
              Do(t, r.left, r.left + r.width) && Do(e, r.top, r.top + r.height)
          ) {
            return this.legendItems[n];
          }
        }
      }
      return null;
    }
    handleEvent(t) {
      const e = this.options;
      if (
        !function (t, e) {
          if (
            ("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)
          ) return !0;
          if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
          return !1;
        }(t.type, e)
      ) return;
      const n = this._getLegendItemAt(t.x, t.y);
      if ("mousemove" === t.type || "mouseout" === t.type) {
        const a = this._hoveredItem,
          o = (i = n,
            null !== (r = a) && null !== i &&
            r.datasetIndex === i.datasetIndex && r.index === i.index);
        a && !o && Ya(e.onLeave, [t, a, this], this),
          this._hoveredItem = n,
          n && !o && Ya(e.onHover, [t, n, this], this);
      } else n && Ya(e.onClick, [t, n, this], this);
      var r, i;
    }
  }
  function Th(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var Rh = {
    id: "legend",
    _element: Ph,
    start(t, e, n) {
      const r = t.legend = new Ph({ ctx: t.ctx, options: n, chart: t });
      Ec.configure(t, r, n), Ec.addBox(t, r);
    },
    stop(t) {
      Ec.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
      const r = t.legend;
      Ec.configure(t, r, n), r.options = n;
    },
    afterUpdate(t) {
      const e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, n) {
        const r = e.datasetIndex, i = n.chart;
        i.isDatasetVisible(r)
          ? (i.hide(r), e.hidden = !0)
          : (i.show(r), e.hidden = !1);
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (t) => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: {
                usePointStyle: n,
                pointStyle: r,
                textAlign: i,
                color: a,
                useBorderRadius: o,
                borderRadius: s,
              },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((t) => {
            const l = t.controller.getStyle(n ? 0 : void 0),
              c = Os(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: a,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (c.width + c.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: r || l.pointStyle,
              rotation: l.rotation,
              textAlign: i || l.textAlign,
              borderRadius: o && (s || l.borderRadius),
              datasetIndex: t.index,
            };
          }, this);
        },
      },
      title: {
        color: (t) => t.chart.options.color,
        display: !1,
        position: "center",
        text: "",
      },
    },
    descriptors: {
      _scriptable: (t) => !t.startsWith("on"),
      labels: {
        _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
      },
    },
  };
  class Oh extends Wc {
    constructor(t) {
      super(),
        this.chart = t.chart,
        this.options = t.options,
        this.ctx = t.ctx,
        this._padding = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.width = void 0,
        this.height = void 0,
        this.position = void 0,
        this.weight = void 0,
        this.fullSize = void 0;
    }
    update(t, e) {
      const n = this.options;
      if (this.left = 0, this.top = 0, !n.display) {
        return void (this.width =
          this.height =
          this.right =
          this.bottom =
            0);
      }
      this.width = this.right = t, this.height = this.bottom = e;
      const r = Va(n.text) ? n.text.length : 1;
      this._padding = Os(n.padding);
      const i = r * Ds(n.font).lineHeight + this._padding.height;
      this.isHorizontal() ? this.height = i : this.width = i;
    }
    isHorizontal() {
      const t = this.options.position;
      return "top" === t || "bottom" === t;
    }
    _drawArgs(t) {
      const { top: e, left: n, bottom: r, right: i, options: a } = this,
        o = a.align;
      let s, l, c, u = 0;
      return this.isHorizontal()
        ? (l = Ho(o, n, i), c = e + t, s = i - n)
        : ("left" === a.position
          ? (l = n + t, c = Ho(o, r, e), u = -.5 * lo)
          : (l = i - t, c = Ho(o, e, r), u = .5 * lo),
          s = r - e),
        { titleX: l, titleY: c, maxWidth: s, rotation: u };
    }
    draw() {
      const t = this.ctx, e = this.options;
      if (!e.display) return;
      const n = Ds(e.font),
        r = n.lineHeight / 2 + this._padding.top,
        { titleX: i, titleY: a, maxWidth: o, rotation: s } = this._drawArgs(r);
      ks(t, e.text, 0, 0, n, {
        color: e.color,
        maxWidth: o,
        rotation: s,
        textAlign: Vo(e.align),
        textBaseline: "middle",
        translation: [i, a],
      });
    }
  }
  var Dh = {
    id: "title",
    _element: Oh,
    start(t, e, n) {
      !function (t, e) {
        const n = new Oh({ ctx: t.ctx, options: e, chart: t });
        Ec.configure(t, n, e), Ec.addBox(t, n), t.titleBlock = n;
      }(t, n);
    },
    stop(t) {
      const e = t.titleBlock;
      Ec.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
      const r = t.titleBlock;
      Ec.configure(t, r, n), r.options = n;
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "bold" },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Lh = new WeakMap();
  var Ah = {
    id: "subtitle",
    start(t, e, n) {
      const r = new Oh({ ctx: t.ctx, options: n, chart: t });
      Ec.configure(t, r, n), Ec.addBox(t, r), Lh.set(t, r);
    },
    stop(t) {
      Ec.removeBox(t, Lh.get(t)), Lh.delete(t);
    },
    beforeUpdate(t, e, n) {
      const r = Lh.get(t);
      Ec.configure(t, r, n), r.options = n;
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "normal" },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const Fh = {
    average(t) {
      if (!t.length) return !1;
      let e, n, r = new Set(), i = 0, a = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        const n = t[e].element;
        if (n && n.hasValue()) {
          const t = n.tooltipPosition();
          r.add(t.x), i += t.y, ++a;
        }
      }
      if (0 === a || 0 === r.size) return !1;
      return { x: [...r].reduce((t, e) => t + e) / r.size, y: i / a };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let n, r, i, a = e.x, o = e.y, s = Number.POSITIVE_INFINITY;
      for (n = 0, r = t.length; n < r; ++n) {
        const r = t[n].element;
        if (r && r.hasValue()) {
          const t = Co(e, r.getCenterPoint());
          t < s && (s = t, i = r);
        }
      }
      if (i) {
        const t = i.tooltipPosition();
        a = t.x, o = t.y;
      }
      return { x: a, y: o };
    },
  };
  function jh(t, e) {
    return e && (Va(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function zh(t) {
    return ("string" === typeof t || t instanceof String) &&
        t.indexOf("\n") > -1
      ? t.split("\n")
      : t;
  }
  function Nh(t, e) {
    const { element: n, datasetIndex: r, index: i } = e,
      a = t.getDatasetMeta(r).controller,
      { label: o, value: s } = a.getLabelAndValue(i);
    return {
      chart: t,
      label: o,
      parsed: a.getParsed(i),
      raw: t.data.datasets[r].data[i],
      formattedValue: s,
      dataset: a.getDataset(),
      dataIndex: i,
      datasetIndex: r,
      element: n,
    };
  }
  function Ih(t, e) {
    const n = t.chart.ctx,
      { body: r, footer: i, title: a } = t,
      { boxWidth: o, boxHeight: s } = e,
      l = Ds(e.bodyFont),
      c = Ds(e.titleFont),
      u = Ds(e.footerFont),
      h = a.length,
      d = i.length,
      f = r.length,
      p = Os(e.padding);
    let g = p.height,
      m = 0,
      b = r.reduce(
        (t, e) => t + e.before.length + e.lines.length + e.after.length,
        0,
      );
    if (
      b += t.beforeBody.length + t.afterBody.length,
        h &&
        (g += h * c.lineHeight + (h - 1) * e.titleSpacing +
          e.titleMarginBottom),
        b
    ) {
      g += f * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
        (b - f) * l.lineHeight + (b - 1) * e.bodySpacing;
    }
    d &&
      (g += e.footerMarginTop + d * u.lineHeight + (d - 1) * e.footerSpacing);
    let y = 0;
    const v = function (t) {
      m = Math.max(m, n.measureText(t).width + y);
    };
    return n.save(),
      n.font = c.string,
      Qa(t.title, v),
      n.font = l.string,
      Qa(t.beforeBody.concat(t.afterBody), v),
      y = e.displayColors ? o + 2 + e.boxPadding : 0,
      Qa(r, (t) => {
        Qa(t.before, v), Qa(t.lines, v), Qa(t.after, v);
      }),
      y = 0,
      n.font = u.string,
      Qa(t.footer, v),
      n.restore(),
      m += p.width,
      { width: m, height: g };
  }
  function Bh(t, e, n, r) {
    const { x: i, width: a } = n,
      { width: o, chartArea: { left: s, right: l } } = t;
    let c = "center";
    return "center" === r
      ? c = i <= (s + l) / 2 ? "left" : "right"
      : i <= a / 2
      ? c = "left"
      : i >= o - a / 2 && (c = "right"),
      function (t, e, n, r) {
        const { x: i, width: a } = r, o = n.caretSize + n.caretPadding;
        return "left" === t && i + a + o > e.width ||
          "right" === t && i - a - o < 0 || void 0;
      }(c, t, e, n) && (c = "center"),
      c;
  }
  function Vh(t, e, n) {
    const r = n.yAlign || e.yAlign || function (t, e) {
      const { y: n, height: r } = e;
      return n < r / 2 ? "top" : n > t.height - r / 2 ? "bottom" : "center";
    }(t, n);
    return { xAlign: n.xAlign || e.xAlign || Bh(t, e, n, r), yAlign: r };
  }
  function Hh(t, e, n, r) {
    const { caretSize: i, caretPadding: a, cornerRadius: o } = t,
      { xAlign: s, yAlign: l } = n,
      c = i + a,
      { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = Rs(o);
    let p = function (t, e) {
      let { x: n, width: r } = t;
      return "right" === e ? n -= r : "center" === e && (n -= r / 2), n;
    }(e, s);
    const g = function (t, e, n) {
      let { y: r, height: i } = t;
      return "top" === e ? r += n : r -= "bottom" === e ? i + n : i / 2, r;
    }(e, l, c);
    return "center" === l
      ? "left" === s ? p += c : "right" === s && (p -= c)
      : "left" === s
      ? p -= Math.max(u, d) + i
      : "right" === s && (p += Math.max(h, f) + i),
      { x: Oo(p, 0, r.width - e.width), y: Oo(g, 0, r.height - e.height) };
  }
  function Uh(t, e, n) {
    const r = Os(n.padding);
    return "center" === e
      ? t.x + t.width / 2
      : "right" === e
      ? t.x + t.width - r.right
      : t.x + r.left;
  }
  function Wh(t) {
    return jh([], zh(t));
  }
  function $h(t, e) {
    const n = e && e.dataset && e.dataset.tooltip &&
      e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
  }
  const qh = {
    beforeTitle: Na,
    title(t) {
      if (t.length > 0) {
        const e = t[0], n = e.chart.data.labels, r = n ? n.length : 0;
        if (this && this.options && "dataset" === this.options.mode) {
          return e.dataset.label || "";
        }
        if (e.label) return e.label;
        if (r > 0 && e.dataIndex < r) return n[e.dataIndex];
      }
      return "";
    },
    afterTitle: Na,
    beforeBody: Na,
    beforeLabel: Na,
    label(t) {
      if (this && this.options && "dataset" === this.options.mode) {
        return t.label + ": " + t.formattedValue || t.formattedValue;
      }
      let e = t.dataset.label || "";
      e && (e += ": ");
      const n = t.formattedValue;
      return Ba(n) || (e += n), e;
    },
    labelColor(t) {
      const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(
        t.dataIndex,
      );
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(t) {
      const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(
        t.dataIndex,
      );
      return { pointStyle: e.pointStyle, rotation: e.rotation };
    },
    afterLabel: Na,
    afterBody: Na,
    beforeFooter: Na,
    footer: Na,
    afterFooter: Na,
  };
  function Yh(t, e, n, r) {
    const i = t[e].call(n, r);
    return "undefined" === typeof i ? qh[e].call(n, r) : i;
  }
  class Qh extends Wc {
    static positioners = (() => Fh)();
    constructor(t) {
      super(),
        this.opacity = 0,
        this._active = [],
        this._eventPosition = void 0,
        this._size = void 0,
        this._cachedAnimations = void 0,
        this._tooltipItems = [],
        this.$animations = void 0,
        this.$context = void 0,
        this.chart = t.chart,
        this.options = t.options,
        this.dataPoints = void 0,
        this.title = void 0,
        this.beforeBody = void 0,
        this.body = void 0,
        this.afterBody = void 0,
        this.footer = void 0,
        this.xAlign = void 0,
        this.yAlign = void 0,
        this.x = void 0,
        this.y = void 0,
        this.height = void 0,
        this.width = void 0,
        this.caretX = void 0,
        this.caretY = void 0,
        this.labelColors = void 0,
        this.labelPointStyles = void 0,
        this.labelTextColors = void 0;
    }
    initialize(t) {
      this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        n = this.options.setContext(this.getContext()),
        r = n.enabled && e.options.animation && n.animations,
        i = new Dl(this.chart, r);
      return r._cacheable && (this._cachedAnimations = Object.freeze(i)), i;
    }
    getContext() {
      return this.$context ||
        (this.$context =
          (t = this.chart.getContext(),
            e = this,
            n = this._tooltipItems,
            As(t, { tooltip: e, tooltipItems: n, type: "tooltip" })));
      var t, e, n;
    }
    getTitle(t, e) {
      const { callbacks: n } = e,
        r = Yh(n, "beforeTitle", this, t),
        i = Yh(n, "title", this, t),
        a = Yh(n, "afterTitle", this, t);
      let o = [];
      return o = jh(o, zh(r)), o = jh(o, zh(i)), o = jh(o, zh(a)), o;
    }
    getBeforeBody(t, e) {
      return Wh(Yh(e.callbacks, "beforeBody", this, t));
    }
    getBody(t, e) {
      const { callbacks: n } = e, r = [];
      return Qa(t, (t) => {
        const e = { before: [], lines: [], after: [] }, i = $h(n, t);
        jh(e.before, zh(Yh(i, "beforeLabel", this, t))),
          jh(e.lines, Yh(i, "label", this, t)),
          jh(e.after, zh(Yh(i, "afterLabel", this, t))),
          r.push(e);
      }),
        r;
    }
    getAfterBody(t, e) {
      return Wh(Yh(e.callbacks, "afterBody", this, t));
    }
    getFooter(t, e) {
      const { callbacks: n } = e,
        r = Yh(n, "beforeFooter", this, t),
        i = Yh(n, "footer", this, t),
        a = Yh(n, "afterFooter", this, t);
      let o = [];
      return o = jh(o, zh(r)), o = jh(o, zh(i)), o = jh(o, zh(a)), o;
    }
    _createItems(t) {
      const e = this._active, n = this.chart.data, r = [], i = [], a = [];
      let o, s, l = [];
      for (o = 0, s = e.length; o < s; ++o) l.push(Nh(this.chart, e[o]));
      return t.filter && (l = l.filter((e, r, i) => t.filter(e, r, i, n))),
        t.itemSort && (l = l.sort((e, r) => t.itemSort(e, r, n))),
        Qa(l, (e) => {
          const n = $h(t.callbacks, e);
          r.push(Yh(n, "labelColor", this, e)),
            i.push(Yh(n, "labelPointStyle", this, e)),
            a.push(Yh(n, "labelTextColor", this, e));
        }),
        this.labelColors = r,
        this.labelPointStyles = i,
        this.labelTextColors = a,
        this.dataPoints = l,
        l;
    }
    update(t, e) {
      const n = this.options.setContext(this.getContext()), r = this._active;
      let i, a = [];
      if (r.length) {
        const t = Fh[n.position].call(this, r, this._eventPosition);
        a = this._createItems(n),
          this.title = this.getTitle(a, n),
          this.beforeBody = this.getBeforeBody(a, n),
          this.body = this.getBody(a, n),
          this.afterBody = this.getAfterBody(a, n),
          this.footer = this.getFooter(a, n);
        const e = this._size = Ih(this, n),
          o = Object.assign({}, t, e),
          s = Vh(this.chart, n, o),
          l = Hh(n, o, s, this.chart);
        this.xAlign = s.xAlign,
          this.yAlign = s.yAlign,
          i = {
            opacity: 1,
            x: l.x,
            y: l.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          };
      } else 0 !== this.opacity && (i = { opacity: 0 });
      this._tooltipItems = a,
        this.$context = void 0,
        i && this._resolveAnimations().update(this, i),
        t && n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
    }
    drawCaret(t, e, n, r) {
      const i = this.getCaretPosition(t, n, r);
      e.lineTo(i.x1, i.y1), e.lineTo(i.x2, i.y2), e.lineTo(i.x3, i.y3);
    }
    getCaretPosition(t, e, n) {
      const { xAlign: r, yAlign: i } = this,
        { caretSize: a, cornerRadius: o } = n,
        { topLeft: s, topRight: l, bottomLeft: c, bottomRight: u } = Rs(o),
        { x: h, y: d } = t,
        { width: f, height: p } = e;
      let g, m, b, y, v, x;
      return "center" === i
        ? (v = d + p / 2,
          "left" === r
            ? (g = h, m = g - a, y = v + a, x = v - a)
            : (g = h + f, m = g + a, y = v - a, x = v + a),
          b = g)
        : (m = "left" === r
          ? h + Math.max(s, c) + a
          : "right" === r
          ? h + f - Math.max(l, u) - a
          : this.caretX,
          "top" === i
            ? (y = d, v = y - a, g = m - a, b = m + a)
            : (y = d + p, v = y + a, g = m + a, b = m - a),
          x = y),
        { x1: g, x2: m, x3: b, y1: y, y2: v, y3: x };
    }
    drawTitle(t, e, n) {
      const r = this.title, i = r.length;
      let a, o, s;
      if (i) {
        const l = bl(n.rtl, this.x, this.width);
        for (
          t.x = Uh(this, n.titleAlign, n),
            e.textAlign = l.textAlign(n.titleAlign),
            e.textBaseline = "middle",
            a = Ds(n.titleFont),
            o = n.titleSpacing,
            e.fillStyle = n.titleColor,
            e.font = a.string,
            s = 0;
          s < i;
          ++s
        ) {
          e.fillText(r[s], l.x(t.x), t.y + a.lineHeight / 2),
            t.y += a.lineHeight + o,
            s + 1 === i && (t.y += n.titleMarginBottom - o);
        }
      }
    }
    _drawColorBox(t, e, n, r, i) {
      const a = this.labelColors[n],
        o = this.labelPointStyles[n],
        { boxHeight: s, boxWidth: l } = i,
        c = Ds(i.bodyFont),
        u = Uh(this, "left", i),
        h = r.x(u),
        d = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0,
        f = e.y + d;
      if (i.usePointStyle) {
        const e = {
            radius: Math.min(l, s) / 2,
            pointStyle: o.pointStyle,
            rotation: o.rotation,
            borderWidth: 1,
          },
          n = r.leftForLtr(h, l) + l / 2,
          c = f + s / 2;
        t.strokeStyle = i.multiKeyBackground,
          t.fillStyle = i.multiKeyBackground,
          ps(t, e, n, c),
          t.strokeStyle = a.borderColor,
          t.fillStyle = a.backgroundColor,
          ps(t, e, n, c);
      } else {
        t.lineWidth = Ha(a.borderWidth)
          ? Math.max(...Object.values(a.borderWidth))
          : a.borderWidth || 1,
          t.strokeStyle = a.borderColor,
          t.setLineDash(a.borderDash || []),
          t.lineDashOffset = a.borderDashOffset || 0;
        const e = r.leftForLtr(h, l),
          n = r.leftForLtr(r.xPlus(h, 1), l - 2),
          o = Rs(a.borderRadius);
        Object.values(o).some((t) => 0 !== t)
          ? (t.beginPath(),
            t.fillStyle = i.multiKeyBackground,
            Ss(t, { x: e, y: f, w: l, h: s, radius: o }),
            t.fill(),
            t.stroke(),
            t.fillStyle = a.backgroundColor,
            t.beginPath(),
            Ss(t, { x: n, y: f + 1, w: l - 2, h: s - 2, radius: o }),
            t.fill())
          : (t.fillStyle = i.multiKeyBackground,
            t.fillRect(e, f, l, s),
            t.strokeRect(e, f, l, s),
            t.fillStyle = a.backgroundColor,
            t.fillRect(n, f + 1, l - 2, s - 2));
      }
      t.fillStyle = this.labelTextColors[n];
    }
    drawBody(t, e, n) {
      const { body: r } = this,
        {
          bodySpacing: i,
          bodyAlign: a,
          displayColors: o,
          boxHeight: s,
          boxWidth: l,
          boxPadding: c,
        } = n,
        u = Ds(n.bodyFont);
      let h = u.lineHeight, d = 0;
      const f = bl(n.rtl, this.x, this.width),
        p = function (n) {
          e.fillText(n, f.x(t.x + d), t.y + h / 2), t.y += h + i;
        },
        g = f.textAlign(a);
      let m, b, y, v, x, w, _;
      for (
        e.textAlign = a,
          e.textBaseline = "middle",
          e.font = u.string,
          t.x = Uh(this, g, n),
          e.fillStyle = n.bodyColor,
          Qa(this.beforeBody, p),
          d = o && "right" !== g ? "center" === a ? l / 2 + c : l + 2 + c : 0,
          v = 0,
          w = r.length;
        v < w;
        ++v
      ) {
        for (
          m = r[v],
            b = this.labelTextColors[v],
            e.fillStyle = b,
            Qa(m.before, p),
            y = m.lines,
            o && y.length &&
            (this._drawColorBox(e, t, v, f, n), h = Math.max(u.lineHeight, s)),
            x = 0,
            _ = y.length;
          x < _;
          ++x
        ) p(y[x]), h = u.lineHeight;
        Qa(m.after, p);
      }
      d = 0, h = u.lineHeight, Qa(this.afterBody, p), t.y -= i;
    }
    drawFooter(t, e, n) {
      const r = this.footer, i = r.length;
      let a, o;
      if (i) {
        const s = bl(n.rtl, this.x, this.width);
        for (
          t.x = Uh(this, n.footerAlign, n),
            t.y += n.footerMarginTop,
            e.textAlign = s.textAlign(n.footerAlign),
            e.textBaseline = "middle",
            a = Ds(n.footerFont),
            e.fillStyle = n.footerColor,
            e.font = a.string,
            o = 0;
          o < i;
          ++o
        ) {
          e.fillText(r[o], s.x(t.x), t.y + a.lineHeight / 2),
            t.y += a.lineHeight + n.footerSpacing;
        }
      }
    }
    drawBackground(t, e, n, r) {
      const { xAlign: i, yAlign: a } = this,
        { x: o, y: s } = t,
        { width: l, height: c } = n,
        { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = Rs(
          r.cornerRadius,
        );
      e.fillStyle = r.backgroundColor,
        e.strokeStyle = r.borderColor,
        e.lineWidth = r.borderWidth,
        e.beginPath(),
        e.moveTo(o + u, s),
        "top" === a && this.drawCaret(t, e, n, r),
        e.lineTo(o + l - h, s),
        e.quadraticCurveTo(o + l, s, o + l, s + h),
        "center" === a && "right" === i && this.drawCaret(t, e, n, r),
        e.lineTo(o + l, s + c - f),
        e.quadraticCurveTo(o + l, s + c, o + l - f, s + c),
        "bottom" === a && this.drawCaret(t, e, n, r),
        e.lineTo(o + d, s + c),
        e.quadraticCurveTo(o, s + c, o, s + c - d),
        "center" === a && "left" === i && this.drawCaret(t, e, n, r),
        e.lineTo(o, s + u),
        e.quadraticCurveTo(o, s, o + u, s),
        e.closePath(),
        e.fill(),
        r.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart, n = this.$animations, r = n && n.x, i = n && n.y;
      if (r || i) {
        const n = Fh[t.position].call(this, this._active, this._eventPosition);
        if (!n) return;
        const a = this._size = Ih(this, t),
          o = Object.assign({}, n, this._size),
          s = Vh(e, t, o),
          l = Hh(t, o, s, e);
        r._to === l.x && i._to === l.y ||
          (this.xAlign = s.xAlign,
            this.yAlign = s.yAlign,
            this.width = a.width,
            this.height = a.height,
            this.caretX = n.x,
            this.caretY = n.y,
            this._resolveAnimations().update(this, l));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let n = this.opacity;
      if (!n) return;
      this._updateAnimationTarget(e);
      const r = { width: this.width, height: this.height },
        i = { x: this.x, y: this.y };
      n = Math.abs(n) < .001 ? 0 : n;
      const a = Os(e.padding),
        o = this.title.length || this.beforeBody.length || this.body.length ||
          this.afterBody.length || this.footer.length;
      e.enabled && o &&
        (t.save(),
          t.globalAlpha = n,
          this.drawBackground(i, t, r, e),
          yl(t, e.textDirection),
          i.y += a.top,
          this.drawTitle(i, t, e),
          this.drawBody(i, t, e),
          this.drawFooter(i, t, e),
          vl(t, e.textDirection),
          t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const n = this._active,
        r = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const r = this.chart.getDatasetMeta(e);
          if (!r) throw new Error("Cannot find a dataset at index " + e);
          return { datasetIndex: e, element: r.data[n], index: n };
        }),
        i = !Ka(n, r),
        a = this._positionChanged(r, e);
      (i || a) &&
        (this._active = r,
          this._eventPosition = e,
          this._ignoreReplayEvents = !0,
          this.update(!0));
    }
    handleEvent(t, e) {
      let n = !(arguments.length > 2 && void 0 !== arguments[2]) ||
        arguments[2];
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const r = this.options,
        i = this._active || [],
        a = this._getActiveElements(t, i, e, n),
        o = this._positionChanged(a, t),
        s = e || !Ka(a, i) || o;
      return s &&
        (this._active = a,
          (r.enabled || r.external) &&
          (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, e))),
        s;
    }
    _getActiveElements(t, e, n, r) {
      const i = this.options;
      if ("mouseout" === t.type) return [];
      if (!r) {
        return e.filter((t) =>
          this.chart.data.datasets[t.datasetIndex] &&
          void 0 !==
            this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(
              t.index,
            )
        );
      }
      const a = this.chart.getElementsAtEventForMode(t, i.mode, i, n);
      return i.reverse && a.reverse(), a;
    }
    _positionChanged(t, e) {
      const { caretX: n, caretY: r, options: i } = this,
        a = Fh[i.position].call(this, t, e);
      return !1 !== a && (n !== a.x || r !== a.y);
    }
  }
  var Kh = {
      id: "tooltip",
      _element: Qh,
      positioners: Fh,
      afterInit(t, e, n) {
        n && (t.tooltip = new Qh({ chart: t, options: n }));
      },
      beforeUpdate(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
      },
      reset(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
      },
      afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
          const n = { tooltip: e };
          if (
            !1 ===
              t.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 })
          ) return;
          e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
        }
      },
      afterEvent(t, e) {
        if (t.tooltip) {
          const n = e.replay;
          t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
        }
      },
      defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "width", "height", "caretX", "caretY"],
          },
          opacity: { easing: "linear", duration: 200 },
        },
        callbacks: qh,
      },
      defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font",
      },
      descriptors: {
        _scriptable: (t) =>
          "filter" !== t && "itemSort" !== t && "external" !== t,
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: "animation" },
      },
      additionalOptionScopes: ["interaction"],
    },
    Xh = Object.freeze({
      __proto__: null,
      Colors: oh,
      Decimation: ch,
      Filler: Eh,
      Legend: Rh,
      SubTitle: Ah,
      Title: Dh,
      Tooltip: Kh,
    });
  function Jh(t, e, n, r) {
    const i = t.indexOf(e);
    if (-1 === i) {
      return ((
        t,
        e,
        n,
        r,
      ) => ("string" === typeof e
        ? (n = t.push(e) - 1, r.unshift({ index: n, label: e }))
        : isNaN(e) && (n = null),
        n))(t, e, n, r);
    }
    return i !== t.lastIndexOf(e) ? n : i;
  }
  function Gh(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  class Zh extends tu {
    static id = "category";
    static defaults = (() => ({ ticks: { callback: Gh } }))();
    constructor(t) {
      super(t),
        this._startValue = void 0,
        this._valueRange = 0,
        this._addedLabels = [];
    }
    init(t) {
      const e = this._addedLabels;
      if (e.length) {
        const t = this.getLabels();
        for (const { index: n, label: r } of e) t[n] === r && t.splice(n, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (Ba(t)) return null;
      const n = this.getLabels();
      return ((t, e) => null === t ? null : Oo(Math.round(t), 0, e))(
        e = isFinite(e) && n[e] === t
          ? e
          : Jh(n, t, $a(e, t), this._addedLabels),
        n.length - 1,
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let { min: n, max: r } = this.getMinMax(!0);
      "ticks" === this.options.bounds &&
      (t || (n = 0), e || (r = this.getLabels().length - 1)),
        this.min = n,
        this.max = r;
    }
    buildTicks() {
      const t = this.min, e = this.max, n = this.options.offset, r = [];
      let i = this.getLabels();
      i = 0 === t && e === i.length - 1 ? i : i.slice(t, e + 1),
        this._valueRange = Math.max(i.length - (n ? 0 : 1), 1),
        this._startValue = this.min - (n ? .5 : 0);
      for (let a = t; a <= e; a++) r.push({ value: a });
      return r;
    }
    getLabelForValue(t) {
      return Gh.call(this, t);
    }
    configure() {
      super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
      return "number" !== typeof t && (t = this.parse(t)),
        null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1
        ? null
        : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
      return Math.round(
        this._startValue + this.getDecimalForPixel(t) * this._valueRange,
      );
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  function td(t, e) {
    const n = [],
      {
        bounds: r,
        step: i,
        min: a,
        max: o,
        precision: s,
        count: l,
        maxTicks: c,
        maxDigits: u,
        includeBounds: h,
      } = t,
      d = i || 1,
      f = c - 1,
      { min: p, max: g } = e,
      m = !Ba(a),
      b = !Ba(o),
      y = !Ba(l),
      v = (g - p) / (u + 1);
    let x, w, _, k, S = xo((g - p) / f / d) * d;
    if (S < 1e-14 && !m && !b) return [{ value: p }, { value: g }];
    k = Math.ceil(g / S) - Math.floor(p / S),
      k > f && (S = xo(k * S / f / d) * d),
      Ba(s) || (x = Math.pow(10, s), S = Math.ceil(S * x) / x),
      "ticks" === r
        ? (w = Math.floor(p / S) * S, _ = Math.ceil(g / S) * S)
        : (w = p, _ = g),
      m && b && i && function (t, e) {
          const n = Math.round(t);
          return n - e <= t && n + e >= t;
        }((o - a) / i, S / 1e3)
        ? (k = Math.round(Math.min((o - a) / S, c)),
          S = (o - a) / k,
          w = a,
          _ = o)
        : y
        ? (w = m ? a : w, _ = b ? o : _, k = l - 1, S = (_ - w) / k)
        : (k = (_ - w) / S,
          k = vo(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
    const M = Math.max(Mo(S), Mo(w));
    x = Math.pow(10, Ba(s) ? M : s),
      w = Math.round(w * x) / x,
      _ = Math.round(_ * x) / x;
    let E = 0;
    for (
      m &&
      (h && w !== a
        ? (n.push({ value: a }),
          w < a && E++,
          vo(Math.round((w + E * S) * x) / x, a, ed(a, v, t)) && E++)
        : w < a && E++);
      E < k;
      ++E
    ) {
      const t = Math.round((w + E * S) * x) / x;
      if (b && t > o) break;
      n.push({ value: t });
    }
    return b && h && _ !== o
      ? n.length && vo(n[n.length - 1].value, o, ed(o, v, t))
        ? n[n.length - 1].value = o
        : n.push({ value: o })
      : b && _ !== o || n.push({ value: _ }),
      n;
  }
  function ed(t, e, n) {
    let { horizontal: r, minRotation: i } = n;
    const a = ko(i),
      o = (r ? Math.sin(a) : Math.cos(a)) || .001,
      s = .75 * e * ("" + t).length;
    return Math.min(e / o, s);
  }
  class nd extends tu {
    constructor(t) {
      super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._endValue = void 0,
        this._valueRange = 0;
    }
    parse(t, e) {
      return Ba(t) ||
          ("number" === typeof t || t instanceof Number) && !isFinite(+t)
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: n } = this.getUserBounds();
      let { min: r, max: i } = this;
      const a = (t) => r = e ? r : t, o = (t) => i = n ? i : t;
      if (t) {
        const t = yo(r), e = yo(i);
        t < 0 && e < 0 ? o(0) : t > 0 && e > 0 && a(0);
      }
      if (r === i) {
        let e = 0 === i ? 1 : Math.abs(.05 * i);
        o(i + e), t || a(r - e);
      }
      this.min = r, this.max = i;
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e, { maxTicksLimit: n, stepSize: r } = t;
      return r
        ? (e = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1,
          e > 1e3 &&
          (console.warn(
            `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${e} ticks. Limiting to 1000.`,
          ),
            e = 1e3))
        : (e = this.computeTickLimit(), n = n || 11),
        n && (e = Math.min(n, e)),
        e;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options, e = t.ticks;
      let n = this.getTickLimit();
      n = Math.max(2, n);
      const r = td({
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: !1 !== e.includeBounds,
      }, this._range || this);
      return "ticks" === t.bounds && _o(r, this, "value"),
        t.reverse
          ? (r.reverse(), this.start = this.max, this.end = this.min)
          : (this.start = this.min, this.end = this.max),
        r;
    }
    configure() {
      const t = this.ticks;
      let e = this.min, n = this.max;
      if (super.configure(), this.options.offset && t.length) {
        const r = (n - e) / Math.max(t.length - 1, 1) / 2;
        e -= r, n += r;
      }
      this._startValue = e, this._endValue = n, this._valueRange = n - e;
    }
    getLabelForValue(t) {
      return es(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class rd extends nd {
    static id = "linear";
    static defaults =
      (() => ({ ticks: { callback: rs.formatters.numeric } }))();
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      this.min = Ua(t) ? t : 0,
        this.max = Ua(e) ? e : 1,
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        n = ko(this.options.ticks.minRotation),
        r = (t ? Math.sin(n) : Math.cos(n)) || .001,
        i = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, i.lineHeight / r));
    }
    getPixelForValue(t) {
      return null === t
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  const id = (t) => Math.floor(bo(t)), ad = (t, e) => Math.pow(10, id(t) + e);
  function od(t) {
    return 1 === t / Math.pow(10, id(t));
  }
  function sd(t, e, n) {
    const r = Math.pow(10, n), i = Math.floor(t / r);
    return Math.ceil(e / r) - i;
  }
  function ld(t, e) {
    let { min: n, max: r } = e;
    n = Wa(t.min, n);
    const i = [], a = id(n);
    let o = function (t, e) {
        let n = id(e - t);
        for (; sd(t, e, n) > 10;) n++;
        for (; sd(t, e, n) < 10;) n--;
        return Math.min(n, id(t));
      }(n, r),
      s = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const l = Math.pow(10, o),
      c = a > o ? Math.pow(10, a) : 0,
      u = Math.round((n - c) * s) / s,
      h = Math.floor((n - c) / l / 10) * l * 10;
    let d = Math.floor((u - h) / Math.pow(10, o)),
      f = Wa(t.min, Math.round((c + h + d * Math.pow(10, o)) * s) / s);
    for (; f < r;) {
      i.push({ value: f, major: od(f), significand: d }),
        d >= 10 ? d = d < 15 ? 15 : 20 : d++,
        d >= 20 && (o++, d = 2, s = o >= 0 ? 1 : s),
        f = Math.round((c + h + d * Math.pow(10, o)) * s) / s;
    }
    const p = Wa(t.max, f);
    return i.push({ value: p, major: od(p), significand: d }), i;
  }
  class cd extends tu {
    static id = "logarithmic";
    static defaults = (() => ({
      ticks: { callback: rs.formatters.logarithmic, major: { enabled: !0 } },
    }))();
    constructor(t) {
      super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._valueRange = 0;
    }
    parse(t, e) {
      const n = nd.prototype.parse.apply(this, [t, e]);
      if (0 !== n) return Ua(n) && n > 0 ? n : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      this.min = Ua(t) ? Math.max(0, t) : null,
        this.max = Ua(e) ? Math.max(0, e) : null,
        this.options.beginAtZero && (this._zero = !0),
        this._zero && this.min !== this._suggestedMin && !Ua(this._userMin) &&
        (this.min = t === ad(this.min, 0) ? ad(this.min, -1) : ad(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let n = this.min, r = this.max;
      const i = (e) => n = t ? n : e, a = (t) => r = e ? r : t;
      n === r && (n <= 0 ? (i(1), a(10)) : (i(ad(n, -1)), a(ad(r, 1)))),
        n <= 0 && i(ad(r, -1)),
        r <= 0 && a(ad(n, 1)),
        this.min = n,
        this.max = r;
    }
    buildTicks() {
      const t = this.options,
        e = ld({ min: this._userMin, max: this._userMax }, this);
      return "ticks" === t.bounds && _o(e, this, "value"),
        t.reverse
          ? (e.reverse(), this.start = this.max, this.end = this.min)
          : (this.start = this.min, this.end = this.max),
        e;
    }
    getLabelForValue(t) {
      return void 0 === t
        ? "0"
        : es(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(),
        this._startValue = bo(t),
        this._valueRange = bo(this.max) - bo(t);
    }
    getPixelForValue(t) {
      return void 0 !== t && 0 !== t || (t = this.min),
        null === t || isNaN(t) ? NaN : this.getPixelForDecimal(
          t === this.min ? 0 : (bo(t) - this._startValue) / this._valueRange,
        );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function ud(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = Os(e.backdropPadding);
      return $a(e.font && e.font.size, cs.font.size) + t.height;
    }
    return 0;
  }
  function hd(t, e, n, r, i) {
    return t === r || t === i
      ? { start: e - n / 2, end: e + n / 2 }
      : t < r || t > i
      ? { start: e - n, end: e }
      : { start: e, end: e + n };
  }
  function dd(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      n = Object.assign({}, e),
      r = [],
      i = [],
      a = t._pointLabels.length,
      o = t.options.pointLabels,
      s = o.centerPointLabels ? lo / a : 0;
    for (let h = 0; h < a; h++) {
      const a = o.setContext(t.getPointLabelContext(h));
      i[h] = a.padding;
      const d = t.getPointPosition(h, t.drawingArea + i[h], s),
        f = Ds(a.font),
        p =
          (l = t.ctx,
            c = f,
            u = Va(u = t._pointLabels[h]) ? u : [u],
            { w: hs(l, c.string, u), h: u.length * c.lineHeight });
      r[h] = p;
      const g = To(t.getIndexAngle(h) + s), m = Math.round(So(g));
      fd(n, e, g, hd(m, d.x, p.w, 0, 180), hd(m, d.y, p.h, 90, 270));
    }
    var l, c, u;
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
      t._pointLabelItems = function (t, e, n) {
        const r = [],
          i = t._pointLabels.length,
          a = t.options,
          { centerPointLabels: o, display: s } = a.pointLabels,
          l = { extra: ud(a) / 2, additionalAngle: o ? lo / i : 0 };
        let c;
        for (let u = 0; u < i; u++) {
          l.padding = n[u], l.size = e[u];
          const i = pd(t, u, l);
          r.push(i),
            "auto" === s && (i.visible = gd(i, c), i.visible && (c = i));
        }
        return r;
      }(t, r, i);
  }
  function fd(t, e, n, r, i) {
    const a = Math.abs(Math.sin(n)), o = Math.abs(Math.cos(n));
    let s = 0, l = 0;
    r.start < e.l
      ? (s = (e.l - r.start) / a, t.l = Math.min(t.l, e.l - s))
      : r.end > e.r && (s = (r.end - e.r) / a, t.r = Math.max(t.r, e.r + s)),
      i.start < e.t
        ? (l = (e.t - i.start) / o, t.t = Math.min(t.t, e.t - l))
        : i.end > e.b && (l = (i.end - e.b) / o, t.b = Math.max(t.b, e.b + l));
  }
  function pd(t, e, n) {
    const r = t.drawingArea,
      { extra: i, additionalAngle: a, padding: o, size: s } = n,
      l = t.getPointPosition(e, r + i + o, a),
      c = Math.round(So(To(l.angle + po))),
      u = function (t, e, n) {
        90 === n || 270 === n ? t -= e / 2 : (n > 270 || n < 90) && (t -= e);
        return t;
      }(l.y, s.h, c),
      h = function (t) {
        if (0 === t || 180 === t) return "center";
        if (t < 180) return "left";
        return "right";
      }(c),
      d = function (t, e, n) {
        "right" === n ? t -= e : "center" === n && (t -= e / 2);
        return t;
      }(l.x, s.w, h);
    return {
      visible: !0,
      x: l.x,
      y: u,
      textAlign: h,
      left: d,
      top: u,
      right: d + s.w,
      bottom: u + s.h,
    };
  }
  function gd(t, e) {
    if (!e) return !0;
    const { left: n, top: r, right: i, bottom: a } = t;
    return !(ms({ x: n, y: r }, e) || ms({ x: n, y: a }, e) ||
      ms({ x: i, y: r }, e) || ms({ x: i, y: a }, e));
  }
  function md(t, e, n) {
    const { left: r, top: i, right: a, bottom: o } = n,
      { backdropColor: s } = e;
    if (!Ba(s)) {
      const n = Rs(e.borderRadius), l = Os(e.backdropPadding);
      t.fillStyle = s;
      const c = r - l.left,
        u = i - l.top,
        h = a - r + l.width,
        d = o - i + l.height;
      Object.values(n).some((t) => 0 !== t)
        ? (t.beginPath(),
          Ss(t, { x: c, y: u, w: h, h: d, radius: n }),
          t.fill())
        : t.fillRect(c, u, h, d);
    }
  }
  function bd(t, e, n, r) {
    const { ctx: i } = t;
    if (n) i.arc(t.xCenter, t.yCenter, e, 0, co);
    else {
      let n = t.getPointPosition(0, e);
      i.moveTo(n.x, n.y);
      for (let a = 1; a < r; a++) {
        n = t.getPointPosition(a, e), i.lineTo(n.x, n.y);
      }
    }
  }
  class yd extends nd {
    static id = "radialLinear";
    static defaults = (() => ({
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: rs.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback: (t) => t,
        padding: 5,
        centerPointLabels: !1,
      },
    }))();
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color",
    };
    static descriptors = { angleLines: { _fallback: "grid" } };
    constructor(t) {
      super(t),
        this.xCenter = void 0,
        this.yCenter = void 0,
        this.drawingArea = void 0,
        this._pointLabels = [],
        this._pointLabelItems = [];
    }
    setDimensions() {
      const t = this._padding = Os(ud(this.options) / 2),
        e = this.width = this.maxWidth - t.width,
        n = this.height = this.maxHeight - t.height;
      this.xCenter = Math.floor(this.left + e / 2 + t.left),
        this.yCenter = Math.floor(this.top + n / 2 + t.top),
        this.drawingArea = Math.floor(Math.min(e, n) / 2);
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      this.min = Ua(t) && !isNaN(t) ? t : 0,
        this.max = Ua(e) && !isNaN(e) ? e : 0,
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / ud(this.options));
    }
    generateTickLabels(t) {
      nd.prototype.generateTickLabels.call(this, t),
        this._pointLabels = this.getLabels().map((t, e) => {
          const n = Ya(this.options.pointLabels.callback, [t, e], this);
          return n || 0 === n ? n : "";
        }).filter((t, e) => this.chart.getDataVisibility(e));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? dd(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, n, r) {
      this.xCenter += Math.floor((t - e) / 2),
        this.yCenter += Math.floor((n - r) / 2),
        this.drawingArea -= Math.min(
          this.drawingArea / 2,
          Math.max(t, e, n, r),
        );
    }
    getIndexAngle(t) {
      return To(
        t * (co / (this._pointLabels.length || 1)) +
          ko(this.options.startAngle || 0),
      );
    }
    getDistanceFromCenterForValue(t) {
      if (Ba(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (Ba(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return function (t, e, n) {
          return As(t, { label: n, index: e, type: "pointLabel" });
        }(this.getContext(), t, n);
      }
    }
    getPointPosition(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : 0;
      const r = this.getIndexAngle(t) - po + n;
      return {
        x: Math.cos(r) * e + this.xCenter,
        y: Math.sin(r) * e + this.yCenter,
        angle: r,
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: n, right: r, bottom: i } = this._pointLabelItems[t];
      return { left: e, top: n, right: r, bottom: i };
    }
    drawBackground() {
      const { backgroundColor: t, grid: { circular: e } } = this.options;
      if (t) {
        const n = this.ctx;
        n.save(),
          n.beginPath(),
          bd(
            this,
            this.getDistanceFromCenterForValue(this._endValue),
            e,
            this._pointLabels.length,
          ),
          n.closePath(),
          n.fillStyle = t,
          n.fill(),
          n.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        { angleLines: n, grid: r, border: i } = e,
        a = this._pointLabels.length;
      let o, s, l;
      if (
        e.pointLabels.display && function (t, e) {
          const { ctx: n, options: { pointLabels: r } } = t;
          for (let i = e - 1; i >= 0; i--) {
            const e = t._pointLabelItems[i];
            if (!e.visible) continue;
            const a = r.setContext(t.getPointLabelContext(i));
            md(n, a, e);
            const o = Ds(a.font), { x: s, y: l, textAlign: c } = e;
            ks(n, t._pointLabels[i], s, l + o.lineHeight / 2, o, {
              color: a.color,
              textAlign: c,
              textBaseline: "middle",
            });
          }
        }(this, a),
          r.display && this.ticks.forEach((t, e) => {
            if (0 !== e || 0 === e && this.min < 0) {
              s = this.getDistanceFromCenterForValue(t.value);
              const n = this.getContext(e),
                o = r.setContext(n),
                l = i.setContext(n);
              !function (t, e, n, r, i) {
                const a = t.ctx, o = e.circular, { color: s, lineWidth: l } = e;
                !o && !r || !s || !l || n < 0 ||
                  (a.save(),
                    a.strokeStyle = s,
                    a.lineWidth = l,
                    a.setLineDash(i.dash),
                    a.lineDashOffset = i.dashOffset,
                    a.beginPath(),
                    bd(t, n, o, r),
                    a.closePath(),
                    a.stroke(),
                    a.restore());
              }(this, o, s, a, l);
            }
          }),
          n.display
      ) {
        for (t.save(), o = a - 1; o >= 0; o--) {
          const r = n.setContext(this.getPointLabelContext(o)),
            { color: i, lineWidth: a } = r;
          a && i &&
            (t.lineWidth = a,
              t.strokeStyle = i,
              t.setLineDash(r.borderDash),
              t.lineDashOffset = r.borderDashOffset,
              s = this.getDistanceFromCenterForValue(
                e.reverse ? this.min : this.max,
              ),
              l = this.getPointPosition(o, s),
              t.beginPath(),
              t.moveTo(this.xCenter, this.yCenter),
              t.lineTo(l.x, l.y),
              t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx, e = this.options, n = e.ticks;
      if (!n.display) return;
      const r = this.getIndexAngle(0);
      let i, a;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(r),
        t.textAlign = "center",
        t.textBaseline = "middle",
        this.ticks.forEach((r, o) => {
          if (0 === o && this.min >= 0 && !e.reverse) return;
          const s = n.setContext(this.getContext(o)), l = Ds(s.font);
          if (
            i = this.getDistanceFromCenterForValue(this.ticks[o].value),
              s.showLabelBackdrop
          ) {
            t.font = l.string,
              a = t.measureText(r.label).width,
              t.fillStyle = s.backdropColor;
            const e = Os(s.backdropPadding);
            t.fillRect(
              -a / 2 - e.left,
              -i - l.size / 2 - e.top,
              a + e.width,
              l.size + e.height,
            );
          }
          ks(t, r.label, 0, -i, l, {
            color: s.color,
            strokeColor: s.textStrokeColor,
            strokeWidth: s.textStrokeWidth,
          });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  const vd = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    xd = Object.keys(vd);
  function wd(t, e) {
    return t - e;
  }
  function _d(t, e) {
    if (Ba(e)) return null;
    const n = t._adapter, { parser: r, round: i, isoWeekday: a } = t._parseOpts;
    let o = e;
    return "function" === typeof r && (o = r(o)),
      Ua(o) || (o = "string" === typeof r ? n.parse(o, r) : n.parse(o)),
      null === o
        ? null
        : (i && (o = "week" !== i || !wo(a) && !0 !== a
          ? n.startOf(o, i)
          : n.startOf(o, "isoWeek", a)),
          +o);
  }
  function kd(t, e, n, r) {
    const i = xd.length;
    for (let a = xd.indexOf(t); a < i - 1; ++a) {
      const t = vd[xd[a]], i = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((n - e) / (i * t.size)) <= r) return xd[a];
    }
    return xd[i - 1];
  }
  function Sd(t, e, n) {
    if (n) {
      if (n.length) {
        const { lo: r, hi: i } = Lo(n, e);
        t[n[r] >= e ? n[r] : n[i]] = !0;
      }
    } else t[e] = !0;
  }
  function Md(t, e, n) {
    const r = [], i = {}, a = e.length;
    let o, s;
    for (o = 0; o < a; ++o) s = e[o], i[s] = o, r.push({ value: s, major: !1 });
    return 0 !== a && n
      ? function (t, e, n, r) {
        const i = t._adapter,
          a = +i.startOf(e[0].value, r),
          o = e[e.length - 1].value;
        let s, l;
        for (s = a; s <= o; s = +i.add(s, 1, r)) {l = n[s],
            l >= 0 && (e[l].major = !0);}
        return e;
      }(t, r, i, n)
      : r;
  }
  class Ed extends tu {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
      },
      ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
    };
    constructor(t) {
      super(t),
        this._cache = { data: [], labels: [], all: [] },
        this._unit = "day",
        this._majorUnit = void 0,
        this._offsets = {},
        this._normalized = !1,
        this._parseOpts = void 0;
    }
    init(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : {};
      const n = t.time || (t.time = {}),
        r = this._adapter = new oc(t.adapters.date);
      r.init(e),
        to(n.displayFormats, r.formats()),
        this._parseOpts = {
          parser: n.parser,
          round: n.round,
          isoWeekday: n.isoWeekday,
        },
        super.init(t),
        this._normalized = e.normalized;
    }
    parse(t, e) {
      return void 0 === t ? null : _d(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), this._cache = { data: [], labels: [], all: [] };
    }
    determineDataLimits() {
      const t = this.options, e = this._adapter, n = t.time.unit || "day";
      let { min: r, max: i, minDefined: a, maxDefined: o } = this
        .getUserBounds();
      function s(t) {
        a || isNaN(t.min) || (r = Math.min(r, t.min)),
          o || isNaN(t.max) || (i = Math.max(i, t.max));
      }
      a && o ||
      (s(this._getLabelBounds()),
        "ticks" === t.bounds && "labels" === t.ticks.source ||
        s(this.getMinMax(!1))),
        r = Ua(r) && !isNaN(r) ? r : +e.startOf(Date.now(), n),
        i = Ua(i) && !isNaN(i) ? i : +e.endOf(Date.now(), n) + 1,
        this.min = Math.min(r, i - 1),
        this.max = Math.max(r + 1, i);
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
      return t.length && (e = t[0], n = t[t.length - 1]), { min: e, max: n };
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        n = t.ticks,
        r = "labels" === n.source
          ? this.getLabelTimestamps()
          : this._generate();
      "ticks" === t.bounds && r.length &&
        (this.min = this._userMin || r[0],
          this.max = this._userMax || r[r.length - 1]);
      const i = this.min,
        a = function (t, e, n) {
          let r = 0, i = t.length;
          for (; r < i && t[r] < e;) r++;
          for (; i > r && t[i - 1] > n;) i--;
          return r > 0 || i < t.length ? t.slice(r, i) : t;
        }(r, i, this.max);
      return this._unit = e.unit ||
        (n.autoSkip
          ? kd(e.minUnit, this.min, this.max, this._getLabelCapacity(i))
          : function (t, e, n, r, i) {
            for (let a = xd.length - 1; a >= xd.indexOf(n); a--) {
              const n = xd[a];
              if (vd[n].common && t._adapter.diff(i, r, n) >= e - 1) return n;
            }
            return xd[n ? xd.indexOf(n) : 0];
          }(this, a.length, e.minUnit, this.min, this.max)),
        this._majorUnit = n.major.enabled && "year" !== this._unit
          ? function (t) {
            for (let e = xd.indexOf(t) + 1, n = xd.length; e < n; ++e) {
              if (vd[xd[e]].common) return xd[e];
            }
          }(this._unit)
          : void 0,
        this.initOffsets(r),
        t.reverse && a.reverse(),
        Md(this, a, this._majorUnit);
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip &&
        this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets() {
      let t,
        e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = 0,
        i = 0;
      this.options.offset && n.length &&
        (t = this.getDecimalForValue(n[0]),
          r = 1 === n.length ? 1 - t : (this.getDecimalForValue(n[1]) - t) / 2,
          e = this.getDecimalForValue(n[n.length - 1]),
          i = 1 === n.length
            ? e
            : (e - this.getDecimalForValue(n[n.length - 2])) / 2);
      const a = n.length < 3 ? .5 : .25;
      r = Oo(r, 0, a),
        i = Oo(i, 0, a),
        this._offsets = { start: r, end: i, factor: 1 / (r + 1 + i) };
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        n = this.max,
        r = this.options,
        i = r.time,
        a = i.unit || kd(i.minUnit, e, n, this._getLabelCapacity(e)),
        o = $a(r.ticks.stepSize, 1),
        s = "week" === a && i.isoWeekday,
        l = wo(s) || !0 === s,
        c = {};
      let u, h, d = e;
      if (
        l && (d = +t.startOf(d, "isoWeek", s)),
          d = +t.startOf(d, l ? "day" : a),
          t.diff(n, e, a) > 1e5 * o
      ) {
        throw new Error(
          e + " and " + n + " are too far apart with stepSize of " + o + " " +
            a,
        );
      }
      const f = "data" === r.ticks.source && this.getDataTimestamps();
      for (u = d, h = 0; u < n; u = +t.add(u, o, a), h++) Sd(c, u, f);
      return u !== n && "ticks" !== r.bounds && 1 !== h || Sd(c, u, f),
        Object.keys(c).sort(wd).map((t) => +t);
    }
    getLabelForValue(t) {
      const e = this._adapter, n = this.options.time;
      return n.tooltipFormat
        ? e.format(t, n.tooltipFormat)
        : e.format(t, n.displayFormats.datetime);
    }
    format(t, e) {
      const n = this.options.time.displayFormats, r = this._unit, i = e || n[r];
      return this._adapter.format(t, i);
    }
    _tickFormatFunction(t, e, n, r) {
      const i = this.options, a = i.ticks.callback;
      if (a) return Ya(a, [t, e, n], this);
      const o = i.time.displayFormats,
        s = this._unit,
        l = this._majorUnit,
        c = s && o[s],
        u = l && o[l],
        h = n[e],
        d = l && u && h && h.major;
      return this._adapter.format(t, r || (d ? u : c));
    }
    generateTickLabels(t) {
      let e, n, r;
      for (e = 0, n = t.length; e < n; ++e) {
        r = t[e], r.label = this._tickFormatFunction(r.value, e, t);
      }
    }
    getDecimalForValue(t) {
      return null === t ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets, n = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + n) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + n * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        n = this.ctx.measureText(t).width,
        r = ko(this.isHorizontal() ? e.maxRotation : e.minRotation),
        i = Math.cos(r),
        a = Math.sin(r),
        o = this._resolveTickFontOptions(0).size;
      return { w: n * i + o * a, h: n * a + o * i };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        n = e.displayFormats,
        r = n[e.unit] || n.millisecond,
        i = this._tickFormatFunction(t, 0, Md(this, [t], this._majorUnit), r),
        a = this._getLabelSize(i),
        o = Math.floor(
          this.isHorizontal() ? this.width / a.w : this.height / a.h,
        ) - 1;
      return o > 0 ? o : 1;
    }
    getDataTimestamps() {
      let t, e, n = this._cache.data || [];
      if (n.length) return n;
      const r = this.getMatchingVisibleMetas();
      if (this._normalized && r.length) {
        return this._cache.data = r[0].controller.getAllParsedValues(this);
      }
      for (t = 0, e = r.length; t < e; ++t) {
        n = n.concat(r[t].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(n);
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, n;
      if (t.length) return t;
      const r = this.getLabels();
      for (e = 0, n = r.length; e < n; ++e) t.push(_d(this, r[e]));
      return this._cache.labels = this._normalized ? t : this.normalize(t);
    }
    normalize(t) {
      return No(t.sort(wd));
    }
  }
  function Cd(t, e, n) {
    let r, i, a, o, s = 0, l = t.length - 1;
    n
      ? (e >= t[s].pos && e <= t[l].pos && ({ lo: s, hi: l } = Ao(t, "pos", e)),
        ({ pos: r, time: a } = t[s]),
        ({ pos: i, time: o } = t[l]))
      : (e >= t[s].time && e <= t[l].time &&
        ({ lo: s, hi: l } = Ao(t, "time", e)),
        ({ time: r, pos: a } = t[s]),
        ({ time: i, pos: o } = t[l]));
    const c = i - r;
    return c ? a + (o - a) * (e - r) / c : a;
  }
  class Pd extends Ed {
    static id = "timeseries";
    static defaults = (() => Ed.defaults)();
    constructor(t) {
      super(t),
        this._table = [],
        this._minPos = void 0,
        this._tableRange = void 0;
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = this._table = this.buildLookupTable(t);
      this._minPos = Cd(e, this.min),
        this._tableRange = Cd(e, this.max) - this._minPos,
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const { min: e, max: n } = this, r = [], i = [];
      let a, o, s, l, c;
      for (a = 0, o = t.length; a < o; ++a) {
        l = t[a], l >= e && l <= n && r.push(l);
      }
      if (r.length < 2) return [{ time: e, pos: 0 }, { time: n, pos: 1 }];
      for (a = 0, o = r.length; a < o; ++a) {
        c = r[a + 1],
          s = r[a - 1],
          l = r[a],
          Math.round((c + s) / 2) !== l &&
          i.push({ time: l, pos: a / (o - 1) });
      }
      return i;
    }
    _generate() {
      const t = this.min, e = this.max;
      let n = super.getDataTimestamps();
      return n.includes(t) && n.length || n.splice(0, 0, t),
        n.includes(e) && 1 !== n.length || n.push(e),
        n.sort((t, e) => t - e);
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const e = this.getDataTimestamps(), n = this.getLabelTimestamps();
      return t = e.length && n.length
        ? this.normalize(e.concat(n))
        : e.length
        ? e
        : n,
        t = this._cache.all = t,
        t;
    }
    getDecimalForValue(t) {
      return (Cd(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return Cd(this._table, n * this._tableRange + this._minPos, !0);
    }
  }
  const Td = [
      rc,
      Zu,
      Xh,
      Object.freeze({
        __proto__: null,
        CategoryScale: Zh,
        LinearScale: rd,
        LogarithmicScale: cd,
        RadialLinearScale: yd,
        TimeScale: Ed,
        TimeSeriesScale: Pd,
      }),
    ],
    Rd = "label";
  function Od(t, e) {
    "function" === typeof t ? t(e) : t && (t.current = e);
  }
  function Dd(t, e) {
    t.labels = e;
  }
  function Ld(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rd;
    const r = [];
    t.datasets = e.map((e) => {
      const i = t.datasets.find((t) => t[n] === e[n]);
      return i && e.data && !r.includes(i)
        ? (r.push(i), Object.assign(i, e), i)
        : { ...e };
    });
  }
  function Ad(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rd;
    const n = { labels: [], datasets: [] };
    return Dd(n, t.labels), Ld(n, t.datasets, e), n;
  }
  function Fd(t, e) {
    const {
        height: n = 150,
        width: r = 300,
        redraw: a = !1,
        datasetIdKey: o,
        type: s,
        data: l,
        options: c,
        plugins: u = [],
        fallbackContent: h,
        updateMode: d,
        ...f
      } = t,
      p = (0, i.useRef)(null),
      g = (0, i.useRef)(),
      m = () => {
        p.current &&
          (g.current = new Ou(p.current, {
            type: s,
            data: Ad(l, o),
            options: c && { ...c },
            plugins: u,
          }),
            Od(e, g.current));
      },
      b = () => {
        Od(e, null), g.current && (g.current.destroy(), g.current = null);
      };
    return (0, i.useEffect)(() => {
      !a && g.current && c && function (t, e) {
        const n = t.options;
        n && e && Object.assign(n, e);
      }(g.current, c);
    }, [a, c]),
      (0, i.useEffect)(() => {
        !a && g.current && Dd(g.current.config.data, l.labels);
      }, [a, l.labels]),
      (0, i.useEffect)(() => {
        !a && g.current && l.datasets &&
          Ld(g.current.config.data, l.datasets, o);
      }, [a, l.datasets]),
      (0, i.useEffect)(() => {
        g.current && (a ? (b(), setTimeout(m)) : g.current.update(d));
      }, [a, c, l.labels, l.datasets, d]),
      (0, i.useEffect)(() => {
        g.current && (b(), setTimeout(m));
      }, [s]),
      (0, i.useEffect)(() => (m(), () => b()), []),
      i.createElement(
        "canvas",
        Object.assign({ ref: p, role: "img", height: n, width: r }, f),
        h,
      );
  }
  const jd = (0, i.forwardRef)(Fd);
  function zd(t, e) {
    return Ou.register(e),
      (0, i.forwardRef)(
        (e, n) =>
          i.createElement(jd, Object.assign({}, e, { ref: n, type: t })),
      );
  }
  const Nd = zd("line", ec), Id = zd("bar", Zl);
  Ou.register(...Td);
  let Bd = "/trancer-proxy?url=/data";
  window.location.host.includes("localhost") &&
    (Bd = "https://discord.dawn.rest/data");
  const Vd = {
    minute: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+/,
    hour: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+/,
    day: /[0-9]+\/[0-9]+\/[0-9]+/,
    month: /[0-9]+\/[0-9]+/,
  };
  function Hd() {
    const [t, e] = (0, i.useState)("about"),
      [n, r] = (0, i.useState)({}),
      [a, o] = (0, i.useState)({ messages: "month", memberCount: "day" }),
      [c, u] = (0, i.useState)(null);
    async function h(t) {
      switch (e(t), "about" === t || n.usernames || await p("usernames"), t) {
        case "leaderboards":
          await p("economy"), await p("user_data");
          break;
        case "bot":
          await p("command_usage");
          break;
        case "server":
          await p("member_count"), await p("messages");
      }
    }
    async function p(t) {
      try {
        let e = (await ia.get(`${Bd}/${t}`, {
          headers: {
            Authorization: window.localStorage.getItem("trancer_auth"),
          },
        })).data.data;
        r((n) => ({ ...n, [t]: e }));
      } catch (qd) {
        e =
          `Failed to load ${t}: Are you missing the auth code? Run .site in Trancy Twilight.`,
          jn({
            title: "Error!",
            body: (0, s.jsx)("label", { children: e }),
            buttons: [{ id: "ok", text: "OK!", click: (t) => t() }],
          });
      }
      var e;
    }
    function v(t) {
      var e;
      return (null === n || void 0 === n || null === (e = n.usernames) ||
          void 0 === e
        ? void 0
        : e[t]) || t;
    }
    return (0, i.useEffect)(() => {
      const t = window.location.hash;
      if (window.location.search) {
        const t = window.location.search.match(/auth=[a-z]+/);
        t &&
          window.localStorage.setItem(
            "trancer_auth",
            t[0].replace("auth=", ""),
          );
      }
      h(t ? t.replace("#", "") : "about");
    }, []),
      (0, s.jsxs)(m, {
        children: [
          (0, s.jsx)(f, {
            title: (0, s.jsx)(d, {
              type: "heading",
              children: {
                about: "About Trancer",
                leaderboards: "Leaderboards",
                bot: "Bot Details",
                server: "Trancy Twilight Details (GMT)",
              }[t],
            }),
            children: ["About", "Leaderboards", "User Data", "Server", "Bot"]
              .map((t) =>
                (0, s.jsx)(l, {
                  onClick: () => h(t.toLowerCase().replace(/ /g, "-")),
                  href: `#${t.toLowerCase().replace(/ /g, "-")}`,
                  children: t,
                }, t)
              ),
          }),
          (0, s.jsx)(g, {
            children: {
              about: (0, s.jsx)(s.Fragment, {}),
              leaderboards: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(d, {
                    children: [
                      "Search:",
                      " ",
                      (0, s.jsx)("input", {
                        onChange: (t) => u(t.target.value.toLowerCase()),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(y, {
                    children: [
                      (0, s.jsx)(b, {
                        width: "fit",
                        title: "Economy Leaderboard",
                        children: n.economy
                          ? (0, s.jsx)("table", {
                            children: (0, s.jsx)("tbody", {
                              children: n.economy.sort(
                                (t, e) => e.balance - t.balance,
                              ).map((t) =>
                                (0, s.jsxs)("tr", {
                                  className: `${
                                    c &&
                                    v(t.user_id).toLowerCase().includes(c) &&
                                    "dawn-highlight"
                                  }`,
                                  children: [
                                    (0, s.jsx)("td", {
                                      children: v(t.user_id),
                                    }),
                                    (0, s.jsxs)("td", {
                                      children: [t.balance, " \ud83c\udf00"],
                                    }),
                                  ],
                                }, t.user_id)
                              ),
                            }),
                          })
                          : (0, s.jsx)(d, { children: "Loading..." }),
                      }),
                      [["messages_sent", "Messages", "Messages"], [
                        "vc_time",
                        "VC Time",
                        "Minutes",
                      ], ["bumps", "Bumps", "Bumps"]].map((t) =>
                        (0, s.jsx)(b, {
                          width: "fit",
                          title: `${t[1]} Leaderboard`,
                          children: n.user_data
                            ? (0, s.jsx)("table", {
                              children: (0, s.jsx)("tbody", {
                                children: n.user_data.filter(
                                  (e) => 0 !== e[t[0]],
                                ).sort((e, n) => n[t[0]] - e[t[0]]).map((e) =>
                                  (0, s.jsxs)("tr", {
                                    className: `${
                                      c &&
                                      v(e.user_id).toLowerCase().includes(c) &&
                                      "dawn-highlight"
                                    }`,
                                    children: [
                                      (0, s.jsx)("td", {
                                        children: v(e.user_id),
                                      }),
                                      (0, s.jsxs)("td", {
                                        children: [e[t[0]], " ", t[2]],
                                      }),
                                    ],
                                  }, e.user_id)
                                ),
                              }),
                            })
                            : (0, s.jsx)(d, { children: "Loading..." }),
                        })
                      ),
                    ],
                  }),
                ],
              }),
              bot: (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(y, {
                  children: (0, s.jsx)(b, {
                    width: "fit",
                    title: "Command Usage",
                    children: n.command_usage
                      ? (0, s.jsx)("table", {
                        children: (0, s.jsx)("tbody", {
                          children: n.command_usage.sort(
                            (t, e) => e.used - t.used,
                          ).map((t) =>
                            (0, s.jsxs)("tr", {
                              children: [
                                (0, s.jsx)("td", { children: t.command_name }),
                                (0, s.jsxs)("td", {
                                  children: [t.used, " times"],
                                }),
                              ],
                            }, t.command_name)
                          ),
                        }),
                      })
                      : "Loading...",
                  }),
                }),
              }),
              server: (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)(y, {
                  children: [
                    [{
                      source: n.member_count,
                      filter: "memberCount",
                      human: "Member Count Overtime",
                      noAdd: !0,
                    }, {
                      source: n.messages,
                      filter: "messages",
                      human: "Messages Overtime",
                      noAdd: !1,
                    }].map((t) =>
                      (0, s.jsxs)(b, {
                        width: "40%",
                        style: { minHeight: "400px" },
                        title: `${t.human}`,
                        children: [
                          (0, s.jsxs)(d, {
                            children: [
                              "Filter:",
                              (0, s.jsxs)("select", {
                                defaultValue: a[t.filter],
                                onChange: (e) =>
                                  o({
                                    ...a,
                                    [t.filter]:
                                      e.target[e.target.selectedIndex].value,
                                  }),
                                children: [
                                  (0, s.jsx)("option", {
                                    value: "minute",
                                    children: "Minute",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "hour",
                                    children: "Hour",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "day",
                                    children: "Day",
                                  }),
                                  (0, s.jsx)("option", {
                                    value: "month",
                                    children: "Month",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          t.source
                            ? (0, s.jsx)(s.Fragment, {
                              children: (0, s.jsx)(Nd, {
                                data: {
                                  labels: Ud(
                                    t.source,
                                    Vd[a[t.filter]],
                                    "amount",
                                    t.noAdd,
                                  ).map((t) => t.time),
                                  datasets: [{
                                    label: t.human,
                                    data: Ud(
                                      t.source,
                                      Vd[a[t.filter]],
                                      "amount",
                                      t.noAdd,
                                    ).map((t) => t.amount),
                                  }],
                                },
                              }),
                            })
                            : "Loading...",
                        ],
                      }, t.filter)
                    ),
                    (0, s.jsx)(b, {
                      width: "40%",
                      style: { minHeight: "400px" },
                      title: "Messages At Times",
                      children: (0, s.jsx)(Id, {
                        data: {
                          labels:
                            "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23"
                              .split(","),
                          datasets: [{
                            label: "Messages At Times",
                            data: Ud(n.messages, /( [0-9]?[0-9])/, "amount")
                              .sort(
                                (t, e) => parseInt(e.time) - parseInt(t.time),
                              ).map((t) => t.amount),
                          }],
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }[t] || (0, s.jsx)(d, { children: "Unknown page." }),
          }),
        ],
      });
  }
  function Ud(t, e, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!t) return [];
    let i = {};
    console.log(t);
    for (const o of t) {
      let t = o.time.match(e);
      t && (i[t[0]] || (i[t[0]] = 0), r ? i[t[0]] = o[n] : i[t[0]] += o[n]);
    }
    console.log(i);
    let a = [];
    for (const o in i) a.push({ time: o, [n]: i[o] });
    return a;
  }
  const Wd = o.createRoot(document.getElementById("root")),
    $d = function (t, e) {
      return yt({
        basename: null == e ? void 0 : e.basename,
        future: Te({}, null == e ? void 0 : e.future, {
          v7_prependBasename: !0,
        }),
        history:
          (n = { window: null == e ? void 0 : e.window },
            void 0 === n && (n = {}),
            O(
              function (t, e) {
                let { pathname: n, search: r, hash: i } = t.location;
                return P(
                  "",
                  { pathname: n, search: r, hash: i },
                  e.state && e.state.usr || null,
                  e.state && e.state.key || "default",
                );
              },
              function (t, e) {
                return "string" === typeof e ? e : T(e);
              },
              null,
              n,
            )),
        hydrationData: (null == e ? void 0 : e.hydrationData) || Re(),
        routes: t,
        mapRouteProperties: Pe,
        dataStrategy: null == e ? void 0 : e.dataStrategy,
        patchRoutesOnNavigation: null == e ? void 0 : e.patchRoutesOnNavigation,
        window: null == e ? void 0 : e.window,
      }).initialize();
      var n;
    }([
      { path: "/", element: (0, s.jsx)(v, {}) },
      { path: "/hypno", element: (0, s.jsx)(Ue, {}) },
      { path: "/hypno/visuals", element: (0, s.jsx)(Rn, {}) },
      { path: "/hypno/visuals/:id", element: (0, s.jsx)(Bn, {}) },
      { path: "/trancer", element: (0, s.jsx)(Hd, {}) },
    ]);
  Wd.render(
    (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(zn, {}), (0, s.jsx)(Ne, { router: $d })],
    }),
  );
})();
//# sourceMappingURL=main.2e254cc4.js.map
