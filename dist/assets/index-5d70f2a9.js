var _y = Object.defineProperty;
var gy = (e, t, n) => (t in e ? _y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n));
var Ks = (e, t, n) => (gy(e, typeof t != 'symbol' ? t + '' : t, n), n);
function yy(e, t) {
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
function vy(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var xm = { exports: {} },
	Ha = {},
	Cm = { exports: {} },
	j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = Symbol.for('react.element'),
	Ey = Symbol.for('react.portal'),
	Sy = Symbol.for('react.fragment'),
	wy = Symbol.for('react.strict_mode'),
	Ty = Symbol.for('react.profiler'),
	by = Symbol.for('react.provider'),
	Ry = Symbol.for('react.context'),
	ky = Symbol.for('react.forward_ref'),
	xy = Symbol.for('react.suspense'),
	Cy = Symbol.for('react.memo'),
	Ny = Symbol.for('react.lazy'),
	Gf = Symbol.iterator;
function Oy(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Gf && e[Gf]) || e['@@iterator']), typeof e == 'function' ? e : null);
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
function ad(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = Im), (this.updater = n || Nm);
}
var ld = (ad.prototype = new Dm());
ld.constructor = ad;
Om(ld, pi.prototype);
ld.isPureReactComponent = !0;
var Yf = Array.isArray,
	Am = Object.prototype.hasOwnProperty,
	ud = { current: null },
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
	return { $$typeof: Ls, type: e, key: s, ref: o, props: i, _owner: ud.current };
}
function Iy(e, t) {
	return { $$typeof: Ls, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cd(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Ls;
}
function Dy(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Wf = /\/+/g;
function Pl(e, t) {
	return typeof e == 'object' && e !== null && e.key != null ? Dy('' + e.key) : t.toString(36);
}
function Io(e, t, n, r, i) {
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
					case Ls:
					case Ey:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === '' ? '.' + Pl(o, 0) : r),
			Yf(i)
				? ((n = ''),
				  e != null && (n = e.replace(Wf, '$&/') + '/'),
				  Io(i, t, n, '', function (u) {
						return u;
				  }))
				: i != null &&
				  (cd(i) &&
						(i = Iy(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Wf, '$&/') + '/') + e)),
				  t.push(i)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Yf(e)))
		for (var a = 0; a < e.length; a++) {
			s = e[a];
			var l = r + Pl(s, a);
			o += Io(s, t, n, l, i);
		}
	else if (((l = Oy(e)), typeof l == 'function'))
		for (e = l.call(e), a = 0; !(s = e.next()).done; ) (s = s.value), (l = r + Pl(s, a++)), (o += Io(s, t, n, l, i));
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
function Zs(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Io(e, r, '', '', function (s) {
			return t.call(n, s, i++);
		}),
		r
	);
}
function Ay(e) {
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
	Do = { transition: null },
	Py = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: Do, ReactCurrentOwner: ud };
j.Children = {
	map: Zs,
	forEach: function (e, t, n) {
		Zs(
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
			Zs(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Zs(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!cd(e)) throw Error('React.Children.only expected to receive a single React element child.');
		return e;
	},
};
j.Component = pi;
j.Fragment = Sy;
j.Profiler = Ty;
j.PureComponent = ad;
j.StrictMode = wy;
j.Suspense = xy;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
j.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
	var r = Om({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((s = t.ref), (o = ud.current)),
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
	return { $$typeof: Ls, type: e.type, key: i, ref: s, props: r, _owner: o };
};
j.createContext = function (e) {
	return (
		(e = {
			$$typeof: Ry,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: by, _context: e }),
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
	return { $$typeof: ky, render: e };
};
j.isValidElement = cd;
j.lazy = function (e) {
	return { $$typeof: Ny, _payload: { _status: -1, _result: e }, _init: Ay };
};
j.memo = function (e, t) {
	return { $$typeof: Cy, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
	var t = Do.transition;
	Do.transition = {};
	try {
		e();
	} finally {
		Do.transition = t;
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
Cm.exports = j;
var C = Cm.exports;
const J = vy(C),
	bu = yy({ __proto__: null, default: J }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ly = C,
	My = Symbol.for('react.element'),
	Uy = Symbol.for('react.fragment'),
	By = Object.prototype.hasOwnProperty,
	Fy = Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mm(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null;
	n !== void 0 && (s = '' + n), t.key !== void 0 && (s = '' + t.key), t.ref !== void 0 && (o = t.ref);
	for (r in t) By.call(t, r) && !zy.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return { $$typeof: My, type: e, key: s, ref: o, props: i, _owner: Fy.current };
}
Ha.Fragment = Uy;
Ha.jsx = Mm;
Ha.jsxs = Mm;
xm.exports = Ha;
var dd = xm.exports;
const tr = dd.Fragment,
	v = dd.jsx,
	L = dd.jsxs;
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function os() {
	return (
		(os = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		os.apply(this, arguments)
	);
}
var En;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(En || (En = {}));
const qf = 'popstate';
function $y(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: s, search: o, hash: a } = r.location;
		return Ru(
			'',
			{ pathname: s, search: o, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || 'default'
		);
	}
	function n(r, i) {
		return typeof i == 'string' ? i : Um(i);
	}
	return jy(t, n, null, e);
}
function Ne(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function fd(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Hy() {
	return Math.random().toString(36).substr(2, 8);
}
function Vf(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ru(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		os({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? mi(t) : t, {
			state: n,
			key: (t && t.key) || r || Hy(),
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
function jy(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: s = !1 } = r,
		o = i.history,
		a = En.Pop,
		l = null,
		u = c();
	u == null && ((u = 0), o.replaceState(os({}, o.state, { idx: u }), ''));
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
		let m = Ru(y.location, S, p);
		n && n(m, S), (u = c() + 1);
		let g = Vf(m, u),
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
		let m = Ru(y.location, S, p);
		n && n(m, S), (u = c());
		let g = Vf(m, u),
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
				i.addEventListener(qf, d),
				(l = S),
				() => {
					i.removeEventListener(qf, d), (l = null);
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
var Qf;
(function (e) {
	(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Qf || (Qf = {}));
function Gy(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? mi(t) : t,
		i = zm(r.pathname || '/', n);
	if (i == null) return null;
	let s = Bm(e);
	Yy(s);
	let o = null;
	for (let a = 0; o == null && a < s.length; ++a) o = ev(s[a], rv(i));
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
		let u = nr([r, l.relativePath]),
			c = n.concat(l);
		s.children &&
			s.children.length > 0 &&
			(Ne(
				s.index !== !0,
				'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
			),
			Bm(s.children, t, c, u)),
			!(s.path == null && !s.index) && t.push({ path: u, score: Xy(u, s.index), routesMeta: c });
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
function Yy(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Jy(
					t.routesMeta.map(r => r.childrenIndex),
					n.routesMeta.map(r => r.childrenIndex)
			  )
	);
}
const Wy = /^:\w+$/,
	qy = 3,
	Vy = 2,
	Qy = 1,
	Ky = 10,
	Zy = -2,
	Kf = e => e === '*';
function Xy(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(Kf) && (r += Zy),
		t && (r += Vy),
		n.filter(i => !Kf(i)).reduce((i, s) => i + (Wy.test(s) ? qy : s === '' ? Qy : Ky), r)
	);
}
function Jy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ev(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = '/',
		s = [];
	for (let o = 0; o < n.length; ++o) {
		let a = n[o],
			l = o === n.length - 1,
			u = i === '/' ? t : t.slice(i.length) || '/',
			c = tv({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = a.route;
		s.push({ params: r, pathname: nr([i, c.pathname]), pathnameBase: uv(nr([i, c.pathnameBase])), route: d }),
			c.pathnameBase !== '/' && (i = nr([i, c.pathnameBase]));
	}
	return s;
}
function tv(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = nv(e.path, e.caseSensitive, e.end),
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
			return (u[c] = iv(a[d] || '', c)), u;
		}, {}),
		pathname: s,
		pathnameBase: o,
		pattern: e,
	};
}
function nv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		fd(
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
function rv(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			fd(
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
function iv(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			fd(
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
function sv(e, t) {
	t === void 0 && (t = '/');
	let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? mi(e) : e;
	return { pathname: n ? (n.startsWith('/') ? n : ov(n, t)) : t, search: cv(r), hash: dv(i) };
}
function ov(e, t) {
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
function av(e) {
	return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function lv(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == 'string'
		? (i = mi(e))
		: ((i = os({}, e)),
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
	let l = sv(i, a),
		u = o && o !== '/' && o.endsWith('/'),
		c = (s || o === '.') && n.endsWith('/');
	return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const nr = e => e.join('/').replace(/\/\/+/g, '/'),
	uv = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	cv = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	dv = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function fv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const $m = ['post', 'put', 'patch', 'delete'];
new Set($m);
const hv = ['get', ...$m];
new Set(hv);
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const mv = typeof Object.is == 'function' ? Object.is : pv,
	{ useState: _v, useEffect: gv, useLayoutEffect: yv, useDebugValue: vv } = bu;
function Ev(e, t, n) {
	const r = t(),
		[{ inst: i }, s] = _v({ inst: { value: r, getSnapshot: t } });
	return (
		yv(() => {
			(i.value = r), (i.getSnapshot = t), Ml(i) && s({ inst: i });
		}, [e, r, t]),
		gv(
			() => (
				Ml(i) && s({ inst: i }),
				e(() => {
					Ml(i) && s({ inst: i });
				})
			),
			[e]
		),
		vv(r),
		r
	);
}
function Ml(e) {
	const t = e.getSnapshot,
		n = e.value;
	try {
		const r = t();
		return !mv(n, r);
	} catch {
		return !0;
	}
}
function Sv(e, t, n) {
	return t();
}
const wv = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
	Tv = !wv,
	bv = Tv ? Sv : Ev;
'useSyncExternalStore' in bu && (e => e.useSyncExternalStore)(bu);
const Hm = C.createContext(null),
	jm = C.createContext(null),
	hd = C.createContext(null),
	ja = C.createContext(null),
	_i = C.createContext({ outlet: null, matches: [] }),
	Gm = C.createContext(null);
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
	return C.useContext(ja) != null;
}
function Ym() {
	return Ga() || Ne(!1), C.useContext(ja).location;
}
function Rv() {
	Ga() || Ne(!1);
	let { basename: e, navigator: t } = C.useContext(hd),
		{ matches: n } = C.useContext(_i),
		{ pathname: r } = Ym(),
		i = JSON.stringify(av(n).map(a => a.pathnameBase)),
		s = C.useRef(!1);
	return (
		C.useEffect(() => {
			s.current = !0;
		}),
		C.useCallback(
			function (a, l) {
				if ((l === void 0 && (l = {}), !s.current)) return;
				if (typeof a == 'number') {
					t.go(a);
					return;
				}
				let u = lv(a, JSON.parse(i), r, l.relative === 'path');
				e !== '/' && (u.pathname = u.pathname === '/' ? e : nr([e, u.pathname])),
					(l.replace ? t.replace : t.push)(u, l.state, l);
			},
			[e, t, i, r]
		)
	);
}
function Wm() {
	let { matches: e } = C.useContext(_i),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function kv(e, t) {
	Ga() || Ne(!1);
	let { navigator: n } = C.useContext(hd),
		r = C.useContext(jm),
		{ matches: i } = C.useContext(_i),
		s = i[i.length - 1],
		o = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : '/';
	s && s.route;
	let l = Ym(),
		u;
	if (t) {
		var c;
		let y = typeof t == 'string' ? mi(t) : t;
		a === '/' || ((c = y.pathname) != null && c.startsWith(a)) || Ne(!1), (u = y);
	} else u = l;
	let d = u.pathname || '/',
		h = a === '/' ? d : d.slice(a.length) || '/',
		f = Gy(e, { pathname: h }),
		_ = Ov(
			f &&
				f.map(y =>
					Object.assign({}, y, {
						params: Object.assign({}, o, y.params),
						pathname: nr([a, n.encodeLocation ? n.encodeLocation(y.pathname).pathname : y.pathname]),
						pathnameBase:
							y.pathnameBase === '/'
								? a
								: nr([a, n.encodeLocation ? n.encodeLocation(y.pathnameBase).pathname : y.pathnameBase]),
					})
				),
			i,
			r || void 0
		);
	return t && _
		? C.createElement(
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
function xv() {
	let e = Pv(),
		t = fv(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		s = null;
	return C.createElement(
		C.Fragment,
		null,
		C.createElement('h2', null, 'Unexpected Application Error!'),
		C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? C.createElement('pre', { style: i }, n) : null,
		s
	);
}
class Cv extends C.Component {
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
			? C.createElement(
					_i.Provider,
					{ value: this.props.routeContext },
					C.createElement(Gm.Provider, { value: this.state.error, children: this.props.component })
			  )
			: this.props.children;
	}
}
function Nv(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = C.useContext(Hm);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		C.createElement(_i.Provider, { value: t }, r)
	);
}
function Ov(e, t, n) {
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
				? (u = C.createElement(o.route.ErrorBoundary, null))
				: o.route.errorElement
				? (u = o.route.errorElement)
				: (u = C.createElement(xv, null)));
		let c = t.concat(r.slice(0, a + 1)),
			d = () => {
				let h = s;
				return (
					l
						? (h = u)
						: o.route.Component
						? (h = C.createElement(o.route.Component, null))
						: o.route.element && (h = o.route.element),
					C.createElement(Nv, { match: o, routeContext: { outlet: s, matches: c }, children: h })
				);
			};
		return n && (o.route.ErrorBoundary || o.route.errorElement || a === 0)
			? C.createElement(Cv, {
					location: n.location,
					component: u,
					error: l,
					children: d(),
					routeContext: { outlet: null, matches: c },
			  })
			: d();
	}, null);
}
var Zf;
(function (e) {
	(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator');
})(Zf || (Zf = {}));
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
function Iv(e) {
	let t = C.useContext(jm);
	return t || Ne(!1), t;
}
function Dv(e) {
	let t = C.useContext(_i);
	return t || Ne(!1), t;
}
function Av(e) {
	let t = Dv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Ne(!1), n.route.id;
}
function Pv() {
	var e;
	let t = C.useContext(Gm),
		n = Iv(ta.UseRouteError),
		r = Av(ta.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ao(e) {
	Ne(!1);
}
function Lv(e) {
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
		l = C.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
	typeof r == 'string' && (r = mi(r));
	let { pathname: u = '/', search: c = '', hash: d = '', state: h = null, key: f = 'default' } = r,
		_ = C.useMemo(() => {
			let y = zm(u, a);
			return y == null ? null : { location: { pathname: y, search: c, hash: d, state: h, key: f }, navigationType: i };
		}, [a, u, c, d, h, f, i]);
	return _ == null
		? null
		: C.createElement(hd.Provider, { value: l }, C.createElement(ja.Provider, { children: n, value: _ }));
}
function Mv(e) {
	let { children: t, location: n } = e,
		r = C.useContext(Hm),
		i = r && !t ? r.router.routes : xu(t);
	return kv(i, n);
}
var Xf;
(function (e) {
	(e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(Xf || (Xf = {}));
new Promise(() => {});
function xu(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		C.Children.forEach(e, (r, i) => {
			if (!C.isValidElement(r)) return;
			if (r.type === C.Fragment) {
				n.push.apply(n, xu(r.props.children, t));
				return;
			}
			r.type !== Ao && Ne(!1), !r.props.index || !r.props.children || Ne(!1);
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
			r.props.children && (o.children = xu(r.props.children, s)), n.push(o);
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
 */ function Uv(e) {
	let { basename: t, children: n, window: r } = e,
		i = C.useRef();
	i.current == null && (i.current = $y({ window: r, v5Compat: !0 }));
	let s = i.current,
		[o, a] = C.useState({ action: s.action, location: s.location });
	return (
		C.useLayoutEffect(() => s.listen(a), [s]),
		C.createElement(Lv, { basename: t, children: n, location: o.location, navigationType: o.action, navigator: s })
	);
}
var Jf;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(Jf || (Jf = {}));
var eh;
(function (e) {
	(e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(eh || (eh = {}));
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
const as = typeof window > 'u' || 'Deno' in window;
function pt() {}
function Bv(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function Cu(e) {
	return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function qm(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function br(e, t, n) {
	return Ms(e) ? (typeof t == 'function' ? { ...n, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
}
function Fv(e, t, n) {
	return Ms(e)
		? typeof t == 'function'
			? { ...n, mutationKey: e, mutationFn: t }
			: { ...t, mutationKey: e }
		: typeof e == 'function'
		? { ...t, mutationFn: e }
		: { ...e };
}
function hn(e, t, n) {
	return Ms(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function th(e, t) {
	const { type: n = 'all', exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e;
	if (Ms(o)) {
		if (r) {
			if (t.queryHash !== pd(o, t.options)) return !1;
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
function nh(e, t) {
	const { exact: n, fetching: r, predicate: i, mutationKey: s } = e;
	if (Ms(s)) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Kn(t.options.mutationKey) !== Kn(s)) return !1;
		} else if (!na(t.options.mutationKey, s)) return !1;
	}
	return !((typeof r == 'boolean' && (t.state.status === 'loading') !== r) || (i && !i(t)));
}
function pd(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || Kn)(e);
}
function Kn(e) {
	return JSON.stringify(e, (t, n) =>
		Ou(n)
			? Object.keys(n)
					.sort()
					.reduce((r, i) => ((r[i] = n[i]), r), {})
			: n
	);
}
function na(e, t) {
	return Vm(e, t);
}
function Vm(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
		? !1
		: e && t && typeof e == 'object' && typeof t == 'object'
		? !Object.keys(t).some(n => !Vm(e[n], t[n]))
		: !1;
}
function Qm(e, t) {
	if (e === t) return e;
	const n = rh(e) && rh(t);
	if (n || (Ou(e) && Ou(t))) {
		const r = n ? e.length : Object.keys(e).length,
			i = n ? t : Object.keys(t),
			s = i.length,
			o = n ? [] : {};
		let a = 0;
		for (let l = 0; l < s; l++) {
			const u = n ? l : i[l];
			(o[u] = Qm(e[u], t[u])), o[u] === e[u] && a++;
		}
		return r === s && a === r ? e : o;
	}
	return t;
}
function Nu(e, t) {
	if ((e && !t) || (t && !e)) return !1;
	for (const n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function rh(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ou(e) {
	if (!ih(e)) return !1;
	const t = e.constructor;
	if (typeof t > 'u') return !0;
	const n = t.prototype;
	return !(!ih(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function ih(e) {
	return Object.prototype.toString.call(e) === '[object Object]';
}
function Ms(e) {
	return Array.isArray(e);
}
function Km(e) {
	return new Promise(t => {
		setTimeout(t, e);
	});
}
function sh(e) {
	Km(0).then(e);
}
function zv() {
	if (typeof AbortController == 'function') return new AbortController();
}
function Iu(e, t, n) {
	return n.isDataEqual != null && n.isDataEqual(e, t)
		? e
		: typeof n.structuralSharing == 'function'
		? n.structuralSharing(e, t)
		: n.structuralSharing !== !1
		? Qm(e, t)
		: t;
}
class $v extends gi {
	constructor() {
		super(),
			(this.setup = t => {
				if (!as && window.addEventListener) {
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
const ra = new $v();
class Hv extends gi {
	constructor() {
		super(),
			(this.setup = t => {
				if (!as && window.addEventListener) {
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
const ia = new Hv();
function jv(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function Ya(e) {
	return (e ?? 'online') === 'online' ? ia.isOnline() : !0;
}
class Zm {
	constructor(t) {
		(this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
	}
}
function Po(e) {
	return e instanceof Zm;
}
function Xm(e) {
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
			r || (f(new Zm(S)), e.abort == null || e.abort());
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
						T = (g = e.retryDelay) != null ? g : jv,
						R = typeof T == 'function' ? T(n, p) : T,
						b = E === !0 || (typeof E == 'number' && n < E) || (typeof E == 'function' && E(n, p));
					if (t || !b) {
						f(p);
						return;
					}
					n++,
						e.onFail == null || e.onFail(n, p),
						Km(R)
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
const md = console;
function Gv() {
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
				: sh(() => {
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
					sh(() => {
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
const ge = Gv();
class Jm {
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(),
			Cu(this.cacheTime) &&
				(this.gcTimeout = setTimeout(() => {
					this.optionalRemove();
				}, this.cacheTime));
	}
	updateCacheTime(t) {
		this.cacheTime = Math.max(this.cacheTime || 0, t ?? (as ? 1 / 0 : 5 * 60 * 1e3));
	}
	clearGcTimeout() {
		this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
	}
}
class Yv extends Jm {
	constructor(t) {
		super(),
			(this.abortSignalConsumed = !1),
			(this.defaultOptions = t.defaultOptions),
			this.setOptions(t.options),
			(this.observers = []),
			(this.cache = t.cache),
			(this.logger = t.logger || md),
			(this.queryKey = t.queryKey),
			(this.queryHash = t.queryHash),
			(this.initialState = t.state || Wv(this.options)),
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
		const r = Iu(this.state.data, t, this.options);
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
		return this.state.isInvalidated || !this.state.dataUpdatedAt || !qm(this.state.dataUpdatedAt, t);
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
				(this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
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
		const o = zv(),
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
			(this.retryer = Xm({
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
function Wv(e) {
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
class e_ extends gi {
	constructor(t) {
		super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
	}
	build(t, n, r) {
		var i;
		const s = n.queryKey,
			o = (i = n.queryHash) != null ? i : pd(s, n);
		let a = this.get(o);
		return (
			a ||
				((a = new Yv({
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
		return typeof r.exact > 'u' && (r.exact = !0), this.queries.find(i => th(r, i));
	}
	findAll(t, n) {
		const [r] = hn(t, n);
		return Object.keys(r).length > 0 ? this.queries.filter(i => th(r, i)) : this.queries;
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
class qv extends Jm {
	constructor(t) {
		super(),
			(this.defaultOptions = t.defaultOptions),
			(this.mutationId = t.mutationId),
			(this.mutationCache = t.mutationCache),
			(this.logger = t.logger || md),
			(this.observers = []),
			(this.state = t.state || t_()),
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
				var b;
				return (
					(this.retryer = Xm({
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
						retry: (b = this.options.retry) != null ? b : 0,
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
			const b = await t();
			return (
				await ((r = (i = this.mutationCache.config).onSuccess) == null
					? void 0
					: r.call(i, b, this.state.variables, this.state.context, this)),
				await ((s = (o = this.options).onSuccess) == null
					? void 0
					: s.call(o, b, this.state.variables, this.state.context)),
				await ((a = (l = this.mutationCache.config).onSettled) == null
					? void 0
					: a.call(l, b, null, this.state.variables, this.state.context, this)),
				await ((u = (c = this.options).onSettled) == null
					? void 0
					: u.call(c, b, null, this.state.variables, this.state.context)),
				this.dispatch({ type: 'success', data: b }),
				b
			);
		} catch (b) {
			try {
				var y, S, p, m, g, E, T, R;
				throw (
					(await ((y = (S = this.mutationCache.config).onError) == null
						? void 0
						: y.call(S, b, this.state.variables, this.state.context, this)),
					await ((p = (m = this.options).onError) == null
						? void 0
						: p.call(m, b, this.state.variables, this.state.context)),
					await ((g = (E = this.mutationCache.config).onSettled) == null
						? void 0
						: g.call(E, void 0, b, this.state.variables, this.state.context, this)),
					await ((T = (R = this.options).onSettled) == null
						? void 0
						: T.call(R, void 0, b, this.state.variables, this.state.context)),
					b)
				);
			} finally {
				this.dispatch({ type: 'error', error: b });
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
function t_() {
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
class Vv extends gi {
	constructor(t) {
		super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
	}
	build(t, n, r) {
		const i = new qv({
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
		return typeof t.exact > 'u' && (t.exact = !0), this.mutations.find(n => nh(t, n));
	}
	findAll(t) {
		return this.mutations.filter(n => nh(t, n));
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
function Du() {
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
				const S = R => {
						Object.defineProperty(R, 'signal', {
							enumerable: !0,
							get: () => {
								var b;
								if ((b = e.signal) != null && b.aborted) y = !0;
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
					m = (R, b, w, A) => ((_ = A ? [b, ..._] : [..._, b]), A ? [w, ...R] : [...R, w]),
					g = (R, b, w, A) => {
						if (y) return Promise.reject('Cancelled');
						if (typeof w > 'u' && !b && R.length) return Promise.resolve(R);
						const O = { queryKey: e.queryKey, pageParam: w, meta: e.options.meta };
						S(O);
						const B = p(O);
						return Promise.resolve(B).then(I => m(R, w, I, A));
					};
				let E;
				if (!h.length) E = g([]);
				else if (c) {
					const R = typeof u < 'u',
						b = R ? u : Au(e.options, h);
					E = g(h, R, b);
				} else if (d) {
					const R = typeof u < 'u',
						b = R ? u : n_(e.options, h);
					E = g(h, R, b, !0);
				} else {
					_ = [];
					const R = typeof e.options.getNextPageParam > 'u';
					E = (a && h[0] ? a(h[0], 0, h) : !0) ? g([], R, f[0]) : Promise.resolve(m([], f[0], h[0]));
					for (let w = 1; w < h.length; w++)
						E = E.then(A => {
							if (a && h[w] ? a(h[w], w, h) : !0) {
								const B = R ? f[w] : Au(e.options, A);
								return g(A, R, B);
							}
							return Promise.resolve(m(A, f[w], h[w]));
						});
				}
				return E.then(R => ({ pages: R, pageParams: _ }));
			};
		},
	};
}
function Au(e, t) {
	return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function n_(e, t) {
	return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
function Qv(e, t) {
	if (e.getNextPageParam && Array.isArray(t)) {
		const n = Au(e, t);
		return typeof n < 'u' && n !== null && n !== !1;
	}
}
function Kv(e, t) {
	if (e.getPreviousPageParam && Array.isArray(t)) {
		const n = n_(e, t);
		return typeof n < 'u' && n !== null && n !== !1;
	}
}
class Zv {
	constructor(t = {}) {
		(this.queryCache = t.queryCache || new e_()),
			(this.mutationCache = t.mutationCache || new Vv()),
			(this.logger = t.logger || md),
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
		const i = br(t, n, r),
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
			o = Bv(n, s);
		if (typeof o > 'u') return;
		const a = br(t),
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
		const i = br(t, n, r),
			s = this.defaultQueryOptions(i);
		typeof s.retry > 'u' && (s.retry = !1);
		const o = this.queryCache.build(this, s);
		return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data);
	}
	prefetchQuery(t, n, r) {
		return this.fetchQuery(t, n, r).then(pt).catch(pt);
	}
	fetchInfiniteQuery(t, n, r) {
		const i = br(t, n, r);
		return (i.behavior = Du()), this.fetchQuery(i);
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
		const r = this.queryDefaults.find(i => Kn(t) === Kn(i.queryKey));
		r ? (r.defaultOptions = n) : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
	}
	getQueryDefaults(t) {
		if (!t) return;
		const n = this.queryDefaults.find(r => na(t, r.queryKey));
		return n == null ? void 0 : n.defaultOptions;
	}
	setMutationDefaults(t, n) {
		const r = this.mutationDefaults.find(i => Kn(t) === Kn(i.mutationKey));
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
			!n.queryHash && n.queryKey && (n.queryHash = pd(n.queryKey, n)),
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
class r_ extends gi {
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
			oh(this.currentQuery, this.options) && this.executeFetch(),
			this.updateTimers());
	}
	onUnsubscribe() {
		this.listeners.length || this.destroy();
	}
	shouldFetchOnReconnect() {
		return Pu(this.currentQuery, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return Pu(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
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
			Nu(r, this.options) ||
				this.client
					.getQueryCache()
					.notify({ type: 'observerOptionsUpdated', query: this.currentQuery, observer: this }),
			typeof this.options.enabled < 'u' && typeof this.options.enabled != 'boolean')
		)
			throw new Error('Expected enabled to be a boolean');
		this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
		const s = this.hasListeners();
		s && ah(this.currentQuery, i, this.options, r) && this.executeFetch(),
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
				Object.defineProperty(n, r, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(r), t[r]) });
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
		if ((this.clearStaleTimeout(), as || this.currentResult.isStale || !Cu(this.options.staleTime))) return;
		const n = qm(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
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
			!(as || this.options.enabled === !1 || !Cu(this.currentRefetchInterval) || this.currentRefetchInterval === 0) &&
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
				A = !w && oh(t, n),
				O = w && ah(t, r, n, i);
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
						(g = Iu(s == null ? void 0 : s.data, g, n)),
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
			typeof w < 'u' && ((S = 'success'), (g = Iu(s == null ? void 0 : s.data, w, n)), (m = !0));
		}
		this.selectError && ((f = this.selectError), (g = this.selectResult), (_ = Date.now()), (S = 'error'));
		const E = y === 'fetching',
			T = S === 'loading',
			R = S === 'error';
		return {
			status: S,
			fetchStatus: y,
			isLoading: T,
			isSuccess: S === 'success',
			isError: R,
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
			isLoadingError: R && d.dataUpdatedAt === 0,
			isPaused: y === 'paused',
			isPlaceholderData: m,
			isPreviousData: p,
			isRefetchError: R && d.dataUpdatedAt !== 0,
			isStale: _d(t, n),
			refetch: this.refetch,
			remove: this.remove,
		};
	}
	updateResult(t) {
		const n = this.currentResult,
			r = this.createResult(this.currentQuery, this.options);
		if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), Nu(r, n)))
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
function Xv(e, t) {
	return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === 'error' && t.retryOnMount === !1);
}
function oh(e, t) {
	return Xv(e, t) || (e.state.dataUpdatedAt > 0 && Pu(e, t, t.refetchOnMount));
}
function Pu(e, t, n) {
	if (t.enabled !== !1) {
		const r = typeof n == 'function' ? n(e) : n;
		return r === 'always' || (r !== !1 && _d(e, t));
	}
	return !1;
}
function ah(e, t, n, r) {
	return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== 'error') && _d(e, n);
}
function _d(e, t) {
	return e.isStaleByTime(t.staleTime);
}
class Jv extends r_ {
	constructor(t, n) {
		super(t, n);
	}
	bindMethods() {
		super.bindMethods(),
			(this.fetchNextPage = this.fetchNextPage.bind(this)),
			(this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
	}
	setOptions(t, n) {
		super.setOptions({ ...t, behavior: Du() }, n);
	}
	getOptimisticResult(t) {
		return (t.behavior = Du()), super.getOptimisticResult(t);
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
			hasNextPage: Qv(n, (a = u.data) == null ? void 0 : a.pages),
			hasPreviousPage: Kv(n, (l = u.data) == null ? void 0 : l.pages),
			isFetchingNextPage: f,
			isFetchingPreviousPage: _,
			isRefetching: h && !f && !_,
		};
	}
}
let eE = class extends gi {
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
			Nu(r, this.options) ||
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
		const t = this.currentMutation ? this.currentMutation.state : t_(),
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
var i_ = { exports: {} },
	dt = {},
	s_ = { exports: {} },
	o_ = {};
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
			var ie = (F - 1) >>> 1,
				ye = D[ie];
			if (0 < i(ye, M)) (D[ie] = M), (D[F] = ye), (F = ie);
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
			e: for (var ie = 0, ye = D.length, Yn = ye >>> 1; ie < Yn; ) {
				var it = 2 * (ie + 1) - 1,
					vr = D[it],
					bt = it + 1,
					z = D[bt];
				if (0 > i(vr, F))
					bt < ye && 0 > i(z, vr) ? ((D[ie] = z), (D[bt] = F), (ie = bt)) : ((D[ie] = vr), (D[it] = F), (ie = it));
				else if (bt < ye && 0 > i(z, F)) (D[ie] = z), (D[bt] = F), (ie = bt);
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
				var ie = d.callback;
				if (typeof ie == 'function') {
					(d.callback = null), (h = d.priorityLevel);
					var ye = ie(d.expirationTime <= M);
					(M = e.unstable_now()), typeof ye == 'function' ? (d.callback = ye) : d === n(l) && r(l), g(M);
				} else r(l);
				d = n(l);
			}
			if (d !== null) var Yn = !0;
			else {
				var it = n(u);
				it !== null && ae(E, it.startTime - M), (Yn = !1);
			}
			return Yn;
		} finally {
			(d = null), (h = F), (f = !1);
		}
	}
	var R = !1,
		b = null,
		w = -1,
		A = 5,
		O = -1;
	function B() {
		return !(e.unstable_now() - O < A);
	}
	function H() {
		if (b !== null) {
			var D = e.unstable_now();
			O = D;
			var M = !0;
			try {
				M = b(!0, D);
			} finally {
				M ? I() : ((R = !1), (b = null));
			}
		} else R = !1;
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
		(b = D), R || ((R = !0), I());
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
			var ie = e.unstable_now();
			switch (
				(typeof F == 'object' && F !== null
					? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? ie + F : ie))
					: (F = ie),
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
				F > ie
					? ((D.sortIndex = F),
					  t(u, D),
					  n(l) === null && D === n(u) && (y ? (p(w), (w = -1)) : (y = !0), ae(E, F - ie)))
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
})(o_);
s_.exports = o_;
var tE = s_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a_ = C,
	ct = tE;
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
var l_ = new Set(),
	ls = {};
function gr(e, t) {
	Kr(e, t), Kr(e + 'Capture', t);
}
function Kr(e, t) {
	for (ls[e] = t, e = 0; e < t.length; e++) l_.add(t[e]);
}
var rn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
	Lu = Object.prototype.hasOwnProperty,
	nE =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	lh = {},
	uh = {};
function rE(e) {
	return Lu.call(uh, e) ? !0 : Lu.call(lh, e) ? !1 : nE.test(e) ? (uh[e] = !0) : ((lh[e] = !0), !1);
}
function iE(e, t, n, r) {
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
function sE(e, t, n, r) {
	if (t === null || typeof t > 'u' || iE(e, t, n, r)) return !0;
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
var gd = /[\-:]([a-z])/g;
function yd(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(gd, yd);
		Be[t] = new Qe(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
	var t = e.replace(gd, yd);
	Be[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(gd, yd);
	Be[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Be[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Qe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Be[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vd(e, t, n, r) {
	var i = Be.hasOwnProperty(t) ? Be[t] : null;
	(i !== null
		? i.type !== 0
		: r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
		(sE(t, n, i, r) && (n = null),
		r || i === null
			? rE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var cn = a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Xs = Symbol.for('react.element'),
	Rr = Symbol.for('react.portal'),
	kr = Symbol.for('react.fragment'),
	Ed = Symbol.for('react.strict_mode'),
	Mu = Symbol.for('react.profiler'),
	u_ = Symbol.for('react.provider'),
	c_ = Symbol.for('react.context'),
	Sd = Symbol.for('react.forward_ref'),
	Uu = Symbol.for('react.suspense'),
	Bu = Symbol.for('react.suspense_list'),
	wd = Symbol.for('react.memo'),
	pn = Symbol.for('react.lazy'),
	d_ = Symbol.for('react.offscreen'),
	ch = Symbol.iterator;
function Ri(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (ch && e[ch]) || e['@@iterator']), typeof e == 'function' ? e : null);
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
function oE(e) {
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
function Fu(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case kr:
			return 'Fragment';
		case Rr:
			return 'Portal';
		case Mu:
			return 'Profiler';
		case Ed:
			return 'StrictMode';
		case Uu:
			return 'Suspense';
		case Bu:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case c_:
				return (e.displayName || 'Context') + '.Consumer';
			case u_:
				return (e._context.displayName || 'Context') + '.Provider';
			case Sd:
				var t = e.render;
				return (
					(e = e.displayName),
					e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case wd:
				return (t = e.displayName || null), t !== null ? t : Fu(e.type) || 'Memo';
			case pn:
				(t = e._payload), (e = e._init);
				try {
					return Fu(e(t));
				} catch {}
		}
	return null;
}
function aE(e) {
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
			return Fu(t);
		case 8:
			return t === Ed ? 'StrictMode' : 'Mode';
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
function f_(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function lE(e) {
	var t = f_(e) ? 'checked' : 'value',
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
function Js(e) {
	e._valueTracker || (e._valueTracker = lE(e));
}
function h_(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return e && (r = f_(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function sa(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function zu(e, t) {
	var n = t.checked;
	return pe({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function dh(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Mn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
		});
}
function p_(e, t) {
	(t = t.checked), t != null && vd(e, 'checked', t, !1);
}
function $u(e, t) {
	p_(e, t);
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
	t.hasOwnProperty('value') ? Hu(e, t.type, n) : t.hasOwnProperty('defaultValue') && Hu(e, t.type, Mn(t.defaultValue)),
		t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fh(e, t, n) {
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
function Hu(e, t, n) {
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
function ju(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
	return pe({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function hh(e, t) {
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
function m_(e, t) {
	var n = Mn(t.value),
		r = Mn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function ph(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function __(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Gu(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? __(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var eo,
	g_ = (function (e) {
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
				eo = eo || document.createElement('div'),
					eo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = eo.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function us(e, t) {
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
	uE = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Hi).forEach(function (e) {
	uE.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hi[t] = Hi[e]);
	});
});
function y_(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Hi.hasOwnProperty(e) && Hi[e])
		? ('' + t).trim()
		: t + 'px';
}
function v_(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = y_(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var cE = pe(
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
function Yu(e, t) {
	if (t) {
		if (cE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(N(60));
			if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(N(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(N(62));
	}
}
function Wu(e, t) {
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
var qu = null;
function Td(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Vu = null,
	zr = null,
	$r = null;
function mh(e) {
	if ((e = Fs(e))) {
		if (typeof Vu != 'function') throw Error(N(280));
		var t = e.stateNode;
		t && ((t = Ka(t)), Vu(e.stateNode, e.type, t));
	}
}
function E_(e) {
	zr ? ($r ? $r.push(e) : ($r = [e])) : (zr = e);
}
function S_() {
	if (zr) {
		var e = zr,
			t = $r;
		if ((($r = zr = null), mh(e), t)) for (e = 0; e < t.length; e++) mh(t[e]);
	}
}
function w_(e, t) {
	return e(t);
}
function T_() {}
var zl = !1;
function b_(e, t, n) {
	if (zl) return e(t, n);
	zl = !0;
	try {
		return w_(e, t, n);
	} finally {
		(zl = !1), (zr !== null || $r !== null) && (T_(), S_());
	}
}
function cs(e, t) {
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
var Qu = !1;
if (rn)
	try {
		var ki = {};
		Object.defineProperty(ki, 'passive', {
			get: function () {
				Qu = !0;
			},
		}),
			window.addEventListener('test', ki, ki),
			window.removeEventListener('test', ki, ki);
	} catch {
		Qu = !1;
	}
function dE(e, t, n, r, i, s, o, a, l) {
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
	Ku = null,
	fE = {
		onError: function (e) {
			(ji = !0), (oa = e);
		},
	};
function hE(e, t, n, r, i, s, o, a, l) {
	(ji = !1), (oa = null), dE.apply(fE, arguments);
}
function pE(e, t, n, r, i, s, o, a, l) {
	if ((hE.apply(this, arguments), ji)) {
		if (ji) {
			var u = oa;
			(ji = !1), (oa = null);
		} else throw Error(N(198));
		aa || ((aa = !0), (Ku = u));
	}
}
function yr(e) {
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
function R_(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
	}
	return null;
}
function _h(e) {
	if (yr(e) !== e) throw Error(N(188));
}
function mE(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = yr(e)), t === null)) throw Error(N(188));
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
				if (s === n) return _h(i), e;
				if (s === r) return _h(i), t;
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
function k_(e) {
	return (e = mE(e)), e !== null ? x_(e) : null;
}
function x_(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = x_(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var C_ = ct.unstable_scheduleCallback,
	gh = ct.unstable_cancelCallback,
	_E = ct.unstable_shouldYield,
	gE = ct.unstable_requestPaint,
	ve = ct.unstable_now,
	yE = ct.unstable_getCurrentPriorityLevel,
	bd = ct.unstable_ImmediatePriority,
	N_ = ct.unstable_UserBlockingPriority,
	la = ct.unstable_NormalPriority,
	vE = ct.unstable_LowPriority,
	O_ = ct.unstable_IdlePriority,
	Wa = null,
	jt = null;
function EE(e) {
	if (jt && typeof jt.onCommitFiberRoot == 'function')
		try {
			jt.onCommitFiberRoot(Wa, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Dt = Math.clz32 ? Math.clz32 : TE,
	SE = Math.log,
	wE = Math.LN2;
function TE(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((SE(e) / wE) | 0)) | 0;
}
var to = 64,
	no = 4194304;
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
function bE(e, t) {
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
function RE(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
		var o = 31 - Dt(s),
			a = 1 << o,
			l = i[o];
		l === -1 ? (!(a & n) || a & r) && (i[o] = bE(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a);
	}
}
function Zu(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function I_() {
	var e = to;
	return (to <<= 1), !(to & 4194240) && (to = 64), e;
}
function $l(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Us(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Dt(t)),
		(e[t] = n);
}
function kE(e, t) {
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
function Rd(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Dt(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var Z = 0;
function D_(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var A_,
	kd,
	P_,
	L_,
	M_,
	Xu = !1,
	ro = [],
	xn = null,
	Cn = null,
	Nn = null,
	ds = new Map(),
	fs = new Map(),
	gn = [],
	xE =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function yh(e, t) {
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
			ds.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			fs.delete(t.pointerId);
	}
}
function xi(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s
		? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
		  t !== null && ((t = Fs(t)), t !== null && kd(t)),
		  e)
		: ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function CE(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (xn = xi(xn, e, t, n, r, i)), !0;
		case 'dragenter':
			return (Cn = xi(Cn, e, t, n, r, i)), !0;
		case 'mouseover':
			return (Nn = xi(Nn, e, t, n, r, i)), !0;
		case 'pointerover':
			var s = i.pointerId;
			return ds.set(s, xi(ds.get(s) || null, e, t, n, r, i)), !0;
		case 'gotpointercapture':
			return (s = i.pointerId), fs.set(s, xi(fs.get(s) || null, e, t, n, r, i)), !0;
	}
	return !1;
}
function U_(e) {
	var t = Zn(e.target);
	if (t !== null) {
		var n = yr(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = R_(n)), t !== null)) {
					(e.blockedOn = t),
						M_(e.priority, function () {
							P_(n);
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
		var n = Ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(qu = r), n.target.dispatchEvent(r), (qu = null);
		} else return (t = Fs(n)), t !== null && kd(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function vh(e, t, n) {
	Lo(e) && n.delete(t);
}
function NE() {
	(Xu = !1),
		xn !== null && Lo(xn) && (xn = null),
		Cn !== null && Lo(Cn) && (Cn = null),
		Nn !== null && Lo(Nn) && (Nn = null),
		ds.forEach(vh),
		fs.forEach(vh);
}
function Ci(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null), Xu || ((Xu = !0), ct.unstable_scheduleCallback(ct.unstable_NormalPriority, NE)));
}
function hs(e) {
	function t(i) {
		return Ci(i, e);
	}
	if (0 < ro.length) {
		Ci(ro[0], e);
		for (var n = 1; n < ro.length; n++) {
			var r = ro[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		xn !== null && Ci(xn, e), Cn !== null && Ci(Cn, e), Nn !== null && Ci(Nn, e), ds.forEach(t), fs.forEach(t), n = 0;
		n < gn.length;
		n++
	)
		(r = gn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < gn.length && ((n = gn[0]), n.blockedOn === null); ) U_(n), n.blockedOn === null && gn.shift();
}
var Hr = cn.ReactCurrentBatchConfig,
	ca = !0;
function OE(e, t, n, r) {
	var i = Z,
		s = Hr.transition;
	Hr.transition = null;
	try {
		(Z = 1), xd(e, t, n, r);
	} finally {
		(Z = i), (Hr.transition = s);
	}
}
function IE(e, t, n, r) {
	var i = Z,
		s = Hr.transition;
	Hr.transition = null;
	try {
		(Z = 4), xd(e, t, n, r);
	} finally {
		(Z = i), (Hr.transition = s);
	}
}
function xd(e, t, n, r) {
	if (ca) {
		var i = Ju(e, t, n, r);
		if (i === null) Zl(e, t, r, da, n), yh(e, r);
		else if (CE(i, e, t, n, r)) r.stopPropagation();
		else if ((yh(e, r), t & 4 && -1 < xE.indexOf(e))) {
			for (; i !== null; ) {
				var s = Fs(i);
				if ((s !== null && A_(s), (s = Ju(e, t, n, r)), s === null && Zl(e, t, r, da, n), s === i)) break;
				i = s;
			}
			i !== null && r.stopPropagation();
		} else Zl(e, t, r, null, n);
	}
}
var da = null;
function Ju(e, t, n, r) {
	if (((da = null), (e = Td(r)), (e = Zn(e)), e !== null))
		if (((t = yr(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = R_(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (da = e), null;
}
function B_(e) {
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
			switch (yE()) {
				case bd:
					return 1;
				case N_:
					return 4;
				case la:
				case vE:
					return 16;
				case O_:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Sn = null,
	Cd = null,
	Mo = null;
function F_() {
	if (Mo) return Mo;
	var e,
		t = Cd,
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
function io() {
	return !0;
}
function Eh() {
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
			(this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? io : Eh),
			(this.isPropagationStopped = Eh),
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
					(this.isDefaultPrevented = io));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = io));
			},
			persist: function () {},
			isPersistent: io,
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
	Nd = ft(yi),
	Bs = pe({}, yi, { view: 0, detail: 0 }),
	DE = ft(Bs),
	Hl,
	jl,
	Ni,
	qa = pe({}, Bs, {
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
		getModifierState: Od,
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
	Sh = ft(qa),
	AE = pe({}, qa, { dataTransfer: 0 }),
	PE = ft(AE),
	LE = pe({}, Bs, { relatedTarget: 0 }),
	Gl = ft(LE),
	ME = pe({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	UE = ft(ME),
	BE = pe({}, yi, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	FE = ft(BE),
	zE = pe({}, yi, { data: 0 }),
	wh = ft(zE),
	$E = {
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
	HE = {
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
	jE = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function GE(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = jE[e]) ? !!t[e] : !1;
}
function Od() {
	return GE;
}
var YE = pe({}, Bs, {
		key: function (e) {
			if (e.key) {
				var t = $E[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Uo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? HE[e.keyCode] || 'Unidentified'
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
		getModifierState: Od,
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
	WE = ft(YE),
	qE = pe({}, qa, {
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
	Th = ft(qE),
	VE = pe({}, Bs, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Od,
	}),
	QE = ft(VE),
	KE = pe({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	ZE = ft(KE),
	XE = pe({}, qa, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	JE = ft(XE),
	eS = [9, 13, 27, 32],
	Id = rn && 'CompositionEvent' in window,
	Gi = null;
rn && 'documentMode' in document && (Gi = document.documentMode);
var tS = rn && 'TextEvent' in window && !Gi,
	z_ = rn && (!Id || (Gi && 8 < Gi && 11 >= Gi)),
	bh = String.fromCharCode(32),
	Rh = !1;
function $_(e, t) {
	switch (e) {
		case 'keyup':
			return eS.indexOf(t.keyCode) !== -1;
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
function H_(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var xr = !1;
function nS(e, t) {
	switch (e) {
		case 'compositionend':
			return H_(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Rh = !0), bh);
		case 'textInput':
			return (e = t.data), e === bh && Rh ? null : e;
		default:
			return null;
	}
}
function rS(e, t) {
	if (xr) return e === 'compositionend' || (!Id && $_(e, t)) ? ((e = F_()), (Mo = Cd = Sn = null), (xr = !1), e) : null;
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
			return z_ && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var iS = {
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
function kh(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!iS[e.type] : t === 'textarea';
}
function j_(e, t, n, r) {
	E_(r),
		(t = fa(t, 'onChange')),
		0 < t.length && ((n = new Nd('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Yi = null,
	ps = null;
function sS(e) {
	e0(e, 0);
}
function Va(e) {
	var t = Or(e);
	if (h_(t)) return e;
}
function oS(e, t) {
	if (e === 'change') return t;
}
var G_ = !1;
if (rn) {
	var Yl;
	if (rn) {
		var Wl = 'oninput' in document;
		if (!Wl) {
			var xh = document.createElement('div');
			xh.setAttribute('oninput', 'return;'), (Wl = typeof xh.oninput == 'function');
		}
		Yl = Wl;
	} else Yl = !1;
	G_ = Yl && (!document.documentMode || 9 < document.documentMode);
}
function Ch() {
	Yi && (Yi.detachEvent('onpropertychange', Y_), (ps = Yi = null));
}
function Y_(e) {
	if (e.propertyName === 'value' && Va(ps)) {
		var t = [];
		j_(t, ps, e, Td(e)), b_(sS, t);
	}
}
function aS(e, t, n) {
	e === 'focusin' ? (Ch(), (Yi = t), (ps = n), Yi.attachEvent('onpropertychange', Y_)) : e === 'focusout' && Ch();
}
function lS(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Va(ps);
}
function uS(e, t) {
	if (e === 'click') return Va(t);
}
function cS(e, t) {
	if (e === 'input' || e === 'change') return Va(t);
}
function dS(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lt = typeof Object.is == 'function' ? Object.is : dS;
function ms(e, t) {
	if (Lt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Lu.call(t, i) || !Lt(e[i], t[i])) return !1;
	}
	return !0;
}
function Nh(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Oh(e, t) {
	var n = Nh(e);
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
		n = Nh(n);
	}
}
function W_(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? W_(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function q_() {
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
function Dd(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function fS(e) {
	var t = q_(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && W_(n.ownerDocument.documentElement, n)) {
		if (r !== null && Dd(n)) {
			if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
				e = e.getSelection();
				var i = n.textContent.length,
					s = Math.min(r.start, i);
				(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!e.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = Oh(n, s));
				var o = Oh(n, r);
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
var hS = rn && 'documentMode' in document && 11 >= document.documentMode,
	Cr = null,
	ec = null,
	Wi = null,
	tc = !1;
function Ih(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	tc ||
		Cr == null ||
		Cr !== sa(r) ||
		((r = Cr),
		'selectionStart' in r && Dd(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Wi && ms(Wi, r)) ||
			((Wi = r),
			(r = fa(ec, 'onSelect')),
			0 < r.length &&
				((t = new Nd('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Cr))));
}
function so(e, t) {
	var n = {};
	return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Nr = {
		animationend: so('Animation', 'AnimationEnd'),
		animationiteration: so('Animation', 'AnimationIteration'),
		animationstart: so('Animation', 'AnimationStart'),
		transitionend: so('Transition', 'TransitionEnd'),
	},
	ql = {},
	V_ = {};
rn &&
	((V_ = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation),
	'TransitionEvent' in window || delete Nr.transitionend.transition);
function Qa(e) {
	if (ql[e]) return ql[e];
	if (!Nr[e]) return e;
	var t = Nr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in V_) return (ql[e] = t[n]);
	return e;
}
var Q_ = Qa('animationend'),
	K_ = Qa('animationiteration'),
	Z_ = Qa('animationstart'),
	X_ = Qa('transitionend'),
	J_ = new Map(),
	Dh =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function Hn(e, t) {
	J_.set(e, t), gr(t, [e]);
}
for (var Vl = 0; Vl < Dh.length; Vl++) {
	var Ql = Dh[Vl],
		pS = Ql.toLowerCase(),
		mS = Ql[0].toUpperCase() + Ql.slice(1);
	Hn(pS, 'on' + mS);
}
Hn(Q_, 'onAnimationEnd');
Hn(K_, 'onAnimationIteration');
Hn(Z_, 'onAnimationStart');
Hn('dblclick', 'onDoubleClick');
Hn('focusin', 'onFocus');
Hn('focusout', 'onBlur');
Hn(X_, 'onTransitionEnd');
Kr('onMouseEnter', ['mouseout', 'mouseover']);
Kr('onMouseLeave', ['mouseout', 'mouseover']);
Kr('onPointerEnter', ['pointerout', 'pointerover']);
Kr('onPointerLeave', ['pointerout', 'pointerover']);
gr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
gr('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
gr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
gr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
gr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
gr('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Bi =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	_S = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Bi));
function Ah(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), pE(r, t, void 0, e), (e.currentTarget = null);
}
function e0(e, t) {
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
					Ah(i, a, u), (s = l);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== s && i.isPropagationStopped())
					)
						break e;
					Ah(i, a, u), (s = l);
				}
		}
	}
	if (aa) throw ((e = Ku), (aa = !1), (Ku = null), e);
}
function se(e, t) {
	var n = t[oc];
	n === void 0 && (n = t[oc] = new Set());
	var r = e + '__bubble';
	n.has(r) || (t0(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
	var r = 0;
	t && (r |= 4), t0(n, e, r, t);
}
var oo = '_reactListening' + Math.random().toString(36).slice(2);
function _s(e) {
	if (!e[oo]) {
		(e[oo] = !0),
			l_.forEach(function (n) {
				n !== 'selectionchange' && (_S.has(n) || Kl(n, !1, e), Kl(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[oo] || ((t[oo] = !0), Kl('selectionchange', !1, t));
	}
}
function t0(e, t, n, r) {
	switch (B_(t)) {
		case 1:
			var i = OE;
			break;
		case 4:
			i = IE;
			break;
		default:
			i = xd;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Qu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
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
					if (((o = Zn(a)), o === null)) return;
					if (((l = o.tag), l === 5 || l === 6)) {
						r = s = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	b_(function () {
		var u = s,
			c = Td(n),
			d = [];
		e: {
			var h = J_.get(e);
			if (h !== void 0) {
				var f = Nd,
					_ = e;
				switch (e) {
					case 'keypress':
						if (Uo(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						f = WE;
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
						f = Sh;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						f = PE;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						f = QE;
						break;
					case Q_:
					case K_:
					case Z_:
						f = UE;
						break;
					case X_:
						f = ZE;
						break;
					case 'scroll':
						f = DE;
						break;
					case 'wheel':
						f = JE;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						f = FE;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						f = Th;
				}
				var y = (t & 4) !== 0,
					S = !y && e === 'scroll',
					p = y ? (h !== null ? h + 'Capture' : null) : h;
				y = [];
				for (var m = u, g; m !== null; ) {
					g = m;
					var E = g.stateNode;
					if (
						(g.tag === 5 && E !== null && ((g = E), p !== null && ((E = cs(m, p)), E != null && y.push(gs(m, E, g)))),
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
					h && n !== qu && (_ = n.relatedTarget || n.fromElement) && (Zn(_) || _[sn]))
				)
					break e;
				if (
					(f || h) &&
					((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
					f
						? ((_ = n.relatedTarget || n.toElement),
						  (f = u),
						  (_ = _ ? Zn(_) : null),
						  _ !== null && ((S = yr(_)), _ !== S || (_.tag !== 5 && _.tag !== 6)) && (_ = null))
						: ((f = null), (_ = u)),
					f !== _)
				) {
					if (
						((y = Sh),
						(E = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(m = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((y = Th), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
						(S = f == null ? h : Or(f)),
						(g = _ == null ? h : Or(_)),
						(h = new y(E, m + 'leave', f, n, c)),
						(h.target = S),
						(h.relatedTarget = g),
						(E = null),
						Zn(c) === u && ((y = new y(p, m + 'enter', _, n, c)), (y.target = g), (y.relatedTarget = S), (E = y)),
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
					f !== null && Ph(d, h, f, y, !1), _ !== null && S !== null && Ph(d, S, _, y, !0);
				}
			}
			e: {
				if (
					((h = u ? Or(u) : window),
					(f = h.nodeName && h.nodeName.toLowerCase()),
					f === 'select' || (f === 'input' && h.type === 'file'))
				)
					var T = oS;
				else if (kh(h))
					if (G_) T = cS;
					else {
						T = lS;
						var R = aS;
					}
				else
					(f = h.nodeName) && f.toLowerCase() === 'input' && (h.type === 'checkbox' || h.type === 'radio') && (T = uS);
				if (T && (T = T(e, u))) {
					j_(d, T, n, c);
					break e;
				}
				R && R(e, h, u),
					e === 'focusout' && (R = h._wrapperState) && R.controlled && h.type === 'number' && Hu(h, 'number', h.value);
			}
			switch (((R = u ? Or(u) : window), e)) {
				case 'focusin':
					(kh(R) || R.contentEditable === 'true') && ((Cr = R), (ec = u), (Wi = null));
					break;
				case 'focusout':
					Wi = ec = Cr = null;
					break;
				case 'mousedown':
					tc = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(tc = !1), Ih(d, n, c);
					break;
				case 'selectionchange':
					if (hS) break;
				case 'keydown':
				case 'keyup':
					Ih(d, n, c);
			}
			var b;
			if (Id)
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
				xr ? $_(e, n) && (w = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (w = 'onCompositionStart');
			w &&
				(z_ &&
					n.locale !== 'ko' &&
					(xr || w !== 'onCompositionStart'
						? w === 'onCompositionEnd' && xr && (b = F_())
						: ((Sn = c), (Cd = 'value' in Sn ? Sn.value : Sn.textContent), (xr = !0))),
				(R = fa(u, w)),
				0 < R.length &&
					((w = new wh(w, e, null, n, c)),
					d.push({ event: w, listeners: R }),
					b ? (w.data = b) : ((b = H_(n)), b !== null && (w.data = b)))),
				(b = tS ? nS(e, n) : rS(e, n)) &&
					((u = fa(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new wh('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: u }),
						(c.data = b)));
		}
		e0(d, t);
	});
}
function gs(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function fa(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			s = i.stateNode;
		i.tag === 5 &&
			s !== null &&
			((i = s), (s = cs(e, n)), s != null && r.unshift(gs(e, s, i)), (s = cs(e, t)), s != null && r.push(gs(e, s, i))),
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
function Ph(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((l = cs(n, s)), l != null && o.unshift(gs(n, l, a)))
				: i || ((l = cs(n, s)), l != null && o.push(gs(n, l, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var gS = /\r\n?/g,
	yS = /\u0000|\uFFFD/g;
function Lh(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			gS,
			`
`
		)
		.replace(yS, '');
}
function ao(e, t, n) {
	if (((t = Lh(t)), Lh(e) !== t && n)) throw Error(N(425));
}
function ha() {}
var nc = null,
	rc = null;
function ic(e, t) {
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
var sc = typeof setTimeout == 'function' ? setTimeout : void 0,
	vS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Mh = typeof Promise == 'function' ? Promise : void 0,
	ES =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Mh < 'u'
			? function (e) {
					return Mh.resolve(null).then(e).catch(SS);
			  }
			: sc;
function SS(e) {
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
					e.removeChild(i), hs(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	hs(t);
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
function Uh(e) {
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
	ys = '__reactProps$' + vi,
	sn = '__reactContainer$' + vi,
	oc = '__reactEvents$' + vi,
	wS = '__reactListeners$' + vi,
	TS = '__reactHandles$' + vi;
function Zn(e) {
	var t = e[$t];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[sn] || n[$t])) {
			if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
				for (e = Uh(e); e !== null; ) {
					if ((n = e[$t])) return n;
					e = Uh(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Fs(e) {
	return (e = e[$t] || e[sn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Or(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(N(33));
}
function Ka(e) {
	return e[ys] || null;
}
var ac = [],
	Ir = -1;
function jn(e) {
	return { current: e };
}
function oe(e) {
	0 > Ir || ((e.current = ac[Ir]), (ac[Ir] = null), Ir--);
}
function re(e, t) {
	Ir++, (ac[Ir] = e.current), (e.current = t);
}
var Un = {},
	je = jn(Un),
	et = jn(!1),
	ar = Un;
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
function Bh(e, t, n) {
	if (je.current !== Un) throw Error(N(168));
	re(je, t), re(et, n);
}
function n0(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(N(108, aE(e) || 'Unknown', i));
	return pe({}, n, r);
}
function ma(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Un),
		(ar = je.current),
		re(je, e),
		re(et, et.current),
		!0
	);
}
function Fh(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(N(169));
	n ? ((e = n0(e, t, ar)), (r.__reactInternalMemoizedMergedChildContext = e), oe(et), oe(je), re(je, e)) : oe(et),
		re(et, n);
}
var Kt = null,
	Za = !1,
	Jl = !1;
function r0(e) {
	Kt === null ? (Kt = [e]) : Kt.push(e);
}
function bS(e) {
	(Za = !0), r0(e);
}
function Gn() {
	if (!Jl && Kt !== null) {
		Jl = !0;
		var e = 0,
			t = Z;
		try {
			var n = Kt;
			for (Z = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Kt = null), (Za = !1);
		} catch (i) {
			throw (Kt !== null && (Kt = Kt.slice(e + 1)), C_(bd, Gn), i);
		} finally {
			(Z = t), (Jl = !1);
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
	lr = null,
	Xt = 1,
	Jt = '';
function Wn(e, t) {
	(Dr[Ar++] = ga), (Dr[Ar++] = _a), (_a = e), (ga = t);
}
function i0(e, t, n) {
	(_t[gt++] = Xt), (_t[gt++] = Jt), (_t[gt++] = lr), (lr = e);
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
function Ad(e) {
	e.return !== null && (Wn(e, 1), i0(e, 1, 0));
}
function Pd(e) {
	for (; e === _a; ) (_a = Dr[--Ar]), (Dr[Ar] = null), (ga = Dr[--Ar]), (Dr[Ar] = null);
	for (; e === lr; )
		(lr = _t[--gt]), (_t[gt] = null), (Jt = _t[--gt]), (_t[gt] = null), (Xt = _t[--gt]), (_t[gt] = null);
}
var ut = null,
	at = null,
	ce = !1,
	It = null;
function s0(e, t) {
	var n = vt(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zh(e, t) {
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
					? ((n = lr !== null ? { id: Xt, overflow: Jt } : null),
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
function lc(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uc(e) {
	if (ce) {
		var t = at;
		if (t) {
			var n = t;
			if (!zh(e, t)) {
				if (lc(e)) throw Error(N(418));
				t = On(n.nextSibling);
				var r = ut;
				t && zh(e, t) ? s0(r, n) : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (ut = e));
			}
		} else {
			if (lc(e)) throw Error(N(418));
			(e.flags = (e.flags & -4097) | 2), (ce = !1), (ut = e);
		}
	}
}
function $h(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	ut = e;
}
function lo(e) {
	if (e !== ut) return !1;
	if (!ce) return $h(e), (ce = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type), (t = t !== 'head' && t !== 'body' && !ic(e.type, e.memoizedProps))),
		t && (t = at))
	) {
		if (lc(e)) throw (o0(), Error(N(418)));
		for (; t; ) s0(e, t), (t = On(t.nextSibling));
	}
	if (($h(e), e.tag === 13)) {
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
function o0() {
	for (var e = at; e; ) e = On(e.nextSibling);
}
function Xr() {
	(at = ut = null), (ce = !1);
}
function Ld(e) {
	It === null ? (It = [e]) : It.push(e);
}
var RS = cn.ReactCurrentBatchConfig;
function Nt(e, t) {
	if (e && e.defaultProps) {
		(t = pe({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var ya = jn(null),
	va = null,
	Pr = null,
	Md = null;
function Ud() {
	Md = Pr = va = null;
}
function Bd(e) {
	var t = ya.current;
	oe(ya), (e._currentValue = t);
}
function cc(e, t, n) {
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
		(Md = Pr = null),
		(e = e.dependencies),
		e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function wt(e) {
	var t = e._currentValue;
	if (Md !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
			if (va === null) throw Error(N(308));
			(Pr = e), (va.dependencies = { lanes: 0, firstContext: e });
		} else Pr = Pr.next = e;
	return t;
}
var Xn = null;
function Fd(e) {
	Xn === null ? (Xn = [e]) : Xn.push(e);
}
function a0(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? ((n.next = n), Fd(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), on(e, r);
}
function on(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var mn = !1;
function zd(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function l0(e, t) {
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
		i === null ? ((t.next = t), Fd(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		on(e, n)
	);
}
function Bo(e, t, n) {
	if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Rd(e, n);
	}
}
function Hh(e, t) {
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
		(cr |= o), (e.lanes = o), (e.memoizedState = d);
	}
}
function jh(e, t, n) {
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
var u0 = new a_.Component().refs;
function dc(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : pe({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xa = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? yr(e) === e : !1;
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
function Gh(e, t, n, r, i, s, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, s, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !ms(n, r) || !ms(i, s)
			: !0
	);
}
function c0(e, t, n) {
	var r = !1,
		i = Un,
		s = t.contextType;
	return (
		typeof s == 'object' && s !== null
			? (s = wt(s))
			: ((i = tt(t) ? ar : je.current), (r = t.contextTypes), (s = (r = r != null) ? Zr(e, i) : Un)),
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
function Yh(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Xa.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = u0), zd(e);
	var s = t.contextType;
	typeof s == 'object' && s !== null ? (i.context = wt(s)) : ((s = tt(t) ? ar : je.current), (i.context = Zr(e, s))),
		(i.state = e.memoizedState),
		(s = t.getDerivedStateFromProps),
		typeof s == 'function' && (dc(e, t, s, n), (i.state = e.memoizedState)),
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
						a === u0 && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o);
				  }),
				  (t._stringRef = s),
				  t);
		}
		if (typeof e != 'string') throw Error(N(284));
		if (!n._owner) throw Error(N(290, e));
	}
	return e;
}
function uo(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
	);
}
function Wh(e) {
	var t = e._init;
	return t(e._payload);
}
function d0(e) {
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
		return m === null || m.tag !== 6 ? ((m = ou(g, p.mode, E)), (m.return = p), m) : ((m = i(m, g)), (m.return = p), m);
	}
	function l(p, m, g, E) {
		var T = g.type;
		return T === kr
			? c(p, m, g.props.children, E, g.key)
			: m !== null &&
			  (m.elementType === T || (typeof T == 'object' && T !== null && T.$$typeof === pn && Wh(T) === m.type))
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
			? ((m = ir(g, p.mode, E, T)), (m.return = p), m)
			: ((m = i(m, g)), (m.return = p), m);
	}
	function d(p, m, g) {
		if ((typeof m == 'string' && m !== '') || typeof m == 'number')
			return (m = ou('' + m, p.mode, g)), (m.return = p), m;
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case Xs:
					return (g = Go(m.type, m.key, m.props, null, p.mode, g)), (g.ref = Oi(p, null, m)), (g.return = p), g;
				case Rr:
					return (m = au(m, p.mode, g)), (m.return = p), m;
				case pn:
					var E = m._init;
					return d(p, E(m._payload), g);
			}
			if (Mi(m) || Ri(m)) return (m = ir(m, p.mode, g, null)), (m.return = p), m;
			uo(p, m);
		}
		return null;
	}
	function h(p, m, g, E) {
		var T = m !== null ? m.key : null;
		if ((typeof g == 'string' && g !== '') || typeof g == 'number') return T !== null ? null : a(p, m, '' + g, E);
		if (typeof g == 'object' && g !== null) {
			switch (g.$$typeof) {
				case Xs:
					return g.key === T ? l(p, m, g, E) : null;
				case Rr:
					return g.key === T ? u(p, m, g, E) : null;
				case pn:
					return (T = g._init), h(p, m, T(g._payload), E);
			}
			if (Mi(g) || Ri(g)) return T !== null ? null : c(p, m, g, E, null);
			uo(p, g);
		}
		return null;
	}
	function f(p, m, g, E, T) {
		if ((typeof E == 'string' && E !== '') || typeof E == 'number') return (p = p.get(g) || null), a(m, p, '' + E, T);
		if (typeof E == 'object' && E !== null) {
			switch (E.$$typeof) {
				case Xs:
					return (p = p.get(E.key === null ? g : E.key) || null), l(m, p, E, T);
				case Rr:
					return (p = p.get(E.key === null ? g : E.key) || null), u(m, p, E, T);
				case pn:
					var R = E._init;
					return f(p, m, g, R(E._payload), T);
			}
			if (Mi(E) || Ri(E)) return (p = p.get(g) || null), c(m, p, E, T, null);
			uo(m, E);
		}
		return null;
	}
	function _(p, m, g, E) {
		for (var T = null, R = null, b = m, w = (m = 0), A = null; b !== null && w < g.length; w++) {
			b.index > w ? ((A = b), (b = null)) : (A = b.sibling);
			var O = h(p, b, g[w], E);
			if (O === null) {
				b === null && (b = A);
				break;
			}
			e && b && O.alternate === null && t(p, b),
				(m = s(O, m, w)),
				R === null ? (T = O) : (R.sibling = O),
				(R = O),
				(b = A);
		}
		if (w === g.length) return n(p, b), ce && Wn(p, w), T;
		if (b === null) {
			for (; w < g.length; w++)
				(b = d(p, g[w], E)), b !== null && ((m = s(b, m, w)), R === null ? (T = b) : (R.sibling = b), (R = b));
			return ce && Wn(p, w), T;
		}
		for (b = r(p, b); w < g.length; w++)
			(A = f(b, p, w, g[w], E)),
				A !== null &&
					(e && A.alternate !== null && b.delete(A.key === null ? w : A.key),
					(m = s(A, m, w)),
					R === null ? (T = A) : (R.sibling = A),
					(R = A));
		return (
			e &&
				b.forEach(function (B) {
					return t(p, B);
				}),
			ce && Wn(p, w),
			T
		);
	}
	function y(p, m, g, E) {
		var T = Ri(g);
		if (typeof T != 'function') throw Error(N(150));
		if (((g = T.call(g)), g == null)) throw Error(N(151));
		for (var R = (T = null), b = m, w = (m = 0), A = null, O = g.next(); b !== null && !O.done; w++, O = g.next()) {
			b.index > w ? ((A = b), (b = null)) : (A = b.sibling);
			var B = h(p, b, O.value, E);
			if (B === null) {
				b === null && (b = A);
				break;
			}
			e && b && B.alternate === null && t(p, b),
				(m = s(B, m, w)),
				R === null ? (T = B) : (R.sibling = B),
				(R = B),
				(b = A);
		}
		if (O.done) return n(p, b), ce && Wn(p, w), T;
		if (b === null) {
			for (; !O.done; w++, O = g.next())
				(O = d(p, O.value, E)), O !== null && ((m = s(O, m, w)), R === null ? (T = O) : (R.sibling = O), (R = O));
			return ce && Wn(p, w), T;
		}
		for (b = r(p, b); !O.done; w++, O = g.next())
			(O = f(b, p, w, O.value, E)),
				O !== null &&
					(e && O.alternate !== null && b.delete(O.key === null ? w : O.key),
					(m = s(O, m, w)),
					R === null ? (T = O) : (R.sibling = O),
					(R = O));
		return (
			e &&
				b.forEach(function (H) {
					return t(p, H);
				}),
			ce && Wn(p, w),
			T
		);
	}
	function S(p, m, g, E) {
		if (
			(typeof g == 'object' && g !== null && g.type === kr && g.key === null && (g = g.props.children),
			typeof g == 'object' && g !== null)
		) {
			switch (g.$$typeof) {
				case Xs:
					e: {
						for (var T = g.key, R = m; R !== null; ) {
							if (R.key === T) {
								if (((T = g.type), T === kr)) {
									if (R.tag === 7) {
										n(p, R.sibling), (m = i(R, g.props.children)), (m.return = p), (p = m);
										break e;
									}
								} else if (
									R.elementType === T ||
									(typeof T == 'object' && T !== null && T.$$typeof === pn && Wh(T) === R.type)
								) {
									n(p, R.sibling), (m = i(R, g.props)), (m.ref = Oi(p, R, g)), (m.return = p), (p = m);
									break e;
								}
								n(p, R);
								break;
							} else t(p, R);
							R = R.sibling;
						}
						g.type === kr
							? ((m = ir(g.props.children, p.mode, E, g.key)), (m.return = p), (p = m))
							: ((E = Go(g.type, g.key, g.props, null, p.mode, E)), (E.ref = Oi(p, m, g)), (E.return = p), (p = E));
					}
					return o(p);
				case Rr:
					e: {
						for (R = g.key; m !== null; ) {
							if (m.key === R)
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
					return (R = g._init), S(p, m, R(g._payload), E);
			}
			if (Mi(g)) return _(p, m, g, E);
			if (Ri(g)) return y(p, m, g, E);
			uo(p, g);
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
var Jr = d0(!0),
	f0 = d0(!1),
	zs = {},
	Gt = jn(zs),
	vs = jn(zs),
	Es = jn(zs);
function Jn(e) {
	if (e === zs) throw Error(N(174));
	return e;
}
function $d(e, t) {
	switch ((re(Es, t), re(vs, e), re(Gt, zs), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Gu(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Gu(t, e));
	}
	oe(Gt), re(Gt, t);
}
function ei() {
	oe(Gt), oe(vs), oe(Es);
}
function h0(e) {
	Jn(Es.current);
	var t = Jn(Gt.current),
		n = Gu(t, e.type);
	t !== n && (re(vs, e), re(Gt, n));
}
function Hd(e) {
	vs.current === e && (oe(Gt), oe(vs));
}
var fe = jn(0);
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
function jd() {
	for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null;
	eu.length = 0;
}
var Fo = cn.ReactCurrentDispatcher,
	tu = cn.ReactCurrentBatchConfig,
	ur = 0,
	he = null,
	Te = null,
	xe = null,
	wa = !1,
	qi = !1,
	Ss = 0,
	kS = 0;
function Fe() {
	throw Error(N(321));
}
function Gd(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
	return !0;
}
function Yd(e, t, n, r, i, s) {
	if (
		((ur = s),
		(he = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Fo.current = e === null || e.memoizedState === null ? OS : IS),
		(e = n(r, i)),
		qi)
	) {
		s = 0;
		do {
			if (((qi = !1), (Ss = 0), 25 <= s)) throw Error(N(301));
			(s += 1), (xe = Te = null), (t.updateQueue = null), (Fo.current = DS), (e = n(r, i));
		} while (qi);
	}
	if (((Fo.current = Ta), (t = Te !== null && Te.next !== null), (ur = 0), (xe = Te = he = null), (wa = !1), t))
		throw Error(N(300));
	return e;
}
function Wd() {
	var e = Ss !== 0;
	return (Ss = 0), e;
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
function ws(e, t) {
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
			if ((ur & c) === c)
				l !== null &&
					(l = l.next =
						{ lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
				l === null ? ((a = l = d), (o = r)) : (l = l.next = d), (he.lanes |= c), (cr |= c);
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
		do (s = i.lane), (he.lanes |= s), (cr |= s), (i = i.next);
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
function p0() {}
function m0(e, t) {
	var n = he,
		r = Tt(),
		i = t(),
		s = !Lt(r.memoizedState, i);
	if (
		(s && ((r.memoizedState = i), (Xe = !0)),
		(r = r.queue),
		qd(y0.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
	) {
		if (((n.flags |= 2048), Ts(9, g0.bind(null, n, r, i, t), void 0, null), Oe === null)) throw Error(N(349));
		ur & 30 || _0(n, t, i);
	}
	return i;
}
function _0(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = he.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }), (he.updateQueue = t), (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function g0(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), v0(t) && E0(e);
}
function y0(e, t, n) {
	return n(function () {
		v0(t) && E0(e);
	});
}
function v0(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Lt(e, n);
	} catch {
		return !0;
	}
}
function E0(e) {
	var t = on(e, 1);
	t !== null && At(t, e, 1, -1);
}
function qh(e) {
	var t = Bt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ws, lastRenderedState: e }),
		(t.queue = e),
		(e = e.dispatch = NS.bind(null, he, e)),
		[t.memoizedState, e]
	);
}
function Ts(e, t, n, r) {
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
function S0() {
	return Tt().memoizedState;
}
function zo(e, t, n, r) {
	var i = Bt();
	(he.flags |= e), (i.memoizedState = Ts(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ja(e, t, n, r) {
	var i = Tt();
	r = r === void 0 ? null : r;
	var s = void 0;
	if (Te !== null) {
		var o = Te.memoizedState;
		if (((s = o.destroy), r !== null && Gd(r, o.deps))) {
			i.memoizedState = Ts(t, n, s, r);
			return;
		}
	}
	(he.flags |= e), (i.memoizedState = Ts(1 | t, n, s, r));
}
function Vh(e, t) {
	return zo(8390656, 8, e, t);
}
function qd(e, t) {
	return Ja(2048, 8, e, t);
}
function w0(e, t) {
	return Ja(4, 2, e, t);
}
function T0(e, t) {
	return Ja(4, 4, e, t);
}
function b0(e, t) {
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
function R0(e, t, n) {
	return (n = n != null ? n.concat([e]) : null), Ja(4, 4, b0.bind(null, t, e), n);
}
function Vd() {}
function k0(e, t) {
	var n = Tt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Gd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function x0(e, t) {
	var n = Tt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Gd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function C0(e, t, n) {
	return ur & 21
		? (Lt(n, t) || ((n = I_()), (he.lanes |= n), (cr |= n), (e.baseState = !0)), t)
		: (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function xS(e, t) {
	var n = Z;
	(Z = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = tu.transition;
	tu.transition = {};
	try {
		e(!1), t();
	} finally {
		(Z = n), (tu.transition = r);
	}
}
function N0() {
	return Tt().memoizedState;
}
function CS(e, t, n) {
	var r = An(e);
	if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), O0(e))) I0(t, n);
	else if (((n = a0(e, t, n, r)), n !== null)) {
		var i = qe();
		At(n, e, r, i), D0(n, t, r);
	}
}
function NS(e, t, n) {
	var r = An(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (O0(e)) I0(t, i);
	else {
		var s = e.alternate;
		if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
			try {
				var o = t.lastRenderedState,
					a = s(o, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), Lt(a, o))) {
					var l = t.interleaved;
					l === null ? ((i.next = i), Fd(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = a0(e, t, i, r)), n !== null && ((i = qe()), At(n, e, r, i), D0(n, t, r));
	}
}
function O0(e) {
	var t = e.alternate;
	return e === he || (t !== null && t === he);
}
function I0(e, t) {
	qi = wa = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function D0(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Rd(e, n);
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
	OS = {
		readContext: wt,
		useCallback: function (e, t) {
			return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: wt,
		useEffect: Vh,
		useImperativeHandle: function (e, t, n) {
			return (n = n != null ? n.concat([e]) : null), zo(4194308, 4, b0.bind(null, t, e), n);
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
				(e = e.dispatch = CS.bind(null, he, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Bt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: qh,
		useDebugValue: Vd,
		useDeferredValue: function (e) {
			return (Bt().memoizedState = e);
		},
		useTransition: function () {
			var e = qh(!1),
				t = e[0];
			return (e = xS.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
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
				ur & 30 || _0(r, t, n);
			}
			i.memoizedState = n;
			var s = { value: n, getSnapshot: t };
			return (
				(i.queue = s),
				Vh(y0.bind(null, r, s, e), [e]),
				(r.flags |= 2048),
				Ts(9, g0.bind(null, r, s, n, t), void 0, null),
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
					(n = Ss++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = kS++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	IS = {
		readContext: wt,
		useCallback: k0,
		useContext: wt,
		useEffect: qd,
		useImperativeHandle: R0,
		useInsertionEffect: w0,
		useLayoutEffect: T0,
		useMemo: x0,
		useReducer: nu,
		useRef: S0,
		useState: function () {
			return nu(ws);
		},
		useDebugValue: Vd,
		useDeferredValue: function (e) {
			var t = Tt();
			return C0(t, Te.memoizedState, e);
		},
		useTransition: function () {
			var e = nu(ws)[0],
				t = Tt().memoizedState;
			return [e, t];
		},
		useMutableSource: p0,
		useSyncExternalStore: m0,
		useId: N0,
		unstable_isNewReconciler: !1,
	},
	DS = {
		readContext: wt,
		useCallback: k0,
		useContext: wt,
		useEffect: qd,
		useImperativeHandle: R0,
		useInsertionEffect: w0,
		useLayoutEffect: T0,
		useMemo: x0,
		useReducer: ru,
		useRef: S0,
		useState: function () {
			return ru(ws);
		},
		useDebugValue: Vd,
		useDeferredValue: function (e) {
			var t = Tt();
			return Te === null ? (t.memoizedState = e) : C0(t, Te.memoizedState, e);
		},
		useTransition: function () {
			var e = ru(ws)[0],
				t = Tt().memoizedState;
			return [e, t];
		},
		useMutableSource: p0,
		useSyncExternalStore: m0,
		useId: N0,
		unstable_isNewReconciler: !1,
	};
function ti(e, t) {
	try {
		var n = '',
			r = t;
		do (n += oE(r)), (r = r.return);
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
function hc(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var AS = typeof WeakMap == 'function' ? WeakMap : Map;
function A0(e, t, n) {
	(n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ra || ((Ra = !0), (Tc = r)), hc(e, t);
		}),
		n
	);
}
function P0(e, t, n) {
	(n = en(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				hc(e, t);
			});
	}
	var s = e.stateNode;
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				hc(e, t), typeof r != 'function' && (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
			}),
		n
	);
}
function Qh(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new AS();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = qS.bind(null, e, t, n)), t.then(e, e));
}
function Kh(e) {
	do {
		var t;
		if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Zh(e, t, n, r, i) {
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
var PS = cn.ReactCurrentOwner,
	Xe = !1;
function Ge(e, t, n, r) {
	t.child = e === null ? f0(t, null, n, r) : Jr(t, e.child, n, r);
}
function Xh(e, t, n, r, i) {
	n = n.render;
	var s = t.ref;
	return (
		jr(t, i),
		(r = Yd(e, t, n, r, s, i)),
		(n = Wd()),
		e !== null && !Xe
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), an(e, t, i))
			: (ce && n && Ad(t), (t.flags |= 1), Ge(e, t, r, i), t.child)
	);
}
function Jh(e, t, n, r, i) {
	if (e === null) {
		var s = n.type;
		return typeof s == 'function' &&
			!nf(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = s), L0(e, t, s, r, i))
			: ((e = Go(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
	}
	if (((s = e.child), !(e.lanes & i))) {
		var o = s.memoizedProps;
		if (((n = n.compare), (n = n !== null ? n : ms), n(o, r) && e.ref === t.ref)) return an(e, t, i);
	}
	return (t.flags |= 1), (e = Pn(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function L0(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps;
		if (ms(s, r) && e.ref === t.ref)
			if (((Xe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Xe = !0);
			else return (t.lanes = e.lanes), an(e, t, i);
	}
	return pc(e, t, n, r, i);
}
function M0(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), re(Mr, ot), (ot |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = s !== null ? s.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
					(t.updateQueue = null),
					re(Mr, ot),
					(ot |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = s !== null ? s.baseLanes : n),
				re(Mr, ot),
				(ot |= r);
		}
	else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), re(Mr, ot), (ot |= r);
	return Ge(e, t, i, n), t.child;
}
function U0(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, n, r, i) {
	var s = tt(n) ? ar : je.current;
	return (
		(s = Zr(t, s)),
		jr(t, i),
		(n = Yd(e, t, n, r, s, i)),
		(r = Wd()),
		e !== null && !Xe
			? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), an(e, t, i))
			: (ce && r && Ad(t), (t.flags |= 1), Ge(e, t, n, i), t.child)
	);
}
function ep(e, t, n, r, i) {
	if (tt(n)) {
		var s = !0;
		ma(t);
	} else s = !1;
	if ((jr(t, i), t.stateNode === null)) $o(e, t), c0(t, n, r), fc(t, n, r, i), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var l = o.context,
			u = n.contextType;
		typeof u == 'object' && u !== null ? (u = wt(u)) : ((u = tt(n) ? ar : je.current), (u = Zr(t, u)));
		var c = n.getDerivedStateFromProps,
			d = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || l !== u) && Yh(t, o, r, u)),
			(mn = !1);
		var h = t.memoizedState;
		(o.state = h),
			Ea(t, r, o, i),
			(l = t.memoizedState),
			a !== r || h !== l || et.current || mn
				? (typeof c == 'function' && (dc(t, n, c, r), (l = t.memoizedState)),
				  (a = mn || Gh(t, n, a, r, h, l, u))
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
			l0(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Nt(t.type, a)),
			(o.props = u),
			(d = t.pendingProps),
			(h = o.context),
			(l = n.contextType),
			typeof l == 'object' && l !== null ? (l = wt(l)) : ((l = tt(n) ? ar : je.current), (l = Zr(t, l)));
		var f = n.getDerivedStateFromProps;
		(c = typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
			((a !== d || h !== l) && Yh(t, o, r, l)),
			(mn = !1),
			(h = t.memoizedState),
			(o.state = h),
			Ea(t, r, o, i);
		var _ = t.memoizedState;
		a !== d || h !== _ || et.current || mn
			? (typeof f == 'function' && (dc(t, n, f, r), (_ = t.memoizedState)),
			  (u = mn || Gh(t, n, u, r, h, _, l) || !1)
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
	return mc(e, t, n, r, s, i);
}
function mc(e, t, n, r, i, s) {
	U0(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return i && Fh(t, n, !1), an(e, t, s);
	(r = t.stateNode), (PS.current = t);
	var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o ? ((t.child = Jr(t, e.child, null, s)), (t.child = Jr(t, null, a, s))) : Ge(e, t, a, s),
		(t.memoizedState = r.state),
		i && Fh(t, n, !0),
		t.child
	);
}
function B0(e) {
	var t = e.stateNode;
	t.pendingContext ? Bh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bh(e, t.context, !1),
		$d(e, t.containerInfo);
}
function tp(e, t, n, r, i) {
	return Xr(), Ld(i), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var _c = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function F0(e, t, n) {
	var r = t.pendingProps,
		i = fe.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		a;
	if (
		((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
		re(fe, i & 1),
		e === null)
	)
		return (
			uc(t),
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
						  (e = ir(e, r, n, null)),
						  (s.return = t),
						  (e.return = t),
						  (s.sibling = e),
						  (t.child = s),
						  (t.child.memoizedState = gc(n)),
						  (t.memoizedState = _c),
						  e)
						: Qd(t, o))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return LS(e, t, o, r, a, i, n);
	if (s) {
		(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
		var l = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
				: ((r = Pn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (s = Pn(a, s)) : ((s = ir(s, o, n, null)), (s.flags |= 2)),
			(s.return = t),
			(r.return = t),
			(r.sibling = s),
			(t.child = r),
			(r = s),
			(s = t.child),
			(o = e.child.memoizedState),
			(o = o === null ? gc(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
			(s.memoizedState = o),
			(s.childLanes = e.childLanes & ~n),
			(t.memoizedState = _c),
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
function Qd(e, t) {
	return (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function co(e, t, n, r) {
	return (
		r !== null && Ld(r),
		Jr(t, e.child, null, n),
		(e = Qd(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function LS(e, t, n, r, i, s, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = iu(Error(N(422)))), co(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((s = r.fallback),
			  (i = t.mode),
			  (r = nl({ mode: 'visible', children: r.children }, i, 0, null)),
			  (s = ir(s, i, o, null)),
			  (s.flags |= 2),
			  (r.return = t),
			  (s.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  t.mode & 1 && Jr(t, e.child, null, o),
			  (t.child.memoizedState = gc(o)),
			  (t.memoizedState = _c),
			  s);
	if (!(t.mode & 1)) return co(e, t, o, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (s = Error(N(419))), (r = iu(s, r, void 0)), co(e, t, o, r);
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
		return tf(), (r = iu(Error(N(421)))), co(e, t, o, r);
	}
	return i.data === '$?'
		? ((t.flags |= 128), (t.child = e.child), (t = VS.bind(null, e)), (i._reactRetry = t), null)
		: ((e = s.treeContext),
		  (at = On(i.nextSibling)),
		  (ut = t),
		  (ce = !0),
		  (It = null),
		  e !== null && ((_t[gt++] = Xt), (_t[gt++] = Jt), (_t[gt++] = lr), (Xt = e.id), (Jt = e.overflow), (lr = t)),
		  (t = Qd(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function np(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), cc(e.return, t, n);
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
function z0(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail;
	if ((Ge(e, t, r.children, n), (r = fe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && np(e, n, t);
				else if (e.tag === 19) np(e, n, t);
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
	if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
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
	if ((e !== null && (t.dependencies = e.dependencies), (cr |= t.lanes), !(n & t.childLanes))) return null;
	if (e !== null && t.child !== e.child) throw Error(N(153));
	if (t.child !== null) {
		for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
			(e = e.sibling), (n = n.sibling = Pn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function MS(e, t, n) {
	switch (t.tag) {
		case 3:
			B0(t), Xr();
			break;
		case 5:
			h0(t);
			break;
		case 1:
			tt(t.type) && ma(t);
			break;
		case 4:
			$d(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			re(ya, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (re(fe, fe.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? F0(e, t, n)
					: (re(fe, fe.current & 1), (e = an(e, t, n)), e !== null ? e.sibling : null);
			re(fe, fe.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return z0(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				re(fe, fe.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), M0(e, t, n);
	}
	return an(e, t, n);
}
var $0, yc, H0, j0;
$0 = function (e, t) {
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
yc = function () {};
H0 = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Jn(Gt.current);
		var s = null;
		switch (n) {
			case 'input':
				(i = zu(e, i)), (r = zu(e, r)), (s = []);
				break;
			case 'select':
				(i = pe({}, i, { value: void 0 })), (r = pe({}, r, { value: void 0 })), (s = []);
				break;
			case 'textarea':
				(i = ju(e, i)), (r = ju(e, r)), (s = []);
				break;
			default:
				typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ha);
		}
		Yu(n, r);
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
						(ls.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
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
						  (ls.hasOwnProperty(u)
								? (l != null && u === 'onScroll' && se('scroll', e), s || a === l || (s = []))
								: (s = s || []).push(u, l));
		}
		n && (s = s || []).push('style', n);
		var u = s;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
j0 = function (e, t, n, r) {
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
function US(e, t, n) {
	var r = t.pendingProps;
	switch ((Pd(t), t.tag)) {
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
				jd(),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(lo(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), It !== null && (kc(It), (It = null)))),
				yc(e, t),
				ze(t),
				null
			);
		case 5:
			Hd(t);
			var i = Jn(Es.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				H0(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(N(166));
					return ze(t), null;
				}
				if (((e = Jn(Gt.current)), lo(t))) {
					(r = t.stateNode), (n = t.type);
					var s = t.memoizedProps;
					switch (((r[$t] = t), (r[ys] = s), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							se('cancel', r), se('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							se('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < Bi.length; i++) se(Bi[i], r);
							break;
						case 'source':
							se('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							se('error', r), se('load', r);
							break;
						case 'details':
							se('toggle', r);
							break;
						case 'input':
							dh(r, s), se('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!s.multiple }), se('invalid', r);
							break;
						case 'textarea':
							hh(r, s), se('invalid', r);
					}
					Yu(n, s), (i = null);
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var a = s[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (s.suppressHydrationWarning !== !0 && ao(r.textContent, a, e), (i = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (s.suppressHydrationWarning !== !0 && ao(r.textContent, a, e), (i = ['children', '' + a]))
								: ls.hasOwnProperty(o) && a != null && o === 'onScroll' && se('scroll', r);
						}
					switch (n) {
						case 'input':
							Js(r), fh(r, s, !0);
							break;
						case 'textarea':
							Js(r), ph(r);
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
						e === 'http://www.w3.org/1999/xhtml' && (e = __(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[$t] = t),
						(e[ys] = r),
						$0(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Wu(n, r)), n)) {
							case 'dialog':
								se('cancel', e), se('close', e), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								se('load', e), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < Bi.length; i++) se(Bi[i], e);
								i = r;
								break;
							case 'source':
								se('error', e), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								se('error', e), se('load', e), (i = r);
								break;
							case 'details':
								se('toggle', e), (i = r);
								break;
							case 'input':
								dh(e, r), (i = zu(e, r)), se('invalid', e);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }), (i = pe({}, r, { value: void 0 })), se('invalid', e);
								break;
							case 'textarea':
								hh(e, r), (i = ju(e, r)), se('invalid', e);
								break;
							default:
								i = r;
						}
						Yu(n, i), (a = i);
						for (s in a)
							if (a.hasOwnProperty(s)) {
								var l = a[s];
								s === 'style'
									? v_(e, l)
									: s === 'dangerouslySetInnerHTML'
									? ((l = l ? l.__html : void 0), l != null && g_(e, l))
									: s === 'children'
									? typeof l == 'string'
										? (n !== 'textarea' || l !== '') && us(e, l)
										: typeof l == 'number' && us(e, '' + l)
									: s !== 'suppressContentEditableWarning' &&
									  s !== 'suppressHydrationWarning' &&
									  s !== 'autoFocus' &&
									  (ls.hasOwnProperty(s)
											? l != null && s === 'onScroll' && se('scroll', e)
											: l != null && vd(e, s, l, o));
							}
						switch (n) {
							case 'input':
								Js(e), fh(e, r, !1);
								break;
							case 'textarea':
								Js(e), ph(e);
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
			if (e && t.stateNode != null) j0(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
				if (((n = Jn(Es.current)), Jn(Gt.current), lo(t))) {
					if (
						((r = t.stateNode), (n = t.memoizedProps), (r[$t] = t), (s = r.nodeValue !== n) && ((e = ut), e !== null))
					)
						switch (e.tag) {
							case 3:
								ao(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 && ao(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					s && (t.flags |= 4);
				} else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[$t] = t), (t.stateNode = r);
			}
			return ze(t), null;
		case 13:
			if (
				(oe(fe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ce && at !== null && t.mode & 1 && !(t.flags & 128)) o0(), Xr(), (t.flags |= 98560), (s = !1);
				else if (((s = lo(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!s) throw Error(N(318));
						if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(N(317));
						s[$t] = t;
					} else Xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ze(t), (s = !1);
				} else It !== null && (kc(It), (It = null)), (s = !0);
				if (!s) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192), t.mode & 1 && (e === null || fe.current & 1 ? Re === 0 && (Re = 3) : tf())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ze(t),
				  null);
		case 4:
			return ei(), yc(e, t), e === null && _s(t.stateNode.containerInfo), ze(t), null;
		case 10:
			return Bd(t.type._context), ze(t), null;
		case 17:
			return tt(t.type) && pa(), ze(t), null;
		case 19:
			if ((oe(fe), (s = t.memoizedState), s === null)) return ze(t), null;
			if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) Ii(s, !1);
				else {
					if (Re !== 0 || (e !== null && e.flags & 128))
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
								return re(fe, (fe.current & 1) | 2), t.child;
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
				  re(fe, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ze(t), null);
		case 22:
		case 23:
			return (
				ef(),
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
function BS(e, t) {
	switch ((Pd(t), t.tag)) {
		case 1:
			return tt(t.type) && pa(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
		case 3:
			return (
				ei(), oe(et), oe(je), jd(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Hd(t), null;
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
			return Bd(t.type._context), null;
		case 22:
		case 23:
			return ef(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var fo = !1,
	$e = !1,
	FS = typeof WeakSet == 'function' ? WeakSet : Set,
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
function vc(e, t, n) {
	try {
		n();
	} catch (r) {
		_e(e, t, r);
	}
}
var rp = !1;
function zS(e, t) {
	if (((nc = ca), (e = q_()), Dd(e))) {
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
	for (rc = { focusedElem: e, selectionRange: n }, ca = !1, P = t; P !== null; )
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
	return (_ = rp), (rp = !1), _;
}
function Vi(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy;
				(i.destroy = void 0), s !== void 0 && vc(t, n, s);
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
function Ec(e) {
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
function G0(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), G0(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode), t !== null && (delete t[$t], delete t[ys], delete t[oc], delete t[wS], delete t[TS])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Y0(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ip(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Y0(e.return)) return null;
			e = e.return;
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Sc(e, t, n) {
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
		for (Sc(e, t, n), e = e.sibling; e !== null; ) Sc(e, t, n), (e = e.sibling);
}
function wc(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (wc(e, t, n), e = e.sibling; e !== null; ) wc(e, t, n), (e = e.sibling);
}
var Ae = null,
	Ot = !1;
function dn(e, t, n) {
	for (n = n.child; n !== null; ) W0(e, t, n), (n = n.sibling);
}
function W0(e, t, n) {
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
					? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), hs(e))
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
					(s = s.tag), o !== void 0 && (s & 2 || s & 4) && vc(n, t, o), (i = i.next);
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
function sp(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new FS()),
			t.forEach(function (r) {
				var i = QS.bind(null, e, r);
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
				W0(s, o, i), (Ae = null), (Ot = !1);
				var l = i.alternate;
				l !== null && (l.return = null), (i.return = null);
			} catch (u) {
				_e(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) q0(t, e), (t = t.sibling);
}
function q0(e, t) {
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
					us(i, '');
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
						a === 'input' && s.type === 'radio' && s.name != null && p_(i, s), Wu(a, o);
						var u = Wu(a, s);
						for (o = 0; o < l.length; o += 2) {
							var c = l[o],
								d = l[o + 1];
							c === 'style'
								? v_(i, d)
								: c === 'dangerouslySetInnerHTML'
								? g_(i, d)
								: c === 'children'
								? us(i, d)
								: vd(i, c, d, u);
						}
						switch (a) {
							case 'input':
								$u(i, s);
								break;
							case 'textarea':
								m_(i, s);
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
						i[ys] = s;
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
					hs(t.containerInfo);
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
					!s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Xd = ve())),
				r & 4 && sp(e);
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
										ap(d);
										continue;
									}
							}
							f !== null ? ((f.return = h), (P = f)) : ap(d);
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
										  (a.style.display = y_('display', o)));
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
			Ct(t, e), Ut(e), r & 4 && sp(e);
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
					if (Y0(n)) {
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
					r.flags & 32 && (us(i, ''), (r.flags &= -33));
					var s = ip(e);
					wc(e, s, i);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = ip(e);
					Sc(e, a, o);
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
function $S(e, t, n) {
	(P = e), V0(e);
}
function V0(e, t, n) {
	for (var r = (e.mode & 1) !== 0; P !== null; ) {
		var i = P,
			s = i.child;
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || fo;
			if (!o) {
				var a = i.alternate,
					l = (a !== null && a.memoizedState !== null) || $e;
				a = fo;
				var u = $e;
				if (((fo = o), ($e = l) && !u))
					for (P = i; P !== null; )
						(o = P),
							(l = o.child),
							o.tag === 22 && o.memoizedState !== null ? lp(i) : l !== null ? ((l.return = o), (P = l)) : lp(i);
				for (; s !== null; ) (P = s), V0(s), (s = s.sibling);
				(P = i), (fo = a), ($e = u);
			}
			op(e);
		} else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : op(e);
	}
}
function op(e) {
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
							s !== null && jh(t, s, r);
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
								jh(t, o, n);
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
										d !== null && hs(d);
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
				$e || (t.flags & 512 && Ec(t));
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
function ap(e) {
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
function lp(e) {
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
						Ec(t);
					} catch (l) {
						_e(t, s, l);
					}
					break;
				case 5:
					var o = t.return;
					try {
						Ec(t);
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
var HS = Math.ceil,
	ba = cn.ReactCurrentDispatcher,
	Kd = cn.ReactCurrentOwner,
	Et = cn.ReactCurrentBatchConfig,
	W = 0,
	Oe = null,
	Se = null,
	Ue = 0,
	ot = 0,
	Mr = jn(0),
	Re = 0,
	bs = null,
	cr = 0,
	tl = 0,
	Zd = 0,
	Qi = null,
	Ze = null,
	Xd = 0,
	ni = 1 / 0,
	qt = null,
	Ra = !1,
	Tc = null,
	Dn = null,
	ho = !1,
	wn = null,
	ka = 0,
	Ki = 0,
	bc = null,
	Ho = -1,
	jo = 0;
function qe() {
	return W & 6 ? ve() : Ho !== -1 ? Ho : (Ho = ve());
}
function An(e) {
	return e.mode & 1
		? W & 2 && Ue !== 0
			? Ue & -Ue
			: RS.transition !== null
			? (jo === 0 && (jo = I_()), jo)
			: ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : B_(e.type))), e)
		: 1;
}
function At(e, t, n, r) {
	if (50 < Ki) throw ((Ki = 0), (bc = null), Error(N(185)));
	Us(e, n, r),
		(!(W & 2) || e !== Oe) &&
			(e === Oe && (!(W & 2) && (tl |= n), Re === 4 && yn(e, Ue)),
			nt(e, r),
			n === 1 && W === 0 && !(t.mode & 1) && ((ni = ve() + 500), Za && Gn()));
}
function nt(e, t) {
	var n = e.callbackNode;
	RE(e, t);
	var r = ua(e, e === Oe ? Ue : 0);
	if (r === 0) n !== null && gh(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && gh(n), t === 1))
			e.tag === 0 ? bS(up.bind(null, e)) : r0(up.bind(null, e)),
				ES(function () {
					!(W & 6) && Gn();
				}),
				(n = null);
		else {
			switch (D_(r)) {
				case 1:
					n = bd;
					break;
				case 4:
					n = N_;
					break;
				case 16:
					n = la;
					break;
				case 536870912:
					n = O_;
					break;
				default:
					n = la;
			}
			n = ng(n, Q0.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Q0(e, t) {
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
		var s = Z0();
		(Oe !== e || Ue !== t) && ((qt = null), (ni = ve() + 500), rr(e, t));
		do
			try {
				YS();
				break;
			} catch (a) {
				K0(e, a);
			}
		while (1);
		Ud(), (ba.current = s), (W = i), Se !== null ? (t = 0) : ((Oe = null), (Ue = 0), (t = Re));
	}
	if (t !== 0) {
		if ((t === 2 && ((i = Zu(e)), i !== 0 && ((r = i), (t = Rc(e, i)))), t === 1))
			throw ((n = bs), rr(e, 0), yn(e, r), nt(e, ve()), n);
		if (t === 6) yn(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!jS(i) &&
					((t = xa(e, r)), t === 2 && ((s = Zu(e)), s !== 0 && ((r = s), (t = Rc(e, s)))), t === 1))
			)
				throw ((n = bs), rr(e, 0), yn(e, r), nt(e, ve()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(N(345));
				case 2:
					qn(e, Ze, qt);
					break;
				case 3:
					if ((yn(e, r), (r & 130023424) === r && ((t = Xd + 500 - ve()), 10 < t))) {
						if (ua(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							qe(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = sc(qn.bind(null, e, Ze, qt), t);
						break;
					}
					qn(e, Ze, qt);
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
								: 1960 * HS(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = sc(qn.bind(null, e, Ze, qt), r);
						break;
					}
					qn(e, Ze, qt);
					break;
				case 5:
					qn(e, Ze, qt);
					break;
				default:
					throw Error(N(329));
			}
		}
	}
	return nt(e, ve()), e.callbackNode === n ? Q0.bind(null, e) : null;
}
function Rc(e, t) {
	var n = Qi;
	return (
		e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256),
		(e = xa(e, t)),
		e !== 2 && ((t = Ze), (Ze = n), t !== null && kc(t)),
		e
	);
}
function kc(e) {
	Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function jS(e) {
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
	for (t &= ~Zd, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
		var n = 31 - Dt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function up(e) {
	if (W & 6) throw Error(N(327));
	Gr();
	var t = ua(e, 0);
	if (!(t & 1)) return nt(e, ve()), null;
	var n = xa(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Zu(e);
		r !== 0 && ((t = r), (n = Rc(e, r)));
	}
	if (n === 1) throw ((n = bs), rr(e, 0), yn(e, t), nt(e, ve()), n);
	if (n === 6) throw Error(N(345));
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), qn(e, Ze, qt), nt(e, ve()), null;
}
function Jd(e, t) {
	var n = W;
	W |= 1;
	try {
		return e(t);
	} finally {
		(W = n), W === 0 && ((ni = ve() + 500), Za && Gn());
	}
}
function dr(e) {
	wn !== null && wn.tag === 0 && !(W & 6) && Gr();
	var t = W;
	W |= 1;
	var n = Et.transition,
		r = Z;
	try {
		if (((Et.transition = null), (Z = 1), e)) return e();
	} finally {
		(Z = r), (Et.transition = n), (W = t), !(W & 6) && Gn();
	}
}
function ef() {
	(ot = Mr.current), oe(Mr);
}
function rr(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), vS(n)), Se !== null))
		for (n = Se.return; n !== null; ) {
			var r = n;
			switch ((Pd(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && pa();
					break;
				case 3:
					ei(), oe(et), oe(je), jd();
					break;
				case 5:
					Hd(r);
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
					Bd(r.type._context);
					break;
				case 22:
				case 23:
					ef();
			}
			n = n.return;
		}
	if (
		((Oe = e),
		(Se = e = Pn(e.current, null)),
		(Ue = ot = t),
		(Re = 0),
		(bs = null),
		(Zd = tl = cr = 0),
		(Ze = Qi = null),
		Xn !== null)
	) {
		for (t = 0; t < Xn.length; t++)
			if (((n = Xn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					s = n.pending;
				if (s !== null) {
					var o = s.next;
					(s.next = i), (r.next = o);
				}
				n.pending = r;
			}
		Xn = null;
	}
	return e;
}
function K0(e, t) {
	do {
		var n = Se;
		try {
			if ((Ud(), (Fo.current = Ta), wa)) {
				for (var r = he.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				wa = !1;
			}
			if (
				((ur = 0), (xe = Te = he = null), (qi = !1), (Ss = 0), (Kd.current = null), n === null || n.return === null)
			) {
				(Re = 1), (bs = t), (Se = null);
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
					var f = Kh(o);
					if (f !== null) {
						(f.flags &= -257), Zh(f, o, a, s, t), f.mode & 1 && Qh(s, u, t), (t = f), (l = u);
						var _ = t.updateQueue;
						if (_ === null) {
							var y = new Set();
							y.add(l), (t.updateQueue = y);
						} else _.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							Qh(s, u, t), tf();
							break e;
						}
						l = Error(N(426));
					}
				} else if (ce && a.mode & 1) {
					var S = Kh(o);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256), Zh(S, o, a, s, t), Ld(ti(l, a));
						break e;
					}
				}
				(s = l = ti(l, a)), Re !== 4 && (Re = 2), Qi === null ? (Qi = [s]) : Qi.push(s), (s = o);
				do {
					switch (s.tag) {
						case 3:
							(s.flags |= 65536), (t &= -t), (s.lanes |= t);
							var p = A0(s, l, t);
							Hh(s, p);
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
								var E = P0(s, a, t);
								Hh(s, E);
								break e;
							}
					}
					s = s.return;
				} while (s !== null);
			}
			J0(n);
		} catch (T) {
			(t = T), Se === n && n !== null && (Se = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Z0() {
	var e = ba.current;
	return (ba.current = Ta), e === null ? Ta : e;
}
function tf() {
	(Re === 0 || Re === 3 || Re === 2) && (Re = 4), Oe === null || (!(cr & 268435455) && !(tl & 268435455)) || yn(Oe, Ue);
}
function xa(e, t) {
	var n = W;
	W |= 2;
	var r = Z0();
	(Oe !== e || Ue !== t) && ((qt = null), rr(e, t));
	do
		try {
			GS();
			break;
		} catch (i) {
			K0(e, i);
		}
	while (1);
	if ((Ud(), (W = n), (ba.current = r), Se !== null)) throw Error(N(261));
	return (Oe = null), (Ue = 0), Re;
}
function GS() {
	for (; Se !== null; ) X0(Se);
}
function YS() {
	for (; Se !== null && !_E(); ) X0(Se);
}
function X0(e) {
	var t = tg(e.alternate, e, ot);
	(e.memoizedProps = e.pendingProps), t === null ? J0(e) : (Se = t), (Kd.current = null);
}
function J0(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = BS(n, t)), n !== null)) {
				(n.flags &= 32767), (Se = n);
				return;
			}
			if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Re = 6), (Se = null);
				return;
			}
		} else if (((n = US(n, t, ot)), n !== null)) {
			Se = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Se = t;
			return;
		}
		Se = t = e;
	} while (t !== null);
	Re === 0 && (Re = 5);
}
function qn(e, t, n) {
	var r = Z,
		i = Et.transition;
	try {
		(Et.transition = null), (Z = 1), WS(e, t, n, r);
	} finally {
		(Et.transition = i), (Z = r);
	}
	return null;
}
function WS(e, t, n, r) {
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
		(kE(e, s),
		e === Oe && ((Se = Oe = null), (Ue = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ho ||
			((ho = !0),
			ng(la, function () {
				return Gr(), null;
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		(s = Et.transition), (Et.transition = null);
		var o = Z;
		Z = 1;
		var a = W;
		(W |= 4),
			(Kd.current = null),
			zS(e, n),
			q0(n, e),
			fS(rc),
			(ca = !!nc),
			(rc = nc = null),
			(e.current = n),
			$S(n),
			gE(),
			(W = a),
			(Z = o),
			(Et.transition = s);
	} else e.current = n;
	if (
		(ho && ((ho = !1), (wn = e), (ka = i)),
		(s = e.pendingLanes),
		s === 0 && (Dn = null),
		EE(n.stateNode),
		nt(e, ve()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Ra) throw ((Ra = !1), (e = Tc), (Tc = null), e);
	return (
		ka & 1 && e.tag !== 0 && Gr(),
		(s = e.pendingLanes),
		s & 1 ? (e === bc ? Ki++ : ((Ki = 0), (bc = e))) : (Ki = 0),
		Gn(),
		null
	);
}
function Gr() {
	if (wn !== null) {
		var e = D_(ka),
			t = Et.transition,
			n = Z;
		try {
			if (((Et.transition = null), (Z = 16 > e ? 16 : e), wn === null)) var r = !1;
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
											if ((G0(c), c === u)) {
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
				if (((W = i), Gn(), jt && typeof jt.onPostCommitFiberRoot == 'function'))
					try {
						jt.onPostCommitFiberRoot(Wa, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(Z = n), (Et.transition = t);
		}
	}
	return !1;
}
function cp(e, t, n) {
	(t = ti(n, t)), (t = A0(e, t, 1)), (e = In(e, t, 1)), (t = qe()), e !== null && (Us(e, 1, t), nt(e, t));
}
function _e(e, t, n) {
	if (e.tag === 3) cp(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				cp(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' && (Dn === null || !Dn.has(r)))
				) {
					(e = ti(n, e)), (e = P0(t, e, 1)), (t = In(t, e, 1)), (e = qe()), t !== null && (Us(t, 1, e), nt(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function qS(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = qe()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Oe === e &&
			(Ue & n) === n &&
			(Re === 4 || (Re === 3 && (Ue & 130023424) === Ue && 500 > ve() - Xd) ? rr(e, 0) : (Zd |= n)),
		nt(e, t);
}
function eg(e, t) {
	t === 0 && (e.mode & 1 ? ((t = no), (no <<= 1), !(no & 130023424) && (no = 4194304)) : (t = 1));
	var n = qe();
	(e = on(e, t)), e !== null && (Us(e, t, n), nt(e, n));
}
function VS(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), eg(e, n);
}
function QS(e, t) {
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
	r !== null && r.delete(t), eg(e, n);
}
var tg;
tg = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || et.current) Xe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), MS(e, t, n);
			Xe = !!(e.flags & 131072);
		}
	else (Xe = !1), ce && t.flags & 1048576 && i0(t, ga, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			$o(e, t), (e = t.pendingProps);
			var i = Zr(t, je.current);
			jr(t, n), (i = Yd(null, t, r, e, i, n));
			var s = Wd();
			return (
				(t.flags |= 1),
				typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  tt(r) ? ((s = !0), ma(t)) : (s = !1),
					  (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
					  zd(t),
					  (i.updater = Xa),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  fc(t, r, e, n),
					  (t = mc(null, t, r, !0, s, n)))
					: ((t.tag = 0), ce && s && Ad(t), Ge(null, t, i, n), (t = t.child)),
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
					(i = t.tag = ZS(r)),
					(e = Nt(r, e)),
					i)
				) {
					case 0:
						t = pc(null, t, r, e, n);
						break e;
					case 1:
						t = ep(null, t, r, e, n);
						break e;
					case 11:
						t = Xh(null, t, r, e, n);
						break e;
					case 14:
						t = Jh(null, t, r, Nt(r.type, e), n);
						break e;
				}
				throw Error(N(306, r, ''));
			}
			return t;
		case 0:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), pc(e, t, r, i, n);
		case 1:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), ep(e, t, r, i, n);
		case 3:
			e: {
				if ((B0(t), e === null)) throw Error(N(387));
				(r = t.pendingProps), (s = t.memoizedState), (i = s.element), l0(e, t), Ea(t, r, null, n);
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
						(i = ti(Error(N(423)), t)), (t = tp(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = ti(Error(N(424)), t)), (t = tp(e, t, r, n, i));
						break e;
					} else
						for (
							at = On(t.stateNode.containerInfo.firstChild),
								ut = t,
								ce = !0,
								It = null,
								n = f0(t, null, r, n),
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
				h0(t),
				e === null && uc(t),
				(r = t.type),
				(i = t.pendingProps),
				(s = e !== null ? e.memoizedProps : null),
				(o = i.children),
				ic(r, i) ? (o = null) : s !== null && ic(r, s) && (t.flags |= 32),
				U0(e, t),
				Ge(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && uc(t), null;
		case 13:
			return F0(e, t, n);
		case 4:
			return (
				$d(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Jr(t, null, r, n)) : Ge(e, t, r, n),
				t.child
			);
		case 11:
			return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Nt(r, i)), Xh(e, t, r, i, n);
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
					re(ya, r._currentValue),
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
										(s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), cc(s.return, n, t), (a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (s.tag === 10) o = s.type === t.type ? null : s.child;
							else if (s.tag === 18) {
								if (((o = s.return), o === null)) throw Error(N(341));
								(o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), cc(o, n, t), (o = s.sibling);
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
			return (r = t.type), (i = Nt(r, t.pendingProps)), (i = Nt(r.type, i)), Jh(e, t, r, i, n);
		case 15:
			return L0(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Nt(r, i)),
				$o(e, t),
				(t.tag = 1),
				tt(r) ? ((e = !0), ma(t)) : (e = !1),
				jr(t, n),
				c0(t, r, i),
				fc(t, r, i, n),
				mc(null, t, r, !0, e, n)
			);
		case 19:
			return z0(e, t, n);
		case 22:
			return M0(e, t, n);
	}
	throw Error(N(156, t.tag));
};
function ng(e, t) {
	return C_(e, t);
}
function KS(e, t, n, r) {
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
	return new KS(e, t, n, r);
}
function nf(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ZS(e) {
	if (typeof e == 'function') return nf(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Sd)) return 11;
		if (e === wd) return 14;
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
	if (((r = e), typeof e == 'function')) nf(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case kr:
				return ir(n.children, i, s, t);
			case Ed:
				(o = 8), (i |= 8);
				break;
			case Mu:
				return (e = vt(12, n, t, i | 2)), (e.elementType = Mu), (e.lanes = s), e;
			case Uu:
				return (e = vt(13, n, t, i)), (e.elementType = Uu), (e.lanes = s), e;
			case Bu:
				return (e = vt(19, n, t, i)), (e.elementType = Bu), (e.lanes = s), e;
			case d_:
				return nl(n, i, s, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case u_:
							o = 10;
							break e;
						case c_:
							o = 9;
							break e;
						case Sd:
							o = 11;
							break e;
						case wd:
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
function ir(e, t, n, r) {
	return (e = vt(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
	return (e = vt(22, e, r, t)), (e.elementType = d_), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
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
function XS(e, t, n, r, i) {
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
function rf(e, t, n, r, i, s, o, a, l) {
	return (
		(e = new XS(e, t, n, a, l)),
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
		zd(s),
		e
	);
}
function JS(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return { $$typeof: Rr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function rg(e) {
	if (!e) return Un;
	e = e._reactInternals;
	e: {
		if (yr(e) !== e || e.tag !== 1) throw Error(N(170));
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
		if (tt(n)) return n0(e, n, t);
	}
	return t;
}
function ig(e, t, n, r, i, s, o, a, l) {
	return (
		(e = rf(n, r, !0, e, i, s, o, a, l)),
		(e.context = rg(null)),
		(n = e.current),
		(r = qe()),
		(i = An(n)),
		(s = en(r, i)),
		(s.callback = t ?? null),
		In(n, s, i),
		(e.current.lanes = i),
		Us(e, i, r),
		nt(e, r),
		e
	);
}
function rl(e, t, n, r) {
	var i = t.current,
		s = qe(),
		o = An(i);
	return (
		(n = rg(n)),
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
function dp(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function sf(e, t) {
	dp(e, t), (e = e.alternate) && dp(e, t);
}
function e2() {
	return null;
}
var sg =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function of(e) {
	this._internalRoot = e;
}
il.prototype.render = of.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(N(409));
	rl(e, t, null, null);
};
il.prototype.unmount = of.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		dr(function () {
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
		var t = L_();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
		gn.splice(n, 0, e), n === 0 && U_(e);
	}
};
function af(e) {
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
function fp() {}
function t2(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r;
			r = function () {
				var u = Ca(o);
				s.call(u);
			};
		}
		var o = ig(t, r, e, 0, null, !1, !1, '', fp);
		return (e._reactRootContainer = o), (e[sn] = o.current), _s(e.nodeType === 8 ? e.parentNode : e), dr(), o;
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var u = Ca(l);
			a.call(u);
		};
	}
	var l = rf(e, 0, !1, null, null, !1, !1, '', fp);
	return (
		(e._reactRootContainer = l),
		(e[sn] = l.current),
		_s(e.nodeType === 8 ? e.parentNode : e),
		dr(function () {
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
	} else o = t2(n, t, e, i, r);
	return Ca(o);
}
A_ = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Ui(t.pendingLanes);
				n !== 0 && (Rd(t, n | 1), nt(t, ve()), !(W & 6) && ((ni = ve() + 500), Gn()));
			}
			break;
		case 13:
			dr(function () {
				var r = on(e, 1);
				if (r !== null) {
					var i = qe();
					At(r, e, 1, i);
				}
			}),
				sf(e, 1);
	}
};
kd = function (e) {
	if (e.tag === 13) {
		var t = on(e, 134217728);
		if (t !== null) {
			var n = qe();
			At(t, e, 134217728, n);
		}
		sf(e, 134217728);
	}
};
P_ = function (e) {
	if (e.tag === 13) {
		var t = An(e),
			n = on(e, t);
		if (n !== null) {
			var r = qe();
			At(n, e, t, r);
		}
		sf(e, t);
	}
};
L_ = function () {
	return Z;
};
M_ = function (e, t) {
	var n = Z;
	try {
		return (Z = e), t();
	} finally {
		Z = n;
	}
};
Vu = function (e, t, n) {
	switch (t) {
		case 'input':
			if (($u(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
						h_(r), $u(r, i);
					}
				}
			}
			break;
		case 'textarea':
			m_(e, n);
			break;
		case 'select':
			(t = n.value), t != null && Fr(e, !!n.multiple, t, !1);
	}
};
w_ = Jd;
T_ = dr;
var n2 = { usingClientEntryPoint: !1, Events: [Fs, Or, Ka, E_, S_, Jd] },
	Di = { findFiberByHostInstance: Zn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
	r2 = {
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
			return (e = k_(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Di.findFiberByHostInstance || e2,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!po.isDisabled && po.supportsFiber)
		try {
			(Wa = po.inject(r2)), (jt = po);
		} catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n2;
dt.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!af(t)) throw Error(N(200));
	return JS(e, t, null, n);
};
dt.createRoot = function (e, t) {
	if (!af(e)) throw Error(N(299));
	var n = !1,
		r = '',
		i = sg;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = rf(e, 1, !1, null, null, n, !1, r, i)),
		(e[sn] = t.current),
		_s(e.nodeType === 8 ? e.parentNode : e),
		new of(t)
	);
};
dt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function' ? Error(N(188)) : ((e = Object.keys(e).join(',')), Error(N(268, e)));
	return (e = k_(t)), (e = e === null ? null : e.stateNode), e;
};
dt.flushSync = function (e) {
	return dr(e);
};
dt.hydrate = function (e, t, n) {
	if (!sl(t)) throw Error(N(200));
	return ol(null, e, t, !0, n);
};
dt.hydrateRoot = function (e, t, n) {
	if (!af(e)) throw Error(N(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = sg;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = ig(t, null, e, 1, n ?? null, i, !1, s, o)),
		(e[sn] = t.current),
		_s(e),
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
		? (dr(function () {
				ol(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[sn] = null);
				});
		  }),
		  !0)
		: !1;
};
dt.unstable_batchedUpdates = Jd;
dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!sl(n)) throw Error(N(200));
	if (e == null || e._reactInternals === void 0) throw Error(N(38));
	return ol(e, t, n, !1, r);
};
dt.version = '18.2.0-next-9e3b772b8-20220608';
function og() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(og);
		} catch (e) {
			console.error(e);
		}
}
og(), (i_.exports = dt);
var i2 = i_.exports,
	ag = { exports: {} },
	lg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = C;
function s2(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var o2 = typeof Object.is == 'function' ? Object.is : s2,
	a2 = ri.useState,
	l2 = ri.useEffect,
	u2 = ri.useLayoutEffect,
	c2 = ri.useDebugValue;
function d2(e, t) {
	var n = t(),
		r = a2({ inst: { value: n, getSnapshot: t } }),
		i = r[0].inst,
		s = r[1];
	return (
		u2(
			function () {
				(i.value = n), (i.getSnapshot = t), lu(i) && s({ inst: i });
			},
			[e, n, t]
		),
		l2(
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
		c2(n),
		n
	);
}
function lu(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !o2(e, n);
	} catch {
		return !0;
	}
}
function f2(e, t) {
	return t();
}
var h2 = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? f2 : d2;
lg.useSyncExternalStore = ri.useSyncExternalStore !== void 0 ? ri.useSyncExternalStore : h2;
ag.exports = lg;
var p2 = ag.exports;
const ug = p2.useSyncExternalStore,
	hp = C.createContext(void 0),
	cg = C.createContext(!1);
function dg(e, t) {
	return (
		e ||
		(t && typeof window < 'u'
			? (window.ReactQueryClientContext || (window.ReactQueryClientContext = hp), window.ReactQueryClientContext)
			: hp)
	);
}
const lf = ({ context: e } = {}) => {
		const t = C.useContext(dg(e, C.useContext(cg)));
		if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
		return t;
	},
	m2 = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
		C.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e]
		);
		const i = dg(n, r);
		return C.createElement(cg.Provider, { value: !n && r }, C.createElement(i.Provider, { value: e }, t));
	},
	fg = C.createContext(!1),
	_2 = () => C.useContext(fg);
fg.Provider;
function g2() {
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
const y2 = C.createContext(g2()),
	v2 = () => C.useContext(y2);
function hg(e, t) {
	return typeof e == 'function' ? e(...t) : !!e;
}
const E2 = (e, t) => {
		(e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
	},
	S2 = e => {
		C.useEffect(() => {
			e.clearReset();
		}, [e]);
	},
	w2 = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
		e.isError && !t.isReset() && !e.isFetching && hg(n, [e.error, r]),
	T2 = e => {
		e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3);
	},
	b2 = (e, t) => e.isLoading && e.isFetching && !t,
	R2 = (e, t, n) => (e == null ? void 0 : e.suspense) && b2(t, n),
	k2 = (e, t, n) =>
		t
			.fetchOptimistic(e)
			.then(({ data: r }) => {
				e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
			})
			.catch(r => {
				n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
			});
function pg(e, t) {
	const n = lf({ context: e.context }),
		r = _2(),
		i = v2(),
		s = n.defaultQueryOptions(e);
	(s._optimisticResults = r ? 'isRestoring' : 'optimistic'),
		s.onError && (s.onError = ge.batchCalls(s.onError)),
		s.onSuccess && (s.onSuccess = ge.batchCalls(s.onSuccess)),
		s.onSettled && (s.onSettled = ge.batchCalls(s.onSettled)),
		T2(s),
		E2(s, i),
		S2(i);
	const [o] = C.useState(() => new t(n, s)),
		a = o.getOptimisticResult(s);
	if (
		(ug(
			C.useCallback(l => (r ? () => {} : o.subscribe(ge.batchCalls(l))), [o, r]),
			() => o.getCurrentResult(),
			() => o.getCurrentResult()
		),
		C.useEffect(() => {
			o.setOptions(s, { listeners: !1 });
		}, [s, o]),
		R2(s, a, r))
	)
		throw k2(s, o, i);
	if (w2({ result: a, errorResetBoundary: i, useErrorBoundary: s.useErrorBoundary, query: o.getCurrentQuery() }))
		throw a.error;
	return s.notifyOnChangeProps ? a : o.trackResult(a);
}
function x2(e, t, n) {
	const r = br(e, t, n);
	return pg(r, r_);
}
function C2(e, t, n) {
	const r = Fv(e, t, n),
		i = lf({ context: r.context }),
		[s] = C.useState(() => new eE(i, r));
	C.useEffect(() => {
		s.setOptions(r);
	}, [s, r]);
	const o = ug(
			C.useCallback(l => s.subscribe(ge.batchCalls(l)), [s]),
			() => s.getCurrentResult(),
			() => s.getCurrentResult()
		),
		a = C.useCallback(
			(l, u) => {
				s.mutate(l, u).catch(N2);
			},
			[s]
		);
	if (o.error && hg(s.options.useErrorBoundary, [o.error])) throw o.error;
	return { ...o, mutate: a, mutateAsync: o.mutate };
}
function N2() {}
function O2(e, t, n) {
	const r = br(e, t, n);
	return pg(r, Jv);
}
const uf = ({ color: e = '#fe7c58' }) =>
		v('div', {
			className: 'flex justify-center items-center',
			children: v('div', { className: 'spinner', style: { borderLeft: `3px solid ${e}` } }),
		}),
	I2 = ({ userId: e, color: t = '#999999', isBold: n, fontSize: r = 16 }) =>
		L('span', {
			className: `text-[${t}] font-[${r}px] ${n ? 'font-bold' : 'font-normal'}`,
			style: { fontSize: `${r}px` || '16px' },
			children: ['@', e],
		}),
	xc = ({ src: e, size: t, hasBorder: n, borderColor: r = 'white' }) =>
		v('div', {
			className: 'rounded-full bg-[#eaeaea]',
			style: { width: t, height: t, border: n ? `2px solid ${r}` : 'none' },
			children: v('img', { className: 'w-full h-full rounded-full object-cover', src: e }),
		}),
	cf = ({ size: e }) =>
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
		const [t, n] = C.useState(e),
			r = C.useCallback(() => {
				n(i => !i);
			}, []);
		return [t, r];
	},
	mg = ({ children: e, onClick: t }) =>
		L(tr, {
			children: [
				v('div', {
					onClick: () => (t == null ? void 0 : t()),
					className: 'z-40 fixed top-0 left-0 w-screen h-screen bg-black opacity-50',
				}),
				e,
			],
		}),
	_g = ({ isOpen: e, toggleModal: t }) => {
		const n = 'https://apps.apple.com/kr/app/chatty/id6448687261';
		return e
			? v(mg, {
					onClick: t,
					children: v('div', {
						className:
							'absolute bottom-0 left-1/2 w-full h-270 bg-white rounded-t-2xl z-50 p-20 max-w-lg translate-x-[-50%]',
						children: L('div', {
							className: 'flex flex-col items-center justify-center',
							children: [
								v(cf, { size: 45 }),
								v('h3', { className: 'text-20 font-medium mt-12', children: '지금 바로 채티와 함께 해요!' }),
								v('p', {
									className: 'text-grey-600 font-normal mt-4 mb-16',
									children: '앱에서 더 많은 기능을 사용해 보세요',
								}),
								v('a', {
									target: '_blank',
									href: n,
									rel: 'noreferrer',
									className: 'w-full h-50 bg-main-primary rounded-2xl text-center',
									children: v('button', {
										className: 'w-full h-full',
										children: v('span', {
											className: 'text-dark-primary text-16 font-medium',
											children: 'chatty 열기',
										}),
									}),
								}),
								v('button', { onClick: t, className: 'text-[#FE7C58] mt-16', children: '다음에' }),
							],
						}),
					}),
			  })
			: null;
	};
function D2({
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
}) {
	const [c, d] = Na(!1);
	return L(tr, {
		children: [
			c && v(_g, { isOpen: c, toggleModal: d }),
			L('div', {
				className: 'relative w-full h-160 bg-white',
				children: [
					v('img', {
						src: r,
						className: 'object-cover w-full h-full',
						alt: 'background',
						style: { objectFit: 'cover' },
					}),
					v('div', {
						className: 'absolute bottom-[-48px] left-16',
						children: v(xc, { size: 100, src: n, hasBorder: !0 }),
					}),
				],
			}),
			L('div', {
				className: 'p-16 bg-white',
				children: [
					v('div', {
						className: 'flex justify-end',
						children: L('button', {
							onClick: d,
							className: 'rounded-[17px] border-pink-main border-1 flex items-center p-8 gap-[8px]',
							children: [v(cf, { size: 20 }), v('span', { className: 'chatty', children: 'Chatty?' })],
						}),
					}),
					L('div', {
						className: 'flex flex-col gap-0 justify-center-center',
						children: [
							v('p', { className: 'text-lg font-bold', children: a }),
							v(I2, { userId: t, fontSize: 12 }),
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
}
function uu({ count: e, label: t }) {
	return L('div', {
		className: 'flex flex-col items-center gap-4',
		children: [
			v('span', { className: 'font-medium', children: e }),
			v('span', { className: 'font-normal text-light-secondary text-12', children: t }),
		],
	});
}
const A2 = ({ size: e = 16, color: t = 'white', background: n = '#EE4E22', label: r }) => (
		console.log(e),
		v('div', {
			className: 'rounded-full flex items-center justify-center text-12 font-normal',
			style: { color: t, background: n, width: `${e}px`, height: `${e}px` },
			children: r,
		})
	),
	P2 = ({ activeIdx: e, tabs: t, hasNew: n = !1, indicatorColor: r = '#F892C3', onClick: i }) => {
		const s = C.useMemo(() => Math.round(100 / t.length), [t.length]);
		return L(tr, {
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
										n && v(A2, { size: 16, label: 'N' }),
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
	},
	df = { ANSWERED: 'answered', NEW_QUESTION: 'newQuestion', REJECTED: 'rejected', PROFILE: 'profile' };
function gg(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: L2 } = Object.prototype,
	{ getPrototypeOf: ff } = Object,
	al = (e => t => {
		const n = L2.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	Wt = e => ((e = e.toLowerCase()), t => al(t) === e),
	ll = e => t => typeof t === e,
	{ isArray: Ei } = Array,
	Rs = ll('undefined');
function M2(e) {
	return (
		e !== null &&
		!Rs(e) &&
		e.constructor !== null &&
		!Rs(e.constructor) &&
		St(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const yg = Wt('ArrayBuffer');
function U2(e) {
	let t;
	return (
		typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && yg(e.buffer)),
		t
	);
}
const B2 = ll('string'),
	St = ll('function'),
	vg = ll('number'),
	ul = e => e !== null && typeof e == 'object',
	F2 = e => e === !0 || e === !1,
	Yo = e => {
		if (al(e) !== 'object') return !1;
		const t = ff(e);
		return (
			(t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	z2 = Wt('Date'),
	$2 = Wt('File'),
	H2 = Wt('Blob'),
	j2 = Wt('FileList'),
	G2 = e => ul(e) && St(e.pipe),
	Y2 = e => {
		let t;
		return (
			e &&
			((typeof FormData == 'function' && e instanceof FormData) ||
				(St(e.append) &&
					((t = al(e)) === 'formdata' || (t === 'object' && St(e.toString) && e.toString() === '[object FormData]'))))
		);
	},
	W2 = Wt('URLSearchParams'),
	q2 = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function $s(e, t, { allOwnKeys: n = !1 } = {}) {
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
function Eg(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		i;
	for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
	return null;
}
const Sg = (() =>
		typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
	wg = e => !Rs(e) && e !== Sg;
function Cc() {
	const { caseless: e } = (wg(this) && this) || {},
		t = {},
		n = (r, i) => {
			const s = (e && Eg(t, i)) || i;
			Yo(t[s]) && Yo(r) ? (t[s] = Cc(t[s], r)) : Yo(r) ? (t[s] = Cc({}, r)) : Ei(r) ? (t[s] = r.slice()) : (t[s] = r);
		};
	for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && $s(arguments[r], n);
	return t;
}
const V2 = (e, t, n, { allOwnKeys: r } = {}) => (
		$s(
			t,
			(i, s) => {
				n && St(i) ? (e[s] = gg(i, n)) : (e[s] = i);
			},
			{ allOwnKeys: r }
		),
		e
	),
	Q2 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	K2 = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, 'super', { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	Z2 = (e, t, n, r) => {
		let i, s, o;
		const a = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
				(o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
			e = n !== !1 && ff(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	X2 = (e, t, n) => {
		(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	J2 = e => {
		if (!e) return null;
		if (Ei(e)) return e;
		let t = e.length;
		if (!vg(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	ew = (
		e => t =>
			e && t instanceof e
	)(typeof Uint8Array < 'u' && ff(Uint8Array)),
	tw = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let i;
		for (; (i = r.next()) && !i.done; ) {
			const s = i.value;
			t.call(e, s[0], s[1]);
		}
	},
	nw = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	rw = Wt('HTMLFormElement'),
	iw = e =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
			return r.toUpperCase() + i;
		}),
	pp = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	sw = Wt('RegExp'),
	Tg = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		$s(n, (i, s) => {
			t(i, s, e) !== !1 && (r[s] = i);
		}),
			Object.defineProperties(e, r);
	},
	ow = e => {
		Tg(e, (t, n) => {
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
	aw = (e, t) => {
		const n = {},
			r = i => {
				i.forEach(s => {
					n[s] = !0;
				});
			};
		return Ei(e) ? r(e) : r(String(e).split(t)), n;
	},
	lw = () => {},
	uw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	cu = 'abcdefghijklmnopqrstuvwxyz',
	mp = '0123456789',
	bg = { DIGIT: mp, ALPHA: cu, ALPHA_DIGIT: cu + cu.toUpperCase() + mp },
	cw = (e = 16, t = bg.ALPHA_DIGIT) => {
		let n = '';
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function dw(e) {
	return !!(e && St(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const fw = e => {
		const t = new Array(10),
			n = (r, i) => {
				if (ul(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!('toJSON' in r)) {
						t[i] = r;
						const s = Ei(r) ? [] : {};
						return (
							$s(r, (o, a) => {
								const l = n(o, i + 1);
								!Rs(l) && (s[a] = l);
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
	hw = Wt('AsyncFunction'),
	pw = e => e && (ul(e) || St(e)) && St(e.then) && St(e.catch),
	k = {
		isArray: Ei,
		isArrayBuffer: yg,
		isBuffer: M2,
		isFormData: Y2,
		isArrayBufferView: U2,
		isString: B2,
		isNumber: vg,
		isBoolean: F2,
		isObject: ul,
		isPlainObject: Yo,
		isUndefined: Rs,
		isDate: z2,
		isFile: $2,
		isBlob: H2,
		isRegExp: sw,
		isFunction: St,
		isStream: G2,
		isURLSearchParams: W2,
		isTypedArray: ew,
		isFileList: j2,
		forEach: $s,
		merge: Cc,
		extend: V2,
		trim: q2,
		stripBOM: Q2,
		inherits: K2,
		toFlatObject: Z2,
		kindOf: al,
		kindOfTest: Wt,
		endsWith: X2,
		toArray: J2,
		forEachEntry: tw,
		matchAll: nw,
		isHTMLForm: rw,
		hasOwnProperty: pp,
		hasOwnProp: pp,
		reduceDescriptors: Tg,
		freezeMethods: ow,
		toObjectSet: aw,
		toCamelCase: iw,
		noop: lw,
		toFiniteNumber: uw,
		findKey: Eg,
		global: Sg,
		isContextDefined: wg,
		ALPHABET: bg,
		generateString: cw,
		isSpecCompliantForm: dw,
		toJSONObject: fw,
		isAsyncFn: hw,
		isThenable: pw,
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
const Rg = Y.prototype,
	kg = {};
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
	kg[e] = { value: e };
});
Object.defineProperties(Y, kg);
Object.defineProperty(Rg, 'isAxiosError', { value: !0 });
Y.from = (e, t, n, r, i, s) => {
	const o = Object.create(Rg);
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
const mw = null;
function Nc(e) {
	return k.isPlainObject(e) || k.isArray(e);
}
function xg(e) {
	return k.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function _p(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (i, s) {
					return (i = xg(i)), !n && s ? '[' + i + ']' : i;
				})
				.join(n ? '.' : '')
		: t;
}
function _w(e) {
	return k.isArray(e) && !e.some(Nc);
}
const gw = k.toFlatObject(k, {}, null, function (t) {
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
			else if ((k.isArray(_) && _w(_)) || ((k.isFileList(_) || k.endsWith(y, '[]')) && (p = k.toArray(_))))
				return (
					(y = xg(y)),
					p.forEach(function (g, E) {
						!(k.isUndefined(g) || g === null) && t.append(o === !0 ? _p([y], E, s) : o === null ? y : y + '[]', u(g));
					}),
					!1
				);
		}
		return Nc(_) ? !0 : (t.append(_p(S, y, s), u(_)), !1);
	}
	const d = [],
		h = Object.assign(gw, { defaultVisitor: c, convertValue: u, isVisitable: Nc });
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
function gp(e) {
	const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function hf(e, t) {
	(this._pairs = []), e && cl(e, this, t);
}
const Cg = hf.prototype;
Cg.append = function (t, n) {
	this._pairs.push([t, n]);
};
Cg.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, gp);
		  }
		: gp;
	return this._pairs
		.map(function (i) {
			return n(i[0]) + '=' + n(i[1]);
		}, '')
		.join('&');
};
function yw(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']');
}
function Ng(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || yw,
		i = n && n.serialize;
	let s;
	if ((i ? (s = i(t, n)) : (s = k.isURLSearchParams(t) ? t.toString() : new hf(t, n).toString(r)), s)) {
		const o = e.indexOf('#');
		o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf('?') === -1 ? '?' : '&') + s);
	}
	return e;
}
class vw {
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
const yp = vw,
	Og = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
	Ew = typeof URLSearchParams < 'u' ? URLSearchParams : hf,
	Sw = typeof FormData < 'u' ? FormData : null,
	ww = typeof Blob < 'u' ? Blob : null,
	Tw = (() => {
		let e;
		return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
			? !1
			: typeof window < 'u' && typeof document < 'u';
	})(),
	bw = (() =>
		typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
	Ht = {
		isBrowser: !0,
		classes: { URLSearchParams: Ew, FormData: Sw, Blob: ww },
		isStandardBrowserEnv: Tw,
		isStandardBrowserWebWorkerEnv: bw,
		protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
	};
function Rw(e, t) {
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
function kw(e) {
	return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function xw(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const i = n.length;
	let s;
	for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
	return t;
}
function Ig(e) {
	function t(n, r, i, s) {
		let o = n[s++];
		const a = Number.isFinite(+o),
			l = s >= n.length;
		return (
			(o = !o && k.isArray(i) ? i.length : o),
			l
				? (k.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
				: ((!i[o] || !k.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && k.isArray(i[o]) && (i[o] = xw(i[o])), !a)
		);
	}
	if (k.isFormData(e) && k.isFunction(e.entries)) {
		const n = {};
		return (
			k.forEachEntry(e, (r, i) => {
				t(kw(r), i, n, 0);
			}),
			n
		);
	}
	return null;
}
const Cw = { 'Content-Type': void 0 };
function Nw(e, t, n) {
	if (k.isString(e))
		try {
			return (t || JSON.parse)(e), k.trim(e);
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r;
		}
	return (n || JSON.stringify)(e);
}
const dl = {
	transitional: Og,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || '',
				i = r.indexOf('application/json') > -1,
				s = k.isObject(t);
			if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))) return i && i ? JSON.stringify(Ig(t)) : t;
			if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t;
			if (k.isArrayBufferView(t)) return t.buffer;
			if (k.isURLSearchParams(t))
				return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
			let a;
			if (s) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1) return Rw(t, this.formSerializer).toString();
				if ((a = k.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
					const l = this.env && this.env.FormData;
					return cl(a ? { 'files[]': t } : t, l && new l(), this.formSerializer);
				}
			}
			return s || i ? (n.setContentType('application/json', !1), Nw(t)) : t;
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
	dl.headers[t] = k.merge(Cw);
});
const pf = dl,
	Ow = k.toObjectSet([
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
	Iw = e => {
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
							!(!n || (t[n] && Ow[n])) &&
								(n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
					}),
			t
		);
	},
	vp = Symbol('internals');
function Ai(e) {
	return e && String(e).trim().toLowerCase();
}
function Wo(e) {
	return e === !1 || e == null ? e : k.isArray(e) ? e.map(Wo) : String(e);
}
function Dw(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const Aw = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function du(e, t, n, r, i) {
	if (k.isFunction(r)) return r.call(this, t, n);
	if ((i && (t = n), !!k.isString(t))) {
		if (k.isString(r)) return t.indexOf(r) !== -1;
		if (k.isRegExp(r)) return r.test(t);
	}
}
function Pw(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Lw(e, t) {
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
				: k.isString(t) && (t = t.trim()) && !Aw(t)
				? o(Iw(t), n)
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
				if (n === !0) return Dw(i);
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
				const a = t ? Pw(s) : String(s).trim();
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
		const r = (this[vp] = this[vp] = { accessors: {} }).accessors,
			i = this.prototype;
		function s(o) {
			const a = Ai(o);
			r[a] || (Lw(i, o), (r[a] = !0));
		}
		return k.isArray(t) ? t.forEach(s) : s(t), this;
	}
}
fl.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
k.freezeMethods(fl.prototype);
k.freezeMethods(fl);
const tn = fl;
function fu(e, t) {
	const n = this || pf,
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
function Dg(e) {
	return !!(e && e.__CANCEL__);
}
function Hs(e, t, n) {
	Y.call(this, e ?? 'canceled', Y.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
k.inherits(Hs, Y, { __CANCEL__: !0 });
function Mw(e, t, n) {
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
const Uw = Ht.isStandardBrowserEnv
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
function Bw(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fw(e, t) {
	return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ag(e, t) {
	return e && !Bw(t) ? Fw(e, t) : t;
}
const zw = Ht.isStandardBrowserEnv
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
function $w(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || '';
}
function Hw(e, t) {
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
function Ep(e, t) {
	let n = 0;
	const r = Hw(50, 250);
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
const jw = typeof XMLHttpRequest < 'u',
	Gw =
		jw &&
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
				const c = Ag(e.baseURL, e.url);
				u.open(e.method.toUpperCase(), Ng(c, e.params, e.paramsSerializer), !0), (u.timeout = e.timeout);
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
					Mw(
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
						const y = e.transitional || Og;
						e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
							r(new Y(_, y.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, e, u)),
							(u = null);
					}),
					Ht.isStandardBrowserEnv)
				) {
					const f = (e.withCredentials || zw(c)) && e.xsrfCookieName && Uw.read(e.xsrfCookieName);
					f && s.set(e.xsrfHeaderName, f);
				}
				i === void 0 && s.setContentType(null),
					'setRequestHeader' in u &&
						k.forEach(s.toJSON(), function (_, y) {
							u.setRequestHeader(y, _);
						}),
					k.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
					o && o !== 'json' && (u.responseType = e.responseType),
					typeof e.onDownloadProgress == 'function' && u.addEventListener('progress', Ep(e.onDownloadProgress, !0)),
					typeof e.onUploadProgress == 'function' &&
						u.upload &&
						u.upload.addEventListener('progress', Ep(e.onUploadProgress)),
					(e.cancelToken || e.signal) &&
						((a = f => {
							u && (r(!f || f.type ? new Hs(null, e, u) : f), u.abort(), (u = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(a),
						e.signal && (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)));
				const h = $w(c);
				if (h && Ht.protocols.indexOf(h) === -1) {
					r(new Y('Unsupported protocol ' + h + ':', Y.ERR_BAD_REQUEST, e));
					return;
				}
				u.send(i || null);
			});
		},
	qo = { http: mw, xhr: Gw };
k.forEach(qo, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, 'name', { value: t });
		} catch {}
		Object.defineProperty(e, 'adapterName', { value: t });
	}
});
const Yw = {
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
	if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Hs(null, e);
}
function Sp(e) {
	return (
		hu(e),
		(e.headers = tn.from(e.headers)),
		(e.data = fu.call(e, e.transformRequest)),
		['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
			e.headers.setContentType('application/x-www-form-urlencoded', !1),
		Yw.getAdapter(e.adapter || pf.adapter)(e).then(
			function (r) {
				return hu(e), (r.data = fu.call(e, e.transformResponse, r)), (r.headers = tn.from(r.headers)), r;
			},
			function (r) {
				return (
					Dg(r) ||
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
const wp = e => (e instanceof tn ? e.toJSON() : e);
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
		headers: (u, c) => i(wp(u), wp(c), !0),
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
const Pg = '1.4.0',
	mf = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
	mf[e] = function (r) {
		return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
	};
});
const Tp = {};
mf.transitional = function (t, n, r) {
	function i(s, o) {
		return '[Axios v' + Pg + "] Transitional option '" + s + "'" + o + (r ? '. ' + r : '');
	}
	return (s, o, a) => {
		if (t === !1) throw new Y(i(o, ' has been removed' + (n ? ' in ' + n : '')), Y.ERR_DEPRECATED);
		return (
			n &&
				!Tp[o] &&
				((Tp[o] = !0),
				console.warn(i(o, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
			t ? t(s, o, a) : !0
		);
	};
};
function Ww(e, t, n) {
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
const Oc = { assertOptions: Ww, validators: mf },
	fn = Oc.validators;
class Oa {
	constructor(t) {
		(this.defaults = t), (this.interceptors = { request: new yp(), response: new yp() });
	}
	request(t, n) {
		typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = ii(this.defaults, n));
		const { transitional: r, paramsSerializer: i, headers: s } = n;
		r !== void 0 &&
			Oc.assertOptions(
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
					: Oc.assertOptions(i, { encode: fn.function, serialize: fn.function }, !0)),
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
			const _ = [Sp.bind(this), void 0];
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
			c = Sp.call(this, f);
		} catch (_) {
			return Promise.reject(_);
		}
		for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
		return c;
	}
	getUri(t) {
		t = ii(this.defaults, t);
		const n = Ag(t.baseURL, t.url);
		return Ng(n, t.params, t.paramsSerializer);
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
class _f {
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
				r.reason || ((r.reason = new Hs(s, o, a)), n(r.reason));
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
			token: new _f(function (i) {
				t = i;
			}),
			cancel: t,
		};
	}
}
const qw = _f;
function Vw(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function Qw(e) {
	return k.isObject(e) && e.isAxiosError === !0;
}
const Ic = {
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
Object.entries(Ic).forEach(([e, t]) => {
	Ic[t] = e;
});
const Kw = Ic;
function Lg(e) {
	const t = new Vo(e),
		n = gg(Vo.prototype.request, t);
	return (
		k.extend(n, Vo.prototype, t, { allOwnKeys: !0 }),
		k.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (i) {
			return Lg(ii(e, i));
		}),
		n
	);
}
const ke = Lg(pf);
ke.Axios = Vo;
ke.CanceledError = Hs;
ke.CancelToken = qw;
ke.isCancel = Dg;
ke.VERSION = Pg;
ke.toFormData = cl;
ke.AxiosError = Y;
ke.Cancel = ke.CanceledError;
ke.all = function (t) {
	return Promise.all(t);
};
ke.spread = Vw;
ke.isAxiosError = Qw;
ke.mergeConfig = ii;
ke.AxiosHeaders = tn;
ke.formToJSON = e => Ig(k.isHTMLForm(e) ? new FormData(e) : e);
ke.HttpStatusCode = Kw;
ke.default = ke;
const Zw = ke;
class Xw {
	constructor() {
		Ks(this, 'instance');
		Ks(this, 'BASE_URL', 'https://chatty.kr/api/v1');
		Ks(this, 'TIMEOUT', 5e3);
		this.instance = Zw.create({ baseURL: this.BASE_URL, timeout: this.TIMEOUT });
	}
	async get(t, n) {
		return (await this.instance.get(t, n)).data;
	}
	async post(t, n, r) {
		return (await this.instance.post(t, n, r)).data;
	}
}
const gf = new Xw(),
	Jw = e =>
		x2({ enabled: !!e, queryFn: () => gf.get(`/user/profile/${e}`), queryKey: [df.PROFILE, e], cacheTime: 1e3 * 60 });
function Mg(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Mg(e[t])) && (r && (r += ' '), (r += n));
		else for (t in e) e[t] && (r && (r += ' '), (r += t));
	return r;
}
function Tn() {
	for (var e, t, n = 0, r = ''; n < arguments.length; )
		(e = arguments[n++]) && (t = Mg(e)) && (r && (r += ' '), (r += t));
	return r;
}
const Zi = e => typeof e == 'number' && !isNaN(e),
	fr = e => typeof e == 'string',
	Je = e => typeof e == 'function',
	Qo = e => (fr(e) || Je(e) ? e : null),
	pu = e => C.isValidElement(e) || fr(e) || Je(e) || Zi(e);
function e5(e, t, n) {
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
			y = C.useRef(0);
		return (
			C.useLayoutEffect(() => {
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
			C.useEffect(() => {
				const S = d.current,
					p = () => {
						S.removeEventListener('animationend', p), i ? e5(S, c, s) : c();
					};
				h || (u ? p() : ((y.current = 1), (S.className += ` ${_}`), S.addEventListener('animationend', p)));
			}, [h]),
			J.createElement(J.Fragment, null, a)
		);
	};
}
function bp(e, t) {
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
	mo = e => {
		let { theme: t, type: n, ...r } = e;
		return J.createElement('svg', {
			viewBox: '0 0 24 24',
			width: '100%',
			height: '100%',
			fill: t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
			...r,
		});
	},
	mu = {
		info: function (e) {
			return J.createElement(
				mo,
				{ ...e },
				J.createElement('path', {
					d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
				})
			);
		},
		warning: function (e) {
			return J.createElement(
				mo,
				{ ...e },
				J.createElement('path', {
					d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
				})
			);
		},
		success: function (e) {
			return J.createElement(
				mo,
				{ ...e },
				J.createElement('path', {
					d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
				})
			);
		},
		error: function (e) {
			return J.createElement(
				mo,
				{ ...e },
				J.createElement('path', {
					d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
				})
			);
		},
		spinner: function () {
			return J.createElement('div', { className: 'Toastify__spinner' });
		},
	};
function t5(e) {
	const [, t] = C.useReducer(f => f + 1, 0),
		[n, r] = C.useState([]),
		i = C.useRef(null),
		s = C.useRef(new Map()).current,
		o = f => n.indexOf(f) !== -1,
		a = C.useRef({
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
			R = () => u(m),
			b = g == null;
		b && a.count++;
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
			closeToast: R,
			isIn: !1,
			className: Qo(p.className || T.toastClassName),
			bodyClassName: Qo(p.bodyClassName || T.bodyClassName),
			progressClassName: Qo(p.progressClassName || T.progressClassName),
			autoClose: !p.isLoading && ((A = p.autoClose), (O = T.autoClose), A === !1 || (Zi(A) && A > 0) ? A : O),
			deleteToast() {
				const H = bp(s.get(m), 'removed');
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
						: C.isValidElement(G)
						? (ae = C.cloneElement(G, D))
						: fr(G) || Zi(G)
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
		C.isValidElement(f) && !fr(f.type)
			? (B = C.cloneElement(f, { closeToast: R, toastProps: w, data: E }))
			: Je(f) && (B = f({ closeToast: R, toastProps: w, data: E })),
			T.limit && T.limit > 0 && a.count > T.limit && b
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
			mt.emit(4, bp(p, p.props.updateId == null ? 'added' : 'updated'));
	}
	return (
		C.useEffect(
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
		C.useEffect(() => {
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
function Rp(e) {
	return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function kp(e) {
	return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function n5(e) {
	const [t, n] = C.useState(!1),
		[r, i] = C.useState(!1),
		s = C.useRef(null),
		o = C.useRef({
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
		a = C.useRef(e),
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
				(o.x = Rp(E.nativeEvent)),
				(o.y = kp(E.nativeEvent)),
				e.draggableDirection === 'x'
					? ((o.start = o.x), (o.removalDistance = T.offsetWidth * (e.draggablePercent / 100)))
					: ((o.start = o.y),
					  (o.removalDistance =
							T.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100)));
		}
	}
	function _(E) {
		if (o.boundingRect) {
			const { top: T, bottom: R, left: b, right: w } = o.boundingRect;
			E.nativeEvent.type !== 'touchend' && e.pauseOnHover && o.x >= b && o.x <= w && o.y >= T && o.y <= R ? S() : y();
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
			(o.x = Rp(E)),
			(o.y = kp(E)),
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
	C.useEffect(() => {
		a.current = e;
	}),
		C.useEffect(
			() => (
				s.current && s.current.addEventListener('d', y, { once: !0 }),
				Je(e.onOpen) && e.onOpen(C.isValidElement(e.children) && e.children.props),
				() => {
					const E = a.current;
					Je(E.onClose) && E.onClose(C.isValidElement(E.children) && E.children.props);
				}
			),
			[]
		),
		C.useEffect(
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
function Ug(e) {
	let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
	return J.createElement(
		'button',
		{
			className: `Toastify__close-button Toastify__close-button--${n}`,
			type: 'button',
			onClick: i => {
				i.stopPropagation(), t(i);
			},
			'aria-label': r,
		},
		J.createElement(
			'svg',
			{ 'aria-hidden': 'true', viewBox: '0 0 14 16' },
			J.createElement('path', {
				fillRule: 'evenodd',
				d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
			})
		)
	);
}
function r5(e) {
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
	return J.createElement('div', {
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
const i5 = e => {
		const { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: i } = n5(e),
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
				progress: R,
				rtl: b,
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
				{ 'Toastify__toast--rtl': b },
				{ 'Toastify__toast--close-on-click': I }
			),
			G = Je(_) ? _({ rtl: b, position: f, type: u, defaultClassName: Q }) : Tn(Q, _),
			ae = !!R || !a,
			D = { closeToast: d, type: u, theme: U };
		let M = null;
		return (
			s === !1 || (M = Je(s) ? s(D) : C.isValidElement(s) ? C.cloneElement(s, D) : Ug(D)),
			J.createElement(
				h,
				{ isIn: O, done: A, position: f, preventExitTransition: n, nodeRef: r },
				J.createElement(
					'div',
					{ id: w, onClick: l, className: G, ...i, style: y, ref: r },
					J.createElement(
						'div',
						{ ...(O && { role: T }), className: Je(S) ? S({ type: u }) : Tn('Toastify__toast-body', S), style: p },
						H != null &&
							J.createElement(
								'div',
								{ className: Tn('Toastify__toast-icon', { 'Toastify--animate-icon Toastify__zoom-enter': !B }) },
								H
							),
						J.createElement('div', null, o)
					),
					M,
					J.createElement(r5, {
						...(E && !ae ? { key: `pb-${E}` } : {}),
						rtl: b,
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
						progress: R || 0,
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
	s5 = hl(pl('bounce', !0)),
	o5 = hl(pl('slide', !0));
hl(pl('zoom'));
hl(pl('flip'));
const Dc = C.forwardRef((e, t) => {
	const { getToastToRender: n, containerRef: r, isToastActive: i } = t5(e),
		{ className: s, style: o, rtl: a, containerId: l } = e;
	function u(c) {
		const d = Tn('Toastify__toast-container', `Toastify__toast-container--${c}`, {
			'Toastify__toast-container--rtl': a,
		});
		return Je(s) ? s({ position: c, rtl: a, defaultClassName: d }) : Tn(d, Qo(s));
	}
	return (
		C.useEffect(() => {
			t && (t.current = r.current);
		}, []),
		J.createElement(
			'div',
			{ ref: r, className: 'Toastify', id: l },
			n((c, d) => {
				const h = d.length ? { ...o } : { ...o, pointerEvents: 'none' };
				return J.createElement(
					'div',
					{ className: u(c), style: h, key: `container-${c}` },
					d.map((f, _) => {
						let { content: y, props: S } = f;
						return J.createElement(
							i5,
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
(Dc.displayName = 'ToastContainer'),
	(Dc.defaultProps = {
		position: 'top-right',
		transition: s5,
		autoClose: 5e3,
		closeButton: Ug,
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
	Vn = new Map(),
	Fi = [],
	a5 = 1;
function Bg() {
	return '' + a5++;
}
function l5(e) {
	return e && (fr(e.toastId) || Zi(e.toastId)) ? e.toastId : Bg();
}
function Xi(e, t) {
	return Vn.size > 0 ? mt.emit(0, e, t) : Fi.push({ content: e, options: t }), t.toastId;
}
function Ia(e, t) {
	return { ...t, type: (t && t.type) || e, toastId: l5(t) };
}
function _o(e) {
	return (t, n) => Xi(t, Ia(e, n));
}
function K(e, t) {
	return Xi(e, Ia('default', t));
}
(K.loading = (e, t) =>
	Xi(e, Ia('default', { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }))),
	(K.promise = function (e, t, n) {
		let r,
			{ pending: i, error: s, success: o } = t;
		i && (r = fr(i) ? K.loading(i, n) : K.loading(i.render, { ...n, ...i }));
		const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
			l = (c, d, h) => {
				if (d == null) return void K.dismiss(r);
				const f = { type: c, ...a, ...n, data: h },
					_ = fr(d) ? { render: d } : d;
				return r ? K.update(r, { ...f, ..._ }) : K(_.render, { ...f, ..._ }), h;
			},
			u = Je(e) ? e() : e;
		return u.then(c => l('success', o, c)).catch(c => l('error', s, c)), u;
	}),
	(K.success = _o('success')),
	(K.info = _o('info')),
	(K.error = _o('error')),
	(K.warning = _o('warning')),
	(K.warn = K.warning),
	(K.dark = (e, t) => Xi(e, Ia('default', { theme: 'dark', ...t }))),
	(K.dismiss = e => {
		Vn.size > 0 ? mt.emit(1, e) : (Fi = Fi.filter(t => e != null && t.options.toastId !== e));
	}),
	(K.clearWaitingQueue = function (e) {
		return e === void 0 && (e = {}), mt.emit(5, e);
	}),
	(K.isActive = e => {
		let t = !1;
		return (
			Vn.forEach(n => {
				n.isToastActive && n.isToastActive(e) && (t = !0);
			}),
			t
		);
	}),
	(K.update = function (e, t) {
		t === void 0 && (t = {}),
			setTimeout(() => {
				const n = (function (r, i) {
					let { containerId: s } = i;
					const o = Vn.get(s || _u);
					return o && o.getToast(r);
				})(e, t);
				if (n) {
					const { props: r, content: i } = n,
						s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Bg() };
					s.toastId !== e && (s.staleId = e);
					const o = s.render || i;
					delete s.render, Xi(o, s);
				}
			}, 0);
	}),
	(K.done = e => {
		K.update(e, { progress: 1 });
	}),
	(K.onChange = e => (
		mt.on(4, e),
		() => {
			mt.off(4, e);
		}
	)),
	(K.POSITION = {
		TOP_LEFT: 'top-left',
		TOP_RIGHT: 'top-right',
		TOP_CENTER: 'top-center',
		BOTTOM_LEFT: 'bottom-left',
		BOTTOM_RIGHT: 'bottom-right',
		BOTTOM_CENTER: 'bottom-center',
	}),
	(K.TYPE = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }),
	mt
		.on(2, e => {
			(_u = e.containerId || e),
				Vn.set(_u, e),
				Fi.forEach(t => {
					mt.emit(0, t.content, t.options);
				}),
				(Fi = []);
		})
		.on(3, e => {
			Vn.delete(e.containerId || e), Vn.size === 0 && mt.off(0).off(1).off(5);
		});
function u5({ toggleModal: e }) {
	const t = lf(),
		{ mutate: n, isLoading: r } = C2(s => gf.post('/chatty', s));
	function i(s) {
		n(s, {
			onSuccess: () => {
				t.invalidateQueries([df.PROFILE, s.target_profile]), K('질문이 전송되었습니다.'), e();
			},
			onError: o => {
				var u;
				const a = o,
					l = (u = a == null ? void 0 : a.response) == null ? void 0 : u.data;
				K(l || '알수없는 오류가 발생했습니다.');
			},
		});
	}
	return { mutQuestion: i, isMutating: r };
}
function c5(e) {
	const {
		data: t,
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
	} = O2([df.ANSWERED, e], ({ pageParam: o = 1 }) => gf.get(`chatty/user/${e}?page=${o}`), {
		enabled: !!e,
		getNextPageParam: o => o.next,
		select: o => {
			var a;
			return (a = o == null ? void 0 : o.pages) == null ? void 0 : a.flatMap(l => (l == null ? void 0 : l.results));
		},
		staleTime: 0,
		cacheTime: 5e3,
	});
	function s() {
		r && n();
	}
	return { answeredQuestionsRes: t, isFetchingNextPage: i, onFetchNext: s };
}
function d5(e, t) {
	const n = C.useRef(null),
		r = C.useCallback(
			(i, s) => {
				i.forEach(o => {
					o.isIntersecting && e(o, s);
				});
			},
			[e]
		);
	return (
		C.useEffect(() => {
			if (!n.current) return;
			const i = new IntersectionObserver(r, t);
			return i.observe(n.current), () => i.disconnect();
		}, [n, t, r]),
		n
	);
}
const f5 = {
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
		left: 'M15.75 19.5L8.25 12l7.5-7.5',
		answerArrow:
			'M16 11.6571L10.5 17L9.08 15.6303L12.17 12.6286H6.5C2.91 12.6286 0 9.80171 0 6.31429V0H2V6.31429C2 8.74286 4 10.6857 6.5 10.6857H12.17L9.09 7.684L10.5 6.31429L16 11.6571Z',
	},
	Bn = ({ fillColor: e, strokeColor: t, size: n, stroke: r, icon: i, className: s, style: o }) =>
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
			children: v('path', { d: f5[i] }),
		});
function h5(e) {
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
const Fg = () => e => {
	if (navigator.clipboard)
		navigator.clipboard
			.writeText(e)
			.then(() => {
				K('클립보드에 복사되었습니다.');
			})
			.catch(() => {
				K.error('복사를 다시 시도해주세요.');
			});
	else {
		if (!document.queryCommandSupported('copy')) return K.error('복사하기가 지원되지 않는 브라우저입니다.');
		const t = document.createElement('textarea');
		(t.value = e),
			(t.style.top = '0'),
			(t.style.left = '0'),
			(t.style.position = 'fixed'),
			document.body.appendChild(t),
			t.focus(),
			t.select(),
			document.execCommand('copy'),
			document.body.removeChild(t),
			K('클립보드에 복사되었습니다.');
	}
};
function p5({ children: e }) {
	return v('div', { className: 'relative shadow-lg flex flex-col bg-white rounded-2xl p-16', children: e });
}
function m5() {
	return v('div', {
		className: 'flex flex-row items-center gap-4 mb-8',
		children: v('span', { className: 'text-pink-dark text-xs font-semibold', children: '메인체티' }),
	});
}
function _5() {
	return v(tr, {
		children: v('button', {
			className: 'absolute right-16 top-16 z-10',
			children: v(Bn, {
				size: '18px',
				fillColor: '#333333',
				strokeColor: '#333333',
				icon: 'ellipsisVertical',
				stroke: 3,
			}),
		}),
	});
}
function g5({ userId: e, isAnony: t }) {
	return L('span', {
		className: `chattyId text-xs ${t ? 'text-main-primary font-bold' : 'text-light-secondary font-normal'}`,
		children: ['@', e],
	});
}
function y5({ created_date: e }) {
	return L('div', {
		className: 'flex flex-row items-center text-light-secondary',
		children: [v('span', { className: 'mx-10', children: '·' }), v('span', { className: 'text-xs', children: h5(e) })],
	});
}
function v5({ content: e }) {
	return v('pre', { className: 'text-base font-medium text-light-primary', children: e });
}
function E5({ username: e }) {
	return v('div', { children: v('span', { className: 'font-bold text-base text-black mr-4', children: e }) });
}
function yf({ icon: e, count: t, color: n, stroke: r, onClick: i }) {
	return L('button', {
		onClick: i,
		className: 'flex flex-row items-center gap-4',
		children: [
			v(Bn, { className: 'text-base', size: '16px', icon: e, fillColor: n, stroke: r || 2.5 }),
			t &&
				v('span', {
					className: 'font-normal text-sm text-light-primary',
					children: t > 9999 ? `${parseInt(String(t / 1e3), 10)}k` : t.toLocaleString(),
				}),
		],
	});
}
function S5() {
	return v(yf, { icon: 'heart', count: 0, color: 'white' });
}
function w5() {
	return v(yf, { icon: 'bookmark', count: 0, color: 'white' });
}
function T5() {
	const e = Fg();
	return v(yf, { onClick: () => e(window.location.href), icon: 'uploadTray', color: 'white' });
}
function b5() {
	return L('div', {
		className: 'flex flex-row items-center justify-between px-28 mt-16',
		children: [v(S5, {}), v(w5, {}), v(T5, {})],
	});
}
const Ke = Object.assign(() => null, {
	Container: p5,
	Pin: m5,
	More: _5,
	UserId: g5,
	Time: y5,
	Content: v5,
	Username: E5,
	Footer: b5,
});
function R5({
	isAnony: e = !0,
	userId: t,
	created_date: n,
	content: r,
	answer_content: i,
	profile_image: s,
	username: o,
}) {
	return L(Ke.Container, {
		children: [
			v(Ke.More, {}),
			e
				? L(tr, {
						children: [
							L('div', {
								className: 'flex items-center mb-4',
								children: [
									v('span', { className: 'text-main-primary text-xs pr-4', children: 'To ' }),
									v(Ke.UserId, { userId: t, isAnony: !0 }),
								],
							}),
							v(Ke.Content, { content: r }),
						],
				  })
				: v(tr, {
						children: L('div', {
							className: 'flex ',
							children: [
								v('div', { className: 'pr-8', children: v(xc, { size: 48, src: s }) }),
								L('div', {
									className: 'flex flex-col',
									children: [
										L('div', {
											className: 'flex flex-row items-start',
											children: [
												v(Ke.Username, { username: o }),
												v(Ke.UserId, { userId: t, isAnony: !1 }),
												v(Ke.Time, { created_date: n }),
											],
										}),
										v('div', { children: v(Ke.Content, { content: r }) }),
									],
								}),
							],
						}),
				  }),
			v(tr, {
				children: L('div', {
					className: 'flex flex-row items-start mt-16',
					children: [
						v('div', {
							className: 'rotate-270 mr-8',
							children: v(Bn, { size: '1rem', icon: 'answerArrow', fillColor: '#FE7C58', strokeColor: '#FE7C58' }),
						}),
						L('div', {
							className: 'flex flex-row items-start',
							children: [
								v('div', { className: 'mr-8', children: v(xc, { size: 48, src: s }) }),
								L('div', {
									className: 'flex flex-col',
									children: [
										L('div', {
											className: 'flex flex-row items-center',
											children: [
												v(Ke.Username, { username: o }),
												v(Ke.UserId, { userId: t, isAnony: !1 }),
												v(Ke.Time, { created_date: n }),
											],
										}),
										v('div', { children: v(Ke.Content, { content: i }) }),
									],
								}),
							],
						}),
					],
				}),
			}),
			v(Ke.Footer, {}),
		],
	});
}
const k5 = ({ username: e, userId: t, profile_image: n }) => {
		const { answeredQuestionsRes: r, onFetchNext: i, isFetchingNextPage: s } = c5(e),
			o = d5(i);
		return (r == null ? void 0 : r.length) === 0
			? v(x5, { pageBottomRef: o })
			: L('ul', {
					className: 'flex flex-col gap-16 bg-background-inner py-16 px-20',
					children: [
						r == null
							? void 0
							: r.map((a, l) =>
									v(
										R5,
										{
											isAnony: !0,
											userId: t,
											username: e,
											content: a.content,
											answer_content: a.answer_content,
											created_date: a.created_date,
											profile_image: n,
										},
										l
									)
							  ),
						s && v(uf, {}),
						v('div', { ref: o }),
					],
			  });
	},
	x5 = ({ pageBottomRef: e }) => {
		const t = Fg();
		return v('ul', {
			className: 'flex flex-col items-center justify-center gap-16 y-16 px-20',
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
									onClick: () => t(window.location.href),
									className: 'linear-gradiant to-blue-500 py-12 px-16 shadow rounded-3xl',
									children: v('span', {
										className: 'font-semibold text-16 text-dark-primary',
										children: '프로필 공유하고 친구 찾기',
									}),
								}),
							],
						}),
					}),
					v('div', { ref: e }),
				],
			}),
		});
	},
	C5 = ({ icon: e, label: t, textColor: n, backgroundColor: r, onClick: i }) =>
		L('button', {
			onClick: i,
			style: { background: r },
			className:
				'absolute z-10 flex px-20 gap-4 items-center justify-center drop-shadow-xl h-48 bottom-32 right-15 rounded-[99px]',
			children: [e, v('p', { style: { color: n }, className: 'font-medium', children: t })],
		});
function N5({ isOpen: e, toggleModal: t }) {
	const { username: n = '' } = Wm(),
		[r, i] = C.useState(''),
		{ mutQuestion: s, isMutating: o } = u5({ toggleModal: t });
	function a() {
		s({ content: r, target_profile: n });
	}
	return e
		? v(mg, {
				onClick: t,
				children: L('div', {
					className:
						'popUp absolute z-40 bottom-0 left-1/2 w-screen  max-w-lg h-340 bg-white rounded-t-2xl p-20 flex flex-col gap-16 translate-x-[-50%]',
					children: [
						L('div', {
							className: 'flex justify-between items-center',
							children: [
								v('p', { className: 'font-bold text-20 text-light-primary', children: '질문 작성' }),
								v('button', {
									onClick: t,
									children: v(Bn, { size: '24px', icon: 'close', stroke: 2, strokeColor: '#333333' }),
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
								value: r,
								onChange: l => i(l.target.value),
								placeholder: `${n} 에게 질문하기`,
								maxLength: 200,
							}),
						}),
						v('button', {
							onClick: a,
							disabled: r.length === 0 || o,
							style: { opacity: r.length === 0 ? 0.8 : 1 },
							className:
								'absolute bottom-20 w-11/12 self-center h-60 bg-main-primary flex items-center justify-center rounded-2xl',
							children: v('span', {
								className: 'text-white font-normal',
								children: o ? v(uf, { color: 'white' }) : '확인',
							}),
						}),
					],
				}),
		  })
		: null;
}
function O5() {
	const { username: e = '' } = Wm(),
		{ data: t } = Jw(e),
		[n] = C.useState(0),
		[r, i] = Na(!1),
		[s, o] = Na(!1);
	function a(l) {
		l.target.textContent !== '답변 완료' && o();
	}
	return t
		? L('div', {
				className: 'w-screen h-screen overflow-x-hidden',
				children: [
					v(D2, {
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
						children: v(P2, { activeIdx: n, tabs: ['답변 완료', '새질문', '거절 질문'], onClick: a }),
					}),
					v(k5, { username: e, userId: t.profile_name, profile_image: t.profile_image }),
					v(C5, {
						icon: v(Bn, { size: '24px', icon: 'plus', stroke: 2.5, strokeColor: 'white' }),
						label: '질문하기',
						textColor: 'white',
						backgroundColor: '#FE7C58',
						onClick: i,
					}),
					v(N5, { isOpen: r, toggleModal: i }),
					v(_g, { isOpen: s, toggleModal: o }),
				],
		  })
		: null;
}
const I5 = () =>
		v(Dc, {
			position: 'bottom-center',
			autoClose: 1e3,
			hideProgressBar: !0,
			newestOnTop: !1,
			closeOnClick: !0,
			rtl: !1,
			pauseOnFocusLoss: !0,
			draggable: !0,
			closeButton: !1,
			pauseOnHover: !1,
			theme: 'dark',
			transition: o5,
			toastStyle: { borderRadius: '8px' },
			style: {
				textAlign: 'center',
				bottom: '16px',
				left: '50%',
				transform: 'translateX(-50%)',
				opacity: 0.8,
				width: '90vw',
				fontSize: '1rem',
				fontWeight: 500,
				borderRadius: '8px',
			},
		}),
	D5 = '' + new URL('Group 235-3ab5075d.png', import.meta.url).href,
	A5 = () =>
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
		});
function P5() {
	const [e, t] = Na(!1),
		n = [
			{ label: '문의하기', href: 'mailto:clyde_dev@icloud.com' },
			{ label: '채티 공식계정', href: '/chatty' },
		],
		r = 'https://apps.apple.com/kr/app/chatty/id6448687261';
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
										v(cf, { size: 32 }),
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
										v('li', { children: v('a', { href: s, target: '_blank', rel: 'noreferrer', children: i }) }, i)
									),
								}),
								L('div', {
									className: 'mobile:hidden flex items-center',
									children: [
										v('a', {
											href: r,
											target: '_blank',
											className:
												'mr-12 inline-flex items-center justify-center w-76 h-30 rounded-2xl text-12 bg-main-primary text-white',
											rel: 'noreferrer',
											children: '앱 다운로드',
										}),
										v('button', {
											onClick: t,
											children: v(Bn, {
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
								v('div', {
									className: 'mt-32',
									children: v('a', { href: r, target: '_blank', rel: 'noreferrer', children: v(A5, {}) }),
								}),
							],
						}),
						v('div', {
							className: 'relative mobile:w-500 mobile:h-500 under-mobile:w-screen under-mobile:mt-4',
							children: v('img', { src: D5, alt: 'sample image', className: 'w-auto h-auto object-contain' }),
						}),
					],
				}),
			],
		}),
	});
}
const xp = () => {
		const e = Rv(),
			t = C.useCallback(() => {
				e('/chatty');
			}, [e]),
			n = C.useCallback(() => {
				e(-1);
			}, [e]);
		return L('div', {
			className: 'flex flex-col gap-8 w-screen h-screen justify-center items-center',
			children: [
				v('div', {
					className: 'icon',
					children: v(Bn, {
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
				L('button', {
					onClick: t,
					className: 'absolute bottom-80 flex items-center gap-4 text-light-secondary',
					children: [
						v(Bn, { size: '16px', icon: 'left', fillColor: 'white', stroke: 2, strokeColor: '#999999' }),
						v('span', { className: 'pt-3', children: 'Chatty 공식계정으로 이동' }),
					],
				}),
				v('button', {
					onClick: n,
					className: 'absolute bottom-10 self-center bg-main-primary rounded-2xl w-10/12 h-60',
					children: v('span', { className: 'text-white font-medium', children: '이전으로' }),
				}),
			],
		});
	},
	zg = Object.prototype.toString;
function vf(e) {
	switch (zg.call(e)) {
		case '[object Error]':
		case '[object Exception]':
		case '[object DOMException]':
			return !0;
		default:
			return zn(e, Error);
	}
}
function Si(e, t) {
	return zg.call(e) === `[object ${t}]`;
}
function $g(e) {
	return Si(e, 'ErrorEvent');
}
function Cp(e) {
	return Si(e, 'DOMError');
}
function L5(e) {
	return Si(e, 'DOMException');
}
function Fn(e) {
	return Si(e, 'String');
}
function Hg(e) {
	return e === null || (typeof e != 'object' && typeof e != 'function');
}
function si(e) {
	return Si(e, 'Object');
}
function Ef(e) {
	return typeof Event < 'u' && zn(e, Event);
}
function M5(e) {
	return typeof Element < 'u' && zn(e, Element);
}
function U5(e) {
	return Si(e, 'RegExp');
}
function Sf(e) {
	return !!(e && e.then && typeof e.then == 'function');
}
function B5(e) {
	return si(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e;
}
function jg(e) {
	return typeof e == 'number' && e !== e;
}
function zn(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
function go(e) {
	return e && e.Math == Math ? e : void 0;
}
const rt =
	(typeof globalThis == 'object' && go(globalThis)) ||
	(typeof window == 'object' && go(window)) ||
	(typeof self == 'object' && go(self)) ||
	(typeof global == 'object' && go(global)) ||
	(function () {
		return this;
	})() ||
	{};
function js() {
	return rt;
}
function wf(e, t, n) {
	const r = n || rt,
		i = (r.__SENTRY__ = r.__SENTRY__ || {});
	return i[e] || (i[e] = t());
}
const Ko = js(),
	F5 = 80;
function hr(e, t = {}) {
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
			d = (!Array.isArray(t) && t.maxStringLength) || F5;
		for (; n && s++ < r && ((u = z5(n, c)), !(u === 'html' || (s > 1 && o + i.length * l + u.length >= d))); )
			i.push(u), (o += u.length), (n = n.parentNode);
		return i.reverse().join(a);
	} catch {
		return '<unknown>';
	}
}
function z5(e, t) {
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
	else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && Fn(i)))
		for (s = i.split(/\s+/), l = 0; l < s.length; l++) r.push(`.${s[l]}`);
	const c = ['aria-label', 'type', 'name', 'title', 'alt'];
	for (l = 0; l < c.length; l++) (o = c[l]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`);
	return r.join('');
}
function $5() {
	try {
		return Ko.document.location.href;
	} catch {
		return '';
	}
}
function H5(e) {
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
const j5 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function G5(e) {
	return e === 'http' || e === 'https';
}
function Gs(e, t = !1) {
	const { host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: l } = e;
	return `${a}://${l}${t && i ? `:${i}` : ''}@${n}${s ? `:${s}` : ''}/${r && `${r}/`}${o}`;
}
function Y5(e) {
	const t = j5.exec(e);
	if (!t) throw new He(`Invalid Sentry Dsn: ${e}`);
	const [n, r, i = '', s, o = '', a] = t.slice(1);
	let l = '',
		u = a;
	const c = u.split('/');
	if ((c.length > 1 && ((l = c.slice(0, -1).join('/')), (u = c.pop())), u)) {
		const d = u.match(/^\d+/);
		d && (u = d[0]);
	}
	return Gg({ host: s, pass: i, path: l, projectId: u, port: o, protocol: n, publicKey: r });
}
function Gg(e) {
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
function W5(e) {
	if (!(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__)) return;
	const { port: t, projectId: n, protocol: r } = e;
	if (
		(['protocol', 'publicKey', 'host', 'projectId'].forEach(s => {
			if (!e[s]) throw new He(`Invalid Sentry Dsn: ${s} missing`);
		}),
		!n.match(/^\d+$/))
	)
		throw new He(`Invalid Sentry Dsn: Invalid projectId ${n}`);
	if (!G5(r)) throw new He(`Invalid Sentry Dsn: Invalid protocol ${r}`);
	if (t && isNaN(parseInt(t, 10))) throw new He(`Invalid Sentry Dsn: Invalid port ${t}`);
	return !0;
}
function Yg(e) {
	const t = typeof e == 'string' ? Y5(e) : Gg(e);
	return W5(t), t;
}
const q5 = 'Sentry Logger ',
	Da = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];
function Wg(e) {
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
function Np() {
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
							Wg(() => {
								rt.console[n](`${q5}[${n}]:`, ...r);
							});
					};
			  })
			: Da.forEach(n => {
					t[n] = () => {};
			  }),
		t
	);
}
let x;
typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__ ? (x = wf('logger', Np)) : (x = Np());
function Ji(e, t = 0) {
	return typeof e != 'string' || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function Op(e, t) {
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
function V5(e, t, n = !1) {
	return Fn(e) ? (U5(t) ? t.test(e) : Fn(t) ? (n ? e === t : e.includes(t)) : !1) : !1;
}
function wi(e, t = [], n = !1) {
	return t.some(r => V5(e, r, n));
}
function Me(e, t, n) {
	if (!(t in e)) return;
	const r = e[t],
		i = n(r);
	if (typeof i == 'function')
		try {
			qg(i, r);
		} catch {}
	e[t] = i;
}
function Tf(e, t, n) {
	Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
}
function qg(e, t) {
	const n = t.prototype || {};
	(e.prototype = t.prototype = n), Tf(e, '__sentry_original__', t);
}
function bf(e) {
	return e.__sentry_original__;
}
function Q5(e) {
	return Object.keys(e)
		.map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
		.join('&');
}
function Vg(e) {
	if (vf(e)) return { message: e.message, name: e.name, stack: e.stack, ...Dp(e) };
	if (Ef(e)) {
		const t = { type: e.type, target: Ip(e.target), currentTarget: Ip(e.currentTarget), ...Dp(e) };
		return typeof CustomEvent < 'u' && zn(e, CustomEvent) && (t.detail = e.detail), t;
	} else return e;
}
function Ip(e) {
	try {
		return M5(e) ? hr(e) : Object.prototype.toString.call(e);
	} catch {
		return '<unknown>';
	}
}
function Dp(e) {
	if (typeof e == 'object' && e !== null) {
		const t = {};
		for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t;
	} else return {};
}
function K5(e, t = 40) {
	const n = Object.keys(Vg(e));
	if ((n.sort(), !n.length)) return '[object has no keys]';
	if (n[0].length >= t) return Ji(n[0], t);
	for (let r = n.length; r > 0; r--) {
		const i = n.slice(0, r).join(', ');
		if (!(i.length > t)) return r === n.length ? i : Ji(i, t);
	}
	return '';
}
function Yt(e) {
	return Ac(e, new Map());
}
function Ac(e, t) {
	if (si(e)) {
		const n = t.get(e);
		if (n !== void 0) return n;
		const r = {};
		t.set(e, r);
		for (const i of Object.keys(e)) typeof e[i] < 'u' && (r[i] = Ac(e[i], t));
		return r;
	}
	if (Array.isArray(e)) {
		const n = t.get(e);
		if (n !== void 0) return n;
		const r = [];
		return (
			t.set(e, r),
			e.forEach(i => {
				r.push(Ac(i, t));
			}),
			r
		);
	}
	return e;
}
const Qg = 50,
	Ap = /\(error: (.*)\)/;
function Kg(...e) {
	const t = e.sort((n, r) => n[0] - r[0]).map(n => n[1]);
	return (n, r = 0) => {
		const i = [],
			s = n.split(`
`);
		for (let o = r; o < s.length; o++) {
			const a = s[o];
			if (a.length > 1024) continue;
			const l = Ap.test(a) ? a.replace(Ap, '$1') : a;
			if (!l.match(/\S*Error: /)) {
				for (const u of t) {
					const c = u(l);
					if (c) {
						i.push(c);
						break;
					}
				}
				if (i.length >= Qg) break;
			}
		}
		return X5(i);
	};
}
function Z5(e) {
	return Array.isArray(e) ? Kg(...e) : e;
}
function X5(e) {
	if (!e.length) return [];
	const t = e.slice(0, Qg),
		n = t[t.length - 1].function;
	n && /sentryWrapped/.test(n) && t.pop(), t.reverse();
	const r = t[t.length - 1].function;
	return (
		r && /captureMessage|captureException/.test(r) && t.pop(),
		t.map(i => ({ ...i, filename: i.filename || t[t.length - 1].filename, function: i.function || '?' }))
	);
}
const gu = '<anonymous>';
function $n(e) {
	try {
		return !e || typeof e != 'function' ? gu : e.name || gu;
	} catch {
		return gu;
	}
}
const Pc = js();
function Zg() {
	if (!('fetch' in Pc)) return !1;
	try {
		return new Headers(), new Request('http://www.example.com'), new Response(), !0;
	} catch {
		return !1;
	}
}
function Lc(e) {
	return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function J5() {
	if (!Zg()) return !1;
	if (Lc(Pc.fetch)) return !0;
	let e = !1;
	const t = Pc.document;
	if (t && typeof t.createElement == 'function')
		try {
			const n = t.createElement('iframe');
			(n.hidden = !0),
				t.head.appendChild(n),
				n.contentWindow && n.contentWindow.fetch && (e = Lc(n.contentWindow.fetch)),
				t.head.removeChild(n);
		} catch (n) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', n);
		}
	return e;
}
const yo = js();
function e3() {
	const e = yo.chrome,
		t = e && e.app && e.app.runtime,
		n = 'history' in yo && !!yo.history.pushState && !!yo.history.replaceState;
	return !t && n;
}
const de = js(),
	bn = '__sentry_xhr_v2__',
	es = {},
	Pp = {};
function t3(e) {
	if (!Pp[e])
		switch (((Pp[e] = !0), e)) {
			case 'console':
				n3();
				break;
			case 'dom':
				c3();
				break;
			case 'xhr':
				s3();
				break;
			case 'fetch':
				r3();
				break;
			case 'history':
				o3();
				break;
			case 'error':
				d3();
				break;
			case 'unhandledrejection':
				f3();
				break;
			default:
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.warn('unknown instrumentation type:', e);
				return;
		}
}
function Le(e, t) {
	(es[e] = es[e] || []), es[e].push(t), t3(e);
}
function Pt(e, t) {
	if (!(!e || !es[e]))
		for (const n of es[e] || [])
			try {
				n(t);
			} catch (r) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.error(
						`Error while triggering instrumentation handler.
Type: ${e}
Name: ${$n(n)}
Error:`,
						r
					);
			}
}
function n3() {
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
function r3() {
	J5() &&
		Me(de, 'fetch', function (e) {
			return function (...t) {
				const { method: n, url: r } = i3(t),
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
function Mc(e, t) {
	return !!e && typeof e == 'object' && !!e[t];
}
function Lp(e) {
	return typeof e == 'string' ? e : e ? (Mc(e, 'url') ? e.url : e.toString ? e.toString() : '') : '';
}
function i3(e) {
	if (e.length === 0) return { method: 'GET', url: '' };
	if (e.length === 2) {
		const [n, r] = e;
		return { url: Lp(n), method: Mc(r, 'method') ? String(r.method).toUpperCase() : 'GET' };
	}
	const t = e[0];
	return { url: Lp(t), method: Mc(t, 'method') ? String(t.method).toUpperCase() : 'GET' };
}
function s3() {
	if (!('XMLHttpRequest' in de)) return;
	const e = XMLHttpRequest.prototype;
	Me(e, 'open', function (t) {
		return function (...n) {
			const r = n[1],
				i = (this[bn] = { method: Fn(n[0]) ? n[0].toUpperCase() : n[0], url: n[1], request_headers: {} });
			Fn(r) && i.method === 'POST' && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
			const s = () => {
				const o = this[bn];
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
							c = this[bn];
						return c && (c.request_headers[l.toLowerCase()] = u), o.apply(this, a);
					};
				}),
				t.apply(this, n)
			);
		};
	}),
		Me(e, 'send', function (t) {
			return function (...n) {
				const r = this[bn];
				return (
					r && n[0] !== void 0 && (r.body = n[0]),
					Pt('xhr', { args: n, startTimestamp: Date.now(), xhr: this }),
					t.apply(this, n)
				);
			};
		});
}
let vo;
function o3() {
	if (!e3()) return;
	const e = de.onpopstate;
	de.onpopstate = function (...n) {
		const r = de.location.href,
			i = vo;
		if (((vo = r), Pt('history', { from: i, to: r }), e))
			try {
				return e.apply(this, n);
			} catch {}
	};
	function t(n) {
		return function (...r) {
			const i = r.length > 2 ? r[2] : void 0;
			if (i) {
				const s = vo,
					o = String(i);
				(vo = o), Pt('history', { from: s, to: o });
			}
			return n.apply(this, r);
		};
	}
	Me(de.history, 'pushState', t), Me(de.history, 'replaceState', t);
}
const a3 = 1e3;
let Eo, So;
function l3(e, t) {
	if (!e || e.type !== t.type) return !0;
	try {
		if (e.target !== t.target) return !0;
	} catch {}
	return !1;
}
function u3(e) {
	if (e.type !== 'keypress') return !1;
	try {
		const t = e.target;
		if (!t || !t.tagName) return !0;
		if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return !1;
	} catch {}
	return !0;
}
function Mp(e, t = !1) {
	return n => {
		if (!n || So === n || u3(n)) return;
		const r = n.type === 'keypress' ? 'input' : n.type;
		Eo === void 0
			? (e({ event: n, name: r, global: t }), (So = n))
			: l3(So, n) && (e({ event: n, name: r, global: t }), (So = n)),
			clearTimeout(Eo),
			(Eo = de.setTimeout(() => {
				Eo = void 0;
			}, a3));
	};
}
function c3() {
	if (!('document' in de)) return;
	const e = Pt.bind(null, 'dom'),
		t = Mp(e, !0);
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
									const d = Mp(e);
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
let wo = null;
function d3() {
	(wo = de.onerror),
		(de.onerror = function (e, t, n, r, i) {
			return (
				Pt('error', { column: r, error: i, line: n, msg: e, url: t }),
				wo && !wo.__SENTRY_LOADER__ ? wo.apply(this, arguments) : !1
			);
		}),
		(de.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let To = null;
function f3() {
	(To = de.onunhandledrejection),
		(de.onunhandledrejection = function (e) {
			return Pt('unhandledrejection', e), To && !To.__SENTRY_LOADER__ ? To.apply(this, arguments) : !0;
		}),
		(de.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function h3() {
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
function Xg(e) {
	return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function vn(e) {
	const { message: t, event_id: n } = e;
	if (t) return t;
	const r = Xg(e);
	return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || '<unknown>') : n || '<unknown>';
}
function Uc(e, t, n) {
	const r = (e.exception = e.exception || {}),
		i = (r.values = r.values || []),
		s = (i[0] = i[0] || {});
	s.value || (s.value = t || ''), s.type || (s.type = n || 'Error');
}
function ks(e, t) {
	const n = Xg(e);
	if (!n) return;
	const r = { type: 'generic', handled: !0 },
		i = n.mechanism;
	if (((n.mechanism = { ...r, ...i, ...t }), t && 'data' in t)) {
		const s = { ...(i && i.data), ...t.data };
		n.mechanism.data = s;
	}
}
function Up(e) {
	if (e && e.__sentry_captured__) return !0;
	try {
		Tf(e, '__sentry_captured__', !0);
	} catch {}
	return !1;
}
function Jg(e) {
	return Array.isArray(e) ? e : [e];
}
function p3() {
	return typeof __SENTRY_BROWSER_BUNDLE__ < 'u' && !!__SENTRY_BROWSER_BUNDLE__;
}
function m3() {
	return 'npm';
}
function e1() {
	return !p3() && Object.prototype.toString.call(typeof process < 'u' ? process : 0) === '[object process]';
}
function _3(e, t) {
	return e.require(t);
}
function zt(e, t = 100, n = 1 / 0) {
	try {
		return Bc('', e, t, n);
	} catch (r) {
		return { ERROR: `**non-serializable** (${r})` };
	}
}
function t1(e, t = 3, n = 100 * 1024) {
	const r = zt(e, t);
	return E3(r) > n ? t1(e, t - 1, n) : r;
}
function Bc(e, t, n = 1 / 0, r = 1 / 0, i = h3()) {
	const [s, o] = i;
	if (t == null || (['number', 'boolean', 'string'].includes(typeof t) && !jg(t))) return t;
	const a = g3(e, t);
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
			return Bc('', f, l - 1, r, i);
		} catch {}
	const c = Array.isArray(t) ? [] : {};
	let d = 0;
	const h = Vg(t);
	for (const f in h) {
		if (!Object.prototype.hasOwnProperty.call(h, f)) continue;
		if (d >= r) {
			c[f] = '[MaxProperties ~]';
			break;
		}
		const _ = h[f];
		(c[f] = Bc(f, _, l - 1, r, i)), d++;
	}
	return o(t), c;
}
function g3(e, t) {
	try {
		if (e === 'domain' && t && typeof t == 'object' && t._events) return '[Domain]';
		if (e === 'domainEmitter') return '[DomainEmitter]';
		if (typeof global < 'u' && t === global) return '[Global]';
		if (typeof window < 'u' && t === window) return '[Window]';
		if (typeof document < 'u' && t === document) return '[Document]';
		if (B5(t)) return '[SyntheticEvent]';
		if (typeof t == 'number' && t !== t) return '[NaN]';
		if (typeof t == 'function') return `[Function: ${$n(t)}]`;
		if (typeof t == 'symbol') return `[${String(t)}]`;
		if (typeof t == 'bigint') return `[BigInt: ${String(t)}]`;
		const n = y3(t);
		return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
	} catch (n) {
		return `**non-serializable** (${n})`;
	}
}
function y3(e) {
	const t = Object.getPrototypeOf(e);
	return t ? t.constructor.name : 'null prototype';
}
function v3(e) {
	return ~-encodeURI(e).split(/%..|./).length;
}
function E3(e) {
	return v3(JSON.stringify(e));
}
var Vt;
(function (e) {
	e[(e.PENDING = 0)] = 'PENDING';
	const n = 1;
	e[(e.RESOLVED = n)] = 'RESOLVED';
	const r = 2;
	e[(e.REJECTED = r)] = 'REJECTED';
})(Vt || (Vt = {}));
function pr(e) {
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
				if (Sf(n)) {
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
function S3(e) {
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
				pr(d).then(() => {
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
const w3 = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
function T3(e) {
	return e === 'warn' ? 'warning' : w3.includes(e) ? e : 'log';
}
const n1 = js(),
	Fc = { nowSeconds: () => Date.now() / 1e3 };
function b3() {
	const { performance: e } = n1;
	if (!e || !e.now) return;
	const t = Date.now() - e.now();
	return { now: () => e.now(), timeOrigin: t };
}
function R3() {
	try {
		return _3(module, 'perf_hooks').performance;
	} catch {
		return;
	}
}
const vu = e1() ? R3() : b3(),
	Bp = vu === void 0 ? Fc : { nowSeconds: () => (vu.timeOrigin + vu.now()) / 1e3 },
	ml = Fc.nowSeconds.bind(Fc),
	mr = Bp.nowSeconds.bind(Bp),
	ln = (() => {
		const { performance: e } = n1;
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
	k3 = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function x3(e) {
	const t = e.match(k3);
	if (!e || !t) return;
	let n;
	return t[3] === '1' ? (n = !0) : t[3] === '0' && (n = !1), { traceId: t[1], parentSampled: n, parentSpanId: t[2] };
}
function Ti(e, t = []) {
	return [e, t];
}
function C3(e, t) {
	const [n, r] = e;
	return [n, [...r, t]];
}
function Fp(e, t) {
	const n = e[1];
	for (const r of n) {
		const i = r[0].type;
		if (t(r, i)) return !0;
	}
	return !1;
}
function zc(e, t) {
	return (t || new TextEncoder()).encode(e);
}
function N3(e, t) {
	const [n, r] = e;
	let i = JSON.stringify(n);
	function s(o) {
		typeof i == 'string'
			? (i = typeof o == 'string' ? i + o : [zc(i, t), o])
			: i.push(typeof o == 'string' ? zc(o, t) : o);
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
	return typeof i == 'string' ? i : O3(i);
}
function O3(e) {
	const t = e.reduce((i, s) => i + s.length, 0),
		n = new Uint8Array(t);
	let r = 0;
	for (const i of e) n.set(i, r), (r += i.length);
	return n;
}
function I3(e, t) {
	const n = typeof e.data == 'string' ? zc(e.data, t) : e.data;
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
const D3 = {
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
function zp(e) {
	return D3[e];
}
function Rf(e) {
	if (!e || !e.sdk) return;
	const { name: t, version: n } = e.sdk;
	return { name: t, version: n };
}
function r1(e, t, n, r) {
	const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
	return {
		event_id: e.event_id,
		sent_at: new Date().toISOString(),
		...(t && { sdk: t }),
		...(!!n && { dsn: Gs(r) }),
		...(i && { trace: Yt({ ...i }) }),
	};
}
function A3(e, t, n) {
	const r = [{ type: 'client_report' }, { timestamp: n || ml(), discarded_events: e }];
	return Ti(t ? { dsn: t } : {}, [r]);
}
const P3 = 60 * 1e3;
function L3(e, t = Date.now()) {
	const n = parseInt(`${e}`, 10);
	if (!isNaN(n)) return n * 1e3;
	const r = Date.parse(`${e}`);
	return isNaN(r) ? P3 : r - t;
}
function M3(e, t) {
	return e[t] || e.all || 0;
}
function U3(e, t, n = Date.now()) {
	return M3(e, t) > n;
}
function B3(e, { statusCode: t, headers: n }, r = Date.now()) {
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
	else o ? (i.all = r + L3(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
	return i;
}
const $c = 'baggage',
	i1 = 'sentry-',
	F3 = /^sentry-/,
	z3 = 8192;
function $3(e) {
	if (!Fn(e) && !Array.isArray(e)) return;
	let t = {};
	if (Array.isArray(e))
		t = e.reduce((r, i) => {
			const s = $p(i);
			return { ...r, ...s };
		}, {});
	else {
		if (!e) return;
		t = $p(e);
	}
	const n = Object.entries(t).reduce((r, [i, s]) => {
		if (i.match(F3)) {
			const o = i.slice(i1.length);
			r[o] = s;
		}
		return r;
	}, {});
	if (Object.keys(n).length > 0) return n;
}
function s1(e) {
	const t = Object.entries(e).reduce((n, [r, i]) => (i && (n[`${i1}${r}`] = i), n), {});
	return H3(t);
}
function $p(e) {
	return e
		.split(',')
		.map(t => t.split('=').map(n => decodeURIComponent(n.trim())))
		.reduce((t, [n, r]) => ((t[n] = r), t), {});
}
function H3(e) {
	if (Object.keys(e).length !== 0)
		return Object.entries(e).reduce((t, [n, r], i) => {
			const s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
				o = i === 0 ? s : `${t},${s}`;
			return o.length > z3
				? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						x.warn(`Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`),
				  t)
				: o;
		}, '');
}
const kf = 'production';
function j3(e) {
	const t = mr(),
		n = {
			sid: nn(),
			init: !0,
			timestamp: t,
			started: t,
			duration: 0,
			status: 'ok',
			errors: 0,
			ignoreDuration: !1,
			toJSON: () => Y3(n),
		};
	return e && oi(n, e), n;
}
function oi(e, t = {}) {
	if (
		(t.user &&
			(!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
			!e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
		(e.timestamp = t.timestamp || mr()),
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
function G3(e, t) {
	let n = {};
	t ? (n = { status: t }) : e.status === 'ok' && (n = { status: 'exited' }), oi(e, n);
}
function Y3(e) {
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
const W3 = 100;
class sr {
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
		const n = new sr();
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
		return (this._user = t || {}), this._session && oi(this._session, { user: t }), this._notifyScopeListeners(), this;
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
			return n instanceof sr ? n : this;
		}
		return (
			t instanceof sr
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
		const r = typeof n == 'number' ? n : W3;
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
				t.sdkProcessingMetadata = { dynamicSamplingContext: r.getDynamicSamplingContext(), ...t.sdkProcessingMetadata };
				const i = r.name;
				i && (t.tags = { transaction: i, ...t.tags });
			}
		}
		return (
			this._applyFingerprint(t),
			(t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
			(t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
			(t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...this._sdkProcessingMetadata }),
			this._notifyEventProcessors([...o1(), ...this._eventProcessors], t, n)
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
					x.log(`Event processor "${a.id}" dropped event`),
					Sf(l)
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
		(t.fingerprint = t.fingerprint ? Jg(t.fingerprint) : []),
			this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
			t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
	}
}
function o1() {
	return wf('globalEventProcessors', () => []);
}
function _l(e) {
	o1().push(e);
}
const a1 = 4,
	q3 = 100;
class l1 {
	constructor(t, n = new sr(), r = a1) {
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
		const t = sr.clone(this.getScope());
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
		const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = q3 } = (i.getOptions && i.getOptions()) || {};
		if (o <= 0) return;
		const l = { timestamp: ml(), ...t },
			u = s ? Wg(() => s(l, n)) : l;
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
		const n = Hp(this);
		try {
			t(this);
		} finally {
			Hp(n);
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
					x.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
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
		r && G3(r), this._sendSessionUpdate(), n.setSession();
	}
	startSession(t) {
		const { scope: n, client: r } = this.getStackTop(),
			{ release: i, environment: s = kf } = (r && r.getOptions()) || {},
			{ userAgent: o } = rt.navigator || {},
			a = j3({ release: i, environment: s, user: n.getUser(), ...(o && { userAgent: o }), ...t }),
			l = n.getSession && n.getSession();
		return l && l.status === 'ok' && oi(l, { status: 'exited' }), this.endSession(), n.setSession(a), a;
	}
	shouldSendDefaultPii() {
		const t = this.getClient(),
			n = t && t.getOptions();
		return !!(n && n.sendDefaultPii);
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
		const i = Ys().__SENTRY__;
		if (i && i.extensions && typeof i.extensions[t] == 'function') return i.extensions[t].apply(this, n);
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.warn(`Extension method ${t} couldn't be found, doing nothing.`);
	}
}
function Ys() {
	return (rt.__SENTRY__ = rt.__SENTRY__ || { extensions: {}, hub: void 0 }), rt;
}
function Hp(e) {
	const t = Ys(),
		n = Hc(t);
	return u1(t, e), n;
}
function $() {
	const e = Ys();
	if (e.__SENTRY__ && e.__SENTRY__.acs) {
		const t = e.__SENTRY__.acs.getCurrentHub();
		if (t) return t;
	}
	return V3(e);
}
function V3(e = Ys()) {
	return (!Q3(e) || Hc(e).isOlderThan(a1)) && u1(e, new l1()), Hc(e);
}
function Q3(e) {
	return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function Hc(e) {
	return wf('hub', () => new l1(), e);
}
function u1(e, t) {
	if (!e) return !1;
	const n = (e.__SENTRY__ = e.__SENTRY__ || {});
	return (n.hub = t), !0;
}
function xf(e) {
	if (typeof __SENTRY_TRACING__ == 'boolean' && !__SENTRY_TRACING__) return !1;
	const t = $().getClient(),
		n = e || (t && t.getOptions());
	return !!n && (n.enableTracing || 'tracesSampleRate' in n || 'tracesSampler' in n);
}
function Ws(e) {
	return (e || $()).getScope().getTransaction();
}
let jp = !1;
function K3() {
	jp || ((jp = !0), Le('error', jc), Le('unhandledrejection', jc));
}
function jc() {
	const e = Ws();
	if (e) {
		const t = 'internal_error';
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`[Tracing] Transaction: ${t} -> Global error occured`),
			e.setStatus(t);
	}
}
jc.tag = 'sentry_tracingErrorCallback';
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
		this.startTimestamp = mr();
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
			(n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: o }), x.log(o);
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
		const n = Z3(t);
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
			n && x.log(n.replace('Starting', 'Finishing'));
		}
		this.endTimestamp = typeof t == 'number' ? t : mr();
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
function Z3(e) {
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
				x.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
			(this.name = '<unlabeled transaction>')),
			super.finish(t);
		const n = this._hub.getClient();
		if ((n && n.emit && n.emit('finishTransaction', this), this.sampled !== !0)) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'),
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
					x.log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, void 0, 2)),
				(s.measurements = this._measurements)),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
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
				environment: r || kf,
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
	X3 = 'finishReason',
	Sr = ['heartbeatFailed', 'idleTimeout', 'documentHidden', 'finalTimeout', 'externalFinish', 'cancelled'];
class J3 extends gl {
	constructor(t, n, r, i) {
		super(i), (this._pushActivity = t), (this._popActivity = n), (this.transactionSpanId = r);
	}
	add(t) {
		t.spanId !== this.transactionSpanId &&
			((t.finish = n => {
				(t.endTimestamp = typeof n == 'number' ? n : mr()), this._popActivity(t.spanId);
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
					x.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
				n.configureScope(a => a.setSpan(this))),
			this._restartIdleTimeout(),
			setTimeout(() => {
				this._finished || (this.setStatus('deadline_exceeded'), (this._finishReason = Sr[3]), this.finish());
			}, this._finalTimeout);
	}
	finish(t = mr()) {
		if (
			((this._finished = !0),
			(this.activities = {}),
			this.op === 'ui.action.click' && this.setTag(X3, this._finishReason),
			this.spanRecorder)
		) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log('[Tracing] finishing IdleTransaction', new Date(t * 1e3).toISOString(), this.op);
			for (const n of this._beforeFinishCallbacks) n(this, t);
			(this.spanRecorder.spans = this.spanRecorder.spans.filter(n => {
				if (n.spanId === this.spanId) return !0;
				n.endTimestamp ||
					((n.endTimestamp = t),
					n.setStatus('cancelled'),
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						x.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(n, void 0, 2)));
				const r = n.startTimestamp < t;
				return (
					r ||
						((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							x.log(
								'[Tracing] discarding Span since it happened after Transaction was finished',
								JSON.stringify(n, void 0, 2)
							)),
					r
				);
			})),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Tracing] flushing IdleTransaction');
		} else (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Tracing] No active IdleTransaction');
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
			(this.spanRecorder = new J3(n, r, this.spanId, t)),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('Starting heartbeat'),
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
				!this._finished && Object.keys(this.activities).length === 0 && ((this._finishReason = Sr[1]), this.finish(t));
			}, this._idleTimeout));
	}
	_pushActivity(t) {
		this.cancelIdleTimeout(void 0, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently }),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`[Tracing] pushActivity: ${t}`),
			(this.activities[t] = !0),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log('[Tracing] new activities count', Object.keys(this.activities).length);
	}
	_popActivity(t) {
		if (
			(this.activities[t] &&
				((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`[Tracing] popActivity ${t}`),
				delete this.activities[t],
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.log('[Tracing] new activities count', Object.keys(this.activities).length)),
			Object.keys(this.activities).length === 0)
		) {
			const n = mr();
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
						x.log('[Tracing] Transaction finished because of no change for 3 heart beats'),
				  this.setStatus('deadline_exceeded'),
				  (this._finishReason = Sr[0]),
				  this.finish())
				: this._pingHeartbeat();
	}
	_pingHeartbeat() {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
			setTimeout(() => {
				this._beat();
			}, this._heartbeatInterval);
	}
}
function eT() {
	const t = this.getScope().getSpan();
	return t ? { 'sentry-trace': t.toTraceparent() } : {};
}
function c1(e, t, n) {
	if (!xf(t)) return (e.sampled = !1), e;
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
		tT(r)
			? r
				? ((e.sampled = Math.random() < r),
				  e.sampled
						? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								x.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
						  e)
						: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								x.log(
									`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
										r
									)})`
								),
						  e))
				: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						x.log(
							`[Tracing] Discarding transaction because ${
								typeof t.tracesSampler == 'function'
									? 'tracesSampler returned 0 or false'
									: 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
							}`
						),
				  (e.sampled = !1),
				  e)
			: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.warn('[Tracing] Discarding transaction because of invalid sample rate.'),
			  (e.sampled = !1),
			  e)
	);
}
function tT(e) {
	return jg(e) || !(typeof e == 'number' || typeof e == 'boolean')
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(
					`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
						e
					)} of type ${JSON.stringify(typeof e)}.`
				),
		  !1)
		: e < 0 || e > 1
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
		  !1)
		: !0;
}
function nT(e, t) {
	const n = this.getClient(),
		r = (n && n.getOptions()) || {},
		i = r.instrumenter || 'sentry',
		s = e.instrumenter || 'sentry';
	i !== s &&
		((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
		(e.sampled = !1));
	let o = new Yr(e, this);
	return (
		(o = c1(o, r, { parentSampled: e.parentSampled, transactionContext: e, ...t })),
		o.sampled && o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
		n && n.emit && n.emit('startTransaction', o),
		o
	);
}
function Gp(e, t, n, r, i, s, o) {
	const a = e.getClient(),
		l = (a && a.getOptions()) || {};
	let u = new _n(t, e, n, r, o, i);
	return (
		(u = c1(u, l, { parentSampled: t.parentSampled, transactionContext: t, ...s })),
		u.sampled && u.initSpanRecorder(l._experiments && l._experiments.maxSpans),
		a && a.emit && a.emit('startTransaction', u),
		u
	);
}
function rT() {
	const e = Ys();
	e.__SENTRY__ &&
		((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
		e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = nT),
		e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = eT),
		K3());
}
function yl(e, t) {
	return $().captureException(e, { captureContext: t });
}
function iT(e) {
	$().addBreadcrumb(e);
}
function sT(e, t) {
	$().setContext(e, t);
}
function d1(e) {
	$().withScope(e);
}
const oT = '7';
function f1(e) {
	const t = e.protocol ? `${e.protocol}:` : '',
		n = e.port ? `:${e.port}` : '';
	return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ''}/api/`;
}
function aT(e) {
	return `${f1(e)}${e.projectId}/envelope/`;
}
function lT(e, t) {
	return Q5({ sentry_key: e.publicKey, sentry_version: oT, ...(t && { sentry_client: `${t.name}/${t.version}` }) });
}
function uT(e, t = {}) {
	const n = typeof t == 'string' ? t : t.tunnel,
		r = typeof t == 'string' || !t._metadata ? void 0 : t._metadata.sdk;
	return n || `${aT(e)}?${lT(e, r)}`;
}
function cT(e, t) {
	const n = Yg(e),
		r = `${f1(n)}embed/error-page/`;
	let i = `dsn=${Gs(n)}`;
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
function dT(e, t) {
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
function fT(e, t, n, r) {
	const i = Rf(n),
		s = { sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && { dsn: Gs(t) }) },
		o = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e];
	return Ti(s, [o]);
}
function hT(e, t, n, r) {
	const i = Rf(n),
		s = e.type && e.type !== 'replay_event' ? e.type : 'event';
	dT(e, n && n.sdk);
	const o = r1(e, i, r, t);
	return delete e.sdkProcessingMetadata, Ti(o, [[{ type: s }, e]]);
}
const Yp = [];
function pT(e) {
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
function mT(e) {
	const t = e.defaultIntegrations || [],
		n = e.integrations;
	t.forEach(o => {
		o.isDefaultInstance = !0;
	});
	let r;
	Array.isArray(n) ? (r = [...t, ...n]) : typeof n == 'function' ? (r = Jg(n(t))) : (r = t);
	const i = pT(r),
		s = gT(i, o => o.name === 'Debug');
	if (s !== -1) {
		const [o] = i.splice(s, 1);
		i.push(o);
	}
	return i;
}
function _T(e) {
	const t = {};
	return (
		e.forEach(n => {
			n && h1(n, t);
		}),
		t
	);
}
function h1(e, t) {
	(t[e.name] = e),
		Yp.indexOf(e.name) === -1 &&
			(e.setupOnce(_l, $),
			Yp.push(e.name),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`Integration installed: ${e.name}`));
}
function gT(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
	return -1;
}
function p1(e, t, n, r) {
	const { normalizeDepth: i = 3, normalizeMaxBreadth: s = 1e3 } = e,
		o = { ...t, event_id: t.event_id || n.event_id || nn(), timestamp: t.timestamp || ml() },
		a = n.integrations || e.integrations.map(c => c.name);
	yT(o, e), ET(o, a), t.type === void 0 && vT(o, e.stackParser);
	let l = r;
	n.captureContext && (l = sr.clone(l).update(n.captureContext));
	let u = pr(o);
	if (l) {
		if (l.getAttachments) {
			const c = [...(n.attachments || []), ...l.getAttachments()];
			c.length && (n.attachments = c);
		}
		u = l.applyToEvent(o, n);
	}
	return u.then(c => (typeof i == 'number' && i > 0 ? ST(c, i, s) : c));
}
function yT(e, t) {
	const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = t;
	'environment' in e || (e.environment = 'environment' in t ? n : kf),
		e.release === void 0 && r !== void 0 && (e.release = r),
		e.dist === void 0 && i !== void 0 && (e.dist = i),
		e.message && (e.message = Ji(e.message, s));
	const o = e.exception && e.exception.values && e.exception.values[0];
	o && o.value && (o.value = Ji(o.value, s));
	const a = e.request;
	a && a.url && (a.url = Ji(a.url, s));
}
const Wp = new WeakMap();
function vT(e, t) {
	const n = rt._sentryDebugIds;
	if (!n) return;
	let r;
	const i = Wp.get(t);
	i ? (r = i) : ((r = new Map()), Wp.set(t, r));
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
function ET(e, t) {
	t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function ST(e, t, n) {
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
const qp = "Not capturing exception because it's already been captured.";
class Qn {
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
			(Qn.prototype.__init.call(this),
			Qn.prototype.__init2.call(this),
			Qn.prototype.__init3.call(this),
			Qn.prototype.__init4.call(this),
			Qn.prototype.__init5.call(this),
			(this._options = t),
			t.dsn)
		) {
			this._dsn = Yg(t.dsn);
			const n = uT(this._dsn, t);
			this._transport = t.transport({
				recordDroppedEvent: this.recordDroppedEvent.bind(this),
				...t.transportOptions,
				url: n,
			});
		} else
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.warn('No DSN provided, client will not do anything.');
	}
	captureException(t, n, r) {
		if (Up(t)) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(qp);
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
		const o = Hg(t) ? this.eventFromMessage(String(t), n, r) : this.eventFromException(t, r);
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
		if (n && n.originalException && Up(n.originalException)) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(qp);
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
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.warn('SDK not enabled, will not capture session.');
			return;
		}
		typeof t.release != 'string'
			? (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			  x.warn('Discarded session because of missing or non-string release')
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
		return n ? this._isClientDoneProcessing(t).then(r => n.flush(t).then(i => r && i)) : pr(!0);
	}
	close(t) {
		return this.flush(t).then(n => ((this.getOptions().enabled = !1), n));
	}
	setupIntegrations() {
		this._isEnabled() &&
			!this._integrationsInitialized &&
			((this._integrations = _T(this._options.integrations)), (this._integrationsInitialized = !0));
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
					x.warn(`Cannot retrieve integration ${t.id} from the current Client`),
				null
			);
		}
	}
	addIntegration(t) {
		h1(t, this._integrations);
	}
	sendEvent(t, n = {}) {
		if (this._dsn) {
			let r = hT(t, this._dsn, this._options._metadata, this._options.tunnel);
			for (const s of n.attachments || [])
				r = C3(r, I3(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
			const i = this._sendEnvelope(r);
			i && i.then(s => this.emit('afterSendEvent', t, s), null);
		}
	}
	sendSession(t) {
		if (this._dsn) {
			const n = fT(t, this._dsn, this._options._metadata, this._options.tunnel);
			this._sendEnvelope(n);
		}
	}
	recordDroppedEvent(t, n, r) {
		if (this._options.sendClientReports) {
			const i = `${t}:${n}`;
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`Adding outcome: "${i}"`),
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
		return !n.integrations && s.length > 0 && (n.integrations = s), p1(i, t, n, r);
	}
	_captureEvent(t, n = {}, r) {
		return this._processEvent(t, n, r).then(
			i => i.event_id,
			i => {
				if (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) {
					const s = i;
					s.logLevel === 'log' ? x.log(s.message) : x.warn(s);
				}
			}
		);
	}
	_processEvent(t, n, r) {
		const i = this.getOptions(),
			{ sampleRate: s } = i;
		if (!this._isEnabled()) return Aa(new He('SDK not enabled, will not capture event.', 'log'));
		const o = _1(t),
			a = m1(t),
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
				const f = TT(i, d, n);
				return wT(f, u);
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
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('Error while sending event:', n);
				})
			);
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('Transport disabled');
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
function wT(e, t) {
	const n = `${t} must return \`null\` or a valid event.`;
	if (Sf(e))
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
function TT(e, t, n) {
	const { beforeSend: r, beforeSendTransaction: i } = e;
	return m1(t) && r ? r(t, n) : _1(t) && i ? i(t, n) : t;
}
function m1(e) {
	return e.type === void 0;
}
function _1(e) {
	return e.type === 'transaction';
}
function bT(e, t) {
	t.debug === !0 &&
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__
			? x.enable()
			: console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'));
	const n = $();
	n.getScope().update(t.initialScope);
	const i = new e(t);
	n.bindClient(i);
}
const RT = 30;
function g1(e, t, n = S3(e.bufferSize || RT)) {
	let r = {};
	const i = o => n.drain(o);
	function s(o) {
		const a = [];
		if (
			(Fp(o, (d, h) => {
				const f = zp(h);
				if (U3(r, f)) {
					const _ = Vp(d, h);
					e.recordDroppedEvent('ratelimit_backoff', f, _);
				} else a.push(d);
			}),
			a.length === 0)
		)
			return pr();
		const l = Ti(o[0], a),
			u = d => {
				Fp(l, (h, f) => {
					const _ = Vp(h, f);
					e.recordDroppedEvent(d, zp(f), _);
				});
			},
			c = () =>
				t({ body: N3(l, e.textEncoder) }).then(
					d => (
						d.statusCode !== void 0 &&
							(d.statusCode < 200 || d.statusCode >= 300) &&
							(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							x.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),
						(r = B3(r, d)),
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
							x.error('Skipped sending event because buffer is full.'),
						u('queue_overflow'),
						pr()
					);
				throw d;
			}
		);
	}
	return (s.__sentry__baseTransport__ = !0), { send: s, flush: i };
}
function Vp(e, t) {
	if (!(t !== 'event' && t !== 'transaction')) return Array.isArray(e) ? e[1] : void 0;
}
const Pa = '7.51.2';
let Qp;
class xs {
	constructor() {
		xs.prototype.__init.call(this);
	}
	static __initStatic() {
		this.id = 'FunctionToString';
	}
	__init() {
		this.name = xs.id;
	}
	setupOnce() {
		Qp = Function.prototype.toString;
		try {
			Function.prototype.toString = function (...t) {
				const n = bf(this) || this;
				return Qp.apply(n, t);
			};
		} catch {}
	}
}
xs.__initStatic();
const kT = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
						u = xT(o._options, l);
					return CT(i, u) ? null : i;
				}
			}
			return i;
		};
		(r.id = this.name), t(r);
	}
}
Wr.__initStatic();
function xT(e = {}, t = {}) {
	return {
		allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
		denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
		ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...kT],
		ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
		ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
	};
}
function CT(e, t) {
	return t.ignoreInternal && PT(e)
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`Event dropped due to being internal Sentry Error.
Event: ${vn(e)}`),
		  !0)
		: NT(e, t.ignoreErrors)
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${vn(e)}`),
		  !0)
		: OT(e, t.ignoreTransactions)
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${vn(e)}`),
		  !0)
		: IT(e, t.denyUrls)
		? ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${vn(e)}.
Url: ${La(e)}`),
		  !0)
		: DT(e, t.allowUrls)
		? !1
		: ((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${vn(e)}.
Url: ${La(e)}`),
		  !0);
}
function NT(e, t) {
	return e.type || !t || !t.length ? !1 : AT(e).some(n => wi(n, t));
}
function OT(e, t) {
	if (e.type !== 'transaction' || !t || !t.length) return !1;
	const n = e.transaction;
	return n ? wi(n, t) : !1;
}
function IT(e, t) {
	if (!t || !t.length) return !1;
	const n = La(e);
	return n ? wi(n, t) : !1;
}
function DT(e, t) {
	if (!t || !t.length) return !0;
	const n = La(e);
	return n ? wi(n, t) : !0;
}
function AT(e) {
	if (e.message) return [e.message];
	if (e.exception)
		try {
			const { type: t = '', value: n = '' } = (e.exception.values && e.exception.values[0]) || {};
			return [`${n}`, `${t}: ${n}`];
		} catch {
			return (
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error(`Cannot extract message for event ${vn(e)}`), []
			);
		}
	return [];
}
function PT(e) {
	try {
		return e.exception.values[0].type === 'SentryError';
	} catch {}
	return !1;
}
function LT(e = []) {
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
		return t ? LT(t) : null;
	} catch {
		return (
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error(`Cannot extract url for event ${vn(e)}`), null
		);
	}
}
const V = rt;
let Gc = 0;
function y1() {
	return Gc > 0;
}
function MT() {
	Gc++,
		setTimeout(() => {
			Gc--;
		});
}
function ai(e, t = {}, n) {
	if (typeof e != 'function') return e;
	try {
		const i = e.__sentry_wrapped__;
		if (i) return i;
		if (bf(e)) return e;
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
				(MT(),
				d1(o => {
					o.addEventProcessor(
						a => (
							t.mechanism && (Uc(a, void 0, void 0), ks(a, t.mechanism)), (a.extra = { ...a.extra, arguments: i }), a
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
	qg(r, e), Tf(e, '__sentry_wrapped__', r);
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
function v1(e, t) {
	const n = Cf(e, t),
		r = { type: t && t.name, value: zT(t) };
	return (
		n.length && (r.stacktrace = { frames: n }),
		r.type === void 0 && r.value === '' && (r.value = 'Unrecoverable error caught'),
		r
	);
}
function UT(e, t, n, r) {
	const s = $().getClient(),
		o = s && s.getOptions().normalizeDepth,
		a = {
			exception: {
				values: [
					{
						type: Ef(t) ? t.constructor.name : r ? 'UnhandledRejection' : 'Error',
						value: `Non-Error ${r ? 'promise rejection' : 'exception'} captured with keys: ${K5(t)}`,
					},
				],
			},
			extra: { __serialized__: t1(t, o) },
		};
	if (n) {
		const l = Cf(e, n);
		l.length && (a.exception.values[0].stacktrace = { frames: l });
	}
	return a;
}
function Eu(e, t) {
	return { exception: { values: [v1(e, t)] } };
}
function Cf(e, t) {
	const n = t.stacktrace || t.stack || '',
		r = FT(t);
	try {
		return e(n, r);
	} catch {}
	return [];
}
const BT = /Minified React error #\d+;/i;
function FT(e) {
	if (e) {
		if (typeof e.framesToPop == 'number') return e.framesToPop;
		if (BT.test(e.message)) return 1;
	}
	return 0;
}
function zT(e) {
	const t = e && e.message;
	return t ? (t.error && typeof t.error.message == 'string' ? t.error.message : t) : 'No error message';
}
function $T(e, t, n, r) {
	const i = (n && n.syntheticException) || void 0,
		s = Nf(e, t, i, r);
	return ks(s), (s.level = 'error'), n && n.event_id && (s.event_id = n.event_id), pr(s);
}
function HT(e, t, n = 'info', r, i) {
	const s = (r && r.syntheticException) || void 0,
		o = Yc(e, t, s, i);
	return (o.level = n), r && r.event_id && (o.event_id = r.event_id), pr(o);
}
function Nf(e, t, n, r, i) {
	let s;
	if ($g(t) && t.error) return Eu(e, t.error);
	if (Cp(t) || L5(t)) {
		const o = t;
		if ('stack' in t) s = Eu(e, t);
		else {
			const a = o.name || (Cp(o) ? 'DOMError' : 'DOMException'),
				l = o.message ? `${a}: ${o.message}` : a;
			(s = Yc(e, l, n, r)), Uc(s, l);
		}
		return 'code' in o && (s.tags = { ...s.tags, 'DOMException.code': `${o.code}` }), s;
	}
	return vf(t)
		? Eu(e, t)
		: si(t) || Ef(t)
		? ((s = UT(e, t, n, i)), ks(s, { synthetic: !0 }), s)
		: ((s = Yc(e, t, n, r)), Uc(s, `${t}`, void 0), ks(s, { synthetic: !0 }), s);
}
function Yc(e, t, n, r) {
	const i = { message: t };
	if (r && n) {
		const s = Cf(e, n);
		s.length && (i.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
	}
	return i;
}
const bo = 1024,
	E1 = 'Breadcrumbs';
class Cs {
	static __initStatic() {
		this.id = E1;
	}
	__init() {
		this.name = Cs.id;
	}
	constructor(t) {
		Cs.prototype.__init.call(this),
			(this.options = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t });
	}
	setupOnce() {
		this.options.console && Le('console', GT),
			this.options.dom && Le('dom', jT(this.options.dom)),
			this.options.xhr && Le('xhr', YT),
			this.options.fetch && Le('fetch', WT),
			this.options.history && Le('history', qT);
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
Cs.__initStatic();
function jT(e) {
	function t(n) {
		let r,
			i = typeof e == 'object' ? e.serializeAttribute : void 0,
			s = typeof e == 'object' && typeof e.maxStringLength == 'number' ? e.maxStringLength : void 0;
		s &&
			s > bo &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(
					`\`dom.maxStringLength\` cannot exceed ${bo}, but a value of ${s} was configured. Sentry will use ${bo} instead.`
				),
			(s = bo)),
			typeof i == 'string' && (i = [i]);
		try {
			const o = n.event;
			r = VT(o) ? hr(o.target, { keyAttrs: i, maxStringLength: s }) : hr(o, { keyAttrs: i, maxStringLength: s });
		} catch {
			r = '<unknown>';
		}
		r.length !== 0 &&
			$().addBreadcrumb({ category: `ui.${n.name}`, message: r }, { event: n.event, name: n.name, global: n.global });
	}
	return t;
}
function GT(e) {
	for (let n = 0; n < e.args.length; n++)
		if (e.args[n] === 'ref=Ref<') {
			e.args[n + 1] = 'viewRef';
			break;
		}
	const t = {
		category: 'console',
		data: { arguments: e.args, logger: 'console' },
		level: T3(e.level),
		message: Op(e.args, ' '),
	};
	if (e.level === 'assert')
		if (e.args[0] === !1)
			(t.message = `Assertion failed: ${Op(e.args.slice(1), ' ') || 'console.assert'}`),
				(t.data.arguments = e.args.slice(1));
		else return;
	$().addBreadcrumb(t, { input: e.args, level: e.level });
}
function YT(e) {
	const { startTimestamp: t, endTimestamp: n } = e,
		r = e.xhr[bn];
	if (!t || !n || !r) return;
	const { method: i, url: s, status_code: o, body: a } = r,
		l = { method: i, url: s, status_code: o },
		u = { xhr: e.xhr, input: a, startTimestamp: t, endTimestamp: n };
	$().addBreadcrumb({ category: 'xhr', data: l, type: 'http' }, u);
}
function WT(e) {
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
function qT(e) {
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
function VT(e) {
	return e && !!e.target;
}
function QT(e, { metadata: t, tunnel: n, dsn: r }) {
	const i = {
			event_id: e.event_id,
			sent_at: new Date().toISOString(),
			...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
			...(!!n && !!r && { dsn: Gs(r) }),
		},
		s = KT(e);
	return Ti(i, [s]);
}
function KT(e) {
	return [{ type: 'user_report' }, e];
}
class ZT extends Qn {
	constructor(t) {
		const n = V.SENTRY_SDK_SOURCE || m3();
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
		return $T(this._options.stackParser, t, n, this._options.attachStacktrace);
	}
	eventFromMessage(t, n = 'info', r) {
		return HT(this._options.stackParser, t, n, r, this._options.attachStacktrace);
	}
	sendEvent(t, n) {
		const r = this.getIntegrationById(E1);
		r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), super.sendEvent(t, n);
	}
	captureUserFeedback(t) {
		if (!this._isEnabled()) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.warn('SDK not enabled, will not capture user feedback.');
			return;
		}
		const n = QT(t, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
		this._sendEnvelope(n);
	}
	_prepareEvent(t, n, r) {
		return (t.platform = t.platform || 'javascript'), super._prepareEvent(t, n, r);
	}
	_flushOutcomes() {
		const t = this._clearOutcomes();
		if (t.length === 0) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('No outcomes to send');
			return;
		}
		if (!this._dsn) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('No dsn provided, will not send outcomes');
			return;
		}
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('Sending outcomes:', t);
		const n = A3(t, this._options.tunnel && Gs(this._dsn));
		this._sendEnvelope(n);
	}
}
let zi;
function XT() {
	if (zi) return zi;
	if (Lc(V.fetch)) return (zi = V.fetch.bind(V));
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
				x.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', n);
		}
	return (zi = t.bind(V));
}
function JT() {
	zi = void 0;
}
function e6(e, t = XT()) {
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
			return JT(), (n -= o), r--, Aa(l);
		}
	}
	return g1(e, i);
}
const t6 = 4;
function n6(e) {
	function t(n) {
		return new Ye((r, i) => {
			const s = new XMLHttpRequest();
			(s.onerror = i),
				(s.onreadystatechange = () => {
					s.readyState === t6 &&
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
	return g1(e, t);
}
const vl = '?',
	r6 = 30,
	i6 = 40,
	s6 = 50;
function Of(e, t, n, r) {
	const i = { filename: e, function: t, in_app: !0 };
	return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
const o6 =
		/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
	a6 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
	l6 = e => {
		const t = o6.exec(e);
		if (t) {
			if (t[2] && t[2].indexOf('eval') === 0) {
				const s = a6.exec(t[2]);
				s && ((t[2] = s[1]), (t[3] = s[2]), (t[4] = s[3]));
			}
			const [r, i] = S1(t[1] || vl, t[2]);
			return Of(i, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
		}
	},
	u6 = [r6, l6],
	c6 =
		/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
	d6 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
	f6 = e => {
		const t = c6.exec(e);
		if (t) {
			if (t[3] && t[3].indexOf(' > eval') > -1) {
				const s = d6.exec(t[3]);
				s && ((t[1] = t[1] || 'eval'), (t[3] = s[1]), (t[4] = s[2]), (t[5] = ''));
			}
			let r = t[3],
				i = t[1] || vl;
			return ([i, r] = S1(i, r)), Of(r, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
		}
	},
	h6 = [s6, f6],
	p6 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
	m6 = e => {
		const t = p6.exec(e);
		return t ? Of(t[2], t[1] || vl, +t[3], t[4] ? +t[4] : void 0) : void 0;
	},
	_6 = [i6, m6],
	g6 = [u6, h6, _6],
	y6 = Kg(...g6),
	S1 = (e, t) => {
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
		this._installFunc = { onerror: v6, onunhandledrejection: E6 };
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
			r && t[n] && (T6(n), r(), (this._installFunc[n] = void 0));
		}
	}
}
Ln.__initStatic();
function v6() {
	Le('error', e => {
		const [t, n, r] = b1();
		if (!t.getIntegration(Ln)) return;
		const { msg: i, url: s, line: o, column: a, error: l } = e;
		if (y1() || (l && l.__sentry_own_request__)) return;
		const u = l === void 0 && Fn(i) ? w6(i, s, o, a) : w1(Nf(n, l || i, void 0, r, !1), s, o, a);
		(u.level = 'error'), T1(t, l, u, 'onerror');
	});
}
function E6() {
	Le('unhandledrejection', e => {
		const [t, n, r] = b1();
		if (!t.getIntegration(Ln)) return;
		let i = e;
		try {
			'reason' in e ? (i = e.reason) : 'detail' in e && 'reason' in e.detail && (i = e.detail.reason);
		} catch {}
		if (y1() || (i && i.__sentry_own_request__)) return !0;
		const s = Hg(i) ? S6(i) : Nf(n, i, void 0, r, !0);
		(s.level = 'error'), T1(t, i, s, 'onunhandledrejection');
	});
}
function S6(e) {
	return {
		exception: {
			values: [{ type: 'UnhandledRejection', value: `Non-Error promise rejection captured with value: ${String(e)}` }],
		},
	};
}
function w6(e, t, n, r) {
	const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
	let s = $g(e) ? e.message : e,
		o = 'Error';
	const a = s.match(i);
	return a && ((o = a[1]), (s = a[2])), w1({ exception: { values: [{ type: o, value: s }] } }, t, n, r);
}
function w1(e, t, n, r) {
	const i = (e.exception = e.exception || {}),
		s = (i.values = i.values || []),
		o = (s[0] = s[0] || {}),
		a = (o.stacktrace = o.stacktrace || {}),
		l = (a.frames = a.frames || []),
		u = isNaN(parseInt(r, 10)) ? void 0 : r,
		c = isNaN(parseInt(n, 10)) ? void 0 : n,
		d = Fn(t) && t.length > 0 ? t : $5();
	return l.length === 0 && l.push({ colno: u, filename: d, function: '?', in_app: !0, lineno: c }), e;
}
function T6(e) {
	(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`Global Handler attached: ${e}`);
}
function T1(e, t, n, r) {
	ks(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
}
function b1() {
	const e = $(),
		t = e.getClient(),
		n = (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
	return [e, n.stackParser, n.attachStacktrace];
}
const b6 = [
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
class Ns {
	static __initStatic() {
		this.id = 'TryCatch';
	}
	__init() {
		this.name = Ns.id;
	}
	constructor(t) {
		Ns.prototype.__init.call(this),
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
		this._options.setTimeout && Me(V, 'setTimeout', Kp),
			this._options.setInterval && Me(V, 'setInterval', Kp),
			this._options.requestAnimationFrame && Me(V, 'requestAnimationFrame', R6),
			this._options.XMLHttpRequest && 'XMLHttpRequest' in V && Me(XMLHttpRequest.prototype, 'send', k6);
		const t = this._options.eventTarget;
		t && (Array.isArray(t) ? t : b6).forEach(x6);
	}
}
Ns.__initStatic();
function Kp(e) {
	return function (...t) {
		const n = t[0];
		return (
			(t[0] = ai(n, { mechanism: { data: { function: $n(e) }, handled: !0, type: 'instrument' } })), e.apply(this, t)
		);
	};
}
function R6(e) {
	return function (t) {
		return e.apply(this, [
			ai(t, {
				mechanism: { data: { function: 'requestAnimationFrame', handler: $n(e) }, handled: !0, type: 'instrument' },
			}),
		]);
	};
}
function k6(e) {
	return function (...t) {
		const n = this;
		return (
			['onload', 'onerror', 'onprogress', 'onreadystatechange'].forEach(i => {
				i in n &&
					typeof n[i] == 'function' &&
					Me(n, i, function (s) {
						const o = { mechanism: { data: { function: i, handler: $n(s) }, handled: !0, type: 'instrument' } },
							a = bf(s);
						return a && (o.mechanism.data.handler = $n(a)), ai(s, o);
					});
			}),
			e.apply(this, t)
		);
	};
}
function x6(e) {
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
								data: { function: 'handleEvent', handler: $n(s), target: e },
								handled: !0,
								type: 'instrument',
							},
						}));
				} catch {}
				return r.apply(this, [
					i,
					ai(s, {
						mechanism: {
							data: { function: 'addEventListener', handler: $n(s), target: e },
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
const C6 = 'cause',
	N6 = 5;
class qr {
	static __initStatic() {
		this.id = 'LinkedErrors';
	}
	__init() {
		this.name = qr.id;
	}
	constructor(t = {}) {
		qr.prototype.__init.call(this), (this._key = t.key || C6), (this._limit = t.limit || N6);
	}
	setupOnce() {
		const t = $().getClient();
		t &&
			_l((n, r) => {
				const i = $().getIntegration(qr);
				return i ? O6(t.getOptions().stackParser, i._key, i._limit, n, r) : n;
			});
	}
}
qr.__initStatic();
function O6(e, t, n, r, i) {
	if (!r.exception || !r.exception.values || !i || !zn(i.originalException, Error)) return r;
	const s = R1(e, n, i.originalException, t);
	return (r.exception.values = [...s, ...r.exception.values]), r;
}
function R1(e, t, n, r, i = []) {
	if (!zn(n[r], Error) || i.length + 1 >= t) return i;
	const s = v1(e, n[r]);
	return R1(e, t, n[r], r, [s, ...i]);
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
					if (I6(i, s._previousEvent))
						return (
							(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
								x.warn('Event dropped due to being a duplicate of previously captured event.'),
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
function I6(e, t) {
	return t ? !!(D6(e, t) || A6(e, t)) : !1;
}
function D6(e, t) {
	const n = e.message,
		r = t.message;
	return !((!n && !r) || (n && !r) || (!n && r) || n !== r || !x1(e, t) || !k1(e, t));
}
function A6(e, t) {
	const n = Zp(t),
		r = Zp(e);
	return !(!n || !r || n.type !== r.type || n.value !== r.value || !x1(e, t) || !k1(e, t));
}
function k1(e, t) {
	let n = Xp(e),
		r = Xp(t);
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
function x1(e, t) {
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
function Zp(e) {
	return e.exception && e.exception.values && e.exception.values[0];
}
function Xp(e) {
	const t = e.exception;
	if (t)
		try {
			return t.values[0].stacktrace.frames;
		} catch {
			return;
		}
}
const P6 = [new Wr(), new xs(), new Ns(), new Cs(), new Ln(), new qr(), new Qr(), new Vr()];
function L6(e = {}) {
	e.defaultIntegrations === void 0 && (e.defaultIntegrations = P6),
		e.release === void 0 &&
			(typeof __SENTRY_RELEASE__ == 'string' && (e.release = __SENTRY_RELEASE__),
			V.SENTRY_RELEASE && V.SENTRY_RELEASE.id && (e.release = V.SENTRY_RELEASE.id)),
		e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
		e.sendClientReports === void 0 && (e.sendClientReports = !0);
	const t = {
		...e,
		stackParser: Z5(e.stackParser || y6),
		integrations: mT(e),
		transport: e.transport || (Zg() ? e6 : n6),
	};
	bT(ZT, t), e.autoSessionTracking && M6();
}
function Jp(e = {}, t = $()) {
	if (!V.document) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.error('Global document not defined in showReportDialog call');
		return;
	}
	const { client: n, scope: r } = t.getStackTop(),
		i = e.dsn || (n && n.getDsn());
	if (!i) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('DSN not configured for showReportDialog call');
		return;
	}
	r && (e.user = { ...r.getUser(), ...e.user }), e.eventId || (e.eventId = t.lastEventId());
	const s = V.document.createElement('script');
	(s.async = !0), (s.src = cT(i, e)), e.onLoad && (s.onload = e.onLoad);
	const o = V.document.head || V.document.body;
	o
		? o.appendChild(s)
		: (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
		  x.error('Not injecting report dialog. No injection point found in HTML');
}
function em(e) {
	e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function M6() {
	if (typeof V.document > 'u') {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
		return;
	}
	const e = $();
	e.captureSession &&
		(em(e),
		Le('history', ({ from: t, to: n }) => {
			t === void 0 || t === n || em($());
		}));
}
const ue = rt,
	If = 'sentryReplaySession',
	U6 = 'replay_event',
	Df = 'Unable to send Replay',
	B6 = 3e5,
	F6 = 9e5,
	z6 = 36e5,
	$6 = 5e3,
	H6 = 5500,
	j6 = 6e4,
	G6 = 5e3,
	Y6 = 3,
	Ro = 15e4,
	ko = 5e3;
var Ce;
(function (e) {
	(e[(e.Document = 0)] = 'Document'),
		(e[(e.DocumentType = 1)] = 'DocumentType'),
		(e[(e.Element = 2)] = 'Element'),
		(e[(e.Text = 3)] = 'Text'),
		(e[(e.CDATA = 4)] = 'CDATA'),
		(e[(e.Comment = 5)] = 'Comment');
})(Ce || (Ce = {}));
function W6(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
function ts(e) {
	const t = e == null ? void 0 : e.host;
	return !!(t && t.shadowRoot && t.shadowRoot === e);
}
function C1({ maskInputOptions: e, tagName: t, type: n }) {
	t.toLowerCase() === 'option' && (t = 'select');
	const r = typeof n == 'string' ? n.toLowerCase() : void 0;
	return e[t.toLowerCase()] || (r && e[r]) || r === 'password' || (t === 'input' && !n && e.text);
}
function q6({ tagName: e, type: t, maskInputOptions: n, maskInputSelector: r }) {
	return r || C1({ maskInputOptions: n, tagName: e, type: t });
}
function Os({
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
			(C1({ maskInputOptions: r, tagName: i, type: s }) || (t && e.matches(t))) &&
				(a ? (l = a(l)) : (l = '*'.repeat(l.length)))),
		l
	);
}
const tm = '__rrweb_original__';
function V6(e) {
	const t = e.getContext('2d');
	if (!t) return !0;
	const n = 50;
	for (let r = 0; r < e.width; r += n)
		for (let i = 0; i < e.height; i += n) {
			const s = t.getImageData,
				o = tm in s ? s[tm] : s;
			if (
				new Uint32Array(o.call(t, r, i, Math.min(n, e.width - r), Math.min(n, e.height - i)).data.buffer).some(
					l => l !== 0
				)
			)
				return !1;
		}
	return !0;
}
function N1(e) {
	const t = e.type;
	return e.hasAttribute('data-rr-is-password') ? 'password' : t ? t.toLowerCase() : null;
}
function Wc(e, t, n) {
	return (
		typeof n == 'string' && n.toLowerCase(),
		t === 'INPUT' && (n === 'radio' || n === 'checkbox') ? e.getAttribute('value') || '' : e.value
	);
}
let Q6 = 1;
const K6 = new RegExp('[^a-z0-9-_:]'),
	Is = -2;
function O1(e) {
	return e ? e.replace(/[\S]/g, '*') : '';
}
function Z6() {
	return Q6++;
}
function X6(e) {
	if (e instanceof HTMLFormElement) return 'form';
	const t = e.tagName.toLowerCase().trim();
	return K6.test(t) ? 'div' : t;
}
function qc(e) {
	try {
		const t = e.rules || e.cssRules;
		return t ? Array.from(t).map(J6).join('') : null;
	} catch {
		return null;
	}
}
function J6(e) {
	let t = e.cssText;
	if (eb(e))
		try {
			t = qc(e.styleSheet) || t;
		} catch {}
	return I1(t);
}
function I1(e) {
	if (e.indexOf(':') > -1) {
		const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
		return e.replace(t, '$1\\$2');
	}
	return e;
}
function eb(e) {
	return 'styleSheet' in e;
}
function tb(e) {
	return e.cssRules
		? Array.from(e.cssRules)
				.map(t => (t.cssText ? I1(t.cssText) : ''))
				.join('')
		: '';
}
function nb(e) {
	let t = '';
	return (
		e.indexOf('//') > -1 ? (t = e.split('/').slice(0, 3).join('/')) : (t = e.split('/')[0]), (t = t.split('?')[0]), t
	);
}
let wr, nm;
const rb = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
	ib = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
	sb = /^(data:)([^,]*),(.*)/i;
function Xo(e, t) {
	return (e || '').replace(rb, (n, r, i, s, o, a) => {
		const l = i || o || a,
			u = r || s || '';
		if (!l) return n;
		if (!ib.test(l)) return `url(${u}${l}${u})`;
		if (sb.test(l)) return `url(${u}${l}${u})`;
		if (l[0] === '/') return `url(${u}${nb(t) + l}${u})`;
		const c = t.split('/'),
			d = l.split('/');
		c.pop();
		for (const h of d) h !== '.' && (h === '..' ? c.pop() : c.push(h));
		return `url(${u}${c.join('/')}${u})`;
	});
}
const ob = /^[^ \t\n\r\u000c]+/,
	ab = /^[, \t\n\r\u000c]+/;
function lb(e, t) {
	if (t.trim() === '') return t;
	let n = 0;
	function r(s) {
		let o,
			a = s.exec(t.substring(n));
		return a ? ((o = a[0]), (n += o.length), o) : '';
	}
	let i = [];
	for (; r(ab), !(n >= t.length); ) {
		let s = r(ob);
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
function ub(e) {
	return !!(e.tagName === 'svg' || e.ownerSVGElement);
}
function Vc() {
	const e = document.createElement('a');
	return (e.href = ''), e.href;
}
function D1(e, t, n, r, i, s, o, a) {
	if (!i) return i;
	const l = r.toLowerCase(),
		u = n.toLowerCase();
	return l === 'src' ||
		l === 'href' ||
		(l === 'xlink:href' && i[0] !== '#') ||
		(l === 'background' && (u === 'table' || u === 'td' || u === 'th'))
		? Ur(e, i)
		: l === 'srcset'
		? lb(e, i)
		: l === 'style'
		? Xo(i, Vc())
		: u === 'object' && l === 'data'
		? Ur(e, i)
		: s && cb(t, l, u, o)
		? a
			? a(i)
			: O1(i)
		: i;
}
function cb(e, t, n, r) {
	return r && e.matches(r)
		? !1
		: ['placeholder', 'title', 'aria-label'].indexOf(t) > -1 ||
				(n === 'input' &&
					t === 'value' &&
					e.hasAttribute('type') &&
					['submit', 'button'].indexOf(e.getAttribute('type').toLowerCase()) > -1);
}
function db(e, t, n, r) {
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
function fb(e, t, n) {
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
function hb(e, t) {
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
		const R = r.__sn.id;
		T = R === 1 ? void 0 : R;
	}
	switch (e.nodeType) {
		case e.DOCUMENT_NODE:
			return e.compatMode !== 'CSS1Compat'
				? { type: Ce.Document, childNodes: [], compatMode: e.compatMode, rootId: T }
				: { type: Ce.Document, childNodes: [], rootId: T };
		case e.DOCUMENT_TYPE_NODE:
			return { type: Ce.DocumentType, name: e.name, publicId: e.publicId, systemId: e.systemId, rootId: T };
		case e.ELEMENT_NODE:
			const R = db(e, i, s, o),
				b = X6(e);
			let w = {};
			for (const { name: I, value: U } of Array.from(e.attributes)) _b(b, I) || (w[I] = D1(r, e, b, I, U, f, u, y));
			if (b === 'link' && c) {
				const I = Array.from(r.styleSheets).find(Q => Q.href === e.href);
				let U = null;
				I && (U = qc(I)), U && (delete w.rel, delete w.href, (w._cssText = Xo(U, I.href)));
			}
			if (b === 'style' && e.sheet && !(e.innerText || e.textContent || '').trim().length) {
				const I = qc(e.sheet);
				I && (w._cssText = Xo(I, Vc()));
			}
			if (b === 'input' || b === 'textarea' || b === 'select' || b === 'option') {
				const I = e,
					U = N1(I),
					Q = Wc(I, b.toUpperCase(), U),
					G = e.checked;
				U !== 'submit' &&
					U !== 'button' &&
					Q &&
					(w.value = Os({
						input: I,
						type: U,
						tagName: b,
						value: Q,
						maskInputSelector: d,
						unmaskInputSelector: h,
						maskInputOptions: _,
						maskInputFn: S,
					})),
					G && (w.checked = G);
			}
			if ((b === 'option' && (e.selected && !_.select ? (w.selected = !0) : delete w.selected), b === 'canvas' && g)) {
				if (e.__context === '2d') V6(e) || (w.rr_dataURL = e.toDataURL(p.type, p.quality));
				else if (!('__context' in e)) {
					const I = e.toDataURL(p.type, p.quality),
						U = document.createElement('canvas');
					(U.width = e.width), (U.height = e.height);
					const Q = U.toDataURL(p.type, p.quality);
					I !== Q && (w.rr_dataURL = I);
				}
			}
			if (b === 'img' && m) {
				wr || ((wr = r.createElement('canvas')), (nm = wr.getContext('2d')));
				const I = e,
					U = I.crossOrigin;
				I.crossOrigin = 'anonymous';
				const Q = () => {
					try {
						(wr.width = I.naturalWidth),
							(wr.height = I.naturalHeight),
							nm.drawImage(I, 0, 0),
							(w.rr_dataURL = wr.toDataURL(p.type, p.quality));
					} catch (G) {
						console.warn(`Cannot inline img src=${I.currentSrc}! Error: ${G}`);
					}
					U ? (w.crossOrigin = U) : delete w.crossOrigin;
				};
				I.complete && I.naturalWidth !== 0 ? Q() : (I.onload = Q);
			}
			if (
				((b === 'audio' || b === 'video') &&
					((w.rr_mediaState = e.paused ? 'paused' : 'played'), (w.rr_mediaCurrentTime = e.currentTime)),
				e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft),
				e.scrollTop && (w.rr_scrollTop = e.scrollTop),
				R)
			) {
				const { width: I, height: U } = e.getBoundingClientRect();
				w = { class: w.class, rr_width: `${I}px`, rr_height: `${U}px` };
			}
			return (
				b === 'iframe' && !E(w.src) && (e.contentDocument || (w.rr_src = w.src), delete w.src),
				{ type: Ce.Element, tagName: b, attributes: w, childNodes: [], isSVG: ub(e) || void 0, needBlock: R, rootId: T }
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
						(!((n = e.parentNode.sheet) === null || n === void 0) && n.cssRules && (O = tb(e.parentNode.sheet)));
				} catch (I) {
					console.warn(`Cannot get CSS styles from text's parentNode. Error: ${I}`, e);
				}
				O = Xo(O, Vc());
			}
			if ((H && (O = 'SCRIPT_PLACEHOLDER'), A === 'TEXTAREA' && O)) O = '';
			else if (A === 'OPTION' && O) {
				const I = e.parentNode;
				O = Os({
					input: I,
					type: null,
					tagName: A,
					value: O,
					maskInputSelector: d,
					unmaskInputSelector: h,
					maskInputOptions: _,
					maskInputFn: S,
				});
			} else !B && !H && Ma(e, a, l, u, f) && O && (O = y ? y(O) : O1(O));
			return { type: Ce.Text, textContent: O || '', isStyle: B, rootId: T };
		case e.CDATA_SECTION_NODE:
			return { type: Ce.CDATA, textContent: '', rootId: T };
		case e.COMMENT_NODE:
			return { type: Ce.Comment, textContent: e.textContent || '', rootId: T };
		default:
			return !1;
	}
}
function te(e) {
	return e == null ? '' : e.toLowerCase();
}
function pb(e, t) {
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
					(te(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
						te(e.attributes.name) === 'application-name' ||
						te(e.attributes.rel) === 'icon' ||
						te(e.attributes.rel) === 'apple-touch-icon' ||
						te(e.attributes.rel) === 'shortcut icon')))
		)
			return !0;
		if (e.tagName === 'meta') {
			if (t.headMetaDescKeywords && te(e.attributes.name).match(/^description|keywords$/)) return !0;
			if (
				t.headMetaSocial &&
				(te(e.attributes.property).match(/^(og|twitter|fb):/) ||
					te(e.attributes.name).match(/^(og|twitter):/) ||
					te(e.attributes.name) === 'pinterest')
			)
				return !0;
			if (
				t.headMetaRobots &&
				(te(e.attributes.name) === 'robots' ||
					te(e.attributes.name) === 'googlebot' ||
					te(e.attributes.name) === 'bingbot')
			)
				return !0;
			if (t.headMetaHttpEquiv && e.attributes['http-equiv'] !== void 0) return !0;
			if (
				t.headMetaAuthorship &&
				(te(e.attributes.name) === 'author' ||
					te(e.attributes.name) === 'generator' ||
					te(e.attributes.name) === 'framework' ||
					te(e.attributes.name) === 'publisher' ||
					te(e.attributes.name) === 'progid' ||
					te(e.attributes.property).match(/^article:/) ||
					te(e.attributes.property).match(/^product:/))
			)
				return !0;
			if (
				t.headMetaVerification &&
				(te(e.attributes.name) === 'google-site-verification' ||
					te(e.attributes.name) === 'yandex-verification' ||
					te(e.attributes.name) === 'csrf-token' ||
					te(e.attributes.name) === 'p:domain_verify' ||
					te(e.attributes.name) === 'verify-v1' ||
					te(e.attributes.name) === 'verification' ||
					te(e.attributes.name) === 'shopify-checkout-api-token')
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
		onSerialize: R,
		onIframeLoad: b,
		iframeLoadTimeout: w = 5e3,
		keepIframeSrcFn: A = () => !1,
	} = t;
	let { preserveWhiteSpace: O = !0 } = t;
	const B = hb(e, {
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
		: pb(B, m) || (!O && B.type === Ce.Text && !B.isStyle && !B.textContent.replace(/^\s+|\s+$/gm, '').length)
		? (H = Is)
		: (H = Z6());
	const I = Object.assign(B, { id: H });
	if (((e.__sn = I), H === Is)) return null;
	(r[H] = e), R && R(e);
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
			onSerialize: R,
			onIframeLoad: b,
			iframeLoadTimeout: w,
			keepIframeSrcFn: A,
		};
		for (const G of Array.from(e.childNodes)) {
			const ae = ns(G, Q);
			ae && I.childNodes.push(ae);
		}
		if (W6(e) && e.shadowRoot)
			for (const G of Array.from(e.shadowRoot.childNodes)) {
				const ae = ns(G, Q);
				ae && ((ae.isShadow = !0), I.childNodes.push(ae));
			}
	}
	return (
		e.parentNode && ts(e.parentNode) && (I.isShadow = !0),
		I.type === Ce.Element &&
			I.tagName === 'iframe' &&
			fb(
				e,
				() => {
					const Q = e.contentDocument;
					if (Q && b) {
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
							onSerialize: R,
							onIframeLoad: b,
							iframeLoadTimeout: w,
							keepIframeSrcFn: A,
						});
						G && b(e, G);
					}
				},
				w
			),
		I
	);
}
function mb(e, t) {
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
			iframeLoadTimeout: R,
			keepIframeSrcFn: b = () => !1,
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
			iframeLoadTimeout: R,
			keepIframeSrcFn: b,
		}),
		w,
	];
}
function _b(e, t, n) {
	return (e === 'video' || e === 'audio') && t === 'autoplay';
}
var ne;
(function (e) {
	(e[(e.DomContentLoaded = 0)] = 'DomContentLoaded'),
		(e[(e.Load = 1)] = 'Load'),
		(e[(e.FullSnapshot = 2)] = 'FullSnapshot'),
		(e[(e.IncrementalSnapshot = 3)] = 'IncrementalSnapshot'),
		(e[(e.Meta = 4)] = 'Meta'),
		(e[(e.Custom = 5)] = 'Custom'),
		(e[(e.Plugin = 6)] = 'Plugin');
})(ne || (ne = {}));
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
var rm;
(function (e) {
	(e[(e.Play = 0)] = 'Play'),
		(e[(e.Pause = 1)] = 'Pause'),
		(e[(e.Seeked = 2)] = 'Seeked'),
		(e[(e.VolumeChange = 3)] = 'VolumeChange');
})(rm || (rm = {}));
var im;
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
})(im || (im = {}));
function lt(e, t, n = document) {
	const r = { capture: !0, passive: !0 };
	return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function gb() {
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
let sm = {
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
	(sm = new Proxy(sm, {
		get(e, t, n) {
			return t === 'map' && console.error(Tr), Reflect.get(e, t, n);
		},
	}));
function Ds(e, t, n = {}) {
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
function A1() {
	return (
		window.innerHeight ||
		(document.documentElement && document.documentElement.clientHeight) ||
		(document.body && document.body.clientHeight)
	);
}
function P1() {
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
	return '__sn' in e ? e.__sn.id === Is : !1;
}
function L1(e, t) {
	if (ts(e)) return !1;
	const n = t.getId(e);
	return t.has(n)
		? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
			? !1
			: e.parentNode
			? L1(e.parentNode, t)
			: !0
		: !0;
}
function M1(e) {
	return !!e.changedTouches;
}
function yb(e = window) {
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
function U1(e) {
	return '__sn' in e ? e.__sn.type === Ce.Element && e.__sn.tagName === 'iframe' : !1;
}
function B1(e) {
	return !!(e != null && e.shadowRoot);
}
function om(e) {
	return '__ln' in e;
}
class vb {
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
		if (((t.__ln = n), t.previousSibling && om(t.previousSibling))) {
			const r = t.previousSibling.__ln.next;
			(n.next = r), (n.previous = t.previousSibling.__ln), (t.previousSibling.__ln.next = n), r && (r.previous = n);
		} else if (t.nextSibling && om(t.nextSibling) && t.nextSibling.__ln.previous) {
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
const am = (e, t) => `${e}@${t}`;
function lm(e) {
	return '__sn' in e;
}
class Eb {
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
					n = new vb(),
					r = a => {
						let l = a,
							u = Is;
						for (; u === Is; ) (l = l && l.nextSibling), (u = l && this.mirror.getId(l));
						return u;
					},
					i = a => {
						var l, u, c, d, h;
						const f = a.getRootNode ? ((l = a.getRootNode()) === null || l === void 0 ? void 0 : l.host) : null;
						let _ = f;
						for (
							;
							!(
								(c = (u = _ == null ? void 0 : _.getRootNode) === null || u === void 0 ? void 0 : u.call(_)) === null ||
								c === void 0
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
								U1(g) && this.iframeManager.addIframe(g),
									B1(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, document);
							},
							onIframeLoad: (g, E) => {
								this.iframeManager.attachIframe(g, E), this.shadowDomManager.observeAttachShadow(g);
							},
						});
						m && t.push({ parentId: S, nextId: p, node: m });
					};
				for (; this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
				for (const a of this.movedSet) (Kc(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode)) || i(a);
				for (const a of this.addedSet)
					(!Zc(this.droppedSet, a) && !Kc(this.removes, a, this.mirror)) || Zc(this.movedSet, a)
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
									(r = Os({
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
								i.attributes[t.attributeName] = D1(
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
											? (Qc(this.addedSet, n), this.droppedSet.add(n))
											: (this.addedSet.has(t.target) && r === -1) ||
											  L1(t.target, this.mirror) ||
											  (this.movedSet.has(n) && this.movedMap[am(r, i)]
													? Qc(this.movedSet, n)
													: this.removes.push({ parentId: i, id: r, isShadow: ts(t.target) ? !0 : void 0 })),
										this.mapRemoves.push(n));
								});
							break;
						}
					}
			}),
			(this.genAdds = (t, n) => {
				if (!(n && We(n, this.blockClass, this.blockSelector, this.unblockSelector))) {
					if (lm(t)) {
						if (Su(t)) return;
						this.movedSet.add(t);
						let r = null;
						n && lm(n) && (r = n.__sn.id), r && (this.movedMap[am(t.__sn.id, r)] = !0);
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
function Qc(e, t) {
	e.delete(t), t.childNodes.forEach(n => Qc(e, n));
}
function Kc(e, t, n) {
	const { parentNode: r } = t;
	if (!r) return !1;
	const i = n.getId(r);
	return e.some(s => s.id === i) ? !0 : Kc(e, r, n);
}
function Zc(e, t) {
	const { parentNode: n } = t;
	return n ? (e.has(n) ? !0 : Zc(e, n)) : !1;
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
	er = [];
function qs(e) {
	try {
		if ('composedPath' in e) {
			const t = e.composedPath();
			if (t.length) return t[0];
		} else if ('path' in e && e.path.length) return e.path[0];
	} catch {}
	return e && e.target;
}
function F1(e, t) {
	var n, r;
	const i = new Eb();
	er.push(i), i.init(e);
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
function Sb({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
	if (t.mousemove === !1) return () => {};
	const i = typeof t.mousemove == 'number' ? t.mousemove : 50,
		s = typeof t.mousemoveCallback == 'number' ? t.mousemoveCallback : 500;
	let o = [],
		a;
	const l = Ds(d => {
			const h = Date.now() - a;
			q(e)(
				o.map(f => ((f.timeOffset -= h), f)),
				d
			),
				(o = []),
				(a = null);
		}, s),
		u = Ds(
			d => {
				const h = qs(d),
					{ clientX: f, clientY: _ } = M1(d) ? d.changedTouches[0] : d;
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
function wb({
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
			const h = qs(d);
			if (We(h, r, i, s)) return;
			const f = M1(d) ? d.changedTouches[0] : d;
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
function z1({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: s, sampling: o }) {
	const a = Ds(l => {
		const u = qs(l);
		if (!u || We(u, r, i, s)) return;
		const c = n.getId(u);
		if (u === t) {
			const d = t.scrollingElement || t.documentElement;
			q(e)({ id: c, x: d.scrollLeft, y: d.scrollTop });
		} else q(e)({ id: c, x: u.scrollLeft, y: u.scrollTop });
	}, o.scroll || 100);
	return lt('scroll', q(a), t);
}
function Tb({ viewportResizeCb: e }) {
	let t = -1,
		n = -1;
	const r = Ds(() => {
		const i = A1(),
			s = P1();
		(t !== i || n !== s) && (q(e)({ width: Number(s), height: Number(i) }), (t = i), (n = s));
	}, 200);
	return lt('resize', q(r), window);
}
function um(e, t) {
	const n = Object.assign({}, e);
	return t || delete n.userTriggered, n;
}
const bb = ['INPUT', 'TEXTAREA', 'SELECT'],
	cm = new WeakMap();
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
		let T = qs(E);
		const R = T && T.tagName,
			b = E.isTrusted;
		if ((R === 'OPTION' && (T = T.parentElement), !T || !R || bb.indexOf(R) < 0 || We(T, r, i, s))) return;
		const w = T,
			A = N1(w);
		if (w.classList.contains(o) || (a && w.matches(a))) return;
		let O = Wc(w, R, A),
			B = !1;
		(A === 'radio' || A === 'checkbox') && (B = T.checked),
			q6({ maskInputOptions: c, maskInputSelector: l, tagName: R, type: A }) &&
				(O = Os({
					input: w,
					maskInputOptions: c,
					maskInputSelector: l,
					unmaskInputSelector: u,
					tagName: R,
					type: A,
					value: O,
					maskInputFn: d,
				})),
			y(T, q(um)({ text: O, isChecked: B, userTriggered: b }, f));
		const H = T.name;
		A === 'radio' &&
			H &&
			B &&
			t.querySelectorAll(`input[type="radio"][name="${H}"]`).forEach(I => {
				if (I !== T) {
					const U = Os({
						input: I,
						maskInputOptions: c,
						maskInputSelector: l,
						unmaskInputSelector: u,
						tagName: R,
						type: A,
						value: Wc(I, R, A),
						maskInputFn: d,
					});
					y(I, q(um)({ text: U, isChecked: !B, userTriggered: !1 }, f));
				}
			});
	}
	function y(E, T) {
		const R = cm.get(E);
		if (!R || R.text !== T.text || R.isChecked !== T.isChecked) {
			cm.set(E, T);
			const b = n.getId(E);
			e(Object.assign(Object.assign({}, T), { id: b }));
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
			(xo('CSSGroupingRule') && r.parentRule instanceof CSSGroupingRule) ||
			(xo('CSSMediaRule') && r.parentRule instanceof CSSMediaRule) ||
			(xo('CSSSupportsRule') && r.parentRule instanceof CSSSupportsRule) ||
			(xo('CSSConditionRule') && r.parentRule instanceof CSSConditionRule)
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
function kb({ styleSheetRuleCb: e, mirror: t }, { win: n }) {
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
	Co('CSSGroupingRule')
		? (s.CSSGroupingRule = n.CSSGroupingRule)
		: (Co('CSSMediaRule') && (s.CSSMediaRule = n.CSSMediaRule),
		  Co('CSSConditionRule') && (s.CSSConditionRule = n.CSSConditionRule),
		  Co('CSSSupportsRule') && (s.CSSSupportsRule = n.CSSSupportsRule));
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
function xb({ styleDeclarationCb: e, mirror: t }, { win: n }) {
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
function Cb({ mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: i, sampling: s }) {
	const o = l =>
			Ds(
				q(u => {
					const c = qs(u);
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
function Nb({ fontCb: e, doc: t }) {
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
function Ob(e, t) {
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
function Ib(e, t = {}) {
	const n = e.doc.defaultView;
	if (!n) return () => {};
	Ob(e, t);
	const r = F1(e, e.doc),
		i = Sb(e),
		s = wb(e),
		o = z1(e),
		a = Tb(e),
		l = Rb(e),
		u = Cb(e),
		c = kb(e, { win: n }),
		d = xb(e, { win: n }),
		h = e.collectFonts ? Nb(e) : () => {},
		f = [];
	for (const _ of e.plugins) f.push(_.observer(_.callback, n, _.options));
	return q(() => {
		er.forEach(_ => _.reset()), r.disconnect(), i(), s(), o(), a(), l(), u();
		try {
			c(), d();
		} catch {}
		h(), f.forEach(_ => _());
	});
}
function xo(e) {
	return typeof window[e] < 'u';
}
function Co(e) {
	return !!(
		typeof window[e] < 'u' &&
		window[e].prototype &&
		'insertRule' in window[e].prototype &&
		'deleteRule' in window[e].prototype
	);
}
class Db {
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
class Ab {
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
		F1(
			Object.assign(Object.assign({}, this.bypassOptions), {
				doc: n,
				mutationCb: this.mutationCb,
				mirror: this.mirror,
				shadowDomManager: this,
			}),
			t
		),
			z1(
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
function Pb(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
			t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Lb(e, t, n, r, i, s) {
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
function Mb(e, t, n, r) {
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
	Ub = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var No = 0; No < Br.length; No++) Ub[Br.charCodeAt(No)] = No;
var Bb = function (e) {
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
		r % 3 === 2 ? (i = i.substring(0, i.length - 1) + '=') : r % 3 === 1 && (i = i.substring(0, i.length - 2) + '=='), i
	);
};
const dm = new Map();
function Fb(e, t) {
	let n = dm.get(e);
	return n || ((n = new Map()), dm.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
}
const $1 = (e, t, n) => {
	if (!e || !(H1(e, t) || typeof e == 'object')) return;
	const r = e.constructor.name,
		i = Fb(n, r);
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
			i = Bb(e);
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
			if (H1(e, t) || typeof e == 'object') {
				const r = e.constructor.name,
					i = $1(e, t, n);
				return { rr_type: r, index: i };
			}
		}
	}
	return e;
}
const zb = (e, t, n) => [...e].map(r => Jo(r, t, n)),
	H1 = (e, t) =>
		!![
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
		]
			.filter(i => typeof t[i] == 'function')
			.find(i => e instanceof t[i]);
function fm(e, t, n, r, i, s, o, a) {
	const l = [],
		u = Object.getOwnPropertyNames(e);
	for (const c of u)
		try {
			if (typeof e[c] != 'function') continue;
			const d = ui(e, c, function (h) {
				return function (...f) {
					const _ = h.apply(this, f);
					if (($1(_, a, e), !We(this.canvas, r, s, i))) {
						const y = o.getId(this.canvas),
							S = zb([...f], a, e),
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
function $b(e, t, n, r, i, s) {
	const o = [];
	return (
		o.push(...fm(t.WebGLRenderingContext.prototype, li.WebGL, e, n, r, i, s, t)),
		typeof t.WebGL2RenderingContext < 'u' &&
			o.push(...fm(t.WebGL2RenderingContext.prototype, li.WebGL2, e, n, r, i, s, t)),
		() => {
			o.forEach(a => a());
		}
	);
}
class Hb {
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
			t.recordCanvas === !0 && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector);
	}
	initCanvasMutationObserver(t, n, r, i) {
		this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
		const s = Mb(t, n, i, r),
			o = Lb(this.processMutation.bind(this), t, n, i, r, this.mirror),
			a = $b(this.processMutation.bind(this), t, n, i, r, this.mirror);
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
		const i = r.map(o => Pb(o, ['type'])),
			{ type: s } = r[0];
		this.mutationCb({ id: n, type: s, commands: i }), this.pendingCanvasMutations.delete(t);
	}
}
function De(e) {
	return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
}
let we, rs;
const $i = gb();
function _r(e = {}) {
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
		packFn: R,
		sampling: b = {},
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
	w !== void 0 && b.mousemove === void 0 && (b.mousemove = w);
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
	yb();
	let D,
		M = 0;
	const F = z => {
		for (const Rt of I || []) Rt.eventProcessor && (z = Rt.eventProcessor(z));
		return R && (z = R(z)), z;
	};
	we = (z, Rt) => {
		var Mt;
		if (
			(!((Mt = er[0]) === null || Mt === void 0) &&
				Mt.isFrozen() &&
				z.type !== ne.FullSnapshot &&
				!(z.type === ne.IncrementalSnapshot && z.data.source === Pe.Mutation) &&
				er.forEach(st => st.unfreeze()),
			t(F(z), Rt),
			z.type === ne.FullSnapshot)
		)
			(D = z), (M = 0);
		else if (z.type === ne.IncrementalSnapshot) {
			if (z.data.source === Pe.Mutation && z.data.isAttachIframe) return;
			M++;
			const st = r && M >= r,
				kt = n && z.timestamp - D.timestamp > n;
			(st || kt) && rs(!0);
		}
	};
	const ie = z => {
			we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.Mutation }, z) }));
		},
		ye = z => we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.Scroll }, z) })),
		Yn = z => we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.CanvasMutation }, z) })),
		it = new Db({ mutationCb: ie }),
		vr = new Hb({
			recordCanvas: A,
			mutationCb: Yn,
			win: window,
			blockClass: i,
			blockSelector: s,
			unblockSelector: o,
			mirror: $i,
		}),
		bt = new Ab({
			mutationCb: ie,
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
				sampling: b,
				slimDOMOptions: ae,
				iframeManager: it,
				canvasManager: vr,
			},
			mirror: $i,
		});
	rs = (z = !1) => {
		var Rt, Mt, st, kt;
		we(De({ type: ne.Meta, data: { href: window.location.href, width: P1(), height: A1() } }), z),
			er.forEach(xt => xt.lock());
		const [le, bi] = mb(document, {
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
				U1(xt) && it.addIframe(xt), B1(xt) && bt.addShadowRoot(xt.shadowRoot, document);
			},
			onIframeLoad: (xt, my) => {
				it.attachIframe(xt, my), bt.observeAttachShadow(xt);
			},
			keepIframeSrcFn: U,
		});
		if (!le) return console.warn('Failed to snapshot the document');
		($i.map = bi),
			we(
				De({
					type: ne.FullSnapshot,
					data: {
						node: le,
						initialOffset: {
							left:
								window.pageXOffset !== void 0
									? window.pageXOffset
									: (document == null ? void 0 : document.documentElement.scrollLeft) ||
									  ((Mt =
											(Rt = document == null ? void 0 : document.body) === null || Rt === void 0
												? void 0
												: Rt.parentElement) === null || Mt === void 0
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
			er.forEach(xt => xt.unlock());
	};
	try {
		const z = [];
		z.push(
			lt('DOMContentLoaded', () => {
				we(De({ type: ne.DomContentLoaded, data: {} }));
			})
		);
		const Rt = st => {
			var kt;
			return q(Ib)(
				{
					onMutation: Q,
					mutationCb: ie,
					mousemoveCb: (le, bi) => we(De({ type: ne.IncrementalSnapshot, data: { source: bi, positions: le } })),
					mouseInteractionCb: le =>
						we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.MouseInteraction }, le) })),
					scrollCb: ye,
					viewportResizeCb: le =>
						we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.ViewportResize }, le) })),
					inputCb: le => we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.Input }, le) })),
					mediaInteractionCb: le =>
						we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.MediaInteraction }, le) })),
					styleSheetRuleCb: le =>
						we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.StyleSheetRule }, le) })),
					styleDeclarationCb: le =>
						we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.StyleDeclaration }, le) })),
					canvasMutationCb: Yn,
					fontCb: le => we(De({ type: ne.IncrementalSnapshot, data: Object.assign({ source: Pe.Font }, le) })),
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
					sampling: b,
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
					shadowDomManager: bt,
					canvasManager: vr,
					plugins:
						((kt = I == null ? void 0 : I.filter(le => le.observer)) === null || kt === void 0
							? void 0
							: kt.map(le => ({
									observer: le.observer,
									options: le.options,
									callback: bi => we(De({ type: ne.Plugin, data: { plugin: le.name, payload: bi } })),
							  }))) || [],
				},
				T
			);
		};
		it.addLoadListener(st => {
			try {
				z.push(Rt(st.contentDocument));
			} catch (kt) {
				console.warn(kt);
			}
		});
		const Mt = () => {
			rs(), z.push(Rt(document));
		};
		return (
			document.readyState === 'interactive' || document.readyState === 'complete'
				? Mt()
				: z.push(
						lt(
							'load',
							() => {
								we(De({ type: ne.Load, data: {} })), Mt();
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
_r.addCustomEvent = (e, t) => {
	if (!we) throw new Error('please add custom event after start recording');
	we(De({ type: ne.Custom, data: { tag: e, payload: t } }));
};
_r.freezePage = () => {
	er.forEach(e => e.freeze());
};
_r.takeFullSnapshot = e => {
	if (!rs) throw new Error('please take full snapshot after start recording');
	rs(e);
};
_r.mirror = $i;
const jb = ['name', 'type', 'startTime', 'transferSize', 'duration'];
function hm(e) {
	return function (t) {
		return jb.every(n => e[n] === t[n]);
	};
}
function Gb(e, t) {
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
				l.duration > 0 && !n.find(hm(u)) && !o.find(hm(u)) && o.push(u);
				return;
			}
			s.push(l);
		}),
		[...(a ? [a] : []), ...n, ...i, ...s, ...o].sort((l, u) => l.startTime - u.startTime)
	);
}
function Yb(e) {
	const t = r => {
			const i = Gb(e.performanceEvents, r.getEntries());
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
const Wb = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
function qb() {
	const e = new Blob([Wb]);
	return URL.createObjectURL(e);
}
function Af(e) {
	return e > 9999999999 ? e : e * 1e3;
}
class j1 {
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
		return t ? Af(t) : null;
	}
}
class Vb {
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
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Destroying compression worker'),
			this._worker.terminate();
	}
	postMessage(t, n) {
		const r = this._getAndIncrementId();
		return new Promise((i, s) => {
			const o = ({ data: a }) => {
				const l = a;
				if (l.method === t && l.id === r) {
					if ((this._worker.removeEventListener('message', o), !l.success)) {
						(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('[Replay]', l.response),
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
class Qb {
	constructor(t) {
		(this._worker = new Vb(t)), (this._earliestTimestamp = null);
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
		const n = Af(t.timestamp);
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
class Kb {
	constructor(t) {
		(this._fallback = new j1()),
			(this._compression = new Qb(t)),
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
				x.log('[Replay] Failed to load the compression worker, falling back to simple buffer');
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
				x.warn('[Replay] Failed to add events when switching buffers.', r);
		}
	}
}
function Zb({ useCompression: e }) {
	if (e && window.Worker)
		try {
			const t = qb();
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Using compression worker');
			const n = new Worker(t);
			return new Kb(n);
		} catch {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Failed to create compression worker');
		}
	return (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Using simple buffer'), new j1();
}
function Xb(e) {
	Jb(), (e.session = void 0);
}
function Jb() {
	if ('sessionStorage' in ue)
		try {
			ue.sessionStorage.removeItem(If);
		} catch {}
}
function Xc(e, t, n = +new Date()) {
	return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function G1(e, t, n = +new Date()) {
	return Xc(e.started, t.maxSessionLife, n) || Xc(e.lastActivity, t.sessionIdleExpire, n);
}
function Y1(e) {
	return e === void 0 ? !1 : Math.random() < e;
}
function Pf(e) {
	if ('sessionStorage' in ue)
		try {
			ue.sessionStorage.setItem(If, JSON.stringify(e));
		} catch {}
}
function Lf(e) {
	const t = Date.now(),
		n = e.id || nn(),
		r = e.started || t,
		i = e.lastActivity || t,
		s = e.segmentId || 0,
		o = e.sampled;
	return { id: n, started: r, lastActivity: i, segmentId: s, sampled: o, shouldRefresh: !0 };
}
function eR(e, t) {
	return Y1(e) ? 'session' : t ? 'buffer' : !1;
}
function tR({ sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 }) {
	const r = eR(e, t),
		i = Lf({ sampled: r });
	return (
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`[Replay] Creating new session: ${i.id}`),
		n && Pf(i),
		i
	);
}
function nR() {
	if (!('sessionStorage' in ue)) return null;
	try {
		const t = ue.sessionStorage.getItem(If);
		if (!t) return null;
		const n = JSON.parse(t);
		return Lf(n);
	} catch {
		return null;
	}
}
function wu({ timeouts: e, currentSession: t, stickySession: n, sessionSampleRate: r, allowBuffering: i }) {
	const s = t || (n && nR());
	if (s)
		if (G1(s, e))
			if (s.shouldRefresh) (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Session has expired');
			else return { type: 'new', session: Lf({ sampled: !1 }) };
		else return { type: 'saved', session: s };
	return { type: 'new', session: tR({ stickySession: n, sessionSampleRate: r, allowBuffering: i }) };
}
async function Vs(e, t, n) {
	if (!e.eventBuffer || e.isPaused() || Af(t.timestamp) + e.timeouts.sessionIdlePause < Date.now()) return null;
	try {
		return n && e.eventBuffer.clear(), await e.eventBuffer.addEvent(t);
	} catch (i) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error(i), await e.stop('addEvent');
		const s = $().getClient();
		s && s.recordDroppedEvent('internal_sdk_error', 'replay');
	}
}
function Fa(e) {
	return !e.type;
}
function Jc(e) {
	return e.type === 'transaction';
}
function rR(e) {
	return e.type === 'replay_event';
}
function W1(e) {
	const t = iR();
	return (n, r) => {
		if (!Fa(n) && !Jc(n)) return;
		const i = r && r.statusCode;
		if (!(t && (!i || i < 200 || i >= 300))) {
			if (Jc(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
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
function iR() {
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
function or(e) {
	return { timestamp: Date.now() / 1e3, type: 'default', ...e };
}
function q1(e, t) {
	t.category !== 'sentry.transaction' &&
		(['ui.click', 'ui.input'].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
		e.addUpdate(
			() => (
				Vs(e, {
					type: ne.Custom,
					timestamp: (t.timestamp || 0) * 1e3,
					data: { tag: 'breadcrumb', payload: zt(t, 10, 1e3) },
				}),
				t.category === 'console'
			)
		));
}
const sR = new Set(['id', 'class', 'aria-label', 'role', 'name', 'alt', 'title', 'data-test-id', 'data-testid']);
function oR(e) {
	const t = {};
	for (const n in e)
		if (sR.has(n)) {
			let r = n;
			(n === 'data-testid' || n === 'data-test-id') && (r = 'testId'), (t[r] = e[n]);
		}
	return t;
}
const aR = e => t => {
	if (!e.isEnabled()) return;
	const n = lR(t);
	n && q1(e, n);
};
function lR(e) {
	let t, n;
	const r = e.name === 'click';
	try {
		(n = r ? cR(e.event) : V1(e.event)), (t = hr(n, { maxStringLength: 200 }));
	} catch {
		t = '<unknown>';
	}
	const i = n && '__sn' in n && n.__sn.type === za.Element ? n.__sn : null;
	return or({
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
						attributes: oR(i.attributes),
					},
			  }
			: {},
	});
}
function V1(e) {
	return dR(e) ? e.target : e;
}
const uR = 'button,a';
function cR(e) {
	const t = V1(e);
	return !t || !(t instanceof Element) ? t : t.closest(uR) || t;
}
function dR(e) {
	return !!e.target;
}
function fR(e, t) {
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
function hR(e, t) {
	return e.recordingMode !== 'buffer' || t.message === Df || !t.exception || t.type
		? !1
		: Y1(e.getOptions().errorSampleRate);
}
function pR(e, t = !1) {
	const n = t ? W1(e) : void 0;
	return (r, i) => {
		if (rR(r)) return delete r.breadcrumbs, r;
		if (!Fa(r) && !Jc(r)) return r;
		if (fR(r, i) && !e.getOptions()._experiments.captureExceptions)
			return (
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Ignoring error from rrweb internals', r),
				null
			);
		if (
			((hR(e, r) || e.recordingMode === 'session') && (r.tags = { ...r.tags, replayId: e.getSessionId() }),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals && Fa(r))
		) {
			const a = _R(r);
			mR({ message: `Tagging event (${r.event_id}) - ${r.message} - ${a.type}: ${a.value}` });
		}
		return n && n(r, { statusCode: 200 }), r;
	};
}
function mR(e) {
	const { category: t, level: n, message: r, ...i } = e;
	iT({ category: t || 'console', level: n || 'debug', message: `[debug]: ${r}`, ...i });
}
function _R(e) {
	return { type: 'Unknown', value: 'n/a', ...(e.exception && e.exception.values && e.exception.values[0]) };
}
function Sl(e, t) {
	return t.map(({ type: n, start: r, end: i, name: s, data: o }) =>
		Vs(e, {
			type: ne.Custom,
			timestamp: r,
			data: { tag: 'performanceSpan', payload: { op: n, description: s, startTimestamp: r, endTimestamp: i, data: o } },
		})
	);
}
function gR(e) {
	const { from: t, to: n } = e,
		r = Date.now() / 1e3;
	return { type: 'navigation.push', start: r, end: r, name: n, data: { previous: t } };
}
function yR(e) {
	return t => {
		if (!e.isEnabled()) return;
		const n = gR(t);
		n !== null && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (Sl(e, [n]), !1)));
	};
}
function vR(e, t) {
	return (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && e.getOptions()._experiments.traceInternals ? !1 : ER(t);
}
function ER(e) {
	const t = $().getClient(),
		n = t && t.getDsn();
	return n ? e.includes(n.host) : !1;
}
function wl(e, t) {
	e.isEnabled() && t !== null && (vR(e, t.name) || e.addUpdate(() => (Sl(e, [t]), !0)));
}
function SR(e) {
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
function wR(e) {
	return t => {
		if (!e.isEnabled()) return;
		const n = SR(t);
		wl(e, n);
	};
}
function TR(e) {
	const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
		i = r[bn];
	if (!t || !n || !i) return null;
	const { method: s, url: o, status_code: a } = i;
	return o === void 0
		? null
		: { type: 'resource.xhr', name: o, start: t / 1e3, end: n / 1e3, data: { method: s, statusCode: a } };
}
function bR(e) {
	return t => {
		if (!e.isEnabled()) return;
		const n = TR(t);
		wl(e, n);
	};
}
const Rn = 10,
	Mf = 11,
	ed = 12,
	un = 13,
	td = 14,
	ci = 15,
	Zt = 20,
	yt = 21,
	nd = 22,
	di = 23,
	Q1 = ['true', 'false', 'null'];
function RR(e, t) {
	if (!t.length) return e;
	let n = e;
	const r = t.length - 1,
		i = t[r];
	n = kR(n, i);
	for (let s = r; s >= 0; s--)
		switch (t[s]) {
			case Rn:
				n = `${n}}`;
				break;
			case Zt:
				n = `${n}]`;
				break;
		}
	return n;
}
function kR(e, t) {
	switch (t) {
		case Rn:
			return `${e}"~~":"~~"`;
		case Mf:
			return `${e}:"~~"`;
		case ed:
			return `${e}~~":"~~"`;
		case un:
			return NR(e);
		case td:
			return `${e}~~"`;
		case ci:
			return `${e},"~~":"~~"`;
		case Zt:
			return `${e}"~~"`;
		case yt:
			return xR(e);
		case nd:
			return `${e}~~"`;
		case di:
			return `${e},"~~"`;
	}
	return e;
}
function xR(e) {
	const t = CR(e);
	if (t > -1) {
		const n = e.slice(t + 1);
		return Q1.includes(n.trim()) ? `${e},"~~"` : `${e.slice(0, t + 1)}"~~"`;
	}
	return e;
}
function CR(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		const n = e[t];
		if (n === ',' || n === '[') return t;
	}
	return -1;
}
function NR(e) {
	const t = e.lastIndexOf(':'),
		n = e.slice(t + 1);
	return Q1.includes(n.trim()) ? `${e},"~~":"~~"` : `${e.slice(0, t + 1)}"~~"`;
}
function OR(e) {
	const t = [];
	for (let n = 0; n < e.length; n++) IR(t, e, n);
	return t;
}
function IR(e, t, n) {
	const r = e[e.length - 1],
		i = t[n];
	if (!/\s/.test(i)) {
		if (i === '"' && !K1(t, n)) {
			DR(e, r);
			return;
		}
		switch (i) {
			case '{':
				AR(e, r);
				break;
			case '[':
				PR(e, r);
				break;
			case ':':
				LR(e, r);
				break;
			case ',':
				MR(e, r);
				break;
			case '}':
				UR(e, r);
				break;
			case ']':
				BR(e, r);
				break;
		}
	}
}
function DR(e, t) {
	if (t === td) {
		e.pop(), e.push(ci);
		return;
	}
	if (t === nd) {
		e.pop(), e.push(di);
		return;
	}
	if (t === un) {
		e.push(td);
		return;
	}
	if (t === yt) {
		e.push(nd);
		return;
	}
	if (t === Rn) {
		e.push(ed);
		return;
	}
	if (t === ed) {
		e.pop(), e.push(Mf);
		return;
	}
}
function AR(e, t) {
	if (!t) {
		e.push(Rn);
		return;
	}
	if (t === un) {
		e.push(Rn);
		return;
	}
	if ((t === yt && e.push(Rn), t === Zt)) {
		e.push(Rn);
		return;
	}
}
function PR(e, t) {
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
function LR(e, t) {
	t === Mf && (e.pop(), e.push(un));
}
function MR(e, t) {
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
function UR(e, t) {
	t === Rn && e.pop(),
		t === un && (e.pop(), e.pop()),
		t === ci && (e.pop(), e.pop(), e.pop()),
		e[e.length - 1] === un && e.push(ci),
		e[e.length - 1] === yt && e.push(di);
}
function BR(e, t) {
	t === Zt && e.pop(),
		t === yt && (e.pop(), e.pop()),
		t === di && (e.pop(), e.pop(), e.pop()),
		e[e.length - 1] === un && e.push(ci),
		e[e.length - 1] === yt && e.push(di);
}
function K1(e, t) {
	return e[t - 1] === '\\' && !K1(e, t - 1);
}
function Z1(e) {
	const t = OR(e);
	return RR(e, t);
}
function $a(e, t) {
	if (e)
		try {
			if (typeof e == 'string') return t.encode(e).length;
			if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
			if (e instanceof FormData) {
				const n = ty(e);
				return t.encode(n).length;
			}
			if (e instanceof Blob) return e.size;
			if (e instanceof ArrayBuffer) return e.byteLength;
		} catch {}
}
function X1(e) {
	if (!e) return;
	const t = parseInt(e, 10);
	return isNaN(t) ? void 0 : t;
}
function J1(e) {
	if (typeof e == 'string') return e;
	if (e instanceof URLSearchParams) return e.toString();
	if (e instanceof FormData) return ty(e);
}
function ey(e, t) {
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
function As(e) {
	return { headers: {}, size: e, _meta: { warnings: ['URL_SKIPPED'] } };
}
function kn(e, t, n) {
	if (!t && Object.keys(e).length === 0) return;
	if (!t) return { headers: e };
	if (!n) return { headers: e, size: t };
	const r = { headers: e, size: t },
		{ body: i, warnings: s } = FR(n);
	return (r.body = i), s.length > 0 && (r._meta = { warnings: s }), r;
}
function rd(e, t) {
	return Object.keys(e).reduce((n, r) => {
		const i = r.toLowerCase();
		return t.includes(i) && e[r] && (n[i] = e[r]), n;
	}, {});
}
function ty(e) {
	return new URLSearchParams(e).toString();
}
function FR(e) {
	if (!e || typeof e != 'string') return { body: e, warnings: [] };
	const t = e.length > Ro;
	if (zR(e))
		try {
			const n = t ? Z1(e.slice(0, Ro)) : e;
			return { body: JSON.parse(n), warnings: t ? ['JSON_TRUNCATED'] : [] };
		} catch {
			return {
				body: t ? `${e.slice(0, Ro)}…` : e,
				warnings: t ? ['INVALID_JSON', 'TEXT_TRUNCATED'] : ['INVALID_JSON'],
			};
		}
	return { body: t ? `${e.slice(0, Ro)}…` : e, warnings: t ? ['TEXT_TRUNCATED'] : [] };
}
function zR(e) {
	const t = e[0],
		n = e[e.length - 1];
	return (t === '[' && n === ']') || (t === '{' && n === '}');
}
function ny(e, t) {
	return wi(e, t);
}
async function $R(e, t, n) {
	try {
		const r = await jR(e, t, n),
			i = ey('resource.fetch', r);
		wl(n.replay, i);
	} catch (r) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('[Replay] Failed to capture fetch breadcrumb', r);
	}
}
function HR(e, t, n) {
	const { input: r, response: i } = t,
		s = ry(r),
		o = $a(s, n.textEncoder),
		a = i ? X1(i.headers.get('content-length')) : void 0;
	o !== void 0 && (e.data.request_body_size = o), a !== void 0 && (e.data.response_body_size = a);
}
async function jR(e, t, n) {
	const { startTimestamp: r, endTimestamp: i } = t,
		{ url: s, method: o, status_code: a = 0, request_body_size: l, response_body_size: u } = e.data,
		c = ny(s, n.networkDetailAllowUrls),
		d = c ? GR(n, t.input, l) : As(l),
		h = await YR(c, n, t.response, u);
	return { startTimestamp: r, endTimestamp: i, url: s, method: o, statusCode: a, request: d, response: h };
}
function GR({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
	const i = qR(n, t);
	if (!e) return kn(i, r, void 0);
	const s = ry(n),
		o = J1(s);
	return kn(i, r, o);
}
async function YR(e, { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r }, i, s) {
	if (!e && s !== void 0) return As(s);
	const o = iy(i.headers, r);
	if (!t && s !== void 0) return kn(o, s, void 0);
	try {
		const a = i.clone(),
			l = await WR(a),
			u = l && l.length && s === void 0 ? $a(l, n) : s;
		return e ? (t ? kn(o, u, l) : kn(o, u, void 0)) : As(u);
	} catch {
		return kn(o, s, void 0);
	}
}
async function WR(e) {
	try {
		return await e.text();
	} catch {
		return;
	}
}
function ry(e = []) {
	if (!(e.length !== 2 || typeof e[1] != 'object')) return e[1].body;
}
function iy(e, t) {
	const n = {};
	return (
		t.forEach(r => {
			e.get(r) && (n[r] = e.get(r));
		}),
		n
	);
}
function qR(e, t) {
	return e.length === 1 && typeof e[0] != 'string' ? pm(e[0], t) : e.length === 2 ? pm(e[1], t) : {};
}
function pm(e, t) {
	if (!e) return {};
	const n = e.headers;
	return n ? (n instanceof Headers ? iy(n, t) : Array.isArray(n) ? {} : rd(n, t)) : {};
}
async function VR(e, t, n) {
	try {
		const r = KR(e, t, n),
			i = ey('resource.xhr', r);
		wl(n.replay, i);
	} catch (r) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('[Replay] Failed to capture fetch breadcrumb', r);
	}
}
function QR(e, t, n) {
	const { xhr: r, input: i } = t,
		s = $a(i, n.textEncoder),
		o = r.getResponseHeader('content-length')
			? X1(r.getResponseHeader('content-length'))
			: $a(r.response, n.textEncoder);
	s !== void 0 && (e.data.request_body_size = s), o !== void 0 && (e.data.response_body_size = o);
}
function KR(e, t, n) {
	const { startTimestamp: r, endTimestamp: i, input: s, xhr: o } = t,
		{ url: a, method: l, status_code: u = 0, request_body_size: c, response_body_size: d } = e.data;
	if (!a) return null;
	if (!ny(a, n.networkDetailAllowUrls)) {
		const p = As(c),
			m = As(d);
		return { startTimestamp: r, endTimestamp: i, url: a, method: l, statusCode: u, request: p, response: m };
	}
	const h = o[bn],
		f = h ? rd(h.request_headers, n.networkRequestHeaders) : {},
		_ = rd(ZR(o), n.networkResponseHeaders),
		y = kn(f, c, n.networkCaptureBodies ? J1(s) : void 0),
		S = kn(_, d, n.networkCaptureBodies ? t.xhr.responseText : void 0);
	return { startTimestamp: r, endTimestamp: i, url: a, method: l, statusCode: u, request: y, response: S };
}
function ZR(e) {
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
function XR(e) {
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
		t && t.on ? t.on('beforeAddBreadcrumb', (l, u) => JR(a, l, u)) : (Le('fetch', wR(e)), Le('xhr', bR(e)));
	} catch {}
}
function JR(e, t, n) {
	if (t.data)
		try {
			ek(t) && nk(n) && (QR(t, n, e), VR(t, n, e)), tk(t) && rk(n) && (HR(t, n, e), $R(t, n, e));
		} catch {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.warn('Error when enriching network breadcrumb');
		}
}
function ek(e) {
	return e.category === 'xhr';
}
function tk(e) {
	return e.category === 'fetch';
}
function nk(e) {
	return e && e.xhr;
}
function rk(e) {
	return e && e.response;
}
let mm = null;
const ik = e => t => {
	if (!e.isEnabled()) return;
	const n = sk(t);
	n && q1(e, n);
};
function sk(e) {
	const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
	return mm === t ||
		!t ||
		((mm = t),
		t.category &&
			(['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(t.category) || t.category.startsWith('ui.')))
		? null
		: t.category === 'console'
		? ok(t)
		: or(t);
}
function ok(e) {
	const t = e.data && e.data.arguments;
	if (!Array.isArray(t) || t.length === 0) return or(e);
	let n = !1;
	const r = t.map(i => {
		if (!i) return i;
		if (typeof i == 'string') return i.length > ko ? ((n = !0), `${i.slice(0, ko)}…`) : i;
		if (typeof i == 'object')
			try {
				const s = zt(i, 7),
					o = JSON.stringify(s);
				if (o.length > ko) {
					const a = Z1(o.slice(0, ko)),
						l = JSON.parse(a);
					return (n = !0), l;
				}
				return s;
			} catch {}
		return i;
	});
	return or({
		...e,
		data: { ...e.data, arguments: r, ...(n ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {}) },
	});
}
function ak(e) {
	const t = $().getScope(),
		n = $().getClient();
	t && t.addScopeListener(ik(e)),
		Le('dom', aR(e)),
		Le('history', yR(e)),
		XR(e),
		_l(pR(e, !_m(n))),
		_m(n) &&
			(n.on('afterSendEvent', W1(e)),
			n.on('createDsc', r => {
				const i = e.getSessionId();
				i && e.isEnabled() && e.recordingMode === 'session' && (r.replay_id = i);
			}));
}
function _m(e) {
	return !!(e && e.on);
}
async function lk(e) {
	try {
		return Promise.all(Sl(e, [uk(ue.performance.memory)]));
	} catch {
		return [];
	}
}
function uk(e) {
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
const gm = { resource: pk, paint: fk, navigation: hk, ['largest-contentful-paint']: mk };
function ck(e) {
	return e.map(dk).filter(Boolean);
}
function dk(e) {
	return gm[e.entryType] === void 0 ? null : gm[e.entryType](e);
}
function fi(e) {
	return ((ln || ue.performance.timeOrigin) + e) / 1e3;
}
function fk(e) {
	const { duration: t, entryType: n, name: r, startTime: i } = e,
		s = fi(i);
	return { type: n, name: r, start: s, end: s + t, data: void 0 };
}
function hk(e) {
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
function pk(e) {
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
function mk(e) {
	const { entryType: t, startTime: n, size: r } = e;
	let i = 0;
	if (ue.performance) {
		const a = ue.performance.getEntriesByType('navigation')[0];
		i = (a && a.activationStart) || 0;
	}
	const s = Math.max(n - i, 0),
		o = fi(i) + s / 1e3;
	return { type: t, name: t, start: o, end: o, data: { value: s, size: r, nodeId: _r.mirror.getId(e.element) } };
}
function _k(e, t, n) {
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
var id;
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
})(id || (id = {}));
function gk(e) {
	let t = !1;
	return (n, r) => {
		if (!e.checkAndHandleExpiredSession()) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn('[Replay] Received replay event after session expired.');
			return;
		}
		const i = r || !t;
		(t = !0),
			e.addUpdate(() => {
				if ((e.recordingMode === 'buffer' && i && e.setInitialState(), Vs(e, n, i), !i)) return !1;
				if ((vk(e, i), e.session && e.session.previousSessionId)) return !0;
				if (e.recordingMode === 'buffer' && e.session && e.eventBuffer) {
					const s = e.eventBuffer.getEarliestTimestamp();
					s && ((e.session.started = s), e.getOptions().stickySession && Pf(e.session));
				}
				return e.recordingMode === 'session' && e.flushImmediate(), !0;
			});
	};
}
function yk(e) {
	const t = e.getOptions();
	return {
		type: id.Custom,
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
function vk(e, t) {
	return !t || !e.session || e.session.segmentId !== 0 ? Promise.resolve(null) : Vs(e, yk(e), !1);
}
function Ek(e, t, n, r) {
	return Ti(r1(e, Rf(e), r, n), [
		[{ type: 'replay_event' }, e],
		[{ type: 'replay_recording', length: typeof t == 'string' ? new TextEncoder().encode(t).length : t.length }, t],
	]);
}
function Sk({ recordingData: e, headers: t }) {
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
async function wk({ client: e, scope: t, replayId: n, event: r }) {
	const i =
			typeof e._integrations == 'object' && e._integrations !== null && !Array.isArray(e._integrations)
				? Object.keys(e._integrations)
				: void 0,
		s = await p1(e.getOptions(), r, { event_id: n, integrations: i }, t);
	if (!s) return null;
	s.platform = s.platform || 'javascript';
	const o = e.getSdkMetadata && e.getSdkMetadata(),
		{ name: a, version: l } = (o && o.sdk) || {};
	return (s.sdk = { ...s.sdk, name: a || 'sentry.javascript.unknown', version: l || '0.0.0' }), s;
}
async function Tk({ recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: i, session: s }) {
	const o = Sk({ recordingData: e, headers: { segment_id: n } }),
		{ urls: a, errorIds: l, traceIds: u, initialTimestamp: c } = r,
		d = $(),
		h = d.getClient(),
		f = d.getScope(),
		_ = h && h.getTransport(),
		y = h && h.getDsn();
	if (!h || !f || !_ || !y || !s.sampled) return;
	const S = {
			type: U6,
			replay_start_timestamp: c / 1e3,
			timestamp: i / 1e3,
			error_ids: l,
			trace_ids: u,
			urls: a,
			replay_id: t,
			segment_id: n,
			replay_type: s.sampled,
		},
		p = await wk({ scope: f, client: h, replayId: t, event: S });
	if (!p) {
		h.recordDroppedEvent('event_processor', 'replay', S),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log('An event processor returned `null`, will not send event.');
		return;
	}
	const m = Ek(p, o, y, h.getOptions().tunnel);
	let g;
	try {
		g = await _.send(m);
	} catch (E) {
		const T = new Error(Df);
		try {
			T.cause = E;
		} catch {}
		throw T;
	}
	if (!g) return g;
	if (typeof g.statusCode == 'number' && (g.statusCode < 200 || g.statusCode >= 300)) throw new sy(g.statusCode);
	return g;
}
class sy extends Error {
	constructor(t) {
		super(`Transport returned status code ${t}`);
	}
}
async function oy(e, t = { count: 0, interval: G6 }) {
	const { recordingData: n, options: r } = e;
	if (n.length)
		try {
			return await Tk(e), !0;
		} catch (i) {
			if (i instanceof sy) throw i;
			if (
				(sT('Replays', { _retryCount: t.count }),
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					r._experiments &&
					r._experiments.captureExceptions &&
					yl(i),
				t.count >= Y6)
			) {
				const s = new Error(`${Df} - max retries exceeded`);
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
							await oy(e, t), s(!0);
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
		this.timeouts = { sessionIdlePause: B6, sessionIdleExpire: F6, maxSessionLife: z6 };
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
			(this._debouncedFlush = _k(() => this._flush(), this._options.flushMinDelay, {
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
		if (this._isEnabled && this.recordingMode === 'session') throw new Error('Replay recording is already in progress');
		if (this._isEnabled && this.recordingMode === 'buffer')
			throw new Error('Replay buffering is in progress, call `flush()` to save the replay');
		const t = this.session && this.session.id,
			{ session: n } = wu({
				timeouts: this.timeouts,
				stickySession: !!this._options.stickySession,
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
				stickySession: !!this._options.stickySession,
				currentSession: this.session,
				sessionSampleRate: 0,
				allowBuffering: !0,
			});
		(n.previousSessionId = t), (this.session = n), (this.recordingMode = 'buffer'), this._initializeRecording();
	}
	startRecording() {
		try {
			this._stopRecording = _r({
				...this._recordingOptions,
				...(this.recordingMode === 'buffer' && { checkoutEveryNms: j6 }),
				emit: gk(this),
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
					(this.getOptions()._experiments.traceInternals ? console.warn : x.log)(n);
				}
				(this._isEnabled = !1),
					this._removeListeners(),
					this.stopRecording(),
					this._debouncedFlush.cancel(),
					await this._flush({ force: !0 }),
					this.eventBuffer && this.eventBuffer.destroy(),
					(this.eventBuffer = null),
					Xb(this);
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
			Xc(this._lastActivity, this.timeouts.sessionIdlePause) &&
			this.session &&
			this.session.sampled === 'session'
		) {
			this.pause();
			return;
		}
		return this._loadAndCheckSession() ? (t !== this.getSessionId() ? (this._triggerFullSnapshot(), !1) : !0) : void 0;
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
			(this.eventBuffer = Zb({ useCompression: this._options.useCompression })),
			this._removeListeners(),
			this._addListeners(),
			(this._isEnabled = !0),
			this.startRecording();
	}
	_handleException(t) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('[Replay]', t),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				this._options._experiments &&
				this._options._experiments.captureExceptions &&
				yl(t);
	}
	_loadAndCheckSession() {
		const { type: t, session: n } = wu({
			timeouts: this.timeouts,
			stickySession: !!this._options.stickySession,
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
				this._hasInitializedCoreListeners || (ak(this), (this._hasInitializedCoreListeners = !0));
		} catch (t) {
			this._handleException(t);
		}
		'PerformanceObserver' in ue && (this._performanceObserver = Yb(this));
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
			ue.document.visibilityState === 'visible' ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
		};
	}
	__init14() {
		this._handleWindowBlur = () => {
			const t = or({ category: 'ui.blur' });
			this._doChangeToBackgroundTasks(t);
		};
	}
	__init15() {
		this._handleWindowFocus = () => {
			const t = or({ category: 'ui.focus' });
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
		const n = G1(this.session, this.timeouts);
		t && !n && this._createCustomBreadcrumb(t), this._conditionalFlush();
	}
	_doChangeToForegroundTasks(t) {
		if (!this.session) return;
		if (!this.checkAndHandleExpiredSession()) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log('[Replay] Document has become active, but session has expired');
			return;
		}
		t && this._createCustomBreadcrumb(t);
	}
	_triggerFullSnapshot(t = !0) {
		try {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Replay] Taking full rrweb snapshot'),
				_r.takeFullSnapshot(t);
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
			Vs(this, { type: ne.Custom, timestamp: t.timestamp || 0, data: { tag: 'breadcrumb', payload: t } });
		});
	}
	_addPerformanceEntries() {
		const t = [...this.performanceEvents];
		return (this.performanceEvents = []), Promise.all(Sl(this, ck(t)));
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
				x.error('[Replay] No session or eventBuffer found to flush.');
			return;
		}
		if (
			(await this._addPerformanceEntries(),
			!(!this.eventBuffer || !this.eventBuffer.hasEvents) && (await lk(this), !!this.eventBuffer))
		)
			try {
				this._updateInitialTimestampFromEventBuffer();
				const t = await this.eventBuffer.finish(),
					n = this.session.id,
					r = this._popEventContext(),
					i = this.session.segmentId++;
				this._maybeSaveSession(),
					await oy({
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
						x.error('[Replay] Attempting to finish replay event after session expired.');
					return;
				}
				if (!this.session) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error('[Replay] No session found to flush.');
					return;
				}
				if ((this._debouncedFlush.cancel(), !this._flushLock)) {
					(this._flushLock = this._runFlush()), await this._flushLock, (this._flushLock = null);
					return;
				}
				try {
					await this._flushLock;
				} catch (n) {
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.error(n);
				} finally {
					this._debouncedFlush();
				}
			}
		};
	}
	_maybeSaveSession() {
		this.session && this._options.stickySession && Pf(this.session);
	}
	__init18() {
		this._onMutationHandler = t => {
			const n = t.length,
				r = this._options._experiments.mutationLimit || 0,
				i = this._options._experiments.mutationBreadcrumbLimit || 1e3,
				s = r && n > r;
			if (n > i || s) {
				const o = or({ category: 'replay.mutations', data: { count: n } });
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
function bk({
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
function ym() {
	return typeof window < 'u' && (!e1() || Rk());
}
function Rk() {
	return typeof process < 'u' && process.type === 'renderer';
}
const vm = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
	kk = ['content-length', 'content-type', 'accept'];
let Em = !1;
class Ps {
	static __initStatic() {
		this.id = 'Replay';
	}
	__init() {
		this.name = Ps.id;
	}
	constructor({
		flushMinDelay: t = $6,
		flushMaxDelay: n = H6,
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
		blockSelector: R,
		maskInputOptions: b,
		maskTextClass: w,
		maskTextSelector: A,
		ignoreClass: O,
	} = {}) {
		if (
			(Ps.prototype.__init.call(this),
			(this._recordingOptions = {
				maskAllInputs: u,
				maskAllText: l,
				maskInputOptions: { ...(b || {}), password: !0 },
				maskTextFn: E,
				maskInputFn: E,
				...bk({
					mask: y,
					unmask: S,
					block: p,
					unblock: m,
					ignore: g,
					blockClass: T,
					blockSelector: R,
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
				networkRequestHeaders: Sm(f),
				networkResponseHeaders: Sm(_),
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
					? `${this._recordingOptions.blockSelector},${vm}`
					: vm),
			this._isInitialized && ym())
		)
			throw new Error('Multiple Sentry Session Replay instances are not supported');
		this._isInitialized = !0;
	}
	get _isInitialized() {
		return Em;
	}
	set _isInitialized(t) {
		Em = t;
	}
	setupOnce() {
		ym() && (this._setup(), setTimeout(() => this._initialize()));
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
		const t = xk(this._initialOptions);
		this._replay = new Ee({ options: t, recordingOptions: this._recordingOptions });
	}
}
Ps.__initStatic();
function xk(e) {
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
function Sm(e) {
	return [...kk, ...e.map(t => t.toLowerCase())];
}
const ee = rt;
function Ck() {
	ee && ee.document
		? ee.document.addEventListener('visibilitychange', () => {
				const e = Ws();
				if (ee.document.hidden && e) {
					const t = 'cancelled';
					(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
						x.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
						e.status || e.setStatus(t),
						e.setTag('visibilitychange', 'document.hidden'),
						e.finish();
				}
		  })
		: (typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
		  x.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}
const Uf = (e, t, n) => {
		let r, i;
		return s => {
			t.value >= 0 &&
				(s || n) &&
				((i = t.value - (r || 0)), (i || r === void 0) && ((r = t.value), (t.delta = i), e(t)));
		};
	},
	Nk = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
	Ok = () => {
		const e = ee.performance.timing,
			t = ee.performance.navigation.type,
			n = { entryType: 'navigation', startTime: 0, type: t == 2 ? 'back_forward' : t === 1 ? 'reload' : 'navigate' };
		for (const r in e) r !== 'navigationStart' && r !== 'toJSON' && (n[r] = Math.max(e[r] - e.navigationStart, 0));
		return n;
	},
	ay = () =>
		ee.__WEB_VITALS_POLYFILL__
			? ee.performance && ((performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || Ok())
			: ee.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0],
	ly = () => {
		const e = ay();
		return (e && e.activationStart) || 0;
	},
	Bf = (e, t) => {
		const n = ay();
		let r = 'navigate';
		return (
			n && (ee.document.prerendering || ly() > 0 ? (r = 'prerender') : (r = n.type.replace(/_/g, '-'))),
			{ name: e, value: typeof t > 'u' ? -1 : t, rating: 'good', delta: 0, entries: [], id: Nk(), navigationType: r }
		);
	},
	Qs = (e, t, n) => {
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
			(r.type === 'pagehide' || ee.document.visibilityState === 'hidden') &&
				(e(r), t && (removeEventListener('visibilitychange', n, !0), removeEventListener('pagehide', n, !0)));
		};
		addEventListener('visibilitychange', n, !0), addEventListener('pagehide', n, !0);
	},
	Ik = e => {
		const t = Bf('CLS', 0);
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
			o = Qs('layout-shift', s);
		if (o) {
			n = Uf(e, t);
			const a = () => {
				s(o.takeRecords()), n(!0);
			};
			return Tl(a), a;
		}
	};
let ea = -1;
const Dk = () => (ee.document.visibilityState === 'hidden' && !ee.document.prerendering ? 0 : 1 / 0),
	Ak = () => {
		Tl(({ timeStamp: e }) => {
			ea = e;
		}, !0);
	},
	Ff = () => (
		ea < 0 && ((ea = Dk()), Ak()),
		{
			get firstHiddenTime() {
				return ea;
			},
		}
	),
	Pk = e => {
		const t = Ff(),
			n = Bf('FID');
		let r;
		const i = a => {
				a.startTime < t.firstHiddenTime && ((n.value = a.processingStart - a.startTime), n.entries.push(a), r(!0));
			},
			s = a => {
				a.forEach(i);
			},
			o = Qs('first-input', s);
		(r = Uf(e, n)),
			o &&
				Tl(() => {
					s(o.takeRecords()), o.disconnect();
				}, !0);
	},
	wm = {},
	Lk = e => {
		const t = Ff(),
			n = Bf('LCP');
		let r;
		const i = o => {
				const a = o[o.length - 1];
				if (a) {
					const l = Math.max(a.startTime - ly(), 0);
					l < t.firstHiddenTime && ((n.value = l), (n.entries = [a]), r());
				}
			},
			s = Qs('largest-contentful-paint', i);
		if (s) {
			r = Uf(e, n);
			const o = () => {
				wm[n.id] || (i(s.takeRecords()), s.disconnect(), (wm[n.id] = !0), r(!0));
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
function be(e) {
	return e / 1e3;
}
function uy() {
	return ee && ee.addEventListener && ee.performance;
}
let Tm = 0,
	me = {},
	Ft,
	is;
function Mk() {
	const e = uy();
	if (e && ln) {
		e.mark && ee.performance.mark('sentry-tracing-init'), $k();
		const t = Fk(),
			n = zk();
		return () => {
			t && t(), n && n();
		};
	}
	return () => {};
}
function Uk() {
	Qs('longtask', t => {
		for (const n of t) {
			const r = Ws();
			if (!r) return;
			const i = be(ln + n.startTime),
				s = be(n.duration);
			r.startChild({
				description: 'Main UI thread blocked',
				op: 'ui.long-task',
				startTimestamp: i,
				endTimestamp: i + s,
			});
		}
	});
}
function Bk() {
	Qs(
		'event',
		t => {
			for (const n of t) {
				const r = Ws();
				if (!r) return;
				if (n.name === 'click') {
					const i = be(ln + n.startTime),
						s = be(n.duration);
					r.startChild({
						description: hr(n.target),
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
function Fk() {
	return Ik(e => {
		const t = e.entries.pop();
		t &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding CLS'),
			(me.cls = { value: e.value, unit: '' }),
			(is = t));
	});
}
function zk() {
	return Lk(e => {
		const t = e.entries.pop();
		t &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding LCP'),
			(me.lcp = { value: e.value, unit: 'millisecond' }),
			(Ft = t));
	});
}
function $k() {
	Pk(e => {
		const t = e.entries.pop();
		if (!t) return;
		const n = be(ln),
			r = be(t.startTime);
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding FID'),
			(me.fid = { value: e.value, unit: 'millisecond' }),
			(me['mark.fid'] = { value: n + r, unit: 'second' });
	});
}
function Hk(e) {
	const t = uy();
	if (!t || !ee.performance.getEntries || !ln) return;
	(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
		x.log('[Tracing] Adding & adjusting spans using Performance API');
	const n = be(ln),
		r = t.getEntries();
	let i, s;
	if (
		(r.slice(Tm).forEach(o => {
			const a = be(o.startTime),
				l = be(o.duration);
			if (!(e.op === 'navigation' && n + a < e.startTimestamp))
				switch (o.entryType) {
					case 'navigation': {
						Gk(e, o, n), (i = n + be(o.responseStart)), (s = n + be(o.requestStart));
						break;
					}
					case 'mark':
					case 'paint':
					case 'measure': {
						jk(e, o, a, l, n);
						const u = Ff(),
							c = o.startTime < u.firstHiddenTime;
						o.name === 'first-paint' &&
							c &&
							((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding FP'),
							(me.fp = { value: o.startTime, unit: 'millisecond' })),
							o.name === 'first-contentful-paint' &&
								c &&
								((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding FCP'),
								(me.fcp = { value: o.startTime, unit: 'millisecond' }));
						break;
					}
					case 'resource': {
						const u = o.name.replace(ee.location.origin, '');
						Wk(e, o, u, a, l, n);
						break;
					}
				}
		}),
		(Tm = Math.max(r.length - 1, 0)),
		qk(e),
		e.op === 'pageload')
	) {
		typeof i == 'number' &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding TTFB'),
			(me.ttfb = { value: (i - e.startTimestamp) * 1e3, unit: 'millisecond' }),
			typeof s == 'number' && s <= i && (me['ttfb.requestTime'] = { value: (i - s) * 1e3, unit: 'millisecond' })),
			['fcp', 'fp', 'lcp'].forEach(a => {
				if (!me[a] || n >= e.startTimestamp) return;
				const l = me[a].value,
					u = n + be(l),
					c = Math.abs((u - e.startTimestamp) * 1e3),
					d = c - l;
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.log(`[Measurements] Normalized ${a} from ${l} to ${c} (${d})`),
					(me[a].value = c);
			});
		const o = me['mark.fid'];
		o &&
			me.fid &&
			(hi(e, {
				description: 'first input delay',
				endTimestamp: o.value + be(me.fid.value),
				op: 'ui.action',
				startTimestamp: o.value,
			}),
			delete me['mark.fid']),
			'fcp' in me || delete me.cls,
			Object.keys(me).forEach(a => {
				e.setMeasurement(a, me[a].value, me[a].unit);
			}),
			Vk(e);
	}
	(Ft = void 0), (is = void 0), (me = {});
}
function jk(e, t, n, r, i) {
	const s = i + n,
		o = s + r;
	return hi(e, { description: t.name, endTimestamp: o, op: t.entryType, startTimestamp: s }), s;
}
function Gk(e, t, n) {
	['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(r => {
		Oo(e, t, r, n);
	}),
		Oo(e, t, 'secureConnection', n, 'TLS/SSL', 'connectEnd'),
		Oo(e, t, 'fetch', n, 'cache', 'domainLookupStart'),
		Oo(e, t, 'domainLookup', n, 'DNS'),
		Yk(e, t, n);
}
function Oo(e, t, n, r, i, s) {
	const o = s ? t[s] : t[`${n}End`],
		a = t[`${n}Start`];
	!a || !o || hi(e, { op: 'browser', description: i || n, startTimestamp: r + be(a), endTimestamp: r + be(o) });
}
function Yk(e, t, n) {
	hi(e, {
		op: 'browser',
		description: 'request',
		startTimestamp: n + be(t.requestStart),
		endTimestamp: n + be(t.responseEnd),
	}),
		hi(e, {
			op: 'browser',
			description: 'response',
			startTimestamp: n + be(t.responseStart),
			endTimestamp: n + be(t.responseEnd),
		});
}
function Wk(e, t, n, r, i, s) {
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
function qk(e) {
	const t = ee.navigator;
	if (!t) return;
	const n = t.connection;
	n &&
		(n.effectiveType && e.setTag('effectiveConnectionType', n.effectiveType),
		n.type && e.setTag('connectionType', n.type),
		Tu(n.rtt) && (me['connection.rtt'] = { value: n.rtt, unit: 'millisecond' })),
		Tu(t.deviceMemory) && e.setTag('deviceMemory', `${t.deviceMemory} GB`),
		Tu(t.hardwareConcurrency) && e.setTag('hardwareConcurrency', String(t.hardwareConcurrency));
}
function Vk(e) {
	Ft &&
		((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding LCP Data'),
		Ft.element && e.setTag('lcp.element', hr(Ft.element)),
		Ft.id && e.setTag('lcp.id', Ft.id),
		Ft.url && e.setTag('lcp.url', Ft.url.trim().slice(0, 200)),
		e.setTag('lcp.size', Ft.size)),
		is &&
			is.sources &&
			((typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log('[Measurements] Adding CLS Data'),
			is.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, hr(t.node))));
}
const sd = ['localhost', /^\//],
	od = { traceFetch: !0, traceXHR: !0, tracingOrigins: sd, tracePropagationTargets: sd };
function Qk(e) {
	const {
			traceFetch: t,
			traceXHR: n,
			tracePropagationTargets: r,
			tracingOrigins: i,
			shouldCreateSpanForRequest: s,
		} = { traceFetch: od.traceFetch, traceXHR: od.traceXHR, ...e },
		o = typeof s == 'function' ? s : u => !0,
		a = u => Kk(u, r || i),
		l = {};
	t &&
		Le('fetch', u => {
			Zk(u, o, a, l);
		}),
		n &&
			Le('xhr', u => {
				Jk(u, o, a, l);
			});
}
function Kk(e, t) {
	return wi(e, t || sd);
}
function Zk(e, t, n, r) {
	if (!xf() || !(e.fetchData && t(e.fetchData.url))) return;
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
		n(e.fetchData.url) && (h.headers = Xk(d, a.getDynamicSamplingContext(), c, h));
	}
}
function Xk(e, t, n, r) {
	const i = s1(t),
		s = n.toTraceparent(),
		o = typeof Request < 'u' && zn(e, Request) ? e.headers : r.headers;
	if (o)
		if (typeof Headers < 'u' && zn(o, Headers)) {
			const a = new Headers(o);
			return a.append('sentry-trace', s), i && a.append($c, i), a;
		} else if (Array.isArray(o)) {
			const a = [...o, ['sentry-trace', s]];
			return i && a.push([$c, i]), a;
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
function Jk(e, t, n, r) {
	const i = e.xhr,
		s = i && i[bn];
	if (!xf() || (i && i.__sentry_own_request__) || !(i && s && t(s.url))) return;
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
					d = s1(c);
				d && i.setRequestHeader($c, d);
			} catch {}
	}
}
function ex(e, t = !0, n = !0) {
	if (!ee || !ee.location) {
		(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
			x.warn('Could not initialize routing instrumentation due to invalid location');
		return;
	}
	let r = ee.location.href,
		i;
	t &&
		(i = e({
			name: ee.location.pathname,
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
							x.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
						i.finish()),
					(i = e({ name: ee.location.pathname, op: 'navigation', metadata: { source: 'url' } })));
			});
}
const tx = 'BrowserTracing',
	nx = {
		...Zo,
		markBackgroundTransactions: !0,
		routingInstrumentation: ex,
		startTransactionOnLocationChange: !0,
		startTransactionOnPageLoad: !0,
		enableLongTask: !0,
		_experiments: {},
		...od,
	};
class zf {
	__init() {
		this.name = tx;
	}
	constructor(t) {
		zf.prototype.__init.call(this),
			rT(),
			(this.options = { ...nx, ...t }),
			this.options._experiments.enableLongTask !== void 0 &&
				(this.options.enableLongTask = this.options._experiments.enableLongTask),
			t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins),
			(this._collectWebVitals = Mk()),
			this.options.enableLongTask && Uk(),
			this.options._experiments.enableInteractions && Bk();
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
			o && Ck(),
			d.enableInteractions && this._registerInteractionListener(),
			Qk({ traceFetch: a, traceXHR: l, tracePropagationTargets: u, shouldCreateSpanForRequest: c });
	}
	_createRouteTransaction(t) {
		if (!this._getCurrentHub) {
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
			return;
		}
		const { beforeNavigate: n, idleTimeout: r, finalTimeout: i, heartbeatInterval: s } = this.options,
			o = t.op === 'pageload',
			a = o ? bm('sentry-trace') : null,
			l = o ? bm('baggage') : null,
			u = a ? x3(a) : void 0,
			c = l ? $3(l) : void 0,
			d = { ...t, ...u, metadata: { ...t.metadata, dynamicSamplingContext: u && !c ? {} : c }, trimEnd: !0 },
			h = typeof n == 'function' ? n(d) : d,
			f = h === void 0 ? { ...d, sampled: !1 } : h;
		(f.metadata = f.name !== d.name ? { ...f.metadata, source: 'custom' } : f.metadata),
			(this._latestRouteName = f.name),
			(this._latestRouteSource = f.metadata && f.metadata.source),
			f.sampled === !1 &&
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
				x.log(`[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`),
			(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) && x.log(`[Tracing] Starting ${f.op} transaction on scope`);
		const _ = this._getCurrentHub(),
			{ location: y } = ee,
			S = Gp(_, f, r, i, !0, { location: y }, s);
		return (
			S.registerBeforeFinishCallback(p => {
				this._collectWebVitals(), Hk(p);
			}),
			S
		);
	}
	_registerInteractionListener() {
		let t;
		const n = () => {
			const { idleTimeout: r, finalTimeout: i, heartbeatInterval: s } = this.options,
				o = 'ui.action.click',
				a = Ws();
			if (a && a.op && ['navigation', 'pageload'].includes(a.op)) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.warn(
						`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
					);
				return;
			}
			if ((t && (t.setFinishReason('interactionInterrupted'), t.finish(), (t = void 0)), !this._getCurrentHub)) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
				return;
			}
			if (!this._latestRouteName) {
				(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
					x.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
				return;
			}
			const l = this._getCurrentHub(),
				{ location: u } = ee,
				c = { name: this._latestRouteName, op: o, trimEnd: !0, metadata: { source: this._latestRouteSource || 'url' } };
			t = Gp(l, c, r, i, !0, { location: u }, s);
		};
		['click'].forEach(r => {
			addEventListener(r, n, { once: !1, capture: !0 });
		});
	}
}
function bm(e) {
	const t = H5(`meta[name=${e}]`);
	return t ? t.getAttribute('content') : null;
}
function rx(e) {
	(e._metadata = e._metadata || {}),
		(e._metadata.sdk = e._metadata.sdk || {
			name: 'sentry.javascript.react',
			packages: [{ name: 'npm:@sentry/react', version: Pa }],
			version: Pa,
		}),
		L6(e);
}
var cy = { exports: {} },
	X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = typeof Symbol == 'function' && Symbol.for,
	$f = Ie ? Symbol.for('react.element') : 60103,
	Hf = Ie ? Symbol.for('react.portal') : 60106,
	bl = Ie ? Symbol.for('react.fragment') : 60107,
	Rl = Ie ? Symbol.for('react.strict_mode') : 60108,
	kl = Ie ? Symbol.for('react.profiler') : 60114,
	xl = Ie ? Symbol.for('react.provider') : 60109,
	Cl = Ie ? Symbol.for('react.context') : 60110,
	jf = Ie ? Symbol.for('react.async_mode') : 60111,
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
			case $f:
				switch (((e = e.type), e)) {
					case jf:
					case Nl:
					case bl:
					case kl:
					case Rl:
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
			case Hf:
				return t;
		}
	}
}
function dy(e) {
	return ht(e) === Nl;
}
X.AsyncMode = jf;
X.ConcurrentMode = Nl;
X.ContextConsumer = Cl;
X.ContextProvider = xl;
X.Element = $f;
X.ForwardRef = Ol;
X.Fragment = bl;
X.Lazy = Al;
X.Memo = Dl;
X.Portal = Hf;
X.Profiler = kl;
X.StrictMode = Rl;
X.Suspense = Il;
X.isAsyncMode = function (e) {
	return dy(e) || ht(e) === jf;
};
X.isConcurrentMode = dy;
X.isContextConsumer = function (e) {
	return ht(e) === Cl;
};
X.isContextProvider = function (e) {
	return ht(e) === xl;
};
X.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === $f;
};
X.isForwardRef = function (e) {
	return ht(e) === Ol;
};
X.isFragment = function (e) {
	return ht(e) === bl;
};
X.isLazy = function (e) {
	return ht(e) === Al;
};
X.isMemo = function (e) {
	return ht(e) === Dl;
};
X.isPortal = function (e) {
	return ht(e) === Hf;
};
X.isProfiler = function (e) {
	return ht(e) === kl;
};
X.isStrictMode = function (e) {
	return ht(e) === Rl;
};
X.isSuspense = function (e) {
	return ht(e) === Il;
};
X.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === bl ||
		e === Nl ||
		e === kl ||
		e === Rl ||
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
X.typeOf = ht;
cy.exports = X;
var ux = cy.exports,
	fy = ux,
	cx = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
	dx = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
	hy = {};
hy[fy.ForwardRef] = cx;
hy[fy.Memo] = dx;
function fx(e) {
	const t = e.match(/^([^.]+)/);
	return t !== null && parseInt(t[0]) >= 17;
}
const Rm = { componentStack: null, error: null, eventId: null };
function hx(e, t) {
	const n = new WeakMap();
	function r(i, s) {
		if (!n.has(i)) {
			if (i.cause) return n.set(i, !0), r(i.cause, s);
			i.cause = s;
		}
	}
	r(e, t);
}
class ss extends C.Component {
	__init() {
		this.state = Rm;
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
				!r.type && r.event_id === this._lastEventId && Jp({ ...t.dialogOptions, eventId: this._lastEventId });
			}));
	}
	componentDidCatch(t, { componentStack: n }) {
		const { beforeCapture: r, onError: i, showDialog: s, dialogOptions: o } = this.props;
		d1(a => {
			if (fx(C.version) && vf(t)) {
				const u = new Error(t.message);
				(u.name = `React ErrorBoundary ${u.name}`), (u.stack = n), hx(t, u);
			}
			r && r(a, t, n);
			const l = yl(t, { contexts: { react: { componentStack: n } } });
			i && i(t, n, l),
				s && ((this._lastEventId = l), this._openFallbackReportDialog && Jp({ ...o, eventId: l })),
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
			t && t(n, r, i), this.setState(Rm);
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
				C.isValidElement(i)
					? i
					: (t &&
							(typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__) &&
							x.warn('fallback did not produce a valid ReactElement'),
					  null)
			);
		}
		return typeof n == 'function' ? n() : n;
	}
}
const px = new Zv({
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
	queryCache: new e_({
		onError: (e, t) => {
			t.state.data !== void 0 && console.error(`Something went wrong: ${e == null ? void 0 : e.message}`);
		},
	}),
});
function mx() {
	return v('div', {
		className: 'App',
		children: L(m2, {
			client: px,
			children: [
				L(Mv, {
					children: [
						v(Ao, { path: '/', element: v(P5, {}) }),
						v(Ao, {
							path: '/:username',
							element: v(ss, {
								fallback: v(xp, {}),
								children: v(C.Suspense, {
									fallback: v('div', {
										className: 'w-screen h-screen flex items-center justify-center',
										children: v(uf, {}),
									}),
									children: v(O5, {}),
								}),
							}),
						}),
						v(Ao, { path: '/*', element: v(xp, {}) }),
					],
				}),
				v(I5, {}),
			],
		}),
	});
}
var py,
	km = i2;
(py = km.createRoot), km.hydrateRoot;
rx({
	dsn: 'https://77ec0c2e21604ed185bcd63160d17cbc@o4505182036885504.ingest.sentry.io/4505182040227840',
	integrations: [new zf(), new Ps()],
	tracesSampleRate: 1,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
});
const _x = py(document.getElementById('root'));
_x.render(v(J.StrictMode, { children: v(Uv, { basename: '/', children: v(mx, {}) }) }));
//# sourceMappingURL=index-5d70f2a9.js.map
