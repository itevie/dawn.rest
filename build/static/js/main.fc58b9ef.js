/*! For license information please see main.fc58b9ef.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      730: (t, e, n) => {
        var i = n(43), r = n(853);
        function o(t) {
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
        var a = new Set(), s = {};
        function l(t, e) {
          c(t, e), c(t + "Capture", e);
        }
        function c(t, e) {
          for (s[t] = e, t = 0; t < e.length; t++) a.add(e[t]);
        }
        var u = !("undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function g(t, e, n, i, r, o, a) {
          this.acceptsBooleans = 2 === e || 3 === e || 4 === e,
            this.attributeName = i,
            this.attributeNamespace = r,
            this.mustUseProperty = n,
            this.propertyName = t,
            this.type = e,
            this.sanitizeURL = o,
            this.removeEmptyString = a;
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
        function v(t, e, n, i) {
          var r = m.hasOwnProperty(e) ? m[e] : null;
          (null !== r
            ? 0 !== r.type
            : i || !(2 < e.length) || "o" !== e[0] && "O" !== e[0] ||
              "n" !== e[1] && "N" !== e[1]) && (function (t, e, n, i) {
              if (
                null === e || "undefined" === typeof e ||
                function (t, e, n, i) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof e) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return !i &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                            "aria-" !== t);
                    default:
                      return !1;
                  }
                }(t, e, n, i)
              ) return !0;
              if (i) return !1;
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
            }(e, n, r, i) && (n = null),
              i || null === r
                ? function (t) {
                  return !!d.call(p, t) ||
                    !d.call(f, t) && (h.test(t) ? p[t] = !0 : (f[t] = !0, !1));
                }(e) && (null === n
                  ? t.removeAttribute(e)
                  : t.setAttribute(e, "" + n))
                : r.mustUseProperty
                ? t[r.propertyName] = null === n ? 3 !== r.type && "" : n
                : (e = r.attributeName,
                  i = r.attributeNamespace,
                  null === n
                    ? t.removeAttribute(e)
                    : (n = 3 === (r = r.type) || 4 === r && !0 === n
                      ? ""
                      : "" + n,
                      i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
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
        var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          M = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          D = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function j(t) {
          return null === t || "object" !== typeof t
            ? null
            : "function" === typeof (t = A && t[A] || t["@@iterator"])
            ? t
            : null;
        }
        var F, z = Object.assign;
        function N(t) {
          if (void 0 === F) {
            try {
              throw Error();
            } catch (n) {
              var e = n.stack.trim().match(/\n( *(at )?)/);
              F = e && e[1] || "";
            }
          }
          return "\n" + F + t;
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
                  var i = c;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (c) {
                  i = c;
                }
                t.call(e.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (c) {
                i = c;
              }
              t();
            }
          } catch (c) {
            if (c && i && "string" === typeof c.stack) {
              for (
                var r = c.stack.split("\n"),
                  o = i.stack.split("\n"),
                  a = r.length - 1,
                  s = o.length - 1;
                1 <= a && 0 <= s && r[a] !== o[s];
              ) s--;
              for (; 1 <= a && 0 <= s; a--, s--) {
                if (r[a] !== o[s]) {
                  if (1 !== a || 1 !== s) {
                    do {
                      if (a--, 0 > --s || r[a] !== o[s]) {
                        var l = "\n" + r[a].replace(" at new ", " at ");
                        return t.displayName && l.includes("<anonymous>") &&
                          (l = l.replace("<anonymous>", t.displayName)),
                          l;
                      }
                    } while (1 <= a && 0 <= s);
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
        function U(t) {
          if (null == t) return null;
          if ("function" === typeof t) return t.displayName || t.name || null;
          if ("string" === typeof t) return t;
          switch (t) {
            case k:
              return "Fragment";
            case _:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof t) {
            switch (t.$$typeof) {
              case C:
                return (t.displayName || "Context") + ".Consumer";
              case M:
                return (t._context.displayName || "Context") + ".Provider";
              case P:
                var e = t.render;
                return (t = t.displayName) ||
                  (t = "" !== (t = e.displayName || e.name || "")
                    ? "ForwardRef(" + t + ")"
                    : "ForwardRef"),
                  t;
              case R:
                return null !== (e = t.displayName || null)
                  ? e
                  : U(t.type) || "Memo";
              case D:
                e = t._payload, t = t._init;
                try {
                  return U(t(e));
                } catch (n) {}
            }
          }
          return null;
        }
        function H(t) {
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
              return U(e);
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
              i = "" + t[e];
            if (
              !t.hasOwnProperty(e) && "undefined" !== typeof n &&
              "function" === typeof n.get && "function" === typeof n.set
            ) {
              var r = n.get, o = n.set;
              return Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                  return r.call(this);
                },
                set: function (t) {
                  i = "" + t, o.call(this, t);
                },
              }),
                Object.defineProperty(t, e, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return i;
                  },
                  setValue: function (t) {
                    i = "" + t;
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
          var n = e.getValue(), i = "";
          return t && (i = $(t) ? t.checked ? "true" : "false" : t.value),
            (t = i) !== n && (e.setValue(t), !0);
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
            i = null != e.checked ? e.checked : e.defaultChecked;
          n = W(null != e.value ? e.value : n),
            t._wrapperState = {
              initialChecked: i,
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
          var n = W(e.value), i = e.type;
          if (null != n) {
            "number" === i
              ? (0 === n && "" === t.value || t.value != n) &&
                (t.value = "" + n)
              : t.value !== "" + n && (t.value = "" + n);
          } else if ("submit" === i || "reset" === i) {
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
            var i = e.type;
            if (
              !("submit" !== i && "reset" !== i ||
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
        function nt(t, e, n, i) {
          if (t = t.options, e) {
            e = {};
            for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
            for (n = 0; n < t.length; n++) {
              r = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== r && (t[n].selected = r),
                r && i && (t[n].defaultSelected = !0);
            }
          } else {
            for (n = "" + W(n), e = null, r = 0; r < t.length; r++) {
              if (t[r].value === n) {
                return t[r].selected = !0,
                  void (i && (t[r].defaultSelected = !0));
              }
              null !== e || t[r].disabled || (e = t[r]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function it(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
          return z({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue,
          });
        }
        function rt(t, e) {
          var n = e.value;
          if (null == n) {
            if (n = e.children, e = e.defaultValue, null != n) {
              if (null != e) throw Error(o(92));
              if (et(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              e = n;
            }
            null == e && (e = ""), n = e;
          }
          t._wrapperState = { initialValue: W(n) };
        }
        function ot(t, e) {
          var n = W(e.value), i = W(e.defaultValue);
          null != n &&
          ((n = "" + n) !== t.value && (t.value = n),
            null == e.defaultValue && t.defaultValue !== n &&
            (t.defaultValue = n)), null != i && (t.defaultValue = "" + i);
        }
        function at(t) {
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
          dt = (ut = function (t, e) {
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
              ? function (t, e, n, i) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ut(t, e);
                });
              }
              : ut);
        function ht(t, e) {
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
              var i = 0 === n.indexOf("--"), r = gt(n, e[n], i);
              "float" === n && (n = "cssFloat"),
                i ? t.setProperty(n, r) : t[n] = r;
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
            ) throw Error(o(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(o(60));
              if (
                "object" !== typeof e.dangerouslySetInnerHTML ||
                !("__html" in e.dangerouslySetInnerHTML)
              ) throw Error(o(61));
            }
            if (null != e.style && "object" !== typeof e.style) {
              throw Error(o(62));
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
        function Et(t) {
          if (t = vr(t)) {
            if ("function" !== typeof _t) throw Error(o(280));
            var e = t.stateNode;
            e && (e = wr(e), _t(t.stateNode, t.type, e));
          }
        }
        function Mt(t) {
          kt ? St ? St.push(t) : St = [t] : kt = t;
        }
        function Ct() {
          if (kt) {
            var t = kt, e = St;
            if (St = kt = null, Et(t), e) {
              for (t = 0; t < e.length; t++) Et(e[t]);
            }
          }
        }
        function Pt(t, e) {
          return t(e);
        }
        function Tt() {}
        var Ot = !1;
        function Rt(t, e, n) {
          if (Ot) return t(e, n);
          Ot = !0;
          try {
            return Pt(t, e, n);
          } finally {
            Ot = !1, (null !== kt || null !== St) && (Tt(), Ct());
          }
        }
        function Dt(t, e) {
          var n = t.stateNode;
          if (null === n) return null;
          var i = wr(n);
          if (null === i) return null;
          n = i[e];
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
              (i = !i.disabled) ||
              (i = !("button" === (t = t.type) || "input" === t ||
                "select" === t || "textarea" === t)), t = !i;
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (n && "function" !== typeof n) throw Error(o(231, e, typeof n));
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
        function jt(t, e, n, i, r, o, a, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Ft = !1,
          zt = null,
          Nt = !1,
          It = null,
          Bt = {
            onError: function (t) {
              Ft = !0, zt = t;
            },
          };
        function Vt(t, e, n, i, r, o, a, s, l) {
          Ft = !1, zt = null, jt.apply(Bt, arguments);
        }
        function Ut(t) {
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
        function Ht(t) {
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
          if (Ut(t) !== t) throw Error(o(188));
        }
        function $t(t) {
          return null !== (t = function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Ut(t))) throw Error(o(188));
                return e !== t ? null : t;
              }
              for (var n = t, i = e;;) {
                var r = n.return;
                if (null === r) break;
                var a = r.alternate;
                if (null === a) {
                  if (null !== (i = r.return)) {
                    n = i;
                    continue;
                  }
                  break;
                }
                if (r.child === a.child) {
                  for (a = r.child; a;) {
                    if (a === n) return Wt(r), t;
                    if (a === i) return Wt(r), e;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== i.return) n = r, i = a;
                else {
                  for (var s = !1, l = r.child; l;) {
                    if (l === n) {
                      s = !0, n = r, i = a;
                      break;
                    }
                    if (l === i) {
                      s = !0, i = r, n = a;
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l;) {
                      if (l === n) {
                        s = !0, n = a, i = r;
                        break;
                      }
                      if (l === i) {
                        s = !0, i = a, n = r;
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== i) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
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
        var Yt = r.unstable_scheduleCallback,
          Qt = r.unstable_cancelCallback,
          Kt = r.unstable_shouldYield,
          Xt = r.unstable_requestPaint,
          Jt = r.unstable_now,
          Gt = r.unstable_getCurrentPriorityLevel,
          Zt = r.unstable_ImmediatePriority,
          te = r.unstable_UserBlockingPriority,
          ee = r.unstable_NormalPriority,
          ne = r.unstable_LowPriority,
          ie = r.unstable_IdlePriority,
          re = null,
          oe = null;
        var ae = Math.clz32 ? Math.clz32 : function (t) {
            return t >>>= 0, 0 === t ? 32 : 31 - (se(t) / le | 0) | 0;
          },
          se = Math.log,
          le = Math.LN2;
        var ce = 64, ue = 4194304;
        function de(t) {
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
        function he(t, e) {
          var n = t.pendingLanes;
          if (0 === n) return 0;
          var i = 0, r = t.suspendedLanes, o = t.pingedLanes, a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~r;
            0 !== s ? i = de(s) : 0 !== (o &= a) && (i = de(o));
          } else 0 !== (a = n & ~r) ? i = de(a) : 0 !== o && (i = de(o));
          if (0 === i) return 0;
          if (
            0 !== e && e !== i && 0 === (e & r) &&
            ((r = i & -i) >= (o = e & -e) || 16 === r && 0 !== (4194240 & o))
          ) return e;
          if (
            0 !== (4 & i) && (i |= 16 & n), 0 !== (e = t.entangledLanes)
          ) {
            for (
              t = t.entanglements, e &= i;
              0 < e;
            ) r = 1 << (n = 31 - ae(e)), i |= t[n], e &= ~r;
          }
          return i;
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
            (t = t.eventTimes)[e = 31 - ae(e)] = n;
        }
        function ye(t, e) {
          var n = t.entangledLanes |= e;
          for (t = t.entanglements; n;) {
            var i = 31 - ae(n), r = 1 << i;
            r & e | t[i] & e && (t[i] |= e), n &= ~r;
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
          Ee,
          Me = !1,
          Ce = [],
          Pe = null,
          Te = null,
          Oe = null,
          Re = new Map(),
          De = new Map(),
          Le = [],
          Ae =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
              .split(" ");
        function je(t, e) {
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
              Oe = null;
              break;
            case "pointerover":
            case "pointerout":
              Re.delete(e.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              De.delete(e.pointerId);
          }
        }
        function Fe(t, e, n, i, r, o) {
          return null === t || t.nativeEvent !== o
            ? (t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: i,
              nativeEvent: o,
              targetContainers: [r],
            },
              null !== e && (null !== (e = vr(e)) && _e(e)),
              t)
            : (t.eventSystemFlags |= i,
              e = t.targetContainers,
              null !== r && -1 === e.indexOf(r) && e.push(r),
              t);
        }
        function ze(t) {
          var e = yr(t.target);
          if (null !== e) {
            var n = Ut(e);
            if (null !== n) {
              if (13 === (e = n.tag)) {
                if (null !== (e = Ht(n))) {
                  return t.blockedOn = e,
                    void Ee(t.priority, function () {
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
              return null !== (e = vr(n)) && _e(e), t.blockedOn = n, !1;
            }
            var i = new (n = t.nativeEvent).constructor(n.type, n);
            xt = i, n.target.dispatchEvent(i), xt = null, e.shift();
          }
          return !0;
        }
        function Ie(t, e, n) {
          Ne(t) && n.delete(e);
        }
        function Be() {
          Me = !1,
            null !== Pe && Ne(Pe) && (Pe = null),
            null !== Te && Ne(Te) && (Te = null),
            null !== Oe && Ne(Oe) && (Oe = null),
            Re.forEach(Ie),
            De.forEach(Ie);
        }
        function Ve(t, e) {
          t.blockedOn === e &&
            (t.blockedOn = null,
              Me ||
              (Me = !0,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, Be)));
        }
        function Ue(t) {
          function e(e) {
            return Ve(e, t);
          }
          if (0 < Ce.length) {
            Ve(Ce[0], t);
            for (var n = 1; n < Ce.length; n++) {
              var i = Ce[n];
              i.blockedOn === t && (i.blockedOn = null);
            }
          }
          for (
            null !== Pe && Ve(Pe, t),
              null !== Te && Ve(Te, t),
              null !== Oe && Ve(Oe, t),
              Re.forEach(e),
              De.forEach(e),
              n = 0;
            n < Le.length;
            n++
          ) (i = Le[n]).blockedOn === t && (i.blockedOn = null);
          for (; 0 < Le.length && null === (n = Le[0]).blockedOn;) {
            ze(n), null === n.blockedOn && Le.shift();
          }
        }
        var He = x.ReactCurrentBatchConfig, We = !0;
        function $e(t, e, n, i) {
          var r = ve, o = He.transition;
          He.transition = null;
          try {
            ve = 1, Ye(t, e, n, i);
          } finally {
            ve = r, He.transition = o;
          }
        }
        function qe(t, e, n, i) {
          var r = ve, o = He.transition;
          He.transition = null;
          try {
            ve = 4, Ye(t, e, n, i);
          } finally {
            ve = r, He.transition = o;
          }
        }
        function Ye(t, e, n, i) {
          if (We) {
            var r = Ke(t, e, n, i);
            if (null === r) Wi(t, e, i, Qe, n), je(t, i);
            else if (
              function (t, e, n, i, r) {
                switch (e) {
                  case "focusin":
                    return Pe = Fe(Pe, t, e, n, i, r), !0;
                  case "dragenter":
                    return Te = Fe(Te, t, e, n, i, r), !0;
                  case "mouseover":
                    return Oe = Fe(Oe, t, e, n, i, r), !0;
                  case "pointerover":
                    var o = r.pointerId;
                    return Re.set(o, Fe(Re.get(o) || null, t, e, n, i, r)), !0;
                  case "gotpointercapture":
                    return o = r.pointerId,
                      De.set(o, Fe(De.get(o) || null, t, e, n, i, r)),
                      !0;
                }
                return !1;
              }(r, t, e, n, i)
            ) i.stopPropagation();
            else if (je(t, i), 4 & e && -1 < Ae.indexOf(t)) {
              for (; null !== r;) {
                var o = vr(r);
                if (
                  null !== o && we(o),
                    null === (o = Ke(t, e, n, i)) && Wi(t, e, i, Qe, n),
                    o === r
                ) break;
                r = o;
              }
              null !== r && i.stopPropagation();
            } else Wi(t, e, i, null, n);
          }
        }
        var Qe = null;
        function Ke(t, e, n, i) {
          if (Qe = null, null !== (t = yr(t = wt(i)))) {
            if (null === (e = Ut(t))) {
              t = null;
            } else if (13 === (n = e.tag)) {
              if (null !== (t = Ht(e))) return t;
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
                case ie:
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
            i = n.length,
            r = "value" in Je ? Je.value : Je.textContent,
            o = r.length;
          for (t = 0; t < i && n[t] === r[t]; t++);
          var a = i - t;
          for (e = 1; e <= a && n[i - e] === r[o - e]; e++);
          return Ze = r.slice(t, 1 < e ? 1 - e : void 0);
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
        function on(t) {
          function e(e, n, i, r, o) {
            for (
              var a in this._reactName = e,
                this._targetInst = i,
                this.type = n,
                this.nativeEvent = r,
                this.target = o,
                this.currentTarget = null,
                t
            ) t.hasOwnProperty(a) && (e = t[a], this[a] = e ? e(r) : r[a]);
            return this.isDefaultPrevented = (null != r.defaultPrevented
                ? r.defaultPrevented
                : !1 === r.returnValue)
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
        var an,
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
          un = on(cn),
          dn = z({}, cn, { view: 0, detail: 0 }),
          hn = on(dn),
          fn = z({}, dn, {
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
            getModifierState: En,
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
                  ? (an = t.screenX - ln.screenX, sn = t.screenY - ln.screenY)
                  : sn = an = 0,
                  ln = t),
                  an);
            },
            movementY: function (t) {
              return "movementY" in t ? t.movementY : sn;
            },
          }),
          pn = on(fn),
          gn = on(z({}, fn, { dataTransfer: 0 })),
          mn = on(z({}, dn, { relatedTarget: 0 })),
          bn = on(
            z({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = z({}, cn, {
            clipboardData: function (t) {
              return "clipboardData" in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          vn = on(yn),
          xn = on(z({}, cn, { data: 0 })),
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
        function En() {
          return Sn;
        }
        var Mn = z({}, dn, {
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
            getModifierState: En,
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
          Cn = on(Mn),
          Pn = on(
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
          Tn = on(
            z({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          On = on(
            z({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Rn = z({}, fn, {
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
          Dn = on(Rn),
          Ln = [9, 13, 27, 32],
          An = u && "CompositionEvent" in window,
          jn = null;
        u && "documentMode" in document && (jn = document.documentMode);
        var Fn = u && "TextEvent" in window && !jn,
          zn = u && (!An || jn && 8 < jn && 11 >= jn),
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
        var Un = !1;
        var Hn = {
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
          return "input" === e ? !!Hn[t.type] : "textarea" === e;
        }
        function $n(t, e, n, i) {
          Mt(i),
            0 < (e = qi(e, "onChange")).length &&
            (n = new un("onChange", "change", null, n, i),
              t.push({ event: n, listeners: e }));
        }
        var qn = null, Yn = null;
        function Qn(t) {
          Ni(t, 0);
        }
        function Kn(t) {
          if (Y(xr(t))) return t;
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
              var ti = document.createElement("div");
              ti.setAttribute("oninput", "return;"),
                Zn = "function" === typeof ti.oninput;
            }
            Gn = Zn;
          } else Gn = !1;
          Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function ei() {
          qn && (qn.detachEvent("onpropertychange", ni), Yn = qn = null);
        }
        function ni(t) {
          if ("value" === t.propertyName && Kn(Yn)) {
            var e = [];
            $n(e, Yn, t, wt(t)), Rt(Qn, e);
          }
        }
        function ii(t, e, n) {
          "focusin" === t
            ? (ei(), Yn = n, (qn = e).attachEvent("onpropertychange", ni))
            : "focusout" === t && ei();
        }
        function ri(t) {
          if ("selectionchange" === t || "keyup" === t || "keydown" === t) {
            return Kn(Yn);
          }
        }
        function oi(t, e) {
          if ("click" === t) return Kn(e);
        }
        function ai(t, e) {
          if ("input" === t || "change" === t) return Kn(e);
        }
        var si = "function" === typeof Object.is ? Object.is : function (t, e) {
          return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e;
        };
        function li(t, e) {
          if (si(t, e)) return !0;
          if (
            "object" !== typeof t || null === t || "object" !== typeof e ||
            null === e
          ) return !1;
          var n = Object.keys(t), i = Object.keys(e);
          if (n.length !== i.length) return !1;
          for (i = 0; i < n.length; i++) {
            var r = n[i];
            if (!d.call(e, r) || !si(t[r], e[r])) return !1;
          }
          return !0;
        }
        function ci(t) {
          for (; t && t.firstChild;) t = t.firstChild;
          return t;
        }
        function ui(t, e) {
          var n, i = ci(t);
          for (t = 0; i;) {
            if (3 === i.nodeType) {
              if (n = t + i.textContent.length, t <= e && n >= e) {
                return { node: i, offset: e - t };
              }
              t = n;
            }
            t: {
              for (; i;) {
                if (i.nextSibling) {
                  i = i.nextSibling;
                  break t;
                }
                i = i.parentNode;
              }
              i = void 0;
            }
            i = ci(i);
          }
        }
        function di(t, e) {
          return !(!t || !e) &&
            (t === e ||
              (!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? di(t, e.parentNode)
                  : "contains" in t
                  ? t.contains(e)
                  : !!t.compareDocumentPosition &&
                    !!(16 & t.compareDocumentPosition(e))));
        }
        function hi() {
          for (var t = window, e = Q(); e instanceof t.HTMLIFrameElement;) {
            try {
              var n = "string" === typeof e.contentWindow.location.href;
            } catch (i) {
              n = !1;
            }
            if (!n) break;
            e = Q((t = e.contentWindow).document);
          }
          return e;
        }
        function fi(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return e &&
            ("input" === e &&
                ("text" === t.type || "search" === t.type || "tel" === t.type ||
                  "url" === t.type || "password" === t.type) ||
              "textarea" === e || "true" === t.contentEditable);
        }
        function pi(t) {
          var e = hi(), n = t.focusedElem, i = t.selectionRange;
          if (
            e !== n && n && n.ownerDocument &&
            di(n.ownerDocument.documentElement, n)
          ) {
            if (null !== i && fi(n)) {
              if (
                e = i.start,
                  void 0 === (t = i.end) && (t = e),
                  "selectionStart" in n
              ) {
                n.selectionStart = e,
                  n.selectionEnd = Math.min(t, n.value.length);
              } else if (
                (t = (e = n.ownerDocument || document) && e.defaultView ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var r = n.textContent.length, o = Math.min(i.start, r);
                i = void 0 === i.end ? o : Math.min(i.end, r),
                  !t.extend && o > i && (r = i, i = o, o = r),
                  r = ui(n, o);
                var a = ui(n, i);
                r && a &&
                  (1 !== t.rangeCount || t.anchorNode !== r.node ||
                    t.anchorOffset !== r.offset || t.focusNode !== a.node ||
                    t.focusOffset !== a.offset) &&
                  ((e = e.createRange()).setStart(r.node, r.offset),
                    t.removeAllRanges(),
                    o > i
                      ? (t.addRange(e), t.extend(a.node, a.offset))
                      : (e.setEnd(a.node, a.offset), t.addRange(e)));
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
        var gi = u && "documentMode" in document && 11 >= document.documentMode,
          mi = null,
          bi = null,
          yi = null,
          vi = !1;
        function xi(t, e, n) {
          var i = n.window === n
            ? n.document
            : 9 === n.nodeType
            ? n
            : n.ownerDocument;
          vi || null == mi || mi !== Q(i) ||
            ("selectionStart" in (i = mi) && fi(i)
              ? i = { start: i.selectionStart, end: i.selectionEnd }
              : i = {
                anchorNode:
                  (i =
                    (i.ownerDocument && i.ownerDocument.defaultView || window)
                      .getSelection()).anchorNode,
                anchorOffset: i.anchorOffset,
                focusNode: i.focusNode,
                focusOffset: i.focusOffset,
              },
              yi && li(yi, i) ||
              (yi = i,
                0 < (i = qi(bi, "onSelect")).length &&
                (e = new un("onSelect", "select", null, e, n),
                  t.push({ event: e, listeners: i }),
                  e.target = mi)));
        }
        function wi(t, e) {
          var n = {};
          return n[t.toLowerCase()] = e.toLowerCase(),
            n["Webkit" + t] = "webkit" + e,
            n["Moz" + t] = "moz" + e,
            n;
        }
        var _i = {
            animationend: wi("Animation", "AnimationEnd"),
            animationiteration: wi("Animation", "AnimationIteration"),
            animationstart: wi("Animation", "AnimationStart"),
            transitionend: wi("Transition", "TransitionEnd"),
          },
          ki = {},
          Si = {};
        function Ei(t) {
          if (ki[t]) return ki[t];
          if (!_i[t]) return t;
          var e, n = _i[t];
          for (e in n) if (n.hasOwnProperty(e) && e in Si) return ki[t] = n[e];
          return t;
        }
        u &&
          (Si = document.createElement("div").style,
            "AnimationEvent" in window ||
            (delete _i.animationend.animation,
              delete _i.animationiteration.animation,
              delete _i.animationstart.animation),
            "TransitionEvent" in window || delete _i.transitionend.transition);
        var Mi = Ei("animationend"),
          Ci = Ei("animationiteration"),
          Pi = Ei("animationstart"),
          Ti = Ei("transitionend"),
          Oi = new Map(),
          Ri =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel"
              .split(" ");
        function Di(t, e) {
          Oi.set(t, e), l(e, [t]);
        }
        for (var Li = 0; Li < Ri.length; Li++) {
          var Ai = Ri[Li];
          Di(Ai.toLowerCase(), "on" + (Ai[0].toUpperCase() + Ai.slice(1)));
        }
        Di(Mi, "onAnimationEnd"),
          Di(Ci, "onAnimationIteration"),
          Di(Pi, "onAnimationStart"),
          Di("dblclick", "onDoubleClick"),
          Di("focusin", "onFocus"),
          Di("focusout", "onBlur"),
          Di(Ti, "onTransitionEnd"),
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
        var ji =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting"
              .split(" "),
          Fi = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(ji),
          );
        function zi(t, e, n) {
          var i = t.type || "unknown-event";
          t.currentTarget = n,
            function (t, e, n, i, r, a, s, l, c) {
              if (Vt.apply(this, arguments), Ft) {
                if (!Ft) throw Error(o(198));
                var u = zt;
                Ft = !1, zt = null, Nt || (Nt = !0, It = u);
              }
            }(i, e, void 0, t),
            t.currentTarget = null;
        }
        function Ni(t, e) {
          e = 0 !== (4 & e);
          for (var n = 0; n < t.length; n++) {
            var i = t[n], r = i.event;
            i = i.listeners;
            t: {
              var o = void 0;
              if (e) {
                for (var a = i.length - 1; 0 <= a; a--) {
                  var s = i[a], l = s.instance, c = s.currentTarget;
                  if (
                    s = s.listener, l !== o && r.isPropagationStopped()
                  ) break t;
                  zi(r, s, c), o = l;
                }
              } else {for (a = 0; a < i.length; a++) {
                  if (
                    l = (s = i[a]).instance,
                      c = s.currentTarget,
                      s = s.listener,
                      l !== o && r.isPropagationStopped()
                  ) break t;
                  zi(r, s, c), o = l;
                }}
            }
          }
          if (Nt) throw t = It, Nt = !1, It = null, t;
        }
        function Ii(t, e) {
          var n = e[gr];
          void 0 === n && (n = e[gr] = new Set());
          var i = t + "__bubble";
          n.has(i) || (Hi(e, t, 2, !1), n.add(i));
        }
        function Bi(t, e, n) {
          var i = 0;
          e && (i |= 4), Hi(n, t, i, e);
        }
        var Vi = "_reactListening" + Math.random().toString(36).slice(2);
        function Ui(t) {
          if (!t[Vi]) {
            t[Vi] = !0,
              a.forEach(function (e) {
                "selectionchange" !== e &&
                  (Fi.has(e) || Bi(e, !1, t), Bi(e, !0, t));
              });
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[Vi] || (e[Vi] = !0, Bi("selectionchange", !1, e));
          }
        }
        function Hi(t, e, n, i) {
          switch (Xe(e)) {
            case 1:
              var r = $e;
              break;
            case 4:
              r = qe;
              break;
            default:
              r = Ye;
          }
          n = r.bind(null, e, n, t),
            r = void 0,
            !Lt || "touchstart" !== e && "touchmove" !== e && "wheel" !== e ||
            (r = !0),
            i
              ? void 0 !== r
                ? t.addEventListener(e, n, { capture: !0, passive: r })
                : t.addEventListener(e, n, !0)
              : void 0 !== r
              ? t.addEventListener(e, n, { passive: r })
              : t.addEventListener(e, n, !1);
        }
        function Wi(t, e, n, i, r) {
          var o = i;
          if (0 === (1 & e) && 0 === (2 & e) && null !== i) {
            t: for (;;) {
              if (null === i) return;
              var a = i.tag;
              if (3 === a || 4 === a) {
                var s = i.stateNode.containerInfo;
                if (s === r || 8 === s.nodeType && s.parentNode === r) break;
                if (4 === a) {
                  for (a = i.return; null !== a;) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === r ||
                        8 === l.nodeType && l.parentNode === r)
                    ) return;
                    a = a.return;
                  }
                }
                for (; null !== s;) {
                  if (null === (a = yr(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    i = o = a;
                    continue t;
                  }
                  s = s.parentNode;
                }
              }
              i = i.return;
            }
          }
          Rt(function () {
            var i = o, r = wt(n), a = [];
            t: {
              var s = Oi.get(t);
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
                  case Mi:
                  case Ci:
                  case Pi:
                    l = bn;
                    break;
                  case Ti:
                    l = On;
                    break;
                  case "scroll":
                    l = hn;
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
                  d = !u && "scroll" === t,
                  h = u ? null !== s ? s + "Capture" : null : s;
                u = [];
                for (var f, p = i; null !== p;) {
                  var g = (f = p).stateNode;
                  if (
                    5 === f.tag && null !== g &&
                    (f = g,
                      null !== h &&
                      (null != (g = Dt(p, h)) && u.push($i(p, g, f)))), d
                  ) break;
                  p = p.return;
                }
                0 < u.length &&
                  (s = new l(s, c, null, n, r),
                    a.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & e)) {
              if (
                l = "mouseout" === t || "pointerout" === t,
                  (!(s = "mouseover" === t || "pointerover" === t) ||
                    n === xt || !(c = n.relatedTarget || n.fromElement) ||
                    !yr(c) && !c[pr]) &&
                  (l || s) && (s = r.window === r
                    ? r
                    : (s = r.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window,
                    l
                      ? (l = i,
                        null !== (c = (c = n.relatedTarget || n.toElement)
                            ? yr(c)
                            : null) &&
                        (c !== (d = Ut(c)) || 5 !== c.tag && 6 !== c.tag) &&
                        (c = null))
                      : (l = null, c = i),
                    l !== c)
              ) {
                if (
                  u = pn,
                    g = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    "pointerout" !== t && "pointerover" !== t ||
                    (u = Pn,
                      g = "onPointerLeave",
                      h = "onPointerEnter",
                      p = "pointer"),
                    d = null == l ? s : xr(l),
                    f = null == c ? s : xr(c),
                    (s = new u(g, p + "leave", l, n, r)).target = d,
                    s.relatedTarget = f,
                    g = null,
                    yr(r) === i &&
                    ((u = new u(h, p + "enter", c, n, r)).target = f,
                      u.relatedTarget = d,
                      g = u),
                    d = g,
                    l && c
                ) {
                  t: {
                    for (h = c, p = 0, f = u = l; f; f = Yi(f)) p++;
                    for (f = 0, g = h; g; g = Yi(g)) f++;
                    for (; 0 < p - f;) u = Yi(u), p--;
                    for (; 0 < f - p;) h = Yi(h), f--;
                    for (; p--;) {
                      if (u === h || null !== h && u === h.alternate) break t;
                      u = Yi(u), h = Yi(h);
                    }
                    u = null;
                  }
                } else u = null;
                null !== l && Qi(a, s, l, u, !1),
                  null !== c && null !== d && Qi(a, d, c, u, !0);
              }
              if (
                "select" ===
                  (l = (s = i ? xr(i) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                "input" === l && "file" === s.type
              ) { var m = Xn; } else if (Wn(s)) {
                if (Jn) m = ai;
                else {
                  m = ri;
                  var b = ii;
                }
              } else {(l = s.nodeName) && "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) && (m = oi);}
              switch (
                m && (m = m(t, i))
                  ? $n(a, m, n, r)
                  : (b && b(t, s, i),
                    "focusout" === t && (b = s._wrapperState) && b.controlled &&
                    "number" === s.type && tt(s, "number", s.value)),
                  b = i ? xr(i) : window,
                  t
              ) {
                case "focusin":
                  (Wn(b) || "true" === b.contentEditable) &&
                    (mi = b, bi = i, yi = null);
                  break;
                case "focusout":
                  yi = bi = mi = null;
                  break;
                case "mousedown":
                  vi = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  vi = !1, xi(a, n, r);
                  break;
                case "selectionchange":
                  if (gi) break;
                case "keydown":
                case "keyup":
                  xi(a, n, r);
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
              } else {Un
                  ? Bn(t, n) && (v = "onCompositionEnd")
                  : "keydown" === t && 229 === n.keyCode &&
                    (v = "onCompositionStart");}
              v &&
              (zn && "ko" !== n.locale &&
                (Un || "onCompositionStart" !== v
                  ? "onCompositionEnd" === v && Un && (y = tn())
                  : (Ge = "value" in (Je = r) ? Je.value : Je.textContent,
                    Un = !0)),
                0 < (b = qi(i, v)).length &&
                (v = new xn(v, t, null, n, r),
                  a.push({ event: v, listeners: b }),
                  y ? v.data = y : null !== (y = Vn(n)) && (v.data = y))),
                (y = Fn
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
                    if (Un) {
                      return "compositionend" === t || !An && Bn(t, e)
                        ? (t = tn(), Ze = Ge = Je = null, Un = !1, t)
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
                (0 < (i = qi(i, "onBeforeInput")).length &&
                  (r = new xn("onBeforeInput", "beforeinput", null, n, r),
                    a.push({ event: r, listeners: i }),
                    r.data = y));
            }
            Ni(a, e);
          });
        }
        function $i(t, e, n) {
          return { instance: t, listener: e, currentTarget: n };
        }
        function qi(t, e) {
          for (var n = e + "Capture", i = []; null !== t;) {
            var r = t, o = r.stateNode;
            5 === r.tag && null !== o &&
            (r = o,
              null != (o = Dt(t, n)) && i.unshift($i(t, o, r)),
              null != (o = Dt(t, e)) && i.push($i(t, o, r))), t = t.return;
          }
          return i;
        }
        function Yi(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Qi(t, e, n, i, r) {
          for (var o = e._reactName, a = []; null !== n && n !== i;) {
            var s = n, l = s.alternate, c = s.stateNode;
            if (null !== l && l === i) break;
            5 === s.tag && null !== c &&
            (s = c,
              r
                ? null != (l = Dt(n, o)) && a.unshift($i(n, l, s))
                : r || null != (l = Dt(n, o)) && a.push($i(n, l, s))),
              n = n.return;
          }
          0 !== a.length && t.push({ event: e, listeners: a });
        }
        var Ki = /\r\n?/g, Xi = /\u0000|\uFFFD/g;
        function Ji(t) {
          return ("string" === typeof t ? t : "" + t).replace(Ki, "\n").replace(
            Xi,
            "",
          );
        }
        function Gi(t, e, n) {
          if (e = Ji(e), Ji(t) !== e && n) throw Error(o(425));
        }
        function Zi() {}
        var tr = null, er = null;
        function nr(t, e) {
          return "textarea" === t || "noscript" === t ||
            "string" === typeof e.children || "number" === typeof e.children ||
            "object" === typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html;
        }
        var ir = "function" === typeof setTimeout ? setTimeout : void 0,
          rr = "function" === typeof clearTimeout ? clearTimeout : void 0,
          or = "function" === typeof Promise ? Promise : void 0,
          ar = "function" === typeof queueMicrotask
            ? queueMicrotask
            : "undefined" !== typeof or
            ? function (t) {
              return or.resolve(null).then(t).catch(sr);
            }
            : ir;
        function sr(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function lr(t, e) {
          var n = e, i = 0;
          do {
            var r = n.nextSibling;
            if (t.removeChild(n), r && 8 === r.nodeType) {
              if ("/$" === (n = r.data)) {
                if (0 === i) {
                  return t.removeChild(r), void Ue(e);
                }
                i--;
              } else "$" !== n && "$?" !== n && "$!" !== n || i++;
            }
            n = r;
          } while (n);
          Ue(e);
        }
        function cr(t) {
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
        function ur(t) {
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
        var dr = Math.random().toString(36).slice(2),
          hr = "__reactFiber$" + dr,
          fr = "__reactProps$" + dr,
          pr = "__reactContainer$" + dr,
          gr = "__reactEvents$" + dr,
          mr = "__reactListeners$" + dr,
          br = "__reactHandles$" + dr;
        function yr(t) {
          var e = t[hr];
          if (e) return e;
          for (var n = t.parentNode; n;) {
            if (e = n[pr] || n[hr]) {
              if (
                n = e.alternate,
                  null !== e.child || null !== n && null !== n.child
              ) {
                for (t = ur(t); null !== t;) {
                  if (n = t[hr]) return n;
                  t = ur(t);
                }
              }
              return e;
            }
            n = (t = n).parentNode;
          }
          return null;
        }
        function vr(t) {
          return !(t = t[hr] || t[pr]) ||
              5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag
            ? null
            : t;
        }
        function xr(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(o(33));
        }
        function wr(t) {
          return t[fr] || null;
        }
        var _r = [], kr = -1;
        function Sr(t) {
          return { current: t };
        }
        function Er(t) {
          0 > kr || (t.current = _r[kr], _r[kr] = null, kr--);
        }
        function Mr(t, e) {
          kr++, _r[kr] = t.current, t.current = e;
        }
        var Cr = {}, Pr = Sr(Cr), Tr = Sr(!1), Or = Cr;
        function Rr(t, e) {
          var n = t.type.contextTypes;
          if (!n) return Cr;
          var i = t.stateNode;
          if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) {
            return i.__reactInternalMemoizedMaskedChildContext;
          }
          var r, o = {};
          for (r in n) o[r] = e[r];
          return i &&
            ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e,
              t.__reactInternalMemoizedMaskedChildContext = o),
            o;
        }
        function Dr(t) {
          return null !== (t = t.childContextTypes) && void 0 !== t;
        }
        function Lr() {
          Er(Tr), Er(Pr);
        }
        function Ar(t, e, n) {
          if (Pr.current !== Cr) throw Error(o(168));
          Mr(Pr, e), Mr(Tr, n);
        }
        function jr(t, e, n) {
          var i = t.stateNode;
          if (
            e = e.childContextTypes, "function" !== typeof i.getChildContext
          ) return n;
          for (var r in i = i.getChildContext()) {
            if (!(r in e)) throw Error(o(108, H(t) || "Unknown", r));
          }
          return z({}, n, i);
        }
        function Fr(t) {
          return t =
            (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext ||
            Cr,
            Or = Pr.current,
            Mr(Pr, t),
            Mr(Tr, Tr.current),
            !0;
        }
        function zr(t, e, n) {
          var i = t.stateNode;
          if (!i) throw Error(o(169));
          n
            ? (t = jr(t, e, Or),
              i.__reactInternalMemoizedMergedChildContext = t,
              Er(Tr),
              Er(Pr),
              Mr(Pr, t))
            : Er(Tr), Mr(Tr, n);
        }
        var Nr = null, Ir = !1, Br = !1;
        function Vr(t) {
          null === Nr ? Nr = [t] : Nr.push(t);
        }
        function Ur() {
          if (!Br && null !== Nr) {
            Br = !0;
            var t = 0, e = ve;
            try {
              var n = Nr;
              for (ve = 1; t < n.length; t++) {
                var i = n[t];
                do {
                  i = i(!0);
                } while (null !== i);
              }
              Nr = null, Ir = !1;
            } catch (r) {
              throw null !== Nr && (Nr = Nr.slice(t + 1)), Yt(Zt, Ur), r;
            } finally {
              ve = e, Br = !1;
            }
          }
          return null;
        }
        var Hr = [],
          Wr = 0,
          $r = null,
          qr = 0,
          Yr = [],
          Qr = 0,
          Kr = null,
          Xr = 1,
          Jr = "";
        function Gr(t, e) {
          Hr[Wr++] = qr, Hr[Wr++] = $r, $r = t, qr = e;
        }
        function Zr(t, e, n) {
          Yr[Qr++] = Xr, Yr[Qr++] = Jr, Yr[Qr++] = Kr, Kr = t;
          var i = Xr;
          t = Jr;
          var r = 32 - ae(i) - 1;
          i &= ~(1 << r), n += 1;
          var o = 32 - ae(e) + r;
          if (30 < o) {
            var a = r - r % 5;
            o = (i & (1 << a) - 1).toString(32),
              i >>= a,
              r -= a,
              Xr = 1 << 32 - ae(e) + r | n << r | i,
              Jr = o + t;
          } else Xr = 1 << o | n << r | i, Jr = t;
        }
        function to(t) {
          null !== t.return && (Gr(t, 1), Zr(t, 1, 0));
        }
        function eo(t) {
          for (; t === $r;) {
            $r = Hr[--Wr], Hr[Wr] = null, qr = Hr[--Wr], Hr[Wr] = null;
          }
          for (; t === Kr;) {
            Kr = Yr[--Qr],
              Yr[Qr] = null,
              Jr = Yr[--Qr],
              Yr[Qr] = null,
              Xr = Yr[--Qr],
              Yr[Qr] = null;
          }
        }
        var no = null, io = null, ro = !1, oo = null;
        function ao(t, e) {
          var n = Rc(5, null, null, 0);
          n.elementType = "DELETED",
            n.stateNode = e,
            n.return = t,
            null === (e = t.deletions)
              ? (t.deletions = [n], t.flags |= 16)
              : e.push(n);
        }
        function so(t, e) {
          switch (t.tag) {
            case 5:
              var n = t.type;
              return null !==
                  (e = 1 !== e.nodeType ||
                      n.toLowerCase() !== e.nodeName.toLowerCase()
                    ? null
                    : e) &&
                (t.stateNode = e, no = t, io = cr(e.firstChild), !0);
            case 6:
              return null !==
                  (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                (t.stateNode = e, no = t, io = null, !0);
            case 13:
              return null !== (e = 8 !== e.nodeType ? null : e) &&
                (n = null !== Kr ? { id: Xr, overflow: Jr } : null,
                  t.memoizedState = {
                    dehydrated: e,
                    treeContext: n,
                    retryLane: 1073741824,
                  },
                  (n = Rc(18, null, null, 0)).stateNode = e,
                  n.return = t,
                  t.child = n,
                  no = t,
                  io = null,
                  !0);
            default:
              return !1;
          }
        }
        function lo(t) {
          return 0 !== (1 & t.mode) && 0 === (128 & t.flags);
        }
        function co(t) {
          if (ro) {
            var e = io;
            if (e) {
              var n = e;
              if (!so(t, e)) {
                if (lo(t)) throw Error(o(418));
                e = cr(n.nextSibling);
                var i = no;
                e && so(t, e)
                  ? ao(i, n)
                  : (t.flags = -4097 & t.flags | 2, ro = !1, no = t);
              }
            } else {
              if (lo(t)) throw Error(o(418));
              t.flags = -4097 & t.flags | 2, ro = !1, no = t;
            }
          }
        }
        function uo(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;
          ) t = t.return;
          no = t;
        }
        function ho(t) {
          if (t !== no) return !1;
          if (!ro) return uo(t), ro = !0, !1;
          var e;
          if (
            (e = 3 !== t.tag) && !(e = 5 !== t.tag) &&
            (e = "head" !== (e = t.type) && "body" !== e &&
              !nr(t.type, t.memoizedProps)), e && (e = io)
          ) {
            if (lo(t)) throw fo(), Error(o(418));
            for (; e;) ao(t, e), e = cr(e.nextSibling);
          }
          if (uo(t), 13 === t.tag) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) {
              throw Error(o(317));
            }
            t: {
              for (t = t.nextSibling, e = 0; t;) {
                if (8 === t.nodeType) {
                  var n = t.data;
                  if ("/$" === n) {
                    if (0 === e) {
                      io = cr(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else "$" !== n && "$!" !== n && "$?" !== n || e++;
                }
                t = t.nextSibling;
              }
              io = null;
            }
          } else io = no ? cr(t.stateNode.nextSibling) : null;
          return !0;
        }
        function fo() {
          for (var t = io; t;) t = cr(t.nextSibling);
        }
        function po() {
          io = no = null, ro = !1;
        }
        function go(t) {
          null === oo ? oo = [t] : oo.push(t);
        }
        var mo = x.ReactCurrentBatchConfig;
        function bo(t, e, n) {
          if (
            null !== (t = n.ref) && "function" !== typeof t &&
            "object" !== typeof t
          ) {
            if (n._owner) {
              if (n = n._owner) {
                if (1 !== n.tag) throw Error(o(309));
                var i = n.stateNode;
              }
              if (!i) throw Error(o(147, t));
              var r = i, a = "" + t;
              return null !== e && null !== e.ref &&
                  "function" === typeof e.ref && e.ref._stringRef === a
                ? e.ref
                : (e = function (t) {
                  var e = r.refs;
                  null === t ? delete e[a] : e[a] = t;
                },
                  e._stringRef = a,
                  e);
            }
            if ("string" !== typeof t) throw Error(o(284));
            if (!n._owner) throw Error(o(290, t));
          }
          return t;
        }
        function yo(t, e) {
          throw t = Object.prototype.toString.call(e),
            Error(
              o(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t,
              ),
            );
        }
        function vo(t) {
          return (0, t._init)(t._payload);
        }
        function xo(t) {
          function e(e, n) {
            if (t) {
              var i = e.deletions;
              null === i ? (e.deletions = [n], e.flags |= 16) : i.push(n);
            }
          }
          function n(n, i) {
            if (!t) return null;
            for (; null !== i;) e(n, i), i = i.sibling;
            return null;
          }
          function i(t, e) {
            for (t = new Map(); null !== e;) {
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                e = e.sibling;
            }
            return t;
          }
          function r(t, e) {
            return (t = Lc(t, e)).index = 0, t.sibling = null, t;
          }
          function a(e, n, i) {
            return e.index = i,
              t
                ? null !== (i = e.alternate)
                  ? (i = i.index) < n ? (e.flags |= 2, n) : i
                  : (e.flags |= 2, n)
                : (e.flags |= 1048576, n);
          }
          function s(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function l(t, e, n, i) {
            return null === e || 6 !== e.tag
              ? ((e = zc(n, t.mode, i)).return = t, e)
              : ((e = r(e, n)).return = t, e);
          }
          function c(t, e, n, i) {
            var o = n.type;
            return o === k ? d(t, e, n.props.children, i, n.key) : null !== e &&
                (e.elementType === o ||
                  "object" === typeof o && null !== o && o.$$typeof === D &&
                    vo(o) === e.type)
              ? ((i = r(e, n.props)).ref = bo(t, e, n), i.return = t, i)
              : ((i = Ac(n.type, n.key, n.props, null, t.mode, i)).ref = bo(
                t,
                e,
                n,
              ),
                i.return = t,
                i);
          }
          function u(t, e, n, i) {
            return null === e || 4 !== e.tag ||
                e.stateNode.containerInfo !== n.containerInfo ||
                e.stateNode.implementation !== n.implementation
              ? ((e = Nc(n, t.mode, i)).return = t, e)
              : ((e = r(e, n.children || [])).return = t, e);
          }
          function d(t, e, n, i, o) {
            return null === e || 7 !== e.tag
              ? ((e = jc(n, t.mode, i, o)).return = t, e)
              : ((e = r(e, n)).return = t, e);
          }
          function h(t, e, n) {
            if ("string" === typeof e && "" !== e || "number" === typeof e) {
              return (e = zc("" + e, t.mode, n)).return = t, e;
            }
            if ("object" === typeof e && null !== e) {
              switch (e.$$typeof) {
                case w:
                  return (n = Ac(e.type, e.key, e.props, null, t.mode, n)).ref =
                    bo(t, null, e),
                    n.return = t,
                    n;
                case _:
                  return (e = Nc(e, t.mode, n)).return = t, e;
                case D:
                  return h(t, (0, e._init)(e._payload), n);
              }
              if (et(e) || j(e)) {
                return (e = jc(e, t.mode, n, null)).return = t, e;
              }
              yo(t, e);
            }
            return null;
          }
          function f(t, e, n, i) {
            var r = null !== e ? e.key : null;
            if ("string" === typeof n && "" !== n || "number" === typeof n) {
              return null !== r ? null : l(t, e, "" + n, i);
            }
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === r ? c(t, e, n, i) : null;
                case _:
                  return n.key === r ? u(t, e, n, i) : null;
                case D:
                  return f(t, e, (r = n._init)(n._payload), i);
              }
              if (et(n) || j(n)) return null !== r ? null : d(t, e, n, i, null);
              yo(t, n);
            }
            return null;
          }
          function p(t, e, n, i, r) {
            if ("string" === typeof i && "" !== i || "number" === typeof i) {
              return l(e, t = t.get(n) || null, "" + i, r);
            }
            if ("object" === typeof i && null !== i) {
              switch (i.$$typeof) {
                case w:
                  return c(
                    e,
                    t = t.get(null === i.key ? n : i.key) || null,
                    i,
                    r,
                  );
                case _:
                  return u(
                    e,
                    t = t.get(null === i.key ? n : i.key) || null,
                    i,
                    r,
                  );
                case D:
                  return p(t, e, n, (0, i._init)(i._payload), r);
              }
              if (et(i) || j(i)) return d(e, t = t.get(n) || null, i, r, null);
              yo(e, i);
            }
            return null;
          }
          function g(r, o, s, l) {
            for (
              var c = null, u = null, d = o, g = o = 0, m = null;
              null !== d && g < s.length;
              g++
            ) {
              d.index > g ? (m = d, d = null) : m = d.sibling;
              var b = f(r, d, s[g], l);
              if (null === b) {
                null === d && (d = m);
                break;
              }
              t && d && null === b.alternate && e(r, d),
                o = a(b, o, g),
                null === u ? c = b : u.sibling = b,
                u = b,
                d = m;
            }
            if (g === s.length) return n(r, d), ro && Gr(r, g), c;
            if (null === d) {
              for (; g < s.length; g++) {
                null !== (d = h(r, s[g], l)) &&
                  (o = a(d, o, g), null === u ? c = d : u.sibling = d, u = d);
              }
              return ro && Gr(r, g), c;
            }
            for (d = i(r, d); g < s.length; g++) {
              null !== (m = p(d, r, g, s[g], l)) &&
                (t && null !== m.alternate &&
                  d.delete(null === m.key ? g : m.key),
                  o = a(m, o, g),
                  null === u ? c = m : u.sibling = m,
                  u = m);
            }
            return t && d.forEach(function (t) {
              return e(r, t);
            }),
              ro && Gr(r, g),
              c;
          }
          function m(r, s, l, c) {
            var u = j(l);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (l = u.call(l))) throw Error(o(151));
            for (
              var d = u = null, g = s, m = s = 0, b = null, y = l.next();
              null !== g && !y.done;
              m++, y = l.next()
            ) {
              g.index > m ? (b = g, g = null) : b = g.sibling;
              var v = f(r, g, y.value, c);
              if (null === v) {
                null === g && (g = b);
                break;
              }
              t && g && null === v.alternate && e(r, g),
                s = a(v, s, m),
                null === d ? u = v : d.sibling = v,
                d = v,
                g = b;
            }
            if (y.done) return n(r, g), ro && Gr(r, m), u;
            if (null === g) {
              for (; !y.done; m++, y = l.next()) {
                null !== (y = h(r, y.value, c)) &&
                  (s = a(y, s, m), null === d ? u = y : d.sibling = y, d = y);
              }
              return ro && Gr(r, m), u;
            }
            for (g = i(r, g); !y.done; m++, y = l.next()) {
              null !== (y = p(g, r, m, y.value, c)) &&
                (t && null !== y.alternate &&
                  g.delete(null === y.key ? m : y.key),
                  s = a(y, s, m),
                  null === d ? u = y : d.sibling = y,
                  d = y);
            }
            return t && g.forEach(function (t) {
              return e(r, t);
            }),
              ro && Gr(r, m),
              u;
          }
          return function t(i, o, a, l) {
            if (
              "object" === typeof a && null !== a && a.type === k &&
              null === a.key && (a = a.props.children),
                "object" === typeof a && null !== a
            ) {
              switch (a.$$typeof) {
                case w:
                  t: {
                    for (var c = a.key, u = o; null !== u;) {
                      if (u.key === c) {
                        if ((c = a.type) === k) {
                          if (7 === u.tag) {
                            n(i, u.sibling),
                              (o = r(u, a.props.children)).return = i,
                              i = o;
                            break t;
                          }
                        } else if (
                          u.elementType === c ||
                          "object" === typeof c && null !== c &&
                            c.$$typeof === D && vo(c) === u.type
                        ) {
                          n(i, u.sibling),
                            (o = r(u, a.props)).ref = bo(i, u, a),
                            o.return = i,
                            i = o;
                          break t;
                        }
                        n(i, u);
                        break;
                      }
                      e(i, u), u = u.sibling;
                    }
                    a.type === k
                      ? ((o = jc(a.props.children, i.mode, l, a.key)).return =
                        i,
                        i = o)
                      : ((l = Ac(a.type, a.key, a.props, null, i.mode, l)).ref =
                        bo(i, o, a),
                        l.return = i,
                        i = l);
                  }
                  return s(i);
                case _:
                  t: {
                    for (u = a.key; null !== o;) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === a.containerInfo &&
                          o.stateNode.implementation === a.implementation
                        ) {
                          n(i, o.sibling),
                            (o = r(o, a.children || [])).return = i,
                            i = o;
                          break t;
                        }
                        n(i, o);
                        break;
                      }
                      e(i, o), o = o.sibling;
                    }
                    (o = Nc(a, i.mode, l)).return = i, i = o;
                  }
                  return s(i);
                case D:
                  return t(i, o, (u = a._init)(a._payload), l);
              }
              if (et(a)) return g(i, o, a, l);
              if (j(a)) return m(i, o, a, l);
              yo(i, a);
            }
            return "string" === typeof a && "" !== a || "number" === typeof a
              ? (a = "" + a,
                null !== o && 6 === o.tag
                  ? (n(i, o.sibling), (o = r(o, a)).return = i, i = o)
                  : (n(i, o), (o = zc(a, i.mode, l)).return = i, i = o),
                s(i))
              : n(i, o);
          };
        }
        var wo = xo(!0),
          _o = xo(!1),
          ko = Sr(null),
          So = null,
          Eo = null,
          Mo = null;
        function Co() {
          Mo = Eo = So = null;
        }
        function Po(t) {
          var e = ko.current;
          Er(ko), t._currentValue = e;
        }
        function To(t, e, n) {
          for (; null !== t;) {
            var i = t.alternate;
            if (
              (t.childLanes & e) !== e
                ? (t.childLanes |= e, null !== i && (i.childLanes |= e))
                : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e),
                t === n
            ) break;
            t = t.return;
          }
        }
        function Oo(t, e) {
          So = t,
            Mo = Eo = null,
            null !== (t = t.dependencies) && null !== t.firstContext &&
            (0 !== (t.lanes & e) && (vs = !0), t.firstContext = null);
        }
        function Ro(t) {
          var e = t._currentValue;
          if (Mo !== t) {
            if (t = { context: t, memoizedValue: e, next: null }, null === Eo) {
              if (null === So) {
                throw Error(o(308));
              }
              Eo = t, So.dependencies = { lanes: 0, firstContext: t };
            } else Eo = Eo.next = t;
          }
          return e;
        }
        var Do = null;
        function Lo(t) {
          null === Do ? Do = [t] : Do.push(t);
        }
        function Ao(t, e, n, i) {
          var r = e.interleaved;
          return null === r
            ? (n.next = n, Lo(e))
            : (n.next = r.next, r.next = n),
            e.interleaved = n,
            jo(t, i);
        }
        function jo(t, e) {
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
        var Fo = !1;
        function zo(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function No(t, e) {
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
        function Io(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Bo(t, e, n) {
          var i = t.updateQueue;
          if (null === i) return null;
          if (i = i.shared, 0 !== (2 & Pl)) {
            var r = i.pending;
            return null === r ? e.next = e : (e.next = r.next, r.next = e),
              i.pending = e,
              jo(t, n);
          }
          return null === (r = i.interleaved)
            ? (e.next = e, Lo(i))
            : (e.next = r.next, r.next = e),
            i.interleaved = e,
            jo(t, n);
        }
        function Vo(t, e, n) {
          if (
            null !== (e = e.updateQueue) && (e = e.shared, 0 !== (4194240 & n))
          ) {
            var i = e.lanes;
            n |= i &= t.pendingLanes, e.lanes = n, ye(t, n);
          }
        }
        function Uo(t, e) {
          var n = t.updateQueue, i = t.alternate;
          if (null !== i && n === (i = i.updateQueue)) {
            var r = null, o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? r = o = a : o = o.next = a, n = n.next;
              } while (null !== n);
              null === o ? r = o = e : o = o.next = e;
            } else r = o = e;
            return n = {
              baseState: i.baseState,
              firstBaseUpdate: r,
              lastBaseUpdate: o,
              shared: i.shared,
              effects: i.effects,
            },
              void (t.updateQueue = n);
          }
          null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e,
            n.lastBaseUpdate = e;
        }
        function Ho(t, e, n, i) {
          var r = t.updateQueue;
          Fo = !1;
          var o = r.firstBaseUpdate, a = r.lastBaseUpdate, s = r.shared.pending;
          if (null !== s) {
            r.shared.pending = null;
            var l = s, c = l.next;
            l.next = null, null === a ? o = c : a.next = c, a = l;
            var u = t.alternate;
            null !== u &&
              ((s = (u = u.updateQueue).lastBaseUpdate) !== a &&
                (null === s ? u.firstBaseUpdate = c : s.next = c,
                  u.lastBaseUpdate = l));
          }
          if (null !== o) {
            var d = r.baseState;
            for (a = 0, u = c = l = null, s = o;;) {
              var h = s.lane, f = s.eventTime;
              if ((i & h) === h) {
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
                  switch (h = e, f = n, g.tag) {
                    case 1:
                      if ("function" === typeof (p = g.payload)) {
                        d = p.call(f, d, h);
                        break t;
                      }
                      d = p;
                      break t;
                    case 3:
                      p.flags = -65537 & p.flags | 128;
                    case 0:
                      if (
                        null ===
                          (h = "function" === typeof (p = g.payload)
                            ? p.call(f, d, h)
                            : p) || void 0 === h
                      ) break t;
                      d = z({}, d, h);
                      break t;
                    case 2:
                      Fo = !0;
                  }
                }
                null !== s.callback && 0 !== s.lane &&
                  (t.flags |= 64,
                    null === (h = r.effects) ? r.effects = [s] : h.push(s));
              } else {f = {
                  eventTime: f,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                },
                  null === u ? (c = u = f, l = d) : u = u.next = f,
                  a |= h;}
              if (null === (s = s.next)) {
                if (null === (s = r.shared.pending)) break;
                s = (h = s).next,
                  h.next = null,
                  r.lastBaseUpdate = h,
                  r.shared.pending = null;
              }
            }
            if (
              null === u && (l = d),
                r.baseState = l,
                r.firstBaseUpdate = c,
                r.lastBaseUpdate = u,
                null !== (e = r.shared.interleaved)
            ) {
              r = e;
              do {
                a |= r.lane, r = r.next;
              } while (r !== e);
            } else null === o && (r.shared.lanes = 0);
            Fl |= a, t.lanes = a, t.memoizedState = d;
          }
        }
        function Wo(t, e, n) {
          if (t = e.effects, e.effects = null, null !== t) {
            for (e = 0; e < t.length; e++) {
              var i = t[e], r = i.callback;
              if (null !== r) {
                if (i.callback = null, i = n, "function" !== typeof r) {
                  throw Error(o(191, r));
                }
                r.call(i);
              }
            }
          }
        }
        var $o = {}, qo = Sr($o), Yo = Sr($o), Qo = Sr($o);
        function Ko(t) {
          if (t === $o) throw Error(o(174));
          return t;
        }
        function Xo(t, e) {
          switch (Mr(Qo, e), Mr(Yo, t), Mr(qo, $o), t = e.nodeType) {
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
          Er(qo), Mr(qo, e);
        }
        function Jo() {
          Er(qo), Er(Yo), Er(Qo);
        }
        function Go(t) {
          Ko(Qo.current);
          var e = Ko(qo.current), n = lt(e, t.type);
          e !== n && (Mr(Yo, t), Mr(qo, n));
        }
        function Zo(t) {
          Yo.current === t && (Er(qo), Er(Yo));
        }
        var ta = Sr(0);
        function ea(t) {
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
        var na = [];
        function ia() {
          for (var t = 0; t < na.length; t++) {
            na[t]._workInProgressVersionPrimary = null;
          }
          na.length = 0;
        }
        var ra = x.ReactCurrentDispatcher,
          oa = x.ReactCurrentBatchConfig,
          aa = 0,
          sa = null,
          la = null,
          ca = null,
          ua = !1,
          da = !1,
          ha = 0,
          fa = 0;
        function pa() {
          throw Error(o(321));
        }
        function ga(t, e) {
          if (null === e) return !1;
          for (var n = 0; n < e.length && n < t.length; n++) {
            if (!si(t[n], e[n])) return !1;
          }
          return !0;
        }
        function ma(t, e, n, i, r, a) {
          if (
            aa = a,
              sa = e,
              e.memoizedState = null,
              e.updateQueue = null,
              e.lanes = 0,
              ra.current = null === t || null === t.memoizedState ? Za : ts,
              t = n(i, r),
              da
          ) {
            a = 0;
            do {
              if (da = !1, ha = 0, 25 <= a) throw Error(o(301));
              a += 1,
                ca = la = null,
                e.updateQueue = null,
                ra.current = es,
                t = n(i, r);
            } while (da);
          }
          if (
            ra.current = Ga,
              e = null !== la && null !== la.next,
              aa = 0,
              ca = la = sa = null,
              ua = !1,
              e
          ) throw Error(o(300));
          return t;
        }
        function ba() {
          var t = 0 !== ha;
          return ha = 0, t;
        }
        function ya() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === ca ? sa.memoizedState = ca = t : ca = ca.next = t, ca;
        }
        function va() {
          if (null === la) {
            var t = sa.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = la.next;
          var e = null === ca ? sa.memoizedState : ca.next;
          if (null !== e) ca = e, la = t;
          else {
            if (null === t) throw Error(o(310));
            t = {
              memoizedState: (la = t).memoizedState,
              baseState: la.baseState,
              baseQueue: la.baseQueue,
              queue: la.queue,
              next: null,
            }, null === ca ? sa.memoizedState = ca = t : ca = ca.next = t;
          }
          return ca;
        }
        function xa(t, e) {
          return "function" === typeof e ? e(t) : e;
        }
        function wa(t) {
          var e = va(), n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var i = la, r = i.baseQueue, a = n.pending;
          if (null !== a) {
            if (null !== r) {
              var s = r.next;
              r.next = a.next, a.next = s;
            }
            i.baseQueue = r = a, n.pending = null;
          }
          if (null !== r) {
            a = r.next, i = i.baseState;
            var l = s = null, c = null, u = a;
            do {
              var d = u.lane;
              if ((aa & d) === d) {
                null !== c &&
                (c = c.next = {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }), i = u.hasEagerState ? u.eagerState : t(i, u.action);
              } else {
                var h = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? (l = c = h, s = i) : c = c.next = h,
                  sa.lanes |= d,
                  Fl |= d;
              }
              u = u.next;
            } while (null !== u && u !== a);
            null === c ? s = i : c.next = l,
              si(i, e.memoizedState) || (vs = !0),
              e.memoizedState = i,
              e.baseState = s,
              e.baseQueue = c,
              n.lastRenderedState = i;
          }
          if (null !== (t = n.interleaved)) {
            r = t;
            do {
              a = r.lane, sa.lanes |= a, Fl |= a, r = r.next;
            } while (r !== t);
          } else null === r && (n.lanes = 0);
          return [e.memoizedState, n.dispatch];
        }
        function _a(t) {
          var e = va(), n = e.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = t;
          var i = n.dispatch, r = n.pending, a = e.memoizedState;
          if (null !== r) {
            n.pending = null;
            var s = r = r.next;
            do {
              a = t(a, s.action), s = s.next;
            } while (s !== r);
            si(a, e.memoizedState) || (vs = !0),
              e.memoizedState = a,
              null === e.baseQueue && (e.baseState = a),
              n.lastRenderedState = a;
          }
          return [a, i];
        }
        function ka() {}
        function Sa(t, e) {
          var n = sa, i = va(), r = e(), a = !si(i.memoizedState, r);
          if (
            a && (i.memoizedState = r, vs = !0),
              i = i.queue,
              Fa(Ca.bind(null, n, i, t), [t]),
              i.getSnapshot !== e || a ||
              null !== ca && 1 & ca.memoizedState.tag
          ) {
            if (
              n.flags |= 2048,
                Ra(9, Ma.bind(null, n, i, r, e), void 0, null),
                null === Tl
            ) throw Error(o(349));
            0 !== (30 & aa) || Ea(n, e, r);
          }
          return r;
        }
        function Ea(t, e, n) {
          t.flags |= 16384,
            t = { getSnapshot: e, value: n },
            null === (e = sa.updateQueue)
              ? (e = { lastEffect: null, stores: null },
                sa.updateQueue = e,
                e.stores = [t])
              : null === (n = e.stores)
              ? e.stores = [t]
              : n.push(t);
        }
        function Ma(t, e, n, i) {
          e.value = n, e.getSnapshot = i, Pa(e) && Ta(t);
        }
        function Ca(t, e, n) {
          return n(function () {
            Pa(e) && Ta(t);
          });
        }
        function Pa(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !si(t, n);
          } catch (i) {
            return !0;
          }
        }
        function Ta(t) {
          var e = jo(t, 1);
          null !== e && nc(e, t, 1, -1);
        }
        function Oa(t) {
          var e = ya();
          return "function" === typeof t && (t = t()),
            e.memoizedState = e.baseState = t,
            t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xa,
              lastRenderedState: t,
            },
            e.queue = t,
            t = t.dispatch = Qa.bind(null, sa, t),
            [e.memoizedState, t];
        }
        function Ra(t, e, n, i) {
          return t = { tag: t, create: e, destroy: n, deps: i, next: null },
            null === (e = sa.updateQueue)
              ? (e = { lastEffect: null, stores: null },
                sa.updateQueue = e,
                e.lastEffect = t.next = t)
              : null === (n = e.lastEffect)
              ? e.lastEffect = t.next = t
              : (i = n.next, n.next = t, t.next = i, e.lastEffect = t),
            t;
        }
        function Da() {
          return va().memoizedState;
        }
        function La(t, e, n, i) {
          var r = ya();
          sa.flags |= t,
            r.memoizedState = Ra(1 | e, n, void 0, void 0 === i ? null : i);
        }
        function Aa(t, e, n, i) {
          var r = va();
          i = void 0 === i ? null : i;
          var o = void 0;
          if (null !== la) {
            var a = la.memoizedState;
            if (o = a.destroy, null !== i && ga(i, a.deps)) {
              return void (r.memoizedState = Ra(e, n, o, i));
            }
          }
          sa.flags |= t, r.memoizedState = Ra(1 | e, n, o, i);
        }
        function ja(t, e) {
          return La(8390656, 8, t, e);
        }
        function Fa(t, e) {
          return Aa(2048, 8, t, e);
        }
        function za(t, e) {
          return Aa(4, 2, t, e);
        }
        function Na(t, e) {
          return Aa(4, 4, t, e);
        }
        function Ia(t, e) {
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
        function Ba(t, e, n) {
          return n = null !== n && void 0 !== n ? n.concat([t]) : null,
            Aa(4, 4, Ia.bind(null, e, t), n);
        }
        function Va() {}
        function Ua(t, e) {
          var n = va();
          e = void 0 === e ? null : e;
          var i = n.memoizedState;
          return null !== i && null !== e && ga(e, i[1])
            ? i[0]
            : (n.memoizedState = [t, e], t);
        }
        function Ha(t, e) {
          var n = va();
          e = void 0 === e ? null : e;
          var i = n.memoizedState;
          return null !== i && null !== e && ga(e, i[1])
            ? i[0]
            : (t = t(), n.memoizedState = [t, e], t);
        }
        function Wa(t, e, n) {
          return 0 === (21 & aa)
            ? (t.baseState && (t.baseState = !1, vs = !0), t.memoizedState = n)
            : (si(n, e) || (n = ge(), sa.lanes |= n, Fl |= n, t.baseState = !0),
              e);
        }
        function $a(t, e) {
          var n = ve;
          ve = 0 !== n && 4 > n ? n : 4, t(!0);
          var i = oa.transition;
          oa.transition = {};
          try {
            t(!1), e();
          } finally {
            ve = n, oa.transition = i;
          }
        }
        function qa() {
          return va().memoizedState;
        }
        function Ya(t, e, n) {
          var i = ec(t);
          if (
            n = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }, Ka(t)
          ) Xa(e, n);
          else if (null !== (n = Ao(t, e, n, i))) {
            nc(n, t, i, tc()), Ja(n, e, i);
          }
        }
        function Qa(t, e, n) {
          var i = ec(t),
            r = {
              lane: i,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ka(t)) Xa(e, r);
          else {
            var o = t.alternate;
            if (
              0 === t.lanes && (null === o || 0 === o.lanes) &&
              null !== (o = e.lastRenderedReducer)
            ) {
              try {
                var a = e.lastRenderedState, s = o(a, n);
                if (r.hasEagerState = !0, r.eagerState = s, si(s, a)) {
                  var l = e.interleaved;
                  return null === l
                    ? (r.next = r, Lo(e))
                    : (r.next = l.next, l.next = r),
                    void (e.interleaved = r);
                }
              } catch (c) {}
            }
            null !== (n = Ao(t, e, r, i)) &&
              (nc(n, t, i, r = tc()), Ja(n, e, i));
          }
        }
        function Ka(t) {
          var e = t.alternate;
          return t === sa || null !== e && e === sa;
        }
        function Xa(t, e) {
          da = ua = !0;
          var n = t.pending;
          null === n ? e.next = e : (e.next = n.next, n.next = e),
            t.pending = e;
        }
        function Ja(t, e, n) {
          if (0 !== (4194240 & n)) {
            var i = e.lanes;
            n |= i &= t.pendingLanes, e.lanes = n, ye(t, n);
          }
        }
        var Ga = {
            readContext: Ro,
            useCallback: pa,
            useContext: pa,
            useEffect: pa,
            useImperativeHandle: pa,
            useInsertionEffect: pa,
            useLayoutEffect: pa,
            useMemo: pa,
            useReducer: pa,
            useRef: pa,
            useState: pa,
            useDebugValue: pa,
            useDeferredValue: pa,
            useTransition: pa,
            useMutableSource: pa,
            useSyncExternalStore: pa,
            useId: pa,
            unstable_isNewReconciler: !1,
          },
          Za = {
            readContext: Ro,
            useCallback: function (t, e) {
              return ya().memoizedState = [t, void 0 === e ? null : e], t;
            },
            useContext: Ro,
            useEffect: ja,
            useImperativeHandle: function (t, e, n) {
              return n = null !== n && void 0 !== n ? n.concat([t]) : null,
                La(4194308, 4, Ia.bind(null, e, t), n);
            },
            useLayoutEffect: function (t, e) {
              return La(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return La(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var n = ya();
              return e = void 0 === e ? null : e,
                t = t(),
                n.memoizedState = [t, e],
                t;
            },
            useReducer: function (t, e, n) {
              var i = ya();
              return e = void 0 !== n ? n(e) : e,
                i.memoizedState = i.baseState = e,
                t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                },
                i.queue = t,
                t = t.dispatch = Ya.bind(null, sa, t),
                [i.memoizedState, t];
            },
            useRef: function (t) {
              return t = { current: t }, ya().memoizedState = t;
            },
            useState: Oa,
            useDebugValue: Va,
            useDeferredValue: function (t) {
              return ya().memoizedState = t;
            },
            useTransition: function () {
              var t = Oa(!1), e = t[0];
              return t = $a.bind(null, t[1]), ya().memoizedState = t, [e, t];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, n) {
              var i = sa, r = ya();
              if (ro) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (n = e(), null === Tl) throw Error(o(349));
                0 !== (30 & aa) || Ea(i, e, n);
              }
              r.memoizedState = n;
              var a = { value: n, getSnapshot: e };
              return r.queue = a,
                ja(Ca.bind(null, i, a, t), [t]),
                i.flags |= 2048,
                Ra(9, Ma.bind(null, i, a, n, e), void 0, null),
                n;
            },
            useId: function () {
              var t = ya(), e = Tl.identifierPrefix;
              if (ro) {
                var n = Jr;
                e = ":" + e + "R" +
                  (n = (Xr & ~(1 << 32 - ae(Xr) - 1)).toString(32) + n),
                  0 < (n = ha++) && (e += "H" + n.toString(32)),
                  e += ":";
              } else e = ":" + e + "r" + (n = fa++).toString(32) + ":";
              return t.memoizedState = e;
            },
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Ro,
            useCallback: Ua,
            useContext: Ro,
            useEffect: Fa,
            useImperativeHandle: Ba,
            useInsertionEffect: za,
            useLayoutEffect: Na,
            useMemo: Ha,
            useReducer: wa,
            useRef: Da,
            useState: function () {
              return wa(xa);
            },
            useDebugValue: Va,
            useDeferredValue: function (t) {
              return Wa(va(), la.memoizedState, t);
            },
            useTransition: function () {
              return [wa(xa)[0], va().memoizedState];
            },
            useMutableSource: ka,
            useSyncExternalStore: Sa,
            useId: qa,
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Ro,
            useCallback: Ua,
            useContext: Ro,
            useEffect: Fa,
            useImperativeHandle: Ba,
            useInsertionEffect: za,
            useLayoutEffect: Na,
            useMemo: Ha,
            useReducer: _a,
            useRef: Da,
            useState: function () {
              return _a(xa);
            },
            useDebugValue: Va,
            useDeferredValue: function (t) {
              var e = va();
              return null === la
                ? e.memoizedState = t
                : Wa(e, la.memoizedState, t);
            },
            useTransition: function () {
              return [_a(xa)[0], va().memoizedState];
            },
            useMutableSource: ka,
            useSyncExternalStore: Sa,
            useId: qa,
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
        function is(t, e, n, i) {
          n = null === (n = n(i, e = t.memoizedState)) || void 0 === n
            ? e
            : z({}, e, n),
            t.memoizedState = n,
            0 === t.lanes && (t.updateQueue.baseState = n);
        }
        var rs = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Ut(t) === t;
          },
          enqueueSetState: function (t, e, n) {
            t = t._reactInternals;
            var i = tc(), r = ec(t), o = Io(i, r);
            o.payload = e,
              void 0 !== n && null !== n && (o.callback = n),
              null !== (e = Bo(t, o, r)) && (nc(e, t, r, i), Vo(e, t, r));
          },
          enqueueReplaceState: function (t, e, n) {
            t = t._reactInternals;
            var i = tc(), r = ec(t), o = Io(i, r);
            o.tag = 1,
              o.payload = e,
              void 0 !== n && null !== n && (o.callback = n),
              null !== (e = Bo(t, o, r)) && (nc(e, t, r, i), Vo(e, t, r));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var n = tc(), i = ec(t), r = Io(n, i);
            r.tag = 2,
              void 0 !== e && null !== e && (r.callback = e),
              null !== (e = Bo(t, r, i)) && (nc(e, t, i, n), Vo(e, t, i));
          },
        };
        function os(t, e, n, i, r, o, a) {
          return "function" === typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(i, o, a)
            : !e.prototype || !e.prototype.isPureReactComponent ||
              (!li(n, i) || !li(r, o));
        }
        function as(t, e, n) {
          var i = !1, r = Cr, o = e.contextType;
          return "object" === typeof o && null !== o
            ? o = Ro(o)
            : (r = Dr(e) ? Or : Pr.current,
              o = (i = null !== (i = e.contextTypes) && void 0 !== i)
                ? Rr(t, r)
                : Cr),
            e = new e(n, o),
            t.memoizedState = null !== e.state && void 0 !== e.state
              ? e.state
              : null,
            e.updater = rs,
            t.stateNode = e,
            e._reactInternals = t,
            i &&
            ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r,
              t.__reactInternalMemoizedMaskedChildContext = o),
            e;
        }
        function ss(t, e, n, i) {
          t = e.state,
            "function" === typeof e.componentWillReceiveProps &&
            e.componentWillReceiveProps(n, i),
            "function" === typeof e.UNSAFE_componentWillReceiveProps &&
            e.UNSAFE_componentWillReceiveProps(n, i),
            e.state !== t && rs.enqueueReplaceState(e, e.state, null);
        }
        function ls(t, e, n, i) {
          var r = t.stateNode;
          r.props = n, r.state = t.memoizedState, r.refs = {}, zo(t);
          var o = e.contextType;
          "object" === typeof o && null !== o
            ? r.context = Ro(o)
            : (o = Dr(e) ? Or : Pr.current, r.context = Rr(t, o)),
            r.state = t.memoizedState,
            "function" === typeof (o = e.getDerivedStateFromProps) &&
            (is(t, e, o, n), r.state = t.memoizedState),
            "function" === typeof e.getDerivedStateFromProps ||
            "function" === typeof r.getSnapshotBeforeUpdate ||
            "function" !== typeof r.UNSAFE_componentWillMount &&
              "function" !== typeof r.componentWillMount ||
            (e = r.state,
              "function" === typeof r.componentWillMount &&
              r.componentWillMount(),
              "function" === typeof r.UNSAFE_componentWillMount &&
              r.UNSAFE_componentWillMount(),
              e !== r.state && rs.enqueueReplaceState(r, r.state, null),
              Ho(t, n, r, i),
              r.state = t.memoizedState),
            "function" === typeof r.componentDidMount && (t.flags |= 4194308);
        }
        function cs(t, e) {
          try {
            var n = "", i = e;
            do {
              n += V(i), i = i.return;
            } while (i);
            var r = n;
          } catch (o) {
            r = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: t, source: e, stack: r, digest: null };
        }
        function us(t, e, n) {
          return {
            value: t,
            source: null,
            stack: null != n ? n : null,
            digest: null != e ? e : null,
          };
        }
        function ds(t, e) {
          try {
            console.error(e.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var hs = "function" === typeof WeakMap ? WeakMap : Map;
        function fs(t, e, n) {
          (n = Io(-1, n)).tag = 3, n.payload = { element: null };
          var i = e.value;
          return n.callback = function () {
            Wl || (Wl = !0, $l = i), ds(0, e);
          },
            n;
        }
        function ps(t, e, n) {
          (n = Io(-1, n)).tag = 3;
          var i = t.type.getDerivedStateFromError;
          if ("function" === typeof i) {
            var r = e.value;
            n.payload = function () {
              return i(r);
            },
              n.callback = function () {
                ds(0, e);
              };
          }
          var o = t.stateNode;
          return null !== o && "function" === typeof o.componentDidCatch &&
            (n.callback = function () {
              ds(0, e),
                "function" !== typeof i &&
                (null === ql ? ql = new Set([this]) : ql.add(this));
              var t = e.stack;
              this.componentDidCatch(e.value, {
                componentStack: null !== t ? t : "",
              });
            }),
            n;
        }
        function gs(t, e, n) {
          var i = t.pingCache;
          if (null === i) {
            i = t.pingCache = new hs();
            var r = new Set();
            i.set(e, r);
          } else void 0 === (r = i.get(e)) && (r = new Set(), i.set(e, r));
          r.has(n) || (r.add(n), t = Ec.bind(null, t, e, n), e.then(t, t));
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
        function bs(t, e, n, i, r) {
          return 0 === (1 & t.mode)
            ? (t === e
              ? t.flags |= 65536
              : (t.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate
                  ? n.tag = 17
                  : ((e = Io(-1, 1)).tag = 2, Bo(n, e, 1))),
                n.lanes |= 1),
              t)
            : (t.flags |= 65536, t.lanes = r, t);
        }
        var ys = x.ReactCurrentOwner, vs = !1;
        function xs(t, e, n, i) {
          e.child = null === t ? _o(e, null, n, i) : wo(e, t.child, n, i);
        }
        function ws(t, e, n, i, r) {
          n = n.render;
          var o = e.ref;
          return Oo(e, r),
            i = ma(t, e, n, i, o, r),
            n = ba(),
            null === t || vs
              ? (ro && n && to(e), e.flags |= 1, xs(t, e, i, r), e.child)
              : (e.updateQueue = t.updateQueue,
                e.flags &= -2053,
                t.lanes &= ~r,
                Ws(t, e, r));
        }
        function _s(t, e, n, i, r) {
          if (null === t) {
            var o = n.type;
            return "function" !== typeof o || Dc(o) ||
                void 0 !== o.defaultProps || null !== n.compare ||
                void 0 !== n.defaultProps
              ? ((t = Ac(n.type, null, i, e, e.mode, r)).ref = e.ref,
                t.return = e,
                e.child = t)
              : (e.tag = 15, e.type = o, ks(t, e, o, i, r));
          }
          if (o = t.child, 0 === (t.lanes & r)) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : li)(a, i) && t.ref === e.ref
            ) return Ws(t, e, r);
          }
          return e.flags |= 1,
            (t = Lc(o, i)).ref = e.ref,
            t.return = e,
            e.child = t;
        }
        function ks(t, e, n, i, r) {
          if (null !== t) {
            var o = t.memoizedProps;
            if (li(o, i) && t.ref === e.ref) {
              if (vs = !1, e.pendingProps = i = o, 0 === (t.lanes & r)) {
                return e.lanes = t.lanes, Ws(t, e, r);
              }
              0 !== (131072 & t.flags) && (vs = !0);
            }
          }
          return Ms(t, e, n, i, r);
        }
        function Ss(t, e, n) {
          var i = e.pendingProps,
            r = i.children,
            o = null !== t ? t.memoizedState : null;
          if ("hidden" === i.mode) {
            if (0 === (1 & e.mode)) {
              e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              },
                Mr(Ll, Dl),
                Dl |= n;
            } else {
              if (0 === (1073741824 & n)) {
                return t = null !== o ? o.baseLanes | n : n,
                  e.lanes = e.childLanes = 1073741824,
                  e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  },
                  e.updateQueue = null,
                  Mr(Ll, Dl),
                  Dl |= t,
                  null;
              }
              e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              },
                i = null !== o ? o.baseLanes : n,
                Mr(Ll, Dl),
                Dl |= i;
            }
          } else {null !== o
              ? (i = o.baseLanes | n, e.memoizedState = null)
              : i = n,
              Mr(Ll, Dl),
              Dl |= i;}
          return xs(t, e, r, n), e.child;
        }
        function Es(t, e) {
          var n = e.ref;
          (null === t && null !== n || null !== t && t.ref !== n) &&
            (e.flags |= 512, e.flags |= 2097152);
        }
        function Ms(t, e, n, i, r) {
          var o = Dr(n) ? Or : Pr.current;
          return o = Rr(e, o),
            Oo(e, r),
            n = ma(t, e, n, i, o, r),
            i = ba(),
            null === t || vs
              ? (ro && i && to(e), e.flags |= 1, xs(t, e, n, r), e.child)
              : (e.updateQueue = t.updateQueue,
                e.flags &= -2053,
                t.lanes &= ~r,
                Ws(t, e, r));
        }
        function Cs(t, e, n, i, r) {
          if (Dr(n)) {
            var o = !0;
            Fr(e);
          } else o = !1;
          if (Oo(e, r), null === e.stateNode) {
            Hs(t, e), as(e, n, i), ls(e, n, i, r), i = !0;
          } else if (null === t) {
            var a = e.stateNode, s = e.memoizedProps;
            a.props = s;
            var l = a.context, c = n.contextType;
            "object" === typeof c && null !== c
              ? c = Ro(c)
              : c = Rr(e, c = Dr(n) ? Or : Pr.current);
            var u = n.getDerivedStateFromProps,
              d = "function" === typeof u ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            d ||
            "function" !== typeof a.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof a.componentWillReceiveProps ||
            (s !== i || l !== c) && ss(e, a, i, c), Fo = !1;
            var h = e.memoizedState;
            a.state = h,
              Ho(e, i, a, r),
              l = e.memoizedState,
              s !== i || h !== l || Tr.current || Fo
                ? ("function" === typeof u &&
                  (is(e, n, u, i), l = e.memoizedState),
                  (s = Fo || os(e, n, s, i, h, l, c))
                    ? (d ||
                      "function" !== typeof a.UNSAFE_componentWillMount &&
                        "function" !== typeof a.componentWillMount ||
                      ("function" === typeof a.componentWillMount &&
                        a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                      (e.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                      (e.flags |= 4194308),
                      e.memoizedProps = i,
                      e.memoizedState = l),
                  a.props = i,
                  a.state = l,
                  a.context = c,
                  i = s)
                : ("function" === typeof a.componentDidMount &&
                  (e.flags |= 4194308),
                  i = !1);
          } else {
            a = e.stateNode,
              No(t, e),
              s = e.memoizedProps,
              c = e.type === e.elementType ? s : ns(e.type, s),
              a.props = c,
              d = e.pendingProps,
              h = a.context,
              "object" === typeof (l = n.contextType) && null !== l
                ? l = Ro(l)
                : l = Rr(e, l = Dr(n) ? Or : Pr.current);
            var f = n.getDerivedStateFromProps;
            (u = "function" === typeof f ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
            "function" !== typeof a.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof a.componentWillReceiveProps ||
            (s !== d || h !== l) && ss(e, a, i, l),
              Fo = !1,
              h = e.memoizedState,
              a.state = h,
              Ho(e, i, a, r);
            var p = e.memoizedState;
            s !== d || h !== p || Tr.current || Fo
              ? ("function" === typeof f &&
                (is(e, n, f, i), p = e.memoizedState),
                (c = Fo || os(e, n, c, i, h, p, l) || !1)
                  ? (u ||
                    "function" !== typeof a.UNSAFE_componentWillUpdate &&
                      "function" !== typeof a.componentWillUpdate ||
                    ("function" === typeof a.componentWillUpdate &&
                      a.componentWillUpdate(i, p, l),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(i, p, l)),
                    "function" === typeof a.componentDidUpdate &&
                    (e.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                    (e.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                    s === t.memoizedProps && h === t.memoizedState ||
                    (e.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                    s === t.memoizedProps && h === t.memoizedState ||
                    (e.flags |= 1024),
                    e.memoizedProps = i,
                    e.memoizedState = p),
                a.props = i,
                a.state = p,
                a.context = l,
                i = c)
              : ("function" !== typeof a.componentDidUpdate ||
                s === t.memoizedProps && h === t.memoizedState ||
                (e.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                s === t.memoizedProps && h === t.memoizedState ||
                (e.flags |= 1024),
                i = !1);
          }
          return Ps(t, e, n, i, o, r);
        }
        function Ps(t, e, n, i, r, o) {
          Es(t, e);
          var a = 0 !== (128 & e.flags);
          if (!i && !a) return r && zr(e, n, !1), Ws(t, e, o);
          i = e.stateNode, ys.current = e;
          var s = a && "function" !== typeof n.getDerivedStateFromError
            ? null
            : i.render();
          return e.flags |= 1,
            null !== t && a
              ? (e.child = wo(e, t.child, null, o), e.child = wo(e, null, s, o))
              : xs(t, e, s, o),
            e.memoizedState = i.state,
            r && zr(e, n, !0),
            e.child;
        }
        function Ts(t) {
          var e = t.stateNode;
          e.pendingContext
            ? Ar(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && Ar(0, e.context, !1), Xo(t, e.containerInfo);
        }
        function Os(t, e, n, i, r) {
          return po(), go(r), e.flags |= 256, xs(t, e, n, i), e.child;
        }
        var Rs,
          Ds,
          Ls,
          As,
          js = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fs(t) {
          return { baseLanes: t, cachePool: null, transitions: null };
        }
        function zs(t, e, n) {
          var i,
            r = e.pendingProps,
            a = ta.current,
            s = !1,
            l = 0 !== (128 & e.flags);
          if (
            (i = l) ||
            (i = (null === t || null !== t.memoizedState) && 0 !== (2 & a)),
              i
                ? (s = !0, e.flags &= -129)
                : null !== t && null === t.memoizedState || (a |= 1),
              Mr(ta, 1 & a),
              null === t
          ) {
            return co(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 === (1 & e.mode)
                  ? e.lanes = 1
                  : "$!" === t.data
                  ? e.lanes = 8
                  : e.lanes = 1073741824,
                  null)
                : (l = r.children,
                  t = r.fallback,
                  s
                    ? (r = e.mode,
                      s = e.child,
                      l = { mode: "hidden", children: l },
                      0 === (1 & r) && null !== s
                        ? (s.childLanes = 0, s.pendingProps = l)
                        : s = Fc(l, r, 0, null),
                      t = jc(t, r, n, null),
                      s.return = e,
                      t.return = e,
                      s.sibling = t,
                      e.child = s,
                      e.child.memoizedState = Fs(n),
                      e.memoizedState = js,
                      t)
                    : Ns(e, l));
          }
          if (null !== (a = t.memoizedState) && null !== (i = a.dehydrated)) {
            return function (t, e, n, i, r, a, s) {
              if (n) {
                return 256 & e.flags
                  ? (e.flags &= -257, Is(t, e, s, i = us(Error(o(422)))))
                  : null !== e.memoizedState
                  ? (e.child = t.child, e.flags |= 128, null)
                  : (a = i.fallback,
                    r = e.mode,
                    i = Fc(
                      { mode: "visible", children: i.children },
                      r,
                      0,
                      null,
                    ),
                    (a = jc(a, r, s, null)).flags |= 2,
                    i.return = e,
                    a.return = e,
                    i.sibling = a,
                    e.child = i,
                    0 !== (1 & e.mode) && wo(e, t.child, null, s),
                    e.child.memoizedState = Fs(s),
                    e.memoizedState = js,
                    a);
              }
              if (0 === (1 & e.mode)) return Is(t, e, s, null);
              if ("$!" === r.data) {
                if (i = r.nextSibling && r.nextSibling.dataset) {
                  var l = i.dgst;
                }
                return i = l, Is(t, e, s, i = us(a = Error(o(419)), i, void 0));
              }
              if (l = 0 !== (s & t.childLanes), vs || l) {
                if (null !== (i = Tl)) {
                  switch (s & -s) {
                    case 4:
                      r = 2;
                      break;
                    case 16:
                      r = 8;
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
                      r = 32;
                      break;
                    case 536870912:
                      r = 268435456;
                      break;
                    default:
                      r = 0;
                  }
                  0 !== (r = 0 !== (r & (i.suspendedLanes | s)) ? 0 : r) &&
                    r !== a.retryLane &&
                    (a.retryLane = r, jo(t, r), nc(i, t, r, -1));
                }
                return gc(), Is(t, e, s, i = us(Error(o(421))));
              }
              return "$?" === r.data
                ? (e.flags |= 128,
                  e.child = t.child,
                  e = Cc.bind(null, t),
                  r._reactRetry = e,
                  null)
                : (t = a.treeContext,
                  io = cr(r.nextSibling),
                  no = e,
                  ro = !0,
                  oo = null,
                  null !== t &&
                  (Yr[Qr++] = Xr,
                    Yr[Qr++] = Jr,
                    Yr[Qr++] = Kr,
                    Xr = t.id,
                    Jr = t.overflow,
                    Kr = e),
                  e = Ns(e, i.children),
                  e.flags |= 4096,
                  e);
            }(t, e, l, r, i, a, n);
          }
          if (s) {
            s = r.fallback, l = e.mode, i = (a = t.child).sibling;
            var c = { mode: "hidden", children: r.children };
            return 0 === (1 & l) && e.child !== a
              ? ((r = e.child).childLanes = 0,
                r.pendingProps = c,
                e.deletions = null)
              : (r = Lc(a, c)).subtreeFlags = 14680064 & a.subtreeFlags,
              null !== i ? s = Lc(i, s) : (s = jc(s, l, n, null)).flags |= 2,
              s.return = e,
              r.return = e,
              r.sibling = s,
              e.child = r,
              r = s,
              s = e.child,
              l = null === (l = t.child.memoizedState) ? Fs(n) : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              },
              s.memoizedState = l,
              s.childLanes = t.childLanes & ~n,
              e.memoizedState = js,
              r;
          }
          return t = (s = t.child).sibling,
            r = Lc(s, { mode: "visible", children: r.children }),
            0 === (1 & e.mode) && (r.lanes = n),
            r.return = e,
            r.sibling = null,
            null !== t &&
            (null === (n = e.deletions)
              ? (e.deletions = [t], e.flags |= 16)
              : n.push(t)),
            e.child = r,
            e.memoizedState = null,
            r;
        }
        function Ns(t, e) {
          return (e = Fc({ mode: "visible", children: e }, t.mode, 0, null))
            .return = t,
            t.child = e;
        }
        function Is(t, e, n, i) {
          return null !== i && go(i),
            wo(e, t.child, null, n),
            (t = Ns(e, e.pendingProps.children)).flags |= 2,
            e.memoizedState = null,
            t;
        }
        function Bs(t, e, n) {
          t.lanes |= e;
          var i = t.alternate;
          null !== i && (i.lanes |= e), To(t.return, e, n);
        }
        function Vs(t, e, n, i, r) {
          var o = t.memoizedState;
          null === o
            ? t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: i,
              tail: n,
              tailMode: r,
            }
            : (o.isBackwards = e,
              o.rendering = null,
              o.renderingStartTime = 0,
              o.last = i,
              o.tail = n,
              o.tailMode = r);
        }
        function Us(t, e, n) {
          var i = e.pendingProps, r = i.revealOrder, o = i.tail;
          if (xs(t, e, i.children, n), 0 !== (2 & (i = ta.current))) {
            i = 1 & i | 2, e.flags |= 128;
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
            i &= 1;
          }
          if (Mr(ta, i), 0 === (1 & e.mode)) e.memoizedState = null;
          else {switch (r) {
              case "forwards":
                for (n = e.child, r = null; null !== n;) {
                  null !== (t = n.alternate) && null === ea(t) && (r = n),
                    n = n.sibling;
                }
                null === (n = r)
                  ? (r = e.child, e.child = null)
                  : (r = n.sibling, n.sibling = null), Vs(e, !1, r, n, o);
                break;
              case "backwards":
                for (n = null, r = e.child, e.child = null; null !== r;) {
                  if (null !== (t = r.alternate) && null === ea(t)) {
                    e.child = r;
                    break;
                  }
                  t = r.sibling, r.sibling = n, n = r, r = t;
                }
                Vs(e, !0, n, null, o);
                break;
              case "together":
                Vs(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }}
          return e.child;
        }
        function Hs(t, e) {
          0 === (1 & e.mode) && null !== t &&
            (t.alternate = null, e.alternate = null, e.flags |= 2);
        }
        function Ws(t, e, n) {
          if (
            null !== t && (e.dependencies = t.dependencies),
              Fl |= e.lanes,
              0 === (n & e.childLanes)
          ) return null;
          if (null !== t && e.child !== t.child) throw Error(o(153));
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
          if (!ro) {
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
                  var i = null;
                  null !== n;
                ) null !== n.alternate && (i = n), n = n.sibling;
                null === i
                  ? e || null === t.tail ? t.tail = null : t.tail.sibling = null
                  : i.sibling = null;
            }
          }
        }
        function qs(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            n = 0,
            i = 0;
          if (e) {
            for (var r = t.child; null !== r;) {
              n |= r.lanes | r.childLanes,
                i |= 14680064 & r.subtreeFlags,
                i |= 14680064 & r.flags,
                r.return = t,
                r = r.sibling;
            }
          } else {for (r = t.child; null !== r;) {
              n |= r.lanes | r.childLanes,
                i |= r.subtreeFlags,
                i |= r.flags,
                r.return = t,
                r = r.sibling;
            }}
          return t.subtreeFlags |= i, t.childLanes = n, e;
        }
        function Ys(t, e, n) {
          var i = e.pendingProps;
          switch (eo(e), e.tag) {
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
              return Dr(e.type) && Lr(), qs(e), null;
            case 3:
              return i = e.stateNode,
                Jo(),
                Er(Tr),
                Er(Pr),
                ia(),
                i.pendingContext &&
                (i.context = i.pendingContext, i.pendingContext = null),
                null !== t && null !== t.child ||
                (ho(e) ? e.flags |= 4 : null === t ||
                  t.memoizedState.isDehydrated && 0 === (256 & e.flags) ||
                  (e.flags |= 1024, null !== oo && (ac(oo), oo = null))),
                Ds(t, e),
                qs(e),
                null;
            case 5:
              Zo(e);
              var r = Ko(Qo.current);
              if (n = e.type, null !== t && null != e.stateNode) {
                Ls(t, e, n, i, r),
                  t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
              } else {
                if (!i) {
                  if (null === e.stateNode) throw Error(o(166));
                  return qs(e), null;
                }
                if (t = Ko(qo.current), ho(e)) {
                  i = e.stateNode, n = e.type;
                  var a = e.memoizedProps;
                  switch (i[hr] = e, i[fr] = a, t = 0 !== (1 & e.mode), n) {
                    case "dialog":
                      Ii("cancel", i), Ii("close", i);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ii("load", i);
                      break;
                    case "video":
                    case "audio":
                      for (r = 0; r < ji.length; r++) Ii(ji[r], i);
                      break;
                    case "source":
                      Ii("error", i);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ii("error", i), Ii("load", i);
                      break;
                    case "details":
                      Ii("toggle", i);
                      break;
                    case "input":
                      X(i, a), Ii("invalid", i);
                      break;
                    case "select":
                      i._wrapperState = { wasMultiple: !!a.multiple },
                        Ii("invalid", i);
                      break;
                    case "textarea":
                      rt(i, a), Ii("invalid", i);
                  }
                  for (var l in yt(n, a), r = null, a) {
                    if (a.hasOwnProperty(l)) {
                      var c = a[l];
                      "children" === l
                        ? "string" === typeof c
                          ? i.textContent !== c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Gi(i.textContent, c, t),
                              r = ["children", c])
                          : "number" === typeof c && i.textContent !== "" + c &&
                            (!0 !== a.suppressHydrationWarning &&
                              Gi(i.textContent, c, t),
                              r = ["children", "" + c])
                        : s.hasOwnProperty(l) && null != c &&
                          "onScroll" === l && Ii("scroll", i);
                    }
                  }
                  switch (n) {
                    case "input":
                      q(i), Z(i, a, !0);
                      break;
                    case "textarea":
                      q(i), at(i);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (i.onclick = Zi);
                  }
                  i = r, e.updateQueue = i, null !== i && (e.flags |= 4);
                } else {
                  l = 9 === r.nodeType ? r : r.ownerDocument,
                    "http://www.w3.org/1999/xhtml" === t && (t = st(n)),
                    "http://www.w3.org/1999/xhtml" === t
                      ? "script" === n
                        ? ((t = l.createElement("div")).innerHTML =
                          "<script><\/script>",
                          t = t.removeChild(t.firstChild))
                        : "string" === typeof i.is
                        ? t = l.createElement(n, { is: i.is })
                        : (t = l.createElement(n),
                          "select" === n &&
                          (l = t,
                            i.multiple
                              ? l.multiple = !0
                              : i.size && (l.size = i.size)))
                      : t = l.createElementNS(t, n),
                    t[hr] = e,
                    t[fr] = i,
                    Rs(t, e, !1, !1),
                    e.stateNode = t;
                  t: {
                    switch (l = vt(n, i), n) {
                      case "dialog":
                        Ii("cancel", t), Ii("close", t), r = i;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ii("load", t), r = i;
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < ji.length; r++) Ii(ji[r], t);
                        r = i;
                        break;
                      case "source":
                        Ii("error", t), r = i;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ii("error", t), Ii("load", t), r = i;
                        break;
                      case "details":
                        Ii("toggle", t), r = i;
                        break;
                      case "input":
                        X(t, i), r = K(t, i), Ii("invalid", t);
                        break;
                      case "option":
                      default:
                        r = i;
                        break;
                      case "select":
                        t._wrapperState = { wasMultiple: !!i.multiple },
                          r = z({}, i, { value: void 0 }),
                          Ii("invalid", t);
                        break;
                      case "textarea":
                        rt(t, i), r = it(t, i), Ii("invalid", t);
                    }
                    for (a in yt(n, r), c = r) {
                      if (c.hasOwnProperty(a)) {
                        var u = c[a];
                        "style" === a
                          ? mt(t, u)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (u = u ? u.__html : void 0) && dt(t, u)
                          : "children" === a
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && ht(t, u)
                            : "number" === typeof u && ht(t, "" + u)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a && (s.hasOwnProperty(a)
                              ? null != u && "onScroll" === a && Ii("scroll", t)
                              : null != u && v(t, a, u, l));
                      }
                    }
                    switch (n) {
                      case "input":
                        q(t), Z(t, i, !1);
                        break;
                      case "textarea":
                        q(t), at(t);
                        break;
                      case "option":
                        null != i.value &&
                          t.setAttribute("value", "" + W(i.value));
                        break;
                      case "select":
                        t.multiple = !!i.multiple,
                          null != (a = i.value)
                            ? nt(t, !!i.multiple, a, !1)
                            : null != i.defaultValue &&
                              nt(t, !!i.multiple, i.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof r.onClick && (t.onclick = Zi);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        i = !!i.autoFocus;
                        break t;
                      case "img":
                        i = !0;
                        break t;
                      default:
                        i = !1;
                    }
                  }
                  i && (e.flags |= 4);
                }
                null !== e.ref && (e.flags |= 512, e.flags |= 2097152);
              }
              return qs(e), null;
            case 6:
              if (t && null != e.stateNode) As(t, e, t.memoizedProps, i);
              else {
                if ("string" !== typeof i && null === e.stateNode) {
                  throw Error(o(166));
                }
                if (n = Ko(Qo.current), Ko(qo.current), ho(e)) {
                  if (
                    i = e.stateNode,
                      n = e.memoizedProps,
                      i[hr] = e,
                      (a = i.nodeValue !== n) && null !== (t = no)
                  ) {
                    switch (t.tag) {
                      case 3:
                        Gi(i.nodeValue, n, 0 !== (1 & t.mode));
                        break;
                      case 5:
                        !0 !== t.memoizedProps.suppressHydrationWarning &&
                          Gi(i.nodeValue, n, 0 !== (1 & t.mode));
                    }
                  }
                  a && (e.flags |= 4);
                } else {(i = (9 === n.nodeType ? n : n.ownerDocument)
                    .createTextNode(i))[hr] = e,
                    e.stateNode = i;}
              }
              return qs(e), null;
            case 13:
              if (
                Er(ta),
                  i = e.memoizedState,
                  null === t ||
                  null !== t.memoizedState &&
                    null !== t.memoizedState.dehydrated
              ) {
                if (
                  ro && null !== io && 0 !== (1 & e.mode) &&
                  0 === (128 & e.flags)
                ) fo(), po(), e.flags |= 98560, a = !1;
                else if (a = ho(e), null !== i && null !== i.dehydrated) {
                  if (null === t) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a = null !== (a = e.memoizedState)
                        ? a.dehydrated
                        : null)
                    ) throw Error(o(317));
                    a[hr] = e;
                  } else {po(),
                      0 === (128 & e.flags) && (e.memoizedState = null),
                      e.flags |= 4;}
                  qs(e), a = !1;
                } else null !== oo && (ac(oo), oo = null), a = !0;
                if (!a) return 65536 & e.flags ? e : null;
              }
              return 0 !== (128 & e.flags)
                ? (e.lanes = n, e)
                : ((i = null !== i) !==
                    (null !== t && null !== t.memoizedState) &&
                  i &&
                  (e.child.flags |= 8192,
                    0 !== (1 & e.mode) && (null === t || 0 !== (1 & ta.current)
                      ? 0 === Al && (Al = 3)
                      : gc())),
                  null !== e.updateQueue && (e.flags |= 4),
                  qs(e),
                  null);
            case 4:
              return Jo(),
                Ds(t, e),
                null === t && Ui(e.stateNode.containerInfo),
                qs(e),
                null;
            case 10:
              return Po(e.type._context), qs(e), null;
            case 19:
              if (Er(ta), null === (a = e.memoizedState)) return qs(e), null;
              if (i = 0 !== (128 & e.flags), null === (l = a.rendering)) {
                if (i) {
                  $s(a, !1);
                } else {
                  if (0 !== Al || null !== t && 0 !== (128 & t.flags)) {
                    for (t = e.child; null !== t;) {
                      if (null !== (l = ea(t))) {
                        for (
                          e.flags |= 128,
                            $s(a, !1),
                            null !== (i = l.updateQueue) &&
                            (e.updateQueue = i, e.flags |= 4),
                            e.subtreeFlags = 0,
                            i = n,
                            n = e.child;
                          null !== n;
                        ) {
                          t = i,
                            (a = n).flags &= 14680066,
                            null === (l = a.alternate)
                              ? (a.childLanes = 0,
                                a.lanes = t,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null)
                              : (a.childLanes = l.childLanes,
                                a.lanes = l.lanes,
                                a.child = l.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = l.memoizedProps,
                                a.memoizedState = l.memoizedState,
                                a.updateQueue = l.updateQueue,
                                a.type = l.type,
                                t = l.dependencies,
                                a.dependencies = null === t ? null : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                }),
                            n = n.sibling;
                        }
                        return Mr(ta, 1 & ta.current | 2), e.child;
                      }
                      t = t.sibling;
                    }
                  }
                  null !== a.tail && Jt() > Ul &&
                    (e.flags |= 128, i = !0, $s(a, !1), e.lanes = 4194304);
                }
              } else {
                if (!i) {
                  if (null !== (t = ea(l))) {
                    if (
                      e.flags |= 128,
                        i = !0,
                        null !== (n = t.updateQueue) &&
                        (e.updateQueue = n, e.flags |= 4),
                        $s(a, !0),
                        null === a.tail && "hidden" === a.tailMode &&
                        !l.alternate && !ro
                    ) return qs(e), null;
                  } else {2 * Jt() - a.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      (e.flags |= 128, i = !0, $s(a, !1), e.lanes = 4194304);}
                }
                a.isBackwards
                  ? (l.sibling = e.child, e.child = l)
                  : (null !== (n = a.last) ? n.sibling = l : e.child = l,
                    a.last = l);
              }
              return null !== a.tail
                ? (e = a.tail,
                  a.rendering = e,
                  a.tail = e.sibling,
                  a.renderingStartTime = Jt(),
                  e.sibling = null,
                  n = ta.current,
                  Mr(ta, i ? 1 & n | 2 : 1 & n),
                  e)
                : (qs(e), null);
            case 22:
            case 23:
              return dc(),
                i = null !== e.memoizedState,
                null !== t && null !== t.memoizedState !== i &&
                (e.flags |= 8192),
                i && 0 !== (1 & e.mode)
                  ? 0 !== (1073741824 & Dl) &&
                    (qs(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : qs(e),
                null;
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, e.tag));
        }
        function Qs(t, e) {
          switch (eo(e), e.tag) {
            case 1:
              return Dr(e.type) && Lr(),
                65536 & (t = e.flags) ? (e.flags = -65537 & t | 128, e) : null;
            case 3:
              return Jo(),
                Er(Tr),
                Er(Pr),
                ia(),
                0 !== (65536 & (t = e.flags)) && 0 === (128 & t)
                  ? (e.flags = -65537 & t | 128, e)
                  : null;
            case 5:
              return Zo(e), null;
            case 13:
              if (
                Er(ta), null !== (t = e.memoizedState) && null !== t.dehydrated
              ) {
                if (null === e.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (t = e.flags)
                ? (e.flags = -65537 & t | 128, e)
                : null;
            case 19:
              return Er(ta), null;
            case 4:
              return Jo(), null;
            case 10:
              return Po(e.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        Rs = function (t, e) {
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
          Ls = function (t, e, n, i) {
            var r = t.memoizedProps;
            if (r !== i) {
              t = e.stateNode, Ko(qo.current);
              var o, a = null;
              switch (n) {
                case "input":
                  r = K(t, r), i = K(t, i), a = [];
                  break;
                case "select":
                  r = z({}, r, { value: void 0 }),
                    i = z({}, i, { value: void 0 }),
                    a = [];
                  break;
                case "textarea":
                  r = it(t, r), i = it(t, i), a = [];
                  break;
                default:
                  "function" !== typeof r.onClick &&
                    "function" === typeof i.onClick && (t.onclick = Zi);
              }
              for (u in yt(n, i), n = null, r) {
                if (
                  !i.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u]
                ) {
                  if ("style" === u) {
                    var l = r[u];
                    for (o in l) {
                      l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
                    }
                  } else {"dangerouslySetInnerHTML" !== u && "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u && "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? a || (a = [])
                        : (a = a || []).push(u, null));}
                }
              }
              for (u in i) {
                var c = i[u];
                if (
                  l = null != r ? r[u] : void 0,
                    i.hasOwnProperty(u) && c !== l && (null != c || null != l)
                ) {
                  if ("style" === u) {
                    if (l) {
                      for (o in l) {
                        !l.hasOwnProperty(o) || c && c.hasOwnProperty(o) ||
                          (n || (n = {}), n[o] = "");
                      }
                      for (o in c) {
                        c.hasOwnProperty(o) && l[o] !== c[o] &&
                          (n || (n = {}), n[o] = c[o]);
                      }
                    } else n || (a || (a = []), a.push(u, n)), n = c;
                  } else {"dangerouslySetInnerHTML" === u
                      ? (c = c ? c.__html : void 0,
                        l = l ? l.__html : void 0,
                        null != c && l !== c && (a = a || []).push(u, c))
                      : "children" === u
                      ? "string" !== typeof c && "number" !== typeof c ||
                        (a = a || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u && (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ii("scroll", t),
                            a || l === c || (a = []))
                          : (a = a || []).push(u, c));}
                }
              }
              n && (a = a || []).push("style", n);
              var u = a;
              (e.updateQueue = u) && (e.flags |= 4);
            }
          },
          As = function (t, e, n, i) {
            n !== i && (e.flags |= 4);
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
              } catch (i) {
                Sc(t, e, i);
              }
            } else n.current = null;
          }
        }
        function tl(t, e, n) {
          try {
            n();
          } catch (i) {
            Sc(t, e, i);
          }
        }
        var el = !1;
        function nl(t, e, n) {
          var i = e.updateQueue;
          if (null !== (i = null !== i ? i.lastEffect : null)) {
            var r = i = i.next;
            do {
              if ((r.tag & t) === t) {
                var o = r.destroy;
                r.destroy = void 0, void 0 !== o && tl(e, n, o);
              }
              r = r.next;
            } while (r !== i);
          }
        }
        function il(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var n = e = e.next;
            do {
              if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i();
              }
              n = n.next;
            } while (n !== e);
          }
        }
        function rl(t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            t.tag, t = n, "function" === typeof e ? e(t) : e.current = t;
          }
        }
        function ol(t) {
          var e = t.alternate;
          null !== e && (t.alternate = null, ol(e)),
            t.child = null,
            t.deletions = null,
            t.sibling = null,
            5 === t.tag &&
            (null !== (e = t.stateNode) &&
              (delete e[hr],
                delete e[fr],
                delete e[gr],
                delete e[mr],
                delete e[br])),
            t.stateNode = null,
            t.return = null,
            t.dependencies = null,
            t.memoizedProps = null,
            t.memoizedState = null,
            t.pendingProps = null,
            t.stateNode = null,
            t.updateQueue = null;
        }
        function al(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function sl(t) {
          t: for (;;) {
            for (; null === t.sibling;) {
              if (null === t.return || al(t.return)) return null;
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
          var i = t.tag;
          if (5 === i || 6 === i) {
            t = t.stateNode,
              e
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(t, e)
                  : n.insertBefore(t, e)
                : (8 === n.nodeType
                  ? (e = n.parentNode).insertBefore(t, n)
                  : (e = n).appendChild(t),
                  null !== (n = n._reactRootContainer) && void 0 !== n ||
                  null !== e.onclick || (e.onclick = Zi));
          } else if (4 !== i && null !== (t = t.child)) {
            for (ll(t, e, n), t = t.sibling; null !== t;) {
              ll(t, e, n), t = t.sibling;
            }
          }
        }
        function cl(t, e, n) {
          var i = t.tag;
          if (5 === i || 6 === i) {
            t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
          } else if (4 !== i && null !== (t = t.child)) {
            for (cl(t, e, n), t = t.sibling; null !== t;) {
              cl(t, e, n), t = t.sibling;
            }
          }
        }
        var ul = null, dl = !1;
        function hl(t, e, n) {
          for (n = n.child; null !== n;) fl(t, e, n), n = n.sibling;
        }
        function fl(t, e, n) {
          if (oe && "function" === typeof oe.onCommitFiberUnmount) {
            try {
              oe.onCommitFiberUnmount(re, n);
            } catch (s) {}
          }
          switch (n.tag) {
            case 5:
              Xs || Zs(n, e);
            case 6:
              var i = ul, r = dl;
              ul = null,
                hl(t, e, n),
                dl = r,
                null !== (ul = i) && (dl
                  ? (t = ul,
                    n = n.stateNode,
                    8 === t.nodeType
                      ? t.parentNode.removeChild(n)
                      : t.removeChild(n))
                  : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (dl
                  ? (t = ul,
                    n = n.stateNode,
                    8 === t.nodeType
                      ? lr(t.parentNode, n)
                      : 1 === t.nodeType && lr(t, n),
                    Ue(t))
                  : lr(ul, n.stateNode));
              break;
            case 4:
              i = ul,
                r = dl,
                ul = n.stateNode.containerInfo,
                dl = !0,
                hl(t, e, n),
                ul = i,
                dl = r;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                (null !== (i = n.updateQueue) && null !== (i = i.lastEffect))
              ) {
                r = i = i.next;
                do {
                  var o = r, a = o.destroy;
                  o = o.tag,
                    void 0 !== a && (0 !== (2 & o) || 0 !== (4 & o)) &&
                    tl(n, e, a),
                    r = r.next;
                } while (r !== i);
              }
              hl(t, e, n);
              break;
            case 1:
              if (
                !Xs &&
                (Zs(n, e),
                  "function" === typeof (i = n.stateNode).componentWillUnmount)
              ) {
                try {
                  i.props = n.memoizedProps,
                    i.state = n.memoizedState,
                    i.componentWillUnmount();
                } catch (s) {
                  Sc(n, e, s);
                }
              }
              hl(t, e, n);
              break;
            case 21:
              hl(t, e, n);
              break;
            case 22:
              1 & n.mode
                ? (Xs = (i = Xs) || null !== n.memoizedState,
                  hl(t, e, n),
                  Xs = i)
                : hl(t, e, n);
              break;
            default:
              hl(t, e, n);
          }
        }
        function pl(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var n = t.stateNode;
            null === n && (n = t.stateNode = new Js()),
              e.forEach(function (e) {
                var i = Pc.bind(null, t, e);
                n.has(e) || (n.add(e), e.then(i, i));
              });
          }
        }
        function gl(t, e) {
          var n = e.deletions;
          if (null !== n) {
            for (var i = 0; i < n.length; i++) {
              var r = n[i];
              try {
                var a = t, s = e, l = s;
                t: for (; null !== l;) {
                  switch (l.tag) {
                    case 5:
                      ul = l.stateNode, dl = !1;
                      break t;
                    case 3:
                    case 4:
                      ul = l.stateNode.containerInfo, dl = !0;
                      break t;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(o(160));
                fl(a, s, r), ul = null, dl = !1;
                var c = r.alternate;
                null !== c && (c.return = null), r.return = null;
              } catch (u) {
                Sc(r, e, u);
              }
            }
          }
          if (12854 & e.subtreeFlags) {
            for (e = e.child; null !== e;) ml(e, t), e = e.sibling;
          }
        }
        function ml(t, e) {
          var n = t.alternate, i = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (gl(e, t), bl(t), 4 & i) {
                try {
                  nl(3, t, t.return), il(3, t);
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
              gl(e, t), bl(t), 512 & i && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                gl(e, t),
                  bl(t),
                  512 & i && null !== n && Zs(n, n.return),
                  32 & t.flags
              ) {
                var r = t.stateNode;
                try {
                  ht(r, "");
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              if (4 & i && null != (r = t.stateNode)) {
                var a = t.memoizedProps,
                  s = null !== n ? n.memoizedProps : a,
                  l = t.type,
                  c = t.updateQueue;
                if (t.updateQueue = null, null !== c) {
                  try {
                    "input" === l && "radio" === a.type && null != a.name &&
                    J(r, a), vt(l, s);
                    var u = vt(l, a);
                    for (s = 0; s < c.length; s += 2) {
                      var d = c[s], h = c[s + 1];
                      "style" === d
                        ? mt(r, h)
                        : "dangerouslySetInnerHTML" === d
                        ? dt(r, h)
                        : "children" === d
                        ? ht(r, h)
                        : v(r, d, h, u);
                    }
                    switch (l) {
                      case "input":
                        G(r, a);
                        break;
                      case "textarea":
                        ot(r, a);
                        break;
                      case "select":
                        var f = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!a.multiple;
                        var p = a.value;
                        null != p
                          ? nt(r, !!a.multiple, p, !1)
                          : f !== !!a.multiple && (null != a.defaultValue
                            ? nt(r, !!a.multiple, a.defaultValue, !0)
                            : nt(r, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    r[fr] = a;
                  } catch (m) {
                    Sc(t, t.return, m);
                  }
                }
              }
              break;
            case 6:
              if (gl(e, t), bl(t), 4 & i) {
                if (null === t.stateNode) throw Error(o(162));
                r = t.stateNode, a = t.memoizedProps;
                try {
                  r.nodeValue = a;
                } catch (m) {
                  Sc(t, t.return, m);
                }
              }
              break;
            case 3:
              if (
                gl(e, t),
                  bl(t),
                  4 & i && null !== n && n.memoizedState.isDehydrated
              ) {
                try {
                  Ue(e.containerInfo);
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
                8192 & (r = t.child).flags &&
                (a = null !== r.memoizedState,
                  r.stateNode.isHidden = a,
                  !a ||
                  null !== r.alternate && null !== r.alternate.memoizedState ||
                  (Vl = Jt())),
                4 & i && pl(t);
              break;
            case 22:
              if (
                d = null !== n && null !== n.memoizedState,
                  1 & t.mode
                    ? (Xs = (u = Xs) || d, gl(e, t), Xs = u)
                    : gl(e, t),
                  bl(t),
                  8192 & i
              ) {
                if (
                  u = null !== t.memoizedState,
                    (t.stateNode.isHidden = u) && !d && 0 !== (1 & t.mode)
                ) {
                  for (Gs = t, d = t.child; null !== d;) {
                    for (h = Gs = d; null !== Gs;) {
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
                            i = f, n = f.return;
                            try {
                              e = i,
                                g.props = e.memoizedProps,
                                g.state = e.memoizedState,
                                g.componentWillUnmount();
                            } catch (m) {
                              Sc(i, n, m);
                            }
                          }
                          break;
                        case 5:
                          Zs(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            wl(h);
                            continue;
                          }
                      }
                      null !== p ? (p.return = f, Gs = p) : wl(h);
                    }
                    d = d.sibling;
                  }
                }
                t: for (d = null, h = t;;) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        r = h.stateNode,
                          u
                            ? "function" === typeof (a = r.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : a.display = "none"
                            : (l = h.stateNode,
                              s = void 0 !== (c = h.memoizedProps.style) &&
                                  null !== c && c.hasOwnProperty("display")
                                ? c.display
                                : null,
                              l.style.display = gt("display", s));
                      } catch (m) {
                        Sc(t, t.return, m);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d) {
                      try {
                        h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                      } catch (m) {
                        Sc(t, t.return, m);
                      }
                    }
                  } else if (
                    (22 !== h.tag && 23 !== h.tag || null === h.memoizedState ||
                      h === t) && null !== h.child
                  ) {
                    h.child.return = h, h = h.child;
                    continue;
                  }
                  if (h === t) break t;
                  for (; null === h.sibling;) {
                    if (null === h.return || h.return === t) break t;
                    d === h && (d = null), h = h.return;
                  }
                  d === h && (d = null),
                    h.sibling.return = h.return,
                    h = h.sibling;
                }
              }
              break;
            case 19:
              gl(e, t), bl(t), 4 & i && pl(t);
            case 21:
          }
        }
        function bl(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              t: {
                for (var n = t.return; null !== n;) {
                  if (al(n)) {
                    var i = n;
                    break t;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (i.tag) {
                case 5:
                  var r = i.stateNode;
                  32 & i.flags && (ht(r, ""), i.flags &= -33), cl(t, sl(t), r);
                  break;
                case 3:
                case 4:
                  var a = i.stateNode.containerInfo;
                  ll(t, sl(t), a);
                  break;
                default:
                  throw Error(o(161));
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
          for (var i = 0 !== (1 & t.mode); null !== Gs;) {
            var r = Gs, o = r.child;
            if (22 === r.tag && i) {
              var a = null !== r.memoizedState || Ks;
              if (!a) {
                var s = r.alternate,
                  l = null !== s && null !== s.memoizedState || Xs;
                s = Ks;
                var c = Xs;
                if (Ks = a, (Xs = l) && !c) {
                  for (Gs = r; null !== Gs;) {
                    l = (a = Gs).child,
                      22 === a.tag && null !== a.memoizedState
                        ? _l(r)
                        : null !== l
                        ? (l.return = a, Gs = l)
                        : _l(r);
                  }
                }
                for (; null !== o;) Gs = o, vl(o, e, n), o = o.sibling;
                Gs = r, Ks = s, Xs = c;
              }
              xl(t);
            } else {0 !== (8772 & r.subtreeFlags) && null !== o
                ? (o.return = r, Gs = o)
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
                      Xs || il(5, e);
                      break;
                    case 1:
                      var i = e.stateNode;
                      if (4 & e.flags && !Xs) {
                        if (null === n) i.componentDidMount();
                        else {
                          var r = e.elementType === e.type
                            ? n.memoizedProps
                            : ns(e.type, n.memoizedProps);
                          i.componentDidUpdate(
                            r,
                            n.memoizedState,
                            i.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      }
                      var a = e.updateQueue;
                      null !== a && Wo(e, a, i);
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
                        Wo(e, s, n);
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
                          var d = u.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Ue(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                }
                Xs || 512 & e.flags && rl(e);
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
                    il(4, e);
                  } catch (l) {
                    Sc(e, n, l);
                  }
                  break;
                case 1:
                  var i = e.stateNode;
                  if ("function" === typeof i.componentDidMount) {
                    var r = e.return;
                    try {
                      i.componentDidMount();
                    } catch (l) {
                      Sc(e, r, l);
                    }
                  }
                  var o = e.return;
                  try {
                    rl(e);
                  } catch (l) {
                    Sc(e, o, l);
                  }
                  break;
                case 5:
                  var a = e.return;
                  try {
                    rl(e);
                  } catch (l) {
                    Sc(e, a, l);
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
          El = x.ReactCurrentDispatcher,
          Ml = x.ReactCurrentOwner,
          Cl = x.ReactCurrentBatchConfig,
          Pl = 0,
          Tl = null,
          Ol = null,
          Rl = 0,
          Dl = 0,
          Ll = Sr(0),
          Al = 0,
          jl = null,
          Fl = 0,
          zl = 0,
          Nl = 0,
          Il = null,
          Bl = null,
          Vl = 0,
          Ul = 1 / 0,
          Hl = null,
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
            : 0 !== (2 & Pl) && 0 !== Rl
            ? Rl & -Rl
            : null !== mo.transition
            ? (0 === Zl && (Zl = ge()), Zl)
            : 0 !== (t = ve)
            ? t
            : t = void 0 === (t = window.event) ? 16 : Xe(t.type);
        }
        function nc(t, e, n, i) {
          if (50 < Xl) throw Xl = 0, Jl = null, Error(o(185));
          be(t, n, i),
            0 !== (2 & Pl) && t === Tl ||
            (t === Tl && (0 === (2 & Pl) && (zl |= n), 4 === Al && sc(t, Rl)),
              ic(t, i),
              1 === n && 0 === Pl && 0 === (1 & e.mode) &&
              (Ul = Jt() + 500, Ir && Ur()));
        }
        function ic(t, e) {
          var n = t.callbackNode;
          !function (t, e) {
            for (
              var n = t.suspendedLanes,
                i = t.pingedLanes,
                r = t.expirationTimes,
                o = t.pendingLanes;
              0 < o;
            ) {
              var a = 31 - ae(o), s = 1 << a, l = r[a];
              -1 === l
                ? 0 !== (s & n) && 0 === (s & i) || (r[a] = fe(s, e))
                : l <= e && (t.expiredLanes |= s), o &= ~s;
            }
          }(t, e);
          var i = he(t, t === Tl ? Rl : 0);
          if (0 === i) {
            null !== n && Qt(n), t.callbackNode = null, t.callbackPriority = 0;
          } else if (e = i & -i, t.callbackPriority !== e) {
            if (null != n && Qt(n), 1 === e) {
              0 === t.tag
                ? function (t) {
                  Ir = !0, Vr(t);
                }(lc.bind(null, t))
                : Vr(lc.bind(null, t)),
                ar(function () {
                  0 === (6 & Pl) && Ur();
                }),
                n = null;
            } else {
              switch (xe(i)) {
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
                  n = ie;
              }
              n = Tc(n, rc.bind(null, t));
            }
            t.callbackPriority = e, t.callbackNode = n;
          }
        }
        function rc(t, e) {
          if (Gl = -1, Zl = 0, 0 !== (6 & Pl)) throw Error(o(327));
          var n = t.callbackNode;
          if (_c() && t.callbackNode !== n) return null;
          var i = he(t, t === Tl ? Rl : 0);
          if (0 === i) return null;
          if (0 !== (30 & i) || 0 !== (i & t.expiredLanes) || e) e = mc(t, i);
          else {
            e = i;
            var r = Pl;
            Pl |= 2;
            var a = pc();
            for (
              Tl === t && Rl === e || (Hl = null, Ul = Jt() + 500, hc(t, e));;
            ) {
              try {
                yc();
                break;
              } catch (l) {
                fc(t, l);
              }
            }
            Co(),
              El.current = a,
              Pl = r,
              null !== Ol ? e = 0 : (Tl = null, Rl = 0, e = Al);
          }
          if (0 !== e) {
            if (
              2 === e && (0 !== (r = pe(t)) && (i = r, e = oc(t, r))), 1 === e
            ) throw n = jl, hc(t, 0), sc(t, i), ic(t, Jt()), n;
            if (6 === e) sc(t, i);
            else {
              if (
                r = t.current.alternate,
                  0 === (30 & i) && !function (t) {
                    for (var e = t;;) {
                      if (16384 & e.flags) {
                        var n = e.updateQueue;
                        if (null !== n && null !== (n = n.stores)) {
                          for (var i = 0; i < n.length; i++) {
                            var r = n[i], o = r.getSnapshot;
                            r = r.value;
                            try {
                              if (!si(o(), r)) return !1;
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
                  }(r) &&
                  (2 === (e = mc(t, i)) &&
                    (0 !== (a = pe(t)) && (i = a, e = oc(t, a))),
                    1 === e)
              ) throw n = jl, hc(t, 0), sc(t, i), ic(t, Jt()), n;
              switch (t.finishedWork = r, t.finishedLanes = i, e) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wc(t, Bl, Hl);
                  break;
                case 3:
                  if (
                    sc(t, i),
                      (130023424 & i) === i && 10 < (e = Vl + 500 - Jt())
                  ) {
                    if (0 !== he(t, 0)) break;
                    if (((r = t.suspendedLanes) & i) !== i) {
                      tc(), t.pingedLanes |= t.suspendedLanes & r;
                      break;
                    }
                    t.timeoutHandle = ir(wc.bind(null, t, Bl, Hl), e);
                    break;
                  }
                  wc(t, Bl, Hl);
                  break;
                case 4:
                  if (sc(t, i), (4194240 & i) === i) break;
                  for (e = t.eventTimes, r = -1; 0 < i;) {
                    var s = 31 - ae(i);
                    a = 1 << s, (s = e[s]) > r && (r = s), i &= ~a;
                  }
                  if (
                    i = r,
                      10 <
                        (i = (120 > (i = Jt() - i)
                          ? 120
                          : 480 > i
                          ? 480
                          : 1080 > i
                          ? 1080
                          : 1920 > i
                          ? 1920
                          : 3e3 > i
                          ? 3e3
                          : 4320 > i
                          ? 4320
                          : 1960 * Sl(i / 1960)) - i)
                  ) {
                    t.timeoutHandle = ir(wc.bind(null, t, Bl, Hl), i);
                    break;
                  }
                  wc(t, Bl, Hl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ic(t, Jt()), t.callbackNode === n ? rc.bind(null, t) : null;
        }
        function oc(t, e) {
          var n = Il;
          return t.current.memoizedState.isDehydrated &&
            (hc(t, e).flags |= 256),
            2 !== (t = mc(t, e)) && (e = Bl, Bl = n, null !== e && ac(e)),
            t;
        }
        function ac(t) {
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
            var n = 31 - ae(e), i = 1 << n;
            t[n] = -1, e &= ~i;
          }
        }
        function lc(t) {
          if (0 !== (6 & Pl)) throw Error(o(327));
          _c();
          var e = he(t, 0);
          if (0 === (1 & e)) return ic(t, Jt()), null;
          var n = mc(t, e);
          if (0 !== t.tag && 2 === n) {
            var i = pe(t);
            0 !== i && (e = i, n = oc(t, i));
          }
          if (1 === n) throw n = jl, hc(t, 0), sc(t, e), ic(t, Jt()), n;
          if (6 === n) throw Error(o(345));
          return t.finishedWork = t.current.alternate,
            t.finishedLanes = e,
            wc(t, Bl, Hl),
            ic(t, Jt()),
            null;
        }
        function cc(t, e) {
          var n = Pl;
          Pl |= 1;
          try {
            return t(e);
          } finally {
            0 === (Pl = n) && (Ul = Jt() + 500, Ir && Ur());
          }
        }
        function uc(t) {
          null !== Ql && 0 === Ql.tag && 0 === (6 & Pl) && _c();
          var e = Pl;
          Pl |= 1;
          var n = Cl.transition, i = ve;
          try {
            if (Cl.transition = null, ve = 1, t) return t();
          } finally {
            ve = i, Cl.transition = n, 0 === (6 & (Pl = e)) && Ur();
          }
        }
        function dc() {
          Dl = Ll.current, Er(Ll);
        }
        function hc(t, e) {
          t.finishedWork = null, t.finishedLanes = 0;
          var n = t.timeoutHandle;
          if (-1 !== n && (t.timeoutHandle = -1, rr(n)), null !== Ol) {
            for (n = Ol.return; null !== n;) {
              var i = n;
              switch (eo(i), i.tag) {
                case 1:
                  null !== (i = i.type.childContextTypes) && void 0 !== i &&
                    Lr();
                  break;
                case 3:
                  Jo(), Er(Tr), Er(Pr), ia();
                  break;
                case 5:
                  Zo(i);
                  break;
                case 4:
                  Jo();
                  break;
                case 13:
                case 19:
                  Er(ta);
                  break;
                case 10:
                  Po(i.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          }
          if (
            Tl = t,
              Ol = t = Lc(t.current, null),
              Rl = Dl = e,
              Al = 0,
              jl = null,
              Nl = zl = Fl = 0,
              Bl = Il = null,
              null !== Do
          ) {
            for (e = 0; e < Do.length; e++) {
              if (null !== (i = (n = Do[e]).interleaved)) {
                n.interleaved = null;
                var r = i.next, o = n.pending;
                if (null !== o) {
                  var a = o.next;
                  o.next = r, i.next = a;
                }
                n.pending = i;
              }
            }
            Do = null;
          }
          return t;
        }
        function fc(t, e) {
          for (;;) {
            var n = Ol;
            try {
              if (Co(), ra.current = Ga, ua) {
                for (var i = sa.memoizedState; null !== i;) {
                  var r = i.queue;
                  null !== r && (r.pending = null), i = i.next;
                }
                ua = !1;
              }
              if (
                aa = 0,
                  ca = la = sa = null,
                  da = !1,
                  ha = 0,
                  Ml.current = null,
                  null === n || null === n.return
              ) {
                Al = 1, jl = e, Ol = null;
                break;
              }
              t: {
                var a = t, s = n.return, l = n, c = e;
                if (
                  e = Rl,
                    l.flags |= 32768,
                    null !== c && "object" === typeof c &&
                    "function" === typeof c.then
                ) {
                  var u = c, d = l, h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes)
                      : (d.updateQueue = null, d.memoizedState = null);
                  }
                  var p = ms(s);
                  if (null !== p) {
                    p.flags &= -257,
                      bs(p, s, l, 0, e),
                      1 & p.mode && gs(a, u, e),
                      c = u;
                    var g = (e = p).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(c), e.updateQueue = m;
                    } else g.add(c);
                    break t;
                  }
                  if (0 === (1 & e)) {
                    gs(a, u, e), gc();
                    break t;
                  }
                  c = Error(o(426));
                } else if (ro && 1 & l.mode) {
                  var b = ms(s);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      bs(b, s, l, 0, e),
                      go(cs(c, l));
                    break t;
                  }
                }
                a = c = cs(c, l),
                  4 !== Al && (Al = 2),
                  null === Il ? Il = [a] : Il.push(a),
                  a = s;
                do {
                  switch (a.tag) {
                    case 3:
                      a.flags |= 65536,
                        e &= -e,
                        a.lanes |= e,
                        Uo(a, fs(0, c, e));
                      break t;
                    case 1:
                      l = c;
                      var y = a.type, v = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === ql || !ql.has(v)))
                      ) {
                        a.flags |= 65536,
                          e &= -e,
                          a.lanes |= e,
                          Uo(a, ps(a, l, e));
                        break t;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              xc(n);
            } catch (x) {
              e = x, Ol === n && null !== n && (Ol = n = n.return);
              continue;
            }
            break;
          }
        }
        function pc() {
          var t = El.current;
          return El.current = Ga, null === t ? Ga : t;
        }
        function gc() {
          0 !== Al && 3 !== Al && 2 !== Al || (Al = 4),
            null === Tl || 0 === (268435455 & Fl) && 0 === (268435455 & zl) ||
            sc(Tl, Rl);
        }
        function mc(t, e) {
          var n = Pl;
          Pl |= 2;
          var i = pc();
          for (Tl === t && Rl === e || (Hl = null, hc(t, e));;) {
            try {
              bc();
              break;
            } catch (r) {
              fc(t, r);
            }
          }
          if (Co(), Pl = n, El.current = i, null !== Ol) throw Error(o(261));
          return Tl = null, Rl = 0, Al;
        }
        function bc() {
          for (; null !== Ol;) vc(Ol);
        }
        function yc() {
          for (; null !== Ol && !Kt();) vc(Ol);
        }
        function vc(t) {
          var e = kl(t.alternate, t, Dl);
          t.memoizedProps = t.pendingProps,
            null === e ? xc(t) : Ol = e,
            Ml.current = null;
        }
        function xc(t) {
          var e = t;
          do {
            var n = e.alternate;
            if (t = e.return, 0 === (32768 & e.flags)) {
              if (null !== (n = Ys(n, e, Dl))) {
                return void (Ol = n);
              }
            } else {
              if (null !== (n = Qs(n, e))) {
                return n.flags &= 32767, void (Ol = n);
              }
              if (null === t) return Al = 6, void (Ol = null);
              t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            }
            if (null !== (e = e.sibling)) return void (Ol = e);
            Ol = e = t;
          } while (null !== e);
          0 === Al && (Al = 5);
        }
        function wc(t, e, n) {
          var i = ve, r = Cl.transition;
          try {
            Cl.transition = null,
              ve = 1,
              function (t, e, n, i) {
                do {
                  _c();
                } while (null !== Ql);
                if (0 !== (6 & Pl)) throw Error(o(327));
                n = t.finishedWork;
                var r = t.finishedLanes;
                if (null === n) return null;
                if (
                  t.finishedWork = null, t.finishedLanes = 0, n === t.current
                ) throw Error(o(177));
                t.callbackNode = null, t.callbackPriority = 0;
                var a = n.lanes | n.childLanes;
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
                    var i = t.eventTimes;
                    for (t = t.expirationTimes; 0 < n;) {
                      var r = 31 - ae(n), o = 1 << r;
                      e[r] = 0, i[r] = -1, t[r] = -1, n &= ~o;
                    }
                  }(t, a),
                    t === Tl && (Ol = Tl = null, Rl = 0),
                    0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) ||
                    Yl || (Yl = !0,
                      Tc(ee, function () {
                        return _c(), null;
                      })),
                    a = 0 !== (15990 & n.flags),
                    0 !== (15990 & n.subtreeFlags) || a
                ) {
                  a = Cl.transition, Cl.transition = null;
                  var s = ve;
                  ve = 1;
                  var l = Pl;
                  Pl |= 4,
                    Ml.current = null,
                    function (t, e) {
                      if (tr = We, fi(t = hi())) {
                        if ("selectionStart" in t) {
                          var n = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        } else {t: {
                            var i =
                              (n = (n = t.ownerDocument) && n.defaultView ||
                                window).getSelection && n.getSelection();
                            if (i && 0 !== i.rangeCount) {
                              n = i.anchorNode;
                              var r = i.anchorOffset, a = i.focusNode;
                              i = i.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (w) {
                                n = null;
                                break t;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                h = t,
                                f = null;
                              e: for (;;) {
                                for (
                                  var p;
                                  h !== n || 0 !== r && 3 !== h.nodeType ||
                                  (l = s + r),
                                    h !== a || 0 !== i && 3 !== h.nodeType ||
                                    (c = s + i),
                                    3 === h.nodeType &&
                                    (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);
                                ) f = h, h = p;
                                for (;;) {
                                  if (h === t) break e;
                                  if (
                                    f === n && ++u === r && (l = s),
                                      f === a && ++d === i && (c = s),
                                      null !== (p = h.nextSibling)
                                  ) break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n = -1 === l || -1 === c
                                ? null
                                : { start: l, end: c };
                            } else n = null;
                          }}
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        er = { focusedElem: t, selectionRange: n },
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
                                    throw Error(o(163));
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
                    pi(er),
                    We = !!tr,
                    er = tr = null,
                    t.current = n,
                    yl(n, t, r),
                    Xt(),
                    Pl = l,
                    ve = s,
                    Cl.transition = a;
                } else t.current = n;
                if (
                  Yl && (Yl = !1, Ql = t, Kl = r),
                    a = t.pendingLanes,
                    0 === a && (ql = null),
                    function (t) {
                      if (oe && "function" === typeof oe.onCommitFiberRoot) {
                        try {
                          oe.onCommitFiberRoot(
                            re,
                            t,
                            void 0,
                            128 === (128 & t.current.flags),
                          );
                        } catch (e) {}
                      }
                    }(n.stateNode),
                    ic(t, Jt()),
                    null !== e
                ) {
                  for (i = t.onRecoverableError, n = 0; n < e.length; n++) {
                    r = e[n],
                      i(r.value, { componentStack: r.stack, digest: r.digest });
                  }
                }
                if (Wl) throw Wl = !1, t = $l, $l = null, t;
                0 !== (1 & Kl) && 0 !== t.tag && _c(),
                  a = t.pendingLanes,
                  0 !== (1 & a) ? t === Jl ? Xl++ : (Xl = 0, Jl = t) : Xl = 0,
                  Ur();
              }(t, e, n, i);
          } finally {
            Cl.transition = r, ve = i;
          }
          return null;
        }
        function _c() {
          if (null !== Ql) {
            var t = xe(Kl), e = Cl.transition, n = ve;
            try {
              if (
                Cl.transition = null, ve = 16 > t ? 16 : t, null === Ql
              ) { var i = !1; } else {
                if (t = Ql, Ql = null, Kl = 0, 0 !== (6 & Pl)) {
                  throw Error(o(331));
                }
                var r = Pl;
                for (Pl |= 4, Gs = t.current; null !== Gs;) {
                  var a = Gs, s = a.child;
                  if (0 !== (16 & Gs.flags)) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Gs = u; null !== Gs;) {
                          var d = Gs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, a);
                          }
                          var h = d.child;
                          if (null !== h) h.return = d, Gs = h;
                          else {for (; null !== Gs;) {
                              var f = (d = Gs).sibling, p = d.return;
                              if (ol(d), d === u) {
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
                      var g = a.alternate;
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
                      Gs = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== s) {
                    s.return = a, Gs = s;
                  } else {t: for (; null !== Gs;) {
                      if (0 !== (2048 & (a = Gs).flags)) {
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, a, a.return);
                        }
                      }
                      var y = a.sibling;
                      if (null !== y) {
                        y.return = a.return, Gs = y;
                        break t;
                      }
                      Gs = a.return;
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
                              il(9, l);
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
                  Pl = r,
                    Ur(),
                    oe && "function" === typeof oe.onPostCommitFiberRoot
                ) {
                  try {
                    oe.onPostCommitFiberRoot(re, t);
                  } catch (_) {}
                }
                i = !0;
              }
              return i;
            } finally {
              ve = n, Cl.transition = e;
            }
          }
          return !1;
        }
        function kc(t, e, n) {
          t = Bo(t, e = fs(0, e = cs(n, e), 1), 1),
            e = tc(),
            null !== t && (be(t, 1, e), ic(t, e));
        }
        function Sc(t, e, n) {
          if (3 === t.tag) kc(t, t, n);
          else {for (; null !== e;) {
              if (3 === e.tag) {
                kc(e, t, n);
                break;
              }
              if (1 === e.tag) {
                var i = e.stateNode;
                if (
                  "function" === typeof e.type.getDerivedStateFromError ||
                  "function" === typeof i.componentDidCatch &&
                    (null === ql || !ql.has(i))
                ) {
                  e = Bo(e, t = ps(e, t = cs(n, t), 1), 1),
                    t = tc(),
                    null !== e && (be(e, 1, t), ic(e, t));
                  break;
                }
              }
              e = e.return;
            }}
        }
        function Ec(t, e, n) {
          var i = t.pingCache;
          null !== i && i.delete(e),
            e = tc(),
            t.pingedLanes |= t.suspendedLanes & n,
            Tl === t && (Rl & n) === n &&
            (4 === Al || 3 === Al && (130023424 & Rl) === Rl && 500 > Jt() - Vl
              ? hc(t, 0)
              : Nl |= n),
            ic(t, e);
        }
        function Mc(t, e) {
          0 === e &&
            (0 === (1 & t.mode)
              ? e = 1
              : (e = ue, 0 === (130023424 & (ue <<= 1)) && (ue = 4194304)));
          var n = tc();
          null !== (t = jo(t, e)) && (be(t, e, n), ic(t, n));
        }
        function Cc(t) {
          var e = t.memoizedState, n = 0;
          null !== e && (n = e.retryLane), Mc(t, n);
        }
        function Pc(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var i = t.stateNode, r = t.memoizedState;
              null !== r && (n = r.retryLane);
              break;
            case 19:
              i = t.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== i && i.delete(e), Mc(t, n);
        }
        function Tc(t, e) {
          return Yt(t, e);
        }
        function Oc(t, e, n, i) {
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
            this.mode = i,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null;
        }
        function Rc(t, e, n, i) {
          return new Oc(t, e, n, i);
        }
        function Dc(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function Lc(t, e) {
          var n = t.alternate;
          return null === n
            ? ((n = Rc(t.tag, e, t.key, t.mode)).elementType = t.elementType,
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
        function Ac(t, e, n, i, r, a) {
          var s = 2;
          if (i = t, "function" === typeof t) Dc(t) && (s = 1);
          else if ("string" === typeof t) s = 5;
          else {t: switch (t) {
              case k:
                return jc(n.children, r, a, e);
              case S:
                s = 8, r |= 8;
                break;
              case E:
                return (t = Rc(12, n, e, 2 | r)).elementType = E,
                  t.lanes = a,
                  t;
              case T:
                return (t = Rc(13, n, e, r)).elementType = T, t.lanes = a, t;
              case O:
                return (t = Rc(19, n, e, r)).elementType = O, t.lanes = a, t;
              case L:
                return Fc(n, r, a, e);
              default:
                if ("object" === typeof t && null !== t) {
                  switch (t.$$typeof) {
                    case M:
                      s = 10;
                      break t;
                    case C:
                      s = 9;
                      break t;
                    case P:
                      s = 11;
                      break t;
                    case R:
                      s = 14;
                      break t;
                    case D:
                      s = 16, i = null;
                      break t;
                  }
                }
                throw Error(o(130, null == t ? t : typeof t, ""));
            }}
          return (e = Rc(s, n, e, r)).elementType = t,
            e.type = i,
            e.lanes = a,
            e;
        }
        function jc(t, e, n, i) {
          return (t = Rc(7, t, i, e)).lanes = n, t;
        }
        function Fc(t, e, n, i) {
          return (t = Rc(22, t, i, e)).elementType = L,
            t.lanes = n,
            t.stateNode = { isHidden: !1 },
            t;
        }
        function zc(t, e, n) {
          return (t = Rc(6, t, null, e)).lanes = n, t;
        }
        function Nc(t, e, n) {
          return (e = Rc(4, null !== t.children ? t.children : [], t.key, e))
            .lanes = n,
            e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            },
            e;
        }
        function Ic(t, e, n, i, r) {
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
            this.identifierPrefix = i,
            this.onRecoverableError = r,
            this.mutableSourceEagerHydrationData = null;
        }
        function Bc(t, e, n, i, r, o, a, s, l) {
          return t = new Ic(t, e, n, s, l),
            1 === e ? (e = 1, !0 === o && (e |= 8)) : e = 0,
            o = Rc(3, null, null, e),
            t.current = o,
            o.stateNode = t,
            o.memoizedState = {
              element: i,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            },
            zo(o),
            t;
        }
        function Vc(t) {
          if (!t) return Cr;
          t: {
            if (Ut(t = t._reactInternals) !== t || 1 !== t.tag) {
              throw Error(o(170));
            }
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Dr(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(o(171));
          }
          if (1 === t.tag) {
            var n = t.type;
            if (Dr(n)) return jr(t, n, e);
          }
          return e;
        }
        function Uc(t, e, n, i, r, o, a, s, l) {
          return (t = Bc(n, i, !0, t, 0, o, 0, s, l)).context = Vc(null),
            n = t.current,
            (o = Io(i = tc(), r = ec(n))).callback = void 0 !== e && null !== e
              ? e
              : null,
            Bo(n, o, r),
            t.current.lanes = r,
            be(t, r, i),
            ic(t, i),
            t;
        }
        function Hc(t, e, n, i) {
          var r = e.current, o = tc(), a = ec(r);
          return n = Vc(n),
            null === e.context ? e.context = n : e.pendingContext = n,
            (e = Io(o, a)).payload = { element: t },
            null !== (i = void 0 === i ? null : i) && (e.callback = i),
            null !== (t = Bo(r, e, a)) && (nc(t, r, a, o), Vo(t, r, a)),
            a;
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
            if (t.memoizedProps !== e.pendingProps || Tr.current) {
              vs = !0;
            } else {
              if (0 === (t.lanes & n) && 0 === (128 & e.flags)) {
                return vs = !1,
                  function (t, e, n) {
                    switch (e.tag) {
                      case 3:
                        Ts(e), po();
                        break;
                      case 5:
                        Go(e);
                        break;
                      case 1:
                        Dr(e.type) && Fr(e);
                        break;
                      case 4:
                        Xo(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var i = e.type._context, r = e.memoizedProps.value;
                        Mr(ko, i._currentValue), i._currentValue = r;
                        break;
                      case 13:
                        if (null !== (i = e.memoizedState)) {
                          return null !== i.dehydrated
                            ? (Mr(ta, 1 & ta.current), e.flags |= 128, null)
                            : 0 !== (n & e.child.childLanes)
                            ? zs(t, e, n)
                            : (Mr(ta, 1 & ta.current),
                              null !== (t = Ws(t, e, n)) ? t.sibling : null);
                        }
                        Mr(ta, 1 & ta.current);
                        break;
                      case 19:
                        if (
                          i = 0 !== (n & e.childLanes), 0 !== (128 & t.flags)
                        ) {
                          if (i) return Us(t, e, n);
                          e.flags |= 128;
                        }
                        if (
                          null !== (r = e.memoizedState) &&
                          (r.rendering = null,
                            r.tail = null,
                            r.lastEffect = null),
                            Mr(ta, ta.current),
                            i
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
          } else vs = !1, ro && 0 !== (1048576 & e.flags) && Zr(e, qr, e.index);
          switch (e.lanes = 0, e.tag) {
            case 2:
              var i = e.type;
              Hs(t, e), t = e.pendingProps;
              var r = Rr(e, Pr.current);
              Oo(e, n), r = ma(null, e, i, t, r, n);
              var a = ba();
              return e.flags |= 1,
                "object" === typeof r && null !== r &&
                  "function" === typeof r.render && void 0 === r.$$typeof
                  ? (e.tag = 1,
                    e.memoizedState = null,
                    e.updateQueue = null,
                    Dr(i) ? (a = !0, Fr(e)) : a = !1,
                    e.memoizedState = null !== r.state && void 0 !== r.state
                      ? r.state
                      : null,
                    zo(e),
                    r.updater = rs,
                    e.stateNode = r,
                    r._reactInternals = e,
                    ls(e, i, t, n),
                    e = Ps(null, e, i, !0, a, n))
                  : (e.tag = 0,
                    ro && a && to(e),
                    xs(null, e, r, n),
                    e = e.child),
                e;
            case 16:
              i = e.elementType;
              t: {
                switch (
                  Hs(t, e),
                    t = e.pendingProps,
                    i = (r = i._init)(i._payload),
                    e.type = i,
                    r = e.tag = function (t) {
                      if ("function" === typeof t) return Dc(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === P) return 11;
                        if (t === R) return 14;
                      }
                      return 2;
                    }(i),
                    t = ns(i, t),
                    r
                ) {
                  case 0:
                    e = Ms(null, e, i, t, n);
                    break t;
                  case 1:
                    e = Cs(null, e, i, t, n);
                    break t;
                  case 11:
                    e = ws(null, e, i, t, n);
                    break t;
                  case 14:
                    e = _s(null, e, i, ns(i.type, t), n);
                    break t;
                }
                throw Error(o(306, i, ""));
              }
              return e;
            case 0:
              return i = e.type,
                r = e.pendingProps,
                Ms(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
            case 1:
              return i = e.type,
                r = e.pendingProps,
                Cs(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
            case 3:
              t: {
                if (Ts(e), null === t) throw Error(o(387));
                i = e.pendingProps,
                  r = (a = e.memoizedState).element,
                  No(t, e),
                  Ho(e, i, null, n);
                var s = e.memoizedState;
                if (i = s.element, a.isDehydrated) {
                  if (
                    a = {
                      element: i,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    },
                      e.updateQueue.baseState = a,
                      e.memoizedState = a,
                      256 & e.flags
                  ) {
                    e = Os(t, e, i, n, r = cs(Error(o(423)), e));
                    break t;
                  }
                  if (i !== r) {
                    e = Os(t, e, i, n, r = cs(Error(o(424)), e));
                    break t;
                  }
                  for (
                    io = cr(e.stateNode.containerInfo.firstChild),
                      no = e,
                      ro = !0,
                      oo = null,
                      n = _o(e, null, i, n),
                      e.child = n;
                    n;
                  ) n.flags = -3 & n.flags | 4096, n = n.sibling;
                } else {
                  if (po(), i === r) {
                    e = Ws(t, e, n);
                    break t;
                  }
                  xs(t, e, i, n);
                }
                e = e.child;
              }
              return e;
            case 5:
              return Go(e),
                null === t && co(e),
                i = e.type,
                r = e.pendingProps,
                a = null !== t ? t.memoizedProps : null,
                s = r.children,
                nr(i, r) ? s = null : null !== a && nr(i, a) && (e.flags |= 32),
                Es(t, e),
                xs(t, e, s, n),
                e.child;
            case 6:
              return null === t && co(e), null;
            case 13:
              return zs(t, e, n);
            case 4:
              return Xo(e, e.stateNode.containerInfo),
                i = e.pendingProps,
                null === t ? e.child = wo(e, null, i, n) : xs(t, e, i, n),
                e.child;
            case 11:
              return i = e.type,
                r = e.pendingProps,
                ws(t, e, i, r = e.elementType === i ? r : ns(i, r), n);
            case 7:
              return xs(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
              return xs(t, e, e.pendingProps.children, n), e.child;
            case 10:
              t: {
                if (
                  i = e.type._context,
                    r = e.pendingProps,
                    a = e.memoizedProps,
                    s = r.value,
                    Mr(ko, i._currentValue),
                    i._currentValue = s,
                    null !== a
                ) {
                  if (si(a.value, s)) {
                    if (a.children === r.children && !Tr.current) {
                      e = Ws(t, e, n);
                      break t;
                    }
                  } else {for (
                      null !== (a = e.child) && (a.return = e);
                      null !== a;
                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var c = l.firstContext; null !== c;) {
                          if (c.context === i) {
                            if (1 === a.tag) {
                              (c = Io(-1, n & -n)).tag = 2;
                              var u = a.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? c.next = c
                                  : (c.next = d.next, d.next = c),
                                  u.pending = c;
                              }
                            }
                            a.lanes |= n,
                              null !== (c = a.alternate) && (c.lanes |= n),
                              To(a.return, n, e),
                              l.lanes |= n;
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === a.tag) {
                        s = a.type === e.type ? null : a.child;
                      } else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(o(341));
                        s.lanes |= n,
                          null !== (l = s.alternate) && (l.lanes |= n),
                          To(s, n, e),
                          s = a.sibling;
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else {for (s = a; null !== s;) {
                          if (s === e) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            a.return = s.return, s = a;
                            break;
                          }
                          s = s.return;
                        }}
                      a = s;
                    }}
                }
                xs(t, e, r.children, n), e = e.child;
              }
              return e;
            case 9:
              return r = e.type,
                i = e.pendingProps.children,
                Oo(e, n),
                i = i(r = Ro(r)),
                e.flags |= 1,
                xs(t, e, i, n),
                e.child;
            case 14:
              return r = ns(i = e.type, e.pendingProps),
                _s(t, e, i, r = ns(i.type, r), n);
            case 15:
              return ks(t, e, e.type, e.pendingProps, n);
            case 17:
              return i = e.type,
                r = e.pendingProps,
                r = e.elementType === i ? r : ns(i, r),
                Hs(t, e),
                e.tag = 1,
                Dr(i) ? (t = !0, Fr(e)) : t = !1,
                Oo(e, n),
                as(e, i, r),
                ls(e, i, r, n),
                Ps(null, e, i, !0, t, n);
            case 19:
              return Us(t, e, n);
            case 22:
              return Ss(t, e, n);
          }
          throw Error(o(156, e.tag));
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
        function Zc(t, e, n, i, r) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o;
            if ("function" === typeof r) {
              var s = r;
              r = function () {
                var t = Wc(a);
                s.call(t);
              };
            }
            Hc(e, a, t, r);
          } else {a = function (t, e, n, i, r) {
              if (r) {
                if ("function" === typeof i) {
                  var o = i;
                  i = function () {
                    var t = Wc(a);
                    o.call(t);
                  };
                }
                var a = Uc(e, i, t, 0, null, !1, 0, "", Gc);
                return t._reactRootContainer = a,
                  t[pr] = a.current,
                  Ui(8 === t.nodeType ? t.parentNode : t),
                  uc(),
                  a;
              }
              for (; r = t.lastChild;) t.removeChild(r);
              if ("function" === typeof i) {
                var s = i;
                i = function () {
                  var t = Wc(l);
                  s.call(t);
                };
              }
              var l = Bc(t, 0, !1, null, 0, !1, 0, "", Gc);
              return t._reactRootContainer = l,
                t[pr] = l.current,
                Ui(8 === t.nodeType ? t.parentNode : t),
                uc(function () {
                  Hc(e, l, n, i);
                }),
                l;
            }(n, e, t, r, i);}
          return Wc(a);
        }
        Kc.prototype.render = Qc.prototype.render = function (t) {
          var e = this._internalRoot;
          if (null === e) throw Error(o(409));
          Hc(t, e, null, null);
        },
          Kc.prototype.unmount = Qc.prototype.unmount = function () {
            var t = this._internalRoot;
            if (null !== t) {
              this._internalRoot = null;
              var e = t.containerInfo;
              uc(function () {
                Hc(null, t, null, null);
              }), e[pr] = null;
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
                  var n = de(e.pendingLanes);
                  0 !== n &&
                    (ye(e, 1 | n),
                      ic(e, Jt()),
                      0 === (6 & Pl) && (Ul = Jt() + 500, Ur()));
                }
                break;
              case 13:
                uc(function () {
                  var e = jo(t, 1);
                  if (null !== e) {
                    var n = tc();
                    nc(e, t, 1, n);
                  }
                }), qc(t, 1);
            }
          },
          _e = function (t) {
            if (13 === t.tag) {
              var e = jo(t, 134217728);
              if (null !== e) nc(e, t, 134217728, tc());
              qc(t, 134217728);
            }
          },
          ke = function (t) {
            if (13 === t.tag) {
              var e = ec(t), n = jo(t, e);
              if (null !== n) nc(n, t, e, tc());
              qc(t, e);
            }
          },
          Se = function () {
            return ve;
          },
          Ee = function (t, e) {
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
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                      var r = wr(i);
                      if (!r) throw Error(o(90));
                      Y(i), G(i, r);
                    }
                  }
                }
                break;
              case "textarea":
                ot(t, n);
                break;
              case "select":
                null != (e = n.value) && nt(t, !!n.multiple, e, !1);
            }
          },
          Pt = cc,
          Tt = uc;
        var tu = {
            usingClientEntryPoint: !1,
            Events: [vr, xr, wr, Mt, Ct, cc],
          },
          eu = {
            findFiberByHostInstance: yr,
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
          var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!iu.isDisabled && iu.supportsFiber) {
            try {
              re = iu.inject(nu), oe = iu;
            } catch (ut) {}
          }
        }
        e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu,
          e.createPortal = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
            if (!Xc(e)) throw Error(o(200));
            return function (t, e, n) {
              var i = 3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
              return {
                $$typeof: _,
                key: null == i ? null : "" + i,
                children: t,
                containerInfo: e,
                implementation: n,
              };
            }(t, e, null, n);
          },
          e.createRoot = function (t, e) {
            if (!Xc(t)) throw Error(o(299));
            var n = !1, i = "", r = Yc;
            return null !== e && void 0 !== e &&
              (!0 === e.unstable_strictMode && (n = !0),
                void 0 !== e.identifierPrefix && (i = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (r = e.onRecoverableError)),
              e = Bc(t, 1, !1, null, 0, n, 0, i, r),
              t[pr] = e.current,
              Ui(8 === t.nodeType ? t.parentNode : t),
              new Qc(e);
          },
          e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ("function" === typeof t.render) throw Error(o(188));
              throw t = Object.keys(t).join(","), Error(o(268, t));
            }
            return t = null === (t = $t(e)) ? null : t.stateNode;
          },
          e.flushSync = function (t) {
            return uc(t);
          },
          e.hydrate = function (t, e, n) {
            if (!Jc(e)) throw Error(o(200));
            return Zc(null, t, e, !0, n);
          },
          e.hydrateRoot = function (t, e, n) {
            if (!Xc(t)) throw Error(o(405));
            var i = null != n && n.hydratedSources || null,
              r = !1,
              a = "",
              s = Yc;
            if (
              null !== n && void 0 !== n &&
              (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
                e = Uc(e, null, t, 1, null != n ? n : null, r, 0, a, s),
                t[pr] = e.current,
                Ui(t),
                i
            ) {
              for (t = 0; t < i.length; t++) {
                r = (r = (n = i[t])._getVersion)(n._source),
                  null == e.mutableSourceEagerHydrationData
                    ? e.mutableSourceEagerHydrationData = [n, r]
                    : e.mutableSourceEagerHydrationData.push(n, r);
              }
            }
            return new Kc(e);
          },
          e.render = function (t, e, n) {
            if (!Jc(e)) throw Error(o(200));
            return Zc(null, t, e, !1, n);
          },
          e.unmountComponentAtNode = function (t) {
            if (!Jc(t)) throw Error(o(40));
            return !!t._reactRootContainer && (uc(function () {
              Zc(null, null, t, !1, function () {
                t._reactRootContainer = null, t[pr] = null;
              });
            }),
              !0);
          },
          e.unstable_batchedUpdates = cc,
          e.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
            if (!Jc(n)) throw Error(o(200));
            if (null == t || void 0 === t._reactInternals) throw Error(o(38));
            return Zc(t, e, n, !1, i);
          },
          e.version = "18.3.1-next-f1338f8080-20240426";
      },
      391: (t, e, n) => {
        var i = n(950);
        e.createRoot = i.createRoot, e.hydrateRoot = i.hydrateRoot;
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
        var i = n(43),
          r = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(t, e, n) {
          var i, o = {}, c = null, u = null;
          for (
            i in void 0 !== n && (c = "" + n),
              void 0 !== e.key && (c = "" + e.key),
              void 0 !== e.ref && (u = e.ref),
              e
          ) a.call(e, i) && !l.hasOwnProperty(i) && (o[i] = e[i]);
          if (t && t.defaultProps) {
            for (i in e = t.defaultProps) void 0 === o[i] && (o[i] = e[i]);
          }
          return {
            $$typeof: r,
            type: t,
            key: c,
            ref: u,
            props: o,
            _owner: s.current,
          };
        }
        e.Fragment = o, e.jsx = c, e.jsxs = c;
      },
      202: (t, e) => {
        var n = Symbol.for("react.element"),
          i = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
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
        function E(t, e, i) {
          var r, o = {}, a = null, s = null;
          if (null != e) {
            for (
              r in void 0 !== e.ref && (s = e.ref),
                void 0 !== e.key && (a = "" + e.key),
                e
            ) _.call(e, r) && !S.hasOwnProperty(r) && (o[r] = e[r]);
          }
          var l = arguments.length - 2;
          if (1 === l) o.children = i;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (t && t.defaultProps) {
            for (r in l = t.defaultProps) void 0 === o[r] && (o[r] = l[r]);
          }
          return {
            $$typeof: n,
            type: t,
            key: a,
            ref: s,
            props: o,
            _owner: k.current,
          };
        }
        function M(t) {
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
        function T(t, e, r, o, a) {
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
                  case i:
                    l = !0;
                }
            }}
          if (l) {
            return a = a(l = t),
              t = "" === o ? "." + P(l, 0) : o,
              w(a)
                ? (r = "",
                  null != t && (r = t.replace(C, "$&/") + "/"),
                  T(a, e, r, "", function (t) {
                    return t;
                  }))
                : null != a && (M(a) && (a = function (t, e) {
                  return {
                    $$typeof: n,
                    type: t.type,
                    key: e,
                    ref: t.ref,
                    props: t.props,
                    _owner: t._owner,
                  };
                }(
                  a,
                  r + (!a.key || l && l.key === a.key
                    ? ""
                    : ("" + a.key).replace(C, "$&/") + "/") +
                    t,
                )),
                  e.push(a)),
              1;
          }
          if (l = 0, o = "" === o ? "." : o + ":", w(t)) {
            for (var c = 0; c < t.length; c++) {
              var u = o + P(s = t[c], c);
              l += T(s, e, r, u, a);
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
              l += T(s = s.value, e, r, u = o + P(s, c++), a);
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
        function O(t, e, n) {
          if (null == t) return t;
          var i = [], r = 0;
          return T(t, i, "", "", function (t) {
            return e.call(n, t, r++);
          }),
            i;
        }
        function R(t) {
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
        function j() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        e.Children = {
          map: O,
          forEach: function (t, e, n) {
            O(t, function () {
              e.apply(this, arguments);
            }, n);
          },
          count: function (t) {
            var e = 0;
            return O(t, function () {
              e++;
            }),
              e;
          },
          toArray: function (t) {
            return O(t, function (t) {
              return t;
            }) || [];
          },
          only: function (t) {
            if (!M(t)) {
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            }
            return t;
          },
        },
          e.Component = b,
          e.Fragment = r,
          e.Profiler = a,
          e.PureComponent = v,
          e.StrictMode = o,
          e.Suspense = u,
          e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A,
          e.act = j,
          e.cloneElement = function (t, e, i) {
            if (null === t || void 0 === t) {
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  t + ".",
              );
            }
            var r = g({}, t.props), o = t.key, a = t.ref, s = t._owner;
            if (null != e) {
              if (
                void 0 !== e.ref && (a = e.ref, s = k.current),
                  void 0 !== e.key && (o = "" + e.key),
                  t.type && t.type.defaultProps
              ) { var l = t.type.defaultProps; }
              for (c in e) {
                _.call(e, c) && !S.hasOwnProperty(c) &&
                  (r[c] = void 0 === e[c] && void 0 !== l ? l[c] : e[c]);
              }
            }
            var c = arguments.length - 2;
            if (1 === c) r.children = i;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              r.children = l;
            }
            return {
              $$typeof: n,
              type: t.type,
              key: o,
              ref: a,
              props: r,
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
          e.createElement = E,
          e.createFactory = function (t) {
            var e = E.bind(null, t);
            return e.type = t, e;
          },
          e.createRef = function () {
            return { current: null };
          },
          e.forwardRef = function (t) {
            return { $$typeof: c, render: t };
          },
          e.isValidElement = M,
          e.lazy = function (t) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: t },
              _init: R,
            };
          },
          e.memo = function (t, e) {
            return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
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
          e.unstable_act = j,
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
            var i = n - 1 >>> 1, r = t[i];
            if (!(0 < o(r, e))) break t;
            t[i] = e, t[n] = r, n = i;
          }
        }
        function i(t) {
          return 0 === t.length ? null : t[0];
        }
        function r(t) {
          if (0 === t.length) return null;
          var e = t[0], n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var i = 0, r = t.length, a = r >>> 1; i < a;) {
              var s = 2 * (i + 1) - 1, l = t[s], c = s + 1, u = t[c];
              if (0 > o(l, n)) {
                c < r && 0 > o(u, l)
                  ? (t[i] = u, t[c] = n, i = c)
                  : (t[i] = l, t[s] = n, i = s);
              } else {
                if (!(c < r && 0 > o(u, n))) break t;
                t[i] = u, t[c] = n, i = c;
              }
            }
          }
          return e;
        }
        function o(t, e) {
          var n = t.sortIndex - e.sortIndex;
          return 0 !== n ? n : t.id - e.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          e.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date, l = s.now();
          e.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          g = !1,
          m = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(t) {
          for (var e = i(u); null !== e;) {
            if (null === e.callback) r(u);
            else {
              if (!(e.startTime <= t)) break;
              r(u), e.sortIndex = e.expirationTime, n(c, e);
            }
            e = i(u);
          }
        }
        function w(t) {
          if (m = !1, x(t), !g) {
            if (null !== i(c)) g = !0, L(_);
            else {
              var e = i(u);
              null !== e && A(w, e.startTime - t);
            }
          }
        }
        function _(t, n) {
          g = !1, m && (m = !1, y(M), M = -1), p = !0;
          var o = f;
          try {
            for (
              x(n), h = i(c);
              null !== h && (!(h.expirationTime > n) || t && !T());
            ) {
              var a = h.callback;
              if ("function" === typeof a) {
                h.callback = null, f = h.priorityLevel;
                var s = a(h.expirationTime <= n);
                n = e.unstable_now(),
                  "function" === typeof s ? h.callback = s : h === i(c) && r(c),
                  x(n);
              } else r(c);
              h = i(c);
            }
            if (null !== h) { var l = !0; }
            else {
              var d = i(u);
              null !== d && A(w, d.startTime - n), l = !1;
            }
            return l;
          } finally {
            h = null, f = o, p = !1;
          }
        }
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k, S = !1, E = null, M = -1, C = 5, P = -1;
        function T() {
          return !(e.unstable_now() - P < C);
        }
        function O() {
          if (null !== E) {
            var t = e.unstable_now();
            P = t;
            var n = !0;
            try {
              n = E(!0, t);
            } finally {
              n ? k() : (S = !1, E = null);
            }
          } else S = !1;
        }
        if ("function" === typeof v) {
          k = function () {
            v(O);
          };
        } else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(), D = R.port2;
          R.port1.onmessage = O,
            k = function () {
              D.postMessage(null);
            };
        } else {k = function () {
            b(O, 0);
          };}
        function L(t) {
          E = t, S || (S = !0, k());
        }
        function A(t, n) {
          M = b(function () {
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
            return i(c);
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
          e.unstable_scheduleCallback = function (t, r, o) {
            var a = e.unstable_now();
            switch (
              "object" === typeof o && null !== o
                ? o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a
                : o = a, t
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
              id: d++,
              callback: r,
              priorityLevel: t,
              startTime: o,
              expirationTime: s = o + s,
              sortIndex: -1,
            },
              o > a
                ? (t.sortIndex = o,
                  n(u, t),
                  null === i(c) && t === i(u) &&
                  (m ? (y(M), M = -1) : m = !0, A(w, o - a)))
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
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var o = e[i] = { exports: {} };
    return t[i](o, o.exports, n), o.exports;
  }
  (() => {
    var t,
      e = Object.getPrototypeOf
        ? (t) => Object.getPrototypeOf(t)
        : (t) => t.__proto__;
    n.t = function (i, r) {
      if (1 & r && (i = this(i)), 8 & r) return i;
      if ("object" === typeof i && i) {
        if (4 & r && i.__esModule) return i;
        if (16 & r && "function" === typeof i.then) return i;
      }
      var o = Object.create(null);
      n.r(o);
      var a = {};
      t = t || [null, e({}), e([]), e(e)];
      for (
        var s = 2 & r && i;
        "object" == typeof s && !~t.indexOf(s);
        s = e(s)
      ) Object.getOwnPropertyNames(s).forEach((t) => a[t] = () => i[t]);
      return a.default = () => i, n.d(o, a), o;
    };
  })(),
    n.d = (t, e) => {
      for (var i in e) {
        n.o(e, i) && !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }
    },
    n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    n.r = (t) => {
      "undefined" !== typeof Symbol && Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    };
  var i = {};
  n.r(i),
    n.d(i, {
      hasBrowserEnv: () => di,
      hasStandardBrowserEnv: () => fi,
      hasStandardBrowserWebWorkerEnv: () => pi,
      navigator: () => hi,
      origin: () => gi,
    });
  var r = n(43), o = n.t(r, 2), a = n(391), s = n(579);
  function l(t) {
    let { children: e, href: n, ...i } = t;
    return (0, s.jsx)("a", {
      href: n,
      className: "dawn-link",
      ...i,
      children: e,
    });
  }
  function c() {
    const t = (0, r.useMemo)(() => {
      const t = window.location.pathname.split("/");
      t.shift();
      let e = [["dawn.rest", "/"]], n = "";
      for (const i of t) 0 !== i.length && (n += `/${i}`, e.push([i, n]));
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
              (0, s.jsx)("small", { style: { color: "gray" }, children: "/ " }),
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
  function d(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: "dawn-row", children: e });
  }
  function h(t) {
    return (0, s.jsx)("p", {
      className: "dawn-text " + (t.type ? `dawn-text-${t.type}` : ""),
      children: t.children,
    });
  }
  function f(t) {
    let { children: e, title: n } = t;
    return (0, s.jsx)(u, {
      title: n,
      children: (0, s.jsxs)(d, {
        children: [
          (0, s.jsx)(h, {
            type: "navbar",
            children: (0, s.jsx)(l, { href: "/", children: "dawn.rest" }),
          }),
          null !== e && void 0 !== e ? e : (0, s.jsx)(d, { children: e }),
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
              (0, s.jsx)(h, { type: "page-title", children: t.title }),
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
    let { width: e, title: n, children: i, ...r } = t;
    return (0, s.jsxs)("div", {
      ...r,
      className: "dawn-panel",
      style: {
        ...r.style,
        ...e && { width: `${{ full: "100%", fit: "fit-content" }[e] || e}` },
      },
      children: [
        (0, s.jsx)("div", {
          className: "dawn-panel-title",
          children: (0, s.jsx)(h, { type: "heading", children: n }),
        }),
        (0, s.jsx)("div", { className: "dawn-content", children: i }),
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
              children: (0, s.jsxs)(h, {
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
                    children: (0, s.jsx)(h, {
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
                    children: (0, s.jsx)(h, {
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
                    children: (0, s.jsx)(h, {
                      children: "See my hypnosis-related Discord bot: Trancer.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "https://youtube.com/@trancebydawn",
                  children: (0, s.jsx)(b, {
                    title: "Trance By Dawn",
                    style: { backgroundImage: "url(/images/youtube.svg)" },
                    children: (0, s.jsx)(h, {
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
                    children: (0, s.jsx)(h, {
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
        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
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
  function E(t, e) {
    if (!1 === t || null === t || "undefined" === typeof t) throw new Error(e);
  }
  function M(t, e) {
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
  function P(t, e, n, i) {
    return void 0 === n && (n = null),
      k(
        {
          pathname: "string" === typeof t ? t : t.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof e ? O(e) : e,
        {
          state: n,
          key: e && e.key || i || Math.random().toString(36).substr(2, 8),
        },
      );
  }
  function T(t) {
    let { pathname: e = "/", search: n = "", hash: i = "" } = t;
    return n && "?" !== n && (e += "?" === n.charAt(0) ? n : "?" + n),
      i && "#" !== i && (e += "#" === i.charAt(0) ? i : "#" + i),
      e;
  }
  function O(t) {
    let e = {};
    if (t) {
      let n = t.indexOf("#");
      n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
      let i = t.indexOf("?");
      i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)),
        t && (e.pathname = t);
    }
    return e;
  }
  function R(t, e, n, i) {
    void 0 === i && (i = {});
    let { window: r = document.defaultView, v5Compat: o = !1 } = i,
      a = r.history,
      s = x.Pop,
      l = null,
      c = u();
    function u() {
      return (a.state || { idx: null }).idx;
    }
    function d() {
      s = x.Pop;
      let t = u(), e = null == t ? null : t - c;
      c = t, l && l({ action: s, location: f.location, delta: e });
    }
    function h(t) {
      let e = "null" !== r.location.origin
          ? r.location.origin
          : r.location.href,
        n = "string" === typeof t ? t : T(t);
      return n = n.replace(/ $/, "%20"),
        E(
          e,
          "No window.location.(origin|href) available to create URL for href: " +
            n,
        ),
        new URL(n, e);
    }
    null == c && (c = 0, a.replaceState(k({}, a.state, { idx: c }), ""));
    let f = {
      get action() {
        return s;
      },
      get location() {
        return t(r, a);
      },
      listen(t) {
        if (l) throw new Error("A history only accepts one active listener");
        return r.addEventListener(S, d), l = t, () => {
          r.removeEventListener(S, d), l = null;
        };
      },
      createHref: (t) => e(r, t),
      createURL: h,
      encodeLocation(t) {
        let e = h(t);
        return { pathname: e.pathname, search: e.search, hash: e.hash };
      },
      push: function (t, e) {
        s = x.Push;
        let i = P(f.location, t, e);
        n && n(i, t), c = u() + 1;
        let d = C(i, c), h = f.createHref(i);
        try {
          a.pushState(d, "", h);
        } catch (p) {
          if (p instanceof DOMException && "DataCloneError" === p.name) throw p;
          r.location.assign(h);
        }
        o && l && l({ action: s, location: f.location, delta: 1 });
      },
      replace: function (t, e) {
        s = x.Replace;
        let i = P(f.location, t, e);
        n && n(i, t), c = u();
        let r = C(i, c), d = f.createHref(i);
        a.replaceState(r, "", d),
          o && l && l({ action: s, location: f.location, delta: 0 });
      },
      go: (t) => a.go(t),
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
  function A(t, e, n, i) {
    return void 0 === n && (n = []),
      void 0 === i && (i = {}),
      t.map((t, r) => {
        let o = [...n, String(r)],
          a = "string" === typeof t.id ? t.id : o.join("-");
        if (
          E(
            !0 !== t.index || !t.children,
            "Cannot specify children on an index route",
          ),
            E(
              !i[a],
              'Found a route id collision on id "' + a +
                "\".  Route id's must be globally unique within Data Router usages",
            ),
            function (t) {
              return !0 === t.index;
            }(t)
        ) {
          let n = k({}, t, e(t), { id: a });
          return i[a] = n, n;
        }
        {
          let n = k({}, t, e(t), { id: a, children: void 0 });
          return i[a] = n,
            t.children && (n.children = A(t.children, e, o, i)),
            n;
        }
      });
  }
  function j(t, e, n) {
    return void 0 === n && (n = "/"), F(t, e, n, !1);
  }
  function F(t, e, n, i) {
    let r = X(("string" === typeof e ? O(e) : e).pathname || "/", n);
    if (null == r) return null;
    let o = z(t);
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
    }(o);
    let a = null;
    for (let s = 0; null == a && s < o.length; ++s) {
      let t = K(r);
      a = Y(o[s], t, i);
    }
    return a;
  }
  function z(t, e, n, i) {
    void 0 === e && (e = []),
      void 0 === n && (n = []),
      void 0 === i && (i = "");
    let r = (t, r, o) => {
      let a = {
        relativePath: void 0 === o ? t.path || "" : o,
        caseSensitive: !0 === t.caseSensitive,
        childrenIndex: r,
        route: t,
      };
      a.relativePath.startsWith("/") &&
        (E(
          a.relativePath.startsWith(i),
          'Absolute route path "' + a.relativePath + '" nested under path "' +
            i +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
        ),
          a.relativePath = a.relativePath.slice(i.length));
      let s = tt([i, a.relativePath]), l = n.concat(a);
      t.children && t.children.length > 0 &&
      (E(
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
        for (let i of N(t.path)) {
          r(t, e, i);
        }
      } else r(t, e);
    }),
      e;
  }
  function N(t) {
    let e = t.split("/");
    if (0 === e.length) return [];
    let [n, ...i] = e, r = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (0 === i.length) return r ? [o, ""] : [o];
    let a = N(i.join("/")), s = [];
    return s.push(...a.map((t) => "" === t ? o : [o, t].join("/"))),
      r && s.push(...a),
      s.map((e) => t.startsWith("/") && "" === e ? "/" : e);
  }
  const I = /^:[\w-]+$/,
    B = 3,
    V = 2,
    U = 1,
    H = 10,
    W = -2,
    $ = (t) => "*" === t;
  function q(t, e) {
    let n = t.split("/"), i = n.length;
    return n.some($) && (i += W),
      e && (i += V),
      n.filter((t) => !$(t)).reduce(
        (t, e) => t + (I.test(e) ? B : "" === e ? U : H),
        i,
      );
  }
  function Y(t, e, n) {
    void 0 === n && (n = !1);
    let { routesMeta: i } = t, r = {}, o = "/", a = [];
    for (let s = 0; s < i.length; ++s) {
      let t = i[s],
        l = s === i.length - 1,
        c = "/" === o ? e : e.slice(o.length) || "/",
        u = Q(
          { path: t.relativePath, caseSensitive: t.caseSensitive, end: l },
          c,
        ),
        d = t.route;
      if (
        !u && l && n && !i[i.length - 1].route.index &&
        (u = Q({
          path: t.relativePath,
          caseSensitive: t.caseSensitive,
          end: !1,
        }, c)), !u
      ) return null;
      Object.assign(r, u.params),
        a.push({
          params: r,
          pathname: tt([o, u.pathname]),
          pathnameBase: et(tt([o, u.pathnameBase])),
          route: d,
        }),
        "/" !== u.pathnameBase && (o = tt([o, u.pathnameBase]));
    }
    return a;
  }
  function Q(t, e) {
    "string" === typeof t && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, i] = function (t, e, n) {
        void 0 === e && (e = !1);
        void 0 === n && (n = !0);
        M(
          "*" === t || !t.endsWith("*") || t.endsWith("/*"),
          'Route path "' + t + '" will be treated as if it were "' +
            t.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            t.replace(/\*$/, "/*") + '".',
        );
        let i = [],
          r = "^" +
            t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(
              /[\\.*+^${}|()[\]]/g,
              "\\$&",
            ).replace(
              /\/:([\w-]+)(\?)?/g,
              (
                t,
                e,
                n,
              ) => (i.push({ paramName: e, isOptional: null != n }),
                n ? "/?([^\\/]+)?" : "/([^\\/]+)"),
            );
        t.endsWith("*")
          ? (i.push({ paramName: "*" }),
            r += "*" === t || "/*" === t ? "(.*)$" : "(?:\\/(.+)|\\/*)$")
          : n
          ? r += "\\/*$"
          : "" !== t && "/" !== t && (r += "(?:(?=\\/|$))");
        let o = new RegExp(r, e ? void 0 : "i");
        return [o, i];
      }(t.path, t.caseSensitive, t.end),
      r = e.match(n);
    if (!r) return null;
    let o = r[0],
      a = o.replace(/(.)\/+$/, "$1"),
      s = r.slice(1),
      l = i.reduce((t, e, n) => {
        let { paramName: i, isOptional: r } = e;
        if ("*" === i) {
          let t = s[n] || "";
          a = o.slice(0, o.length - t.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return t[i] = r && !l ? void 0 : (l || "").replace(/%2F/g, "/"), t;
      }, {});
    return { params: l, pathname: o, pathnameBase: a, pattern: t };
  }
  function K(t) {
    try {
      return t.split("/").map(
        (t) => decodeURIComponent(t).replace(/\//g, "%2F"),
      ).join("/");
    } catch (e) {
      return M(
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
    let n = e.endsWith("/") ? e.length - 1 : e.length, i = t.charAt(n);
    return i && "/" !== i ? null : t.slice(n) || "/";
  }
  function J(t, e, n, i) {
    return "Cannot include a '" + t +
      "' character in a manually specified `to." + e + "` field [" +
      JSON.stringify(i) + "].  Please separate it out to the `to." + n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
  }
  function G(t) {
    return t.filter(
      (t, e) => 0 === e || t.route.path && t.route.path.length > 0,
    );
  }
  function Z(t, e, n, i) {
    let r;
    void 0 === i && (i = !1),
      "string" === typeof t ? r = O(t) : (r = k({}, t),
        E(
          !r.pathname || !r.pathname.includes("?"),
          J("?", "pathname", "search", r),
        ),
        E(
          !r.pathname || !r.pathname.includes("#"),
          J("#", "pathname", "hash", r),
        ),
        E(!r.search || !r.search.includes("#"), J("#", "search", "hash", r)));
    let o, a = "" === t || "" === r.pathname, s = a ? "/" : r.pathname;
    if (null == s) o = n;
    else {
      let t = e.length - 1;
      if (!i && s.startsWith("..")) {
        let e = s.split("/");
        for (; ".." === e[0];) e.shift(), t -= 1;
        r.pathname = e.join("/");
      }
      o = t >= 0 ? e[t] : "/";
    }
    let l = function (t, e) {
        void 0 === e && (e = "/");
        let { pathname: n, search: i = "", hash: r = "" } =
            "string" === typeof t ? O(t) : t,
          o = n
            ? n.startsWith("/") ? n : function (t, e) {
              let n = e.replace(/\/+$/, "").split("/");
              return t.split("/").forEach((t) => {
                ".." === t ? n.length > 1 && n.pop() : "." !== t && n.push(t);
              }),
                n.length > 1 ? n.join("/") : "/";
            }(n, e)
            : e;
        return { pathname: o, search: nt(i), hash: it(r) };
      }(r, o),
      c = s && "/" !== s && s.endsWith("/"),
      u = (a || "." === s) && n.endsWith("/");
    return l.pathname.endsWith("/") || !c && !u || (l.pathname += "/"), l;
  }
  const tt = (t) => t.join("/").replace(/\/\/+/g, "/"),
    et = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    nt = (t) => t && "?" !== t ? t.startsWith("?") ? t : "?" + t : "",
    it = (t) => t && "#" !== t ? t.startsWith("#") ? t : "#" + t : "";
  Error;
  class rt {
    constructor(t, e, n, i) {
      void 0 === i && (i = !1),
        this.status = t,
        this.statusText = e || "",
        this.internal = i,
        n instanceof Error
          ? (this.data = n.toString(), this.error = n)
          : this.data = n;
    }
  }
  function ot(t) {
    return null != t && "number" === typeof t.status &&
      "string" === typeof t.statusText && "boolean" === typeof t.internal &&
      "data" in t;
  }
  const at = ["post", "put", "patch", "delete"],
    st = new Set(at),
    lt = ["get", ...at],
    ct = new Set(lt),
    ut = new Set([301, 302, 303, 307, 308]),
    dt = new Set([307, 308]),
    ht = {
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
      i = !n;
    let r;
    if (
      E(
        t.routes.length > 0,
        "You must provide a non-empty routes array to createRouter",
      ), t.mapRouteProperties
    ) r = t.mapRouteProperties;
    else if (t.detectErrorBoundary) {
      let e = t.detectErrorBoundary;
      r = (t) => ({ hasErrorBoundary: e(t) });
    } else r = mt;
    let o,
      a,
      s,
      l = {},
      c = A(t.routes, r, void 0, l),
      u = t.basename || "/",
      d = t.dataStrategy || Pt,
      h = t.patchRoutesOnNavigation,
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
      w = j(c, t.history.location, u),
      _ = null;
    if (null == w && !h) {
      let e = Ut(404, { pathname: t.history.location.pathname }),
        { matches: n, route: i } = Vt(c);
      w = n, _ = { [i.id]: e };
    }
    if (w && !t.hydrationData) {
      le(w, c, t.history.location.pathname).active && (w = null);
    }
    if (w) {
      if (w.some((t) => t.route.lazy)) a = !1;
      else if (w.some((t) => t.route.loader)) {
        if (f.v7_partialHydration) {
          let e = t.hydrationData ? t.hydrationData.loaderData : null,
            n = t.hydrationData ? t.hydrationData.errors : null;
          if (n) {
            let t = w.findIndex((t) => void 0 !== n[t.route.id]);
            a = w.slice(0, t + 1).every((t) => !kt(t.route, e, n));
          } else a = w.every((t) => !kt(t.route, e, n));
        } else a = null != t.hydrationData;
      } else a = !0;
    } else if (a = !1, w = [], f.v7_partialHydration) {
      let e = le(null, c, t.history.location.pathname);
      e.active && e.matches && (w = e.matches);
    }
    let S,
      C,
      T = {
        historyAction: t.history.action,
        location: t.history.location,
        matches: w,
        initialized: a,
        navigation: ht,
        restoreScrollPosition: null == t.hydrationData && null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: t.hydrationData && t.hydrationData.loaderData || {},
        actionData: t.hydrationData && t.hydrationData.actionData || null,
        errors: t.hydrationData && t.hydrationData.errors || _,
        fetchers: new Map(),
        blockers: new Map(),
      },
      O = x.Pop,
      R = !1,
      L = !1,
      z = new Map(),
      N = null,
      I = !1,
      B = !1,
      V = [],
      U = new Set(),
      H = new Map(),
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
      let n = [], i = [];
      f.v7_fetcherPersist && T.fetchers.forEach((t, e) => {
        "idle" === t.state && (J.has(e) ? i.push(e) : n.push(e));
      }),
        [...g].forEach(
          (t) =>
            t(T, {
              deletedFetchers: i,
              viewTransitionOpts: e.viewTransitionOpts,
              flushSync: !0 === e.flushSync,
            }),
        ),
        f.v7_fetcherPersist &&
        (n.forEach((t) => T.fetchers.delete(t)), i.forEach((t) => wt(t)));
    }
    function et(e, n, i) {
      var r, a;
      let s,
        { flushSync: l } = void 0 === i ? {} : i,
        u = null != T.actionData && null != T.navigation.formMethod &&
          Gt(T.navigation.formMethod) && "loading" === T.navigation.state &&
          !0 !== (null == (r = e.state) ? void 0 : r._isRedirect);
      s = n.actionData
        ? Object.keys(n.actionData).length > 0 ? n.actionData : null
        : u
        ? T.actionData
        : null;
      let d = n.loaderData
          ? Nt(T.loaderData, n.loaderData, n.matches || [], n.errors)
          : T.loaderData,
        h = T.blockers;
      h.size > 0 && (h = new Map(h), h.forEach((t, e) => h.set(e, pt)));
      let f,
        p = !0 === R ||
          null != T.navigation.formMethod && Gt(T.navigation.formMethod) &&
            !0 !== (null == (a = e.state) ? void 0 : a._isRedirect);
      if (
        o && (c = o, o = void 0),
          I || O === x.Pop ||
          (O === x.Push
            ? t.history.push(e, e.state)
            : O === x.Replace && t.history.replace(e, e.state)),
          O === x.Pop
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
          loaderData: d,
          historyAction: O,
          location: e,
          initialized: !0,
          navigation: ht,
          revalidation: "idle",
          restoreScrollPosition: ne(e, n.matches || T.matches),
          preventScrollReset: p,
          blockers: h,
        }),
        { viewTransitionOpts: f, flushSync: !0 === l },
      ),
        O = x.Pop,
        R = !1,
        L = !1,
        I = !1,
        B = !1,
        V = [];
    }
    async function nt(e, n, i) {
      S && S.abort(),
        S = null,
        O = e,
        I = !0 === (i && i.startUninterruptedRevalidation),
        function (t, e) {
          if (m && y) {
            let n = Jt(t, e);
            m[n] = y();
          }
        }(T.location, T.matches),
        R = !0 === (i && i.preventScrollReset),
        L = !0 === (i && i.enableViewTransition);
      let r = o || c,
        a = i && i.overrideNavigation,
        s = j(r, n, u),
        l = !0 === (i && i.flushSync),
        d = le(s, r, n.pathname);
      if (d.active && d.matches && (s = d.matches), !s) {
        let { error: t, notFoundMatches: e, route: i } = Kt(n.pathname);
        return void et(
          n,
          { matches: e, loaderData: {}, errors: { [i.id]: t } },
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
        }(T.location, n) && !(i && i.submission && Gt(i.submission.formMethod))
      ) return void et(n, { matches: s }, { flushSync: l });
      S = new AbortController();
      let h, p = Lt(t.history, n, S.signal, i && i.submission);
      if (i && i.pendingError) {
        h = [Bt(s).route.id, { type: D.error, error: i.pendingError }];
      } else if (i && i.submission && Gt(i.submission.formMethod)) {
        let e = await async function (t, e, n, i, r, o) {
          void 0 === o && (o = {});
          lt();
          let a,
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
          if (tt({ navigation: s }, { flushSync: !0 === o.flushSync }), r) {
            let n = await ce(i, e.pathname, t.signal);
            if ("aborted" === n.type) return { shortCircuited: !0 };
            if ("error" === n.type) {
              let t = Bt(n.partialMatches).route.id;
              return {
                matches: n.partialMatches,
                pendingActionResult: [t, { type: D.error, error: n.error }],
              };
            }
            if (!n.matches) {
              let { notFoundMatches: t, error: n, route: i } = Kt(e.pathname);
              return {
                matches: t,
                pendingActionResult: [i.id, { type: D.error, error: n }],
              };
            }
            i = n.matches;
          }
          let l = ie(i, e);
          if (l.route.action || l.route.lazy) {
            if (
              a = (await at("action", T, t, [l], i, null))[l.route.id],
                t.signal.aborted
            ) return { shortCircuited: !0 };
          } else {a = {
              type: D.error,
              error: Ut(405, {
                method: t.method,
                pathname: e.pathname,
                routeId: l.route.id,
              }),
            };}
          if (Qt(a)) {
            let e;
            if (o && null != o.replace) e = o.replace;
            else {e =
                Dt(a.response.headers.get("Location"), new URL(t.url), u) ===
                  T.location.pathname + T.location.search;}
            return await rt(t, a, !0, { submission: n, replace: e }),
              { shortCircuited: !0 };
          }
          if (qt(a)) throw Ut(400, { type: "defer-action" });
          if (Yt(a)) {
            let t = Bt(i, l.route.id);
            return !0 !== (o && o.replace) && (O = x.Push),
              { matches: i, pendingActionResult: [t.route.id, a] };
          }
          return { matches: i, pendingActionResult: [l.route.id, a] };
        }(p, n, i.submission, s, d.active, {
          replace: i.replace,
          flushSync: l,
        });
        if (e.shortCircuited) return;
        if (e.pendingActionResult) {
          let [t, i] = e.pendingActionResult;
          if (Yt(i) && ot(i.error) && 404 === i.error.status) {
            return S = null,
              void et(n, {
                matches: e.matches,
                loaderData: {},
                errors: { [t]: i.error },
              });
          }
        }
        s = e.matches || s,
          h = e.pendingActionResult,
          a = oe(n, i.submission),
          l = !1,
          d.active = !1,
          p = Lt(t.history, p.url, p.signal);
      }
      let { shortCircuited: g, matches: b, loaderData: v, errors: w } =
        await async function (e, n, i, r, a, s, l, d, h, p, g) {
          let m = a || oe(n, s),
            b = s || l || re(m),
            y = !I && (!f.v7_partialHydration || !h);
          if (r) {
            if (y) {
              let t = it(g);
              tt(k({ navigation: m }, void 0 !== t ? { actionData: t } : {}), {
                flushSync: p,
              });
            }
            let t = await ce(i, n.pathname, e.signal);
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
              let { error: t, notFoundMatches: e, route: i } = Kt(n.pathname);
              return { matches: e, loaderData: {}, errors: { [i.id]: t } };
            }
            i = t.matches;
          }
          let v = o || c,
            [x, w] = _t(
              t.history,
              T,
              i,
              b,
              n,
              f.v7_partialHydration && !0 === h,
              f.v7_skipActionErrorRevalidation,
              B,
              V,
              U,
              J,
              Q,
              Y,
              v,
              u,
              g,
            );
          if (
            Xt((t) =>
              !(i && i.some((e) => e.route.id === t)) ||
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
                  matches: i,
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
            if (!r) {
              t.navigation = m;
              let e = it(g);
              void 0 !== e && (t.actionData = e);
            }
            w.length > 0 && (t.fetchers = function (t) {
              return t.forEach((t) => {
                let e = T.fetchers.get(t.key),
                  n = ae(void 0, e ? e.data : void 0);
                T.fetchers.set(t.key, n);
              }),
                new Map(T.fetchers);
            }(w)), tt(t, { flushSync: p });
          }
          w.forEach((t) => {
            St(t.key), t.controller && H.set(t.key, t.controller);
          });
          let _ = () => w.forEach((t) => St(t.key));
          S && S.signal.addEventListener("abort", _);
          let { loaderResults: E, fetcherResults: M } = await st(T, i, x, w, e);
          if (e.signal.aborted) return { shortCircuited: !0 };
          S && S.signal.removeEventListener("abort", _);
          w.forEach((t) => H.delete(t.key));
          let C = Ht(E);
          if (C) {
            return await rt(e, C.result, !0, { replace: d }),
              { shortCircuited: !0 };
          }
          if (C = Ht(M), C) {
            return Y.add(C.key),
              await rt(e, C.result, !0, { replace: d }),
              { shortCircuited: !0 };
          }
          let { loaderData: P, errors: O } = zt(T, i, E, g, w, M, G);
          G.forEach((t, e) => {
            t.subscribe((n) => {
              (n || t.done) && G.delete(e);
            });
          }),
            f.v7_partialHydration && h && T.errors && (O = k({}, T.errors, O));
          let R = Ct(), D = At($), L = R || D || w.length > 0;
          return k(
            { matches: i, loaderData: P, errors: O },
            L ? { fetchers: new Map(T.fetchers) } : {},
          );
        }(
          p,
          n,
          s,
          d.active,
          a,
          i && i.submission,
          i && i.fetcherSubmission,
          i && i.replace,
          i && !0 === i.initialHydration,
          l,
          h,
        );
      g ||
        (S = null,
          et(n, k({ matches: b || s }, It(h), { loaderData: v, errors: w })));
    }
    function it(t) {
      return t && !Yt(t[1])
        ? { [t[0]]: t[1].data }
        : T.actionData
        ? 0 === Object.keys(T.actionData).length ? null : T.actionData
        : void 0;
    }
    async function rt(i, r, o, a) {
      let {
        submission: s,
        fetcherSubmission: l,
        preventScrollReset: c,
        replace: d,
      } = void 0 === a ? {} : a;
      r.response.headers.has("X-Remix-Revalidate") && (B = !0);
      let h = r.response.headers.get("Location");
      E(h, "Expected a Location header on the redirect Response"),
        h = Dt(h, new URL(i.url), u);
      let f = P(T.location, h, { _isRedirect: !0 });
      if (n) {
        let n = !1;
        if (r.response.headers.has("X-Remix-Reload-Document")) n = !0;
        else if (gt.test(h)) {
          const i = t.history.createURL(h);
          n = i.origin !== e.location.origin || null == X(i.pathname, u);
        }
        if (n) return void (d ? e.location.replace(h) : e.location.assign(h));
      }
      S = null;
      let p = !0 === d || r.response.headers.has("X-Remix-Replace")
          ? x.Replace
          : x.Push,
        { formMethod: g, formAction: m, formEncType: b } = T.navigation;
      !s && !l && g && m && b && (s = re(T.navigation));
      let y = s || l;
      if (dt.has(r.response.status) && y && Gt(y.formMethod)) {
        await nt(p, f, {
          submission: k({}, y, { formAction: h }),
          preventScrollReset: c || R,
          enableViewTransition: o ? L : void 0,
        });
      } else {
        let t = oe(f, s);
        await nt(p, f, {
          overrideNavigation: t,
          fetcherSubmission: l,
          preventScrollReset: c || R,
          enableViewTransition: o ? L : void 0,
        });
      }
    }
    async function at(t, e, n, i, o, a) {
      let s, c = {};
      try {
        s = await Tt(d, t, e, n, i, o, a, l, r);
      } catch (h) {
        return i.forEach((t) => {
          c[t.route.id] = { type: D.error, error: h };
        }),
          c;
      }
      for (let [r, l] of Object.entries(s)) {
        if ($t(l)) {
          let t = l.result;
          c[r] = {
            type: D.redirect,
            response: Rt(t, n, r, o, u, f.v7_relativeSplatPath),
          };
        } else c[r] = await Ot(l);
      }
      return c;
    }
    async function st(e, n, i, r, o) {
      let a = e.matches,
        s = at("loader", e, o, i, n, null),
        l = Promise.all(r.map(async (n) => {
          if (n.matches && n.match && n.controller) {
            let i = (await at(
              "loader",
              e,
              Lt(t.history, n.path, n.controller.signal),
              [n.match],
              n.matches,
              n.key,
            ))[n.match.route.id];
            return { [n.key]: i };
          }
          return Promise.resolve({
            [n.key]: { type: D.error, error: Ut(404, { pathname: n.path }) },
          });
        })),
        c = await s,
        u = (await l).reduce((t, e) => Object.assign(t, e), {});
      return await Promise.all([
        Zt(n, c, o.signal, a, e.loaderData),
        te(n, u, r),
      ]),
        { loaderResults: c, fetcherResults: u };
    }
    function lt() {
      B = !0,
        V.push(...Xt()),
        Q.forEach((t, e) => {
          H.has(e) && U.add(e), St(e);
        });
    }
    function ct(t, e, n) {
      void 0 === n && (n = {}),
        T.fetchers.set(t, e),
        tt({ fetchers: new Map(T.fetchers) }, {
          flushSync: !0 === (n && n.flushSync),
        });
    }
    function ut(t, e, n, i) {
      void 0 === i && (i = {});
      let r = Bt(T.matches, e);
      wt(t),
        tt({ errors: { [r.route.id]: n }, fetchers: new Map(T.fetchers) }, {
          flushSync: !0 === (i && i.flushSync),
        });
    }
    function yt(t) {
      return f.v7_fetcherPersist &&
        (K.set(t, (K.get(t) || 0) + 1), J.has(t) && J.delete(t)),
        T.fetchers.get(t) || ft;
    }
    function wt(t) {
      let e = T.fetchers.get(t);
      !H.has(t) || e && "loading" === e.state && q.has(t) || St(t),
        Q.delete(t),
        q.delete(t),
        Y.delete(t),
        J.delete(t),
        U.delete(t),
        T.fetchers.delete(t);
    }
    function St(t) {
      let e = H.get(t);
      e && (e.abort(), H.delete(t));
    }
    function Et(t) {
      for (let e of t) {
        let t = se(yt(e).data);
        T.fetchers.set(e, t);
      }
    }
    function Ct() {
      let t = [], e = !1;
      for (let n of Y) {
        let i = T.fetchers.get(n);
        E(i, "Expected fetcher: " + n),
          "loading" === i.state && (Y.delete(n), t.push(n), e = !0);
      }
      return Et(t), e;
    }
    function At(t) {
      let e = [];
      for (let [n, i] of q) {
        if (i < t) {
          let t = T.fetchers.get(n);
          E(t, "Expected fetcher: " + n),
            "loading" === t.state && (St(n), q.delete(n), e.push(n));
        }
      }
      return Et(e), e.length > 0;
    }
    function jt(t) {
      T.blockers.delete(t), Z.delete(t);
    }
    function Ft(t, e) {
      let n = T.blockers.get(t) || pt;
      E(
        "unblocked" === n.state && "blocked" === e.state ||
          "blocked" === n.state && "blocked" === e.state ||
          "blocked" === n.state && "proceeding" === e.state ||
          "blocked" === n.state && "unblocked" === e.state ||
          "proceeding" === n.state && "unblocked" === e.state,
        "Invalid blocker state transition: " + n.state + " -> " + e.state,
      );
      let i = new Map(T.blockers);
      i.set(t, e), tt({ blockers: i });
    }
    function Wt(t) {
      let { currentLocation: e, nextLocation: n, historyAction: i } = t;
      if (0 === Z.size) return;
      Z.size > 1 && M(!1, "A router only supports one blocker at a time");
      let r = Array.from(Z.entries()),
        [o, a] = r[r.length - 1],
        s = T.blockers.get(o);
      return s && "proceeding" === s.state
        ? void 0
        : a({ currentLocation: e, nextLocation: n, historyAction: i })
        ? o
        : void 0;
    }
    function Kt(t) {
      let e = Ut(404, { pathname: t }),
        n = o || c,
        { matches: i, route: r } = Vt(n);
      return Xt(), { notFoundMatches: i, route: r, error: e };
    }
    function Xt(t) {
      let e = [];
      return G.forEach((n, i) => {
        t && !t(i) || (n.cancel(), e.push(i), G.delete(i));
      }),
        e;
    }
    function Jt(t, e) {
      if (b) {
        return b(
          t,
          e.map((t) =>
            function (t, e) {
              let { route: n, pathname: i, params: r } = t;
              return {
                id: n.id,
                pathname: i,
                params: r,
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
        let n = Jt(t, e), i = m[n];
        if ("number" === typeof i) return i;
      }
      return null;
    }
    function le(t, e, n) {
      if (h) {
        if (!t) return { active: !0, matches: F(e, n, u, !0) || [] };
        if (Object.keys(t[0].params).length > 0) {
          return { active: !0, matches: F(e, n, u, !0) };
        }
      }
      return { active: !1, matches: null };
    }
    async function ce(t, e, n) {
      if (!h) return { type: "success", matches: t };
      let i = t;
      for (;;) {
        let t = null == o, s = o || c, d = l;
        try {
          await h({
            path: e,
            matches: i,
            patch: (t, e) => {
              n.aborted || Mt(t, e, s, d, r);
            },
          });
        } catch (a) {
          return { type: "error", error: a, partialMatches: i };
        } finally {
          t && !n.aborted && (c = [...c]);
        }
        if (n.aborted) return { type: "aborted" };
        let f = j(s, e, u);
        if (f) return { type: "success", matches: f };
        let p = F(s, e, u, !0);
        if (
          !p ||
          i.length === p.length &&
            i.every((t, e) => t.route.id === p[e].route.id)
        ) return { type: "success", matches: null };
        i = p;
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
            let { action: n, location: i, delta: r } = e;
            if (C) return C(), void (C = void 0);
            M(
              0 === Z.size || null != r,
              "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
            );
            let o = Wt({
              currentLocation: T.location,
              nextLocation: i,
              historyAction: n,
            });
            if (o && null != r) {
              let e = new Promise((t) => {
                C = t;
              });
              return t.history.go(-1 * r),
                void Ft(o, {
                  state: "blocked",
                  location: i,
                  proceed() {
                    Ft(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: i,
                    }), e.then(() => t.history.go(r));
                  },
                  reset() {
                    let t = new Map(T.blockers);
                    t.set(o, pt), tt({ blockers: t });
                  },
                });
            }
            return nt(n, i);
          }), n
        ) {
          !function (t, e) {
            try {
              let n = t.sessionStorage.getItem(bt);
              if (n) {
                let t = JSON.parse(n);
                for (let [n, i] of Object.entries(t || {})) {
                  i && Array.isArray(i) && e.set(n, new Set(i || []));
                }
              }
            } catch (n) {}
          }(e, z);
          let t = () =>
            function (t, e) {
              if (e.size > 0) {
                let i = {};
                for (let [t, n] of e) i[t] = [...n];
                try {
                  t.sessionStorage.setItem(bt, JSON.stringify(i));
                } catch (n) {
                  M(
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
        if (m = t, y = e, b = n || null, !v && T.navigation === ht) {
          v = !0;
          let t = ne(T.location, T.matches);
          null != t && tt({ restoreScrollPosition: t });
        }
        return () => {
          m = null, y = null, b = null;
        };
      },
      navigate: async function e(n, i) {
        if ("number" === typeof n) return void t.history.go(n);
        let r = vt(
            T.location,
            T.matches,
            u,
            f.v7_prependBasename,
            n,
            f.v7_relativeSplatPath,
            null == i ? void 0 : i.fromRouteId,
            null == i ? void 0 : i.relative,
          ),
          { path: o, submission: a, error: s } = xt(
            f.v7_normalizeFormMethod,
            !1,
            r,
            i,
          ),
          l = T.location,
          c = P(T.location, o, i && i.state);
        c = k({}, c, t.history.encodeLocation(c));
        let d = i && null != i.replace ? i.replace : void 0, h = x.Push;
        !0 === d ? h = x.Replace : !1 === d ||
          null != a && Gt(a.formMethod) &&
            a.formAction === T.location.pathname + T.location.search &&
            (h = x.Replace);
        let p = i && "preventScrollReset" in i
            ? !0 === i.preventScrollReset
            : void 0,
          g = !0 === (i && i.flushSync),
          m = Wt({ currentLocation: l, nextLocation: c, historyAction: h });
        if (!m) {
          return await nt(h, c, {
            submission: a,
            pendingError: s,
            preventScrollReset: p,
            replace: i && i.replace,
            enableViewTransition: i && i.viewTransition,
            flushSync: g,
          });
        }
        Ft(m, {
          state: "blocked",
          location: c,
          proceed() {
            Ft(m, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: c,
            }), e(n, i);
          },
          reset() {
            let t = new Map(T.blockers);
            t.set(m, pt), tt({ blockers: t });
          },
        });
      },
      fetch: function (e, n, r, a) {
        if (i) {
          throw new Error(
            "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
          );
        }
        St(e);
        let s = !0 === (a && a.flushSync),
          l = o || c,
          d = vt(
            T.location,
            T.matches,
            u,
            f.v7_prependBasename,
            r,
            f.v7_relativeSplatPath,
            n,
            null == a ? void 0 : a.relative,
          ),
          h = j(l, d, u),
          p = le(h, l, d);
        if (p.active && p.matches && (h = p.matches), !h) {
          return void ut(e, n, Ut(404, { pathname: d }), { flushSync: s });
        }
        let { path: g, submission: m, error: b } = xt(
          f.v7_normalizeFormMethod,
          !0,
          d,
          a,
        );
        if (b) return void ut(e, n, b, { flushSync: s });
        let y = ie(h, g), v = !0 === (a && a.preventScrollReset);
        m && Gt(m.formMethod)
          ? async function (e, n, i, r, a, s, l, d, h) {
            function p(t) {
              if (!t.route.action && !t.route.lazy) {
                let t = Ut(405, {
                  method: h.formMethod,
                  pathname: i,
                  routeId: n,
                });
                return ut(e, n, t, { flushSync: l }), !0;
              }
              return !1;
            }
            if (lt(), Q.delete(e), !s && p(r)) return;
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
              }(h, g),
              { flushSync: l },
            );
            let m = new AbortController(), b = Lt(t.history, i, m.signal, h);
            if (s) {
              let t = await ce(a, i, b.signal);
              if ("aborted" === t.type) return;
              if ("error" === t.type) {
                return void ut(e, n, t.error, {
                  flushSync: l,
                });
              }
              if (!t.matches) {
                return void ut(e, n, Ut(404, { pathname: i }), {
                  flushSync: l,
                });
              }
              if (p(r = ie(a = t.matches, i))) return;
            }
            H.set(e, m);
            let y = W,
              v = await at("action", T, b, [r], a, e),
              x = v[r.route.id];
            if (b.signal.aborted) return void (H.get(e) === m && H.delete(e));
            if (f.v7_fetcherPersist && J.has(e)) {
              if (Qt(x) || Yt(x)) {
                return void ct(e, se(void 0));
              }
            } else {
              if (Qt(x)) {
                return H.delete(e),
                  $ > y
                    ? void ct(e, se(void 0))
                    : (Y.add(e),
                      ct(e, ae(h)),
                      rt(b, x, !1, {
                        fetcherSubmission: h,
                        preventScrollReset: d,
                      }));
              }
              if (Yt(x)) return void ut(e, n, x.error);
            }
            if (qt(x)) throw Ut(400, { type: "defer-action" });
            let w = T.navigation.location || T.location,
              _ = Lt(t.history, w, m.signal),
              k = o || c,
              M = "idle" !== T.navigation.state
                ? j(k, T.navigation.location, u)
                : T.matches;
            E(M, "Didn't find any matches after fetcher action");
            let C = ++W;
            q.set(e, C);
            let P = ae(h, x.data);
            T.fetchers.set(e, P);
            let [R, D] = _t(
              t.history,
              T,
              M,
              h,
              w,
              !1,
              f.v7_skipActionErrorRevalidation,
              B,
              V,
              U,
              J,
              Q,
              Y,
              k,
              u,
              [r.route.id, x],
            );
            D.filter((t) => t.key !== e).forEach((t) => {
              let e = t.key,
                n = T.fetchers.get(e),
                i = ae(void 0, n ? n.data : void 0);
              T.fetchers.set(e, i),
                St(e),
                t.controller && H.set(e, t.controller);
            }), tt({ fetchers: new Map(T.fetchers) });
            let L = () => D.forEach((t) => St(t.key));
            m.signal.addEventListener("abort", L);
            let { loaderResults: A, fetcherResults: F } = await st(
              T,
              M,
              R,
              D,
              _,
            );
            if (m.signal.aborted) return;
            m.signal.removeEventListener("abort", L),
              q.delete(e),
              H.delete(e),
              D.forEach((t) => H.delete(t.key));
            let z = Ht(A);
            if (z) return rt(_, z.result, !1, { preventScrollReset: d });
            if (z = Ht(F), z) {
              return Y.add(z.key),
                rt(_, z.result, !1, { preventScrollReset: d });
            }
            let { loaderData: N, errors: I } = zt(T, M, A, void 0, D, F, G);
            if (T.fetchers.has(e)) {
              let t = se(x.data);
              T.fetchers.set(e, t);
            }
            At(C),
              "loading" === T.navigation.state && C > $
                ? (E(O, "Expected pending action"),
                  S && S.abort(),
                  et(T.navigation.location, {
                    matches: M,
                    loaderData: N,
                    errors: I,
                    fetchers: new Map(T.fetchers),
                  }))
                : (tt({
                  errors: I,
                  loaderData: Nt(T.loaderData, N, M, I),
                  fetchers: new Map(T.fetchers),
                }),
                  B = !1);
          }(e, n, g, y, h, p.active, s, v, m)
          : (Q.set(e, { routeId: n, path: g }),
            async function (e, n, i, r, o, a, s, l, c) {
              let u = T.fetchers.get(e);
              ct(e, ae(c, u ? u.data : void 0), { flushSync: s });
              let d = new AbortController(), h = Lt(t.history, i, d.signal);
              if (a) {
                let t = await ce(o, i, h.signal);
                if ("aborted" === t.type) return;
                if ("error" === t.type) {
                  return void ut(e, n, t.error, { flushSync: s });
                }
                if (!t.matches) {
                  return void ut(e, n, Ut(404, { pathname: i }), {
                    flushSync: s,
                  });
                }
                r = ie(o = t.matches, i);
              }
              H.set(e, d);
              let f = W,
                p = await at("loader", T, h, [r], o, e),
                g = p[r.route.id];
              qt(g) && (g = await ee(g, h.signal, !0) || g);
              H.get(e) === d && H.delete(e);
              if (h.signal.aborted) return;
              if (J.has(e)) return void ct(e, se(void 0));
              if (Qt(g)) {
                return $ > f
                  ? void ct(e, se(void 0))
                  : (Y.add(e),
                    void await rt(h, g, !1, { preventScrollReset: l }));
              }
              if (Yt(g)) return void ut(e, n, g.error);
              E(!qt(g), "Unhandled fetcher deferred data"), ct(e, se(g.data));
            }(e, n, g, y, h, p.active, s, v, m));
      },
      revalidate: function () {
        lt(),
          tt({ revalidation: "loading" }),
          "submitting" !== T.navigation.state &&
          ("idle" !== T.navigation.state
            ? nt(O || T.historyAction, T.navigation.location, {
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
          T.blockers.forEach((t, e) => jt(e));
      },
      getBlocker: function (t, e) {
        let n = T.blockers.get(t) || pt;
        return Z.get(t) !== e && Z.set(t, e), n;
      },
      deleteBlocker: jt,
      patchRoutes: function (t, e) {
        let n = null == o;
        Mt(t, e, o || c, l, r), n && (c = [...c], tt({}));
      },
      _internalFetchControllers: H,
      _internalActiveDeferreds: G,
      _internalSetRoutes: function (t) {
        l = {}, o = A(t, r, void 0, l);
      },
    },
      s;
  }
  Symbol("deferred");
  function vt(t, e, n, i, r, o, a, s) {
    let l, c;
    if (a) {
      l = [];
      for (let t of e) {
        if (l.push(t), t.route.id === a) {
          c = t;
          break;
        }
      }
    } else l = e, c = e[e.length - 1];
    let u = Z(
      r || ".",
      function (t, e) {
        let n = G(t);
        return e
          ? n.map((t, e) => e === n.length - 1 ? t.pathname : t.pathnameBase)
          : n.map((t) => t.pathnameBase);
      }(l, o),
      X(t.pathname, n) || t.pathname,
      "path" === s,
    );
    if (
      null == r && (u.search = t.search, u.hash = t.hash),
        (null == r || "" === r || "." === r) && c
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
    return i && "/" !== n &&
      (u.pathname = "/" === u.pathname ? n : tt([n, u.pathname])),
      T(u);
  }
  function xt(t, e, n, i) {
    if (
      !i || !function (t) {
        return null != t &&
          ("formData" in t && null != t.formData ||
            "body" in t && void 0 !== t.body);
      }(i)
    ) return { path: n };
    if (i.formMethod && !Jt(i.formMethod)) {
      return { path: n, error: Ut(405, { method: i.formMethod }) };
    }
    let r,
      o,
      a = () => ({ path: n, error: Ut(400, { type: "invalid-body" }) }),
      s = i.formMethod || "get",
      l = t ? s.toUpperCase() : s.toLowerCase(),
      c = Wt(n);
    if (void 0 !== i.body) {
      if ("text/plain" === i.formEncType) {
        if (!Gt(l)) return a();
        let t = "string" === typeof i.body
          ? i.body
          : i.body instanceof FormData || i.body instanceof URLSearchParams
          ? Array.from(i.body.entries()).reduce((t, e) => {
            let [n, i] = e;
            return "" + t + n + "=" + i + "\n";
          }, "")
          : String(i.body);
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: c,
            formEncType: i.formEncType,
            formData: void 0,
            json: void 0,
            text: t,
          },
        };
      }
      if ("application/json" === i.formEncType) {
        if (!Gt(l)) return a();
        try {
          let t = "string" === typeof i.body ? JSON.parse(i.body) : i.body;
          return {
            path: n,
            submission: {
              formMethod: l,
              formAction: c,
              formEncType: i.formEncType,
              formData: void 0,
              json: t,
              text: void 0,
            },
          };
        } catch (h) {
          return a();
        }
      }
    }
    if (
      E(
        "function" === typeof FormData,
        "FormData is not available in this environment",
      ), i.formData
    ) r = At(i.formData), o = i.formData;
    else if (i.body instanceof FormData) r = At(i.body), o = i.body;
    else if (i.body instanceof URLSearchParams) r = i.body, o = jt(r);
    else if (null == i.body) r = new URLSearchParams(), o = new FormData();
    else {try {
        r = new URLSearchParams(i.body), o = jt(r);
      } catch (h) {
        return a();
      }}
    let u = {
      formMethod: l,
      formAction: c,
      formEncType: i && i.formEncType || "application/x-www-form-urlencoded",
      formData: o,
      json: void 0,
      text: void 0,
    };
    if (Gt(u.formMethod)) return { path: n, submission: u };
    let d = O(n);
    return e && d.search && ne(d.search) && r.append("index", ""),
      d.search = "?" + r,
      { path: T(d), submission: u };
  }
  function wt(t, e, n) {
    void 0 === n && (n = !1);
    let i = t.findIndex((t) => t.route.id === e);
    return i >= 0 ? t.slice(0, n ? i + 1 : i) : t;
  }
  function _t(t, e, n, i, r, o, a, s, l, c, u, d, h, f, p, g) {
    let m = g ? Yt(g[1]) ? g[1].error : g[1].data : void 0,
      b = t.createURL(e.location),
      y = t.createURL(r),
      v = n;
    o && e.errors
      ? v = wt(n, Object.keys(e.errors)[0], !0)
      : g && Yt(g[1]) && (v = wt(n, g[0]));
    let x = g ? g[1].statusCode : void 0,
      w = a && x && x >= 400,
      _ = v.filter((t, n) => {
        let { route: r } = t;
        if (r.lazy) return !0;
        if (null == r.loader) return !1;
        if (o) return kt(r, e.loaderData, e.errors);
        if (
          function (t, e, n) {
            let i = !e || n.route.id !== e.route.id,
              r = void 0 === t[n.route.id];
            return i || r;
          }(e.loaderData, e.matches[n], t) || l.some((e) => e === t.route.id)
        ) return !0;
        let a = e.matches[n], c = t;
        return Et(
          t,
          k(
            {
              currentUrl: b,
              currentParams: a.params,
              nextUrl: y,
              nextParams: c.params,
            },
            i,
            {
              actionResult: m,
              actionStatus: x,
              defaultShouldRevalidate: !w &&
                (s || b.pathname + b.search === y.pathname + y.search ||
                  b.search !== y.search || St(a, c)),
            },
          ),
        );
      }),
      S = [];
    return d.forEach((t, r) => {
      if (o || !n.some((e) => e.route.id === t.routeId) || u.has(r)) return;
      let a = j(f, t.path, p);
      if (!a) {
        return void S.push({
          key: r,
          routeId: t.routeId,
          path: t.path,
          matches: null,
          match: null,
          controller: null,
        });
      }
      let l = e.fetchers.get(r), d = ie(a, t.path), g = !1;
      h.has(r)
        ? g = !1
        : c.has(r)
        ? (c.delete(r), g = !0)
        : g = l && "idle" !== l.state && void 0 === l.data ? s : Et(
          d,
          k(
            {
              currentUrl: b,
              currentParams: e.matches[e.matches.length - 1].params,
              nextUrl: y,
              nextParams: n[n.length - 1].params,
            },
            i,
            {
              actionResult: m,
              actionStatus: x,
              defaultShouldRevalidate: !w && s,
            },
          ),
        ),
        g &&
        S.push({
          key: r,
          routeId: t.routeId,
          path: t.path,
          matches: a,
          match: d,
          controller: new AbortController(),
        });
    }),
      [_, S];
  }
  function kt(t, e, n) {
    if (t.lazy) return !0;
    if (!t.loader) return !1;
    let i = null != e && void 0 !== e[t.id],
      r = null != n && void 0 !== n[t.id];
    return !(!i && r) &&
      ("function" === typeof t.loader && !0 === t.loader.hydrate || !i && !r);
  }
  function St(t, e) {
    let n = t.route.path;
    return t.pathname !== e.pathname ||
      null != n && n.endsWith("*") && t.params["*"] !== e.params["*"];
  }
  function Et(t, e) {
    if (t.route.shouldRevalidate) {
      let n = t.route.shouldRevalidate(e);
      if ("boolean" === typeof n) return n;
    }
    return e.defaultShouldRevalidate;
  }
  function Mt(t, e, n, i, r) {
    var o;
    let a;
    if (t) {
      let e = i[t];
      E(e, "No route found to patch children into: routeId = " + t),
        e.children || (e.children = []),
        a = e.children;
    } else a = n;
    let s = A(e.filter((t) => !a.some((e) => Ct(t, e))), r, [
      t || "_",
      "patch",
      String((null == (o = a) ? void 0 : o.length) || "0"),
    ], i);
    a.push(...s);
  }
  function Ct(t, e) {
    return "id" in t && "id" in e && t.id === e.id ||
      t.index === e.index && t.path === e.path &&
        t.caseSensitive === e.caseSensitive &&
        (!(t.children && 0 !== t.children.length ||
          e.children && 0 !== e.children.length) || t.children.every((t, n) => {
            var i;
            return null == (i = e.children) ? void 0 : i.some((e) => Ct(t, e));
          }));
  }
  async function Pt(t) {
    let { matches: e } = t, n = e.filter((t) => t.shouldLoad);
    return (await Promise.all(n.map((t) => t.resolve()))).reduce(
      (t, e, i) => Object.assign(t, { [n[i].route.id]: e }),
      {},
    );
  }
  async function Tt(t, e, n, i, r, o, a, s, l, c) {
    let u = o.map((t) =>
        t.route.lazy
          ? async function (t, e, n) {
            if (!t.lazy) return;
            let i = await t.lazy();
            if (!t.lazy) return;
            let r = n[t.id];
            E(r, "No route found in manifest");
            let o = {};
            for (let a in i) {
              let t = void 0 !== r[a] && "hasErrorBoundary" !== a;
              M(
                !t,
                'Route "' + r.id + '" has a static property "' + a +
                  '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                  a + '" will be ignored.',
              ), t || L.has(a) || (o[a] = i[a]);
            }
            Object.assign(r, o),
              Object.assign(r, k({}, e(r), { lazy: void 0 }));
          }(t.route, l, s)
          : void 0
      ),
      d = o.map((t, n) => {
        let o = u[n], a = r.some((e) => e.route.id === t.route.id);
        return k({}, t, {
          shouldLoad: a,
          resolve: async (n) => (n && "GET" === i.method &&
            (t.route.lazy || t.route.loader) && (a = !0),
            a
              ? async function (t, e, n, i, r, o) {
                let a,
                  s,
                  l = (i) => {
                    let a, l = new Promise((t, e) => a = e);
                    s = () => a(), e.signal.addEventListener("abort", s);
                    let c = (r) =>
                        "function" !== typeof i
                          ? Promise.reject(
                            new Error(
                              'You cannot call the handler for a route which defines a boolean "' +
                                t + '" [routeId: ' + n.route.id + "]",
                            ),
                          )
                          : i(
                            { request: e, params: n.params, context: o },
                            ...void 0 !== r ? [r] : [],
                          ),
                      u = (async () => {
                        try {
                          return {
                            type: "data",
                            result: await (r ? r((t) => c(t)) : c()),
                          };
                        } catch (t) {
                          return { type: "error", result: t };
                        }
                      })();
                    return Promise.race([u, l]);
                  };
                try {
                  let r = n.route[t];
                  if (i) {
                    if (r) {
                      let t,
                        [e] = await Promise.all([
                          l(r).catch((e) => {
                            t = e;
                          }),
                          i,
                        ]);
                      if (void 0 !== t) throw t;
                      a = e;
                    } else {
                      if (await i, r = n.route[t], !r) {
                        if ("action" === t) {
                          let t = new URL(e.url), i = t.pathname + t.search;
                          throw Ut(405, {
                            method: e.method,
                            pathname: i,
                            routeId: n.route.id,
                          });
                        }
                        return { type: D.data, result: void 0 };
                      }
                      a = await l(r);
                    }
                  } else {
                    if (!r) {
                      let t = new URL(e.url);
                      throw Ut(404, { pathname: t.pathname + t.search });
                    }
                    a = await l(r);
                  }
                  E(
                    void 0 !== a.result,
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
                return a;
              }(e, i, t, o, n, c)
              : Promise.resolve({ type: D.data, result: void 0 })),
        });
      }),
      h = await t({
        matches: d,
        request: i,
        params: o[0].params,
        fetcherKey: a,
        context: c,
      });
    try {
      await Promise.all(u);
    } catch (f) {}
    return h;
  }
  async function Ot(t) {
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
          error: new rt(e.status, e.statusText, t),
          statusCode: e.status,
          headers: e.headers,
        }
        : { type: D.data, data: t, statusCode: e.status, headers: e.headers };
    }
    if (n === D.error) {
      if (Kt(e)) {
        var i, r;
        if (e.data instanceof Error) {
          return {
            type: D.error,
            error: e.data,
            statusCode: null == (r = e.init) ? void 0 : r.status,
          };
        }
        e = new rt(
          (null == (i = e.init) ? void 0 : i.status) || 500,
          void 0,
          e.data,
        );
      }
      return { type: D.error, error: e, statusCode: ot(e) ? e.status : void 0 };
    }
    var o, a, s, l;
    return (function (t) {
        let e = t;
        return e && "object" === typeof e && "object" === typeof e.data &&
          "function" === typeof e.subscribe && "function" === typeof e.cancel &&
          "function" === typeof e.resolveData;
      })(e)
      ? {
        type: D.deferred,
        deferredData: e,
        statusCode: null == (o = e.init) ? void 0 : o.status,
        headers: (null == (a = e.init) ? void 0 : a.headers) &&
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
  function Rt(t, e, n, i, r, o) {
    let a = t.headers.get("Location");
    if (
      E(
        a,
        "Redirects returned/thrown from loaders/actions must have a Location header",
      ), !gt.test(a)
    ) {
      let s = i.slice(0, i.findIndex((t) => t.route.id === n) + 1);
      a = vt(new URL(e.url), s, r, !0, a, o), t.headers.set("Location", a);
    }
    return t;
  }
  function Dt(t, e, n) {
    if (gt.test(t)) {
      let i = t,
        r = i.startsWith("//") ? new URL(e.protocol + i) : new URL(i),
        o = null != X(r.pathname, n);
      if (r.origin === e.origin && o) return r.pathname + r.search + r.hash;
    }
    return t;
  }
  function Lt(t, e, n, i) {
    let r = t.createURL(Wt(e)).toString(), o = { signal: n };
    if (i && Gt(i.formMethod)) {
      let { formMethod: t, formEncType: e } = i;
      o.method = t.toUpperCase(),
        "application/json" === e
          ? (o.headers = new Headers({ "Content-Type": e }),
            o.body = JSON.stringify(i.json))
          : "text/plain" === e
          ? o.body = i.text
          : "application/x-www-form-urlencoded" === e && i.formData
          ? o.body = At(i.formData)
          : o.body = i.formData;
    }
    return new Request(r, o);
  }
  function At(t) {
    let e = new URLSearchParams();
    for (let [n, i] of t.entries()) {
      e.append(n, "string" === typeof i ? i : i.name);
    }
    return e;
  }
  function jt(t) {
    let e = new FormData();
    for (let [n, i] of t.entries()) e.append(n, i);
    return e;
  }
  function Ft(t, e, n, i, r) {
    let o,
      a = {},
      s = null,
      l = !1,
      c = {},
      u = n && Yt(n[1]) ? n[1].error : void 0;
    return t.forEach((n) => {
      if (!(n.route.id in e)) return;
      let d = n.route.id, h = e[d];
      if (
        E(!Qt(h), "Cannot handle redirect results in processLoaderData"), Yt(h)
      ) {
        let e = h.error;
        if (void 0 !== u && (e = u, u = void 0), s = s || {}, r) s[d] = e;
        else {
          let n = Bt(t, d);
          null == s[n.route.id] && (s[n.route.id] = e);
        }
        a[d] = void 0,
          l || (l = !0, o = ot(h.error) ? h.error.status : 500),
          h.headers && (c[d] = h.headers);
      } else {qt(h)
          ? (i.set(d, h.deferredData),
            a[d] = h.deferredData.data,
            null == h.statusCode || 200 === h.statusCode || l ||
            (o = h.statusCode),
            h.headers && (c[d] = h.headers))
          : (a[d] = h.data,
            h.statusCode && 200 !== h.statusCode && !l && (o = h.statusCode),
            h.headers && (c[d] = h.headers));}
    }),
      void 0 !== u && n && (s = { [n[0]]: u }, a[n[0]] = void 0),
      { loaderData: a, errors: s, statusCode: o || 200, loaderHeaders: c };
  }
  function zt(t, e, n, i, r, o, a) {
    let { loaderData: s, errors: l } = Ft(e, n, i, a, !1);
    return r.forEach((e) => {
      let { key: n, match: i, controller: r } = e, a = o[n];
      if (
        E(a, "Did not find corresponding fetcher result"),
          !r || !r.signal.aborted
      ) {
        if (Yt(a)) {
          let e = Bt(t.matches, null == i ? void 0 : i.route.id);
          l && l[e.route.id] || (l = k({}, l, { [e.route.id]: a.error })),
            t.fetchers.delete(n);
        } else if (Qt(a)) E(!1, "Unhandled fetcher revalidation redirect");
        else if (qt(a)) E(!1, "Unhandled fetcher deferred data");
        else {
          let e = se(a.data);
          t.fetchers.set(n, e);
        }
      }
    }),
      { loaderData: s, errors: l };
  }
  function Nt(t, e, n, i) {
    let r = k({}, e);
    for (let o of n) {
      let n = o.route.id;
      if (
        e.hasOwnProperty(n)
          ? void 0 !== e[n] && (r[n] = e[n])
          : void 0 !== t[n] && o.route.loader && (r[n] = t[n]),
          i && i.hasOwnProperty(n)
      ) break;
    }
    return r;
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
  function Ut(t, e) {
    let { pathname: n, routeId: i, method: r, type: o, message: a } =
        void 0 === e ? {} : e,
      s = "Unknown Server Error",
      l = "Unknown @remix-run/router error";
    return 400 === t
      ? (s = "Bad Request",
        r && n && i
          ? l = "You made a " + r + ' request to "' + n +
            '" but did not provide a `loader` for route "' + i +
            '", so there is no way to handle the request.'
          : "defer-action" === o
          ? l = "defer() is not supported in actions"
          : "invalid-body" === o && (l = "Unable to encode submission body"))
      : 403 === t
      ? (s = "Forbidden",
        l = 'Route "' + i + '" does not match URL "' + n + '"')
      : 404 === t
      ? (s = "Not Found", l = 'No route matches URL "' + n + '"')
      : 405 === t &&
        (s = "Method Not Allowed",
          r && n && i
            ? l = "You made a " + r.toUpperCase() + ' request to "' + n +
              '" but did not provide an `action` for route "' + i +
              '", so there is no way to handle the request.'
            : r && (l = 'Invalid request method "' + r.toUpperCase() + '"')),
      new rt(t || 500, s, new Error(l), !0);
  }
  function Ht(t) {
    let e = Object.entries(t);
    for (let n = e.length - 1; n >= 0; n--) {
      let [t, i] = e[n];
      if (Qt(i)) return { key: t, result: i };
    }
  }
  function Wt(t) {
    return T(k({}, "string" === typeof t ? O(t) : t, { hash: "" }));
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
  async function Zt(t, e, n, i, r) {
    let o = Object.entries(e);
    for (let a = 0; a < o.length; a++) {
      let [s, l] = o[a],
        c = t.find((t) => (null == t ? void 0 : t.route.id) === s);
      if (!c) continue;
      let u = i.find((t) => t.route.id === c.route.id),
        d = null != u && !St(u, c) && void 0 !== (r && r[c.route.id]);
      qt(l) && d && await ee(l, n, !1).then((t) => {
        t && (e[s] = t);
      });
    }
  }
  async function te(t, e, n) {
    for (let i = 0; i < n.length; i++) {
      let { key: r, routeId: o, controller: a } = n[i], s = e[r];
      t.find((t) => (null == t ? void 0 : t.route.id) === o) &&
        (qt(s) &&
          (E(
            a,
            "Expected an AbortController for revalidating fetcher deferred result",
          ),
            await ee(s, a.signal, !0).then((t) => {
              t && (e[r] = t);
            })));
    }
  }
  async function ee(t, e, n) {
    if (void 0 === n && (n = !1), !await t.deferredData.resolveData(e)) {
      if (n) {
        try {
          return { type: D.data, data: t.deferredData.unwrappedData };
        } catch (i) {
          return { type: D.error, error: i };
        }
      }
      return { type: D.data, data: t.deferredData.data };
    }
  }
  function ne(t) {
    return new URLSearchParams(t).getAll("index").some((t) => "" === t);
  }
  function ie(t, e) {
    let n = "string" === typeof e ? O(e).search : e.search;
    if (t[t.length - 1].route.index && ne(n || "")) return t[t.length - 1];
    let i = G(t);
    return i[i.length - 1];
  }
  function re(t) {
    let {
      formMethod: e,
      formAction: n,
      formEncType: i,
      text: r,
      formData: o,
      json: a,
    } = t;
    if (e && n && i) {
      return null != r
        ? {
          formMethod: e,
          formAction: n,
          formEncType: i,
          formData: void 0,
          json: void 0,
          text: r,
        }
        : null != o
        ? {
          formMethod: e,
          formAction: n,
          formEncType: i,
          formData: o,
          json: void 0,
          text: void 0,
        }
        : void 0 !== a
        ? {
          formMethod: e,
          formAction: n,
          formEncType: i,
          formData: void 0,
          json: a,
          text: void 0,
        }
        : void 0;
    }
  }
  function oe(t, e) {
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
  function ae(t, e) {
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
        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }
      return t;
    },
      le.apply(this, arguments);
  }
  const ce = r.createContext(null);
  const ue = r.createContext(null);
  const de = r.createContext(null);
  const he = r.createContext(null);
  const fe = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const pe = r.createContext(null);
  function ge() {
    return null != r.useContext(he);
  }
  function me() {
    return ge() || E(!1), r.useContext(he).location;
  }
  function be(t, e, n, i) {
    ge() || E(!1);
    let { navigator: o } = r.useContext(de),
      { matches: a } = r.useContext(fe),
      s = a[a.length - 1],
      l = s ? s.params : {},
      c = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let u, d = me();
    if (e) {
      var h;
      let t = "string" === typeof e ? O(e) : e;
      "/" === c || (null == (h = t.pathname) ? void 0 : h.startsWith(c)) ||
      E(!1), u = t;
    } else u = d;
    let f = u.pathname || "/", p = f;
    if ("/" !== c) {
      let t = c.replace(/^\//, "").split("/");
      p = "/" + f.replace(/^\//, "").split("/").slice(t.length).join("/");
    }
    let g = j(t, { pathname: p });
    let m = _e(
      g && g.map((t) =>
        Object.assign({}, t, {
          params: Object.assign({}, l, t.params),
          pathname: tt([
            c,
            o.encodeLocation
              ? o.encodeLocation(t.pathname).pathname
              : t.pathname,
          ]),
          pathnameBase: "/" === t.pathnameBase ? c : tt([
            c,
            o.encodeLocation
              ? o.encodeLocation(t.pathnameBase).pathname
              : t.pathnameBase,
          ]),
        })
      ),
      a,
      n,
      i,
    );
    return e && m
      ? r.createElement(he.Provider, {
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
        let e = r.useContext(pe),
          n = Se(ke.UseRouteError),
          i = Ee(ke.UseRouteError);
        if (void 0 !== e) return e;
        return null == (t = n.errors) ? void 0 : t[i];
      }(),
      e = ot(t)
        ? t.status + " " + t.statusText
        : t instanceof Error
        ? t.message
        : JSON.stringify(t),
      n = t instanceof Error ? t.stack : null,
      i = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: i };
    return r.createElement(
      r.Fragment,
      null,
      r.createElement("h2", null, "Unexpected Application Error!"),
      r.createElement("h3", { style: { fontStyle: "italic" } }, e),
      n ? r.createElement("pre", { style: o }, n) : null,
      null,
    );
  }
  const ve = r.createElement(ye, null);
  class xe extends r.Component {
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
        ? r.createElement(
          fe.Provider,
          { value: this.props.routeContext },
          r.createElement(pe.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
        : this.props.children;
    }
  }
  function we(t) {
    let { routeContext: e, match: n, children: i } = t, o = r.useContext(ce);
    return o && o.static && o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(fe.Provider, { value: e }, i);
  }
  function _e(t, e, n, i) {
    var o;
    if (
      void 0 === e && (e = []),
        void 0 === n && (n = null),
        void 0 === i && (i = null),
        null == t
    ) {
      var a;
      if (!n) return null;
      if (n.errors) t = n.matches;
      else {
        if (
          !(null != (a = i) && a.v7_partialHydration && 0 === e.length &&
            !n.initialized && n.matches.length > 0)
        ) return null;
        t = n.matches;
      }
    }
    let s = t, l = null == (o = n) ? void 0 : o.errors;
    if (null != l) {
      let t = s.findIndex(
        (t) => t.route.id && void 0 !== (null == l ? void 0 : l[t.route.id]),
      );
      t >= 0 || E(!1), s = s.slice(0, Math.min(s.length, t + 1));
    }
    let c = !1, u = -1;
    if (n && i && i.v7_partialHydration) {
      for (let r = 0; r < s.length; r++) {
        let t = s[r];
        if (
          (t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
          (u = r), t.route.id
        ) {
          let { loaderData: e, errors: i } = n,
            r = t.route.loader && void 0 === e[t.route.id] &&
              (!i || void 0 === i[t.route.id]);
          if (t.route.lazy || r) {
            c = !0, s = u >= 0 ? s.slice(0, u + 1) : [s[0]];
            break;
          }
        }
      }
    }
    return s.reduceRight((t, i, o) => {
      let a, d = !1, h = null, f = null;
      var p;
      n &&
        (a = l && i.route.id ? l[i.route.id] : void 0,
          h = i.route.errorElement || ve,
          c &&
          (u < 0 && 0 === o
            ? (p = "route-fallback",
              !1 || Me[p] || (Me[p] = !0),
              d = !0,
              f = null)
            : u === o && (d = !0, f = i.route.hydrateFallbackElement || null)));
      let g = e.concat(s.slice(0, o + 1)),
        m = () => {
          let e;
          return e = a
            ? h
            : d
            ? f
            : i.route.Component
            ? r.createElement(i.route.Component, null)
            : i.route.element
            ? i.route.element
            : t,
            r.createElement(we, {
              match: i,
              routeContext: { outlet: t, matches: g, isDataRoute: null != n },
              children: e,
            });
        };
      return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === o)
        ? r.createElement(xe, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: a,
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
    let e = r.useContext(ue);
    return e || E(!1), e;
  }
  function Ee(t) {
    let e = function () {
        let t = r.useContext(fe);
        return t || E(!1), t;
      }(),
      n = e.matches[e.matches.length - 1];
    return n.route.id || E(!1), n.route.id;
  }
  const Me = {};
  o.startTransition;
  function Ce(t) {
    let {
      basename: e = "/",
      children: n = null,
      location: i,
      navigationType: o = x.Pop,
      navigator: a,
      static: s = !1,
      future: l,
    } = t;
    ge() && E(!1);
    let c = e.replace(/^\/*/, "/"),
      u = r.useMemo(
        () => ({
          basename: c,
          navigator: a,
          static: s,
          future: le({ v7_relativeSplatPath: !1 }, l),
        }),
        [c, l, a, s],
      );
    "string" === typeof i && (i = O(i));
    let {
        pathname: d = "/",
        search: h = "",
        hash: f = "",
        state: p = null,
        key: g = "default",
      } = i,
      m = r.useMemo(() => {
        let t = X(d, c);
        return null == t ? null : {
          location: { pathname: t, search: h, hash: f, state: p, key: g },
          navigationType: o,
        };
      }, [c, d, h, f, p, g, o]);
    return null == m ? null : r.createElement(
      de.Provider,
      { value: u },
      r.createElement(he.Provider, { children: n, value: m }),
    );
  }
  new Promise(() => {});
  r.Component;
  function Pe(t) {
    let e = {
      hasErrorBoundary: null != t.ErrorBoundary || null != t.errorElement,
    };
    return t.Component &&
      Object.assign(e, {
        element: r.createElement(t.Component),
        Component: void 0,
      }),
      t.HydrateFallback &&
      Object.assign(e, {
        hydrateFallbackElement: r.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
      t.ErrorBoundary &&
      Object.assign(e, {
        errorElement: r.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
      e;
  }
  function Te() {
    return Te = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
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
  } catch (ph) {}
  function Oe() {
    var t;
    let e = null == (t = window) ? void 0 : t.__staticRouterHydrationData;
    return e && e.errors && (e = Te({}, e, { errors: Re(e.errors) })), e;
  }
  function Re(t) {
    if (!t) return null;
    let e = Object.entries(t), n = {};
    for (let [i, r] of e) {
      if (r && "RouteErrorResponse" === r.__type) {
        n[i] = new rt(r.status, r.statusText, r.data, !0 === r.internal);
      } else if (r && "Error" === r.__type) {
        if (r.__subType) {
          let t = window[r.__subType];
          if ("function" === typeof t) {
            try {
              let e = new t(r.message);
              e.stack = "", n[i] = e;
            } catch (ph) {
            }
          }
        }
        if (null == n[i]) {
          let t = new Error(r.message);
          t.stack = "", n[i] = t;
        }
      } else n[i] = r;
    }
    return n;
  }
  const De = r.createContext({ isTransitioning: !1 });
  const Le = r.createContext(new Map());
  const Ae = o.startTransition, je = _.flushSync;
  o.useId;
  function Fe(t) {
    je ? je(t) : t();
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
    let { fallbackElement: e, router: n, future: i } = t,
      [o, a] = r.useState(n.state),
      [s, l] = r.useState(),
      [c, u] = r.useState({ isTransitioning: !1 }),
      [d, h] = r.useState(),
      [f, p] = r.useState(),
      [g, m] = r.useState(),
      b = r.useRef(new Map()),
      { v7_startTransition: y } = i || {},
      v = r.useCallback((t) => {
        y
          ? function (t) {
            Ae ? Ae(t) : t();
          }(t)
          : t();
      }, [y]),
      x = r.useCallback((t, e) => {
        let { deletedFetchers: i, flushSync: r, viewTransitionOpts: o } = e;
        i.forEach((t) => b.current.delete(t)),
          t.fetchers.forEach((t, e) => {
            void 0 !== t.data && b.current.set(e, t.data);
          });
        let s = null == n.window || null == n.window.document ||
          "function" !== typeof n.window.document.startViewTransition;
        if (o && !s) {
          if (r) {
            Fe(() => {
              f && (d && d.resolve(), f.skipTransition()),
                u({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: o.currentLocation,
                  nextLocation: o.nextLocation,
                });
            });
            let e = n.window.document.startViewTransition(() => {
              Fe(() => a(t));
            });
            return e.finished.finally(() => {
              Fe(() => {
                h(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
              });
            }),
              void Fe(() => p(e));
          }
          f
            ? (d && d.resolve(),
              f.skipTransition(),
              m({
                state: t,
                currentLocation: o.currentLocation,
                nextLocation: o.nextLocation,
              }))
            : (l(t),
              u({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: o.currentLocation,
                nextLocation: o.nextLocation,
              }));
        } else r ? Fe(() => a(t)) : v(() => a(t));
      }, [n.window, f, d, b, v]);
    r.useLayoutEffect(() => n.subscribe(x), [n, x]),
      r.useEffect(() => {
        c.isTransitioning && !c.flushSync && h(new ze());
      }, [c]),
      r.useEffect(() => {
        if (d && s && n.window) {
          let t = s,
            e = d.promise,
            i = n.window.document.startViewTransition(async () => {
              v(() => a(t)), await e;
            });
          i.finished.finally(() => {
            h(void 0), p(void 0), l(void 0), u({ isTransitioning: !1 });
          }), p(i);
        }
      }, [v, s, d, n.window]),
      r.useEffect(() => {
        d && s && o.location.key === s.location.key && d.resolve();
      }, [d, f, o.location, s]),
      r.useEffect(() => {
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
      r.useEffect(() => {}, []);
    let w = r.useMemo(() => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (t) => n.navigate(t),
        push: (t, e, i) =>
          n.navigate(t, {
            state: e,
            preventScrollReset: null == i ? void 0 : i.preventScrollReset,
          }),
        replace: (t, e, i) =>
          n.navigate(t, {
            replace: !0,
            state: e,
            preventScrollReset: null == i ? void 0 : i.preventScrollReset,
          }),
      }), [n]),
      _ = n.basename || "/",
      k = r.useMemo(
        () => ({ router: n, navigator: w, static: !1, basename: _ }),
        [n, w, _],
      ),
      S = r.useMemo(
        () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
        [n.future.v7_relativeSplatPath],
      );
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        ce.Provider,
        { value: k },
        r.createElement(
          ue.Provider,
          { value: o },
          r.createElement(
            Le.Provider,
            { value: b.current },
            r.createElement(
              De.Provider,
              { value: c },
              r.createElement(
                Ce,
                {
                  basename: _,
                  location: o.location,
                  navigationType: o.historyAction,
                  navigator: w,
                  future: S,
                },
                o.initialized || n.future.v7_partialHydration
                  ? r.createElement(Ie, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
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
  const Ie = r.memo(Be);
  function Be(t) {
    let { routes: e, future: n, state: i } = t;
    return be(e, void 0, i, n);
  }
  "undefined" !== typeof window && "undefined" !== typeof window.document &&
    window.document.createElement;
  var Ve, Ue;
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
    }(Ue || (Ue = {}));
  function He() {
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
                    children: (0, s.jsx)(h, {
                      children: "Get in trance with my various hypnosis files.",
                    }),
                  }),
                }),
                (0, s.jsx)(l, {
                  href: "/hypno/visuals",
                  children: (0, s.jsx)(b, {
                    title: "Visuals",
                    children: (0, s.jsx)(h, {
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
  function Qe(t, e, n, i, r, o) {
    let a = e, s = n, l = i, c = r;
    t.save(), t.beginPath();
    let u = .3 * c;
    t.moveTo(a, s + u),
      t.bezierCurveTo(a, s, a - l / 2, s, a - l / 2, s + u),
      t.bezierCurveTo(a - l / 2, s + (c + u) / 2, a, s + (c + u) / 2, a, s + c),
      t.bezierCurveTo(
        a,
        s + (c + u) / 2,
        a + l / 2,
        s + (c + u) / 2,
        a + l / 2,
        s + u,
      ),
      t.bezierCurveTo(a + l / 2, s, a, s, a, s + u),
      t.closePath(),
      t.fillStyle = o,
      t.fill(),
      t.restore();
  }
  const Ke = [
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
          const { x: n, y: i } = We(t);
          this.currentColorIndex === e.colors.length &&
          (this.currentColorIndex = 0),
            this.hearts.push({
              location: { x: n, y: e.reverse ? i - 1e3 : i },
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
                const i = this.hearts.indexOf(n);
                Qe(
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
                  e.reverse && n.opacity > 1 && (this.hearts[i] = null),
                  !e.reverse && n.opacity < 0 && (this.hearts[i] = null);
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
          const { x: n, y: i } = We(t);
          let [r, o] = [n, i];
          for (let a = 0; a < 2e4; a++) {
            t.beginPath();
            const s = n + this.radius * Math.cos(this.angle),
              l = i + this.radius * Math.sin(this.angle);
            t.lineWidth = Math.max(1, this.radius / 15),
              t.moveTo(r, o),
              t.lineTo(s, l),
              r = s,
              o = l,
              this.angle += this.angleIncrement,
              this.radius += this.radiusIncrement;
            const c = e.colors[a % e.colors.length];
            e.segments < 0
              ? (t.strokeStyle = "transparent",
                a % e.segments && (t.strokeStyle = c))
              : (t.strokeStyle = c,
                a % e.segments && (t.strokeStyle = "transparent")), t.stroke();
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
          const i = n[Math.floor(Math.random() * n.length)];
          var r;
          this.currentColorIndex === e.colors.length &&
          (this.currentColorIndex = 0),
            this.dashes.push({
              position: (r = t, {
                x: Math.floor(Math.random() * r.canvas.width),
                y: Math.floor(Math.random() * r.canvas.height),
              }),
              direction: { x: i[0], y: i[1] },
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
    ],
    Xe = Ke;
  function Je() {
    return (0, s.jsxs)(m, {
      children: [
        (0, s.jsx)(f, {}),
        (0, s.jsx)(g, {
          children: (0, s.jsx)(y, {
            children: Xe.map((t, e) =>
              (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(l, {
                  href: `/hypno/visuals/${e}`,
                  children: (0, s.jsx)(b, {
                    title: `${(new t()).name}`,
                    children: (0, s.jsx)(h, {
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
  function Ge(t) {
    let { type: e, big: n, href: i, children: r, ...o } = t;
    const a = `dawn-button ${n && "dawn-big-control"} ${e ? `dawn-${e}` : ""}`;
    return i
      ? (0, s.jsxs)("a", {
        href: i,
        className: "dawn-link " + a,
        ...o,
        children: [" ", r],
      })
      : (0, s.jsx)("button", { className: a, ...o, children: r });
  }
  function Ze(t) {
    const [e, n] = (0, r.useState)([]), [i, o] = (0, r.useState)([]);
    function a() {
      o((e) => [...e, t.input.value || "1"]),
        t.onChange([...i, t.input.value || "1"]),
        n((t) => [...t, Math.random()]);
    }
    return (0, r.useEffect)(() => {
      if (t.currentValues) {
        t.currentValues
          ? (o([...t.currentValues]), t.onChange([...t.currentValues]))
          : (o([t.input.value || "1"]), t.onChange([t.input.value || "1"]));
        const e = [];
        for (let n = 0; n != t.currentValues.length; n++) e.push(Math.random());
        n(e);
      } else a();
    }, [t.updateKey]),
      (0, s.jsxs)("div", {
        children: [
          e.map((r) =>
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("input", {
                  ...t.input,
                  ..."checkbox" === t.input.type
                    ? { checked: i[e.findIndex((t) => t === r)] }
                    : { value: i[e.findIndex((t) => t === r)] },
                  onChange: (n) =>
                    function (n, i) {
                      let r = n.target.value;
                      "checkbox" === n.target.type && (r = n.target.checked);
                      const a = e.findIndex((t) => t === i);
                      -1 !== a && o((e) => {
                        const n = [...e];
                        return n[a] = r,
                          setTimeout(() => {
                            t.onChange(n);
                          }, 100),
                          n;
                      });
                    }(n, r),
                }),
                (0, s.jsx)(Ge, {
                  onClick: () => {
                    return i = r,
                      o((n) => {
                        const r = [...n];
                        return r.splice(e.findIndex((t) => t === i), 1),
                          setTimeout(() => {
                            t.onChange(r);
                          }, 100),
                          r;
                      }),
                      void n((t) => {
                        const n = [...t];
                        return n.splice(
                          e.findIndex((t) => t === i),
                          1,
                        ),
                          n;
                      });
                    var i;
                  },
                  children: "X",
                }),
                (0, s.jsx)("br", {}),
              ],
            }, r)
          ),
          (0, s.jsx)(Ge, { onClick: a, children: "Add" }),
        ],
      });
  }
  function tn(t) {
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
      ? tn(t.inner)
      : "color" === t.type
      ? { type: "color", value: t.default }
      : {};
  }
  function en(t) {
    var e, n, i, r, o;
    let { name: a, option: l, current: c, set: u } = t;
    const d = tn(l);
    return (0, s.jsx)(s.Fragment, {
      children: {
        number: (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("input", {
              ...d,
              value: null !== (e = c[a]) && void 0 !== e ? e : l.default,
              onChange: (t) => u(l, a, t),
            }),
            (0, s.jsx)("label", {
              children: null !== (n = c[a]) && void 0 !== n ? n : l.default,
            }),
          ],
        }),
        color: (0, s.jsx)("input", {
          ...d,
          value: null !== (i = c[a]) && void 0 !== i ? i : l.default,
          onChange: (t) => u(l, a, t),
        }),
        boolean: (0, s.jsx)("input", {
          ...d,
          checked: null !== (r = c[a]) && void 0 !== r ? r : l.default,
          onChange: (t) => u(l, a, t),
        }),
        array: (0, s.jsx)(Ze, {
          currentValues: null !== (o = c[a]) && void 0 !== o ? o : l.default,
          input: d,
          onChange: (t) => u(l, a, t),
        }),
      }[l.type],
    });
  }
  const nn = {
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
    rn = {
      usePreset: !0,
      preset: "deep",
      customWords: "",
      enabled: !0,
      opacity: .5,
    };
  function on() {
    var t, e, n, i, o;
    const [a, l] = (0, r.useState)(void 0),
      [c, u] = (0, r.useState)({}),
      [d, p] = (0, r.useState)(-1),
      [v, x] = (0, r.useState)(""),
      [w, _] = (0, r.useState)(""),
      [k, S] = (0, r.useState)({ ...rn }),
      [E, M] = (0, r.useState)(!1),
      C = (0, r.useRef)(null);
    function P(t, e, n) {
      const i = { ...c };
      switch (t.type) {
        case "number":
          i[e] = parseFloat(n.target.value);
          break;
        case "boolean":
          i[e] = n.target.checked;
          break;
        case "array":
          i[e] = n;
          break;
        case "color":
          i[e] = n.target.value;
      }
      u(i), T(i);
    }
    function T(t) {
      x(`${window.location.protocol}//${window.location.host}${window.location.pathname}?options=${
        btoa(JSON.stringify(t))
      }`);
    }
    function O(t, e) {
      console.log(t, e),
        S((n) => {
          const i = { ...n };
          return i[t] = e,
            localStorage.setItem("text_flash_options", JSON.stringify(i)),
            { ...i };
        });
    }
    return (0, r.useEffect)(() => {
      const t = window.location.pathname.match(/[0-9]+/);
      if (!t || parseInt(t[0]) >= Xe.length) {
        return void (window.location.href = "/hypno/visuals");
      }
      const e = parseInt(t[0]);
      p(e);
      const n = Xe[parseInt(t[0])];
      if (l(new n()), window.location.search) {
        let t = window.location.search.match(/options=[a-zA-Z0-9=]+/);
        if (t) {
          try {
            const e = JSON.parse(atob(t[0].replace(/options=/, "")));
            u(e);
          } catch {}
        }
      }
      const i = localStorage.getItem("text_flash_options");
      i && S(JSON.parse(i));
    }, []),
      E
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
              title: (0, s.jsxs)(h, {
                type: "heading",
                children: [
                  "Configure: ",
                  (null === a || void 0 === a ? void 0 : a.name) || "???",
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
                        (0, s.jsx)(h, {
                          children: null === a || void 0 === a
                            ? void 0
                            : a.description,
                        }),
                        (0, s.jsx)("table", {
                          children: (0, s.jsxs)("tbody", {
                            children: [
                              Object.entries(
                                null !== (t = null === a || void 0 === a
                                      ? void 0
                                      : a.getOptions()) && void 0 !== t
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
                                      children: (0, s.jsx)(en, {
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
                                      null !== (e = null === a || void 0 === a
                                            ? void 0
                                            : a.getPresets()) && void 0 !== e
                                        ? e
                                        : {},
                                    ).length > 0 && (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)("td", {
                                        children: (0, s.jsx)("b", {
                                          children: "Presets: ",
                                        }),
                                      }),
                                      (0, s.jsx)("td", {
                                        children: Object.entries(
                                          null !==
                                              (n = null === a || void 0 === a
                                                ? void 0
                                                : a.getPresets()) &&
                                            void 0 !== n
                                            ? n
                                            : {},
                                        ).map((t) => {
                                          let [e, n] = t;
                                          return (0, s.jsx)(Ge, {
                                            onClick: () =>
                                              function (t) {
                                                const e = { ...c };
                                                u({ ...e, ...t }),
                                                  T({ ...e, ...t }),
                                                  M(!0),
                                                  setTimeout(() => {
                                                    M(!1);
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
                        (0, s.jsx)(Ge, {
                          onClick: function () {
                            M(!0),
                              setTimeout(() => {
                                const t = C.current;
                                if (!t) return alert("Failed to get canvas.");
                                t.width = window.innerWidth,
                                  t.height = window.innerHeight;
                                const e = {};
                                for (
                                  const [s, l] of Object.entries(a.getOptions())
                                ) {
                                  e[s] = l.default;
                                }
                                const n = new (0, Xe[d])(),
                                  i = document.body.style.overflow;
                                document.body.style.overflow = "hidden";
                                const r = t.getContext("2d");
                                let o;
                                r.textBaseline = "middle",
                                  r.textAlign = "center",
                                  r.font = "30px Arial",
                                  r.fillStyle = "white",
                                  r.fillText(
                                    "Click anywhere to stop",
                                    t.width / 2,
                                    t.height / 2,
                                  ),
                                  setTimeout(() => {
                                    if (n.draw(r, { ...e, ...c }), k.enabled) {
                                      const t = k.customWords.split(",");
                                      let e = 0;
                                      o = setInterval(() => {
                                        if (
                                          Math.random() > .8 && "" === w &&
                                          700 - (Date.now() - e) < 0
                                        ) {
                                          const n = k.usePreset
                                            ? nn[k.preset][
                                              Math.floor(
                                                Math.random() *
                                                  nn[k.preset].length,
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
                                    n.stop(),
                                      M(!1),
                                      clearInterval(o),
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
                        (0, s.jsx)(h, {
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
                                        O("enabled", t.currentTarget.checked),
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
                                        O("usePreset", t.currentTarget.checked),
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
                                        O(
                                          "preset",
                                          t.currentTarget[
                                            t.currentTarget.selectedIndex
                                          ].value,
                                        ),
                                      defaultValue:
                                        null !== (i = k.preset) && void 0 !== i
                                          ? i
                                          : "deep",
                                      children: Object.keys(nn).map((t) =>
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
                                        O("customWords", t.currentTarget.value),
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
                                          O(
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
                          ? nn[
                            null !== (o = k.preset) && void 0 !== o ? o : "deep"
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
                      (0, s.jsx)(h, {
                        children:
                          "Share the following link to show others this visual.",
                      }),
                      (0, s.jsx)("input", { readOnly: !0, value: v }),
                      (0, s.jsx)(Ge, {
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
  function an(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  const { toString: sn } = Object.prototype,
    { getPrototypeOf: ln } = Object,
    cn = (un = Object.create(null), (t) => {
      const e = sn.call(t);
      return un[e] || (un[e] = e.slice(8, -1).toLowerCase());
    });
  var un;
  const dn = (t) => (t = t.toLowerCase(), (e) => cn(e) === t),
    hn = (t) => (e) => typeof e === t,
    { isArray: fn } = Array,
    pn = hn("undefined");
  const gn = dn("ArrayBuffer");
  const mn = hn("string"),
    bn = hn("function"),
    yn = hn("number"),
    vn = (t) => null !== t && "object" === typeof t,
    xn = (t) => {
      if ("object" !== cn(t)) return !1;
      const e = ln(t);
      return (null === e || e === Object.prototype ||
        null === Object.getPrototypeOf(e)) &&
        !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
    },
    wn = dn("Date"),
    _n = dn("File"),
    kn = dn("Blob"),
    Sn = dn("FileList"),
    En = dn("URLSearchParams"),
    [Mn, Cn, Pn, Tn] = ["ReadableStream", "Request", "Response", "Headers"].map(
      dn,
    );
  function On(t, e) {
    let n,
      i,
      { allOwnKeys: r = !1 } = arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : {};
    if (null !== t && "undefined" !== typeof t) {
      if ("object" !== typeof t && (t = [t]), fn(t)) {
        for (n = 0, i = t.length; n < i; n++) {
          e.call(null, t[n], n, t);
        }
      } else {
        const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
          o = i.length;
        let a;
        for (n = 0; n < o; n++) a = i[n], e.call(null, t[a], a, t);
      }
    }
  }
  function Rn(t, e) {
    e = e.toLowerCase();
    const n = Object.keys(t);
    let i, r = n.length;
    for (; r-- > 0;) if (i = n[r], e === i.toLowerCase()) return i;
    return null;
  }
  const Dn = "undefined" !== typeof globalThis
      ? globalThis
      : "undefined" !== typeof self
      ? self
      : "undefined" !== typeof window
      ? window
      : global,
    Ln = (t) => !pn(t) && t !== Dn;
  const An =
    (jn = "undefined" !== typeof Uint8Array && ln(Uint8Array),
      (t) => jn && t instanceof jn);
  var jn;
  const Fn = dn("HTMLFormElement"),
    zn = ((t) => {
      let { hasOwnProperty: e } = t;
      return (t, n) => e.call(t, n);
    })(Object.prototype),
    Nn = dn("RegExp"),
    In = (t, e) => {
      const n = Object.getOwnPropertyDescriptors(t), i = {};
      On(n, (n, r) => {
        let o;
        !1 !== (o = e(n, r, t)) && (i[r] = o || n);
      }), Object.defineProperties(t, i);
    },
    Bn = "abcdefghijklmnopqrstuvwxyz",
    Vn = "0123456789",
    Un = { DIGIT: Vn, ALPHA: Bn, ALPHA_DIGIT: Bn + Bn.toUpperCase() + Vn };
  const Hn = dn("AsyncFunction"),
    Wn = ((t, e) => {
      return t
        ? setImmediate
        : e
        ? (n = `axios@${Math.random()}`,
          i = [],
          Dn.addEventListener("message", (t) => {
            let { source: e, data: r } = t;
            e === Dn && r === n && i.length && i.shift()();
          }, !1),
          (t) => {
            i.push(t), Dn.postMessage(n, "*");
          })
        : (t) => setTimeout(t);
      var n, i;
    })("function" === typeof setImmediate, bn(Dn.postMessage)),
    $n = "undefined" !== typeof queueMicrotask
      ? queueMicrotask.bind(Dn)
      : "undefined" !== typeof process && process.nextTick || Wn,
    qn = {
      isArray: fn,
      isArrayBuffer: gn,
      isBuffer: function (t) {
        return null !== t && !pn(t) && null !== t.constructor &&
          !pn(t.constructor) && bn(t.constructor.isBuffer) &&
          t.constructor.isBuffer(t);
      },
      isFormData: (t) => {
        let e;
        return t &&
          ("function" === typeof FormData && t instanceof FormData ||
            bn(t.append) &&
              ("formdata" === (e = cn(t)) ||
                "object" === e && bn(t.toString) &&
                  "[object FormData]" === t.toString()));
      },
      isArrayBufferView: function (t) {
        let e;
        return e = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && gn(t.buffer),
          e;
      },
      isString: mn,
      isNumber: yn,
      isBoolean: (t) => !0 === t || !1 === t,
      isObject: vn,
      isPlainObject: xn,
      isReadableStream: Mn,
      isRequest: Cn,
      isResponse: Pn,
      isHeaders: Tn,
      isUndefined: pn,
      isDate: wn,
      isFile: _n,
      isBlob: kn,
      isRegExp: Nn,
      isFunction: bn,
      isStream: (t) => vn(t) && bn(t.pipe),
      isURLSearchParams: En,
      isTypedArray: An,
      isFileList: Sn,
      forEach: On,
      merge: function t() {
        const { caseless: e } = Ln(this) && this || {},
          n = {},
          i = (i, r) => {
            const o = e && Rn(n, r) || r;
            xn(n[o]) && xn(i)
              ? n[o] = t(n[o], i)
              : xn(i)
              ? n[o] = t({}, i)
              : fn(i)
              ? n[o] = i.slice()
              : n[o] = i;
          };
        for (let r = 0, o = arguments.length; r < o; r++) {
          arguments[r] && On(arguments[r], i);
        }
        return n;
      },
      extend: function (t, e, n) {
        let { allOwnKeys: i } = arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : {};
        return On(e, (e, i) => {
          n && bn(e) ? t[i] = an(e, n) : t[i] = e;
        }, { allOwnKeys: i }),
          t;
      },
      trim: (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
      inherits: (t, e, n, i) => {
        t.prototype = Object.create(e.prototype, i),
          t.prototype.constructor = t,
          Object.defineProperty(t, "super", { value: e.prototype }),
          n && Object.assign(t.prototype, n);
      },
      toFlatObject: (t, e, n, i) => {
        let r, o, a;
        const s = {};
        if (e = e || {}, null == t) return e;
        do {
          for (r = Object.getOwnPropertyNames(t), o = r.length; o-- > 0;) {
            a = r[o], i && !i(a, t, e) || s[a] || (e[a] = t[a], s[a] = !0);
          }
          t = !1 !== n && ln(t);
        } while (t && (!n || n(t, e)) && t !== Object.prototype);
        return e;
      },
      kindOf: cn,
      kindOfTest: dn,
      endsWith: (t, e, n) => {
        t = String(t),
          (void 0 === n || n > t.length) && (n = t.length),
          n -= e.length;
        const i = t.indexOf(e, n);
        return -1 !== i && i === n;
      },
      toArray: (t) => {
        if (!t) return null;
        if (fn(t)) return t;
        let e = t.length;
        if (!yn(e)) return null;
        const n = new Array(e);
        for (; e-- > 0;) n[e] = t[e];
        return n;
      },
      forEachEntry: (t, e) => {
        const n = (t && t[Symbol.iterator]).call(t);
        let i;
        for (; (i = n.next()) && !i.done;) {
          const n = i.value;
          e.call(t, n[0], n[1]);
        }
      },
      matchAll: (t, e) => {
        let n;
        const i = [];
        for (; null !== (n = t.exec(e));) i.push(n);
        return i;
      },
      isHTMLForm: Fn,
      hasOwnProperty: zn,
      hasOwnProp: zn,
      reduceDescriptors: In,
      freezeMethods: (t) => {
        In(t, (e, n) => {
          if (bn(t) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) {
            return !1;
          }
          const i = t[n];
          bn(i) &&
            (e.enumerable = !1,
              "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
        });
      },
      toObjectSet: (t, e) => {
        const n = {},
          i = (t) => {
            t.forEach((t) => {
              n[t] = !0;
            });
          };
        return fn(t) ? i(t) : i(String(t).split(e)), n;
      },
      toCamelCase: (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, n) {
          return e.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (t, e) => null != t && Number.isFinite(t = +t) ? t : e,
      findKey: Rn,
      global: Dn,
      isContextDefined: Ln,
      ALPHABET: Un,
      generateString: function () {
        let t = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 16,
          e = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Un.ALPHA_DIGIT,
          n = "";
        const { length: i } = e;
        for (; t--;) n += e[Math.random() * i | 0];
        return n;
      },
      isSpecCompliantForm: function (t) {
        return !!(t && bn(t.append) && "FormData" === t[Symbol.toStringTag] &&
          t[Symbol.iterator]);
      },
      toJSONObject: (t) => {
        const e = new Array(10),
          n = (t, i) => {
            if (vn(t)) {
              if (e.indexOf(t) >= 0) return;
              if (!("toJSON" in t)) {
                e[i] = t;
                const r = fn(t) ? [] : {};
                return On(t, (t, e) => {
                  const o = n(t, i + 1);
                  !pn(o) && (r[e] = o);
                }),
                  e[i] = void 0,
                  r;
              }
            }
            return t;
          };
        return n(t, 0);
      },
      isAsyncFn: Hn,
      isThenable: (t) => t && (vn(t) || bn(t)) && bn(t.then) && bn(t.catch),
      setImmediate: Wn,
      asap: $n,
    };
  function Yn(t, e, n, i, r) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : this.stack = (new Error()).stack,
      this.message = t,
      this.name = "AxiosError",
      e && (this.code = e),
      n && (this.config = n),
      i && (this.request = i),
      r && (this.response = r, this.status = r.status ? r.status : null);
  }
  qn.inherits(Yn, Error, {
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
        config: qn.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Qn = Yn.prototype, Kn = {};
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
    Kn[t] = { value: t };
  }),
    Object.defineProperties(Yn, Kn),
    Object.defineProperty(Qn, "isAxiosError", { value: !0 }),
    Yn.from = (t, e, n, i, r, o) => {
      const a = Object.create(Qn);
      return qn.toFlatObject(t, a, function (t) {
        return t !== Error.prototype;
      }, (t) => "isAxiosError" !== t),
        Yn.call(a, t.message, e, n, i, r),
        a.cause = t,
        a.name = t.name,
        o && Object.assign(a, o),
        a;
    };
  const Xn = Yn;
  function Jn(t) {
    return qn.isPlainObject(t) || qn.isArray(t);
  }
  function Gn(t) {
    return qn.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function Zn(t, e, n) {
    return t
      ? t.concat(e).map(function (t, e) {
        return t = Gn(t), !n && e ? "[" + t + "]" : t;
      }).join(n ? "." : "")
      : e;
  }
  const ti = qn.toFlatObject(qn, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  const ei = function (t, e, n) {
    if (!qn.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData();
    const i = (n = qn.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (t, e) {
          return !qn.isUndefined(e[t]);
        },
      )).metaTokens,
      r = n.visitor || c,
      o = n.dots,
      a = n.indexes,
      s = (n.Blob || "undefined" !== typeof Blob && Blob) &&
        qn.isSpecCompliantForm(e);
    if (!qn.isFunction(r)) throw new TypeError("visitor must be a function");
    function l(t) {
      if (null === t) return "";
      if (qn.isDate(t)) return t.toISOString();
      if (!s && qn.isBlob(t)) {
        throw new Xn("Blob is not supported. Use a Buffer instead.");
      }
      return qn.isArrayBuffer(t) || qn.isTypedArray(t)
        ? s && "function" === typeof Blob ? new Blob([t]) : Buffer.from(t)
        : t;
    }
    function c(t, n, r) {
      let s = t;
      if (t && !r && "object" === typeof t) {
        if (qn.endsWith(n, "{}")) {
          n = i ? n : n.slice(0, -2), t = JSON.stringify(t);
        } else if (
          qn.isArray(t) && function (t) {
              return qn.isArray(t) && !t.some(Jn);
            }(t) ||
          (qn.isFileList(t) || qn.endsWith(n, "[]")) && (s = qn.toArray(t))
        ) {
          return n = Gn(n),
            s.forEach(function (t, i) {
              !qn.isUndefined(t) && null !== t &&
                e.append(
                  !0 === a ? Zn([n], i, o) : null === a ? n : n + "[]",
                  l(t),
                );
            }),
            !1;
        }
      }
      return !!Jn(t) || (e.append(Zn(r, n, o), l(t)), !1);
    }
    const u = [],
      d = Object.assign(ti, {
        defaultVisitor: c,
        convertValue: l,
        isVisitable: Jn,
      });
    if (!qn.isObject(t)) throw new TypeError("data must be an object");
    return function t(n, i) {
      if (!qn.isUndefined(n)) {
        if (-1 !== u.indexOf(n)) {
          throw Error("Circular reference detected in " + i.join("."));
        }
        u.push(n),
          qn.forEach(n, function (n, o) {
            !0 ===
                (!(qn.isUndefined(n) || null === n) &&
                  r.call(e, n, qn.isString(o) ? o.trim() : o, i, d)) &&
              t(n, i ? i.concat(o) : [o]);
          }),
          u.pop();
      }
    }(t),
      e;
  };
  function ni(t) {
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
  function ii(t, e) {
    this._pairs = [], t && ei(t, this, e);
  }
  const ri = ii.prototype;
  ri.append = function (t, e) {
    this._pairs.push([t, e]);
  },
    ri.toString = function (t) {
      const e = t
        ? function (e) {
          return t.call(this, e, ni);
        }
        : ni;
      return this._pairs.map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "").join("&");
    };
  const oi = ii;
  function ai(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$")
      .replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(
        /%5D/gi,
        "]",
      );
  }
  function si(t, e, n) {
    if (!e) return t;
    const i = n && n.encode || ai, r = n && n.serialize;
    let o;
    if (
      o = r
        ? r(e, n)
        : qn.isURLSearchParams(e)
        ? e.toString()
        : new oi(e, n).toString(i), o
    ) {
      const e = t.indexOf("#");
      -1 !== e && (t = t.slice(0, e)),
        t += (-1 === t.indexOf("?") ? "?" : "&") + o;
    }
    return t;
  }
  const li = class {
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
        qn.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
    },
    ci = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ui = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" !== typeof URLSearchParams
          ? URLSearchParams
          : oi,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    di = "undefined" !== typeof window && "undefined" !== typeof document,
    hi = "object" === typeof navigator && navigator || void 0,
    fi = di &&
      (!hi || ["ReactNative", "NativeScript", "NS"].indexOf(hi.product) < 0),
    pi = "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    gi = di && window.location.href || "http://localhost",
    mi = { ...i, ...ui };
  const bi = function (t) {
    function e(t, n, i, r) {
      let o = t[r++];
      if ("__proto__" === o) return !0;
      const a = Number.isFinite(+o), s = r >= t.length;
      if (o = !o && qn.isArray(i) ? i.length : o, s) {
        return qn.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !a;
      }
      i[o] && qn.isObject(i[o]) || (i[o] = []);
      return e(t, n, i[o], r) && qn.isArray(i[o]) && (i[o] = function (t) {
        const e = {}, n = Object.keys(t);
        let i;
        const r = n.length;
        let o;
        for (i = 0; i < r; i++) o = n[i], e[o] = t[o];
        return e;
      }(i[o])),
        !a;
    }
    if (qn.isFormData(t) && qn.isFunction(t.entries)) {
      const n = {};
      return qn.forEachEntry(t, (t, i) => {
        e(
          function (t) {
            return qn.matchAll(/\w+|\[(\w*)]/g, t).map(
              (t) => "[]" === t[0] ? "" : t[1] || t[0],
            );
          }(t),
          i,
          n,
          0,
        );
      }),
        n;
    }
    return null;
  };
  const yi = {
    transitional: ci,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (t, e) {
      const n = e.getContentType() || "",
        i = n.indexOf("application/json") > -1,
        r = qn.isObject(t);
      r && qn.isHTMLForm(t) && (t = new FormData(t));
      if (qn.isFormData(t)) return i ? JSON.stringify(bi(t)) : t;
      if (
        qn.isArrayBuffer(t) || qn.isBuffer(t) || qn.isStream(t) ||
        qn.isFile(t) || qn.isBlob(t) || qn.isReadableStream(t)
      ) return t;
      if (qn.isArrayBufferView(t)) return t.buffer;
      if (qn.isURLSearchParams(t)) {
        return e.setContentType(
          "application/x-www-form-urlencoded;charset=utf-8",
          !1,
        ),
          t.toString();
      }
      let o;
      if (r) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) {
          return function (t, e) {
            return ei(
              t,
              new mi.classes.URLSearchParams(),
              Object.assign({
                visitor: function (t, e, n, i) {
                  return mi.isNode && qn.isBuffer(t)
                    ? (this.append(e, t.toString("base64")), !1)
                    : i.defaultVisitor.apply(this, arguments);
                },
              }, e),
            );
          }(t, this.formSerializer).toString();
        }
        if ((o = qn.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const e = this.env && this.env.FormData;
          return ei(
            o ? { "files[]": t } : t,
            e && new e(),
            this.formSerializer,
          );
        }
      }
      return r || i
        ? (e.setContentType("application/json", !1),
          function (t, e, n) {
            if (qn.isString(t)) {
              try {
                return (e || JSON.parse)(t), qn.trim(t);
              } catch (ph) {
                if ("SyntaxError" !== ph.name) throw ph;
              }
            }
            return (n || JSON.stringify)(t);
          }(t))
        : t;
    }],
    transformResponse: [function (t) {
      const e = this.transitional || yi.transitional,
        n = e && e.forcedJSONParsing,
        i = "json" === this.responseType;
      if (qn.isResponse(t) || qn.isReadableStream(t)) return t;
      if (t && qn.isString(t) && (n && !this.responseType || i)) {
        const n = !(e && e.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (ph) {
          if (n) {
            if ("SyntaxError" === ph.name) {
              throw Xn.from(ph, Xn.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw ph;
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
    env: { FormData: mi.classes.FormData, Blob: mi.classes.Blob },
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
  qn.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    yi.headers[t] = {};
  });
  const vi = yi,
    xi = qn.toObjectSet([
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
    wi = Symbol("internals");
  function _i(t) {
    return t && String(t).trim().toLowerCase();
  }
  function ki(t) {
    return !1 === t || null == t ? t : qn.isArray(t) ? t.map(ki) : String(t);
  }
  function Si(t, e, n, i, r) {
    return qn.isFunction(i)
      ? i.call(this, e, n)
      : (r && (e = n),
        qn.isString(e)
          ? qn.isString(i)
            ? -1 !== e.indexOf(i)
            : qn.isRegExp(i)
            ? i.test(e)
            : void 0
          : void 0);
  }
  class Ei {
    constructor(t) {
      t && this.set(t);
    }
    set(t, e, n) {
      const i = this;
      function r(t, e, n) {
        const r = _i(e);
        if (!r) throw new Error("header name must be a non-empty string");
        const o = qn.findKey(i, r);
        (!o || void 0 === i[o] || !0 === n || void 0 === n && !1 !== i[o]) &&
          (i[o || e] = ki(t));
      }
      const o = (t, e) => qn.forEach(t, (t, n) => r(t, n, e));
      if (qn.isPlainObject(t) || t instanceof this.constructor) o(t, e);
      else if (
        qn.isString(t) && (t = t.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
      ) {
        o(
          ((t) => {
            const e = {};
            let n, i, r;
            return t && t.split("\n").forEach(function (t) {
              r = t.indexOf(":"),
                n = t.substring(0, r).trim().toLowerCase(),
                i = t.substring(r + 1).trim(),
                !n || e[n] && xi[n] || ("set-cookie" === n
                  ? e[n] ? e[n].push(i) : e[n] = [i]
                  : e[n] = e[n] ? e[n] + ", " + i : i);
            }),
              e;
          })(t),
          e,
        );
      } else if (qn.isHeaders(t)) {
        for (const [a, s] of t.entries()) {
          r(s, a, n);
        }
      } else null != t && r(e, t, n);
      return this;
    }
    get(t, e) {
      if (t = _i(t)) {
        const n = qn.findKey(this, t);
        if (n) {
          const t = this[n];
          if (!e) return t;
          if (!0 === e) {
            return function (t) {
              const e = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let i;
              for (; i = n.exec(t);) e[i[1]] = i[2];
              return e;
            }(t);
          }
          if (qn.isFunction(e)) return e.call(this, t, n);
          if (qn.isRegExp(e)) return e.exec(t);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, e) {
      if (t = _i(t)) {
        const n = qn.findKey(this, t);
        return !(!n || void 0 === this[n] || e && !Si(0, this[n], n, e));
      }
      return !1;
    }
    delete(t, e) {
      const n = this;
      let i = !1;
      function r(t) {
        if (t = _i(t)) {
          const r = qn.findKey(n, t);
          !r || e && !Si(0, n[r], r, e) || (delete n[r], i = !0);
        }
      }
      return qn.isArray(t) ? t.forEach(r) : r(t), i;
    }
    clear(t) {
      const e = Object.keys(this);
      let n = e.length, i = !1;
      for (; n--;) {
        const r = e[n];
        t && !Si(0, this[r], r, t, !0) || (delete this[r], i = !0);
      }
      return i;
    }
    normalize(t) {
      const e = this, n = {};
      return qn.forEach(this, (i, r) => {
        const o = qn.findKey(n, r);
        if (o) return e[o] = ki(i), void delete e[r];
        const a = t
          ? function (t) {
            return t.trim().toLowerCase().replace(
              /([a-z\d])(\w*)/g,
              (t, e, n) => e.toUpperCase() + n,
            );
          }(r)
          : String(r).trim();
        a !== r && delete e[r], e[a] = ki(i), n[a] = !0;
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
      return qn.forEach(this, (n, i) => {
        null != n && !1 !== n && (e[i] = t && qn.isArray(n) ? n.join(", ") : n);
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
        var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      ) i[r - 1] = arguments[r];
      return i.forEach((t) => e.set(t)), e;
    }
    static accessor(t) {
      const e = (this[wi] = this[wi] = { accessors: {} }).accessors,
        n = this.prototype;
      function i(t) {
        const i = _i(t);
        e[i] || (!function (t, e) {
          const n = qn.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((i) => {
            Object.defineProperty(t, i + n, {
              value: function (t, n, r) {
                return this[i].call(this, e, t, n, r);
              },
              configurable: !0,
            });
          });
        }(n, t),
          e[i] = !0);
      }
      return qn.isArray(t) ? t.forEach(i) : i(t), this;
    }
  }
  Ei.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    qn.reduceDescriptors(Ei.prototype, (t, e) => {
      let { value: n } = t, i = e[0].toUpperCase() + e.slice(1);
      return {
        get: () => n,
        set(t) {
          this[i] = t;
        },
      };
    }),
    qn.freezeMethods(Ei);
  const Mi = Ei;
  function Ci(t, e) {
    const n = this || vi, i = e || n, r = Mi.from(i.headers);
    let o = i.data;
    return qn.forEach(t, function (t) {
      o = t.call(n, o, r.normalize(), e ? e.status : void 0);
    }),
      r.normalize(),
      o;
  }
  function Pi(t) {
    return !(!t || !t.__CANCEL__);
  }
  function Ti(t, e, n) {
    Xn.call(this, null == t ? "canceled" : t, Xn.ERR_CANCELED, e, n),
      this.name = "CanceledError";
  }
  qn.inherits(Ti, Xn, { __CANCEL__: !0 });
  const Oi = Ti;
  function Ri(t, e, n) {
    const i = n.config.validateStatus;
    n.status && i && !i(n.status)
      ? e(
        new Xn(
          "Request failed with status code " + n.status,
          [
            Xn.ERR_BAD_REQUEST,
            Xn.ERR_BAD_RESPONSE,
          ][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      )
      : t(n);
  }
  const Di = function (t, e) {
    t = t || 10;
    const n = new Array(t), i = new Array(t);
    let r, o = 0, a = 0;
    return e = void 0 !== e ? e : 1e3, function (s) {
      const l = Date.now(), c = i[a];
      r || (r = l), n[o] = s, i[o] = l;
      let u = a, d = 0;
      for (; u !== o;) d += n[u++], u %= t;
      if (o = (o + 1) % t, o === a && (a = (a + 1) % t), l - r < e) return;
      const h = c && l - c;
      return h ? Math.round(1e3 * d / h) : void 0;
    };
  };
  const Li = function (t, e) {
      let n, i, r = 0, o = 1e3 / e;
      const a = function (e) {
        let o = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Date.now();
        r = o, n = null, i && (clearTimeout(i), i = null), t.apply(null, e);
      };
      return [function () {
        const t = Date.now(), e = t - r;
        for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) {
          l[c] = arguments[c];
        }
        e >= o ? a(l, t) : (n = l,
          i || (i = setTimeout(() => {
            i = null, a(n);
          }, o - e)));
      }, () => n && a(n)];
    },
    Ai = function (t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : 3,
        i = 0;
      const r = Di(50, 250);
      return Li((n) => {
        const o = n.loaded,
          a = n.lengthComputable ? n.total : void 0,
          s = o - i,
          l = r(s);
        i = o;
        t({
          loaded: o,
          total: a,
          progress: a ? o / a : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && a && o <= a ? (a - o) / l : void 0,
          event: n,
          lengthComputable: null != a,
          [e ? "download" : "upload"]: !0,
        });
      }, n);
    },
    ji = (t, e) => {
      const n = null != t;
      return [(i) => e[0]({ lengthComputable: n, total: t, loaded: i }), e[1]];
    },
    Fi = (t) =>
      function () {
        for (
          var e = arguments.length, n = new Array(e), i = 0;
          i < e;
          i++
        ) n[i] = arguments[i];
        return qn.asap(() => t(...n));
      },
    zi = mi.hasStandardBrowserEnv
      ? function () {
        const t = mi.navigator &&
            /(msie|trident)/i.test(mi.navigator.userAgent),
          e = document.createElement("a");
        let n;
        function i(n) {
          let i = n;
          return t && (e.setAttribute("href", i), i = e.href),
            e.setAttribute("href", i),
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
        return n = i(window.location.href), function (t) {
          const e = qn.isString(t) ? i(t) : t;
          return e.protocol === n.protocol && e.host === n.host;
        };
      }()
      : function () {
        return !0;
      },
    Ni = mi.hasStandardBrowserEnv
      ? {
        write(t, e, n, i, r, o) {
          const a = [t + "=" + encodeURIComponent(e)];
          qn.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            qn.isString(i) && a.push("path=" + i),
            qn.isString(r) && a.push("domain=" + r),
            !0 === o && a.push("secure"),
            document.cookie = a.join("; ");
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
  function Ii(t, e) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
      ? function (t, e) {
        return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
      }(t, e)
      : e;
  }
  const Bi = (t) => t instanceof Mi ? { ...t } : t;
  function Vi(t, e) {
    e = e || {};
    const n = {};
    function i(t, e, n) {
      return qn.isPlainObject(t) && qn.isPlainObject(e)
        ? qn.merge.call({ caseless: n }, t, e)
        : qn.isPlainObject(e)
        ? qn.merge({}, e)
        : qn.isArray(e)
        ? e.slice()
        : e;
    }
    function r(t, e, n) {
      return qn.isUndefined(e)
        ? qn.isUndefined(t) ? void 0 : i(void 0, t, n)
        : i(t, e, n);
    }
    function o(t, e) {
      if (!qn.isUndefined(e)) return i(void 0, e);
    }
    function a(t, e) {
      return qn.isUndefined(e)
        ? qn.isUndefined(t) ? void 0 : i(void 0, t)
        : i(void 0, e);
    }
    function s(n, r, o) {
      return o in e ? i(n, r) : o in t ? i(void 0, n) : void 0;
    }
    const l = {
      url: o,
      method: o,
      data: o,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: (t, e) => r(Bi(t), Bi(e), !0),
    };
    return qn.forEach(Object.keys(Object.assign({}, t, e)), function (i) {
      const o = l[i] || r, a = o(t[i], e[i], i);
      qn.isUndefined(a) && o !== s || (n[i] = a);
    }),
      n;
  }
  const Ui = (t) => {
      const e = Vi({}, t);
      let n,
        {
          data: i,
          withXSRFToken: r,
          xsrfHeaderName: o,
          xsrfCookieName: a,
          headers: s,
          auth: l,
        } = e;
      if (
        e.headers = s = Mi.from(s),
          e.url = si(Ii(e.baseURL, e.url), t.params, t.paramsSerializer),
          l &&
          s.set(
            "Authorization",
            "Basic " + btoa(
              (l.username || "") + ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
          ),
          qn.isFormData(i)
      ) {
        if (mi.hasStandardBrowserEnv || mi.hasStandardBrowserWebWorkerEnv) {
          s.setContentType(void 0);
        } else if (!1 !== (n = s.getContentType())) {
          const [t, ...e] = n
            ? n.split(";").map((t) => t.trim()).filter(Boolean)
            : [];
          s.setContentType([t || "multipart/form-data", ...e].join("; "));
        }
      }
      if (
        mi.hasStandardBrowserEnv &&
        (r && qn.isFunction(r) && (r = r(e)), r || !1 !== r && zi(e.url))
      ) {
        const t = o && a && Ni.read(a);
        t && s.set(o, t);
      }
      return e;
    },
    Hi = "undefined" !== typeof XMLHttpRequest && function (t) {
      return new Promise(function (e, n) {
        const i = Ui(t);
        let r = i.data;
        const o = Mi.from(i.headers).normalize();
        let a,
          s,
          l,
          c,
          u,
          { responseType: d, onUploadProgress: h, onDownloadProgress: f } = i;
        function p() {
          c && c(),
            u && u(),
            i.cancelToken && i.cancelToken.unsubscribe(a),
            i.signal && i.signal.removeEventListener("abort", a);
        }
        let g = new XMLHttpRequest();
        function m() {
          if (!g) return;
          const i = Mi.from(
            "getAllResponseHeaders" in g && g.getAllResponseHeaders(),
          );
          Ri(function (t) {
            e(t), p();
          }, function (t) {
            n(t), p();
          }, {
            data: d && "text" !== d && "json" !== d
              ? g.response
              : g.responseText,
            status: g.status,
            statusText: g.statusText,
            headers: i,
            config: t,
            request: g,
          }), g = null;
        }
        g.open(i.method.toUpperCase(), i.url, !0),
          g.timeout = i.timeout,
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
              (n(new Xn("Request aborted", Xn.ECONNABORTED, t, g)), g = null);
          },
          g.onerror = function () {
            n(new Xn("Network Error", Xn.ERR_NETWORK, t, g)), g = null;
          },
          g.ontimeout = function () {
            let e = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const r = i.transitional || ci;
            i.timeoutErrorMessage && (e = i.timeoutErrorMessage),
              n(
                new Xn(
                  e,
                  r.clarifyTimeoutError ? Xn.ETIMEDOUT : Xn.ECONNABORTED,
                  t,
                  g,
                ),
              ),
              g = null;
          },
          void 0 === r && o.setContentType(null),
          "setRequestHeader" in g && qn.forEach(o.toJSON(), function (t, e) {
            g.setRequestHeader(e, t);
          }),
          qn.isUndefined(i.withCredentials) ||
          (g.withCredentials = !!i.withCredentials),
          d && "json" !== d && (g.responseType = i.responseType),
          f && ([l, u] = Ai(f, !0), g.addEventListener("progress", l)),
          h && g.upload &&
          ([s, c] = Ai(h),
            g.upload.addEventListener("progress", s),
            g.upload.addEventListener("loadend", c)),
          (i.cancelToken || i.signal) && (a = (e) => {
            g &&
              (n(!e || e.type ? new Oi(null, t, g) : e), g.abort(), g = null);
          },
            i.cancelToken && i.cancelToken.subscribe(a),
            i.signal &&
            (i.signal.aborted ? a() : i.signal.addEventListener("abort", a)));
        const b = function (t) {
          const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return e && e[1] || "";
        }(i.url);
        b && -1 === mi.protocols.indexOf(b)
          ? n(new Xn("Unsupported protocol " + b + ":", Xn.ERR_BAD_REQUEST, t))
          : g.send(r || null);
      });
    },
    Wi = (t, e) => {
      const { length: n } = t = t ? t.filter(Boolean) : [];
      if (e || n) {
        let n, i = new AbortController();
        const r = function (t) {
          if (!n) {
            n = !0, a();
            const e = t instanceof Error ? t : this.reason;
            i.abort(
              e instanceof Xn ? e : new Oi(e instanceof Error ? e.message : e),
            );
          }
        };
        let o = e && setTimeout(() => {
          o = null, r(new Xn(`timeout ${e} of ms exceeded`, Xn.ETIMEDOUT));
        }, e);
        const a = () => {
          t && (o && clearTimeout(o),
            o = null,
            t.forEach((t) => {
              t.unsubscribe
                ? t.unsubscribe(r)
                : t.removeEventListener("abort", r);
            }),
            t = null);
        };
        t.forEach((t) => t.addEventListener("abort", r));
        const { signal: s } = i;
        return s.unsubscribe = () => qn.asap(a), s;
      }
    },
    $i = function* (t, e) {
      let n = t.byteLength;
      if (!e || n < e) return void (yield t);
      let i, r = 0;
      for (; r < n;) i = r + e, yield t.slice(r, i), r = i;
    },
    qi = async function* (t) {
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
    Yi = (t, e, n, i) => {
      const r = async function* (t, e) {
        for await (const n of qi(t)) yield* $i(n, e);
      }(t, e);
      let o,
        a = 0,
        s = (t) => {
          o || (o = !0, i && i(t));
        };
      return new ReadableStream({
        async pull(t) {
          try {
            const { done: e, value: i } = await r.next();
            if (e) return s(), void t.close();
            let o = i.byteLength;
            if (n) {
              let t = a += o;
              n(t);
            }
            t.enqueue(new Uint8Array(i));
          } catch (e) {
            throw s(e), e;
          }
        },
        cancel: (t) => (s(t), r.return()),
      }, { highWaterMark: 2 });
    },
    Qi = "function" === typeof fetch && "function" === typeof Request &&
      "function" === typeof Response,
    Ki = Qi && "function" === typeof ReadableStream,
    Xi = Qi &&
      ("function" === typeof TextEncoder
        ? (Ji = new TextEncoder(), (t) => Ji.encode(t))
        : async (t) => new Uint8Array(await new Response(t).arrayBuffer()));
  var Ji;
  const Gi = function (t) {
      try {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        ) n[i - 1] = arguments[i];
        return !!t(...n);
      } catch (ph) {
        return !1;
      }
    },
    Zi = Ki && Gi(() => {
      let t = !1;
      const e = new Request(mi.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return t = !0, "half";
        },
      }).headers.has("Content-Type");
      return t && !e;
    }),
    tr = Ki && Gi(() => qn.isReadableStream(new Response("").body)),
    er = { stream: tr && ((t) => t.body) };
  var nr;
  Qi &&
    (nr = new Response(),
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
        !er[t] && (er[t] = qn.isFunction(nr[t]) ? (e) => e[t]() : (e, n) => {
          throw new Xn(
            `Response type '${t}' is not supported`,
            Xn.ERR_NOT_SUPPORT,
            n,
          );
        });
      }));
  const ir = async (t, e) => {
      const n = qn.toFiniteNumber(t.getContentLength());
      return null == n
        ? (async (t) => {
          if (null == t) return 0;
          if (qn.isBlob(t)) return t.size;
          if (qn.isSpecCompliantForm(t)) {
            const e = new Request(mi.origin, { method: "POST", body: t });
            return (await e.arrayBuffer()).byteLength;
          }
          return qn.isArrayBufferView(t) || qn.isArrayBuffer(t)
            ? t.byteLength
            : (qn.isURLSearchParams(t) && (t += ""),
              qn.isString(t) ? (await Xi(t)).byteLength : void 0);
        })(e)
        : n;
    },
    rr = Qi && (async (t) => {
      let {
        url: e,
        method: n,
        data: i,
        signal: r,
        cancelToken: o,
        timeout: a,
        onDownloadProgress: s,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = Ui(t);
      c = c ? (c + "").toLowerCase() : "text";
      let f, p = Wi([r, o && o.toAbortSignal()], a);
      const g = p && p.unsubscribe && (() => {
        p.unsubscribe();
      });
      let m;
      try {
        if (
          l && Zi && "get" !== n && "head" !== n && 0 !== (m = await ir(u, i))
        ) {
          let t,
            n = new Request(e, { method: "POST", body: i, duplex: "half" });
          if (
            qn.isFormData(i) && (t = n.headers.get("content-type")) &&
            u.setContentType(t), n.body
          ) {
            const [t, e] = ji(m, Ai(Fi(l)));
            i = Yi(n.body, 65536, t, e);
          }
        }
        qn.isString(d) || (d = d ? "include" : "omit");
        const r = "credentials" in Request.prototype;
        f = new Request(e, {
          ...h,
          signal: p,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: r ? d : void 0,
        });
        let o = await fetch(f);
        const a = tr && ("stream" === c || "response" === c);
        if (tr && (s || a && g)) {
          const t = {};
          ["status", "statusText", "headers"].forEach((e) => {
            t[e] = o[e];
          });
          const e = qn.toFiniteNumber(o.headers.get("content-length")),
            [n, i] = s && ji(e, Ai(Fi(s), !0)) || [];
          o = new Response(
            Yi(o.body, 65536, n, () => {
              i && i(), g && g();
            }),
            t,
          );
        }
        c = c || "text";
        let b = await er[qn.findKey(er, c) || "text"](o, t);
        return !a && g && g(),
          await new Promise((e, n) => {
            Ri(e, n, {
              data: b,
              headers: Mi.from(o.headers),
              status: o.status,
              statusText: o.statusText,
              config: t,
              request: f,
            });
          });
      } catch (b) {
        if (g && g(), b && "TypeError" === b.name && /fetch/i.test(b.message)) {
          throw Object.assign(new Xn("Network Error", Xn.ERR_NETWORK, t, f), {
            cause: b.cause || b,
          });
        }
        throw Xn.from(b, b && b.code, t, f);
      }
    }),
    or = { http: null, xhr: Hi, fetch: rr };
  qn.forEach(or, (t, e) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: e });
      } catch (ph) {}
      Object.defineProperty(t, "adapterName", { value: e });
    }
  });
  const ar = (t) => `- ${t}`,
    sr = (t) => qn.isFunction(t) || null === t || !1 === t,
    lr = (t) => {
      t = qn.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, i;
      const r = {};
      for (let o = 0; o < e; o++) {
        let e;
        if (
          n = t[o],
            i = n,
            !sr(n) && (i = or[(e = String(n)).toLowerCase()], void 0 === i)
        ) throw new Xn(`Unknown adapter '${e}'`);
        if (i) break;
        r[e || "#" + o] = i;
      }
      if (!i) {
        const t = Object.entries(r).map((t) => {
          let [e, n] = t;
          return `adapter ${e} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build");
        });
        let n = e
          ? t.length > 1 ? "since :\n" + t.map(ar).join("\n") : " " + ar(t[0])
          : "as no adapter specified";
        throw new Xn(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT",
        );
      }
      return i;
    };
  function cr(t) {
    if (
      t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted
    ) throw new Oi(null, t);
  }
  function ur(t) {
    cr(t),
      t.headers = Mi.from(t.headers),
      t.data = Ci.call(t, t.transformRequest),
      -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
    return lr(t.adapter || vi.adapter)(t).then(function (e) {
      return cr(t),
        e.data = Ci.call(t, t.transformResponse, e),
        e.headers = Mi.from(e.headers),
        e;
    }, function (e) {
      return Pi(e) ||
        (cr(t),
          e && e.response &&
          (e.response.data = Ci.call(t, t.transformResponse, e.response),
            e.response.headers = Mi.from(e.response.headers))),
        Promise.reject(e);
    });
  }
  const dr = "1.7.7", hr = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, e) => {
      hr[t] = function (n) {
        return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
      };
    },
  );
  const fr = {};
  hr.transitional = function (t, e, n) {
    function i(t, e) {
      return "[Axios v1.7.7] Transitional option '" + t + "'" + e +
        (n ? ". " + n : "");
    }
    return (n, r, o) => {
      if (!1 === t) {
        throw new Xn(
          i(r, " has been removed" + (e ? " in " + e : "")),
          Xn.ERR_DEPRECATED,
        );
      }
      return e && !fr[r] &&
        (fr[r] = !0,
          console.warn(
            i(
              r,
              " has been deprecated since v" + e +
                " and will be removed in the near future",
            ),
          )),
        !t || t(n, r, o);
    };
  };
  const pr = {
      assertOptions: function (t, e, n) {
        if ("object" !== typeof t) {
          throw new Xn("options must be an object", Xn.ERR_BAD_OPTION_VALUE);
        }
        const i = Object.keys(t);
        let r = i.length;
        for (; r-- > 0;) {
          const o = i[r], a = e[o];
          if (a) {
            const e = t[o], n = void 0 === e || a(e, o, t);
            if (!0 !== n) {
              throw new Xn(
                "option " + o + " must be " + n,
                Xn.ERR_BAD_OPTION_VALUE,
              );
            }
          } else if (!0 !== n) {
            throw new Xn("Unknown option " + o, Xn.ERR_BAD_OPTION);
          }
        }
      },
      validators: hr,
    },
    gr = pr.validators;
  class mr {
    constructor(t) {
      this.defaults = t,
        this.interceptors = { request: new li(), response: new li() };
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
          } catch (ph) {}
        }
        throw n;
      }
    }
    _request(t, e) {
      "string" === typeof t ? (e = e || {}).url = t : e = t || {},
        e = Vi(this.defaults, e);
      const { transitional: n, paramsSerializer: i, headers: r } = e;
      void 0 !== n &&
      pr.assertOptions(n, {
        silentJSONParsing: gr.transitional(gr.boolean),
        forcedJSONParsing: gr.transitional(gr.boolean),
        clarifyTimeoutError: gr.transitional(gr.boolean),
      }, !1),
        null != i &&
        (qn.isFunction(i)
          ? e.paramsSerializer = { serialize: i }
          : pr.assertOptions(
            i,
            { encode: gr.function, serialize: gr.function },
            !0,
          )),
        e.method = (e.method || this.defaults.method || "get").toLowerCase();
      let o = r && qn.merge(r.common, r[e.method]);
      r &&
      qn.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (t) => {
          delete r[t];
        },
      ), e.headers = Mi.concat(o, r);
      const a = [];
      let s = !0;
      this.interceptors.request.forEach(function (t) {
        "function" === typeof t.runWhen && !1 === t.runWhen(e) ||
          (s = s && t.synchronous, a.unshift(t.fulfilled, t.rejected));
      });
      const l = [];
      let c;
      this.interceptors.response.forEach(function (t) {
        l.push(t.fulfilled, t.rejected);
      });
      let u, d = 0;
      if (!s) {
        const t = [ur.bind(this), void 0];
        for (
          t.unshift.apply(t, a),
            t.push.apply(t, l),
            u = t.length,
            c = Promise.resolve(e);
          d < u;
        ) c = c.then(t[d++], t[d++]);
        return c;
      }
      u = a.length;
      let h = e;
      for (d = 0; d < u;) {
        const t = a[d++], e = a[d++];
        try {
          h = t(h);
        } catch (f) {
          e.call(this, f);
          break;
        }
      }
      try {
        c = ur.call(this, h);
      } catch (f) {
        return Promise.reject(f);
      }
      for (d = 0, u = l.length; d < u;) c = c.then(l[d++], l[d++]);
      return c;
    }
    getUri(t) {
      return si(
        Ii((t = Vi(this.defaults, t)).baseURL, t.url),
        t.params,
        t.paramsSerializer,
      );
    }
  }
  qn.forEach(["delete", "get", "head", "options"], function (t) {
    mr.prototype[t] = function (e, n) {
      return this.request(
        Vi(n || {}, { method: t, url: e, data: (n || {}).data }),
      );
    };
  }),
    qn.forEach(["post", "put", "patch"], function (t) {
      function e(e) {
        return function (n, i, r) {
          return this.request(
            Vi(r || {}, {
              method: t,
              headers: e ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: i,
            }),
          );
        };
      }
      mr.prototype[t] = e(), mr.prototype[t + "Form"] = e(!0);
    });
  const br = mr;
  class yr {
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
          const i = new Promise((t) => {
            n.subscribe(t), e = t;
          }).then(t);
          return i.cancel = function () {
            n.unsubscribe(e);
          },
            i;
        },
        t(function (t, i, r) {
          n.reason || (n.reason = new Oi(t, i, r), e(n.reason));
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
        token: new yr(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
  }
  const vr = yr;
  const xr = {
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
  Object.entries(xr).forEach((t) => {
    let [e, n] = t;
    xr[n] = e;
  });
  const wr = xr;
  const _r = function t(e) {
    const n = new br(e), i = an(br.prototype.request, n);
    return qn.extend(i, br.prototype, n, { allOwnKeys: !0 }),
      qn.extend(i, n, null, { allOwnKeys: !0 }),
      i.create = function (n) {
        return t(Vi(e, n));
      },
      i;
  }(vi);
  _r.Axios = br,
    _r.CanceledError = Oi,
    _r.CancelToken = vr,
    _r.isCancel = Pi,
    _r.VERSION = dr,
    _r.toFormData = ei,
    _r.AxiosError = Xn,
    _r.Cancel = _r.CanceledError,
    _r.all = function (t) {
      return Promise.all(t);
    },
    _r.spread = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    },
    _r.isAxiosError = function (t) {
      return qn.isObject(t) && !0 === t.isAxiosError;
    },
    _r.mergeConfig = Vi,
    _r.AxiosHeaders = Mi,
    _r.formToJSON = (t) => bi(qn.isHTMLForm(t) ? new FormData(t) : t),
    _r.getAdapter = lr,
    _r.HttpStatusCode = wr,
    _r.default = _r;
  const kr = _r;
  function Sr(t) {
    return t + .5 | 0;
  }
  const Er = (t, e, n) => Math.max(Math.min(t, n), e);
  function Mr(t) {
    return Er(Sr(2.55 * t), 0, 255);
  }
  function Cr(t) {
    return Er(Sr(255 * t), 0, 255);
  }
  function Pr(t) {
    return Er(Sr(t / 2.55) / 100, 0, 1);
  }
  function Tr(t) {
    return Er(Sr(100 * t), 0, 100);
  }
  const Or = {
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
    Rr = [..."0123456789ABCDEF"],
    Dr = (t) => Rr[15 & t],
    Lr = (t) => Rr[(240 & t) >> 4] + Rr[15 & t],
    Ar = (t) => (240 & t) >> 4 === (15 & t);
  function jr(t) {
    var e = ((t) => Ar(t.r) && Ar(t.g) && Ar(t.b) && Ar(t.a))(t) ? Dr : Lr;
    return t
      ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e)
      : void 0;
  }
  const Fr =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function zr(t, e, n) {
    const i = e * Math.min(n, 1 - n),
      r = function (e) {
        let r = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (e + t / 30) % 12;
        return n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
      };
    return [r(0), r(8), r(4)];
  }
  function Nr(t, e, n) {
    const i = function (i) {
      let r = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : (i + t / 60) % 6;
      return n - n * e * Math.max(Math.min(r, 4 - r, 1), 0);
    };
    return [i(5), i(3), i(1)];
  }
  function Ir(t, e, n) {
    const i = zr(t, 1, .5);
    let r;
    for (e + n > 1 && (r = 1 / (e + n), e *= r, n *= r), r = 0; r < 3; r++) {
      i[r] *= 1 - e - n, i[r] += e;
    }
    return i;
  }
  function Br(t) {
    const e = t.r / 255,
      n = t.g / 255,
      i = t.b / 255,
      r = Math.max(e, n, i),
      o = Math.min(e, n, i),
      a = (r + o) / 2;
    let s, l, c;
    return r !== o &&
      (c = r - o,
        l = a > .5 ? c / (2 - r - o) : c / (r + o),
        s = function (t, e, n, i, r) {
          return t === r
            ? (e - n) / i + (e < n ? 6 : 0)
            : e === r
            ? (n - t) / i + 2
            : (t - e) / i + 4;
        }(e, n, i, c, r),
        s = 60 * s + .5),
      [0 | s, l || 0, a];
  }
  function Vr(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Cr);
  }
  function Ur(t, e, n) {
    return Vr(zr, t, e, n);
  }
  function Hr(t) {
    return (t % 360 + 360) % 360;
  }
  function Wr(t) {
    const e = Fr.exec(t);
    let n, i = 255;
    if (!e) return;
    e[5] !== n && (i = e[6] ? Mr(+e[5]) : Cr(+e[5]));
    const r = Hr(+e[2]), o = +e[3] / 100, a = +e[4] / 100;
    return n = "hwb" === e[1]
      ? function (t, e, n) {
        return Vr(Ir, t, e, n);
      }(r, o, a)
      : "hsv" === e[1]
      ? function (t, e, n) {
        return Vr(Nr, t, e, n);
      }(r, o, a)
      : Ur(r, o, a),
      { r: n[0], g: n[1], b: n[2], a: i };
  }
  const $r = {
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
    qr = {
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
  let Yr;
  function Qr(t) {
    Yr || (Yr = function () {
      const t = {}, e = Object.keys(qr), n = Object.keys($r);
      let i, r, o, a, s;
      for (i = 0; i < e.length; i++) {
        for (a = s = e[i], r = 0; r < n.length; r++) {
          o = n[r], s = s.replace(o, $r[o]);
        }
        o = parseInt(qr[a], 16), t[s] = [o >> 16 & 255, o >> 8 & 255, 255 & o];
      }
      return t;
    }(),
      Yr.transparent = [0, 0, 0, 0]);
    const e = Yr[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
  }
  const Kr =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const Xr = (t) =>
      t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
    Jr = (t) => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  function Gr(t, e, n) {
    if (t) {
      let i = Br(t);
      i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1)),
        i = Ur(i),
        t.r = i[0],
        t.g = i[1],
        t.b = i[2];
    }
  }
  function Zr(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function to(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return Array.isArray(t)
      ? t.length >= 3 &&
        (e = { r: t[0], g: t[1], b: t[2], a: 255 },
          t.length > 3 && (e.a = Cr(t[3])))
      : (e = Zr(t, { r: 0, g: 0, b: 0, a: 1 })).a = Cr(e.a),
      e;
  }
  function eo(t) {
    return "r" === t.charAt(0)
      ? function (t) {
        const e = Kr.exec(t);
        let n, i, r, o = 255;
        if (e) {
          if (e[7] !== n) {
            const t = +e[7];
            o = e[8] ? Mr(t) : Er(255 * t, 0, 255);
          }
          return n = +e[1],
            i = +e[3],
            r = +e[5],
            n = 255 & (e[2] ? Mr(n) : Er(n, 0, 255)),
            i = 255 & (e[4] ? Mr(i) : Er(i, 0, 255)),
            r = 255 & (e[6] ? Mr(r) : Er(r, 0, 255)),
            { r: n, g: i, b: r, a: o };
        }
      }(t)
      : Wr(t);
  }
  class no {
    constructor(t) {
      if (t instanceof no) return t;
      const e = typeof t;
      let n;
      "object" === e ? n = to(t) : "string" === e && (n = function (t) {
        var e, n = t.length;
        return "#" === t[0] &&
          (4 === n || 5 === n
            ? e = {
              r: 255 & 17 * Or[t[1]],
              g: 255 & 17 * Or[t[2]],
              b: 255 & 17 * Or[t[3]],
              a: 5 === n ? 17 * Or[t[4]] : 255,
            }
            : 7 !== n && 9 !== n ||
              (e = {
                r: Or[t[1]] << 4 | Or[t[2]],
                g: Or[t[3]] << 4 | Or[t[4]],
                b: Or[t[5]] << 4 | Or[t[6]],
                a: 9 === n ? Or[t[7]] << 4 | Or[t[8]] : 255,
              })),
          e;
      }(t) || Qr(t) || eo(t)),
        this._rgb = n,
        this._valid = !!n;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = Zr(this._rgb);
      return t && (t.a = Pr(t.a)), t;
    }
    set rgb(t) {
      this._rgb = to(t);
    }
    rgbString() {
      return this._valid
        ? (t = this._rgb) &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${Pr(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
        : void 0;
      var t;
    }
    hexString() {
      return this._valid ? jr(this._rgb) : void 0;
    }
    hslString() {
      return this._valid
        ? function (t) {
          if (!t) return;
          const e = Br(t), n = e[0], i = Tr(e[1]), r = Tr(e[2]);
          return t.a < 255
            ? `hsla(${n}, ${i}%, ${r}%, ${Pr(t.a)})`
            : `hsl(${n}, ${i}%, ${r}%)`;
        }(this._rgb)
        : void 0;
    }
    mix(t, e) {
      if (t) {
        const n = this.rgb, i = t.rgb;
        let r;
        const o = e === r ? .5 : e,
          a = 2 * o - 1,
          s = n.a - i.a,
          l = ((a * s === -1 ? a : (a + s) / (1 + a * s)) + 1) / 2;
        r = 1 - l,
          n.r = 255 & l * n.r + r * i.r + .5,
          n.g = 255 & l * n.g + r * i.g + .5,
          n.b = 255 & l * n.b + r * i.b + .5,
          n.a = o * n.a + (1 - o) * i.a,
          this.rgb = n;
      }
      return this;
    }
    interpolate(t, e) {
      return t && (this._rgb = function (t, e, n) {
        const i = Jr(Pr(t.r)), r = Jr(Pr(t.g)), o = Jr(Pr(t.b));
        return {
          r: Cr(Xr(i + n * (Jr(Pr(e.r)) - i))),
          g: Cr(Xr(r + n * (Jr(Pr(e.g)) - r))),
          b: Cr(Xr(o + n * (Jr(Pr(e.b)) - o))),
          a: t.a + n * (e.a - t.a),
        };
      }(this._rgb, t._rgb, e)),
        this;
    }
    clone() {
      return new no(this.rgb);
    }
    alpha(t) {
      return this._rgb.a = Cr(t), this;
    }
    clearer(t) {
      return this._rgb.a *= 1 - t, this;
    }
    greyscale() {
      const t = this._rgb, e = Sr(.3 * t.r + .59 * t.g + .11 * t.b);
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
      return Gr(this._rgb, 2, t), this;
    }
    darken(t) {
      return Gr(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return Gr(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return Gr(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return function (t, e) {
        var n = Br(t);
        n[0] = Hr(n[0] + e), n = Ur(n), t.r = n[0], t.g = n[1], t.b = n[2];
      }(this._rgb, t),
        this;
    }
  }
  function io() {}
  const ro = (() => {
    let t = 0;
    return () => t++;
  })();
  function oo(t) {
    return null === t || "undefined" === typeof t;
  }
  function ao(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }
  function so(t) {
    return null !== t &&
      "[object Object]" === Object.prototype.toString.call(t);
  }
  function lo(t) {
    return ("number" === typeof t || t instanceof Number) && isFinite(+t);
  }
  function co(t, e) {
    return lo(t) ? t : e;
  }
  function uo(t, e) {
    return "undefined" === typeof t ? e : t;
  }
  const ho = (t, e) =>
    "string" === typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
  function fo(t, e, n) {
    if (t && "function" === typeof t.call) return t.apply(n, e);
  }
  function po(t, e, n, i) {
    let r, o, a;
    if (ao(t)) {
      if (o = t.length, i) { for (r = o - 1; r >= 0; r--) e.call(n, t[r], r); }
      else for (r = 0; r < o; r++) e.call(n, t[r], r);
    } else if (so(t)) {
      for (a = Object.keys(t), o = a.length, r = 0; r < o; r++) {
        e.call(n, t[a[r]], a[r]);
      }
    }
  }
  function go(t, e) {
    let n, i, r, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n) {
      if (
        r = t[n],
          o = e[n],
          r.datasetIndex !== o.datasetIndex || r.index !== o.index
      ) return !1;
    }
    return !0;
  }
  function mo(t) {
    if (ao(t)) return t.map(mo);
    if (so(t)) {
      const e = Object.create(null), n = Object.keys(t), i = n.length;
      let r = 0;
      for (; r < i; ++r) e[n[r]] = mo(t[n[r]]);
      return e;
    }
    return t;
  }
  function bo(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function yo(t, e, n, i) {
    if (!bo(t)) return;
    const r = e[t], o = n[t];
    so(r) && so(o) ? vo(r, o, i) : e[t] = mo(o);
  }
  function vo(t, e, n) {
    const i = ao(e) ? e : [e], r = i.length;
    if (!so(t)) return t;
    const o = (n = n || {}).merger || yo;
    let a;
    for (let s = 0; s < r; ++s) {
      if (a = i[s], !so(a)) continue;
      const e = Object.keys(a);
      for (let i = 0, r = e.length; i < r; ++i) o(e[i], t, a, n);
    }
    return t;
  }
  function xo(t, e) {
    return vo(t, e, { merger: wo });
  }
  function wo(t, e, n) {
    if (!bo(t)) return;
    const i = e[t], r = n[t];
    so(i) && so(r)
      ? xo(i, r)
      : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = mo(r));
  }
  const _o = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
  function ko(t, e) {
    const n = _o[e] || (_o[e] = function (t) {
      const e = function (t) {
        const e = t.split("."), n = [];
        let i = "";
        for (const r of e) {
          i += r,
            i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i), i = "");
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
  function So(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const Eo = (t) => "undefined" !== typeof t,
    Mo = (t) => "function" === typeof t,
    Co = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const n of t) if (!e.has(n)) return !1;
      return !0;
    };
  const Po = Math.PI,
    To = 2 * Po,
    Oo = To + Po,
    Ro = Number.POSITIVE_INFINITY,
    Do = Po / 180,
    Lo = Po / 2,
    Ao = Po / 4,
    jo = 2 * Po / 3,
    Fo = Math.log10,
    zo = Math.sign;
  function No(t, e, n) {
    return Math.abs(t - e) < n;
  }
  function Io(t) {
    const e = Math.round(t);
    t = No(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Fo(t))), i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
  }
  function Bo(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Vo(t, e, n) {
    let i, r, o;
    for (i = 0, r = t.length; i < r; i++) {
      o = t[i][n],
        isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o));
    }
  }
  function Uo(t) {
    return t * (Po / 180);
  }
  function Ho(t) {
    return t * (180 / Po);
  }
  function Wo(t) {
    if (!lo(t)) return;
    let e = 1, n = 0;
    for (; Math.round(t * e) / e !== t;) e *= 10, n++;
    return n;
  }
  function $o(t, e) {
    const n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i);
    let o = Math.atan2(i, n);
    return o < -.5 * Po && (o += To), { angle: o, distance: r };
  }
  function qo(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function Yo(t, e) {
    return (t - e + Oo) % To - Po;
  }
  function Qo(t) {
    return (t % To + To) % To;
  }
  function Ko(t, e, n, i) {
    const r = Qo(t),
      o = Qo(e),
      a = Qo(n),
      s = Qo(o - r),
      l = Qo(a - r),
      c = Qo(r - o),
      u = Qo(r - a);
    return r === o || r === a || i && o === a || s > l && c < u;
  }
  function Xo(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }
  function Jo(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3]
      ? arguments[3]
      : 1e-6;
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
  }
  function Go(t, e, n) {
    n = n || ((n) => t[n] < e);
    let i, r = t.length - 1, o = 0;
    for (; r - o > 1;) i = o + r >> 1, n(i) ? o = i : r = i;
    return { lo: o, hi: r };
  }
  const Zo = (t, e, n, i) =>
      Go(
        t,
        n,
        i
          ? (i) => {
            const r = t[i][e];
            return r < n || r === n && t[i + 1][e] === n;
          }
          : (i) => t[i][e] < n,
      ),
    ta = (t, e, n) => Go(t, n, (i) => t[i][e] >= n);
  const ea = ["push", "pop", "shift", "splice", "unshift"];
  function na(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners, r = i.indexOf(e);
    -1 !== r && i.splice(r, 1),
      i.length > 0 || (ea.forEach((e) => {
        delete t[e];
      }),
        delete t._chartjs);
  }
  function ia(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const ra = "undefined" === typeof window
    ? function (t) {
      return t();
    }
    : window.requestAnimationFrame;
  function oa(t, e) {
    let n = [], i = !1;
    return function () {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) {
        o[a] = arguments[a];
      }
      n = o,
        i || (i = !0,
          ra.call(window, () => {
            i = !1, t.apply(e, n);
          }));
    };
  }
  const aa = (t) => "start" === t ? "left" : "end" === t ? "right" : "center",
    sa = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2;
  function la(t, e, n) {
    const i = e.length;
    let r = 0, o = i;
    if (t._sorted) {
      const { iScale: a, _parsed: s } = t,
        l = a.axis,
        { min: c, max: u, minDefined: d, maxDefined: h } = a.getUserBounds();
      d &&
      (r = Xo(
        Math.min(Zo(s, l, c).lo, n ? i : Zo(e, l, a.getPixelForValue(c)).lo),
        0,
        i - 1,
      )),
        o = h
          ? Xo(
            Math.max(
              Zo(s, a.axis, u, !0).hi + 1,
              n ? 0 : Zo(e, l, a.getPixelForValue(u), !0).hi + 1,
            ),
            r,
            i,
          ) - r
          : i - r;
    }
    return { start: r, count: o };
  }
  function ca(t) {
    const { xScale: e, yScale: n, _scaleRanges: i } = t,
      r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!i) return t._scaleRanges = r, !0;
    const o = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min ||
      i.ymax !== n.max;
    return Object.assign(i, r), o;
  }
  const ua = (t) => 0 === t || 1 === t,
    da = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * To / n),
    ha = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * To / n) + 1,
    fa = {
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
      easeInSine: (t) => 1 - Math.cos(t * Lo),
      easeOutSine: (t) => Math.sin(t * Lo),
      easeInOutSine: (t) => -.5 * (Math.cos(Po * t) - 1),
      easeInExpo: (t) => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
      easeOutExpo: (t) => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
      easeInOutExpo: (t) =>
        ua(t)
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
      easeInElastic: (t) => ua(t) ? t : da(t, .075, .3),
      easeOutElastic: (t) => ua(t) ? t : ha(t, .075, .3),
      easeInOutElastic(t) {
        const e = .1125;
        return ua(t)
          ? t
          : t < .5
          ? .5 * da(2 * t, e, .45)
          : .5 + .5 * ha(2 * t - 1, e, .45);
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
      easeInBounce: (t) => 1 - fa.easeOutBounce(1 - t),
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
          ? .5 * fa.easeInBounce(2 * t)
          : .5 * fa.easeOutBounce(2 * t - 1) + .5,
    };
  function pa(t) {
    if (t && "object" === typeof t) {
      const e = t.toString();
      return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
    }
    return !1;
  }
  function ga(t) {
    return pa(t) ? t : new no(t);
  }
  function ma(t) {
    return pa(t) ? t : new no(t).saturate(.5).darken(.1).hexString();
  }
  const ba = ["x", "y", "borderWidth", "radius", "tension"],
    ya = ["color", "borderColor", "backgroundColor"];
  const va = new Map();
  function xa(t, e, n) {
    return function (t, e) {
      e = e || {};
      const n = t + JSON.stringify(e);
      let i = va.get(n);
      return i || (i = new Intl.NumberFormat(t, e), va.set(n, i)), i;
    }(e, n).format(t);
  }
  const wa = {
    values: (t) => ao(t) ? t : "" + t,
    numeric(t, e, n) {
      if (0 === t) return "0";
      const i = this.chart.options.locale;
      let r, o = t;
      if (n.length > 1) {
        const e = Math.max(
          Math.abs(n[0].value),
          Math.abs(n[n.length - 1].value),
        );
        (e < 1e-4 || e > 1e15) && (r = "scientific"),
          o = function (t, e) {
            let n = e.length > 3
              ? e[2].value - e[1].value
              : e[1].value - e[0].value;
            Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
            return n;
          }(t, n);
      }
      const a = Fo(Math.abs(o)),
        s = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        l = { notation: r, minimumFractionDigits: s, maximumFractionDigits: s };
      return Object.assign(l, this.options.ticks.format), xa(t, i, l);
    },
    logarithmic(t, e, n) {
      if (0 === t) return "0";
      const i = n[e].significand || t / Math.pow(10, Math.floor(Fo(t)));
      return [1, 2, 3, 5, 10, 15].includes(i) || e > .8 * n.length
        ? wa.numeric.call(this, t, e, n)
        : "";
    },
  };
  var _a = { formatters: wa };
  const ka = Object.create(null), Sa = Object.create(null);
  function Ea(t, e) {
    if (!e) return t;
    const n = e.split(".");
    for (let i = 0, r = n.length; i < r; ++i) {
      const e = n[i];
      t = t[e] || (t[e] = Object.create(null));
    }
    return t;
  }
  function Ma(t, e, n) {
    return "string" === typeof e ? vo(Ea(t, e), n) : vo(Ea(t, ""), e);
  }
  class Ca {
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
        this.hoverBackgroundColor = (t, e) => ma(e.backgroundColor),
        this.hoverBorderColor = (t, e) => ma(e.borderColor),
        this.hoverColor = (t, e) => ma(e.color),
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
      return Ma(this, t, e);
    }
    get(t) {
      return Ea(this, t);
    }
    describe(t, e) {
      return Ma(Sa, t, e);
    }
    override(t, e) {
      return Ma(ka, t, e);
    }
    route(t, e, n, i) {
      const r = Ea(this, t), o = Ea(this, n), a = "_" + e;
      Object.defineProperties(r, {
        [a]: { value: r[e], writable: !0 },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[a], e = o[i];
            return so(t) ? Object.assign({}, e, t) : uo(t, e);
          },
          set(t) {
            this[a] = t;
          },
        },
      });
    }
    apply(t) {
      t.forEach((t) => t(this));
    }
  }
  var Pa = new Ca({
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
        colors: { type: "color", properties: ya },
        numbers: { type: "number", properties: ba },
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
        callback: _a.formatters.values,
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
  function Ta(t, e, n, i, r) {
    let o = e[r];
    return o || (o = e[r] = t.measureText(r).width, n.push(r)),
      o > i && (i = o),
      i;
  }
  function Oa(t, e, n, i) {
    let r = (i = i || {}).data = i.data || {},
      o = i.garbageCollect = i.garbageCollect || [];
    i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e),
      t.save(),
      t.font = e;
    let a = 0;
    const s = n.length;
    let l, c, u, d, h;
    for (l = 0; l < s; l++) {
      if (d = n[l], void 0 === d || null === d || ao(d)) {
        if (ao(d)) {
          for (c = 0, u = d.length; c < u; c++) {
            h = d[c],
              void 0 === h || null === h || ao(h) || (a = Ta(t, r, o, a, h));
          }
        }
      } else a = Ta(t, r, o, a, d);
    }
    t.restore();
    const f = o.length / 2;
    if (f > n.length) {
      for (l = 0; l < f; l++) delete r[o[l]];
      o.splice(0, f);
    }
    return a;
  }
  function Ra(t, e, n) {
    const i = t.currentDevicePixelRatio, r = 0 !== n ? Math.max(n / 2, .5) : 0;
    return Math.round((e - r) * i) / i + r;
  }
  function Da(t, e) {
    (e || t) &&
      ((e = e || t.getContext("2d")).save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore());
  }
  function La(t, e, n, i) {
    Aa(t, e, n, i, null);
  }
  function Aa(t, e, n, i, r) {
    let o, a, s, l, c, u, d, h;
    const f = e.pointStyle, p = e.rotation, g = e.radius;
    let m = (p || 0) * Do;
    if (
      f && "object" === typeof f &&
      (o = f.toString(),
        "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)
    ) {
      return t.save(),
        t.translate(n, i),
        t.rotate(m),
        t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
        void t.restore();
    }
    if (!(isNaN(g) || g <= 0)) {
      switch (t.beginPath(), f) {
        default:
          r ? t.ellipse(n, i, r / 2, g, 0, 0, To) : t.arc(n, i, g, 0, To),
            t.closePath();
          break;
        case "triangle":
          u = r ? r / 2 : g,
            t.moveTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
            m += jo,
            t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
            m += jo,
            t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
            t.closePath();
          break;
        case "rectRounded":
          c = .516 * g,
            l = g - c,
            a = Math.cos(m + Ao) * l,
            d = Math.cos(m + Ao) * (r ? r / 2 - c : l),
            s = Math.sin(m + Ao) * l,
            h = Math.sin(m + Ao) * (r ? r / 2 - c : l),
            t.arc(n - d, i - s, c, m - Po, m - Lo),
            t.arc(n + h, i - a, c, m - Lo, m),
            t.arc(n + d, i + s, c, m, m + Lo),
            t.arc(n - h, i + a, c, m + Lo, m + Po),
            t.closePath();
          break;
        case "rect":
          if (!p) {
            l = Math.SQRT1_2 * g,
              u = r ? r / 2 : l,
              t.rect(n - u, i - l, 2 * u, 2 * l);
            break;
          }
          m += Ao;
        case "rectRot":
          d = Math.cos(m) * (r ? r / 2 : g),
            a = Math.cos(m) * g,
            s = Math.sin(m) * g,
            h = Math.sin(m) * (r ? r / 2 : g),
            t.moveTo(n - d, i - s),
            t.lineTo(n + h, i - a),
            t.lineTo(n + d, i + s),
            t.lineTo(n - h, i + a),
            t.closePath();
          break;
        case "crossRot":
          m += Ao;
        case "cross":
          d = Math.cos(m) * (r ? r / 2 : g),
            a = Math.cos(m) * g,
            s = Math.sin(m) * g,
            h = Math.sin(m) * (r ? r / 2 : g),
            t.moveTo(n - d, i - s),
            t.lineTo(n + d, i + s),
            t.moveTo(n + h, i - a),
            t.lineTo(n - h, i + a);
          break;
        case "star":
          d = Math.cos(m) * (r ? r / 2 : g),
            a = Math.cos(m) * g,
            s = Math.sin(m) * g,
            h = Math.sin(m) * (r ? r / 2 : g),
            t.moveTo(n - d, i - s),
            t.lineTo(n + d, i + s),
            t.moveTo(n + h, i - a),
            t.lineTo(n - h, i + a),
            m += Ao,
            d = Math.cos(m) * (r ? r / 2 : g),
            a = Math.cos(m) * g,
            s = Math.sin(m) * g,
            h = Math.sin(m) * (r ? r / 2 : g),
            t.moveTo(n - d, i - s),
            t.lineTo(n + d, i + s),
            t.moveTo(n + h, i - a),
            t.lineTo(n - h, i + a);
          break;
        case "line":
          a = r ? r / 2 : Math.cos(m) * g,
            s = Math.sin(m) * g,
            t.moveTo(n - a, i - s),
            t.lineTo(n + a, i + s);
          break;
        case "dash":
          t.moveTo(n, i),
            t.lineTo(n + Math.cos(m) * (r ? r / 2 : g), i + Math.sin(m) * g);
          break;
        case !1:
          t.closePath();
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function ja(t, e, n) {
    return n = n || .5,
      !e ||
      t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n &&
        t.y < e.bottom + n;
  }
  function Fa(t, e) {
    t.save(),
      t.beginPath(),
      t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
      t.clip();
  }
  function za(t) {
    t.restore();
  }
  function Na(t, e, n, i, r) {
    if (!e) return t.lineTo(n.x, n.y);
    if ("middle" === r) {
      const i = (e.x + n.x) / 2;
      t.lineTo(i, e.y), t.lineTo(i, n.y);
    } else "after" === r !== !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
  }
  function Ia(t, e, n, i) {
    if (!e) return t.lineTo(n.x, n.y);
    t.bezierCurveTo(
      i ? e.cp1x : e.cp2x,
      i ? e.cp1y : e.cp2y,
      i ? n.cp2x : n.cp1x,
      i ? n.cp2y : n.cp1y,
      n.x,
      n.y,
    );
  }
  function Ba(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
      const o = t.measureText(i),
        a = e - o.actualBoundingBoxLeft,
        s = e + o.actualBoundingBoxRight,
        l = n - o.actualBoundingBoxAscent,
        c = n + o.actualBoundingBoxDescent,
        u = r.strikethrough ? (l + c) / 2 : c;
      t.strokeStyle = t.fillStyle,
        t.beginPath(),
        t.lineWidth = r.decorationWidth || 2,
        t.moveTo(a, u),
        t.lineTo(s, u),
        t.stroke();
    }
  }
  function Va(t, e) {
    const n = t.fillStyle;
    t.fillStyle = e.color,
      t.fillRect(e.left, e.top, e.width, e.height),
      t.fillStyle = n;
  }
  function Ua(t, e, n, i, r) {
    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    const a = ao(e) ? e : [e], s = o.strokeWidth > 0 && "" !== o.strokeColor;
    let l, c;
    for (
      t.save(),
        t.font = r.string,
        function (t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            oo(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline);
        }(t, o),
        l = 0;
      l < a.length;
      ++l
    ) {
      c = a[l],
        o.backdrop && Va(t, o.backdrop),
        s &&
        (o.strokeColor && (t.strokeStyle = o.strokeColor),
          oo(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
          t.strokeText(c, n, i, o.maxWidth)),
        t.fillText(c, n, i, o.maxWidth),
        Ba(t, n, i, c, o),
        i += Number(r.lineHeight);
    }
    t.restore();
  }
  function Ha(t, e) {
    const { x: n, y: i, w: r, h: o, radius: a } = e;
    t.arc(n + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * Po, Po, !0),
      t.lineTo(n, i + o - a.bottomLeft),
      t.arc(n + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, Po, Lo, !0),
      t.lineTo(n + r - a.bottomRight, i + o),
      t.arc(
        n + r - a.bottomRight,
        i + o - a.bottomRight,
        a.bottomRight,
        Lo,
        0,
        !0,
      ),
      t.lineTo(n + r, i + a.topRight),
      t.arc(n + r - a.topRight, i + a.topRight, a.topRight, 0, -Lo, !0),
      t.lineTo(n + a.topLeft, i);
  }
  const Wa = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    $a =
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function qa(t, e) {
    const n = ("" + t).match(Wa);
    if (!n || "normal" === n[1]) return 1.2 * e;
    switch (t = +n[2], n[3]) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  function Ya(t, e) {
    const n = {},
      i = so(e),
      r = i ? Object.keys(e) : e,
      o = so(t) ? i ? (n) => uo(t[n], t[e[n]]) : (e) => t[e] : () => t;
    for (const a of r) n[a] = +o(a) || 0;
    return n;
  }
  function Qa(t) {
    return Ya(t, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function Ka(t) {
    return Ya(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function Xa(t) {
    const e = Qa(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }
  function Ja(t, e) {
    t = t || {}, e = e || Pa.font;
    let n = uo(t.size, e.size);
    "string" === typeof n && (n = parseInt(n, 10));
    let i = uo(t.style, e.style);
    i && !("" + i).match($a) &&
      (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
    const r = {
      family: uo(t.family, e.family),
      lineHeight: qa(uo(t.lineHeight, e.lineHeight), n),
      size: n,
      style: i,
      weight: uo(t.weight, e.weight),
      string: "",
    };
    return r.string = function (t) {
      return !t || oo(t.size) || oo(t.family)
        ? null
        : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") +
          t.size + "px " + t.family;
    }(r),
      r;
  }
  function Ga(t, e, n, i) {
    let r, o, a, s = !0;
    for (r = 0, o = t.length; r < o; ++r) {
      if (
        a = t[r],
          void 0 !== a &&
          (void 0 !== e && "function" === typeof a && (a = a(e), s = !1),
            void 0 !== n && ao(a) && (a = a[n % a.length], s = !1),
            void 0 !== a)
      ) return i && !s && (i.cacheable = !1), a;
    }
  }
  function Za(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function ts(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : [""],
      n = arguments.length > 3 ? arguments[3] : void 0,
      i = arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : () => t[0];
    const r = (arguments.length > 2 ? arguments[2] : void 0) || t;
    "undefined" === typeof n && (n = ds("_fallback", t));
    const o = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: t,
      _rootScopes: r,
      _fallback: n,
      _getTarget: i,
      override: (i) => ts([i, ...t], e, r, n),
    };
    return new Proxy(o, {
      deleteProperty: (
        e,
        n,
      ) => (delete e[n], delete e._keys, delete t[0][n], !0),
      get: (n, i) =>
        os(n, i, () =>
          function (t, e, n, i) {
            let r;
            for (const o of e) {
              if (r = ds(is(o, t), n), "undefined" !== typeof r) {
                return rs(t, r) ? cs(n, i, t, r) : r;
              }
            }
          }(i, e, t, n)),
      getOwnPropertyDescriptor: (t, e) =>
        Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => hs(t).includes(e),
      ownKeys: (t) => hs(t),
      set(t, e, n) {
        const r = t._storage || (t._storage = i());
        return t[e] = r[e] = n, delete t._keys, !0;
      },
    });
  }
  function es(t, e, n, i) {
    const r = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: ns(t, i),
      setContext: (e) => es(t, e, n, i),
      override: (r) => es(t.override(r), e, n, i),
    };
    return new Proxy(r, {
      deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
      get: (t, e, n) =>
        os(t, e, () =>
          function (t, e, n) {
            const { _proxy: i, _context: r, _subProxy: o, _descriptors: a } = t;
            let s = i[e];
            Mo(s) && a.isScriptable(e) && (s = function (t, e, n, i) {
              const { _proxy: r, _context: o, _subProxy: a, _stack: s } = n;
              if (s.has(t)) {
                throw new Error(
                  "Recursion detected: " + Array.from(s).join("->") + "->" + t,
                );
              }
              s.add(t);
              let l = e(o, a || i);
              s.delete(t), rs(t, l) && (l = cs(r._scopes, r, t, l));
              return l;
            }(e, s, t, n));
            ao(s) && s.length && (s = function (t, e, n, i) {
              const { _proxy: r, _context: o, _subProxy: a, _descriptors: s } =
                n;
              if ("undefined" !== typeof o.index && i(t)) {
                return e[o.index % e.length];
              }
              if (so(e[0])) {
                const n = e, i = r._scopes.filter((t) => t !== n);
                e = [];
                for (const l of n) {
                  const n = cs(i, r, t, l);
                  e.push(es(n, o, a && a[t], s));
                }
              }
              return e;
            }(e, s, t, a.isIndexable));
            rs(e, s) && (s = es(s, r, o && o[e], a));
            return s;
          }(t, e, n)),
      getOwnPropertyDescriptor: (e, n) =>
        e._descriptors.allKeys
          ? Reflect.has(t, n) ? { enumerable: !0, configurable: !0 } : void 0
          : Reflect.getOwnPropertyDescriptor(t, n),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, n) => Reflect.has(t, n),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, n, i) => (t[n] = i, delete e[n], !0),
    });
  }
  function ns(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : { scriptable: !0, indexable: !0 };
    const {
      _scriptable: n = e.scriptable,
      _indexable: i = e.indexable,
      _allKeys: r = e.allKeys,
    } = t;
    return {
      allKeys: r,
      scriptable: n,
      indexable: i,
      isScriptable: Mo(n) ? n : () => n,
      isIndexable: Mo(i) ? i : () => i,
    };
  }
  const is = (t, e) => t ? t + So(e) : e,
    rs = (t, e) =>
      so(e) && "adapters" !== t &&
      (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function os(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) {
      return t[e];
    }
    const i = n();
    return t[e] = i, i;
  }
  function as(t, e, n) {
    return Mo(t) ? t(e, n) : t;
  }
  const ss = (t, e) => !0 === t ? e : "string" === typeof t ? ko(e, t) : void 0;
  function ls(t, e, n, i, r) {
    for (const o of e) {
      const e = ss(n, o);
      if (e) {
        t.add(e);
        const o = as(e._fallback, n, r);
        if ("undefined" !== typeof o && o !== n && o !== i) return o;
      } else if (!1 === e && "undefined" !== typeof i && n !== i) return null;
    }
    return !1;
  }
  function cs(t, e, n, i) {
    const r = e._rootScopes,
      o = as(e._fallback, n, i),
      a = [...t, ...r],
      s = new Set();
    s.add(i);
    let l = us(s, a, n, o || n, i);
    return null !== l &&
      (("undefined" === typeof o || o === n ||
        (l = us(s, a, o, l, i), null !== l)) &&
        ts(Array.from(s), [""], r, o, () =>
          function (t, e, n) {
            const i = t._getTarget();
            e in i || (i[e] = {});
            const r = i[e];
            if (ao(r) && so(n)) return n;
            return r || {};
          }(e, n, i)));
  }
  function us(t, e, n, i, r) {
    for (; n;) n = ls(t, e, n, i, r);
    return n;
  }
  function ds(t, e) {
    for (const n of e) {
      if (!n) continue;
      const e = n[t];
      if ("undefined" !== typeof e) return e;
    }
  }
  function hs(t) {
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
  function fs(t, e, n, i) {
    const { iScale: r } = t, { key: o = "r" } = this._parsing, a = new Array(i);
    let s, l, c, u;
    for (s = 0, l = i; s < l; ++s) {
      c = s + n, u = e[c], a[s] = { r: r.parse(ko(u, o), c) };
    }
    return a;
  }
  const ps = Number.EPSILON || 1e-14,
    gs = (t, e) => e < t.length && !t[e].skip && t[e],
    ms = (t) => "x" === t ? "y" : "x";
  function bs(t, e, n, i) {
    const r = t.skip ? e : t,
      o = e,
      a = n.skip ? e : n,
      s = qo(o, r),
      l = qo(a, o);
    let c = s / (s + l), u = l / (s + l);
    c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
    const d = i * c, h = i * u;
    return {
      previous: { x: o.x - d * (a.x - r.x), y: o.y - d * (a.y - r.y) },
      next: { x: o.x + h * (a.x - r.x), y: o.y + h * (a.y - r.y) },
    };
  }
  function ys(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : "x";
    const n = ms(e), i = t.length, r = Array(i).fill(0), o = Array(i);
    let a, s, l, c = gs(t, 0);
    for (a = 0; a < i; ++a) {
      if (s = l, l = c, c = gs(t, a + 1), l) {
        if (c) {
          const t = c[e] - l[e];
          r[a] = 0 !== t ? (c[n] - l[n]) / t : 0;
        }
        o[a] = s
          ? c ? zo(r[a - 1]) !== zo(r[a]) ? 0 : (r[a - 1] + r[a]) / 2 : r[a - 1]
          : r[a];
      }
    }
    !function (t, e, n) {
      const i = t.length;
      let r, o, a, s, l, c = gs(t, 0);
      for (let u = 0; u < i - 1; ++u) {
        l = c,
          c = gs(t, u + 1),
          l && c && (No(e[u], 0, ps)
            ? n[u] = n[u + 1] = 0
            : (r = n[u] / e[u],
              o = n[u + 1] / e[u],
              s = Math.pow(r, 2) + Math.pow(o, 2),
              s <= 9 ||
              (a = 3 / Math.sqrt(s),
                n[u] = r * a * e[u],
                n[u + 1] = o * a * e[u])));
      }
    }(t, r, o),
      function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "x";
        const i = ms(n), r = t.length;
        let o, a, s, l = gs(t, 0);
        for (let c = 0; c < r; ++c) {
          if (a = s, s = l, l = gs(t, c + 1), !s) continue;
          const r = s[n], u = s[i];
          a &&
          (o = (r - a[n]) / 3,
            s[`cp1${n}`] = r - o,
            s[`cp1${i}`] = u - o * e[c]),
            l &&
            (o = (l[n] - r) / 3,
              s[`cp2${n}`] = r + o,
              s[`cp2${i}`] = u + o * e[c]);
        }
      }(t, o, e);
  }
  function vs(t, e, n) {
    return Math.max(Math.min(t, n), e);
  }
  function xs(t, e, n, i, r) {
    let o, a, s, l;
    if (
      e.spanGaps && (t = t.filter((t) => !t.skip)),
        "monotone" === e.cubicInterpolationMode
    ) ys(t, r);
    else {
      let n = i ? t[t.length - 1] : t[0];
      for (o = 0, a = t.length; o < a; ++o) {
        s = t[o],
          l = bs(n, s, t[Math.min(o + 1, a - (i ? 0 : 1)) % a], e.tension),
          s.cp1x = l.previous.x,
          s.cp1y = l.previous.y,
          s.cp2x = l.next.x,
          s.cp2y = l.next.y,
          n = s;
      }
    }
    e.capBezierPoints && function (t, e) {
      let n, i, r, o, a, s = ja(t[0], e);
      for (n = 0, i = t.length; n < i; ++n) {
        a = o,
          o = s,
          s = n < i - 1 && ja(t[n + 1], e),
          o &&
          (r = t[n],
            a &&
            (r.cp1x = vs(r.cp1x, e.left, e.right),
              r.cp1y = vs(r.cp1y, e.top, e.bottom)),
            s &&
            (r.cp2x = vs(r.cp2x, e.left, e.right),
              r.cp2y = vs(r.cp2y, e.top, e.bottom)));
      }
    }(t, n);
  }
  function ws() {
    return "undefined" !== typeof window && "undefined" !== typeof document;
  }
  function _s(t) {
    let e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function ks(t, e, n) {
    let i;
    return "string" === typeof t
      ? (i = parseInt(t, 10),
        -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n]))
      : i = t,
      i;
  }
  const Ss = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
  const Es = ["top", "right", "bottom", "left"];
  function Ms(t, e, n) {
    const i = {};
    n = n ? "-" + n : "";
    for (let r = 0; r < 4; r++) {
      const o = Es[r];
      i[o] = parseFloat(t[e + "-" + o + n]) || 0;
    }
    return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
  }
  function Cs(t, e) {
    if ("native" in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
      r = Ss(n),
      o = "border-box" === r.boxSizing,
      a = Ms(r, "padding"),
      s = Ms(r, "border", "width"),
      { x: l, y: c, box: u } = function (t, e) {
        const n = t.touches,
          i = n && n.length ? n[0] : t,
          { offsetX: r, offsetY: o } = i;
        let a, s, l = !1;
        if (
          ((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(
            r,
            o,
            t.target,
          )
        ) a = r, s = o;
        else {
          const t = e.getBoundingClientRect();
          a = i.clientX - t.left, s = i.clientY - t.top, l = !0;
        }
        return { x: a, y: s, box: l };
      }(t, n),
      d = a.left + (u && s.left),
      h = a.top + (u && s.top);
    let { width: f, height: p } = e;
    return o && (f -= a.width + s.width, p -= a.height + s.height), {
      x: Math.round((l - d) / f * n.width / i),
      y: Math.round((c - h) / p * n.height / i),
    };
  }
  const Ps = (t) => Math.round(10 * t) / 10;
  function Ts(t, e, n, i) {
    const r = Ss(t),
      o = Ms(r, "margin"),
      a = ks(r.maxWidth, t, "clientWidth") || Ro,
      s = ks(r.maxHeight, t, "clientHeight") || Ro,
      l = function (t, e, n) {
        let i, r;
        if (void 0 === e || void 0 === n) {
          const o = t && _s(t);
          if (o) {
            const t = o.getBoundingClientRect(),
              a = Ss(o),
              s = Ms(a, "border", "width"),
              l = Ms(a, "padding");
            e = t.width - l.width - s.width,
              n = t.height - l.height - s.height,
              i = ks(a.maxWidth, o, "clientWidth"),
              r = ks(a.maxHeight, o, "clientHeight");
          } else e = t.clientWidth, n = t.clientHeight;
        }
        return { width: e, height: n, maxWidth: i || Ro, maxHeight: r || Ro };
      }(t, e, n);
    let { width: c, height: u } = l;
    if ("content-box" === r.boxSizing) {
      const t = Ms(r, "border", "width"), e = Ms(r, "padding");
      c -= e.width + t.width, u -= e.height + t.height;
    }
    c = Math.max(0, c - o.width),
      u = Math.max(0, i ? c / i : u - o.height),
      c = Ps(Math.min(c, a, l.maxWidth)),
      u = Ps(Math.min(u, s, l.maxHeight)),
      c && !u && (u = Ps(c / 2));
    return (void 0 !== e || void 0 !== n) && i && l.height && u > l.height &&
      (u = l.height, c = Ps(Math.floor(u * i))),
      { width: c, height: u };
  }
  function Os(t, e, n) {
    const i = e || 1, r = Math.floor(t.height * i), o = Math.floor(t.width * i);
    t.height = Math.floor(t.height), t.width = Math.floor(t.width);
    const a = t.canvas;
    return a.style && (n || !a.style.height && !a.style.width) &&
      (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`),
      (t.currentDevicePixelRatio !== i || a.height !== r || a.width !== o) &&
      (t.currentDevicePixelRatio = i,
        a.height = r,
        a.width = o,
        t.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0);
  }
  const Rs = function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return t = !0, !1;
        },
      };
      ws() &&
        (window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e));
    } catch (ph) {}
    return t;
  }();
  function Ds(t, e) {
    const n = function (t, e) {
        return Ss(t).getPropertyValue(e);
      }(t, e),
      i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
  }
  function Ls(t, e, n, i) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
  }
  function As(t, e, n, i) {
    return {
      x: t.x + n * (e.x - t.x),
      y: "middle" === i
        ? n < .5 ? t.y : e.y
        : "after" === i
        ? n < 1 ? t.y : e.y
        : n > 0
        ? e.y
        : t.y,
    };
  }
  function js(t, e, n, i) {
    const r = { x: t.cp2x, y: t.cp2y },
      o = { x: e.cp1x, y: e.cp1y },
      a = Ls(t, r, n),
      s = Ls(r, o, n),
      l = Ls(o, e, n),
      c = Ls(a, s, n),
      u = Ls(s, l, n);
    return Ls(c, u, n);
  }
  function Fs(t, e, n) {
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
  function zs(t, e) {
    let n, i;
    "ltr" !== e && "rtl" !== e ||
      (n = t.canvas.style,
        i = [
          n.getPropertyValue("direction"),
          n.getPropertyPriority("direction"),
        ],
        n.setProperty("direction", e, "important"),
        t.prevTextDirection = i);
  }
  function Ns(t, e) {
    void 0 !== e &&
      (delete t.prevTextDirection,
        t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function Is(t) {
    return "angle" === t
      ? { between: Ko, compare: Yo, normalize: Qo }
      : { between: Jo, compare: (t, e) => t - e, normalize: (t) => t };
  }
  function Bs(t) {
    let { start: e, end: n, count: i, loop: r, style: o } = t;
    return {
      start: e % i,
      end: n % i,
      loop: r && (n - e + 1) % i === 0,
      style: o,
    };
  }
  function Vs(t, e, n) {
    if (!n) return [t];
    const { property: i, start: r, end: o } = n,
      a = e.length,
      { compare: s, between: l, normalize: c } = Is(i),
      { start: u, end: d, loop: h, style: f } = function (t, e, n) {
        const { property: i, start: r, end: o } = n,
          { between: a, normalize: s } = Is(i),
          l = e.length;
        let c, u, { start: d, end: h, loop: f } = t;
        if (f) {
          for (
            d += l, h += l, c = 0, u = l;
            c < u && a(s(e[d % l][i]), r, o);
            ++c
          ) d--, h--;
          d %= l, h %= l;
        }
        return h < d && (h += l), { start: d, end: h, loop: f, style: t.style };
      }(t, e, n),
      p = [];
    let g, m, b, y = !1, v = null;
    const x = () => y || l(r, b, g) && 0 !== s(r, b),
      w = () => !y || 0 === s(o, g) || l(o, b, g);
    for (let _ = u, k = u; _ <= d; ++_) {
      m = e[_ % a],
        m.skip ||
        (g = c(m[i]),
          g !== b &&
          (y = l(g, r, o),
            null === v && x() && (v = 0 === s(g, r) ? _ : k),
            null !== v && w() &&
            (p.push(Bs({ start: v, end: _, loop: h, count: a, style: f })),
              v = null),
            k = _,
            b = g));
    }
    return null !== v &&
      p.push(Bs({ start: v, end: d, loop: h, count: a, style: f })),
      p;
  }
  function Us(t, e) {
    const n = [], i = t.segments;
    for (let r = 0; r < i.length; r++) {
      const o = Vs(i[r], t.points, e);
      o.length && n.push(...o);
    }
    return n;
  }
  function Hs(t, e, n, i) {
    return i && i.setContext && n
      ? function (t, e, n, i) {
        const r = t._chart.getContext(),
          o = Ws(t.options),
          { _datasetIndex: a, options: { spanGaps: s } } = t,
          l = n.length,
          c = [];
        let u = o, d = e[0].start, h = d;
        function f(t, e, i, r) {
          const o = s ? -1 : 1;
          if (t !== e) {
            for (t += l; n[t % l].skip;) t -= o;
            for (; n[e % l].skip;) e += o;
            t % l !== e % l &&
              (c.push({ start: t % l, end: e % l, loop: i, style: r }),
                u = r,
                d = e % l);
          }
        }
        for (const p of e) {
          d = s ? d : p.start;
          let t, e = n[d % l];
          for (h = d + 1; h <= p.end; h++) {
            const o = n[h % l];
            t = Ws(
              i.setContext(
                Za(r, {
                  type: "segment",
                  p0: e,
                  p1: o,
                  p0DataIndex: (h - 1) % l,
                  p1DataIndex: h % l,
                  datasetIndex: a,
                }),
              ),
            ),
              $s(t, u) && f(d, h - 1, p.loop, u),
              e = o,
              u = t;
          }
          d < h - 1 && f(d, h - 1, p.loop, u);
        }
        return c;
      }(t, e, n, i)
      : e;
  }
  function Ws(t) {
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
  function $s(t, e) {
    if (!e) return !1;
    const n = [],
      i = function (t, e) {
        return pa(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e;
      };
    return JSON.stringify(t, i) !== JSON.stringify(e, i);
  }
  class qs {
    constructor() {
      this._request = null,
        this._charts = new Map(),
        this._running = !1,
        this._lastDate = void 0;
    }
    _notify(t, e, n, i) {
      const r = e.listeners[i], o = e.duration;
      r.forEach(
        (i) =>
          i({
            chart: t,
            initial: e.initial,
            numSteps: o,
            currentStep: Math.min(n - e.start, o),
          }),
      );
    }
    _refresh() {
      this._request ||
        (this._running = !0,
          this._request = ra.call(window, () => {
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
      this._charts.forEach((n, i) => {
        if (!n.running || !n.items.length) return;
        const r = n.items;
        let o, a = r.length - 1, s = !1;
        for (; a >= 0; --a) {
          o = r[a],
            o._active
              ? (o._total > n.duration && (n.duration = o._total),
                o.tick(t),
                s = !0)
              : (r[a] = r[r.length - 1], r.pop());
        }
        s && (i.draw(), this._notify(i, n, t, "progress")),
          r.length ||
          (n.running = !1, this._notify(i, n, t, "complete"), n.initial = !1),
          e += r.length;
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
      let i = n.length - 1;
      for (; i >= 0; --i) n[i].cancel();
      e.items = [], this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var Ys = new qs();
  const Qs = "transparent",
    Ks = {
      boolean: (t, e, n) => n > .5 ? e : t,
      color(t, e, n) {
        const i = ga(t || Qs), r = i.valid && ga(e || Qs);
        return r && r.valid ? r.mix(i, n).hexString() : e;
      },
      number: (t, e, n) => t + (e - t) * n,
    };
  class Xs {
    constructor(t, e, n, i) {
      const r = e[n];
      i = Ga([t.to, i, r, t.from]);
      const o = Ga([t.from, r, i]);
      this._active = !0,
        this._fn = t.fn || Ks[t.type || typeof o],
        this._easing = fa[t.easing] || fa.linear,
        this._start = Math.floor(Date.now() + (t.delay || 0)),
        this._duration = this._total = Math.floor(t.duration),
        this._loop = !!t.loop,
        this._target = e,
        this._prop = n,
        this._from = o,
        this._to = i,
        this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(t, e, n) {
      if (this._active) {
        this._notify(!1);
        const i = this._target[this._prop],
          r = n - this._start,
          o = this._duration - r;
        this._start = n,
          this._duration = Math.floor(Math.max(o, t.duration)),
          this._total += r,
          this._loop = !!t.loop,
          this._to = Ga([t.to, e, i, t.from]),
          this._from = Ga([t.from, i, e]);
      }
    }
    cancel() {
      this._active &&
        (this.tick(Date.now()), this._active = !1, this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        n = this._duration,
        i = this._prop,
        r = this._from,
        o = this._loop,
        a = this._to;
      let s;
      if (this._active = r !== a && (o || e < n), !this._active) {
        return this._target[i] = a, void this._notify(!0);
      }
      e < 0
        ? this._target[i] = r
        : (s = e / n % 2,
          s = o && s > 1 ? 2 - s : s,
          s = this._easing(Math.min(1, Math.max(0, s))),
          this._target[i] = this._fn(r, a, s));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, n) => {
        t.push({ res: e, rej: n });
      });
    }
    _notify(t) {
      const e = t ? "res" : "rej", n = this._promises || [];
      for (let i = 0; i < n.length; i++) n[i][e]();
    }
  }
  class Js {
    constructor(t, e) {
      this._chart = t, this._properties = new Map(), this.configure(e);
    }
    configure(t) {
      if (!so(t)) return;
      const e = Object.keys(Pa.animation), n = this._properties;
      Object.getOwnPropertyNames(t).forEach((i) => {
        const r = t[i];
        if (!so(r)) return;
        const o = {};
        for (const t of e) o[t] = r[t];
        (ao(r.properties) && r.properties || [i]).forEach((t) => {
          t !== i && n.has(t) || n.set(t, o);
        });
      });
    }
    _animateOptions(t, e) {
      const n = e.options,
        i = function (t, e) {
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
      if (!i) return [];
      const r = this._createAnimations(i, n);
      return n.$shared && function (t, e) {
        const n = [], i = Object.keys(e);
        for (let r = 0; r < i.length; r++) {
          const e = t[i[r]];
          e && e.active() && n.push(e.wait());
        }
        return Promise.all(n);
      }(t.options.$animations, n).then(() => {
        t.options = n;
      }, () => {}),
        r;
    }
    _createAnimations(t, e) {
      const n = this._properties,
        i = [],
        r = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        a = Date.now();
      let s;
      for (s = o.length - 1; s >= 0; --s) {
        const l = o[s];
        if ("$" === l.charAt(0)) continue;
        if ("options" === l) {
          i.push(...this._animateOptions(t, e));
          continue;
        }
        const c = e[l];
        let u = r[l];
        const d = n.get(l);
        if (u) {
          if (d && u.active()) {
            u.update(d, c, a);
            continue;
          }
          u.cancel();
        }
        d && d.duration ? (r[l] = u = new Xs(d, t, l, c), i.push(u)) : t[l] = c;
      }
      return i;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const n = this._createAnimations(t, e);
      return n.length ? (Ys.add(this._chart, n), !0) : void 0;
    }
  }
  function Gs(t, e) {
    const n = t && t.options || {},
      i = n.reverse,
      r = void 0 === n.min ? e : 0,
      o = void 0 === n.max ? e : 0;
    return { start: i ? o : r, end: i ? r : o };
  }
  function Zs(t, e) {
    const n = [], i = t._getSortedDatasetMetas(e);
    let r, o;
    for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index);
    return n;
  }
  function tl(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const r = t.keys, o = "single" === i.mode;
    let a, s, l, c;
    if (null !== e) {
      for (a = 0, s = r.length; a < s; ++a) {
        if (l = +r[a], l === n) {
          if (i.all) continue;
          break;
        }
        c = t.values[l], lo(c) && (o || 0 === e || zo(e) === zo(c)) && (e += c);
      }
      return e;
    }
  }
  function el(t, e) {
    const n = t && t.options.stacked;
    return n || void 0 === n && void 0 !== e.stack;
  }
  function nl(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
  }
  function il(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
      const e = t[r.index];
      if (n && e > 0 || !n && e < 0) return r.index;
    }
    return null;
  }
  function rl(t, e) {
    const { chart: n, _cachedMeta: i } = t,
      r = n._stacks || (n._stacks = {}),
      { iScale: o, vScale: a, index: s } = i,
      l = o.axis,
      c = a.axis,
      u = function (t, e, n) {
        return `${t.id}.${e.id}.${n.stack || n.type}`;
      }(o, a, i),
      d = e.length;
    let h;
    for (let f = 0; f < d; ++f) {
      const t = e[f], { [l]: n, [c]: o } = t;
      h = (t._stacks || (t._stacks = {}))[c] = nl(r, u, n),
        h[s] = o,
        h._top = il(h, a, !0, i.type),
        h._bottom = il(h, a, !1, i.type);
      (h._visualValues || (h._visualValues = {}))[s] = o;
    }
  }
  function ol(t, e) {
    const n = t.scales;
    return Object.keys(n).filter((t) => n[t].axis === e).shift();
  }
  function al(t, e) {
    const n = t.controller.index, i = t.vScale && t.vScale.axis;
    if (i) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
        delete e[i][n],
          void 0 !== e[i]._visualValues && void 0 !== e[i]._visualValues[n] &&
          delete e[i]._visualValues[n];
      }
    }
  }
  const sl = (t) => "reset" === t || "none" === t,
    ll = (t, e) => e ? t : Object.assign({}, t);
  class cl {
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
        t._stacked = el(t.vScale, t),
        this.addElements(),
        this.options.fill && !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
    }
    updateIndex(t) {
      this.index !== t && al(this._cachedMeta), this.index = t;
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        n = this.getDataset(),
        i = (t, e, n, i) => "x" === t ? e : "r" === t ? i : n,
        r = e.xAxisID = uo(n.xAxisID, ol(t, "x")),
        o = e.yAxisID = uo(n.yAxisID, ol(t, "y")),
        a = e.rAxisID = uo(n.rAxisID, ol(t, "r")),
        s = e.indexAxis,
        l = e.iAxisID = i(s, r, o, a),
        c = e.vAxisID = i(s, o, r, a);
      e.xScale = this.getScaleForId(r),
        e.yScale = this.getScaleForId(o),
        e.rScale = this.getScaleForId(a),
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
      this._data && na(this._data, this), t._stacked && al(t);
    }
    _dataCheck() {
      const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
      if (so(e)) {
        const t = this._cachedMeta;
        this._data = function (t, e) {
          const { iScale: n, vScale: i } = e,
            r = "x" === n.axis ? "x" : "y",
            o = "x" === i.axis ? "x" : "y",
            a = Object.keys(t),
            s = new Array(a.length);
          let l, c, u;
          for (l = 0, c = a.length; l < c; ++l) {
            u = a[l], s[l] = { [r]: u, [o]: t[u] };
          }
          return s;
        }(e, t);
      } else if (n !== e) {
        if (n) {
          na(n, this);
          const t = this._cachedMeta;
          al(t), t._parsed = [];
        }
        e && Object.isExtensible(e) &&
        (r = this,
          (i = e)._chartjs
            ? i._chartjs.listeners.push(r)
            : (Object.defineProperty(i, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [r] },
            }),
              ea.forEach((t) => {
                const e = "_onData" + So(t), n = i[t];
                Object.defineProperty(i, t, {
                  configurable: !0,
                  enumerable: !1,
                  value() {
                    for (
                      var t = arguments.length, r = new Array(t), o = 0;
                      o < t;
                      o++
                    ) r[o] = arguments[o];
                    const a = n.apply(this, r);
                    return i._chartjs.listeners.forEach((t) => {
                      "function" === typeof t[e] && t[e](...r);
                    }),
                      a;
                  },
                });
              }))),
          this._syncList = [],
          this._data = e;
      }
      var i, r;
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta, n = this.getDataset();
      let i = !1;
      this._dataCheck();
      const r = e._stacked;
      e._stacked = el(e.vScale, e),
        e.stack !== n.stack && (i = !0, al(e), e.stack = n.stack),
        this._resyncElements(t),
        (i || r !== e._stacked) && rl(this, e._parsed);
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
      const { _cachedMeta: n, _data: i } = this,
        { iScale: r, _stacked: o } = n,
        a = r.axis;
      let s,
        l,
        c,
        u = 0 === t && e === i.length || n._sorted,
        d = t > 0 && n._parsed[t - 1];
      if (!1 === this._parsing) n._parsed = i, n._sorted = !0, c = i;
      else {
        c = ao(i[t])
          ? this.parseArrayData(n, i, t, e)
          : so(i[t])
          ? this.parseObjectData(n, i, t, e)
          : this.parsePrimitiveData(n, i, t, e);
        const r = () => null === l[a] || d && l[a] < d[a];
        for (s = 0; s < e; ++s) {
          n._parsed[s + t] = l = c[s], u && (r() && (u = !1), d = l);
        }
        n._sorted = u;
      }
      o && rl(this, c);
    }
    parsePrimitiveData(t, e, n, i) {
      const { iScale: r, vScale: o } = t,
        a = r.axis,
        s = o.axis,
        l = r.getLabels(),
        c = r === o,
        u = new Array(i);
      let d, h, f;
      for (d = 0, h = i; d < h; ++d) {
        f = d + n, u[d] = { [a]: c || r.parse(l[f], f), [s]: o.parse(e[f], f) };
      }
      return u;
    }
    parseArrayData(t, e, n, i) {
      const { xScale: r, yScale: o } = t, a = new Array(i);
      let s, l, c, u;
      for (s = 0, l = i; s < l; ++s) {
        c = s + n,
          u = e[c],
          a[s] = { x: r.parse(u[0], c), y: o.parse(u[1], c) };
      }
      return a;
    }
    parseObjectData(t, e, n, i) {
      const { xScale: r, yScale: o } = t,
        { xAxisKey: a = "x", yAxisKey: s = "y" } = this._parsing,
        l = new Array(i);
      let c, u, d, h;
      for (c = 0, u = i; c < u; ++c) {
        d = c + n,
          h = e[d],
          l[c] = { x: r.parse(ko(h, a), d), y: o.parse(ko(h, s), d) };
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
      const i = this.chart, r = this._cachedMeta, o = e[t.axis];
      return tl(
        { keys: Zs(i, !0), values: e._stacks[t.axis]._visualValues },
        o,
        r.index,
        { mode: n },
      );
    }
    updateRangeFromParsed(t, e, n, i) {
      const r = n[e.axis];
      let o = null === r ? NaN : r;
      const a = i && n._stacks[e.axis];
      i && a && (i.values = a, o = tl(i, r, this._cachedMeta.index)),
        t.min = Math.min(t.min, o),
        t.max = Math.max(t.max, o);
    }
    getMinMax(t, e) {
      const n = this._cachedMeta,
        i = n._parsed,
        r = n._sorted && t === n.iScale,
        o = i.length,
        a = this._getOtherScale(t),
        s =
          ((t, e, n) =>
            t && !e.hidden && e._stacked && { keys: Zs(n, !0), values: null })(
              e,
              n,
              this.chart,
            ),
        l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: c, max: u } = function (t) {
          const { min: e, max: n, minDefined: i, maxDefined: r } = t
            .getUserBounds();
          return {
            min: i ? e : Number.NEGATIVE_INFINITY,
            max: r ? n : Number.POSITIVE_INFINITY,
          };
        }(a);
      let d, h;
      function f() {
        h = i[d];
        const e = h[a.axis];
        return !lo(h[t.axis]) || c > e || u < e;
      }
      for (
        d = 0;
        d < o && (f() || (this.updateRangeFromParsed(l, t, h, s), !r));
        ++d
      );
      if (r) {
        for (d = o - 1; d >= 0; --d) {
          if (!f()) {
            this.updateRangeFromParsed(l, t, h, s);
            break;
          }
        }
      }
      return l;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed, n = [];
      let i, r, o;
      for (i = 0, r = e.length; i < r; ++i) {
        o = e[i][t.axis], lo(o) && n.push(o);
      }
      return n;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = e.iScale,
        i = e.vScale,
        r = this.getParsed(t);
      return {
        label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
        value: i ? "" + i.getLabelForValue(r[i.axis]) : "",
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || "default"),
        e._clip = function (t) {
          let e, n, i, r;
          return so(t)
            ? (e = t.top, n = t.right, i = t.bottom, r = t.left)
            : e =
              n =
              i =
              r =
                t,
            { top: e, right: n, bottom: i, left: r, disabled: !1 === t };
        }(uo(
          this.options.clip,
          function (t, e, n) {
            if (!1 === n) return !1;
            const i = Gs(t, n), r = Gs(e, n);
            return { top: r.end, right: i.end, bottom: r.start, left: i.start };
          }(e.xScale, e.yScale, this.getMaxOverflow()),
        ));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        n = this._cachedMeta,
        i = n.data || [],
        r = e.chartArea,
        o = [],
        a = this._drawStart || 0,
        s = this._drawCount || i.length - a,
        l = this.options.drawActiveElementsOnTop;
      let c;
      for (n.dataset && n.dataset.draw(t, r, a, s), c = a; c < a + s; ++c) {
        const e = i[c];
        e.hidden || (e.active && l ? o.push(e) : e.draw(t, r));
      }
      for (c = 0; c < o.length; ++c) o[c].draw(t, r);
    }
    getStyle(t, e) {
      const n = e ? "active" : "default";
      return void 0 === t && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(n)
        : this.resolveDataElementOptions(t || 0, n);
    }
    getContext(t, e, n) {
      const i = this.getDataset();
      let r;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        r = e.$context || (e.$context = function (t, e, n) {
          return Za(t, {
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
          r.parsed = this.getParsed(t),
          r.raw = i.data[t],
          r.index = r.dataIndex = t;
      } else {r = this.$context || (this.$context = function (t, e) {
          return Za(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset",
          });
        }(this.chart.getContext(), this.index)),
          r.dataset = i,
          r.index = r.datasetIndex = this.index;}
      return r.active = !!e, r.mode = n, r;
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
      const i = "active" === e,
        r = this._cachedDataOpts,
        o = t + "-" + e,
        a = r[o],
        s = this.enableOptionSharing && Eo(n);
      if (a) return ll(a, s);
      const l = this.chart.config,
        c = l.datasetElementScopeKeys(this._type, t),
        u = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        d = l.getOptionScopes(this.getDataset(), c),
        h = Object.keys(Pa.elements[t]),
        f = l.resolveNamedOptions(d, h, () => this.getContext(n, i, e), u);
      return f.$shared && (f.$shared = s, r[o] = Object.freeze(ll(f, s))), f;
    }
    _resolveAnimations(t, e, n) {
      const i = this.chart,
        r = this._cachedDataOpts,
        o = `animation-${e}`,
        a = r[o];
      if (a) return a;
      let s;
      if (!1 !== i.options.animation) {
        const i = this.chart.config,
          r = i.datasetAnimationScopeKeys(this._type, e),
          o = i.getOptionScopes(this.getDataset(), r);
        s = i.createResolver(o, this.getContext(t, n, e));
      }
      const l = new Js(i, s && s.animations);
      return s && s._cacheable && (r[o] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared) {
        return this._sharedOptions ||
          (this._sharedOptions = Object.assign({}, t));
      }
    }
    includeOptions(t, e) {
      return !e || sl(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const n = this.resolveDataElementOptions(t, e),
        i = this._sharedOptions,
        r = this.getSharedOptions(n),
        o = this.includeOptions(e, r) || r !== i;
      return this.updateSharedOptions(r, e, n),
        { sharedOptions: r, includeOptions: o };
    }
    updateElement(t, e, n, i) {
      sl(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n);
    }
    updateSharedOptions(t, e, n) {
      t && !sl(e) && this._resolveAnimations(void 0, e).update(t, n);
    }
    _setStyle(t, e, n, i) {
      t.active = i;
      const r = this.getStyle(e, i);
      this._resolveAnimations(e, n, i).update(t, {
        options: !i && this.getSharedOptions(r) || r,
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
      for (const [a, s, l] of this._syncList) this[a](s, l);
      this._syncList = [];
      const i = n.length, r = e.length, o = Math.min(r, i);
      o && this.parse(0, o),
        r > i
          ? this._insertElements(i, r - i, t)
          : r < i && this._removeElements(r, i - r);
    }
    _insertElements(t, e) {
      let n = !(arguments.length > 2 && void 0 !== arguments[2]) ||
        arguments[2];
      const i = this._cachedMeta, r = i.data, o = t + e;
      let a;
      const s = (t) => {
        for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
      };
      for (s(r), a = t; a < o; ++a) r[a] = new this.dataElementType();
      this._parsing && s(i._parsed),
        this.parse(t, e),
        n && this.updateElements(r, t, e, "reset");
    }
    updateElements(t, e, n, i) {}
    _removeElements(t, e) {
      const n = this._cachedMeta;
      if (this._parsing) {
        const i = n._parsed.splice(t, e);
        n._stacked && al(n, i);
      }
      n.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [e, n, i] = t;
        this[e](n, i);
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
  function ul(t) {
    const e = t.iScale,
      n = function (t, e) {
        if (!t._cache.$bar) {
          const n = t.getMatchingVisibleMetas(e);
          let i = [];
          for (let e = 0, r = n.length; e < r; e++) {
            i = i.concat(n[e].controller.getAllParsedValues(t));
          }
          t._cache.$bar = ia(i.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      }(e, t.type);
    let i, r, o, a, s = e._length;
    const l = () => {
      32767 !== o && -32768 !== o &&
        (Eo(a) && (s = Math.min(s, Math.abs(o - a) || s)), a = o);
    };
    for (i = 0, r = n.length; i < r; ++i) o = e.getPixelForValue(n[i]), l();
    for (a = void 0, i = 0, r = e.ticks.length; i < r; ++i) {
      o = e.getPixelForTick(i), l();
    }
    return s;
  }
  function dl(t, e, n, i) {
    return ao(t)
      ? function (t, e, n, i) {
        const r = n.parse(t[0], i),
          o = n.parse(t[1], i),
          a = Math.min(r, o),
          s = Math.max(r, o);
        let l = a, c = s;
        Math.abs(a) > Math.abs(s) && (l = s, c = a),
          e[n.axis] = c,
          e._custom = {
            barStart: l,
            barEnd: c,
            start: r,
            end: o,
            min: a,
            max: s,
          };
      }(t, e, n, i)
      : e[n.axis] = n.parse(t, i),
      e;
  }
  function hl(t, e, n, i) {
    const r = t.iScale, o = t.vScale, a = r.getLabels(), s = r === o, l = [];
    let c, u, d, h;
    for (c = n, u = n + i; c < u; ++c) {
      h = e[c],
        d = {},
        d[r.axis] = s || r.parse(a[c], c),
        l.push(dl(h, d, o, c));
    }
    return l;
  }
  function fl(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function pl(t, e, n, i) {
    let r = e.borderSkipped;
    const o = {};
    if (!r) return void (t.borderSkipped = o);
    if (!0 === r) {
      return void (t.borderSkipped = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
      });
    }
    const { start: a, end: s, reverse: l, top: c, bottom: u } = function (t) {
      let e, n, i, r, o;
      return t.horizontal
        ? (e = t.base > t.x, n = "left", i = "right")
        : (e = t.base < t.y, n = "bottom", i = "top"),
        e ? (r = "end", o = "start") : (r = "start", o = "end"),
        { start: n, end: i, reverse: e, top: r, bottom: o };
    }(t);
    "middle" === r && n &&
    (t.enableBorderRadius = !0,
      (n._top || 0) === i
        ? r = c
        : (n._bottom || 0) === i
        ? r = u
        : (o[gl(u, a, s, l)] = !0, r = c)),
      o[gl(r, a, s, l)] = !0,
      t.borderSkipped = o;
  }
  function gl(t, e, n, i) {
    var r, o, a;
    return i
      ? (a = n, t = ml(t = (r = t) === (o = e) ? a : r === a ? o : r, n, e))
      : t = ml(t, e, n),
      t;
  }
  function ml(t, e, n) {
    return "start" === t ? e : "end" === t ? n : t;
  }
  function bl(t, e, n) {
    let { inflateAmount: i } = e;
    t.inflateAmount = "auto" === i ? 1 === n ? .33 : 0 : i;
  }
  class yl extends cl {
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
    parsePrimitiveData(t, e, n, i) {
      return hl(t, e, n, i);
    }
    parseArrayData(t, e, n, i) {
      return hl(t, e, n, i);
    }
    parseObjectData(t, e, n, i) {
      const { iScale: r, vScale: o } = t,
        { xAxisKey: a = "x", yAxisKey: s = "y" } = this._parsing,
        l = "x" === r.axis ? a : s,
        c = "x" === o.axis ? a : s,
        u = [];
      let d, h, f, p;
      for (d = n, h = n + i; d < h; ++d) {
        p = e[d],
          f = {},
          f[r.axis] = r.parse(ko(p, l), d),
          u.push(dl(ko(p, c), f, o, d));
      }
      return u;
    }
    updateRangeFromParsed(t, e, n, i) {
      super.updateRangeFromParsed(t, e, n, i);
      const r = n._custom;
      r && e === this._cachedMeta.vScale &&
        (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        { iScale: n, vScale: i } = e,
        r = this.getParsed(t),
        o = r._custom,
        a = fl(o)
          ? "[" + o.start + ", " + o.end + "]"
          : "" + i.getLabelForValue(r[i.axis]);
      return { label: "" + n.getLabelForValue(r[n.axis]), value: a };
    }
    initialize() {
      this.enableOptionSharing = !0, super.initialize();
      this._cachedMeta.stack = this.getDataset().stack;
    }
    update(t) {
      const e = this._cachedMeta;
      this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, n, i) {
      const r = "reset" === i,
        { index: o, _cachedMeta: { vScale: a } } = this,
        s = a.getBasePixel(),
        l = a.isHorizontal(),
        c = this._getRuler(),
        { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, i);
      for (let h = e; h < e + n; h++) {
        const e = this.getParsed(h),
          n = r || oo(e[a.axis])
            ? { base: s, head: s }
            : this._calculateBarValuePixels(h),
          f = this._calculateBarIndexPixels(h, c),
          p = (e._stacks || {})[a.axis],
          g = {
            horizontal: l,
            base: n.base,
            enableBorderRadius: !p || fl(e._custom) || o === p._top ||
              o === p._bottom,
            x: l ? n.head : f.center,
            y: l ? f.center : n.head,
            height: l ? f.size : Math.abs(n.size),
            width: l ? Math.abs(n.size) : f.size,
          };
        d &&
          (g.options = u ||
            this.resolveDataElementOptions(h, t[h].active ? "active" : i));
        const m = g.options || t[h].options;
        pl(g, m, p, o), bl(g, m, c.ratio), this.updateElement(t[h], h, g, i);
      }
    }
    _getStacks(t, e) {
      const { iScale: n } = this._cachedMeta,
        i = n.getMatchingVisibleMetas(this._type).filter(
          (t) => t.controller.options.grouped,
        ),
        r = n.options.stacked,
        o = [],
        a = this._cachedMeta.controller.getParsed(e),
        s = a && a[n.axis],
        l = (t) => {
          const e = t._parsed.find((t) => t[n.axis] === s),
            i = e && e[t.vScale.axis];
          if (oo(i) || isNaN(i)) return !0;
        };
      for (const c of i) {
        if (
          (void 0 === e || !l(c)) &&
          ((!1 === r || -1 === o.indexOf(c.stack) ||
            void 0 === r && void 0 === c.stack) && o.push(c.stack),
            c.index === t)
        ) break;
      }
      return o.length || o.push(void 0), o;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, n) {
      const i = this._getStacks(t, n), r = void 0 !== e ? i.indexOf(e) : -1;
      return -1 === r ? i.length - 1 : r;
    }
    _getRuler() {
      const t = this.options, e = this._cachedMeta, n = e.iScale, i = [];
      let r, o;
      for (r = 0, o = e.data.length; r < o; ++r) {
        i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
      }
      const a = t.barThickness;
      return {
        min: a || ul(e),
        pixels: i,
        start: n._startPixel,
        end: n._endPixel,
        stackCount: this._getStackCount(),
        scale: n,
        grouped: t.grouped,
        ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: { vScale: e, _stacked: n, index: i },
          options: { base: r, minBarLength: o },
        } = this,
        a = r || 0,
        s = this.getParsed(t),
        l = s._custom,
        c = fl(l);
      let u, d, h = s[e.axis], f = 0, p = n ? this.applyStack(e, s, n) : h;
      p !== h && (f = p - h, p = h),
        c &&
        (h = l.barStart,
          p = l.barEnd - l.barStart,
          0 !== h && zo(h) !== zo(l.barEnd) && (f = 0),
          f += h);
      const g = oo(r) || c ? f : r;
      let m = e.getPixelForValue(g);
      if (
        u = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m,
          d = u - m,
          Math.abs(d) < o
      ) {
        d = function (t, e, n) {
          return 0 !== t
            ? zo(t)
            : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
        }(d, e, a) * o, h === a && (m -= d / 2);
        const t = e.getPixelForDecimal(0),
          r = e.getPixelForDecimal(1),
          l = Math.min(t, r),
          f = Math.max(t, r);
        m = Math.max(Math.min(m, f), l),
          u = m + d,
          n && !c &&
          (s._stacks[e.axis]._visualValues[i] = e.getValueForPixel(u) -
            e.getValueForPixel(m));
      }
      if (m === e.getPixelForValue(a)) {
        const t = zo(d) * e.getLineWidthForValue(a) / 2;
        m += t, d -= t;
      }
      return { size: d, base: m, head: u, center: u + d / 2 };
    }
    _calculateBarIndexPixels(t, e) {
      const n = e.scale,
        i = this.options,
        r = i.skipNull,
        o = uo(i.maxBarThickness, 1 / 0);
      let a, s;
      if (e.grouped) {
        const n = r ? this._getStackCount(t) : e.stackCount,
          l = "flex" === i.barThickness
            ? function (t, e, n, i) {
              const r = e.pixels, o = r[t];
              let a = t > 0 ? r[t - 1] : null,
                s = t < r.length - 1 ? r[t + 1] : null;
              const l = n.categoryPercentage;
              null === a && (a = o - (null === s ? e.end - e.start : s - o)),
                null === s && (s = o + o - a);
              const c = o - (o - Math.min(a, s)) / 2 * l;
              return {
                chunk: Math.abs(s - a) / 2 * l / i,
                ratio: n.barPercentage,
                start: c,
              };
            }(t, e, i, n)
            : function (t, e, n, i) {
              const r = n.barThickness;
              let o, a;
              return oo(r)
                ? (o = e.min * n.categoryPercentage, a = n.barPercentage)
                : (o = r * i, a = 1),
                { chunk: o / i, ratio: a, start: e.pixels[t] - o / 2 };
            }(t, e, i, n),
          c = this._getStackIndex(
            this.index,
            this._cachedMeta.stack,
            r ? t : void 0,
          );
        a = l.start + l.chunk * c + l.chunk / 2,
          s = Math.min(o, l.chunk * l.ratio);
      } else {a = n.getPixelForValue(this.getParsed(t)[n.axis], t),
          s = Math.min(o, e.min * e.ratio);}
      return { base: a - s / 2, head: a + s / 2, center: a, size: s };
    }
    draw() {
      const t = this._cachedMeta, e = t.vScale, n = t.data, i = n.length;
      let r = 0;
      for (; r < i; ++r) {
        null === this.getParsed(r)[e.axis] || n[r].hidden ||
          n[r].draw(this._ctx);
      }
    }
  }
  class vl extends cl {
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
                const { labels: { pointStyle: n, color: i } } =
                  t.legend.options;
                return e.labels.map((e, r) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(r);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: i,
                    lineWidth: o.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(r),
                    index: r,
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
      const n = this.getDataset().data, i = this._cachedMeta;
      if (!1 === this._parsing) i._parsed = n;
      else {
        let r, o, a = (t) => +n[t];
        if (so(n[t])) {
          const { key: t = "value" } = this._parsing;
          a = (e) => +ko(n[e], t);
        }
        for (r = t, o = t + e; r < o; ++r) i._parsed[r] = a(r);
      }
    }
    _getRotation() {
      return Uo(this.options.rotation - 90);
    }
    _getCircumference() {
      return Uo(this.options.circumference);
    }
    _getRotationExtents() {
      let t = To, e = -To;
      for (let n = 0; n < this.chart.data.datasets.length; ++n) {
        if (
          this.chart.isDatasetVisible(n) &&
          this.chart.getDatasetMeta(n).type === this._type
        ) {
          const i = this.chart.getDatasetMeta(n).controller,
            r = i._getRotation(),
            o = i._getCircumference();
          t = Math.min(t, r), e = Math.max(e, r + o);
        }
      }
      return { rotation: t, circumference: e - t };
    }
    update(t) {
      const e = this.chart,
        { chartArea: n } = e,
        i = this._cachedMeta,
        r = i.data,
        o = this.getMaxBorderWidth() + this.getMaxOffset(r) +
          this.options.spacing,
        a = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
        s = Math.min(
          (l = this.options.cutout,
            c = a,
            "string" === typeof l && l.endsWith("%")
              ? parseFloat(l) / 100
              : +l / c),
          1,
        );
      var l, c;
      const u = this._getRingWeight(this.index),
        { circumference: d, rotation: h } = this._getRotationExtents(),
        { ratioX: f, ratioY: p, offsetX: g, offsetY: m } = function (t, e, n) {
          let i = 1, r = 1, o = 0, a = 0;
          if (e < To) {
            const s = t,
              l = s + e,
              c = Math.cos(s),
              u = Math.sin(s),
              d = Math.cos(l),
              h = Math.sin(l),
              f = (t, e, i) =>
                Ko(t, s, l, !0) ? 1 : Math.max(e, e * n, i, i * n),
              p = (t, e, i) =>
                Ko(t, s, l, !0) ? -1 : Math.min(e, e * n, i, i * n),
              g = f(0, c, d),
              m = f(Lo, u, h),
              b = p(Po, c, d),
              y = p(Po + Lo, u, h);
            i = (g - b) / 2,
              r = (m - y) / 2,
              o = -(g + b) / 2,
              a = -(m + y) / 2;
          }
          return { ratioX: i, ratioY: r, offsetX: o, offsetY: a };
        }(h, d, s),
        b = (n.width - o) / f,
        y = (n.height - o) / p,
        v = Math.max(Math.min(b, y) / 2, 0),
        x = ho(this.options.radius, v),
        w = (x - Math.max(x * s, 0)) / this._getVisibleDatasetWeightTotal();
      this.offsetX = g * x,
        this.offsetY = m * x,
        i.total = this.calculateTotal(),
        this.outerRadius = x - w * this._getRingWeightOffset(this.index),
        this.innerRadius = Math.max(this.outerRadius - w * u, 0),
        this.updateElements(r, 0, r.length, t);
    }
    _circumference(t, e) {
      const n = this.options,
        i = this._cachedMeta,
        r = this._getCircumference();
      return e && n.animation.animateRotate ||
          !this.chart.getDataVisibility(t) || null === i._parsed[t] ||
          i.data[t].hidden
        ? 0
        : this.calculateCircumference(i._parsed[t] * r / To);
    }
    updateElements(t, e, n, i) {
      const r = "reset" === i,
        o = this.chart,
        a = o.chartArea,
        s = o.options.animation,
        l = (a.left + a.right) / 2,
        c = (a.top + a.bottom) / 2,
        u = r && s.animateScale,
        d = u ? 0 : this.innerRadius,
        h = u ? 0 : this.outerRadius,
        { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, i);
      let g, m = this._getRotation();
      for (g = 0; g < e; ++g) m += this._circumference(g, r);
      for (g = e; g < e + n; ++g) {
        const e = this._circumference(g, r),
          n = t[g],
          o = {
            x: l + this.offsetX,
            y: c + this.offsetY,
            startAngle: m,
            endAngle: m + e,
            circumference: e,
            outerRadius: h,
            innerRadius: d,
          };
        p &&
        (o.options = f ||
          this.resolveDataElementOptions(g, n.active ? "active" : i)),
          m += e,
          this.updateElement(n, g, o, i);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta, e = t.data;
      let n, i = 0;
      for (n = 0; n < e.length; n++) {
        const r = t._parsed[n];
        null === r || isNaN(r) || !this.chart.getDataVisibility(n) ||
          e[n].hidden || (i += Math.abs(r));
      }
      return i;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? To * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        n = this.chart,
        i = n.data.labels || [],
        r = xa(e._parsed[t], n.options.locale);
      return { label: i[t] || "", value: r };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const n = this.chart;
      let i, r, o, a, s;
      if (!t) {
        for (i = 0, r = n.data.datasets.length; i < r; ++i) {
          if (n.isDatasetVisible(i)) {
            o = n.getDatasetMeta(i), t = o.data, a = o.controller;
            break;
          }
        }
      }
      if (!t) return 0;
      for (i = 0, r = t.length; i < r; ++i) {
        s = a.resolveDataElementOptions(i),
          "inner" !== s.borderAlign &&
          (e = Math.max(e, s.borderWidth || 0, s.hoverBorderWidth || 0));
      }
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let n = 0, i = t.length; n < i; ++n) {
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
      return Math.max(uo(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  class xl extends cl {
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
        { dataset: n, data: i = [], _dataset: r } = e,
        o = this.chart._animationsDisabled;
      let { start: a, count: s } = la(e, i, o);
      this._drawStart = a,
        this._drawCount = s,
        ca(e) && (a = 0, s = i.length),
        n._chart = this.chart,
        n._datasetIndex = this.index,
        n._decimated = !!r._decimated,
        n.points = i;
      const l = this.resolveDatasetElementOptions(t);
      this.options.showLine || (l.borderWidth = 0),
        l.segment = this.options.segment,
        this.updateElement(n, void 0, { animated: !o, options: l }, t),
        this.updateElements(i, a, s, t);
    }
    updateElements(t, e, n, i) {
      const r = "reset" === i,
        { iScale: o, vScale: a, _stacked: s, _dataset: l } = this._cachedMeta,
        { sharedOptions: c, includeOptions: u } = this._getSharedOptions(e, i),
        d = o.axis,
        h = a.axis,
        { spanGaps: f, segment: p } = this.options,
        g = Bo(f) ? f : Number.POSITIVE_INFINITY,
        m = this.chart._animationsDisabled || r || "none" === i,
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
          w = oo(y[h]),
          _ = f[d] = o.getPixelForValue(y[d], x),
          k = f[h] = r || w
            ? a.getBasePixel()
            : a.getPixelForValue(s ? this.applyStack(a, y, s) : y[h], x);
        f.skip = isNaN(_) || isNaN(k) || w,
          f.stop = x > 0 && Math.abs(y[d] - v[d]) > g,
          p && (f.parsed = y, f.raw = l.data[x]),
          u &&
          (f.options = c ||
            this.resolveDataElementOptions(x, n.active ? "active" : i)),
          m || this.updateElement(n, x, f, i),
          v = y;
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        e = t.dataset,
        n = e.options && e.options.borderWidth || 0,
        i = t.data || [];
      if (!i.length) return n;
      const r = i[0].size(this.resolveDataElementOptions(0)),
        o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
      return Math.max(n, r, o) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw();
    }
  }
  class wl extends cl {
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
                const { labels: { pointStyle: n, color: i } } =
                  t.legend.options;
                return e.labels.map((e, r) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(r);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: i,
                    lineWidth: o.borderWidth,
                    pointStyle: n,
                    hidden: !t.getDataVisibility(r),
                    index: r,
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
        i = n.data.labels || [],
        r = xa(e._parsed[t].r, n.options.locale);
      return { label: i[t] || "", value: r };
    }
    parseObjectData(t, e, n, i) {
      return fs.bind(this)(t, e, n, i);
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return t.data.forEach((t, n) => {
        const i = this.getParsed(n).r;
        !isNaN(i) && this.chart.getDataVisibility(n) &&
          (i < e.min && (e.min = i), i > e.max && (e.max = i));
      }),
        e;
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        n = t.options,
        i = Math.min(e.right - e.left, e.bottom - e.top),
        r = Math.max(i / 2, 0),
        o = (r -
          Math.max(
            n.cutoutPercentage ? r / 100 * n.cutoutPercentage : 1,
            0,
          )) / t.getVisibleDatasetCount();
      this.outerRadius = r - o * this.index,
        this.innerRadius = this.outerRadius - o;
    }
    updateElements(t, e, n, i) {
      const r = "reset" === i,
        o = this.chart,
        a = o.options.animation,
        s = this._cachedMeta.rScale,
        l = s.xCenter,
        c = s.yCenter,
        u = s.getIndexAngle(0) - .5 * Po;
      let d, h = u;
      const f = 360 / this.countVisibleElements();
      for (d = 0; d < e; ++d) h += this._computeAngle(d, i, f);
      for (d = e; d < e + n; d++) {
        const e = t[d];
        let n = h,
          p = h + this._computeAngle(d, i, f),
          g = o.getDataVisibility(d)
            ? s.getDistanceFromCenterForValue(this.getParsed(d).r)
            : 0;
        h = p, r && (a.animateScale && (g = 0), a.animateRotate && (n = p = u));
        const m = {
          x: l,
          y: c,
          innerRadius: 0,
          outerRadius: g,
          startAngle: n,
          endAngle: p,
          options: this.resolveDataElementOptions(d, e.active ? "active" : i),
        };
        this.updateElement(e, d, m, i);
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
        ? Uo(this.resolveDataElementOptions(t, e).angle || n)
        : 0;
    }
  }
  var _l = Object.freeze({
    __proto__: null,
    BarController: yl,
    BubbleController: class extends cl {
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
      parsePrimitiveData(t, e, n, i) {
        const r = super.parsePrimitiveData(t, e, n, i);
        for (let o = 0; o < r.length; o++) {
          r[o]._custom = this.resolveDataElementOptions(o + n).radius;
        }
        return r;
      }
      parseArrayData(t, e, n, i) {
        const r = super.parseArrayData(t, e, n, i);
        for (let o = 0; o < r.length; o++) {
          const t = e[n + o];
          r[o]._custom = uo(t[2], this.resolveDataElementOptions(o + n).radius);
        }
        return r;
      }
      parseObjectData(t, e, n, i) {
        const r = super.parseObjectData(t, e, n, i);
        for (let o = 0; o < r.length; o++) {
          const t = e[n + o];
          r[o]._custom = uo(
            t && t.r && +t.r,
            this.resolveDataElementOptions(o + n).radius,
          );
        }
        return r;
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
          { xScale: i, yScale: r } = e,
          o = this.getParsed(t),
          a = i.getLabelForValue(o.x),
          s = r.getLabelForValue(o.y),
          l = o._custom;
        return {
          label: n[t] || "",
          value: "(" + a + ", " + s + (l ? ", " + l : "") + ")",
        };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, n, i) {
        const r = "reset" === i,
          { iScale: o, vScale: a } = this._cachedMeta,
          { sharedOptions: s, includeOptions: l } = this._getSharedOptions(
            e,
            i,
          ),
          c = o.axis,
          u = a.axis;
        for (let d = e; d < e + n; d++) {
          const e = t[d],
            n = !r && this.getParsed(d),
            h = {},
            f = h[c] = r ? o.getPixelForDecimal(.5) : o.getPixelForValue(n[c]),
            p = h[u] = r ? a.getBasePixel() : a.getPixelForValue(n[u]);
          h.skip = isNaN(f) || isNaN(p),
            l &&
            (h.options = s ||
              this.resolveDataElementOptions(d, e.active ? "active" : i),
              r && (h.options.radius = 0)),
            this.updateElement(e, d, h, i);
        }
      }
      resolveDataElementOptions(t, e) {
        const n = this.getParsed(t);
        let i = super.resolveDataElementOptions(t, e);
        i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
        const r = i.radius;
        return "active" !== e && (i.radius = 0),
          i.radius += uo(n && n._custom, r),
          i;
      }
    },
    DoughnutController: vl,
    LineController: xl,
    PieController: class extends vl {
      static id = "pie";
      static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      };
    },
    PolarAreaController: wl,
    RadarController: class extends cl {
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
      parseObjectData(t, e, n, i) {
        return fs.bind(this)(t, e, n, i);
      }
      update(t) {
        const e = this._cachedMeta,
          n = e.dataset,
          i = e.data || [],
          r = e.iScale.getLabels();
        if (n.points = i, "resize" !== t) {
          const e = this.resolveDatasetElementOptions(t);
          this.options.showLine || (e.borderWidth = 0);
          const o = { _loop: !0, _fullLoop: r.length === i.length, options: e };
          this.updateElement(n, void 0, o, t);
        }
        this.updateElements(i, 0, i.length, t);
      }
      updateElements(t, e, n, i) {
        const r = this._cachedMeta.rScale, o = "reset" === i;
        for (let a = e; a < e + n; a++) {
          const e = t[a],
            n = this.resolveDataElementOptions(a, e.active ? "active" : i),
            s = r.getPointPositionForValue(a, this.getParsed(a).r),
            l = o ? r.xCenter : s.x,
            c = o ? r.yCenter : s.y,
            u = {
              x: l,
              y: c,
              angle: s.angle,
              skip: isNaN(l) || isNaN(c),
              options: n,
            };
          this.updateElement(e, a, u, i);
        }
      }
    },
    ScatterController: class extends cl {
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
          { xScale: i, yScale: r } = e,
          o = this.getParsed(t),
          a = i.getLabelForValue(o.x),
          s = r.getLabelForValue(o.y);
        return { label: n[t] || "", value: "(" + a + ", " + s + ")" };
      }
      update(t) {
        const e = this._cachedMeta,
          { data: n = [] } = e,
          i = this.chart._animationsDisabled;
        let { start: r, count: o } = la(e, n, i);
        if (
          this._drawStart = r,
            this._drawCount = o,
            ca(e) && (r = 0, o = n.length),
            this.options.showLine
        ) {
          this.datasetElementType || this.addElements();
          const { dataset: r, _dataset: o } = e;
          r._chart = this.chart,
            r._datasetIndex = this.index,
            r._decimated = !!o._decimated,
            r.points = n;
          const a = this.resolveDatasetElementOptions(t);
          a.segment = this.options.segment,
            this.updateElement(r, void 0, { animated: !i, options: a }, t);
        } else {this.datasetElementType &&
            (delete e.dataset, this.datasetElementType = !1);}
        this.updateElements(n, r, o, t);
      }
      addElements() {
        const { showLine: t } = this.options;
        !this.datasetElementType && t &&
        (this.datasetElementType = this.chart.registry.getElement("line")),
          super.addElements();
      }
      updateElements(t, e, n, i) {
        const r = "reset" === i,
          { iScale: o, vScale: a, _stacked: s, _dataset: l } = this._cachedMeta,
          c = this.resolveDataElementOptions(e, i),
          u = this.getSharedOptions(c),
          d = this.includeOptions(i, u),
          h = o.axis,
          f = a.axis,
          { spanGaps: p, segment: g } = this.options,
          m = Bo(p) ? p : Number.POSITIVE_INFINITY,
          b = this.chart._animationsDisabled || r || "none" === i;
        let y = e > 0 && this.getParsed(e - 1);
        for (let v = e; v < e + n; ++v) {
          const e = t[v],
            n = this.getParsed(v),
            c = b ? e : {},
            p = oo(n[f]),
            x = c[h] = o.getPixelForValue(n[h], v),
            w = c[f] = r || p
              ? a.getBasePixel()
              : a.getPixelForValue(s ? this.applyStack(a, n, s) : n[f], v);
          c.skip = isNaN(x) || isNaN(w) || p,
            c.stop = v > 0 && Math.abs(n[h] - y[h]) > m,
            g && (c.parsed = n, c.raw = l.data[v]),
            d &&
            (c.options = u ||
              this.resolveDataElementOptions(v, e.active ? "active" : i)),
            b || this.updateElement(e, v, c, i),
            y = n;
        }
        this.updateSharedOptions(u, i, c);
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
        const n = t.dataset, i = n.options && n.options.borderWidth || 0;
        if (!e.length) return i;
        const r = e[0].size(this.resolveDataElementOptions(0)),
          o = e[e.length - 1].size(
            this.resolveDataElementOptions(e.length - 1),
          );
        return Math.max(i, r, o) / 2;
      }
    },
  });
  function kl() {
    throw new Error(
      "This method is not implemented: Check that a complete date adapter is provided.",
    );
  }
  class Sl {
    static override(t) {
      Object.assign(Sl.prototype, t);
    }
    options;
    constructor(t) {
      this.options = t || {};
    }
    init() {}
    formats() {
      return kl();
    }
    parse() {
      return kl();
    }
    format() {
      return kl();
    }
    add() {
      return kl();
    }
    diff() {
      return kl();
    }
    startOf() {
      return kl();
    }
    endOf() {
      return kl();
    }
  }
  var El = Sl;
  function Ml(t, e, n, i) {
    const { controller: r, data: o, _sorted: a } = t, s = r._cachedMeta.iScale;
    if (s && e === s.axis && "r" !== e && a && o.length) {
      const t = s._reversePixels ? ta : Zo;
      if (!i) return t(o, e, n);
      if (r._sharedOptions) {
        const i = o[0], r = "function" === typeof i.getRange && i.getRange(e);
        if (r) {
          const i = t(o, e, n - r), a = t(o, e, n + r);
          return { lo: i.lo, hi: a.hi };
        }
      }
    }
    return { lo: 0, hi: o.length - 1 };
  }
  function Cl(t, e, n, i, r) {
    const o = t.getSortedVisibleDatasetMetas(), a = n[e];
    for (let s = 0, l = o.length; s < l; ++s) {
      const { index: t, data: n } = o[s], { lo: l, hi: c } = Ml(o[s], e, a, r);
      for (let e = l; e <= c; ++e) {
        const r = n[e];
        r.skip || i(r, t, e);
      }
    }
  }
  function Pl(t, e, n, i, r) {
    const o = [];
    if (!r && !t.isPointInArea(e)) return o;
    return Cl(t, n, e, function (n, a, s) {
      (r || ja(n, t.chartArea, 0)) && n.inRange(e.x, e.y, i) &&
        o.push({ element: n, datasetIndex: a, index: s });
    }, !0),
      o;
  }
  function Tl(t, e, n, i, r, o) {
    let a = [];
    const s = function (t) {
      const e = -1 !== t.indexOf("x"), n = -1 !== t.indexOf("y");
      return function (t, i) {
        const r = e ? Math.abs(t.x - i.x) : 0, o = n ? Math.abs(t.y - i.y) : 0;
        return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
      };
    }(n);
    let l = Number.POSITIVE_INFINITY;
    return Cl(t, n, e, function (n, c, u) {
      const d = n.inRange(e.x, e.y, r);
      if (i && !d) return;
      const h = n.getCenterPoint(r);
      if (!(!!o || t.isPointInArea(h)) && !d) return;
      const f = s(e, h);
      f < l
        ? (a = [{ element: n, datasetIndex: c, index: u }], l = f)
        : f === l && a.push({ element: n, datasetIndex: c, index: u });
    }),
      a;
  }
  function Ol(t, e, n, i, r, o) {
    return o || t.isPointInArea(e)
      ? "r" !== n || i ? Tl(t, e, n, i, r, o) : function (t, e, n, i) {
        let r = [];
        return Cl(t, n, e, function (t, n, o) {
          const { startAngle: a, endAngle: s } = t.getProps([
              "startAngle",
              "endAngle",
            ], i),
            { angle: l } = $o(t, { x: e.x, y: e.y });
          Ko(l, a, s) && r.push({ element: t, datasetIndex: n, index: o });
        }),
          r;
      }(t, e, n, r)
      : [];
  }
  function Rl(t, e, n, i, r) {
    const o = [], a = "x" === n ? "inXRange" : "inYRange";
    let s = !1;
    return Cl(t, n, e, (t, i, l) => {
      t[a] && t[a](e[n], r) &&
        (o.push({ element: t, datasetIndex: i, index: l }),
          s = s || t.inRange(e.x, e.y, r));
    }),
      i && !s ? [] : o;
  }
  var Dl = {
    evaluateInteractionItems: Cl,
    modes: {
      index(t, e, n, i) {
        const r = Cs(e, t),
          o = n.axis || "x",
          a = n.includeInvisible || !1,
          s = n.intersect ? Pl(t, r, o, i, a) : Ol(t, r, o, !1, i, a),
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
      dataset(t, e, n, i) {
        const r = Cs(e, t), o = n.axis || "xy", a = n.includeInvisible || !1;
        let s = n.intersect ? Pl(t, r, o, i, a) : Ol(t, r, o, !1, i, a);
        if (s.length > 0) {
          const e = s[0].datasetIndex, n = t.getDatasetMeta(e).data;
          s = [];
          for (let t = 0; t < n.length; ++t) {
            s.push({ element: n[t], datasetIndex: e, index: t });
          }
        }
        return s;
      },
      point: (t, e, n, i) =>
        Pl(t, Cs(e, t), n.axis || "xy", i, n.includeInvisible || !1),
      nearest(t, e, n, i) {
        const r = Cs(e, t), o = n.axis || "xy", a = n.includeInvisible || !1;
        return Ol(t, r, o, n.intersect, i, a);
      },
      x: (t, e, n, i) => Rl(t, Cs(e, t), "x", n.intersect, i),
      y: (t, e, n, i) => Rl(t, Cs(e, t), "y", n.intersect, i),
    },
  };
  const Ll = ["left", "top", "right", "bottom"];
  function Al(t, e) {
    return t.filter((t) => t.pos === e);
  }
  function jl(t, e) {
    return t.filter((t) => -1 === Ll.indexOf(t.pos) && t.box.axis === e);
  }
  function Fl(t, e) {
    return t.sort((t, n) => {
      const i = e ? n : t, r = e ? t : n;
      return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
    });
  }
  function zl(t, e) {
    const n = function (t) {
        const e = {};
        for (const n of t) {
          const { stack: t, pos: i, stackWeight: r } = n;
          if (!t || !Ll.includes(i)) continue;
          const o = e[t] ||
            (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
          o.count++, o.weight += r;
        }
        return e;
      }(t),
      { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
    let o, a, s;
    for (o = 0, a = t.length; o < a; ++o) {
      s = t[o];
      const { fullSize: a } = s.box,
        l = n[s.stack],
        c = l && s.stackWeight / l.weight;
      s.horizontal
        ? (s.width = c ? c * i : a && e.availableWidth, s.height = r)
        : (s.width = i, s.height = c ? c * r : a && e.availableHeight);
    }
    return n;
  }
  function Nl(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
  }
  function Il(t, e) {
    t.top = Math.max(t.top, e.top),
      t.left = Math.max(t.left, e.left),
      t.bottom = Math.max(t.bottom, e.bottom),
      t.right = Math.max(t.right, e.right);
  }
  function Bl(t, e, n, i) {
    const { pos: r, box: o } = n, a = t.maxPadding;
    if (!so(r)) {
      n.size && (t[r] -= n.size);
      const e = i[n.stack] || { size: 0, count: 1 };
      e.size = Math.max(e.size, n.horizontal ? o.height : o.width),
        n.size = e.size / e.count,
        t[r] += n.size;
    }
    o.getPadding && Il(a, o.getPadding());
    const s = Math.max(0, e.outerWidth - Nl(a, t, "left", "right")),
      l = Math.max(0, e.outerHeight - Nl(a, t, "top", "bottom")),
      c = s !== t.w,
      u = l !== t.h;
    return t.w = s,
      t.h = l,
      n.horizontal ? { same: c, other: u } : { same: u, other: c };
  }
  function Vl(t, e) {
    const n = e.maxPadding;
    function i(t) {
      const i = { left: 0, top: 0, right: 0, bottom: 0 };
      return t.forEach((t) => {
        i[t] = Math.max(e[t], n[t]);
      }),
        i;
    }
    return i(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function Ul(t, e, n, i) {
    const r = [];
    let o, a, s, l, c, u;
    for (o = 0, a = t.length, c = 0; o < a; ++o) {
      s = t[o],
        l = s.box,
        l.update(s.width || e.w, s.height || e.h, Vl(s.horizontal, e));
      const { same: a, other: d } = Bl(e, n, s, i);
      c |= a && r.length, u = u || d, l.fullSize || r.push(s);
    }
    return c && Ul(r, e, n, i) || u;
  }
  function Hl(t, e, n, i, r) {
    t.top = n,
      t.left = e,
      t.right = e + i,
      t.bottom = n + r,
      t.width = i,
      t.height = r;
  }
  function Wl(t, e, n, i) {
    const r = n.padding;
    let { x: o, y: a } = e;
    for (const s of t) {
      const t = s.box,
        l = i[s.stack] || { count: 1, placed: 0, weight: 1 },
        c = s.stackWeight / l.weight || 1;
      if (s.horizontal) {
        const i = e.w * c, o = l.size || t.height;
        Eo(l.start) && (a = l.start),
          t.fullSize
            ? Hl(t, r.left, a, n.outerWidth - r.right - r.left, o)
            : Hl(t, e.left + l.placed, a, i, o),
          l.start = a,
          l.placed += i,
          a = t.bottom;
      } else {
        const i = e.h * c, a = l.size || t.width;
        Eo(l.start) && (o = l.start),
          t.fullSize
            ? Hl(t, o, r.top, a, n.outerHeight - r.bottom - r.top)
            : Hl(t, o, e.top + l.placed, a, i),
          l.start = o,
          l.placed += i,
          o = t.right;
      }
    }
    e.x = o, e.y = a;
  }
  var $l = {
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
    update(t, e, n, i) {
      if (!t) return;
      const r = Xa(t.options.layout.padding),
        o = Math.max(e - r.width, 0),
        a = Math.max(n - r.height, 0),
        s = function (t) {
          const e = function (t) {
              const e = [];
              let n, i, r, o, a, s;
              for (n = 0, i = (t || []).length; n < i; ++n) {
                r = t[n],
                  ({ position: o, options: { stack: a, stackWeight: s = 1 } } =
                    r),
                  e.push({
                    index: n,
                    box: r,
                    pos: o,
                    horizontal: r.isHorizontal(),
                    weight: r.weight,
                    stack: a && o + a,
                    stackWeight: s,
                  });
              }
              return e;
            }(t),
            n = Fl(e.filter((t) => t.box.fullSize), !0),
            i = Fl(Al(e, "left"), !0),
            r = Fl(Al(e, "right")),
            o = Fl(Al(e, "top"), !0),
            a = Fl(Al(e, "bottom")),
            s = jl(e, "x"),
            l = jl(e, "y");
          return {
            fullSize: n,
            leftAndTop: i.concat(o),
            rightAndBottom: r.concat(l).concat(a).concat(s),
            chartArea: Al(e, "chartArea"),
            vertical: i.concat(r).concat(l),
            horizontal: o.concat(a).concat(s),
          };
        }(t.boxes),
        l = s.vertical,
        c = s.horizontal;
      po(t.boxes, (t) => {
        "function" === typeof t.beforeLayout && t.beforeLayout();
      });
      const u = l.reduce(
          (t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1,
          0,
        ) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: n,
          padding: r,
          availableWidth: o,
          availableHeight: a,
          vBoxMaxWidth: o / 2 / u,
          hBoxMaxHeight: a / 2,
        }),
        h = Object.assign({}, r);
      Il(h, Xa(i));
      const f = Object.assign({
          maxPadding: h,
          w: o,
          h: a,
          x: r.left,
          y: r.top,
        }, r),
        p = zl(l.concat(c), d);
      Ul(s.fullSize, f, d, p),
        Ul(l, f, d, p),
        Ul(c, f, d, p) && Ul(l, f, d, p),
        function (t) {
          const e = t.maxPadding;
          function n(n) {
            const i = Math.max(e[n] - t[n], 0);
            return t[n] += i, i;
          }
          t.y += n("top"), t.x += n("left"), n("right"), n("bottom");
        }(f),
        Wl(s.leftAndTop, f, d, p),
        f.x += f.w,
        f.y += f.h,
        Wl(s.rightAndBottom, f, d, p),
        t.chartArea = {
          left: f.left,
          top: f.top,
          right: f.left + f.w,
          bottom: f.top + f.h,
          height: f.h,
          width: f.w,
        },
        po(s.chartArea, (e) => {
          const n = e.box;
          Object.assign(n, t.chartArea),
            n.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class ql {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, n) {}
    removeEventListener(t, e, n) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, n, i) {
      return e = Math.max(0, e || t.width),
        n = n || t.height,
        { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) };
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class Yl extends ql {
    acquireContext(t) {
      return t && t.getContext && t.getContext("2d") || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Ql = "$chartjs",
    Kl = {
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
    Xl = (t) => null === t || "" === t;
  const Jl = !!Rs && { passive: !0 };
  function Gl(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, Jl);
  }
  function Zl(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
  }
  function tc(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((t) => {
        let e = !1;
        for (const n of t) {
          e = e || Zl(n.addedNodes, i), e = e && !Zl(n.removedNodes, i);
        }
        e && n();
      });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
  }
  function ec(t, e, n) {
    const i = t.canvas,
      r = new MutationObserver((t) => {
        let e = !1;
        for (const n of t) {
          e = e || Zl(n.removedNodes, i), e = e && !Zl(n.addedNodes, i);
        }
        e && n();
      });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
  }
  const nc = new Map();
  let ic = 0;
  function rc() {
    const t = window.devicePixelRatio;
    t !== ic && (ic = t,
      nc.forEach((e, n) => {
        n.currentDevicePixelRatio !== t && e();
      }));
  }
  function oc(t, e, n) {
    const i = t.canvas, r = i && _s(i);
    if (!r) return;
    const o = oa((t, e) => {
        const i = r.clientWidth;
        n(t, e), i < r.clientWidth && n();
      }, window),
      a = new ResizeObserver((t) => {
        const e = t[0], n = e.contentRect.width, i = e.contentRect.height;
        0 === n && 0 === i || o(n, i);
      });
    return a.observe(r),
      function (t, e) {
        nc.size || window.addEventListener("resize", rc), nc.set(t, e);
      }(t, o),
      a;
  }
  function ac(t, e, n) {
    n && n.disconnect(),
      "resize" === e && function (t) {
        nc.delete(t), nc.size || window.removeEventListener("resize", rc);
      }(t);
  }
  function sc(t, e, n) {
    const i = t.canvas,
      r = oa((e) => {
        null !== t.ctx && n(function (t, e) {
          const n = Kl[t.type] || t.type, { x: i, y: r } = Cs(t, e);
          return {
            type: n,
            chart: e,
            native: t,
            x: void 0 !== i ? i : null,
            y: void 0 !== r ? r : null,
          };
        }(e, t));
      }, t);
    return function (t, e, n) {
      t && t.addEventListener(e, n, Jl);
    }(i, e, r),
      r;
  }
  class lc extends ql {
    acquireContext(t, e) {
      const n = t && t.getContext && t.getContext("2d");
      return n && n.canvas === t
        ? (function (t, e) {
          const n = t.style,
            i = t.getAttribute("height"),
            r = t.getAttribute("width");
          if (
            t[Ql] = {
              initial: {
                height: i,
                width: r,
                style: { display: n.display, height: n.height, width: n.width },
              },
            },
              n.display = n.display || "block",
              n.boxSizing = n.boxSizing || "border-box",
              Xl(r)
          ) {
            const e = Ds(t, "width");
            void 0 !== e && (t.width = e);
          }
          if (Xl(i)) {
            if ("" === t.style.height) t.height = t.width / (e || 2);
            else {
              const e = Ds(t, "height");
              void 0 !== e && (t.height = e);
            }
          }
        }(t, e),
          n)
        : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[Ql]) return !1;
      const n = e[Ql].initial;
      ["height", "width"].forEach((t) => {
        const i = n[t];
        oo(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
      });
      const i = n.style || {};
      return Object.keys(i).forEach((t) => {
        e.style[t] = i[t];
      }),
        e.width = e.width,
        delete e[Ql],
        !0;
    }
    addEventListener(t, e, n) {
      this.removeEventListener(t, e);
      const i = t.$proxies || (t.$proxies = {}),
        r = { attach: tc, detach: ec, resize: oc }[e] || sc;
      i[e] = r(t, e, n);
    }
    removeEventListener(t, e) {
      const n = t.$proxies || (t.$proxies = {}), i = n[e];
      if (!i) return;
      ({ attach: ac, detach: ac, resize: ac }[e] || Gl)(t, e, i), n[e] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, n, i) {
      return Ts(t, e, n, i);
    }
    isAttached(t) {
      const e = t && _s(t);
      return !(!e || !e.isConnected);
    }
  }
  class cc {
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
      return Bo(this.x) && Bo(this.y);
    }
    getProps(t, e) {
      const n = this.$animations;
      if (!e || !n) return this;
      const i = {};
      return t.forEach((t) => {
        i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
      }),
        i;
    }
  }
  function uc(t, e) {
    const n = t.options.ticks,
      i = function (t) {
        const e = t.options.offset,
          n = t._tickSize(),
          i = t._length / n + (e ? 0 : 1),
          r = t._maxLength / n;
        return Math.floor(Math.min(i, r));
      }(t),
      r = Math.min(n.maxTicksLimit || i, i),
      o = n.major.enabled
        ? function (t) {
          const e = [];
          let n, i;
          for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
          return e;
        }(e)
        : [],
      a = o.length,
      s = o[0],
      l = o[a - 1],
      c = [];
    if (a > r) {
      return function (t, e, n, i) {
        let r, o = 0, a = n[0];
        for (i = Math.ceil(i), r = 0; r < t.length; r++) {
          r === a && (e.push(t[r]), o++, a = n[o * i]);
        }
      }(e, c, o, a / r),
        c;
    }
    const u = function (t, e, n) {
      const i = function (t) {
          const e = t.length;
          let n, i;
          if (e < 2) return !1;
          for (i = t[0], n = 1; n < e; ++n) {
            if (t[n] - t[n - 1] !== i) return !1;
          }
          return i;
        }(t),
        r = e.length / n;
      if (!i) return Math.max(r, 1);
      const o = function (t) {
        const e = [], n = Math.sqrt(t);
        let i;
        for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
        return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
      }(i);
      for (let a = 0, s = o.length - 1; a < s; a++) {
        const t = o[a];
        if (t > r) return t;
      }
      return Math.max(r, 1);
    }(o, e, r);
    if (a > 0) {
      let t, n;
      const i = a > 1 ? Math.round((l - s) / (a - 1)) : null;
      for (dc(e, c, u, oo(i) ? 0 : s - i, s), t = 0, n = a - 1; t < n; t++) {
        dc(e, c, u, o[t], o[t + 1]);
      }
      return dc(e, c, u, l, oo(i) ? e.length : l + i), c;
    }
    return dc(e, c, u), c;
  }
  function dc(t, e, n, i, r) {
    const o = uo(i, 0), a = Math.min(uo(r, t.length), t.length);
    let s, l, c, u = 0;
    for (
      n = Math.ceil(n), r && (s = r - i, n = s / Math.floor(s / n)), c = o;
      c < 0;
    ) u++, c = Math.round(o + u * n);
    for (l = Math.max(o, 0); l < a; l++) {
      l === c && (e.push(t[l]), u++, c = Math.round(o + u * n));
    }
  }
  const hc = (t, e, n) => "top" === e || "left" === e ? t[e] + n : t[e] - n,
    fc = (t, e) => Math.min(e || t, t);
  function pc(t, e) {
    const n = [], i = t.length / e, r = t.length;
    let o = 0;
    for (; o < r; o += i) n.push(t[Math.floor(o)]);
    return n;
  }
  function gc(t, e, n) {
    const i = t.ticks.length,
      r = Math.min(e, i - 1),
      o = t._startPixel,
      a = t._endPixel,
      s = 1e-6;
    let l, c = t.getPixelForTick(r);
    if (
      !(n &&
        (l = 1 === i
          ? Math.max(c - o, a - c)
          : 0 === e
          ? (t.getPixelForTick(1) - c) / 2
          : (c - t.getPixelForTick(r - 1)) / 2,
          c += r < e ? l : -l,
          c < o - s || c > a + s))
    ) return c;
  }
  function mc(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function bc(t, e) {
    if (!t.display) return 0;
    const n = Ja(t.font, e), i = Xa(t.padding);
    return (ao(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
  }
  function yc(t, e, n) {
    let i = aa(t);
    return (n && "right" !== e || !n && "right" === e) &&
      (i = ((t) => "left" === t ? "right" : "right" === t ? "left" : t)(i)),
      i;
  }
  class vc extends cc {
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
      let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i } =
        this;
      return t = co(t, Number.POSITIVE_INFINITY),
        e = co(e, Number.NEGATIVE_INFINITY),
        n = co(n, Number.POSITIVE_INFINITY),
        i = co(i, Number.NEGATIVE_INFINITY),
        { min: co(t, n), max: co(e, i), minDefined: lo(t), maxDefined: lo(e) };
    }
    getMinMax(t) {
      let e,
        { min: n, max: i, minDefined: r, maxDefined: o } = this.getUserBounds();
      if (r && o) return { min: n, max: i };
      const a = this.getMatchingVisibleMetas();
      for (let s = 0, l = a.length; s < l; ++s) {
        e = a[s].controller.getMinMax(this, t),
          r || (n = Math.min(n, e.min)),
          o || (i = Math.max(i, e.max));
      }
      return n = o && n > i ? i : n,
        i = r && n > i ? n : i,
        { min: co(n, co(i, n)), max: co(i, co(n, i)) };
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
      fo(this.options.beforeUpdate, [this]);
    }
    update(t, e, n) {
      const { beginAtZero: i, grace: r, ticks: o } = this.options,
        a = o.sampleSize;
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
            const { min: i, max: r } = t,
              o = ho(e, (r - i) / 2),
              a = (t, e) => n && 0 === t ? 0 : t + e;
            return { min: a(i, -Math.abs(o)), max: a(r, o) };
          }(this, r, i),
          this._dataLimitsCached = !0),
        this.beforeBuildTicks(),
        this.ticks = this.buildTicks() || [],
        this.afterBuildTicks();
      const s = a < this.ticks.length;
      this._convertTicksToLabels(s ? pc(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display && (o.autoSkip || "auto" === o.source) &&
        (this.ticks = uc(this, this.ticks),
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
      fo(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      fo(this.options.beforeSetDimensions, [this]);
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
      fo(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()),
        fo(this.options[t], [this]);
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
      fo(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let n, i, r;
      for (n = 0, i = t.length; n < i; n++) {
        r = t[n], r.label = fo(e.callback, [r.value, n, t], this);
      }
    }
    afterTickToLabelConversion() {
      fo(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      fo(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        n = fc(this.ticks.length, t.ticks.maxTicksLimit),
        i = e.minRotation || 0,
        r = e.maxRotation;
      let o, a, s, l = i;
      if (
        !this._isVisible() || !e.display || i >= r || n <= 1 ||
        !this.isHorizontal()
      ) return void (this.labelRotation = i);
      const c = this._getLabelSizes(),
        u = c.widest.width,
        d = c.highest.height,
        h = Xo(this.chart.width - u, 0, this.maxWidth);
      o = t.offset ? this.maxWidth / n : h / (n - 1),
        u + 6 > o &&
        (o = h / (n - (t.offset ? .5 : 1)),
          a = this.maxHeight - mc(t.grid) - e.padding -
            bc(t.title, this.chart.options.font),
          s = Math.sqrt(u * u + d * d),
          l = Ho(
            Math.min(
              Math.asin(Xo((c.highest.height + 6) / o, -1, 1)),
              Math.asin(Xo(a / s, -1, 1)) - Math.asin(Xo(d / s, -1, 1)),
            ),
          ),
          l = Math.max(i, Math.min(r, l))),
        this.labelRotation = l;
    }
    afterCalculateLabelRotation() {
      fo(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      fo(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        { chart: e, options: { ticks: n, title: i, grid: r } } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const o = bc(i, e.options.font);
        if (
          a
            ? (t.width = this.maxWidth, t.height = mc(r) + o)
            : (t.height = this.maxHeight, t.width = mc(r) + o),
            n.display && this.ticks.length
        ) {
          const { first: e, last: i, widest: r, highest: o } = this
              ._getLabelSizes(),
            s = 2 * n.padding,
            l = Uo(this.labelRotation),
            c = Math.cos(l),
            u = Math.sin(l);
          if (a) {
            const e = n.mirror ? 0 : u * r.width + c * o.height;
            t.height = Math.min(this.maxHeight, t.height + e + s);
          } else {
            const e = n.mirror ? 0 : c * r.width + u * o.height;
            t.width = Math.min(this.maxWidth, t.width + e + s);
          }
          this._calculatePadding(e, i, u, c);
        }
      }
      this._handleMargins(),
        a
          ? (this.width = this._length = e.width - this._margins.left -
            this._margins.right,
            this.height = t.height)
          : (this.width = t.width,
            this.height = this._length = e.height - this._margins.top -
              this._margins.bottom);
    }
    _calculatePadding(t, e, n, i) {
      const { ticks: { align: r, padding: o }, position: a } = this.options,
        s = 0 !== this.labelRotation,
        l = "top" !== a && "x" === this.axis;
      if (this.isHorizontal()) {
        const a = this.getPixelForTick(0) - this.left,
          c = this.right - this.getPixelForTick(this.ticks.length - 1);
        let u = 0, d = 0;
        s
          ? l
            ? (u = i * t.width, d = n * e.height)
            : (u = n * t.height, d = i * e.width)
          : "start" === r
          ? d = e.width
          : "end" === r
          ? u = t.width
          : "inner" !== r && (u = t.width / 2, d = e.width / 2),
          this.paddingLeft = Math.max(
            (u - a + o) * this.width / (this.width - a),
            0,
          ),
          this.paddingRight = Math.max(
            (d - c + o) * this.width / (this.width - c),
            0,
          );
      } else {
        let n = e.height / 2, i = t.height / 2;
        "start" === r
          ? (n = 0, i = t.height)
          : "end" === r && (n = e.height, i = 0),
          this.paddingTop = n + o,
          this.paddingBottom = i + o;
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
      fo(this.options.afterFit, [this]);
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
      ) oo(t[e].label) && (t.splice(e, 1), n--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let n = this.ticks;
        e < n.length && (n = pc(n, e)),
          this._labelSizes = t = this._computeLabelSizes(
            n,
            n.length,
            this.options.ticks.maxTicksLimit,
          );
      }
      return t;
    }
    _computeLabelSizes(t, e, n) {
      const { ctx: i, _longestTextCache: r } = this,
        o = [],
        a = [],
        s = Math.floor(e / fc(e, n));
      let l, c, u, d, h, f, p, g, m, b, y, v = 0, x = 0;
      for (l = 0; l < e; l += s) {
        if (
          d = t[l].label,
            h = this._resolveTickFontOptions(l),
            i.font = f = h.string,
            p = r[f] = r[f] || { data: {}, gc: [] },
            g = h.lineHeight,
            m = b = 0,
            oo(d) || ao(d)
        ) {
          if (ao(d)) {
            for (c = 0, u = d.length; c < u; ++c) {
              y = d[c],
                oo(y) || ao(y) || (m = Ta(i, p.data, p.gc, m, y), b += g);
            }
          }
        } else m = Ta(i, p.data, p.gc, m, d), b = g;
        o.push(m), a.push(b), v = Math.max(m, v), x = Math.max(b, x);
      }
      !function (t, e) {
        po(t, (t) => {
          const n = t.gc, i = n.length / 2;
          let r;
          if (i > e) {
            for (r = 0; r < i; ++r) delete t.data[n[r]];
            n.splice(0, i);
          }
        });
      }(r, e);
      const w = o.indexOf(v),
        _ = a.indexOf(x),
        k = (t) => ({ width: o[t] || 0, height: a[t] || 0 });
      return {
        first: k(0),
        last: k(e - 1),
        widest: k(w),
        highest: k(_),
        widths: o,
        heights: a,
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
      return Xo(this._alignToPixels ? Ra(this.chart, e, 0) : e, -32768, 32767);
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
          return Za(t, { tick: n, index: e, type: "tick" });
        }(this.getContext(), t, n));
      }
      return this.$context ||
        (this.$context = Za(this.chart.getContext(), {
          scale: this,
          type: "scale",
        }));
    }
    _tickSize() {
      const t = this.options.ticks,
        e = Uo(this.labelRotation),
        n = Math.abs(Math.cos(e)),
        i = Math.abs(Math.sin(e)),
        r = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        a = r ? r.widest.width + o : 0,
        s = r ? r.highest.height + o : 0;
      return this.isHorizontal()
        ? s * n > a * i ? a / n : s / i
        : s * i < a * n
        ? s / n
        : a / i;
    }
    _isVisible() {
      const t = this.options.display;
      return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        n = this.chart,
        i = this.options,
        { grid: r, position: o, border: a } = i,
        s = r.offset,
        l = this.isHorizontal(),
        c = this.ticks.length + (s ? 1 : 0),
        u = mc(r),
        d = [],
        h = a.setContext(this.getContext()),
        f = h.display ? h.width : 0,
        p = f / 2,
        g = function (t) {
          return Ra(n, t, f);
        };
      let m, b, y, v, x, w, _, k, S, E, M, C;
      if ("top" === o) {
        m = g(this.bottom),
          w = this.bottom - u,
          k = m - p,
          E = g(t.top) + p,
          C = t.bottom;
      } else if ("bottom" === o) {
        m = g(this.top),
          E = t.top,
          C = g(t.bottom) - p,
          w = m + p,
          k = this.top + u;
      } else if ("left" === o) {
        m = g(this.right),
          x = this.right - u,
          _ = m - p,
          S = g(t.left) + p,
          M = t.right;
      } else if ("right" === o) {
        m = g(this.left),
          S = t.left,
          M = g(t.right) - p,
          x = m + p,
          _ = this.left + u;
      } else if ("x" === e) {
        if ("center" === o) m = g((t.top + t.bottom) / 2 + .5);
        else if (so(o)) {
          const t = Object.keys(o)[0], e = o[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        E = t.top, C = t.bottom, w = m + p, k = w + u;
      } else if ("y" === e) {
        if ("center" === o) m = g((t.left + t.right) / 2);
        else if (so(o)) {
          const t = Object.keys(o)[0], e = o[t];
          m = g(this.chart.scales[t].getPixelForValue(e));
        }
        x = m - p, _ = x - u, S = t.left, M = t.right;
      }
      const P = uo(i.ticks.maxTicksLimit, c), T = Math.max(1, Math.ceil(c / P));
      for (b = 0; b < c; b += T) {
        const t = this.getContext(b),
          e = r.setContext(t),
          i = a.setContext(t),
          o = e.lineWidth,
          c = e.color,
          u = i.dash || [],
          h = i.dashOffset,
          f = e.tickWidth,
          p = e.tickColor,
          g = e.tickBorderDash || [],
          m = e.tickBorderDashOffset;
        y = gc(this, b, s),
          void 0 !== y && (v = Ra(n, y, o),
            l
              ? x =
                _ =
                S =
                M =
                  v
              : w =
                k =
                E =
                C =
                  v,
            d.push({
              tx1: x,
              ty1: w,
              tx2: _,
              ty2: k,
              x1: S,
              y1: E,
              x2: M,
              y2: C,
              width: o,
              color: c,
              borderDash: u,
              borderDashOffset: h,
              tickWidth: f,
              tickColor: p,
              tickBorderDash: g,
              tickBorderDashOffset: m,
            }));
      }
      return this._ticksLength = c, this._borderValue = m, d;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        n = this.options,
        { position: i, ticks: r } = n,
        o = this.isHorizontal(),
        a = this.ticks,
        { align: s, crossAlign: l, padding: c, mirror: u } = r,
        d = mc(n.grid),
        h = d + c,
        f = u ? -c : h,
        p = -Uo(this.labelRotation),
        g = [];
      let m, b, y, v, x, w, _, k, S, E, M, C, P = "middle";
      if ("top" === i) w = this.bottom - f, _ = this._getXAxisLabelAlignment();
      else if ("bottom" === i) {
        w = this.top + f, _ = this._getXAxisLabelAlignment();
      } else if ("left" === i) {
        const t = this._getYAxisLabelAlignment(d);
        _ = t.textAlign, x = t.x;
      } else if ("right" === i) {
        const t = this._getYAxisLabelAlignment(d);
        _ = t.textAlign, x = t.x;
      } else if ("x" === e) {
        if ("center" === i) w = (t.top + t.bottom) / 2 + h;
        else if (so(i)) {
          const t = Object.keys(i)[0], e = i[t];
          w = this.chart.scales[t].getPixelForValue(e) + h;
        }
        _ = this._getXAxisLabelAlignment();
      } else if ("y" === e) {
        if ("center" === i) x = (t.left + t.right) / 2 - h;
        else if (so(i)) {
          const t = Object.keys(i)[0], e = i[t];
          x = this.chart.scales[t].getPixelForValue(e);
        }
        _ = this._getYAxisLabelAlignment(d).textAlign;
      }
      "y" === e && ("start" === s ? P = "top" : "end" === s && (P = "bottom"));
      const T = this._getLabelSizes();
      for (m = 0, b = a.length; m < b; ++m) {
        y = a[m], v = y.label;
        const t = r.setContext(this.getContext(m));
        k = this.getPixelForTick(m) + r.labelOffset,
          S = this._resolveTickFontOptions(m),
          E = S.lineHeight,
          M = ao(v) ? v.length : 1;
        const e = M / 2,
          n = t.color,
          s = t.textStrokeColor,
          c = t.textStrokeWidth;
        let d, h = _;
        if (
          o
            ? (x = k,
              "inner" === _ &&
              (h = m === b - 1
                ? this.options.reverse ? "left" : "right"
                : 0 === m
                ? this.options.reverse ? "right" : "left"
                : "center"),
              C = "top" === i
                ? "near" === l || 0 !== p
                  ? -M * E + E / 2
                  : "center" === l
                  ? -T.highest.height / 2 - e * E + E
                  : -T.highest.height + E / 2
                : "near" === l || 0 !== p
                ? E / 2
                : "center" === l
                ? T.highest.height / 2 - e * E
                : T.highest.height - M * E,
              u && (C *= -1),
              0 === p || t.showLabelBackdrop || (x += E / 2 * Math.sin(p)))
            : (w = k, C = (1 - M) * E / 2), t.showLabelBackdrop
        ) {
          const e = Xa(t.backdropPadding), n = T.heights[m], i = T.widths[m];
          let r = C - e.top, o = 0 - e.left;
          switch (P) {
            case "middle":
              r -= n / 2;
              break;
            case "bottom":
              r -= n;
          }
          switch (_) {
            case "center":
              o -= i / 2;
              break;
            case "right":
              o -= i;
              break;
            case "inner":
              m === b - 1 ? o -= i : m > 0 && (o -= i / 2);
          }
          d = {
            left: o,
            top: r,
            width: i + e.width,
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
            textAlign: h,
            textBaseline: P,
            translation: [x, w],
            backdrop: d,
          },
        });
      }
      return g;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: e } = this.options;
      if (-Uo(this.labelRotation)) return "top" === t ? "left" : "right";
      let n = "center";
      return "start" === e.align
        ? n = "left"
        : "end" === e.align
        ? n = "right"
        : "inner" === e.align && (n = "inner"),
        n;
    }
    _getYAxisLabelAlignment(t) {
      const { position: e, ticks: { crossAlign: n, mirror: i, padding: r } } =
          this.options,
        o = t + r,
        a = this._getLabelSizes().widest.width;
      let s, l;
      return "left" === e
        ? i
          ? (l = this.right + r,
            "near" === n
              ? s = "left"
              : "center" === n
              ? (s = "center", l += a / 2)
              : (s = "right", l += a))
          : (l = this.right - o,
            "near" === n
              ? s = "right"
              : "center" === n
              ? (s = "center", l -= a / 2)
              : (s = "left", l = this.left))
        : "right" === e
        ? i
          ? (l = this.left + r,
            "near" === n
              ? s = "right"
              : "center" === n
              ? (s = "center", l -= a / 2)
              : (s = "left", l -= a))
          : (l = this.left + o,
            "near" === n
              ? s = "left"
              : "center" === n
              ? (s = "center", l += a / 2)
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
        top: i,
        width: r,
        height: o,
      } = this;
      e && (t.save(), t.fillStyle = e, t.fillRect(n, i, r, o), t.restore());
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
        i = this._gridLineItems ||
          (this._gridLineItems = this._computeGridLineItems(t));
      let r, o;
      const a = (t, e, i) => {
        i.width && i.color &&
          (n.save(),
            n.lineWidth = i.width,
            n.strokeStyle = i.color,
            n.setLineDash(i.borderDash || []),
            n.lineDashOffset = i.borderDashOffset,
            n.beginPath(),
            n.moveTo(t.x, t.y),
            n.lineTo(e.x, e.y),
            n.stroke(),
            n.restore());
      };
      if (e.display) {
        for (r = 0, o = i.length; r < o; ++r) {
          const t = i[r];
          e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
            e.drawTicks &&
            a({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, {
              color: t.tickColor,
              width: t.tickWidth,
              borderDash: t.tickBorderDash,
              borderDashOffset: t.tickBorderDashOffset,
            });
        }
      }
    }
    drawBorder() {
      const { chart: t, ctx: e, options: { border: n, grid: i } } = this,
        r = n.setContext(this.getContext()),
        o = n.display ? r.width : 0;
      if (!o) return;
      const a = i.setContext(this.getContext(0)).lineWidth,
        s = this._borderValue;
      let l, c, u, d;
      this.isHorizontal()
        ? (l = Ra(t, this.left, o) - o / 2,
          c = Ra(t, this.right, a) + a / 2,
          u = d = s)
        : (u = Ra(t, this.top, o) - o / 2,
          d = Ra(t, this.bottom, a) + a / 2,
          l = c = s),
        e.save(),
        e.lineWidth = r.width,
        e.strokeStyle = r.color,
        e.beginPath(),
        e.moveTo(l, u),
        e.lineTo(c, d),
        e.stroke(),
        e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx, n = this._computeLabelArea();
      n && Fa(e, n);
      const i = this.getLabelItems(t);
      for (const r of i) {
        const t = r.options, n = r.font;
        Ua(e, r.label, 0, r.textOffset, n, t);
      }
      n && za(e);
    }
    drawTitle() {
      const { ctx: t, options: { position: e, title: n, reverse: i } } = this;
      if (!n.display) return;
      const r = Ja(n.font), o = Xa(n.padding), a = n.align;
      let s = r.lineHeight / 2;
      "bottom" === e || "center" === e || so(e)
        ? (s += o.bottom,
          ao(n.text) && (s += r.lineHeight * (n.text.length - 1)))
        : s += o.top;
      const { titleX: l, titleY: c, maxWidth: u, rotation: d } = function (
        t,
        e,
        n,
        i,
      ) {
        const { top: r, left: o, bottom: a, right: s, chart: l } = t,
          { chartArea: c, scales: u } = l;
        let d, h, f, p = 0;
        const g = a - r, m = s - o;
        if (t.isHorizontal()) {
          if (h = sa(i, o, s), so(n)) {
            const t = Object.keys(n)[0], i = n[t];
            f = u[t].getPixelForValue(i) + g - e;
          } else {f = "center" === n
              ? (c.bottom + c.top) / 2 + g - e
              : hc(t, n, e);}
          d = s - o;
        } else {
          if (so(n)) {
            const t = Object.keys(n)[0], i = n[t];
            h = u[t].getPixelForValue(i) - m + e;
          } else {h = "center" === n
              ? (c.left + c.right) / 2 - m + e
              : hc(t, n, e);}
          f = sa(i, a, r), p = "left" === n ? -Lo : Lo;
        }
        return { titleX: h, titleY: f, maxWidth: d, rotation: p };
      }(this, s, e, a);
      Ua(t, n.text, 0, 0, r, {
        color: n.color,
        maxWidth: u,
        rotation: d,
        textAlign: yc(a, e, i),
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
        n = uo(t.grid && t.grid.z, -1),
        i = uo(t.border && t.border.z, 0);
      return this._isVisible() && this.draw === vc.prototype.draw
        ? [{
          z: n,
          draw: (t) => {
            this.drawBackground(), this.drawGrid(t), this.drawTitle();
          },
        }, {
          z: i,
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
        i = [];
      let r, o;
      for (r = 0, o = e.length; r < o; ++r) {
        const o = e[r];
        o[n] !== this.id || t && o.type !== t || i.push(o);
      }
      return i;
    }
    _resolveTickFontOptions(t) {
      return Ja(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class xc {
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
      const i = this.items, r = t.id, o = this.scope + "." + r;
      if (!r) throw new Error("class does not have id: " + t);
      return r in i || (i[r] = t,
        function (t, e, n) {
          const i = vo(Object.create(null), [
            n ? Pa.get(n) : {},
            Pa.get(e),
            t.defaults,
          ]);
          Pa.set(e, i),
            t.defaultRoutes && function (t, e) {
              Object.keys(e).forEach((n) => {
                const i = n.split("."),
                  r = i.pop(),
                  o = [t].concat(i).join("."),
                  a = e[n].split("."),
                  s = a.pop(),
                  l = a.join(".");
                Pa.route(o, r, l, s);
              });
            }(e, t.defaultRoutes);
          t.descriptors && Pa.describe(e, t.descriptors);
        }(t, o, n),
        this.override && Pa.override(t.id, t.overrides)),
        o;
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items, n = t.id, i = this.scope;
      n in e && delete e[n],
        i && n in Pa[i] && (delete Pa[i][n], this.override && delete ka[n]);
    }
  }
  class wc {
    constructor() {
      this.controllers = new xc(cl, "datasets", !0),
        this.elements = new xc(cc, "elements"),
        this.plugins = new xc(Object, "plugins"),
        this.scales = new xc(vc, "scales"),
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
        const i = n || this._getRegistryForType(e);
        n || i.isForType(e) || i === this.plugins && e.id
          ? this._exec(t, i, e)
          : po(e, (e) => {
            const i = n || this._getRegistryForType(e);
            this._exec(t, i, e);
          });
      });
    }
    _exec(t, e, n) {
      const i = So(t);
      fo(n["before" + i], [], n), e[t](n), fo(n["after" + i], [], n);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const n = this._typedRegistries[e];
        if (n.isForType(t)) return n;
      }
      return this.plugins;
    }
    _get(t, e, n) {
      const i = e.get(t);
      if (void 0 === i) {
        throw new Error('"' + t + '" is not a registered ' + n + ".");
      }
      return i;
    }
  }
  var _c = new wc();
  class kc {
    constructor() {
      this._init = [];
    }
    notify(t, e, n, i) {
      "beforeInit" === e &&
        (this._init = this._createDescriptors(t, !0),
          this._notify(this._init, t, "install"));
      const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
        o = this._notify(r, t, e, n);
      return "afterDestroy" === e &&
        (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")),
        o;
    }
    _notify(t, e, n, i) {
      i = i || {};
      for (const r of t) {
        const t = r.plugin;
        if (!1 === fo(t[n], [e, i, r.options], t) && i.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      oo(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = this._cache = this._createDescriptors(t);
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const n = t && t.config,
        i = uo(n.options && n.options.plugins, {}),
        r = function (t) {
          const e = {}, n = [], i = Object.keys(_c.plugins.items);
          for (let o = 0; o < i.length; o++) n.push(_c.getPlugin(i[o]));
          const r = t.plugins || [];
          for (let o = 0; o < r.length; o++) {
            const t = r[o];
            -1 === n.indexOf(t) && (n.push(t), e[t.id] = !0);
          }
          return { plugins: n, localIds: e };
        }(n);
      return !1 !== i || e
        ? function (t, e, n, i) {
          let { plugins: r, localIds: o } = e;
          const a = [], s = t.getContext();
          for (const l of r) {
            const e = l.id, r = Sc(n[e], i);
            null !== r &&
              a.push({
                plugin: l,
                options: Ec(t.config, { plugin: l, local: o[e] }, r, s),
              });
          }
          return a;
        }(t, r, i, e)
        : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        n = this._cache,
        i = (t, e) =>
          t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
      this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start");
    }
  }
  function Sc(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }
  function Ec(t, e, n, i) {
    let { plugin: r, local: o } = e;
    const a = t.pluginScopeKeys(r), s = t.getOptionScopes(n, a);
    return o && r.defaults && s.push(r.defaults),
      t.createResolver(s, i, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      });
  }
  function Mc(t, e) {
    const n = Pa.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis ||
      n.indexAxis || "x";
  }
  function Cc(t) {
    if ("x" === t || "y" === t || "r" === t) return t;
  }
  function Pc(t) {
    if (Cc(t)) return t;
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
      i < e;
      i++
    ) n[i - 1] = arguments[i];
    for (const o of n) {
      const e = o.axis || ("top" === (r = o.position) || "bottom" === r
        ? "x"
        : "left" === r || "right" === r
        ? "y"
        : void 0) ||
        t.length > 1 && Cc(t[0].toLowerCase());
      if (e) {
        return e;
      }
    }
    var r;
    throw new Error(
      `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`,
    );
  }
  function Tc(t, e, n) {
    if (n[e + "AxisID"] === t) return { axis: e };
  }
  function Oc(t, e) {
    const n = ka[t.type] || { scales: {} },
      i = e.scales || {},
      r = Mc(t.type, e),
      o = Object.create(null);
    return Object.keys(i).forEach((e) => {
      const a = i[e];
      if (!so(a)) {
        return console.error(`Invalid scale configuration for scale: ${e}`);
      }
      if (a._proxy) {
        return console.warn(
          `Ignoring resolver passed as options for scale: ${e}`,
        );
      }
      const s = Pc(
          e,
          a,
          function (t, e) {
            if (e.data && e.data.datasets) {
              const n = e.data.datasets.filter(
                (e) => e.xAxisID === t || e.yAxisID === t,
              );
              if (n.length) return Tc(t, "x", n[0]) || Tc(t, "y", n[0]);
            }
            return {};
          }(e, t),
          Pa.scales[a.type],
        ),
        l = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(s, r),
        c = n.scales || {};
      o[e] = xo(Object.create(null), [{ axis: s }, a, c[s], c[l]]);
    }),
      t.data.datasets.forEach((n) => {
        const r = n.type || t.type,
          a = n.indexAxis || Mc(r, e),
          s = (ka[r] || {}).scales || {};
        Object.keys(s).forEach((t) => {
          const e = function (t, e) {
              let n = t;
              return "_index_" === t
                ? n = e
                : "_value_" === t && (n = "x" === e ? "y" : "x"),
                n;
            }(t, a),
            r = n[e + "AxisID"] || e;
          o[r] = o[r] || Object.create(null),
            xo(o[r], [{ axis: e }, i[r], s[t]]);
        });
      }),
      Object.keys(o).forEach((t) => {
        const e = o[t];
        xo(e, [Pa.scales[e.type], Pa.scale]);
      }),
      o;
  }
  function Rc(t) {
    const e = t.options || (t.options = {});
    e.plugins = uo(e.plugins, {}), e.scales = Oc(t, e);
  }
  function Dc(t) {
    return (t = t || {}).datasets = t.datasets || [],
      t.labels = t.labels || [],
      t;
  }
  const Lc = new Map(), Ac = new Set();
  function jc(t, e) {
    let n = Lc.get(t);
    return n || (n = e(), Lc.set(t, n), Ac.add(n)), n;
  }
  const Fc = (t, e, n) => {
    const i = ko(e, n);
    void 0 !== i && t.add(i);
  };
  class zc {
    constructor(t) {
      this._config = function (t) {
        return (t = t || {}).data = Dc(t.data), Rc(t), t;
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
      this._config.data = Dc(t);
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
      this.clearCache(), Rc(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return jc(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, e) {
      return jc(
        `${t}.transition.${e}`,
        () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [
          `datasets.${t}`,
          "",
        ]],
      );
    }
    datasetElementScopeKeys(t, e) {
      return jc(
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
      return jc(
        `${this.type}-plugin-${e}`,
        () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]],
      );
    }
    _cachedScopes(t, e) {
      const n = this._scopeCache;
      let i = n.get(t);
      return i && !e || (i = new Map(), n.set(t, i)), i;
    }
    getOptionScopes(t, e, n) {
      const { options: i, type: r } = this,
        o = this._cachedScopes(t, n),
        a = o.get(e);
      if (a) return a;
      const s = new Set();
      e.forEach((e) => {
        t && (s.add(t), e.forEach((e) => Fc(s, t, e))),
          e.forEach((t) => Fc(s, i, t)),
          e.forEach((t) => Fc(s, ka[r] || {}, t)),
          e.forEach((t) => Fc(s, Pa, t)),
          e.forEach((t) => Fc(s, Sa, t));
      });
      const l = Array.from(s);
      return 0 === l.length && l.push(Object.create(null)),
        Ac.has(e) && o.set(e, l),
        l;
    }
    chartOptionScopes() {
      const { options: t, type: e } = this;
      return [t, ka[e] || {}, Pa.datasets[e] || {}, { type: e }, Pa, Sa];
    }
    resolveNamedOptions(t, e, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : [""];
      const r = { $shared: !0 },
        { resolver: o, subPrefixes: a } = Nc(this._resolverCache, t, i);
      let s = o;
      if (
        function (t, e) {
          const { isScriptable: n, isIndexable: i } = ns(t);
          for (const r of e) {
            const e = n(r), o = i(r), a = (o || e) && t[r];
            if (e && (Mo(a) || Ic(a)) || o && ao(a)) return !0;
          }
          return !1;
        }(o, e)
      ) {
        r.$shared = !1;
        s = es(o, n = Mo(n) ? n() : n, this.createResolver(t, n, a));
      }
      for (const l of e) r[l] = s[l];
      return r;
    }
    createResolver(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : [""],
        i = arguments.length > 3 ? arguments[3] : void 0;
      const { resolver: r } = Nc(this._resolverCache, t, n);
      return so(e) ? es(r, e, void 0, i) : r;
    }
  }
  function Nc(t, e, n) {
    let i = t.get(e);
    i || (i = new Map(), t.set(e, i));
    const r = n.join();
    let o = i.get(r);
    if (!o) {
      o = {
        resolver: ts(e, n),
        subPrefixes: n.filter((t) => !t.toLowerCase().includes("hover")),
      }, i.set(r, o);
    }
    return o;
  }
  const Ic = (t) =>
    so(t) && Object.getOwnPropertyNames(t).some((e) => Mo(t[e]));
  const Bc = ["top", "bottom", "left", "right", "chartArea"];
  function Vc(t, e) {
    return "top" === t || "bottom" === t || -1 === Bc.indexOf(t) && "x" === e;
  }
  function Uc(t, e) {
    return function (n, i) {
      return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
  }
  function Hc(t) {
    const e = t.chart, n = e.options.animation;
    e.notifyPlugins("afterRender"), fo(n && n.onComplete, [t], e);
  }
  function Wc(t) {
    const e = t.chart, n = e.options.animation;
    fo(n && n.onProgress, [t], e);
  }
  function $c(t) {
    return ws() && "string" === typeof t
      ? t = document.getElementById(t)
      : t && t.length && (t = t[0]),
      t && t.canvas && (t = t.canvas),
      t;
  }
  const qc = {},
    Yc = (t) => {
      const e = $c(t);
      return Object.values(qc).filter((t) => t.canvas === e).pop();
    };
  function Qc(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
      const i = +r;
      if (i >= e) {
        const o = t[r];
        delete t[r], (n > 0 || i > e) && (t[i + n] = o);
      }
    }
  }
  function Kc(t, e, n) {
    return t.options.clip ? t[n] : e[n];
  }
  class Xc {
    static defaults = (() => Pa)();
    static instances = (() => qc)();
    static overrides = (() => ka)();
    static registry = (() => _c)();
    static version = "4.4.4";
    static getChart = (() => Yc)();
    static register() {
      _c.add(...arguments), Jc();
    }
    static unregister() {
      _c.remove(...arguments), Jc();
    }
    constructor(t, e) {
      const n = this.config = new zc(e), i = $c(t), r = Yc(i);
      if (r) {
        throw new Error(
          "Canvas is already in use. Chart with ID '" + r.id +
            "' must be destroyed before the canvas with ID '" + r.canvas.id +
            "' can be reused.",
        );
      }
      const o = n.createResolver(n.chartOptionScopes(), this.getContext());
      this.platform = new (n.platform || function (t) {
        return !ws() ||
            "undefined" !== typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas
          ? Yl
          : lc;
      }(i))(), this.platform.updateConfig(n);
      const a = this.platform.acquireContext(i, o.aspectRatio),
        s = a && a.canvas,
        l = s && s.height,
        c = s && s.width;
      this.id = ro(),
        this.ctx = a,
        this.canvas = s,
        this.width = c,
        this.height = l,
        this._options = o,
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
        this._plugins = new kc(),
        this.$proxies = {},
        this._hiddenIndices = {},
        this.attached = !1,
        this._animationsDisabled = void 0,
        this.$context = void 0,
        this._doResize = function (t, e) {
          let n;
          return function () {
            for (
              var i = arguments.length, r = new Array(i), o = 0;
              o < i;
              o++
            ) r[o] = arguments[o];
            return e
              ? (clearTimeout(n), n = setTimeout(t, e, r))
              : t.apply(this, r),
              e;
          };
        }((t) => this.update(t), o.resizeDelay || 0),
        this._dataChanges = [],
        qc[this.id] = this,
        a && s
          ? (Ys.listen(this, "complete", Hc),
            Ys.listen(this, "progress", Wc),
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
        height: i,
        _aspectRatio: r,
      } = this;
      return oo(t) ? e && r ? r : i ? n / i : null : t;
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
      return _c;
    }
    _initialize() {
      return this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : Os(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this;
    }
    clear() {
      return Da(this.canvas, this.ctx), this;
    }
    stop() {
      return Ys.stop(this), this;
    }
    resize(t, e) {
      Ys.running(this)
        ? this._resizeBeforeDraw = { width: t, height: e }
        : this._resize(t, e);
    }
    _resize(t, e) {
      const n = this.options,
        i = this.canvas,
        r = n.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(i, t, e, r),
        a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        s = this.width ? "resize" : "attach";
      this.width = o.width,
        this.height = o.height,
        this._aspectRatio = this.aspectRatio,
        Os(this, a, !0) &&
        (this.notifyPlugins("resize", { size: o }),
          fo(n.onResize, [this, o], this),
          this.attached && this._doResize(s) && this.render());
    }
    ensureScalesHaveIDs() {
      po(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        n = this.scales,
        i = Object.keys(n).reduce((t, e) => (t[e] = !1, t), {});
      let r = [];
      e && (r = r.concat(
        Object.keys(e).map((t) => {
          const n = e[t], i = Pc(t, n), r = "r" === i, o = "x" === i;
          return {
            options: n,
            dposition: r ? "chartArea" : o ? "bottom" : "left",
            dtype: r ? "radialLinear" : o ? "category" : "linear",
          };
        }),
      )),
        po(r, (e) => {
          const r = e.options, o = r.id, a = Pc(o, r), s = uo(r.type, e.dtype);
          void 0 !== r.position && Vc(r.position, a) === Vc(e.dposition) ||
          (r.position = e.dposition), i[o] = !0;
          let l = null;
          if (o in n && n[o].type === s) l = n[o];
          else {l = new (_c.getScale(s))({
              id: o,
              type: s,
              ctx: this.ctx,
              chart: this,
            }),
              n[l.id] = l;}
          l.init(r, t);
        }),
        po(i, (t, e) => {
          t || delete n[e];
        }),
        po(n, (t) => {
          $l.configure(this, t, t.options), $l.addBox(this, t);
        });
    }
    _updateMetasets() {
      const t = this._metasets, e = this.data.datasets.length, n = t.length;
      if (t.sort((t, e) => t.index - e.index), n > e) {
        for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
        t.splice(e, n - e);
      }
      this._sortedMetasets = t.slice(0).sort(Uc("order", "index"));
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
      let n, i;
      for (
        this._removeUnreferencedMetasets(), n = 0, i = e.length;
        n < i;
        n++
      ) {
        const i = e[n];
        let r = this.getDatasetMeta(n);
        const o = i.type || this.config.type;
        if (
          r.type && r.type !== o &&
          (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)),
            r.type = o,
            r.indexAxis = i.indexAxis || Mc(o, this.options),
            r.order = i.order || 0,
            r.index = n,
            r.label = "" + i.label,
            r.visible = this.isDatasetVisible(n),
            r.controller
        ) r.controller.updateIndex(n), r.controller.linkScales();
        else {
          const e = _c.getController(o),
            { datasetElementType: i, dataElementType: a } = Pa.datasets[o];
          Object.assign(e, {
            dataElementType: _c.getElement(a),
            datasetElementType: i && _c.getElement(i),
          }),
            r.controller = new e(this, n),
            t.push(r.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      po(this.data.datasets, (t, e) => {
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
        i = this._animationsDisabled = !n.animation;
      if (
        this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 })
      ) return;
      const r = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let l = 0, c = this.data.datasets.length; l < c; l++) {
        const { controller: t } = this.getDatasetMeta(l),
          e = !i && -1 === r.indexOf(t);
        t.buildOrUpdateElements(e), o = Math.max(+t.getMaxOverflow(), o);
      }
      o = this._minPadding = n.layout.autoPadding ? o : 0,
        this._updateLayout(o),
        i || po(r, (t) => {
          t.reset();
        }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(Uc("z", "_idx"));
      const { _active: a, _lastEvent: s } = this;
      s
        ? this._eventHandler(s, !0)
        : a.length && this._updateHoverStyles(a, a, !0), this.render();
    }
    _updateScales() {
      po(this.scales, (t) => {
        $l.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      Co(e, n) && !!this._responsiveListeners === t.responsive ||
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: n, start: i, count: r } of e) {
        Qc(t, i, "_removeElements" === n ? -r : r);
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
        i = n(0);
      for (let r = 1; r < e; r++) if (!Co(i, n(r))) return;
      return Array.from(i).map((t) => t.split(",")).map(
        (t) => ({ method: t[1], start: +t[2], count: +t[3] }),
      );
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
      $l.update(this, this.width, this.height, t);
      const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
      this._layers = [],
        po(this.boxes, (t) => {
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
          this._updateDataset(e, Mo(t) ? t({ datasetIndex: e }) : t);
        }
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, e) {
      const n = this.getDatasetMeta(t),
        i = { meta: n, index: t, mode: e, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetUpdate", i) &&
        (n.controller._update(e),
          i.cancelable = !1,
          this.notifyPlugins("afterDatasetUpdate", i));
    }
    render() {
      !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
        (Ys.has(this)
          ? this.attached && !Ys.running(this) && Ys.start(this)
          : (this.draw(), Hc({ chart: this })));
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
      let i, r;
      for (i = 0, r = e.length; i < r; ++i) {
        const r = e[i];
        t && !r.visible || n.push(r);
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
        i = !n.disabled,
        r = function (t, e) {
          const { xScale: n, yScale: i } = t;
          return n && i
            ? {
              left: Kc(n, e, "left"),
              right: Kc(n, e, "right"),
              top: Kc(i, e, "top"),
              bottom: Kc(i, e, "bottom"),
            }
            : e;
        }(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
        (i &&
          Fa(e, {
            left: !1 === n.left ? 0 : r.left - n.left,
            right: !1 === n.right ? this.width : r.right + n.right,
            top: !1 === n.top ? 0 : r.top - n.top,
            bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom,
          }),
          t.controller.draw(),
          i && za(e),
          o.cancelable = !1,
          this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return ja(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, n, i) {
      const r = Dl.modes[e];
      return "function" === typeof r ? r(this, t, n, i) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t], n = this._metasets;
      let i = n.filter((t) => t && t._dataset === e).pop();
      return i ||
        (i = {
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
          n.push(i)),
        i;
    }
    getContext() {
      return this.$context ||
        (this.$context = Za(null, { chart: this, type: "chart" }));
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
      const i = n ? "show" : "hide",
        r = this.getDatasetMeta(t),
        o = r.controller._resolveAnimations(void 0, i);
      Eo(e)
        ? (r.data[e].hidden = !n, this.update())
        : (this.setDatasetVisibility(t, n),
          o.update(r, { visible: n }),
          this.update((e) => e.datasetIndex === t ? i : void 0));
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
        this.stop(), Ys.remove(this), t = 0, e = this.data.datasets.length;
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
          Da(t, e),
          this.platform.releaseContext(e),
          this.canvas = null,
          this.ctx = null),
        delete qc[this.id],
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
        n = (n, i) => {
          e.addEventListener(this, n, i), t[n] = i;
        },
        i = (t, e, n) => {
          t.offsetX = e, t.offsetY = n, this._eventHandler(t);
        };
      po(this.options.events, (t) => n(t, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        n = (n, i) => {
          e.addEventListener(this, n, i), t[n] = i;
        },
        i = (n, i) => {
          t[n] && (e.removeEventListener(this, n, i), delete t[n]);
        },
        r = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let o;
      const a = () => {
        i("attach", a),
          this.attached = !0,
          this.resize(),
          n("resize", r),
          n("detach", o);
      };
      o = () => {
        this.attached = !1,
          i("resize", r),
          this._stop(),
          this._resize(0, 0),
          n("attach", a);
      }, e.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      po(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        this._listeners = {},
        po(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        this._responsiveListeners = void 0;
    }
    updateHoverStyle(t, e, n) {
      const i = n ? "set" : "remove";
      let r, o, a, s;
      for (
        "dataset" === e &&
        (r = this.getDatasetMeta(t[0].datasetIndex),
          r.controller["_" + i + "DatasetHoverStyle"]()),
          a = 0,
          s = t.length;
        a < s;
        ++a
      ) {
        o = t[a];
        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
        e && e[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        n = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const i = this.getDatasetMeta(e);
          if (!i) throw new Error("No dataset found at index " + e);
          return { datasetIndex: e, element: i.data[n], index: n };
        });
      !go(n, e) &&
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
      const i = this.options.hover,
        r = (t, e) =>
          t.filter(
            (t) =>
              !e.some((e) =>
                t.datasetIndex === e.datasetIndex && t.index === e.index
              ),
          ),
        o = r(e, t),
        a = n ? t : r(t, e);
      o.length && this.updateHoverStyle(o, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
    }
    _eventHandler(t, e) {
      const n = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = (e) =>
          (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins("beforeEvent", n, i)) return;
      const r = this._handleEvent(t, e, n.inChartArea);
      return n.cancelable = !1,
        this.notifyPlugins("afterEvent", n, i),
        (r || n.changed) && this.render(),
        this;
    }
    _handleEvent(t, e, n) {
      const { _active: i = [], options: r } = this,
        o = e,
        a = this._getActiveElements(t, i, n, o),
        s = function (t) {
          return "mouseup" === t.type || "click" === t.type ||
            "contextmenu" === t.type;
        }(t),
        l = function (t, e, n, i) {
          return n && "mouseout" !== t.type ? i ? e : t : null;
        }(t, this._lastEvent, n, s);
      n &&
        (this._lastEvent = null,
          fo(r.onHover, [t, a, this], this),
          s && fo(r.onClick, [t, a, this], this));
      const c = !go(a, i);
      return (c || e) && (this._active = a, this._updateHoverStyles(a, i, e)),
        this._lastEvent = l,
        c;
    }
    _getActiveElements(t, e, n, i) {
      if ("mouseout" === t.type) return [];
      if (!n) return e;
      const r = this.options.hover;
      return this.getElementsAtEventForMode(t, r.mode, r, i);
    }
  }
  function Jc() {
    return po(Xc.instances, (t) => t._plugins.invalidate());
  }
  function Gc(t, e, n, i) {
    const r = Ya(t.options.borderRadius, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd",
    ]);
    const o = (n - e) / 2,
      a = Math.min(o, i * e / 2),
      s = (t) => {
        const e = (n - Math.min(o, t)) * i / 2;
        return Xo(t, 0, Math.min(o, e));
      };
    return {
      outerStart: s(r.outerStart),
      outerEnd: s(r.outerEnd),
      innerStart: Xo(r.innerStart, 0, a),
      innerEnd: Xo(r.innerEnd, 0, a),
    };
  }
  function Zc(t, e, n, i) {
    return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
  }
  function tu(t, e, n, i, r, o) {
    const { x: a, y: s, startAngle: l, pixelMargin: c, innerRadius: u } = e,
      d = Math.max(e.outerRadius + i + n - c, 0),
      h = u > 0 ? u + i + n + c : 0;
    let f = 0;
    const p = r - l;
    if (i) {
      const t = ((u > 0 ? u - i : 0) + (d > 0 ? d - i : 0)) / 2;
      f = (p - (0 !== t ? p * t / (t + i) : p)) / 2;
    }
    const g = (p - Math.max(.001, p * d - n / Po) / d) / 2,
      m = l + g + f,
      b = r - g - f,
      { outerStart: y, outerEnd: v, innerStart: x, innerEnd: w } = Gc(
        e,
        h,
        d,
        b - m,
      ),
      _ = d - y,
      k = d - v,
      S = m + y / _,
      E = b - v / k,
      M = h + x,
      C = h + w,
      P = m + x / M,
      T = b - w / C;
    if (t.beginPath(), o) {
      const e = (S + E) / 2;
      if (t.arc(a, s, d, S, e), t.arc(a, s, d, e, E), v > 0) {
        const e = Zc(k, E, a, s);
        t.arc(e.x, e.y, v, E, b + Lo);
      }
      const n = Zc(C, b, a, s);
      if (t.lineTo(n.x, n.y), w > 0) {
        const e = Zc(C, T, a, s);
        t.arc(e.x, e.y, w, b + Lo, T + Math.PI);
      }
      const i = (b - w / h + (m + x / h)) / 2;
      if (
        t.arc(a, s, h, b - w / h, i, !0),
          t.arc(a, s, h, i, m + x / h, !0),
          x > 0
      ) {
        const e = Zc(M, P, a, s);
        t.arc(e.x, e.y, x, P + Math.PI, m - Lo);
      }
      const r = Zc(_, m, a, s);
      if (t.lineTo(r.x, r.y), y > 0) {
        const e = Zc(_, S, a, s);
        t.arc(e.x, e.y, y, m - Lo, S);
      }
    } else {
      t.moveTo(a, s);
      const e = Math.cos(S) * d + a, n = Math.sin(S) * d + s;
      t.lineTo(e, n);
      const i = Math.cos(E) * d + a, r = Math.sin(E) * d + s;
      t.lineTo(i, r);
    }
    t.closePath();
  }
  function eu(t, e, n, i, r) {
    const { fullCircles: o, startAngle: a, circumference: s, options: l } = e,
      {
        borderWidth: c,
        borderJoinStyle: u,
        borderDash: d,
        borderDashOffset: h,
      } = l,
      f = "inner" === l.borderAlign;
    if (!c) return;
    t.setLineDash(d || []),
      t.lineDashOffset = h,
      f
        ? (t.lineWidth = 2 * c, t.lineJoin = u || "round")
        : (t.lineWidth = c, t.lineJoin = u || "bevel");
    let p = e.endAngle;
    if (o) {
      tu(t, e, n, i, p, r);
      for (let e = 0; e < o; ++e) t.stroke();
      isNaN(s) || (p = a + (s % To || To));
    }
    f && function (t, e, n) {
      const {
        startAngle: i,
        pixelMargin: r,
        x: o,
        y: a,
        outerRadius: s,
        innerRadius: l,
      } = e;
      let c = r / s;
      t.beginPath(),
        t.arc(o, a, s, i - c, n + c),
        l > r
          ? (c = r / l, t.arc(o, a, l, n + c, i - c, !0))
          : t.arc(o, a, r, n + Lo, i - Lo),
        t.closePath(),
        t.clip();
    }(t, e, p), o || (tu(t, e, n, i, p, r), t.stroke());
  }
  function nu(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
    t.lineCap = uo(n.borderCapStyle, e.borderCapStyle),
      t.setLineDash(uo(n.borderDash, e.borderDash)),
      t.lineDashOffset = uo(n.borderDashOffset, e.borderDashOffset),
      t.lineJoin = uo(n.borderJoinStyle, e.borderJoinStyle),
      t.lineWidth = uo(n.borderWidth, e.borderWidth),
      t.strokeStyle = uo(n.borderColor, e.borderColor);
  }
  function iu(t, e, n) {
    t.lineTo(n.x, n.y);
  }
  function ru(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i = t.length,
      { start: r = 0, end: o = i - 1 } = n,
      { start: a, end: s } = e,
      l = Math.max(r, a),
      c = Math.min(o, s),
      u = r < a && o < a || r > s && o > s;
    return {
      count: i,
      start: l,
      loop: e.loop,
      ilen: c < l && !u ? i + c - l : c - l,
    };
  }
  function ou(t, e, n, i) {
    const { points: r, options: o } = e,
      { count: a, start: s, loop: l, ilen: c } = ru(r, n, i),
      u = function (t) {
        return t.stepped
          ? Na
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? Ia
          : iu;
      }(o);
    let d, h, f, { move: p = !0, reverse: g } = i || {};
    for (d = 0; d <= c; ++d) {
      h = r[(s + (g ? c - d : d)) % a],
        h.skip ||
        (p ? (t.moveTo(h.x, h.y), p = !1) : u(t, f, h, g, o.stepped), f = h);
    }
    return l && (h = r[(s + (g ? c : 0)) % a], u(t, f, h, g, o.stepped)), !!l;
  }
  function au(t, e, n, i) {
    const r = e.points,
      { count: o, start: a, ilen: s } = ru(r, n, i),
      { move: l = !0, reverse: c } = i || {};
    let u, d, h, f, p, g, m = 0, b = 0;
    const y = (t) => (a + (c ? s - t : t)) % o,
      v = () => {
        f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
      };
    for (l && (d = r[y(0)], t.moveTo(d.x, d.y)), u = 0; u <= s; ++u) {
      if (d = r[y(u)], d.skip) continue;
      const e = d.x, n = d.y, i = 0 | e;
      i === h
        ? (n < f ? f = n : n > p && (p = n), m = (b * m + e) / ++b)
        : (v(), t.lineTo(e, n), h = i, b = 0, f = p = n), g = n;
    }
    v();
  }
  function su(t) {
    const e = t.options, n = e.borderDash && e.borderDash.length;
    return !t._decimated && !t._loop && !e.tension &&
        "monotone" !== e.cubicInterpolationMode && !e.stepped && !n
      ? au
      : ou;
  }
  const lu = "function" === typeof Path2D;
  function cu(t, e, n, i) {
    lu && !e.options.segment
      ? function (t, e, n, i) {
        let r = e._path;
        r || (r = e._path = new Path2D(), e.path(r, n, i) && r.closePath()),
          nu(t, e.options),
          t.stroke(r);
      }(t, e, n, i)
      : function (t, e, n, i) {
        const { segments: r, options: o } = e, a = su(e);
        for (const s of r) {
          nu(t, o, s.style),
            t.beginPath(),
            a(t, e, s, { start: n, end: n + i - 1 }) && t.closePath(),
            t.stroke();
        }
      }(t, e, n, i);
  }
  class uu extends cc {
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
        const i = n.spanGaps ? this._loop : this._fullLoop;
        xs(this._points, n, t, i, e), this._pointsUpdated = !0;
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
        const n = t.points, i = t.options.spanGaps, r = n.length;
        if (!r) return [];
        const o = !!t._loop,
          { start: a, end: s } = function (t, e, n, i) {
            let r = 0, o = e - 1;
            if (n && !i) { for (; r < e && !t[r].skip;) r++; }
            for (; r < e && t[r].skip;) r++;
            for (r %= e, n && (o += r); o > r && t[o % e].skip;) o--;
            return o %= e, { start: r, end: o };
          }(n, r, o, i);
        return Hs(
          t,
          !0 === i ? [{ start: a, end: s, loop: o }] : function (t, e, n, i) {
            const r = t.length, o = [];
            let a, s = e, l = t[e];
            for (a = e + 1; a <= n; ++a) {
              const n = t[a % r];
              n.skip || n.stop
                ? l.skip ||
                  (i = !1,
                    o.push({ start: e % r, end: (a - 1) % r, loop: i }),
                    e = s = n.stop ? a : null)
                : (s = a, l.skip && (e = a)), l = n;
            }
            return null !== s && o.push({ start: e % r, end: s % r, loop: i }),
              o;
          }(n, a, s < a ? s + r : s, !!t._fullLoop && 0 === a && s === r - 1),
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
        i = t[e],
        r = this.points,
        o = Us(this, { property: e, start: i, end: i });
      if (!o.length) return;
      const a = [],
        s = function (t) {
          return t.stepped
            ? As
            : t.tension || "monotone" === t.cubicInterpolationMode
            ? js
            : Ls;
        }(n);
      let l, c;
      for (l = 0, c = o.length; l < c; ++l) {
        const { start: c, end: u } = o[l], d = r[c], h = r[u];
        if (d === h) {
          a.push(d);
          continue;
        }
        const f = s(d, h, Math.abs((i - d[e]) / (h[e] - d[e])), n.stepped);
        f[e] = t[e], a.push(f);
      }
      return 1 === a.length ? a[0] : a;
    }
    pathSegment(t, e, n) {
      return su(this)(t, this, e, n);
    }
    path(t, e, n) {
      const i = this.segments, r = su(this);
      let o = this._loop;
      e = e || 0, n = n || this.points.length - e;
      for (const a of i) o &= r(t, this, a, { start: e, end: e + n - 1 });
      return !!o;
    }
    draw(t, e, n, i) {
      const r = this.options || {};
      (this.points || []).length && r.borderWidth &&
      (t.save(), cu(t, this, n, i), t.restore()),
        this.animated && (this._pointsUpdated = !1, this._path = void 0);
    }
  }
  function du(t, e, n, i) {
    const r = t.options, { [n]: o } = t.getProps([n], i);
    return Math.abs(e - o) < r.radius + r.hitRadius;
  }
  function hu(t, e) {
    const { x: n, y: i, base: r, width: o, height: a } = t.getProps([
      "x",
      "y",
      "base",
      "width",
      "height",
    ], e);
    let s, l, c, u, d;
    return t.horizontal
      ? (d = a / 2,
        s = Math.min(n, r),
        l = Math.max(n, r),
        c = i - d,
        u = i + d)
      : (d = o / 2,
        s = n - d,
        l = n + d,
        c = Math.min(i, r),
        u = Math.max(i, r)),
      { left: s, top: c, right: l, bottom: u };
  }
  function fu(t, e, n, i) {
    return t ? 0 : Xo(e, n, i);
  }
  function pu(t) {
    const e = hu(t),
      n = e.right - e.left,
      i = e.bottom - e.top,
      r = function (t, e, n) {
        const i = t.options.borderWidth, r = t.borderSkipped, o = Qa(i);
        return {
          t: fu(r.top, o.top, 0, n),
          r: fu(r.right, o.right, 0, e),
          b: fu(r.bottom, o.bottom, 0, n),
          l: fu(r.left, o.left, 0, e),
        };
      }(t, n / 2, i / 2),
      o = function (t, e, n) {
        const { enableBorderRadius: i } = t.getProps(["enableBorderRadius"]),
          r = t.options.borderRadius,
          o = Ka(r),
          a = Math.min(e, n),
          s = t.borderSkipped,
          l = i || so(r);
        return {
          topLeft: fu(!l || s.top || s.left, o.topLeft, 0, a),
          topRight: fu(!l || s.top || s.right, o.topRight, 0, a),
          bottomLeft: fu(!l || s.bottom || s.left, o.bottomLeft, 0, a),
          bottomRight: fu(!l || s.bottom || s.right, o.bottomRight, 0, a),
        };
      }(t, n / 2, i / 2);
    return {
      outer: { x: e.left, y: e.top, w: n, h: i, radius: o },
      inner: {
        x: e.left + r.l,
        y: e.top + r.t,
        w: n - r.l - r.r,
        h: i - r.t - r.b,
        radius: {
          topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
          topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
          bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
          bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r)),
        },
      },
    };
  }
  function gu(t, e, n, i) {
    const r = null === e, o = null === n, a = t && !(r && o) && hu(t, i);
    return a && (r || Jo(e, a.left, a.right)) && (o || Jo(n, a.top, a.bottom));
  }
  function mu(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function bu(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i = t.x !== n.x ? -e : 0,
      r = t.y !== n.y ? -e : 0,
      o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
      a = (t.y + t.h !== n.y + n.h ? e : 0) - r;
    return { x: t.x + i, y: t.y + r, w: t.w + o, h: t.h + a, radius: t.radius };
  }
  var yu = Object.freeze({
    __proto__: null,
    ArcElement: class extends cc {
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
        const i = this.getProps(["x", "y"], n),
          { angle: r, distance: o } = $o(i, { x: t, y: e }),
          {
            startAngle: a,
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
          d = (this.options.spacing + this.options.borderWidth) / 2,
          h = uo(u, s - a),
          f = Ko(r, a, s) && a !== s,
          p = h >= To || f,
          g = Jo(o, l + d, c + d);
        return p && g;
      }
      getCenterPoint(t) {
        const {
            x: e,
            y: n,
            startAngle: i,
            endAngle: r,
            innerRadius: o,
            outerRadius: a,
          } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ], t),
          { offset: s, spacing: l } = this.options,
          c = (i + r) / 2,
          u = (o + a + l + s) / 2;
        return { x: e + Math.cos(c) * u, y: n + Math.sin(c) * u };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        const { options: e, circumference: n } = this,
          i = (e.offset || 0) / 4,
          r = (e.spacing || 0) / 2,
          o = e.circular;
        if (
          this.pixelMargin = "inner" === e.borderAlign ? .33 : 0,
            this.fullCircles = n > To ? Math.floor(n / To) : 0,
            0 === n || this.innerRadius < 0 || this.outerRadius < 0
        ) return;
        t.save();
        const a = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(a) * i, Math.sin(a) * i);
        const s = i * (1 - Math.sin(Math.min(Po, n || 0)));
        t.fillStyle = e.backgroundColor,
          t.strokeStyle = e.borderColor,
          function (t, e, n, i, r) {
            const { fullCircles: o, startAngle: a, circumference: s } = e;
            let l = e.endAngle;
            if (o) {
              tu(t, e, n, i, l, r);
              for (let e = 0; e < o; ++e) t.fill();
              isNaN(s) || (l = a + (s % To || To));
            }
            tu(t, e, n, i, l, r), t.fill();
          }(t, this, s, r, o),
          eu(t, this, s, r, o),
          t.restore();
      }
    },
    BarElement: class extends cc {
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
            options: { borderColor: n, backgroundColor: i },
          } = this,
          { inner: r, outer: o } = pu(this),
          a = (s = o.radius).topLeft || s.topRight || s.bottomLeft ||
              s.bottomRight
            ? Ha
            : mu;
        var s;
        t.save(),
          o.w === r.w && o.h === r.h ||
          (t.beginPath(),
            a(t, bu(o, e, r)),
            t.clip(),
            a(t, bu(r, -e, o)),
            t.fillStyle = n,
            t.fill("evenodd")),
          t.beginPath(),
          a(t, bu(r, e)),
          t.fillStyle = i,
          t.fill(),
          t.restore();
      }
      inRange(t, e, n) {
        return gu(this, t, e, n);
      }
      inXRange(t, e) {
        return gu(this, t, null, e);
      }
      inYRange(t, e) {
        return gu(this, null, t, e);
      }
      getCenterPoint(t) {
        const { x: e, y: n, base: i, horizontal: r } = this.getProps([
          "x",
          "y",
          "base",
          "horizontal",
        ], t);
        return { x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2 };
      }
      getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    },
    LineElement: uu,
    PointElement: class extends cc {
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
        const i = this.options, { x: r, y: o } = this.getProps(["x", "y"], n);
        return Math.pow(t - r, 2) + Math.pow(e - o, 2) <
          Math.pow(i.hitRadius + i.radius, 2);
      }
      inXRange(t, e) {
        return du(this, t, "x", e);
      }
      inYRange(t, e) {
        return du(this, t, "y", e);
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
        this.skip || n.radius < .1 || !ja(this, e, this.size(n) / 2) ||
          (t.strokeStyle = n.borderColor,
            t.lineWidth = n.borderWidth,
            t.fillStyle = n.backgroundColor,
            La(t, n, this.x, this.y));
      }
      getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
      }
    },
  });
  const vu = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    xu = vu.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function wu(t) {
    return vu[t % vu.length];
  }
  function _u(t) {
    return xu[t % xu.length];
  }
  function ku(t) {
    let e = 0;
    return (n, i) => {
      const r = t.getDatasetMeta(i).controller;
      r instanceof vl
        ? e = function (t, e) {
          return t.backgroundColor = t.data.map(() => wu(e++)), e;
        }(n, e)
        : r instanceof wl
        ? e = function (t, e) {
          return t.backgroundColor = t.data.map(() => _u(e++)), e;
        }(n, e)
        : r && (e = function (t, e) {
          return t.borderColor = wu(e), t.backgroundColor = _u(e), ++e;
        }(n, e));
    };
  }
  function Su(t) {
    let e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
  }
  var Eu = {
    id: "colors",
    defaults: { enabled: !0, forceOverride: !1 },
    beforeLayout(t, e, n) {
      if (!n.enabled) return;
      const { data: { datasets: i }, options: r } = t.config,
        { elements: o } = r;
      if (
        !n.forceOverride &&
        (Su(i) || (a = r) && (a.borderColor || a.backgroundColor) || o && Su(o))
      ) return;
      var a;
      const s = ku(t);
      i.forEach(s);
    },
  };
  function Mu(t) {
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
  function Cu(t) {
    t.data.datasets.forEach((t) => {
      Mu(t);
    });
  }
  var Pu = {
    id: "decimation",
    defaults: { algorithm: "min-max", enabled: !1 },
    beforeElementsUpdate: (t, e, n) => {
      if (!n.enabled) return void Cu(t);
      const i = t.width;
      t.data.datasets.forEach((e, r) => {
        const { _data: o, indexAxis: a } = e,
          s = t.getDatasetMeta(r),
          l = o || e.data;
        if ("y" === Ga([a, t.options.indexAxis])) return;
        if (!s.controller.supportsDecimation) return;
        const c = t.scales[s.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;
        let { start: u, count: d } = function (t, e) {
          const n = e.length;
          let i, r = 0;
          const { iScale: o } = t,
            { min: a, max: s, minDefined: l, maxDefined: c } = o
              .getUserBounds();
          return l && (r = Xo(Zo(e, o.axis, a).lo, 0, n - 1)),
            i = c ? Xo(Zo(e, o.axis, s).hi + 1, r, n) - r : n - r,
            { start: r, count: i };
        }(s, l);
        if (d <= (n.threshold || 4 * i)) return void Mu(e);
        let h;
        switch (
          oo(o) &&
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
            h = function (t, e, n, i, r) {
              const o = r.samples || i;
              if (o >= n) return t.slice(e, e + n);
              const a = [], s = (n - 2) / (o - 2);
              let l = 0;
              const c = e + n - 1;
              let u, d, h, f, p, g = e;
              for (a[l++] = t[g], u = 0; u < o - 2; u++) {
                let i, r = 0, o = 0;
                const c = Math.floor((u + 1) * s) + 1 + e,
                  m = Math.min(Math.floor((u + 2) * s) + 1, n) + e,
                  b = m - c;
                for (i = c; i < m; i++) r += t[i].x, o += t[i].y;
                r /= b, o /= b;
                const y = Math.floor(u * s) + 1 + e,
                  v = Math.min(Math.floor((u + 1) * s) + 1, n) + e,
                  { x: x, y: w } = t[g];
                for (h = f = -1, i = y; i < v; i++) {
                  f = .5 *
                    Math.abs((x - r) * (t[i].y - w) - (x - t[i].x) * (o - w)),
                    f > h && (h = f, d = t[i], p = i);
                }
                a[l++] = d, g = p;
              }
              return a[l++] = t[c], a;
            }(l, u, d, i, n);
            break;
          case "min-max":
            h = function (t, e, n, i) {
              let r, o, a, s, l, c, u, d, h, f, p = 0, g = 0;
              const m = [], b = e + n - 1, y = t[e].x, v = t[b].x - y;
              for (r = e; r < e + n; ++r) {
                o = t[r], a = (o.x - y) / v * i, s = o.y;
                const e = 0 | a;
                if (e === l) {
                  s < h ? (h = s, c = r) : s > f && (f = s, u = r),
                    p = (g * p + o.x) / ++g;
                } else {
                  const n = r - 1;
                  if (!oo(c) && !oo(u)) {
                    const e = Math.min(c, u), i = Math.max(c, u);
                    e !== d && e !== n && m.push({ ...t[e], x: p }),
                      i !== d && i !== n && m.push({ ...t[i], x: p });
                  }
                  r > 0 && n !== d && m.push(t[n]),
                    m.push(o),
                    l = e,
                    g = 0,
                    h = f = s,
                    c = u = d = r;
                }
              }
              return m;
            }(l, u, d, i);
            break;
          default:
            throw new Error(
              `Unsupported decimation algorithm '${n.algorithm}'`,
            );
        }
        e._decimated = h;
      });
    },
    destroy(t) {
      Cu(t);
    },
  };
  function Tu(t, e, n, i) {
    if (i) return;
    let r = e[t], o = n[t];
    return "angle" === t && (r = Qo(r), o = Qo(o)),
      { property: t, start: r, end: o };
  }
  function Ou(t, e, n) {
    for (; e > t; e--) {
      const t = n[e];
      if (!isNaN(t.x) && !isNaN(t.y)) break;
    }
    return e;
  }
  function Ru(t, e, n, i) {
    return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
  }
  function Du(t, e) {
    let n = [], i = !1;
    return ao(t) ? (i = !0, n = t) : n = function (t, e) {
      const { x: n = null, y: i = null } = t || {}, r = e.points, o = [];
      return e.segments.forEach((t) => {
        let { start: e, end: a } = t;
        a = Ou(e, a, r);
        const s = r[e], l = r[a];
        null !== i
          ? (o.push({ x: s.x, y: i }), o.push({ x: l.x, y: i }))
          : null !== n && (o.push({ x: n, y: s.y }), o.push({ x: n, y: l.y }));
      }),
        o;
    }(t, e),
      n.length
        ? new uu({ points: n, options: { tension: 0 }, _loop: i, _fullLoop: i })
        : null;
  }
  function Lu(t) {
    return t && !1 !== t.fill;
  }
  function Au(t, e, n) {
    let i = t[e].fill;
    const r = [e];
    let o;
    if (!n) return i;
    for (; !1 !== i && -1 === r.indexOf(i);) {
      if (!lo(i)) return i;
      if (o = t[i], !o) return !1;
      if (o.visible) return i;
      r.push(i), i = o.fill;
    }
    return !1;
  }
  function ju(t, e, n) {
    const i = function (t) {
      const e = t.options, n = e.fill;
      let i = uo(n && n.target, n);
      void 0 === i && (i = !!e.backgroundColor);
      if (!1 === i || null === i) return !1;
      if (!0 === i) return "origin";
      return i;
    }(t);
    if (so(i)) return !isNaN(i.value) && i;
    let r = parseFloat(i);
    return lo(r) && Math.floor(r) === r
      ? function (t, e, n, i) {
        "-" !== t && "+" !== t || (n = e + n);
        if (n === e || n < 0 || n >= i) return !1;
        return n;
      }(i[0], e, r, n)
      : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
  }
  function Fu(t, e, n) {
    const i = [];
    for (let r = 0; r < n.length; r++) {
      const o = n[r], { first: a, last: s, point: l } = zu(o, e, "x");
      if (!(!l || a && s)) {
        if (a) i.unshift(l);
        else if (t.push(l), !s) break;
      }
    }
    t.push(...i);
  }
  function zu(t, e, n) {
    const i = t.interpolate(e, n);
    if (!i) return {};
    const r = i[n], o = t.segments, a = t.points;
    let s = !1, l = !1;
    for (let c = 0; c < o.length; c++) {
      const t = o[c], e = a[t.start][n], i = a[t.end][n];
      if (Jo(r, e, i)) {
        s = r === e, l = r === i;
        break;
      }
    }
    return { first: s, last: l, point: i };
  }
  class Nu {
    constructor(t) {
      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    pathSegment(t, e, n) {
      const { x: i, y: r, radius: o } = this;
      return e = e || { start: 0, end: To },
        t.arc(i, r, o, e.end, e.start, !0),
        !n.bounds;
    }
    interpolate(t) {
      const { x: e, y: n, radius: i } = this, r = t.angle;
      return { x: e + Math.cos(r) * i, y: n + Math.sin(r) * i, angle: r };
    }
  }
  function Iu(t) {
    const { chart: e, fill: n, line: i } = t;
    if (lo(n)) {
      return function (t, e) {
        const n = t.getDatasetMeta(e), i = n && t.isDatasetVisible(e);
        return i ? n.dataset : null;
      }(e, n);
    }
    if ("stack" === n) {
      return function (t) {
        const { scale: e, index: n, line: i } = t,
          r = [],
          o = i.segments,
          a = i.points,
          s = function (t, e) {
            const n = [], i = t.getMatchingVisibleMetas("line");
            for (let r = 0; r < i.length; r++) {
              const t = i[r];
              if (t.index === e) break;
              t.hidden || n.unshift(t.dataset);
            }
            return n;
          }(e, n);
        s.push(Du({ x: null, y: e.bottom }, i));
        for (let l = 0; l < o.length; l++) {
          const t = o[l];
          for (let e = t.start; e <= t.end; e++) Fu(r, a[e], s);
        }
        return new uu({ points: r, options: {} });
      }(t);
    }
    if ("shape" === n) return !0;
    const r = function (t) {
      const e = t.scale || {};
      if (e.getPointPositionForValue) {
        return function (t) {
          const { scale: e, fill: n } = t,
            i = e.options,
            r = e.getLabels().length,
            o = i.reverse ? e.max : e.min,
            a = function (t, e, n) {
              let i;
              return i = "start" === t
                ? n
                : "end" === t
                ? e.options.reverse ? e.min : e.max
                : so(t)
                ? t.value
                : e.getBaseValue(),
                i;
            }(n, e, o),
            s = [];
          if (i.grid.circular) {
            const t = e.getPointPositionForValue(0, o);
            return new Nu({
              x: t.x,
              y: t.y,
              radius: e.getDistanceFromCenterForValue(a),
            });
          }
          for (let l = 0; l < r; ++l) s.push(e.getPointPositionForValue(l, a));
          return s;
        }(t);
      }
      return function (t) {
        const { scale: e = {}, fill: n } = t,
          i = function (t, e) {
            let n = null;
            return "start" === t
              ? n = e.bottom
              : "end" === t
              ? n = e.top
              : so(t)
              ? n = e.getPixelForValue(t.value)
              : e.getBasePixel && (n = e.getBasePixel()),
              n;
          }(n, e);
        if (lo(i)) {
          const t = e.isHorizontal();
          return { x: t ? i : null, y: t ? null : i };
        }
        return null;
      }(t);
    }(t);
    return r instanceof Nu ? r : Du(r, i);
  }
  function Bu(t, e, n) {
    const i = Iu(e),
      { line: r, scale: o, axis: a } = e,
      s = r.options,
      l = s.fill,
      c = s.backgroundColor,
      { above: u = c, below: d = c } = l || {};
    i && r.points.length && (Fa(t, n),
      function (t, e) {
        const { line: n, target: i, above: r, below: o, area: a, scale: s } = e,
          l = n._loop ? "angle" : e.axis;
        t.save(),
          "x" === l && o !== r &&
          (Vu(t, i, a.top),
            Uu(t, { line: n, target: i, color: r, scale: s, property: l }),
            t.restore(),
            t.save(),
            Vu(t, i, a.bottom));
        Uu(t, { line: n, target: i, color: o, scale: s, property: l }),
          t.restore();
      }(t, {
        line: r,
        target: i,
        above: u,
        below: d,
        area: n,
        scale: o,
        axis: a,
      }),
      za(t));
  }
  function Vu(t, e, n) {
    const { segments: i, points: r } = e;
    let o = !0, a = !1;
    t.beginPath();
    for (const s of i) {
      const { start: i, end: l } = s, c = r[i], u = r[Ou(i, l, r)];
      o ? (t.moveTo(c.x, c.y), o = !1) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
        a = !!e.pathSegment(t, s, { move: a }),
        a ? t.closePath() : t.lineTo(u.x, n);
    }
    t.lineTo(e.first().x, n), t.closePath(), t.clip();
  }
  function Uu(t, e) {
    const { line: n, target: i, property: r, color: o, scale: a } = e,
      s = function (t, e, n) {
        const i = t.segments, r = t.points, o = e.points, a = [];
        for (const s of i) {
          let { start: t, end: i } = s;
          i = Ou(t, i, r);
          const l = Tu(n, r[t], r[i], s.loop);
          if (!e.segments) {
            a.push({ source: s, target: l, start: r[t], end: r[i] });
            continue;
          }
          const c = Us(e, l);
          for (const e of c) {
            const t = Tu(n, o[e.start], o[e.end], e.loop), i = Vs(s, r, t);
            for (const r of i) {
              a.push({
                source: r,
                target: e,
                start: { [n]: Ru(l, t, "start", Math.max) },
                end: { [n]: Ru(l, t, "end", Math.min) },
              });
            }
          }
        }
        return a;
      }(n, i, r);
    for (const { source: l, target: c, start: u, end: d } of s) {
      const { style: { backgroundColor: e = o } = {} } = l, s = !0 !== i;
      t.save(), t.fillStyle = e, Hu(t, a, s && Tu(r, u, d)), t.beginPath();
      const h = !!n.pathSegment(t, l);
      let f;
      if (s) {
        h ? t.closePath() : Wu(t, i, d, r);
        const e = !!i.pathSegment(t, c, { move: h, reverse: !0 });
        f = h && e, f || Wu(t, i, u, r);
      }
      t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
    }
  }
  function Hu(t, e, n) {
    const { top: i, bottom: r } = e.chart.chartArea,
      { property: o, start: a, end: s } = n || {};
    "x" === o && (t.beginPath(), t.rect(a, i, s - a, r - i), t.clip());
  }
  function Wu(t, e, n, i) {
    const r = e.interpolate(n, i);
    r && t.lineTo(r.x, r.y);
  }
  var $u = {
    id: "filler",
    afterDatasetsUpdate(t, e, n) {
      const i = (t.data.datasets || []).length, r = [];
      let o, a, s, l;
      for (a = 0; a < i; ++a) {
        o = t.getDatasetMeta(a),
          s = o.dataset,
          l = null,
          s && s.options && s instanceof uu &&
          (l = {
            visible: t.isDatasetVisible(a),
            index: a,
            fill: ju(s, a, i),
            chart: t,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: s,
          }),
          o.$filler = l,
          r.push(l);
      }
      for (a = 0; a < i; ++a) {
        l = r[a], l && !1 !== l.fill && (l.fill = Au(r, a, n.propagate));
      }
    },
    beforeDraw(t, e, n) {
      const i = "beforeDraw" === n.drawTime,
        r = t.getSortedVisibleDatasetMetas(),
        o = t.chartArea;
      for (let a = r.length - 1; a >= 0; --a) {
        const e = r[a].$filler;
        e &&
          (e.line.updateControlPoints(o, e.axis),
            i && e.fill && Bu(t.ctx, e, o));
      }
    },
    beforeDatasetsDraw(t, e, n) {
      if ("beforeDatasetsDraw" !== n.drawTime) return;
      const i = t.getSortedVisibleDatasetMetas();
      for (let r = i.length - 1; r >= 0; --r) {
        const e = i[r].$filler;
        Lu(e) && Bu(t.ctx, e, t.chartArea);
      }
    },
    beforeDatasetDraw(t, e, n) {
      const i = e.meta.$filler;
      Lu(i) && "beforeDatasetDraw" === n.drawTime && Bu(t.ctx, i, t.chartArea);
    },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
  };
  const qu = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return t.usePointStyle &&
      (n = Math.min(n, e), i = t.pointStyleWidth || Math.min(i, e)),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) };
  };
  class Yu extends cc {
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
      let e = fo(t.generateLabels, [this.chart], this) || [];
      t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
        t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
        this.options.reverse && e.reverse(),
        this.legendItems = e;
    }
    fit() {
      const { options: t, ctx: e } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const n = t.labels,
        i = Ja(n.font),
        r = i.size,
        o = this._computeTitleHeight(),
        { boxWidth: a, itemHeight: s } = qu(n, r);
      let l, c;
      e.font = i.string,
        this.isHorizontal()
          ? (l = this.maxWidth, c = this._fitRows(o, r, a, s) + 10)
          : (c = this.maxHeight, l = this._fitCols(o, i, a, s) + 10),
        this.width = Math.min(l, t.maxWidth || this.maxWidth),
        this.height = Math.min(c, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, n, i) {
      const { ctx: r, maxWidth: o, options: { labels: { padding: a } } } = this,
        s = this.legendHitBoxes = [],
        l = this.lineWidths = [0],
        c = i + a;
      let u = t;
      r.textAlign = "left", r.textBaseline = "middle";
      let d = -1, h = -c;
      return this.legendItems.forEach((t, f) => {
        const p = n + e / 2 + r.measureText(t.text).width;
        (0 === f || l[l.length - 1] + p + 2 * a > o) &&
        (u += c, l[l.length - (f > 0 ? 0 : 1)] = 0, h += c, d++),
          s[f] = { left: 0, top: h, row: d, width: p, height: i },
          l[l.length - 1] += p + a;
      }),
        u;
    }
    _fitCols(t, e, n, i) {
      const { ctx: r, maxHeight: o, options: { labels: { padding: a } } } =
          this,
        s = this.legendHitBoxes = [],
        l = this.columnSizes = [],
        c = o - t;
      let u = a, d = 0, h = 0, f = 0, p = 0;
      return this.legendItems.forEach((t, o) => {
        const { itemWidth: g, itemHeight: m } = function (t, e, n, i, r) {
          const o = function (t, e, n, i) {
              let r = t.text;
              r && "string" !== typeof r &&
                (r = r.reduce((t, e) => t.length > e.length ? t : e));
              return e + n.size / 2 + i.measureText(r).width;
            }(i, t, e, n),
            a = function (t, e, n) {
              let i = t;
              "string" !== typeof e.text && (i = Qu(e, n));
              return i;
            }(r, i, e.lineHeight);
          return { itemWidth: o, itemHeight: a };
        }(n, e, r, t, i);
        o > 0 && h + m + 2 * a > c &&
        (u += d + a,
          l.push({ width: d, height: h }),
          f += d + a,
          p++,
          d = h = 0),
          s[o] = { left: f, top: h, col: p, width: g, height: m },
          d = Math.max(d, g),
          h += m + a;
      }),
        u += d,
        l.push({ width: d, height: h }),
        u;
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: { align: n, labels: { padding: i }, rtl: r },
        } = this,
        o = Fs(r, this.left, this.width);
      if (this.isHorizontal()) {
        let r = 0, a = sa(n, this.left + i, this.right - this.lineWidths[r]);
        for (const s of e) {
          r !== s.row &&
          (r = s.row,
            a = sa(n, this.left + i, this.right - this.lineWidths[r])),
            s.top += this.top + t + i,
            s.left = o.leftForLtr(o.x(a), s.width),
            a += s.width + i;
        }
      } else {
        let r = 0,
          a = sa(n, this.top + t + i, this.bottom - this.columnSizes[r].height);
        for (const s of e) {
          s.col !== r &&
          (r = s.col,
            a = sa(
              n,
              this.top + t + i,
              this.bottom - this.columnSizes[r].height,
            )),
            s.top = a,
            s.left += this.left + i,
            s.left = o.leftForLtr(o.x(s.left), s.width),
            a += s.height + i;
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
        Fa(t, this), this._draw(), za(t);
      }
    }
    _draw() {
      const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
        { align: r, labels: o } = t,
        a = Pa.color,
        s = Fs(t.rtl, this.left, this.width),
        l = Ja(o.font),
        { padding: c } = o,
        u = l.size,
        d = u / 2;
      let h;
      this.drawTitle(),
        i.textAlign = s.textAlign("left"),
        i.textBaseline = "middle",
        i.lineWidth = .5,
        i.font = l.string;
      const { boxWidth: f, boxHeight: p, itemHeight: g } = qu(o, u),
        m = this.isHorizontal(),
        b = this._computeTitleHeight();
      h = m
        ? {
          x: sa(r, this.left + c, this.right - n[0]),
          y: this.top + c + b,
          line: 0,
        }
        : {
          x: this.left + c,
          y: sa(r, this.top + b + c, this.bottom - e[0].height),
          line: 0,
        }, zs(this.ctx, t.textDirection);
      const y = g + c;
      this.legendItems.forEach((v, x) => {
        i.strokeStyle = v.fontColor, i.fillStyle = v.fontColor;
        const w = i.measureText(v.text).width,
          _ = s.textAlign(v.textAlign || (v.textAlign = o.textAlign)),
          k = f + d + w;
        let S = h.x, E = h.y;
        s.setWidth(this.width),
          m
            ? x > 0 && S + k + c > this.right &&
              (E = h.y += y,
                h.line++,
                S = h.x = sa(r, this.left + c, this.right - n[h.line]))
            : x > 0 && E + y > this.bottom &&
              (S = h.x = S + e[h.line].width + c,
                h.line++,
                E = h.y = sa(
                  r,
                  this.top + b + c,
                  this.bottom - e[h.line].height,
                ));
        if (
          function (t, e, n) {
            if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
            i.save();
            const r = uo(n.lineWidth, 1);
            if (
              i.fillStyle = uo(n.fillStyle, a),
                i.lineCap = uo(n.lineCap, "butt"),
                i.lineDashOffset = uo(n.lineDashOffset, 0),
                i.lineJoin = uo(n.lineJoin, "miter"),
                i.lineWidth = r,
                i.strokeStyle = uo(n.strokeStyle, a),
                i.setLineDash(uo(n.lineDash, [])),
                o.usePointStyle
            ) {
              const a = {
                  radius: p * Math.SQRT2 / 2,
                  pointStyle: n.pointStyle,
                  rotation: n.rotation,
                  borderWidth: r,
                },
                l = s.xPlus(t, f / 2);
              Aa(i, a, l, e + d, o.pointStyleWidth && f);
            } else {
              const o = e + Math.max((u - p) / 2, 0),
                a = s.leftForLtr(t, f),
                l = Ka(n.borderRadius);
              i.beginPath(),
                Object.values(l).some((t) => 0 !== t)
                  ? Ha(i, { x: a, y: o, w: f, h: p, radius: l })
                  : i.rect(a, o, f, p),
                i.fill(),
                0 !== r && i.stroke();
            }
            i.restore();
          }(s.x(S), E, v),
            S = ((t, e, n, i) =>
              t === (i ? "left" : "right")
                ? n
                : "center" === t
                ? (e + n) / 2
                : e)(_, S + f + d, m ? S + k : this.right, t.rtl),
            function (t, e, n) {
              Ua(i, n.text, t, e + g / 2, l, {
                strikethrough: n.hidden,
                textAlign: s.textAlign(n.textAlign),
              });
            }(s.x(S), E, v),
            m
        ) h.x += k + c;
        else if ("string" !== typeof v.text) {
          const t = l.lineHeight;
          h.y += Qu(v, t) + c;
        } else h.y += y;
      }), Ns(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options, e = t.title, n = Ja(e.font), i = Xa(e.padding);
      if (!e.display) return;
      const r = Fs(t.rtl, this.left, this.width),
        o = this.ctx,
        a = e.position,
        s = n.size / 2,
        l = i.top + s;
      let c, u = this.left, d = this.width;
      if (this.isHorizontal()) {
        d = Math.max(...this.lineWidths),
          c = this.top + l,
          u = sa(t.align, u, this.right - d);
      } else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        c = l +
          sa(
            t.align,
            this.top,
            this.bottom - e - t.labels.padding - this._computeTitleHeight(),
          );
      }
      const h = sa(a, u, u + d);
      o.textAlign = r.textAlign(aa(a)),
        o.textBaseline = "middle",
        o.strokeStyle = e.color,
        o.fillStyle = e.color,
        o.font = n.string,
        Ua(o, e.text, h, c, n);
    }
    _computeTitleHeight() {
      const t = this.options.title, e = Ja(t.font), n = Xa(t.padding);
      return t.display ? e.lineHeight + n.height : 0;
    }
    _getLegendItemAt(t, e) {
      let n, i, r;
      if (Jo(t, this.left, this.right) && Jo(e, this.top, this.bottom)) {
        for (r = this.legendHitBoxes, n = 0; n < r.length; ++n) {
          if (
            i = r[n],
              Jo(t, i.left, i.left + i.width) && Jo(e, i.top, i.top + i.height)
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
        const o = this._hoveredItem,
          a = (r = n,
            null !== (i = o) && null !== r &&
            i.datasetIndex === r.datasetIndex && i.index === r.index);
        o && !a && fo(e.onLeave, [t, o, this], this),
          this._hoveredItem = n,
          n && !a && fo(e.onHover, [t, n, this], this);
      } else n && fo(e.onClick, [t, n, this], this);
      var i, r;
    }
  }
  function Qu(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var Ku = {
    id: "legend",
    _element: Yu,
    start(t, e, n) {
      const i = t.legend = new Yu({ ctx: t.ctx, options: n, chart: t });
      $l.configure(t, i, n), $l.addBox(t, i);
    },
    stop(t) {
      $l.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
      const i = t.legend;
      $l.configure(t, i, n), i.options = n;
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
        const i = e.datasetIndex, r = n.chart;
        r.isDatasetVisible(i)
          ? (r.hide(i), e.hidden = !0)
          : (r.show(i), e.hidden = !1);
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
                pointStyle: i,
                textAlign: r,
                color: o,
                useBorderRadius: a,
                borderRadius: s,
              },
            } = t.legend.options;
          return t._getSortedDatasetMetas().map((t) => {
            const l = t.controller.getStyle(n ? 0 : void 0),
              c = Xa(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (c.width + c.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: i || l.pointStyle,
              rotation: l.rotation,
              textAlign: r || l.textAlign,
              borderRadius: a && (s || l.borderRadius),
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
  class Xu extends cc {
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
      const i = ao(n.text) ? n.text.length : 1;
      this._padding = Xa(n.padding);
      const r = i * Ja(n.font).lineHeight + this._padding.height;
      this.isHorizontal() ? this.height = r : this.width = r;
    }
    isHorizontal() {
      const t = this.options.position;
      return "top" === t || "bottom" === t;
    }
    _drawArgs(t) {
      const { top: e, left: n, bottom: i, right: r, options: o } = this,
        a = o.align;
      let s, l, c, u = 0;
      return this.isHorizontal()
        ? (l = sa(a, n, r), c = e + t, s = r - n)
        : ("left" === o.position
          ? (l = n + t, c = sa(a, i, e), u = -.5 * Po)
          : (l = r - t, c = sa(a, e, i), u = .5 * Po),
          s = i - e),
        { titleX: l, titleY: c, maxWidth: s, rotation: u };
    }
    draw() {
      const t = this.ctx, e = this.options;
      if (!e.display) return;
      const n = Ja(e.font),
        i = n.lineHeight / 2 + this._padding.top,
        { titleX: r, titleY: o, maxWidth: a, rotation: s } = this._drawArgs(i);
      Ua(t, e.text, 0, 0, n, {
        color: e.color,
        maxWidth: a,
        rotation: s,
        textAlign: aa(e.align),
        textBaseline: "middle",
        translation: [r, o],
      });
    }
  }
  var Ju = {
    id: "title",
    _element: Xu,
    start(t, e, n) {
      !function (t, e) {
        const n = new Xu({ ctx: t.ctx, options: e, chart: t });
        $l.configure(t, n, e), $l.addBox(t, n), t.titleBlock = n;
      }(t, n);
    },
    stop(t) {
      const e = t.titleBlock;
      $l.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
      const i = t.titleBlock;
      $l.configure(t, i, n), i.options = n;
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
  const Gu = new WeakMap();
  var Zu = {
    id: "subtitle",
    start(t, e, n) {
      const i = new Xu({ ctx: t.ctx, options: n, chart: t });
      $l.configure(t, i, n), $l.addBox(t, i), Gu.set(t, i);
    },
    stop(t) {
      $l.removeBox(t, Gu.get(t)), Gu.delete(t);
    },
    beforeUpdate(t, e, n) {
      const i = Gu.get(t);
      $l.configure(t, i, n), i.options = n;
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
  const td = {
    average(t) {
      if (!t.length) return !1;
      let e, n, i = new Set(), r = 0, o = 0;
      for (e = 0, n = t.length; e < n; ++e) {
        const n = t[e].element;
        if (n && n.hasValue()) {
          const t = n.tooltipPosition();
          i.add(t.x), r += t.y, ++o;
        }
      }
      if (0 === o || 0 === i.size) return !1;
      return { x: [...i].reduce((t, e) => t + e) / i.size, y: r / o };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let n, i, r, o = e.x, a = e.y, s = Number.POSITIVE_INFINITY;
      for (n = 0, i = t.length; n < i; ++n) {
        const i = t[n].element;
        if (i && i.hasValue()) {
          const t = qo(e, i.getCenterPoint());
          t < s && (s = t, r = i);
        }
      }
      if (r) {
        const t = r.tooltipPosition();
        o = t.x, a = t.y;
      }
      return { x: o, y: a };
    },
  };
  function ed(t, e) {
    return e && (ao(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function nd(t) {
    return ("string" === typeof t || t instanceof String) &&
        t.indexOf("\n") > -1
      ? t.split("\n")
      : t;
  }
  function id(t, e) {
    const { element: n, datasetIndex: i, index: r } = e,
      o = t.getDatasetMeta(i).controller,
      { label: a, value: s } = o.getLabelAndValue(r);
    return {
      chart: t,
      label: a,
      parsed: o.getParsed(r),
      raw: t.data.datasets[i].data[r],
      formattedValue: s,
      dataset: o.getDataset(),
      dataIndex: r,
      datasetIndex: i,
      element: n,
    };
  }
  function rd(t, e) {
    const n = t.chart.ctx,
      { body: i, footer: r, title: o } = t,
      { boxWidth: a, boxHeight: s } = e,
      l = Ja(e.bodyFont),
      c = Ja(e.titleFont),
      u = Ja(e.footerFont),
      d = o.length,
      h = r.length,
      f = i.length,
      p = Xa(e.padding);
    let g = p.height,
      m = 0,
      b = i.reduce(
        (t, e) => t + e.before.length + e.lines.length + e.after.length,
        0,
      );
    if (
      b += t.beforeBody.length + t.afterBody.length,
        d &&
        (g += d * c.lineHeight + (d - 1) * e.titleSpacing +
          e.titleMarginBottom),
        b
    ) {
      g += f * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
        (b - f) * l.lineHeight + (b - 1) * e.bodySpacing;
    }
    h &&
      (g += e.footerMarginTop + h * u.lineHeight + (h - 1) * e.footerSpacing);
    let y = 0;
    const v = function (t) {
      m = Math.max(m, n.measureText(t).width + y);
    };
    return n.save(),
      n.font = c.string,
      po(t.title, v),
      n.font = l.string,
      po(t.beforeBody.concat(t.afterBody), v),
      y = e.displayColors ? a + 2 + e.boxPadding : 0,
      po(i, (t) => {
        po(t.before, v), po(t.lines, v), po(t.after, v);
      }),
      y = 0,
      n.font = u.string,
      po(t.footer, v),
      n.restore(),
      m += p.width,
      { width: m, height: g };
  }
  function od(t, e, n, i) {
    const { x: r, width: o } = n,
      { width: a, chartArea: { left: s, right: l } } = t;
    let c = "center";
    return "center" === i
      ? c = r <= (s + l) / 2 ? "left" : "right"
      : r <= o / 2
      ? c = "left"
      : r >= a - o / 2 && (c = "right"),
      function (t, e, n, i) {
        const { x: r, width: o } = i, a = n.caretSize + n.caretPadding;
        return "left" === t && r + o + a > e.width ||
          "right" === t && r - o - a < 0 || void 0;
      }(c, t, e, n) && (c = "center"),
      c;
  }
  function ad(t, e, n) {
    const i = n.yAlign || e.yAlign || function (t, e) {
      const { y: n, height: i } = e;
      return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
    }(t, n);
    return { xAlign: n.xAlign || e.xAlign || od(t, e, n, i), yAlign: i };
  }
  function sd(t, e, n, i) {
    const { caretSize: r, caretPadding: o, cornerRadius: a } = t,
      { xAlign: s, yAlign: l } = n,
      c = r + o,
      { topLeft: u, topRight: d, bottomLeft: h, bottomRight: f } = Ka(a);
    let p = function (t, e) {
      let { x: n, width: i } = t;
      return "right" === e ? n -= i : "center" === e && (n -= i / 2), n;
    }(e, s);
    const g = function (t, e, n) {
      let { y: i, height: r } = t;
      return "top" === e ? i += n : i -= "bottom" === e ? r + n : r / 2, i;
    }(e, l, c);
    return "center" === l
      ? "left" === s ? p += c : "right" === s && (p -= c)
      : "left" === s
      ? p -= Math.max(u, h) + r
      : "right" === s && (p += Math.max(d, f) + r),
      { x: Xo(p, 0, i.width - e.width), y: Xo(g, 0, i.height - e.height) };
  }
  function ld(t, e, n) {
    const i = Xa(n.padding);
    return "center" === e
      ? t.x + t.width / 2
      : "right" === e
      ? t.x + t.width - i.right
      : t.x + i.left;
  }
  function cd(t) {
    return ed([], nd(t));
  }
  function ud(t, e) {
    const n = e && e.dataset && e.dataset.tooltip &&
      e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
  }
  const dd = {
    beforeTitle: io,
    title(t) {
      if (t.length > 0) {
        const e = t[0], n = e.chart.data.labels, i = n ? n.length : 0;
        if (this && this.options && "dataset" === this.options.mode) {
          return e.dataset.label || "";
        }
        if (e.label) return e.label;
        if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
      }
      return "";
    },
    afterTitle: io,
    beforeBody: io,
    beforeLabel: io,
    label(t) {
      if (this && this.options && "dataset" === this.options.mode) {
        return t.label + ": " + t.formattedValue || t.formattedValue;
      }
      let e = t.dataset.label || "";
      e && (e += ": ");
      const n = t.formattedValue;
      return oo(n) || (e += n), e;
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
    afterLabel: io,
    afterBody: io,
    beforeFooter: io,
    footer: io,
    afterFooter: io,
  };
  function hd(t, e, n, i) {
    const r = t[e].call(n, i);
    return "undefined" === typeof r ? dd[e].call(n, i) : r;
  }
  class fd extends cc {
    static positioners = (() => td)();
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
        i = n.enabled && e.options.animation && n.animations,
        r = new Js(this.chart, i);
      return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
    }
    getContext() {
      return this.$context ||
        (this.$context =
          (t = this.chart.getContext(),
            e = this,
            n = this._tooltipItems,
            Za(t, { tooltip: e, tooltipItems: n, type: "tooltip" })));
      var t, e, n;
    }
    getTitle(t, e) {
      const { callbacks: n } = e,
        i = hd(n, "beforeTitle", this, t),
        r = hd(n, "title", this, t),
        o = hd(n, "afterTitle", this, t);
      let a = [];
      return a = ed(a, nd(i)), a = ed(a, nd(r)), a = ed(a, nd(o)), a;
    }
    getBeforeBody(t, e) {
      return cd(hd(e.callbacks, "beforeBody", this, t));
    }
    getBody(t, e) {
      const { callbacks: n } = e, i = [];
      return po(t, (t) => {
        const e = { before: [], lines: [], after: [] }, r = ud(n, t);
        ed(e.before, nd(hd(r, "beforeLabel", this, t))),
          ed(e.lines, hd(r, "label", this, t)),
          ed(e.after, nd(hd(r, "afterLabel", this, t))),
          i.push(e);
      }),
        i;
    }
    getAfterBody(t, e) {
      return cd(hd(e.callbacks, "afterBody", this, t));
    }
    getFooter(t, e) {
      const { callbacks: n } = e,
        i = hd(n, "beforeFooter", this, t),
        r = hd(n, "footer", this, t),
        o = hd(n, "afterFooter", this, t);
      let a = [];
      return a = ed(a, nd(i)), a = ed(a, nd(r)), a = ed(a, nd(o)), a;
    }
    _createItems(t) {
      const e = this._active, n = this.chart.data, i = [], r = [], o = [];
      let a, s, l = [];
      for (a = 0, s = e.length; a < s; ++a) l.push(id(this.chart, e[a]));
      return t.filter && (l = l.filter((e, i, r) => t.filter(e, i, r, n))),
        t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
        po(l, (e) => {
          const n = ud(t.callbacks, e);
          i.push(hd(n, "labelColor", this, e)),
            r.push(hd(n, "labelPointStyle", this, e)),
            o.push(hd(n, "labelTextColor", this, e));
        }),
        this.labelColors = i,
        this.labelPointStyles = r,
        this.labelTextColors = o,
        this.dataPoints = l,
        l;
    }
    update(t, e) {
      const n = this.options.setContext(this.getContext()), i = this._active;
      let r, o = [];
      if (i.length) {
        const t = td[n.position].call(this, i, this._eventPosition);
        o = this._createItems(n),
          this.title = this.getTitle(o, n),
          this.beforeBody = this.getBeforeBody(o, n),
          this.body = this.getBody(o, n),
          this.afterBody = this.getAfterBody(o, n),
          this.footer = this.getFooter(o, n);
        const e = this._size = rd(this, n),
          a = Object.assign({}, t, e),
          s = ad(this.chart, n, a),
          l = sd(n, a, s, this.chart);
        this.xAlign = s.xAlign,
          this.yAlign = s.yAlign,
          r = {
            opacity: 1,
            x: l.x,
            y: l.y,
            width: e.width,
            height: e.height,
            caretX: t.x,
            caretY: t.y,
          };
      } else 0 !== this.opacity && (r = { opacity: 0 });
      this._tooltipItems = o,
        this.$context = void 0,
        r && this._resolveAnimations().update(this, r),
        t && n.external &&
        n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
    }
    drawCaret(t, e, n, i) {
      const r = this.getCaretPosition(t, n, i);
      e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
    }
    getCaretPosition(t, e, n) {
      const { xAlign: i, yAlign: r } = this,
        { caretSize: o, cornerRadius: a } = n,
        { topLeft: s, topRight: l, bottomLeft: c, bottomRight: u } = Ka(a),
        { x: d, y: h } = t,
        { width: f, height: p } = e;
      let g, m, b, y, v, x;
      return "center" === r
        ? (v = h + p / 2,
          "left" === i
            ? (g = d, m = g - o, y = v + o, x = v - o)
            : (g = d + f, m = g + o, y = v - o, x = v + o),
          b = g)
        : (m = "left" === i
          ? d + Math.max(s, c) + o
          : "right" === i
          ? d + f - Math.max(l, u) - o
          : this.caretX,
          "top" === r
            ? (y = h, v = y - o, g = m - o, b = m + o)
            : (y = h + p, v = y + o, g = m + o, b = m - o),
          x = y),
        { x1: g, x2: m, x3: b, y1: y, y2: v, y3: x };
    }
    drawTitle(t, e, n) {
      const i = this.title, r = i.length;
      let o, a, s;
      if (r) {
        const l = Fs(n.rtl, this.x, this.width);
        for (
          t.x = ld(this, n.titleAlign, n),
            e.textAlign = l.textAlign(n.titleAlign),
            e.textBaseline = "middle",
            o = Ja(n.titleFont),
            a = n.titleSpacing,
            e.fillStyle = n.titleColor,
            e.font = o.string,
            s = 0;
          s < r;
          ++s
        ) {
          e.fillText(i[s], l.x(t.x), t.y + o.lineHeight / 2),
            t.y += o.lineHeight + a,
            s + 1 === r && (t.y += n.titleMarginBottom - a);
        }
      }
    }
    _drawColorBox(t, e, n, i, r) {
      const o = this.labelColors[n],
        a = this.labelPointStyles[n],
        { boxHeight: s, boxWidth: l } = r,
        c = Ja(r.bodyFont),
        u = ld(this, "left", r),
        d = i.x(u),
        h = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0,
        f = e.y + h;
      if (r.usePointStyle) {
        const e = {
            radius: Math.min(l, s) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          n = i.leftForLtr(d, l) + l / 2,
          c = f + s / 2;
        t.strokeStyle = r.multiKeyBackground,
          t.fillStyle = r.multiKeyBackground,
          La(t, e, n, c),
          t.strokeStyle = o.borderColor,
          t.fillStyle = o.backgroundColor,
          La(t, e, n, c);
      } else {
        t.lineWidth = so(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1,
          t.strokeStyle = o.borderColor,
          t.setLineDash(o.borderDash || []),
          t.lineDashOffset = o.borderDashOffset || 0;
        const e = i.leftForLtr(d, l),
          n = i.leftForLtr(i.xPlus(d, 1), l - 2),
          a = Ka(o.borderRadius);
        Object.values(a).some((t) => 0 !== t)
          ? (t.beginPath(),
            t.fillStyle = r.multiKeyBackground,
            Ha(t, { x: e, y: f, w: l, h: s, radius: a }),
            t.fill(),
            t.stroke(),
            t.fillStyle = o.backgroundColor,
            t.beginPath(),
            Ha(t, { x: n, y: f + 1, w: l - 2, h: s - 2, radius: a }),
            t.fill())
          : (t.fillStyle = r.multiKeyBackground,
            t.fillRect(e, f, l, s),
            t.strokeRect(e, f, l, s),
            t.fillStyle = o.backgroundColor,
            t.fillRect(n, f + 1, l - 2, s - 2));
      }
      t.fillStyle = this.labelTextColors[n];
    }
    drawBody(t, e, n) {
      const { body: i } = this,
        {
          bodySpacing: r,
          bodyAlign: o,
          displayColors: a,
          boxHeight: s,
          boxWidth: l,
          boxPadding: c,
        } = n,
        u = Ja(n.bodyFont);
      let d = u.lineHeight, h = 0;
      const f = Fs(n.rtl, this.x, this.width),
        p = function (n) {
          e.fillText(n, f.x(t.x + h), t.y + d / 2), t.y += d + r;
        },
        g = f.textAlign(o);
      let m, b, y, v, x, w, _;
      for (
        e.textAlign = o,
          e.textBaseline = "middle",
          e.font = u.string,
          t.x = ld(this, g, n),
          e.fillStyle = n.bodyColor,
          po(this.beforeBody, p),
          h = a && "right" !== g ? "center" === o ? l / 2 + c : l + 2 + c : 0,
          v = 0,
          w = i.length;
        v < w;
        ++v
      ) {
        for (
          m = i[v],
            b = this.labelTextColors[v],
            e.fillStyle = b,
            po(m.before, p),
            y = m.lines,
            a && y.length &&
            (this._drawColorBox(e, t, v, f, n), d = Math.max(u.lineHeight, s)),
            x = 0,
            _ = y.length;
          x < _;
          ++x
        ) p(y[x]), d = u.lineHeight;
        po(m.after, p);
      }
      h = 0, d = u.lineHeight, po(this.afterBody, p), t.y -= r;
    }
    drawFooter(t, e, n) {
      const i = this.footer, r = i.length;
      let o, a;
      if (r) {
        const s = Fs(n.rtl, this.x, this.width);
        for (
          t.x = ld(this, n.footerAlign, n),
            t.y += n.footerMarginTop,
            e.textAlign = s.textAlign(n.footerAlign),
            e.textBaseline = "middle",
            o = Ja(n.footerFont),
            e.fillStyle = n.footerColor,
            e.font = o.string,
            a = 0;
          a < r;
          ++a
        ) {
          e.fillText(i[a], s.x(t.x), t.y + o.lineHeight / 2),
            t.y += o.lineHeight + n.footerSpacing;
        }
      }
    }
    drawBackground(t, e, n, i) {
      const { xAlign: r, yAlign: o } = this,
        { x: a, y: s } = t,
        { width: l, height: c } = n,
        { topLeft: u, topRight: d, bottomLeft: h, bottomRight: f } = Ka(
          i.cornerRadius,
        );
      e.fillStyle = i.backgroundColor,
        e.strokeStyle = i.borderColor,
        e.lineWidth = i.borderWidth,
        e.beginPath(),
        e.moveTo(a + u, s),
        "top" === o && this.drawCaret(t, e, n, i),
        e.lineTo(a + l - d, s),
        e.quadraticCurveTo(a + l, s, a + l, s + d),
        "center" === o && "right" === r && this.drawCaret(t, e, n, i),
        e.lineTo(a + l, s + c - f),
        e.quadraticCurveTo(a + l, s + c, a + l - f, s + c),
        "bottom" === o && this.drawCaret(t, e, n, i),
        e.lineTo(a + h, s + c),
        e.quadraticCurveTo(a, s + c, a, s + c - h),
        "center" === o && "left" === r && this.drawCaret(t, e, n, i),
        e.lineTo(a, s + u),
        e.quadraticCurveTo(a, s, a + u, s),
        e.closePath(),
        e.fill(),
        i.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart, n = this.$animations, i = n && n.x, r = n && n.y;
      if (i || r) {
        const n = td[t.position].call(this, this._active, this._eventPosition);
        if (!n) return;
        const o = this._size = rd(this, t),
          a = Object.assign({}, n, this._size),
          s = ad(e, t, a),
          l = sd(t, a, s, e);
        i._to === l.x && r._to === l.y ||
          (this.xAlign = s.xAlign,
            this.yAlign = s.yAlign,
            this.width = o.width,
            this.height = o.height,
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
      const i = { width: this.width, height: this.height },
        r = { x: this.x, y: this.y };
      n = Math.abs(n) < .001 ? 0 : n;
      const o = Xa(e.padding),
        a = this.title.length || this.beforeBody.length || this.body.length ||
          this.afterBody.length || this.footer.length;
      e.enabled && a &&
        (t.save(),
          t.globalAlpha = n,
          this.drawBackground(r, t, i, e),
          zs(t, e.textDirection),
          r.y += o.top,
          this.drawTitle(r, t, e),
          this.drawBody(r, t, e),
          this.drawFooter(r, t, e),
          Ns(t, e.textDirection),
          t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const n = this._active,
        i = t.map((t) => {
          let { datasetIndex: e, index: n } = t;
          const i = this.chart.getDatasetMeta(e);
          if (!i) throw new Error("Cannot find a dataset at index " + e);
          return { datasetIndex: e, element: i.data[n], index: n };
        }),
        r = !go(n, i),
        o = this._positionChanged(i, e);
      (r || o) &&
        (this._active = i,
          this._eventPosition = e,
          this._ignoreReplayEvents = !0,
          this.update(!0));
    }
    handleEvent(t, e) {
      let n = !(arguments.length > 2 && void 0 !== arguments[2]) ||
        arguments[2];
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const i = this.options,
        r = this._active || [],
        o = this._getActiveElements(t, r, e, n),
        a = this._positionChanged(o, t),
        s = e || !go(o, r) || a;
      return s &&
        (this._active = o,
          (i.enabled || i.external) &&
          (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, e))),
        s;
    }
    _getActiveElements(t, e, n, i) {
      const r = this.options;
      if ("mouseout" === t.type) return [];
      if (!i) {
        return e.filter((t) =>
          this.chart.data.datasets[t.datasetIndex] &&
          void 0 !==
            this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(
              t.index,
            )
        );
      }
      const o = this.chart.getElementsAtEventForMode(t, r.mode, r, n);
      return r.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
      const { caretX: n, caretY: i, options: r } = this,
        o = td[r.position].call(this, t, e);
      return !1 !== o && (n !== o.x || i !== o.y);
    }
  }
  var pd = {
      id: "tooltip",
      _element: fd,
      positioners: td,
      afterInit(t, e, n) {
        n && (t.tooltip = new fd({ chart: t, options: n }));
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
        callbacks: dd,
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
    gd = Object.freeze({
      __proto__: null,
      Colors: Eu,
      Decimation: Pu,
      Filler: $u,
      Legend: Ku,
      SubTitle: Zu,
      Title: Ju,
      Tooltip: pd,
    });
  function md(t, e, n, i) {
    const r = t.indexOf(e);
    if (-1 === r) {
      return ((
        t,
        e,
        n,
        i,
      ) => ("string" === typeof e
        ? (n = t.push(e) - 1, i.unshift({ index: n, label: e }))
        : isNaN(e) && (n = null),
        n))(t, e, n, i);
    }
    return r !== t.lastIndexOf(e) ? n : r;
  }
  function bd(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  class yd extends vc {
    static id = "category";
    static defaults = (() => ({ ticks: { callback: bd } }))();
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
        for (const { index: n, label: i } of e) t[n] === i && t.splice(n, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, e) {
      if (oo(t)) return null;
      const n = this.getLabels();
      return ((t, e) => null === t ? null : Xo(Math.round(t), 0, e))(
        e = isFinite(e) && n[e] === t
          ? e
          : md(n, t, uo(e, t), this._addedLabels),
        n.length - 1,
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let { min: n, max: i } = this.getMinMax(!0);
      "ticks" === this.options.bounds &&
      (t || (n = 0), e || (i = this.getLabels().length - 1)),
        this.min = n,
        this.max = i;
    }
    buildTicks() {
      const t = this.min, e = this.max, n = this.options.offset, i = [];
      let r = this.getLabels();
      r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1),
        this._valueRange = Math.max(r.length - (n ? 0 : 1), 1),
        this._startValue = this.min - (n ? .5 : 0);
      for (let o = t; o <= e; o++) i.push({ value: o });
      return i;
    }
    getLabelForValue(t) {
      return bd.call(this, t);
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
  function vd(t, e) {
    const n = [],
      {
        bounds: i,
        step: r,
        min: o,
        max: a,
        precision: s,
        count: l,
        maxTicks: c,
        maxDigits: u,
        includeBounds: d,
      } = t,
      h = r || 1,
      f = c - 1,
      { min: p, max: g } = e,
      m = !oo(o),
      b = !oo(a),
      y = !oo(l),
      v = (g - p) / (u + 1);
    let x, w, _, k, S = Io((g - p) / f / h) * h;
    if (S < 1e-14 && !m && !b) return [{ value: p }, { value: g }];
    k = Math.ceil(g / S) - Math.floor(p / S),
      k > f && (S = Io(k * S / f / h) * h),
      oo(s) || (x = Math.pow(10, s), S = Math.ceil(S * x) / x),
      "ticks" === i
        ? (w = Math.floor(p / S) * S, _ = Math.ceil(g / S) * S)
        : (w = p, _ = g),
      m && b && r && function (t, e) {
          const n = Math.round(t);
          return n - e <= t && n + e >= t;
        }((a - o) / r, S / 1e3)
        ? (k = Math.round(Math.min((a - o) / S, c)),
          S = (a - o) / k,
          w = o,
          _ = a)
        : y
        ? (w = m ? o : w, _ = b ? a : _, k = l - 1, S = (_ - w) / k)
        : (k = (_ - w) / S,
          k = No(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
    const E = Math.max(Wo(S), Wo(w));
    x = Math.pow(10, oo(s) ? E : s),
      w = Math.round(w * x) / x,
      _ = Math.round(_ * x) / x;
    let M = 0;
    for (
      m &&
      (d && w !== o
        ? (n.push({ value: o }),
          w < o && M++,
          No(Math.round((w + M * S) * x) / x, o, xd(o, v, t)) && M++)
        : w < o && M++);
      M < k;
      ++M
    ) {
      const t = Math.round((w + M * S) * x) / x;
      if (b && t > a) break;
      n.push({ value: t });
    }
    return b && d && _ !== a
      ? n.length && No(n[n.length - 1].value, a, xd(a, v, t))
        ? n[n.length - 1].value = a
        : n.push({ value: a })
      : b && _ !== a || n.push({ value: _ }),
      n;
  }
  function xd(t, e, n) {
    let { horizontal: i, minRotation: r } = n;
    const o = Uo(r),
      a = (i ? Math.sin(o) : Math.cos(o)) || .001,
      s = .75 * e * ("" + t).length;
    return Math.min(e / a, s);
  }
  class wd extends vc {
    constructor(t) {
      super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._endValue = void 0,
        this._valueRange = 0;
    }
    parse(t, e) {
      return oo(t) ||
          ("number" === typeof t || t instanceof Number) && !isFinite(+t)
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: e, maxDefined: n } = this.getUserBounds();
      let { min: i, max: r } = this;
      const o = (t) => i = e ? i : t, a = (t) => r = n ? r : t;
      if (t) {
        const t = zo(i), e = zo(r);
        t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
      }
      if (i === r) {
        let e = 0 === r ? 1 : Math.abs(.05 * r);
        a(r + e), t || o(i - e);
      }
      this.min = i, this.max = r;
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e, { maxTicksLimit: n, stepSize: i } = t;
      return i
        ? (e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1,
          e > 1e3 &&
          (console.warn(
            `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`,
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
      const i = vd({
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
      return "ticks" === t.bounds && Vo(i, this, "value"),
        t.reverse
          ? (i.reverse(), this.start = this.max, this.end = this.min)
          : (this.start = this.min, this.end = this.max),
        i;
    }
    configure() {
      const t = this.ticks;
      let e = this.min, n = this.max;
      if (super.configure(), this.options.offset && t.length) {
        const i = (n - e) / Math.max(t.length - 1, 1) / 2;
        e -= i, n += i;
      }
      this._startValue = e, this._endValue = n, this._valueRange = n - e;
    }
    getLabelForValue(t) {
      return xa(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class _d extends wd {
    static id = "linear";
    static defaults =
      (() => ({ ticks: { callback: _a.formatters.numeric } }))();
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      this.min = lo(t) ? t : 0,
        this.max = lo(e) ? e : 1,
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        n = Uo(this.options.ticks.minRotation),
        i = (t ? Math.sin(n) : Math.cos(n)) || .001,
        r = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, r.lineHeight / i));
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
  const kd = (t) => Math.floor(Fo(t)), Sd = (t, e) => Math.pow(10, kd(t) + e);
  function Ed(t) {
    return 1 === t / Math.pow(10, kd(t));
  }
  function Md(t, e, n) {
    const i = Math.pow(10, n), r = Math.floor(t / i);
    return Math.ceil(e / i) - r;
  }
  function Cd(t, e) {
    let { min: n, max: i } = e;
    n = co(t.min, n);
    const r = [], o = kd(n);
    let a = function (t, e) {
        let n = kd(e - t);
        for (; Md(t, e, n) > 10;) n++;
        for (; Md(t, e, n) < 10;) n--;
        return Math.min(n, kd(t));
      }(n, i),
      s = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
    const l = Math.pow(10, a),
      c = o > a ? Math.pow(10, o) : 0,
      u = Math.round((n - c) * s) / s,
      d = Math.floor((n - c) / l / 10) * l * 10;
    let h = Math.floor((u - d) / Math.pow(10, a)),
      f = co(t.min, Math.round((c + d + h * Math.pow(10, a)) * s) / s);
    for (; f < i;) {
      r.push({ value: f, major: Ed(f), significand: h }),
        h >= 10 ? h = h < 15 ? 15 : 20 : h++,
        h >= 20 && (a++, h = 2, s = a >= 0 ? 1 : s),
        f = Math.round((c + d + h * Math.pow(10, a)) * s) / s;
    }
    const p = co(t.max, f);
    return r.push({ value: p, major: Ed(p), significand: h }), r;
  }
  class Pd extends vc {
    static id = "logarithmic";
    static defaults = (() => ({
      ticks: { callback: _a.formatters.logarithmic, major: { enabled: !0 } },
    }))();
    constructor(t) {
      super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._valueRange = 0;
    }
    parse(t, e) {
      const n = wd.prototype.parse.apply(this, [t, e]);
      if (0 !== n) return lo(n) && n > 0 ? n : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!0);
      this.min = lo(t) ? Math.max(0, t) : null,
        this.max = lo(e) ? Math.max(0, e) : null,
        this.options.beginAtZero && (this._zero = !0),
        this._zero && this.min !== this._suggestedMin && !lo(this._userMin) &&
        (this.min = t === Sd(this.min, 0) ? Sd(this.min, -1) : Sd(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: e } = this.getUserBounds();
      let n = this.min, i = this.max;
      const r = (e) => n = t ? n : e, o = (t) => i = e ? i : t;
      n === i && (n <= 0 ? (r(1), o(10)) : (r(Sd(n, -1)), o(Sd(i, 1)))),
        n <= 0 && r(Sd(i, -1)),
        i <= 0 && o(Sd(n, 1)),
        this.min = n,
        this.max = i;
    }
    buildTicks() {
      const t = this.options,
        e = Cd({ min: this._userMin, max: this._userMax }, this);
      return "ticks" === t.bounds && Vo(e, this, "value"),
        t.reverse
          ? (e.reverse(), this.start = this.max, this.end = this.min)
          : (this.start = this.min, this.end = this.max),
        e;
    }
    getLabelForValue(t) {
      return void 0 === t
        ? "0"
        : xa(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(),
        this._startValue = Fo(t),
        this._valueRange = Fo(this.max) - Fo(t);
    }
    getPixelForValue(t) {
      return void 0 !== t && 0 !== t || (t = this.min),
        null === t || isNaN(t) ? NaN : this.getPixelForDecimal(
          t === this.min ? 0 : (Fo(t) - this._startValue) / this._valueRange,
        );
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function Td(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = Xa(e.backdropPadding);
      return uo(e.font && e.font.size, Pa.font.size) + t.height;
    }
    return 0;
  }
  function Od(t, e, n, i, r) {
    return t === i || t === r
      ? { start: e - n / 2, end: e + n / 2 }
      : t < i || t > r
      ? { start: e - n, end: e }
      : { start: e, end: e + n };
  }
  function Rd(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom,
      },
      n = Object.assign({}, e),
      i = [],
      r = [],
      o = t._pointLabels.length,
      a = t.options.pointLabels,
      s = a.centerPointLabels ? Po / o : 0;
    for (let d = 0; d < o; d++) {
      const o = a.setContext(t.getPointLabelContext(d));
      r[d] = o.padding;
      const h = t.getPointPosition(d, t.drawingArea + r[d], s),
        f = Ja(o.font),
        p =
          (l = t.ctx,
            c = f,
            u = ao(u = t._pointLabels[d]) ? u : [u],
            { w: Oa(l, c.string, u), h: u.length * c.lineHeight });
      i[d] = p;
      const g = Qo(t.getIndexAngle(d) + s), m = Math.round(Ho(g));
      Dd(n, e, g, Od(m, h.x, p.w, 0, 180), Od(m, h.y, p.h, 90, 270));
    }
    var l, c, u;
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
      t._pointLabelItems = function (t, e, n) {
        const i = [],
          r = t._pointLabels.length,
          o = t.options,
          { centerPointLabels: a, display: s } = o.pointLabels,
          l = { extra: Td(o) / 2, additionalAngle: a ? Po / r : 0 };
        let c;
        for (let u = 0; u < r; u++) {
          l.padding = n[u], l.size = e[u];
          const r = Ld(t, u, l);
          i.push(r),
            "auto" === s && (r.visible = Ad(r, c), r.visible && (c = r));
        }
        return i;
      }(t, i, r);
  }
  function Dd(t, e, n, i, r) {
    const o = Math.abs(Math.sin(n)), a = Math.abs(Math.cos(n));
    let s = 0, l = 0;
    i.start < e.l
      ? (s = (e.l - i.start) / o, t.l = Math.min(t.l, e.l - s))
      : i.end > e.r && (s = (i.end - e.r) / o, t.r = Math.max(t.r, e.r + s)),
      r.start < e.t
        ? (l = (e.t - r.start) / a, t.t = Math.min(t.t, e.t - l))
        : r.end > e.b && (l = (r.end - e.b) / a, t.b = Math.max(t.b, e.b + l));
  }
  function Ld(t, e, n) {
    const i = t.drawingArea,
      { extra: r, additionalAngle: o, padding: a, size: s } = n,
      l = t.getPointPosition(e, i + r + a, o),
      c = Math.round(Ho(Qo(l.angle + Lo))),
      u = function (t, e, n) {
        90 === n || 270 === n ? t -= e / 2 : (n > 270 || n < 90) && (t -= e);
        return t;
      }(l.y, s.h, c),
      d = function (t) {
        if (0 === t || 180 === t) return "center";
        if (t < 180) return "left";
        return "right";
      }(c),
      h = function (t, e, n) {
        "right" === n ? t -= e : "center" === n && (t -= e / 2);
        return t;
      }(l.x, s.w, d);
    return {
      visible: !0,
      x: l.x,
      y: u,
      textAlign: d,
      left: h,
      top: u,
      right: h + s.w,
      bottom: u + s.h,
    };
  }
  function Ad(t, e) {
    if (!e) return !0;
    const { left: n, top: i, right: r, bottom: o } = t;
    return !(ja({ x: n, y: i }, e) || ja({ x: n, y: o }, e) ||
      ja({ x: r, y: i }, e) || ja({ x: r, y: o }, e));
  }
  function jd(t, e, n) {
    const { left: i, top: r, right: o, bottom: a } = n,
      { backdropColor: s } = e;
    if (!oo(s)) {
      const n = Ka(e.borderRadius), l = Xa(e.backdropPadding);
      t.fillStyle = s;
      const c = i - l.left,
        u = r - l.top,
        d = o - i + l.width,
        h = a - r + l.height;
      Object.values(n).some((t) => 0 !== t)
        ? (t.beginPath(),
          Ha(t, { x: c, y: u, w: d, h: h, radius: n }),
          t.fill())
        : t.fillRect(c, u, d, h);
    }
  }
  function Fd(t, e, n, i) {
    const { ctx: r } = t;
    if (n) r.arc(t.xCenter, t.yCenter, e, 0, To);
    else {
      let n = t.getPointPosition(0, e);
      r.moveTo(n.x, n.y);
      for (let o = 1; o < i; o++) {
        n = t.getPointPosition(o, e), r.lineTo(n.x, n.y);
      }
    }
  }
  class zd extends wd {
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
      ticks: { showLabelBackdrop: !0, callback: _a.formatters.numeric },
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
      const t = this._padding = Xa(Td(this.options) / 2),
        e = this.width = this.maxWidth - t.width,
        n = this.height = this.maxHeight - t.height;
      this.xCenter = Math.floor(this.left + e / 2 + t.left),
        this.yCenter = Math.floor(this.top + n / 2 + t.top),
        this.drawingArea = Math.floor(Math.min(e, n) / 2);
    }
    determineDataLimits() {
      const { min: t, max: e } = this.getMinMax(!1);
      this.min = lo(t) && !isNaN(t) ? t : 0,
        this.max = lo(e) && !isNaN(e) ? e : 0,
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / Td(this.options));
    }
    generateTickLabels(t) {
      wd.prototype.generateTickLabels.call(this, t),
        this._pointLabels = this.getLabels().map((t, e) => {
          const n = fo(this.options.pointLabels.callback, [t, e], this);
          return n || 0 === n ? n : "";
        }).filter((t, e) => this.chart.getDataVisibility(e));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? Rd(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, n, i) {
      this.xCenter += Math.floor((t - e) / 2),
        this.yCenter += Math.floor((n - i) / 2),
        this.drawingArea -= Math.min(
          this.drawingArea / 2,
          Math.max(t, e, n, i),
        );
    }
    getIndexAngle(t) {
      return Qo(
        t * (To / (this._pointLabels.length || 1)) +
          Uo(this.options.startAngle || 0),
      );
    }
    getDistanceFromCenterForValue(t) {
      if (oo(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (oo(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const n = e[t];
        return function (t, e, n) {
          return Za(t, { label: n, index: e, type: "pointLabel" });
        }(this.getContext(), t, n);
      }
    }
    getPointPosition(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : 0;
      const i = this.getIndexAngle(t) - Lo + n;
      return {
        x: Math.cos(i) * e + this.xCenter,
        y: Math.sin(i) * e + this.yCenter,
        angle: i,
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: e, top: n, right: i, bottom: r } = this._pointLabelItems[t];
      return { left: e, top: n, right: i, bottom: r };
    }
    drawBackground() {
      const { backgroundColor: t, grid: { circular: e } } = this.options;
      if (t) {
        const n = this.ctx;
        n.save(),
          n.beginPath(),
          Fd(
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
        { angleLines: n, grid: i, border: r } = e,
        o = this._pointLabels.length;
      let a, s, l;
      if (
        e.pointLabels.display && function (t, e) {
          const { ctx: n, options: { pointLabels: i } } = t;
          for (let r = e - 1; r >= 0; r--) {
            const e = t._pointLabelItems[r];
            if (!e.visible) continue;
            const o = i.setContext(t.getPointLabelContext(r));
            jd(n, o, e);
            const a = Ja(o.font), { x: s, y: l, textAlign: c } = e;
            Ua(n, t._pointLabels[r], s, l + a.lineHeight / 2, a, {
              color: o.color,
              textAlign: c,
              textBaseline: "middle",
            });
          }
        }(this, o),
          i.display && this.ticks.forEach((t, e) => {
            if (0 !== e || 0 === e && this.min < 0) {
              s = this.getDistanceFromCenterForValue(t.value);
              const n = this.getContext(e),
                a = i.setContext(n),
                l = r.setContext(n);
              !function (t, e, n, i, r) {
                const o = t.ctx, a = e.circular, { color: s, lineWidth: l } = e;
                !a && !i || !s || !l || n < 0 ||
                  (o.save(),
                    o.strokeStyle = s,
                    o.lineWidth = l,
                    o.setLineDash(r.dash),
                    o.lineDashOffset = r.dashOffset,
                    o.beginPath(),
                    Fd(t, n, a, i),
                    o.closePath(),
                    o.stroke(),
                    o.restore());
              }(this, a, s, o, l);
            }
          }),
          n.display
      ) {
        for (t.save(), a = o - 1; a >= 0; a--) {
          const i = n.setContext(this.getPointLabelContext(a)),
            { color: r, lineWidth: o } = i;
          o && r &&
            (t.lineWidth = o,
              t.strokeStyle = r,
              t.setLineDash(i.borderDash),
              t.lineDashOffset = i.borderDashOffset,
              s = this.getDistanceFromCenterForValue(
                e.reverse ? this.min : this.max,
              ),
              l = this.getPointPosition(a, s),
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
      const i = this.getIndexAngle(0);
      let r, o;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(i),
        t.textAlign = "center",
        t.textBaseline = "middle",
        this.ticks.forEach((i, a) => {
          if (0 === a && this.min >= 0 && !e.reverse) return;
          const s = n.setContext(this.getContext(a)), l = Ja(s.font);
          if (
            r = this.getDistanceFromCenterForValue(this.ticks[a].value),
              s.showLabelBackdrop
          ) {
            t.font = l.string,
              o = t.measureText(i.label).width,
              t.fillStyle = s.backdropColor;
            const e = Xa(s.backdropPadding);
            t.fillRect(
              -o / 2 - e.left,
              -r - l.size / 2 - e.top,
              o + e.width,
              l.size + e.height,
            );
          }
          Ua(t, i.label, 0, -r, l, {
            color: s.color,
            strokeColor: s.textStrokeColor,
            strokeWidth: s.textStrokeWidth,
          });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  const Nd = {
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
    Id = Object.keys(Nd);
  function Bd(t, e) {
    return t - e;
  }
  function Vd(t, e) {
    if (oo(e)) return null;
    const n = t._adapter, { parser: i, round: r, isoWeekday: o } = t._parseOpts;
    let a = e;
    return "function" === typeof i && (a = i(a)),
      lo(a) || (a = "string" === typeof i ? n.parse(a, i) : n.parse(a)),
      null === a
        ? null
        : (r && (a = "week" !== r || !Bo(o) && !0 !== o
          ? n.startOf(a, r)
          : n.startOf(a, "isoWeek", o)),
          +a);
  }
  function Ud(t, e, n, i) {
    const r = Id.length;
    for (let o = Id.indexOf(t); o < r - 1; ++o) {
      const t = Nd[Id[o]], r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return Id[o];
    }
    return Id[r - 1];
  }
  function Hd(t, e, n) {
    if (n) {
      if (n.length) {
        const { lo: i, hi: r } = Go(n, e);
        t[n[i] >= e ? n[i] : n[r]] = !0;
      }
    } else t[e] = !0;
  }
  function Wd(t, e, n) {
    const i = [], r = {}, o = e.length;
    let a, s;
    for (a = 0; a < o; ++a) s = e[a], r[s] = a, i.push({ value: s, major: !1 });
    return 0 !== o && n
      ? function (t, e, n, i) {
        const r = t._adapter,
          o = +r.startOf(e[0].value, i),
          a = e[e.length - 1].value;
        let s, l;
        for (s = o; s <= a; s = +r.add(s, 1, i)) {l = n[s],
            l >= 0 && (e[l].major = !0);}
        return e;
      }(t, i, r, n)
      : i;
  }
  class $d extends vc {
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
        i = this._adapter = new El(t.adapters.date);
      i.init(e),
        xo(n.displayFormats, i.formats()),
        this._parseOpts = {
          parser: n.parser,
          round: n.round,
          isoWeekday: n.isoWeekday,
        },
        super.init(t),
        this._normalized = e.normalized;
    }
    parse(t, e) {
      return void 0 === t ? null : Vd(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), this._cache = { data: [], labels: [], all: [] };
    }
    determineDataLimits() {
      const t = this.options, e = this._adapter, n = t.time.unit || "day";
      let { min: i, max: r, minDefined: o, maxDefined: a } = this
        .getUserBounds();
      function s(t) {
        o || isNaN(t.min) || (i = Math.min(i, t.min)),
          a || isNaN(t.max) || (r = Math.max(r, t.max));
      }
      o && a ||
      (s(this._getLabelBounds()),
        "ticks" === t.bounds && "labels" === t.ticks.source ||
        s(this.getMinMax(!1))),
        i = lo(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n),
        r = lo(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1,
        this.min = Math.min(i, r - 1),
        this.max = Math.max(i + 1, r);
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
        i = "labels" === n.source
          ? this.getLabelTimestamps()
          : this._generate();
      "ticks" === t.bounds && i.length &&
        (this.min = this._userMin || i[0],
          this.max = this._userMax || i[i.length - 1]);
      const r = this.min,
        o = function (t, e, n) {
          let i = 0, r = t.length;
          for (; i < r && t[i] < e;) i++;
          for (; r > i && t[r - 1] > n;) r--;
          return i > 0 || r < t.length ? t.slice(i, r) : t;
        }(i, r, this.max);
      return this._unit = e.unit ||
        (n.autoSkip
          ? Ud(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : function (t, e, n, i, r) {
            for (let o = Id.length - 1; o >= Id.indexOf(n); o--) {
              const n = Id[o];
              if (Nd[n].common && t._adapter.diff(r, i, n) >= e - 1) return n;
            }
            return Id[n ? Id.indexOf(n) : 0];
          }(this, o.length, e.minUnit, this.min, this.max)),
        this._majorUnit = n.major.enabled && "year" !== this._unit
          ? function (t) {
            for (let e = Id.indexOf(t) + 1, n = Id.length; e < n; ++e) {
              if (Nd[Id[e]].common) return Id[e];
            }
          }(this._unit)
          : void 0,
        this.initOffsets(i),
        t.reverse && o.reverse(),
        Wd(this, o, this._majorUnit);
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip &&
        this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets() {
      let t,
        e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        i = 0,
        r = 0;
      this.options.offset && n.length &&
        (t = this.getDecimalForValue(n[0]),
          i = 1 === n.length ? 1 - t : (this.getDecimalForValue(n[1]) - t) / 2,
          e = this.getDecimalForValue(n[n.length - 1]),
          r = 1 === n.length
            ? e
            : (e - this.getDecimalForValue(n[n.length - 2])) / 2);
      const o = n.length < 3 ? .5 : .25;
      i = Xo(i, 0, o),
        r = Xo(r, 0, o),
        this._offsets = { start: i, end: r, factor: 1 / (i + 1 + r) };
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        n = this.max,
        i = this.options,
        r = i.time,
        o = r.unit || Ud(r.minUnit, e, n, this._getLabelCapacity(e)),
        a = uo(i.ticks.stepSize, 1),
        s = "week" === o && r.isoWeekday,
        l = Bo(s) || !0 === s,
        c = {};
      let u, d, h = e;
      if (
        l && (h = +t.startOf(h, "isoWeek", s)),
          h = +t.startOf(h, l ? "day" : o),
          t.diff(n, e, o) > 1e5 * a
      ) {
        throw new Error(
          e + " and " + n + " are too far apart with stepSize of " + a + " " +
            o,
        );
      }
      const f = "data" === i.ticks.source && this.getDataTimestamps();
      for (u = h, d = 0; u < n; u = +t.add(u, a, o), d++) Hd(c, u, f);
      return u !== n && "ticks" !== i.bounds && 1 !== d || Hd(c, u, f),
        Object.keys(c).sort(Bd).map((t) => +t);
    }
    getLabelForValue(t) {
      const e = this._adapter, n = this.options.time;
      return n.tooltipFormat
        ? e.format(t, n.tooltipFormat)
        : e.format(t, n.displayFormats.datetime);
    }
    format(t, e) {
      const n = this.options.time.displayFormats, i = this._unit, r = e || n[i];
      return this._adapter.format(t, r);
    }
    _tickFormatFunction(t, e, n, i) {
      const r = this.options, o = r.ticks.callback;
      if (o) return fo(o, [t, e, n], this);
      const a = r.time.displayFormats,
        s = this._unit,
        l = this._majorUnit,
        c = s && a[s],
        u = l && a[l],
        d = n[e],
        h = l && u && d && d.major;
      return this._adapter.format(t, i || (h ? u : c));
    }
    generateTickLabels(t) {
      let e, n, i;
      for (e = 0, n = t.length; e < n; ++e) {
        i = t[e], i.label = this._tickFormatFunction(i.value, e, t);
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
        i = Uo(this.isHorizontal() ? e.maxRotation : e.minRotation),
        r = Math.cos(i),
        o = Math.sin(i),
        a = this._resolveTickFontOptions(0).size;
      return { w: n * r + a * o, h: n * o + a * r };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        n = e.displayFormats,
        i = n[e.unit] || n.millisecond,
        r = this._tickFormatFunction(t, 0, Wd(this, [t], this._majorUnit), i),
        o = this._getLabelSize(r),
        a = Math.floor(
          this.isHorizontal() ? this.width / o.w : this.height / o.h,
        ) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let t, e, n = this._cache.data || [];
      if (n.length) return n;
      const i = this.getMatchingVisibleMetas();
      if (this._normalized && i.length) {
        return this._cache.data = i[0].controller.getAllParsedValues(this);
      }
      for (t = 0, e = i.length; t < e; ++t) {
        n = n.concat(i[t].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(n);
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, n;
      if (t.length) return t;
      const i = this.getLabels();
      for (e = 0, n = i.length; e < n; ++e) t.push(Vd(this, i[e]));
      return this._cache.labels = this._normalized ? t : this.normalize(t);
    }
    normalize(t) {
      return ia(t.sort(Bd));
    }
  }
  function qd(t, e, n) {
    let i, r, o, a, s = 0, l = t.length - 1;
    n
      ? (e >= t[s].pos && e <= t[l].pos && ({ lo: s, hi: l } = Zo(t, "pos", e)),
        ({ pos: i, time: o } = t[s]),
        ({ pos: r, time: a } = t[l]))
      : (e >= t[s].time && e <= t[l].time &&
        ({ lo: s, hi: l } = Zo(t, "time", e)),
        ({ time: i, pos: o } = t[s]),
        ({ time: r, pos: a } = t[l]));
    const c = r - i;
    return c ? o + (a - o) * (e - i) / c : o;
  }
  class Yd extends $d {
    static id = "timeseries";
    static defaults = (() => $d.defaults)();
    constructor(t) {
      super(t),
        this._table = [],
        this._minPos = void 0,
        this._tableRange = void 0;
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        e = this._table = this.buildLookupTable(t);
      this._minPos = qd(e, this.min),
        this._tableRange = qd(e, this.max) - this._minPos,
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const { min: e, max: n } = this, i = [], r = [];
      let o, a, s, l, c;
      for (o = 0, a = t.length; o < a; ++o) {
        l = t[o], l >= e && l <= n && i.push(l);
      }
      if (i.length < 2) return [{ time: e, pos: 0 }, { time: n, pos: 1 }];
      for (o = 0, a = i.length; o < a; ++o) {
        c = i[o + 1],
          s = i[o - 1],
          l = i[o],
          Math.round((c + s) / 2) !== l &&
          r.push({ time: l, pos: o / (a - 1) });
      }
      return r;
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
      return (qd(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const e = this._offsets,
        n = this.getDecimalForPixel(t) / e.factor - e.end;
      return qd(this._table, n * this._tableRange + this._minPos, !0);
    }
  }
  const Qd = [
      _l,
      yu,
      gd,
      Object.freeze({
        __proto__: null,
        CategoryScale: yd,
        LinearScale: _d,
        LogarithmicScale: Pd,
        RadialLinearScale: zd,
        TimeScale: $d,
        TimeSeriesScale: Yd,
      }),
    ],
    Kd = "label";
  function Xd(t, e) {
    "function" === typeof t ? t(e) : t && (t.current = e);
  }
  function Jd(t, e) {
    t.labels = e;
  }
  function Gd(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kd;
    const i = [];
    t.datasets = e.map((e) => {
      const r = t.datasets.find((t) => t[n] === e[n]);
      return r && e.data && !i.includes(r)
        ? (i.push(r), Object.assign(r, e), r)
        : { ...e };
    });
  }
  function Zd(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kd;
    const n = { labels: [], datasets: [] };
    return Jd(n, t.labels), Gd(n, t.datasets, e), n;
  }
  function th(t, e) {
    const {
        height: n = 150,
        width: i = 300,
        redraw: o = !1,
        datasetIdKey: a,
        type: s,
        data: l,
        options: c,
        plugins: u = [],
        fallbackContent: d,
        updateMode: h,
        ...f
      } = t,
      p = (0, r.useRef)(null),
      g = (0, r.useRef)(),
      m = () => {
        p.current &&
          (g.current = new Xc(p.current, {
            type: s,
            data: Zd(l, a),
            options: c && { ...c },
            plugins: u,
          }),
            Xd(e, g.current));
      },
      b = () => {
        Xd(e, null), g.current && (g.current.destroy(), g.current = null);
      };
    return (0, r.useEffect)(() => {
      !o && g.current && c && function (t, e) {
        const n = t.options;
        n && e && Object.assign(n, e);
      }(g.current, c);
    }, [o, c]),
      (0, r.useEffect)(() => {
        !o && g.current && Jd(g.current.config.data, l.labels);
      }, [o, l.labels]),
      (0, r.useEffect)(() => {
        !o && g.current && l.datasets &&
          Gd(g.current.config.data, l.datasets, a);
      }, [o, l.datasets]),
      (0, r.useEffect)(() => {
        g.current && (o ? (b(), setTimeout(m)) : g.current.update(h));
      }, [o, c, l.labels, l.datasets, h]),
      (0, r.useEffect)(() => {
        g.current && (b(), setTimeout(m));
      }, [s]),
      (0, r.useEffect)(() => (m(), () => b()), []),
      r.createElement(
        "canvas",
        Object.assign({ ref: p, role: "img", height: n, width: i }, f),
        d,
      );
  }
  const eh = (0, r.forwardRef)(th);
  function nh(t, e) {
    return Xc.register(e),
      (0, r.forwardRef)(
        (e, n) =>
          r.createElement(eh, Object.assign({}, e, { ref: n, type: t })),
      );
  }
  const ih = nh("line", xl), rh = nh("bar", yl);
  let oh = [], ah = () => {};
  function sh() {
    const [t, e] = (0, r.useState)(null);
    function n() {
      e(oh[oh.length - 1]);
    }
    return (0, r.useEffect)(() => {
      ah = (t) => {
        oh.push(t), n();
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
              (0, s.jsx)(d, {
                children: t.buttons.map((t) =>
                  (0, s.jsx)(Ge, {
                    big: !0,
                    onClick: () => t.click(() => (oh.pop(), void n())),
                    children: t.text,
                  })
                ),
              }),
            ],
          }),
        }),
      });
  }
  Xc.register(...Qd);
  let lh = "/trancer-proxy?url=/data";
  window.location.host.includes("localhost") &&
    (lh = "https://discord.dawn.rest/data");
  const ch = {
    minute: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+/,
    hour: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+/,
    day: /[0-9]+\/[0-9]+\/[0-9]+/,
    month: /[0-9]+\/[0-9]+/,
  };
  function uh() {
    const [t, e] = (0, r.useState)("about"),
      [n, i] = (0, r.useState)({}),
      [o, a] = (0, r.useState)({ messages: "month", memberCount: "day" }),
      [c, u] = (0, r.useState)(null);
    async function d(t) {
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
        let e = (await kr.get(`${lh}/${t}`, {
          headers: {
            Authorization: window.localStorage.getItem("trancer_auth"),
          },
        })).data.data;
        i((n) => ({ ...n, [t]: e }));
      } catch (ph) {
        e =
          `Failed to load ${t}: Are you missing the auth code? Run .site in Trancy Twilight.`,
          ah({
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
    return (0, r.useEffect)(() => {
      const t = window.location.hash;
      if (window.location.search) {
        const t = window.location.search.match(/auth=[a-z]+/);
        t &&
          window.localStorage.setItem(
            "trancer_auth",
            t[0].replace("auth=", ""),
          );
      }
      d(t ? t.replace("#", "") : "about");
    }, []),
      (0, s.jsxs)(m, {
        children: [
          (0, s.jsx)(f, {
            title: (0, s.jsx)(h, {
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
                  onClick: () => d(t.toLowerCase().replace(/ /g, "-")),
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
                  (0, s.jsxs)(h, {
                    children: [
                      "Search: ",
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
                          : (0, s.jsx)(h, { children: "Loading..." }),
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
                            : (0, s.jsx)(h, { children: "Loading..." }),
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
                          (0, s.jsxs)(h, {
                            children: [
                              "Filter:",
                              (0, s.jsxs)("select", {
                                defaultValue: o[t.filter],
                                onChange: (e) =>
                                  a({
                                    ...o,
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
                              children: (0, s.jsx)(ih, {
                                data: {
                                  labels: dh(
                                    t.source,
                                    ch[o[t.filter]],
                                    "amount",
                                    t.noAdd,
                                  ).map((t) => t.time),
                                  datasets: [{
                                    label: t.human,
                                    data: dh(
                                      t.source,
                                      ch[o[t.filter]],
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
                      children: (0, s.jsx)(rh, {
                        data: {
                          labels:
                            "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23"
                              .split(","),
                          datasets: [{
                            label: "Messages At Times",
                            data: dh(n.messages, /( [0-9]?[0-9])/, "amount")
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
            }[t] || (0, s.jsx)(h, { children: "Unknown page." }),
          }),
        ],
      });
  }
  function dh(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!t) return [];
    let r = {};
    console.log(t);
    for (const a of t) {
      let t = a.time.match(e);
      t && (r[t[0]] || (r[t[0]] = 0), i ? r[t[0]] = a[n] : r[t[0]] += a[n]);
    }
    console.log(r);
    let o = [];
    for (const a in r) o.push({ time: a, [n]: r[a] });
    return o;
  }
  const hh = a.createRoot(document.getElementById("root")),
    fh = function (t, e) {
      return yt({
        basename: null == e ? void 0 : e.basename,
        future: Te({}, null == e ? void 0 : e.future, {
          v7_prependBasename: !0,
        }),
        history:
          (n = { window: null == e ? void 0 : e.window },
            void 0 === n && (n = {}),
            R(
              function (t, e) {
                let { pathname: n, search: i, hash: r } = t.location;
                return P(
                  "",
                  { pathname: n, search: i, hash: r },
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
        hydrationData: (null == e ? void 0 : e.hydrationData) || Oe(),
        routes: t,
        mapRouteProperties: Pe,
        dataStrategy: null == e ? void 0 : e.dataStrategy,
        patchRoutesOnNavigation: null == e ? void 0 : e.patchRoutesOnNavigation,
        window: null == e ? void 0 : e.window,
      }).initialize();
      var n;
    }([
      { path: "/", element: (0, s.jsx)(v, {}) },
      { path: "/hypno", element: (0, s.jsx)(He, {}) },
      { path: "/hypno/visuals", element: (0, s.jsx)(Je, {}) },
      { path: "/hypno/visuals/:id", element: (0, s.jsx)(on, {}) },
      { path: "/trancer", element: (0, s.jsx)(uh, {}) },
    ]);
  hh.render(
    (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(sh, {}), (0, s.jsx)(Ne, { router: fh })],
    }),
  );
})();
//# sourceMappingURL=main.fc58b9ef.js.map
