var dy = Object.defineProperty;
var fy = (e, t, n) => (t in e ? dy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n));
var hy = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Zs = (e, t, n) => (fy(e, typeof t != 'symbol' ? t + '' : t, n), n);
var mx = hy((yx, uy) => {
	function py(e, t) {
		for (var n = 0; n < t.length; n++) {
			const r = t[n];
			if (typeof r != 'string' && !Array.isArray(r)) {
				for (const i in r)
					if (i !== 'default' && !(i in e)) {
						const s = Object.getOwnPropertyDescriptor(r, i);
						s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] });
					}
			}
		}
		return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
	}
	(function () {
		const t = document.createElement('link').relList;
		if (t && t.supports && t.supports('modulepreload')) return;
		for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
		new MutationObserver(i => {
			for (const s of i)
				if (s.type === 'childList')
					for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
		}).observe(document, { childList: !0, subtree: !0 });
		function n(i) {
			const s = {};
			return (
				i.integrity && (s.integrity = i.integrity),
				i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
				i.crossOrigin === 'use-credentials'
					? (s.credentials = 'include')
					: i.crossOrigin === 'anonymous'
					? (s.credentials = 'omit')
					: (s.credentials = 'same-origin'),
				s
			);
		}
		function r(i) {
			if (i.ep) return;
			i.ep = !0;
			const s = n(i);
			fetch(i.href, s);
		}
	})();
	function my(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
	}
	var os = {},
		_y = {
			get exports() {
				return os;
			},
			set exports(e) {
				os = e;
			},
		},
		Ha = {},
		x = {},
		gy = {
			get exports() {
				return x;
			},
			set exports(e) {
				x = e;
			},
		},
		j = {};
	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Ms = Symbol.for('react.element'),
		yy = Symbol.for('react.portal'),
		vy = Symbol.for('react.fragment'),
		Ey = Symbol.for('react.strict_mode'),
		Sy = Symbol.for('react.profiler'),
		wy = Symbol.for('react.provider'),
		Ty = Symbol.for('react.context'),
		Ry = Symbol.for('react.forward_ref'),
		by = Symbol.for('react.suspense'),
		ky = Symbol.for('react.memo'),
		xy = Symbol.for('react.lazy'),
		qf = Symbol.iterator;
	function Cy(e) {
		return e === null || typeof e != 'object'
			? null
			: ((e = (qf && e[qf]) || e['@@iterator']), typeof e == 'function' ? e : null);
	}
	var Nm = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		Om = Object.assign,
		Im = {};
	function pi(e, t, n) {
		(this.props = e), (this.context = t), (this.refs = Im), (this.updater = n || Nm);
	}
	pi.prototype.isReactComponent = {};
	pi.prototype.setState = function (e, t) {
		if (typeof e != 'object' && typeof e != 'function' && e != null)
			throw Error(
				'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
			);
		this.updater.enqueueSetState(this, e, t, 'setState');
	};
	pi.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
	};
	function Dm() {}
	Dm.prototype = pi.prototype;
	function fd(e, t, n) {
		(this.props = e), (this.context = t), (this.refs = Im), (this.updater = n || Nm);
	}
	var hd = (fd.prototype = new Dm());
	hd.constructor = fd;
	Om(hd, pi.prototype);
	hd.isPureReactComponent = !0;
	var Vf = Array.isArray,
		Am = Object.prototype.hasOwnProperty,
		pd = { current: null },
		Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
	function Lm(e, t, n) {
		var r,
			i = {},
			s = null,
			o = null;
		if (t != null)
			for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
				Am.call(t, r) && !Pm.hasOwnProperty(r) && (i[r] = t[r]);
		var a = arguments.length - 2;
		if (a === 1) i.children = n;
		else if (1 < a) {
			for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
			i.children = l;
		}
		if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
		return { $$typeof: Ms, type: e, key: s, ref: o, props: i, _owner: pd.current };
	}
	function Ny(e, t) {
		return { $$typeof: Ms, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
	}
	function md(e) {
		return typeof e == 'object' && e !== null && e.$$typeof === Ms;
	}
	function Oy(e) {
		var t = { '=': '=0', ':': '=2' };
		return (
			'$' +
			e.replace(/[=:]/g, function (n) {
				return t[n];
			})
		);
	}
	var Qf = /\/+/g;
	function Pl(e, t) {
		return typeof e == 'object' && e !== null && e.key != null ? Oy('' + e.key) : t.toString(36);
	}
	function Do(e, t, n, r, i) {
		var s = typeof e;
		(s === 'undefined' || s === 'boolean') && (e = null);
		var o = !1;
		if (e === null) o = !0;
		else
			switch (s) {
				case 'string':
				case 'number':
					o = !0;
					break;
				case 'object':
					switch (e.$$typeof) {
						case Ms:
						case yy:
							o = !0;
					}
			}
		if (o)
			return (
				(o = e),
				(i = i(o)),
				(e = r === '' ? '.' + Pl(o, 0) : r),
				Vf(i)
					? ((n = ''),
					  e != null && (n = e.replace(Qf, '$&/') + '/'),
					  Do(i, t, n, '', function (u) {
							return u;
					  }))
					: i != null &&
					  (md(i) &&
							(i = Ny(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Qf, '$&/') + '/') + e)),
					  t.push(i)),
				1
			);
		if (((o = 0), (r = r === '' ? '.' : r + ':'), Vf(e)))
			for (var a = 0; a < e.length; a++) {
				s = e[a];
				var l = r + Pl(s, a);
				o += Do(s, t, n, l, i);
			}
		else if (((l = Cy(e)), typeof l == 'function'))
			for (e = l.call(e), a = 0; !(s = e.next()).done; ) (s = s.value), (l = r + Pl(s, a++)), (o += Do(s, t, n, l, i));
		else if (s === 'object')
			throw (
				((t = String(e)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
						'). If you meant to render a collection of children, use an array instead.'
				))
			);
		return o;
	}
	function Xs(e, t, n) {
		if (e == null) return e;
		var r = [],
			i = 0;
		return (
			Do(e, r, '', '', function (s) {
				return t.call(n, s, i++);
			}),
			r
		);
	}
	function Iy(e) {
		if (e._status === -1) {
			var t = e._result;
			(t = t()),
				t.then(
					function (n) {
						(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
					},
					function (n) {
						(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
					}
				),
				e._status === -1 && ((e._status = 0), (e._result = t));
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var Ve = { current: null },
		Ao = { transition: null },
		Dy = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: Ao, ReactCurrentOwner: pd };
	j.Children = {
		map: Xs,
		forEach: function (e, t, n) {
			Xs(
				e,
				function () {
					t.apply(this, arguments);
				},
				n
			);
		},
		count: function (e) {
			var t = 0;
			return (
				Xs(e, function () {
					t++;
				}),
				t
			);
		},
		toArray: function (e) {
			return (
				Xs(e, function (t) {
					return t;
				}) || []
			);
		},
		only: function (e) {
			if (!md(e)) throw Error('React.Children.only expected to receive a single React element child.');
			return e;
		},
	};
	j.Component = pi;
	j.Fragment = vy;
	j.Profiler = Sy;
	j.PureComponent = fd;
	j.StrictMode = Ey;
	j.Suspense = by;
	j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dy;
	j.cloneElement = function (e, t, n) {
		if (e == null)
			throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
		var r = Om({}, e.props),
			i = e.key,
			s = e.ref,
			o = e._owner;
		if (t != null) {
			if (
				(t.ref !== void 0 && ((s = t.ref), (o = pd.current)),
				t.key !== void 0 && (i = '' + t.key),
				e.type && e.type.defaultProps)
			)
				var a = e.type.defaultProps;
			for (l in t) Am.call(t, l) && !Pm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
		}
		var l = arguments.length - 2;
		if (l === 1) r.children = n;
		else if (1 < l) {
			a = Array(l);
			for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
			r.children = a;
		}
		return { $$typeof: Ms, type: e.type, key: i, ref: s, props: r, _owner: o };
	};
	j.createContext = function (e) {
		return (
			(e = {
				$$typeof: Ty,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null,
			}),
			(e.Provider = { $$typeof: wy, _context: e }),
			(e.Consumer = e)
		);
	};
	j.createElement = Lm;
	j.createFactory = function (e) {
		var t = Lm.bind(null, e);
		return (t.type = e), t;
	};
	j.createRef = function () {
		return { current: null };
	};
	j.forwardRef = function (e) {
		return { $$typeof: Ry, render: e };
	};
	j.isValidElement = md;
	j.lazy = function (e) {
		return { $$typeof: xy, _payload: { _status: -1, _result: e }, _init: Iy };
	};
	j.memo = function (e, t) {
		return { $$typeof: ky, type: e, compare: t === void 0 ? null : t };
	};
	j.startTransition = function (e) {
		var t = Ao.transition;
		Ao.transition = {};
		try {
			e();
		} finally {
			Ao.transition = t;
		}
	};
	j.unstable_act = function () {
		throw Error('act(...) is not supported in production builds of React.');
	};
	j.useCallback = function (e, t) {
		return Ve.current.useCallback(e, t);
	};
	j.useContext = function (e) {
		return Ve.current.useContext(e);
	};
	j.useDebugValue = function () {};
	j.useDeferredValue = function (e) {
		return Ve.current.useDeferredValue(e);
	};
	j.useEffect = function (e, t) {
		return Ve.current.useEffect(e, t);
	};
	j.useId = function () {
		return Ve.current.useId();
	};
	j.useImperativeHandle = function (e, t, n) {
		return Ve.current.useImperativeHandle(e, t, n);
	};
	j.useInsertionEffect = function (e, t) {
		return Ve.current.useInsertionEffect(e, t);
	};
	j.useLayoutEffect = function (e, t) {
		return Ve.current.useLayoutEffect(e, t);
	};
	j.useMemo = function (e, t) {
		return Ve.current.useMemo(e, t);
	};
	j.useReducer = function (e, t, n) {
		return Ve.current.useReducer(e, t, n);
	};
	j.useRef = function (e) {
		return Ve.current.useRef(e);
	};
	j.useState = function (e) {
		return Ve.current.useState(e);
	};
	j.useSyncExternalStore = function (e, t, n) {
		return Ve.current.useSyncExternalStore(e, t, n);
	};
	j.useTransition = function () {
		return Ve.current.useTransition();
	};
	j.version = '18.2.0';
	(function (e) {
		e.exports = j;
	})(gy);
	const X = my(x),
		Ru = py({ __proto__: null, default: X }, [x]);
	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Ay = x,
		Py = Symbol.for('react.element'),
		Ly = Symbol.for('react.fragment'),
		My = Object.prototype.hasOwnProperty,
		Uy = Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		By = { key: !0, ref: !0, __self: !0, __source: !0 };
	function Mm(e, t, n) {
		var r,
			i = {},
			s = null,
			o = null;
		n !== void 0 && (s = '' + n), t.key !== void 0 && (s = '' + t.key), t.ref !== void 0 && (o = t.ref);
		for (r in t) My.call(t, r) && !By.hasOwnProperty(r) && (i[r] = t[r]);
		if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
		return { $$typeof: Py, type: e, key: s, ref: o, props: i, _owner: Uy.current };
	}
	Ha.Fragment = Ly;
	Ha.jsx = Mm;
	Ha.jsxs = Mm;
	(function (e) {
		e.exports = Ha;
	})(_y);
	const er = os.Fragment,
		v = os.jsx,
		L = os.jsxs;
	/**
	 * @remix-run/router v1.4.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */ function as() {
		return (
			(as = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
				  }),
			as.apply(this, arguments)
		);
	}
	var En;
	(function (e) {
		(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
	})(En || (En = {}));
	const Kf = 'popstate';
	function Fy(e) {
		e === void 0 && (e = {});
		function t(r, i) {
			let { pathname: s, search: o, hash: a } = r.location;
			return bu(
				'',
				{ pathname: s, search: o, hash: a },
				(i.state && i.state.usr) || null,
				(i.state && i.state.key) || 'default'
			);
		}
		function n(r, i) {
			return typeof i == 'string' ? i : Um(i);
		}
		return $y(t, n, null, e);
	}
	function Ne(e, t) {
		if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
	}
	function _d(e, t) {
		if (!e) {
			typeof console < 'u' && console.warn(t);
			try {
				throw new Error(t);
			} catch {}
		}
	}
	function zy() {
		return Math.random().toString(36).substr(2, 8);
	}
	function Zf(e, t) {
		return { usr: e.state, key: e.key, idx: t };
	}
	function bu(e, t, n, r) {
		return (
			n === void 0 && (n = null),
			as({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? mi(t) : t, {
				state: n,
				key: (t && t.key) || r || zy(),
			})
		);
	}
	function Um(e) {
		let { pathname: t = '/', search: n = '', hash: r = '' } = e;
		return (
			n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
			r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
			t
		);
	}
	function mi(e) {
		let t = {};
		if (e) {
			let n = e.indexOf('#');
			n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
			let r = e.indexOf('?');
			r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
		}
		return t;
	}
	function $y(e, t, n, r) {
		r === void 0 && (r = {});
		let { window: i = document.defaultView, v5Compat: s = !1 } = r,
			o = i.history,
			a = En.Pop,
			l = null,
			u = c();
		u == null && ((u = 0), o.replaceState(as({}, o.state, { idx: u }), ''));
		function c() {
			return (o.state || { idx: null }).idx;
		}
		function d() {
			a = En.Pop;
			let S = c(),
				p = S == null ? null : S - u;
			(u = S), l && l({ action: a, location: y.location, delta: p });
		}
		function h(S, p) {
			a = En.Push;
			let m = bu(y.location, S, p);
			n && n(m, S), (u = c() + 1);
			let g = Zf(m, u),
				E = y.createHref(m);
			try {
				o.pushState(g, '', E);
			} catch {
				i.location.assign(E);
			}
			s && l && l({ action: a, location: y.location, delta: 1 });
		}
		function f(S, p) {
			a = En.Replace;
			let m = bu(y.location, S, p);
			n && n(m, S), (u = c());
			let g = Zf(m, u),
				E = y.createHref(m);
			o.replaceState(g, '', E), s && l && l({ action: a, location: y.location, delta: 0 });
		}
		function _(S) {
			let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
				m = typeof S == 'string' ? S : Um(S);
			return Ne(p, 'No window.location.(origin|href) available to create URL for href: ' + m), new URL(m, p);
		}
		let y = {
			get action() {
				return a;
			},
			get location() {
				return e(i, o);
			},
			listen(S) {
				if (l) throw new Error('A history only accepts one active listener');
				return (
					i.addEventListener(Kf, d),
					(l = S),
					() => {
						i.removeEventListener(Kf, d), (l = null);
					}
				);
			},
			createHref(S) {
				return t(i, S);
			},
			createURL: _,
			encodeLocation(S) {
				let p = _(S);
				return { pathname: p.pathname, search: p.search, hash: p.hash };
			},
			push: h,
			replace: f,
			go(S) {
				return o.go(S);
			},
		};
		return y;
	}
	var Xf;
	(function (e) {
		(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
	})(Xf || (Xf = {}));
	function Hy(e, t, n) {
		n === void 0 && (n = '/');
		let r = typeof t == 'string' ? mi(t) : t,
			i = zm(r.pathname || '/', n);
		if (i == null) return null;
		let s = Bm(e);
		jy(s);
		let o = null;
		for (let a = 0; o == null && a < s.length; ++a) o = Xy(s[a], tv(i));
		return o;
	}
	function Bm(e, t, n, r) {
		t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
		let i = (s, o, a) => {
			let l = {
				relativePath: a === void 0 ? s.path || '' : a,
				caseSensitive: s.caseSensitive === !0,
				childrenIndex: o,
				route: s,
			};
			l.relativePath.startsWith('/') &&
				(Ne(
					l.relativePath.startsWith(r),
					'Absolute route path "' +
						l.relativePath +
						'" nested under path ' +
						('"' + r + '" is not valid. An absolute child route path ') +
						'must start with the combined path of all its parent routes.'
				),
				(l.relativePath = l.relativePath.slice(r.length)));
			let u = tr([r, l.relativePath]),
				c = n.concat(l);
			s.children &&
				s.children.length > 0 &&
				(Ne(
					s.index !== !0,
					'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
				),
				Bm(s.children, t, c, u)),
				!(s.path == null && !s.index) && t.push({ path: u, score: Ky(u, s.index), routesMeta: c });
		};
		return (
			e.forEach((s, o) => {
				var a;
				if (s.path === '' || !((a = s.path) != null && a.includes('?'))) i(s, o);
				else for (let l of Fm(s.path)) i(s, o, l);
			}),
			t
		);
	}
	function Fm(e) {
		let t = e.split('/');
		if (t.length === 0) return [];
		let [n, ...r] = t,
			i = n.endsWith('?'),
			s = n.replace(/\?$/, '');
		if (r.length === 0) return i ? [s, ''] : [s];
		let o = Fm(r.join('/')),
			a = [];
		return (
			a.push(...o.map(l => (l === '' ? s : [s, l].join('/')))),
			i && a.push(...o),
			a.map(l => (e.startsWith('/') && l === '' ? '/' : l))
		);
	}
	function jy(e) {
		e.sort((t, n) =>
			t.score !== n.score
				? n.score - t.score
				: Zy(
						t.routesMeta.map(r => r.childrenIndex),
						n.routesMeta.map(r => r.childrenIndex)
				  )
		);
	}
	const Gy = /^:\w+$/,
		Yy = 3,
		Wy = 2,
		qy = 1,
		Vy = 10,
		Qy = -2,
		Jf = e => e === '*';
	function Ky(e, t) {
		let n = e.split('/'),
			r = n.length;
		return (
			n.some(Jf) && (r += Qy),
			t && (r += Wy),
			n.filter(i => !Jf(i)).reduce((i, s) => i + (Gy.test(s) ? Yy : s === '' ? qy : Vy), r)
		);
	}
	function Zy(e, t) {
		return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
	}
	function Xy(e, t) {
		let { routesMeta: n } = e,
			r = {},
			i = '/',
			s = [];
		for (let o = 0; o < n.length; ++o) {
			let a = n[o],
				l = o === n.length - 1,
				u = i === '/' ? t : t.slice(i.length) || '/',
				c = Jy({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
			if (!c) return null;
			Object.assign(r, c.params);
			let d = a.route;
			s.push({ params: r, pathname: tr([i, c.pathname]), pathnameBase: av(tr([i, c.pathnameBase])), route: d }),
				c.pathnameBase !== '/' && (i = tr([i, c.pathnameBase]));
		}
		return s;
	}
	function Jy(e, t) {
		typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
		let [n, r] = ev(e.path, e.caseSensitive, e.end),
			i = t.match(n);
		if (!i) return null;
		let s = i[0],
			o = s.replace(/(.)\/+$/, '$1'),
			a = i.slice(1);
		return {
			params: r.reduce((u, c, d) => {
				if (c === '*') {
					let h = a[d] || '';
					o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, '$1');
				}
				return (u[c] = nv(a[d] || '', c)), u;
			}, {}),
			pathname: s,
			pathnameBase: o,
			pattern: e,
		};
	}
	function ev(e, t, n) {
		t === void 0 && (t = !1),
			n === void 0 && (n = !0),
			_d(
				e === '*' || !e.endsWith('*') || e.endsWith('/*'),
				'Route path "' +
					e +
					'" will be treated as if it were ' +
					('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
					'always follow a `/` in the pattern. To get rid of this warning, ' +
					('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
			);
		let r = [],
			i =
				'^' +
				e
					.replace(/\/*\*?$/, '')
					.replace(/^\/*/, '/')
					.replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
					.replace(/\/:(\w+)/g, (o, a) => (r.push(a), '/([^\\/]+)'));
		return (
			e.endsWith('*')
				? (r.push('*'), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
				: n
				? (i += '\\/*$')
				: e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
			[new RegExp(i, t ? void 0 : 'i'), r]
		);
	}
	function tv(e) {
		try {
			return decodeURI(e);
		} catch (t) {
			return (
				_d(
					!1,
					'The URL path "' +
						e +
						'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
						('encoding (' + t + ').')
				),
				e
			);
		}
	}
	function nv(e, t) {
		try {
			return decodeURIComponent(e);
		} catch (n) {
			return (
				_d(
					!1,
					'The value for the URL param "' +
						t +
						'" will not be decoded because' +
						(' the string "' + e + '" is a malformed URL segment. This is probably') +
						(' due to a bad percent encoding (' + n + ').')
				),
				e
			);
		}
	}
	function zm(e, t) {
		if (t === '/') return e;
		if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
		let n = t.endsWith('/') ? t.length - 1 : t.length,
			r = e.charAt(n);
		return r && r !== '/' ? null : e.slice(n) || '/';
	}
	function rv(e, t) {
		t === void 0 && (t = '/');
		let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? mi(e) : e;
		return { pathname: n ? (n.startsWith('/') ? n : iv(n, t)) : t, search: lv(r), hash: uv(i) };
	}
	function iv(e, t) {
		let n = t.replace(/\/+$/, '').split('/');
		return (
			e.split('/').forEach(i => {
				i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
			}),
			n.length > 1 ? n.join('/') : '/'
		);
	}
	function Ll(e, t, n, r) {
		return (
			"Cannot include a '" +
			e +
			"' character in a manually specified " +
			('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
			('`to.' + n + '` field. Alternatively you may provide the full path as ') +
			'a string in <Link to="..."> and the router will parse it for you.'
		);
	}
	function sv(e) {
		return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
	}
	function ov(e, t, n, r) {
		r === void 0 && (r = !1);
		let i;
		typeof e == 'string'
			? (i = mi(e))
			: ((i = as({}, e)),
			  Ne(!i.pathname || !i.pathname.includes('?'), Ll('?', 'pathname', 'search', i)),
			  Ne(!i.pathname || !i.pathname.includes('#'), Ll('#', 'pathname', 'hash', i)),
			  Ne(!i.search || !i.search.includes('#'), Ll('#', 'search', 'hash', i)));
		let s = e === '' || i.pathname === '',
			o = s ? '/' : i.pathname,
			a;
		if (r || o == null) a = n;
		else {
			let d = t.length - 1;
			if (o.startsWith('..')) {
				let h = o.split('/');
				for (; h[0] === '..'; ) h.shift(), (d -= 1);
				i.pathname = h.join('/');
			}
			a = d >= 0 ? t[d] : '/';
		}
		let l = rv(i, a),
			u = o && o !== '/' && o.endsWith('/'),
			c = (s || o === '.') && n.endsWith('/');
		return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
	}
	const tr = e => e.join('/').replace(/\/\/+/g, '/'),
		av = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
		lv = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
		uv = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
	function cv(e) {
		return (
			e != null &&
			typeof e.status == 'number' &&
			typeof e.statusText == 'string' &&
			typeof e.internal == 'boolean' &&
			'data' in e
		);
	}
	/**
	 * React Router v6.9.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */ function dv(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	const fv = typeof Object.is == 'function' ? Object.is : dv,
		{ useState: hv, useEffect: pv, useLayoutEffect: mv, useDebugValue: _v } = Ru;
	function gv(e, t, n) {
		const r = t(),
			[{ inst: i }, s] = hv({ inst: { value: r, getSnapshot: t } });
		return (
			mv(() => {
				(i.value = r), (i.getSnapshot = t), Ml(i) && s({ inst: i });
			}, [e, r, t]),
			pv(
				() => (
					Ml(i) && s({ inst: i }),
					e(() => {
						Ml(i) && s({ inst: i });
					})
				),
				[e]
			),
			_v(r),
			r
		);
	}
	function Ml(e) {
		const t = e.getSnapshot,
			n = e.value;
		try {
			const r = t();
			return !fv(n, r);
		} catch {
			return !0;
		}
	}
	function yv(e, t, n) {
		return t();
	}
	const vv = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
		Ev = !vv,
		Sv = Ev ? yv : gv;
	'useSyncExternalStore' in Ru && (e => e.useSyncExternalStore)(Ru);
	const $m = x.createContext(null),
		Hm = x.createContext(null),
		gd = x.createContext(null),
		ja = x.createContext(null),
		_i = x.createContext({ outlet: null, matches: [] }),
		jm = x.createContext(null);
	function ku() {
		return (
			(ku = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
				  }),
			ku.apply(this, arguments)
		);
	}
	function Ga() {
		return x.useContext(ja) != null;
	}
	function Gm() {
		return Ga() || Ne(!1), x.useContext(ja).location;
	}
	function wv() {
		Ga() || Ne(!1);
		let { basename: e, navigator: t } = x.useContext(gd),
			{ matches: n } = x.useContext(_i),
			{ pathname: r } = Gm(),
			i = JSON.stringify(sv(n).map(a => a.pathnameBase)),
			s = x.useRef(!1);
		return (
			x.useEffect(() => {
				s.current = !0;
			}),
			x.useCallback(
				function (a, l) {
					if ((l === void 0 && (l = {}), !s.current)) return;
					if (typeof a == 'number') {
						t.go(a);
						return;
					}
					let u = ov(a, JSON.parse(i), r, l.relative === 'path');
					e !== '/' && (u.pathname = u.pathname === '/' ? e : tr([e, u.pathname])),
						(l.replace ? t.replace : t.push)(u, l.state, l);
				},
				[e, t, i, r]
			)
		);
	}
	function Ym() {
		let { matches: e } = x.useContext(_i),
			t = e[e.length - 1];
		return t ? t.params : {};
	}
	function Tv(e, t) {
		Ga() || Ne(!1);
		let { navigator: n } = x.useContext(gd),
			r = x.useContext(Hm),
			{ matches: i } = x.useContext(_i),
			s = i[i.length - 1],
			o = s ? s.params : {};
		s && s.pathname;
		let a = s ? s.pathnameBase : '/';
		s && s.route;
		let l = Gm(),
			u;
		if (t) {
			var c;
			let y = typeof t == 'string' ? mi(t) : t;
			a === '/' || ((c = y.pathname) != null && c.startsWith(a)) || Ne(!1), (u = y);
		} else u = l;
		let d = u.pathname || '/',
			h = a === '/' ? d : d.slice(a.length) || '/',
			f = Hy(e, { pathname: h }),
			_ = xv(
				f &&
					f.map(y =>
						Object.assign({}, y, {
							params: Object.assign({}, o, y.params),
							pathname: tr([a, n.encodeLocation ? n.encodeLocation(y.pathname).pathname : y.pathname]),
							pathnameBase:
								y.pathnameBase === '/'
									? a
									: tr([a, n.encodeLocation ? n.encodeLocation(y.pathnameBase).pathname : y.pathnameBase]),
						})
					),
				i,
				r || void 0
			);
		return t && _
			? x.createElement(
					ja.Provider,
					{
						value: {
							location: ku({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u),
							navigationType: En.Pop,
						},
					},
					_
			  )
			: _;
	}
	function Rv() {
		let e = Iv(),
			t = cv(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
			n = e instanceof Error ? e.stack : null,
			i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
			s = null;
		return x.createElement(
			x.Fragment,
			null,
			x.createElement('h2', null, 'Unexpected Application Error!'),
			x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
			n ? x.createElement('pre', { style: i }, n) : null,
			s
		);
	}
	class bv extends x.Component {
		constructor(t) {
			super(t), (this.state = { location: t.location, error: t.error });
		}
		static getDerivedStateFromError(t) {
			return { error: t };
		}
		static getDerivedStateFromProps(t, n) {
			return n.location !== t.location
				? { error: t.error, location: t.location }
				: { error: t.error || n.error, location: n.location };
		}
		componentDidCatch(t, n) {
			console.error('React Router caught the following error during render', t, n);
		}
		render() {
			return this.state.error
				? x.createElement(
						_i.Provider,
						{ value: this.props.routeContext },
						x.createElement(jm.Provider, { value: this.state.error, children: this.props.component })
				  )
				: this.props.children;
		}
	}
	function kv(e) {
		let { routeContext: t, match: n, children: r } = e,
			i = x.useContext($m);
		return (
			i &&
				i.static &&
				i.staticContext &&
				(n.route.errorElement || n.route.ErrorBoundary) &&
				(i.staticContext._deepestRenderedBoundaryId = n.route.id),
			x.createElement(_i.Provider, { value: t }, r)
		);
	}
	function xv(e, t, n) {
		if ((t === void 0 && (t = []), e == null))
			if (n != null && n.errors) e = n.matches;
			else return null;
		let r = e,
			i = n == null ? void 0 : n.errors;
		if (i != null) {
			let s = r.findIndex(o => o.route.id && (i == null ? void 0 : i[o.route.id]));
			s >= 0 || Ne(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
		}
		return r.reduceRight((s, o, a) => {
			let l = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
				u = null;
			n &&
				(o.route.ErrorBoundary
					? (u = x.createElement(o.route.ErrorBoundary, null))
					: o.route.errorElement
					? (u = o.route.errorElement)
					: (u = x.createElement(Rv, null)));
			let c = t.concat(r.slice(0, a + 1)),
				d = () => {
					let h = s;
					return (
						l
							? (h = u)
							: o.route.Component
							? (h = x.createElement(o.route.Component, null))
							: o.route.element && (h = o.route.element),
						x.createElement(kv, { match: o, routeContext: { outlet: s, matches: c }, children: h })
					);
				};
			return n && (o.route.ErrorBoundary || o.route.errorElement || a === 0)
				? x.createElement(bv, {
						location: n.location,
						component: u,
						error: l,
						children: d(),
						routeContext: { outlet: null, matches: c },
				  })
				: d();
		}, null);
	}
	var eh;
	(function (e) {
		(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator');
	})(eh || (eh = {}));
	var ta;
	(function (e) {
		(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator');
	})(ta || (ta = {}));
	function Cv(e) {
		let t = x.useContext(Hm);
		return t || Ne(!1), t;
	}
	function Nv(e) {
		let t = x.useContext(_i);
		return t || Ne(!1), t;
	}
	function Ov(e) {
		let t = Nv(),
			n = t.matches[t.matches.length - 1];
		return n.route.id || Ne(!1), n.route.id;
	}
	function Iv() {
		var e;
		let t = x.useContext(jm),
			n = Cv(ta.UseRouteError),
			r = Ov(ta.UseRouteError);
		return t || ((e = n.errors) == null ? void 0 : e[r]);
	}
	function xu(e) {
		Ne(!1);
	}
	function Dv(e) {
		let {
			basename: t = '/',
			children: n = null,
			location: r,
			navigationType: i = En.Pop,
			navigator: s,
			static: o = !1,
		} = e;
		Ga() && Ne(!1);
		let a = t.replace(/^\/*/, '/'),
			l = x.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
		typeof r == 'string' && (r = mi(r));
		let { pathname: u = '/', search: c = '', hash: d = '', state: h = null, key: f = 'default' } = r,
			_ = x.useMemo(() => {
				let y = zm(u, a);
				return y == null
					? null
					: { location: { pathname: y, search: c, hash: d, state: h, key: f }, navigationType: i };
			}, [a, u, c, d, h, f, i]);
		return _ == null
			? null
			: x.createElement(gd.Provider, { value: l }, x.createElement(ja.Provider, { children: n, value: _ }));
	}
	function Av(e) {
		let { children: t, location: n } = e,
			r = x.useContext($m),
			i = r && !t ? r.router.routes : Cu(t);
		return Tv(i, n);
	}
	var th;
	(function (e) {
		(e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
	})(th || (th = {}));
	new Promise(() => {});
	function Cu(e, t) {
		t === void 0 && (t = []);
		let n = [];
		return (
			x.Children.forEach(e, (r, i) => {
				if (!x.isValidElement(r)) return;
				if (r.type === x.Fragment) {
					n.push.apply(n, Cu(r.props.children, t));
					return;
				}
				r.type !== xu && Ne(!1), !r.props.index || !r.props.children || Ne(!1);
				let s = [...t, i],
					o = {
						id: r.props.id || s.join('-'),
						caseSensitive: r.props.caseSensitive,
						element: r.props.element,
						Component: r.props.Component,
						index: r.props.index,
						path: r.props.path,
						loader: r.props.loader,
						action: r.props.action,
						errorElement: r.props.errorElement,
						ErrorBoundary: r.props.ErrorBoundary,
						hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
						shouldRevalidate: r.props.shouldRevalidate,
						handle: r.props.handle,
						lazy: r.props.lazy,
					};
				r.props.children && (o.children = Cu(r.props.children, s)), n.push(o);
			}),
			n
		);
	}
	/**
	 * React Router DOM v6.9.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */ function Pv(e) {
		let { basename: t, children: n, window: r } = e,
			i = x.useRef();
		i.current == null && (i.current = Fy({ window: r, v5Compat: !0 }));
		let s = i.current,
			[o, a] = x.useState({ action: s.action, location: s.location });
		return (
			x.useLayoutEffect(() => s.listen(a), [s]),
			x.createElement(Dv, { basename: t, children: n, location: o.location, navigationType: o.action, navigator: s })
		);
	}
	var nh;
	(function (e) {
		(e.UseScrollRestoration = 'useScrollRestoration'),
			(e.UseSubmitImpl = 'useSubmitImpl'),
			(e.UseFetcher = 'useFetcher');
	})(nh || (nh = {}));
	var rh;
	(function (e) {
		(e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
	})(rh || (rh = {}));
	class gi {
		constructor() {
			(this.listeners = []), (this.subscribe = this.subscribe.bind(this));
		}
		subscribe(t) {
			return (
				this.listeners.push(t),
				this.onSubscribe(),
				() => {
					(this.listeners = this.listeners.filter(n => n !== t)), this.onUnsubscribe();
				}
			);
		}
		hasListeners() {
			return this.listeners.length > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	}
	const ls = typeof window > 'u' || 'Deno' in window;
	function pt() {}
	function Lv(e, t) {
		return typeof e == 'function' ? e(t) : e;
	}
	function Nu(e) {
		return typeof e == 'number' && e >= 0 && e !== 1 / 0;
	}
	function Wm(e, t) {
		return Math.max(e + (t || 0) - Date.now(), 0);
	}
	function Rr(e, t, n) {
		return Us(e) ? (typeof t == 'function' ? { ...n, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
	}
	function Mv(e, t, n) {
		return Us(e)
			? typeof t == 'function'
				? { ...n, mutationKey: e, mutationFn: t }
				: { ...t, mutationKey: e }
			: typeof e == 'function'
			? { ...t, mutationFn: e }
			: { ...e };
	}
	function hn(e, t, n) {
		return Us(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
	}
	function ih(e, t) {
		const { type: n = 'all', exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e;
		if (Us(o)) {
			if (r) {
				if (t.queryHash !== yd(o, t.options)) return !1;
			} else if (!na(t.queryKey, o)) return !1;
		}
		if (n !== 'all') {
			const l = t.isActive();
			if ((n === 'active' && !l) || (n === 'inactive' && l)) return !1;
		}
		return !(
			(typeof a == 'boolean' && t.isStale() !== a) ||
			(typeof i < 'u' && i !== t.state.fetchStatus) ||
			(s && !s(t))
		);
	}
	function sh(e, t) {
		const { exact: n, fetching: r, predicate: i, mutationKey: s } = e;
		if (Us(s)) {
			if (!t.options.mutationKey) return !1;
			if (n) {
				if (Qn(t.options.mutationKey) !== Qn(s)) return !1;
			} else if (!na(t.options.mutationKey, s)) return !1;
		}
		return !((typeof r == 'boolean' && (t.state.status === 'loading') !== r) || (i && !i(t)));
	}
	function yd(e, t) {
		return ((t == null ? void 0 : t.queryKeyHashFn) || Qn)(e);
	}
	function Qn(e) {
		return JSON.stringify(e, (t, n) =>
			Iu(n)
				? Object.keys(n)
						.sort()
						.reduce((r, i) => ((r[i] = n[i]), r), {})
				: n
		);
	}
	function na(e, t) {
		return qm(e, t);
	}
	function qm(e, t) {
		return e === t
			? !0
			: typeof e != typeof t
			? !1
			: e && t && typeof e == 'object' && typeof t == 'object'
			? !Object.keys(t).some(n => !qm(e[n], t[n]))
			: !1;
	}
	function Vm(e, t) {
		if (e === t) return e;
		const n = oh(e) && oh(t);
		if (n || (Iu(e) && Iu(t))) {
			const r = n ? e.length : Object.keys(e).length,
				i = n ? t : Object.keys(t),
				s = i.length,
				o = n ? [] : {};
			let a = 0;
			for (let l = 0; l < s; l++) {
				const u = n ? l : i[l];
				(o[u] = Vm(e[u], t[u])), o[u] === e[u] && a++;
			}
			return r === s && a === r ? e : o;
		}
		return t;
	}
	function Ou(e, t) {
		if ((e && !t) || (t && !e)) return !1;
		for (const n in e) if (e[n] !== t[n]) return !1;
		return !0;
	}
	function oh(e) {
		return Array.isArray(e) && e.length === Object.keys(e).length;
	}
	function Iu(e) {
		if (!ah(e)) return !1;
		const t = e.constructor;
		if (typeof t > 'u') return !0;
		const n = t.prototype;
		return !(!ah(n) || !n.hasOwnProperty('isPrototypeOf'));
	}
	function ah(e) {
		return Object.prototype.toString.call(e) === '[object Object]';
	}
	function Us(e) {
		return Array.isArray(e);
	}
	function Qm(e) {
		return new Promise(t => {
			setTimeout(t, e);
		});
	}
	function lh(e) {
		Qm(0).then(e);
	}
	function Uv() {
		if (typeof AbortController == 'function') return new AbortController();
	}
	function Du(e, t, n) {
		return n.isDataEqual != null && n.isDataEqual(e, t)
			? e
			: typeof n.structuralSharing == 'function'
			? n.structuralSharing(e, t)
			: n.structuralSharing !== !1
			? Vm(e, t)
			: t;
	}
	class Bv extends gi {
		constructor() {
			super(),
				(this.setup = t => {
					if (!ls && window.addEventListener) {
						const n = () => t();
						return (
							window.addEventListener('visibilitychange', n, !1),
							window.addEventListener('focus', n, !1),
							() => {
								window.removeEventListener('visibilitychange', n), window.removeEventListener('focus', n);
							}
						);
					}
				});
		}
		onSubscribe() {
			this.cleanup || this.setEventListener(this.setup);
		}
		onUnsubscribe() {
			if (!this.hasListeners()) {
				var t;
				(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
			}
		}
		setEventListener(t) {
			var n;
			(this.setup = t),
				(n = this.cleanup) == null || n.call(this),
				(this.cleanup = t(r => {
					typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
				}));
		}
		setFocused(t) {
			(this.focused = t), t && this.onFocus();
		}
		onFocus() {
			this.listeners.forEach(t => {
				t();
			});
		}
		isFocused() {
			return typeof this.focused == 'boolean'
				? this.focused
				: typeof document > 'u'
				? !0
				: [void 0, 'visible', 'prerender'].includes(document.visibilityState);
		}
	}
	const ra = new Bv();
	class Fv extends gi {
		constructor() {
			super(),
				(this.setup = t => {
					if (!ls && window.addEventListener) {
						const n = () => t();
						return (
							window.addEventListener('online', n, !1),
							window.addEventListener('offline', n, !1),
							() => {
								window.removeEventListener('online', n), window.removeEventListener('offline', n);
							}
						);
					}
				});
		}
		onSubscribe() {
			this.cleanup || this.setEventListener(this.setup);
		}
		onUnsubscribe() {
			if (!this.hasListeners()) {
				var t;
				(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
			}
		}
		setEventListener(t) {
			var n;
			(this.setup = t),
				(n = this.cleanup) == null || n.call(this),
				(this.cleanup = t(r => {
					typeof r == 'boolean' ? this.setOnline(r) : this.onOnline();
				}));
		}
		setOnline(t) {
			(this.online = t), t && this.onOnline();
		}
		onOnline() {
			this.listeners.forEach(t => {
				t();
			});
		}
		isOnline() {
			return typeof this.online == 'boolean'
				? this.online
				: typeof navigator > 'u' || typeof navigator.onLine > 'u'
				? !0
				: navigator.onLine;
		}
	}
	const ia = new Fv();
	function zv(e) {
		return Math.min(1e3 * 2 ** e, 3e4);
	}
	function Ya(e) {
		return (e ?? 'online') === 'online' ? ia.isOnline() : !0;
	}
	class Km {
		constructor(t) {
			(this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
		}
	}
	function Po(e) {
		return e instanceof Km;
	}
	function Zm(e) {
		let t = !1,
			n = 0,
			r = !1,
			i,
			s,
			o;
		const a = new Promise((S, p) => {
				(s = S), (o = p);
			}),
			l = S => {
				r || (f(new Km(S)), e.abort == null || e.abort());
			},
			u = () => {
				t = !0;
			},
			c = () => {
				t = !1;
			},
			d = () => !ra.isFocused() || (e.networkMode !== 'always' && !ia.isOnline()),
			h = S => {
				r || ((r = !0), e.onSuccess == null || e.onSuccess(S), i == null || i(), s(S));
			},
			f = S => {
				r || ((r = !0), e.onError == null || e.onError(S), i == null || i(), o(S));
			},
			_ = () =>
				new Promise(S => {
					(i = p => {
						const m = r || !d();
						return m && S(p), m;
					}),
						e.onPause == null || e.onPause();
				}).then(() => {
					(i = void 0), r || e.onContinue == null || e.onContinue();
				}),
			y = () => {
				if (r) return;
				let S;
				try {
					S = e.fn();
				} catch (p) {
					S = Promise.reject(p);
				}
				Promise.resolve(S)
					.then(h)
					.catch(p => {
						var m, g;
						if (r) return;
						const E = (m = e.retry) != null ? m : 3,
							T = (g = e.retryDelay) != null ? g : zv,
							b = typeof T == 'function' ? T(n, p) : T,
							R = E === !0 || (typeof E == 'number' && n < E) || (typeof E == 'function' && E(n, p));
						if (t || !R) {
							f(p);
							return;
						}
						n++,
							e.onFail == null || e.onFail(n, p),
							Qm(b)
								.then(() => {
									if (d()) return _();
								})
								.then(() => {
									t ? f(p) : y();
								});
					});
			};
		return (
			Ya(e.networkMode) ? y() : _().then(y),
			{
				promise: a,
				cancel: l,
				continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
				cancelRetry: u,
				continueRetry: c,
			}
		);
	}
	const vd = console;
	function $v() {
		let e = [],
			t = 0,
			n = c => {
				c();
			},
			r = c => {
				c();
			};
		const i = c => {
				let d;
				t++;
				try {
					d = c();
				} finally {
					t--, t || a();
				}
				return d;
			},
			s = c => {
				t
					? e.push(c)
					: lh(() => {
							n(c);
					  });
			},
			o =
				c =>
				(...d) => {
					s(() => {
						c(...d);
					});
				},
			a = () => {
				const c = e;
				(e = []),
					c.length &&
						lh(() => {
							r(() => {
								c.forEach(d => {
									n(d);
								});
							});
						});
			};
		return {
			batch: i,
			batchCalls: o,
			schedule: s,
			setNotifyFunction: c => {
				n = c;
			},
			setBatchNotifyFunction: c => {
				r = c;
			},
		};
	}
	const ge = $v();
	class Xm {
		destroy() {
			this.clearGcTimeout();
		}
		scheduleGc() {
			this.clearGcTimeout(),
				Nu(this.cacheTime) &&
					(this.gcTimeout = setTimeout(() => {
						this.optionalRemove();
					}, this.cacheTime));
		}
		updateCacheTime(t) {
			this.cacheTime = Math.max(this.cacheTime || 0, t ?? (ls ? 1 / 0 : 5 * 60 * 1e3));
		}
		clearGcTimeout() {
			this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
		}
	}
	class Hv extends Xm {
		constructor(t) {
			super(),
				(this.abortSignalConsumed = !1),
				(this.defaultOptions = t.defaultOptions),
				this.setOptions(t.options),
				(this.observers = []),
				(this.cache = t.cache),
				(this.logger = t.logger || vd),
				(this.queryKey = t.queryKey),
				(this.queryHash = t.queryHash),
				(this.initialState = t.state || jv(this.options)),
				(this.state = this.initialState),
				this.scheduleGc();
		}
		get meta() {
			return this.options.meta;
		}
		setOptions(t) {
			(this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
		}
		optionalRemove() {
			!this.observers.length && this.state.fetchStatus === 'idle' && this.cache.remove(this);
		}
		setData(t, n) {
			const r = Du(this.state.data, t, this.options);
			return (
				this.dispatch({
					data: r,
					type: 'success',
					dataUpdatedAt: n == null ? void 0 : n.updatedAt,
					manual: n == null ? void 0 : n.manual,
				}),
				r
			);
		}
		setState(t, n) {
			this.dispatch({ type: 'setState', state: t, setStateOptions: n });
		}
		cancel(t) {
			var n;
			const r = this.promise;
			return (n = this.retryer) == null || n.cancel(t), r ? r.then(pt).catch(pt) : Promise.resolve();
		}
		destroy() {
			super.destroy(), this.cancel({ silent: !0 });
		}
		reset() {
			this.destroy(), this.setState(this.initialState);
		}
		isActive() {
			return this.observers.some(t => t.options.enabled !== !1);
		}
		isDisabled() {
			return this.getObserversCount() > 0 && !this.isActive();
		}
		isStale() {
			return (
				this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
			);
		}
		isStaleByTime(t = 0) {
			return this.state.isInvalidated || !this.state.dataUpdatedAt || !Wm(this.state.dataUpdatedAt, t);
		}
		onFocus() {
			var t;
			const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
			n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
		}
		onOnline() {
			var t;
			const n = this.observers.find(r => r.shouldFetchOnReconnect());
			n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
		}
		addObserver(t) {
			this.observers.indexOf(t) === -1 &&
				(this.observers.push(t),
				this.clearGcTimeout(),
				this.cache.notify({ type: 'observerAdded', query: this, observer: t }));
		}
		removeObserver(t) {
			this.observers.indexOf(t) !== -1 &&
				((this.observers = this.observers.filter(n => n !== t)),
				this.observers.length ||
					(this.retryer &&
						(this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
					this.scheduleGc()),
				this.cache.notify({ type: 'observerRemoved', query: this, observer: t }));
		}
		getObserversCount() {
			return this.observers.length;
		}
		invalidate() {
			this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
		}
		fetch(t, n) {
			var r, i;
			if (this.state.fetchStatus !== 'idle') {
				if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
				else if (this.promise) {
					var s;
					return (s = this.retryer) == null || s.continueRetry(), this.promise;
				}
			}
			if ((t && this.setOptions(t), !this.options.queryFn)) {
				const f = this.observers.find(_ => _.options.queryFn);
				f && this.setOptions(f.options);
			}
			Array.isArray(this.options.queryKey);
			const o = Uv(),
				a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
				l = f => {
					Object.defineProperty(f, 'signal', {
						enumerable: !0,
						get: () => {
							if (o) return (this.abortSignalConsumed = !0), o.signal;
						},
					});
				};
			l(a);
			const u = () =>
					this.options.queryFn
						? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
						: Promise.reject('Missing queryFn'),
				c = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: u };
			if (
				(l(c),
				(r = this.options.behavior) == null || r.onFetch(c),
				(this.revertState = this.state),
				this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((i = c.fetchOptions) == null ? void 0 : i.meta))
			) {
				var d;
				this.dispatch({ type: 'fetch', meta: (d = c.fetchOptions) == null ? void 0 : d.meta });
			}
			const h = f => {
				if (((Po(f) && f.silent) || this.dispatch({ type: 'error', error: f }), !Po(f))) {
					var _, y, S, p;
					(_ = (y = this.cache.config).onError) == null || _.call(y, f, this),
						(S = (p = this.cache.config).onSettled) == null || S.call(p, this.state.data, f, this);
				}
				this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
			};
			return (
				(this.retryer = Zm({
					fn: c.fetchFn,
					abort: o == null ? void 0 : o.abort.bind(o),
					onSuccess: f => {
						var _, y, S, p;
						if (typeof f > 'u') {
							h(new Error(this.queryHash + ' data is undefined'));
							return;
						}
						this.setData(f),
							(_ = (y = this.cache.config).onSuccess) == null || _.call(y, f, this),
							(S = (p = this.cache.config).onSettled) == null || S.call(p, f, this.state.error, this),
							this.isFetchingOptimistic || this.scheduleGc(),
							(this.isFetchingOptimistic = !1);
					},
					onError: h,
					onFail: (f, _) => {
						this.dispatch({ type: 'failed', failureCount: f, error: _ });
					},
					onPause: () => {
						this.dispatch({ type: 'pause' });
					},
					onContinue: () => {
						this.dispatch({ type: 'continue' });
					},
					retry: c.options.retry,
					retryDelay: c.options.retryDelay,
					networkMode: c.options.networkMode,
				})),
				(this.promise = this.retryer.promise),
				this.promise
			);
		}
		dispatch(t) {
			const n = r => {
				var i, s;
				switch (t.type) {
					case 'failed':
						return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
					case 'pause':
						return { ...r, fetchStatus: 'paused' };
					case 'continue':
						return { ...r, fetchStatus: 'fetching' };
					case 'fetch':
						return {
							...r,
							fetchFailureCount: 0,
							fetchFailureReason: null,
							fetchMeta: (i = t.meta) != null ? i : null,
							fetchStatus: Ya(this.options.networkMode) ? 'fetching' : 'paused',
							...(!r.dataUpdatedAt && { error: null, status: 'loading' }),
						};
					case 'success':
						return {
							...r,
							data: t.data,
							dataUpdateCount: r.dataUpdateCount + 1,
							dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
							error: null,
							isInvalidated: !1,
							status: 'success',
							...(!t.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
						};
					case 'error':
						const o = t.error;
						return Po(o) && o.revert && this.revertState
							? { ...this.revertState }
							: {
									...r,
									error: o,
									errorUpdateCount: r.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: r.fetchFailureCount + 1,
									fetchFailureReason: o,
									fetchStatus: 'idle',
									status: 'error',
							  };
					case 'invalidate':
						return { ...r, isInvalidated: !0 };
					case 'setState':
						return { ...r, ...t.state };
				}
			};
			(this.state = n(this.state)),
				ge.batch(() => {
					this.observers.forEach(r => {
						r.onQueryUpdate(t);
					}),
						this.cache.notify({ query: this, type: 'updated', action: t });
				});
		}
	}
	function jv(e) {
		const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
			n = typeof t < 'u',
			r = n ? (typeof e.initialDataUpdatedAt == 'function' ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
		return {
			data: t,
			dataUpdateCount: 0,
			dataUpdatedAt: n ? r ?? Date.now() : 0,
			error: null,
			errorUpdateCount: 0,
			errorUpdatedAt: 0,
			fetchFailureCount: 0,
			fetchFailureReason: null,
			fetchMeta: null,
			isInvalidated: !1,
			status: n ? 'success' : 'loading',
			fetchStatus: 'idle',
		};
	}
	class Jm extends gi {
		constructor(t) {
			super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
		}
		build(t, n, r) {
			var i;
			const s = n.queryKey,
				o = (i = n.queryHash) != null ? i : yd(s, n);
			let a = this.get(o);
			return (
				a ||
					((a = new Hv({
						cache: this,
						logger: t.getLogger(),
						queryKey: s,
						queryHash: o,
						options: t.defaultQueryOptions(n),
						state: r,
						defaultOptions: t.getQueryDefaults(s),
					})),
					this.add(a)),
				a
			);
		}
		add(t) {
			this.queriesMap[t.queryHash] ||
				((this.queriesMap[t.queryHash] = t), this.queries.push(t), this.notify({ type: 'added', query: t }));
		}
		remove(t) {
			const n = this.queriesMap[t.queryHash];
			n &&
				(t.destroy(),
				(this.queries = this.queries.filter(r => r !== t)),
				n === t && delete this.queriesMap[t.queryHash],
				this.notify({ type: 'removed', query: t }));
		}
		clear() {
			ge.batch(() => {
				this.queries.forEach(t => {
					this.remove(t);
				});
			});
		}
		get(t) {
			return this.queriesMap[t];
		}
		getAll() {
			return this.queries;
		}
		find(t, n) {
			const [r] = hn(t, n);
			return typeof r.exact > 'u' && (r.exact = !0), this.queries.find(i => ih(r, i));
		}
		findAll(t, n) {
			const [r] = hn(t, n);
			return Object.keys(r).length > 0 ? this.queries.filter(i => ih(r, i)) : this.queries;
		}
		notify(t) {
			ge.batch(() => {
				this.listeners.forEach(n => {
					n(t);
				});
			});
		}
		onFocus() {
			ge.batch(() => {
				this.queries.forEach(t => {
					t.onFocus();
				});
			});
		}
		onOnline() {
			ge.batch(() => {
				this.queries.forEach(t => {
					t.onOnline();
				});
			});
		}
	}
	class Gv extends Xm {
		constructor(t) {
			super(),
				(this.defaultOptions = t.defaultOptions),
				(this.mutationId = t.mutationId),
				(this.mutationCache = t.mutationCache),
				(this.logger = t.logger || vd),
				(this.observers = []),
				(this.state = t.state || e_()),
				this.setOptions(t.options),
				this.scheduleGc();
		}
		setOptions(t) {
			(this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
		}
		get meta() {
			return this.options.meta;
		}
		setState(t) {
			this.dispatch({ type: 'setState', state: t });
		}
		addObserver(t) {
			this.observers.indexOf(t) === -1 &&
				(this.observers.push(t),
				this.clearGcTimeout(),
				this.mutationCache.notify({ type: 'observerAdded', mutation: this, observer: t }));
		}
		removeObserver(t) {
			(this.observers = this.observers.filter(n => n !== t)),
				this.scheduleGc(),
				this.mutationCache.notify({ type: 'observerRemoved', mutation: this, observer: t });
		}
		optionalRemove() {
			this.observers.length || (this.state.status === 'loading' ? this.scheduleGc() : this.mutationCache.remove(this));
		}
		continue() {
			var t, n;
			return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute();
		}
		async execute() {
			const t = () => {
					var R;
					return (
						(this.retryer = Zm({
							fn: () =>
								this.options.mutationFn
									? this.options.mutationFn(this.state.variables)
									: Promise.reject('No mutationFn found'),
							onFail: (w, A) => {
								this.dispatch({ type: 'failed', failureCount: w, error: A });
							},
							onPause: () => {
								this.dispatch({ type: 'pause' });
							},
							onContinue: () => {
								this.dispatch({ type: 'continue' });
							},
							retry: (R = this.options.retry) != null ? R : 0,
							retryDelay: this.options.retryDelay,
							networkMode: this.options.networkMode,
						})),
						this.retryer.promise
					);
				},
				n = this.state.status === 'loading';
			try {
				var r, i, s, o, a, l, u, c;
				if (!n) {
					var d, h, f, _;
					this.dispatch({ type: 'loading', variables: this.options.variables }),
						await ((d = (h = this.mutationCache.config).onMutate) == null
							? void 0
							: d.call(h, this.state.variables, this));
					const w = await ((f = (_ = this.options).onMutate) == null ? void 0 : f.call(_, this.state.variables));
					w !== this.state.context && this.dispatch({ type: 'loading', context: w, variables: this.state.variables });
				}
				const R = await t();
				return (
					await ((r = (i = this.mutationCache.config).onSuccess) == null
						? void 0
						: r.call(i, R, this.state.variables, this.state.context, this)),
					await ((s = (o = this.options).onSuccess) == null
						? void 0
						: s.call(o, R, this.state.variables, this.state.context)),
					await ((a = (l = this.mutationCache.config).onSettled) == null
						? void 0
						: a.call(l, R, null, this.state.variables, this.state.context, this)),
					await ((u = (c = this.options).onSettled) == null
						? void 0
						: u.call(c, R, null, this.state.variables, this.state.context)),
					this.dispatch({ type: 'success', data: R }),
					R
				);
			} catch (R) {
				try {
					var y, S, p, m, g, E, T, b;
					throw (
						(await ((y = (S = this.mutationCache.config).onError) == null
							? void 0
							: y.call(S, R, this.state.variables, this.state.context, this)),
						await ((p = (m = this.options).onError) == null
							? void 0
							: p.call(m, R, this.state.variables, this.state.context)),
						await ((g = (E = this.mutationCache.config).onSettled) == null
							? void 0
							: g.call(E, void 0, R, this.state.variables, this.state.context, this)),
						await ((T = (b = this.options).onSettled) == null
							? void 0
							: T.call(b, void 0, R, this.state.variables, this.state.context)),
						R)
					);
				} finally {
					this.dispatch({ type: 'error', error: R });
				}
			}
		}
		dispatch(t) {
			const n = r => {
				switch (t.type) {
					case 'failed':
						return { ...r, failureCount: t.failureCount, failureReason: t.error };
					case 'pause':
						return { ...r, isPaused: !0 };
					case 'continue':
						return { ...r, isPaused: !1 };
					case 'loading':
						return {
							...r,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: !Ya(this.options.networkMode),
							status: 'loading',
							variables: t.variables,
						};
					case 'success':
						return {
							...r,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: 'success',
							isPaused: !1,
						};
					case 'error':
						return {
							...r,
							data: void 0,
							error: t.error,
							failureCount: r.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: 'error',
						};
					case 'setState':
						return { ...r, ...t.state };
				}
			};
			(this.state = n(this.state)),
				ge.batch(() => {
					this.observers.forEach(r => {
						r.onMutationUpdate(t);
					}),
						this.mutationCache.notify({ mutation: this, type: 'updated', action: t });
				});
		}
	}
	function e_() {
		return {
			context: void 0,
			data: void 0,
			error: null,
			failureCount: 0,
			failureReason: null,
			isPaused: !1,
			status: 'idle',
			variables: void 0,
		};
	}
	class Yv extends gi {
		constructor(t) {
			super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
		}
		build(t, n, r) {
			const i = new Gv({
				mutationCache: this,
				logger: t.getLogger(),
				mutationId: ++this.mutationId,
				options: t.defaultMutationOptions(n),
				state: r,
				defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0,
			});
			return this.add(i), i;
		}
		add(t) {
			this.mutations.push(t), this.notify({ type: 'added', mutation: t });
		}
		remove(t) {
			(this.mutations = this.mutations.filter(n => n !== t)), this.notify({ type: 'removed', mutation: t });
		}
		clear() {
			ge.batch(() => {
				this.mutations.forEach(t => {
					this.remove(t);
				});
			});
		}
		getAll() {
			return this.mutations;
		}
		find(t) {
			return typeof t.exact > 'u' && (t.exact = !0), this.mutations.find(n => sh(t, n));
		}
		findAll(t) {
			return this.mutations.filter(n => sh(t, n));
		}
		notify(t) {
			ge.batch(() => {
				this.listeners.forEach(n => {
					n(t);
				});
			});
		}
		resumePausedMutations() {
			var t;
			return (
				(this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
					.then(() => {
						const n = this.mutations.filter(r => r.state.isPaused);
						return ge.batch(() => n.reduce((r, i) => r.then(() => i.continue().catch(pt)), Promise.resolve()));
					})
					.then(() => {
						this.resuming = void 0;
					})),
				this.resuming
			);
		}
	}
	function Au() {
		return {
			onFetch: e => {
				e.fetchFn = () => {
					var t, n, r, i, s, o;
					const a = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage,
						l = (r = e.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore,
						u = l == null ? void 0 : l.pageParam,
						c = (l == null ? void 0 : l.direction) === 'forward',
						d = (l == null ? void 0 : l.direction) === 'backward',
						h = ((s = e.state.data) == null ? void 0 : s.pages) || [],
						f = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
					let _ = f,
						y = !1;
					const S = b => {
							Object.defineProperty(b, 'signal', {
								enumerable: !0,
								get: () => {
									var R;
									if ((R = e.signal) != null && R.aborted) y = !0;
									else {
										var w;
										(w = e.signal) == null ||
											w.addEventListener('abort', () => {
												y = !0;
											});
									}
									return e.signal;
								},
							});
						},
						p = e.options.queryFn || (() => Promise.reject('Missing queryFn')),
						m = (b, R, w, A) => ((_ = A ? [R, ..._] : [..._, R]), A ? [w, ...b] : [...b, w]),
						g = (b, R, w, A) => {
							if (y) return Promise.reject('Cancelled');
							if (typeof w > 'u' && !R && b.length) return Promise.resolve(b);
							const O = { queryKey: e.queryKey, pageParam: w, meta: e.options.meta };
							S(O);
							const B = p(O);
							return Promise.resolve(B).then(I => m(b, w, I, A));
						};
					let E;
					if (!h.length) E = g([]);
					else if (c) {
						const b = typeof u < 'u',
							R = b ? u : Pu(e.options, h);
						E = g(h, b, R);
					} else if (d) {
						const b = typeof u < 'u',
							R = b ? u : t_(e.options, h);
						E = g(h, b, R, !0);
					} else {
						_ = [];
						const b = typeof e.options.getNextPageParam > 'u';
						E = (a && h[0] ? a(h[0], 0, h) : !0) ? g([], b, f[0]) : Promise.resolve(m([], f[0], h[0]));
						for (let w = 1; w < h.length; w++)
							E = E.then(A => {
								if (a && h[w] ? a(h[w], w, h) : !0) {
									const B = b ? f[w] : Pu(e.options, A);
									return g(A, b, B);
								}
								return Promise.resolve(m(A, f[w], h[w]));
							});
					}
					return E.then(b => ({ pages: b, pageParams: _ }));
				};
			},
		};
	}
	function Pu(e, t) {
		return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
	}
	function t_(e, t) {
		return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
	}
	function Wv(e, t) {
		if (e.getNextPageParam && Array.isArray(t)) {
			const n = Pu(e, t);
			return typeof n < 'u' && n !== null && n !== !1;
		}
	}
	function qv(e, t) {
		if (e.getPreviousPageParam && Array.isArray(t)) {
			const n = t_(e, t);
			return typeof n < 'u' && n !== null && n !== !1;
		}
	}
	class Vv {
		constructor(t = {}) {
			(this.queryCache = t.queryCache || new Jm()),
				(this.mutationCache = t.mutationCache || new Yv()),
				(this.logger = t.logger || vd),
				(this.defaultOptions = t.defaultOptions || {}),
				(this.queryDefaults = []),
				(this.mutationDefaults = []),
				(this.mountCount = 0);
		}
		mount() {
			this.mountCount++,
				this.mountCount === 1 &&
					((this.unsubscribeFocus = ra.subscribe(() => {
						ra.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
					})),
					(this.unsubscribeOnline = ia.subscribe(() => {
						ia.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
					})));
		}
		unmount() {
			var t, n;
			this.mountCount--,
				this.mountCount === 0 &&
					((t = this.unsubscribeFocus) == null || t.call(this),
					(this.unsubscribeFocus = void 0),
					(n = this.unsubscribeOnline) == null || n.call(this),
					(this.unsubscribeOnline = void 0));
		}
		isFetching(t, n) {
			const [r] = hn(t, n);
			return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length;
		}
		isMutating(t) {
			return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
		}
		getQueryData(t, n) {
			var r;
			return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
		}
		ensureQueryData(t, n, r) {
			const i = Rr(t, n, r),
				s = this.getQueryData(i.queryKey);
			return s ? Promise.resolve(s) : this.fetchQuery(i);
		}
		getQueriesData(t) {
			return this.getQueryCache()
				.findAll(t)
				.map(({ queryKey: n, state: r }) => {
					const i = r.data;
					return [n, i];
				});
		}
		setQueryData(t, n, r) {
			const i = this.queryCache.find(t),
				s = i == null ? void 0 : i.state.data,
				o = Lv(n, s);
			if (typeof o > 'u') return;
			const a = Rr(t),
				l = this.defaultQueryOptions(a);
			return this.queryCache.build(this, l).setData(o, { ...r, manual: !0 });
		}
		setQueriesData(t, n, r) {
			return ge.batch(() =>
				this.getQueryCache()
					.findAll(t)
					.map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
			);
		}
		getQueryState(t, n) {
			var r;
			return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
		}
		removeQueries(t, n) {
			const [r] = hn(t, n),
				i = this.queryCache;
			ge.batch(() => {
				i.findAll(r).forEach(s => {
					i.remove(s);
				});
			});
		}
		resetQueries(t, n, r) {
			const [i, s] = hn(t, n, r),
				o = this.queryCache,
				a = { type: 'active', ...i };
			return ge.batch(
				() => (
					o.findAll(i).forEach(l => {
						l.reset();
					}),
					this.refetchQueries(a, s)
				)
			);
		}
		cancelQueries(t, n, r) {
			const [i, s = {}] = hn(t, n, r);
			typeof s.revert > 'u' && (s.revert = !0);
			const o = ge.batch(() => this.queryCache.findAll(i).map(a => a.cancel(s)));
			return Promise.all(o).then(pt).catch(pt);
		}
		invalidateQueries(t, n, r) {
			const [i, s] = hn(t, n, r);
			return ge.batch(() => {
				var o, a;
				if (
					(this.queryCache.findAll(i).forEach(u => {
						u.invalidate();
					}),
					i.refetchType === 'none')
				)
					return Promise.resolve();
				const l = { ...i, type: (o = (a = i.refetchType) != null ? a : i.type) != null ? o : 'active' };
				return this.refetchQueries(l, s);
			});
		}
		refetchQueries(t, n, r) {
			const [i, s] = hn(t, n, r),
				o = ge.batch(() =>
					this.queryCache
						.findAll(i)
						.filter(l => !l.isDisabled())
						.map(l => {
							var u;
							return l.fetch(void 0, {
								...s,
								cancelRefetch: (u = s == null ? void 0 : s.cancelRefetch) != null ? u : !0,
								meta: { refetchPage: i.refetchPage },
							});
						})
				);
			let a = Promise.all(o).then(pt);
			return (s != null && s.throwOnError) || (a = a.catch(pt)), a;
		}
		fetchQuery(t, n, r) {
			const i = Rr(t, n, r),
				s = this.defaultQueryOptions(i);
			typeof s.retry > 'u' && (s.retry = !1);
			const o = this.queryCache.build(this, s);
			return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data);
		}
		prefetchQuery(t, n, r) {
			return this.fetchQuery(t, n, r).then(pt).catch(pt);
		}
		fetchInfiniteQuery(t, n, r) {
			const i = Rr(t, n, r);
			return (i.behavior = Au()), this.fetchQuery(i);
		}
		prefetchInfiniteQuery(t, n, r) {
			return this.fetchInfiniteQuery(t, n, r).then(pt).catch(pt);
		}
		resumePausedMutations() {
			return this.mutationCache.resumePausedMutations();
		}
		getQueryCache() {
			return this.queryCache;
		}
		getMutationCache() {
			return this.mutationCache;
		}
		getLogger() {
			return this.logger;
		}
		getDefaultOptions() {
			return this.defaultOptions;
		}
		setDefaultOptions(t) {
			this.defaultOptions = t;
		}
		setQueryDefaults(t, n) {
			const r = this.queryDefaults.find(i => Qn(t) === Qn(i.queryKey));
			r ? (r.defaultOptions = n) : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
		}
		getQueryDefaults(t) {
			if (!t) return;
			const n = this.queryDefaults.find(r => na(t, r.queryKey));
			return n == null ? void 0 : n.defaultOptions;
		}
		setMutationDefaults(t, n) {
			const r = this.mutationDefaults.find(i => Qn(t) === Qn(i.mutationKey));
			r ? (r.defaultOptions = n) : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
		}
		getMutationDefaults(t) {
			if (!t) return;
			const n = this.mutationDefaults.find(r => na(t, r.mutationKey));
			return n == null ? void 0 : n.defaultOptions;
		}
		defaultQueryOptions(t) {
			if (t != null && t._defaulted) return t;
			const n = {
				...this.defaultOptions.queries,
				...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
				...t,
				_defaulted: !0,
			};
			return (
				!n.queryHash && n.queryKey && (n.queryHash = yd(n.queryKey, n)),
				typeof n.refetchOnReconnect > 'u' && (n.refetchOnReconnect = n.networkMode !== 'always'),
				typeof n.useErrorBoundary > 'u' && (n.useErrorBoundary = !!n.suspense),
				n
			);
		}
		defaultMutationOptions(t) {
			return t != null && t._defaulted
				? t
				: {
						...this.defaultOptions.mutations,
						...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
						...t,
						_defaulted: !0,
				  };
		}
		clear() {
			this.queryCache.clear(), this.mutationCache.clear();
		}
	}
	class n_ extends gi {
		constructor(t, n) {
			super(),
				(this.client = t),
				(this.options = n),
				(this.trackedProps = new Set()),
				(this.selectError = null),
				this.bindMethods(),
				this.setOptions(n);
		}
		bindMethods() {
			(this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
		}
		onSubscribe() {
			this.listeners.length === 1 &&
				(this.currentQuery.addObserver(this),
				uh(this.currentQuery, this.options) && this.executeFetch(),
				this.updateTimers());
		}
		onUnsubscribe() {
			this.listeners.length || this.destroy();
		}
		shouldFetchOnReconnect() {
			return Lu(this.currentQuery, this.options, this.options.refetchOnReconnect);
		}
		shouldFetchOnWindowFocus() {
			return Lu(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
		}
		destroy() {
			(this.listeners = []),
				this.clearStaleTimeout(),
				this.clearRefetchInterval(),
				this.currentQuery.removeObserver(this);
		}
		setOptions(t, n) {
			const r = this.options,
				i = this.currentQuery;
			if (
				((this.options = this.client.defaultQueryOptions(t)),
				Ou(r, this.options) ||
					this.client
						.getQueryCache()
						.notify({ type: 'observerOptionsUpdated', query: this.currentQuery, observer: this }),
				typeof this.options.enabled < 'u' && typeof this.options.enabled != 'boolean')
			)
				throw new Error('Expected enabled to be a boolean');
			this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
			const s = this.hasListeners();
			s && ch(this.currentQuery, i, this.options, r) && this.executeFetch(),
				this.updateResult(n),
				s &&
					(this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) &&
					this.updateStaleTimeout();
			const o = this.computeRefetchInterval();
			s &&
				(this.currentQuery !== i || this.options.enabled !== r.enabled || o !== this.currentRefetchInterval) &&
				this.updateRefetchInterval(o);
		}
		getOptimisticResult(t) {
			const n = this.client.getQueryCache().build(this.client, t);
			return this.createResult(n, t);
		}
		getCurrentResult() {
			return this.currentResult;
		}
		trackResult(t) {
			const n = {};
			return (
				Object.keys(t).forEach(r => {
					Object.defineProperty(n, r, {
						configurable: !1,
						enumerable: !0,
						get: () => (this.trackedProps.add(r), t[r]),
					});
				}),
				n
			);
		}
		getCurrentQuery() {
			return this.currentQuery;
		}
		remove() {
			this.client.getQueryCache().remove(this.currentQuery);
		}
		refetch({ refetchPage: t, ...n } = {}) {
			return this.fetch({ ...n, meta: { refetchPage: t } });
		}
		fetchOptimistic(t) {
			const n = this.client.defaultQueryOptions(t),
				r = this.client.getQueryCache().build(this.client, n);
			return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, n));
		}
		fetch(t) {
			var n;
			return this.executeFetch({ ...t, cancelRefetch: (n = t.cancelRefetch) != null ? n : !0 }).then(
				() => (this.updateResult(), this.currentResult)
			);
		}
		executeFetch(t) {
			this.updateQuery();
			let n = this.currentQuery.fetch(this.options, t);
			return (t != null && t.throwOnError) || (n = n.catch(pt)), n;
		}
		updateStaleTimeout() {
			if ((this.clearStaleTimeout(), ls || this.currentResult.isStale || !Nu(this.options.staleTime))) return;
			const n = Wm(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
			this.staleTimeoutId = setTimeout(() => {
				this.currentResult.isStale || this.updateResult();
			}, n);
		}
		computeRefetchInterval() {
			var t;
			return typeof this.options.refetchInterval == 'function'
				? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
				: (t = this.options.refetchInterval) != null
				? t
				: !1;
		}
		updateRefetchInterval(t) {
			this.clearRefetchInterval(),
				(this.currentRefetchInterval = t),
				!(ls || this.options.enabled === !1 || !Nu(this.currentRefetchInterval) || this.currentRefetchInterval === 0) &&
					(this.refetchIntervalId = setInterval(() => {
						(this.options.refetchIntervalInBackground || ra.isFocused()) && this.executeFetch();
					}, this.currentRefetchInterval));
		}
		updateTimers() {
			this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
		}
		clearStaleTimeout() {
			this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
		}
		clearRefetchInterval() {
			this.refetchIntervalId && (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
		}
		createResult(t, n) {
			const r = this.currentQuery,
				i = this.options,
				s = this.currentResult,
				o = this.currentResultState,
				a = this.currentResultOptions,
				l = t !== r,
				u = l ? t.state : this.currentQueryInitialState,
				c = l ? this.currentResult : this.previousQueryResult,
				{ state: d } = t;
			let { dataUpdatedAt: h, error: f, errorUpdatedAt: _, fetchStatus: y, status: S } = d,
				p = !1,
				m = !1,
				g;
			if (n._optimisticResults) {
				const w = this.hasListeners(),
					A = !w && uh(t, n),
					O = w && ch(t, r, n, i);
				(A || O) && ((y = Ya(t.options.networkMode) ? 'fetching' : 'paused'), h || (S = 'loading')),
					n._optimisticResults === 'isRestoring' && (y = 'idle');
			}
			if (n.keepPreviousData && !d.dataUpdatedAt && c != null && c.isSuccess && S !== 'error')
				(g = c.data), (h = c.dataUpdatedAt), (S = c.status), (p = !0);
			else if (n.select && typeof d.data < 'u')
				if (s && d.data === (o == null ? void 0 : o.data) && n.select === this.selectFn) g = this.selectResult;
				else
					try {
						(this.selectFn = n.select),
							(g = n.select(d.data)),
							(g = Du(s == null ? void 0 : s.data, g, n)),
							(this.selectResult = g),
							(this.selectError = null);
					} catch (w) {
						this.selectError = w;
					}
			else g = d.data;
			if (typeof n.placeholderData < 'u' && typeof g > 'u' && S === 'loading') {
				let w;
				if (s != null && s.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
					w = s.data;
				else if (
					((w = typeof n.placeholderData == 'function' ? n.placeholderData() : n.placeholderData),
					n.select && typeof w < 'u')
				)
					try {
						(w = n.select(w)), (this.selectError = null);
					} catch (A) {
						this.selectError = A;
					}
				typeof w < 'u' && ((S = 'success'), (g = Du(s == null ? void 0 : s.data, w, n)), (m = !0));
			}
			this.selectError && ((f = this.selectError), (g = this.selectResult), (_ = Date.now()), (S = 'error'));
			const E = y === 'fetching',
				T = S === 'loading',
				b = S === 'error';
			return {
				status: S,
				fetchStatus: y,
				isLoading: T,
				isSuccess: S === 'success',
				isError: b,
				isInitialLoading: T && E,
				data: g,
				dataUpdatedAt: h,
				error: f,
				errorUpdatedAt: _,
				failureCount: d.fetchFailureCount,
				failureReason: d.fetchFailureReason,
				errorUpdateCount: d.errorUpdateCount,
				isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
				isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
				isFetching: E,
				isRefetching: E && !T,
				isLoadingError: b && d.dataUpdatedAt === 0,
				isPaused: y === 'paused',
				isPlaceholderData: m,
				isPreviousData: p,
				isRefetchError: b && d.dataUpdatedAt !== 0,
				isStale: Ed(t, n),
				refetch: this.refetch,
				remove: this.remove,
			};
		}
		updateResult(t) {
			const n = this.currentResult,
				r = this.createResult(this.currentQuery, this.options);
			if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), Ou(r, n)))
				return;
			this.currentResult = r;
			const i = { cache: !0 },
				s = () => {
					if (!n) return !0;
					const { notifyOnChangeProps: o } = this.options;
					if (o === 'all' || (!o && !this.trackedProps.size)) return !0;
					const a = new Set(o ?? this.trackedProps);
					return (
						this.options.useErrorBoundary && a.add('error'),
						Object.keys(this.currentResult).some(l => {
							const u = l;
							return this.currentResult[u] !== n[u] && a.has(u);
						})
					);
				};
			(t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0), this.notify({ ...i, ...t });
		}
		updateQuery() {
			const t = this.client.getQueryCache().build(this.client, this.options);
			if (t === this.currentQuery) return;
			const n = this.currentQuery;
			(this.currentQuery = t),
				(this.currentQueryInitialState = t.state),
				(this.previousQueryResult = this.currentResult),
				this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
		}
		onQueryUpdate(t) {
			const n = {};
			t.type === 'success' ? (n.onSuccess = !t.manual) : t.type === 'error' && !Po(t.error) && (n.onError = !0),
				this.updateResult(n),
				this.hasListeners() && this.updateTimers();
		}
		notify(t) {
			ge.batch(() => {
				if (t.onSuccess) {
					var n, r, i, s;
					(n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data),
						(i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
				} else if (t.onError) {
					var o, a, l, u;
					(o = (a = this.options).onError) == null || o.call(a, this.currentResult.error),
						(l = (u = this.options).onSettled) == null || l.call(u, void 0, this.currentResult.error);
				}
				t.listeners &&
					this.listeners.forEach(c => {
						c(this.currentResult);
					}),
					t.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: 'observerResultsUpdated' });
			});
		}
	}
	function Qv(e, t) {
		return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === 'error' && t.retryOnMount === !1);
	}
	function uh(e, t) {
		return Qv(e, t) || (e.state.dataUpdatedAt > 0 && Lu(e, t, t.refetchOnMount));
	}
	function Lu(e, t, n) {
		if (t.enabled !== !1) {
			const r = typeof n == 'function' ? n(e) : n;
			return r === 'always' || (r !== !1 && Ed(e, t));
		}
		return !1;
	}
	function ch(e, t, n, r) {
		return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== 'error') && Ed(e, n);
	}
	function Ed(e, t) {
		return e.isStaleByTime(t.staleTime);
	}
	class Kv extends n_ {
		constructor(t, n) {
			super(t, n);
		}
		bindMethods() {
			super.bindMethods(),
				(this.fetchNextPage = this.fetchNextPage.bind(this)),
				(this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
		}
		setOptions(t, n) {
			super.setOptions({ ...t, behavior: Au() }, n);
		}
		getOptimisticResult(t) {
			return (t.behavior = Au()), super.getOptimisticResult(t);
		}
		fetchNextPage({ pageParam: t, ...n } = {}) {
			return this.fetch({ ...n, meta: { fetchMore: { direction: 'forward', pageParam: t } } });
		}
		fetchPreviousPage({ pageParam: t, ...n } = {}) {
			return this.fetch({ ...n, meta: { fetchMore: { direction: 'backward', pageParam: t } } });
		}
		createResult(t, n) {
			var r, i, s, o, a, l;
			const { state: u } = t,
				c = super.createResult(t, n),
				{ isFetching: d, isRefetching: h } = c,
				f = d && ((r = u.fetchMeta) == null || (i = r.fetchMore) == null ? void 0 : i.direction) === 'forward',
				_ = d && ((s = u.fetchMeta) == null || (o = s.fetchMore) == null ? void 0 : o.direction) === 'backward';
			return {
				...c,
				fetchNextPage: this.fetchNextPage,
				fetchPreviousPage: this.fetchPreviousPage,
				hasNextPage: Wv(n, (a = u.data) == null ? void 0 : a.pages),
				hasPreviousPage: qv(n, (l = u.data) == null ? void 0 : l.pages),
				isFetchingNextPage: f,
				isFetchingPreviousPage: _,
				isRefetching: h && !f && !_,
			};
		}
	}
	let Zv = class extends gi {
		constructor(t, n) {
			super(), (this.client = t), this.setOptions(n), this.bindMethods(), this.updateResult();
		}
		bindMethods() {
			(this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
		}
		setOptions(t) {
			var n;
			const r = this.options;
			(this.options = this.client.defaultMutationOptions(t)),
				Ou(r, this.options) ||
					this.client
						.getMutationCache()
						.notify({ type: 'observerOptionsUpdated', mutation: this.currentMutation, observer: this }),
				(n = this.currentMutation) == null || n.setOptions(this.options);
		}
		onUnsubscribe() {
			if (!this.listeners.length) {
				var t;
				(t = this.currentMutation) == null || t.removeObserver(this);
			}
		}
		onMutationUpdate(t) {
			this.updateResult();
			const n = { listeners: !0 };
			t.type === 'success' ? (n.onSuccess = !0) : t.type === 'error' && (n.onError = !0), this.notify(n);
		}
		getCurrentResult() {
			return this.currentResult;
		}
		reset() {
			(this.currentMutation = void 0), this.updateResult(), this.notify({ listeners: !0 });
		}
		mutate(t, n) {
			return (
				(this.mutateOptions = n),
				this.currentMutation && this.currentMutation.removeObserver(this),
				(this.currentMutation = this.client
					.getMutationCache()
					.build(this.client, { ...this.options, variables: typeof t < 'u' ? t : this.options.variables })),
				this.currentMutation.addObserver(this),
				this.currentMutation.execute()
			);
		}
		updateResult() {
			const t = this.currentMutation ? this.currentMutation.state : e_(),
				n = {
					...t,
					isLoading: t.status === 'loading',
					isSuccess: t.status === 'success',
					isError: t.status === 'error',
					isIdle: t.status === 'idle',
					mutate: this.mutate,
					reset: this.reset,
				};
			this.currentResult = n;
		}
		notify(t) {
			ge.batch(() => {
				if (this.mutateOptions && this.hasListeners()) {
					if (t.onSuccess) {
						var n, r, i, s;
						(n = (r = this.mutateOptions).onSuccess) == null ||
							n.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context),
							(i = (s = this.mutateOptions).onSettled) == null ||
								i.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
					} else if (t.onError) {
						var o, a, l, u;
						(o = (a = this.mutateOptions).onError) == null ||
							o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context),
							(l = (u = this.mutateOptions).onSettled) == null ||
								l.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
					}
				}
				t.listeners &&
					this.listeners.forEach(c => {
						c(this.currentResult);
					});
			});
		}
	};
	var Mu = {},
		Xv = {
			get exports() {
				return Mu;
			},
			set exports(e) {
				Mu = e;
			},
		},
		dt = {},
		Uu = {},
		Jv = {
			get exports() {
				return Uu;
			},
			set exports(e) {
				Uu = e;
			},
		},
		r_ = {};
	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ (function (e) {
		function t(D, M) {
			var F = D.length;
			D.push(M);
			e: for (; 0 < F; ) {
				var re = (F - 1) >>> 1,
					ye = D[re];
				if (0 < i(ye, M)) (D[re] = M), (D[F] = ye), (F = re);
				else break e;
			}
		}
		function n(D) {
			return D.length === 0 ? null : D[0];
		}
		function r(D) {
			if (D.length === 0) return null;
			var M = D[0],
				F = D.pop();
			if (F !== M) {
				D[0] = F;
				e: for (var re = 0, ye = D.length, Gn = ye >>> 1; re < Gn; ) {
					var it = 2 * (re + 1) - 1,
						vr = D[it],
						Rt = it + 1,
						z = D[Rt];
					if (0 > i(vr, F))
						Rt < ye && 0 > i(z, vr) ? ((D[re] = z), (D[Rt] = F), (re = Rt)) : ((D[re] = vr), (D[it] = F), (re = it));
					else if (Rt < ye && 0 > i(z, F)) (D[re] = z), (D[Rt] = F), (re = Rt);
					else break e;
				}
			}
			return M;
		}
		function i(D, M) {
			var F = D.sortIndex - M.sortIndex;
			return F !== 0 ? F : D.id - M.id;
		}
		if (typeof performance == 'object' && typeof performance.now == 'function') {
			var s = performance;
			e.unstable_now = function () {
				return s.now();
			};
		} else {
			var o = Date,
				a = o.now();
			e.unstable_now = function () {
				return o.now() - a;
			};
		}
		var l = [],
			u = [],
			c = 1,
			d = null,
			h = 3,
			f = !1,
			_ = !1,
			y = !1,
			S = typeof setTimeout == 'function' ? setTimeout : null,
			p = typeof clearTimeout == 'function' ? clearTimeout : null,
			m = typeof setImmediate < 'u' ? setImmediate : null;
		typeof navigator < 'u' &&
			navigator.scheduling !== void 0 &&
			navigator.scheduling.isInputPending !== void 0 &&
			navigator.scheduling.isInputPending.bind(navigator.scheduling);
		function g(D) {
			for (var M = n(u); M !== null; ) {
				if (M.callback === null) r(u);
				else if (M.startTime <= D) r(u), (M.sortIndex = M.expirationTime), t(l, M);
				else break;
				M = n(u);
			}
		}
		function E(D) {
			if (((y = !1), g(D), !_))
				if (n(l) !== null) (_ = !0), G(T);
				else {
					var M = n(u);
					M !== null && ae(E, M.startTime - D);
				}
		}
		function T(D, M) {
			(_ = !1), y && ((y = !1), p(w), (w = -1)), (f = !0);
			var F = h;
			try {
				for (g(M), d = n(l); d !== null && (!(d.expirationTime > M) || (D && !B())); ) {
					var re = d.callback;
					if (typeof re == 'function') {
						(d.callback = null), (h = d.priorityLevel);
						var ye = re(d.expirationTime <= M);
						(M = e.unstable_now()), typeof ye == 'function' ? (d.callback = ye) : d === n(l) && r(l), g(M);
					} else r(l);
					d = n(l);
				}
				if (d !== null) var Gn = !0;
				else {
					var it = n(u);
					it !== null && ae(E, it.startTime - M), (Gn = !1);
				}
				return Gn;
			} finally {
				(d = null), (h = F), (f = !1);
			}
		}
		var b = !1,
			R = null,
			w = -1,
			A = 5,
			O = -1;
		function B() {
			return !(e.unstable_now() - O < A);
		}
		function H() {
			if (R !== null) {
				var D = e.unstable_now();
				O = D;
				var M = !0;
				try {
					M = R(!0, D);
				} finally {
					M ? I() : ((b = !1), (R = null));
				}
			} else b = !1;
		}
		var I;
		if (typeof m == 'function')
			I = function () {
				m(H);
			};
		else if (typeof MessageChannel < 'u') {
			var U = new MessageChannel(),
				Q = U.port2;
			(U.port1.onmessage = H),
				(I = function () {
					Q.postMessage(null);
				});
		} else
			I = function () {
				S(H, 0);
			};
		function G(D) {
			(R = D), b || ((b = !0), I());
		}
		function ae(D, M) {
			w = S(function () {
				D(e.unstable_now());
			}, M);
		}
		(e.unstable_IdlePriority = 5),
			(e.unstable_ImmediatePriority = 1),
			(e.unstable_LowPriority = 4),
			(e.unstable_NormalPriority = 3),
			(e.unstable_Profiling = null),
			(e.unstable_UserBlockingPriority = 2),
			(e.unstable_cancelCallback = function (D) {
				D.callback = null;
			}),
			(e.unstable_continueExecution = function () {
				_ || f || ((_ = !0), G(T));
			}),
			(e.unstable_forceFrameRate = function (D) {
				0 > D || 125 < D
					? console.error(
							'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
					  )
					: (A = 0 < D ? Math.floor(1e3 / D) : 5);
			}),
			(e.unstable_getCurrentPriorityLevel = function () {
				return h;
			}),
			(e.unstable_getFirstCallbackNode = function () {
				return n(l);
			}),
			(e.unstable_next = function (D) {
				switch (h) {
					case 1:
					case 2:
					case 3:
						var M = 3;
						break;
					default:
						M = h;
				}
				var F = h;
				h = M;
				try {
					return D();
				} finally {
					h = F;
				}
			}),
			(e.unstable_pauseExecution = function () {}),
			(e.unstable_requestPaint = function () {}),
			(e.unstable_runWithPriority = function (D, M) {
				switch (D) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
						break;
					default:
						D = 3;
				}
				var F = h;
				h = D;
				try {
					return M();
				} finally {
					h = F;
				}
			}),
			(e.unstable_scheduleCallback = function (D, M, F) {
				var re = e.unstable_now();
				switch (
					(typeof F == 'object' && F !== null
						? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? re + F : re))
						: (F = re),
					D)
				) {
					case 1:
						var ye = -1;
						break;
					case 2:
						ye = 250;
						break;
					case 5:
						ye = 1073741823;
						break;
					case 4:
						ye = 1e4;
						break;
					default:
						ye = 5e3;
				}
				return (
					(ye = F + ye),
					(D = { id: c++, callback: M, priorityLevel: D, startTime: F, expirationTime: ye, sortIndex: -1 }),
					F > re
						? ((D.sortIndex = F),
						  t(u, D),
						  n(l) === null && D === n(u) && (y ? (p(w), (w = -1)) : (y = !0), ae(E, F - re)))
						: ((D.sortIndex = ye), t(l, D), _ || f || ((_ = !0), G(T))),
					D
				);
			}),
			(e.unstable_shouldYield = B),
			(e.unstable_wrapCallback = function (D) {
				var M = h;
				return function () {
					var F = h;
					h = M;
					try {
						return D.apply(this, arguments);
					} finally {
						h = F;
					}
				};
			});
	})(r_);
	(function (e) {
		e.exports = r_;
	})(Jv);
	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var i_ = x,
		ct = Uu;
	function N(e) {
		for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
			t += '&args[]=' + encodeURIComponent(arguments[n]);
		return (
			'Minified React error #' +
			e +
			'; visit ' +
			t +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	var s_ = new Set(),
		us = {};
	function _r(e, t) {
		Kr(e, t), Kr(e + 'Capture', t);
	}
	function Kr(e, t) {
		for (us[e] = t, e = 0; e < t.length; e++) s_.add(t[e]);
	}
	var rn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
		Bu = Object.prototype.hasOwnProperty,
		eE =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		dh = {},
		fh = {};
	function tE(e) {
		return Bu.call(fh, e) ? !0 : Bu.call(dh, e) ? !1 : eE.test(e) ? (fh[e] = !0) : ((dh[e] = !0), !1);
	}
	function nE(e, t, n, r) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof t) {
			case 'function':
			case 'symbol':
				return !0;
			case 'boolean':
				return r
					? !1
					: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
			default:
				return !1;
		}
	}
	function rE(e, t, n, r) {
		if (t === null || typeof t > 'u' || nE(e, t, n, r)) return !0;
		if (r) return !1;
		if (n !== null)
			switch (n.type) {
				case 3:
					return !t;
				case 4:
					return t === !1;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t;
			}
		return !1;
	}
	function Qe(e, t, n, r, i, s, o) {
		(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
			(this.attributeName = r),
			(this.attributeNamespace = i),
			(this.mustUseProperty = n),
			(this.propertyName = e),
			(this.type = t),
			(this.sanitizeURL = s),
			(this.removeEmptyString = o);
	}
	var Be = {};
	'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
		.split(' ')
		.forEach(function (e) {
			Be[e] = new Qe(e, 0, !1, e, null, !1, !1);
		});
	[
		['acceptCharset', 'accept-charset'],
		['className', 'class'],
		['htmlFor', 'for'],
		['httpEquiv', 'http-equiv'],
	].forEach(function (e) {
		var t = e[0];
		Be[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
	});
	['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
		Be[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
	});
	['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
		Be[e] = new Qe(e, 2, !1, e, null, !1, !1);
	});
	'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
		.split(' ')
		.forEach(function (e) {
			Be[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
		});
	['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
		Be[e] = new Qe(e, 3, !0, e, null, !1, !1);
	});
	['capture', 'download'].forEach(function (e) {
		Be[e] = new Qe(e, 4, !1, e, null, !1, !1);
	});
	['cols', 'rows', 'size', 'span'].forEach(function (e) {
		Be[e] = new Qe(e, 6, !1, e, null, !1, !1);
	});
	['rowSpan', 'start'].forEach(function (e) {
		Be[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
	});
	var Sd = /[\-:]([a-z])/g;
	function wd(e) {
		return e[1].toUpperCase();
	}
	'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
		.split(' ')
		.forEach(function (e) {
			var t = e.replace(Sd, wd);
			Be[t] = new Qe(t, 1, !1, e, null, !1, !1);
		});
	'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
		var t = e.replace(Sd, wd);
		Be[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
	['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
		var t = e.replace(Sd, wd);
		Be[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
	});
	['tabIndex', 'crossOrigin'].forEach(function (e) {
		Be[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
	});
	Be.xlinkHref = new Qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
	['src', 'href', 'action', 'formAction'].forEach(function (e) {
		Be[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
	});
	function Td(e, t, n, r) {
		var i = Be.hasOwnProperty(t) ? Be[t] : null;
		(i !== null
			? i.type !== 0
			: r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
			(rE(t, n, i, r) && (n = null),
			r || i === null
				? tE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
				: i.mustUseProperty
				? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
				: ((t = i.attributeName),
				  (r = i.attributeNamespace),
				  n === null
						? e.removeAttribute(t)
						: ((i = i.type),
						  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
						  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
	}
	var cn = i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		Js = Symbol.for('react.element'),
		br = Symbol.for('react.portal'),
		kr = Symbol.for('react.fragment'),
		Rd = Symbol.for('react.strict_mode'),
		Fu = Symbol.for('react.profiler'),
		o_ = Symbol.for('react.provider'),
		a_ = Symbol.for('react.context'),
		bd = Symbol.for('react.forward_ref'),
		zu = Symbol.for('react.suspense'),
		$u = Symbol.for('react.suspense_list'),
		kd = Symbol.for('react.memo'),
		pn = Symbol.for('react.lazy'),
		l_ = Symbol.for('react.offscreen'),
		hh = Symbol.iterator;
	function bi(e) {
		return e === null || typeof e != 'object'
			? null
			: ((e = (hh && e[hh]) || e['@@iterator']), typeof e == 'function' ? e : null);
	}
	var pe = Object.assign,
		Ul;
	function Li(e) {
		if (Ul === void 0)
			try {
				throw Error();
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				Ul = (t && t[1]) || '';
			}
		return (
			`
` +
			Ul +
			e
		);
	}
	var Bl = !1;
	function Fl(e, t) {
		if (!e || Bl) return '';
		Bl = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (t)
				if (
					((t = function () {
						throw Error();
					}),
					Object.defineProperty(t.prototype, 'props', {
						set: function () {
							throw Error();
						},
					}),
					typeof Reflect == 'object' && Reflect.construct)
				) {
					try {
						Reflect.construct(t, []);
					} catch (u) {
						var r = u;
					}
					Reflect.construct(e, [], t);
				} else {
					try {
						t.call();
					} catch (u) {
						r = u;
					}
					e.call(t.prototype);
				}
			else {
				try {
					throw Error();
				} catch (u) {
					r = u;
				}
				e();
			}
		} catch (u) {
			if (u && r && typeof u.stack == 'string') {
				for (
					var i = u.stack.split(`
`),
						s = r.stack.split(`
`),
						o = i.length - 1,
						a = s.length - 1;
					1 <= o && 0 <= a && i[o] !== s[a];

				)
					a--;
				for (; 1 <= o && 0 <= a; o--, a--)
					if (i[o] !== s[a]) {
						if (o !== 1 || a !== 1)
							do
								if ((o--, a--, 0 > a || i[o] !== s[a])) {
									var l =
										`
` + i[o].replace(' at new ', ' at ');
									return e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)), l;
								}
							while (1 <= o && 0 <= a);
						break;
					}
			}
		} finally {
			(Bl = !1), (Error.prepareStackTrace = n);
		}
		return (e = e ? e.displayName || e.name : '') ? Li(e) : '';
	}
	function iE(e) {
		switch (e.tag) {
			case 5:
				return Li(e.type);
			case 16:
				return Li('Lazy');
			case 13:
				return Li('Suspense');
			case 19:
				return Li('SuspenseList');
			case 0:
			case 2:
			case 15:
				return (e = Fl(e.type, !1)), e;
			case 11:
				return (e = Fl(e.type.render, !1)), e;
			case 1:
				return (e = Fl(e.type, !0)), e;
			default:
				return '';
		}
	}
	function Hu(e) {
		if (e == null) return null;
		if (typeof e == 'function') return e.displayName || e.name || null;
		if (typeof e == 'string') return e;
		switch (e) {
			case kr:
				return 'Fragment';
			case br:
				return 'Portal';
			case Fu:
				return 'Profiler';
			case Rd:
				return 'StrictMode';
			case zu:
				return 'Suspense';
			case $u:
				return 'SuspenseList';
		}
		if (typeof e == 'object')
			switch (e.$$typeof) {
				case a_:
					return (e.displayName || 'Context') + '.Consumer';
				case o_:
					return (e._context.displayName || 'Context') + '.Provider';
				case bd:
					var t = e.render;
					return (
						(e = e.displayName),
						e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
						e
					);
				case kd:
					return (t = e.displayName || null), t !== null ? t : Hu(e.type) || 'Memo';
				case pn:
					(t = e._payload), (e = e._init);
					try {
						return Hu(e(t));
					} catch {}
			}
		return null;
	}
	function sE(e) {
		var t = e.type;
		switch (e.tag) {
			case 24:
				return 'Cache';
			case 9:
				return (t.displayName || 'Context') + '.Consumer';
			case 10:
				return (t._context.displayName || 'Context') + '.Provider';
			case 18:
				return 'DehydratedFragment';
			case 11:
				return (
					(e = t.render),
					(e = e.displayName || e.name || ''),
					t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
				);
			case 7:
				return 'Fragment';
			case 5:
				return t;
			case 4:
				return 'Portal';
			case 3:
				return 'Root';
			case 6:
				return 'Text';
			case 16:
				return Hu(t);
			case 8:
				return t === Rd ? 'StrictMode' : 'Mode';
			case 22:
				return 'Offscreen';
			case 12:
				return 'Profiler';
			case 21:
				return 'Scope';
			case 13:
				return 'Suspense';
			case 19:
				return 'SuspenseList';
			case 25:
				return 'TracingMarker';
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof t == 'function') return t.displayName || t.name || null;
				if (typeof t == 'string') return t;
		}
		return null;
	}
	function Mn(e) {
		switch (typeof e) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return e;
			case 'object':
				return e;
			default:
				return '';
		}
	}
	function u_(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
	}
	function oE(e) {
		var t = u_(e) ? 'checked' : 'value',
			n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			r = '' + e[t];
		if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
			var i = n.get,
				s = n.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return i.call(this);
					},
					set: function (o) {
						(r = '' + o), s.call(this, o);
					},
				}),
				Object.defineProperty(e, t, { enumerable: n.enumerable }),
				{
					getValue: function () {
						return r;
					},
					setValue: function (o) {
						r = '' + o;
					},
					stopTracking: function () {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function eo(e) {
		e._valueTracker || (e._valueTracker = oE(e));
	}
	function c_(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = '';
		return e && (r = u_(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
	}
	function sa(e) {
		if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function ju(e, t) {
		var n = t.checked;
		return pe({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? e._wrapperState.initialChecked,
		});
	}
	function ph(e, t) {
		var n = t.defaultValue == null ? '' : t.defaultValue,
			r = t.checked != null ? t.checked : t.defaultChecked;
		(n = Mn(t.value != null ? t.value : n)),
			(e._wrapperState = {
				initialChecked: r,
				initialValue: n,
				controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
			});
	}
	function d_(e, t) {
		(t = t.checked), t != null && Td(e, 'checked', t, !1);
	}
	function Gu(e, t) {
		d_(e, t);
		var n = Mn(t.value),
			r = t.type;
		if (n != null)
			r === 'number'
				? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
				: e.value !== '' + n && (e.value = '' + n);
		else if (r === 'submit' || r === 'reset') {
			e.removeAttribute('value');
			return;
		}
		t.hasOwnProperty('value')
			? Yu(e, t.type, n)
			: t.hasOwnProperty('defaultValue') && Yu(e, t.type, Mn(t.defaultValue)),
			t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
	}
	function mh(e, t, n) {
		if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
			var r = t.type;
			if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
			(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
		}
		(n = e.name),
			n !== '' && (e.name = ''),
			(e.defaultChecked = !!e._wrapperState.initialChecked),
			n !== '' && (e.name = n);
	}
	function Yu(e, t, n) {
		(t !== 'number' || sa(e.ownerDocument) !== e) &&
			(n == null
				? (e.defaultValue = '' + e._wrapperState.initialValue)
				: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
	}
	var Mi = Array.isArray;
	function Fr(e, t, n, r) {
		if (((e = e.options), t)) {
			t = {};
			for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
			for (n = 0; n < e.length; n++)
				(i = t.hasOwnProperty('$' + e[n].value)),
					e[n].selected !== i && (e[n].selected = i),
					i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = '' + Mn(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					(e[i].selected = !0), r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Wu(e, t) {
		if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
		return pe({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
	}
	function _h(e, t) {
		var n = t.value;
		if (n == null) {
			if (((n = t.children), (t = t.defaultValue), n != null)) {
				if (t != null) throw Error(N(92));
				if (Mi(n)) {
					if (1 < n.length) throw Error(N(93));
					n = n[0];
				}
				t = n;
			}
			t == null && (t = ''), (n = t);
		}
		e._wrapperState = { initialValue: Mn(n) };
	}
	function f_(e, t) {
		var n = Mn(t.value),
			r = Mn(t.defaultValue);
		n != null &&
			((n = '' + n),
			n !== e.value && (e.value = n),
			t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
			r != null && (e.defaultValue = '' + r);
	}
	function gh(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
	}
	function h_(e) {
		switch (e) {
			case 'svg':
				return 'http://www.w3.org/2000/svg';
			case 'math':
				return 'http://www.w3.org/1998/Math/MathML';
			default:
				return 'http://www.w3.org/1999/xhtml';
		}
	}
	function qu(e, t) {
		return e == null || e === 'http://www.w3.org/1999/xhtml'
			? h_(t)
			: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: e;
	}
	var to,
		p_ = (function (e) {
			return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
				? function (t, n, r, i) {
						MSApp.execUnsafeLocalFunction(function () {
							return e(t, n, r, i);
						});
				  }
				: e;
		})(function (e, t) {
			if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
			else {
				for (
					to = to || document.createElement('div'),
						to.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
						t = to.firstChild;
					e.firstChild;

				)
					e.removeChild(e.firstChild);
				for (; t.firstChild; ) e.appendChild(t.firstChild);
			}
		});
	function cs(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Hi = {
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
		aE = ['Webkit', 'ms', 'Moz', 'O'];
	Object.keys(Hi).forEach(function (e) {
		aE.forEach(function (t) {
			(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hi[t] = Hi[e]);
		});
	});
	function m_(e, t, n) {
		return t == null || typeof t == 'boolean' || t === ''
			? ''
			: n || typeof t != 'number' || t === 0 || (Hi.hasOwnProperty(e) && Hi[e])
			? ('' + t).trim()
			: t + 'px';
	}
	function __(e, t) {
		e = e.style;
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var r = n.indexOf('--') === 0,
					i = m_(n, t[n], r);
				n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
			}
	}
	var lE = pe(
		{ menuitem: !0 },
		{
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
		}
	);
	function Vu(e, t) {
		if (t) {
			if (lE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
			if (t.dangerouslySetInnerHTML != null) {
				if (t.children != null) throw Error(N(60));
				if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
					throw Error(N(61));
			}
			if (t.style != null && typeof t.style != 'object') throw Error(N(62));
		}
	}
	function Qu(e, t) {
		if (e.indexOf('-') === -1) return typeof t.is == 'string';
		switch (e) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var Ku = null;
	function xd(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var Zu = null,
		zr = null,
		$r = null;
	function yh(e) {
		if ((e = zs(e))) {
			if (typeof Zu != 'function') throw Error(N(280));
			var t = e.stateNode;
			t && ((t = Ka(t)), Zu(e.stateNode, e.type, t));
		}
	}
	function g_(e) {
		zr ? ($r ? $r.push(e) : ($r = [e])) : (zr = e);
	}
	function y_() {
		if (zr) {
			var e = zr,
				t = $r;
			if ((($r = zr = null), yh(e), t)) for (e = 0; e < t.length; e++) yh(t[e]);
		}
	}
	function v_(e, t) {
		return e(t);
	}
	function E_() {}
	var zl = !1;
	function S_(e, t, n) {
		if (zl) return e(t, n);
		zl = !0;
		try {
			return v_(e, t, n);
		} finally {
			(zl = !1), (zr !== null || $r !== null) && (E_(), y_());
		}
	}
	function ds(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = Ka(n);
		if (r === null) return null;
		n = r[t];
		e: switch (t) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				(r = !r.disabled) ||
					((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
					(e = !r);
				break e;
			default:
				e = !1;
		}
		if (e) return null;
		if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
		return n;
	}
	var Xu = !1;
	if (rn)
		try {
			var ki = {};
			Object.defineProperty(ki, 'passive', {
				get: function () {
					Xu = !0;
				},
			}),
				window.addEventListener('test', ki, ki),
				window.removeEventListener('test', ki, ki);
		} catch {
			Xu = !1;
		}
	function uE(e, t, n, r, i, s, o, a, l) {
		var u = Array.prototype.slice.call(arguments, 3);
		try {
			t.apply(n, u);
		} catch (c) {
			this.onError(c);
		}
	}
	var ji = !1,
		oa = null,
		aa = !1,
		Ju = null,
		cE = {
			onError: function (e) {
				(ji = !0), (oa = e);
			},
		};
	function dE(e, t, n, r, i, s, o, a, l) {
		(ji = !1), (oa = null), uE.apply(cE, arguments);
	}
	function fE(e, t, n, r, i, s, o, a, l) {
		if ((dE.apply(this, arguments), ji)) {
			if (ji) {
				var u = oa;
				(ji = !1), (oa = null);
			} else throw Error(N(198));
			aa || ((aa = !0), (Ju = u));
		}
	}
	function gr(e) {
		var t = e,
			n = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function w_(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
		}
		return null;
	}
	function vh(e) {
		if (gr(e) !== e) throw Error(N(188));
	}
	function hE(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = gr(e)), t === null)) throw Error(N(188));
			return t !== e ? null : e;
		}
		for (var n = e, r = t; ; ) {
			var i = n.return;
			if (i === null) break;
			var s = i.alternate;
			if (s === null) {
				if (((r = i.return), r !== null)) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === s.child) {
				for (s = i.child; s; ) {
					if (s === n) return vh(i), e;
					if (s === r) return vh(i), t;
					s = s.sibling;
				}
				throw Error(N(188));
			}
			if (n.return !== r.return) (n = i), (r = s);
			else {
				for (var o = !1, a = i.child; a; ) {
					if (a === n) {
						(o = !0), (n = i), (r = s);
						break;
					}
					if (a === r) {
						(o = !0), (r = i), (n = s);
						break;
					}
					a = a.sibling;
				}
				if (!o) {
					for (a = s.child; a; ) {
						if (a === n) {
							(o = !0), (n = s), (r = i);
							break;
						}
						if (a === r) {
							(o = !0), (r = s), (n = i);
							break;
						}
						a = a.sibling;
					}
					if (!o) throw Error(N(189));
				}
			}
			if (n.alternate !== r) throw Error(N(190));
		}
		if (n.tag !== 3) throw Error(N(188));
		return n.stateNode.current === n ? e : t;
	}
	function T_(e) {
		return (e = hE(e)), e !== null ? R_(e) : null;
	}
	function R_(e) {
		if (e.tag === 5 || e.tag === 6) return e;
		for (e = e.child; e !== null; ) {
			var t = R_(e);
			if (t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var b_ = ct.unstable_scheduleCallback,
		Eh = ct.unstable_cancelCallback,
		pE = ct.unstable_shouldYield,
		mE = ct.unstable_requestPaint,
		ve = ct.unstable_now,
		_E = ct.unstable_getCurrentPriorityLevel,
		Cd = ct.unstable_ImmediatePriority,
		k_ = ct.unstable_UserBlockingPriority,
		la = ct.unstable_NormalPriority,
		gE = ct.unstable_LowPriority,
		x_ = ct.unstable_IdlePriority,
		Wa = null,
		jt = null;
	function yE(e) {
		if (jt && typeof jt.onCommitFiberRoot == 'function')
			try {
				jt.onCommitFiberRoot(Wa, e, void 0, (e.current.flags & 128) === 128);
			} catch {}
	}
	var Dt = Math.clz32 ? Math.clz32 : SE,
		vE = Math.log,
		EE = Math.LN2;
	function SE(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((vE(e) / EE) | 0)) | 0;
	}
	var no = 64,
		ro = 4194304;
	function Ui(e) {
		switch (e & -e) {
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
				return e & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return e & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return e;
		}
	}
	function ua(e, t) {
		var n = e.pendingLanes;
		if (n === 0) return 0;
		var r = 0,
			i = e.suspendedLanes,
			s = e.pingedLanes,
			o = n & 268435455;
		if (o !== 0) {
			var a = o & ~i;
			a !== 0 ? (r = Ui(a)) : ((s &= o), s !== 0 && (r = Ui(s)));
		} else (o = n & ~i), o !== 0 ? (r = Ui(o)) : s !== 0 && (r = Ui(s));
		if (r === 0) return 0;
		if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0)))
			return t;
		if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
			for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Dt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
		return r;
	}
	function wE(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
				return t + 250;
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
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function TE(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
			var o = 31 - Dt(s),
				a = 1 << o,
				l = i[o];
			l === -1 ? (!(a & n) || a & r) && (i[o] = wE(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a);
		}
	}
	function ec(e) {
		return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
	}
	function C_() {
		var e = no;
		return (no <<= 1), !(no & 4194240) && (no = 64), e;
	}
	function $l(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Bs(e, t, n) {
		(e.pendingLanes |= t),
			t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
			(e = e.eventTimes),
			(t = 31 - Dt(t)),
			(e[t] = n);
	}
	function RE(e, t) {
		var n = e.pendingLanes & ~t;
		(e.pendingLanes = t),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.expiredLanes &= t),
			(e.mutableReadLanes &= t),
			(e.entangledLanes &= t),
			(t = e.entanglements);
		var r = e.eventTimes;
		for (e = e.expirationTimes; 0 < n; ) {
			var i = 31 - Dt(n),
				s = 1 << i;
			(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
		}
	}
	function Nd(e, t) {
		var n = (e.entangledLanes |= t);
		for (e = e.entanglements; n; ) {
			var r = 31 - Dt(n),
				i = 1 << r;
			(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
		}
	}
	var K = 0;
	function N_(e) {
		return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
	}
	var O_,
		Od,
		I_,
		D_,
		A_,
		tc = !1,
		io = [],
		xn = null,
		Cn = null,
		Nn = null,
		fs = new Map(),
		hs = new Map(),
		gn = [],
		bE =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
				' '
			);
	function Sh(e, t) {
		switch (e) {
			case 'focusin':
			case 'focusout':
				xn = null;
				break;
			case 'dragenter':
			case 'dragleave':
				Cn = null;
				break;
			case 'mouseover':
			case 'mouseout':
				Nn = null;
				break;
			case 'pointerover':
			case 'pointerout':
				fs.delete(t.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				hs.delete(t.pointerId);
		}
	}
	function xi(e, t, n, r, i, s) {
		return e === null || e.nativeEvent !== s
			? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
			  t !== null && ((t = zs(t)), t !== null && Od(t)),
			  e)
			: ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function kE(e, t, n, r, i) {
		switch (t) {
			case 'focusin':
				return (xn = xi(xn, e, t, n, r, i)), !0;
			case 'dragenter':
				return (Cn = xi(Cn, e, t, n, r, i)), !0;
			case 'mouseover':
				return (Nn = xi(Nn, e, t, n, r, i)), !0;
			case 'pointerover':
				var s = i.pointerId;
				return fs.set(s, xi(fs.get(s) || null, e, t, n, r, i)), !0;
			case 'gotpointercapture':
				return (s = i.pointerId), hs.set(s, xi(hs.get(s) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function P_(e) {
		var t = Kn(e.target);
		if (t !== null) {
			var n = gr(t);
			if (n !== null) {
				if (((t = n.tag), t === 13)) {
					if (((t = w_(n)), t !== null)) {
						(e.blockedOn = t),
							A_(e.priority, function () {
								I_(n);
							});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Lo(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				(Ku = r), n.target.dispatchEvent(r), (Ku = null);
			} else return (t = zs(n)), t !== null && Od(t), (e.blockedOn = n), !1;
			t.shift();
		}
		return !0;
	}
	function wh(e, t, n) {
		Lo(e) && n.delete(t);
	}
	function xE() {
		(tc = !1),
			xn !== null && Lo(xn) && (xn = null),
			Cn !== null && Lo(Cn) && (Cn = null),
			Nn !== null && Lo(Nn) && (Nn = null),
			fs.forEach(wh),
			hs.forEach(wh);
	}
	function Ci(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null), tc || ((tc = !0), ct.unstable_scheduleCallback(ct.unstable_NormalPriority, xE)));
	}
	function ps(e) {
		function t(i) {
			return Ci(i, e);
		}
		if (0 < io.length) {
			Ci(io[0], e);
			for (var n = 1; n < io.length; n++) {
				var r = io[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
		}
		for (
			xn !== null && Ci(xn, e), Cn !== null && Ci(Cn, e), Nn !== null && Ci(Nn, e), fs.forEach(t), hs.forEach(t), n = 0;
			n < gn.length;
			n++
		)
			(r = gn[n]), r.blockedOn === e && (r.blockedOn = null);
		for (; 0 < gn.length && ((n = gn[0]), n.blockedOn === null); ) P_(n), n.blockedOn === null && gn.shift();
	}
	var Hr = cn.ReactCurrentBatchConfig,
		ca = !0;
	function CE(e, t, n, r) {
		var i = K,
			s = Hr.transition;
		Hr.transition = null;
		try {
			(K = 1), Id(e, t, n, r);
		} finally {
			(K = i), (Hr.transition = s);
		}
	}
	function NE(e, t, n, r) {
		var i = K,
			s = Hr.transition;
		Hr.transition = null;
		try {
			(K = 4), Id(e, t, n, r);
		} finally {
			(K = i), (Hr.transition = s);
		}
	}
	function Id(e, t, n, r) {
		if (ca) {
			var i = nc(e, t, n, r);
			if (i === null) Zl(e, t, r, da, n), Sh(e, r);
			else if (kE(i, e, t, n, r)) r.stopPropagation();
			else if ((Sh(e, r), t & 4 && -1 < bE.indexOf(e))) {
				for (; i !== null; ) {
					var s = zs(i);
					if ((s !== null && O_(s), (s = nc(e, t, n, r)), s === null && Zl(e, t, r, da, n), s === i)) break;
					i = s;
				}
				i !== null && r.stopPropagation();
			} else Zl(e, t, r, null, n);
		}
	}
	var da = null;
	function nc(e, t, n, r) {
		if (((da = null), (e = xd(r)), (e = Kn(e)), e !== null))
			if (((t = gr(e)), t === null)) e = null;
			else if (((n = t.tag), n === 13)) {
				if (((e = w_(t)), e !== null)) return e;
				e = null;
			} else if (n === 3) {
				if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
				e = null;
			} else t !== e && (e = null);
		return (da = e), null;
	}
	function L_(e) {
		switch (e) {
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 1;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'toggle':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 4;
			case 'message':
				switch (_E()) {
					case Cd:
						return 1;
					case k_:
						return 4;
					case la:
					case gE:
						return 16;
					case x_:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var Sn = null,
		Dd = null,
		Mo = null;
	function M_() {
		if (Mo) return Mo;
		var e,
			t = Dd,
			n = t.length,
			r,
			i = 'value' in Sn ? Sn.value : Sn.textContent,
			s = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
		return (Mo = i.slice(e, 1 < r ? 1 - r : void 0));
	}
	function Uo(e) {
		var t = e.keyCode;
		return (
			'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function so() {
		return !0;
	}
	function Th() {
		return !1;
	}
	function ft(e) {
		function t(n, r, i, s, o) {
			(this._reactName = n),
				(this._targetInst = i),
				(this.type = r),
				(this.nativeEvent = s),
				(this.target = o),
				(this.currentTarget = null);
			for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
			return (
				(this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? so : Th),
				(this.isPropagationStopped = Th),
				this
			);
		}
		return (
			pe(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n &&
						(n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
						(this.isDefaultPrevented = so));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n &&
						(n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
						(this.isPropagationStopped = so));
				},
				persist: function () {},
				isPersistent: so,
			}),
			t
		);
	}
	var yi = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ad = ft(yi),
		Fs = pe({}, yi, { view: 0, detail: 0 }),
		OE = ft(Fs),
		Hl,
		jl,
		Ni,
		qa = pe({}, Fs, {
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
			getModifierState: Pd,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget;
			},
			movementX: function (e) {
				return 'movementX' in e
					? e.movementX
					: (e !== Ni &&
							(Ni && e.type === 'mousemove'
								? ((Hl = e.screenX - Ni.screenX), (jl = e.screenY - Ni.screenY))
								: (jl = Hl = 0),
							(Ni = e)),
					  Hl);
			},
			movementY: function (e) {
				return 'movementY' in e ? e.movementY : jl;
			},
		}),
		Rh = ft(qa),
		IE = pe({}, qa, { dataTransfer: 0 }),
		DE = ft(IE),
		AE = pe({}, Fs, { relatedTarget: 0 }),
		Gl = ft(AE),
		PE = pe({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		LE = ft(PE),
		ME = pe({}, yi, {
			clipboardData: function (e) {
				return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
			},
		}),
		UE = ft(ME),
		BE = pe({}, yi, { data: 0 }),
		bh = ft(BE),
		FE = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		zE = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		$E = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
	function HE(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = $E[e]) ? !!t[e] : !1;
	}
	function Pd() {
		return HE;
	}
	var jE = pe({}, Fs, {
			key: function (e) {
				if (e.key) {
					var t = FE[e.key] || e.key;
					if (t !== 'Unidentified') return t;
				}
				return e.type === 'keypress'
					? ((e = Uo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
					: e.type === 'keydown' || e.type === 'keyup'
					? zE[e.keyCode] || 'Unidentified'
					: '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Pd,
			charCode: function (e) {
				return e.type === 'keypress' ? Uo(e) : 0;
			},
			keyCode: function (e) {
				return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
			},
			which: function (e) {
				return e.type === 'keypress' ? Uo(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
			},
		}),
		GE = ft(jE),
		YE = pe({}, qa, {
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
		kh = ft(YE),
		WE = pe({}, Fs, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Pd,
		}),
		qE = ft(WE),
		VE = pe({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		QE = ft(VE),
		KE = pe({}, qa, {
			deltaX: function (e) {
				return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
			},
			deltaY: function (e) {
				return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		ZE = ft(KE),
		XE = [9, 13, 27, 32],
		Ld = rn && 'CompositionEvent' in window,
		Gi = null;
	rn && 'documentMode' in document && (Gi = document.documentMode);
	var JE = rn && 'TextEvent' in window && !Gi,
		U_ = rn && (!Ld || (Gi && 8 < Gi && 11 >= Gi)),
		xh = String.fromCharCode(32),
		Ch = !1;
	function B_(e, t) {
		switch (e) {
			case 'keyup':
				return XE.indexOf(t.keyCode) !== -1;
			case 'keydown':
				return t.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function F_(e) {
		return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
	}
	var xr = !1;
	function eS(e, t) {
		switch (e) {
			case 'compositionend':
				return F_(t);
			case 'keypress':
				return t.which !== 32 ? null : ((Ch = !0), xh);
			case 'textInput':
				return (e = t.data), e === xh && Ch ? null : e;
			default:
				return null;
		}
	}
	function tS(e, t) {
		if (xr)
			return e === 'compositionend' || (!Ld && B_(e, t)) ? ((e = M_()), (Mo = Dd = Sn = null), (xr = !1), e) : null;
		switch (e) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case 'compositionend':
				return U_ && t.locale !== 'ko' ? null : t.data;
			default:
				return null;
		}
	}
	var nS = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
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
	function Nh(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === 'input' ? !!nS[e.type] : t === 'textarea';
	}
	function z_(e, t, n, r) {
		g_(r),
			(t = fa(t, 'onChange')),
			0 < t.length && ((n = new Ad('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
	}
	var Yi = null,
		ms = null;
	function rS(e) {
		Z_(e, 0);
	}
	function Va(e) {
		var t = Or(e);
		if (c_(t)) return e;
	}
	function iS(e, t) {
		if (e === 'change') return t;
	}
	var $_ = !1;
	if (rn) {
		var Yl;
		if (rn) {
			var Wl = 'oninput' in document;
			if (!Wl) {
				var Oh = document.createElement('div');
				Oh.setAttribute('oninput', 'return;'), (Wl = typeof Oh.oninput == 'function');
			}
			Yl = Wl;
		} else Yl = !1;
		$_ = Yl && (!document.documentMode || 9 < document.documentMode);
	}
	function Ih() {
		Yi && (Yi.detachEvent('onpropertychange', H_), (ms = Yi = null));
	}
	function H_(e) {
		if (e.propertyName === 'value' && Va(ms)) {
			var t = [];
			z_(t, ms, e, xd(e)), S_(rS, t);
		}
	}
	function sS(e, t, n) {
		e === 'focusin' ? (Ih(), (Yi = t), (ms = n), Yi.attachEvent('onpropertychange', H_)) : e === 'focusout' && Ih();
	}
	function oS(e) {
		if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Va(ms);
	}
	function aS(e, t) {
		if (e === 'click') return Va(t);
	}
	function lS(e, t) {
		if (e === 'input' || e === 'change') return Va(t);
	}
	function uS(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var Lt = typeof Object.is == 'function' ? Object.is : uS;
	function _s(e, t) {
		if (Lt(e, t)) return !0;
		if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Bu.call(t, i) || !Lt(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Dh(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Ah(e, t) {
		var n = Dh(e);
		e = 0;
		for (var r; n; ) {
			if (n.nodeType === 3) {
				if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
				e = r;
			}
			e: {
				for (; n; ) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Dh(n);
		}
	}
	function j_(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? j_(e, t.parentNode)
				: 'contains' in e
				? e.contains(t)
				: e.compareDocumentPosition
				? !!(e.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function G_() {
		for (var e = window, t = sa(); t instanceof e.HTMLIFrameElement; ) {
			try {
				var n = typeof t.contentWindow.location.href == 'string';
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = sa(e.document);
		}
		return t;
	}
	function Md(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			t &&
			((t === 'input' &&
				(e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
				t === 'textarea' ||
				e.contentEditable === 'true')
		);
	}
	function cS(e) {
		var t = G_(),
			n = e.focusedElem,
			r = e.selectionRange;
		if (t !== n && n && n.ownerDocument && j_(n.ownerDocument.documentElement, n)) {
			if (r !== null && Md(n)) {
				if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
					(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
				else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
					e = e.getSelection();
					var i = n.textContent.length,
						s = Math.min(r.start, i);
					(r = r.end === void 0 ? s : Math.min(r.end, i)),
						!e.extend && s > r && ((i = r), (r = s), (s = i)),
						(i = Ah(n, s));
					var o = Ah(n, r);
					i &&
						o &&
						(e.rangeCount !== 1 ||
							e.anchorNode !== i.node ||
							e.anchorOffset !== i.offset ||
							e.focusNode !== o.node ||
							e.focusOffset !== o.offset) &&
						((t = t.createRange()),
						t.setStart(i.node, i.offset),
						e.removeAllRanges(),
						s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
				}
			}
			for (t = [], e = n; (e = e.parentNode); )
				e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
			for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
				(e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
		}
	}
	var dS = rn && 'documentMode' in document && 11 >= document.documentMode,
		Cr = null,
		rc = null,
		Wi = null,
		ic = !1;
	function Ph(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ic ||
			Cr == null ||
			Cr !== sa(r) ||
			((r = Cr),
			'selectionStart' in r && Md(r)
				? (r = { start: r.selectionStart, end: r.selectionEnd })
				: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
				  (r = {
						anchorNode: r.anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset,
				  })),
			(Wi && _s(Wi, r)) ||
				((Wi = r),
				(r = fa(rc, 'onSelect')),
				0 < r.length &&
					((t = new Ad('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Cr))));
	}
	function oo(e, t) {
		var n = {};
		return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
	}
	var Nr = {
			animationend: oo('Animation', 'AnimationEnd'),
			animationiteration: oo('Animation', 'AnimationIteration'),
			animationstart: oo('Animation', 'AnimationStart'),
			transitionend: oo('Transition', 'TransitionEnd'),
		},
		ql = {},
		Y_ = {};
	rn &&
		((Y_ = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation),
		'TransitionEvent' in window || delete Nr.transitionend.transition);
	function Qa(e) {
		if (ql[e]) return ql[e];
		if (!Nr[e]) return e;
		var t = Nr[e],
			n;
		for (n in t) if (t.hasOwnProperty(n) && n in Y_) return (ql[e] = t[n]);
		return e;
	}
	var W_ = Qa('animationend'),
		q_ = Qa('animationiteration'),
		V_ = Qa('animationstart'),
		Q_ = Qa('transitionend'),
		K_ = new Map(),
		Lh =
			'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' '
			);
	function $n(e, t) {
		K_.set(e, t), _r(t, [e]);
	}
	for (var Vl = 0; Vl < Lh.length; Vl++) {
		var Ql = Lh[Vl],
			fS = Ql.toLowerCase(),
			hS = Ql[0].toUpperCase() + Ql.slice(1);
		$n(fS, 'on' + hS);
	}
	$n(W_, 'onAnimationEnd');
	$n(q_, 'onAnimationIteration');
	$n(V_, 'onAnimationStart');
	$n('dblclick', 'onDoubleClick');
	$n('focusin', 'onFocus');
	$n('focusout', 'onBlur');
	$n(Q_, 'onTransitionEnd');
	Kr('onMouseEnter', ['mouseout', 'mouseover']);
	Kr('onMouseLeave', ['mouseout', 'mouseover']);
	Kr('onPointerEnter', ['pointerout', 'pointerover']);
	Kr('onPointerLeave', ['pointerout', 'pointerover']);
	_r('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
	_r('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
	_r('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
	_r('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
	_r('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
	_r('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
	var Bi =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' '
			),
		pS = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Bi));
	function Mh(e, t, n) {
		var r = e.type || 'unknown-event';
		(e.currentTarget = n), fE(r, t, void 0, e), (e.currentTarget = null);
	}
	function Z_(e, t) {
		t = (t & 4) !== 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				i = r.event;
			r = r.listeners;
			e: {
				var s = void 0;
				if (t)
					for (var o = r.length - 1; 0 <= o; o--) {
						var a = r[o],
							l = a.instance,
							u = a.currentTarget;
						if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
						Mh(i, a, u), (s = l);
					}
				else
					for (o = 0; o < r.length; o++) {
						if (
							((a = r[o]),
							(l = a.instance),
							(u = a.currentTarget),
							(a = a.listener),
							l !== s && i.isPropagationStopped())
						)
							break e;
						Mh(i, a, u), (s = l);
					}
			}
		}
		if (aa) throw ((e = Ju), (aa = !1), (Ju = null), e);
	}
	function ie(e, t) {
		var n = t[uc];
		n === void 0 && (n = t[uc] = new Set());
		var r = e + '__bubble';
		n.has(r) || (X_(t, e, 2, !1), n.add(r));
	}
	function Kl(e, t, n) {
		var r = 0;
		t && (r |= 4), X_(n, e, r, t);
	}
	var ao = '_reactListening' + Math.random().toString(36).slice(2);
	function gs(e) {
		if (!e[ao]) {
			(e[ao] = !0),
				s_.forEach(function (n) {
					n !== 'selectionchange' && (pS.has(n) || Kl(n, !1, e), Kl(n, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ao] || ((t[ao] = !0), Kl('selectionchange', !1, t));
		}
	}
	function X_(e, t, n, r) {
		switch (L_(t)) {
			case 1:
				var i = CE;
				break;
			case 4:
				i = NE;
				break;
			default:
				i = Id;
		}
		(n = i.bind(null, t, n, e)),
			(i = void 0),
			!Xu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
			r
				? i !== void 0
					? e.addEventListener(t, n, { capture: !0, passive: i })
					: e.addEventListener(t, n, !0)
				: i !== void 0
				? e.addEventListener(t, n, { passive: i })
				: e.addEventListener(t, n, !1);
	}
	function Zl(e, t, n, r, i) {
		var s = r;
		if (!(t & 1) && !(t & 2) && r !== null)
			e: for (;;) {
				if (r === null) return;
				var o = r.tag;
				if (o === 3 || o === 4) {
					var a = r.stateNode.containerInfo;
					if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
					if (o === 4)
						for (o = r.return; o !== null; ) {
							var l = o.tag;
							if (
								(l === 3 || l === 4) &&
								((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
							)
								return;
							o = o.return;
						}
					for (; a !== null; ) {
						if (((o = Kn(a)), o === null)) return;
						if (((l = o.tag), l === 5 || l === 6)) {
							r = s = o;
							continue e;
						}
						a = a.parentNode;
					}
				}
				r = r.return;
			}
		S_(function () {
			var u = s,
				c = xd(n),
				d = [];
			e: {
				var h = K_.get(e);
				if (h !== void 0) {
					var f = Ad,
						_ = e;
					switch (e) {
						case 'keypress':
							if (Uo(n) === 0) break e;
						case 'keydown':
						case 'keyup':
							f = GE;
							break;
						case 'focusin':
							(_ = 'focus'), (f = Gl);
							break;
						case 'focusout':
							(_ = 'blur'), (f = Gl);
							break;
						case 'beforeblur':
						case 'afterblur':
							f = Gl;
							break;
						case 'click':
							if (n.button === 2) break e;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							f = Rh;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							f = DE;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							f = qE;
							break;
						case W_:
						case q_:
						case V_:
							f = LE;
							break;
						case Q_:
							f = QE;
							break;
						case 'scroll':
							f = OE;
							break;
						case 'wheel':
							f = ZE;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							f = UE;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							f = kh;
					}
					var y = (t & 4) !== 0,
						S = !y && e === 'scroll',
						p = y ? (h !== null ? h + 'Capture' : null) : h;
					y = [];
					for (var m = u, g; m !== null; ) {
						g = m;
						var E = g.stateNode;
						if (
							(g.tag === 5 && E !== null && ((g = E), p !== null && ((E = ds(m, p)), E != null && y.push(ys(m, E, g)))),
							S)
						)
							break;
						m = m.return;
					}
					0 < y.length && ((h = new f(h, _, null, n, c)), d.push({ event: h, listeners: y }));
				}
			}
			if (!(t & 7)) {
				e: {
					if (
						((h = e === 'mouseover' || e === 'pointerover'),
						(f = e === 'mouseout' || e === 'pointerout'),
						h && n !== Ku && (_ = n.relatedTarget || n.fromElement) && (Kn(_) || _[sn]))
					)
						break e;
					if (
						(f || h) &&
						((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
						f
							? ((_ = n.relatedTarget || n.toElement),
							  (f = u),
							  (_ = _ ? Kn(_) : null),
							  _ !== null && ((S = gr(_)), _ !== S || (_.tag !== 5 && _.tag !== 6)) && (_ = null))
							: ((f = null), (_ = u)),
						f !== _)
					) {
						if (
							((y = Rh),
							(E = 'onMouseLeave'),
							(p = 'onMouseEnter'),
							(m = 'mouse'),
							(e === 'pointerout' || e === 'pointerover') &&
								((y = kh), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
							(S = f == null ? h : Or(f)),
							(g = _ == null ? h : Or(_)),
							(h = new y(E, m + 'leave', f, n, c)),
							(h.target = S),
							(h.relatedTarget = g),
							(E = null),
							Kn(c) === u && ((y = new y(p, m + 'enter', _, n, c)), (y.target = g), (y.relatedTarget = S), (E = y)),
							(S = E),
							f && _)
						)
							t: {
								for (y = f, p = _, m = 0, g = y; g; g = Er(g)) m++;
								for (g = 0, E = p; E; E = Er(E)) g++;
								for (; 0 < m - g; ) (y = Er(y)), m--;
								for (; 0 < g - m; ) (p = Er(p)), g--;
								for (; m--; ) {
									if (y === p || (p !== null && y === p.alternate)) break t;
									(y = Er(y)), (p = Er(p));
								}
								y = null;
							}
						else y = null;
						f !== null && Uh(d, h, f, y, !1), _ !== null && S !== null && Uh(d, S, _, y, !0);
					}
				}
				e: {
					if (
						((h = u ? Or(u) : window),
						(f = h.nodeName && h.nodeName.toLowerCase()),
						f === 'select' || (f === 'input' && h.type === 'file'))
					)
						var T = iS;
					else if (Nh(h))
						if ($_) T = lS;
						else {
							T = oS;
							var b = sS;
						}
					else
						(f = h.nodeName) &&
							f.toLowerCase() === 'input' &&
							(h.type === 'checkbox' || h.type === 'radio') &&
							(T = aS);
					if (T && (T = T(e, u))) {
						z_(d, T, n, c);
						break e;
					}
					b && b(e, h, u),
						e === 'focusout' &&
							(b = h._wrapperState) &&
							b.controlled &&
							h.type === 'number' &&
							Yu(h, 'number', h.value);
				}
				switch (((b = u ? Or(u) : window), e)) {
					case 'focusin':
						(Nh(b) || b.contentEditable === 'true') && ((Cr = b), (rc = u), (Wi = null));
						break;
					case 'focusout':
						Wi = rc = Cr = null;
						break;
					case 'mousedown':
						ic = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						(ic = !1), Ph(d, n, c);
						break;
					case 'selectionchange':
						if (dS) break;
					case 'keydown':
					case 'keyup':
						Ph(d, n, c);
				}
				var R;
				if (Ld)
					e: {
						switch (e) {
							case 'compositionstart':
								var w = 'onCompositionStart';
								break e;
							case 'compositionend':
								w = 'onCompositionEnd';
								break e;
							case 'compositionupdate':
								w = 'onCompositionUpdate';
								break e;
						}
						w = void 0;
					}
				else
					xr
						? B_(e, n) && (w = 'onCompositionEnd')
						: e === 'keydown' && n.keyCode === 229 && (w = 'onCompositionStart');
				w &&
					(U_ &&
						n.locale !== 'ko' &&
						(xr || w !== 'onCompositionStart'
							? w === 'onCompositionEnd' && xr && (R = M_())
							: ((Sn = c), (Dd = 'value' in Sn ? Sn.value : Sn.textContent), (xr = !0))),
					(b = fa(u, w)),
					0 < b.length &&
						((w = new bh(w, e, null, n, c)),
						d.push({ event: w, listeners: b }),
						R ? (w.data = R) : ((R = F_(n)), R !== null && (w.data = R)))),
					(R = JE ? eS(e, n) : tS(e, n)) &&
						((u = fa(u, 'onBeforeInput')),
						0 < u.length &&
							((c = new bh('onBeforeInput', 'beforeinput', null, n, c)),
							d.push({ event: c, listeners: u }),
							(c.data = R)));
			}
			Z_(d, t);
		});
	}
	function ys(e, t, n) {
		return { instance: e, listener: t, currentTarget: n };
	}
	function fa(e, t) {
		for (var n = t + 'Capture', r = []; e !== null; ) {
			var i = e,
				s = i.stateNode;
			i.tag === 5 &&
				s !== null &&
				((i = s),
				(s = ds(e, n)),
				s != null && r.unshift(ys(e, s, i)),
				(s = ds(e, t)),
				s != null && r.push(ys(e, s, i))),
				(e = e.return);
		}
		return r;
	}
	function Er(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5);
		return e || null;
	}
	function Uh(e, t, n, r, i) {
		for (var s = t._reactName, o = []; n !== null && n !== r; ) {
			var a = n,
				l = a.alternate,
				u = a.stateNode;
			if (l !== null && l === r) break;
			a.tag === 5 &&
				u !== null &&
				((a = u),
				i
					? ((l = ds(n, s)), l != null && o.unshift(ys(n, l, a)))
					: i || ((l = ds(n, s)), l != null && o.push(ys(n, l, a)))),
				(n = n.return);
		}
		o.length !== 0 && e.push({ event: t, listeners: o });
	}
	var mS = /\r\n?/g,
		_S = /\u0000|\uFFFD/g;
	function Bh(e) {
		return (typeof e == 'string' ? e : '' + e)
			.replace(
				mS,
				`
`
			)
			.replace(_S, '');
	}
	function lo(e, t, n) {
		if (((t = Bh(t)), Bh(e) !== t && n)) throw Error(N(425));
	}
	function ha() {}
	var sc = null,
		oc = null;
	function ac(e, t) {
		return (
			e === 'textarea' ||
			e === 'noscript' ||
			typeof t.children == 'string' ||
			typeof t.children == 'number' ||
			(typeof t.dangerouslySetInnerHTML == 'object' &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var lc = typeof setTimeout == 'function' ? setTimeout : void 0,
		gS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Fh = typeof Promise == 'function' ? Promise : void 0,
		yS =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Fh < 'u'
				? function (e) {
						return Fh.resolve(null).then(e).catch(vS);
				  }
				: lc;
	function vS(e) {
		setTimeout(function () {
			throw e;
		});
	}
	function Xl(e, t) {
		var n = t,
			r = 0;
		do {
			var i = n.nextSibling;
			if ((e.removeChild(n), i && i.nodeType === 8))
				if (((n = i.data), n === '/$')) {
					if (r === 0) {
						e.removeChild(i), ps(t);
						return;
					}
					r--;
				} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
			n = i;
		} while (n);
		ps(t);
	}
	function On(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
				if (t === '/$') return null;
			}
		}
		return e;
	}
	function zh(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === '$' || n === '$!' || n === '$?') {
					if (t === 0) return e;
					t--;
				} else n === '/$' && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	var vi = Math.random().toString(36).slice(2),
		$t = '__reactFiber$' + vi,
		vs = '__reactProps$' + vi,
		sn = '__reactContainer$' + vi,
		uc = '__reactEvents$' + vi,
		ES = '__reactListeners$' + vi,
		SS = '__reactHandles$' + vi;
	function Kn(e) {
		var t = e[$t];
		if (t) return t;
		for (var n = e.parentNode; n; ) {
			if ((t = n[sn] || n[$t])) {
				if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
					for (e = zh(e); e !== null; ) {
						if ((n = e[$t])) return n;
						e = zh(e);
					}
				return t;
			}
			(e = n), (n = e.parentNode);
		}
		return null;
	}
	function zs(e) {
		return (e = e[$t] || e[sn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
	}
	function Or(e) {
		if (e.tag === 5 || e.tag === 6) return e.stateNode;
		throw Error(N(33));
	}
	function Ka(e) {
		return e[vs] || null;
	}
	var cc = [],
		Ir = -1;
	function Hn(e) {
		return { current: e };
	}
	function oe(e) {
		0 > Ir || ((e.current = cc[Ir]), (cc[Ir] = null), Ir--);
	}
	function ne(e, t) {
		Ir++, (cc[Ir] = e.current), (e.current = t);
	}
	var Un = {},
		je = Hn(Un),
		et = Hn(!1),
		or = Un;
	function Zr(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Un;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i = {},
			s;
		for (s in n) i[s] = t[s];
		return (
			r &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = t),
				(e.__reactInternalMemoizedMaskedChildContext = i)),
			i
		);
	}
	function tt(e) {
		return (e = e.childContextTypes), e != null;
	}
	function pa() {
		oe(et), oe(je);
	}
	function $h(e, t, n) {
		if (je.current !== Un) throw Error(N(168));
		ne(je, t), ne(et, n);
	}
	function J_(e, t, n) {
		var r = e.stateNode;
		if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
		r = r.getChildContext();
		for (var i in r) if (!(i in t)) throw Error(N(108, sE(e) || 'Unknown', i));
		return pe({}, n, r);
	}
	function ma(e) {
		return (
			(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Un),
			(or = je.current),
			ne(je, e),
			ne(et, et.current),
			!0
		);
	}
	function Hh(e, t, n) {
		var r = e.stateNode;
		if (!r) throw Error(N(169));
		n ? ((e = J_(e, t, or)), (r.__reactInternalMemoizedMergedChildContext = e), oe(et), oe(je), ne(je, e)) : oe(et),
			ne(et, n);
	}
	var Kt = null,
		Za = !1,
		Jl = !1;
	function e0(e) {
		Kt === null ? (Kt = [e]) : Kt.push(e);
	}
	function wS(e) {
		(Za = !0), e0(e);
	}
	function jn() {
		if (!Jl && Kt !== null) {
			Jl = !0;
			var e = 0,
				t = K;
			try {
				var n = Kt;
				for (K = 1; e < n.length; e++) {
					var r = n[e];
					do r = r(!0);
					while (r !== null);
				}
				(Kt = null), (Za = !1);
			} catch (i) {
				throw (Kt !== null && (Kt = Kt.slice(e + 1)), b_(Cd, jn), i);
			} finally {
				(K = t), (Jl = !1);
			}
		}
		return null;
	}
	var Dr = [],
		Ar = 0,
		_a = null,
		ga = 0,
		_t = [],
		gt = 0,
		ar = null,
		Xt = 1,
		Jt = '';
	function Yn(e, t) {
		(Dr[Ar++] = ga), (Dr[Ar++] = _a), (_a = e), (ga = t);
	}
	function t0(e, t, n) {
		(_t[gt++] = Xt), (_t[gt++] = Jt), (_t[gt++] = ar), (ar = e);
		var r = Xt;
		e = Jt;
		var i = 32 - Dt(r) - 1;
		(r &= ~(1 << i)), (n += 1);
		var s = 32 - Dt(t) + i;
		if (30 < s) {
			var o = i - (i % 5);
			(s = (r & ((1 << o) - 1)).toString(32)),
				(r >>= o),
				(i -= o),
				(Xt = (1 << (32 - Dt(t) + i)) | (n << i) | r),
				(Jt = s + e);
		} else (Xt = (1 << s) | (n << i) | r), (Jt = e);
	}
	function Ud(e) {
		e.return !== null && (Yn(e, 1), t0(e, 1, 0));
	}
	function Bd(e) {
		for (; e === _a; ) (_a = Dr[--Ar]), (Dr[Ar] = null), (ga = Dr[--Ar]), (Dr[Ar] = null);
		for (; e === ar; )
			(ar = _t[--gt]), (_t[gt] = null), (Jt = _t[--gt]), (_t[gt] = null), (Xt = _t[--gt]), (_t[gt] = null);
	}
	var ut = null,
		at = null,
		ce = !1,
		It = null;
	function n0(e, t) {
		var n = vt(5, null, null, 0);
		(n.elementType = 'DELETED'),
			(n.stateNode = t),
			(n.return = e),
			(t = e.deletions),
			t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
	}
	function jh(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return (
					(t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
					t !== null ? ((e.stateNode = t), (ut = e), (at = On(t.firstChild)), !0) : !1
				);
			case 6:
				return (
					(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
					t !== null ? ((e.stateNode = t), (ut = e), (at = null), !0) : !1
				);
			case 13:
				return (
					(t = t.nodeType !== 8 ? null : t),
					t !== null
						? ((n = ar !== null ? { id: Xt, overflow: Jt } : null),
						  (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
						  (n = vt(18, null, null, 0)),
						  (n.stateNode = t),
						  (n.return = e),
						  (e.child = n),
						  (ut = e),
						  (at = null),
						  !0)
						: !1
				);
			default:
				return !1;
		}
	}
	function dc(e) {
		return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
	}
	function fc(e) {
		if (ce) {
			var t = at;
			if (t) {
				var n = t;
				if (!jh(e, t)) {
					if (dc(e)) throw Error(N(418));
					t = On(n.nextSibling);
					var r = ut;
					t && jh(e, t) ? n0(r, n) : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (ut = e));
				}
			} else {
				if (dc(e)) throw Error(N(418));
				(e.flags = (e.flags & -4097) | 2), (ce = !1), (ut = e);
			}
		}
	}
	function Gh(e) {
		for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
		ut = e;
	}
	function uo(e) {
		if (e !== ut) return !1;
		if (!ce) return Gh(e), (ce = !0), !1;
		var t;
		if (
			((t = e.tag !== 3) &&
				!(t = e.tag !== 5) &&
				((t = e.type), (t = t !== 'head' && t !== 'body' && !ac(e.type, e.memoizedProps))),
			t && (t = at))
		) {
			if (dc(e)) throw (r0(), Error(N(418)));
			for (; t; ) n0(e, t), (t = On(t.nextSibling));
		}
		if ((Gh(e), e.tag === 13)) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8) {
						var n = e.data;
						if (n === '/$') {
							if (t === 0) {
								at = On(e.nextSibling);
								break e;
							}
							t--;
						} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
					}
					e = e.nextSibling;
				}
				at = null;
			}
		} else at = ut ? On(e.stateNode.nextSibling) : null;
		return !0;
	}
	function r0() {
		for (var e = at; e; ) e = On(e.nextSibling);
	}
	function Xr() {
		(at = ut = null), (ce = !1);
	}
	function Fd(e) {
		It === null ? (It = [e]) : It.push(e);
	}
	var TS = cn.ReactCurrentBatchConfig;
	function Nt(e, t) {
		if (e && e.defaultProps) {
			(t = pe({}, t)), (e = e.defaultProps);
			for (var n in e) t[n] === void 0 && (t[n] = e[n]);
			return t;
		}
		return t;
	}
	var ya = Hn(null),
		va = null,
		Pr = null,
		zd = null;
	function $d() {
		zd = Pr = va = null;
	}
	function Hd(e) {
		var t = ya.current;
		oe(ya), (e._currentValue = t);
	}
	function hc(e, t, n) {
		for (; e !== null; ) {
			var r = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
					: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
				e === n)
			)
				break;
			e = e.return;
		}
	}
	function jr(e, t) {
		(va = e),
			(zd = Pr = null),
			(e = e.dependencies),
			e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), (e.firstContext = null));
	}
	function wt(e) {
		var t = e._currentValue;
		if (zd !== e)
			if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
				if (va === null) throw Error(N(308));
				(Pr = e), (va.dependencies = { lanes: 0, firstContext: e });
			} else Pr = Pr.next = e;
		return t;
	}
	var Zn = null;
	function jd(e) {
		Zn === null ? (Zn = [e]) : Zn.push(e);
	}
	function i0(e, t, n, r) {
		var i = t.interleaved;
		return i === null ? ((n.next = n), jd(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), on(e, r);
	}
	function on(e, t) {
		e.lanes |= t;
		var n = e.alternate;
		for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
			(e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
		return n.tag === 3 ? n.stateNode : null;
	}
	var mn = !1;
	function Gd(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, interleaved: null, lanes: 0 },
			effects: null,
		};
	}
	function s0(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					effects: e.effects,
				});
	}
	function en(e, t) {
		return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function In(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (((r = r.shared), W & 2)) {
			var i = r.pending;
			return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), on(e, n);
		}
		return (
			(i = r.interleaved),
			i === null ? ((t.next = t), jd(r)) : ((t.next = i.next), (i.next = t)),
			(r.interleaved = t),
			on(e, n)
		);
	}
	function Bo(e, t, n) {
		if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
			var r = t.lanes;
			(r &= e.pendingLanes), (n |= r), (t.lanes = n), Nd(e, n);
		}
	}
	function Yh(e, t) {
		var n = e.updateQueue,
			r = e.alternate;
		if (r !== null && ((r = r.updateQueue), n === r)) {
			var i = null,
				s = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var o = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null,
					};
					s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
				} while (n !== null);
				s === null ? (i = s = t) : (s = s.next = t);
			} else i = s = t;
			(n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
				(e.updateQueue = n);
			return;
		}
		(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
	}
	function Ea(e, t, n, r) {
		var i = e.updateQueue;
		mn = !1;
		var s = i.firstBaseUpdate,
			o = i.lastBaseUpdate,
			a = i.shared.pending;
		if (a !== null) {
			i.shared.pending = null;
			var l = a,
				u = l.next;
			(l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
			var c = e.alternate;
			c !== null &&
				((c = c.updateQueue),
				(a = c.lastBaseUpdate),
				a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
		}
		if (s !== null) {
			var d = i.baseState;
			(o = 0), (c = u = l = null), (a = s);
			do {
				var h = a.lane,
					f = a.eventTime;
				if ((r & h) === h) {
					c !== null &&
						(c = c.next = { eventTime: f, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
					e: {
						var _ = e,
							y = a;
						switch (((h = t), (f = n), y.tag)) {
							case 1:
								if (((_ = y.payload), typeof _ == 'function')) {
									d = _.call(f, d, h);
									break e;
								}
								d = _;
								break e;
							case 3:
								_.flags = (_.flags & -65537) | 128;
							case 0:
								if (((_ = y.payload), (h = typeof _ == 'function' ? _.call(f, d, h) : _), h == null)) break e;
								d = pe({}, d, h);
								break e;
							case 2:
								mn = !0;
						}
					}
					a.callback !== null &&
						a.lane !== 0 &&
						((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
				} else
					(f = { eventTime: f, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
						c === null ? ((u = c = f), (l = d)) : (c = c.next = f),
						(o |= h);
				if (((a = a.next), a === null)) {
					if (((a = i.shared.pending), a === null)) break;
					(h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
				}
			} while (1);
			if (
				(c === null && (l = d),
				(i.baseState = l),
				(i.firstBaseUpdate = u),
				(i.lastBaseUpdate = c),
				(t = i.shared.interleaved),
				t !== null)
			) {
				i = t;
				do (o |= i.lane), (i = i.next);
				while (i !== t);
			} else s === null && (i.shared.lanes = 0);
			(ur |= o), (e.lanes = o), (e.memoizedState = d);
		}
	}
	function Wh(e, t, n) {
		if (((e = t.effects), (t.effects = null), e !== null))
			for (t = 0; t < e.length; t++) {
				var r = e[t],
					i = r.callback;
				if (i !== null) {
					if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(N(191, i));
					i.call(r);
				}
			}
	}
	var o0 = new i_.Component().refs;
	function pc(e, t, n, r) {
		(t = e.memoizedState),
			(n = n(r, t)),
			(n = n == null ? t : pe({}, t, n)),
			(e.memoizedState = n),
			e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Xa = {
		isMounted: function (e) {
			return (e = e._reactInternals) ? gr(e) === e : !1;
		},
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var r = qe(),
				i = An(e),
				s = en(r, i);
			(s.payload = t), n != null && (s.callback = n), (t = In(e, s, i)), t !== null && (At(t, e, i, r), Bo(t, e, i));
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var r = qe(),
				i = An(e),
				s = en(r, i);
			(s.tag = 1),
				(s.payload = t),
				n != null && (s.callback = n),
				(t = In(e, s, i)),
				t !== null && (At(t, e, i, r), Bo(t, e, i));
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = qe(),
				r = An(e),
				i = en(n, r);
			(i.tag = 2), t != null && (i.callback = t), (t = In(e, i, r)), t !== null && (At(t, e, r, n), Bo(t, e, r));
		},
	};
	function qh(e, t, n, r, i, s, o) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == 'function'
				? e.shouldComponentUpdate(r, s, o)
				: t.prototype && t.prototype.isPureReactComponent
				? !_s(n, r) || !_s(i, s)
				: !0
		);
	}
	function a0(e, t, n) {
		var r = !1,
			i = Un,
			s = t.contextType;
		return (
			typeof s == 'object' && s !== null
				? (s = wt(s))
				: ((i = tt(t) ? or : je.current), (r = t.contextTypes), (s = (r = r != null) ? Zr(e, i) : Un)),
			(t = new t(n, s)),
			(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
			(t.updater = Xa),
			(e.stateNode = t),
			(t._reactInternals = e),
			r &&
				((e = e.stateNode),
				(e.__reactInternalMemoizedUnmaskedChildContext = i),
				(e.__reactInternalMemoizedMaskedChildContext = s)),
			t
		);
	}
	function Vh(e, t, n, r) {
		(e = t.state),
			typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
			typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
			t.state !== e && Xa.enqueueReplaceState(t, t.state, null);
	}
	function mc(e, t, n, r) {
		var i = e.stateNode;
		(i.props = n), (i.state = e.memoizedState), (i.refs = o0), Gd(e);
		var s = t.contextType;
		typeof s == 'object' && s !== null ? (i.context = wt(s)) : ((s = tt(t) ? or : je.current), (i.context = Zr(e, s))),
			(i.state = e.memoizedState),
			(s = t.getDerivedStateFromProps),
			typeof s == 'function' && (pc(e, t, s, n), (i.state = e.memoizedState)),
			typeof t.getDerivedStateFromProps == 'function' ||
				typeof i.getSnapshotBeforeUpdate == 'function' ||
				(typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
				((t = i.state),
				typeof i.componentWillMount == 'function' && i.componentWillMount(),
				typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
				t !== i.state && Xa.enqueueReplaceState(i, i.state, null),
				Ea(e, n, i, r),
				(i.state = e.memoizedState)),
			typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
	}
	function Oi(e, t, n) {
		if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
			if (n._owner) {
				if (((n = n._owner), n)) {
					if (n.tag !== 1) throw Error(N(309));
					var r = n.stateNode;
				}
				if (!r) throw Error(N(147, e));
				var i = r,
					s = '' + e;
				return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
					? t.ref
					: ((t = function (o) {
							var a = i.refs;
							a === o0 && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
					  }),
					  (t._stringRef = s),
					  t);
			}
			if (typeof e != 'string') throw Error(N(284));
			if (!n._owner) throw Error(N(290, e));
		}
		return e;
	}
	function co(e, t) {
		throw (
			((e = Object.prototype.toString.call(t)),
			Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
		);
	}
	function Qh(e) {
		var t = e._init;
		return t(e._payload);
	}
	function l0(e) {
		function t(p, m) {
			if (e) {
				var g = p.deletions;
				g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
			}
		}
		function n(p, m) {
			if (!e) return null;
			for (; m !== null; ) t(p, m), (m = m.sibling);
			return null;
		}
		function r(p, m) {
			for (p = new Map(); m !== null; ) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
			return p;
		}
		function i(p, m) {
			return (p = Pn(p, m)), (p.index = 0), (p.sibling = null), p;
		}
		function s(p, m, g) {
			return (
				(p.index = g),
				e
					? ((g = p.alternate), g !== null ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g) : ((p.flags |= 2), m))
					: ((p.flags |= 1048576), m)
			);
		}
		function o(p) {
			return e && p.alternate === null && (p.flags |= 2), p;
		}
		function a(p, m, g, E) {
			return m === null || m.tag !== 6
				? ((m = ou(g, p.mode, E)), (m.return = p), m)
				: ((m = i(m, g)), (m.return = p), m);
		}
		function l(p, m, g, E) {
			var T = g.type;
			return T === kr
				? c(p, m, g.props.children, E, g.key)
				: m !== null &&
				  (m.elementType === T || (typeof T == 'object' && T !== null && T.$$typeof === pn && Qh(T) === m.type))
				? ((E = i(m, g.props)), (E.ref = Oi(p, m, g)), (E.return = p), E)
				: ((E = Go(g.type, g.key, g.props, null, p.mode, E)), (E.ref = Oi(p, m, g)), (E.return = p), E);
		}
		function u(p, m, g, E) {
			return m === null ||
				m.tag !== 4 ||
				m.stateNode.containerInfo !== g.containerInfo ||
				m.stateNode.implementation !== g.implementation
				? ((m = au(g, p.mode, E)), (m.return = p), m)
				: ((m = i(m, g.children || [])), (m.return = p), m);
		}
		function c(p, m, g, E, T) {
			return m === null || m.tag !== 7
				? ((m = rr(g, p.mode, E, T)), (m.return = p), m)
				: ((m = i(m, g)), (m.return = p), m);
		}
		function d(p, m, g) {
			if ((typeof m == 'string' && m !== '') || typeof m == 'number')
				return (m = ou('' + m, p.mode, g)), (m.return = p), m;
			if (typeof m == 'object' && m !== null) {
				switch (m.$$typeof) {
					case Js:
						return (g = Go(m.type, m.key, m.props, null, p.mode, g)), (g.ref = Oi(p, null, m)), (g.return = p), g;
					case br:
						return (m = au(m, p.mode, g)), (m.return = p), m;
					case pn:
						var E = m._init;
						return d(p, E(m._payload), g);
				}
				if (Mi(m) || bi(m)) return (m = rr(m, p.mode, g, null)), (m.return = p), m;
				co(p, m);
			}
			return null;
		}
		function h(p, m, g, E) {
			var T = m !== null ? m.key : null;
			if ((typeof g == 'string' && g !== '') || typeof g == 'number') return T !== null ? null : a(p, m, '' + g, E);
			if (typeof g == 'object' && g !== null) {
				switch (g.$$typeof) {
					case Js:
						return g.key === T ? l(p, m, g, E) : null;
					case br:
						return g.key === T ? u(p, m, g, E) : null;
					case pn:
						return (T = g._init), h(p, m, T(g._payload), E);
				}
				if (Mi(g) || bi(g)) return T !== null ? null : c(p, m, g, E, null);
				co(p, g);
			}
			return null;
		}
		function f(p, m, g, E, T) {
			if ((typeof E == 'string' && E !== '') || typeof E == 'number') return (p = p.get(g) || null), a(m, p, '' + E, T);
			if (typeof E == 'object' && E !== null) {
				switch (E.$$typeof) {
					case Js:
						return (p = p.get(E.key === null ? g : E.key) || null), l(m, p, E, T);
					case br:
						return (p = p.get(E.key === null ? g : E.key) || null), u(m, p, E, T);
					case pn:
						var b = E._init;
						return f(p, m, g, b(E._payload), T);
				}
				if (Mi(E) || bi(E)) return (p = p.get(g) || null), c(m, p, E, T, null);
				co(m, E);
			}
			return null;
		}
		function _(p, m, g, E) {
			for (var T = null, b = null, R = m, w = (m = 0), A = null; R !== null && w < g.length; w++) {
				R.index > w ? ((A = R), (R = null)) : (A = R.sibling);
				var O = h(p, R, g[w], E);
				if (O === null) {
					R === null && (R = A);
					break;
				}
				e && R && O.alternate === null && t(p, R),
					(m = s(O, m, w)),
					b === null ? (T = O) : (b.sibling = O),
					(b = O),
					(R = A);
			}
			if (w === g.length) return n(p, R), ce && Yn(p, w), T;
			if (R === null) {
				for (; w < g.length; w++)
					(R = d(p, g[w], E)), R !== null && ((m = s(R, m, w)), b === null ? (T = R) : (b.sibling = R), (b = R));
				return ce && Yn(p, w), T;
			}
			for (R = r(p, R); w < g.length; w++)
				(A = f(R, p, w, g[w], E)),
					A !== null &&
						(e && A.alternate !== null && R.delete(A.key === null ? w : A.key),
						(m = s(A, m, w)),
						b === null ? (T = A) : (b.sibling = A),
						(b = A));
			return (
				e &&
					R.forEach(function (B) {
						return t(p, B);
					}),
				ce && Yn(p, w),
				T
			);
		}
		function y(p, m, g, E) {
			var T = bi(g);
			if (typeof T != 'function') throw Error(N(150));
			if (((g = T.call(g)), g == null)) throw Error(N(151));
			for (var b = (T = null), R = m, w = (m = 0), A = null, O = g.next(); R !== null && !O.done; w++, O = g.next()) {
				R.index > w ? ((A = R), (R = null)) : (A = R.sibling);
				var B = h(p, R, O.value, E);
				if (B === null) {
					R === null && (R = A);
					break;
				}
				e && R && B.alternate === null && t(p, R),
					(m = s(B, m, w)),
					b === null ? (T = B) : (b.sibling = B),
					(b = B),
					(R = A);
			}
			if (O.done) return n(p, R), ce && Yn(p, w), T;
			if (R === null) {
				for (; !O.done; w++, O = g.next())
					(O = d(p, O.value, E)), O !== null && ((m = s(O, m, w)), b === null ? (T = O) : (b.sibling = O), (b = O));
				return ce && Yn(p, w), T;
			}
			for (R = r(p, R); !O.done; w++, O = g.next())
				(O = f(R, p, w, O.value, E)),
					O !== null &&
						(e && O.alternate !== null && R.delete(O.key === null ? w : O.key),
						(m = s(O, m, w)),
						b === null ? (T = O) : (b.sibling = O),
						(b = O));
			return (
				e &&
					R.forEach(function (H) {
						return t(p, H);
					}),
				ce && Yn(p, w),
				T
			);
		}
		function S(p, m, g, E) {
			if (
				(typeof g == 'object' && g !== null && g.type === kr && g.key === null && (g = g.props.children),
				typeof g == 'object' && g !== null)
			) {
				switch (g.$$typeof) {
					case Js:
						e: {
							for (var T = g.key, b = m; b !== null; ) {
								if (b.key === T) {
									if (((T = g.type), T === kr)) {
										if (b.tag === 7) {
											n(p, b.sibling), (m = i(b, g.props.children)), (m.return = p), (p = m);
											break e;
										}
									} else if (
										b.elementType === T ||
										(typeof T == 'object' && T !== null && T.$$typeof === pn && Qh(T) === b.type)
									) {
										n(p, b.sibling), (m = i(b, g.props)), (m.ref = Oi(p, b, g)), (m.return = p), (p = m);
										break e;
									}
									n(p, b);
									break;
								} else t(p, b);
								b = b.sibling;
							}
							g.type === kr
								? ((m = rr(g.props.children, p.mode, E, g.key)), (m.return = p), (p = m))
								: ((E = Go(g.type, g.key, g.props, null, p.mode, E)), (E.ref = Oi(p, m, g)), (E.return = p), (p = E));
						}
						return o(p);
					case br:
						e: {
							for (b = g.key; m !== null; ) {
								if (m.key === b)
									if (
										m.tag === 4 &&
										m.stateNode.containerInfo === g.containerInfo &&
										m.stateNode.implementation === g.implementation
									) {
										n(p, m.sibling), (m = i(m, g.children || [])), (m.return = p), (p = m);
										break e;
									} else {
										n(p, m);
										break;
									}
								else t(p, m);
								m = m.sibling;
							}
							(m = au(g, p.mode, E)), (m.return = p), (p = m);
						}
						return o(p);
					case pn:
						return (b = g._init), S(p, m, b(g._payload), E);
				}
				if (Mi(g)) return _(p, m, g, E);
				if (bi(g)) return y(p, m, g, E);
				co(p, g);
			}
			return (typeof g == 'string' && g !== '') || typeof g == 'number'
				? ((g = '' + g),
				  m !== null && m.tag === 6
						? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
						: (n(p, m), (m = ou(g, p.mode, E)), (m.return = p), (p = m)),
				  o(p))
				: n(p, m);
		}
		return S;
	}
	var Jr = l0(!0),
		u0 = l0(!1),
		$s = {},
		Gt = Hn($s),
		Es = Hn($s),
		Ss = Hn($s);
	function Xn(e) {
		if (e === $s) throw Error(N(174));
		return e;
	}
	function Yd(e, t) {
		switch ((ne(Ss, t), ne(Es, e), ne(Gt, $s), (e = t.nodeType), e)) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : qu(null, '');
				break;
			default:
				(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = qu(t, e));
		}
		oe(Gt), ne(Gt, t);
	}
	function ei() {
		oe(Gt), oe(Es), oe(Ss);
	}
	function c0(e) {
		Xn(Ss.current);
		var t = Xn(Gt.current),
			n = qu(t, e.type);
		t !== n && (ne(Es, e), ne(Gt, n));
	}
	function Wd(e) {
		Es.current === e && (oe(Gt), oe(Es));
	}
	var fe = Hn(0);
	function Sa(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	var eu = [];
	function qd() {
		for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null;
		eu.length = 0;
	}
	var Fo = cn.ReactCurrentDispatcher,
		tu = cn.ReactCurrentBatchConfig,
		lr = 0,
		he = null,
		Te = null,
		xe = null,
		wa = !1,
		qi = !1,
		ws = 0,
		RS = 0;
	function Fe() {
		throw Error(N(321));
	}
	function Vd(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
		return !0;
	}
	function Qd(e, t, n, r, i, s) {
		if (
			((lr = s),
			(he = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(Fo.current = e === null || e.memoizedState === null ? CS : NS),
			(e = n(r, i)),
			qi)
		) {
			s = 0;
			do {
				if (((qi = !1), (ws = 0), 25 <= s)) throw Error(N(301));
				(s += 1), (xe = Te = null), (t.updateQueue = null), (Fo.current = OS), (e = n(r, i));
			} while (qi);
		}
		if (((Fo.current = Ta), (t = Te !== null && Te.next !== null), (lr = 0), (xe = Te = he = null), (wa = !1), t))
			throw Error(N(300));
		return e;
	}
	function Kd() {
		var e = ws !== 0;
		return (ws = 0), e;
	}
	function Bt() {
		var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
		return xe === null ? (he.memoizedState = xe = e) : (xe = xe.next = e), xe;
	}
	function Tt() {
		if (Te === null) {
			var e = he.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = Te.next;
		var t = xe === null ? he.memoizedState : xe.next;
		if (t !== null) (xe = t), (Te = e);
		else {
			if (e === null) throw Error(N(310));
			(Te = e),
				(e = {
					memoizedState: Te.memoizedState,
					baseState: Te.baseState,
					baseQueue: Te.baseQueue,
					queue: Te.queue,
					next: null,
				}),
				xe === null ? (he.memoizedState = xe = e) : (xe = xe.next = e);
		}
		return xe;
	}
	function Ts(e, t) {
		return typeof t == 'function' ? t(e) : t;
	}
	function nu(e) {
		var t = Tt(),
			n = t.queue;
		if (n === null) throw Error(N(311));
		n.lastRenderedReducer = e;
		var r = Te,
			i = r.baseQueue,
			s = n.pending;
		if (s !== null) {
			if (i !== null) {
				var o = i.next;
				(i.next = s.next), (s.next = o);
			}
			(r.baseQueue = i = s), (n.pending = null);
		}
		if (i !== null) {
			(s = i.next), (r = r.baseState);
			var a = (o = null),
				l = null,
				u = s;
			do {
				var c = u.lane;
				if ((lr & c) === c)
					l !== null &&
						(l = l.next =
							{ lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
						(r = u.hasEagerState ? u.eagerState : e(r, u.action));
				else {
					var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
					l === null ? ((a = l = d), (o = r)) : (l = l.next = d), (he.lanes |= c), (ur |= c);
				}
				u = u.next;
			} while (u !== null && u !== s);
			l === null ? (o = r) : (l.next = a),
				Lt(r, t.memoizedState) || (Xe = !0),
				(t.memoizedState = r),
				(t.baseState = o),
				(t.baseQueue = l),
				(n.lastRenderedState = r);
		}
		if (((e = n.interleaved), e !== null)) {
			i = e;
			do (s = i.lane), (he.lanes |= s), (ur |= s), (i = i.next);
			while (i !== e);
		} else i === null && (n.lanes = 0);
		return [t.memoizedState, n.dispatch];
	}
	function ru(e) {
		var t = Tt(),
			n = t.queue;
		if (n === null) throw Error(N(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch,
			i = n.pending,
			s = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var o = (i = i.next);
			do (s = e(s, o.action)), (o = o.next);
			while (o !== i);
			Lt(s, t.memoizedState) || (Xe = !0),
				(t.memoizedState = s),
				t.baseQueue === null && (t.baseState = s),
				(n.lastRenderedState = s);
		}
		return [s, r];
	}
	function d0() {}
	function f0(e, t) {
		var n = he,
			r = Tt(),
			i = t(),
			s = !Lt(r.memoizedState, i);
		if (
			(s && ((r.memoizedState = i), (Xe = !0)),
			(r = r.queue),
			Zd(m0.bind(null, n, r, e), [e]),
			r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
		) {
			if (((n.flags |= 2048), Rs(9, p0.bind(null, n, r, i, t), void 0, null), Oe === null)) throw Error(N(349));
			lr & 30 || h0(n, t, i);
		}
		return i;
	}
	function h0(e, t, n) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: n }),
			(t = he.updateQueue),
			t === null
				? ((t = { lastEffect: null, stores: null }), (he.updateQueue = t), (t.stores = [e]))
				: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
	}
	function p0(e, t, n, r) {
		(t.value = n), (t.getSnapshot = r), _0(t) && g0(e);
	}
	function m0(e, t, n) {
		return n(function () {
			_0(t) && g0(e);
		});
	}
	function _0(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Lt(e, n);
		} catch {
			return !0;
		}
	}
	function g0(e) {
		var t = on(e, 1);
		t !== null && At(t, e, 1, -1);
	}
	function Kh(e) {
		var t = Bt();
		return (
			typeof e == 'function' && (e = e()),
			(t.memoizedState = t.baseState = e),
			(e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ts,
				lastRenderedState: e,
			}),
			(t.queue = e),
			(e = e.dispatch = xS.bind(null, he, e)),
			[t.memoizedState, e]
		);
	}
	function Rs(e, t, n, r) {
		return (
			(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
			(t = he.updateQueue),
			t === null
				? ((t = { lastEffect: null, stores: null }), (he.updateQueue = t), (t.lastEffect = e.next = e))
				: ((n = t.lastEffect),
				  n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
			e
		);
	}
	function y0() {
		return Tt().memoizedState;
	}
	function zo(e, t, n, r) {
		var i = Bt();
		(he.flags |= e), (i.memoizedState = Rs(1 | t, n, void 0, r === void 0 ? null : r));
	}
	function Ja(e, t, n, r) {
		var i = Tt();
		r = r === void 0 ? null : r;
		var s = void 0;
		if (Te !== null) {
			var o = Te.memoizedState;
			if (((s = o.destroy), r !== null && Vd(r, o.deps))) {
				i.memoizedState = Rs(t, n, s, r);
				return;
			}
		}
		(he.flags |= e), (i.memoizedState = Rs(1 | t, n, s, r));
	}
	function Zh(e, t) {
		return zo(8390656, 8, e, t);
	}
	function Zd(e, t) {
		return Ja(2048, 8, e, t);
	}
	function v0(e, t) {
		return Ja(4, 2, e, t);
	}
	function E0(e, t) {
		return Ja(4, 4, e, t);
	}
	function S0(e, t) {
		if (typeof t == 'function')
			return (
				(e = e()),
				t(e),
				function () {
					t(null);
				}
			);
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null;
				}
			);
	}
	function w0(e, t, n) {
		return (n = n != null ? n.concat([e]) : null), Ja(4, 4, S0.bind(null, t, e), n);
	}
	function Xd() {}
	function T0(e, t) {
		var n = Tt();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Vd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
	}
	function R0(e, t) {
		var n = Tt();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return r !== null && t !== null && Vd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
	}
	function b0(e, t, n) {
		return lr & 21
			? (Lt(n, t) || ((n = C_()), (he.lanes |= n), (ur |= n), (e.baseState = !0)), t)
			: (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
	}
	function bS(e, t) {
		var n = K;
		(K = n !== 0 && 4 > n ? n : 4), e(!0);
		var r = tu.transition;
		tu.transition = {};
		try {
			e(!1), t();
		} finally {
			(K = n), (tu.transition = r);
		}
	}
	function k0() {
		return Tt().memoizedState;
	}
	function kS(e, t, n) {
		var r = An(e);
		if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), x0(e))) C0(t, n);
		else if (((n = i0(e, t, n, r)), n !== null)) {
			var i = qe();
			At(n, e, r, i), N0(n, t, r);
		}
	}
	function xS(e, t, n) {
		var r = An(e),
			i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
		if (x0(e)) C0(t, i);
		else {
			var s = e.alternate;
			if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
				try {
					var o = t.lastRenderedState,
						a = s(o, n);
					if (((i.hasEagerState = !0), (i.eagerState = a), Lt(a, o))) {
						var l = t.interleaved;
						l === null ? ((i.next = i), jd(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
						return;
					}
				} catch {
				} finally {
				}
			(n = i0(e, t, i, r)), n !== null && ((i = qe()), At(n, e, r, i), N0(n, t, r));
		}
	}
	function x0(e) {
		var t = e.alternate;
		return e === he || (t !== null && t === he);
	}
	function C0(e, t) {
		qi = wa = !0;
		var n = e.pending;
		n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
	}
	function N0(e, t, n) {
		if (n & 4194240) {
			var r = t.lanes;
			(r &= e.pendingLanes), (n |= r), (t.lanes = n), Nd(e, n);
		}
	}
	var Ta = {
			readContext: wt,
			useCallback: Fe,
			useContext: Fe,
			useEffect: Fe,
			useImperativeHandle: Fe,
			useInsertionEffect: Fe,
			useLayoutEffect: Fe,
			useMemo: Fe,
			useReducer: Fe,
			useRef: Fe,
			useState: Fe,
			useDebugValue: Fe,
			useDeferredValue: Fe,
			useTransition: Fe,
			useMutableSource: Fe,
			useSyncExternalStore: Fe,
			useId: Fe,
			unstable_isNewReconciler: !1,
		},
		CS = {
			readContext: wt,
			useCallback: function (e, t) {
				return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
			},
			useContext: wt,
			useEffect: Zh,
			useImperativeHandle: function (e, t, n) {
				return (n = n != null ? n.concat([e]) : null), zo(4194308, 4, S0.bind(null, t, e), n);
			},
			useLayoutEffect: function (e, t) {
				return zo(4194308, 4, e, t);
			},
			useInsertionEffect: function (e, t) {
				return zo(4, 2, e, t);
			},
			useMemo: function (e, t) {
				var n = Bt();
				return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
			},
			useReducer: function (e, t, n) {
				var r = Bt();
				return (
					(t = n !== void 0 ? n(t) : t),
					(r.memoizedState = r.baseState = t),
					(e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: t,
					}),
					(r.queue = e),
					(e = e.dispatch = kS.bind(null, he, e)),
					[r.memoizedState, e]
				);
			},
			useRef: function (e) {
				var t = Bt();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: Kh,
			useDebugValue: Xd,
			useDeferredValue: function (e) {
				return (Bt().memoizedState = e);
			},
			useTransition: function () {
				var e = Kh(!1),
					t = e[0];
				return (e = bS.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (e, t, n) {
				var r = he,
					i = Bt();
				if (ce) {
					if (n === void 0) throw Error(N(407));
					n = n();
				} else {
					if (((n = t()), Oe === null)) throw Error(N(349));
					lr & 30 || h0(r, t, n);
				}
				i.memoizedState = n;
				var s = { value: n, getSnapshot: t };
				return (
					(i.queue = s),
					Zh(m0.bind(null, r, s, e), [e]),
					(r.flags |= 2048),
					Rs(9, p0.bind(null, r, s, n, t), void 0, null),
					n
				);
			},
			useId: function () {
				var e = Bt(),
					t = Oe.identifierPrefix;
				if (ce) {
					var n = Jt,
						r = Xt;
					(n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
						(t = ':' + t + 'R' + n),
						(n = ws++),
						0 < n && (t += 'H' + n.toString(32)),
						(t += ':');
				} else (n = RS++), (t = ':' + t + 'r' + n.toString(32) + ':');
				return (e.memoizedState = t);
			},
			unstable_isNewReconciler: !1,
		},
		NS = {
			readContext: wt,
			useCallback: T0,
			useContext: wt,
			useEffect: Zd,
			useImperativeHandle: w0,
			useInsertionEffect: v0,
			useLayoutEffect: E0,
			useMemo: R0,
			useReducer: nu,
			useRef: y0,
			useState: function () {
				return nu(Ts);
			},
			useDebugValue: Xd,
			useDeferredValue: function (e) {
				var t = Tt();
				return b0(t, Te.memoizedState, e);
			},
			useTransition: function () {
				var e = nu(Ts)[0],
					t = Tt().memoizedState;
				return [e, t];
			},
			useMutableSource: d0,
			useSyncExternalStore: f0,
			useId: k0,
			unstable_isNewReconciler: !1,
		},
		OS = {
			readContext: wt,
			useCallback: T0,
			useContext: wt,
			useEffect: Zd,
			useImperativeHandle: w0,
			useInsertionEffect: v0,
			useLayoutEffect: E0,
			useMemo: R0,
			useReducer: ru,
			useRef: y0,
			useState: function () {
				return ru(Ts);
			},
			useDebugValue: Xd,
			useDeferredValue: function (e) {
				var t = Tt();
				return Te === null ? (t.memoizedState = e) : b0(t, Te.memoizedState, e);
			},
			useTransition: function () {
				var e = ru(Ts)[0],
					t = Tt().memoizedState;
				return [e, t];
			},
			useMutableSource: d0,
			useSyncExternalStore: f0,
			useId: k0,
			unstable_isNewReconciler: !1,
		};
	function ti(e, t) {
		try {
			var n = '',
				r = t;
			do (n += iE(r)), (r = r.return);
			while (r);
			var i = n;
		} catch (s) {
			i =
				`
Error generating stack: ` +
				s.message +
				`
` +
				s.stack;
		}
		return { value: e, source: t, stack: i, digest: null };
	}
	function iu(e, t, n) {
		return { value: e, source: null, stack: n ?? null, digest: t ?? null };
	}
	function _c(e, t) {
		try {
			console.error(t.value);
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	var IS = typeof WeakMap == 'function' ? WeakMap : Map;
	function O0(e, t, n) {
		(n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
		var r = t.value;
		return (
			(n.callback = function () {
				ba || ((ba = !0), (kc = r)), _c(e, t);
			}),
			n
		);
	}
	function I0(e, t, n) {
		(n = en(-1, n)), (n.tag = 3);
		var r = e.type.getDerivedStateFromError;
		if (typeof r == 'function') {
			var i = t.value;
			(n.payload = function () {
				return r(i);
			}),
				(n.callback = function () {
					_c(e, t);
				});
		}
		var s = e.stateNode;
		return (
			s !== null &&
				typeof s.componentDidCatch == 'function' &&
				(n.callback = function () {
					_c(e, t), typeof r != 'function' && (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
					var o = t.stack;
					this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
				}),
			n
		);
	}
	function Xh(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new IS();
			var i = new Set();
			r.set(t, i);
		} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
		i.has(n) || (i.add(n), (e = YS.bind(null, e, t, n)), t.then(e, e));
	}
	function Jh(e) {
		do {
			var t;
			if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
			e = e.return;
		} while (e !== null);
		return null;
	}
	function ep(e, t, n, r, i) {
		return e.mode & 1
			? ((e.flags |= 65536), (e.lanes = i), e)
			: (e === t
					? (e.flags |= 65536)
					: ((e.flags |= 128),
					  (n.flags |= 131072),
					  (n.flags &= -52805),
					  n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = en(-1, 1)), (t.tag = 2), In(n, t, 1))),
					  (n.lanes |= 1)),
			  e);
	}
	var DS = cn.ReactCurrentOwner,
		Xe = !1;
	function Ge(e, t, n, r) {
		t.child = e === null ? u0(t, null, n, r) : Jr(t, e.child, n, r);
	}
	function tp(e, t, n, r, i) {
		n = n.render;
		var s = t.ref;
		return (
			jr(t, i),
			(r = Qd(e, t, n, r, s, i)),
			(n = Kd()),
			e !== null && !Xe
				? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), an(e, t, i))
				: (ce && n && Ud(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
		);
	}
	function np(e, t, n, r, i) {
		if (e === null) {
			var s = n.type;
			return typeof s == 'function' &&
				!af(s) &&
				s.defaultProps === void 0 &&
				n.compare === null &&
				n.defaultProps === void 0
				? ((t.tag = 15), (t.type = s), D0(e, t, s, r, i))
				: ((e = Go(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
		}
		if (((s = e.child), !(e.lanes & i))) {
			var o = s.memoizedProps;
			if (((n = n.compare), (n = n !== null ? n : _s), n(o, r) && e.ref === t.ref)) return an(e, t, i);
		}
		return (t.flags |= 1), (e = Pn(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
	}
	function D0(e, t, n, r, i) {
		if (e !== null) {
			var s = e.memoizedProps;
			if (_s(s, r) && e.ref === t.ref)
				if (((Xe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Xe = !0);
				else return (t.lanes = e.lanes), an(e, t, i);
		}
		return gc(e, t, n, r, i);
	}
	function A0(e, t, n) {
		var r = t.pendingProps,
			i = r.children,
			s = e !== null ? e.memoizedState : null;
		if (r.mode === 'hidden')
			if (!(t.mode & 1))
				(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ne(Mr, ot), (ot |= n);
			else {
				if (!(n & 1073741824))
					return (
						(e = s !== null ? s.baseLanes | n : n),
						(t.lanes = t.childLanes = 1073741824),
						(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
						(t.updateQueue = null),
						ne(Mr, ot),
						(ot |= e),
						null
					);
				(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
					(r = s !== null ? s.baseLanes : n),
					ne(Mr, ot),
					(ot |= r);
			}
		else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), ne(Mr, ot), (ot |= r);
		return Ge(e, t, i, n), t.child;
	}
	function P0(e, t) {
		var n = t.ref;
		((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
	}
	function gc(e, t, n, r, i) {
		var s = tt(n) ? or : je.current;
		return (
			(s = Zr(t, s)),
			jr(t, i),
			(n = Qd(e, t, n, r, s, i)),
			(r = Kd()),
			e !== null && !Xe
				? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), an(e, t, i))
				: (ce && r && Ud(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
		);
	}
	function rp(e, t, n, r, i) {
		if (tt(n)) {
			var s = !0;
			ma(t);
		} else s = !1;
		if ((jr(t, i), t.stateNode === null)) $o(e, t), a0(t, n, r), mc(t, n, r, i), (r = !0);
		else if (e === null) {
			var o = t.stateNode,
				a = t.memoizedProps;
			o.props = a;
			var l = o.context,
				u = n.contextType;
			typeof u == 'object' && u !== null ? (u = wt(u)) : ((u = tt(n) ? or : je.current), (u = Zr(t, u)));
			var c = n.getDerivedStateFromProps,
				d = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
			d ||
				(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
				((a !== r || l !== u) && Vh(t, o, r, u)),
				(mn = !1);
			var h = t.memoizedState;
			(o.state = h),
				Ea(t, r, o, i),
				(l = t.memoizedState),
				a !== r || h !== l || et.current || mn
					? (typeof c == 'function' && (pc(t, n, c, r), (l = t.memoizedState)),
					  (a = mn || qh(t, n, a, r, h, l, u))
							? (d ||
									(typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
									(typeof o.componentWillMount == 'function' && o.componentWillMount(),
									typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
							  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
							: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
							  (t.memoizedProps = r),
							  (t.memoizedState = l)),
					  (o.props = r),
					  (o.state = l),
					  (o.context = u),
					  (r = a))
					: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
		} else {
			(o = t.stateNode),
				s0(e, t),
				(a = t.memoizedProps),
				(u = t.type === t.elementType ? a : Nt(t.type, a)),
				(o.props = u),
				(d = t.pendingProps),
				(h = o.context),
				(l = n.contextType),
				typeof l == 'object' && l !== null ? (l = wt(l)) : ((l = tt(n) ? or : je.current), (l = Zr(t, l)));
			var f = n.getDerivedStateFromProps;
			(c = typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
				(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
				((a !== d || h !== l) && Vh(t, o, r, l)),
				(mn = !1),
				(h = t.memoizedState),
				(o.state = h),
				Ea(t, r, o, i);
			var _ = t.memoizedState;
			a !== d || h !== _ || et.current || mn
				? (typeof f == 'function' && (pc(t, n, f, r), (_ = t.memoizedState)),
				  (u = mn || qh(t, n, u, r, h, _, l) || !1)
						? (c ||
								(typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
								(typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, _, l),
								typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, _, l)),
						  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
						  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
						: (typeof o.componentDidUpdate != 'function' ||
								(a === e.memoizedProps && h === e.memoizedState) ||
								(t.flags |= 4),
						  typeof o.getSnapshotBeforeUpdate != 'function' ||
								(a === e.memoizedProps && h === e.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = r),
						  (t.memoizedState = _)),
				  (o.props = r),
				  (o.state = _),
				  (o.context = l),
				  (r = u))
				: (typeof o.componentDidUpdate != 'function' ||
						(a === e.memoizedProps && h === e.memoizedState) ||
						(t.flags |= 4),
				  typeof o.getSnapshotBeforeUpdate != 'function' ||
						(a === e.memoizedProps && h === e.memoizedState) ||
						(t.flags |= 1024),
				  (r = !1));
		}
		return yc(e, t, n, r, s, i);
	}
	function yc(e, t, n, r, i, s) {
		P0(e, t);
		var o = (t.flags & 128) !== 0;
		if (!r && !o) return i && Hh(t, n, !1), an(e, t, s);
		(r = t.stateNode), (DS.current = t);
		var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
		return (
			(t.flags |= 1),
			e !== null && o ? ((t.child = Jr(t, e.child, null, s)), (t.child = Jr(t, null, a, s))) : Ge(e, t, a, s),
			(t.memoizedState = r.state),
			i && Hh(t, n, !0),
			t.child
		);
	}
	function L0(e) {
		var t = e.stateNode;
		t.pendingContext ? $h(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $h(e, t.context, !1),
			Yd(e, t.containerInfo);
	}
	function ip(e, t, n, r, i) {
		return Xr(), Fd(i), (t.flags |= 256), Ge(e, t, n, r), t.child;
	}
	var vc = { dehydrated: null, treeContext: null, retryLane: 0 };
	function Ec(e) {
		return { baseLanes: e, cachePool: null, transitions: null };
	}
	function M0(e, t, n) {
		var r = t.pendingProps,
			i = fe.current,
			s = !1,
			o = (t.flags & 128) !== 0,
			a;
		if (
			((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
			a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
			ne(fe, i & 1),
			e === null)
		)
			return (
				fc(t),
				(e = t.memoizedState),
				e !== null && ((e = e.dehydrated), e !== null)
					? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
					: ((o = r.children),
					  (e = r.fallback),
					  s
							? ((r = t.mode),
							  (s = t.child),
							  (o = { mode: 'hidden', children: o }),
							  !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = nl(o, r, 0, null)),
							  (e = rr(e, r, n, null)),
							  (s.return = t),
							  (e.return = t),
							  (s.sibling = e),
							  (t.child = s),
							  (t.child.memoizedState = Ec(n)),
							  (t.memoizedState = vc),
							  e)
							: Jd(t, o))
			);
		if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return AS(e, t, o, r, a, i, n);
		if (s) {
			(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
			var l = { mode: 'hidden', children: r.children };
			return (
				!(o & 1) && t.child !== i
					? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
					: ((r = Pn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
				a !== null ? (s = Pn(a, s)) : ((s = rr(s, o, n, null)), (s.flags |= 2)),
				(s.return = t),
				(r.return = t),
				(r.sibling = s),
				(t.child = r),
				(r = s),
				(s = t.child),
				(o = e.child.memoizedState),
				(o = o === null ? Ec(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
				(s.memoizedState = o),
				(s.childLanes = e.childLanes & ~n),
				(t.memoizedState = vc),
				r
			);
		}
		return (
			(s = e.child),
			(e = s.sibling),
			(r = Pn(s, { mode: 'visible', children: r.children })),
			!(t.mode & 1) && (r.lanes = n),
			(r.return = t),
			(r.sibling = null),
			e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
			(t.child = r),
			(t.memoizedState = null),
			r
		);
	}
	function Jd(e, t) {
		return (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
	}
	function fo(e, t, n, r) {
		return (
			r !== null && Fd(r),
			Jr(t, e.child, null, n),
			(e = Jd(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function AS(e, t, n, r, i, s, o) {
		if (n)
			return t.flags & 256
				? ((t.flags &= -257), (r = iu(Error(N(422)))), fo(e, t, o, r))
				: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((s = r.fallback),
				  (i = t.mode),
				  (r = nl({ mode: 'visible', children: r.children }, i, 0, null)),
				  (s = rr(s, i, o, null)),
				  (s.flags |= 2),
				  (r.return = t),
				  (s.return = t),
				  (r.sibling = s),
				  (t.child = r),
				  t.mode & 1 && Jr(t, e.child, null, o),
				  (t.child.memoizedState = Ec(o)),
				  (t.memoizedState = vc),
				  s);
		if (!(t.mode & 1)) return fo(e, t, o, null);
		if (i.data === '$!') {
			if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
			return (r = a), (s = Error(N(419))), (r = iu(s, r, void 0)), fo(e, t, o, r);
		}
		if (((a = (o & e.childLanes) !== 0), Xe || a)) {
			if (((r = Oe), r !== null)) {
				switch (o & -o) {
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
				(i = i & (r.suspendedLanes | o) ? 0 : i),
					i !== 0 && i !== s.retryLane && ((s.retryLane = i), on(e, i), At(r, e, i, -1));
			}
			return of(), (r = iu(Error(N(421)))), fo(e, t, o, r);
		}
		return i.data === '$?'
			? ((t.flags |= 128), (t.child = e.child), (t = WS.bind(null, e)), (i._reactRetry = t), null)
			: ((e = s.treeContext),
			  (at = On(i.nextSibling)),
			  (ut = t),
			  (ce = !0),
			  (It = null),
			  e !== null && ((_t[gt++] = Xt), (_t[gt++] = Jt), (_t[gt++] = ar), (Xt = e.id), (Jt = e.overflow), (ar = t)),
			  (t = Jd(t, r.children)),
			  (t.flags |= 4096),
			  t);
	}
	function sp(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), hc(e.return, t, n);
	}
	function su(e, t, n, r, i) {
		var s = e.memoizedState;
		s === null
			? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
			: ((s.isBackwards = t),
			  (s.rendering = null),
			  (s.renderingStartTime = 0),
			  (s.last = r),
			  (s.tail = n),
			  (s.tailMode = i));
	}
	function U0(e, t, n) {
		var r = t.pendingProps,
			i = r.revealOrder,
			s = r.tail;
		if ((Ge(e, t, r.children, n), (r = fe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && e.flags & 128)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && sp(e, n, t);
					else if (e.tag === 19) sp(e, n, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			r &= 1;
		}
		if ((ne(fe, r), !(t.mode & 1))) t.memoizedState = null;
		else
			switch (i) {
				case 'forwards':
					for (n = t.child, i = null; n !== null; )
						(e = n.alternate), e !== null && Sa(e) === null && (i = n), (n = n.sibling);
					(n = i),
						n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
						su(t, !1, i, n, s);
					break;
				case 'backwards':
					for (n = null, i = t.child, t.child = null; i !== null; ) {
						if (((e = i.alternate), e !== null && Sa(e) === null)) {
							t.child = i;
							break;
						}
						(e = i.sibling), (i.sibling = n), (n = i), (i = e);
					}
					su(t, !0, n, null, s);
					break;
				case 'together':
					su(t, !1, null, null, void 0);
					break;
				default:
					t.memoizedState = null;
			}
		return t.child;
	}
	function $o(e, t) {
		!(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
	}
	function an(e, t, n) {
		if ((e !== null && (t.dependencies = e.dependencies), (ur |= t.lanes), !(n & t.childLanes))) return null;
		if (e !== null && t.child !== e.child) throw Error(N(153));
		if (t.child !== null) {
			for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
				(e = e.sibling), (n = n.sibling = Pn(e, e.pendingProps)), (n.return = t);
			n.sibling = null;
		}
		return t.child;
	}
	function PS(e, t, n) {
		switch (t.tag) {
			case 3:
				L0(t), Xr();
				break;
			case 5:
				c0(t);
				break;
			case 1:
				tt(t.type) && ma(t);
				break;
			case 4:
				Yd(t, t.stateNode.containerInfo);
				break;
			case 10:
				var r = t.type._context,
					i = t.memoizedProps.value;
				ne(ya, r._currentValue), (r._currentValue = i);
				break;
			case 13:
				if (((r = t.memoizedState), r !== null))
					return r.dehydrated !== null
						? (ne(fe, fe.current & 1), (t.flags |= 128), null)
						: n & t.child.childLanes
						? M0(e, t, n)
						: (ne(fe, fe.current & 1), (e = an(e, t, n)), e !== null ? e.sibling : null);
				ne(fe, fe.current & 1);
				break;
			case 19:
				if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
					if (r) return U0(e, t, n);
					t.flags |= 128;
				}
				if (
					((i = t.memoizedState),
					i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
					ne(fe, fe.current),
					r)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), A0(e, t, n);
		}
		return an(e, t, n);
	}
	var B0, Sc, F0, z0;
	B0 = function (e, t) {
		for (var n = t.child; n !== null; ) {
			if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				(n.child.return = n), (n = n.child);
				continue;
			}
			if (n === t) break;
			for (; n.sibling === null; ) {
				if (n.return === null || n.return === t) return;
				n = n.return;
			}
			(n.sibling.return = n.return), (n = n.sibling);
		}
	};
	Sc = function () {};
	F0 = function (e, t, n, r) {
		var i = e.memoizedProps;
		if (i !== r) {
			(e = t.stateNode), Xn(Gt.current);
			var s = null;
			switch (n) {
				case 'input':
					(i = ju(e, i)), (r = ju(e, r)), (s = []);
					break;
				case 'select':
					(i = pe({}, i, { value: void 0 })), (r = pe({}, r, { value: void 0 })), (s = []);
					break;
				case 'textarea':
					(i = Wu(e, i)), (r = Wu(e, r)), (s = []);
					break;
				default:
					typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ha);
			}
			Vu(n, r);
			var o;
			n = null;
			for (u in i)
				if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
					if (u === 'style') {
						var a = i[u];
						for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
					} else
						u !== 'dangerouslySetInnerHTML' &&
							u !== 'children' &&
							u !== 'suppressContentEditableWarning' &&
							u !== 'suppressHydrationWarning' &&
							u !== 'autoFocus' &&
							(us.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
			for (u in r) {
				var l = r[u];
				if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
					if (u === 'style')
						if (a) {
							for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
							for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
						} else n || (s || (s = []), s.push(u, n)), (n = l);
					else
						u === 'dangerouslySetInnerHTML'
							? ((l = l ? l.__html : void 0),
							  (a = a ? a.__html : void 0),
							  l != null && a !== l && (s = s || []).push(u, l))
							: u === 'children'
							? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
							: u !== 'suppressContentEditableWarning' &&
							  u !== 'suppressHydrationWarning' &&
							  (us.hasOwnProperty(u)
									? (l != null && u === 'onScroll' && ie('scroll', e), s || a === l || (s = []))
									: (s = s || []).push(u, l));
			}
			n && (s = s || []).push('style', n);
			var u = s;
			(t.updateQueue = u) && (t.flags |= 4);
		}
	};
	z0 = function (e, t, n, r) {
		n !== r && (t.flags |= 4);
	};
	function Ii(e, t) {
		if (!ce)
			switch (e.tailMode) {
				case 'hidden':
					t = e.tail;
					for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
					n === null ? (e.tail = null) : (n.sibling = null);
					break;
				case 'collapsed':
					n = e.tail;
					for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
					r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
			}
	}
	function ze(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			n = 0,
			r = 0;
		if (t)
			for (var i = e.child; i !== null; )
				(n |= i.lanes | i.childLanes),
					(r |= i.subtreeFlags & 14680064),
					(r |= i.flags & 14680064),
					(i.return = e),
					(i = i.sibling);
		else
			for (i = e.child; i !== null; )
				(n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
		return (e.subtreeFlags |= r), (e.childLanes = n), t;
	}
	function LS(e, t, n) {
		var r = t.pendingProps;
		switch ((Bd(t), t.tag)) {
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
				return ze(t), null;
			case 1:
				return tt(t.type) && pa(), ze(t), null;
			case 3:
				return (
					(r = t.stateNode),
					ei(),
					oe(et),
					oe(je),
					qd(),
					r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
					(e === null || e.child === null) &&
						(uo(t)
							? (t.flags |= 4)
							: e === null ||
							  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							  ((t.flags |= 1024), It !== null && (Nc(It), (It = null)))),
					Sc(e, t),
					ze(t),
					null
				);
			case 5:
				Wd(t);
				var i = Xn(Ss.current);
				if (((n = t.type), e !== null && t.stateNode != null))
					F0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(N(166));
						return ze(t), null;
					}
					if (((e = Xn(Gt.current)), uo(t))) {
						(r = t.stateNode), (n = t.type);
						var s = t.memoizedProps;
						switch (((r[$t] = t), (r[vs] = s), (e = (t.mode & 1) !== 0), n)) {
							case 'dialog':
								ie('cancel', r), ie('close', r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								ie('load', r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < Bi.length; i++) ie(Bi[i], r);
								break;
							case 'source':
								ie('error', r);
								break;
							case 'img':
							case 'image':
							case 'link':
								ie('error', r), ie('load', r);
								break;
							case 'details':
								ie('toggle', r);
								break;
							case 'input':
								ph(r, s), ie('invalid', r);
								break;
							case 'select':
								(r._wrapperState = { wasMultiple: !!s.multiple }), ie('invalid', r);
								break;
							case 'textarea':
								_h(r, s), ie('invalid', r);
						}
						Vu(n, s), (i = null);
						for (var o in s)
							if (s.hasOwnProperty(o)) {
								var a = s[o];
								o === 'children'
									? typeof a == 'string'
										? r.textContent !== a &&
										  (s.suppressHydrationWarning !== !0 && lo(r.textContent, a, e), (i = ['children', a]))
										: typeof a == 'number' &&
										  r.textContent !== '' + a &&
										  (s.suppressHydrationWarning !== !0 && lo(r.textContent, a, e), (i = ['children', '' + a]))
									: us.hasOwnProperty(o) && a != null && o === 'onScroll' && ie('scroll', r);
							}
						switch (n) {
							case 'input':
								eo(r), mh(r, s, !0);
								break;
							case 'textarea':
								eo(r), gh(r);
								break;
							case 'select':
							case 'option':
								break;
							default:
								typeof s.onClick == 'function' && (r.onclick = ha);
						}
						(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
					} else {
						(o = i.nodeType === 9 ? i : i.ownerDocument),
							e === 'http://www.w3.org/1999/xhtml' && (e = h_(n)),
							e === 'http://www.w3.org/1999/xhtml'
								? n === 'script'
									? ((e = o.createElement('div')),
									  (e.innerHTML = '<script></script>'),
									  (e = e.removeChild(e.firstChild)))
									: typeof r.is == 'string'
									? (e = o.createElement(n, { is: r.is }))
									: ((e = o.createElement(n)),
									  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
								: (e = o.createElementNS(e, n)),
							(e[$t] = t),
							(e[vs] = r),
							B0(e, t, !1, !1),
							(t.stateNode = e);
						e: {
							switch (((o = Qu(n, r)), n)) {
								case 'dialog':
									ie('cancel', e), ie('close', e), (i = r);
									break;
								case 'iframe':
								case 'object':
								case 'embed':
									ie('load', e), (i = r);
									break;
								case 'video':
								case 'audio':
									for (i = 0; i < Bi.length; i++) ie(Bi[i], e);
									i = r;
									break;
								case 'source':
									ie('error', e), (i = r);
									break;
								case 'img':
								case 'image':
								case 'link':
									ie('error', e), ie('load', e), (i = r);
									break;
								case 'details':
									ie('toggle', e), (i = r);
									break;
								case 'input':
									ph(e, r), (i = ju(e, r)), ie('invalid', e);
									break;
								case 'option':
									i = r;
									break;
								case 'select':
									(e._wrapperState = { wasMultiple: !!r.multiple }),
										(i = pe({}, r, { value: void 0 })),
										ie('invalid', e);
									break;
								case 'textarea':
									_h(e, r), (i = Wu(e, r)), ie('invalid', e);
									break;
								default:
									i = r;
							}
							Vu(n, i), (a = i);
							for (s in a)
								if (a.hasOwnProperty(s)) {
									var l = a[s];
									s === 'style'
										? __(e, l)
										: s === 'dangerouslySetInnerHTML'
										? ((l = l ? l.__html : void 0), l != null && p_(e, l))
										: s === 'children'
										? typeof l == 'string'
											? (n !== 'textarea' || l !== '') && cs(e, l)
											: typeof l == 'number' && cs(e, '' + l)
										: s !== 'suppressContentEditableWarning' &&
										  s !== 'suppressHydrationWarning' &&
										  s !== 'autoFocus' &&
										  (us.hasOwnProperty(s)
												? l != null && s === 'onScroll' && ie('scroll', e)
												: l != null && Td(e, s, l, o));
								}
							switch (n) {
								case 'input':
									eo(e), mh(e, r, !1);
									break;
								case 'textarea':
									eo(e), gh(e);
									break;
								case 'option':
									r.value != null && e.setAttribute('value', '' + Mn(r.value));
									break;
								case 'select':
									(e.multiple = !!r.multiple),
										(s = r.value),
										s != null
											? Fr(e, !!r.multiple, s, !1)
											: r.defaultValue != null && Fr(e, !!r.multiple, r.defaultValue, !0);
									break;
								default:
									typeof i.onClick == 'function' && (e.onclick = ha);
							}
							switch (n) {
								case 'button':
								case 'input':
								case 'select':
								case 'textarea':
									r = !!r.autoFocus;
									break e;
								case 'img':
									r = !0;
									break e;
								default:
									r = !1;
							}
						}
						r && (t.flags |= 4);
					}
					t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
				}
				return ze(t), null;
			case 6:
				if (e && t.stateNode != null) z0(e, t, e.memoizedProps, r);
				else {
					if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
					if (((n = Xn(Ss.current)), Xn(Gt.current), uo(t))) {
						if (
							((r = t.stateNode), (n = t.memoizedProps), (r[$t] = t), (s = r.nodeValue !== n) && ((e = ut), e !== null))
						)
							switch (e.tag) {
								case 3:
									lo(r.nodeValue, n, (e.mode & 1) !== 0);
									break;
								case 5:
									e.memoizedProps.suppressHydrationWarning !== !0 && lo(r.nodeValue, n, (e.mode & 1) !== 0);
							}
						s && (t.flags |= 4);
					} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[$t] = t), (t.stateNode = r);
				}
				return ze(t), null;
			case 13:
				if (
					(oe(fe),
					(r = t.memoizedState),
					e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (ce && at !== null && t.mode & 1 && !(t.flags & 128)) r0(), Xr(), (t.flags |= 98560), (s = !1);
					else if (((s = uo(t)), r !== null && r.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(N(318));
							if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(N(317));
							s[$t] = t;
						} else Xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
						ze(t), (s = !1);
					} else It !== null && (Nc(It), (It = null)), (s = !0);
					if (!s) return t.flags & 65536 ? t : null;
				}
				return t.flags & 128
					? ((t.lanes = n), t)
					: ((r = r !== null),
					  r !== (e !== null && e.memoizedState !== null) &&
							r &&
							((t.child.flags |= 8192), t.mode & 1 && (e === null || fe.current & 1 ? be === 0 && (be = 3) : of())),
					  t.updateQueue !== null && (t.flags |= 4),
					  ze(t),
					  null);
			case 4:
				return ei(), Sc(e, t), e === null && gs(t.stateNode.containerInfo), ze(t), null;
			case 10:
				return Hd(t.type._context), ze(t), null;
			case 17:
				return tt(t.type) && pa(), ze(t), null;
			case 19:
				if ((oe(fe), (s = t.memoizedState), s === null)) return ze(t), null;
				if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
					if (r) Ii(s, !1);
					else {
						if (be !== 0 || (e !== null && e.flags & 128))
							for (e = t.child; e !== null; ) {
								if (((o = Sa(e)), o !== null)) {
									for (
										t.flags |= 128,
											Ii(s, !1),
											r = o.updateQueue,
											r !== null && ((t.updateQueue = r), (t.flags |= 4)),
											t.subtreeFlags = 0,
											r = n,
											n = t.child;
										n !== null;

									)
										(s = n),
											(e = r),
											(s.flags &= 14680066),
											(o = s.alternate),
											o === null
												? ((s.childLanes = 0),
												  (s.lanes = e),
												  (s.child = null),
												  (s.subtreeFlags = 0),
												  (s.memoizedProps = null),
												  (s.memoizedState = null),
												  (s.updateQueue = null),
												  (s.dependencies = null),
												  (s.stateNode = null))
												: ((s.childLanes = o.childLanes),
												  (s.lanes = o.lanes),
												  (s.child = o.child),
												  (s.subtreeFlags = 0),
												  (s.deletions = null),
												  (s.memoizedProps = o.memoizedProps),
												  (s.memoizedState = o.memoizedState),
												  (s.updateQueue = o.updateQueue),
												  (s.type = o.type),
												  (e = o.dependencies),
												  (s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
											(n = n.sibling);
									return ne(fe, (fe.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						s.tail !== null && ve() > ni && ((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
					}
				else {
					if (!r)
						if (((e = Sa(o)), e !== null)) {
							if (
								((t.flags |= 128),
								(r = !0),
								(n = e.updateQueue),
								n !== null && ((t.updateQueue = n), (t.flags |= 4)),
								Ii(s, !0),
								s.tail === null && s.tailMode === 'hidden' && !o.alternate && !ce)
							)
								return ze(t), null;
						} else
							2 * ve() - s.renderingStartTime > ni &&
								n !== 1073741824 &&
								((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
					s.isBackwards
						? ((o.sibling = t.child), (t.child = o))
						: ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
				}
				return s.tail !== null
					? ((t = s.tail),
					  (s.rendering = t),
					  (s.tail = t.sibling),
					  (s.renderingStartTime = ve()),
					  (t.sibling = null),
					  (n = fe.current),
					  ne(fe, r ? (n & 1) | 2 : n & 1),
					  t)
					: (ze(t), null);
			case 22:
			case 23:
				return (
					sf(),
					(r = t.memoizedState !== null),
					e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
					r && t.mode & 1 ? ot & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(N(156, t.tag));
	}
	function MS(e, t) {
		switch ((Bd(t), t.tag)) {
			case 1:
				return tt(t.type) && pa(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
			case 3:
				return (
					ei(),
					oe(et),
					oe(je),
					qd(),
					(e = t.flags),
					e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 5:
				return Wd(t), null;
			case 13:
				if ((oe(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
					if (t.alternate === null) throw Error(N(340));
					Xr();
				}
				return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
			case 19:
				return oe(fe), null;
			case 4:
				return ei(), null;
			case 10:
				return Hd(t.type._context), null;
			case 22:
			case 23:
				return sf(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var ho = !1,
		$e = !1,
		US = typeof WeakSet == 'function' ? WeakSet : Set,
		P = null;
	function Lr(e, t) {
		var n = e.ref;
		if (n !== null)
			if (typeof n == 'function')
				try {
					n(null);
				} catch (r) {
					_e(e, t, r);
				}
			else n.current = null;
	}
	function wc(e, t, n) {
		try {
			n();
		} catch (r) {
			_e(e, t, r);
		}
	}
	var op = !1;
	function BS(e, t) {
		if (((sc = ca), (e = G_()), Md(e))) {
			if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					n = ((n = e.ownerDocument) && n.defaultView) || window;
					var r = n.getSelection && n.getSelection();
					if (r && r.rangeCount !== 0) {
						n = r.anchorNode;
						var i = r.anchorOffset,
							s = r.focusNode;
						r = r.focusOffset;
						try {
							n.nodeType, s.nodeType;
						} catch {
							n = null;
							break e;
						}
						var o = 0,
							a = -1,
							l = -1,
							u = 0,
							c = 0,
							d = e,
							h = null;
						t: for (;;) {
							for (
								var f;
								d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
									d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
									d.nodeType === 3 && (o += d.nodeValue.length),
									(f = d.firstChild) !== null;

							)
								(h = d), (d = f);
							for (;;) {
								if (d === e) break t;
								if ((h === n && ++u === i && (a = o), h === s && ++c === r && (l = o), (f = d.nextSibling) !== null))
									break;
								(d = h), (h = d.parentNode);
							}
							d = f;
						}
						n = a === -1 || l === -1 ? null : { start: a, end: l };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (oc = { focusedElem: e, selectionRange: n }, ca = !1, P = t; P !== null; )
			if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (P = e);
			else
				for (; P !== null; ) {
					t = P;
					try {
						var _ = t.alternate;
						if (t.flags & 1024)
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (_ !== null) {
										var y = _.memoizedProps,
											S = _.memoizedState,
											p = t.stateNode,
											m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Nt(t.type, y), S);
										p.__reactInternalSnapshotBeforeUpdate = m;
									}
									break;
								case 3:
									var g = t.stateNode.containerInfo;
									g.nodeType === 1
										? (g.textContent = '')
										: g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(N(163));
							}
					} catch (E) {
						_e(t, t.return, E);
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (P = e);
						break;
					}
					P = t.return;
				}
		return (_ = op), (op = !1), _;
	}
	function Vi(e, t, n) {
		var r = t.updateQueue;
		if (((r = r !== null ? r.lastEffect : null), r !== null)) {
			var i = (r = r.next);
			do {
				if ((i.tag & e) === e) {
					var s = i.destroy;
					(i.destroy = void 0), s !== void 0 && wc(t, n, s);
				}
				i = i.next;
			} while (i !== r);
		}
	}
	function el(e, t) {
		if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
			var n = (t = t.next);
			do {
				if ((n.tag & e) === e) {
					var r = n.create;
					n.destroy = r();
				}
				n = n.next;
			} while (n !== t);
		}
	}
	function Tc(e) {
		var t = e.ref;
		if (t !== null) {
			var n = e.stateNode;
			switch (e.tag) {
				case 5:
					e = n;
					break;
				default:
					e = n;
			}
			typeof t == 'function' ? t(e) : (t.current = e);
		}
	}
	function $0(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), $0(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 &&
				((t = e.stateNode), t !== null && (delete t[$t], delete t[vs], delete t[uc], delete t[ES], delete t[SS])),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	function H0(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 4;
	}
	function ap(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || H0(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
				if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Rc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6)
			(e = e.stateNode),
				t
					? n.nodeType === 8
						? n.parentNode.insertBefore(e, t)
						: n.insertBefore(e, t)
					: (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
					  (n = n._reactRootContainer),
					  n != null || t.onclick !== null || (t.onclick = ha));
		else if (r !== 4 && ((e = e.child), e !== null))
			for (Rc(e, t, n), e = e.sibling; e !== null; ) Rc(e, t, n), (e = e.sibling);
	}
	function bc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && ((e = e.child), e !== null))
			for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
	}
	var Ae = null,
		Ot = !1;
	function dn(e, t, n) {
		for (n = n.child; n !== null; ) j0(e, t, n), (n = n.sibling);
	}
	function j0(e, t, n) {
		if (jt && typeof jt.onCommitFiberUnmount == 'function')
			try {
				jt.onCommitFiberUnmount(Wa, n);
			} catch {}
		switch (n.tag) {
			case 5:
				$e || Lr(n, t);
			case 6:
				var r = Ae,
					i = Ot;
				(Ae = null),
					dn(e, t, n),
					(Ae = r),
					(Ot = i),
					Ae !== null &&
						(Ot
							? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
							: Ae.removeChild(n.stateNode));
				break;
			case 18:
				Ae !== null &&
					(Ot
						? ((e = Ae),
						  (n = n.stateNode),
						  e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n),
						  ps(e))
						: Xl(Ae, n.stateNode));
				break;
			case 4:
				(r = Ae), (i = Ot), (Ae = n.stateNode.containerInfo), (Ot = !0), dn(e, t, n), (Ae = r), (Ot = i);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!$e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
					i = r = r.next;
					do {
						var s = i,
							o = s.destroy;
						(s = s.tag), o !== void 0 && (s & 2 || s & 4) && wc(n, t, o), (i = i.next);
					} while (i !== r);
				}
				dn(e, t, n);
				break;
			case 1:
				if (!$e && (Lr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
					try {
						(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
					} catch (a) {
						_e(n, t, a);
					}
				dn(e, t, n);
				break;
			case 21:
				dn(e, t, n);
				break;
			case 22:
				n.mode & 1 ? (($e = (r = $e) || n.memoizedState !== null), dn(e, t, n), ($e = r)) : dn(e, t, n);
				break;
			default:
				dn(e, t, n);
		}
	}
	function lp(e) {
		var t = e.updateQueue;
		if (t !== null) {
			e.updateQueue = null;
			var n = e.stateNode;
			n === null && (n = e.stateNode = new US()),
				t.forEach(function (r) {
					var i = qS.bind(null, e, r);
					n.has(r) || (n.add(r), r.then(i, i));
				});
		}
	}
	function Ct(e, t) {
		var n = t.deletions;
		if (n !== null)
			for (var r = 0; r < n.length; r++) {
				var i = n[r];
				try {
					var s = e,
						o = t,
						a = o;
					e: for (; a !== null; ) {
						switch (a.tag) {
							case 5:
								(Ae = a.stateNode), (Ot = !1);
								break e;
							case 3:
								(Ae = a.stateNode.containerInfo), (Ot = !0);
								break e;
							case 4:
								(Ae = a.stateNode.containerInfo), (Ot = !0);
								break e;
						}
						a = a.return;
					}
					if (Ae === null) throw Error(N(160));
					j0(s, o, i), (Ae = null), (Ot = !1);
					var l = i.alternate;
					l !== null && (l.return = null), (i.return = null);
				} catch (u) {
					_e(i, t, u);
				}
			}
		if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) G0(t, e), (t = t.sibling);
	}
	function G0(e, t) {
		var n = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((Ct(t, e), Ut(e), r & 4)) {
					try {
						Vi(3, e, e.return), el(3, e);
					} catch (y) {
						_e(e, e.return, y);
					}
					try {
						Vi(5, e, e.return);
					} catch (y) {
						_e(e, e.return, y);
					}
				}
				break;
			case 1:
				Ct(t, e), Ut(e), r & 512 && n !== null && Lr(n, n.return);
				break;
			case 5:
				if ((Ct(t, e), Ut(e), r & 512 && n !== null && Lr(n, n.return), e.flags & 32)) {
					var i = e.stateNode;
					try {
						cs(i, '');
					} catch (y) {
						_e(e, e.return, y);
					}
				}
				if (r & 4 && ((i = e.stateNode), i != null)) {
					var s = e.memoizedProps,
						o = n !== null ? n.memoizedProps : s,
						a = e.type,
						l = e.updateQueue;
					if (((e.updateQueue = null), l !== null))
						try {
							a === 'input' && s.type === 'radio' && s.name != null && d_(i, s), Qu(a, o);
							var u = Qu(a, s);
							for (o = 0; o < l.length; o += 2) {
								var c = l[o],
									d = l[o + 1];
								c === 'style'
									? __(i, d)
									: c === 'dangerouslySetInnerHTML'
									? p_(i, d)
									: c === 'children'
									? cs(i, d)
									: Td(i, c, d, u);
							}
							switch (a) {
								case 'input':
									Gu(i, s);
									break;
								case 'textarea':
									f_(i, s);
									break;
								case 'select':
									var h = i._wrapperState.wasMultiple;
									i._wrapperState.wasMultiple = !!s.multiple;
									var f = s.value;
									f != null
										? Fr(i, !!s.multiple, f, !1)
										: h !== !!s.multiple &&
										  (s.defaultValue != null
												? Fr(i, !!s.multiple, s.defaultValue, !0)
												: Fr(i, !!s.multiple, s.multiple ? [] : '', !1));
							}
							i[vs] = s;
						} catch (y) {
							_e(e, e.return, y);
						}
				}
				break;
			case 6:
				if ((Ct(t, e), Ut(e), r & 4)) {
					if (e.stateNode === null) throw Error(N(162));
					(i = e.stateNode), (s = e.memoizedProps);
					try {
						i.nodeValue = s;
					} catch (y) {
						_e(e, e.return, y);
					}
				}
				break;
			case 3:
				if ((Ct(t, e), Ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
					try {
						ps(t.containerInfo);
					} catch (y) {
						_e(e, e.return, y);
					}
				break;
			case 4:
				Ct(t, e), Ut(e);
				break;
			case 13:
				Ct(t, e),
					Ut(e),
					(i = e.child),
					i.flags & 8192 &&
						((s = i.memoizedState !== null),
						(i.stateNode.isHidden = s),
						!s || (i.alternate !== null && i.alternate.memoizedState !== null) || (nf = ve())),
					r & 4 && lp(e);
				break;
			case 22:
				if (
					((c = n !== null && n.memoizedState !== null),
					e.mode & 1 ? (($e = (u = $e) || c), Ct(t, e), ($e = u)) : Ct(t, e),
					Ut(e),
					r & 8192)
				) {
					if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
						for (P = e, c = e.child; c !== null; ) {
							for (d = P = c; P !== null; ) {
								switch (((h = P), (f = h.child), h.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										Vi(4, h, h.return);
										break;
									case 1:
										Lr(h, h.return);
										var _ = h.stateNode;
										if (typeof _.componentWillUnmount == 'function') {
											(r = h), (n = h.return);
											try {
												(t = r), (_.props = t.memoizedProps), (_.state = t.memoizedState), _.componentWillUnmount();
											} catch (y) {
												_e(r, n, y);
											}
										}
										break;
									case 5:
										Lr(h, h.return);
										break;
									case 22:
										if (h.memoizedState !== null) {
											cp(d);
											continue;
										}
								}
								f !== null ? ((f.return = h), (P = f)) : cp(d);
							}
							c = c.sibling;
						}
					e: for (c = null, d = e; ; ) {
						if (d.tag === 5) {
							if (c === null) {
								c = d;
								try {
									(i = d.stateNode),
										u
											? ((s = i.style),
											  typeof s.setProperty == 'function'
													? s.setProperty('display', 'none', 'important')
													: (s.display = 'none'))
											: ((a = d.stateNode),
											  (l = d.memoizedProps.style),
											  (o = l != null && l.hasOwnProperty('display') ? l.display : null),
											  (a.style.display = m_('display', o)));
								} catch (y) {
									_e(e, e.return, y);
								}
							}
						} else if (d.tag === 6) {
							if (c === null)
								try {
									d.stateNode.nodeValue = u ? '' : d.memoizedProps;
								} catch (y) {
									_e(e, e.return, y);
								}
						} else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
							(d.child.return = d), (d = d.child);
							continue;
						}
						if (d === e) break e;
						for (; d.sibling === null; ) {
							if (d.return === null || d.return === e) break e;
							c === d && (c = null), (d = d.return);
						}
						c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
					}
				}
				break;
			case 19:
				Ct(t, e), Ut(e), r & 4 && lp(e);
				break;
			case 21:
				break;
			default:
				Ct(t, e), Ut(e);
		}
	}
	function Ut(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				e: {
					for (var n = e.return; n !== null; ) {
						if (H0(n)) {
							var r = n;
							break e;
						}
						n = n.return;
					}
					throw Error(N(160));
				}
				switch (r.tag) {
					case 5:
						var i = r.stateNode;
						r.flags & 32 && (cs(i, ''), (r.flags &= -33));
						var s = ap(e);
						bc(e, s, i);
						break;
					case 3:
					case 4:
						var o = r.stateNode.containerInfo,
							a = ap(e);
						Rc(e, a, o);
						break;
					default:
						throw Error(N(161));
				}
			} catch (l) {
				_e(e, e.return, l);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function FS(e, t, n) {
		(P = e), Y0(e);
	}
	function Y0(e, t, n) {
		for (var r = (e.mode & 1) !== 0; P !== null; ) {
			var i = P,
				s = i.child;
			if (i.tag === 22 && r) {
				var o = i.memoizedState !== null || ho;
				if (!o) {
					var a = i.alternate,
						l = (a !== null && a.memoizedState !== null) || $e;
					a = ho;
					var u = $e;
					if (((ho = o), ($e = l) && !u))
						for (P = i; P !== null; )
							(o = P),
								(l = o.child),
								o.tag === 22 && o.memoizedState !== null ? dp(i) : l !== null ? ((l.return = o), (P = l)) : dp(i);
					for (; s !== null; ) (P = s), Y0(s), (s = s.sibling);
					(P = i), (ho = a), ($e = u);
				}
				up(e);
			} else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : up(e);
		}
	}
	function up(e) {
		for (; P !== null; ) {
			var t = P;
			if (t.flags & 8772) {
				var n = t.alternate;
				try {
					if (t.flags & 8772)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								$e || el(5, t);
								break;
							case 1:
								var r = t.stateNode;
								if (t.flags & 4 && !$e)
									if (n === null) r.componentDidMount();
									else {
										var i = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
										r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
									}
								var s = t.updateQueue;
								s !== null && Wh(t, s, r);
								break;
							case 3:
								var o = t.updateQueue;
								if (o !== null) {
									if (((n = null), t.child !== null))
										switch (t.child.tag) {
											case 5:
												n = t.child.stateNode;
												break;
											case 1:
												n = t.child.stateNode;
										}
									Wh(t, o, n);
								}
								break;
							case 5:
								var a = t.stateNode;
								if (n === null && t.flags & 4) {
									n = a;
									var l = t.memoizedProps;
									switch (t.type) {
										case 'button':
										case 'input':
										case 'select':
										case 'textarea':
											l.autoFocus && n.focus();
											break;
										case 'img':
											l.src && (n.src = l.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (t.memoizedState === null) {
									var u = t.alternate;
									if (u !== null) {
										var c = u.memoizedState;
										if (c !== null) {
											var d = c.dehydrated;
											d !== null && ps(d);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(N(163));
						}
					$e || (t.flags & 512 && Tc(t));
				} catch (h) {
					_e(t, t.return, h);
				}
			}
			if (t === e) {
				P = null;
				break;
			}
			if (((n = t.sibling), n !== null)) {
				(n.return = t.return), (P = n);
				break;
			}
			P = t.return;
		}
	}
	function cp(e) {
		for (; P !== null; ) {
			var t = P;
			if (t === e) {
				P = null;
				break;
			}
			var n = t.sibling;
			if (n !== null) {
				(n.return = t.return), (P = n);
				break;
			}
			P = t.return;
		}
	}
	function dp(e) {
		for (; P !== null; ) {
			var t = P;
			try {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						var n = t.return;
						try {
							el(4, t);
						} catch (l) {
							_e(t, n, l);
						}
						break;
					case 1:
						var r = t.stateNode;
						if (typeof r.componentDidMount == 'function') {
							var i = t.return;
							try {
								r.componentDidMount();
							} catch (l) {
								_e(t, i, l);
							}
						}
						var s = t.return;
						try {
							Tc(t);
						} catch (l) {
							_e(t, s, l);
						}
						break;
					case 5:
						var o = t.return;
						try {
							Tc(t);
						} catch (l) {
							_e(t, o, l);
						}
				}
			} catch (l) {
				_e(t, t.return, l);
			}
			if (t === e) {
				P = null;
				break;
			}
			var a = t.sibling;
			if (a !== null) {
				(a.return = t.return), (P = a);
				break;
			}
			P = t.return;
		}
	}
	var zS = Math.ceil,
		Ra = cn.ReactCurrentDispatcher,
		ef = cn.ReactCurrentOwner,
		Et = cn.ReactCurrentBatchConfig,
		W = 0,
		Oe = null,
		Se = null,
		Ue = 0,
		ot = 0,
		Mr = Hn(0),
		be = 0,
		bs = null,
		ur = 0,
		tl = 0,
		tf = 0,
		Qi = null,
		Ze = null,
		nf = 0,
		ni = 1 / 0,
		qt = null,
		ba = !1,
		kc = null,
		Dn = null,
		po = !1,
		wn = null,
		ka = 0,
		Ki = 0,
		xc = null,
		Ho = -1,
		jo = 0;
	function qe() {
		return W & 6 ? ve() : Ho !== -1 ? Ho : (Ho = ve());
	}
	function An(e) {
		return e.mode & 1
			? W & 2 && Ue !== 0
				? Ue & -Ue
				: TS.transition !== null
				? (jo === 0 && (jo = C_()), jo)
				: ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : L_(e.type))), e)
			: 1;
	}
	function At(e, t, n, r) {
		if (50 < Ki) throw ((Ki = 0), (xc = null), Error(N(185)));
		Bs(e, n, r),
			(!(W & 2) || e !== Oe) &&
				(e === Oe && (!(W & 2) && (tl |= n), be === 4 && yn(e, Ue)),
				nt(e, r),
				n === 1 && W === 0 && !(t.mode & 1) && ((ni = ve() + 500), Za && jn()));
	}
	function nt(e, t) {
		var n = e.callbackNode;
		TE(e, t);
		var r = ua(e, e === Oe ? Ue : 0);
		if (r === 0) n !== null && Eh(n), (e.callbackNode = null), (e.callbackPriority = 0);
		else if (((t = r & -r), e.callbackPriority !== t)) {
			if ((n != null && Eh(n), t === 1))
				e.tag === 0 ? wS(fp.bind(null, e)) : e0(fp.bind(null, e)),
					yS(function () {
						!(W & 6) && jn();
					}),
					(n = null);
			else {
				switch (N_(r)) {
					case 1:
						n = Cd;
						break;
					case 4:
						n = k_;
						break;
					case 16:
						n = la;
						break;
					case 536870912:
						n = x_;
						break;
					default:
						n = la;
				}
				n = J0(n, W0.bind(null, e));
			}
			(e.callbackPriority = t), (e.callbackNode = n);
		}
	}
	function W0(e, t) {
		if (((Ho = -1), (jo = 0), W & 6)) throw Error(N(327));
		var n = e.callbackNode;
		if (Gr() && e.callbackNode !== n) return null;
		var r = ua(e, e === Oe ? Ue : 0);
		if (r === 0) return null;
		if (r & 30 || r & e.expiredLanes || t) t = xa(e, r);
		else {
			t = r;
			var i = W;
			W |= 2;
			var s = V0();
			(Oe !== e || Ue !== t) && ((qt = null), (ni = ve() + 500), nr(e, t));
			do
				try {
					jS();
					break;
				} catch (a) {
					q0(e, a);
				}
			while (1);
			$d(), (Ra.current = s), (W = i), Se !== null ? (t = 0) : ((Oe = null), (Ue = 0), (t = be));
		}
		if (t !== 0) {
			if ((t === 2 && ((i = ec(e)), i !== 0 && ((r = i), (t = Cc(e, i)))), t === 1))
				throw ((n = bs), nr(e, 0), yn(e, r), nt(e, ve()), n);
			if (t === 6) yn(e, r);
			else {
				if (
					((i = e.current.alternate),
					!(r & 30) &&
						!$S(i) &&
						((t = xa(e, r)), t === 2 && ((s = ec(e)), s !== 0 && ((r = s), (t = Cc(e, s)))), t === 1))
				)
					throw ((n = bs), nr(e, 0), yn(e, r), nt(e, ve()), n);
				switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
					case 0:
					case 1:
						throw Error(N(345));
					case 2:
						Wn(e, Ze, qt);
						break;
					case 3:
						if ((yn(e, r), (r & 130023424) === r && ((t = nf + 500 - ve()), 10 < t))) {
							if (ua(e, 0) !== 0) break;
							if (((i = e.suspendedLanes), (i & r) !== r)) {
								qe(), (e.pingedLanes |= e.suspendedLanes & i);
								break;
							}
							e.timeoutHandle = lc(Wn.bind(null, e, Ze, qt), t);
							break;
						}
						Wn(e, Ze, qt);
						break;
					case 4:
						if ((yn(e, r), (r & 4194240) === r)) break;
						for (t = e.eventTimes, i = -1; 0 < r; ) {
							var o = 31 - Dt(r);
							(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
						}
						if (
							((r = i),
							(r = ve() - r),
							(r =
								(120 > r
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
									: 1960 * zS(r / 1960)) - r),
							10 < r)
						) {
							e.timeoutHandle = lc(Wn.bind(null, e, Ze, qt), r);
							break;
						}
						Wn(e, Ze, qt);
						break;
					case 5:
						Wn(e, Ze, qt);
						break;
					default:
						throw Error(N(329));
				}
			}
		}
		return nt(e, ve()), e.callbackNode === n ? W0.bind(null, e) : null;
	}
	function Cc(e, t) {
		var n = Qi;
		return (
			e.current.memoizedState.isDehydrated && (nr(e, t).flags |= 256),
			(e = xa(e, t)),
			e !== 2 && ((t = Ze), (Ze = n), t !== null && Nc(t)),
			e
		);
	}
	function Nc(e) {
		Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
	}
	function $S(e) {
		for (var t = e; ; ) {
			if (t.flags & 16384) {
				var n = t.updateQueue;
				if (n !== null && ((n = n.stores), n !== null))
					for (var r = 0; r < n.length; r++) {
						var i = n[r],
							s = i.getSnapshot;
						i = i.value;
						try {
							if (!Lt(s(), i)) return !1;
						} catch {
							return !1;
						}
					}
			}
			if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function yn(e, t) {
		for (t &= ~tf, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
			var n = 31 - Dt(t),
				r = 1 << n;
			(e[n] = -1), (t &= ~r);
		}
	}
	function fp(e) {
		if (W & 6) throw Error(N(327));
		Gr();
		var t = ua(e, 0);
		if (!(t & 1)) return nt(e, ve()), null;
		var n = xa(e, t);
		if (e.tag !== 0 && n === 2) {
			var r = ec(e);
			r !== 0 && ((t = r), (n = Cc(e, r)));
		}
		if (n === 1) throw ((n = bs), nr(e, 0), yn(e, t), nt(e, ve()), n);
		if (n === 6) throw Error(N(345));
		return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Wn(e, Ze, qt), nt(e, ve()), null;
	}
	function rf(e, t) {
		var n = W;
		W |= 1;
		try {
			return e(t);
		} finally {
			(W = n), W === 0 && ((ni = ve() + 500), Za && jn());
		}
	}
	function cr(e) {
		wn !== null && wn.tag === 0 && !(W & 6) && Gr();
		var t = W;
		W |= 1;
		var n = Et.transition,
			r = K;
		try {
			if (((Et.transition = null), (K = 1), e)) return e();
		} finally {
			(K = r), (Et.transition = n), (W = t), !(W & 6) && jn();
		}
	}
	function sf() {
		(ot = Mr.current), oe(Mr);
	}
	function nr(e, t) {
		(e.finishedWork = null), (e.finishedLanes = 0);
		var n = e.timeoutHandle;
		if ((n !== -1 && ((e.timeoutHandle = -1), gS(n)), Se !== null))
			for (n = Se.return; n !== null; ) {
				var r = n;
				switch ((Bd(r), r.tag)) {
					case 1:
						(r = r.type.childContextTypes), r != null && pa();
						break;
					case 3:
						ei(), oe(et), oe(je), qd();
						break;
					case 5:
						Wd(r);
						break;
					case 4:
						ei();
						break;
					case 13:
						oe(fe);
						break;
					case 19:
						oe(fe);
						break;
					case 10:
						Hd(r.type._context);
						break;
					case 22:
					case 23:
						sf();
				}
				n = n.return;
			}
		if (
			((Oe = e),
			(Se = e = Pn(e.current, null)),
			(Ue = ot = t),
			(be = 0),
			(bs = null),
			(tf = tl = ur = 0),
			(Ze = Qi = null),
			Zn !== null)
		) {
			for (t = 0; t < Zn.length; t++)
				if (((n = Zn[t]), (r = n.interleaved), r !== null)) {
					n.interleaved = null;
					var i = r.next,
						s = n.pending;
					if (s !== null) {
						var o = s.next;
						(s.next = i), (r.next = o);
					}
					n.pending = r;
				}
			Zn = null;
		}
		return e;
	}
	function q0(e, t) {
		do {
			var n = Se;
			try {
				if (($d(), (Fo.current = Ta), wa)) {
					for (var r = he.memoizedState; r !== null; ) {
						var i = r.queue;
						i !== null && (i.pending = null), (r = r.next);
					}
					wa = !1;
				}
				if (
					((lr = 0), (xe = Te = he = null), (qi = !1), (ws = 0), (ef.current = null), n === null || n.return === null)
				) {
					(be = 1), (bs = t), (Se = null);
					break;
				}
				e: {
					var s = e,
						o = n.return,
						a = n,
						l = t;
					if (((t = Ue), (a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
						var u = l,
							c = a,
							d = c.tag;
						if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
							var h = c.alternate;
							h
								? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
								: ((c.updateQueue = null), (c.memoizedState = null));
						}
						var f = Jh(o);
						if (f !== null) {
							(f.flags &= -257), ep(f, o, a, s, t), f.mode & 1 && Xh(s, u, t), (t = f), (l = u);
							var _ = t.updateQueue;
							if (_ === null) {
								var y = new Set();
								y.add(l), (t.updateQueue = y);
							} else _.add(l);
							break e;
						} else {
							if (!(t & 1)) {
								Xh(s, u, t), of();
								break e;
							}
							l = Error(N(426));
						}
					} else if (ce && a.mode & 1) {
						var S = Jh(o);
						if (S !== null) {
							!(S.flags & 65536) && (S.flags |= 256), ep(S, o, a, s, t), Fd(ti(l, a));
							break e;
						}
					}
					(s = l = ti(l, a)), be !== 4 && (be = 2), Qi === null ? (Qi = [s]) : Qi.push(s), (s = o);
					do {
						switch (s.tag) {
							case 3:
								(s.flags |= 65536), (t &= -t), (s.lanes |= t);
								var p = O0(s, l, t);
								Yh(s, p);
								break e;
							case 1:
								a = l;
								var m = s.type,
									g = s.stateNode;
								if (
									!(s.flags & 128) &&
									(typeof m.getDerivedStateFromError == 'function' ||
										(g !== null && typeof g.componentDidCatch == 'function' && (Dn === null || !Dn.has(g))))
								) {
									(s.flags |= 65536), (t &= -t), (s.lanes |= t);
									var E = I0(s, a, t);
									Yh(s, E);
									break e;
								}
						}
						s = s.return;
					} while (s !== null);
				}
				K0(n);
			} catch (T) {
				(t = T), Se === n && n !== null && (Se = n = n.return);
				continue;
			}
			break;
		} while (1);
	}
	function V0() {
		var e = Ra.current;
		return (Ra.current = Ta), e === null ? Ta : e;
	}
	function of() {
		(be === 0 || be === 3 || be === 2) && (be = 4),
			Oe === null || (!(ur & 268435455) && !(tl & 268435455)) || yn(Oe, Ue);
	}
	function xa(e, t) {
		var n = W;
		W |= 2;
		var r = V0();
		(Oe !== e || Ue !== t) && ((qt = null), nr(e, t));
		do
			try {
				HS();
				break;
			} catch (i) {
				q0(e, i);
			}
		while (1);
		if (($d(), (W = n), (Ra.current = r), Se !== null)) throw Error(N(261));
		return (Oe = null), (Ue = 0), be;
	}
	function HS() {
		for (; Se !== null; ) Q0(Se);
	}
	function jS() {
		for (; Se !== null && !pE(); ) Q0(Se);
	}
	function Q0(e) {
		var t = X0(e.alternate, e, ot);
		(e.memoizedProps = e.pendingProps), t === null ? K0(e) : (Se = t), (ef.current = null);
	}
	function K0(e) {
		var t = e;
		do {
			var n = t.alternate;
			if (((e = t.return), t.flags & 32768)) {
				if (((n = MS(n, t)), n !== null)) {
					(n.flags &= 32767), (Se = n);
					return;
				}
				if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
				else {
					(be = 6), (Se = null);
					return;
				}
			} else if (((n = LS(n, t, ot)), n !== null)) {
				Se = n;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				Se = t;
				return;
			}
			Se = t = e;
		} while (t !== null);
		be === 0 && (be = 5);
	}
	function Wn(e, t, n) {
		var r = K,
			i = Et.transition;
		try {
			(Et.transition = null), (K = 1), GS(e, t, n, r);
		} finally {
			(Et.transition = i), (K = r);
		}
		return null;
	}
	function GS(e, t, n, r) {
		do Gr();
		while (wn !== null);
		if (W & 6) throw Error(N(327));
		n = e.finishedWork;
		var i = e.finishedLanes;
		if (n === null) return null;
		if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
		(e.callbackNode = null), (e.callbackPriority = 0);
		var s = n.lanes | n.childLanes;
		if (
			(RE(e, s),
			e === Oe && ((Se = Oe = null), (Ue = 0)),
			(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
				po ||
				((po = !0),
				J0(la, function () {
					return Gr(), null;
				})),
			(s = (n.flags & 15990) !== 0),
			n.subtreeFlags & 15990 || s)
		) {
			(s = Et.transition), (Et.transition = null);
			var o = K;
			K = 1;
			var a = W;
			(W |= 4),
				(ef.current = null),
				BS(e, n),
				G0(n, e),
				cS(oc),
				(ca = !!sc),
				(oc = sc = null),
				(e.current = n),
				FS(n),
				mE(),
				(W = a),
				(K = o),
				(Et.transition = s);
		} else e.current = n;
		if (
			(po && ((po = !1), (wn = e), (ka = i)),
			(s = e.pendingLanes),
			s === 0 && (Dn = null),
			yE(n.stateNode),
			nt(e, ve()),
			t !== null)
		)
			for (r = e.onRecoverableError, n = 0; n < t.length; n++)
				(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
		if (ba) throw ((ba = !1), (e = kc), (kc = null), e);
		return (
			ka & 1 && e.tag !== 0 && Gr(),
			(s = e.pendingLanes),
			s & 1 ? (e === xc ? Ki++ : ((Ki = 0), (xc = e))) : (Ki = 0),
			jn(),
			null
		);
	}
	function Gr() {
		if (wn !== null) {
			var e = N_(ka),
				t = Et.transition,
				n = K;
			try {
				if (((Et.transition = null), (K = 16 > e ? 16 : e), wn === null)) var r = !1;
				else {
					if (((e = wn), (wn = null), (ka = 0), W & 6)) throw Error(N(331));
					var i = W;
					for (W |= 4, P = e.current; P !== null; ) {
						var s = P,
							o = s.child;
						if (P.flags & 16) {
							var a = s.deletions;
							if (a !== null) {
								for (var l = 0; l < a.length; l++) {
									var u = a[l];
									for (P = u; P !== null; ) {
										var c = P;
										switch (c.tag) {
											case 0:
											case 11:
											case 15:
												Vi(8, c, s);
										}
										var d = c.child;
										if (d !== null) (d.return = c), (P = d);
										else
											for (; P !== null; ) {
												c = P;
												var h = c.sibling,
													f = c.return;
												if (($0(c), c === u)) {
													P = null;
													break;
												}
												if (h !== null) {
													(h.return = f), (P = h);
													break;
												}
												P = f;
											}
									}
								}
								var _ = s.alternate;
								if (_ !== null) {
									var y = _.child;
									if (y !== null) {
										_.child = null;
										do {
											var S = y.sibling;
											(y.sibling = null), (y = S);
										} while (y !== null);
									}
								}
								P = s;
							}
						}
						if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (P = o);
						else
							e: for (; P !== null; ) {
								if (((s = P), s.flags & 2048))
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											Vi(9, s, s.return);
									}
								var p = s.sibling;
								if (p !== null) {
									(p.return = s.return), (P = p);
									break e;
								}
								P = s.return;
							}
					}
					var m = e.current;
					for (P = m; P !== null; ) {
						o = P;
						var g = o.child;
						if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (P = g);
						else
							e: for (o = m; P !== null; ) {
								if (((a = P), a.flags & 2048))
									try {
										switch (a.tag) {
											case 0:
											case 11:
											case 15:
												el(9, a);
										}
									} catch (T) {
										_e(a, a.return, T);
									}
								if (a === o) {
									P = null;
									break e;
								}
								var E = a.sibling;
								if (E !== null) {
									(E.return = a.return), (P = E);
									break e;
								}
								P = a.return;
							}
					}
					if (((W = i), jn(), jt && typeof jt.onPostCommitFiberRoot == 'function'))
						try {
							jt.onPostCommitFiberRoot(Wa, e);
						} catch {}
					r = !0;
				}
				return r;
			} finally {
				(K = n), (Et.transition = t);
			}
		}
		return !1;
	}
	function hp(e, t, n) {
		(t = ti(n, t)), (t = O0(e, t, 1)), (e = In(e, t, 1)), (t = qe()), e !== null && (Bs(e, 1, t), nt(e, t));
	}
	function _e(e, t, n) {
		if (e.tag === 3) hp(e, e, n);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					hp(t, e, n);
					break;
				} else if (t.tag === 1) {
					var r = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == 'function' ||
						(typeof r.componentDidCatch == 'function' && (Dn === null || !Dn.has(r)))
					) {
						(e = ti(n, e)), (e = I0(t, e, 1)), (t = In(t, e, 1)), (e = qe()), t !== null && (Bs(t, 1, e), nt(t, e));
						break;
					}
				}
				t = t.return;
			}
	}
	function YS(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t),
			(t = qe()),
			(e.pingedLanes |= e.suspendedLanes & n),
			Oe === e &&
				(Ue & n) === n &&
				(be === 4 || (be === 3 && (Ue & 130023424) === Ue && 500 > ve() - nf) ? nr(e, 0) : (tf |= n)),
			nt(e, t);
	}
	function Z0(e, t) {
		t === 0 && (e.mode & 1 ? ((t = ro), (ro <<= 1), !(ro & 130023424) && (ro = 4194304)) : (t = 1));
		var n = qe();
		(e = on(e, t)), e !== null && (Bs(e, t, n), nt(e, n));
	}
	function WS(e) {
		var t = e.memoizedState,
			n = 0;
		t !== null && (n = t.retryLane), Z0(e, n);
	}
	function qS(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode,
					i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			default:
				throw Error(N(314));
		}
		r !== null && r.delete(t), Z0(e, n);
	}
	var X0;
	X0 = function (e, t, n) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps || et.current) Xe = !0;
			else {
				if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), PS(e, t, n);
				Xe = !!(e.flags & 131072);
			}
		else (Xe = !1), ce && t.flags & 1048576 && t0(t, ga, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 2:
				var r = t.type;
				$o(e, t), (e = t.pendingProps);
				var i = Zr(t, je.current);
				jr(t, n), (i = Qd(null, t, r, e, i, n));
				var s = Kd();
				return (
					(t.flags |= 1),
					typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
						? ((t.tag = 1),
						  (t.memoizedState = null),
						  (t.updateQueue = null),
						  tt(r) ? ((s = !0), ma(t)) : (s = !1),
						  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
						  Gd(t),
						  (i.updater = Xa),
						  (t.stateNode = i),
						  (i._reactInternals = t),
						  mc(t, r, e, n),
						  (t = yc(null, t, r, !0, s, n)))
						: ((t.tag = 0), ce && s && Ud(t), Ge(null, t, i, n), (t = t.child)),
					t
				);
			case 16:
				r = t.elementType;
				e: {
					switch (
						($o(e, t),
						(e = t.pendingProps),
						(i = r._init),
						(r = i(r._payload)),
						(t.type = r),
						(i = t.tag = QS(r)),
						(e = Nt(r, e)),
						i)
					) {
						case 0:
							t = gc(null, t, r, e, n);
							break e;
						case 1:
							t = rp(null, t, r, e, n);
							break e;
						case 11:
							t = tp(null, t, r, e, n);
							break e;
						case 14:
							t = np(null, t, r, Nt(r.type, e), n);
							break e;
					}
					throw Error(N(306, r, ''));
				}
				return t;
			case 0:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), gc(e, t, r, i, n);
			case 1:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), rp(e, t, r, i, n);
			case 3:
				e: {
					if ((L0(t), e === null)) throw Error(N(387));
					(r = t.pendingProps), (s = t.memoizedState), (i = s.element), s0(e, t), Ea(t, r, null, n);
					var o = t.memoizedState;
					if (((r = o.element), s.isDehydrated))
						if (
							((s = {
								element: r,
								isDehydrated: !1,
								cache: o.cache,
								pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
								transitions: o.transitions,
							}),
							(t.updateQueue.baseState = s),
							(t.memoizedState = s),
							t.flags & 256)
						) {
							(i = ti(Error(N(423)), t)), (t = ip(e, t, r, n, i));
							break e;
						} else if (r !== i) {
							(i = ti(Error(N(424)), t)), (t = ip(e, t, r, n, i));
							break e;
						} else
							for (
								at = On(t.stateNode.containerInfo.firstChild),
									ut = t,
									ce = !0,
									It = null,
									n = u0(t, null, r, n),
									t.child = n;
								n;

							)
								(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
					else {
						if ((Xr(), r === i)) {
							t = an(e, t, n);
							break e;
						}
						Ge(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 5:
				return (
					c0(t),
					e === null && fc(t),
					(r = t.type),
					(i = t.pendingProps),
					(s = e !== null ? e.memoizedProps : null),
					(o = i.children),
					ac(r, i) ? (o = null) : s !== null && ac(r, s) && (t.flags |= 32),
					P0(e, t),
					Ge(e, t, o, n),
					t.child
				);
			case 6:
				return e === null && fc(t), null;
			case 13:
				return M0(e, t, n);
			case 4:
				return (
					Yd(t, t.stateNode.containerInfo),
					(r = t.pendingProps),
					e === null ? (t.child = Jr(t, null, r, n)) : Ge(e, t, r, n),
					t.child
				);
			case 11:
				return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), tp(e, t, r, i, n);
			case 7:
				return Ge(e, t, t.pendingProps, n), t.child;
			case 8:
				return Ge(e, t, t.pendingProps.children, n), t.child;
			case 12:
				return Ge(e, t, t.pendingProps.children, n), t.child;
			case 10:
				e: {
					if (
						((r = t.type._context),
						(i = t.pendingProps),
						(s = t.memoizedProps),
						(o = i.value),
						ne(ya, r._currentValue),
						(r._currentValue = o),
						s !== null)
					)
						if (Lt(s.value, o)) {
							if (s.children === i.children && !et.current) {
								t = an(e, t, n);
								break e;
							}
						} else
							for (s = t.child, s !== null && (s.return = t); s !== null; ) {
								var a = s.dependencies;
								if (a !== null) {
									o = s.child;
									for (var l = a.firstContext; l !== null; ) {
										if (l.context === r) {
											if (s.tag === 1) {
												(l = en(-1, n & -n)), (l.tag = 2);
												var u = s.updateQueue;
												if (u !== null) {
													u = u.shared;
													var c = u.pending;
													c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
												}
											}
											(s.lanes |= n),
												(l = s.alternate),
												l !== null && (l.lanes |= n),
												hc(s.return, n, t),
												(a.lanes |= n);
											break;
										}
										l = l.next;
									}
								} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
								else if (s.tag === 18) {
									if (((o = s.return), o === null)) throw Error(N(341));
									(o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), hc(o, n, t), (o = s.sibling);
								} else o = s.child;
								if (o !== null) o.return = s;
								else
									for (o = s; o !== null; ) {
										if (o === t) {
											o = null;
											break;
										}
										if (((s = o.sibling), s !== null)) {
											(s.return = o.return), (o = s);
											break;
										}
										o = o.return;
									}
								s = o;
							}
					Ge(e, t, i.children, n), (t = t.child);
				}
				return t;
			case 9:
				return (
					(i = t.type),
					(r = t.pendingProps.children),
					jr(t, n),
					(i = wt(i)),
					(r = r(i)),
					(t.flags |= 1),
					Ge(e, t, r, n),
					t.child
				);
			case 14:
				return (r = t.type), (i = Nt(r, t.pendingProps)), (i = Nt(r.type, i)), np(e, t, r, i, n);
			case 15:
				return D0(e, t, t.type, t.pendingProps, n);
			case 17:
				return (
					(r = t.type),
					(i = t.pendingProps),
					(i = t.elementType === r ? i : Nt(r, i)),
					$o(e, t),
					(t.tag = 1),
					tt(r) ? ((e = !0), ma(t)) : (e = !1),
					jr(t, n),
					a0(t, r, i),
					mc(t, r, i, n),
					yc(null, t, r, !0, e, n)
				);
			case 19:
				return U0(e, t, n);
			case 22:
				return A0(e, t, n);
		}
		throw Error(N(156, t.tag));
	};
	function J0(e, t) {
		return b_(e, t);
	}
	function VS(e, t, n, r) {
		(this.tag = e),
			(this.key = n),
			(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
			(this.index = 0),
			(this.ref = null),
			(this.pendingProps = t),
			(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
			(this.mode = r),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function vt(e, t, n, r) {
		return new VS(e, t, n, r);
	}
	function af(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function QS(e) {
		if (typeof e == 'function') return af(e) ? 1 : 0;
		if (e != null) {
			if (((e = e.$$typeof), e === bd)) return 11;
			if (e === kd) return 14;
		}
		return 2;
	}
	function Pn(e, t) {
		var n = e.alternate;
		return (
			n === null
				? ((n = vt(e.tag, t, e.key, e.mode)),
				  (n.elementType = e.elementType),
				  (n.type = e.type),
				  (n.stateNode = e.stateNode),
				  (n.alternate = e),
				  (e.alternate = n))
				: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
			(n.flags = e.flags & 14680064),
			(n.childLanes = e.childLanes),
			(n.lanes = e.lanes),
			(n.child = e.child),
			(n.memoizedProps = e.memoizedProps),
			(n.memoizedState = e.memoizedState),
			(n.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(n.sibling = e.sibling),
			(n.index = e.index),
			(n.ref = e.ref),
			n
		);
	}
	function Go(e, t, n, r, i, s) {
		var o = 2;
		if (((r = e), typeof e == 'function')) af(e) && (o = 1);
		else if (typeof e == 'string') o = 5;
		else
			e: switch (e) {
				case kr:
					return rr(n.children, i, s, t);
				case Rd:
					(o = 8), (i |= 8);
					break;
				case Fu:
					return (e = vt(12, n, t, i | 2)), (e.elementType = Fu), (e.lanes = s), e;
				case zu:
					return (e = vt(13, n, t, i)), (e.elementType = zu), (e.lanes = s), e;
				case $u:
					return (e = vt(19, n, t, i)), (e.elementType = $u), (e.lanes = s), e;
				case l_:
					return nl(n, i, s, t);
				default:
					if (typeof e == 'object' && e !== null)
						switch (e.$$typeof) {
							case o_:
								o = 10;
								break e;
							case a_:
								o = 9;
								break e;
							case bd:
								o = 11;
								break e;
							case kd:
								o = 14;
								break e;
							case pn:
								(o = 16), (r = null);
								break e;
						}
					throw Error(N(130, e == null ? e : typeof e, ''));
			}
		return (t = vt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
	}
	function rr(e, t, n, r) {
		return (e = vt(7, e, r, t)), (e.lanes = n), e;
	}
	function nl(e, t, n, r) {
		return (e = vt(22, e, r, t)), (e.elementType = l_), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
	}
	function ou(e, t, n) {
		return (e = vt(6, e, null, t)), (e.lanes = n), e;
	}
	function au(e, t, n) {
		return (
			(t = vt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = n),
			(t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
			t
		);
	}
	function KS(e, t, n, r, i) {
		(this.tag = t),
			(this.containerInfo = e),
			(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode = this.pendingContext = this.context = null),
			(this.callbackPriority = 0),
			(this.eventTimes = $l(0)),
			(this.expirationTimes = $l(-1)),
			(this.entangledLanes =
				this.finishedLanes =
				this.mutableReadLanes =
				this.expiredLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = $l(0)),
			(this.identifierPrefix = r),
			(this.onRecoverableError = i),
			(this.mutableSourceEagerHydrationData = null);
	}
	function lf(e, t, n, r, i, s, o, a, l) {
		return (
			(e = new KS(e, t, n, a, l)),
			t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
			(s = vt(3, null, null, t)),
			(e.current = s),
			(s.stateNode = e),
			(s.memoizedState = {
				element: r,
				isDehydrated: n,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null,
			}),
			Gd(s),
			e
		);
	}
	function ZS(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return { $$typeof: br, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
	}
	function eg(e) {
		if (!e) return Un;
		e = e._reactInternals;
		e: {
			if (gr(e) !== e || e.tag !== 1) throw Error(N(170));
			var t = e;
			do {
				switch (t.tag) {
					case 3:
						t = t.stateNode.context;
						break e;
					case 1:
						if (tt(t.type)) {
							t = t.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				t = t.return;
			} while (t !== null);
			throw Error(N(171));
		}
		if (e.tag === 1) {
			var n = e.type;
			if (tt(n)) return J_(e, n, t);
		}
		return t;
	}
	function tg(e, t, n, r, i, s, o, a, l) {
		return (
			(e = lf(n, r, !0, e, i, s, o, a, l)),
			(e.context = eg(null)),
			(n = e.current),
			(r = qe()),
			(i = An(n)),
			(s = en(r, i)),
			(s.callback = t ?? null),
			In(n, s, i),
			(e.current.lanes = i),
			Bs(e, i, r),
			nt(e, r),
			e
		);
	}
	function rl(e, t, n, r) {
		var i = t.current,
			s = qe(),
			o = An(i);
		return (
			(n = eg(n)),
			t.context === null ? (t.context = n) : (t.pendingContext = n),
			(t = en(s, o)),
			(t.payload = { element: e }),
			(r = r === void 0 ? null : r),
			r !== null && (t.callback = r),
			(e = In(i, t, o)),
			e !== null && (At(e, i, o, s), Bo(e, i, o)),
			o
		);
	}
	function Ca(e) {
		if (((e = e.current), !e.child)) return null;
		switch (e.child.tag) {
			case 5:
				return e.child.stateNode;
			default:
				return e.child.stateNode;
		}
	}
	function pp(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function uf(e, t) {
		pp(e, t), (e = e.alternate) && pp(e, t);
	}
	function XS() {
		return null;
	}
	var ng =
		typeof reportError == 'function'
			? reportError
			: function (e) {
					console.error(e);
			  };
	function cf(e) {
		this._internalRoot = e;
	}
	il.prototype.render = cf.prototype.render = function (e) {
		var t = this._internalRoot;
		if (t === null) throw Error(N(409));
		rl(e, t, null, null);
	};
	il.prototype.unmount = cf.prototype.unmount = function () {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			cr(function () {
				rl(null, e, null, null);
			}),
				(t[sn] = null);
		}
	};
	function il(e) {
		this._internalRoot = e;
	}
	il.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = D_();
			e = { blockedOn: null, target: e, priority: t };
			for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
			gn.splice(n, 0, e), n === 0 && P_(e);
		}
	};
	function df(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	function sl(e) {
		return !(
			!e ||
			(e.nodeType !== 1 &&
				e.nodeType !== 9 &&
				e.nodeType !== 11 &&
				(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
		);
	}
	function mp() {}
	function JS(e, t, n, r, i) {
		if (i) {
			if (typeof r == 'function') {
				var s = r;
				r = function () {
					var u = Ca(o);
					s.call(u);
				};
			}
			var o = tg(t, r, e, 0, null, !1, !1, '', mp);
			return (e._reactRootContainer = o), (e[sn] = o.current), gs(e.nodeType === 8 ? e.parentNode : e), cr(), o;
		}
		for (; (i = e.lastChild); ) e.removeChild(i);
		if (typeof r == 'function') {
			var a = r;
			r = function () {
				var u = Ca(l);
				a.call(u);
			};
		}
		var l = lf(e, 0, !1, null, null, !1, !1, '', mp);
		return (
			(e._reactRootContainer = l),
			(e[sn] = l.current),
			gs(e.nodeType === 8 ? e.parentNode : e),
			cr(function () {
				rl(t, l, n, r);
			}),
			l
		);
	}
	function ol(e, t, n, r, i) {
		var s = n._reactRootContainer;
		if (s) {
			var o = s;
			if (typeof i == 'function') {
				var a = i;
				i = function () {
					var l = Ca(o);
					a.call(l);
				};
			}
			rl(t, o, e, i);
		} else o = JS(n, t, e, i, r);
		return Ca(o);
	}
	O_ = function (e) {
		switch (e.tag) {
			case 3:
				var t = e.stateNode;
				if (t.current.memoizedState.isDehydrated) {
					var n = Ui(t.pendingLanes);
					n !== 0 && (Nd(t, n | 1), nt(t, ve()), !(W & 6) && ((ni = ve() + 500), jn()));
				}
				break;
			case 13:
				cr(function () {
					var r = on(e, 1);
					if (r !== null) {
						var i = qe();
						At(r, e, 1, i);
					}
				}),
					uf(e, 1);
		}
	};
	Od = function (e) {
		if (e.tag === 13) {
			var t = on(e, 134217728);
			if (t !== null) {
				var n = qe();
				At(t, e, 134217728, n);
			}
			uf(e, 134217728);
		}
	};
	I_ = function (e) {
		if (e.tag === 13) {
			var t = An(e),
				n = on(e, t);
			if (n !== null) {
				var r = qe();
				At(n, e, t, r);
			}
			uf(e, t);
		}
	};
	D_ = function () {
		return K;
	};
	A_ = function (e, t) {
		var n = K;
		try {
			return (K = e), t();
		} finally {
			K = n;
		}
	};
	Zu = function (e, t, n) {
		switch (t) {
			case 'input':
				if ((Gu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
					for (n = e; n.parentNode; ) n = n.parentNode;
					for (
						n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
						t < n.length;
						t++
					) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var i = Ka(r);
							if (!i) throw Error(N(90));
							c_(r), Gu(r, i);
						}
					}
				}
				break;
			case 'textarea':
				f_(e, n);
				break;
			case 'select':
				(t = n.value), t != null && Fr(e, !!n.multiple, t, !1);
		}
	};
	v_ = rf;
	E_ = cr;
	var e2 = { usingClientEntryPoint: !1, Events: [zs, Or, Ka, g_, y_, rf] },
		Di = { findFiberByHostInstance: Kn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
		t2 = {
			bundleType: Di.bundleType,
			version: Di.version,
			rendererPackageName: Di.rendererPackageName,
			rendererConfig: Di.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: cn.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (e) {
				return (e = T_(e)), e === null ? null : e.stateNode;
			},
			findFiberByHostInstance: Di.findFiberByHostInstance || XS,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!mo.isDisabled && mo.supportsFiber)
			try {
				(Wa = mo.inject(t2)), (jt = mo);
			} catch {}
	}
	dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e2;
	dt.createPortal = function (e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!df(t)) throw Error(N(200));
		return ZS(e, t, null, n);
	};
	dt.createRoot = function (e, t) {
		if (!df(e)) throw Error(N(299));
		var n = !1,
			r = '',
			i = ng;
		return (
			t != null &&
				(t.unstable_strictMode === !0 && (n = !0),
				t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
				t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
			(t = lf(e, 1, !1, null, null, n, !1, r, i)),
			(e[sn] = t.current),
			gs(e.nodeType === 8 ? e.parentNode : e),
			new cf(t)
		);
	};
	dt.findDOMNode = function (e) {
		if (e == null) return null;
		if (e.nodeType === 1) return e;
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == 'function' ? Error(N(188)) : ((e = Object.keys(e).join(',')), Error(N(268, e)));
		return (e = T_(t)), (e = e === null ? null : e.stateNode), e;
	};
	dt.flushSync = function (e) {
		return cr(e);
	};
	dt.hydrate = function (e, t, n) {
		if (!sl(t)) throw Error(N(200));
		return ol(null, e, t, !0, n);
	};
	dt.hydrateRoot = function (e, t, n) {
		if (!df(e)) throw Error(N(405));
		var r = (n != null && n.hydratedSources) || null,
			i = !1,
			s = '',
			o = ng;
		if (
			(n != null &&
				(n.unstable_strictMode === !0 && (i = !0),
				n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
				n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
			(t = tg(t, null, e, 1, n ?? null, i, !1, s, o)),
			(e[sn] = t.current),
			gs(e),
			r)
		)
			for (e = 0; e < r.length; e++)
				(n = r[e]),
					(i = n._getVersion),
					(i = i(n._source)),
					t.mutableSourceEagerHydrationData == null
						? (t.mutableSourceEagerHydrationData = [n, i])
						: t.mutableSourceEagerHydrationData.push(n, i);
		return new il(t);
	};
	dt.render = function (e, t, n) {
		if (!sl(t)) throw Error(N(200));
		return ol(null, e, t, !1, n);
	};
	dt.unmountComponentAtNode = function (e) {
		if (!sl(e)) throw Error(N(40));
		return e._reactRootContainer
			? (cr(function () {
					ol(null, null, e, !1, function () {
						(e._reactRootContainer = null), (e[sn] = null);
					});
			  }),
			  !0)
			: !1;
	};
	dt.unstable_batchedUpdates = rf;
	dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
		if (!sl(n)) throw Error(N(200));
		if (e == null || e._reactInternals === void 0) throw Error(N(38));
		return ol(e, t, n, !1, r);
	};
	dt.version = '18.2.0-next-9e3b772b8-20220608';
	(function (e) {
		function t() {
			if (
				!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function')
			)
				try {
					__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
				} catch (n) {
					console.error(n);
				}
		}
		t(), (e.exports = dt);
	})(Xv);
	var Oc = {},
		n2 = {
			get exports() {
				return Oc;
			},
			set exports(e) {
				Oc = e;
			},
		},
		rg = {};
	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var ri = x;
	function r2(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var i2 = typeof Object.is == 'function' ? Object.is : r2,
		s2 = ri.useState,
		o2 = ri.useEffect,
		a2 = ri.useLayoutEffect,
		l2 = ri.useDebugValue;
	function u2(e, t) {
		var n = t(),
			r = s2({ inst: { value: n, getSnapshot: t } }),
			i = r[0].inst,
			s = r[1];
		return (
			a2(
				function () {
					(i.value = n), (i.getSnapshot = t), lu(i) && s({ inst: i });
				},
				[e, n, t]
			),
			o2(
				function () {
					return (
						lu(i) && s({ inst: i }),
						e(function () {
							lu(i) && s({ inst: i });
						})
					);
				},
				[e]
			),
			l2(n),
			n
		);
	}
	function lu(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i2(e, n);
		} catch {
			return !0;
		}
	}
	function c2(e, t) {
		return t();
	}
	var d2 = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? c2 : u2;
	rg.useSyncExternalStore = ri.useSyncExternalStore !== void 0 ? ri.useSyncExternalStore : d2;
	(function (e) {
		e.exports = rg;
	})(n2);
	const ig = Oc.useSyncExternalStore,
		_p = x.createContext(void 0),
		sg = x.createContext(!1);
	function og(e, t) {
		return (
			e ||
			(t && typeof window < 'u'
				? (window.ReactQueryClientContext || (window.ReactQueryClientContext = _p), window.ReactQueryClientContext)
				: _p)
		);
	}
	const ff = ({ context: e } = {}) => {
			const t = x.useContext(og(e, x.useContext(sg)));
			if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
			return t;
		},
		f2 = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
			x.useEffect(
				() => (
					e.mount(),
					() => {
						e.unmount();
					}
				),
				[e]
			);
			const i = og(n, r);
			return x.createElement(sg.Provider, { value: !n && r }, x.createElement(i.Provider, { value: e }, t));
		},
		ag = x.createContext(!1),
		h2 = () => x.useContext(ag);
	ag.Provider;
	function p2() {
		let e = !1;
		return {
			clearReset: () => {
				e = !1;
			},
			reset: () => {
				e = !0;
			},
			isReset: () => e,
		};
	}
	const m2 = x.createContext(p2()),
		_2 = () => x.useContext(m2);
	function lg(e, t) {
		return typeof e == 'function' ? e(...t) : !!e;
	}
	const g2 = (e, t) => {
			(e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
		},
		y2 = e => {
			x.useEffect(() => {
				e.clearReset();
			}, [e]);
		},
		v2 = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
			e.isError && !t.isReset() && !e.isFetching && lg(n, [e.error, r]),
		E2 = e => {
			e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3);
		},
		S2 = (e, t) => e.isLoading && e.isFetching && !t,
		w2 = (e, t, n) => (e == null ? void 0 : e.suspense) && S2(t, n),
		T2 = (e, t, n) =>
			t
				.fetchOptimistic(e)
				.then(({ data: r }) => {
					e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
				})
				.catch(r => {
					n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
				});
	function ug(e, t) {
		const n = ff({ context: e.context }),
			r = h2(),
			i = _2(),
			s = n.defaultQueryOptions(e);
		(s._optimisticResults = r ? 'isRestoring' : 'optimistic'),
			s.onError && (s.onError = ge.batchCalls(s.onError)),
			s.onSuccess && (s.onSuccess = ge.batchCalls(s.onSuccess)),
			s.onSettled && (s.onSettled = ge.batchCalls(s.onSettled)),
			E2(s),
			g2(s, i),
			y2(i);
		const [o] = x.useState(() => new t(n, s)),
			a = o.getOptimisticResult(s);
		if (
			(ig(
				x.useCallback(l => (r ? () => {} : o.subscribe(ge.batchCalls(l))), [o, r]),
				() => o.getCurrentResult(),
				() => o.getCurrentResult()
			),
			x.useEffect(() => {
				o.setOptions(s, { listeners: !1 });
			}, [s, o]),
			w2(s, a, r))
		)
			throw T2(s, o, i);
		if (v2({ result: a, errorResetBoundary: i, useErrorBoundary: s.useErrorBoundary, query: o.getCurrentQuery() }))
			throw a.error;
		return s.notifyOnChangeProps ? a : o.trackResult(a);
	}
	function R2(e, t, n) {
		const r = Rr(e, t, n);
		return ug(r, n_);
	}
	function b2(e, t, n) {
		const r = Mv(e, t, n),
			i = ff({ context: r.context }),
			[s] = x.useState(() => new Zv(i, r));
		x.useEffect(() => {
			s.setOptions(r);
		}, [s, r]);
		const o = ig(
				x.useCallback(l => s.subscribe(ge.batchCalls(l)), [s]),
				() => s.getCurrentResult(),
				() => s.getCurrentResult()
			),
			a = x.useCallback(
				(l, u) => {
					s.mutate(l, u).catch(k2);
				},
				[s]
			);
		if (o.error && lg(s.options.useErrorBoundary, [o.error])) throw o.error;
		return { ...o, mutate: a, mutateAsync: o.mutate };
	}
	function k2() {}
	function x2(e, t, n) {
		const r = Rr(e, t, n);
		return ug(r, Kv);
	}
	const cg = () =>
			v('div', { className: 'flex justify-center items-center', children: v('div', { className: 'spinner' }) }),
		C2 = ({ userId: e, color: t = '#999999', isBold: n, fontSize: r = 16 }) =>
			L('span', {
				className: `text-[${t}] font-[${r}px] ${n ? 'font-bold' : 'font-normal'}`,
				style: { fontSize: `${r}px` || '16px' },
				children: ['@', e],
			}),
		Ic = ({ src: e, size: t, hasBorder: n, borderColor: r = 'white' }) =>
			v('div', {
				className: 'rounded-full bg-[#eaeaea]',
				style: { width: t, height: t, border: n ? `2px solid ${r}` : 'none' },
				children: v('img', { className: 'w-full h-full rounded-full', src: e }),
			}),
		hf = ({ size: e }) =>
			L('svg', {
				width: e,
				height: e,
				viewBox: '0 0 136 108',
				fill: 'none',
				xmlns: 'http://www.w3.org/2000/svg',
				children: [
					L('g', {
						clipPath: 'url(#clip0_1504_3757)',
						children: [
							v('path', {
								d: 'M115.686 5.00187C113.5 3.67914 111.159 2.59117 108.674 1.76503C101.414 -0.645673 93.8034 -0.514754 86.4987 1.72139C81.9854 3.1028 77.5891 5.28929 73.4643 8.17701C73.4268 8.20259 73.3893 8.22817 73.3533 8.25376C73.3533 8.25376 59.32 18.184 63.0128 20.9498C63.2618 21.1364 63.5078 21.2553 63.7538 21.3185C66.5857 22.0393 69.293 15.0766 75.4487 14.6161C75.6557 14.601 75.8657 14.592 76.0802 14.592C76.1942 14.592 76.3082 14.5935 76.4252 14.598C76.5602 14.6025 76.6952 14.6116 76.8287 14.6206C76.8722 14.6236 76.9142 14.6281 76.9577 14.6326C77.0477 14.6402 77.1392 14.6492 77.2292 14.6597C77.2786 14.6657 77.3281 14.6733 77.3776 14.6793C77.4601 14.6898 77.5426 14.7003 77.6251 14.7139C77.6761 14.7214 77.7256 14.7304 77.7766 14.7395C77.8576 14.753 77.9371 14.7681 78.0181 14.7831C78.0676 14.7936 78.1171 14.8042 78.1666 14.8147C78.2461 14.8313 78.3271 14.8493 78.4066 14.8689C78.4546 14.8809 78.5011 14.893 78.5491 14.905C78.6301 14.9261 78.7111 14.9471 78.7906 14.9697C78.8356 14.9817 78.8806 14.9953 78.9241 15.0088C79.0066 15.0329 79.0891 15.0585 79.1701 15.0856C79.2106 15.0991 79.2526 15.1127 79.2931 15.1262C79.3785 15.1548 79.4625 15.1849 79.5465 15.2165C79.5825 15.23 79.6185 15.2436 79.6545 15.2571C79.7445 15.2917 79.833 15.3279 79.9215 15.3655C79.9515 15.3775 79.98 15.3896 80.01 15.4031C80.1075 15.4452 80.2035 15.4889 80.2995 15.534C80.319 15.543 80.34 15.5521 80.3595 15.5626C80.4705 15.6153 80.58 15.671 80.688 15.7266C80.6925 15.7296 80.6985 15.7311 80.703 15.7342C81.288 16.0426 81.8384 16.4098 82.3499 16.8297C85.2028 19.1741 86.8137 23.1814 86.0082 27.9953C85.5687 30.728 84.3493 33.7226 82.1339 36.821L53.8483 71.2766C51.6584 74.3404 50.4434 77.3018 49.9905 80.009C48.777 87.5405 53.4868 93.0797 59.5885 93.31C59.9335 93.3235 60.253 93.3491 60.5484 93.3867C67.2366 92.8871 69.854 84.7085 72.9844 87.0515C76.6142 89.7691 63.1193 99.4089 62.6573 99.7385C66.0382 102.59 69.9065 104.81 74.2053 106.238C78.2326 107.576 82.3694 108.131 86.5017 107.977C105.641 107.272 124.691 91.3718 132.52 67.6455C140.996 41.9569 133.458 15.7552 115.687 5.00488L115.686 5.00187Z',
								fill: '#FFB7DA',
							}),
							v('path', {
								d: 'M76.412 14.6926C76.067 14.679 75.7476 14.6535 75.4521 14.6158C69.2964 15.0763 66.589 22.0391 63.7571 21.3183C63.5126 21.2566 63.2667 21.1362 63.0162 20.9496C59.3863 18.2319 72.8812 8.5921 73.3432 8.26255C69.9623 5.41094 66.094 3.19135 61.7952 1.76329C39.1088 -5.76978 12.9995 11.5084 3.4825 40.3571C-4.99359 66.0456 2.54354 92.2473 20.3147 102.998C22.5001 104.32 24.8415 105.408 27.3269 106.235C39.1118 110.149 51.8207 107.366 62.6472 99.7443C62.6472 99.7443 62.6517 99.7413 62.6607 99.7353C63.1227 99.4057 76.6175 89.7659 72.9877 87.0482C69.8573 84.7052 67.24 92.8824 60.5518 93.3835C60.2353 93.4075 59.9098 93.4136 59.5753 93.4015C53.4481 93.1713 48.7248 87.587 49.9938 80.0057C50.4333 77.273 51.6527 74.2784 53.8681 71.18L82.1538 36.7245C84.3437 33.6607 85.5586 30.6992 86.0116 27.9921C87.225 20.4605 82.5152 14.9213 76.4135 14.6911L76.412 14.6926Z',
								fill: '#FE7C58',
							}),
						],
					}),
					v('defs', {
						children: v('clipPath', {
							id: 'clip0_1504_3757',
							children: v('rect', { width: '136', height: '108', fill: 'white' }),
						}),
					}),
				],
			}),
		Na = (e = !1) => {
			const [t, n] = x.useState(e),
				r = x.useCallback(() => {
					n(i => !i);
				}, []);
			return [t, r];
		},
		dg = ({ children: e, onClick: t }) =>
			L(er, {
				children: [
					v('div', {
						onClick: () => (t == null ? void 0 : t()),
						className: 'z-40 fixed top-0 left-0 w-screen h-screen bg-black opacity-50',
					}),
					e,
				],
			}),
		fg = ({ toggleAppOpen: e }) =>
			v(dg, {
				onClick: e,
				children: v('div', {
					className: 'absolute bottom-0 w-full h-300 bg-white rounded-t-2xl z-50 p-20 max-w-lg',
					children: L('div', {
						className: 'flex flex-col items-center justify-center',
						children: [
							v(hf, { size: 45 }),
							v('h3', { className: 'text-20 font-medium mt-12', children: '지금 바로 채티와 함께 해요!' }),
							v('p', {
								className: 'text-grey-600 font-normal mt-4 mb-16',
								children: '앱에서 더 많은 기능을 사용해 보세요',
							}),
							v('button', {
								onClick: () => null,
								className: 'w-full h-50 bg-main-primary rounded-2xl text-center',
								children: v('span', { className: 'text-dark-primary text-16 font-medium', children: 'chatty 열기' }),
							}),
							v('button', { onClick: e, className: 'text-[#FE7C58] mt-16', children: '다음에' }),
						],
					}),
				}),
			}),
		N2 = ({
			profile_message: e,
			profile_name: t,
			profile_image: n,
			background_image: r,
			follower: i,
			following: s,
			response_rate: o,
			username: a,
			question_count: l,
			views: u,
		}) => {
			const [c, d] = Na(!1);
			return L(er, {
				children: [
					c && v(fg, { toggleAppOpen: d }),
					L('div', {
						className: 'relative w-full h-160 bg-white',
						children: [
							v('img', { src: r, className: 'object-cover w-full h-full', alt: 'background' }),
							v('div', {
								className: 'absolute bottom-[-48px] left-16',
								children: v(Ic, { size: 100, src: n, hasBorder: !0 }),
							}),
						],
					}),
					L('div', {
						className: 'p-16 bg-white',
						children: [
							v('div', {
								className: 'flex justify-end',
								children: L('button', {
									className: 'rounded-[17px] border-pink-main border-1 flex items-center p-8 gap-[8px]',
									children: [
										v(hf, { size: 20 }),
										v('button', { onClick: d, children: v('span', { className: 'chatty', children: 'Chatty?' }) }),
									],
								}),
							}),
							L('div', {
								className: 'flex flex-col gap-0 justify-center-center',
								children: [
									v('p', { className: 'text-lg font-bold', children: a }),
									v(C2, { userId: t, fontSize: 12 }),
									v('p', { className: 'font-normal text-14 text-light-primary mt-8 mb-6', children: e }),
									L('div', {
										className: 'flex gap-32',
										children: [
											L('p', {
												className: 'flex items-center gap-4',
												children: [
													v('span', { className: 'font-semibold text-16 text-light-primary', children: i }),
													v('span', { className: 'text-sm font-normal text-light-primary', children: '팔로워' }),
												],
											}),
											L('p', {
												className: 'flex items-center gap-4',
												children: [
													v('span', { className: 'font-semibold text-16 text-light-primary', children: s }),
													v('span', { className: 'text-sm font-normal text-light-primary', children: '팔로잉' }),
												],
											}),
										],
									}),
								],
							}),
							L('div', {
								className: 'flex justify-between items-center px-24 mt-24',
								children: [
									v(uu, { count: `${l.answered + l.unanswered}`, label: '받은 질문 수' }),
									v(uu, { count: `${o}%`, label: '답변률' }),
									v(uu, { count: u, label: '오늘 방문자 수' }),
								],
							}),
						],
					}),
				],
			});
		},
		uu = ({ count: e, label: t }) =>
			L('div', {
				className: 'flex flex-col items-center gap-4',
				children: [
					v('span', { className: 'font-medium', children: e }),
					v('span', { className: 'font-normal text-light-secondary text-12', children: t }),
				],
			}),
		O2 = ({ size: e = 16, color: t = 'white', background: n = '#EE4E22', label: r }) => (
			console.log(e),
			v('div', {
				className: 'rounded-full flex items-center justify-center text-12 font-normal',
				style: { color: t, background: n, width: `${e}px`, height: `${e}px` },
				children: r,
			})
		),
		I2 = ({ activeIdx: e, tabs: t, hasNew: n = !1, indicatorColor: r = '#F892C3', onClick: i }) => {
			const s = x.useMemo(() => Math.round(100 / t.length), [t.length]);
			return L(er, {
				children: [
					v('div', {
						className: 'flex justify-around items-center text-center font-14 font-normal w-full bg-white',
						children: t.map((o, a) =>
							v(
								'div',
								{
									style: { width: s + '%' },
									children: L('div', {
										className: 'flex items-center justify-center gap-4 ',
										children: [
											v('button', {
												onClick: l => i(l),
												children: v('span', {
													className: `text-14 ${
														e === a ? 'font-bold text-light-primary' : 'font-medium text-light-secondary'
													}`,
													children: o,
												}),
											}),
											n && v(O2, { size: 16, label: 'N' }),
										],
									}),
								},
								a
							)
						),
					}),
					v('div', {
						className: 'w-full mt-6 transition duration-300 ease-in-out overflow-x-hidden',
						style: { transform: `translateX(${s * e}%)` },
						children: v('div', {
							style: { height: '3px', width: s / 2 + '%', transform: 'translateX(50%)', backgroundColor: r },
						}),
					}),
				],
			});
		};
	function hg(e, t) {
		return function () {
			return e.apply(t, arguments);
		};
	}
	const { toString: D2 } = Object.prototype,
		{ getPrototypeOf: pf } = Object,
		al = (e => t => {
			const n = D2.call(t);
			return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
		})(Object.create(null)),
		Wt = e => ((e = e.toLowerCase()), t => al(t) === e),
		ll = e => t => typeof t === e,
		{ isArray: Ei } = Array,
		ks = ll('undefined');
	function A2(e) {
		return (
			e !== null &&
			!ks(e) &&
			e.constructor !== null &&
			!ks(e.constructor) &&
			St(e.constructor.isBuffer) &&
			e.constructor.isBuffer(e)
		);
	}
	const pg = Wt('ArrayBuffer');
	function P2(e) {
		let t;
		return (
			typeof ArrayBuffer < 'u' && ArrayBuffer.isView
				? (t = ArrayBuffer.isView(e))
				: (t = e && e.buffer && pg(e.buffer)),
			t
		);
	}
	const L2 = ll('string'),
		St = ll('function'),
		mg = ll('number'),
		ul = e => e !== null && typeof e == 'object',
		M2 = e => e === !0 || e === !1,
		Yo = e => {
			if (al(e) !== 'object') return !1;
			const t = pf(e);
			return (
				(t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
				!(Symbol.toStringTag in e) &&
				!(Symbol.iterator in e)
			);
		},
		U2 = Wt('Date'),
		B2 = Wt('File'),
		F2 = Wt('Blob'),
		z2 = Wt('FileList'),
		$2 = e => ul(e) && St(e.pipe),
		H2 = e => {
			let t;
			return (
				e &&
				((typeof FormData == 'function' && e instanceof FormData) ||
					(St(e.append) &&
						((t = al(e)) === 'formdata' || (t === 'object' && St(e.toString) && e.toString() === '[object FormData]'))))
			);
		},
		j2 = Wt('URLSearchParams'),
		G2 = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
	function Hs(e, t, { allOwnKeys: n = !1 } = {}) {
		if (e === null || typeof e > 'u') return;
		let r, i;
		if ((typeof e != 'object' && (e = [e]), Ei(e))) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
		else {
			const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
				o = s.length;
			let a;
			for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
		}
	}
	function _g(e, t) {
		t = t.toLowerCase();
		const n = Object.keys(e);
		let r = n.length,
			i;
		for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
		return null;
	}
	const gg = (() =>
			typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
		yg = e => !ks(e) && e !== gg;
	function Dc() {
		const { caseless: e } = (yg(this) && this) || {},
			t = {},
			n = (r, i) => {
				const s = (e && _g(t, i)) || i;
				Yo(t[s]) && Yo(r) ? (t[s] = Dc(t[s], r)) : Yo(r) ? (t[s] = Dc({}, r)) : Ei(r) ? (t[s] = r.slice()) : (t[s] = r);
			};
		for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Hs(arguments[r], n);
		return t;
	}
	const Y2 = (e, t, n, { allOwnKeys: r } = {}) => (
			Hs(
				t,
				(i, s) => {
					n && St(i) ? (e[s] = hg(i, n)) : (e[s] = i);
				},
				{ allOwnKeys: r }
			),
			e
		),
		W2 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
		q2 = (e, t, n, r) => {
			(e.prototype = Object.create(t.prototype, r)),
				(e.prototype.constructor = e),
				Object.defineProperty(e, 'super', { value: t.prototype }),
				n && Object.assign(e.prototype, n);
		},
		V2 = (e, t, n, r) => {
			let i, s, o;
			const a = {};
			if (((t = t || {}), e == null)) return t;
			do {
				for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
					(o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
				e = n !== !1 && pf(e);
			} while (e && (!n || n(e, t)) && e !== Object.prototype);
			return t;
		},
		Q2 = (e, t, n) => {
			(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
			const r = e.indexOf(t, n);
			return r !== -1 && r === n;
		},
		K2 = e => {
			if (!e) return null;
			if (Ei(e)) return e;
			let t = e.length;
			if (!mg(t)) return null;
			const n = new Array(t);
			for (; t-- > 0; ) n[t] = e[t];
			return n;
		},
		Z2 = (
			e => t =>
				e && t instanceof e
		)(typeof Uint8Array < 'u' && pf(Uint8Array)),
		X2 = (e, t) => {
			const r = (e && e[Symbol.iterator]).call(e);
			let i;
			for (; (i = r.next()) && !i.done; ) {
				const s = i.value;
				t.call(e, s[0], s[1]);
			}
		},
		J2 = (e, t) => {
			let n;
			const r = [];
			for (; (n = e.exec(t)) !== null; ) r.push(n);
			return r;
		},
		ew = Wt('HTMLFormElement'),
		tw = e =>
			e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
				return r.toUpperCase() + i;
			}),
		gp = (
			({ hasOwnProperty: e }) =>
			(t, n) =>
				e.call(t, n)
		)(Object.prototype),
		nw = Wt('RegExp'),
		vg = (e, t) => {
			const n = Object.getOwnPropertyDescriptors(e),
				r = {};
			Hs(n, (i, s) => {
				t(i, s, e) !== !1 && (r[s] = i);
			}),
				Object.defineProperties(e, r);
		},
		rw = e => {
			vg(e, (t, n) => {
				if (St(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
				const r = e[n];
				if (St(r)) {
					if (((t.enumerable = !1), 'writable' in t)) {
						t.writable = !1;
						return;
					}
					t.set ||
						(t.set = () => {
							throw Error("Can not rewrite read-only method '" + n + "'");
						});
				}
			});
		},
		iw = (e, t) => {
			const n = {},
				r = i => {
					i.forEach(s => {
						n[s] = !0;
					});
				};
			return Ei(e) ? r(e) : r(String(e).split(t)), n;
		},
		sw = () => {},
		ow = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
		cu = 'abcdefghijklmnopqrstuvwxyz',
		yp = '0123456789',
		Eg = { DIGIT: yp, ALPHA: cu, ALPHA_DIGIT: cu + cu.toUpperCase() + yp },
		aw = (e = 16, t = Eg.ALPHA_DIGIT) => {
			let n = '';
			const { length: r } = t;
			for (; e--; ) n += t[(Math.random() * r) | 0];
			return n;
		};
	function lw(e) {
		return !!(e && St(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
	}
	const uw = e => {
			const t = new Array(10),
				n = (r, i) => {
					if (ul(r)) {
						if (t.indexOf(r) >= 0) return;
						if (!('toJSON' in r)) {
							t[i] = r;
							const s = Ei(r) ? [] : {};
							return (
								Hs(r, (o, a) => {
									const l = n(o, i + 1);
									!ks(l) && (s[a] = l);
								}),
								(t[i] = void 0),
								s
							);
						}
					}
					return r;
				};
			return n(e, 0);
		},
		cw = Wt('AsyncFunction'),
		dw = e => e && (ul(e) || St(e)) && St(e.then) && St(e.catch),
		k = {
			isArray: Ei,
			isArrayBuffer: pg,
			isBuffer: A2,
			isFormData: H2,
			isArrayBufferView: P2,
			isString: L2,
			isNumber: mg,
			isBoolean: M2,
			isObject: ul,
			isPlainObject: Yo,
			isUndefined: ks,
			isDate: U2,
			isFile: B2,
			isBlob: F2,
			isRegExp: nw,
			isFunction: St,
			isStream: $2,
			isURLSearchParams: j2,
			isTypedArray: Z2,
			isFileList: z2,
			forEach: Hs,
			merge: Dc,
			extend: Y2,
			trim: G2,
			stripBOM: W2,
			inherits: q2,
			toFlatObject: V2,
			kindOf: al,
			kindOfTest: Wt,
			endsWith: Q2,
			toArray: K2,
			forEachEntry: X2,
			matchAll: J2,
			isHTMLForm: ew,
			hasOwnProperty: gp,
			hasOwnProp: gp,
			reduceDescriptors: vg,
			freezeMethods: rw,
			toObjectSet: iw,
			toCamelCase: tw,
			noop: sw,
			toFiniteNumber: ow,
			findKey: _g,
			global: gg,
			isContextDefined: yg,
			ALPHABET: Eg,
			generateString: aw,
			isSpecCompliantForm: lw,
			toJSONObject: uw,
			isAsyncFn: cw,
			isThenable: dw,
		};
	function Y(e, t, n, r, i) {
		Error.call(this),
			Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
			(this.message = e),
			(this.name = 'AxiosError'),
			t && (this.code = t),
			n && (this.config = n),
			r && (this.request = r),
			i && (this.response = i);
	}
	k.inherits(Y, Error, {
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
				config: k.toJSONObject(this.config),
				code: this.code,
				status: this.response && this.response.status ? this.response.status : null,
			};
		},
	});
	const Sg = Y.prototype,
		wg = {};
	[
		'ERR_BAD_OPTION_VALUE',
		'ERR_BAD_OPTION',
		'ECONNABORTED',
		'ETIMEDOUT',
		'ERR_NETWORK',
		'ERR_FR_TOO_MANY_REDIRECTS',
		'ERR_DEPRECATED',
		'ERR_BAD_RESPONSE',
		'ERR_BAD_REQUEST',
		'ERR_CANCELED',
		'ERR_NOT_SUPPORT',
		'ERR_INVALID_URL',
	].forEach(e => {
		wg[e] = { value: e };
	});
	Object.defineProperties(Y, wg);
	Object.defineProperty(Sg, 'isAxiosError', { value: !0 });
	Y.from = (e, t, n, r, i, s) => {
		const o = Object.create(Sg);
		return (
			k.toFlatObject(
				e,
				o,
				function (l) {
					return l !== Error.prototype;
				},
				a => a !== 'isAxiosError'
			),
			Y.call(o, e.message, t, n, r, i),
			(o.cause = e),
			(o.name = e.name),
			s && Object.assign(o, s),
			o
		);
	};
	const fw = null;
	function Ac(e) {
		return k.isPlainObject(e) || k.isArray(e);
	}
	function Tg(e) {
		return k.endsWith(e, '[]') ? e.slice(0, -2) : e;
	}
	function vp(e, t, n) {
		return e
			? e
					.concat(t)
					.map(function (i, s) {
						return (i = Tg(i)), !n && s ? '[' + i + ']' : i;
					})
					.join(n ? '.' : '')
			: t;
	}
	function hw(e) {
		return k.isArray(e) && !e.some(Ac);
	}
	const pw = k.toFlatObject(k, {}, null, function (t) {
		return /^is[A-Z]/.test(t);
	});
	function cl(e, t, n) {
		if (!k.isObject(e)) throw new TypeError('target must be an object');
		(t = t || new FormData()),
			(n = k.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (y, S) {
				return !k.isUndefined(S[y]);
			}));
		const r = n.metaTokens,
			i = n.visitor || c,
			s = n.dots,
			o = n.indexes,
			l = (n.Blob || (typeof Blob < 'u' && Blob)) && k.isSpecCompliantForm(t);
		if (!k.isFunction(i)) throw new TypeError('visitor must be a function');
		function u(_) {
			if (_ === null) return '';
			if (k.isDate(_)) return _.toISOString();
			if (!l && k.isBlob(_)) throw new Y('Blob is not supported. Use a Buffer instead.');
			return k.isArrayBuffer(_) || k.isTypedArray(_)
				? l && typeof Blob == 'function'
					? new Blob([_])
					: Buffer.from(_)
				: _;
		}
		function c(_, y, S) {
			let p = _;
			if (_ && !S && typeof _ == 'object') {
				if (k.endsWith(y, '{}')) (y = r ? y : y.slice(0, -2)), (_ = JSON.stringify(_));
				else if ((k.isArray(_) && hw(_)) || ((k.isFileList(_) || k.endsWith(y, '[]')) && (p = k.toArray(_))))
					return (
						(y = Tg(y)),
						p.forEach(function (g, E) {
							!(k.isUndefined(g) || g === null) && t.append(o === !0 ? vp([y], E, s) : o === null ? y : y + '[]', u(g));
						}),
						!1
					);
			}
			return Ac(_) ? !0 : (t.append(vp(S, y, s), u(_)), !1);
		}
		const d = [],
			h = Object.assign(pw, { defaultVisitor: c, convertValue: u, isVisitable: Ac });
		function f(_, y) {
			if (!k.isUndefined(_)) {
				if (d.indexOf(_) !== -1) throw Error('Circular reference detected in ' + y.join('.'));
				d.push(_),
					k.forEach(_, function (p, m) {
						(!(k.isUndefined(p) || p === null) && i.call(t, p, k.isString(m) ? m.trim() : m, y, h)) === !0 &&
							f(p, y ? y.concat(m) : [m]);
					}),
					d.pop();
			}
		}
		if (!k.isObject(e)) throw new TypeError('data must be an object');
		return f(e), t;
	}
	function Ep(e) {
		const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
		return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
			return t[r];
		});
	}
	function mf(e, t) {
		(this._pairs = []), e && cl(e, this, t);
	}
	const Rg = mf.prototype;
	Rg.append = function (t, n) {
		this._pairs.push([t, n]);
	};
	Rg.toString = function (t) {
		const n = t
			? function (r) {
					return t.call(this, r, Ep);
			  }
			: Ep;
		return this._pairs
			.map(function (i) {
				return n(i[0]) + '=' + n(i[1]);
			}, '')
			.join('&');
	};
	function mw(e) {
		return encodeURIComponent(e)
			.replace(/%3A/gi, ':')
			.replace(/%24/g, '$')
			.replace(/%2C/gi, ',')
			.replace(/%20/g, '+')
			.replace(/%5B/gi, '[')
			.replace(/%5D/gi, ']');
	}
	function bg(e, t, n) {
		if (!t) return e;
		const r = (n && n.encode) || mw,
			i = n && n.serialize;
		let s;
		if ((i ? (s = i(t, n)) : (s = k.isURLSearchParams(t) ? t.toString() : new mf(t, n).toString(r)), s)) {
			const o = e.indexOf('#');
			o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf('?') === -1 ? '?' : '&') + s);
		}
		return e;
	}
	class _w {
		constructor() {
			this.handlers = [];
		}
		use(t, n, r) {
			return (
				this.handlers.push({
					fulfilled: t,
					rejected: n,
					synchronous: r ? r.synchronous : !1,
					runWhen: r ? r.runWhen : null,
				}),
				this.handlers.length - 1
			);
		}
		eject(t) {
			this.handlers[t] && (this.handlers[t] = null);
		}
		clear() {
			this.handlers && (this.handlers = []);
		}
		forEach(t) {
			k.forEach(this.handlers, function (r) {
				r !== null && t(r);
			});
		}
	}
	const Sp = _w,
		kg = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
		gw = typeof URLSearchParams < 'u' ? URLSearchParams : mf,
		yw = typeof FormData < 'u' ? FormData : null,
		vw = typeof Blob < 'u' ? Blob : null,
		Ew = (() => {
			let e;
			return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
				? !1
				: typeof window < 'u' && typeof document < 'u';
		})(),
		Sw = (() =>
			typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
		Ht = {
			isBrowser: !0,
			classes: { URLSearchParams: gw, FormData: yw, Blob: vw },
			isStandardBrowserEnv: Ew,
			isStandardBrowserWebWorkerEnv: Sw,
			protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
		};
	function ww(e, t) {
		return cl(
			e,
			new Ht.classes.URLSearchParams(),
			Object.assign(
				{
					visitor: function (n, r, i, s) {
						return Ht.isNode && k.isBuffer(n)
							? (this.append(r, n.toString('base64')), !1)
							: s.defaultVisitor.apply(this, arguments);
					},
				},
				t
			)
		);
	}
	function Tw(e) {
		return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]));
	}
	function Rw(e) {
		const t = {},
			n = Object.keys(e);
		let r;
		const i = n.length;
		let s;
		for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
		return t;
	}
	function xg(e) {
		function t(n, r, i, s) {
			let o = n[s++];
			const a = Number.isFinite(+o),
				l = s >= n.length;
			return (
				(o = !o && k.isArray(i) ? i.length : o),
				l
					? (k.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
					: ((!i[o] || !k.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && k.isArray(i[o]) && (i[o] = Rw(i[o])), !a)
			);
		}
		if (k.isFormData(e) && k.isFunction(e.entries)) {
			const n = {};
			return (
				k.forEachEntry(e, (r, i) => {
					t(Tw(r), i, n, 0);
				}),
				n
			);
		}
		return null;
	}
	const bw = { 'Content-Type': void 0 };
	function kw(e, t, n) {
		if (k.isString(e))
			try {
				return (t || JSON.parse)(e), k.trim(e);
			} catch (r) {
				if (r.name !== 'SyntaxError') throw r;
			}
		return (n || JSON.stringify)(e);
	}
	const dl = {
		transitional: kg,
		adapter: ['xhr', 'http'],
		transformRequest: [
			function (t, n) {
				const r = n.getContentType() || '',
					i = r.indexOf('application/json') > -1,
					s = k.isObject(t);
				if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))) return i && i ? JSON.stringify(xg(t)) : t;
				if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t;
				if (k.isArrayBufferView(t)) return t.buffer;
				if (k.isURLSearchParams(t))
					return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
				let a;
				if (s) {
					if (r.indexOf('application/x-www-form-urlencoded') > -1) return ww(t, this.formSerializer).toString();
					if ((a = k.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
						const l = this.env && this.env.FormData;
						return cl(a ? { 'files[]': t } : t, l && new l(), this.formSerializer);
					}
				}
				return s || i ? (n.setContentType('application/json', !1), kw(t)) : t;
			},
		],
		transformResponse: [
			function (t) {
				const n = this.transitional || dl.transitional,
					r = n && n.forcedJSONParsing,
					i = this.responseType === 'json';
				if (t && k.isString(t) && ((r && !this.responseType) || i)) {
					const o = !(n && n.silentJSONParsing) && i;
					try {
						return JSON.parse(t);
					} catch (a) {
						if (o) throw a.name === 'SyntaxError' ? Y.from(a, Y.ERR_BAD_RESPONSE, this, null, this.response) : a;
					}
				}
				return t;
			},
		],
		timeout: 0,
		xsrfCookieName: 'XSRF-TOKEN',
		xsrfHeaderName: 'X-XSRF-TOKEN',
		maxContentLength: -1,
		maxBodyLength: -1,
		env: { FormData: Ht.classes.FormData, Blob: Ht.classes.Blob },
		validateStatus: function (t) {
			return t >= 200 && t < 300;
		},
		headers: { common: { Accept: 'application/json, text/plain, */*' } },
	};
	k.forEach(['delete', 'get', 'head'], function (t) {
		dl.headers[t] = {};
	});
	k.forEach(['post', 'put', 'patch'], function (t) {
		dl.headers[t] = k.merge(bw);
	});
	const _f = dl,
		xw = k.toObjectSet([
			'age',
			'authorization',
			'content-length',
			'content-type',
			'etag',
			'expires',
			'from',
			'host',
			'if-modified-since',
			'if-unmodified-since',
			'last-modified',
			'location',
			'max-forwards',
			'proxy-authorization',
			'referer',
			'retry-after',
			'user-agent',
		]),
		Cw = e => {
			const t = {};
			let n, r, i;
			return (
				e &&
					e
						.split(
							`
`
						)
						.forEach(function (o) {
							(i = o.indexOf(':')),
								(n = o.substring(0, i).trim().toLowerCase()),
								(r = o.substring(i + 1).trim()),
								!(!n || (t[n] && xw[n])) &&
									(n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
						}),
				t
			);
		},
		wp = Symbol('internals');
	function Ai(e) {
		return e && String(e).trim().toLowerCase();
	}
	function Wo(e) {
		return e === !1 || e == null ? e : k.isArray(e) ? e.map(Wo) : String(e);
	}
	function Nw(e) {
		const t = Object.create(null),
			n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
		let r;
		for (; (r = n.exec(e)); ) t[r[1]] = r[2];
		return t;
	}
	const Ow = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
	function du(e, t, n, r, i) {
		if (k.isFunction(r)) return r.call(this, t, n);
		if ((i && (t = n), !!k.isString(t))) {
			if (k.isString(r)) return t.indexOf(r) !== -1;
			if (k.isRegExp(r)) return r.test(t);
		}
	}
	function Iw(e) {
		return e
			.trim()
			.toLowerCase()
			.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
	}
	function Dw(e, t) {
		const n = k.toCamelCase(' ' + t);
		['get', 'set', 'has'].forEach(r => {
			Object.defineProperty(e, r + n, {
				value: function (i, s, o) {
					return this[r].call(this, t, i, s, o);
				},
				configurable: !0,
			});
		});
	}
	class fl {
		constructor(t) {
			t && this.set(t);
		}
		set(t, n, r) {
			const i = this;
			function s(a, l, u) {
				const c = Ai(l);
				if (!c) throw new Error('header name must be a non-empty string');
				const d = k.findKey(i, c);
				(!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) && (i[d || l] = Wo(a));
			}
			const o = (a, l) => k.forEach(a, (u, c) => s(u, c, l));
			return (
				k.isPlainObject(t) || t instanceof this.constructor
					? o(t, n)
					: k.isString(t) && (t = t.trim()) && !Ow(t)
					? o(Cw(t), n)
					: t != null && s(n, t, r),
				this
			);
		}
		get(t, n) {
			if (((t = Ai(t)), t)) {
				const r = k.findKey(this, t);
				if (r) {
					const i = this[r];
					if (!n) return i;
					if (n === !0) return Nw(i);
					if (k.isFunction(n)) return n.call(this, i, r);
					if (k.isRegExp(n)) return n.exec(i);
					throw new TypeError('parser must be boolean|regexp|function');
				}
			}
		}
		has(t, n) {
			if (((t = Ai(t)), t)) {
				const r = k.findKey(this, t);
				return !!(r && this[r] !== void 0 && (!n || du(this, this[r], r, n)));
			}
			return !1;
		}
		delete(t, n) {
			const r = this;
			let i = !1;
			function s(o) {
				if (((o = Ai(o)), o)) {
					const a = k.findKey(r, o);
					a && (!n || du(r, r[a], a, n)) && (delete r[a], (i = !0));
				}
			}
			return k.isArray(t) ? t.forEach(s) : s(t), i;
		}
		clear(t) {
			const n = Object.keys(this);
			let r = n.length,
				i = !1;
			for (; r--; ) {
				const s = n[r];
				(!t || du(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
			}
			return i;
		}
		normalize(t) {
			const n = this,
				r = {};
			return (
				k.forEach(this, (i, s) => {
					const o = k.findKey(r, s);
					if (o) {
						(n[o] = Wo(i)), delete n[s];
						return;
					}
					const a = t ? Iw(s) : String(s).trim();
					a !== s && delete n[s], (n[a] = Wo(i)), (r[a] = !0);
				}),
				this
			);
		}
		concat(...t) {
			return this.constructor.concat(this, ...t);
		}
		toJSON(t) {
			const n = Object.create(null);
			return (
				k.forEach(this, (r, i) => {
					r != null && r !== !1 && (n[i] = t && k.isArray(r) ? r.join(', ') : r);
				}),
				n
			);
		}
		[Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]();
		}
		toString() {
			return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
		}
		get [Symbol.toStringTag]() {
			return 'AxiosHeaders';
		}
		static from(t) {
			return t instanceof this ? t : new this(t);
		}
		static concat(t, ...n) {
			const r = new this(t);
			return n.forEach(i => r.set(i)), r;
		}
		static accessor(t) {
			const r = (this[wp] = this[wp] = { accessors: {} }).accessors,
				i = this.prototype;
			function s(o) {
				const a = Ai(o);
				r[a] || (Dw(i, o), (r[a] = !0));
			}
			return k.isArray(t) ? t.forEach(s) : s(t), this;
		}
	}
	fl.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
	k.freezeMethods(fl.prototype);
	k.freezeMethods(fl);
	const tn = fl;
	function fu(e, t) {
		const n = this || _f,
			r = t || n,
			i = tn.from(r.headers);
		let s = r.data;
		return (
			k.forEach(e, function (a) {
				s = a.call(n, s, i.normalize(), t ? t.status : void 0);
			}),
			i.normalize(),
			s
		);
	}
	function Cg(e) {
		return !!(e && e.__CANCEL__);
	}
	function js(e, t, n) {
		Y.call(this, e ?? 'canceled', Y.ERR_CANCELED, t, n), (this.name = 'CanceledError');
	}
	k.inherits(js, Y, { __CANCEL__: !0 });
	function Aw(e, t, n) {
		const r = n.config.validateStatus;
		!n.status || !r || r(n.status)
			? e(n)
			: t(
					new Y(
						'Request failed with status code ' + n.status,
						[Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
						n.config,
						n.request,
						n
					)
			  );
	}
	const Pw = Ht.isStandardBrowserEnv
		? (function () {
				return {
					write: function (n, r, i, s, o, a) {
						const l = [];
						l.push(n + '=' + encodeURIComponent(r)),
							k.isNumber(i) && l.push('expires=' + new Date(i).toGMTString()),
							k.isString(s) && l.push('path=' + s),
							k.isString(o) && l.push('domain=' + o),
							a === !0 && l.push('secure'),
							(document.cookie = l.join('; '));
					},
					read: function (n) {
						const r = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'));
						return r ? decodeURIComponent(r[3]) : null;
					},
					remove: function (n) {
						this.write(n, '', Date.now() - 864e5);
					},
				};
		  })()
		: (function () {
				return {
					write: function () {},
					read: function () {
						return null;
					},
					remove: function () {},
				};
		  })();
	function Lw(e) {
		return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
	}
	function Mw(e, t) {
		return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
	}
	function Ng(e, t) {
		return e && !Lw(t) ? Mw(e, t) : t;
	}
	const Uw = Ht.isStandardBrowserEnv
		? (function () {
				const t = /(msie|trident)/i.test(navigator.userAgent),
					n = document.createElement('a');
				let r;
				function i(s) {
					let o = s;
					return (
						t && (n.setAttribute('href', o), (o = n.href)),
						n.setAttribute('href', o),
						{
							href: n.href,
							protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
							host: n.host,
							search: n.search ? n.search.replace(/^\?/, '') : '',
							hash: n.hash ? n.hash.replace(/^#/, '') : '',
							hostname: n.hostname,
							port: n.port,
							pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
						}
					);
				}
				return (
					(r = i(window.location.href)),
					function (o) {
						const a = k.isString(o) ? i(o) : o;
						return a.protocol === r.protocol && a.host === r.host;
					}
				);
		  })()
		: (function () {
				return function () {
					return !0;
				};
		  })();
	function Bw(e) {
		const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
		return (t && t[1]) || '';
	}
	function Fw(e, t) {
		e = e || 10;
		const n = new Array(e),
			r = new Array(e);
		let i = 0,
			s = 0,
			o;
		return (
			(t = t !== void 0 ? t : 1e3),
			function (l) {
				const u = Date.now(),
					c = r[s];
				o || (o = u), (n[i] = l), (r[i] = u);
				let d = s,
					h = 0;
				for (; d !== i; ) (h += n[d++]), (d = d % e);
				if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
				const f = c && u - c;
				return f ? Math.round((h * 1e3) / f) : void 0;
			}
		);
	}
	function Tp(e, t) {
		let n = 0;
		const r = Fw(50, 250);
		return i => {
			const s = i.loaded,
				o = i.lengthComputable ? i.total : void 0,
				a = s - n,
				l = r(a),
				u = s <= o;
			n = s;
			const c = {
				loaded: s,
				total: o,
				progress: o ? s / o : void 0,
				bytes: a,
				rate: l || void 0,
				estimated: l && o && u ? (o - s) / l : void 0,
				event: i,
			};
			(c[t ? 'download' : 'upload'] = !0), e(c);
		};
	}
	const zw = typeof XMLHttpRequest < 'u',
		$w =
			zw &&
			function (e) {
				return new Promise(function (n, r) {
					let i = e.data;
					const s = tn.from(e.headers).normalize(),
						o = e.responseType;
					let a;
					function l() {
						e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener('abort', a);
					}
					k.isFormData(i) &&
						(Ht.isStandardBrowserEnv || Ht.isStandardBrowserWebWorkerEnv
							? s.setContentType(!1)
							: s.setContentType('multipart/form-data;', !1));
					let u = new XMLHttpRequest();
					if (e.auth) {
						const f = e.auth.username || '',
							_ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
						s.set('Authorization', 'Basic ' + btoa(f + ':' + _));
					}
					const c = Ng(e.baseURL, e.url);
					u.open(e.method.toUpperCase(), bg(c, e.params, e.paramsSerializer), !0), (u.timeout = e.timeout);
					function d() {
						if (!u) return;
						const f = tn.from('getAllResponseHeaders' in u && u.getAllResponseHeaders()),
							y = {
								data: !o || o === 'text' || o === 'json' ? u.responseText : u.response,
								status: u.status,
								statusText: u.statusText,
								headers: f,
								config: e,
								request: u,
							};
						Aw(
							function (p) {
								n(p), l();
							},
							function (p) {
								r(p), l();
							},
							y
						),
							(u = null);
					}
					if (
						('onloadend' in u
							? (u.onloadend = d)
							: (u.onreadystatechange = function () {
									!u ||
										u.readyState !== 4 ||
										(u.status === 0 && !(u.responseURL && u.responseURL.indexOf('file:') === 0)) ||
										setTimeout(d);
							  }),
						(u.onabort = function () {
							u && (r(new Y('Request aborted', Y.ECONNABORTED, e, u)), (u = null));
						}),
						(u.onerror = function () {
							r(new Y('Network Error', Y.ERR_NETWORK, e, u)), (u = null);
						}),
						(u.ontimeout = function () {
							let _ = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
							const y = e.transitional || kg;
							e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
								r(new Y(_, y.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, e, u)),
								(u = null);
						}),
						Ht.isStandardBrowserEnv)
					) {
						const f = (e.withCredentials || Uw(c)) && e.xsrfCookieName && Pw.read(e.xsrfCookieName);
						f && s.set(e.xsrfHeaderName, f);
					}
					i === void 0 && s.setContentType(null),
						'setRequestHeader' in u &&
							k.forEach(s.toJSON(), function (_, y) {
								u.setRequestHeader(y, _);
							}),
						k.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
						o && o !== 'json' && (u.responseType = e.responseType),
						typeof e.onDownloadProgress == 'function' && u.addEventListener('progress', Tp(e.onDownloadProgress, !0)),
						typeof e.onUploadProgress == 'function' &&
							u.upload &&
							u.upload.addEventListener('progress', Tp(e.onUploadProgress)),
						(e.cancelToken || e.signal) &&
							((a = f => {
								u && (r(!f || f.type ? new js(null, e, u) : f), u.abort(), (u = null));
							}),
							e.cancelToken && e.cancelToken.subscribe(a),
							e.signal && (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)));
					const h = Bw(c);
					if (h && Ht.protocols.indexOf(h) === -1) {
						r(new Y('Unsupported protocol ' + h + ':', Y.ERR_BAD_REQUEST, e));
						return;
					}
					u.send(i || null);
				});
			},
		qo = { http: fw, xhr: $w };
	k.forEach(qo, (e, t) => {
		if (e) {
			try {
				Object.defineProperty(e, 'name', { value: t });
			} catch {}
			Object.defineProperty(e, 'adapterName', { value: t });
		}
	});
	const Hw = {
		getAdapter: e => {
			e = k.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			for (let i = 0; i < t && ((n = e[i]), !(r = k.isString(n) ? qo[n.toLowerCase()] : n)); i++);
			if (!r)
				throw r === !1
					? new Y(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT')
					: new Error(k.hasOwnProp(qo, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
			if (!k.isFunction(r)) throw new TypeError('adapter is not a function');
			return r;
		},
		adapters: qo,
	};
	function hu(e) {
		if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new js(null, e);
	}
	function Rp(e) {
		return (
			hu(e),
			(e.headers = tn.from(e.headers)),
			(e.data = fu.call(e, e.transformRequest)),
			['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
				e.headers.setContentType('application/x-www-form-urlencoded', !1),
			Hw.getAdapter(e.adapter || _f.adapter)(e).then(
				function (r) {
					return hu(e), (r.data = fu.call(e, e.transformResponse, r)), (r.headers = tn.from(r.headers)), r;
				},
				function (r) {
					return (
						Cg(r) ||
							(hu(e),
							r &&
								r.response &&
								((r.response.data = fu.call(e, e.transformResponse, r.response)),
								(r.response.headers = tn.from(r.response.headers)))),
						Promise.reject(r)
					);
				}
			)
		);
	}
	const bp = e => (e instanceof tn ? e.toJSON() : e);
	function ii(e, t) {
		t = t || {};
		const n = {};
		function r(u, c, d) {
			return k.isPlainObject(u) && k.isPlainObject(c)
				? k.merge.call({ caseless: d }, u, c)
				: k.isPlainObject(c)
				? k.merge({}, c)
				: k.isArray(c)
				? c.slice()
				: c;
		}
		function i(u, c, d) {
			if (k.isUndefined(c)) {
				if (!k.isUndefined(u)) return r(void 0, u, d);
			} else return r(u, c, d);
		}
		function s(u, c) {
			if (!k.isUndefined(c)) return r(void 0, c);
		}
		function o(u, c) {
			if (k.isUndefined(c)) {
				if (!k.isUndefined(u)) return r(void 0, u);
			} else return r(void 0, c);
		}
		function a(u, c, d) {
			if (d in t) return r(u, c);
			if (d in e) return r(void 0, u);
		}
		const l = {
			url: s,
			method: s,
			data: s,
			baseURL: o,
			transformRequest: o,
			transformResponse: o,
			paramsSerializer: o,
			timeout: o,
			timeoutMessage: o,
			withCredentials: o,
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
			validateStatus: a,
			headers: (u, c) => i(bp(u), bp(c), !0),
		};
		return (
			k.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
				const d = l[c] || i,
					h = d(e[c], t[c], c);
				(k.isUndefined(h) && d !== a) || (n[c] = h);
			}),
			n
		);
	}
	const Og = '1.4.0',
		gf = {};
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
		gf[e] = function (r) {
			return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
		};
	});
	const kp = {};
	gf.transitional = function (t, n, r) {
		function i(s, o) {
			return '[Axios v' + Og + "] Transitional option '" + s + "'" + o + (r ? '. ' + r : '');
		}
		return (s, o, a) => {
			if (t === !1) throw new Y(i(o, ' has been removed' + (n ? ' in ' + n : '')), Y.ERR_DEPRECATED);
			return (
				n &&
					!kp[o] &&
					((kp[o] = !0),
					console.warn(i(o, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
				t ? t(s, o, a) : !0
			);
		};
	};
	function jw(e, t, n) {
		if (typeof e != 'object') throw new Y('options must be an object', Y.ERR_BAD_OPTION_VALUE);
		const r = Object.keys(e);
		let i = r.length;
		for (; i-- > 0; ) {
			const s = r[i],
				o = t[s];
			if (o) {
				const a = e[s],
					l = a === void 0 || o(a, s, e);
				if (l !== !0) throw new Y('option ' + s + ' must be ' + l, Y.ERR_BAD_OPTION_VALUE);
				continue;
			}
			if (n !== !0) throw new Y('Unknown option ' + s, Y.ERR_BAD_OPTION);
		}
	}
	const Pc = { assertOptions: jw, validators: gf },
		fn = Pc.validators;
	class Oa {
		constructor(t) {
			(this.defaults = t), (this.interceptors = { request: new Sp(), response: new Sp() });
		}
		request(t, n) {
			typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = ii(this.defaults, n));
			const { transitional: r, paramsSerializer: i, headers: s } = n;
			r !== void 0 &&
				Pc.assertOptions(
					r,
					{
						silentJSONParsing: fn.transitional(fn.boolean),
						forcedJSONParsing: fn.transitional(fn.boolean),
						clarifyTimeoutError: fn.transitional(fn.boolean),
					},
					!1
				),
				i != null &&
					(k.isFunction(i)
						? (n.paramsSerializer = { serialize: i })
						: Pc.assertOptions(i, { encode: fn.function, serialize: fn.function }, !0)),
				(n.method = (n.method || this.defaults.method || 'get').toLowerCase());
			let o;
			(o = s && k.merge(s.common, s[n.method])),
				o &&
					k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], _ => {
						delete s[_];
					}),
				(n.headers = tn.concat(o, s));
			const a = [];
			let l = !0;
			this.interceptors.request.forEach(function (y) {
				(typeof y.runWhen == 'function' && y.runWhen(n) === !1) ||
					((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
			});
			const u = [];
			this.interceptors.response.forEach(function (y) {
				u.push(y.fulfilled, y.rejected);
			});
			let c,
				d = 0,
				h;
			if (!l) {
				const _ = [Rp.bind(this), void 0];
				for (_.unshift.apply(_, a), _.push.apply(_, u), h = _.length, c = Promise.resolve(n); d < h; )
					c = c.then(_[d++], _[d++]);
				return c;
			}
			h = a.length;
			let f = n;
			for (d = 0; d < h; ) {
				const _ = a[d++],
					y = a[d++];
				try {
					f = _(f);
				} catch (S) {
					y.call(this, S);
					break;
				}
			}
			try {
				c = Rp.call(this, f);
			} catch (_) {
				return Promise.reject(_);
			}
			for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
			return c;
		}
		getUri(t) {
			t = ii(this.defaults, t);
			const n = Ng(t.baseURL, t.url);
			return bg(n, t.params, t.paramsSerializer);
		}
	}
	k.forEach(['delete', 'get', 'head', 'options'], function (t) {
		Oa.prototype[t] = function (n, r) {
			return this.request(ii(r || {}, { method: t, url: n, data: (r || {}).data }));
		};
	});
	k.forEach(['post', 'put', 'patch'], function (t) {
		function n(r) {
			return function (s, o, a) {
				return this.request(
					ii(a || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: s, data: o })
				);
			};
		}
		(Oa.prototype[t] = n()), (Oa.prototype[t + 'Form'] = n(!0));
	});
	const Vo = Oa;
	class yf {
		constructor(t) {
			if (typeof t != 'function') throw new TypeError('executor must be a function.');
			let n;
			this.promise = new Promise(function (s) {
				n = s;
			});
			const r = this;
			this.promise.then(i => {
				if (!r._listeners) return;
				let s = r._listeners.length;
				for (; s-- > 0; ) r._listeners[s](i);
				r._listeners = null;
			}),
				(this.promise.then = i => {
					let s;
					const o = new Promise(a => {
						r.subscribe(a), (s = a);
					}).then(i);
					return (
						(o.cancel = function () {
							r.unsubscribe(s);
						}),
						o
					);
				}),
				t(function (s, o, a) {
					r.reason || ((r.reason = new js(s, o, a)), n(r.reason));
				});
		}
		throwIfRequested() {
			if (this.reason) throw this.reason;
		}
		subscribe(t) {
			if (this.reason) {
				t(this.reason);
				return;
			}
			this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
		}
		unsubscribe(t) {
			if (!this._listeners) return;
			const n = this._listeners.indexOf(t);
			n !== -1 && this._listeners.splice(n, 1);
		}
		static source() {
			let t;
			return {
				token: new yf(function (i) {
					t = i;
				}),
				cancel: t,
			};
		}
	}
	const Gw = yf;
	function Yw(e) {
		return function (n) {
			return e.apply(null, n);
		};
	}
	function Ww(e) {
		return k.isObject(e) && e.isAxiosError === !0;
	}
	const Lc = {
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
	Object.entries(Lc).forEach(([e, t]) => {
		Lc[t] = e;
	});
	const qw = Lc;
	function Ig(e) {
		const t = new Vo(e),
			n = hg(Vo.prototype.request, t);
		return (
			k.extend(n, Vo.prototype, t, { allOwnKeys: !0 }),
			k.extend(n, t, null, { allOwnKeys: !0 }),
			(n.create = function (i) {
				return Ig(ii(e, i));
			}),
			n
		);
	}
	const ke = Ig(_f);
	ke.Axios = Vo;
	ke.CanceledError = js;
	ke.CancelToken = Gw;
	ke.isCancel = Cg;
	ke.VERSION = Og;
	ke.toFormData = cl;
	ke.AxiosError = Y;
	ke.Cancel = ke.CanceledError;
	ke.all = function (t) {
		return Promise.all(t);
	};
	ke.spread = Yw;
	ke.isAxiosError = Ww;
	ke.mergeConfig = ii;
	ke.AxiosHeaders = tn;
	ke.formToJSON = e => xg(k.isHTMLForm(e) ? new FormData(e) : e);
	ke.HttpStatusCode = qw;
	ke.default = ke;
	const Vw = ke,
		vf = { ANSWERED: 'answered', NEW_QUESTION: 'newQuestion', REJECTED: 'rejected', PROFILE: 'profile' };
	class Qw {
		constructor() {
			Zs(this, 'instance');
			Zs(this, 'BASE_URL', 'https://chatty.kr/api/v1');
			Zs(this, 'TIMEOUT', 5e3);
			this.instance = Vw.create({ baseURL: this.BASE_URL, timeout: this.TIMEOUT });
		}
		async get(t, n) {
			return (await this.instance.get(t, n)).data;
		}
		async post(t, n, r) {
			return (await this.instance.post(t, n, r)).data;
		}
	}
	const Ef = new Qw(),
		Kw = e =>
			R2({ enabled: !!e, queryFn: () => Ef.get(`/user/profile/${e}`), queryKey: [vf.PROFILE, e], cacheTime: 1e3 * 60 }),
		Zw = () => b2(e => Ef.post('/chatty', e)),
		Xw = e =>
			x2([vf.ANSWERED, e], ({ pageParam: t = 1 }) => Ef.get(`chatty/user/${e}?page=${t}`), {
				enabled: !!e,
				getNextPageParam: t => t.next,
				select: t => {
					var n;
					return (n = t == null ? void 0 : t.pages) == null ? void 0 : n.flatMap(r => (r == null ? void 0 : r.results));
				},
				staleTime: 0,
				cacheTime: 1e3 * 5,
			});
	function Jw(e, t) {
		const n = x.useRef(null),
			r = x.useCallback(
				(i, s) => {
					i.forEach(o => {
						o.isIntersecting && e(o, s);
					});
				},
				[e]
			);
		return (
			x.useEffect(() => {
				if (!n.current) return;
				const i = new IntersectionObserver(r, t);
				return i.observe(n.current), () => i.disconnect();
			}, [n, t, r]),
			n
		);
	}
	function e5(e) {
		const t = new Date(),
			n = new Date(e),
			r = 1e3 * 60 * 60 * 9,
			i = Math.floor((t.getTime() - (n.getTime() + r)) / 1e3 / 60);
		if (i < 1) return '방금전';
		if (i < 60) return `${i}분전`;
		const s = Math.floor(i / 60);
		if (s < 24) return `${s}시간전`;
		const o = Math.floor(i / 60 / 24);
		return o < 365 ? `${o}일전` : `${Math.floor(o / 365)}년전`;
	}
	const t5 = {
			home: 'M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z',
			chat: 'M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z',
			trophy:
				'M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z',
			user: 'M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z',
			heart:
				'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
			bookmark:
				'M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z',
			share:
				'M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z',
			arrowRight:
				'M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z',
			arrowLeft: 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18',
			plus: 'M12 4.5v15m7.5-7.5h-15',
			search: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
			ellipsisVertical:
				'M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z',
			test: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			arrowRightPlane: 'M8.25 4.5l7.5 7.5-7.5 7.5',
			uploadTray:
				'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5',
			exclamation: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
			close: 'M6 18L18 6M6 6l12 12',
			hamberger: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
		},
		yr = ({ fillColor: e, strokeColor: t, size: n, stroke: r, icon: i, className: s, style: o }) =>
			v('svg', {
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 24 24',
				fill: e || 'black',
				width: n,
				height: n,
				className: s,
				style: { zIndex: 10, ...o },
				stroke: t ?? 'black',
				strokeWidth: r ?? 1,
				children: v('path', { d: t5[i] }),
			}),
		n5 = ({ children: e }) =>
			v('div', { className: 'relative shadow-lg flex flex-col bg-white rounded-2xl p-16', children: e }),
		r5 = () =>
			v('div', {
				className: 'flex flex-row items-center gap-4 mb-8',
				children: v('span', { className: 'text-pink-dark text-xs font-semibold', children: '메인체티' }),
			}),
		i5 = () =>
			v(er, {
				children: v('button', {
					className: 'absolute right-16 top-16 z-10',
					children: v(yr, {
						size: '18px',
						fillColor: '#333333',
						strokeColor: '#333333',
						icon: 'ellipsisVertical',
						stroke: 3,
					}),
				}),
			}),
		s5 = ({ userId: e, isAnony: t }) =>
			L('span', {
				className: `chattyId text-xs ${t ? 'text-main-primary font-bold' : 'text-light-secondary font-normal'}`,
				children: ['@', e],
			}),
		o5 = ({ created_date: e }) =>
			L('div', {
				className: 'flex flex-row items-center text-light-secondary',
				children: [
					v('span', { className: 'mx-10', children: '·' }),
					v('span', { className: 'text-xs', children: e5(e) }),
				],
			}),
		a5 = ({ content: e }) => v('pre', { className: 'text-base font-medium text-light-primary', children: e }),
		l5 = ({ username: e }) =>
			v('div', { children: v('span', { className: 'font-bold text-base text-black mr-4', children: e }) }),
		Sf = ({ icon: e, count: t, color: n, stroke: r }) =>
			L('button', {
				className: 'flex flex-row items-center gap-4',
				children: [
					v(yr, { className: 'text-base', size: '16px', icon: e, fillColor: n, stroke: r || 2.5 }),
					t &&
						v('span', {
							className: 'font-normal text-sm text-light-primary',
							children: t > 9999 ? `${parseInt(String(t / 1e3), 10)}k` : t.toLocaleString(),
						}),
				],
			}),
		u5 = () => v(Sf, { icon: 'heart', count: 3125, color: 'white' }),
		c5 = () => v(Sf, { icon: 'bookmark', count: 31235, color: 'white' }),
		d5 = () => v(Sf, { icon: 'uploadTray', color: 'white' }),
		f5 = () =>
			L('div', {
				className: 'flex flex-row items-center justify-between px-28 mt-16',
				children: [v(u5, {}), v(c5, {}), v(d5, {})],
			}),
		Ke = Object.assign(() => null, {
			Container: n5,
			Pin: r5,
			More: i5,
			UserId: s5,
			Time: o5,
			Content: a5,
			Username: l5,
			Footer: f5,
		}),
		h5 = ({ isAnony: e = !0, created_date: t, content: n, answer_content: r, profile_image: i, username: s }) =>
			L(Ke.Container, {
				children: [
					v(Ke.More, {}),
					e
						? L(er, {
								children: [
									L('div', {
										className: 'flex items-center mb-4',
										children: [
											v('span', { className: 'text-main-primary text-xs pr-4', children: 'To ' }),
											v(Ke.UserId, { userId: 'rre1102', isAnony: !0 }),
										],
									}),
									v(Ke.Content, { content: n }),
								],
						  })
						: v(er, {
								children: L('div', {
									className: 'flex ',
									children: [
										v('div', { className: 'pr-8', children: v(Ic, { size: 48, src: i }) }),
										L('div', {
											className: 'flex flex-col',
											children: [
												L('div', {
													className: 'flex flex-row items-start',
													children: [
														v(Ke.Username, { username: s }),
														v(Ke.UserId, { userId: 'carrot-09', isAnony: !1 }),
														v(Ke.Time, { created_date: t }),
													],
												}),
												v('div', { children: v(Ke.Content, { content: n }) }),
											],
										}),
									],
								}),
						  }),
					v(er, {
						children: L('div', {
							className: 'flex flex-row items-start mt-16',
							children: [
								v('div', {
									className: 'rotate-270 mr-8',
									children: v(yr, { size: '1rem', icon: 'arrowRight', fillColor: '#FE7C58', strokeColor: '#FE7C58' }),
								}),
								L('div', {
									className: 'flex flex-row items-start',
									children: [
										v('div', { className: 'mr-8', children: v(Ic, { size: 48, src: i }) }),
										L('div', {
											className: 'flex flex-col',
											children: [
												L('div', {
													className: 'flex flex-row items-center',
													children: [
														v(Ke.Username, { username: s }),
														v(Ke.UserId, { userId: 'carrot-09', isAnony: !1 }),
														v(Ke.Time, { created_date: t }),
													],
												}),
												v('div', { children: v(Ke.Content, { content: r }) }),
											],
										}),
									],
								}),
							],
						}),
					}),
					v(Ke.Footer, {}),
				],
			}),
		p5 = ({ username: e, profile_image: t }) => {
			const { data: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: s } = Xw(e),
				o = () => {
					i && r();
				};
			if (n === void 0) return null;
			const a = n,
				l = Jw(o);
			return (a == null ? void 0 : a.length) === 0
				? v('ul', {
						className: 'flex flex-col gap-16 bg-background-inner py-16 px-20',
						children: L('div', {
							className: 'min-h-200 pt-16 w-full h-full flex items-center justify-center',
							children: [
								v('div', {
									className: 'inner_wrap',
									children: L('div', {
										className: 'no_answer',
										children: [
											v('p', {
												className: 'font-medium text-16 text-light-primary text-center mb-12',
												children: '아직 받은 질문이 없어요!',
											}),
											v('button', {
												className: 'linear-gradiant to-blue-500 py-12 px-16 shadow rounded-3xl',
												children: v('span', {
													className: 'font-semibold text-16 text-dark-primary',
													children: '프로필 공유하고 친구 찾기',
												}),
											}),
										],
									}),
								}),
								v('div', { ref: l }),
							],
						}),
				  })
				: L('ul', {
						className: 'flex flex-col gap-16 bg-background-inner py-16 px-20',
						children: [
							a == null
								? void 0
								: a.map((u, c) =>
										v(
											h5,
											{
												isAnony: !0,
												username: e,
												content: u.content,
												answer_content: u.answer_content,
												created_date: u.created_date,
												profile_image: t,
											},
											c
										)
								  ),
							s && v(cg, {}),
							v('div', { ref: l }),
						],
				  });
		},
		m5 = ({ icon: e, label: t, textColor: n, backgroundColor: r, onClick: i }) =>
			L('button', {
				onClick: i,
				style: { background: r },
				className:
					'absolute z-10 flex px-20 gap-4 items-center justify-center drop-shadow-xl h-48 bottom-32 right-15 rounded-[99px]',
				children: [e, v('p', { style: { color: n }, className: 'font-medium', children: t })],
			});
	function Dg(e) {
		var t,
			n,
			r = '';
		if (typeof e == 'string' || typeof e == 'number') r += e;
		else if (typeof e == 'object')
			if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Dg(e[t])) && (r && (r += ' '), (r += n));
			else for (t in e) e[t] && (r && (r += ' '), (r += t));
		return r;
	}
	function Tn() {
		for (var e, t, n = 0, r = ''; n < arguments.length; )
			(e = arguments[n++]) && (t = Dg(e)) && (r && (r += ' '), (r += t));
		return r;
	}
	const Zi = e => typeof e == 'number' && !isNaN(e),
		dr = e => typeof e == 'string',
		Je = e => typeof e == 'function',
		Qo = e => (dr(e) || Je(e) ? e : null),
		pu = e => x.isValidElement(e) || dr(e) || Je(e) || Zi(e);
	function _5(e, t, n) {
		n === void 0 && (n = 300);
		const { scrollHeight: r, style: i } = e;
		requestAnimationFrame(() => {
			(i.minHeight = 'initial'),
				(i.height = r + 'px'),
				(i.transition = `all ${n}ms`),
				requestAnimationFrame(() => {
					(i.height = '0'), (i.padding = '0'), (i.margin = '0'), setTimeout(t, n);
				});
		});
	}
	function hl(e) {
		let { enter: t, exit: n, appendPosition: r = !1, collapse: i = !0, collapseDuration: s = 300 } = e;
		return function (o) {
			let { children: a, position: l, preventExitTransition: u, done: c, nodeRef: d, isIn: h } = o;
			const f = r ? `${t}--${l}` : t,
				_ = r ? `${n}--${l}` : n,
				y = x.useRef(0);
			return (
				x.useLayoutEffect(() => {
					const S = d.current,
						p = f.split(' '),
						m = g => {
							g.target === d.current &&
								(S.dispatchEvent(new Event('d')),
								S.removeEventListener('animationend', m),
								S.removeEventListener('animationcancel', m),
								y.current === 0 && g.type !== 'animationcancel' && S.classList.remove(...p));
						};
					S.classList.add(...p), S.addEventListener('animationend', m), S.addEventListener('animationcancel', m);
				}, []),
				x.useEffect(() => {
					const S = d.current,
						p = () => {
							S.removeEventListener('animationend', p), i ? _5(S, c, s) : c();
						};
					h || (u ? p() : ((y.current = 1), (S.className += ` ${_}`), S.addEventListener('animationend', p)));
				}, [h]),
				X.createElement(X.Fragment, null, a)
			);
		};
	}
	function xp(e, t) {
		return {
			content: e.content,
			containerId: e.props.containerId,
			id: e.props.toastId,
			theme: e.props.theme,
			type: e.props.type,
			data: e.props.data || {},
			isLoading: e.props.isLoading,
			icon: e.props.icon,
			status: t,
		};
	}
	const mt = {
			list: new Map(),
			emitQueue: new Map(),
			on(e, t) {
				return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
			},
			off(e, t) {
				if (t) {
					const n = this.list.get(e).filter(r => r !== t);
					return this.list.set(e, n), this;
				}
				return this.list.delete(e), this;
			},
			cancelEmit(e) {
				const t = this.emitQueue.get(e);
				return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
			},
			emit(e) {
				this.list.has(e) &&
					this.list.get(e).forEach(t => {
						const n = setTimeout(() => {
							t(...[].slice.call(arguments, 1));
						}, 0);
						this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n);
					});
			},
		},
		_o = e => {
			let { theme: t, type: n, ...r } = e;
			return X.createElement('svg', {
				viewBox: '0 0 24 24',
				width: '100%',
				height: '100%',
				fill: t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
				...r,
			});
		},
		mu = {
			info: function (e) {
				return X.createElement(
					_o,
					{ ...e },
					X.createElement('path', {
						d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
					})
				);
			},
			warning: function (e) {
				return X.createElement(
					_o,
					{ ...e },
					X.createElement('path', {
						d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
					})
				);
			},
			success: function (e) {
				return X.createElement(
					_o,
					{ ...e },
					X.createElement('path', {
						d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
					})
				);
			},
			error: function (e) {
				return X.createElement(
					_o,
					{ ...e },
					X.createElement('path', {
						d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
					})
				);
			},
			spinner: function () {
				return X.createElement('div', { className: 'Toastify__spinner' });
			},
		};
	function g5(e) {
		const [, t] = x.useReducer(f => f + 1, 0),
			[n, r] = x.useState([]),
			i = x.useRef(null),
			s = x.useRef(new Map()).current,
			o = f => n.indexOf(f) !== -1,
			a = x.useRef({
				toastKey: 1,
				displayedToast: 0,
				count: 0,
				queue: [],
				props: e,
				containerId: null,
				isToastActive: o,
				getToast: f => s.get(f),
			}).current;
		function l(f) {
			let { containerId: _ } = f;
			const { limit: y } = a.props;
			!y || (_ && a.containerId !== _) || ((a.count -= a.queue.length), (a.queue = []));
		}
		function u(f) {
			r(_ => (f == null ? [] : _.filter(y => y !== f)));
		}
		function c() {
			const { toastContent: f, toastProps: _, staleId: y } = a.queue.shift();
			h(f, _, y);
		}
		function d(f, _) {
			let { delay: y, staleId: S, ...p } = _;
			if (
				!pu(f) ||
				(function (H) {
					return (
						!i.current ||
						(a.props.enableMultiContainer && H.containerId !== a.props.containerId) ||
						(s.has(H.toastId) && H.updateId == null)
					);
				})(p)
			)
				return;
			const { toastId: m, updateId: g, data: E } = p,
				{ props: T } = a,
				b = () => u(m),
				R = g == null;
			R && a.count++;
			const w = {
				...T,
				style: T.toastStyle,
				key: a.toastKey++,
				...Object.fromEntries(
					Object.entries(p).filter(H => {
						let [I, U] = H;
						return U != null;
					})
				),
				toastId: m,
				updateId: g,
				data: E,
				closeToast: b,
				isIn: !1,
				className: Qo(p.className || T.toastClassName),
				bodyClassName: Qo(p.bodyClassName || T.bodyClassName),
				progressClassName: Qo(p.progressClassName || T.progressClassName),
				autoClose: !p.isLoading && ((A = p.autoClose), (O = T.autoClose), A === !1 || (Zi(A) && A > 0) ? A : O),
				deleteToast() {
					const H = xp(s.get(m), 'removed');
					s.delete(m), mt.emit(4, H);
					const I = a.queue.length;
					if (((a.count = m == null ? a.count - a.displayedToast : a.count - 1), a.count < 0 && (a.count = 0), I > 0)) {
						const U = m == null ? a.props.limit : 1;
						if (I === 1 || U === 1) a.displayedToast++, c();
						else {
							const Q = U > I ? I : U;
							a.displayedToast = Q;
							for (let G = 0; G < Q; G++) c();
						}
					} else t();
				},
			};
			var A, O;
			(w.iconOut = (function (H) {
				let { theme: I, type: U, isLoading: Q, icon: G } = H,
					ae = null;
				const D = { theme: I, type: U };
				return (
					G === !1 ||
						(Je(G)
							? (ae = G(D))
							: x.isValidElement(G)
							? (ae = x.cloneElement(G, D))
							: dr(G) || Zi(G)
							? (ae = G)
							: Q
							? (ae = mu.spinner())
							: (M => M in mu)(U) && (ae = mu[U](D))),
					ae
				);
			})(w)),
				Je(p.onOpen) && (w.onOpen = p.onOpen),
				Je(p.onClose) && (w.onClose = p.onClose),
				(w.closeButton = T.closeButton),
				p.closeButton === !1 || pu(p.closeButton)
					? (w.closeButton = p.closeButton)
					: p.closeButton === !0 && (w.closeButton = !pu(T.closeButton) || T.closeButton);
			let B = f;
			x.isValidElement(f) && !dr(f.type)
				? (B = x.cloneElement(f, { closeToast: b, toastProps: w, data: E }))
				: Je(f) && (B = f({ closeToast: b, toastProps: w, data: E })),
				T.limit && T.limit > 0 && a.count > T.limit && R
					? a.queue.push({ toastContent: B, toastProps: w, staleId: S })
					: Zi(y)
					? setTimeout(() => {
							h(B, w, S);
					  }, y)
					: h(B, w, S);
		}
		function h(f, _, y) {
			const { toastId: S } = _;
			y && s.delete(y);
			const p = { content: f, props: _ };
			s.set(S, p),
				r(m => [...m, S].filter(g => g !== y)),
				mt.emit(4, xp(p, p.props.updateId == null ? 'added' : 'updated'));
		}
		return (
			x.useEffect(
				() => (
					(a.containerId = e.containerId),
					mt
						.cancelEmit(3)
						.on(0, d)
						.on(1, f => i.current && u(f))
						.on(5, l)
						.emit(2, a),
					() => {
						s.clear(), mt.emit(3, a);
					}
				),
				[]
			),
			x.useEffect(() => {
				(a.props = e), (a.isToastActive = o), (a.displayedToast = n.length);
			}),
			{
				getToastToRender: function (f) {
					const _ = new Map(),
						y = Array.from(s.values());
					return (
						e.newestOnTop && y.reverse(),
						y.forEach(S => {
							const { position: p } = S.props;
							_.has(p) || _.set(p, []), _.get(p).push(S);
						}),
						Array.from(_, S => f(S[0], S[1]))
					);
				},
				containerRef: i,
				isToastActive: o,
			}
		);
	}
	function Cp(e) {
		return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
	}
	function Np(e) {
		return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
	}
	function y5(e) {
		const [t, n] = x.useState(!1),
			[r, i] = x.useState(!1),
			s = x.useRef(null),
			o = x.useRef({
				start: 0,
				x: 0,
				y: 0,
				delta: 0,
				removalDistance: 0,
				canCloseOnClick: !0,
				canDrag: !1,
				boundingRect: null,
				didMove: !1,
			}).current,
			a = x.useRef(e),
			{ autoClose: l, pauseOnHover: u, closeToast: c, onClick: d, closeOnClick: h } = e;
		function f(E) {
			if (e.draggable) {
				E.nativeEvent.type === 'touchstart' && E.nativeEvent.preventDefault(),
					(o.didMove = !1),
					document.addEventListener('mousemove', p),
					document.addEventListener('mouseup', m),
					document.addEventListener('touchmove', p),
					document.addEventListener('touchend', m);
				const T = s.current;
				(o.canCloseOnClick = !0),
					(o.canDrag = !0),
					(o.boundingRect = T.getBoundingClientRect()),
					(T.style.transition = ''),
					(o.x = Cp(E.nativeEvent)),
					(o.y = Np(E.nativeEvent)),
					e.draggableDirection === 'x'
						? ((o.start = o.x), (o.removalDistance = T.offsetWidth * (e.draggablePercent / 100)))
						: ((o.start = o.y),
						  (o.removalDistance =
								T.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100)));
			}
		}
		function _(E) {
			if (o.boundingRect) {
				const { top: T, bottom: b, left: R, right: w } = o.boundingRect;
				E.nativeEvent.type !== 'touchend' && e.pauseOnHover && o.x >= R && o.x <= w && o.y >= T && o.y <= b ? S() : y();
			}
		}
		function y() {
			n(!0);
		}
		function S() {
			n(!1);
		}
		function p(E) {
			const T = s.current;
			o.canDrag &&
				T &&
				((o.didMove = !0),
				t && S(),
				(o.x = Cp(E)),
				(o.y = Np(E)),
				(o.delta = e.draggableDirection === 'x' ? o.x - o.start : o.y - o.start),
				o.start !== o.x && (o.canCloseOnClick = !1),
				(T.style.transform = `translate${e.draggableDirection}(${o.delta}px)`),
				(T.style.opacity = '' + (1 - Math.abs(o.delta / o.removalDistance))));
		}
		function m() {
			document.removeEventListener('mousemove', p),
				document.removeEventListener('mouseup', m),
				document.removeEventListener('touchmove', p),
				document.removeEventListener('touchend', m);
			const E = s.current;
			if (o.canDrag && o.didMove && E) {
				if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance)) return i(!0), void e.closeToast();
				(E.style.transition = 'transform 0.2s, opacity 0.2s'),
					(E.style.transform = `translate${e.draggableDirection}(0)`),
					(E.style.opacity = '1');
			}
		}
		x.useEffect(() => {
			a.current = e;
		}),
			x.useEffect(
				() => (
					s.current && s.current.addEventListener('d', y, { once: !0 }),
					Je(e.onOpen) && e.onOpen(x.isValidElement(e.children) && e.children.props),
					() => {
						const E = a.current;
						Je(E.onClose) && E.onClose(x.isValidElement(E.children) && E.children.props);
					}
				),
				[]
			),
			x.useEffect(
				() => (
					e.pauseOnFocusLoss &&
						(document.hasFocus() || S(), window.addEventListener('focus', y), window.addEventListener('blur', S)),
					() => {
						e.pauseOnFocusLoss && (window.removeEventListener('focus', y), window.removeEventListener('blur', S));
					}
				),
				[e.pauseOnFocusLoss]
			);
		const g = { onMouseDown: f, onTouchStart: f, onMouseUp: _, onTouchEnd: _ };
		return (
			l && u && ((g.onMouseEnter = S), (g.onMouseLeave = y)),
			h &&
				(g.onClick = E => {
					d && d(E), o.canCloseOnClick && c();
				}),
			{ playToast: y, pauseToast: S, isRunning: t, preventExitTransition: r, toastRef: s, eventHandlers: g }
		);
	}
	function Ag(e) {
		let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
		return X.createElement(
			'button',
			{
				className: `Toastify__close-button Toastify__close-button--${n}`,
				type: 'button',
				onClick: i => {
					i.stopPropagation(), t(i);
				},
				'aria-label': r,
			},
			X.createElement(
				'svg',
				{ 'aria-hidden': 'true', viewBox: '0 0 14 16' },
				X.createElement('path', {
					fillRule: 'evenodd',
					d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
				})
			)
		);
	}
	function v5(e) {
		let {
			delay: t,
			isRunning: n,
			closeToast: r,
			type: i = 'default',
			hide: s,
			className: o,
			style: a,
			controlledProgress: l,
			progress: u,
			rtl: c,
			isIn: d,
			theme: h,
		} = e;
		const f = s || (l && u === 0),
			_ = { ...a, animationDuration: `${t}ms`, animationPlayState: n ? 'running' : 'paused', opacity: f ? 0 : 1 };
		l && (_.transform = `scaleX(${u})`);
		const y = Tn(
				'Toastify__progress-bar',
				l ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
				`Toastify__progress-bar-theme--${h}`,
				`Toastify__progress-bar--${i}`,
				{ 'Toastify__progress-bar--rtl': c }
			),
			S = Je(o) ? o({ rtl: c, type: i, defaultClassName: y }) : Tn(y, o);
		return X.createElement('div', {
			role: 'progressbar',
			'aria-hidden': f ? 'true' : 'false',
			'aria-label': 'notification timer',
			className: S,
			style: _,
			[l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
				l && u < 1
					? null
					: () => {
							d && r();
					  },
		});
	}
	const E5 = e => {
			const { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: i } = y5(e),
				{
					closeButton: s,
					children: o,
					autoClose: a,
					onClick: l,
					type: u,
					hideProgressBar: c,
					closeToast: d,
					transition: h,
					position: f,
					className: _,
					style: y,
					bodyClassName: S,
					bodyStyle: p,
					progressClassName: m,
					progressStyle: g,
					updateId: E,
					role: T,
					progress: b,
					rtl: R,
					toastId: w,
					deleteToast: A,
					isIn: O,
					isLoading: B,
					iconOut: H,
					closeOnClick: I,
					theme: U,
				} = e,
				Q = Tn(
					'Toastify__toast',
					`Toastify__toast-theme--${U}`,
					`Toastify__toast--${u}`,
					{ 'Toastify__toast--rtl': R },
					{ 'Toastify__toast--close-on-click': I }
				),
				G = Je(_) ? _({ rtl: R, position: f, type: u, defaultClassName: Q }) : Tn(Q, _),
				ae = !!b || !a,
				D = { closeToast: d, type: u, theme: U };
			let M = null;
			return (
				s === !1 || (M = Je(s) ? s(D) : x.isValidElement(s) ? x.cloneElement(s, D) : Ag(D)),
				X.createElement(
					h,
					{ isIn: O, done: A, position: f, preventExitTransition: n, nodeRef: r },
					X.createElement(
						'div',
						{ id: w, onClick: l, className: G, ...i, style: y, ref: r },
						X.createElement(
							'div',
							{ ...(O && { role: T }), className: Je(S) ? S({ type: u }) : Tn('Toastify__toast-body', S), style: p },
							H != null &&
								X.createElement(
									'div',
									{ className: Tn('Toastify__toast-icon', { 'Toastify--animate-icon Toastify__zoom-enter': !B }) },
									H
								),
							X.createElement('div', null, o)
						),
						M,
						X.createElement(v5, {
							...(E && !ae ? { key: `pb-${E}` } : {}),
							rtl: R,
							theme: U,
							delay: a,
							isRunning: t,
							isIn: O,
							closeToast: d,
							hide: c,
							type: u,
							style: g,
							className: m,
							controlledProgress: ae,
							progress: b || 0,
						})
					)
				)
			);
		},
		pl = function (e, t) {
			return (
				t === void 0 && (t = !1),
				{
					enter: `Toastify--animate Toastify__${e}-enter`,
					exit: `Toastify--animate Toastify__${e}-exit`,
					appendPosition: t,
				}
			);
		},
		S5 = hl(pl('bounce', !0));
	hl(pl('slide', !0));
	hl(pl('zoom'));
	hl(pl('flip'));
	const Mc = x.forwardRef((e, t) => {
		const { getToastToRender: n, containerRef: r, isToastActive: i } = g5(e),
			{ className: s, style: o, rtl: a, containerId: l } = e;
		function u(c) {
			const d = Tn('Toastify__toast-container', `Toastify__toast-container--${c}`, {
				'Toastify__toast-container--rtl': a,
			});
			return Je(s) ? s({ position: c, rtl: a, defaultClassName: d }) : Tn(d, Qo(s));
		}
		return (
			x.useEffect(() => {
				t && (t.current = r.current);
			}, []),
			X.createElement(
				'div',
				{ ref: r, className: 'Toastify', id: l },
				n((c, d) => {
					const h = d.length ? { ...o } : { ...o, pointerEvents: 'none' };
					return X.createElement(
						'div',
						{ className: u(c), style: h, key: `container-${c}` },
						d.map((f, _) => {
							let { content: y, props: S } = f;
							return X.createElement(
								E5,
								{
									...S,
									isIn: i(S.toastId),
									style: { ...S.style, '--nth': _ + 1, '--len': d.length },
									key: `toast-${S.key}`,
								},
								y
							);
						})
					);
				})
			)
		);
	});
	(Mc.displayName = 'ToastContainer'),
		(Mc.defaultProps = {
			position: 'top-right',
			transition: S5,
			autoClose: 5e3,
			closeButton: Ag,
			pauseOnHover: !0,
			pauseOnFocusLoss: !0,
			closeOnClick: !0,
			draggable: !0,
			draggablePercent: 80,
			draggableDirection: 'x',
			role: 'alert',
			theme: 'light',
		});
	let _u,
		qn = new Map(),
		Fi = [],
		w5 = 1;
	function Pg() {
		return '' + w5++;
	}
	function T5(e) {
		return e && (dr(e.toastId) || Zi(e.toastId)) ? e.toastId : Pg();
	}
	function Xi(e, t) {
		return qn.size > 0 ? mt.emit(0, e, t) : Fi.push({ content: e, options: t }), t.toastId;
	}
	function Ia(e, t) {
		return { ...t, type: (t && t.type) || e, toastId: T5(t) };
	}
	function go(e) {
		return (t, n) => Xi(t, Ia(e, n));
	}
	function se(e, t) {
		return Xi(e, Ia('default', t));
	}
	(se.loading = (e, t) =>
		Xi(e, Ia('default', { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }))),
		(se.promise = function (e, t, n) {
			let r,
				{ pending: i, error: s, success: o } = t;
			i && (r = dr(i) ? se.loading(i, n) : se.loading(i.render, { ...n, ...i }));
			const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
				l = (c, d, h) => {
					if (d == null) return void se.dismiss(r);
					const f = { type: c, ...a, ...n, data: h },
						_ = dr(d) ? { render: d } : d;
					return r ? se.update(r, { ...f, ..._ }) : se(_.render, { ...f, ..._ }), h;
				},
				u = Je(e) ? e() : e;
			return u.then(c => l('success', o, c)).catch(c => l('error', s, c)), u;
		}),
		(se.success = go('success')),
		(se.info = go('info')),
		(se.error = go('error')),
		(se.warning = go('warning')),
		(se.warn = se.warning),
		(se.dark = (e, t) => Xi(e, Ia('default', { theme: 'dark', ...t }))),
		(se.dismiss = e => {
			qn.size > 0 ? mt.emit(1, e) : (Fi = Fi.filter(t => e != null && t.options.toastId !== e));
		}),
		(se.clearWaitingQueue = function (e) {
			return e === void 0 && (e = {}), mt.emit(5, e);
		}),
		(se.isActive = e => {
			let t = !1;
			return (
				qn.forEach(n => {
					n.isToastActive && n.isToastActive(e) && (t = !0);
				}),
				t
			);
		}),
		(se.update = function (e, t) {
			t === void 0 && (t = {}),
				setTimeout(() => {
					const n = (function (r, i) {
						let { containerId: s } = i;
						const o = qn.get(s || _u);
						return o && o.getToast(r);
					})(e, t);
					if (n) {
						const { props: r, content: i } = n,
							s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Pg() };
						s.toastId !== e && (s.staleId = e);
						const o = s.render || i;
						delete s.render, Xi(o, s);
					}
				}, 0);
		}),
		(se.done = e => {
			se.update(e, { progress: 1 });
		}),
		(se.onChange = e => (
			mt.on(4, e),
			() => {
				mt.off(4, e);
			}
		)),
		(se.POSITION = {
			TOP_LEFT: 'top-left',
			TOP_RIGHT: 'top-right',
			TOP_CENTER: 'top-center',
			BOTTOM_LEFT: 'bottom-left',
			BOTTOM_RIGHT: 'bottom-right',
			BOTTOM_CENTER: 'bottom-center',
		}),
		(se.TYPE = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }),
		mt
			.on(2, e => {
				(_u = e.containerId || e),
					qn.set(_u, e),
					Fi.forEach(t => {
						mt.emit(0, t.content, t.options);
					}),
					(Fi = []);
			})
			.on(3, e => {
				qn.delete(e.containerId || e), qn.size === 0 && mt.off(0).off(1).off(5);
			});
	const R5 = () => {
			const e = {
				position: 'bottom-center',
				autoClose: 1e3,
				hideProgressBar: !0,
				closeOnClick: !0,
				pauseOnHover: !1,
				draggable: !0,
				progress: void 0,
				className: 'custom-toast',
				bodyClassName: 'custom-toast',
				theme: 'dark',
				closeButton: !1,
			};
			return ({ message: t, type: n }) => {
				n === 'success' && se.success(t, e), n === 'error' && se.error(t, e);
			};
		},
		b5 = ({ toggleOpen: e }) => {
			const t = ff(),
				{ username: n = '' } = Ym(),
				r = R5(),
				[i, s] = x.useState(''),
				{ mutate: o } = Zw(),
				a = () => {
					o(
						{ content: i, target_profile: n },
						{
							onSuccess: () => {
								r({ type: 'success', message: '질문이 전송되었습니다!' }), e(), t.invalidateQueries([vf.PROFILE, n]);
							},
							onError: l => {
								var d;
								const u = l,
									c = (d = u == null ? void 0 : u.response) == null ? void 0 : d.data;
								r({ type: 'error', message: c || '알수없는 오류가 발생했습니다!' });
							},
						}
					);
				};
			return v(dg, {
				onClick: e,
				children: L('div', {
					className: 'absolute z-40 bottom-0 w-screen h-340 bg-white rounded-t-2xl p-20 flex flex-col gap-16',
					children: [
						L('div', {
							className: 'flex justify-between items-center',
							children: [
								v('p', { className: 'font-bold text-20 text-light-primary', children: '질문 작성' }),
								v('button', {
									onClick: e,
									children: v(yr, { size: '24px', icon: 'close', stroke: 2, strokeColor: '#333333' }),
								}),
							],
						}),
						L('div', {
							className: 'flex items-center gap-4',
							children: [
								v('span', { className: 'text-main-primary text-xs', children: 'To' }),
								v(Ke.UserId, { userId: n, isAnony: !0 }),
							],
						}),
						v('div', {
							children: v('textarea', {
								className: 'h-120 w-full border-none outline-0 resize-none',
								value: i,
								onChange: l => s(l.target.value),
								placeholder: `${n} 에게 질문하기`,
								maxLength: 200,
							}),
						}),
						v('button', {
							onClick: a,
							disabled: i.length === 0,
							className:
								'absolute bottom-20 w-11/12 self-center h-60 bg-main-primary flex items-center justify-center rounded-2xl',
							children: v('span', { className: 'text-white font-semibold font-normal', children: '확인' }),
						}),
					],
				}),
			});
		},
		k5 = () => {
			const { username: e = '' } = Ym(),
				{ data: t } = Kw(e),
				[n] = x.useState(0),
				[r, i] = Na(!1),
				[s, o] = Na(!1),
				a = l => {
					l.target.textContent !== '답변 완료' && o();
				};
			return t
				? L('div', {
						className: 'w-screen h-screen overflow-x-hidden',
						children: [
							v(N2, {
								question_count: t.question_count,
								response_rate: t.response_rate,
								username: t.username,
								profile_message: t.profile_message,
								profile_image: t.profile_image,
								follower: t.follower,
								following: t.following,
								profile_name: t.profile_name,
								background_image: t.background_image,
								user_id: t.user_id,
								views: t.views,
							}),
							v('div', {
								className: 'sticky top-0 z-30 pt-12 bg-white shadow-md',
								children: v(I2, { activeIdx: n, tabs: ['답변 완료', '새질문', '거절 질문'], onClick: a }),
							}),
							v(p5, { username: e, profile_image: t.profile_image }),
							v(m5, {
								icon: v(yr, { size: '24px', icon: 'plus', stroke: 2.5, strokeColor: 'white' }),
								label: '질문하기',
								textColor: 'white',
								backgroundColor: '#FE7C58',
								onClick: i,
							}),
							r && v(b5, { toggleOpen: i }),
							s && v(fg, { toggleAppOpen: o }),
						],
				  })
				: null;
		},
		x5 = () =>
			v(Mc, {
				position: 'bottom-center',
				autoClose: 1e3,
				hideProgressBar: !0,
				newestOnTop: !1,
				closeOnClick: !0,
				rtl: !1,
				pauseOnFocusLoss: !0,
				draggable: !0,
				pauseOnHover: !1,
				style: {
					textAlign: 'center',
					bottom: '16px',
					left: '50%',
					transform: 'translateX(-50%)',
					opacity: 0.7,
					width: '90vw',
					fontSize: '1rem',
					fontWeight: 500,
					borderRadius: '8px',
				},
			}),
		C5 = '/assets/phone-preview-left-126bd57d.png',
		N5 = '/assets/phone-preview-right-307d410f.png',
		O5 = () =>
			L('svg', {
				id: 'KR',
				xmlns: 'http://www.w3.org/2000/svg',
				width: 129.70071,
				height: 40,
				viewBox: '0 0 129.70071 40',
				children: [
					v('title', { children: 'Download_on_the_App_Store_Badge_KR_RGB_blk_100317' }),
					L('g', {
						children: [
							L('g', {
								children: [
									v('path', {
										d: 'M120.17141,0H9.53468c-.3667,0-.729,0-1.09473.002-.30615.002-.60986.00781-.91895.0127A13.21476,13.21476,0,0,0,5.5171.19141a6.66509,6.66509,0,0,0-1.90088.627A6.43779,6.43779,0,0,0,1.99757,1.99707,6.25844,6.25844,0,0,0,.81935,3.61816a6.60119,6.60119,0,0,0-.625,1.90332,12.993,12.993,0,0,0-.1792,2.002C.00587,7.83008.00489,8.1377,0,8.44434V31.5586c.00489.3105.00587.6113.01515.9219a12.99232,12.99232,0,0,0,.1792,2.0019,6.58756,6.58756,0,0,0,.625,1.9043A6.20778,6.20778,0,0,0,1.99757,38.001a6.27445,6.27445,0,0,0,1.61865,1.1787,6.70082,6.70082,0,0,0,1.90088.6308,13.45514,13.45514,0,0,0,2.0039.1768c.30909.0068.6128.0107.91895.0107C8.80567,40,9.168,40,9.53468,40H120.17141c.3594,0,.7246,0,1.084-.002.3047,0,.6172-.0039.9219-.0107a13.279,13.279,0,0,0,2-.1768,6.80432,6.80432,0,0,0,1.9082-.6308,6.27742,6.27742,0,0,0,1.6172-1.1787,6.39482,6.39482,0,0,0,1.1816-1.6143,6.60413,6.60413,0,0,0,.6191-1.9043,13.50643,13.50643,0,0,0,.1856-2.0019c.0039-.3106.0039-.6114.0039-.9219.0078-.3633.0078-.7246.0078-1.0938V9.53613c0-.36621,0-.72949-.0078-1.09179,0-.30664,0-.61426-.0039-.9209a13.5071,13.5071,0,0,0-.1856-2.002,6.6177,6.6177,0,0,0-.6191-1.90332,6.46619,6.46619,0,0,0-2.7988-2.7998,6.76754,6.76754,0,0,0-1.9082-.627,13.04394,13.04394,0,0,0-2-.17676c-.3047-.00488-.6172-.01074-.9219-.01269C120.896,0,120.53081,0,120.17141,0Z',
										style: { fill: '#a6a6a6' },
									}),
									v('path', {
										d: 'M8.44483,39.125c-.30468,0-.602-.0039-.90429-.0107a12.68714,12.68714,0,0,1-1.86914-.1631,5.88381,5.88381,0,0,1-1.65674-.5479,5.40573,5.40573,0,0,1-1.397-1.0166,5.32082,5.32082,0,0,1-1.02051-1.3965,5.72186,5.72186,0,0,1-.543-1.6572,12.41351,12.41351,0,0,1-.1665-1.875c-.00634-.2109-.01464-.9131-.01464-.9131V8.44434S.88185,7.75293.8877,7.5498a12.37039,12.37039,0,0,1,.16553-1.87207,5.7555,5.7555,0,0,1,.54346-1.6621A5.37349,5.37349,0,0,1,2.61183,2.61768,5.56543,5.56543,0,0,1,4.01417,1.59521a5.82309,5.82309,0,0,1,1.65332-.54394A12.58589,12.58589,0,0,1,7.543.88721L8.44532.875H121.25051l.9131.0127a12.38492,12.38492,0,0,1,1.8584.16259,5.93833,5.93833,0,0,1,1.6709.54785,5.59375,5.59375,0,0,1,2.415,2.41993,5.76267,5.76267,0,0,1,.5352,1.64892,12.995,12.995,0,0,1,.1738,1.88721c.0029.2832.0029.5874.0029.89014.0079.375.0079.73193.0079,1.09179V30.4648c0,.3633,0,.7178-.0079,1.0752,0,.3252,0,.6231-.0039.9297a12.73126,12.73126,0,0,1-.1709,1.8535,5.739,5.739,0,0,1-.54,1.67,5.48029,5.48029,0,0,1-1.0156,1.3857,5.4129,5.4129,0,0,1-1.3994,1.0225,5.86168,5.86168,0,0,1-1.668.5498,12.54218,12.54218,0,0,1-1.8692.1631c-.2929.0068-.5996.0107-.8974.0107l-1.084.002Z',
									}),
								],
							}),
							L('g', {
								children: [
									v('path', {
										d: 'M37.92678,25.28418H35.41311v3.48926a16.90771,16.90771,0,0,0,3.10254-.22852l.09229.752a21.76036,21.76036,0,0,1-3.56836.25879h-.54492V24.52344h3.43213Zm2.0874,1.40137h1.08545v.76563H40.01418V31.2959h-.92725V23.82031h.92725Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M48.55471,27.50391v.73828H45.69826v1.41016h-.936V28.24219H41.79592v-.73828Zm-5.97217-1.97363c0-.86621,1.00635-1.49414,2.59717-1.49414s2.606.62793,2.606,1.49414c0,.87891-1.01514,1.50684-2.59717,1.50684C43.58889,27.03711,42.58254,26.40918,42.58254,25.53027Zm.97119,4.8291h4.22314v.73438h-5.1416v-2.127h.91846Zm-.02637-4.82031c0,.47852.69873.78711,1.64795.78711.98,0,1.65674-.30859,1.65674-.78711,0-.48828-.67236-.7998-1.65234-.7998C44.22609,24.73926,43.52736,25.05078,43.52736,25.53906Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M56.15432,29.61328v.73828H49.39553v-.73828H52.3091V28.39551H50.26125V25.94336h4.1001V25.0332H50.24807V24.291h5.04932v2.39941H51.1841v.9668h4.30225v.73828H53.232v1.21777Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M63.75441,30.30273H56.99563v-.73828h6.75879Zm-.87012-5.10156H58.7842v2.05664h4.15723v.74609H57.87014V24.45313H62.8843Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M71.17531,26.35645H66.81594V25.623h4.35938ZM69.03469,29.877A1.59929,1.59929,0,1,1,70.83254,28.29,1.63406,1.63406,0,0,1,69.03469,29.877Zm1.12988-4.82129H67.897v-.751h2.26758Zm-1.12988,4.09082a.86055.86055,0,1,0,0-1.71777.85949.85949,0,1,0,0,1.71777Zm3.65625-2.23633H73.7632v.75977H72.69094v3.626h-.92187V23.8252h.92188Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M74.99563,29.9375l-.52246-.72461a4.92464,4.92464,0,0,0,2.93555-3.84082H74.89016v-.76465h3.50293A5.96739,5.96739,0,0,1,74.99563,29.9375Zm5.64258,1.36328h-.92676V23.82031h.92676Z',
										style: { fill: '#fff' },
									}),
								],
							}),
							L('g', {
								children: [
									v('path', {
										d: 'M41.16018,16.5542H37.11525l-.9707,2.86816H34.43068l3.832-10.61328H40.042l3.832,10.61328H42.13088ZM37.5342,15.23h3.207l-1.582-4.65527h-.04395Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M52.16408,15.5542c0,2.4043-1.28711,3.94922-3.22852,3.94922A2.62169,2.62169,0,0,1,46.501,18.1499h-.03613v3.832H44.876V11.68506h1.53711v1.28711h.0293A2.74353,2.74353,0,0,1,48.90627,11.604C50.87014,11.604,52.16408,13.15576,52.16408,15.5542Zm-1.63281,0c0-1.56738-.80859-2.59668-2.04395-2.59668-1.21387,0-2.03027,1.05176-2.03027,2.59668,0,1.55859.81641,2.60352,2.03027,2.60352C49.72268,18.15771,50.53127,17.13525,50.53127,15.5542Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M60.69533,15.5542c0,2.4043-1.28711,3.94922-3.22852,3.94922a2.62169,2.62169,0,0,1-2.43457-1.35352h-.03613v3.832H53.40725V11.68506h1.53711v1.28711h.0293A2.74353,2.74353,0,0,1,57.43752,11.604C59.40139,11.604,60.69533,13.15576,60.69533,15.5542Zm-1.63281,0c0-1.56738-.80859-2.59668-2.04395-2.59668-1.21387,0-2.03027,1.05176-2.03027,2.59668,0,1.55859.81641,2.60352,2.03027,2.60352C58.25393,18.15771,59.06252,17.13525,59.06252,15.5542Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M66.354,16.46533c.11816,1.05176,1.13965,1.74316,2.53711,1.74316,1.33887,0,2.30273-.69141,2.30273-1.63965,0-.82422-.58105-1.31641-1.957-1.65527l-1.375-.33105c-1.94922-.4707-2.85352-1.38184-2.85352-2.86035,0-1.83105,1.5957-3.08887,3.86133-3.08887,2.24316,0,3.78027,1.25781,3.832,3.08887H71.09816c-.0957-1.05957-.9707-1.69922-2.251-1.69922-1.2793,0-2.1543.64746-2.1543,1.58887,0,.75.55859,1.19141,1.92676,1.5293l1.16895.28711c2.17676.51465,3.082,1.38965,3.082,2.94238,0,1.98535-1.58105,3.22852-4.09668,3.22852-2.35352,0-3.94189-1.21387-4.04443-3.13379Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M76.29934,9.854v1.83105H77.77v1.25781h-1.4707V17.2085c0,.66211.29395.9707.94141.9707a4.85071,4.85071,0,0,0,.52148-.03613v1.25a4.38318,4.38318,0,0,1-.88184.07324c-1.56738,0-2.17773-.58789-2.17773-2.08887V12.94287h-1.125V11.68506h1.125V9.854Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M78.64016,15.5542c0-2.43457,1.43359-3.96484,3.66992-3.96484,2.24316,0,3.66992,1.53027,3.66992,3.96484,0,2.44141-1.41895,3.96387-3.66992,3.96387S78.64016,17.99561,78.64016,15.5542Zm5.72168,0c0-1.66992-.76465-2.65527-2.05176-2.65527s-2.05176.99219-2.05176,2.65527c0,1.67676.76465,2.6543,2.05176,2.6543S84.36184,17.231,84.36184,15.5542Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M87.29055,11.68506H88.8052v1.31641h.03711A1.84423,1.84423,0,0,1,90.70266,11.604a2.38575,2.38575,0,0,1,.54492.05957v1.48535a2.22372,2.22372,0,0,0-.71387-.0957,1.59934,1.59934,0,0,0-1.6543,1.7793v4.58984H87.29055Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M98.56984,17.1499a3.10452,3.10452,0,0,1-3.332,2.36816c-2.25,0-3.64746-1.50781-3.64746-3.92773,0-2.42676,1.4043-4.001,3.582-4.001,2.13965,0,3.48535,1.4707,3.48535,3.81738v.54395H93.19387v.0957a2.01455,2.01455,0,0,0,2.08105,2.19141A1.75062,1.75062,0,0,0,97.062,17.1499ZM93.2007,14.84033h3.86914a1.86157,1.86157,0,0,0-1.89746-1.96387A1.95963,1.95963,0,0,0,93.2007,14.84033Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M105.08742,8.98779h1.23828V18.9165h-1.23828V13.90479h-.90723c-.11328,1.77051-.832,3.30957-2.28418,3.30957-1.59473,0-2.30176-1.85156-2.30176-3.82813,0-1.97754.707-3.791,2.30176-3.791,1.4209,0,2.13965,1.43848,2.27734,3.15234h.91406Zm-2.1084,4.39844c0-1.458-.35059-2.57129-1.083-2.57129-.71289,0-1.03809,1.11328-1.03809,2.57129,0,1.46387.3252,2.56445,1.03809,2.56445C102.62844,15.95068,102.979,14.8501,102.979,13.38623Zm5.51074-4.61133V19.4165h-1.23828V8.7749Z',
										style: { fill: '#fff' },
									}),
									v('path', {
										d: 'M114.08742,11.271a4.94923,4.94923,0,0,0,2.62793,4.60449l-.76953.99512a5.85416,5.85416,0,0,1-2.52148-2.86523A5.85662,5.85662,0,0,1,110.8716,17.146l-.81348-.96387a5.33981,5.33981,0,0,0,2.666-4.86719V9.66943h1.36328Zm4.98633,8.14551h-1.32617V13.56689h-2.13379V12.44775h2.13379V8.7749h1.32617Z',
										style: { fill: '#fff' },
									}),
								],
							}),
							v('g', {
								id: '_Group_',
								'data-name': '<Group>',
								children: L('g', {
									id: '_Group_2',
									'data-name': '<Group>',
									children: [
										v('path', {
											id: '_Path_',
											'data-name': '<Path>',
											d: 'M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z',
											style: { fill: '#fff' },
										}),
										v('path', {
											id: '_Path_2',
											'data-name': '<Path>',
											d: 'M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z',
											style: { fill: '#fff' },
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
		I5 = () => {
			const [e, t] = Na(!1),
				n = [
					{ label: '공지사항', href: '#' },
					{ label: '이용약관', href: '#' },
					{ label: '문의하기', href: '#' },
				],
				r = '#';
			return v('div', {
				children: L('div', {
					className: 'bg-natural-200 w-screen',
					children: [
						L('header', {
							className:
								'w-screen sticky z-50 bg-natural-200 top-0 h-60 px-64 under-mobile:px-20 under-mobile:bg-white flex justify-center',
							children: [
								L('div', {
									className: 'h-full w-full flex justify-between items-center max-w-[1920px]',
									children: [
										L('div', {
											className: 'flex items-center under-mobile:gap-4 gap-12',
											children: [
												v(hf, { size: 32 }),
												v('span', {
													className: 'text-28 under-mobile:text-20 text-main-primary font-suit font-black',
													children: 'Chatty',
												}),
											],
										}),
										v('ul', {
											className:
												'under-mobile:hidden h-full m-9 flex items-center gap-60 under-mobile:gap-16 text-grey-900 font-semibold',
											children: n.map(({ label: i, href: s }) =>
												v('li', { children: v('a', { href: s, children: i }) }, i)
											),
										}),
										L('div', {
											className: 'mobile:hidden flex items-center',
											children: [
												v('a', {
													href: r,
													className:
														'mr-12 inline-flex items-center justify-center w-76 h-30 rounded-2xl text-12 bg-main-primary text-white',
													children: '앱 다운로드',
												}),
												v('button', {
													onClick: t,
													children: v(yr, {
														size: '28px',
														icon: e ? 'close' : 'hamberger',
														stroke: 1.5,
														strokeColor: 'rgb(176, 184, 193)',
													}),
												}),
											],
										}),
									],
								}),
								e &&
									v('div', {
										children: v('ul', {
											className:
												'absolute flex flex-col w-full bg-white left-0 top-60 z-20 text-grey-900 border-t-1 border-natural-200',
											children: n.map(({ label: i, href: s }) =>
												v(
													'li',
													{
														className: 'w-full',
														children: v('a', { href: s, className: 'block py-18 px-20 opacity-80', children: i }),
													},
													i
												)
											),
										}),
									}),
							],
						}),
						L('div', {
							className:
								'relative flex items-center under-mobile:flex-col under-mobile:overflow-x-hidden w-[1024px] under-mobile:w-screen my-0 mx-auto h-[calc(100vh-60px)] under-mobile:px-24',
							children: [
								L('div', {
									children: [
										L('p', {
											className:
												'under-mobile:pt-36 text-pink-dark flex flex-col gap-4 text-64 under-mobile:text-28 font-extrabold',
											children: [
												v('span', { className: 'text-main-primary', children: '안녕!' }),
												v('span', { className: 'text-pink-dark', children: '자유로운 우리를 봐,' }),
												L('span', {
													children: [
														v('span', { className: 'text-main-primary font-suit font-black', children: 'Chatty ' }),
														v('span', { children: '예요!' }),
													],
												}),
											],
										}),
										L('p', {
											className: 'pt-36 pb-12 text-light-primary font-semibold flex flex-col gap-4',
											children: [
												v('span', { children: '익명으로 찾는 또다른 나,' }),
												v('span', { children: '채티에서 함께해요!' }),
											],
										}),
										v('div', { className: 'mt-32', children: v('a', { href: r, children: v(O5, {}) }) }),
									],
								}),
								L('div', {
									className: 'relative mobile:w-500 mobile:h-500 under-mobile:w-screen under-mobile:mt-72',
									children: [
										v('img', {
											src: C5,
											alt: 'preview',
											className:
												'absolute mobile:top-60 under-mobile:top-50 under-mobile:left-[-70px] under-mobile:max-h-400 max-h-500',
										}),
										v('img', {
											src: N5,
											alt: 'preview',
											className:
												'absolute mobile:right-[-132px] mobile:top-[-100px]  under-mobile:top-[-80px] under-mobile:right-[-30px] under-mobile:max-h-400 max-h-500',
										}),
									],
								}),
							],
						}),
					],
				}),
			});
		},
		D5 = new Vv({
			defaultOptions: {
				queries: {
					staleTime: 1 / 0,
					refetchOnMount: 'always',
					retry: !1,
					retryOnMount: !0,
					suspense: !0,
					useErrorBoundary: !0,
				},
			},
			queryCache: new Jm({
				onError: (e, t) => {
					t.state.data !== void 0 && console.error(`Something went wrong: ${e == null ? void 0 : e.message}`);
				},
			}),
		});
	function A5() {
		return v('div', {
			className: 'App',
			children: L(f2, {
				client: D5,
				children: [
					L(Av, {
						children: [
							v(xu, { path: '/', element: v(I5, {}) }),
							v(xu, {
								path: '/:username',
								element: v(x.Suspense, {
									fallback: v('div', {
										className: 'w-screen h-screen flex items-center justify-center',
										children: v(cg, {}),
									}),
									children: v(k5, {}),
								}),
							}),
						],
					}),
					v(x5, {}),
				],
			}),
		});
	}
	var Lg,
		Op = Mu;
	(Lg = Op.createRoot), Op.hydrateRoot;
	const Mg = Object.prototype.toString;
	function wf(e) {
		switch (Mg.call(e)) {
			case '[object Error]':
			case '[object Exception]':
			case '[object DOMException]':
				return !0;
			default:
				return Fn(e, Error);
		}
	}
	function Si(e, t) {
		return Mg.call(e) === `[object ${t}]`;
	}
	function Ug(e) {
		return Si(e, 'ErrorEvent');
	}
	function Ip(e) {
		return Si(e, 'DOMError');
	}
	function P5(e) {
		return Si(e, 'DOMException');
	}
	function Bn(e) {
		return Si(e, 'String');
	}
	function Bg(e) {
		return e === null || (typeof e != 'object' && typeof e != 'function');
	}
	function si(e) {
		return Si(e, 'Object');
	}
	function Tf(e) {
		return typeof Event < 'u' && Fn(e, Event);
	}
	function L5(e) {
		return typeof Element < 'u' && Fn(e, Element);
	}
	function M5(e) {
		return Si(e, 'RegExp');
	}
	function Rf(e) {
		return Boolean(e && e.then && typeof e.then == 'function');
	}
	function U5(e) {
		return si(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e;
	}
	function Fg(e) {
		return typeof e == 'number' && e !== e;
	}
	function Fn(e, t) {
		try {
			return e instanceof t;
		} catch {
			return !1;
		}
	}
	function yo(e) {
		return e && e.Math == Math ? e : void 0;
	}
	const rt =
		(typeof globalThis == 'object' && yo(globalThis)) ||
		(typeof window == 'object' && yo(window)) ||
		(typeof self == 'object' && yo(self)) ||
		(typeof global == 'object' && yo(global)) ||
		(function () {
			return this;
		})() ||
		{};
	function Gs() {
		return rt;
	}
	function bf(e, t, n) {
		const r = n || rt,
			i = (r.__SENTRY__ = r.__SENTRY__ || {});
		return i[e] || (i[e] = t());
	}
	const Ko = Gs(),
		B5 = 80;
	function fr(e, t = {}) {
		try {
			let n = e;
			const r = 5,
				i = [];
			let s = 0,
				o = 0;
			const a = ' > ',
				l = a.length;
			let u;
			const c = Array.isArray(t) ? t : t.keyAttrs,
				d = (!Array.isArray(t) && t.maxStringLength) || B5;
			for (; n && s++ < r && ((u = F5(n, c)), !(u === 'html' || (s > 1 && o + i.length * l + u.length >= d))); )
				i.push(u), (o += u.length), (n = n.parentNode);
			return i.reverse().join(a);
		} catch {
			return '<unknown>';
		}
	}
	function F5(e, t) {
		const n = e,
			r = [];
		let i, s, o, a, l;
		if (!n || !n.tagName) return '';
		r.push(n.tagName.toLowerCase());
		const u = t && t.length ? t.filter(d => n.getAttribute(d)).map(d => [d, n.getAttribute(d)]) : null;
		if (u && u.length)
			u.forEach(d => {
				r.push(`[${d[0]}="${d[1]}"]`);
			});
		else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && Bn(i)))
			for (s = i.split(/\s+/), l = 0; l < s.length; l++) r.push(`.${s[l]}`);
		const c = ['aria-label', 'type', 'name', 'title', 'alt'];
		for (l = 0; l < c.length; l++) (o = c[l]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`);
		return r.join('');
	}
	function z5() {
		try {
			return Ko.document.location.href;
		} catch {
			return '';
		}
	}
	function $5(e) {
		return Ko.document && Ko.document.querySelector ? Ko.document.querySelector(e) : null;
	}
	class He extends Error {
		constructor(t, n = 'warn') {
			super(t),
				(this.message = t),
				(this.name = new.target.prototype.constructor.name),
				Object.setPrototypeOf(this, new.target.prototype),
				(this.logLevel = n);
		}
	}
	const H5 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
	function j5(e) {
		return e === 'http' || e === 'https';
	}
	function Ys(e, t = !1) {
		const { host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: l } = e;
		return `${a}://${l}${t && i ? `:${i}` : ''}@${n}${s ? `:${s}` : ''}/${r && `${r}/`}${o}`;
	}
	function G5(e) {
		const t = H5.exec(e);
		if (!t) throw new He(`Invalid Sentry Dsn: ${e}`);
		const [n, r, i = '', s, o = '', a] = t.slice(1);
		let l = '',
			u = a;
		const c = u.split('/');
		if ((c.length > 1 && ((l = c.slice(0, -1).join('/')), (u = c.pop())), u)) {
			const d = u.match(/^\d+/);
			d && (u = d[0]);
		}
		return zg({ host: s, pass: i, path: l, projectId: u, port: o, protocol: n, publicKey: r });
	}
	function zg(e) {
		return {
			protocol: e.protocol,
			publicKey: e.publicKey || '',
			pass: e.pass || '',
			host: e.host,
			port: e.port || '',
			path: e.path || '',
			projectId: e.projectId,
		};
	}
	function Y5(e) {
		if (!(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__)) return;
		const { port: t, projectId: n, protocol: r } = e;
		if (
			(['protocol', 'publicKey', 'host', 'projectId'].forEach(s => {
				if (!e[s]) throw new He(`Invalid Sentry Dsn: ${s} missing`);
			}),
			!n.match(/^\d+$/))
		)
			throw new He(`Invalid Sentry Dsn: Invalid projectId ${n}`);
		if (!j5(r)) throw new He(`Invalid Sentry Dsn: Invalid protocol ${r}`);
		if (t && isNaN(parseInt(t, 10))) throw new He(`Invalid Sentry Dsn: Invalid port ${t}`);
		return !0;
	}
	function $g(e) {
		const t = typeof e == 'string' ? G5(e) : zg(e);
		return Y5(t), t;
	}
	const W5 = 'Sentry Logger ',
		Da = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];
	function Hg(e) {
		if (!('console' in rt)) return e();
		const t = rt.console,
			n = {};
		Da.forEach(r => {
			const i = t[r] && t[r].__sentry_original__;
			r in t && i && ((n[r] = t[r]), (t[r] = i));
		});
		try {
			return e();
		} finally {
			Object.keys(n).forEach(r => {
				t[r] = n[r];
			});
		}
	}
	function Dp() {
		let e = !1;
		const t = {
			enable: () => {
				e = !0;
			},
			disable: () => {
				e = !1;
			},
		};
		return (
			typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__
				? Da.forEach(n => {
						t[n] = (...r) => {
							e &&
								Hg(() => {
									rt.console[n](`${W5}[${n}]:`, ...r);
								});
						};
				  })
				: Da.forEach(n => {
						t[n] = () => {};
				  }),
			t
		);
	}
	let C;
	typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__ ? (C = bf('logger', Dp)) : (C = Dp());
	function Ji(e, t = 0) {
		return typeof e != 'string' || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
	}
	function Ap(e, t) {
		if (!Array.isArray(e)) return '';
		const n = [];
		for (let r = 0; r < e.length; r++) {
			const i = e[r];
			try {
				n.push(String(i));
			} catch {
				n.push('[value cannot be serialized]');
			}
		}
		return n.join(t);
	}
	function q5(e, t, n = !1) {
		return Bn(e) ? (M5(t) ? t.test(e) : Bn(t) ? (n ? e === t : e.includes(t)) : !1) : !1;
	}
	function wi(e, t = [], n = !1) {
		return t.some(r => q5(e, r, n));
	}
	function Me(e, t, n) {
		if (!(t in e)) return;
		const r = e[t],
			i = n(r);
		if (typeof i == 'function')
			try {
				jg(i, r);
			} catch {}
		e[t] = i;
	}
	function kf(e, t, n) {
		Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
	}
	function jg(e, t) {
		const n = t.prototype || {};
		(e.prototype = t.prototype = n), kf(e, '__sentry_original__', t);
	}
	function xf(e) {
		return e.__sentry_original__;
	}
	function V5(e) {
		return Object.keys(e)
			.map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
			.join('&');
	}
	function Gg(e) {
		if (wf(e)) return { message: e.message, name: e.name, stack: e.stack, ...Lp(e) };
		if (Tf(e)) {
			const t = { type: e.type, target: Pp(e.target), currentTarget: Pp(e.currentTarget), ...Lp(e) };
			return typeof CustomEvent < 'u' && Fn(e, CustomEvent) && (t.detail = e.detail), t;
		} else return e;
	}
	function Pp(e) {
		try {
			return L5(e) ? fr(e) : Object.prototype.toString.call(e);
		} catch {
			return '<unknown>';
		}
	}
	function Lp(e) {
		if (typeof e == 'object' && e !== null) {
			const t = {};
			for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t;
		} else return {};
	}
	function Q5(e, t = 40) {
		const n = Object.keys(Gg(e));
		if ((n.sort(), !n.length)) return '[object has no keys]';
		if (n[0].length >= t) return Ji(n[0], t);
		for (let r = n.length; r > 0; r--) {
			const i = n.slice(0, r).join(', ');
			if (!(i.length > t)) return r === n.length ? i : Ji(i, t);
		}
		return '';
	}
	function Yt(e) {
		return Uc(e, new Map());
	}
	function Uc(e, t) {
		if (si(e)) {
			const n = t.get(e);
			if (n !== void 0) return n;
			const r = {};
			t.set(e, r);
			for (const i of Object.keys(e)) typeof e[i] < 'u' && (r[i] = Uc(e[i], t));
			return r;
		}
		if (Array.isArray(e)) {
			const n = t.get(e);
			if (n !== void 0) return n;
			const r = [];
			return (
				t.set(e, r),
				e.forEach(i => {
					r.push(Uc(i, t));
				}),
				r
			);
		}
		return e;
	}
	const Yg = 50,
		Mp = /\(error: (.*)\)/;
	function Wg(...e) {
		const t = e.sort((n, r) => n[0] - r[0]).map(n => n[1]);
		return (n, r = 0) => {
			const i = [],
				s = n.split(`
`);
			for (let o = r; o < s.length; o++) {
				const a = s[o];
				if (a.length > 1024) continue;
				const l = Mp.test(a) ? a.replace(Mp, '$1') : a;
				if (!l.match(/\S*Error: /)) {
					for (const u of t) {
						const c = u(l);
						if (c) {
							i.push(c);
							break;
						}
					}
					if (i.length >= Yg) break;
				}
			}
			return Z5(i);
		};
	}
	function K5(e) {
		return Array.isArray(e) ? Wg(...e) : e;
	}
	function Z5(e) {
		if (!e.length) return [];
		const t = e.slice(0, Yg),
			n = t[t.length - 1].function;
		n && /sentryWrapped/.test(n) && t.pop(), t.reverse();
		const r = t[t.length - 1].function;
		return (
			r && /captureMessage|captureException/.test(r) && t.pop(),
			t.map(i => ({ ...i, filename: i.filename || t[t.length - 1].filename, function: i.function || '?' }))
		);
	}
	const gu = '<anonymous>';
	function zn(e) {
		try {
			return !e || typeof e != 'function' ? gu : e.name || gu;
		} catch {
			return gu;
		}
	}
	const Bc = Gs();
	function qg() {
		if (!('fetch' in Bc)) return !1;
		try {
			return new Headers(), new Request('http://www.example.com'), new Response(), !0;
		} catch {
			return !1;
		}
	}
	function Fc(e) {
		return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
	}
	function X5() {
		if (!qg()) return !1;
		if (Fc(Bc.fetch)) return !0;
		let e = !1;
		const t = Bc.document;
		if (t && typeof t.createElement == 'function')
			try {
				const n = t.createElement('iframe');
				(n.hidden = !0),
					t.head.appendChild(n),
					n.contentWindow && n.contentWindow.fetch && (e = Fc(n.contentWindow.fetch)),
					t.head.removeChild(n);
			} catch (n) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', n);
			}
		return e;
	}
	const vo = Gs();
	function J5() {
		const e = vo.chrome,
			t = e && e.app && e.app.runtime,
			n = 'history' in vo && !!vo.history.pushState && !!vo.history.replaceState;
		return !t && n;
	}
	const de = Gs(),
		Rn = '__sentry_xhr_v2__',
		es = {},
		Up = {};
	function e3(e) {
		if (!Up[e])
			switch (((Up[e] = !0), e)) {
				case 'console':
					t3();
					break;
				case 'dom':
					u3();
					break;
				case 'xhr':
					i3();
					break;
				case 'fetch':
					n3();
					break;
				case 'history':
					s3();
					break;
				case 'error':
					c3();
					break;
				case 'unhandledrejection':
					d3();
					break;
				default:
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.warn('unknown instrumentation type:', e);
					return;
			}
	}
	function Le(e, t) {
		(es[e] = es[e] || []), es[e].push(t), e3(e);
	}
	function Pt(e, t) {
		if (!(!e || !es[e]))
			for (const n of es[e] || [])
				try {
					n(t);
				} catch (r) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.error(
							`Error while triggering instrumentation handler.
Type: ${e}
Name: ${zn(n)}
Error:`,
							r
						);
				}
	}
	function t3() {
		'console' in de &&
			Da.forEach(function (e) {
				e in de.console &&
					Me(de.console, e, function (t) {
						return function (...n) {
							Pt('console', { args: n, level: e }), t && t.apply(de.console, n);
						};
					});
			});
	}
	function n3() {
		X5() &&
			Me(de, 'fetch', function (e) {
				return function (...t) {
					const { method: n, url: r } = r3(t),
						i = { args: t, fetchData: { method: n, url: r }, startTimestamp: Date.now() };
					return (
						Pt('fetch', { ...i }),
						e.apply(de, t).then(
							s => (Pt('fetch', { ...i, endTimestamp: Date.now(), response: s }), s),
							s => {
								throw (Pt('fetch', { ...i, endTimestamp: Date.now(), error: s }), s);
							}
						)
					);
				};
			});
	}
	function zc(e, t) {
		return !!e && typeof e == 'object' && !!e[t];
	}
	function Bp(e) {
		return typeof e == 'string' ? e : e ? (zc(e, 'url') ? e.url : e.toString ? e.toString() : '') : '';
	}
	function r3(e) {
		if (e.length === 0) return { method: 'GET', url: '' };
		if (e.length === 2) {
			const [n, r] = e;
			return { url: Bp(n), method: zc(r, 'method') ? String(r.method).toUpperCase() : 'GET' };
		}
		const t = e[0];
		return { url: Bp(t), method: zc(t, 'method') ? String(t.method).toUpperCase() : 'GET' };
	}
	function i3() {
		if (!('XMLHttpRequest' in de)) return;
		const e = XMLHttpRequest.prototype;
		Me(e, 'open', function (t) {
			return function (...n) {
				const r = n[1],
					i = (this[Rn] = { method: Bn(n[0]) ? n[0].toUpperCase() : n[0], url: n[1], request_headers: {} });
				Bn(r) && i.method === 'POST' && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
				const s = () => {
					const o = this[Rn];
					if (o && this.readyState === 4) {
						try {
							o.status_code = this.status;
						} catch {}
						Pt('xhr', { args: n, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: this });
					}
				};
				return (
					'onreadystatechange' in this && typeof this.onreadystatechange == 'function'
						? Me(this, 'onreadystatechange', function (o) {
								return function (...a) {
									return s(), o.apply(this, a);
								};
						  })
						: this.addEventListener('readystatechange', s),
					Me(this, 'setRequestHeader', function (o) {
						return function (...a) {
							const [l, u] = a,
								c = this[Rn];
							return c && (c.request_headers[l.toLowerCase()] = u), o.apply(this, a);
						};
					}),
					t.apply(this, n)
				);
			};
		}),
			Me(e, 'send', function (t) {
				return function (...n) {
					const r = this[Rn];
					return (
						r && n[0] !== void 0 && (r.body = n[0]),
						Pt('xhr', { args: n, startTimestamp: Date.now(), xhr: this }),
						t.apply(this, n)
					);
				};
			});
	}
	let Eo;
	function s3() {
		if (!J5()) return;
		const e = de.onpopstate;
		de.onpopstate = function (...n) {
			const r = de.location.href,
				i = Eo;
			if (((Eo = r), Pt('history', { from: i, to: r }), e))
				try {
					return e.apply(this, n);
				} catch {}
		};
		function t(n) {
			return function (...r) {
				const i = r.length > 2 ? r[2] : void 0;
				if (i) {
					const s = Eo,
						o = String(i);
					(Eo = o), Pt('history', { from: s, to: o });
				}
				return n.apply(this, r);
			};
		}
		Me(de.history, 'pushState', t), Me(de.history, 'replaceState', t);
	}
	const o3 = 1e3;
	let So, wo;
	function a3(e, t) {
		if (!e || e.type !== t.type) return !0;
		try {
			if (e.target !== t.target) return !0;
		} catch {}
		return !1;
	}
	function l3(e) {
		if (e.type !== 'keypress') return !1;
		try {
			const t = e.target;
			if (!t || !t.tagName) return !0;
			if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return !1;
		} catch {}
		return !0;
	}
	function Fp(e, t = !1) {
		return n => {
			if (!n || wo === n || l3(n)) return;
			const r = n.type === 'keypress' ? 'input' : n.type;
			So === void 0
				? (e({ event: n, name: r, global: t }), (wo = n))
				: a3(wo, n) && (e({ event: n, name: r, global: t }), (wo = n)),
				clearTimeout(So),
				(So = de.setTimeout(() => {
					So = void 0;
				}, o3));
		};
	}
	function u3() {
		if (!('document' in de)) return;
		const e = Pt.bind(null, 'dom'),
			t = Fp(e, !0);
		de.document.addEventListener('click', t, !1),
			de.document.addEventListener('keypress', t, !1),
			['EventTarget', 'Node'].forEach(n => {
				const r = de[n] && de[n].prototype;
				!r ||
					!r.hasOwnProperty ||
					!r.hasOwnProperty('addEventListener') ||
					(Me(r, 'addEventListener', function (i) {
						return function (s, o, a) {
							if (s === 'click' || s == 'keypress')
								try {
									const l = this,
										u = (l.__sentry_instrumentation_handlers__ = l.__sentry_instrumentation_handlers__ || {}),
										c = (u[s] = u[s] || { refCount: 0 });
									if (!c.handler) {
										const d = Fp(e);
										(c.handler = d), i.call(this, s, d, a);
									}
									c.refCount++;
								} catch {}
							return i.call(this, s, o, a);
						};
					}),
					Me(r, 'removeEventListener', function (i) {
						return function (s, o, a) {
							if (s === 'click' || s == 'keypress')
								try {
									const l = this,
										u = l.__sentry_instrumentation_handlers__ || {},
										c = u[s];
									c &&
										(c.refCount--,
										c.refCount <= 0 && (i.call(this, s, c.handler, a), (c.handler = void 0), delete u[s]),
										Object.keys(u).length === 0 && delete l.__sentry_instrumentation_handlers__);
								} catch {}
							return i.call(this, s, o, a);
						};
					}));
			});
	}
	let To = null;
	function c3() {
		(To = de.onerror),
			(de.onerror = function (e, t, n, r, i) {
				return (
					Pt('error', { column: r, error: i, line: n, msg: e, url: t }),
					To && !To.__SENTRY_LOADER__ ? To.apply(this, arguments) : !1
				);
			}),
			(de.onerror.__SENTRY_INSTRUMENTED__ = !0);
	}
	let Ro = null;
	function d3() {
		(Ro = de.onunhandledrejection),
			(de.onunhandledrejection = function (e) {
				return Pt('unhandledrejection', e), Ro && !Ro.__SENTRY_LOADER__ ? Ro.apply(this, arguments) : !0;
			}),
			(de.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
	}
	function f3() {
		const e = typeof WeakSet == 'function',
			t = e ? new WeakSet() : [];
		function n(i) {
			if (e) return t.has(i) ? !0 : (t.add(i), !1);
			for (let s = 0; s < t.length; s++) if (t[s] === i) return !0;
			return t.push(i), !1;
		}
		function r(i) {
			if (e) t.delete(i);
			else
				for (let s = 0; s < t.length; s++)
					if (t[s] === i) {
						t.splice(s, 1);
						break;
					}
		}
		return [n, r];
	}
	function nn() {
		const e = rt,
			t = e.crypto || e.msCrypto;
		if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '');
		const n = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
		return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r => (r ^ ((n() & 15) >> (r / 4))).toString(16));
	}
	function Vg(e) {
		return e.exception && e.exception.values ? e.exception.values[0] : void 0;
	}
	function vn(e) {
		const { message: t, event_id: n } = e;
		if (t) return t;
		const r = Vg(e);
		return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || '<unknown>') : n || '<unknown>';
	}
	function $c(e, t, n) {
		const r = (e.exception = e.exception || {}),
			i = (r.values = r.values || []),
			s = (i[0] = i[0] || {});
		s.value || (s.value = t || ''), s.type || (s.type = n || 'Error');
	}
	function xs(e, t) {
		const n = Vg(e);
		if (!n) return;
		const r = { type: 'generic', handled: !0 },
			i = n.mechanism;
		if (((n.mechanism = { ...r, ...i, ...t }), t && 'data' in t)) {
			const s = { ...(i && i.data), ...t.data };
			n.mechanism.data = s;
		}
	}
	function zp(e) {
		if (e && e.__sentry_captured__) return !0;
		try {
			kf(e, '__sentry_captured__', !0);
		} catch {}
		return !1;
	}
	function Qg(e) {
		return Array.isArray(e) ? e : [e];
	}
	function h3() {
		return typeof __SENTRY_BROWSER_BUNDLE__ < 'u' && !!__SENTRY_BROWSER_BUNDLE__;
	}
	function p3() {
		return 'npm';
	}
	function Kg() {
		return !h3() && Object.prototype.toString.call(typeof process < 'u' ? process : 0) === '[object process]';
	}
	function m3(e, t) {
		return e.require(t);
	}
	function zt(e, t = 100, n = 1 / 0) {
		try {
			return Hc('', e, t, n);
		} catch (r) {
			return { ERROR: `**non-serializable** (${r})` };
		}
	}
	function Zg(e, t = 3, n = 100 * 1024) {
		const r = zt(e, t);
		return v3(r) > n ? Zg(e, t - 1, n) : r;
	}
	function Hc(e, t, n = 1 / 0, r = 1 / 0, i = f3()) {
		const [s, o] = i;
		if (t == null || (['number', 'boolean', 'string'].includes(typeof t) && !Fg(t))) return t;
		const a = _3(e, t);
		if (!a.startsWith('[object ')) return a;
		if (t.__sentry_skip_normalization__) return t;
		const l =
			typeof t.__sentry_override_normalization_depth__ == 'number' ? t.__sentry_override_normalization_depth__ : n;
		if (l === 0) return a.replace('object ', '');
		if (s(t)) return '[Circular ~]';
		const u = t;
		if (u && typeof u.toJSON == 'function')
			try {
				const f = u.toJSON();
				return Hc('', f, l - 1, r, i);
			} catch {}
		const c = Array.isArray(t) ? [] : {};
		let d = 0;
		const h = Gg(t);
		for (const f in h) {
			if (!Object.prototype.hasOwnProperty.call(h, f)) continue;
			if (d >= r) {
				c[f] = '[MaxProperties ~]';
				break;
			}
			const _ = h[f];
			(c[f] = Hc(f, _, l - 1, r, i)), d++;
		}
		return o(t), c;
	}
	function _3(e, t) {
		try {
			if (e === 'domain' && t && typeof t == 'object' && t._events) return '[Domain]';
			if (e === 'domainEmitter') return '[DomainEmitter]';
			if (typeof global < 'u' && t === global) return '[Global]';
			if (typeof window < 'u' && t === window) return '[Window]';
			if (typeof document < 'u' && t === document) return '[Document]';
			if (U5(t)) return '[SyntheticEvent]';
			if (typeof t == 'number' && t !== t) return '[NaN]';
			if (typeof t == 'function') return `[Function: ${zn(t)}]`;
			if (typeof t == 'symbol') return `[${String(t)}]`;
			if (typeof t == 'bigint') return `[BigInt: ${String(t)}]`;
			const n = g3(t);
			return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
		} catch (n) {
			return `**non-serializable** (${n})`;
		}
	}
	function g3(e) {
		const t = Object.getPrototypeOf(e);
		return t ? t.constructor.name : 'null prototype';
	}
	function y3(e) {
		return ~-encodeURI(e).split(/%..|./).length;
	}
	function v3(e) {
		return y3(JSON.stringify(e));
	}
	var Vt;
	(function (e) {
		e[(e.PENDING = 0)] = 'PENDING';
		const n = 1;
		e[(e.RESOLVED = n)] = 'RESOLVED';
		const r = 2;
		e[(e.REJECTED = r)] = 'REJECTED';
	})(Vt || (Vt = {}));
	function hr(e) {
		return new Ye(t => {
			t(e);
		});
	}
	function Aa(e) {
		return new Ye((t, n) => {
			n(e);
		});
	}
	class Ye {
		__init() {
			this._state = Vt.PENDING;
		}
		__init2() {
			this._handlers = [];
		}
		constructor(t) {
			Ye.prototype.__init.call(this),
				Ye.prototype.__init2.call(this),
				Ye.prototype.__init3.call(this),
				Ye.prototype.__init4.call(this),
				Ye.prototype.__init5.call(this),
				Ye.prototype.__init6.call(this);
			try {
				t(this._resolve, this._reject);
			} catch (n) {
				this._reject(n);
			}
		}
		then(t, n) {
			return new Ye((r, i) => {
				this._handlers.push([
					!1,
					s => {
						if (!t) r(s);
						else
							try {
								r(t(s));
							} catch (o) {
								i(o);
							}
					},
					s => {
						if (!n) i(s);
						else
							try {
								r(n(s));
							} catch (o) {
								i(o);
							}
					},
				]),
					this._executeHandlers();
			});
		}
		catch(t) {
			return this.then(n => n, t);
		}
		finally(t) {
			return new Ye((n, r) => {
				let i, s;
				return this.then(
					o => {
						(s = !1), (i = o), t && t();
					},
					o => {
						(s = !0), (i = o), t && t();
					}
				).then(() => {
					if (s) {
						r(i);
						return;
					}
					n(i);
				});
			});
		}
		__init3() {
			this._resolve = t => {
				this._setResult(Vt.RESOLVED, t);
			};
		}
		__init4() {
			this._reject = t => {
				this._setResult(Vt.REJECTED, t);
			};
		}
		__init5() {
			this._setResult = (t, n) => {
				if (this._state === Vt.PENDING) {
					if (Rf(n)) {
						n.then(this._resolve, this._reject);
						return;
					}
					(this._state = t), (this._value = n), this._executeHandlers();
				}
			};
		}
		__init6() {
			this._executeHandlers = () => {
				if (this._state === Vt.PENDING) return;
				const t = this._handlers.slice();
				(this._handlers = []),
					t.forEach(n => {
						n[0] ||
							(this._state === Vt.RESOLVED && n[1](this._value),
							this._state === Vt.REJECTED && n[2](this._value),
							(n[0] = !0));
					});
			};
		}
	}
	function E3(e) {
		const t = [];
		function n() {
			return e === void 0 || t.length < e;
		}
		function r(o) {
			return t.splice(t.indexOf(o), 1)[0];
		}
		function i(o) {
			if (!n()) return Aa(new He('Not adding Promise because buffer limit was reached.'));
			const a = o();
			return t.indexOf(a) === -1 && t.push(a), a.then(() => r(a)).then(null, () => r(a).then(null, () => {})), a;
		}
		function s(o) {
			return new Ye((a, l) => {
				let u = t.length;
				if (!u) return a(!0);
				const c = setTimeout(() => {
					o && o > 0 && a(!1);
				}, o);
				t.forEach(d => {
					hr(d).then(() => {
						--u || (clearTimeout(c), a(!0));
					}, l);
				});
			});
		}
		return { $: t, add: i, drain: s };
	}
	function yu(e) {
		if (!e) return {};
		const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
		if (!t) return {};
		const n = t[6] || '',
			r = t[8] || '';
		return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
	}
	const S3 = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
	function w3(e) {
		return e === 'warn' ? 'warning' : S3.includes(e) ? e : 'log';
	}
	const Xg = Gs(),
		jc = { nowSeconds: () => Date.now() / 1e3 };
	function T3() {
		const { performance: e } = Xg;
		if (!e || !e.now) return;
		const t = Date.now() - e.now();
		return { now: () => e.now(), timeOrigin: t };
	}
	function R3() {
		try {
			return m3(uy, 'perf_hooks').performance;
		} catch {
			return;
		}
	}
	const vu = Kg() ? R3() : T3(),
		$p = vu === void 0 ? jc : { nowSeconds: () => (vu.timeOrigin + vu.now()) / 1e3 },
		ml = jc.nowSeconds.bind(jc),
		pr = $p.nowSeconds.bind($p),
		ln = (() => {
			const { performance: e } = Xg;
			if (!e || !e.now) return;
			const t = 3600 * 1e3,
				n = e.now(),
				r = Date.now(),
				i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
				s = i < t,
				o = e.timing && e.timing.navigationStart,
				l = typeof o == 'number' ? Math.abs(o + n - r) : t,
				u = l < t;
			return s || u ? (i <= l ? e.timeOrigin : o) : r;
		})(),
		b3 = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
	function k3(e) {
		const t = e.match(b3);
		if (!e || !t) return;
		let n;
		return t[3] === '1' ? (n = !0) : t[3] === '0' && (n = !1), { traceId: t[1], parentSampled: n, parentSpanId: t[2] };
	}
	function Ti(e, t = []) {
		return [e, t];
	}
	function x3(e, t) {
		const [n, r] = e;
		return [n, [...r, t]];
	}
	function Hp(e, t) {
		const n = e[1];
		for (const r of n) {
			const i = r[0].type;
			if (t(r, i)) return !0;
		}
		return !1;
	}
	function Gc(e, t) {
		return (t || new TextEncoder()).encode(e);
	}
	function C3(e, t) {
		const [n, r] = e;
		let i = JSON.stringify(n);
		function s(o) {
			typeof i == 'string'
				? (i = typeof o == 'string' ? i + o : [Gc(i, t), o])
				: i.push(typeof o == 'string' ? Gc(o, t) : o);
		}
		for (const o of r) {
			const [a, l] = o;
			if (
				(s(`
${JSON.stringify(a)}
`),
				typeof l == 'string' || l instanceof Uint8Array)
			)
				s(l);
			else {
				let u;
				try {
					u = JSON.stringify(l);
				} catch {
					u = JSON.stringify(zt(l));
				}
				s(u);
			}
		}
		return typeof i == 'string' ? i : N3(i);
	}
	function N3(e) {
		const t = e.reduce((i, s) => i + s.length, 0),
			n = new Uint8Array(t);
		let r = 0;
		for (const i of e) n.set(i, r), (r += i.length);
		return n;
	}
	function O3(e, t) {
		const n = typeof e.data == 'string' ? Gc(e.data, t) : e.data;
		return [
			Yt({
				type: 'attachment',
				length: n.length,
				filename: e.filename,
				content_type: e.contentType,
				attachment_type: e.attachmentType,
			}),
			n,
		];
	}
	const I3 = {
		session: 'session',
		sessions: 'session',
		attachment: 'attachment',
		transaction: 'transaction',
		event: 'error',
		client_report: 'internal',
		user_report: 'default',
		profile: 'profile',
		replay_event: 'replay',
		replay_recording: 'replay',
		check_in: 'monitor',
	};
	function jp(e) {
		return I3[e];
	}
	function Cf(e) {
		if (!e || !e.sdk) return;
		const { name: t, version: n } = e.sdk;
		return { name: t, version: n };
	}
	function Jg(e, t, n, r) {
		const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
		return {
			event_id: e.event_id,
			sent_at: new Date().toISOString(),
			...(t && { sdk: t }),
			...(!!n && { dsn: Ys(r) }),
			...(i && { trace: Yt({ ...i }) }),
		};
	}
	function D3(e, t, n) {
		const r = [{ type: 'client_report' }, { timestamp: n || ml(), discarded_events: e }];
		return Ti(t ? { dsn: t } : {}, [r]);
	}
	const A3 = 60 * 1e3;
	function P3(e, t = Date.now()) {
		const n = parseInt(`${e}`, 10);
		if (!isNaN(n)) return n * 1e3;
		const r = Date.parse(`${e}`);
		return isNaN(r) ? A3 : r - t;
	}
	function L3(e, t) {
		return e[t] || e.all || 0;
	}
	function M3(e, t, n = Date.now()) {
		return L3(e, t) > n;
	}
	function U3(e, { statusCode: t, headers: n }, r = Date.now()) {
		const i = { ...e },
			s = n && n['x-sentry-rate-limits'],
			o = n && n['retry-after'];
		if (s)
			for (const a of s.trim().split(',')) {
				const [l, u] = a.split(':', 2),
					c = parseInt(l, 10),
					d = (isNaN(c) ? 60 : c) * 1e3;
				if (!u) i.all = r + d;
				else for (const h of u.split(';')) i[h] = r + d;
			}
		else o ? (i.all = r + P3(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
		return i;
	}
	const Yc = 'baggage',
		e1 = 'sentry-',
		B3 = /^sentry-/,
		F3 = 8192;
	function z3(e) {
		if (!Bn(e) && !Array.isArray(e)) return;
		let t = {};
		if (Array.isArray(e))
			t = e.reduce((r, i) => {
				const s = Gp(i);
				return { ...r, ...s };
			}, {});
		else {
			if (!e) return;
			t = Gp(e);
		}
		const n = Object.entries(t).reduce((r, [i, s]) => {
			if (i.match(B3)) {
				const o = i.slice(e1.length);
				r[o] = s;
			}
			return r;
		}, {});
		if (Object.keys(n).length > 0) return n;
	}
	function t1(e) {
		const t = Object.entries(e).reduce((n, [r, i]) => (i && (n[`${e1}${r}`] = i), n), {});
		return $3(t);
	}
	function Gp(e) {
		return e
			.split(',')
			.map(t => t.split('=').map(n => decodeURIComponent(n.trim())))
			.reduce((t, [n, r]) => ((t[n] = r), t), {});
	}
	function $3(e) {
		if (Object.keys(e).length !== 0)
			return Object.entries(e).reduce((t, [n, r], i) => {
				const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
					o = i === 0 ? s : `${t},${s}`;
				return o.length > F3
					? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
					  t)
					: o;
			}, '');
	}
	const Nf = 'production';
	function H3(e) {
		const t = pr(),
			n = {
				sid: nn(),
				init: !0,
				timestamp: t,
				started: t,
				duration: 0,
				status: 'ok',
				errors: 0,
				ignoreDuration: !1,
				toJSON: () => G3(n),
			};
		return e && oi(n, e), n;
	}
	function oi(e, t = {}) {
		if (
			(t.user &&
				(!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
				!e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
			(e.timestamp = t.timestamp || pr()),
			t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
			t.sid && (e.sid = t.sid.length === 32 ? t.sid : nn()),
			t.init !== void 0 && (e.init = t.init),
			!e.did && t.did && (e.did = `${t.did}`),
			typeof t.started == 'number' && (e.started = t.started),
			e.ignoreDuration)
		)
			e.duration = void 0;
		else if (typeof t.duration == 'number') e.duration = t.duration;
		else {
			const n = e.timestamp - e.started;
			e.duration = n >= 0 ? n : 0;
		}
		t.release && (e.release = t.release),
			t.environment && (e.environment = t.environment),
			!e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
			!e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
			typeof t.errors == 'number' && (e.errors = t.errors),
			t.status && (e.status = t.status);
	}
	function j3(e, t) {
		let n = {};
		t ? (n = { status: t }) : e.status === 'ok' && (n = { status: 'exited' }), oi(e, n);
	}
	function G3(e) {
		return Yt({
			sid: `${e.sid}`,
			init: e.init,
			started: new Date(e.started * 1e3).toISOString(),
			timestamp: new Date(e.timestamp * 1e3).toISOString(),
			status: e.status,
			errors: e.errors,
			did: typeof e.did == 'number' || typeof e.did == 'string' ? `${e.did}` : void 0,
			duration: e.duration,
			attrs: { release: e.release, environment: e.environment, ip_address: e.ipAddress, user_agent: e.userAgent },
		});
	}
	const Y3 = 100;
	class ir {
		constructor() {
			(this._notifyingListeners = !1),
				(this._scopeListeners = []),
				(this._eventProcessors = []),
				(this._breadcrumbs = []),
				(this._attachments = []),
				(this._user = {}),
				(this._tags = {}),
				(this._extra = {}),
				(this._contexts = {}),
				(this._sdkProcessingMetadata = {});
		}
		static clone(t) {
			const n = new ir();
			return (
				t &&
					((n._breadcrumbs = [...t._breadcrumbs]),
					(n._tags = { ...t._tags }),
					(n._extra = { ...t._extra }),
					(n._contexts = { ...t._contexts }),
					(n._user = t._user),
					(n._level = t._level),
					(n._span = t._span),
					(n._session = t._session),
					(n._transactionName = t._transactionName),
					(n._fingerprint = t._fingerprint),
					(n._eventProcessors = [...t._eventProcessors]),
					(n._requestSession = t._requestSession),
					(n._attachments = [...t._attachments]),
					(n._sdkProcessingMetadata = { ...t._sdkProcessingMetadata })),
				n
			);
		}
		addScopeListener(t) {
			this._scopeListeners.push(t);
		}
		addEventProcessor(t) {
			return this._eventProcessors.push(t), this;
		}
		setUser(t) {
			return (
				(this._user = t || {}), this._session && oi(this._session, { user: t }), this._notifyScopeListeners(), this
			);
		}
		getUser() {
			return this._user;
		}
		getRequestSession() {
			return this._requestSession;
		}
		setRequestSession(t) {
			return (this._requestSession = t), this;
		}
		setTags(t) {
			return (this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this;
		}
		setTag(t, n) {
			return (this._tags = { ...this._tags, [t]: n }), this._notifyScopeListeners(), this;
		}
		setExtras(t) {
			return (this._extra = { ...this._extra, ...t }), this._notifyScopeListeners(), this;
		}
		setExtra(t, n) {
			return (this._extra = { ...this._extra, [t]: n }), this._notifyScopeListeners(), this;
		}
		setFingerprint(t) {
			return (this._fingerprint = t), this._notifyScopeListeners(), this;
		}
		setLevel(t) {
			return (this._level = t), this._notifyScopeListeners(), this;
		}
		setTransactionName(t) {
			return (this._transactionName = t), this._notifyScopeListeners(), this;
		}
		setContext(t, n) {
			return n === null ? delete this._contexts[t] : (this._contexts[t] = n), this._notifyScopeListeners(), this;
		}
		setSpan(t) {
			return (this._span = t), this._notifyScopeListeners(), this;
		}
		getSpan() {
			return this._span;
		}
		getTransaction() {
			const t = this.getSpan();
			return t && t.transaction;
		}
		setSession(t) {
			return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this;
		}
		getSession() {
			return this._session;
		}
		update(t) {
			if (!t) return this;
			if (typeof t == 'function') {
				const n = t(this);
				return n instanceof ir ? n : this;
			}
			return (
				t instanceof ir
					? ((this._tags = { ...this._tags, ...t._tags }),
					  (this._extra = { ...this._extra, ...t._extra }),
					  (this._contexts = { ...this._contexts, ...t._contexts }),
					  t._user && Object.keys(t._user).length && (this._user = t._user),
					  t._level && (this._level = t._level),
					  t._fingerprint && (this._fingerprint = t._fingerprint),
					  t._requestSession && (this._requestSession = t._requestSession))
					: si(t) &&
					  ((t = t),
					  (this._tags = { ...this._tags, ...t.tags }),
					  (this._extra = { ...this._extra, ...t.extra }),
					  (this._contexts = { ...this._contexts, ...t.contexts }),
					  t.user && (this._user = t.user),
					  t.level && (this._level = t.level),
					  t.fingerprint && (this._fingerprint = t.fingerprint),
					  t.requestSession && (this._requestSession = t.requestSession)),
				this
			);
		}
		clear() {
			return (
				(this._breadcrumbs = []),
				(this._tags = {}),
				(this._extra = {}),
				(this._user = {}),
				(this._contexts = {}),
				(this._level = void 0),
				(this._transactionName = void 0),
				(this._fingerprint = void 0),
				(this._requestSession = void 0),
				(this._span = void 0),
				(this._session = void 0),
				this._notifyScopeListeners(),
				(this._attachments = []),
				this
			);
		}
		addBreadcrumb(t, n) {
			const r = typeof n == 'number' ? n : Y3;
			if (r <= 0) return this;
			const i = { timestamp: ml(), ...t };
			return (this._breadcrumbs = [...this._breadcrumbs, i].slice(-r)), this._notifyScopeListeners(), this;
		}
		getLastBreadcrumb() {
			return this._breadcrumbs[this._breadcrumbs.length - 1];
		}
		clearBreadcrumbs() {
			return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
		}
		addAttachment(t) {
			return this._attachments.push(t), this;
		}
		getAttachments() {
			return this._attachments;
		}
		clearAttachments() {
			return (this._attachments = []), this;
		}
		applyToEvent(t, n = {}) {
			if (
				(this._extra && Object.keys(this._extra).length && (t.extra = { ...this._extra, ...t.extra }),
				this._tags && Object.keys(this._tags).length && (t.tags = { ...this._tags, ...t.tags }),
				this._user && Object.keys(this._user).length && (t.user = { ...this._user, ...t.user }),
				this._contexts && Object.keys(this._contexts).length && (t.contexts = { ...this._contexts, ...t.contexts }),
				this._level && (t.level = this._level),
				this._transactionName && (t.transaction = this._transactionName),
				this._span)
			) {
				t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
				const r = this._span.transaction;
				if (r) {
					t.sdkProcessingMetadata = {
						dynamicSamplingContext: r.getDynamicSamplingContext(),
						...t.sdkProcessingMetadata,
					};
					const i = r.name;
					i && (t.tags = { transaction: i, ...t.tags });
				}
			}
			return (
				this._applyFingerprint(t),
				(t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
				(t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
				(t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...this._sdkProcessingMetadata }),
				this._notifyEventProcessors([...n1(), ...this._eventProcessors], t, n)
			);
		}
		setSDKProcessingMetadata(t) {
			return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }), this;
		}
		_notifyEventProcessors(t, n, r, i = 0) {
			return new Ye((s, o) => {
				const a = t[i];
				if (n === null || typeof a != 'function') s(n);
				else {
					const l = a({ ...n }, r);
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						a.id &&
						l === null &&
						C.log(`Event processor "${a.id}" dropped event`),
						Rf(l)
							? l.then(u => this._notifyEventProcessors(t, u, r, i + 1).then(s)).then(null, o)
							: this._notifyEventProcessors(t, l, r, i + 1)
									.then(s)
									.then(null, o);
				}
			});
		}
		_notifyScopeListeners() {
			this._notifyingListeners ||
				((this._notifyingListeners = !0),
				this._scopeListeners.forEach(t => {
					t(this);
				}),
				(this._notifyingListeners = !1));
		}
		_applyFingerprint(t) {
			(t.fingerprint = t.fingerprint ? Qg(t.fingerprint) : []),
				this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
				t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
		}
	}
	function n1() {
		return bf('globalEventProcessors', () => []);
	}
	function _l(e) {
		n1().push(e);
	}
	const r1 = 4,
		W3 = 100;
	class i1 {
		constructor(t, n = new ir(), r = r1) {
			(this._version = r), (this._stack = [{ scope: n }]), t && this.bindClient(t);
		}
		isOlderThan(t) {
			return this._version < t;
		}
		bindClient(t) {
			const n = this.getStackTop();
			(n.client = t), t && t.setupIntegrations && t.setupIntegrations();
		}
		pushScope() {
			const t = ir.clone(this.getScope());
			return this.getStack().push({ client: this.getClient(), scope: t }), t;
		}
		popScope() {
			return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
		}
		withScope(t) {
			const n = this.pushScope();
			try {
				t(n);
			} finally {
				this.popScope();
			}
		}
		getClient() {
			return this.getStackTop().client;
		}
		getScope() {
			return this.getStackTop().scope;
		}
		getStack() {
			return this._stack;
		}
		getStackTop() {
			return this._stack[this._stack.length - 1];
		}
		captureException(t, n) {
			const r = (this._lastEventId = n && n.event_id ? n.event_id : nn()),
				i = new Error('Sentry syntheticException');
			return (
				this._withClient((s, o) => {
					s.captureException(t, { originalException: t, syntheticException: i, ...n, event_id: r }, o);
				}),
				r
			);
		}
		captureMessage(t, n, r) {
			const i = (this._lastEventId = r && r.event_id ? r.event_id : nn()),
				s = new Error(t);
			return (
				this._withClient((o, a) => {
					o.captureMessage(t, n, { originalException: t, syntheticException: s, ...r, event_id: i }, a);
				}),
				i
			);
		}
		captureEvent(t, n) {
			const r = n && n.event_id ? n.event_id : nn();
			return (
				t.type || (this._lastEventId = r),
				this._withClient((i, s) => {
					i.captureEvent(t, { ...n, event_id: r }, s);
				}),
				r
			);
		}
		lastEventId() {
			return this._lastEventId;
		}
		addBreadcrumb(t, n) {
			const { scope: r, client: i } = this.getStackTop();
			if (!i) return;
			const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = W3 } = (i.getOptions && i.getOptions()) || {};
			if (o <= 0) return;
			const l = { timestamp: ml(), ...t },
				u = s ? Hg(() => s(l, n)) : l;
			u !== null && (i.emit && i.emit('beforeAddBreadcrumb', u, n), r.addBreadcrumb(u, o));
		}
		setUser(t) {
			this.getScope().setUser(t);
		}
		setTags(t) {
			this.getScope().setTags(t);
		}
		setExtras(t) {
			this.getScope().setExtras(t);
		}
		setTag(t, n) {
			this.getScope().setTag(t, n);
		}
		setExtra(t, n) {
			this.getScope().setExtra(t, n);
		}
		setContext(t, n) {
			this.getScope().setContext(t, n);
		}
		configureScope(t) {
			const { scope: n, client: r } = this.getStackTop();
			r && t(n);
		}
		run(t) {
			const n = Yp(this);
			try {
				t(this);
			} finally {
				Yp(n);
			}
		}
		getIntegration(t) {
			const n = this.getClient();
			if (!n) return null;
			try {
				return n.getIntegration(t);
			} catch {
				return (
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
					null
				);
			}
		}
		startTransaction(t, n) {
			const r = this._callExtensionMethod('startTransaction', t, n);
			return (
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					!r &&
					console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
				r
			);
		}
		traceHeaders() {
			return this._callExtensionMethod('traceHeaders');
		}
		captureSession(t = !1) {
			if (t) return this.endSession();
			this._sendSessionUpdate();
		}
		endSession() {
			const n = this.getStackTop().scope,
				r = n.getSession();
			r && j3(r), this._sendSessionUpdate(), n.setSession();
		}
		startSession(t) {
			const { scope: n, client: r } = this.getStackTop(),
				{ release: i, environment: s = Nf } = (r && r.getOptions()) || {},
				{ userAgent: o } = rt.navigator || {},
				a = H3({ release: i, environment: s, user: n.getUser(), ...(o && { userAgent: o }), ...t }),
				l = n.getSession && n.getSession();
			return l && l.status === 'ok' && oi(l, { status: 'exited' }), this.endSession(), n.setSession(a), a;
		}
		shouldSendDefaultPii() {
			const t = this.getClient(),
				n = t && t.getOptions();
			return Boolean(n && n.sendDefaultPii);
		}
		_sendSessionUpdate() {
			const { scope: t, client: n } = this.getStackTop(),
				r = t.getSession();
			r && n && n.captureSession && n.captureSession(r);
		}
		_withClient(t) {
			const { scope: n, client: r } = this.getStackTop();
			r && t(r, n);
		}
		_callExtensionMethod(t, ...n) {
			const i = Ws().__SENTRY__;
			if (i && i.extensions && typeof i.extensions[t] == 'function') return i.extensions[t].apply(this, n);
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.warn(`Extension method ${t} couldn't be found, doing nothing.`);
		}
	}
	function Ws() {
		return (rt.__SENTRY__ = rt.__SENTRY__ || { extensions: {}, hub: void 0 }), rt;
	}
	function Yp(e) {
		const t = Ws(),
			n = Wc(t);
		return s1(t, e), n;
	}
	function $() {
		const e = Ws();
		if (e.__SENTRY__ && e.__SENTRY__.acs) {
			const t = e.__SENTRY__.acs.getCurrentHub();
			if (t) return t;
		}
		return q3(e);
	}
	function q3(e = Ws()) {
		return (!V3(e) || Wc(e).isOlderThan(r1)) && s1(e, new i1()), Wc(e);
	}
	function V3(e) {
		return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
	}
	function Wc(e) {
		return bf('hub', () => new i1(), e);
	}
	function s1(e, t) {
		if (!e) return !1;
		const n = (e.__SENTRY__ = e.__SENTRY__ || {});
		return (n.hub = t), !0;
	}
	function Of(e) {
		if (typeof __SENTRY_TRACING__ == 'boolean' && !__SENTRY_TRACING__) return !1;
		const t = $().getClient(),
			n = e || (t && t.getOptions());
		return !!n && (n.enableTracing || 'tracesSampleRate' in n || 'tracesSampler' in n);
	}
	function qs(e) {
		return (e || $()).getScope().getTransaction();
	}
	let Wp = !1;
	function Q3() {
		Wp || ((Wp = !0), Le('error', qc), Le('unhandledrejection', qc));
	}
	function qc() {
		const e = qs();
		if (e) {
			const t = 'internal_error';
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.log(`[Tracing] Transaction: ${t} -> Global error occured`),
				e.setStatus(t);
		}
	}
	qc.tag = 'sentry_tracingErrorCallback';
	class gl {
		__init() {
			this.spans = [];
		}
		constructor(t = 1e3) {
			gl.prototype.__init.call(this), (this._maxlen = t);
		}
		add(t) {
			this.spans.length > this._maxlen ? (t.spanRecorder = void 0) : this.spans.push(t);
		}
	}
	class Qt {
		__init2() {
			this.traceId = nn();
		}
		__init3() {
			this.spanId = nn().substring(16);
		}
		__init4() {
			this.startTimestamp = pr();
		}
		__init5() {
			this.tags = {};
		}
		__init6() {
			this.data = {};
		}
		__init7() {
			this.instrumenter = 'sentry';
		}
		constructor(t) {
			if (
				(Qt.prototype.__init2.call(this),
				Qt.prototype.__init3.call(this),
				Qt.prototype.__init4.call(this),
				Qt.prototype.__init5.call(this),
				Qt.prototype.__init6.call(this),
				Qt.prototype.__init7.call(this),
				!t)
			)
				return this;
			t.traceId && (this.traceId = t.traceId),
				t.spanId && (this.spanId = t.spanId),
				t.parentSpanId && (this.parentSpanId = t.parentSpanId),
				'sampled' in t && (this.sampled = t.sampled),
				t.op && (this.op = t.op),
				t.description && (this.description = t.description),
				t.data && (this.data = t.data),
				t.tags && (this.tags = t.tags),
				t.status && (this.status = t.status),
				t.startTimestamp && (this.startTimestamp = t.startTimestamp),
				t.endTimestamp && (this.endTimestamp = t.endTimestamp),
				t.instrumenter && (this.instrumenter = t.instrumenter);
		}
		startChild(t) {
			const n = new Qt({ ...t, parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId });
			if (
				((n.spanRecorder = this.spanRecorder),
				n.spanRecorder && n.spanRecorder.add(n),
				(n.transaction = this.transaction),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && n.transaction)
			) {
				const r = (t && t.op) || '< unknown op >',
					i = n.transaction.name || '< unknown name >',
					s = n.transaction.spanId,
					o = `[Tracing] Starting '${r}' span on transaction '${i}' (${s}).`;
				(n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: o }), C.log(o);
			}
			return n;
		}
		setTag(t, n) {
			return (this.tags = { ...this.tags, [t]: n }), this;
		}
		setData(t, n) {
			return (this.data = { ...this.data, [t]: n }), this;
		}
		setStatus(t) {
			return (this.status = t), this;
		}
		setHttpStatus(t) {
			this.setTag('http.status_code', String(t));
			const n = K3(t);
			return n !== 'unknown_error' && this.setStatus(n), this;
		}
		isSuccess() {
			return this.status === 'ok';
		}
		finish(t) {
			if (
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				this.transaction &&
				this.transaction.spanId !== this.spanId
			) {
				const { logMessage: n } = this.transaction.metadata.spanMetadata[this.spanId];
				n && C.log(n.replace('Starting', 'Finishing'));
			}
			this.endTimestamp = typeof t == 'number' ? t : pr();
		}
		toTraceparent() {
			let t = '';
			return this.sampled !== void 0 && (t = this.sampled ? '-1' : '-0'), `${this.traceId}-${this.spanId}${t}`;
		}
		toContext() {
			return Yt({
				data: this.data,
				description: this.description,
				endTimestamp: this.endTimestamp,
				op: this.op,
				parentSpanId: this.parentSpanId,
				sampled: this.sampled,
				spanId: this.spanId,
				startTimestamp: this.startTimestamp,
				status: this.status,
				tags: this.tags,
				traceId: this.traceId,
			});
		}
		updateWithContext(t) {
			return (
				(this.data = t.data || {}),
				(this.description = t.description),
				(this.endTimestamp = t.endTimestamp),
				(this.op = t.op),
				(this.parentSpanId = t.parentSpanId),
				(this.sampled = t.sampled),
				(this.spanId = t.spanId || this.spanId),
				(this.startTimestamp = t.startTimestamp || this.startTimestamp),
				(this.status = t.status),
				(this.tags = t.tags || {}),
				(this.traceId = t.traceId || this.traceId),
				this
			);
		}
		getTraceContext() {
			return Yt({
				data: Object.keys(this.data).length > 0 ? this.data : void 0,
				description: this.description,
				op: this.op,
				parent_span_id: this.parentSpanId,
				span_id: this.spanId,
				status: this.status,
				tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
				trace_id: this.traceId,
			});
		}
		toJSON() {
			return Yt({
				data: Object.keys(this.data).length > 0 ? this.data : void 0,
				description: this.description,
				op: this.op,
				parent_span_id: this.parentSpanId,
				span_id: this.spanId,
				start_timestamp: this.startTimestamp,
				status: this.status,
				tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
				timestamp: this.endTimestamp,
				trace_id: this.traceId,
			});
		}
	}
	function K3(e) {
		if (e < 400 && e >= 100) return 'ok';
		if (e >= 400 && e < 500)
			switch (e) {
				case 401:
					return 'unauthenticated';
				case 403:
					return 'permission_denied';
				case 404:
					return 'not_found';
				case 409:
					return 'already_exists';
				case 413:
					return 'failed_precondition';
				case 429:
					return 'resource_exhausted';
				default:
					return 'invalid_argument';
			}
		if (e >= 500 && e < 600)
			switch (e) {
				case 501:
					return 'unimplemented';
				case 503:
					return 'unavailable';
				case 504:
					return 'deadline_exceeded';
				default:
					return 'internal_error';
			}
		return 'unknown_error';
	}
	class Yr extends Qt {
		__init() {
			this._measurements = {};
		}
		__init2() {
			this._contexts = {};
		}
		__init3() {
			this._frozenDynamicSamplingContext = void 0;
		}
		constructor(t, n) {
			super(t),
				Yr.prototype.__init.call(this),
				Yr.prototype.__init2.call(this),
				Yr.prototype.__init3.call(this),
				(this._hub = n || $()),
				(this._name = t.name || ''),
				(this.metadata = { source: 'custom', ...t.metadata, spanMetadata: {} }),
				(this._trimEnd = t.trimEnd),
				(this.transaction = this);
			const r = this.metadata.dynamicSamplingContext;
			r && (this._frozenDynamicSamplingContext = { ...r });
		}
		get name() {
			return this._name;
		}
		set name(t) {
			this.setName(t);
		}
		setName(t, n = 'custom') {
			(this._name = t), (this.metadata.source = n);
		}
		initSpanRecorder(t = 1e3) {
			this.spanRecorder || (this.spanRecorder = new gl(t)), this.spanRecorder.add(this);
		}
		setContext(t, n) {
			n === null ? delete this._contexts[t] : (this._contexts[t] = n);
		}
		setMeasurement(t, n, r = '') {
			this._measurements[t] = { value: n, unit: r };
		}
		setMetadata(t) {
			this.metadata = { ...this.metadata, ...t };
		}
		finish(t) {
			if (this.endTimestamp !== void 0) return;
			this.name ||
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
				(this.name = '<unlabeled transaction>')),
				super.finish(t);
			const n = this._hub.getClient();
			if ((n && n.emit && n.emit('finishTransaction', this), this.sampled !== !0)) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'),
					n && n.recordDroppedEvent('sample_rate', 'transaction');
				return;
			}
			const r = this.spanRecorder ? this.spanRecorder.spans.filter(a => a !== this && a.endTimestamp) : [];
			this._trimEnd &&
				r.length > 0 &&
				(this.endTimestamp = r.reduce((a, l) =>
					a.endTimestamp && l.endTimestamp ? (a.endTimestamp > l.endTimestamp ? a : l) : a
				).endTimestamp);
			const i = this.metadata,
				s = {
					contexts: { ...this._contexts, trace: this.getTraceContext() },
					spans: r,
					start_timestamp: this.startTimestamp,
					tags: this.tags,
					timestamp: this.endTimestamp,
					transaction: this.name,
					type: 'transaction',
					sdkProcessingMetadata: { ...i, dynamicSamplingContext: this.getDynamicSamplingContext() },
					...(i.source && { transaction_info: { source: i.source } }),
				};
			return (
				Object.keys(this._measurements).length > 0 &&
					((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, void 0, 2)),
					(s.measurements = this._measurements)),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
				this._hub.captureEvent(s)
			);
		}
		toContext() {
			const t = super.toContext();
			return Yt({ ...t, name: this.name, trimEnd: this._trimEnd });
		}
		updateWithContext(t) {
			return super.updateWithContext(t), (this.name = t.name || ''), (this._trimEnd = t.trimEnd), this;
		}
		getDynamicSamplingContext() {
			if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
			const t = this._hub || $(),
				n = t && t.getClient();
			if (!n) return {};
			const { environment: r, release: i } = n.getOptions() || {},
				{ publicKey: s } = n.getDsn() || {},
				o = this.metadata.sampleRate,
				a = o !== void 0 ? o.toString() : void 0,
				{ segment: l } = t.getScope().getUser() || {},
				u = this.metadata.source,
				c = u && u !== 'url' ? this.name : void 0,
				d = Yt({
					environment: r || Nf,
					release: i,
					transaction: c,
					user_segment: l,
					public_key: s,
					trace_id: this.traceId,
					sample_rate: a,
				});
			return n.emit && n.emit('createDsc', d), d;
		}
		setHub(t) {
			this._hub = t;
		}
	}
	const Zo = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
		Z3 = 'finishReason',
		Sr = ['heartbeatFailed', 'idleTimeout', 'documentHidden', 'finalTimeout', 'externalFinish', 'cancelled'];
	class X3 extends gl {
		constructor(t, n, r, i) {
			super(i), (this._pushActivity = t), (this._popActivity = n), (this.transactionSpanId = r);
		}
		add(t) {
			t.spanId !== this.transactionSpanId &&
				((t.finish = n => {
					(t.endTimestamp = typeof n == 'number' ? n : pr()), this._popActivity(t.spanId);
				}),
				t.endTimestamp === void 0 && this._pushActivity(t.spanId)),
				super.add(t);
		}
	}
	class _n extends Yr {
		__init() {
			this.activities = {};
		}
		__init2() {
			this._heartbeatCounter = 0;
		}
		__init3() {
			this._finished = !1;
		}
		__init4() {
			this._idleTimeoutCanceledPermanently = !1;
		}
		__init5() {
			this._beforeFinishCallbacks = [];
		}
		__init6() {
			this._finishReason = Sr[4];
		}
		constructor(t, n, r = Zo.idleTimeout, i = Zo.finalTimeout, s = Zo.heartbeatInterval, o = !1) {
			super(t, n),
				(this._idleHub = n),
				(this._idleTimeout = r),
				(this._finalTimeout = i),
				(this._heartbeatInterval = s),
				(this._onScope = o),
				_n.prototype.__init.call(this),
				_n.prototype.__init2.call(this),
				_n.prototype.__init3.call(this),
				_n.prototype.__init4.call(this),
				_n.prototype.__init5.call(this),
				_n.prototype.__init6.call(this),
				o &&
					((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
					n.configureScope(a => a.setSpan(this))),
				this._restartIdleTimeout(),
				setTimeout(() => {
					this._finished || (this.setStatus('deadline_exceeded'), (this._finishReason = Sr[3]), this.finish());
				}, this._finalTimeout);
		}
		finish(t = pr()) {
			if (
				((this._finished = !0),
				(this.activities = {}),
				this.op === 'ui.action.click' && this.setTag(Z3, this._finishReason),
				this.spanRecorder)
			) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('[Tracing] finishing IdleTransaction', new Date(t * 1e3).toISOString(), this.op);
				for (const n of this._beforeFinishCallbacks) n(this, t);
				(this.spanRecorder.spans = this.spanRecorder.spans.filter(n => {
					if (n.spanId === this.spanId) return !0;
					n.endTimestamp ||
						((n.endTimestamp = t),
						n.setStatus('cancelled'),
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(n, void 0, 2)));
					const r = n.startTimestamp < t;
					return (
						r ||
							((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								C.log(
									'[Tracing] discarding Span since it happened after Transaction was finished',
									JSON.stringify(n, void 0, 2)
								)),
						r
					);
				})),
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Tracing] flushing IdleTransaction');
			} else (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Tracing] No active IdleTransaction');
			if (this._onScope) {
				const n = this._idleHub.getScope();
				n.getTransaction() === this && n.setSpan(void 0);
			}
			return super.finish(t);
		}
		registerBeforeFinishCallback(t) {
			this._beforeFinishCallbacks.push(t);
		}
		initSpanRecorder(t) {
			if (!this.spanRecorder) {
				const n = i => {
						this._finished || this._pushActivity(i);
					},
					r = i => {
						this._finished || this._popActivity(i);
					};
				(this.spanRecorder = new X3(n, r, this.spanId, t)),
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('Starting heartbeat'),
					this._pingHeartbeat();
			}
			this.spanRecorder.add(this);
		}
		cancelIdleTimeout(t, { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 }) {
			(this._idleTimeoutCanceledPermanently = n === !1),
				this._idleTimeoutID &&
					(clearTimeout(this._idleTimeoutID),
					(this._idleTimeoutID = void 0),
					Object.keys(this.activities).length === 0 &&
						this._idleTimeoutCanceledPermanently &&
						((this._finishReason = Sr[5]), this.finish(t)));
		}
		setFinishReason(t) {
			this._finishReason = t;
		}
		_restartIdleTimeout(t) {
			this.cancelIdleTimeout(),
				(this._idleTimeoutID = setTimeout(() => {
					!this._finished &&
						Object.keys(this.activities).length === 0 &&
						((this._finishReason = Sr[1]), this.finish(t));
				}, this._idleTimeout));
		}
		_pushActivity(t) {
			this.cancelIdleTimeout(void 0, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently }),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`[Tracing] pushActivity: ${t}`),
				(this.activities[t] = !0),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('[Tracing] new activities count', Object.keys(this.activities).length);
		}
		_popActivity(t) {
			if (
				(this.activities[t] &&
					((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`[Tracing] popActivity ${t}`),
					delete this.activities[t],
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.log('[Tracing] new activities count', Object.keys(this.activities).length)),
				Object.keys(this.activities).length === 0)
			) {
				const n = pr();
				this._idleTimeoutCanceledPermanently
					? ((this._finishReason = Sr[5]), this.finish(n))
					: this._restartIdleTimeout(n + this._idleTimeout / 1e3);
			}
		}
		_beat() {
			if (this._finished) return;
			const t = Object.keys(this.activities).join('');
			t === this._prevHeartbeatString ? this._heartbeatCounter++ : (this._heartbeatCounter = 1),
				(this._prevHeartbeatString = t),
				this._heartbeatCounter >= 3
					? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.log('[Tracing] Transaction finished because of no change for 3 heart beats'),
					  this.setStatus('deadline_exceeded'),
					  (this._finishReason = Sr[0]),
					  this.finish())
					: this._pingHeartbeat();
		}
		_pingHeartbeat() {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
				setTimeout(() => {
					this._beat();
				}, this._heartbeatInterval);
		}
	}
	function J3() {
		const t = this.getScope().getSpan();
		return t ? { 'sentry-trace': t.toTraceparent() } : {};
	}
	function o1(e, t, n) {
		if (!Of(t)) return (e.sampled = !1), e;
		if (e.sampled !== void 0) return e.setMetadata({ sampleRate: Number(e.sampled) }), e;
		let r;
		return (
			typeof t.tracesSampler == 'function'
				? ((r = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(r) }))
				: n.parentSampled !== void 0
				? (r = n.parentSampled)
				: typeof t.tracesSampleRate < 'u'
				? ((r = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(r) }))
				: ((r = 1), e.setMetadata({ sampleRate: r })),
			eT(r)
				? r
					? ((e.sampled = Math.random() < r),
					  e.sampled
							? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
									C.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
							  e)
							: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
									C.log(
										`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
											r
										)})`
									),
							  e))
					: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.log(
								`[Tracing] Discarding transaction because ${
									typeof t.tracesSampler == 'function'
										? 'tracesSampler returned 0 or false'
										: 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
								}`
							),
					  (e.sampled = !1),
					  e)
				: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn('[Tracing] Discarding transaction because of invalid sample rate.'),
				  (e.sampled = !1),
				  e)
		);
	}
	function eT(e) {
		return Fg(e) || !(typeof e == 'number' || typeof e == 'boolean')
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(
						`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
							e
						)} of type ${JSON.stringify(typeof e)}.`
					),
			  !1)
			: e < 0 || e > 1
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
			  !1)
			: !0;
	}
	function tT(e, t) {
		const n = this.getClient(),
			r = (n && n.getOptions()) || {},
			i = r.instrumenter || 'sentry',
			s = e.instrumenter || 'sentry';
		i !== s &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
			(e.sampled = !1));
		let o = new Yr(e, this);
		return (
			(o = o1(o, r, { parentSampled: e.parentSampled, transactionContext: e, ...t })),
			o.sampled && o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
			n && n.emit && n.emit('startTransaction', o),
			o
		);
	}
	function qp(e, t, n, r, i, s, o) {
		const a = e.getClient(),
			l = (a && a.getOptions()) || {};
		let u = new _n(t, e, n, r, o, i);
		return (
			(u = o1(u, l, { parentSampled: t.parentSampled, transactionContext: t, ...s })),
			u.sampled && u.initSpanRecorder(l._experiments && l._experiments.maxSpans),
			a && a.emit && a.emit('startTransaction', u),
			u
		);
	}
	function nT() {
		const e = Ws();
		e.__SENTRY__ &&
			((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
			e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = tT),
			e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = J3),
			Q3());
	}
	function yl(e, t) {
		return $().captureException(e, { captureContext: t });
	}
	function rT(e) {
		$().addBreadcrumb(e);
	}
	function iT(e, t) {
		$().setContext(e, t);
	}
	function a1(e) {
		$().withScope(e);
	}
	const sT = '7';
	function l1(e) {
		const t = e.protocol ? `${e.protocol}:` : '',
			n = e.port ? `:${e.port}` : '';
		return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ''}/api/`;
	}
	function oT(e) {
		return `${l1(e)}${e.projectId}/envelope/`;
	}
	function aT(e, t) {
		return V5({ sentry_key: e.publicKey, sentry_version: sT, ...(t && { sentry_client: `${t.name}/${t.version}` }) });
	}
	function lT(e, t = {}) {
		const n = typeof t == 'string' ? t : t.tunnel,
			r = typeof t == 'string' || !t._metadata ? void 0 : t._metadata.sdk;
		return n || `${oT(e)}?${aT(e, r)}`;
	}
	function uT(e, t) {
		const n = $g(e),
			r = `${l1(n)}embed/error-page/`;
		let i = `dsn=${Ys(n)}`;
		for (const s in t)
			if (s !== 'dsn')
				if (s === 'user') {
					const o = t.user;
					if (!o) continue;
					o.name && (i += `&name=${encodeURIComponent(o.name)}`),
						o.email && (i += `&email=${encodeURIComponent(o.email)}`);
				} else i += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
		return `${r}?${i}`;
	}
	function cT(e, t) {
		return (
			t &&
				((e.sdk = e.sdk || {}),
				(e.sdk.name = e.sdk.name || t.name),
				(e.sdk.version = e.sdk.version || t.version),
				(e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
				(e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
			e
		);
	}
	function dT(e, t, n, r) {
		const i = Cf(n),
			s = { sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && { dsn: Ys(t) }) },
			o = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e];
		return Ti(s, [o]);
	}
	function fT(e, t, n, r) {
		const i = Cf(n),
			s = e.type && e.type !== 'replay_event' ? e.type : 'event';
		cT(e, n && n.sdk);
		const o = Jg(e, i, r, t);
		return delete e.sdkProcessingMetadata, Ti(o, [[{ type: s }, e]]);
	}
	const Vp = [];
	function hT(e) {
		const t = {};
		return (
			e.forEach(n => {
				const { name: r } = n,
					i = t[r];
				(i && !i.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
			}),
			Object.keys(t).map(n => t[n])
		);
	}
	function pT(e) {
		const t = e.defaultIntegrations || [],
			n = e.integrations;
		t.forEach(o => {
			o.isDefaultInstance = !0;
		});
		let r;
		Array.isArray(n) ? (r = [...t, ...n]) : typeof n == 'function' ? (r = Qg(n(t))) : (r = t);
		const i = hT(r),
			s = _T(i, o => o.name === 'Debug');
		if (s !== -1) {
			const [o] = i.splice(s, 1);
			i.push(o);
		}
		return i;
	}
	function mT(e) {
		const t = {};
		return (
			e.forEach(n => {
				n && u1(n, t);
			}),
			t
		);
	}
	function u1(e, t) {
		(t[e.name] = e),
			Vp.indexOf(e.name) === -1 &&
				(e.setupOnce(_l, $),
				Vp.push(e.name),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`Integration installed: ${e.name}`));
	}
	function _T(e, t) {
		for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
		return -1;
	}
	function c1(e, t, n, r) {
		const { normalizeDepth: i = 3, normalizeMaxBreadth: s = 1e3 } = e,
			o = { ...t, event_id: t.event_id || n.event_id || nn(), timestamp: t.timestamp || ml() },
			a = n.integrations || e.integrations.map(c => c.name);
		gT(o, e), vT(o, a), t.type === void 0 && yT(o, e.stackParser);
		let l = r;
		n.captureContext && (l = ir.clone(l).update(n.captureContext));
		let u = hr(o);
		if (l) {
			if (l.getAttachments) {
				const c = [...(n.attachments || []), ...l.getAttachments()];
				c.length && (n.attachments = c);
			}
			u = l.applyToEvent(o, n);
		}
		return u.then(c => (typeof i == 'number' && i > 0 ? ET(c, i, s) : c));
	}
	function gT(e, t) {
		const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = t;
		'environment' in e || (e.environment = 'environment' in t ? n : Nf),
			e.release === void 0 && r !== void 0 && (e.release = r),
			e.dist === void 0 && i !== void 0 && (e.dist = i),
			e.message && (e.message = Ji(e.message, s));
		const o = e.exception && e.exception.values && e.exception.values[0];
		o && o.value && (o.value = Ji(o.value, s));
		const a = e.request;
		a && a.url && (a.url = Ji(a.url, s));
	}
	const Qp = new WeakMap();
	function yT(e, t) {
		const n = rt._sentryDebugIds;
		if (!n) return;
		let r;
		const i = Qp.get(t);
		i ? (r = i) : ((r = new Map()), Qp.set(t, r));
		const s = Object.keys(n).reduce((l, u) => {
				let c;
				const d = r.get(u);
				d ? (c = d) : ((c = t(u)), r.set(u, c));
				for (let h = c.length - 1; h >= 0; h--) {
					const f = c[h];
					if (f.filename) {
						l[f.filename] = n[u];
						break;
					}
				}
				return l;
			}, {}),
			o = new Set();
		try {
			e.exception.values.forEach(l => {
				l.stacktrace.frames.forEach(u => {
					u.filename && o.add(u.filename);
				});
			});
		} catch {}
		(e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
		const a = e.debug_meta.images;
		o.forEach(l => {
			s[l] && a.push({ type: 'sourcemap', code_file: l, debug_id: s[l] });
		});
	}
	function vT(e, t) {
		t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
	}
	function ET(e, t, n) {
		if (!e) return null;
		const r = {
			...e,
			...(e.breadcrumbs && {
				breadcrumbs: e.breadcrumbs.map(i => ({ ...i, ...(i.data && { data: zt(i.data, t, n) }) })),
			}),
			...(e.user && { user: zt(e.user, t, n) }),
			...(e.contexts && { contexts: zt(e.contexts, t, n) }),
			...(e.extra && { extra: zt(e.extra, t, n) }),
		};
		return (
			e.contexts &&
				e.contexts.trace &&
				r.contexts &&
				((r.contexts.trace = e.contexts.trace),
				e.contexts.trace.data && (r.contexts.trace.data = zt(e.contexts.trace.data, t, n))),
			e.spans && (r.spans = e.spans.map(i => (i.data && (i.data = zt(i.data, t, n)), i))),
			r
		);
	}
	const Kp = "Not capturing exception because it's already been captured.";
	class Vn {
		__init() {
			this._integrations = {};
		}
		__init2() {
			this._integrationsInitialized = !1;
		}
		__init3() {
			this._numProcessing = 0;
		}
		__init4() {
			this._outcomes = {};
		}
		__init5() {
			this._hooks = {};
		}
		constructor(t) {
			if (
				(Vn.prototype.__init.call(this),
				Vn.prototype.__init2.call(this),
				Vn.prototype.__init3.call(this),
				Vn.prototype.__init4.call(this),
				Vn.prototype.__init5.call(this),
				(this._options = t),
				t.dsn)
			) {
				this._dsn = $g(t.dsn);
				const n = lT(this._dsn, t);
				this._transport = t.transport({
					recordDroppedEvent: this.recordDroppedEvent.bind(this),
					...t.transportOptions,
					url: n,
				});
			} else
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.warn('No DSN provided, client will not do anything.');
		}
		captureException(t, n, r) {
			if (zp(t)) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(Kp);
				return;
			}
			let i = n && n.event_id;
			return (
				this._process(
					this.eventFromException(t, n)
						.then(s => this._captureEvent(s, n, r))
						.then(s => {
							i = s;
						})
				),
				i
			);
		}
		captureMessage(t, n, r, i) {
			let s = r && r.event_id;
			const o = Bg(t) ? this.eventFromMessage(String(t), n, r) : this.eventFromException(t, r);
			return (
				this._process(
					o
						.then(a => this._captureEvent(a, r, i))
						.then(a => {
							s = a;
						})
				),
				s
			);
		}
		captureEvent(t, n, r) {
			if (n && n.originalException && zp(n.originalException)) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(Kp);
				return;
			}
			let i = n && n.event_id;
			return (
				this._process(
					this._captureEvent(t, n, r).then(s => {
						i = s;
					})
				),
				i
			);
		}
		captureSession(t) {
			if (!this._isEnabled()) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.warn('SDK not enabled, will not capture session.');
				return;
			}
			typeof t.release != 'string'
				? (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				  C.warn('Discarded session because of missing or non-string release')
				: (this.sendSession(t), oi(t, { init: !1 }));
		}
		getDsn() {
			return this._dsn;
		}
		getOptions() {
			return this._options;
		}
		getSdkMetadata() {
			return this._options._metadata;
		}
		getTransport() {
			return this._transport;
		}
		flush(t) {
			const n = this._transport;
			return n ? this._isClientDoneProcessing(t).then(r => n.flush(t).then(i => r && i)) : hr(!0);
		}
		close(t) {
			return this.flush(t).then(n => ((this.getOptions().enabled = !1), n));
		}
		setupIntegrations() {
			this._isEnabled() &&
				!this._integrationsInitialized &&
				((this._integrations = mT(this._options.integrations)), (this._integrationsInitialized = !0));
		}
		getIntegrationById(t) {
			return this._integrations[t];
		}
		getIntegration(t) {
			try {
				return this._integrations[t.id] || null;
			} catch {
				return (
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn(`Cannot retrieve integration ${t.id} from the current Client`),
					null
				);
			}
		}
		addIntegration(t) {
			u1(t, this._integrations);
		}
		sendEvent(t, n = {}) {
			if (this._dsn) {
				let r = fT(t, this._dsn, this._options._metadata, this._options.tunnel);
				for (const s of n.attachments || [])
					r = x3(r, O3(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
				const i = this._sendEnvelope(r);
				i && i.then(s => this.emit('afterSendEvent', t, s), null);
			}
		}
		sendSession(t) {
			if (this._dsn) {
				const n = dT(t, this._dsn, this._options._metadata, this._options.tunnel);
				this._sendEnvelope(n);
			}
		}
		recordDroppedEvent(t, n, r) {
			if (this._options.sendClientReports) {
				const i = `${t}:${n}`;
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`Adding outcome: "${i}"`),
					(this._outcomes[i] = this._outcomes[i] + 1 || 1);
			}
		}
		on(t, n) {
			this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
		}
		emit(t, ...n) {
			this._hooks[t] && this._hooks[t].forEach(r => r(...n));
		}
		_updateSessionFromEvent(t, n) {
			let r = !1,
				i = !1;
			const s = n.exception && n.exception.values;
			if (s) {
				i = !0;
				for (const l of s) {
					const u = l.mechanism;
					if (u && u.handled === !1) {
						r = !0;
						break;
					}
				}
			}
			const o = t.status === 'ok';
			((o && t.errors === 0) || (o && r)) &&
				(oi(t, { ...(r && { status: 'crashed' }), errors: t.errors || Number(i || r) }), this.captureSession(t));
		}
		_isClientDoneProcessing(t) {
			return new Ye(n => {
				let r = 0;
				const i = 1,
					s = setInterval(() => {
						this._numProcessing == 0 ? (clearInterval(s), n(!0)) : ((r += i), t && r >= t && (clearInterval(s), n(!1)));
					}, i);
			});
		}
		_isEnabled() {
			return this.getOptions().enabled !== !1 && this._dsn !== void 0;
		}
		_prepareEvent(t, n, r) {
			const i = this.getOptions(),
				s = Object.keys(this._integrations);
			return !n.integrations && s.length > 0 && (n.integrations = s), c1(i, t, n, r);
		}
		_captureEvent(t, n = {}, r) {
			return this._processEvent(t, n, r).then(
				i => i.event_id,
				i => {
					if (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) {
						const s = i;
						s.logLevel === 'log' ? C.log(s.message) : C.warn(s);
					}
				}
			);
		}
		_processEvent(t, n, r) {
			const i = this.getOptions(),
				{ sampleRate: s } = i;
			if (!this._isEnabled()) return Aa(new He('SDK not enabled, will not capture event.', 'log'));
			const o = f1(t),
				a = d1(t),
				l = t.type || 'error',
				u = `before send for type \`${l}\``;
			if (a && typeof s == 'number' && Math.random() > s)
				return (
					this.recordDroppedEvent('sample_rate', 'error', t),
					Aa(new He(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, 'log'))
				);
			const c = l === 'replay_event' ? 'replay' : l;
			return this._prepareEvent(t, n, r)
				.then(d => {
					if (d === null)
						throw (
							(this.recordDroppedEvent('event_processor', c, t),
							new He('An event processor returned `null`, will not send event.', 'log'))
						);
					if (n.data && n.data.__sentry__ === !0) return d;
					const f = wT(i, d, n);
					return ST(f, u);
				})
				.then(d => {
					if (d === null)
						throw (
							(this.recordDroppedEvent('before_send', c, t),
							new He(`${u} returned \`null\`, will not send event.`, 'log'))
						);
					const h = r && r.getSession();
					!o && h && this._updateSessionFromEvent(h, d);
					const f = d.transaction_info;
					if (o && f && d.transaction !== t.transaction) {
						const _ = 'custom';
						d.transaction_info = { ...f, source: _ };
					}
					return this.sendEvent(d, n), d;
				})
				.then(null, d => {
					throw d instanceof He
						? d
						: (this.captureException(d, { data: { __sentry__: !0 }, originalException: d }),
						  new He(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`));
				});
		}
		_process(t) {
			this._numProcessing++,
				t.then(
					n => (this._numProcessing--, n),
					n => (this._numProcessing--, n)
				);
		}
		_sendEnvelope(t) {
			if (this._transport && this._dsn)
				return (
					this.emit('beforeEnvelope', t),
					this._transport.send(t).then(null, n => {
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('Error while sending event:', n);
					})
				);
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('Transport disabled');
		}
		_clearOutcomes() {
			const t = this._outcomes;
			return (
				(this._outcomes = {}),
				Object.keys(t).map(n => {
					const [r, i] = n.split(':');
					return { reason: r, category: i, quantity: t[n] };
				})
			);
		}
	}
	function ST(e, t) {
		const n = `${t} must return \`null\` or a valid event.`;
		if (Rf(e))
			return e.then(
				r => {
					if (!si(r) && r !== null) throw new He(n);
					return r;
				},
				r => {
					throw new He(`${t} rejected with ${r}`);
				}
			);
		if (!si(e) && e !== null) throw new He(n);
		return e;
	}
	function wT(e, t, n) {
		const { beforeSend: r, beforeSendTransaction: i } = e;
		return d1(t) && r ? r(t, n) : f1(t) && i ? i(t, n) : t;
	}
	function d1(e) {
		return e.type === void 0;
	}
	function f1(e) {
		return e.type === 'transaction';
	}
	function TT(e, t) {
		t.debug === !0 &&
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__
				? C.enable()
				: console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'));
		const n = $();
		n.getScope().update(t.initialScope);
		const i = new e(t);
		n.bindClient(i);
	}
	const RT = 30;
	function h1(e, t, n = E3(e.bufferSize || RT)) {
		let r = {};
		const i = o => n.drain(o);
		function s(o) {
			const a = [];
			if (
				(Hp(o, (d, h) => {
					const f = jp(h);
					if (M3(r, f)) {
						const _ = Zp(d, h);
						e.recordDroppedEvent('ratelimit_backoff', f, _);
					} else a.push(d);
				}),
				a.length === 0)
			)
				return hr();
			const l = Ti(o[0], a),
				u = d => {
					Hp(l, (h, f) => {
						const _ = Zp(h, f);
						e.recordDroppedEvent(d, jp(f), _);
					});
				},
				c = () =>
					t({ body: C3(l, e.textEncoder) }).then(
						d => (
							d.statusCode !== void 0 &&
								(d.statusCode < 200 || d.statusCode >= 300) &&
								(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								C.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),
							(r = U3(r, d)),
							d
						),
						d => {
							throw (u('network_error'), d);
						}
					);
			return n.add(c).then(
				d => d,
				d => {
					if (d instanceof He)
						return (
							(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								C.error('Skipped sending event because buffer is full.'),
							u('queue_overflow'),
							hr()
						);
					throw d;
				}
			);
		}
		return (s.__sentry__baseTransport__ = !0), { send: s, flush: i };
	}
	function Zp(e, t) {
		if (!(t !== 'event' && t !== 'transaction')) return Array.isArray(e) ? e[1] : void 0;
	}
	const Pa = '7.51.2';
	let Xp;
	class Cs {
		constructor() {
			Cs.prototype.__init.call(this);
		}
		static __initStatic() {
			this.id = 'FunctionToString';
		}
		__init() {
			this.name = Cs.id;
		}
		setupOnce() {
			Xp = Function.prototype.toString;
			try {
				Function.prototype.toString = function (...t) {
					const n = xf(this) || this;
					return Xp.apply(n, t);
				};
			} catch {}
		}
	}
	Cs.__initStatic();
	const bT = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
	class Wr {
		static __initStatic() {
			this.id = 'InboundFilters';
		}
		__init() {
			this.name = Wr.id;
		}
		constructor(t = {}) {
			(this._options = t), Wr.prototype.__init.call(this);
		}
		setupOnce(t, n) {
			const r = i => {
				const s = n();
				if (s) {
					const o = s.getIntegration(Wr);
					if (o) {
						const a = s.getClient(),
							l = a ? a.getOptions() : {},
							u = kT(o._options, l);
						return xT(i, u) ? null : i;
					}
				}
				return i;
			};
			(r.id = this.name), t(r);
		}
	}
	Wr.__initStatic();
	function kT(e = {}, t = {}) {
		return {
			allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
			denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
			ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...bT],
			ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
			ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
		};
	}
	function xT(e, t) {
		return t.ignoreInternal && AT(e)
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`Event dropped due to being internal Sentry Error.
Event: ${vn(e)}`),
			  !0)
			: CT(e, t.ignoreErrors)
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${vn(e)}`),
			  !0)
			: NT(e, t.ignoreTransactions)
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${vn(e)}`),
			  !0)
			: OT(e, t.denyUrls)
			? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${vn(e)}.
Url: ${La(e)}`),
			  !0)
			: IT(e, t.allowUrls)
			? !1
			: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${vn(e)}.
Url: ${La(e)}`),
			  !0);
	}
	function CT(e, t) {
		return e.type || !t || !t.length ? !1 : DT(e).some(n => wi(n, t));
	}
	function NT(e, t) {
		if (e.type !== 'transaction' || !t || !t.length) return !1;
		const n = e.transaction;
		return n ? wi(n, t) : !1;
	}
	function OT(e, t) {
		if (!t || !t.length) return !1;
		const n = La(e);
		return n ? wi(n, t) : !1;
	}
	function IT(e, t) {
		if (!t || !t.length) return !0;
		const n = La(e);
		return n ? wi(n, t) : !0;
	}
	function DT(e) {
		if (e.message) return [e.message];
		if (e.exception)
			try {
				const { type: t = '', value: n = '' } = (e.exception.values && e.exception.values[0]) || {};
				return [`${n}`, `${t}: ${n}`];
			} catch {
				return (
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error(`Cannot extract message for event ${vn(e)}`),
					[]
				);
			}
		return [];
	}
	function AT(e) {
		try {
			return e.exception.values[0].type === 'SentryError';
		} catch {}
		return !1;
	}
	function PT(e = []) {
		for (let t = e.length - 1; t >= 0; t--) {
			const n = e[t];
			if (n && n.filename !== '<anonymous>' && n.filename !== '[native code]') return n.filename || null;
		}
		return null;
	}
	function La(e) {
		try {
			let t;
			try {
				t = e.exception.values[0].stacktrace.frames;
			} catch {}
			return t ? PT(t) : null;
		} catch {
			return (
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error(`Cannot extract url for event ${vn(e)}`), null
			);
		}
	}
	const V = rt;
	let Vc = 0;
	function p1() {
		return Vc > 0;
	}
	function LT() {
		Vc++,
			setTimeout(() => {
				Vc--;
			});
	}
	function ai(e, t = {}, n) {
		if (typeof e != 'function') return e;
		try {
			const i = e.__sentry_wrapped__;
			if (i) return i;
			if (xf(e)) return e;
		} catch {
			return e;
		}
		const r = function () {
			const i = Array.prototype.slice.call(arguments);
			try {
				n && typeof n == 'function' && n.apply(this, arguments);
				const s = i.map(o => ai(o, t));
				return e.apply(this, s);
			} catch (s) {
				throw (
					(LT(),
					a1(o => {
						o.addEventProcessor(
							a => (
								t.mechanism && ($c(a, void 0, void 0), xs(a, t.mechanism)), (a.extra = { ...a.extra, arguments: i }), a
							)
						),
							yl(s);
					}),
					s)
				);
			}
		};
		try {
			for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
		} catch {}
		jg(r, e), kf(e, '__sentry_wrapped__', r);
		try {
			Object.getOwnPropertyDescriptor(r, 'name').configurable &&
				Object.defineProperty(r, 'name', {
					get() {
						return e.name;
					},
				});
		} catch {}
		return r;
	}
	function m1(e, t) {
		const n = If(e, t),
			r = { type: t && t.name, value: FT(t) };
		return (
			n.length && (r.stacktrace = { frames: n }),
			r.type === void 0 && r.value === '' && (r.value = 'Unrecoverable error caught'),
			r
		);
	}
	function MT(e, t, n, r) {
		const s = $().getClient(),
			o = s && s.getOptions().normalizeDepth,
			a = {
				exception: {
					values: [
						{
							type: Tf(t) ? t.constructor.name : r ? 'UnhandledRejection' : 'Error',
							value: `Non-Error ${r ? 'promise rejection' : 'exception'} captured with keys: ${Q5(t)}`,
						},
					],
				},
				extra: { __serialized__: Zg(t, o) },
			};
		if (n) {
			const l = If(e, n);
			l.length && (a.exception.values[0].stacktrace = { frames: l });
		}
		return a;
	}
	function Eu(e, t) {
		return { exception: { values: [m1(e, t)] } };
	}
	function If(e, t) {
		const n = t.stacktrace || t.stack || '',
			r = BT(t);
		try {
			return e(n, r);
		} catch {}
		return [];
	}
	const UT = /Minified React error #\d+;/i;
	function BT(e) {
		if (e) {
			if (typeof e.framesToPop == 'number') return e.framesToPop;
			if (UT.test(e.message)) return 1;
		}
		return 0;
	}
	function FT(e) {
		const t = e && e.message;
		return t ? (t.error && typeof t.error.message == 'string' ? t.error.message : t) : 'No error message';
	}
	function zT(e, t, n, r) {
		const i = (n && n.syntheticException) || void 0,
			s = Df(e, t, i, r);
		return xs(s), (s.level = 'error'), n && n.event_id && (s.event_id = n.event_id), hr(s);
	}
	function $T(e, t, n = 'info', r, i) {
		const s = (r && r.syntheticException) || void 0,
			o = Qc(e, t, s, i);
		return (o.level = n), r && r.event_id && (o.event_id = r.event_id), hr(o);
	}
	function Df(e, t, n, r, i) {
		let s;
		if (Ug(t) && t.error) return Eu(e, t.error);
		if (Ip(t) || P5(t)) {
			const o = t;
			if ('stack' in t) s = Eu(e, t);
			else {
				const a = o.name || (Ip(o) ? 'DOMError' : 'DOMException'),
					l = o.message ? `${a}: ${o.message}` : a;
				(s = Qc(e, l, n, r)), $c(s, l);
			}
			return 'code' in o && (s.tags = { ...s.tags, 'DOMException.code': `${o.code}` }), s;
		}
		return wf(t)
			? Eu(e, t)
			: si(t) || Tf(t)
			? ((s = MT(e, t, n, i)), xs(s, { synthetic: !0 }), s)
			: ((s = Qc(e, t, n, r)), $c(s, `${t}`, void 0), xs(s, { synthetic: !0 }), s);
	}
	function Qc(e, t, n, r) {
		const i = { message: t };
		if (r && n) {
			const s = If(e, n);
			s.length && (i.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
		}
		return i;
	}
	const bo = 1024,
		_1 = 'Breadcrumbs';
	class Ns {
		static __initStatic() {
			this.id = _1;
		}
		__init() {
			this.name = Ns.id;
		}
		constructor(t) {
			Ns.prototype.__init.call(this),
				(this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t });
		}
		setupOnce() {
			this.options.console && Le('console', jT),
				this.options.dom && Le('dom', HT(this.options.dom)),
				this.options.xhr && Le('xhr', GT),
				this.options.fetch && Le('fetch', YT),
				this.options.history && Le('history', WT);
		}
		addSentryBreadcrumb(t) {
			this.options.sentry &&
				$().addBreadcrumb(
					{
						category: `sentry.${t.type === 'transaction' ? 'transaction' : 'event'}`,
						event_id: t.event_id,
						level: t.level,
						message: vn(t),
					},
					{ event: t }
				);
		}
	}
	Ns.__initStatic();
	function HT(e) {
		function t(n) {
			let r,
				i = typeof e == 'object' ? e.serializeAttribute : void 0,
				s = typeof e == 'object' && typeof e.maxStringLength == 'number' ? e.maxStringLength : void 0;
			s &&
				s > bo &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(
						`\`dom.maxStringLength\` cannot exceed ${bo}, but a value of ${s} was configured. Sentry will use ${bo} instead.`
					),
				(s = bo)),
				typeof i == 'string' && (i = [i]);
			try {
				const o = n.event;
				r = qT(o) ? fr(o.target, { keyAttrs: i, maxStringLength: s }) : fr(o, { keyAttrs: i, maxStringLength: s });
			} catch {
				r = '<unknown>';
			}
			r.length !== 0 &&
				$().addBreadcrumb({ category: `ui.${n.name}`, message: r }, { event: n.event, name: n.name, global: n.global });
		}
		return t;
	}
	function jT(e) {
		for (let n = 0; n < e.args.length; n++)
			if (e.args[n] === 'ref=Ref<') {
				e.args[n + 1] = 'viewRef';
				break;
			}
		const t = {
			category: 'console',
			data: { arguments: e.args, logger: 'console' },
			level: w3(e.level),
			message: Ap(e.args, ' '),
		};
		if (e.level === 'assert')
			if (e.args[0] === !1)
				(t.message = `Assertion failed: ${Ap(e.args.slice(1), ' ') || 'console.assert'}`),
					(t.data.arguments = e.args.slice(1));
			else return;
		$().addBreadcrumb(t, { input: e.args, level: e.level });
	}
	function GT(e) {
		const { startTimestamp: t, endTimestamp: n } = e,
			r = e.xhr[Rn];
		if (!t || !n || !r) return;
		const { method: i, url: s, status_code: o, body: a } = r,
			l = { method: i, url: s, status_code: o },
			u = { xhr: e.xhr, input: a, startTimestamp: t, endTimestamp: n };
		$().addBreadcrumb({ category: 'xhr', data: l, type: 'http' }, u);
	}
	function YT(e) {
		const { startTimestamp: t, endTimestamp: n } = e;
		if (n && !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === 'POST'))
			if (e.error) {
				const r = e.fetchData,
					i = { data: e.error, input: e.args, startTimestamp: t, endTimestamp: n };
				$().addBreadcrumb({ category: 'fetch', data: r, level: 'error', type: 'http' }, i);
			} else {
				const r = { ...e.fetchData, status_code: e.response && e.response.status },
					i = { input: e.args, response: e.response, startTimestamp: t, endTimestamp: n };
				$().addBreadcrumb({ category: 'fetch', data: r, type: 'http' }, i);
			}
	}
	function WT(e) {
		let t = e.from,
			n = e.to;
		const r = yu(V.location.href);
		let i = yu(t);
		const s = yu(n);
		i.path || (i = r),
			r.protocol === s.protocol && r.host === s.host && (n = s.relative),
			r.protocol === i.protocol && r.host === i.host && (t = i.relative),
			$().addBreadcrumb({ category: 'navigation', data: { from: t, to: n } });
	}
	function qT(e) {
		return e && !!e.target;
	}
	function VT(e, { metadata: t, tunnel: n, dsn: r }) {
		const i = {
				event_id: e.event_id,
				sent_at: new Date().toISOString(),
				...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
				...(!!n && !!r && { dsn: Ys(r) }),
			},
			s = QT(e);
		return Ti(i, [s]);
	}
	function QT(e) {
		return [{ type: 'user_report' }, e];
	}
	class KT extends Vn {
		constructor(t) {
			const n = V.SENTRY_SDK_SOURCE || p3();
			(t._metadata = t._metadata || {}),
				(t._metadata.sdk = t._metadata.sdk || {
					name: 'sentry.javascript.browser',
					packages: [{ name: `${n}:@sentry/browser`, version: Pa }],
					version: Pa,
				}),
				super(t),
				t.sendClientReports &&
					V.document &&
					V.document.addEventListener('visibilitychange', () => {
						V.document.visibilityState === 'hidden' && this._flushOutcomes();
					});
		}
		eventFromException(t, n) {
			return zT(this._options.stackParser, t, n, this._options.attachStacktrace);
		}
		eventFromMessage(t, n = 'info', r) {
			return $T(this._options.stackParser, t, n, r, this._options.attachStacktrace);
		}
		sendEvent(t, n) {
			const r = this.getIntegrationById(_1);
			r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), super.sendEvent(t, n);
		}
		captureUserFeedback(t) {
			if (!this._isEnabled()) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('SDK not enabled, will not capture user feedback.');
				return;
			}
			const n = VT(t, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
			this._sendEnvelope(n);
		}
		_prepareEvent(t, n, r) {
			return (t.platform = t.platform || 'javascript'), super._prepareEvent(t, n, r);
		}
		_flushOutcomes() {
			const t = this._clearOutcomes();
			if (t.length === 0) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('No outcomes to send');
				return;
			}
			if (!this._dsn) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('No dsn provided, will not send outcomes');
				return;
			}
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('Sending outcomes:', t);
			const n = D3(t, this._options.tunnel && Ys(this._dsn));
			this._sendEnvelope(n);
		}
	}
	let zi;
	function ZT() {
		if (zi) return zi;
		if (Fc(V.fetch)) return (zi = V.fetch.bind(V));
		const e = V.document;
		let t = V.fetch;
		if (e && typeof e.createElement == 'function')
			try {
				const n = e.createElement('iframe');
				(n.hidden = !0), e.head.appendChild(n);
				const r = n.contentWindow;
				r && r.fetch && (t = r.fetch), e.head.removeChild(n);
			} catch (n) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', n);
			}
		return (zi = t.bind(V));
	}
	function XT() {
		zi = void 0;
	}
	function JT(e, t = ZT()) {
		let n = 0,
			r = 0;
		function i(s) {
			const o = s.body.length;
			(n += o), r++;
			const a = {
				body: s.body,
				method: 'POST',
				referrerPolicy: 'origin',
				headers: e.headers,
				keepalive: n <= 6e4 && r < 15,
				...e.fetchOptions,
			};
			try {
				return t(e.url, a).then(
					l => (
						(n -= o),
						r--,
						{
							statusCode: l.status,
							headers: {
								'x-sentry-rate-limits': l.headers.get('X-Sentry-Rate-Limits'),
								'retry-after': l.headers.get('Retry-After'),
							},
						}
					)
				);
			} catch (l) {
				return XT(), (n -= o), r--, Aa(l);
			}
		}
		return h1(e, i);
	}
	const eR = 4;
	function tR(e) {
		function t(n) {
			return new Ye((r, i) => {
				const s = new XMLHttpRequest();
				(s.onerror = i),
					(s.onreadystatechange = () => {
						s.readyState === eR &&
							r({
								statusCode: s.status,
								headers: {
									'x-sentry-rate-limits': s.getResponseHeader('X-Sentry-Rate-Limits'),
									'retry-after': s.getResponseHeader('Retry-After'),
								},
							});
					}),
					s.open('POST', e.url);
				for (const o in e.headers)
					Object.prototype.hasOwnProperty.call(e.headers, o) && s.setRequestHeader(o, e.headers[o]);
				s.send(n.body);
			});
		}
		return h1(e, t);
	}
	const vl = '?',
		nR = 30,
		rR = 40,
		iR = 50;
	function Af(e, t, n, r) {
		const i = { filename: e, function: t, in_app: !0 };
		return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
	}
	const sR =
			/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
		oR = /\((\S*)(?::(\d+))(?::(\d+))\)/,
		aR = e => {
			const t = sR.exec(e);
			if (t) {
				if (t[2] && t[2].indexOf('eval') === 0) {
					const s = oR.exec(t[2]);
					s && ((t[2] = s[1]), (t[3] = s[2]), (t[4] = s[3]));
				}
				const [r, i] = g1(t[1] || vl, t[2]);
				return Af(i, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
			}
		},
		lR = [nR, aR],
		uR =
			/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
		cR = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
		dR = e => {
			const t = uR.exec(e);
			if (t) {
				if (t[3] && t[3].indexOf(' > eval') > -1) {
					const s = cR.exec(t[3]);
					s && ((t[1] = t[1] || 'eval'), (t[3] = s[1]), (t[4] = s[2]), (t[5] = ''));
				}
				let r = t[3],
					i = t[1] || vl;
				return ([i, r] = g1(i, r)), Af(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
			}
		},
		fR = [iR, dR],
		hR = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
		pR = e => {
			const t = hR.exec(e);
			return t ? Af(t[2], t[1] || vl, +t[3], t[4] ? +t[4] : void 0) : void 0;
		},
		mR = [rR, pR],
		_R = [lR, fR, mR],
		gR = Wg(..._R),
		g1 = (e, t) => {
			const n = e.indexOf('safari-extension') !== -1,
				r = e.indexOf('safari-web-extension') !== -1;
			return n || r
				? [e.indexOf('@') !== -1 ? e.split('@')[0] : vl, n ? `safari-extension:${t}` : `safari-web-extension:${t}`]
				: [e, t];
		};
	class Ln {
		static __initStatic() {
			this.id = 'GlobalHandlers';
		}
		__init() {
			this.name = Ln.id;
		}
		__init2() {
			this._installFunc = { onerror: yR, onunhandledrejection: vR };
		}
		constructor(t) {
			Ln.prototype.__init.call(this),
				Ln.prototype.__init2.call(this),
				(this._options = { onerror: !0, onunhandledrejection: !0, ...t });
		}
		setupOnce() {
			Error.stackTraceLimit = 50;
			const t = this._options;
			for (const n in t) {
				const r = this._installFunc[n];
				r && t[n] && (wR(n), r(), (this._installFunc[n] = void 0));
			}
		}
	}
	Ln.__initStatic();
	function yR() {
		Le('error', e => {
			const [t, n, r] = E1();
			if (!t.getIntegration(Ln)) return;
			const { msg: i, url: s, line: o, column: a, error: l } = e;
			if (p1() || (l && l.__sentry_own_request__)) return;
			const u = l === void 0 && Bn(i) ? SR(i, s, o, a) : y1(Df(n, l || i, void 0, r, !1), s, o, a);
			(u.level = 'error'), v1(t, l, u, 'onerror');
		});
	}
	function vR() {
		Le('unhandledrejection', e => {
			const [t, n, r] = E1();
			if (!t.getIntegration(Ln)) return;
			let i = e;
			try {
				'reason' in e ? (i = e.reason) : 'detail' in e && 'reason' in e.detail && (i = e.detail.reason);
			} catch {}
			if (p1() || (i && i.__sentry_own_request__)) return !0;
			const s = Bg(i) ? ER(i) : Df(n, i, void 0, r, !0);
			(s.level = 'error'), v1(t, i, s, 'onunhandledrejection');
		});
	}
	function ER(e) {
		return {
			exception: {
				values: [
					{ type: 'UnhandledRejection', value: `Non-Error promise rejection captured with value: ${String(e)}` },
				],
			},
		};
	}
	function SR(e, t, n, r) {
		const i =
			/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
		let s = Ug(e) ? e.message : e,
			o = 'Error';
		const a = s.match(i);
		return a && ((o = a[1]), (s = a[2])), y1({ exception: { values: [{ type: o, value: s }] } }, t, n, r);
	}
	function y1(e, t, n, r) {
		const i = (e.exception = e.exception || {}),
			s = (i.values = i.values || []),
			o = (s[0] = s[0] || {}),
			a = (o.stacktrace = o.stacktrace || {}),
			l = (a.frames = a.frames || []),
			u = isNaN(parseInt(r, 10)) ? void 0 : r,
			c = isNaN(parseInt(n, 10)) ? void 0 : n,
			d = Bn(t) && t.length > 0 ? t : z5();
		return l.length === 0 && l.push({ colno: u, filename: d, function: '?', in_app: !0, lineno: c }), e;
	}
	function wR(e) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`Global Handler attached: ${e}`);
	}
	function v1(e, t, n, r) {
		xs(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
	}
	function E1() {
		const e = $(),
			t = e.getClient(),
			n = (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
		return [e, n.stackParser, n.attachStacktrace];
	}
	const TR = [
		'EventTarget',
		'Window',
		'Node',
		'ApplicationCache',
		'AudioTrackList',
		'ChannelMergerNode',
		'CryptoOperation',
		'EventSource',
		'FileReader',
		'HTMLUnknownElement',
		'IDBDatabase',
		'IDBRequest',
		'IDBTransaction',
		'KeyOperation',
		'MediaController',
		'MessagePort',
		'ModalWindow',
		'Notification',
		'SVGElementInstance',
		'Screen',
		'TextTrack',
		'TextTrackCue',
		'TextTrackList',
		'WebSocket',
		'WebSocketWorker',
		'Worker',
		'XMLHttpRequest',
		'XMLHttpRequestEventTarget',
		'XMLHttpRequestUpload',
	];
	class Os {
		static __initStatic() {
			this.id = 'TryCatch';
		}
		__init() {
			this.name = Os.id;
		}
		constructor(t) {
			Os.prototype.__init.call(this),
				(this._options = {
					XMLHttpRequest: !0,
					eventTarget: !0,
					requestAnimationFrame: !0,
					setInterval: !0,
					setTimeout: !0,
					...t,
				});
		}
		setupOnce() {
			this._options.setTimeout && Me(V, 'setTimeout', Jp),
				this._options.setInterval && Me(V, 'setInterval', Jp),
				this._options.requestAnimationFrame && Me(V, 'requestAnimationFrame', RR),
				this._options.XMLHttpRequest && 'XMLHttpRequest' in V && Me(XMLHttpRequest.prototype, 'send', bR);
			const t = this._options.eventTarget;
			t && (Array.isArray(t) ? t : TR).forEach(kR);
		}
	}
	Os.__initStatic();
	function Jp(e) {
		return function (...t) {
			const n = t[0];
			return (
				(t[0] = ai(n, { mechanism: { data: { function: zn(e) }, handled: !0, type: 'instrument' } })), e.apply(this, t)
			);
		};
	}
	function RR(e) {
		return function (t) {
			return e.apply(this, [
				ai(t, {
					mechanism: { data: { function: 'requestAnimationFrame', handler: zn(e) }, handled: !0, type: 'instrument' },
				}),
			]);
		};
	}
	function bR(e) {
		return function (...t) {
			const n = this;
			return (
				['onload', 'onerror', 'onprogress', 'onreadystatechange'].forEach(i => {
					i in n &&
						typeof n[i] == 'function' &&
						Me(n, i, function (s) {
							const o = { mechanism: { data: { function: i, handler: zn(s) }, handled: !0, type: 'instrument' } },
								a = xf(s);
							return a && (o.mechanism.data.handler = zn(a)), ai(s, o);
						});
				}),
				e.apply(this, t)
			);
		};
	}
	function kR(e) {
		const t = V,
			n = t[e] && t[e].prototype;
		!n ||
			!n.hasOwnProperty ||
			!n.hasOwnProperty('addEventListener') ||
			(Me(n, 'addEventListener', function (r) {
				return function (i, s, o) {
					try {
						typeof s.handleEvent == 'function' &&
							(s.handleEvent = ai(s.handleEvent, {
								mechanism: {
									data: { function: 'handleEvent', handler: zn(s), target: e },
									handled: !0,
									type: 'instrument',
								},
							}));
					} catch {}
					return r.apply(this, [
						i,
						ai(s, {
							mechanism: {
								data: { function: 'addEventListener', handler: zn(s), target: e },
								handled: !0,
								type: 'instrument',
							},
						}),
						o,
					]);
				};
			}),
			Me(n, 'removeEventListener', function (r) {
				return function (i, s, o) {
					const a = s;
					try {
						const l = a && a.__sentry_wrapped__;
						l && r.call(this, i, l, o);
					} catch {}
					return r.call(this, i, a, o);
				};
			}));
	}
	const xR = 'cause',
		CR = 5;
	class qr {
		static __initStatic() {
			this.id = 'LinkedErrors';
		}
		__init() {
			this.name = qr.id;
		}
		constructor(t = {}) {
			qr.prototype.__init.call(this), (this._key = t.key || xR), (this._limit = t.limit || CR);
		}
		setupOnce() {
			const t = $().getClient();
			t &&
				_l((n, r) => {
					const i = $().getIntegration(qr);
					return i ? NR(t.getOptions().stackParser, i._key, i._limit, n, r) : n;
				});
		}
	}
	qr.__initStatic();
	function NR(e, t, n, r, i) {
		if (!r.exception || !r.exception.values || !i || !Fn(i.originalException, Error)) return r;
		const s = S1(e, n, i.originalException, t);
		return (r.exception.values = [...s, ...r.exception.values]), r;
	}
	function S1(e, t, n, r, i = []) {
		if (!Fn(n[r], Error) || i.length + 1 >= t) return i;
		const s = m1(e, n[r]);
		return S1(e, t, n[r], r, [s, ...i]);
	}
	class Vr {
		constructor() {
			Vr.prototype.__init.call(this);
		}
		static __initStatic() {
			this.id = 'HttpContext';
		}
		__init() {
			this.name = Vr.id;
		}
		setupOnce() {
			_l(t => {
				if ($().getIntegration(Vr)) {
					if (!V.navigator && !V.location && !V.document) return t;
					const n = (t.request && t.request.url) || (V.location && V.location.href),
						{ referrer: r } = V.document || {},
						{ userAgent: i } = V.navigator || {},
						s = { ...(t.request && t.request.headers), ...(r && { Referer: r }), ...(i && { 'User-Agent': i }) },
						o = { ...t.request, ...(n && { url: n }), headers: s };
					return { ...t, request: o };
				}
				return t;
			});
		}
	}
	Vr.__initStatic();
	class Qr {
		constructor() {
			Qr.prototype.__init.call(this);
		}
		static __initStatic() {
			this.id = 'Dedupe';
		}
		__init() {
			this.name = Qr.id;
		}
		setupOnce(t, n) {
			const r = i => {
				if (i.type) return i;
				const s = n().getIntegration(Qr);
				if (s) {
					try {
						if (OR(i, s._previousEvent))
							return (
								(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
									C.warn('Event dropped due to being a duplicate of previously captured event.'),
								null
							);
					} catch {
						return (s._previousEvent = i);
					}
					return (s._previousEvent = i);
				}
				return i;
			};
			(r.id = this.name), t(r);
		}
	}
	Qr.__initStatic();
	function OR(e, t) {
		return t ? !!(IR(e, t) || DR(e, t)) : !1;
	}
	function IR(e, t) {
		const n = e.message,
			r = t.message;
		return !((!n && !r) || (n && !r) || (!n && r) || n !== r || !T1(e, t) || !w1(e, t));
	}
	function DR(e, t) {
		const n = em(t),
			r = em(e);
		return !(!n || !r || n.type !== r.type || n.value !== r.value || !T1(e, t) || !w1(e, t));
	}
	function w1(e, t) {
		let n = tm(e),
			r = tm(t);
		if (!n && !r) return !0;
		if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length)) return !1;
		for (let i = 0; i < r.length; i++) {
			const s = r[i],
				o = n[i];
			if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function)
				return !1;
		}
		return !0;
	}
	function T1(e, t) {
		let n = e.fingerprint,
			r = t.fingerprint;
		if (!n && !r) return !0;
		if ((n && !r) || (!n && r)) return !1;
		(n = n), (r = r);
		try {
			return n.join('') === r.join('');
		} catch {
			return !1;
		}
	}
	function em(e) {
		return e.exception && e.exception.values && e.exception.values[0];
	}
	function tm(e) {
		const t = e.exception;
		if (t)
			try {
				return t.values[0].stacktrace.frames;
			} catch {
				return;
			}
	}
	const AR = [new Wr(), new Cs(), new Os(), new Ns(), new Ln(), new qr(), new Qr(), new Vr()];
	function PR(e = {}) {
		e.defaultIntegrations === void 0 && (e.defaultIntegrations = AR),
			e.release === void 0 &&
				(typeof __SENTRY_RELEASE__ == 'string' && (e.release = __SENTRY_RELEASE__),
				V.SENTRY_RELEASE && V.SENTRY_RELEASE.id && (e.release = V.SENTRY_RELEASE.id)),
			e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
			e.sendClientReports === void 0 && (e.sendClientReports = !0);
		const t = {
			...e,
			stackParser: K5(e.stackParser || gR),
			integrations: pT(e),
			transport: e.transport || (qg() ? JT : tR),
		};
		TT(KT, t), e.autoSessionTracking && LR();
	}
	function nm(e = {}, t = $()) {
		if (!V.document) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.error('Global document not defined in showReportDialog call');
			return;
		}
		const { client: n, scope: r } = t.getStackTop(),
			i = e.dsn || (n && n.getDsn());
		if (!i) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('DSN not configured for showReportDialog call');
			return;
		}
		r && (e.user = { ...r.getUser(), ...e.user }), e.eventId || (e.eventId = t.lastEventId());
		const s = V.document.createElement('script');
		(s.async = !0), (s.src = uT(i, e)), e.onLoad && (s.onload = e.onLoad);
		const o = V.document.head || V.document.body;
		o
			? o.appendChild(s)
			: (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			  C.error('Not injecting report dialog. No injection point found in HTML');
	}
	function rm(e) {
		e.startSession({ ignoreDuration: !0 }), e.captureSession();
	}
	function LR() {
		if (typeof V.document > 'u') {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
			return;
		}
		const e = $();
		e.captureSession &&
			(rm(e),
			Le('history', ({ from: t, to: n }) => {
				t === void 0 || t === n || rm($());
			}));
	}
	const ue = rt,
		Pf = 'sentryReplaySession',
		MR = 'replay_event',
		Lf = 'Unable to send Replay',
		UR = 3e5,
		BR = 9e5,
		FR = 36e5,
		zR = 5e3,
		$R = 5500,
		HR = 6e4,
		jR = 5e3,
		GR = 3,
		ko = 15e4,
		xo = 5e3;
	var Ce;
	(function (e) {
		(e[(e.Document = 0)] = 'Document'),
			(e[(e.DocumentType = 1)] = 'DocumentType'),
			(e[(e.Element = 2)] = 'Element'),
			(e[(e.Text = 3)] = 'Text'),
			(e[(e.CDATA = 4)] = 'CDATA'),
			(e[(e.Comment = 5)] = 'Comment');
	})(Ce || (Ce = {}));
	function YR(e) {
		return e.nodeType === e.ELEMENT_NODE;
	}
	function ts(e) {
		const t = e == null ? void 0 : e.host;
		return Boolean(t && t.shadowRoot && t.shadowRoot === e);
	}
	function R1({ maskInputOptions: e, tagName: t, type: n }) {
		t.toLowerCase() === 'option' && (t = 'select');
		const r = typeof n == 'string' ? n.toLowerCase() : void 0;
		return e[t.toLowerCase()] || (r && e[r]) || r === 'password' || (t === 'input' && !n && e.text);
	}
	function WR({ tagName: e, type: t, maskInputOptions: n, maskInputSelector: r }) {
		return r || R1({ maskInputOptions: n, tagName: e, type: t });
	}
	function Is({
		input: e,
		maskInputSelector: t,
		unmaskInputSelector: n,
		maskInputOptions: r,
		tagName: i,
		type: s,
		value: o,
		maskInputFn: a,
	}) {
		let l = o || '';
		return (
			(n && e.matches(n)) ||
				(e.hasAttribute('data-rr-is-password') && (s = 'password'),
				(R1({ maskInputOptions: r, tagName: i, type: s }) || (t && e.matches(t))) &&
					(a ? (l = a(l)) : (l = '*'.repeat(l.length)))),
			l
		);
	}
	const im = '__rrweb_original__';
	function qR(e) {
		const t = e.getContext('2d');
		if (!t) return !0;
		const n = 50;
		for (let r = 0; r < e.width; r += n)
			for (let i = 0; i < e.height; i += n) {
				const s = t.getImageData,
					o = im in s ? s[im] : s;
				if (
					new Uint32Array(o.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i)).data.buffer).some(
						l => l !== 0
					)
				)
					return !1;
			}
		return !0;
	}
	function b1(e) {
		const t = e.type;
		return e.hasAttribute('data-rr-is-password') ? 'password' : t ? t.toLowerCase() : null;
	}
	function Kc(e, t, n) {
		return (
			typeof n == 'string' && n.toLowerCase(),
			t === 'INPUT' && (n === 'radio' || n === 'checkbox') ? e.getAttribute('value') || '' : e.value
		);
	}
	let VR = 1;
	const QR = new RegExp('[^a-z0-9-_:]'),
		Ds = -2;
	function k1(e) {
		return e ? e.replace(/[\S]/g, '*') : '';
	}
	function KR() {
		return VR++;
	}
	function ZR(e) {
		if (e instanceof HTMLFormElement) return 'form';
		const t = e.tagName.toLowerCase().trim();
		return QR.test(t) ? 'div' : t;
	}
	function Zc(e) {
		try {
			const t = e.rules || e.cssRules;
			return t ? Array.from(t).map(XR).join('') : null;
		} catch {
			return null;
		}
	}
	function XR(e) {
		let t = e.cssText;
		if (JR(e))
			try {
				t = Zc(e.styleSheet) || t;
			} catch {}
		return x1(t);
	}
	function x1(e) {
		if (e.indexOf(':') > -1) {
			const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
			return e.replace(t, '$1\\$2');
		}
		return e;
	}
	function JR(e) {
		return 'styleSheet' in e;
	}
	function eb(e) {
		return e.cssRules
			? Array.from(e.cssRules)
					.map(t => (t.cssText ? x1(t.cssText) : ''))
					.join('')
			: '';
	}
	function tb(e) {
		let t = '';
		return (
			e.indexOf('//') > -1 ? (t = e.split('/').slice(0, 3).join('/')) : (t = e.split('/')[0]), (t = t.split('?')[0]), t
		);
	}
	let wr, sm;
	const nb = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
		rb = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
		ib = /^(data:)([^,]*),(.*)/i;
	function Xo(e, t) {
		return (e || '').replace(nb, (n, r, i, s, o, a) => {
			const l = i || o || a,
				u = r || s || '';
			if (!l) return n;
			if (!rb.test(l)) return `url(${u}${l}${u})`;
			if (ib.test(l)) return `url(${u}${l}${u})`;
			if (l[0] === '/') return `url(${u}${tb(t) + l}${u})`;
			const c = t.split('/'),
				d = l.split('/');
			c.pop();
			for (const h of d) h !== '.' && (h === '..' ? c.pop() : c.push(h));
			return `url(${u}${c.join('/')}${u})`;
		});
	}
	const sb = /^[^ \t\n\r\u000c]+/,
		ob = /^[, \t\n\r\u000c]+/;
	function ab(e, t) {
		if (t.trim() === '') return t;
		let n = 0;
		function r(s) {
			let o,
				a = s.exec(t.substring(n));
			return a ? ((o = a[0]), (n += o.length), o) : '';
		}
		let i = [];
		for (; r(ob), !(n >= t.length); ) {
			let s = r(sb);
			if (s.slice(-1) === ',') (s = Ur(e, s.substring(0, s.length - 1))), i.push(s);
			else {
				let o = '';
				s = Ur(e, s);
				let a = !1;
				for (;;) {
					let l = t.charAt(n);
					if (l === '') {
						i.push((s + o).trim());
						break;
					} else if (a) l === ')' && (a = !1);
					else if (l === ',') {
						(n += 1), i.push((s + o).trim());
						break;
					} else l === '(' && (a = !0);
					(o += l), (n += 1);
				}
			}
		}
		return i.join(', ');
	}
	function Ur(e, t) {
		if (!t || t.trim() === '') return t;
		const n = e.createElement('a');
		return (n.href = t), n.href;
	}
	function lb(e) {
		return Boolean(e.tagName === 'svg' || e.ownerSVGElement);
	}
	function Xc() {
		const e = document.createElement('a');
		return (e.href = ''), e.href;
	}
	function C1(e, t, n, r, i, s, o, a) {
		if (!i) return i;
		const l = r.toLowerCase(),
			u = n.toLowerCase();
		return l === 'src' ||
			l === 'href' ||
			(l === 'xlink:href' && i[0] !== '#') ||
			(l === 'background' && (u === 'table' || u === 'td' || u === 'th'))
			? Ur(e, i)
			: l === 'srcset'
			? ab(e, i)
			: l === 'style'
			? Xo(i, Xc())
			: u === 'object' && l === 'data'
			? Ur(e, i)
			: s && ub(t, l, u, o)
			? a
				? a(i)
				: k1(i)
			: i;
	}
	function ub(e, t, n, r) {
		return r && e.matches(r)
			? !1
			: ['placeholder', 'title', 'aria-label'].indexOf(t) > -1 ||
					(n === 'input' &&
						t === 'value' &&
						e.hasAttribute('type') &&
						['submit', 'button'].indexOf(e.getAttribute('type').toLowerCase()) > -1);
	}
	function cb(e, t, n, r) {
		if (r && e.matches(r)) return !1;
		if (typeof t == 'string') {
			if (e.classList.contains(t)) return !0;
		} else
			for (let i = 0; i < e.classList.length; i++) {
				const s = e.classList[i];
				if (t.test(s)) return !0;
			}
		return n ? e.matches(n) : !1;
	}
	function Ma(e, t, n, r, i) {
		if (!e) return !1;
		if (e.nodeType !== e.ELEMENT_NODE) return Ma(e.parentNode, t, n, r, i);
		if (r && (e.matches(r) || e.closest(r))) return !1;
		if (i) return !0;
		if (typeof t == 'string') {
			if (e.classList.contains(t)) return !0;
		} else
			for (let s = 0; s < e.classList.length; s++) {
				const o = e.classList[s];
				if (t.test(o)) return !0;
			}
		return n && e.matches(n) ? !0 : Ma(e.parentNode, t, n, r, i);
	}
	function db(e, t, n) {
		const r = e.contentWindow;
		if (!r) return;
		let i = !1,
			s;
		try {
			s = r.document.readyState;
		} catch {
			return;
		}
		if (s !== 'complete') {
			const a = setTimeout(() => {
				i || (t(), (i = !0));
			}, n);
			e.addEventListener('load', () => {
				clearTimeout(a), (i = !0), t();
			});
			return;
		}
		const o = 'about:blank';
		if (r.location.href !== o || e.src === o || e.src === '') {
			setTimeout(t, 0);
			return;
		}
		e.addEventListener('load', t);
	}
	function fb(e, t) {
		var n;
		const {
			doc: r,
			blockClass: i,
			blockSelector: s,
			unblockSelector: o,
			maskTextClass: a,
			maskTextSelector: l,
			unmaskTextSelector: u,
			inlineStylesheet: c,
			maskInputSelector: d,
			unmaskInputSelector: h,
			maskAllText: f,
			maskInputOptions: _ = {},
			maskTextFn: y,
			maskInputFn: S,
			dataURLOptions: p = {},
			inlineImages: m,
			recordCanvas: g,
			keepIframeSrcFn: E,
		} = t;
		let T;
		if (r.__sn) {
			const b = r.__sn.id;
			T = b === 1 ? void 0 : b;
		}
		switch (e.nodeType) {
			case e.DOCUMENT_NODE:
				return e.compatMode !== 'CSS1Compat'
					? { type: Ce.Document, childNodes: [], compatMode: e.compatMode, rootId: T }
					: { type: Ce.Document, childNodes: [], rootId: T };
			case e.DOCUMENT_TYPE_NODE:
				return { type: Ce.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: T };
			case e.ELEMENT_NODE:
				const b = cb(e, i, s, o),
					R = ZR(e);
				let w = {};
				for (const { name: I, value: U } of Array.from(e.attributes)) mb(R, I) || (w[I] = C1(r, e, R, I, U, f, u, y));
				if (R === 'link' && c) {
					const I = Array.from(r.styleSheets).find(Q => Q.href === e.href);
					let U = null;
					I && (U = Zc(I)), U && (delete w.rel, delete w.href, (w._cssText = Xo(U, I.href)));
				}
				if (R === 'style' && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
					const I = Zc(e.sheet);
					I && (w._cssText = Xo(I, Xc()));
				}
				if (R === 'input' || R === 'textarea' || R === 'select' || R === 'option') {
					const I = e,
						U = b1(I),
						Q = Kc(I, R.toUpperCase(), U),
						G = e.checked;
					U !== 'submit' &&
						U !== 'button' &&
						Q &&
						(w.value = Is({
							input: I,
							type: U,
							tagName: R,
							value: Q,
							maskInputSelector: d,
							unmaskInputSelector: h,
							maskInputOptions: _,
							maskInputFn: S,
						})),
						G && (w.checked = G);
				}
				if (
					(R === 'option' && (e.selected && !_.select ? (w.selected = !0) : delete w.selected), R === 'canvas' && g)
				) {
					if (e.__context === '2d') qR(e) || (w.rr_dataURL = e.toDataURL(p.type, p.quality));
					else if (!('__context' in e)) {
						const I = e.toDataURL(p.type, p.quality),
							U = document.createElement('canvas');
						(U.width = e.width), (U.height = e.height);
						const Q = U.toDataURL(p.type, p.quality);
						I !== Q && (w.rr_dataURL = I);
					}
				}
				if (R === 'img' && m) {
					wr || ((wr = r.createElement('canvas')), (sm = wr.getContext('2d')));
					const I = e,
						U = I.crossOrigin;
					I.crossOrigin = 'anonymous';
					const Q = () => {
						try {
							(wr.width = I.naturalWidth),
								(wr.height = I.naturalHeight),
								sm.drawImage(I, 0, 0),
								(w.rr_dataURL = wr.toDataURL(p.type, p.quality));
						} catch (G) {
							console.warn(`Cannot inline img src=${I.currentSrc}! Error: ${G}`);
						}
						U ? (w.crossOrigin = U) : delete w.crossOrigin;
					};
					I.complete && I.naturalWidth !== 0 ? Q() : (I.onload = Q);
				}
				if (
					((R === 'audio' || R === 'video') &&
						((w.rr_mediaState = e.paused ? 'paused' : 'played'), (w.rr_mediaCurrentTime = e.currentTime)),
					e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft),
					e.scrollTop && (w.rr_scrollTop = e.scrollTop),
					b)
				) {
					const { width: I, height: U } = e.getBoundingClientRect();
					w = { class: w.class, rr_width: `${I}px`, rr_height: `${U}px` };
				}
				return (
					R === 'iframe' && !E(w.src) && (e.contentDocument || (w.rr_src = w.src), delete w.src),
					{
						type: Ce.Element,
						tagName: R,
						attributes: w,
						childNodes: [],
						isSVG: lb(e) || void 0,
						needBlock: b,
						rootId: T,
					}
				);
			case e.TEXT_NODE:
				const A = e.parentNode && e.parentNode.tagName;
				let O = e.textContent;
				const B = A === 'STYLE' ? !0 : void 0,
					H = A === 'SCRIPT' ? !0 : void 0;
				if (B && O) {
					try {
						e.nextSibling ||
							e.previousSibling ||
							(!((n = e.parentNode.sheet) === null || n === void 0) && n.cssRules && (O = eb(e.parentNode.sheet)));
					} catch (I) {
						console.warn(`Cannot get CSS styles from text's parentNode. Error: ${I}`, e);
					}
					O = Xo(O, Xc());
				}
				if ((H && (O = 'SCRIPT_PLACEHOLDER'), A === 'TEXTAREA' && O)) O = '';
				else if (A === 'OPTION' && O) {
					const I = e.parentNode;
					O = Is({
						input: I,
						type: null,
						tagName: A,
						value: O,
						maskInputSelector: d,
						unmaskInputSelector: h,
						maskInputOptions: _,
						maskInputFn: S,
					});
				} else !B && !H && Ma(e, a, l, u, f) && O && (O = y ? y(O) : k1(O));
				return { type: Ce.Text, textContent: O || '', isStyle: B, rootId: T };
			case e.CDATA_SECTION_NODE:
				return { type: Ce.CDATA, textContent: '', rootId: T };
			case e.COMMENT_NODE:
				return { type: Ce.Comment, textContent: e.textContent || '', rootId: T };
			default:
				return !1;
		}
	}
	function ee(e) {
		return e == null ? '' : e.toLowerCase();
	}
	function hb(e, t) {
		if (t.comment && e.type === Ce.Comment) return !0;
		if (e.type === Ce.Element) {
			if (
				t.script &&
				(e.tagName === 'script' ||
					(e.tagName === 'link' &&
						(e.attributes.rel === 'preload' || e.attributes.rel === 'modulepreload') &&
						e.attributes.as === 'script') ||
					(e.tagName === 'link' &&
						e.attributes.rel === 'prefetch' &&
						typeof e.attributes.href == 'string' &&
						e.attributes.href.endsWith('.js')))
			)
				return !0;
			if (
				t.headFavicon &&
				((e.tagName === 'link' && e.attributes.rel === 'shortcut icon') ||
					(e.tagName === 'meta' &&
						(ee(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
							ee(e.attributes.name) === 'application-name' ||
							ee(e.attributes.rel) === 'icon' ||
							ee(e.attributes.rel) === 'apple-touch-icon' ||
							ee(e.attributes.rel) === 'shortcut icon')))
			)
				return !0;
			if (e.tagName === 'meta') {
				if (t.headMetaDescKeywords && ee(e.attributes.name).match(/^description|keywords$/)) return !0;
				if (
					t.headMetaSocial &&
					(ee(e.attributes.property).match(/^(og|twitter|fb):/) ||
						ee(e.attributes.name).match(/^(og|twitter):/) ||
						ee(e.attributes.name) === 'pinterest')
				)
					return !0;
				if (
					t.headMetaRobots &&
					(ee(e.attributes.name) === 'robots' ||
						ee(e.attributes.name) === 'googlebot' ||
						ee(e.attributes.name) === 'bingbot')
				)
					return !0;
				if (t.headMetaHttpEquiv && e.attributes['http-equiv'] !== void 0) return !0;
				if (
					t.headMetaAuthorship &&
					(ee(e.attributes.name) === 'author' ||
						ee(e.attributes.name) === 'generator' ||
						ee(e.attributes.name) === 'framework' ||
						ee(e.attributes.name) === 'publisher' ||
						ee(e.attributes.name) === 'progid' ||
						ee(e.attributes.property).match(/^article:/) ||
						ee(e.attributes.property).match(/^product:/))
				)
					return !0;
				if (
					t.headMetaVerification &&
					(ee(e.attributes.name) === 'google-site-verification' ||
						ee(e.attributes.name) === 'yandex-verification' ||
						ee(e.attributes.name) === 'csrf-token' ||
						ee(e.attributes.name) === 'p:domain_verify' ||
						ee(e.attributes.name) === 'verify-v1' ||
						ee(e.attributes.name) === 'verification' ||
						ee(e.attributes.name) === 'shopify-checkout-api-token')
				)
					return !0;
			}
		}
		return !1;
	}
	function ns(e, t) {
		const {
			doc: n,
			map: r,
			blockClass: i,
			blockSelector: s,
			unblockSelector: o,
			maskTextClass: a,
			maskTextSelector: l,
			unmaskTextSelector: u,
			skipChild: c = !1,
			inlineStylesheet: d = !0,
			maskInputSelector: h,
			unmaskInputSelector: f,
			maskAllText: _,
			maskInputOptions: y = {},
			maskTextFn: S,
			maskInputFn: p,
			slimDOMOptions: m,
			dataURLOptions: g = {},
			inlineImages: E = !1,
			recordCanvas: T = !1,
			onSerialize: b,
			onIframeLoad: R,
			iframeLoadTimeout: w = 5e3,
			keepIframeSrcFn: A = () => !1,
		} = t;
		let { preserveWhiteSpace: O = !0 } = t;
		const B = fb(e, {
			doc: n,
			blockClass: i,
			blockSelector: s,
			unblockSelector: o,
			maskTextClass: a,
			maskTextSelector: l,
			unmaskTextSelector: u,
			inlineStylesheet: d,
			maskInputSelector: h,
			unmaskInputSelector: f,
			maskAllText: _,
			maskInputOptions: y,
			maskTextFn: S,
			maskInputFn: p,
			dataURLOptions: g,
			inlineImages: E,
			recordCanvas: T,
			keepIframeSrcFn: A,
		});
		if (!B) return console.warn(e, 'not serialized'), null;
		let H;
		'__sn' in e
			? (H = e.__sn.id)
			: hb(B, m) || (!O && B.type === Ce.Text && !B.isStyle && !B.textContent.replace(/^\s+|\s+$/gm, '').length)
			? (H = Ds)
			: (H = KR());
		const I = Object.assign(B, { id: H });
		if (((e.__sn = I), H === Ds)) return null;
		(r[H] = e), b && b(e);
		let U = !c;
		if (
			(I.type === Ce.Element && ((U = U && !I.needBlock), delete I.needBlock, e.shadowRoot && (I.isShadowHost = !0)),
			(I.type === Ce.Document || I.type === Ce.Element) && U)
		) {
			m.headWhitespace && B.type === Ce.Element && B.tagName === 'head' && (O = !1);
			const Q = {
				doc: n,
				map: r,
				blockClass: i,
				blockSelector: s,
				unblockSelector: o,
				maskTextClass: a,
				maskTextSelector: l,
				unmaskTextSelector: u,
				skipChild: c,
				inlineStylesheet: d,
				maskInputSelector: h,
				unmaskInputSelector: f,
				maskAllText: _,
				maskInputOptions: y,
				maskTextFn: S,
				maskInputFn: p,
				slimDOMOptions: m,
				dataURLOptions: g,
				inlineImages: E,
				recordCanvas: T,
				preserveWhiteSpace: O,
				onSerialize: b,
				onIframeLoad: R,
				iframeLoadTimeout: w,
				keepIframeSrcFn: A,
			};
			for (const G of Array.from(e.childNodes)) {
				const ae = ns(G, Q);
				ae && I.childNodes.push(ae);
			}
			if (YR(e) && e.shadowRoot)
				for (const G of Array.from(e.shadowRoot.childNodes)) {
					const ae = ns(G, Q);
					ae && ((ae.isShadow = !0), I.childNodes.push(ae));
				}
		}
		return (
			e.parentNode && ts(e.parentNode) && (I.isShadow = !0),
			I.type === Ce.Element &&
				I.tagName === 'iframe' &&
				db(
					e,
					() => {
						const Q = e.contentDocument;
						if (Q && R) {
							const G = ns(Q, {
								doc: Q,
								map: r,
								blockClass: i,
								blockSelector: s,
								unblockSelector: o,
								maskTextClass: a,
								maskTextSelector: l,
								unmaskTextSelector: u,
								skipChild: !1,
								inlineStylesheet: d,
								maskInputSelector: h,
								unmaskInputSelector: f,
								maskAllText: _,
								maskInputOptions: y,
								maskTextFn: S,
								maskInputFn: p,
								slimDOMOptions: m,
								dataURLOptions: g,
								inlineImages: E,
								recordCanvas: T,
								preserveWhiteSpace: O,
								onSerialize: b,
								onIframeLoad: R,
								iframeLoadTimeout: w,
								keepIframeSrcFn: A,
							});
							G && R(e, G);
						}
					},
					w
				),
			I
		);
	}
	function pb(e, t) {
		const {
				blockClass: n = 'rr-block',
				blockSelector: r = null,
				unblockSelector: i = null,
				maskTextClass: s = 'rr-mask',
				maskTextSelector: o = null,
				unmaskTextSelector: a = null,
				inlineStylesheet: l = !0,
				inlineImages: u = !1,
				recordCanvas: c = !1,
				maskInputSelector: d = null,
				unmaskInputSelector: h = null,
				maskAllText: f = !1,
				maskAllInputs: _ = !1,
				maskTextFn: y,
				maskInputFn: S,
				slimDOM: p = !1,
				dataURLOptions: m,
				preserveWhiteSpace: g,
				onSerialize: E,
				onIframeLoad: T,
				iframeLoadTimeout: b,
				keepIframeSrcFn: R = () => !1,
			} = t || {},
			w = {};
		return [
			ns(e, {
				doc: e,
				map: w,
				blockClass: n,
				blockSelector: r,
				unblockSelector: i,
				maskTextClass: s,
				maskTextSelector: o,
				unmaskTextSelector: a,
				skipChild: !1,
				inlineStylesheet: l,
				maskInputSelector: d,
				unmaskInputSelector: h,
				maskAllText: f,
				maskInputOptions:
					_ === !0
						? {
								color: !0,
								date: !0,
								'datetime-local': !0,
								email: !0,
								month: !0,
								number: !0,
								range: !0,
								search: !0,
								tel: !0,
								text: !0,
								time: !0,
								url: !0,
								week: !0,
								textarea: !0,
								select: !0,
						  }
						: _ === !1
						? {}
						: _,
				maskTextFn: y,
				maskInputFn: S,
				slimDOMOptions:
					p === !0 || p === 'all'
						? {
								script: !0,
								comment: !0,
								headFavicon: !0,
								headWhitespace: !0,
								headMetaDescKeywords: p === 'all',
								headMetaSocial: !0,
								headMetaRobots: !0,
								headMetaHttpEquiv: !0,
								headMetaAuthorship: !0,
								headMetaVerification: !0,
						  }
						: p === !1
						? {}
						: p,
				dataURLOptions: m,
				inlineImages: u,
				recordCanvas: c,
				preserveWhiteSpace: g,
				onSerialize: E,
				onIframeLoad: T,
				iframeLoadTimeout: b,
				keepIframeSrcFn: R,
			}),
			w,
		];
	}
	function mb(e, t, n) {
		return (e === 'video' || e === 'audio') && t === 'autoplay';
	}
	var te;
	(function (e) {
		(e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
			(e[(e.Load = 1)] = 'Load'),
			(e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
			(e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
			(e[(e.Meta = 4)] = 'Meta'),
			(e[(e.Custom = 5)] = 'Custom'),
			(e[(e.Plugin = 6)] = 'Plugin');
	})(te || (te = {}));
	var Pe;
	(function (e) {
		(e[(e.Mutation = 0)] = 'Mutation'),
			(e[(e.MouseMove = 1)] = 'MouseMove'),
			(e[(e.MouseInteraction = 2)] = 'MouseInteraction'),
			(e[(e.Scroll = 3)] = 'Scroll'),
			(e[(e.ViewportResize = 4)] = 'ViewportResize'),
			(e[(e.Input = 5)] = 'Input'),
			(e[(e.TouchMove = 6)] = 'TouchMove'),
			(e[(e.MediaInteraction = 7)] = 'MediaInteraction'),
			(e[(e.StyleSheetRule = 8)] = 'StyleSheetRule'),
			(e[(e.CanvasMutation = 9)] = 'CanvasMutation'),
			(e[(e.Font = 10)] = 'Font'),
			(e[(e.Log = 11)] = 'Log'),
			(e[(e.Drag = 12)] = 'Drag'),
			(e[(e.StyleDeclaration = 13)] = 'StyleDeclaration');
	})(Pe || (Pe = {}));
	var Ua;
	(function (e) {
		(e[(e.MouseUp = 0)] = 'MouseUp'),
			(e[(e.MouseDown = 1)] = 'MouseDown'),
			(e[(e.Click = 2)] = 'Click'),
			(e[(e.ContextMenu = 3)] = 'ContextMenu'),
			(e[(e.DblClick = 4)] = 'DblClick'),
			(e[(e.Focus = 5)] = 'Focus'),
			(e[(e.Blur = 6)] = 'Blur'),
			(e[(e.TouchStart = 7)] = 'TouchStart'),
			(e[(e.TouchMove_Departed = 8)] = 'TouchMove_Departed'),
			(e[(e.TouchEnd = 9)] = 'TouchEnd'),
			(e[(e.TouchCancel = 10)] = 'TouchCancel');
	})(Ua || (Ua = {}));
	var li;
	(function (e) {
		(e[(e['2D'] = 0)] = '2D'), (e[(e.WebGL = 1)] = 'WebGL'), (e[(e.WebGL2 = 2)] = 'WebGL2');
	})(li || (li = {}));
	var om;
	(function (e) {
		(e[(e.Play = 0)] = 'Play'),
			(e[(e.Pause = 1)] = 'Pause'),
			(e[(e.Seeked = 2)] = 'Seeked'),
			(e[(e.VolumeChange = 3)] = 'VolumeChange');
	})(om || (om = {}));
	var am;
	(function (e) {
		(e.Start = 'start'),
			(e.Pause = 'pause'),
			(e.Resume = 'resume'),
			(e.Resize = 'resize'),
			(e.Finish = 'finish'),
			(e.FullsnapshotRebuilded = 'fullsnapshot-rebuilded'),
			(e.LoadStylesheetStart = 'load-stylesheet-start'),
			(e.LoadStylesheetEnd = 'load-stylesheet-end'),
			(e.SkipStart = 'skip-start'),
			(e.SkipEnd = 'skip-end'),
			(e.MouseInteraction = 'mouse-interaction'),
			(e.EventCast = 'event-cast'),
			(e.CustomEvent = 'custom-event'),
			(e.Flush = 'flush'),
			(e.StateChange = 'state-change'),
			(e.PlayBack = 'play-back');
	})(am || (am = {}));
	function lt(e, t, n = document) {
		const r = { capture: !0, passive: !0 };
		return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
	}
	function _b() {
		return {
			map: {},
			getId(e) {
				return !e || !e.__sn ? -1 : e.__sn.id;
			},
			getNode(e) {
				return this.map[e] || null;
			},
			removeNodeFromMap(e) {
				const t = e.__sn && e.__sn.id;
				delete this.map[t], e.childNodes && e.childNodes.forEach(n => this.removeNodeFromMap(n));
			},
			has(e) {
				return this.map.hasOwnProperty(e);
			},
			reset() {
				this.map = {};
			},
		};
	}
	const Tr = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
	let lm = {
		map: {},
		getId() {
			return console.error(Tr), -1;
		},
		getNode() {
			return console.error(Tr), null;
		},
		removeNodeFromMap() {
			console.error(Tr);
		},
		has() {
			return console.error(Tr), !1;
		},
		reset() {
			console.error(Tr);
		},
	};
	typeof window < 'u' &&
		window.Proxy &&
		window.Reflect &&
		(lm = new Proxy(lm, {
			get(e, t, n) {
				return t === 'map' && console.error(Tr), Reflect.get(e, t, n);
			},
		}));
	function As(e, t, n = {}) {
		let r = null,
			i = 0;
		return function (s) {
			let o = Date.now();
			!i && n.leading === !1 && (i = o);
			let a = t - (o - i),
				l = this,
				u = arguments;
			a <= 0 || a > t
				? (r && (clearTimeout(r), (r = null)), (i = o), e.apply(l, u))
				: !r &&
				  n.trailing !== !1 &&
				  (r = setTimeout(() => {
						(i = n.leading === !1 ? 0 : Date.now()), (r = null), e.apply(l, u);
				  }, a));
		};
	}
	function El(e, t, n, r, i = window) {
		const s = i.Object.getOwnPropertyDescriptor(e, t);
		return (
			i.Object.defineProperty(
				e,
				t,
				r
					? n
					: {
							set(o) {
								setTimeout(() => {
									n.set.call(this, o);
								}, 0),
									s && s.set && s.set.call(this, o);
							},
					  }
			),
			() => El(e, t, s || {}, !0)
		);
	}
	function ui(e, t, n) {
		try {
			if (!(t in e)) return () => {};
			const r = e[t],
				i = n(r);
			return (
				typeof i == 'function' &&
					((i.prototype = i.prototype || {}),
					Object.defineProperties(i, { __rrweb_original__: { enumerable: !1, value: r } })),
				(e[t] = i),
				() => {
					e[t] = r;
				}
			);
		} catch {
			return () => {};
		}
	}
	function N1() {
		return (
			window.innerHeight ||
			(document.documentElement && document.documentElement.clientHeight) ||
			(document.body && document.body.clientHeight)
		);
	}
	function O1() {
		return (
			window.innerWidth ||
			(document.documentElement && document.documentElement.clientWidth) ||
			(document.body && document.body.clientWidth)
		);
	}
	function We(e, t, n, r) {
		if (!e) return !1;
		if (e.nodeType === e.ELEMENT_NODE) {
			let i = !1;
			const s = r && e.matches(r);
			return (
				typeof t == 'string'
					? e.closest !== void 0
						? (i = !s && e.closest('.' + t) !== null)
						: (i = !s && e.classList.contains(t))
					: !s &&
					  e.classList.forEach(o => {
							t.test(o) && (i = !0);
					  }),
				!i && n && (i = e.matches(n)),
				(!s && i) || We(e.parentNode, t, n, r)
			);
		}
		return e.nodeType === e.TEXT_NODE, We(e.parentNode, t, n, r);
	}
	function Su(e) {
		return '__sn' in e ? e.__sn.id === Ds : !1;
	}
	function I1(e, t) {
		if (ts(e)) return !1;
		const n = t.getId(e);
		return t.has(n)
			? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
				? !1
				: e.parentNode
				? I1(e.parentNode, t)
				: !0
			: !0;
	}
	function D1(e) {
		return Boolean(e.changedTouches);
	}
	function gb(e = window) {
		'NodeList' in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
			'DOMTokenList' in e &&
				!e.DOMTokenList.prototype.forEach &&
				(e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
			Node.prototype.contains ||
				(Node.prototype.contains = function (n) {
					if (!(0 in arguments)) throw new TypeError('1 argument is required');
					do if (this === n) return !0;
					while ((n = n && n.parentNode));
					return !1;
				});
	}
	function A1(e) {
		return '__sn' in e ? e.__sn.type === Ce.Element && e.__sn.tagName === 'iframe' : !1;
	}
	function P1(e) {
		return Boolean(e == null ? void 0 : e.shadowRoot);
	}
	function um(e) {
		return '__ln' in e;
	}
	class yb {
		constructor() {
			(this.length = 0), (this.head = null);
		}
		get(t) {
			if (t >= this.length) throw new Error('Position outside of list range');
			let n = this.head;
			for (let r = 0; r < t; r++) n = (n == null ? void 0 : n.next) || null;
			return n;
		}
		addNode(t) {
			const n = { value: t, previous: null, next: null };
			if (((t.__ln = n), t.previousSibling && um(t.previousSibling))) {
				const r = t.previousSibling.__ln.next;
				(n.next = r), (n.previous = t.previousSibling.__ln), (t.previousSibling.__ln.next = n), r && (r.previous = n);
			} else if (t.nextSibling && um(t.nextSibling) && t.nextSibling.__ln.previous) {
				const r = t.nextSibling.__ln.previous;
				(n.previous = r), (n.next = t.nextSibling.__ln), (t.nextSibling.__ln.previous = n), r && (r.next = n);
			} else this.head && (this.head.previous = n), (n.next = this.head), (this.head = n);
			this.length++;
		}
		removeNode(t) {
			const n = t.__ln;
			this.head &&
				(n.previous
					? ((n.previous.next = n.next), n.next && (n.next.previous = n.previous))
					: ((this.head = n.next), this.head && (this.head.previous = null)),
				t.__ln && delete t.__ln,
				this.length--);
		}
	}
	const cm = (e, t) => `${e}@${t}`;
	function dm(e) {
		return '__sn' in e;
	}
	class vb {
		constructor() {
			(this.frozen = !1),
				(this.locked = !1),
				(this.texts = []),
				(this.attributes = []),
				(this.removes = []),
				(this.mapRemoves = []),
				(this.movedMap = {}),
				(this.addedSet = new Set()),
				(this.movedSet = new Set()),
				(this.droppedSet = new Set()),
				(this.processMutations = t => {
					t.forEach(this.processMutation), this.emit();
				}),
				(this.emit = () => {
					if (this.frozen || this.locked) return;
					const t = [],
						n = new yb(),
						r = a => {
							let l = a,
								u = Ds;
							for (; u === Ds; ) (l = l && l.nextSibling), (u = l && this.mirror.getId(l));
							return u;
						},
						i = a => {
							var l, u, c, d, h;
							const f = a.getRootNode ? ((l = a.getRootNode()) === null || l === void 0 ? void 0 : l.host) : null;
							let _ = f;
							for (
								;
								!(
									(c = (u = _ == null ? void 0 : _.getRootNode) === null || u === void 0 ? void 0 : u.call(_)) ===
										null || c === void 0
								) && c.host;

							)
								_ =
									((h = (d = _ == null ? void 0 : _.getRootNode) === null || d === void 0 ? void 0 : d.call(_)) ===
										null || h === void 0
										? void 0
										: h.host) || null;
							const y = !this.doc.contains(a) && (!_ || !this.doc.contains(_));
							if (!a.parentNode || y) return;
							const S = ts(a.parentNode) ? this.mirror.getId(f) : this.mirror.getId(a.parentNode),
								p = r(a);
							if (S === -1 || p === -1) return n.addNode(a);
							let m = ns(a, {
								doc: this.doc,
								map: this.mirror.map,
								blockClass: this.blockClass,
								blockSelector: this.blockSelector,
								unblockSelector: this.unblockSelector,
								maskTextClass: this.maskTextClass,
								maskTextSelector: this.maskTextSelector,
								unmaskTextSelector: this.unmaskTextSelector,
								maskInputSelector: this.maskInputSelector,
								unmaskInputSelector: this.unmaskInputSelector,
								skipChild: !0,
								inlineStylesheet: this.inlineStylesheet,
								maskAllText: this.maskAllText,
								maskInputOptions: this.maskInputOptions,
								maskTextFn: this.maskTextFn,
								maskInputFn: this.maskInputFn,
								slimDOMOptions: this.slimDOMOptions,
								recordCanvas: this.recordCanvas,
								inlineImages: this.inlineImages,
								onSerialize: g => {
									A1(g) && this.iframeManager.addIframe(g),
										P1(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, document);
								},
								onIframeLoad: (g, E) => {
									this.iframeManager.attachIframe(g, E), this.shadowDomManager.observeAttachShadow(g);
								},
							});
							m && t.push({ parentId: S, nextId: p, node: m });
						};
					for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
					for (const a of this.movedSet) (ed(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode)) || i(a);
					for (const a of this.addedSet)
						(!td(this.droppedSet, a) && !ed(this.removes, a, this.mirror)) || td(this.movedSet, a)
							? i(a)
							: this.droppedSet.add(a);
					let s = null;
					for (; n.length; ) {
						let a = null;
						if (s) {
							const l = this.mirror.getId(s.value.parentNode),
								u = r(s.value);
							l !== -1 && u !== -1 && (a = s);
						}
						if (!a)
							for (let l = n.length - 1; l >= 0; l--) {
								const u = n.get(l);
								if (u) {
									const c = this.mirror.getId(u.value.parentNode),
										d = r(u.value);
									if (c !== -1 && d !== -1) {
										a = u;
										break;
									}
								}
							}
						if (!a) {
							for (; n.head; ) n.removeNode(n.head.value);
							break;
						}
						(s = a.previous), n.removeNode(a.value), i(a.value);
					}
					const o = {
						texts: this.texts
							.map(a => ({ id: this.mirror.getId(a.node), value: a.value }))
							.filter(a => this.mirror.has(a.id)),
						attributes: this.attributes
							.map(a => ({ id: this.mirror.getId(a.node), attributes: a.attributes }))
							.filter(a => this.mirror.has(a.id)),
						removes: this.removes,
						adds: t,
					};
					(!o.texts.length && !o.attributes.length && !o.removes.length && !o.adds.length) ||
						((this.texts = []),
						(this.attributes = []),
						(this.removes = []),
						(this.addedSet = new Set()),
						(this.movedSet = new Set()),
						(this.droppedSet = new Set()),
						(this.movedMap = {}),
						this.mutationCb(o));
				}),
				(this.processMutation = t => {
					if (!Su(t.target))
						switch (t.type) {
							case 'characterData': {
								const n = t.target.textContent;
								!We(t.target, this.blockClass, this.blockSelector, this.unblockSelector) &&
									n !== t.oldValue &&
									this.texts.push({
										value:
											Ma(
												t.target,
												this.maskTextClass,
												this.maskTextSelector,
												this.unmaskTextSelector,
												this.maskAllText
											) && n
												? this.maskTextFn
													? this.maskTextFn(n)
													: n.replace(/[\S]/g, '*')
												: n,
										node: t.target,
									});
								break;
							}
							case 'attributes': {
								const n = t.target;
								let r = n.getAttribute(t.attributeName);
								if (
									(t.attributeName === 'value' &&
										(r = Is({
											input: n,
											maskInputSelector: this.maskInputSelector,
											unmaskInputSelector: this.unmaskInputSelector,
											maskInputOptions: this.maskInputOptions,
											tagName: n.tagName,
											type: n.getAttribute('type'),
											value: r,
											maskInputFn: this.maskInputFn,
										})),
									We(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || r === t.oldValue)
								)
									return;
								let i = this.attributes.find(s => s.node === t.target);
								if (
									(i || ((i = { node: t.target, attributes: {} }), this.attributes.push(i)),
									t.attributeName === 'type' &&
										n.tagName === 'INPUT' &&
										(t.oldValue || '').toLowerCase() === 'password' &&
										n.setAttribute('data-rr-is-password', 'true'),
									t.attributeName === 'style')
								) {
									const s = this.doc.createElement('span');
									t.oldValue && s.setAttribute('style', t.oldValue),
										(i.attributes.style === void 0 || i.attributes.style === null) && (i.attributes.style = {});
									try {
										const o = i.attributes.style;
										for (const a of Array.from(n.style)) {
											const l = n.style.getPropertyValue(a),
												u = n.style.getPropertyPriority(a);
											(l !== s.style.getPropertyValue(a) || u !== s.style.getPropertyPriority(a)) &&
												(u === '' ? (o[a] = l) : (o[a] = [l, u]));
										}
										for (const a of Array.from(s.style)) n.style.getPropertyValue(a) === '' && (o[a] = !1);
									} catch (o) {
										console.warn('[rrweb] Error when parsing update to style attribute:', o);
									}
								} else {
									const s = t.target;
									i.attributes[t.attributeName] = C1(
										this.doc,
										s,
										s.tagName,
										t.attributeName,
										r,
										this.maskAllText,
										this.unmaskTextSelector,
										this.maskTextFn
									);
								}
								break;
							}
							case 'childList': {
								t.addedNodes.forEach(n => this.genAdds(n, t.target)),
									t.removedNodes.forEach(n => {
										const r = this.mirror.getId(n),
											i = ts(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
										We(t.target, this.blockClass, this.blockSelector, this.unblockSelector) ||
											Su(n) ||
											(this.addedSet.has(n)
												? (Jc(this.addedSet, n), this.droppedSet.add(n))
												: (this.addedSet.has(t.target) && r === -1) ||
												  I1(t.target, this.mirror) ||
												  (this.movedSet.has(n) && this.movedMap[cm(r, i)]
														? Jc(this.movedSet, n)
														: this.removes.push({ parentId: i, id: r, isShadow: ts(t.target) ? !0 : void 0 })),
											this.mapRemoves.push(n));
									});
								break;
							}
						}
				}),
				(this.genAdds = (t, n) => {
					if (!(n && We(n, this.blockClass, this.blockSelector, this.unblockSelector))) {
						if (dm(t)) {
							if (Su(t)) return;
							this.movedSet.add(t);
							let r = null;
							n && dm(n) && (r = n.__sn.id), r && (this.movedMap[cm(t.__sn.id, r)] = !0);
						} else this.addedSet.add(t), this.droppedSet.delete(t);
						We(t, this.blockClass, this.blockSelector, this.unblockSelector) ||
							t.childNodes.forEach(r => this.genAdds(r));
					}
				});
		}
		init(t) {
			[
				'mutationCb',
				'blockClass',
				'blockSelector',
				'unblockSelector',
				'maskTextClass',
				'maskTextSelector',
				'unmaskTextSelector',
				'maskInputSelector',
				'unmaskInputSelector',
				'inlineStylesheet',
				'maskAllText',
				'maskInputOptions',
				'maskTextFn',
				'maskInputFn',
				'recordCanvas',
				'inlineImages',
				'slimDOMOptions',
				'doc',
				'mirror',
				'iframeManager',
				'shadowDomManager',
				'canvasManager',
			].forEach(n => {
				this[n] = t[n];
			});
		}
		freeze() {
			(this.frozen = !0), this.canvasManager.freeze();
		}
		unfreeze() {
			(this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
		}
		isFrozen() {
			return this.frozen;
		}
		lock() {
			(this.locked = !0), this.canvasManager.lock();
		}
		unlock() {
			(this.locked = !1), this.canvasManager.unlock(), this.emit();
		}
		reset() {
			this.shadowDomManager.reset(), this.canvasManager.reset();
		}
	}
	function Jc(e, t) {
		e.delete(t), t.childNodes.forEach(n => Jc(e, n));
	}
	function ed(e, t, n) {
		const { parentNode: r } = t;
		if (!r) return !1;
		const i = n.getId(r);
		return e.some(s => s.id === i) ? !0 : ed(e, r, n);
	}
	function td(e, t) {
		const { parentNode: n } = t;
		return n ? (e.has(n) ? !0 : td(e, n)) : !1;
	}
	const q =
			e =>
			(...n) => {
				try {
					return e(...n);
				} catch (r) {
					try {
						r.__rrweb__ = !0;
					} catch {}
					throw r;
				}
			},
		Jn = [];
	function Vs(e) {
		try {
			if ('composedPath' in e) {
				const t = e.composedPath();
				if (t.length) return t[0];
			} else if ('path' in e && e.path.length) return e.path[0];
		} catch {}
		return e && e.target;
	}
	function L1(e, t) {
		var n, r;
		const i = new vb();
		Jn.push(i), i.init(e);
		let s = window.MutationObserver || window.__rrMutationObserver;
		const o =
			(r = (n = window == null ? void 0 : window.Zone) === null || n === void 0 ? void 0 : n.__symbol__) === null ||
			r === void 0
				? void 0
				: r.call(n, 'MutationObserver');
		o && window[o] && (s = window[o]);
		const a = new s(
			q(l => {
				(e.onMutation && e.onMutation(l) === !1) || i.processMutations(l);
			})
		);
		return (
			a.observe(t, {
				attributes: !0,
				attributeOldValue: !0,
				characterData: !0,
				characterDataOldValue: !0,
				childList: !0,
				subtree: !0,
			}),
			a
		);
	}
	function Eb({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
		if (t.mousemove === !1) return () => {};
		const i = typeof t.mousemove == 'number' ? t.mousemove : 50,
			s = typeof t.mousemoveCallback == 'number' ? t.mousemoveCallback : 500;
		let o = [],
			a;
		const l = As(d => {
				const h = Date.now() - a;
				q(e)(
					o.map(f => ((f.timeOffset -= h), f)),
					d
				),
					(o = []),
					(a = null);
			}, s),
			u = As(
				d => {
					const h = Vs(d),
						{ clientX: f, clientY: _ } = D1(d) ? d.changedTouches[0] : d;
					a || (a = Date.now()),
						o.push({ x: f, y: _, id: r.getId(h), timeOffset: Date.now() - a }),
						l(
							typeof DragEvent < 'u' && d instanceof DragEvent
								? Pe.Drag
								: d instanceof MouseEvent
								? Pe.MouseMove
								: Pe.TouchMove
						);
				},
				i,
				{ trailing: !1 }
			),
			c = [lt('mousemove', q(u), n), lt('touchmove', q(u), n), lt('drag', q(u), n)];
		return q(() => {
			c.forEach(d => d());
		});
	}
	function Sb({
		mouseInteractionCb: e,
		doc: t,
		mirror: n,
		blockClass: r,
		blockSelector: i,
		unblockSelector: s,
		sampling: o,
	}) {
		if (o.mouseInteraction === !1) return () => {};
		const a = o.mouseInteraction === !0 || o.mouseInteraction === void 0 ? {} : o.mouseInteraction,
			l = [],
			u = c => d => {
				const h = Vs(d);
				if (We(h, r, i, s)) return;
				const f = D1(d) ? d.changedTouches[0] : d;
				if (!f) return;
				const _ = n.getId(h),
					{ clientX: y, clientY: S } = f;
				q(e)({ type: Ua[c], id: _, x: y, y: S });
			};
		return (
			Object.keys(Ua)
				.filter(c => Number.isNaN(Number(c)) && !c.endsWith('_Departed') && a[c] !== !1)
				.forEach(c => {
					const d = c.toLowerCase(),
						h = q(u(c));
					l.push(lt(d, h, t));
				}),
			q(() => {
				l.forEach(c => c());
			})
		);
	}
	function M1({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: s, sampling: o }) {
		const a = As(l => {
			const u = Vs(l);
			if (!u || We(u, r, i, s)) return;
			const c = n.getId(u);
			if (u === t) {
				const d = t.scrollingElement || t.documentElement;
				q(e)({ id: c, x: d.scrollLeft, y: d.scrollTop });
			} else q(e)({ id: c, x: u.scrollLeft, y: u.scrollTop });
		}, o.scroll || 100);
		return lt('scroll', q(a), t);
	}
	function wb({ viewportResizeCb: e }) {
		let t = -1,
			n = -1;
		const r = As(() => {
			const i = N1(),
				s = O1();
			(t !== i || n !== s) && (q(e)({ width: Number(s), height: Number(i) }), (t = i), (n = s));
		}, 200);
		return lt('resize', q(r), window);
	}
	function fm(e, t) {
		const n = Object.assign({}, e);
		return t || delete n.userTriggered, n;
	}
	const Tb = ['INPUT', 'TEXTAREA', 'SELECT'],
		hm = new WeakMap();
	function Rb({
		inputCb: e,
		doc: t,
		mirror: n,
		blockClass: r,
		blockSelector: i,
		unblockSelector: s,
		ignoreClass: o,
		ignoreSelector: a,
		maskInputSelector: l,
		unmaskInputSelector: u,
		maskInputOptions: c,
		maskInputFn: d,
		sampling: h,
		userTriggeredOnInput: f,
	}) {
		function _(E) {
			let T = Vs(E);
			const b = T && T.tagName,
				R = E.isTrusted;
			if ((b === 'OPTION' && (T = T.parentElement), !T || !b || Tb.indexOf(b) < 0 || We(T, r, i, s))) return;
			const w = T,
				A = b1(w);
			if (w.classList.contains(o) || (a && w.matches(a))) return;
			let O = Kc(w, b, A),
				B = !1;
			(A === 'radio' || A === 'checkbox') && (B = T.checked),
				WR({ maskInputOptions: c, maskInputSelector: l, tagName: b, type: A }) &&
					(O = Is({
						input: w,
						maskInputOptions: c,
						maskInputSelector: l,
						unmaskInputSelector: u,
						tagName: b,
						type: A,
						value: O,
						maskInputFn: d,
					})),
				y(T, q(fm)({ text: O, isChecked: B, userTriggered: R }, f));
			const H = T.name;
			A === 'radio' &&
				H &&
				B &&
				t.querySelectorAll(`input[type="radio"][name="${H}"]`).forEach(I => {
					if (I !== T) {
						const U = Is({
							input: I,
							maskInputOptions: c,
							maskInputSelector: l,
							unmaskInputSelector: u,
							tagName: b,
							type: A,
							value: Kc(I, b, A),
							maskInputFn: d,
						});
						y(I, q(fm)({ text: U, isChecked: !B, userTriggered: !1 }, f));
					}
				});
		}
		function y(E, T) {
			const b = hm.get(E);
			if (!b || b.text !== T.text || b.isChecked !== T.isChecked) {
				hm.set(E, T);
				const R = n.getId(E);
				e(Object.assign(Object.assign({}, T), { id: R }));
			}
		}
		const p = (h.input === 'last' ? ['change'] : ['input', 'change']).map(E => lt(E, q(_), t)),
			m = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'),
			g = [
				[HTMLInputElement.prototype, 'value'],
				[HTMLInputElement.prototype, 'checked'],
				[HTMLSelectElement.prototype, 'value'],
				[HTMLTextAreaElement.prototype, 'value'],
				[HTMLSelectElement.prototype, 'selectedIndex'],
				[HTMLOptionElement.prototype, 'selected'],
			];
		return (
			m &&
				m.set &&
				p.push(
					...g.map(E =>
						El(E[0], E[1], {
							set() {
								q(_)({ target: this });
							},
						})
					)
				),
			q(() => {
				p.forEach(E => E());
			})
		);
	}
	function Ba(e) {
		const t = [];
		function n(r, i) {
			if (
				(Co('CSSGroupingRule') && r.parentRule instanceof CSSGroupingRule) ||
				(Co('CSSMediaRule') && r.parentRule instanceof CSSMediaRule) ||
				(Co('CSSSupportsRule') && r.parentRule instanceof CSSSupportsRule) ||
				(Co('CSSConditionRule') && r.parentRule instanceof CSSConditionRule)
			) {
				const o = Array.from(r.parentRule.cssRules).indexOf(r);
				i.unshift(o);
			} else {
				const o = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
				i.unshift(o);
			}
			return i;
		}
		return n(e, t);
	}
	function bb({ styleSheetRuleCb: e, mirror: t }, { win: n }) {
		if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
		const r = n.CSSStyleSheet.prototype.insertRule;
		n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
			apply: q((a, l, u) => {
				const [c, d] = u,
					h = t.getId(l.ownerNode);
				return h !== -1 && e({ id: h, adds: [{ rule: c, index: d }] }), a.apply(l, u);
			}),
		});
		const i = n.CSSStyleSheet.prototype.deleteRule;
		n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
			apply: q((a, l, u) => {
				const [c] = u,
					d = t.getId(l.ownerNode);
				return d !== -1 && e({ id: d, removes: [{ index: c }] }), a.apply(l, u);
			}),
		});
		const s = {};
		No('CSSGroupingRule')
			? (s.CSSGroupingRule = n.CSSGroupingRule)
			: (No('CSSMediaRule') && (s.CSSMediaRule = n.CSSMediaRule),
			  No('CSSConditionRule') && (s.CSSConditionRule = n.CSSConditionRule),
			  No('CSSSupportsRule') && (s.CSSSupportsRule = n.CSSSupportsRule));
		const o = {};
		return (
			Object.entries(s).forEach(([a, l]) => {
				(o[a] = { insertRule: l.prototype.insertRule, deleteRule: l.prototype.deleteRule }),
					(l.prototype.insertRule = new Proxy(o[a].insertRule, {
						apply: q((u, c, d) => {
							const [h, f] = d,
								_ = t.getId(c.parentStyleSheet.ownerNode);
							return _ !== -1 && e({ id: _, adds: [{ rule: h, index: [...Ba(c), f || 0] }] }), u.apply(c, d);
						}),
					})),
					(l.prototype.deleteRule = new Proxy(o[a].deleteRule, {
						apply: q((u, c, d) => {
							const [h] = d,
								f = t.getId(c.parentStyleSheet.ownerNode);
							return f !== -1 && e({ id: f, removes: [{ index: [...Ba(c), h] }] }), u.apply(c, d);
						}),
					}));
			}),
			q(() => {
				(n.CSSStyleSheet.prototype.insertRule = r),
					(n.CSSStyleSheet.prototype.deleteRule = i),
					Object.entries(s).forEach(([a, l]) => {
						(l.prototype.insertRule = o[a].insertRule), (l.prototype.deleteRule = o[a].deleteRule);
					});
			})
		);
	}
	function kb({ styleDeclarationCb: e, mirror: t }, { win: n }) {
		const r = n.CSSStyleDeclaration.prototype.setProperty;
		n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
			apply: q((s, o, a) => {
				var l, u;
				const [c, d, h] = a,
					f = t.getId(
						(u = (l = o.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet) === null || u === void 0
							? void 0
							: u.ownerNode
					);
				return (
					f !== -1 && e({ id: f, set: { property: c, value: d, priority: h }, index: Ba(o.parentRule) }), s.apply(o, a)
				);
			}),
		});
		const i = n.CSSStyleDeclaration.prototype.removeProperty;
		return (
			(n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
				apply: q((s, o, a) => {
					var l, u;
					const [c] = a,
						d = t.getId(
							(u = (l = o.parentRule) === null || l === void 0 ? void 0 : l.parentStyleSheet) === null || u === void 0
								? void 0
								: u.ownerNode
						);
					return d !== -1 && e({ id: d, remove: { property: c }, index: Ba(o.parentRule) }), s.apply(o, a);
				}),
			})),
			q(() => {
				(n.CSSStyleDeclaration.prototype.setProperty = r), (n.CSSStyleDeclaration.prototype.removeProperty = i);
			})
		);
	}
	function xb({ mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: i, sampling: s }) {
		const o = l =>
				As(
					q(u => {
						const c = Vs(u);
						if (!c || We(c, t, n, r)) return;
						const { currentTime: d, volume: h, muted: f } = c;
						e({ type: l, id: i.getId(c), currentTime: d, volume: h, muted: f });
					}),
					s.media || 500
				),
			a = [lt('play', o(0)), lt('pause', o(1)), lt('seeked', o(2)), lt('volumechange', o(3))];
		return q(() => {
			a.forEach(l => l());
		});
	}
	function Cb({ fontCb: e, doc: t }) {
		const n = t.defaultView;
		if (!n) return () => {};
		const r = [],
			i = new WeakMap(),
			s = n.FontFace;
		n.FontFace = function (l, u, c) {
			const d = new s(l, u, c);
			return (
				i.set(d, {
					family: l,
					buffer: typeof u != 'string',
					descriptors: c,
					fontSource: typeof u == 'string' ? u : JSON.stringify(Array.from(new Uint8Array(u))),
				}),
				d
			);
		};
		const o = ui(t.fonts, 'add', function (a) {
			return function (l) {
				return (
					setTimeout(() => {
						const u = i.get(l);
						u && (e(u), i.delete(l));
					}, 0),
					a.apply(this, [l])
				);
			};
		});
		return (
			r.push(() => {
				n.FontFace = s;
			}),
			r.push(o),
			q(() => {
				r.forEach(a => a());
			})
		);
	}
	function Nb(e, t) {
		const {
			mutationCb: n,
			mousemoveCb: r,
			mouseInteractionCb: i,
			scrollCb: s,
			viewportResizeCb: o,
			inputCb: a,
			mediaInteractionCb: l,
			styleSheetRuleCb: u,
			styleDeclarationCb: c,
			canvasMutationCb: d,
			fontCb: h,
		} = e;
		(e.mutationCb = (...f) => {
			t.mutation && t.mutation(...f), n(...f);
		}),
			(e.mousemoveCb = (...f) => {
				t.mousemove && t.mousemove(...f), r(...f);
			}),
			(e.mouseInteractionCb = (...f) => {
				t.mouseInteraction && t.mouseInteraction(...f), i(...f);
			}),
			(e.scrollCb = (...f) => {
				t.scroll && t.scroll(...f), s(...f);
			}),
			(e.viewportResizeCb = (...f) => {
				t.viewportResize && t.viewportResize(...f), o(...f);
			}),
			(e.inputCb = (...f) => {
				t.input && t.input(...f), a(...f);
			}),
			(e.mediaInteractionCb = (...f) => {
				t.mediaInteaction && t.mediaInteaction(...f), l(...f);
			}),
			(e.styleSheetRuleCb = (...f) => {
				t.styleSheetRule && t.styleSheetRule(...f), u(...f);
			}),
			(e.styleDeclarationCb = (...f) => {
				t.styleDeclaration && t.styleDeclaration(...f), c(...f);
			}),
			(e.canvasMutationCb = (...f) => {
				t.canvasMutation && t.canvasMutation(...f), d(...f);
			}),
			(e.fontCb = (...f) => {
				t.font && t.font(...f), h(...f);
			});
	}
	function Ob(e, t = {}) {
		const n = e.doc.defaultView;
		if (!n) return () => {};
		Nb(e, t);
		const r = L1(e, e.doc),
			i = Eb(e),
			s = Sb(e),
			o = M1(e),
			a = wb(e),
			l = Rb(e),
			u = xb(e),
			c = bb(e, { win: n }),
			d = kb(e, { win: n }),
			h = e.collectFonts ? Cb(e) : () => {},
			f = [];
		for (const _ of e.plugins) f.push(_.observer(_.callback, n, _.options));
		return q(() => {
			Jn.forEach(_ => _.reset()), r.disconnect(), i(), s(), o(), a(), l(), u();
			try {
				c(), d();
			} catch {}
			h(), f.forEach(_ => _());
		});
	}
	function Co(e) {
		return typeof window[e] < 'u';
	}
	function No(e) {
		return Boolean(
			typeof window[e] < 'u' &&
				window[e].prototype &&
				'insertRule' in window[e].prototype &&
				'deleteRule' in window[e].prototype
		);
	}
	class Ib {
		constructor(t) {
			(this.iframes = new WeakMap()), (this.mutationCb = t.mutationCb);
		}
		addIframe(t) {
			this.iframes.set(t, !0);
		}
		addLoadListener(t) {
			this.loadListener = t;
		}
		attachIframe(t, n) {
			var r;
			this.mutationCb({
				adds: [{ parentId: t.__sn.id, nextId: null, node: n }],
				removes: [],
				texts: [],
				attributes: [],
				isAttachIframe: !0,
			}),
				(r = this.loadListener) === null || r === void 0 || r.call(this, t);
		}
	}
	class Db {
		constructor(t) {
			(this.restorePatches = []),
				(this.mutationCb = t.mutationCb),
				(this.scrollCb = t.scrollCb),
				(this.bypassOptions = t.bypassOptions),
				(this.mirror = t.mirror);
			const n = this;
			this.restorePatches.push(
				ui(HTMLElement.prototype, 'attachShadow', function (r) {
					return function () {
						const i = r.apply(this, arguments);
						return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument), i;
					};
				})
			);
		}
		addShadowRoot(t, n) {
			L1(
				Object.assign(Object.assign({}, this.bypassOptions), {
					doc: n,
					mutationCb: this.mutationCb,
					mirror: this.mirror,
					shadowDomManager: this,
				}),
				t
			),
				M1(
					Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: t, mirror: this.mirror })
				);
		}
		observeAttachShadow(t) {
			if (t.contentWindow) {
				const n = this;
				this.restorePatches.push(
					ui(t.contentWindow.HTMLElement.prototype, 'attachShadow', function (r) {
						return function () {
							const i = r.apply(this, arguments);
							return this.shadowRoot && n.addShadowRoot(this.shadowRoot, t.contentDocument), i;
						};
					})
				);
			}
		}
		reset() {
			this.restorePatches.forEach(t => t());
		}
	}
	function Ab(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
				t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		return n;
	}
	function Pb(e, t, n, r, i, s) {
		const o = [],
			a = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
		for (const l of a)
			try {
				if (typeof t.CanvasRenderingContext2D.prototype[l] != 'function') continue;
				const u = ui(t.CanvasRenderingContext2D.prototype, l, function (c) {
					return function (...d) {
						return (
							We(this.canvas, n, i, r) ||
								setTimeout(() => {
									const h = [...d];
									if (l === 'drawImage' && h[0] && h[0] instanceof HTMLCanvasElement) {
										const f = h[0],
											_ = f.getContext('2d');
										let y = _ == null ? void 0 : _.getImageData(0, 0, f.width, f.height),
											S = y == null ? void 0 : y.data;
										h[0] = JSON.stringify(S);
									}
									e(this.canvas, { type: li['2D'], property: l, args: h });
								}, 0),
							c.apply(this, d)
						);
					};
				});
				o.push(u);
			} catch {
				const c = El(t.CanvasRenderingContext2D.prototype, l, {
					set(d) {
						e(this.canvas, { type: li['2D'], property: l, args: [d], setter: !0 });
					},
				});
				o.push(c);
			}
		return () => {
			o.forEach(l => l());
		};
	}
	function Lb(e, t, n, r) {
		const i = [];
		try {
			const s = ui(e.HTMLCanvasElement.prototype, 'getContext', function (o) {
				return function (a, ...l) {
					return We(this, t, n, r) || '__context' in this || (this.__context = a), o.apply(this, [a, ...l]);
				};
			});
			i.push(s);
		} catch {
			console.error('failed to patch HTMLCanvasElement.prototype.getContext');
		}
		return () => {
			i.forEach(s => s());
		};
	}
	var Br = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
		Mb = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
	for (var Oo = 0; Oo < Br.length; Oo++) Mb[Br.charCodeAt(Oo)] = Oo;
	var Ub = function (e) {
		var t = new Uint8Array(e),
			n,
			r = t.length,
			i = '';
		for (n = 0; n < r; n += 3)
			(i += Br[t[n] >> 2]),
				(i += Br[((t[n] & 3) << 4) | (t[n + 1] >> 4)]),
				(i += Br[((t[n + 1] & 15) << 2) | (t[n + 2] >> 6)]),
				(i += Br[t[n + 2] & 63]);
		return (
			r % 3 === 2 ? (i = i.substring(0, i.length - 1) + '=') : r % 3 === 1 && (i = i.substring(0, i.length - 2) + '=='),
			i
		);
	};
	const pm = new Map();
	function Bb(e, t) {
		let n = pm.get(e);
		return n || ((n = new Map()), pm.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
	}
	const U1 = (e, t, n) => {
		if (!e || !(B1(e, t) || typeof e == 'object')) return;
		const r = e.constructor.name,
			i = Bb(n, r);
		let s = i.indexOf(e);
		return s === -1 && ((s = i.length), i.push(e)), s;
	};
	function Jo(e, t, n) {
		if (e instanceof Array) return e.map(r => Jo(r, t, n));
		if (e === null) return e;
		if (
			e instanceof Float32Array ||
			e instanceof Float64Array ||
			e instanceof Int32Array ||
			e instanceof Uint32Array ||
			e instanceof Uint8Array ||
			e instanceof Uint16Array ||
			e instanceof Int16Array ||
			e instanceof Int8Array ||
			e instanceof Uint8ClampedArray
		)
			return { rr_type: e.constructor.name, args: [Object.values(e)] };
		if (e instanceof ArrayBuffer) {
			const r = e.constructor.name,
				i = Ub(e);
			return { rr_type: r, base64: i };
		} else {
			if (e instanceof DataView)
				return { rr_type: e.constructor.name, args: [Jo(e.buffer, t, n), e.byteOffset, e.byteLength] };
			if (e instanceof HTMLImageElement) {
				const r = e.constructor.name,
					{ src: i } = e;
				return { rr_type: r, src: i };
			} else {
				if (e instanceof ImageData) return { rr_type: e.constructor.name, args: [Jo(e.data, t, n), e.width, e.height] };
				if (B1(e, t) || typeof e == 'object') {
					const r = e.constructor.name,
						i = U1(e, t, n);
					return { rr_type: r, index: i };
				}
			}
		}
		return e;
	}
	const Fb = (e, t, n) => [...e].map(r => Jo(r, t, n)),
		B1 = (e, t) => {
			const r = [
				'WebGLActiveInfo',
				'WebGLBuffer',
				'WebGLFramebuffer',
				'WebGLProgram',
				'WebGLRenderbuffer',
				'WebGLShader',
				'WebGLShaderPrecisionFormat',
				'WebGLTexture',
				'WebGLUniformLocation',
				'WebGLVertexArrayObject',
				'WebGLVertexArrayObjectOES',
			].filter(i => typeof t[i] == 'function');
			return Boolean(r.find(i => e instanceof t[i]));
		};
	function mm(e, t, n, r, i, s, o, a) {
		const l = [],
			u = Object.getOwnPropertyNames(e);
		for (const c of u)
			try {
				if (typeof e[c] != 'function') continue;
				const d = ui(e, c, function (h) {
					return function (...f) {
						const _ = h.apply(this, f);
						if ((U1(_, a, e), !We(this.canvas, r, s, i))) {
							const y = o.getId(this.canvas),
								S = Fb([...f], a, e),
								p = { type: t, property: c, args: S };
							n(this.canvas, p);
						}
						return _;
					};
				});
				l.push(d);
			} catch {
				const h = El(e, c, {
					set(f) {
						n(this.canvas, { type: t, property: c, args: [f], setter: !0 });
					},
				});
				l.push(h);
			}
		return l;
	}
	function zb(e, t, n, r, i, s) {
		const o = [];
		return (
			o.push(...mm(t.WebGLRenderingContext.prototype, li.WebGL, e, n, r, i, s, t)),
			typeof t.WebGL2RenderingContext < 'u' &&
				o.push(...mm(t.WebGL2RenderingContext.prototype, li.WebGL2, e, n, r, i, s, t)),
			() => {
				o.forEach(a => a());
			}
		);
	}
	class $b {
		reset() {
			this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
		}
		freeze() {
			this.frozen = !0;
		}
		unfreeze() {
			this.frozen = !1;
		}
		lock() {
			this.locked = !0;
		}
		unlock() {
			this.locked = !1;
		}
		constructor(t) {
			(this.pendingCanvasMutations = new Map()),
				(this.rafStamps = { latestId: 0, invokeId: null }),
				(this.frozen = !1),
				(this.locked = !1),
				(this.processMutation = function (n, r) {
					((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) ||
						!this.rafStamps.invokeId) &&
						(this.rafStamps.invokeId = this.rafStamps.latestId),
						this.pendingCanvasMutations.has(n) || this.pendingCanvasMutations.set(n, []),
						this.pendingCanvasMutations.get(n).push(r);
				}),
				(this.mutationCb = t.mutationCb),
				(this.mirror = t.mirror),
				t.recordCanvas === !0 &&
					this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector);
		}
		initCanvasMutationObserver(t, n, r, i) {
			this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
			const s = Lb(t, n, i, r),
				o = Pb(this.processMutation.bind(this), t, n, i, r, this.mirror),
				a = zb(this.processMutation.bind(this), t, n, i, r, this.mirror);
			this.resetObservers = () => {
				s(), o(), a();
			};
		}
		startPendingCanvasMutationFlusher() {
			requestAnimationFrame(() => this.flushPendingCanvasMutations());
		}
		startRAFTimestamping() {
			const t = n => {
				(this.rafStamps.latestId = n), requestAnimationFrame(t);
			};
			requestAnimationFrame(t);
		}
		flushPendingCanvasMutations() {
			this.pendingCanvasMutations.forEach((t, n) => {
				const r = this.mirror.getId(n);
				this.flushPendingCanvasMutationFor(n, r);
			}),
				requestAnimationFrame(() => this.flushPendingCanvasMutations());
		}
		flushPendingCanvasMutationFor(t, n) {
			if (this.frozen || this.locked) return;
			const r = this.pendingCanvasMutations.get(t);
			if (!r || n === -1) return;
			const i = r.map(o => Ab(o, ['type'])),
				{ type: s } = r[0];
			this.mutationCb({ id: n, type: s, commands: i }), this.pendingCanvasMutations.delete(t);
		}
	}
	function De(e) {
		return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
	}
	let we, rs;
	const $i = _b();
	function mr(e = {}) {
		const {
			emit: t,
			checkoutEveryNms: n,
			checkoutEveryNth: r,
			blockClass: i = 'rr-block',
			blockSelector: s = null,
			unblockSelector: o = null,
			ignoreClass: a = 'rr-ignore',
			ignoreSelector: l = null,
			maskTextClass: u = 'rr-mask',
			maskTextSelector: c = null,
			maskInputSelector: d = null,
			unmaskTextSelector: h = null,
			unmaskInputSelector: f = null,
			inlineStylesheet: _ = !0,
			maskAllText: y = !1,
			maskAllInputs: S,
			maskInputOptions: p,
			slimDOMOptions: m,
			maskInputFn: g,
			maskTextFn: E,
			hooks: T,
			packFn: b,
			sampling: R = {},
			mousemoveWait: w,
			recordCanvas: A = !1,
			userTriggeredOnInput: O = !1,
			collectFonts: B = !1,
			inlineImages: H = !1,
			plugins: I,
			keepIframeSrcFn: U = () => !1,
			onMutation: Q,
		} = e;
		if (!t) throw new Error('emit function is required');
		w !== void 0 && R.mousemove === void 0 && (R.mousemove = w);
		const G =
				S === !0
					? {
							color: !0,
							date: !0,
							'datetime-local': !0,
							email: !0,
							month: !0,
							number: !0,
							range: !0,
							search: !0,
							tel: !0,
							text: !0,
							time: !0,
							url: !0,
							week: !0,
							textarea: !0,
							select: !0,
							radio: !0,
							checkbox: !0,
					  }
					: p !== void 0
					? p
					: {},
			ae =
				m === !0 || m === 'all'
					? {
							script: !0,
							comment: !0,
							headFavicon: !0,
							headWhitespace: !0,
							headMetaSocial: !0,
							headMetaRobots: !0,
							headMetaHttpEquiv: !0,
							headMetaVerification: !0,
							headMetaAuthorship: m === 'all',
							headMetaDescKeywords: m === 'all',
					  }
					: m || {};
		gb();
		let D,
			M = 0;
		const F = z => {
			for (const bt of I || []) bt.eventProcessor && (z = bt.eventProcessor(z));
			return b && (z = b(z)), z;
		};
		we = (z, bt) => {
			var Mt;
			if (
				(!((Mt = Jn[0]) === null || Mt === void 0) &&
					Mt.isFrozen() &&
					z.type !== te.FullSnapshot &&
					!(z.type === te.IncrementalSnapshot && z.data.source === Pe.Mutation) &&
					Jn.forEach(st => st.unfreeze()),
				t(F(z), bt),
				z.type === te.FullSnapshot)
			)
				(D = z), (M = 0);
			else if (z.type === te.IncrementalSnapshot) {
				if (z.data.source === Pe.Mutation && z.data.isAttachIframe) return;
				M++;
				const st = r && M >= r,
					kt = n && z.timestamp - D.timestamp > n;
				(st || kt) && rs(!0);
			}
		};
		const re = z => {
				we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.Mutation }, z) }));
			},
			ye = z => we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.Scroll }, z) })),
			Gn = z => we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.CanvasMutation }, z) })),
			it = new Ib({ mutationCb: re }),
			vr = new $b({
				recordCanvas: A,
				mutationCb: Gn,
				win: window,
				blockClass: i,
				blockSelector: s,
				unblockSelector: o,
				mirror: $i,
			}),
			Rt = new Db({
				mutationCb: re,
				scrollCb: ye,
				bypassOptions: {
					onMutation: Q,
					blockClass: i,
					blockSelector: s,
					unblockSelector: o,
					maskTextClass: u,
					maskTextSelector: c,
					unmaskTextSelector: h,
					maskInputSelector: d,
					unmaskInputSelector: f,
					inlineStylesheet: _,
					maskAllText: y,
					maskInputOptions: G,
					maskTextFn: E,
					maskInputFn: g,
					recordCanvas: A,
					inlineImages: H,
					sampling: R,
					slimDOMOptions: ae,
					iframeManager: it,
					canvasManager: vr,
				},
				mirror: $i,
			});
		rs = (z = !1) => {
			var bt, Mt, st, kt;
			we(De({ type: te.Meta, data: { href: window.location.href, width: O1(), height: N1() } }), z),
				Jn.forEach(xt => xt.lock());
			const [le, Ri] = pb(document, {
				blockClass: i,
				blockSelector: s,
				unblockSelector: o,
				maskTextClass: u,
				maskTextSelector: c,
				unmaskTextSelector: h,
				maskInputSelector: d,
				unmaskInputSelector: f,
				inlineStylesheet: _,
				maskAllText: y,
				maskAllInputs: G,
				maskTextFn: E,
				slimDOM: ae,
				recordCanvas: A,
				inlineImages: H,
				onSerialize: xt => {
					A1(xt) && it.addIframe(xt), P1(xt) && Rt.addShadowRoot(xt.shadowRoot, document);
				},
				onIframeLoad: (xt, cy) => {
					it.attachIframe(xt, cy), Rt.observeAttachShadow(xt);
				},
				keepIframeSrcFn: U,
			});
			if (!le) return console.warn('Failed to snapshot the document');
			($i.map = Ri),
				we(
					De({
						type: te.FullSnapshot,
						data: {
							node: le,
							initialOffset: {
								left:
									window.pageXOffset !== void 0
										? window.pageXOffset
										: (document == null ? void 0 : document.documentElement.scrollLeft) ||
										  ((Mt =
												(bt = document == null ? void 0 : document.body) === null || bt === void 0
													? void 0
													: bt.parentElement) === null || Mt === void 0
												? void 0
												: Mt.scrollLeft) ||
										  (document == null ? void 0 : document.body.scrollLeft) ||
										  0,
								top:
									window.pageYOffset !== void 0
										? window.pageYOffset
										: (document == null ? void 0 : document.documentElement.scrollTop) ||
										  ((kt =
												(st = document == null ? void 0 : document.body) === null || st === void 0
													? void 0
													: st.parentElement) === null || kt === void 0
												? void 0
												: kt.scrollTop) ||
										  (document == null ? void 0 : document.body.scrollTop) ||
										  0,
							},
						},
					})
				),
				Jn.forEach(xt => xt.unlock());
		};
		try {
			const z = [];
			z.push(
				lt('DOMContentLoaded', () => {
					we(De({ type: te.DomContentLoaded, data: {} }));
				})
			);
			const bt = st => {
				var kt;
				return q(Ob)(
					{
						onMutation: Q,
						mutationCb: re,
						mousemoveCb: (le, Ri) => we(De({ type: te.IncrementalSnapshot, data: { source: Ri, positions: le } })),
						mouseInteractionCb: le =>
							we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.MouseInteraction }, le) })),
						scrollCb: ye,
						viewportResizeCb: le =>
							we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.ViewportResize }, le) })),
						inputCb: le => we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.Input }, le) })),
						mediaInteractionCb: le =>
							we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.MediaInteraction }, le) })),
						styleSheetRuleCb: le =>
							we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.StyleSheetRule }, le) })),
						styleDeclarationCb: le =>
							we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.StyleDeclaration }, le) })),
						canvasMutationCb: Gn,
						fontCb: le => we(De({ type: te.IncrementalSnapshot, data: Object.assign({ source: Pe.Font }, le) })),
						blockClass: i,
						ignoreClass: a,
						ignoreSelector: l,
						maskTextClass: u,
						maskTextSelector: c,
						unmaskTextSelector: h,
						maskInputSelector: d,
						unmaskInputSelector: f,
						maskInputOptions: G,
						inlineStylesheet: _,
						sampling: R,
						recordCanvas: A,
						inlineImages: H,
						userTriggeredOnInput: O,
						collectFonts: B,
						doc: st,
						maskAllText: y,
						maskInputFn: g,
						maskTextFn: E,
						blockSelector: s,
						unblockSelector: o,
						slimDOMOptions: ae,
						mirror: $i,
						iframeManager: it,
						shadowDomManager: Rt,
						canvasManager: vr,
						plugins:
							((kt = I == null ? void 0 : I.filter(le => le.observer)) === null || kt === void 0
								? void 0
								: kt.map(le => ({
										observer: le.observer,
										options: le.options,
										callback: Ri => we(De({ type: te.Plugin, data: { plugin: le.name, payload: Ri } })),
								  }))) || [],
					},
					T
				);
			};
			it.addLoadListener(st => {
				try {
					z.push(bt(st.contentDocument));
				} catch (kt) {
					console.warn(kt);
				}
			});
			const Mt = () => {
				rs(), z.push(bt(document));
			};
			return (
				document.readyState === 'interactive' || document.readyState === 'complete'
					? Mt()
					: z.push(
							lt(
								'load',
								() => {
									we(De({ type: te.Load, data: {} })), Mt();
								},
								window
							)
					  ),
				() => {
					z.forEach(st => st());
				}
			);
		} catch (z) {
			console.warn(z);
		}
	}
	mr.addCustomEvent = (e, t) => {
		if (!we) throw new Error('please add custom event after start recording');
		we(De({ type: te.Custom, data: { tag: e, payload: t } }));
	};
	mr.freezePage = () => {
		Jn.forEach(e => e.freeze());
	};
	mr.takeFullSnapshot = e => {
		if (!rs) throw new Error('please take full snapshot after start recording');
		rs(e);
	};
	mr.mirror = $i;
	const Hb = ['name', 'type', 'startTime', 'transferSize', 'duration'];
	function _m(e) {
		return function (t) {
			return Hb.every(n => e[n] === t[n]);
		};
	}
	function jb(e, t) {
		const [n, r, i] = e.reduce(
				(l, u) => (
					u.entryType === 'navigation'
						? l[0].push(u)
						: u.entryType === 'largest-contentful-paint'
						? l[1].push(u)
						: l[2].push(u),
					l
				),
				[[], [], []]
			),
			s = [],
			o = [];
		let a = r.length ? r[r.length - 1] : void 0;
		return (
			t.forEach(l => {
				if (l.entryType === 'largest-contentful-paint') {
					(!a || a.startTime < l.startTime) && (a = l);
					return;
				}
				if (l.entryType === 'navigation') {
					const u = l;
					l.duration > 0 && !n.find(_m(u)) && !o.find(_m(u)) && o.push(u);
					return;
				}
				s.push(l);
			}),
			[...(a ? [a] : []), ...n, ...i, ...s, ...o].sort((l, u) => l.startTime - u.startTime)
		);
	}
	function Gb(e) {
		const t = r => {
				const i = jb(e.performanceEvents, r.getEntries());
				e.performanceEvents = i;
			},
			n = new PerformanceObserver(t);
		return (
			[
				'element',
				'event',
				'first-input',
				'largest-contentful-paint',
				'layout-shift',
				'longtask',
				'navigation',
				'paint',
				'resource',
			].forEach(r => {
				try {
					n.observe({ type: r, buffered: !0 });
				} catch {}
			}),
			n
		);
	}
	const Yb = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
	function Wb() {
		const e = new Blob([Yb]);
		return URL.createObjectURL(e);
	}
	function Mf(e) {
		return e > 9999999999 ? e : e * 1e3;
	}
	class F1 {
		constructor() {
			this.events = [];
		}
		get hasEvents() {
			return this.events.length > 0;
		}
		get type() {
			return 'sync';
		}
		destroy() {
			this.events = [];
		}
		async addEvent(t) {
			this.events.push(t);
		}
		finish() {
			return new Promise(t => {
				const n = this.events;
				(this.events = []), t(JSON.stringify(n));
			});
		}
		clear() {
			this.events = [];
		}
		getEarliestTimestamp() {
			const t = this.events.map(n => n.timestamp).sort()[0];
			return t ? Mf(t) : null;
		}
	}
	class qb {
		constructor(t) {
			(this._worker = t), (this._id = 0);
		}
		ensureReady() {
			return this._ensureReadyPromise
				? this._ensureReadyPromise
				: ((this._ensureReadyPromise = new Promise((t, n) => {
						this._worker.addEventListener(
							'message',
							({ data: r }) => {
								r.success ? t() : n();
							},
							{ once: !0 }
						),
							this._worker.addEventListener(
								'error',
								r => {
									n(r);
								},
								{ once: !0 }
							);
				  })),
				  this._ensureReadyPromise);
		}
		destroy() {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Destroying compression worker'),
				this._worker.terminate();
		}
		postMessage(t, n) {
			const r = this._getAndIncrementId();
			return new Promise((i, s) => {
				const o = ({ data: a }) => {
					const l = a;
					if (l.method === t && l.id === r) {
						if ((this._worker.removeEventListener('message', o), !l.success)) {
							(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('[Replay]', l.response),
								s(new Error('Error in compression worker'));
							return;
						}
						i(l.response);
					}
				};
				this._worker.addEventListener('message', o), this._worker.postMessage({ id: r, method: t, arg: n });
			});
		}
		_getAndIncrementId() {
			return this._id++;
		}
	}
	class Vb {
		constructor(t) {
			(this._worker = new qb(t)), (this._earliestTimestamp = null);
		}
		get hasEvents() {
			return !!this._earliestTimestamp;
		}
		get type() {
			return 'worker';
		}
		ensureReady() {
			return this._worker.ensureReady();
		}
		destroy() {
			this._worker.destroy();
		}
		addEvent(t) {
			const n = Mf(t.timestamp);
			return (
				(!this._earliestTimestamp || n < this._earliestTimestamp) && (this._earliestTimestamp = n),
				this._sendEventToWorker(t)
			);
		}
		finish() {
			return this._finishRequest();
		}
		clear() {
			(this._earliestTimestamp = null), this._worker.postMessage('clear');
		}
		getEarliestTimestamp() {
			return this._earliestTimestamp;
		}
		_sendEventToWorker(t) {
			return this._worker.postMessage('addEvent', JSON.stringify(t));
		}
		async _finishRequest() {
			const t = await this._worker.postMessage('finish');
			return (this._earliestTimestamp = null), t;
		}
	}
	class Qb {
		constructor(t) {
			(this._fallback = new F1()),
				(this._compression = new Vb(t)),
				(this._used = this._fallback),
				(this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
		}
		get type() {
			return this._used.type;
		}
		get hasEvents() {
			return this._used.hasEvents;
		}
		destroy() {
			this._fallback.destroy(), this._compression.destroy();
		}
		clear() {
			return this._used.clear();
		}
		getEarliestTimestamp() {
			return this._used.getEarliestTimestamp();
		}
		addEvent(t) {
			return this._used.addEvent(t);
		}
		async finish() {
			return await this.ensureWorkerIsLoaded(), this._used.finish();
		}
		ensureWorkerIsLoaded() {
			return this._ensureWorkerIsLoadedPromise;
		}
		async _ensureWorkerIsLoaded() {
			try {
				await this._compression.ensureReady();
			} catch {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('[Replay] Failed to load the compression worker, falling back to simple buffer');
				return;
			}
			await this._switchToCompressionWorker();
		}
		async _switchToCompressionWorker() {
			const { events: t } = this._fallback,
				n = [];
			for (const r of t) n.push(this._compression.addEvent(r));
			this._used = this._compression;
			try {
				await Promise.all(n);
			} catch (r) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('[Replay] Failed to add events when switching buffers.', r);
			}
		}
	}
	function Kb({ useCompression: e }) {
		if (e && window.Worker)
			try {
				const t = Wb();
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Using compression worker');
				const n = new Worker(t);
				return new Qb(n);
			} catch {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Failed to create compression worker');
			}
		return (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Using simple buffer'), new F1();
	}
	function Zb(e) {
		Xb(), (e.session = void 0);
	}
	function Xb() {
		if ('sessionStorage' in ue)
			try {
				ue.sessionStorage.removeItem(Pf);
			} catch {}
	}
	function nd(e, t, n = +new Date()) {
		return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
	}
	function z1(e, t, n = +new Date()) {
		return nd(e.started, t.maxSessionLife, n) || nd(e.lastActivity, t.sessionIdleExpire, n);
	}
	function $1(e) {
		return e === void 0 ? !1 : Math.random() < e;
	}
	function Uf(e) {
		if ('sessionStorage' in ue)
			try {
				ue.sessionStorage.setItem(Pf, JSON.stringify(e));
			} catch {}
	}
	function Bf(e) {
		const t = Date.now(),
			n = e.id || nn(),
			r = e.started || t,
			i = e.lastActivity || t,
			s = e.segmentId || 0,
			o = e.sampled;
		return { id: n, started: r, lastActivity: i, segmentId: s, sampled: o, shouldRefresh: !0 };
	}
	function Jb(e, t) {
		return $1(e) ? 'session' : t ? 'buffer' : !1;
	}
	function ek({ sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 }) {
		const r = Jb(e, t),
			i = Bf({ sampled: r });
		return (
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`[Replay] Creating new session: ${i.id}`),
			n && Uf(i),
			i
		);
	}
	function tk() {
		if (!('sessionStorage' in ue)) return null;
		try {
			const t = ue.sessionStorage.getItem(Pf);
			if (!t) return null;
			const n = JSON.parse(t);
			return Bf(n);
		} catch {
			return null;
		}
	}
	function wu({ timeouts: e, currentSession: t, stickySession: n, sessionSampleRate: r, allowBuffering: i }) {
		const s = t || (n && tk());
		if (s)
			if (z1(s, e))
				if (s.shouldRefresh)
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Session has expired');
				else return { type: 'new', session: Bf({ sampled: !1 }) };
			else return { type: 'saved', session: s };
		return { type: 'new', session: ek({ stickySession: n, sessionSampleRate: r, allowBuffering: i }) };
	}
	async function Qs(e, t, n) {
		if (!e.eventBuffer || e.isPaused() || Mf(t.timestamp) + e.timeouts.sessionIdlePause < Date.now()) return null;
		try {
			return n && e.eventBuffer.clear(), await e.eventBuffer.addEvent(t);
		} catch (i) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error(i), await e.stop('addEvent');
			const s = $().getClient();
			s && s.recordDroppedEvent('internal_sdk_error', 'replay');
		}
	}
	function Fa(e) {
		return !e.type;
	}
	function rd(e) {
		return e.type === 'transaction';
	}
	function nk(e) {
		return e.type === 'replay_event';
	}
	function H1(e) {
		const t = rk();
		return (n, r) => {
			if (!Fa(n) && !rd(n)) return;
			const i = r && r.statusCode;
			if (!(t && (!i || i < 200 || i >= 300))) {
				if (rd(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
					e.getContext().traceIds.add(n.contexts.trace.trace_id);
					return;
				}
				Fa(n) &&
					(n.event_id && e.getContext().errorIds.add(n.event_id),
					e.recordingMode === 'buffer' &&
						n.tags &&
						n.tags.replayId &&
						setTimeout(() => {
							e.sendBufferedReplayOrFlush();
						}));
			}
		};
	}
	function rk() {
		const e = $().getClient();
		if (!e) return !1;
		const t = e.getTransport();
		return (t && t.send.__sentry__baseTransport__) || !1;
	}
	var za;
	(function (e) {
		(e[(e.Document = 0)] = 'Document'),
			(e[(e.DocumentType = 1)] = 'DocumentType'),
			(e[(e.Element = 2)] = 'Element'),
			(e[(e.Text = 3)] = 'Text'),
			(e[(e.CDATA = 4)] = 'CDATA'),
			(e[(e.Comment = 5)] = 'Comment');
	})(za || (za = {}));
	function sr(e) {
		return { timestamp: Date.now() / 1e3, type: 'default', ...e };
	}
	function j1(e, t) {
		t.category !== 'sentry.transaction' &&
			(['ui.click', 'ui.input'].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
			e.addUpdate(
				() => (
					Qs(e, {
						type: te.Custom,
						timestamp: (t.timestamp || 0) * 1e3,
						data: { tag: 'breadcrumb', payload: zt(t, 10, 1e3) },
					}),
					t.category === 'console'
				)
			));
	}
	const ik = new Set(['id', 'class', 'aria-label', 'role', 'name', 'alt', 'title', 'data-test-id', 'data-testid']);
	function sk(e) {
		const t = {};
		for (const n in e)
			if (ik.has(n)) {
				let r = n;
				(n === 'data-testid' || n === 'data-test-id') && (r = 'testId'), (t[r] = e[n]);
			}
		return t;
	}
	const ok = e => t => {
		if (!e.isEnabled()) return;
		const n = ak(t);
		n && j1(e, n);
	};
	function ak(e) {
		let t, n;
		const r = e.name === 'click';
		try {
			(n = r ? uk(e.event) : G1(e.event)), (t = fr(n, { maxStringLength: 200 }));
		} catch {
			t = '<unknown>';
		}
		const i = n && '__sn' in n && n.__sn.type === za.Element ? n.__sn : null;
		return sr({
			category: `ui.${e.name}`,
			message: t,
			data: i
				? {
						nodeId: i.id,
						node: {
							id: i.id,
							tagName: i.tagName,
							textContent: n
								? Array.from(n.childNodes)
										.map(s => '__sn' in s && s.__sn.type === za.Text && s.__sn.textContent)
										.filter(Boolean)
										.map(s => s.trim())
										.join('')
								: '',
							attributes: sk(i.attributes),
						},
				  }
				: {},
		});
	}
	function G1(e) {
		return ck(e) ? e.target : e;
	}
	const lk = 'button,a';
	function uk(e) {
		const t = G1(e);
		return !t || !(t instanceof Element) ? t : t.closest(lk) || t;
	}
	function ck(e) {
		return !!e.target;
	}
	function dk(e, t) {
		return e.type || !e.exception || !e.exception.values || !e.exception.values.length
			? !1
			: t.originalException && t.originalException.__rrweb__
			? !0
			: e.exception.values.some(n =>
					!n.stacktrace || !n.stacktrace.frames || !n.stacktrace.frames.length
						? !1
						: n.stacktrace.frames.some(r => r.filename && r.filename.includes('/rrweb/src/'))
			  );
	}
	function fk(e, t) {
		return e.recordingMode !== 'buffer' || t.message === Lf || !t.exception || t.type
			? !1
			: $1(e.getOptions().errorSampleRate);
	}
	function hk(e, t = !1) {
		const n = t ? H1(e) : void 0;
		return (r, i) => {
			if (nk(r)) return delete r.breadcrumbs, r;
			if (!Fa(r) && !rd(r)) return r;
			if (dk(r, i) && !e.getOptions()._experiments.captureExceptions)
				return (
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.log('[Replay] Ignoring error from rrweb internals', r),
					null
				);
			if (
				((fk(e, r) || e.recordingMode === 'session') && (r.tags = { ...r.tags, replayId: e.getSessionId() }),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals && Fa(r))
			) {
				const a = mk(r);
				pk({ message: `Tagging event (${r.event_id}) - ${r.message} - ${a.type}: ${a.value}` });
			}
			return n && n(r, { statusCode: 200 }), r;
		};
	}
	function pk(e) {
		const { category: t, level: n, message: r, ...i } = e;
		rT({ category: t || 'console', level: n || 'debug', message: `[debug]: ${r}`, ...i });
	}
	function mk(e) {
		return { type: 'Unknown', value: 'n/a', ...(e.exception && e.exception.values && e.exception.values[0]) };
	}
	function Sl(e, t) {
		return t.map(({ type: n, start: r, end: i, name: s, data: o }) =>
			Qs(e, {
				type: te.Custom,
				timestamp: r,
				data: {
					tag: 'performanceSpan',
					payload: { op: n, description: s, startTimestamp: r, endTimestamp: i, data: o },
				},
			})
		);
	}
	function _k(e) {
		const { from: t, to: n } = e,
			r = Date.now() / 1e3;
		return { type: 'navigation.push', start: r, end: r, name: n, data: { previous: t } };
	}
	function gk(e) {
		return t => {
			if (!e.isEnabled()) return;
			const n = _k(t);
			n !== null && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (Sl(e, [n]), !1)));
		};
	}
	function yk(e, t) {
		return (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals
			? !1
			: vk(t);
	}
	function vk(e) {
		const t = $().getClient(),
			n = t && t.getDsn();
		return n ? e.includes(n.host) : !1;
	}
	function wl(e, t) {
		e.isEnabled() && t !== null && (yk(e, t.name) || e.addUpdate(() => (Sl(e, [t]), !0)));
	}
	function Ek(e) {
		const { startTimestamp: t, endTimestamp: n, fetchData: r, response: i } = e;
		if (!n) return null;
		const { method: s, url: o } = r;
		return {
			type: 'resource.fetch',
			start: t / 1e3,
			end: n / 1e3,
			name: o,
			data: { method: s, statusCode: i && i.status },
		};
	}
	function Sk(e) {
		return t => {
			if (!e.isEnabled()) return;
			const n = Ek(t);
			wl(e, n);
		};
	}
	function wk(e) {
		const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
			i = r[Rn];
		if (!t || !n || !i) return null;
		const { method: s, url: o, status_code: a } = i;
		return o === void 0
			? null
			: { type: 'resource.xhr', name: o, start: t / 1e3, end: n / 1e3, data: { method: s, statusCode: a } };
	}
	function Tk(e) {
		return t => {
			if (!e.isEnabled()) return;
			const n = wk(t);
			wl(e, n);
		};
	}
	const bn = 10,
		Ff = 11,
		id = 12,
		un = 13,
		sd = 14,
		ci = 15,
		Zt = 20,
		yt = 21,
		od = 22,
		di = 23,
		Y1 = ['true', 'false', 'null'];
	function Rk(e, t) {
		if (!t.length) return e;
		let n = e;
		const r = t.length - 1,
			i = t[r];
		n = bk(n, i);
		for (let s = r; s >= 0; s--)
			switch (t[s]) {
				case bn:
					n = `${n}}`;
					break;
				case Zt:
					n = `${n}]`;
					break;
			}
		return n;
	}
	function bk(e, t) {
		switch (t) {
			case bn:
				return `${e}"~~":"~~"`;
			case Ff:
				return `${e}:"~~"`;
			case id:
				return `${e}~~":"~~"`;
			case un:
				return Ck(e);
			case sd:
				return `${e}~~"`;
			case ci:
				return `${e},"~~":"~~"`;
			case Zt:
				return `${e}"~~"`;
			case yt:
				return kk(e);
			case od:
				return `${e}~~"`;
			case di:
				return `${e},"~~"`;
		}
		return e;
	}
	function kk(e) {
		const t = xk(e);
		if (t > -1) {
			const n = e.slice(t + 1);
			return Y1.includes(n.trim()) ? `${e},"~~"` : `${e.slice(0, t + 1)}"~~"`;
		}
		return e;
	}
	function xk(e) {
		for (let t = e.length - 1; t >= 0; t--) {
			const n = e[t];
			if (n === ',' || n === '[') return t;
		}
		return -1;
	}
	function Ck(e) {
		const t = e.lastIndexOf(':'),
			n = e.slice(t + 1);
		return Y1.includes(n.trim()) ? `${e},"~~":"~~"` : `${e.slice(0, t + 1)}"~~"`;
	}
	function Nk(e) {
		const t = [];
		for (let n = 0; n < e.length; n++) Ok(t, e, n);
		return t;
	}
	function Ok(e, t, n) {
		const r = e[e.length - 1],
			i = t[n];
		if (!/\s/.test(i)) {
			if (i === '"' && !W1(t, n)) {
				Ik(e, r);
				return;
			}
			switch (i) {
				case '{':
					Dk(e, r);
					break;
				case '[':
					Ak(e, r);
					break;
				case ':':
					Pk(e, r);
					break;
				case ',':
					Lk(e, r);
					break;
				case '}':
					Mk(e, r);
					break;
				case ']':
					Uk(e, r);
					break;
			}
		}
	}
	function Ik(e, t) {
		if (t === sd) {
			e.pop(), e.push(ci);
			return;
		}
		if (t === od) {
			e.pop(), e.push(di);
			return;
		}
		if (t === un) {
			e.push(sd);
			return;
		}
		if (t === yt) {
			e.push(od);
			return;
		}
		if (t === bn) {
			e.push(id);
			return;
		}
		if (t === id) {
			e.pop(), e.push(Ff);
			return;
		}
	}
	function Dk(e, t) {
		if (!t) {
			e.push(bn);
			return;
		}
		if (t === un) {
			e.push(bn);
			return;
		}
		if ((t === yt && e.push(bn), t === Zt)) {
			e.push(bn);
			return;
		}
	}
	function Ak(e, t) {
		if (!t) {
			e.push(Zt), e.push(yt);
			return;
		}
		if (t === un) {
			e.push(Zt), e.push(yt);
			return;
		}
		if ((t === yt && (e.push(Zt), e.push(yt)), t === Zt)) {
			e.push(Zt), e.push(yt);
			return;
		}
	}
	function Pk(e, t) {
		t === Ff && (e.pop(), e.push(un));
	}
	function Lk(e, t) {
		if (t === un) {
			e.pop();
			return;
		}
		if (t === ci) {
			e.pop(), e.pop();
			return;
		}
		if (t !== yt && t === di) {
			e.pop();
			return;
		}
	}
	function Mk(e, t) {
		t === bn && e.pop(),
			t === un && (e.pop(), e.pop()),
			t === ci && (e.pop(), e.pop(), e.pop()),
			e[e.length - 1] === un && e.push(ci),
			e[e.length - 1] === yt && e.push(di);
	}
	function Uk(e, t) {
		t === Zt && e.pop(),
			t === yt && (e.pop(), e.pop()),
			t === di && (e.pop(), e.pop(), e.pop()),
			e[e.length - 1] === un && e.push(ci),
			e[e.length - 1] === yt && e.push(di);
	}
	function W1(e, t) {
		return e[t - 1] === '\\' && !W1(e, t - 1);
	}
	function q1(e) {
		const t = Nk(e);
		return Rk(e, t);
	}
	function $a(e, t) {
		if (e)
			try {
				if (typeof e == 'string') return t.encode(e).length;
				if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
				if (e instanceof FormData) {
					const n = Z1(e);
					return t.encode(n).length;
				}
				if (e instanceof Blob) return e.size;
				if (e instanceof ArrayBuffer) return e.byteLength;
			} catch {}
	}
	function V1(e) {
		if (!e) return;
		const t = parseInt(e, 10);
		return isNaN(t) ? void 0 : t;
	}
	function Q1(e) {
		if (typeof e == 'string') return e;
		if (e instanceof URLSearchParams) return e.toString();
		if (e instanceof FormData) return Z1(e);
	}
	function K1(e, t) {
		if (!t) return null;
		const { startTimestamp: n, endTimestamp: r, url: i, method: s, statusCode: o, request: a, response: l } = t;
		return {
			type: e,
			start: n / 1e3,
			end: r / 1e3,
			name: i,
			data: Yt({ method: s, statusCode: o, request: a, response: l }),
		};
	}
	function Ps(e) {
		return { headers: {}, size: e, _meta: { warnings: ['URL_SKIPPED'] } };
	}
	function kn(e, t, n) {
		if (!t && Object.keys(e).length === 0) return;
		if (!t) return { headers: e };
		if (!n) return { headers: e, size: t };
		const r = { headers: e, size: t },
			{ body: i, warnings: s } = Bk(n);
		return (r.body = i), s.length > 0 && (r._meta = { warnings: s }), r;
	}
	function ad(e, t) {
		return Object.keys(e).reduce((n, r) => {
			const i = r.toLowerCase();
			return t.includes(i) && e[r] && (n[i] = e[r]), n;
		}, {});
	}
	function Z1(e) {
		return new URLSearchParams(e).toString();
	}
	function Bk(e) {
		if (!e || typeof e != 'string') return { body: e, warnings: [] };
		const t = e.length > ko;
		if (Fk(e))
			try {
				const n = t ? q1(e.slice(0, ko)) : e;
				return { body: JSON.parse(n), warnings: t ? ['JSON_TRUNCATED'] : [] };
			} catch {
				return {
					body: t ? `${e.slice(0, ko)}…` : e,
					warnings: t ? ['INVALID_JSON', 'TEXT_TRUNCATED'] : ['INVALID_JSON'],
				};
			}
		return { body: t ? `${e.slice(0, ko)}…` : e, warnings: t ? ['TEXT_TRUNCATED'] : [] };
	}
	function Fk(e) {
		const t = e[0],
			n = e[e.length - 1];
		return (t === '[' && n === ']') || (t === '{' && n === '}');
	}
	function X1(e, t) {
		return wi(e, t);
	}
	async function zk(e, t, n) {
		try {
			const r = await Hk(e, t, n),
				i = K1('resource.fetch', r);
			wl(n.replay, i);
		} catch (r) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('[Replay] Failed to capture fetch breadcrumb', r);
		}
	}
	function $k(e, t, n) {
		const { input: r, response: i } = t,
			s = J1(r),
			o = $a(s, n.textEncoder),
			a = i ? V1(i.headers.get('content-length')) : void 0;
		o !== void 0 && (e.data.request_body_size = o), a !== void 0 && (e.data.response_body_size = a);
	}
	async function Hk(e, t, n) {
		const { startTimestamp: r, endTimestamp: i } = t,
			{ url: s, method: o, status_code: a = 0, request_body_size: l, response_body_size: u } = e.data,
			c = X1(s, n.networkDetailAllowUrls),
			d = c ? jk(n, t.input, l) : Ps(l),
			h = await Gk(c, n, t.response, u);
		return { startTimestamp: r, endTimestamp: i, url: s, method: o, statusCode: a, request: d, response: h };
	}
	function jk({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
		const i = Wk(n, t);
		if (!e) return kn(i, r, void 0);
		const s = J1(n),
			o = Q1(s);
		return kn(i, r, o);
	}
	async function Gk(e, { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r }, i, s) {
		if (!e && s !== void 0) return Ps(s);
		const o = ey(i.headers, r);
		if (!t && s !== void 0) return kn(o, s, void 0);
		try {
			const a = i.clone(),
				l = await Yk(a),
				u = l && l.length && s === void 0 ? $a(l, n) : s;
			return e ? (t ? kn(o, u, l) : kn(o, u, void 0)) : Ps(u);
		} catch {
			return kn(o, s, void 0);
		}
	}
	async function Yk(e) {
		try {
			return await e.text();
		} catch {
			return;
		}
	}
	function J1(e = []) {
		if (!(e.length !== 2 || typeof e[1] != 'object')) return e[1].body;
	}
	function ey(e, t) {
		const n = {};
		return (
			t.forEach(r => {
				e.get(r) && (n[r] = e.get(r));
			}),
			n
		);
	}
	function Wk(e, t) {
		return e.length === 1 && typeof e[0] != 'string' ? gm(e[0], t) : e.length === 2 ? gm(e[1], t) : {};
	}
	function gm(e, t) {
		if (!e) return {};
		const n = e.headers;
		return n ? (n instanceof Headers ? ey(n, t) : Array.isArray(n) ? {} : ad(n, t)) : {};
	}
	async function qk(e, t, n) {
		try {
			const r = Qk(e, t, n),
				i = K1('resource.xhr', r);
			wl(n.replay, i);
		} catch (r) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('[Replay] Failed to capture fetch breadcrumb', r);
		}
	}
	function Vk(e, t, n) {
		const { xhr: r, input: i } = t,
			s = $a(i, n.textEncoder),
			o = r.getResponseHeader('content-length')
				? V1(r.getResponseHeader('content-length'))
				: $a(r.response, n.textEncoder);
		s !== void 0 && (e.data.request_body_size = s), o !== void 0 && (e.data.response_body_size = o);
	}
	function Qk(e, t, n) {
		const { startTimestamp: r, endTimestamp: i, input: s, xhr: o } = t,
			{ url: a, method: l, status_code: u = 0, request_body_size: c, response_body_size: d } = e.data;
		if (!a) return null;
		if (!X1(a, n.networkDetailAllowUrls)) {
			const p = Ps(c),
				m = Ps(d);
			return { startTimestamp: r, endTimestamp: i, url: a, method: l, statusCode: u, request: p, response: m };
		}
		const h = o[Rn],
			f = h ? ad(h.request_headers, n.networkRequestHeaders) : {},
			_ = ad(Kk(o), n.networkResponseHeaders),
			y = kn(f, c, n.networkCaptureBodies ? Q1(s) : void 0),
			S = kn(_, d, n.networkCaptureBodies ? t.xhr.responseText : void 0);
		return { startTimestamp: r, endTimestamp: i, url: a, method: l, statusCode: u, request: y, response: S };
	}
	function Kk(e) {
		const t = e.getAllResponseHeaders();
		return t
			? t
					.split(
						`\r
`
					)
					.reduce((n, r) => {
						const [i, s] = r.split(': ');
						return (n[i.toLowerCase()] = s), n;
					}, {})
			: {};
	}
	function Zk(e) {
		const t = $().getClient();
		try {
			const n = new TextEncoder(),
				{
					networkDetailAllowUrls: r,
					networkCaptureBodies: i,
					networkRequestHeaders: s,
					networkResponseHeaders: o,
				} = e.getOptions(),
				a = {
					replay: e,
					textEncoder: n,
					networkDetailAllowUrls: r,
					networkCaptureBodies: i,
					networkRequestHeaders: s,
					networkResponseHeaders: o,
				};
			t && t.on ? t.on('beforeAddBreadcrumb', (l, u) => Xk(a, l, u)) : (Le('fetch', Sk(e)), Le('xhr', Tk(e)));
		} catch {}
	}
	function Xk(e, t, n) {
		if (t.data)
			try {
				Jk(t) && t6(n) && (Vk(t, n, e), qk(t, n, e)), e6(t) && n6(n) && ($k(t, n, e), zk(t, n, e));
			} catch {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.warn('Error when enriching network breadcrumb');
			}
	}
	function Jk(e) {
		return e.category === 'xhr';
	}
	function e6(e) {
		return e.category === 'fetch';
	}
	function t6(e) {
		return e && e.xhr;
	}
	function n6(e) {
		return e && e.response;
	}
	let ym = null;
	const r6 = e => t => {
		if (!e.isEnabled()) return;
		const n = i6(t);
		n && j1(e, n);
	};
	function i6(e) {
		const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
		return ym === t ||
			!t ||
			((ym = t),
			t.category &&
				(['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(t.category) || t.category.startsWith('ui.')))
			? null
			: t.category === 'console'
			? s6(t)
			: sr(t);
	}
	function s6(e) {
		const t = e.data && e.data.arguments;
		if (!Array.isArray(t) || t.length === 0) return sr(e);
		let n = !1;
		const r = t.map(i => {
			if (!i) return i;
			if (typeof i == 'string') return i.length > xo ? ((n = !0), `${i.slice(0, xo)}…`) : i;
			if (typeof i == 'object')
				try {
					const s = zt(i, 7),
						o = JSON.stringify(s);
					if (o.length > xo) {
						const a = q1(o.slice(0, xo)),
							l = JSON.parse(a);
						return (n = !0), l;
					}
					return s;
				} catch {}
			return i;
		});
		return sr({
			...e,
			data: { ...e.data, arguments: r, ...(n ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {}) },
		});
	}
	function o6(e) {
		const t = $().getScope(),
			n = $().getClient();
		t && t.addScopeListener(r6(e)),
			Le('dom', ok(e)),
			Le('history', gk(e)),
			Zk(e),
			_l(hk(e, !vm(n))),
			vm(n) &&
				(n.on('afterSendEvent', H1(e)),
				n.on('createDsc', r => {
					const i = e.getSessionId();
					i && e.isEnabled() && e.recordingMode === 'session' && (r.replay_id = i);
				}));
	}
	function vm(e) {
		return !!(e && e.on);
	}
	async function a6(e) {
		try {
			return Promise.all(Sl(e, [l6(ue.performance.memory)]));
		} catch {
			return [];
		}
	}
	function l6(e) {
		const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
			i = Date.now() / 1e3;
		return {
			type: 'memory',
			name: 'memory',
			start: i,
			end: i,
			data: { memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } },
		};
	}
	const Em = { resource: h6, paint: d6, navigation: f6, ['largest-contentful-paint']: p6 };
	function u6(e) {
		return e.map(c6).filter(Boolean);
	}
	function c6(e) {
		return Em[e.entryType] === void 0 ? null : Em[e.entryType](e);
	}
	function fi(e) {
		return ((ln || ue.performance.timeOrigin) + e) / 1e3;
	}
	function d6(e) {
		const { duration: t, entryType: n, name: r, startTime: i } = e,
			s = fi(i);
		return { type: n, name: r, start: s, end: s + t, data: void 0 };
	}
	function f6(e) {
		const {
			entryType: t,
			name: n,
			decodedBodySize: r,
			duration: i,
			domComplete: s,
			encodedBodySize: o,
			domContentLoadedEventStart: a,
			domContentLoadedEventEnd: l,
			domInteractive: u,
			loadEventStart: c,
			loadEventEnd: d,
			redirectCount: h,
			startTime: f,
			transferSize: _,
			type: y,
		} = e;
		return i === 0
			? null
			: {
					type: `${t}.${y}`,
					start: fi(f),
					end: fi(s),
					name: n,
					data: {
						size: _,
						decodedBodySize: r,
						encodedBodySize: o,
						duration: i,
						domInteractive: u,
						domContentLoadedEventStart: a,
						domContentLoadedEventEnd: l,
						loadEventStart: c,
						loadEventEnd: d,
						domComplete: s,
						redirectCount: h,
					},
			  };
	}
	function h6(e) {
		const {
			entryType: t,
			initiatorType: n,
			name: r,
			responseEnd: i,
			startTime: s,
			decodedBodySize: o,
			encodedBodySize: a,
			responseStatus: l,
			transferSize: u,
		} = e;
		return ['fetch', 'xmlhttprequest'].includes(n)
			? null
			: {
					type: `${t}.${n}`,
					start: fi(s),
					end: fi(i),
					name: r,
					data: { size: u, statusCode: l, decodedBodySize: o, encodedBodySize: a },
			  };
	}
	function p6(e) {
		const { entryType: t, startTime: n, size: r } = e;
		let i = 0;
		if (ue.performance) {
			const a = ue.performance.getEntriesByType('navigation')[0];
			i = (a && a.activationStart) || 0;
		}
		const s = Math.max(n - i, 0),
			o = fi(i) + s / 1e3;
		return { type: t, name: t, start: o, end: o, data: { value: s, size: r, nodeId: mr.mirror.getId(e.element) } };
	}
	function m6(e, t, n) {
		let r, i, s;
		const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
		function a() {
			return l(), (r = e()), r;
		}
		function l() {
			i !== void 0 && clearTimeout(i), s !== void 0 && clearTimeout(s), (i = s = void 0);
		}
		function u() {
			return i !== void 0 || s !== void 0 ? a() : r;
		}
		function c() {
			return i && clearTimeout(i), (i = setTimeout(a, t)), o && s === void 0 && (s = setTimeout(a, o)), r;
		}
		return (c.cancel = l), (c.flush = u), c;
	}
	var ld;
	(function (e) {
		e[(e.DomContentLoaded = 0)] = 'DomContentLoaded';
		const n = 1;
		e[(e.Load = n)] = 'Load';
		const r = 2;
		e[(e.FullSnapshot = r)] = 'FullSnapshot';
		const i = 3;
		e[(e.IncrementalSnapshot = i)] = 'IncrementalSnapshot';
		const s = 4;
		e[(e.Meta = s)] = 'Meta';
		const o = 5;
		e[(e.Custom = o)] = 'Custom';
		const a = 6;
		e[(e.Plugin = a)] = 'Plugin';
	})(ld || (ld = {}));
	function _6(e) {
		let t = !1;
		return (n, r) => {
			if (!e.checkAndHandleExpiredSession()) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn('[Replay] Received replay event after session expired.');
				return;
			}
			const i = r || !t;
			(t = !0),
				e.addUpdate(() => {
					if ((e.recordingMode === 'buffer' && i && e.setInitialState(), Qs(e, n, i), !i)) return !1;
					if ((y6(e, i), e.session && e.session.previousSessionId)) return !0;
					if (e.recordingMode === 'buffer' && e.session && e.eventBuffer) {
						const s = e.eventBuffer.getEarliestTimestamp();
						s && ((e.session.started = s), e.getOptions().stickySession && Uf(e.session));
					}
					return e.recordingMode === 'session' && e.flushImmediate(), !0;
				});
		};
	}
	function g6(e) {
		const t = e.getOptions();
		return {
			type: ld.Custom,
			timestamp: Date.now(),
			data: {
				tag: 'options',
				payload: {
					sessionSampleRate: t.sessionSampleRate,
					errorSampleRate: t.errorSampleRate,
					useCompressionOption: t.useCompression,
					blockAllMedia: t.blockAllMedia,
					maskAllText: t.maskAllText,
					maskAllInputs: t.maskAllInputs,
					useCompression: e.eventBuffer ? e.eventBuffer.type === 'worker' : !1,
					networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
					networkCaptureBodies: t.networkCaptureBodies,
					networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
					networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
				},
			},
		};
	}
	function y6(e, t) {
		return !t || !e.session || e.session.segmentId !== 0 ? Promise.resolve(null) : Qs(e, g6(e), !1);
	}
	function v6(e, t, n, r) {
		return Ti(Jg(e, Cf(e), r, n), [
			[{ type: 'replay_event' }, e],
			[{ type: 'replay_recording', length: typeof t == 'string' ? new TextEncoder().encode(t).length : t.length }, t],
		]);
	}
	function E6({ recordingData: e, headers: t }) {
		let n;
		const r = `${JSON.stringify(t)}
`;
		if (typeof e == 'string') n = `${r}${e}`;
		else {
			const s = new TextEncoder().encode(r);
			(n = new Uint8Array(s.length + e.length)), n.set(s), n.set(e, s.length);
		}
		return n;
	}
	async function S6({ client: e, scope: t, replayId: n, event: r }) {
		const i =
				typeof e._integrations == 'object' && e._integrations !== null && !Array.isArray(e._integrations)
					? Object.keys(e._integrations)
					: void 0,
			s = await c1(e.getOptions(), r, { event_id: n, integrations: i }, t);
		if (!s) return null;
		s.platform = s.platform || 'javascript';
		const o = e.getSdkMetadata && e.getSdkMetadata(),
			{ name: a, version: l } = (o && o.sdk) || {};
		return (s.sdk = { ...s.sdk, name: a || 'sentry.javascript.unknown', version: l || '0.0.0' }), s;
	}
	async function w6({ recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: s }) {
		const o = E6({ recordingData: e, headers: { segment_id: n } }),
			{ urls: a, errorIds: l, traceIds: u, initialTimestamp: c } = r,
			d = $(),
			h = d.getClient(),
			f = d.getScope(),
			_ = h && h.getTransport(),
			y = h && h.getDsn();
		if (!h || !f || !_ || !y || !s.sampled) return;
		const S = {
				type: MR,
				replay_start_timestamp: c / 1e3,
				timestamp: i / 1e3,
				error_ids: l,
				trace_ids: u,
				urls: a,
				replay_id: t,
				segment_id: n,
				replay_type: s.sampled,
			},
			p = await S6({ scope: f, client: h, replayId: t, event: S });
		if (!p) {
			h.recordDroppedEvent('event_processor', 'replay', S),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('An event processor returned `null`, will not send event.');
			return;
		}
		const m = v6(p, o, y, h.getOptions().tunnel);
		let g;
		try {
			g = await _.send(m);
		} catch (E) {
			const T = new Error(Lf);
			try {
				T.cause = E;
			} catch {}
			throw T;
		}
		if (!g) return g;
		if (typeof g.statusCode == 'number' && (g.statusCode < 200 || g.statusCode >= 300)) throw new ty(g.statusCode);
		return g;
	}
	class ty extends Error {
		constructor(t) {
			super(`Transport returned status code ${t}`);
		}
	}
	async function ny(e, t = { count: 0, interval: jR }) {
		const { recordingData: n, options: r } = e;
		if (n.length)
			try {
				return await w6(e), !0;
			} catch (i) {
				if (i instanceof ty) throw i;
				if (
					(iT('Replays', { _retryCount: t.count }),
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						r._experiments &&
						r._experiments.captureExceptions &&
						yl(i),
					t.count >= GR)
				) {
					const s = new Error(`${Lf} - max retries exceeded`);
					try {
						s.cause = i;
					} catch {}
					throw s;
				}
				return (
					(t.interval *= ++t.count),
					await new Promise((s, o) => {
						setTimeout(async () => {
							try {
								await ny(e, t), s(!0);
							} catch (a) {
								o(a);
							}
						}, t.interval);
					})
				);
			}
	}
	class Ee {
		__init() {
			this.eventBuffer = null;
		}
		__init2() {
			this.performanceEvents = [];
		}
		__init3() {
			this.recordingMode = 'session';
		}
		__init4() {
			this.timeouts = { sessionIdlePause: UR, sessionIdleExpire: BR, maxSessionLife: FR };
		}
		__init5() {
			this._performanceObserver = null;
		}
		__init6() {
			this._flushLock = null;
		}
		__init7() {
			this._lastActivity = Date.now();
		}
		__init8() {
			this._isEnabled = !1;
		}
		__init9() {
			this._isPaused = !1;
		}
		__init10() {
			this._hasInitializedCoreListeners = !1;
		}
		__init11() {
			this._stopRecording = null;
		}
		__init12() {
			this._context = {
				errorIds: new Set(),
				traceIds: new Set(),
				urls: [],
				initialTimestamp: Date.now(),
				initialUrl: '',
			};
		}
		constructor({ options: t, recordingOptions: n }) {
			Ee.prototype.__init.call(this),
				Ee.prototype.__init2.call(this),
				Ee.prototype.__init3.call(this),
				Ee.prototype.__init4.call(this),
				Ee.prototype.__init5.call(this),
				Ee.prototype.__init6.call(this),
				Ee.prototype.__init7.call(this),
				Ee.prototype.__init8.call(this),
				Ee.prototype.__init9.call(this),
				Ee.prototype.__init10.call(this),
				Ee.prototype.__init11.call(this),
				Ee.prototype.__init12.call(this),
				Ee.prototype.__init13.call(this),
				Ee.prototype.__init14.call(this),
				Ee.prototype.__init15.call(this),
				Ee.prototype.__init16.call(this),
				Ee.prototype.__init17.call(this),
				Ee.prototype.__init18.call(this),
				(this._recordingOptions = n),
				(this._options = t),
				(this._debouncedFlush = m6(() => this._flush(), this._options.flushMinDelay, {
					maxWait: this._options.flushMaxDelay,
				}));
		}
		getContext() {
			return this._context;
		}
		isEnabled() {
			return this._isEnabled;
		}
		isPaused() {
			return this._isPaused;
		}
		getOptions() {
			return this._options;
		}
		initializeSampling() {
			const { errorSampleRate: t, sessionSampleRate: n } = this._options;
			if (!((t <= 0 && n <= 0) || !this._loadAndCheckSession())) {
				if (!this.session) {
					this._handleException(new Error('Unable to initialize and create session'));
					return;
				}
				this.session.sampled && this.session.sampled !== 'session' && (this.recordingMode = 'buffer'),
					this._initializeRecording();
			}
		}
		start() {
			if (this._isEnabled && this.recordingMode === 'session')
				throw new Error('Replay recording is already in progress');
			if (this._isEnabled && this.recordingMode === 'buffer')
				throw new Error('Replay buffering is in progress, call `flush()` to save the replay');
			const t = this.session && this.session.id,
				{ session: n } = wu({
					timeouts: this.timeouts,
					stickySession: Boolean(this._options.stickySession),
					currentSession: this.session,
					sessionSampleRate: 1,
					allowBuffering: !1,
				});
			(n.previousSessionId = t), (this.session = n), this._initializeRecording();
		}
		startBuffering() {
			if (this._isEnabled) throw new Error('Replay recording is already in progress');
			const t = this.session && this.session.id,
				{ session: n } = wu({
					timeouts: this.timeouts,
					stickySession: Boolean(this._options.stickySession),
					currentSession: this.session,
					sessionSampleRate: 0,
					allowBuffering: !0,
				});
			(n.previousSessionId = t), (this.session = n), (this.recordingMode = 'buffer'), this._initializeRecording();
		}
		startRecording() {
			try {
				this._stopRecording = mr({
					...this._recordingOptions,
					...(this.recordingMode === 'buffer' && { checkoutEveryNms: HR }),
					emit: _6(this),
					onMutation: this._onMutationHandler,
				});
			} catch (t) {
				this._handleException(t);
			}
		}
		stopRecording() {
			try {
				return this._stopRecording && (this._stopRecording(), (this._stopRecording = void 0)), !0;
			} catch (t) {
				return this._handleException(t), !1;
			}
		}
		async stop(t) {
			if (this._isEnabled)
				try {
					if (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) {
						const n = `[Replay] Stopping Replay${t ? ` triggered by ${t}` : ''}`;
						(this.getOptions()._experiments.traceInternals ? console.warn : C.log)(n);
					}
					(this._isEnabled = !1),
						this._removeListeners(),
						this.stopRecording(),
						this._debouncedFlush.cancel(),
						await this._flush({ force: !0 }),
						this.eventBuffer && this.eventBuffer.destroy(),
						(this.eventBuffer = null),
						Zb(this);
				} catch (n) {
					this._handleException(n);
				}
		}
		pause() {
			(this._isPaused = !0), this.stopRecording();
		}
		resume() {
			this._loadAndCheckSession() && ((this._isPaused = !1), this.startRecording());
		}
		async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
			if (this.recordingMode === 'session') return this.flushImmediate();
			await this.flushImmediate();
			const n = this.stopRecording();
			!t ||
				!n ||
				((this.recordingMode = 'session'),
				this.session && ((this.session.shouldRefresh = !1), this._maybeSaveSession()),
				this.startRecording());
		}
		addUpdate(t) {
			const n = t();
			this.recordingMode !== 'buffer' && n !== !0 && this._debouncedFlush();
		}
		triggerUserActivity() {
			if ((this._updateUserActivity(), !this._stopRecording)) {
				if (!this._loadAndCheckSession()) return;
				this.resume();
				return;
			}
			this.checkAndHandleExpiredSession(), this._updateSessionActivity();
		}
		flushImmediate() {
			return this._debouncedFlush(), this._debouncedFlush.flush();
		}
		getSessionId() {
			return this.session && this.session.id;
		}
		checkAndHandleExpiredSession() {
			const t = this.getSessionId();
			if (
				this._lastActivity &&
				nd(this._lastActivity, this.timeouts.sessionIdlePause) &&
				this.session &&
				this.session.sampled === 'session'
			) {
				this.pause();
				return;
			}
			return this._loadAndCheckSession()
				? t !== this.getSessionId()
					? (this._triggerFullSnapshot(), !1)
					: !0
				: void 0;
		}
		setInitialState() {
			const t = `${ue.location.pathname}${ue.location.hash}${ue.location.search}`,
				n = `${ue.location.origin}${t}`;
			(this.performanceEvents = []),
				this._clearContext(),
				(this._context.initialUrl = n),
				(this._context.initialTimestamp = Date.now()),
				this._context.urls.push(n);
		}
		_initializeRecording() {
			this.setInitialState(),
				this._updateSessionActivity(),
				(this.eventBuffer = Kb({ useCompression: this._options.useCompression })),
				this._removeListeners(),
				this._addListeners(),
				(this._isEnabled = !0),
				this.startRecording();
		}
		_handleException(t) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('[Replay]', t),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					this._options._experiments &&
					this._options._experiments.captureExceptions &&
					yl(t);
		}
		_loadAndCheckSession() {
			const { type: t, session: n } = wu({
				timeouts: this.timeouts,
				stickySession: Boolean(this._options.stickySession),
				currentSession: this.session,
				sessionSampleRate: this._options.sessionSampleRate,
				allowBuffering: this._options.errorSampleRate > 0,
			});
			t === 'new' && this.setInitialState();
			const r = this.getSessionId();
			return (
				n.id !== r && (n.previousSessionId = r),
				(this.session = n),
				this.session.sampled ? !0 : (this.stop('session unsampled'), !1)
			);
		}
		_addListeners() {
			try {
				ue.document.addEventListener('visibilitychange', this._handleVisibilityChange),
					ue.addEventListener('blur', this._handleWindowBlur),
					ue.addEventListener('focus', this._handleWindowFocus),
					ue.addEventListener('keydown', this._handleKeyboardEvent),
					this._hasInitializedCoreListeners || (o6(this), (this._hasInitializedCoreListeners = !0));
			} catch (t) {
				this._handleException(t);
			}
			'PerformanceObserver' in ue && (this._performanceObserver = Gb(this));
		}
		_removeListeners() {
			try {
				ue.document.removeEventListener('visibilitychange', this._handleVisibilityChange),
					ue.removeEventListener('blur', this._handleWindowBlur),
					ue.removeEventListener('focus', this._handleWindowFocus),
					ue.removeEventListener('keydown', this._handleKeyboardEvent),
					this._performanceObserver && (this._performanceObserver.disconnect(), (this._performanceObserver = null));
			} catch (t) {
				this._handleException(t);
			}
		}
		__init13() {
			this._handleVisibilityChange = () => {
				ue.document.visibilityState === 'visible'
					? this._doChangeToForegroundTasks()
					: this._doChangeToBackgroundTasks();
			};
		}
		__init14() {
			this._handleWindowBlur = () => {
				const t = sr({ category: 'ui.blur' });
				this._doChangeToBackgroundTasks(t);
			};
		}
		__init15() {
			this._handleWindowFocus = () => {
				const t = sr({ category: 'ui.focus' });
				this._doChangeToForegroundTasks(t);
			};
		}
		__init16() {
			this._handleKeyboardEvent = () => {
				this.triggerUserActivity();
			};
		}
		_doChangeToBackgroundTasks(t) {
			if (!this.session) return;
			const n = z1(this.session, this.timeouts);
			t && !n && this._createCustomBreadcrumb(t), this._conditionalFlush();
		}
		_doChangeToForegroundTasks(t) {
			if (!this.session) return;
			if (!this.checkAndHandleExpiredSession()) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log('[Replay] Document has become active, but session has expired');
				return;
			}
			t && this._createCustomBreadcrumb(t);
		}
		_triggerFullSnapshot(t = !0) {
			try {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Replay] Taking full rrweb snapshot'),
					mr.takeFullSnapshot(t);
			} catch (n) {
				this._handleException(n);
			}
		}
		_updateUserActivity(t = Date.now()) {
			this._lastActivity = t;
		}
		_updateSessionActivity(t = Date.now()) {
			this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
		}
		_createCustomBreadcrumb(t) {
			this.addUpdate(() => {
				Qs(this, { type: te.Custom, timestamp: t.timestamp || 0, data: { tag: 'breadcrumb', payload: t } });
			});
		}
		_addPerformanceEntries() {
			const t = [...this.performanceEvents];
			return (this.performanceEvents = []), Promise.all(Sl(this, u6(t)));
		}
		_conditionalFlush() {
			this.recordingMode !== 'buffer' && this.flushImmediate();
		}
		_clearContext() {
			this._context.errorIds.clear(), this._context.traceIds.clear(), (this._context.urls = []);
		}
		_updateInitialTimestampFromEventBuffer() {
			const { session: t, eventBuffer: n } = this;
			if (!t || !n || t.segmentId) return;
			const r = n.getEarliestTimestamp();
			r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r);
		}
		_popEventContext() {
			const t = {
				initialTimestamp: this._context.initialTimestamp,
				initialUrl: this._context.initialUrl,
				errorIds: Array.from(this._context.errorIds),
				traceIds: Array.from(this._context.traceIds),
				urls: this._context.urls,
			};
			return this._clearContext(), t;
		}
		async _runFlush() {
			if (!this.session || !this.eventBuffer) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.error('[Replay] No session or eventBuffer found to flush.');
				return;
			}
			if (
				(await this._addPerformanceEntries(),
				!(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await a6(this), !!this.eventBuffer))
			)
				try {
					this._updateInitialTimestampFromEventBuffer();
					const t = await this.eventBuffer.finish(),
						n = this.session.id,
						r = this._popEventContext(),
						i = this.session.segmentId++;
					this._maybeSaveSession(),
						await ny({
							replayId: n,
							recordingData: t,
							segmentId: i,
							eventContext: r,
							session: this.session,
							options: this.getOptions(),
							timestamp: Date.now(),
						});
				} catch (t) {
					this._handleException(t), this.stop('sendReplay');
					const n = $().getClient();
					n && n.recordDroppedEvent('send_error', 'replay');
				}
		}
		__init17() {
			this._flush = async ({ force: t = !1 } = {}) => {
				if (!(!this._isEnabled && !t)) {
					if (!this.checkAndHandleExpiredSession()) {
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.error('[Replay] Attempting to finish replay event after session expired.');
						return;
					}
					if (!this.session) {
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error('[Replay] No session found to flush.');
						return;
					}
					if ((this._debouncedFlush.cancel(), !this._flushLock)) {
						(this._flushLock = this._runFlush()), await this._flushLock, (this._flushLock = null);
						return;
					}
					try {
						await this._flushLock;
					} catch (n) {
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.error(n);
					} finally {
						this._debouncedFlush();
					}
				}
			};
		}
		_maybeSaveSession() {
			this.session && this._options.stickySession && Uf(this.session);
		}
		__init18() {
			this._onMutationHandler = t => {
				const n = t.length,
					r = this._options._experiments.mutationLimit || 0,
					i = this._options._experiments.mutationBreadcrumbLimit || 1e3,
					s = r && n > r;
				if (n > i || s) {
					const o = sr({ category: 'replay.mutations', data: { count: n } });
					this._createCustomBreadcrumb(o);
				}
				return s ? (this._triggerFullSnapshot(!1), !1) : !0;
			};
		}
	}
	function Pi(e, t, n, r) {
		const i = typeof r == 'string' ? r.split(',') : [],
			s = [...e, ...i, ...t];
		return (
			typeof n < 'u' &&
				(typeof n == 'string' && s.push(`.${n}`),
				console.warn(
					'[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.'
				)),
			s.join(',')
		);
	}
	function T6({
		mask: e,
		unmask: t,
		block: n,
		unblock: r,
		ignore: i,
		blockClass: s,
		blockSelector: o,
		maskTextClass: a,
		maskTextSelector: l,
		ignoreClass: u,
	}) {
		const c = ['base[href="/"]'],
			d = Pi(e, ['.sentry-mask', '[data-sentry-mask]'], a, l),
			h = Pi(t, ['.sentry-unmask', '[data-sentry-unmask]']),
			f = {
				maskTextSelector: d,
				unmaskTextSelector: h,
				maskInputSelector: d,
				unmaskInputSelector: h,
				blockSelector: Pi(n, ['.sentry-block', '[data-sentry-block]', ...c], s, o),
				unblockSelector: Pi(r, ['.sentry-unblock', '[data-sentry-unblock]']),
				ignoreSelector: Pi(i, ['.sentry-ignore', '[data-sentry-ignore]', 'input[type="file"]'], u),
			};
		return s instanceof RegExp && (f.blockClass = s), a instanceof RegExp && (f.maskTextClass = a), f;
	}
	function Sm() {
		return typeof window < 'u' && (!Kg() || R6());
	}
	function R6() {
		return typeof process < 'u' && process.type === 'renderer';
	}
	const wm = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
		b6 = ['content-length', 'content-type', 'accept'];
	let Tm = !1;
	class Ls {
		static __initStatic() {
			this.id = 'Replay';
		}
		__init() {
			this.name = Ls.id;
		}
		constructor({
			flushMinDelay: t = zR,
			flushMaxDelay: n = $R,
			stickySession: r = !0,
			useCompression: i = !0,
			_experiments: s = {},
			sessionSampleRate: o,
			errorSampleRate: a,
			maskAllText: l = !0,
			maskAllInputs: u = !0,
			blockAllMedia: c = !0,
			networkDetailAllowUrls: d = [],
			networkCaptureBodies: h = !0,
			networkRequestHeaders: f = [],
			networkResponseHeaders: _ = [],
			mask: y = [],
			unmask: S = [],
			block: p = [],
			unblock: m = [],
			ignore: g = [],
			maskFn: E,
			blockClass: T,
			blockSelector: b,
			maskInputOptions: R,
			maskTextClass: w,
			maskTextSelector: A,
			ignoreClass: O,
		} = {}) {
			if (
				(Ls.prototype.__init.call(this),
				(this._recordingOptions = {
					maskAllInputs: u,
					maskAllText: l,
					maskInputOptions: { ...(R || {}), password: !0 },
					maskTextFn: E,
					maskInputFn: E,
					...T6({
						mask: y,
						unmask: S,
						block: p,
						unblock: m,
						ignore: g,
						blockClass: T,
						blockSelector: b,
						maskTextClass: w,
						maskTextSelector: A,
						ignoreClass: O,
					}),
					slimDOMOptions: 'all',
					inlineStylesheet: !0,
					inlineImages: !1,
					collectFonts: !0,
				}),
				(this._initialOptions = {
					flushMinDelay: t,
					flushMaxDelay: n,
					stickySession: r,
					sessionSampleRate: o,
					errorSampleRate: a,
					useCompression: i,
					blockAllMedia: c,
					maskAllInputs: u,
					maskAllText: l,
					networkDetailAllowUrls: d,
					networkCaptureBodies: h,
					networkRequestHeaders: Rm(f),
					networkResponseHeaders: Rm(_),
					_experiments: s,
				}),
				typeof o == 'number' &&
					(console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${o} })`),
					(this._initialOptions.sessionSampleRate = o)),
				typeof a == 'number' &&
					(console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${a} })`),
					(this._initialOptions.errorSampleRate = a)),
				this._initialOptions.blockAllMedia &&
					(this._recordingOptions.blockSelector = this._recordingOptions.blockSelector
						? `${this._recordingOptions.blockSelector},${wm}`
						: wm),
				this._isInitialized && Sm())
			)
				throw new Error('Multiple Sentry Session Replay instances are not supported');
			this._isInitialized = !0;
		}
		get _isInitialized() {
			return Tm;
		}
		set _isInitialized(t) {
			Tm = t;
		}
		setupOnce() {
			Sm() && (this._setup(), setTimeout(() => this._initialize()));
		}
		start() {
			this._replay && this._replay.start();
		}
		startBuffering() {
			this._replay && this._replay.startBuffering();
		}
		stop() {
			return this._replay ? this._replay.stop() : Promise.resolve();
		}
		flush(t) {
			return !this._replay || !this._replay.isEnabled() ? Promise.resolve() : this._replay.sendBufferedReplayOrFlush(t);
		}
		getReplayId() {
			if (!(!this._replay || !this._replay.isEnabled())) return this._replay.getSessionId();
		}
		_initialize() {
			this._replay && this._replay.initializeSampling();
		}
		_setup() {
			const t = k6(this._initialOptions);
			this._replay = new Ee({ options: t, recordingOptions: this._recordingOptions });
		}
	}
	Ls.__initStatic();
	function k6(e) {
		const t = $().getClient(),
			n = t && t.getOptions(),
			r = { sessionSampleRate: 0, errorSampleRate: 0, ...Yt(e) };
		return n
			? (e.sessionSampleRate == null &&
					e.errorSampleRate == null &&
					n.replaysSessionSampleRate == null &&
					n.replaysOnErrorSampleRate == null &&
					console.warn(
						'Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.'
					),
			  typeof n.replaysSessionSampleRate == 'number' && (r.sessionSampleRate = n.replaysSessionSampleRate),
			  typeof n.replaysOnErrorSampleRate == 'number' && (r.errorSampleRate = n.replaysOnErrorSampleRate),
			  r)
			: (console.warn('SDK client is not available.'), r);
	}
	function Rm(e) {
		return [...b6, ...e.map(t => t.toLowerCase())];
	}
	const J = rt;
	function x6() {
		J && J.document
			? J.document.addEventListener('visibilitychange', () => {
					const e = qs();
					if (J.document.hidden && e) {
						const t = 'cancelled';
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							C.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
							e.status || e.setStatus(t),
							e.setTag('visibilitychange', 'document.hidden'),
							e.finish();
					}
			  })
			: (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			  C.warn('[Tracing] Could not set up background tab detection due to lack of global document');
	}
	const zf = (e, t, n) => {
			let r, i;
			return s => {
				t.value >= 0 &&
					(s || n) &&
					((i = t.value - (r || 0)), (i || r === void 0) && ((r = t.value), (t.delta = i), e(t)));
			};
		},
		C6 = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
		N6 = () => {
			const e = J.performance.timing,
				t = J.performance.navigation.type,
				n = { entryType: 'navigation', startTime: 0, type: t == 2 ? 'back_forward' : t === 1 ? 'reload' : 'navigate' };
			for (const r in e) r !== 'navigationStart' && r !== 'toJSON' && (n[r] = Math.max(e[r] - e.navigationStart, 0));
			return n;
		},
		ry = () =>
			J.__WEB_VITALS_POLYFILL__
				? J.performance && ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || N6())
				: J.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0],
		iy = () => {
			const e = ry();
			return (e && e.activationStart) || 0;
		},
		$f = (e, t) => {
			const n = ry();
			let r = 'navigate';
			return (
				n && (J.document.prerendering || iy() > 0 ? (r = 'prerender') : (r = n.type.replace(/_/g, '-'))),
				{ name: e, value: typeof t > 'u' ? -1 : t, rating: 'good', delta: 0, entries: [], id: C6(), navigationType: r }
			);
		},
		Ks = (e, t, n) => {
			try {
				if (PerformanceObserver.supportedEntryTypes.includes(e)) {
					const r = new PerformanceObserver(i => {
						t(i.getEntries());
					});
					return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
				}
			} catch {}
		},
		Tl = (e, t) => {
			const n = r => {
				(r.type === 'pagehide' || J.document.visibilityState === 'hidden') &&
					(e(r), t && (removeEventListener('visibilitychange', n, !0), removeEventListener('pagehide', n, !0)));
			};
			addEventListener('visibilitychange', n, !0), addEventListener('pagehide', n, !0);
		},
		O6 = e => {
			const t = $f('CLS', 0);
			let n,
				r = 0,
				i = [];
			const s = a => {
					a.forEach(l => {
						if (!l.hadRecentInput) {
							const u = i[0],
								c = i[i.length - 1];
							r && i.length !== 0 && l.startTime - c.startTime < 1e3 && l.startTime - u.startTime < 5e3
								? ((r += l.value), i.push(l))
								: ((r = l.value), (i = [l])),
								r > t.value && ((t.value = r), (t.entries = i), n && n());
						}
					});
				},
				o = Ks('layout-shift', s);
			if (o) {
				n = zf(e, t);
				const a = () => {
					s(o.takeRecords()), n(!0);
				};
				return Tl(a), a;
			}
		};
	let ea = -1;
	const I6 = () => (J.document.visibilityState === 'hidden' && !J.document.prerendering ? 0 : 1 / 0),
		D6 = () => {
			Tl(({ timeStamp: e }) => {
				ea = e;
			}, !0);
		},
		Hf = () => (
			ea < 0 && ((ea = I6()), D6()),
			{
				get firstHiddenTime() {
					return ea;
				},
			}
		),
		A6 = e => {
			const t = Hf(),
				n = $f('FID');
			let r;
			const i = a => {
					a.startTime < t.firstHiddenTime && ((n.value = a.processingStart - a.startTime), n.entries.push(a), r(!0));
				},
				s = a => {
					a.forEach(i);
				},
				o = Ks('first-input', s);
			(r = zf(e, n)),
				o &&
					Tl(() => {
						s(o.takeRecords()), o.disconnect();
					}, !0);
		},
		bm = {},
		P6 = e => {
			const t = Hf(),
				n = $f('LCP');
			let r;
			const i = o => {
					const a = o[o.length - 1];
					if (a) {
						const l = Math.max(a.startTime - iy(), 0);
						l < t.firstHiddenTime && ((n.value = l), (n.entries = [a]), r());
					}
				},
				s = Ks('largest-contentful-paint', i);
			if (s) {
				r = zf(e, n);
				const o = () => {
					bm[n.id] || (i(s.takeRecords()), s.disconnect(), (bm[n.id] = !0), r(!0));
				};
				return (
					['keydown', 'click'].forEach(a => {
						addEventListener(a, o, { once: !0, capture: !0 });
					}),
					Tl(o, !0),
					o
				);
			}
		};
	function Tu(e) {
		return typeof e == 'number' && isFinite(e);
	}
	function hi(e, { startTimestamp: t, ...n }) {
		return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({ startTimestamp: t, ...n });
	}
	function Re(e) {
		return e / 1e3;
	}
	function sy() {
		return J && J.addEventListener && J.performance;
	}
	let km = 0,
		me = {},
		Ft,
		is;
	function L6() {
		const e = sy();
		if (e && ln) {
			e.mark && J.performance.mark('sentry-tracing-init'), z6();
			const t = B6(),
				n = F6();
			return () => {
				t && t(), n && n();
			};
		}
		return () => {};
	}
	function M6() {
		Ks('longtask', t => {
			for (const n of t) {
				const r = qs();
				if (!r) return;
				const i = Re(ln + n.startTime),
					s = Re(n.duration);
				r.startChild({
					description: 'Main UI thread blocked',
					op: 'ui.long-task',
					startTimestamp: i,
					endTimestamp: i + s,
				});
			}
		});
	}
	function U6() {
		Ks(
			'event',
			t => {
				for (const n of t) {
					const r = qs();
					if (!r) return;
					if (n.name === 'click') {
						const i = Re(ln + n.startTime),
							s = Re(n.duration);
						r.startChild({
							description: fr(n.target),
							op: `ui.interaction.${n.name}`,
							startTimestamp: i,
							endTimestamp: i + s,
						});
					}
				}
			},
			{ durationThreshold: 0 }
		);
	}
	function B6() {
		return O6(e => {
			const t = e.entries.pop();
			t &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding CLS'),
				(me.cls = { value: e.value, unit: '' }),
				(is = t));
		});
	}
	function F6() {
		return P6(e => {
			const t = e.entries.pop();
			t &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding LCP'),
				(me.lcp = { value: e.value, unit: 'millisecond' }),
				(Ft = t));
		});
	}
	function z6() {
		A6(e => {
			const t = e.entries.pop();
			if (!t) return;
			const n = Re(ln),
				r = Re(t.startTime);
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding FID'),
				(me.fid = { value: e.value, unit: 'millisecond' }),
				(me['mark.fid'] = { value: n + r, unit: 'second' });
		});
	}
	function $6(e) {
		const t = sy();
		if (!t || !J.performance.getEntries || !ln) return;
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			C.log('[Tracing] Adding & adjusting spans using Performance API');
		const n = Re(ln),
			r = t.getEntries();
		let i, s;
		if (
			(r.slice(km).forEach(o => {
				const a = Re(o.startTime),
					l = Re(o.duration);
				if (!(e.op === 'navigation' && n + a < e.startTimestamp))
					switch (o.entryType) {
						case 'navigation': {
							j6(e, o, n), (i = n + Re(o.responseStart)), (s = n + Re(o.requestStart));
							break;
						}
						case 'mark':
						case 'paint':
						case 'measure': {
							H6(e, o, a, l, n);
							const u = Hf(),
								c = o.startTime < u.firstHiddenTime;
							o.name === 'first-paint' &&
								c &&
								((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding FP'),
								(me.fp = { value: o.startTime, unit: 'millisecond' })),
								o.name === 'first-contentful-paint' &&
									c &&
									((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding FCP'),
									(me.fcp = { value: o.startTime, unit: 'millisecond' }));
							break;
						}
						case 'resource': {
							const u = o.name.replace(J.location.origin, '');
							Y6(e, o, u, a, l, n);
							break;
						}
					}
			}),
			(km = Math.max(r.length - 1, 0)),
			W6(e),
			e.op === 'pageload')
		) {
			typeof i == 'number' &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding TTFB'),
				(me.ttfb = { value: (i - e.startTimestamp) * 1e3, unit: 'millisecond' }),
				typeof s == 'number' && s <= i && (me['ttfb.requestTime'] = { value: (i - s) * 1e3, unit: 'millisecond' })),
				['fcp', 'fp', 'lcp'].forEach(a => {
					if (!me[a] || n >= e.startTimestamp) return;
					const l = me[a].value,
						u = n + Re(l),
						c = Math.abs((u - e.startTimestamp) * 1e3),
						d = c - l;
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.log(`[Measurements] Normalized ${a} from ${l} to ${c} (${d})`),
						(me[a].value = c);
				});
			const o = me['mark.fid'];
			o &&
				me.fid &&
				(hi(e, {
					description: 'first input delay',
					endTimestamp: o.value + Re(me.fid.value),
					op: 'ui.action',
					startTimestamp: o.value,
				}),
				delete me['mark.fid']),
				'fcp' in me || delete me.cls,
				Object.keys(me).forEach(a => {
					e.setMeasurement(a, me[a].value, me[a].unit);
				}),
				q6(e);
		}
		(Ft = void 0), (is = void 0), (me = {});
	}
	function H6(e, t, n, r, i) {
		const s = i + n,
			o = s + r;
		return hi(e, { description: t.name, endTimestamp: o, op: t.entryType, startTimestamp: s }), s;
	}
	function j6(e, t, n) {
		['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(r => {
			Io(e, t, r, n);
		}),
			Io(e, t, 'secureConnection', n, 'TLS/SSL', 'connectEnd'),
			Io(e, t, 'fetch', n, 'cache', 'domainLookupStart'),
			Io(e, t, 'domainLookup', n, 'DNS'),
			G6(e, t, n);
	}
	function Io(e, t, n, r, i, s) {
		const o = s ? t[s] : t[`${n}End`],
			a = t[`${n}Start`];
		!a || !o || hi(e, { op: 'browser', description: i || n, startTimestamp: r + Re(a), endTimestamp: r + Re(o) });
	}
	function G6(e, t, n) {
		hi(e, {
			op: 'browser',
			description: 'request',
			startTimestamp: n + Re(t.requestStart),
			endTimestamp: n + Re(t.responseEnd),
		}),
			hi(e, {
				op: 'browser',
				description: 'response',
				startTimestamp: n + Re(t.responseStart),
				endTimestamp: n + Re(t.responseEnd),
			});
	}
	function Y6(e, t, n, r, i, s) {
		if (t.initiatorType === 'xmlhttprequest' || t.initiatorType === 'fetch') return;
		const o = {};
		'transferSize' in t && (o['http.response_transfer_size'] = t.transferSize),
			'encodedBodySize' in t && (o['http.response_content_length'] = t.encodedBodySize),
			'decodedBodySize' in t && (o['http.decoded_response_content_length'] = t.decodedBodySize),
			'renderBlockingStatus' in t && (o['resource.render_blocking_status'] = t.renderBlockingStatus);
		const a = s + r,
			l = a + i;
		hi(e, {
			description: n,
			endTimestamp: l,
			op: t.initiatorType ? `resource.${t.initiatorType}` : 'resource.other',
			startTimestamp: a,
			data: o,
		});
	}
	function W6(e) {
		const t = J.navigator;
		if (!t) return;
		const n = t.connection;
		n &&
			(n.effectiveType && e.setTag('effectiveConnectionType', n.effectiveType),
			n.type && e.setTag('connectionType', n.type),
			Tu(n.rtt) && (me['connection.rtt'] = { value: n.rtt, unit: 'millisecond' })),
			Tu(t.deviceMemory) && e.setTag('deviceMemory', `${t.deviceMemory} GB`),
			Tu(t.hardwareConcurrency) && e.setTag('hardwareConcurrency', String(t.hardwareConcurrency));
	}
	function q6(e) {
		Ft &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding LCP Data'),
			Ft.element && e.setTag('lcp.element', fr(Ft.element)),
			Ft.id && e.setTag('lcp.id', Ft.id),
			Ft.url && e.setTag('lcp.url', Ft.url.trim().slice(0, 200)),
			e.setTag('lcp.size', Ft.size)),
			is &&
				is.sources &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log('[Measurements] Adding CLS Data'),
				is.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, fr(t.node))));
	}
	const ud = ['localhost', /^\//],
		cd = { traceFetch: !0, traceXHR: !0, tracingOrigins: ud, tracePropagationTargets: ud };
	function V6(e) {
		const {
				traceFetch: t,
				traceXHR: n,
				tracePropagationTargets: r,
				tracingOrigins: i,
				shouldCreateSpanForRequest: s,
			} = { traceFetch: cd.traceFetch, traceXHR: cd.traceXHR, ...e },
			o = typeof s == 'function' ? s : u => !0,
			a = u => Q6(u, r || i),
			l = {};
		t &&
			Le('fetch', u => {
				K6(u, o, a, l);
			}),
			n &&
				Le('xhr', u => {
					X6(u, o, a, l);
				});
	}
	function Q6(e, t) {
		return wi(e, t || ud);
	}
	function K6(e, t, n, r) {
		if (!Of() || !(e.fetchData && t(e.fetchData.url))) return;
		if (e.endTimestamp) {
			const l = e.fetchData.__span;
			if (!l) return;
			const u = r[l];
			u &&
				(e.response ? u.setHttpStatus(e.response.status) : e.error && u.setStatus('internal_error'),
				u.finish(),
				delete r[l]);
			return;
		}
		const i = e.response && e.response.headers && e.response.headers.get('content-length'),
			s = $().getScope(),
			o = s && s.getSpan(),
			a = o && o.transaction;
		if (o && a) {
			const { method: l, url: u } = e.fetchData,
				c = o.startChild({
					data: { url: u, type: 'fetch', ...(i ? { 'http.response_content_length': i } : {}), 'http.method': l },
					description: `${l} ${u}`,
					op: 'http.client',
				});
			(e.fetchData.__span = c.spanId), (r[c.spanId] = c);
			const d = e.args[0];
			e.args[1] = e.args[1] || {};
			const h = e.args[1];
			n(e.fetchData.url) && (h.headers = Z6(d, a.getDynamicSamplingContext(), c, h));
		}
	}
	function Z6(e, t, n, r) {
		const i = t1(t),
			s = n.toTraceparent(),
			o = typeof Request < 'u' && Fn(e, Request) ? e.headers : r.headers;
		if (o)
			if (typeof Headers < 'u' && Fn(o, Headers)) {
				const a = new Headers(o);
				return a.append('sentry-trace', s), i && a.append(Yc, i), a;
			} else if (Array.isArray(o)) {
				const a = [...o, ['sentry-trace', s]];
				return i && a.push([Yc, i]), a;
			} else {
				const a = 'baggage' in o ? o.baggage : void 0,
					l = [];
				return (
					Array.isArray(a) ? l.push(...a) : a && l.push(a),
					i && l.push(i),
					{ ...o, 'sentry-trace': s, baggage: l.length > 0 ? l.join(',') : void 0 }
				);
			}
		else return { 'sentry-trace': s, baggage: i };
	}
	function X6(e, t, n, r) {
		const i = e.xhr,
			s = i && i[Rn];
		if (!Of() || (i && i.__sentry_own_request__) || !(i && s && t(s.url))) return;
		if (e.endTimestamp) {
			const u = i.__sentry_xhr_span_id__;
			if (!u) return;
			const c = r[u];
			c && (c.setHttpStatus(s.status_code), c.finish(), delete r[u]);
			return;
		}
		const o = $().getScope(),
			a = o && o.getSpan(),
			l = a && a.transaction;
		if (a && l) {
			const u = a.startChild({
				data: { ...s.data, type: 'xhr', 'http.method': s.method, url: s.url },
				description: `${s.method} ${s.url}`,
				op: 'http.client',
			});
			if (((i.__sentry_xhr_span_id__ = u.spanId), (r[i.__sentry_xhr_span_id__] = u), i.setRequestHeader && n(s.url)))
				try {
					i.setRequestHeader('sentry-trace', u.toTraceparent());
					const c = l.getDynamicSamplingContext(),
						d = t1(c);
					d && i.setRequestHeader(Yc, d);
				} catch {}
		}
	}
	function J6(e, t = !0, n = !0) {
		if (!J || !J.location) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				C.warn('Could not initialize routing instrumentation due to invalid location');
			return;
		}
		let r = J.location.href,
			i;
		t &&
			(i = e({
				name: J.location.pathname,
				startTimestamp: ln ? ln / 1e3 : void 0,
				op: 'pageload',
				metadata: { source: 'url' },
			})),
			n &&
				Le('history', ({ to: s, from: o }) => {
					if (o === void 0 && r && r.indexOf(s) !== -1) {
						r = void 0;
						return;
					}
					o !== s &&
						((r = void 0),
						i &&
							((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								C.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
							i.finish()),
						(i = e({ name: J.location.pathname, op: 'navigation', metadata: { source: 'url' } })));
				});
	}
	const ex = 'BrowserTracing',
		tx = {
			...Zo,
			markBackgroundTransactions: !0,
			routingInstrumentation: J6,
			startTransactionOnLocationChange: !0,
			startTransactionOnPageLoad: !0,
			enableLongTask: !0,
			_experiments: {},
			...cd,
		};
	class jf {
		__init() {
			this.name = ex;
		}
		constructor(t) {
			jf.prototype.__init.call(this),
				nT(),
				(this.options = { ...tx, ...t }),
				this.options._experiments.enableLongTask !== void 0 &&
					(this.options.enableLongTask = this.options._experiments.enableLongTask),
				t &&
					!t.tracePropagationTargets &&
					t.tracingOrigins &&
					(this.options.tracePropagationTargets = t.tracingOrigins),
				(this._collectWebVitals = L6()),
				this.options.enableLongTask && M6(),
				this.options._experiments.enableInteractions && U6();
		}
		setupOnce(t, n) {
			this._getCurrentHub = n;
			const {
				routingInstrumentation: r,
				startTransactionOnLocationChange: i,
				startTransactionOnPageLoad: s,
				markBackgroundTransactions: o,
				traceFetch: a,
				traceXHR: l,
				tracePropagationTargets: u,
				shouldCreateSpanForRequest: c,
				_experiments: d,
			} = this.options;
			r(
				h => {
					const f = this._createRouteTransaction(h);
					return (
						this.options._experiments.onStartRouteTransaction &&
							this.options._experiments.onStartRouteTransaction(f, h, n),
						f
					);
				},
				s,
				i
			),
				o && x6(),
				d.enableInteractions && this._registerInteractionListener(),
				V6({ traceFetch: a, traceXHR: l, tracePropagationTargets: u, shouldCreateSpanForRequest: c });
		}
		_createRouteTransaction(t) {
			if (!this._getCurrentHub) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
				return;
			}
			const { beforeNavigate: n, idleTimeout: r, finalTimeout: i, heartbeatInterval: s } = this.options,
				o = t.op === 'pageload',
				a = o ? xm('sentry-trace') : null,
				l = o ? xm('baggage') : null,
				u = a ? k3(a) : void 0,
				c = l ? z3(l) : void 0,
				d = { ...t, ...u, metadata: { ...t.metadata, dynamicSamplingContext: u && !c ? {} : c }, trimEnd: !0 },
				h = typeof n == 'function' ? n(d) : d,
				f = h === void 0 ? { ...d, sampled: !1 } : h;
			(f.metadata = f.name !== d.name ? { ...f.metadata, source: 'custom' } : f.metadata),
				(this._latestRouteName = f.name),
				(this._latestRouteSource = f.metadata && f.metadata.source),
				f.sampled === !1 &&
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					C.log(`[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && C.log(`[Tracing] Starting ${f.op} transaction on scope`);
			const _ = this._getCurrentHub(),
				{ location: y } = J,
				S = qp(_, f, r, i, !0, { location: y }, s);
			return (
				S.registerBeforeFinishCallback(p => {
					this._collectWebVitals(), $6(p);
				}),
				S
			);
		}
		_registerInteractionListener() {
			let t;
			const n = () => {
				const { idleTimeout: r, finalTimeout: i, heartbeatInterval: s } = this.options,
					o = 'ui.action.click',
					a = qs();
				if (a && a.op && ['navigation', 'pageload'].includes(a.op)) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn(
							`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
						);
					return;
				}
				if ((t && (t.setFinishReason('interactionInterrupted'), t.finish(), (t = void 0)), !this._getCurrentHub)) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
					return;
				}
				if (!this._latestRouteName) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						C.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
					return;
				}
				const l = this._getCurrentHub(),
					{ location: u } = J,
					c = {
						name: this._latestRouteName,
						op: o,
						trimEnd: !0,
						metadata: { source: this._latestRouteSource || 'url' },
					};
				t = qp(l, c, r, i, !0, { location: u }, s);
			};
			['click'].forEach(r => {
				addEventListener(r, n, { once: !1, capture: !0 });
			});
		}
	}
	function xm(e) {
		const t = $5(`meta[name=${e}]`);
		return t ? t.getAttribute('content') : null;
	}
	function nx(e) {
		(e._metadata = e._metadata || {}),
			(e._metadata.sdk = e._metadata.sdk || {
				name: 'sentry.javascript.react',
				packages: [{ name: 'npm:@sentry/react', version: Pa }],
				version: Pa,
			}),
			PR(e);
	}
	var dd = {},
		rx = {
			get exports() {
				return dd;
			},
			set exports(e) {
				dd = e;
			},
		},
		Z = {};
	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */ var Ie = typeof Symbol == 'function' && Symbol.for,
		Gf = Ie ? Symbol.for('react.element') : 60103,
		Yf = Ie ? Symbol.for('react.portal') : 60106,
		Rl = Ie ? Symbol.for('react.fragment') : 60107,
		bl = Ie ? Symbol.for('react.strict_mode') : 60108,
		kl = Ie ? Symbol.for('react.profiler') : 60114,
		xl = Ie ? Symbol.for('react.provider') : 60109,
		Cl = Ie ? Symbol.for('react.context') : 60110,
		Wf = Ie ? Symbol.for('react.async_mode') : 60111,
		Nl = Ie ? Symbol.for('react.concurrent_mode') : 60111,
		Ol = Ie ? Symbol.for('react.forward_ref') : 60112,
		Il = Ie ? Symbol.for('react.suspense') : 60113,
		ix = Ie ? Symbol.for('react.suspense_list') : 60120,
		Dl = Ie ? Symbol.for('react.memo') : 60115,
		Al = Ie ? Symbol.for('react.lazy') : 60116,
		sx = Ie ? Symbol.for('react.block') : 60121,
		ox = Ie ? Symbol.for('react.fundamental') : 60117,
		ax = Ie ? Symbol.for('react.responder') : 60118,
		lx = Ie ? Symbol.for('react.scope') : 60119;
	function ht(e) {
		if (typeof e == 'object' && e !== null) {
			var t = e.$$typeof;
			switch (t) {
				case Gf:
					switch (((e = e.type), e)) {
						case Wf:
						case Nl:
						case Rl:
						case kl:
						case bl:
						case Il:
							return e;
						default:
							switch (((e = e && e.$$typeof), e)) {
								case Cl:
								case Ol:
								case Al:
								case Dl:
								case xl:
									return e;
								default:
									return t;
							}
					}
				case Yf:
					return t;
			}
		}
	}
	function oy(e) {
		return ht(e) === Nl;
	}
	Z.AsyncMode = Wf;
	Z.ConcurrentMode = Nl;
	Z.ContextConsumer = Cl;
	Z.ContextProvider = xl;
	Z.Element = Gf;
	Z.ForwardRef = Ol;
	Z.Fragment = Rl;
	Z.Lazy = Al;
	Z.Memo = Dl;
	Z.Portal = Yf;
	Z.Profiler = kl;
	Z.StrictMode = bl;
	Z.Suspense = Il;
	Z.isAsyncMode = function (e) {
		return oy(e) || ht(e) === Wf;
	};
	Z.isConcurrentMode = oy;
	Z.isContextConsumer = function (e) {
		return ht(e) === Cl;
	};
	Z.isContextProvider = function (e) {
		return ht(e) === xl;
	};
	Z.isElement = function (e) {
		return typeof e == 'object' && e !== null && e.$$typeof === Gf;
	};
	Z.isForwardRef = function (e) {
		return ht(e) === Ol;
	};
	Z.isFragment = function (e) {
		return ht(e) === Rl;
	};
	Z.isLazy = function (e) {
		return ht(e) === Al;
	};
	Z.isMemo = function (e) {
		return ht(e) === Dl;
	};
	Z.isPortal = function (e) {
		return ht(e) === Yf;
	};
	Z.isProfiler = function (e) {
		return ht(e) === kl;
	};
	Z.isStrictMode = function (e) {
		return ht(e) === bl;
	};
	Z.isSuspense = function (e) {
		return ht(e) === Il;
	};
	Z.isValidElementType = function (e) {
		return (
			typeof e == 'string' ||
			typeof e == 'function' ||
			e === Rl ||
			e === Nl ||
			e === kl ||
			e === bl ||
			e === Il ||
			e === ix ||
			(typeof e == 'object' &&
				e !== null &&
				(e.$$typeof === Al ||
					e.$$typeof === Dl ||
					e.$$typeof === xl ||
					e.$$typeof === Cl ||
					e.$$typeof === Ol ||
					e.$$typeof === ox ||
					e.$$typeof === ax ||
					e.$$typeof === lx ||
					e.$$typeof === sx))
		);
	};
	Z.typeOf = ht;
	(function (e) {
		e.exports = Z;
	})(rx);
	var ay = dd,
		ux = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
		cx = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
		ly = {};
	ly[ay.ForwardRef] = ux;
	ly[ay.Memo] = cx;
	function dx(e) {
		const t = e.match(/^([^.]+)/);
		return t !== null && parseInt(t[0]) >= 17;
	}
	const Cm = { componentStack: null, error: null, eventId: null };
	function fx(e, t) {
		const n = new WeakMap();
		function r(i, s) {
			if (!n.has(i)) {
				if (i.cause) return n.set(i, !0), r(i.cause, s);
				i.cause = s;
			}
		}
		r(e, t);
	}
	class ss extends x.Component {
		__init() {
			this.state = Cm;
		}
		__init2() {
			this._openFallbackReportDialog = !0;
		}
		constructor(t) {
			super(t), ss.prototype.__init.call(this), ss.prototype.__init2.call(this), ss.prototype.__init3.call(this);
			const n = $().getClient();
			n &&
				n.on &&
				t.showDialog &&
				((this._openFallbackReportDialog = !1),
				n.on('afterSendEvent', r => {
					!r.type && r.event_id === this._lastEventId && nm({ ...t.dialogOptions, eventId: this._lastEventId });
				}));
		}
		componentDidCatch(t, { componentStack: n }) {
			const { beforeCapture: r, onError: i, showDialog: s, dialogOptions: o } = this.props;
			a1(a => {
				if (dx(x.version) && wf(t)) {
					const u = new Error(t.message);
					(u.name = `React ErrorBoundary ${u.name}`), (u.stack = n), fx(t, u);
				}
				r && r(a, t, n);
				const l = yl(t, { contexts: { react: { componentStack: n } } });
				i && i(t, n, l),
					s && ((this._lastEventId = l), this._openFallbackReportDialog && nm({ ...o, eventId: l })),
					this.setState({ error: t, componentStack: n, eventId: l });
			});
		}
		componentDidMount() {
			const { onMount: t } = this.props;
			t && t();
		}
		componentWillUnmount() {
			const { error: t, componentStack: n, eventId: r } = this.state,
				{ onUnmount: i } = this.props;
			i && i(t, n, r);
		}
		__init3() {
			this.resetErrorBoundary = () => {
				const { onReset: t } = this.props,
					{ error: n, componentStack: r, eventId: i } = this.state;
				t && t(n, r, i), this.setState(Cm);
			};
		}
		render() {
			const { fallback: t, children: n } = this.props,
				r = this.state;
			if (r.error) {
				let i;
				return (
					typeof t == 'function'
						? (i = t({
								error: r.error,
								componentStack: r.componentStack,
								resetError: this.resetErrorBoundary,
								eventId: r.eventId,
						  }))
						: (i = t),
					x.isValidElement(i)
						? i
						: (t &&
								(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								C.warn('fallback did not produce a valid ReactElement'),
						  null)
				);
			}
			return typeof n == 'function' ? n() : n;
		}
	}
	const hx = () => {
		const e = wv(),
			t = x.useCallback(() => {
				e('/chatty');
			}, [e]);
		return L('div', {
			className: 'flex flex-col gap-8 w-screen h-screen justify-center items-center',
			children: [
				v('div', {
					className: 'icon',
					children: v(yr, {
						size: '108px',
						icon: 'exclamation',
						fillColor: '#FE7C58',
						strokeColor: 'white',
						stroke: 1.5,
					}),
				}),
				v('h3', { className: 'font-bold text-20 text-black', children: '원하시는 페이지를 찾을 수 없습니다.' }),
				v('p', {
					className: 'text-dark-disabled font-normal text-16',
					children: '홈으로 이동하거나 다시 시도해 주세요.',
				}),
				v('button', {
					className: 'absolute bottom-10 self-center bg-main-primary rounded-2xl w-10/12 h-60',
					onClick: t,
					children: v('span', { className: 'text-white font-medium', children: 'Chatty 공식계정으로 이동' }),
				}),
			],
		});
	};
	nx({
		dsn: 'https://77ec0c2e21604ed185bcd63160d17cbc@o4505182036885504.ingest.sentry.io/4505182040227840',
		integrations: [new jf(), new Ls()],
		tracesSampleRate: 1,
		replaysSessionSampleRate: 0.1,
		replaysOnErrorSampleRate: 1,
	});
	const px = Lg(document.getElementById('root'));
	px.render(
		v(X.StrictMode, {
			children: v(Pv, { children: v(ss, { showDialog: !1, fallback: v(hx, {}), children: v(A5, {}) }) }),
		})
	);
});
export default mx();
