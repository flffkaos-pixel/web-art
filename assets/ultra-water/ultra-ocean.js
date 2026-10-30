var e = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, t = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, n = 1e3, r = 1001, i = 1002, a = 1003, o = 1004, s = 1005, c = 1006, l = 1007, u = 1008, d = 1009, f = 1010, p = 1011, m = 1012, h = 1013, g = 1014, _ = 1015, v = 1016, y = 1017, b = 1018, x = 1020, S = 35902, C = 35899, w = 1021, T = 1022, E = 1023, D = 1026, O = 1027, k = 1028, A = 1029, j = 1030, ee = 1031, te = 1033, M = 33776, ne = 33777, N = 33778, re = 33779, P = 35840, ie = 35841, F = 35842, ae = 35843, oe = 36196, se = 37492, I = 37496, L = 37488, ce = 37489, le = 37490, ue = 37491, de = 37808, fe = 37809, pe = 37810, me = 37811, he = 37812, ge = 37813, _e = 37814, ve = 37815, ye = 37816, be = 37817, xe = 37818, Se = 37819, Ce = 37820, we = 37821, Te = 36492, R = 36494, Ee = 36495, De = 36283, Oe = 36284, ke = 36285, z = 36286, Ae = 2300, je = 2301, Me = 2302, B = 2303, Ne = 2400, V = 2401, H = 2402, Pe = 3200, Fe = "srgb", Ie = "srgb-linear", Le = "linear", Re = "srgb", ze = 7680, Be = 35044, Ve = "300 es", He = 2e3;
function Ue(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function We(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ge(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Ke() {
	let e = Ge("canvas");
	return e.style.display = "block", e;
}
var qe = {};
function Je(...e) {
	let t = "THREE." + e.shift();
	console.log(t, ...e);
}
function Ye(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function U(...e) {
	e = Ye(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function W(...e) {
	e = Ye(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Xe(...e) {
	let t = e.join(" ");
	t in qe || (qe[t] = !0, U(...e));
}
function Ze(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var Qe = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, $e = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, et = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), tt = 1234567, nt = Math.PI / 180, rt = 180 / Math.PI;
function it() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (et[e & 255] + et[e >> 8 & 255] + et[e >> 16 & 255] + et[e >> 24 & 255] + "-" + et[t & 255] + et[t >> 8 & 255] + "-" + et[t >> 16 & 15 | 64] + et[t >> 24 & 255] + "-" + et[n & 63 | 128] + et[n >> 8 & 255] + "-" + et[n >> 16 & 255] + et[n >> 24 & 255] + et[r & 255] + et[r >> 8 & 255] + et[r >> 16 & 255] + et[r >> 24 & 255]).toLowerCase();
}
function G(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function at(e, t) {
	return (e % t + t) % t;
}
function ot(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function st(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function ct(e, t, n) {
	return (1 - n) * e + n * t;
}
function lt(e, t, n, r) {
	return ct(e, t, 1 - Math.exp(-n * r));
}
function ut(e, t = 1) {
	return t - Math.abs(at(e, t * 2) - t);
}
function dt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function ft(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function pt(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function mt(e, t) {
	return e + Math.random() * (t - e);
}
function ht(e) {
	return e * (.5 - Math.random());
}
function gt(e) {
	e !== void 0 && (tt = e);
	let t = tt += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function _t(e) {
	return e * nt;
}
function vt(e) {
	return e * rt;
}
function yt(e) {
	return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function bt(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function xt(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function St(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: U("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function Ct(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array:
		case Uint8ClampedArray: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function wt(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array:
		case Uint8ClampedArray: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
var Tt = {
	DEG2RAD: nt,
	RAD2DEG: rt,
	generateUUID: it,
	clamp: G,
	euclideanModulo: at,
	mapLinear: ot,
	inverseLerp: st,
	lerp: ct,
	damp: lt,
	pingpong: ut,
	smoothstep: dt,
	smootherstep: ft,
	randInt: pt,
	randFloat: mt,
	randFloatSpread: ht,
	seededRandom: gt,
	degToRad: _t,
	radToDeg: vt,
	isPowerOfTwo: yt,
	ceilPowerOfTwo: bt,
	floorPowerOfTwo: xt,
	setQuaternionFromProperEuler: St,
	normalize: wt,
	denormalize: Ct
}, K = class e {
	static {
		e.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = G(this.x, e.x, t.x), this.y = G(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = G(this.x, e, t), this.y = G(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(G(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(G(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Et = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: U("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(G(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, q = class e {
	static {
		e.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(Ot.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(Ot.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = G(this.x, e.x, t.x), this.y = G(this.y, e.y, t.y), this.z = G(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = G(this.x, e, t), this.y = G(this.y, e, t), this.z = G(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(G(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Dt.copy(this).projectOnVector(e), this.sub(Dt);
	}
	reflect(e) {
		return this.sub(Dt.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(G(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, Dt = /*@__PURE__*/ new q(), Ot = /*@__PURE__*/ new Et(), J = class e {
	static {
		e.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return Xe("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(kt.makeScale(e, t)), this;
	}
	rotate(e) {
		return Xe("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(kt.makeRotation(-e)), this;
	}
	translate(e, t) {
		return Xe("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(kt.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, kt = /*@__PURE__*/ new J(), At = /*@__PURE__*/ new J().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), jt = /*@__PURE__*/ new J().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Mt() {
	let e = {
		enabled: !0,
		workingColorSpace: Ie,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = Nt(e.r), e.g = Nt(e.g), e.b = Nt(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = Pt(e.r), e.g = Pt(e.g), e.b = Pt(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? Le : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return Xe("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return Xe("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Ie]: {
			primaries: t,
			whitePoint: r,
			transfer: Le,
			toXYZ: At,
			fromXYZ: jt,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Fe },
			outputColorSpaceConfig: { drawingBufferColorSpace: Fe }
		},
		[Fe]: {
			primaries: t,
			whitePoint: r,
			transfer: Re,
			toXYZ: At,
			fromXYZ: jt,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Fe }
		}
	}), e;
}
var Y = /*@__PURE__*/ Mt();
function Nt(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function Pt(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Ft, It = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Ft === void 0 && (Ft = Ge("canvas")), Ft.width = e.width, Ft.height = e.height;
			let t = Ft.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Ft;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Ge("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = Nt(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(Nt(t[e] / 255) * 255) : t[e] = Nt(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return U("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, Lt = 0, Rt = class {
	constructor(e = null) {
		this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Lt++ }), this.uuid = it(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(zt(r[t].image)) : e.push(zt(r[t]));
			} else e = zt(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function zt(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? It.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (U("Texture: Unable to serialize Texture."), {});
}
var Bt = 0, Vt = /*@__PURE__*/ new q(), Ht = class e extends $e {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, i = r, a = r, o = c, s = u, l = E, f = d, p = e.DEFAULT_ANISOTROPY, m = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Bt++ }), this.uuid = it(), this.name = "", this.source = new Rt(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = a, this.magFilter = o, this.minFilter = s, this.anisotropy = p, this.format = l, this.internalFormat = null, this.type = f, this.offset = new K(0, 0), this.repeat = new K(1, 1), this.center = new K(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new J(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = m, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(Vt).x;
	}
	get height() {
		return this.source.getSize(Vt).y;
	}
	get depth() {
		return this.source.getSize(Vt).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				U(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? U(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case n:
				e.x -= Math.floor(e.x);
				break;
			case r:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case i: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case n:
				e.y -= Math.floor(e.y);
				break;
			case r:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case i: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Ht.DEFAULT_IMAGE = null, Ht.DEFAULT_MAPPING = 300, Ht.DEFAULT_ANISOTROPY = 1;
var X = class e {
	static {
		e.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = G(this.x, e.x, t.x), this.y = G(this.y, e.y, t.y), this.z = G(this.z, e.z, t.z), this.w = G(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = G(this.x, e, t), this.y = G(this.y, e, t), this.z = G(this.z, e, t), this.w = G(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(G(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, Ut = class extends $e {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: c,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveColorBuffer: !0,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			storeMultisampledColorBuffer: !0,
			storeMultisampledDepthBuffer: !0,
			storeMultisampledStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new X(0, 0, e, t), this.scissorTest = !1, this.viewport = new X(0, 0, e, t), this.textures = [];
		let r = new Ht({
			width: e,
			height: t,
			depth: n.depth
		}), i = n.count;
		for (let e = 0; e < i; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: c,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Rt(n);
		}
		if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) {
			if (e.depthTexture.renderTarget === e) {
				let t = e.depthTexture.clone();
				t.renderTarget = null, this.depthTexture = t;
			} else this.depthTexture = e.depthTexture;
		}
		return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Wt = class extends Ut {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, Gt = class extends Ht {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Kt = class extends Ht {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
}, qt = class e {
	static {
		e.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / Jt.setFromMatrixColumn(e, 0).length(), i = 1 / Jt.setFromMatrixColumn(e, 1).length(), a = 1 / Jt.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Xt, e, Zt);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return en.subVectors(e, t), en.lengthSq() === 0 && (en.z = 1), en.normalize(), Qt.crossVectors(n, en), Qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? en.x += 1e-4 : en.z += 1e-4, en.normalize(), Qt.crossVectors(n, en)), Qt.normalize(), $t.crossVectors(en, Qt), r[0] = Qt.x, r[4] = $t.x, r[8] = en.x, r[1] = Qt.y, r[5] = $t.y, r[9] = en.y, r[2] = Qt.z, r[6] = $t.z, r[10] = en.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], ee = r[14], te = r[3], M = r[7], ne = r[11], N = r[15];
		return i[0] = a * x + o * T + s * k + c * te, i[4] = a * S + o * E + s * A + c * M, i[8] = a * C + o * D + s * j + c * ne, i[12] = a * w + o * O + s * ee + c * N, i[1] = l * x + u * T + d * k + f * te, i[5] = l * S + u * E + d * A + f * M, i[9] = l * C + u * D + d * j + f * ne, i[13] = l * w + u * O + d * ee + f * N, i[2] = p * x + m * T + h * k + g * te, i[6] = p * S + m * E + h * A + g * M, i[10] = p * C + m * D + h * j + g * ne, i[14] = p * w + m * O + h * ee + g * N, i[3] = _ * x + v * T + y * k + b * te, i[7] = _ * S + v * E + y * A + b * M, i[11] = _ * C + v * D + y * j + b * ne, i[15] = _ * w + v * O + y * ee + b * N, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = Jt.set(r[0], r[1], r[2]).length(), o = Jt.set(r[4], r[5], r[6]).length(), s = Jt.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Yt.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Yt.elements[0] *= c, Yt.elements[1] *= c, Yt.elements[2] *= c, Yt.elements[4] *= l, Yt.elements[5] *= l, Yt.elements[6] *= l, Yt.elements[8] *= u, Yt.elements[9] *= u, Yt.elements[10] *= u, t.setFromRotationMatrix(Yt), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = He, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = He, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Jt = /*@__PURE__*/ new q(), Yt = /*@__PURE__*/ new qt(), Xt = /*@__PURE__*/ new q(0, 0, 0), Zt = /*@__PURE__*/ new q(1, 1, 1), Qt = /*@__PURE__*/ new q(), $t = /*@__PURE__*/ new q(), en = /*@__PURE__*/ new q(), tn = /*@__PURE__*/ new qt(), nn = /*@__PURE__*/ new Et(), rn = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(G(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-G(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(G(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-G(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(G(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-G(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: U("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return tn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(tn, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return nn.setFromEuler(this), this.setFromQuaternion(nn, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
rn.DEFAULT_ORDER = "XYZ";
var an = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, on = 0, sn = /*@__PURE__*/ new q(), cn = /*@__PURE__*/ new Et(), ln = /*@__PURE__*/ new qt(), un = /*@__PURE__*/ new q(), dn = /*@__PURE__*/ new q(), fn = /*@__PURE__*/ new q(), pn = /*@__PURE__*/ new Et(), mn = /*@__PURE__*/ new q(1, 0, 0), hn = /*@__PURE__*/ new q(0, 1, 0), gn = /*@__PURE__*/ new q(0, 0, 1), _n = { type: "added" }, vn = { type: "removed" }, yn = {
	type: "childadded",
	child: null
}, bn = {
	type: "childremoved",
	child: null
}, xn = class e extends $e {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: on++ }), this.uuid = it(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new q(), n = new rn(), r = new Et(), i = new q(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new qt() },
			normalMatrix: { value: new J() }
		}), this.matrix = new qt(), this.matrixWorld = new qt(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new an(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return cn.setFromAxisAngle(e, t), this.quaternion.multiply(cn), this;
	}
	rotateOnWorldAxis(e, t) {
		return cn.setFromAxisAngle(e, t), this.quaternion.premultiply(cn), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(mn, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(hn, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(gn, e);
	}
	translateOnAxis(e, t) {
		return sn.copy(e).applyQuaternion(this.quaternion), this.position.add(sn.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(mn, e);
	}
	translateY(e) {
		return this.translateOnAxis(hn, e);
	}
	translateZ(e) {
		return this.translateOnAxis(gn, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ln.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? un.copy(e) : un.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), dn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ln.lookAt(dn, un, this.up) : ln.lookAt(un, dn, this.up), this.quaternion.setFromRotationMatrix(ln), r && (ln.extractRotation(r.matrixWorld), cn.setFromRotationMatrix(ln), this.quaternion.premultiply(cn.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (W("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(_n), yn.child = e, this.dispatchEvent(yn), yn.child = null) : W("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(vn), bn.child = e, this.dispatchEvent(bn), bn.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(ln), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(_n), yn.child = e, this.dispatchEvent(yn), yn.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dn, e, fn), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dn, pn, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	intersectsFrustum() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
};
xn.DEFAULT_UP = /*@__PURE__*/ new q(0, 1, 0), xn.DEFAULT_MATRIX_AUTO_UPDATE = !0, xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Sn = class extends xn {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Cn = { type: "move" }, wn = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Sn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Sn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new q(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new q()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Sn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new q(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new q(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Cn)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Sn();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, Tn = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, En = {
	h: 0,
	s: 0,
	l: 0
}, Dn = {
	h: 0,
	s: 0,
	l: 0
};
function On(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Z = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Fe) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Y.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = Y.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, Y.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = Y.workingColorSpace) {
		if (e = at(e, 1), t = G(t, 0, 1), n = G(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = On(i, r, e + 1 / 3), this.g = On(i, r, e), this.b = On(i, r, e - 1 / 3);
		}
		return Y.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Fe) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && U("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: U("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			U("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Fe) {
		let n = Tn[e.toLowerCase()];
		return n === void 0 ? U("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Nt(e.r), this.g = Nt(e.g), this.b = Nt(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = Pt(e.r), this.g = Pt(e.g), this.b = Pt(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Fe) {
		return Y.workingToColorSpace(kn.copy(this), e), Math.round(G(kn.r * 255, 0, 255)) * 65536 + Math.round(G(kn.g * 255, 0, 255)) * 256 + Math.round(G(kn.b * 255, 0, 255));
	}
	getHexString(e = Fe) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = Y.workingColorSpace) {
		Y.workingToColorSpace(kn.copy(this), t);
		let n = kn.r, r = kn.g, i = kn.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = Y.workingColorSpace) {
		return Y.workingToColorSpace(kn.copy(this), t), e.r = kn.r, e.g = kn.g, e.b = kn.b, e;
	}
	getStyle(e = Fe) {
		Y.workingToColorSpace(kn.copy(this), e);
		let t = kn.r, n = kn.g, r = kn.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(En), this.setHSL(En.h + e, En.s + t, En.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(En), e.getHSL(Dn);
		let n = ct(En.h, Dn.h, t), r = ct(En.s, Dn.s, t), i = ct(En.l, Dn.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, kn = /*@__PURE__*/ new Z();
Z.NAMES = Tn;
var An = class extends xn {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rn(), this.environmentIntensity = 1, this.environmentRotation = new rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, jn = /*@__PURE__*/ new q(), Mn = /*@__PURE__*/ new q(), Nn = /*@__PURE__*/ new q(), Pn = /*@__PURE__*/ new q(), Fn = /*@__PURE__*/ new q(), In = /*@__PURE__*/ new q(), Ln = /*@__PURE__*/ new q(), Rn = /*@__PURE__*/ new q(), zn = /*@__PURE__*/ new q(), Bn = /*@__PURE__*/ new q(), Vn = /*@__PURE__*/ new X(), Hn = /*@__PURE__*/ new X(), Un = /*@__PURE__*/ new X(), Wn = class e {
	constructor(e = new q(), t = new q(), n = new q()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), jn.subVectors(e, t), r.cross(jn);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		jn.subVectors(r, t), Mn.subVectors(n, t), Nn.subVectors(e, t);
		let a = jn.dot(jn), o = jn.dot(Mn), s = jn.dot(Nn), c = Mn.dot(Mn), l = Mn.dot(Nn), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, Pn) !== null && Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, Pn) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, Pn.x), s.addScaledVector(a, Pn.y), s.addScaledVector(o, Pn.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return Vn.setScalar(0), Hn.setScalar(0), Un.setScalar(0), Vn.fromBufferAttribute(e, t), Hn.fromBufferAttribute(e, n), Un.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Vn, i.x), a.addScaledVector(Hn, i.y), a.addScaledVector(Un, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return jn.subVectors(n, t), Mn.subVectors(e, t), jn.cross(Mn).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return jn.subVectors(this.c, this.b), Mn.subVectors(this.a, this.b), jn.cross(Mn).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		Fn.subVectors(r, n), In.subVectors(i, n), Rn.subVectors(e, n);
		let s = Fn.dot(Rn), c = In.dot(Rn);
		if (s <= 0 && c <= 0) return t.copy(n);
		zn.subVectors(e, r);
		let l = Fn.dot(zn), u = In.dot(zn);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(Fn, a);
		Bn.subVectors(e, i);
		let f = Fn.dot(Bn), p = In.dot(Bn);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(In, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Ln.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Ln, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(Fn, a).addScaledVector(In, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Gn = class {
	constructor(e = new q(Infinity, Infinity, Infinity), t = new q(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(qn.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(qn.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = qn.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, qn) : qn.fromBufferAttribute(r, t), qn.applyMatrix4(e.matrixWorld), this.expandByPoint(qn);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Jn.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Jn.copy(e.boundingBox)), Jn.applyMatrix4(e.matrixWorld), this.union(Jn);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, qn), qn.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(tr), nr.subVectors(this.max, tr), Yn.subVectors(e.a, tr), Xn.subVectors(e.b, tr), Zn.subVectors(e.c, tr), Qn.subVectors(Xn, Yn), $n.subVectors(Zn, Xn), er.subVectors(Yn, Zn);
		let t = [
			0,
			-Qn.z,
			Qn.y,
			0,
			-$n.z,
			$n.y,
			0,
			-er.z,
			er.y,
			Qn.z,
			0,
			-Qn.x,
			$n.z,
			0,
			-$n.x,
			er.z,
			0,
			-er.x,
			-Qn.y,
			Qn.x,
			0,
			-$n.y,
			$n.x,
			0,
			-er.y,
			er.x,
			0
		];
		return !ar(t, Yn, Xn, Zn, nr) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !ar(t, Yn, Xn, Zn, nr)) ? !1 : (rr.crossVectors(Qn, $n), t = [
			rr.x,
			rr.y,
			rr.z
		], ar(t, Yn, Xn, Zn, nr));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, qn).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(qn).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (Kn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Kn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Kn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Kn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Kn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Kn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Kn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Kn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Kn)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, Kn = [
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q()
], qn = /*@__PURE__*/ new q(), Jn = /*@__PURE__*/ new Gn(), Yn = /*@__PURE__*/ new q(), Xn = /*@__PURE__*/ new q(), Zn = /*@__PURE__*/ new q(), Qn = /*@__PURE__*/ new q(), $n = /*@__PURE__*/ new q(), er = /*@__PURE__*/ new q(), tr = /*@__PURE__*/ new q(), nr = /*@__PURE__*/ new q(), rr = /*@__PURE__*/ new q(), ir = /*@__PURE__*/ new q();
function ar(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		ir.fromArray(e, a);
		let o = i.x * Math.abs(ir.x) + i.y * Math.abs(ir.y) + i.z * Math.abs(ir.z), s = t.dot(ir), c = n.dot(ir), l = r.dot(ir);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var or = /*@__PURE__*/ new q(), sr = /*@__PURE__*/ new K(), cr = 0, lr = class extends $e {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: cr++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Be, this.updateRanges = [], this.gpuType = _, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) sr.fromBufferAttribute(this, t), sr.applyMatrix3(e), this.setXY(t, sr.x, sr.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) or.fromBufferAttribute(this, t), or.applyMatrix3(e), this.setXYZ(t, or.x, or.y, or.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) or.fromBufferAttribute(this, t), or.applyMatrix4(e), this.setXYZ(t, or.x, or.y, or.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) or.fromBufferAttribute(this, t), or.applyNormalMatrix(e), this.setXYZ(t, or.x, or.y, or.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) or.fromBufferAttribute(this, t), or.transformDirection(e), this.setXYZ(t, or.x, or.y, or.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = Ct(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = wt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = Ct(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = Ct(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = Ct(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = Ct(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = wt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), r = wt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = wt(t, this.array), n = wt(n, this.array), r = wt(r, this.array), i = wt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, ur = class extends lr {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, dr = class extends lr {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, fr = class extends lr {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, pr = /*@__PURE__*/ new Gn(), mr = /*@__PURE__*/ new q(), hr = /*@__PURE__*/ new q(), gr = class {
	constructor(e = new q(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? pr.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		mr.subVectors(e, this.center);
		let t = mr.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(mr, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (hr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(mr.copy(e.center).add(hr)), this.expandByPoint(mr.copy(e.center).sub(hr))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, _r = 0, vr = /*@__PURE__*/ new qt(), yr = /*@__PURE__*/ new xn(), br = /*@__PURE__*/ new q(), xr = /*@__PURE__*/ new Gn(), Sr = /*@__PURE__*/ new Gn(), Cr = /*@__PURE__*/ new q(), wr = class e extends $e {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _r++ }), this.uuid = it(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (Ue(e) ? dr : ur)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new J().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return vr.makeRotationFromQuaternion(e), this.applyMatrix4(vr), this;
	}
	rotateX(e) {
		return vr.makeRotationX(e), this.applyMatrix4(vr), this;
	}
	rotateY(e) {
		return vr.makeRotationY(e), this.applyMatrix4(vr), this;
	}
	rotateZ(e) {
		return vr.makeRotationZ(e), this.applyMatrix4(vr), this;
	}
	translate(e, t, n) {
		return vr.makeTranslation(e, t, n), this.applyMatrix4(vr), this;
	}
	scale(e, t, n) {
		return vr.makeScale(e, t, n), this.applyMatrix4(vr), this;
	}
	lookAt(e) {
		return yr.lookAt(e), yr.updateMatrix(), this.applyMatrix4(yr.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(br).negate(), this.translate(br.x, br.y, br.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new fr(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && U("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Gn());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) W("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new q(-Infinity, -Infinity, -Infinity), new q(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					xr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Cr.addVectors(this.boundingBox.min, xr.min), this.boundingBox.expandByPoint(Cr), Cr.addVectors(this.boundingBox.max, xr.max), this.boundingBox.expandByPoint(Cr)) : (this.boundingBox.expandByPoint(xr.min), this.boundingBox.expandByPoint(xr.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && W("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new gr());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) W("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new q(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (xr.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Sr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Cr.addVectors(xr.min, Sr.min), xr.expandByPoint(Cr), Cr.addVectors(xr.max, Sr.max), xr.expandByPoint(Cr)) : (xr.expandByPoint(Sr.min), xr.expandByPoint(Sr.max));
			}
			xr.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) Cr.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(Cr));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) Cr.fromBufferAttribute(a, t), o && (br.fromBufferAttribute(e, t), Cr.add(br)), r = Math.max(r, n.distanceToSquared(Cr));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && W("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			W("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new lr(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new q(), s[e] = new q();
		let c = new q(), l = new q(), u = new q(), d = new K(), f = new K(), p = new K(), m = new q(), h = new q();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new q(), y = new q(), b = new q(), x = new q();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new lr(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new q(), i = new q(), a = new q(), o = new q(), s = new q(), c = new q(), l = new q(), u = new q();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) Cr.fromBufferAttribute(e, t), Cr.normalize(), e.setXYZ(t, Cr.x, Cr.y, Cr.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new lr(a, r, i);
		}
		if (this.index === null) return U("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Tr = /*@__PURE__*/ new q(), Er = /*@__PURE__*/ new q(), Dr = /*@__PURE__*/ new J(), Or = class {
	constructor(e = new q(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = Tr.subVectors(n, t).cross(Er.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(Tr), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || Dr.getNormalMatrix(e), r = this.coplanarPoint(Tr).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			normal: this.normal.toArray(),
			constant: this.constant
		};
	}
	fromJSON(e) {
		return this.normal.fromArray(e.normal), this.constant = e.constant, this;
	}
}, kr = 0, Ar = class extends $e {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: kr++ }), this.uuid = it(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Z(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ze, this.stencilZFail = ze, this.stencilZPass = ze, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				U(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? U(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Z().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((e) => new Or().fromJSON(e))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new K().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new K().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, jr = /*@__PURE__*/ new q(), Mr = /*@__PURE__*/ new q(), Nr = /*@__PURE__*/ new q(), Pr = /*@__PURE__*/ new q(), Fr = class {
	constructor(e = new q(), t = new q(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, jr)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = jr.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (jr.copy(this.origin).addScaledVector(this.direction, t), jr.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		Mr.copy(e).add(t).multiplyScalar(.5), Nr.copy(t).sub(e).normalize(), Pr.copy(this.origin).sub(Mr);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(Nr), o = Pr.dot(this.direction), s = -Pr.dot(Nr), c = Pr.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Mr).addScaledVector(Nr, d), f;
	}
	intersectSphere(e, t) {
		if (e.radius < 0) return null;
		jr.subVectors(e.center, this.origin);
		let n = jr.dot(this.direction), r = jr.dot(jr) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, jr) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		let a = this.origin, o = this.direction, s = o.x, c = o.y, l = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, p = t.x - a.x, m = t.y - a.y, h = t.z - a.z, g = n.x - a.x, _ = n.y - a.y, v = n.z - a.z, y = Math.abs(s), b = Math.abs(c), x = Math.abs(l), S, C, w, T, E, D, O, k, A, j, ee, te;
		if (y >= b && y >= x ? (w = s, D = u, A = p, te = g, s >= 0 ? (S = c, C = l, T = d, E = f, O = m, k = h, j = _, ee = v) : (S = l, C = c, T = f, E = d, O = h, k = m, j = v, ee = _)) : b >= x ? (w = c, D = d, A = m, te = _, c >= 0 ? (S = l, C = s, T = f, E = u, O = h, k = p, j = v, ee = g) : (S = s, C = l, T = u, E = f, O = p, k = h, j = g, ee = v)) : (w = l, D = f, A = h, te = v, l >= 0 ? (S = s, C = c, T = u, E = d, O = p, k = m, j = g, ee = _) : (S = c, C = s, T = d, E = u, O = m, k = p, j = _, ee = g)), w === 0) return null;
		let M = S / w, ne = C / w, N = 1 / w, re = T - M * D, P = E - ne * D, ie = O - M * A, F = k - ne * A, ae = j - M * te, oe = ee - ne * te, se = ae * F - oe * ie, I = re * oe - P * ae, L = ie * P - F * re;
		if (r) {
			if (se < 0 || I < 0 || L < 0) return null;
		} else if ((se < 0 || I < 0 || L < 0) && (se > 0 || I > 0 || L > 0)) return null;
		let ce = se + I + L;
		if (ce === 0) return null;
		let le = N * (se * D + I * A + L * te);
		return (ce > 0 ? le < 0 : le > 0) ? null : this.at(le / ce, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Ir = class extends Ar {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Z(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Lr = /*@__PURE__*/ new qt(), Rr = /*@__PURE__*/ new Fr(), zr = /*@__PURE__*/ new gr(), Br = /*@__PURE__*/ new q(), Vr = /*@__PURE__*/ new q(), Hr = /*@__PURE__*/ new q(), Ur = /*@__PURE__*/ new q(), Wr = /*@__PURE__*/ new q(), Gr = /*@__PURE__*/ new q(), Kr = /*@__PURE__*/ new q(), qr = /*@__PURE__*/ new q(), Jr = class extends xn {
	constructor(e = new wr(), t = new Ir()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Gr.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Wr.fromBufferAttribute(s, e), a ? Gr.addScaledVector(Wr, r) : Gr.addScaledVector(Wr.sub(t), r));
			}
			t.add(Gr);
		}
		return t;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), zr.copy(n.boundingSphere), zr.applyMatrix4(i), Rr.copy(e.ray).recast(e.near), zr.containsPoint(Rr.origin) === !1 && (Rr.intersectSphere(zr, Br) === null || Rr.origin.distanceToSquared(Br) > (e.far - e.near) ** 2) || (Lr.copy(i).invert(), Rr.copy(e.ray).applyMatrix4(Lr), (n.boundingBox === null || Rr.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, Rr)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = Xr(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = Xr(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = Xr(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = Xr(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function Yr(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	qr.copy(s), qr.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(qr);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: qr.clone(),
		object: e
	};
}
function Xr(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Vr), e.getVertexPosition(c, Hr), e.getVertexPosition(l, Ur);
	let u = Yr(e, t, n, r, Vr, Hr, Ur, Kr);
	if (u) {
		let e = new q();
		Wn.getBarycoord(Kr, Vr, Hr, Ur, e), i && (u.uv = Wn.getInterpolatedAttribute(i, s, c, l, e, new K())), a && (u.uv1 = Wn.getInterpolatedAttribute(a, s, c, l, e, new K())), o && (u.normal = Wn.getInterpolatedAttribute(o, s, c, l, e, new q()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new q(),
			materialIndex: 0
		};
		Wn.getNormal(Vr, Hr, Ur, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Zr = class extends Ht {
	constructor(e = null, t = 1, n = 1, r, i, o, s, c, l = a, u = a, d, f) {
		super(null, o, s, c, l, u, r, i, d, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Qr = class extends lr {
	constructor(e, t, n, r = 1) {
		super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
	}
}, $r = /*@__PURE__*/ new qt(), ei = /*@__PURE__*/ new qt(), ti = [], ni = /*@__PURE__*/ new Gn(), ri = /*@__PURE__*/ new qt(), ii = /*@__PURE__*/ new Jr(), ai = /*@__PURE__*/ new gr(), oi = class extends Jr {
	constructor(e, t, n) {
		super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Qr(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
		for (let e = 0; e < n; e++) this.setMatrixAt(e, ri);
	}
	computeBoundingBox() {
		let e = this.geometry, t = this.count;
		this.boundingBox === null && (this.boundingBox = new Gn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, $r), ni.copy(e.boundingBox).applyMatrix4($r), this.boundingBox.union(ni);
	}
	computeBoundingSphere() {
		let e = this.geometry, t = this.count;
		this.boundingSphere === null && (this.boundingSphere = new gr()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, $r), ai.copy(e.boundingSphere).applyMatrix4($r), this.boundingSphere.union(ai);
	}
	copy(e, t) {
		return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
	}
	getColorAt(e, t) {
		return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
	}
	getMatrixAt(e, t) {
		return t.fromArray(this.instanceMatrix.array, e * 16);
	}
	getMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
		for (let e = 0; e < n.length; e++) n[e] = r[i + e];
	}
	raycast(e, t) {
		let n = this.matrixWorld, r = this.count;
		if (ii.geometry = this.geometry, ii.material = this.material, ii.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ai.copy(this.boundingSphere), ai.applyMatrix4(n), e.ray.intersectsSphere(ai) !== !1)) for (let i = 0; i < r; i++) {
			this.getMatrixAt(i, $r), ei.multiplyMatrices(n, $r), ii.matrixWorld = ei, ii.raycast(e, ti);
			for (let e = 0, n = ti.length; e < n; e++) {
				let n = ti[e];
				n.instanceId = i, n.object = this, t.push(n);
			}
			ti.length = 0;
		}
	}
	setColorAt(e, t) {
		return this.instanceColor === null && (this.instanceColor = new Qr(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
	}
	setMatrixAt(e, t) {
		return t.toArray(this.instanceMatrix.array, e * 16), this;
	}
	setMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = n.length + 1;
		this.morphTexture === null && (this.morphTexture = new Zr(new Float32Array(r * this.count), r, this.count, k, _));
		let i = this.morphTexture.source.data.data, a = 0;
		for (let e = 0; e < n.length; e++) a += n[e];
		let o = this.geometry.morphTargetsRelative ? 1 : 1 - a, s = r * e;
		return i[s] = o, i.set(n, s + 1), this;
	}
	updateMorphTargets() {}
	dispose() {
		super.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
	}
}, si = /*@__PURE__*/ new gr(), ci = /*@__PURE__*/ new K(.5, .5), li = /*@__PURE__*/ new q(), ui = class {
	constructor(e = new Or(), t = new Or(), n = new Or(), r = new Or(), i = new Or(), a = new Or()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = He, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(si);
	}
	intersectsSprite(e) {
		return si.center.set(0, 0, 0), si.radius = .7071067811865476 + ci.distanceTo(e.center), si.applyMatrix4(e.matrixWorld), this.intersectsSphere(si);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (li.x = r.normal.x > 0 ? e.max.x : e.min.x, li.y = r.normal.y > 0 ? e.max.y : e.min.y, li.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(li) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, di = class extends Ar {
	constructor(e) {
		super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Z(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, fi = /*@__PURE__*/ new qt(), pi = /*@__PURE__*/ new Fr(), mi = /*@__PURE__*/ new gr(), hi = /*@__PURE__*/ new q(), gi = class extends xn {
	constructor(e = new wr(), t = new di()) {
		super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), mi.copy(n.boundingSphere), mi.applyMatrix4(r), mi.radius += i, e.ray.intersectsSphere(mi) === !1) return;
		fi.copy(r).invert(), pi.copy(e.ray).applyMatrix4(fi);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = n.index, l = n.attributes.position;
		if (c !== null) {
			let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) {
				let n = c.getX(a);
				hi.fromBufferAttribute(l, n), _i(hi, n, s, r, e, t, this);
			}
		} else {
			let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) hi.fromBufferAttribute(l, a), _i(hi, a, s, r, e, t, this);
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function _i(e, t, n, r, i, a, o) {
	let s = pi.distanceSqToPoint(e);
	if (s < n) {
		let n = new q();
		pi.closestPointToPoint(e, n), n.applyMatrix4(r);
		let c = i.ray.origin.distanceTo(n);
		if (c < i.near || c > i.far) return;
		a.push({
			distance: c,
			distanceToRay: Math.sqrt(s),
			point: n,
			index: t,
			face: null,
			faceIndex: null,
			barycoord: null,
			object: o
		});
	}
}
var vi = class extends Ht {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, yi = class extends Ht {
	constructor(e, t, n = g, r, i, o, s = a, c = a, l, u = D, d = 1) {
		if (u !== 1026 && u !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: d
		}, r, i, o, s, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Rt(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.compareFunction = this.compareFunction, t;
	}
}, bi = class extends yi {
	constructor(e, t = g, n = 301, r, i, o = a, s = a, c, l = D) {
		let u = {
			width: e,
			height: e,
			depth: 1
		}, d = [
			u,
			u,
			u,
			u,
			u,
			u
		];
		super(e, e, t, n, r, i, o, s, c, l), this.image = d, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, xi = class extends Ht {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, Si = class e extends wr {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new fr(c, 3)), this.setAttribute("normal", new fr(l, 3)), this.setAttribute("uv", new fr(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new q();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, Ci = class e extends wr {
	constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
		super(), this.type = "CircleGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: n,
			thetaLength: r
		}, t = Math.max(3, t);
		let i = [], a = [], o = [], s = [], c = new q(), l = new K();
		a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5);
		for (let i = 0, u = 3; i <= t; i++, u += 3) {
			let d = n + i / t * r;
			c.x = e * Math.cos(d), c.y = e * Math.sin(d), a.push(c.x, c.y, c.z), o.push(0, 0, 1), l.x = (a[u] / e + 1) / 2, l.y = (a[u + 1] / e + 1) / 2, s.push(l.x, l.y);
		}
		for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
		this.setIndex(i), this.setAttribute("position", new fr(a, 3)), this.setAttribute("normal", new fr(o, 3)), this.setAttribute("uv", new fr(s, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
	}
}, wi = class e extends wr {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new fr(u, 3)), this.setAttribute("normal", new fr(d, 3)), this.setAttribute("uv", new fr(f, 2));
		function _() {
			let a = new q(), _ = new q(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new K(), m = new q(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Ti = class e extends wi {
	constructor(e = 1, t = 1, n = 32, r = 1, i = !1, a = 0, o = Math.PI * 2) {
		super(0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Ei = class e extends wr {
	constructor(e = [], t = [], n = 1, r = 0) {
		super(), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		};
		let i = [], a = [];
		o(r), c(n), l(), this.setAttribute("position", new fr(i, 3)), this.setAttribute("normal", new fr(i.slice(), 3)), this.setAttribute("uv", new fr(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
		function o(e) {
			let n = new q(), r = new q(), i = new q();
			for (let a = 0; a < t.length; a += 3) f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e);
		}
		function s(e, t, n, r) {
			let i = r + 1, a = [];
			for (let r = 0; r <= i; r++) {
				a[r] = [];
				let o = e.clone().lerp(n, r / i), s = t.clone().lerp(n, r / i), c = i - r;
				for (let e = 0; e <= c; e++) e === 0 && r === i ? a[r][e] = o : a[r][e] = o.clone().lerp(s, e / c);
			}
			for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
				let n = Math.floor(t / 2);
				t % 2 == 0 ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n])) : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
			}
		}
		function c(e) {
			let t = new q();
			for (let n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z;
		}
		function l() {
			let e = new q();
			for (let t = 0; t < i.length; t += 3) {
				e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
				let n = h(e) / 2 / Math.PI + .5, r = g(e) / Math.PI + .5;
				a.push(n, 1 - r);
			}
			p(), u();
		}
		function u() {
			for (let e = 0; e < a.length; e += 6) {
				let t = a[e + 0], n = a[e + 2], r = a[e + 4];
				Math.max(t, n, r) > .9 && Math.min(t, n, r) < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1));
			}
		}
		function d(e) {
			i.push(e.x, e.y, e.z);
		}
		function f(t, n) {
			let r = t * 3;
			n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
		}
		function p() {
			let e = new q(), t = new q(), n = new q(), r = new q(), o = new K(), s = new K(), c = new K();
			for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
				e.set(i[l + 0], i[l + 1], i[l + 2]), t.set(i[l + 3], i[l + 4], i[l + 5]), n.set(i[l + 6], i[l + 7], i[l + 8]), o.set(a[u + 0], a[u + 1]), s.set(a[u + 2], a[u + 3]), c.set(a[u + 4], a[u + 5]), r.copy(e).add(t).add(n).divideScalar(3);
				let d = h(r);
				m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d);
			}
		}
		function m(e, t, n, r) {
			r < 0 && e.x === 1 && (a[t] = e.x - 1), n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + .5);
		}
		function h(e) {
			return Math.atan2(e.z, -e.x);
		}
		function g(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.vertices, t.indices, t.radius, t.detail);
	}
}, Di = class e extends Ei {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2, r = [
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			0,
			0,
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			n,
			0,
			-1,
			n,
			0,
			1,
			-n,
			0,
			-1,
			-n,
			0,
			1
		];
		super(r, [
			0,
			11,
			5,
			0,
			5,
			1,
			0,
			1,
			7,
			0,
			7,
			10,
			0,
			10,
			11,
			1,
			5,
			9,
			5,
			11,
			4,
			11,
			10,
			2,
			10,
			7,
			6,
			7,
			1,
			8,
			3,
			9,
			4,
			3,
			4,
			2,
			3,
			2,
			6,
			3,
			6,
			8,
			3,
			8,
			9,
			4,
			9,
			5,
			2,
			4,
			11,
			6,
			2,
			10,
			8,
			6,
			7,
			9,
			8,
			1
		], e, t), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Oi = class e extends wr {
	constructor(e = [
		new K(0, -.5),
		new K(.5, 0),
		new K(0, .5)
	], t = 12, n = 0, r = Math.PI * 2) {
		super(), this.type = "LatheGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: n,
			phiLength: r
		}, t = Math.floor(t), r = G(r, 0, Math.PI * 2);
		let i = [], a = [], o = [], s = [], c = [], l = 1 / t, u = new q(), d = new K(), f = new q(), p = new q(), m = new q(), h = 0, g = 0;
		for (let t = 0; t <= e.length - 1; t++) switch (t) {
			case 0:
				h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = g * 1, f.y = -h, f.z = g * 0, m.copy(f), f.normalize(), s.push(f.x, f.y, f.z);
				break;
			case e.length - 1:
				s.push(m.x, m.y, m.z);
				break;
			default: h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = g * 1, f.y = -h, f.z = g * 0, p.copy(f), f.x += m.x, f.y += m.y, f.z += m.z, f.normalize(), s.push(f.x, f.y, f.z), m.copy(p);
		}
		for (let i = 0; i <= t; i++) {
			let f = n + i * l * r, p = Math.sin(f), m = Math.cos(f);
			for (let n = 0; n <= e.length - 1; n++) {
				u.x = e[n].x * p, u.y = e[n].y, u.z = e[n].x * m, a.push(u.x, u.y, u.z), d.x = i / t, d.y = n / (e.length - 1), o.push(d.x, d.y);
				let r = s[3 * n + 0] * p, l = s[3 * n + 1], f = s[3 * n + 0] * m;
				c.push(r, l, f);
			}
		}
		for (let n = 0; n < t; n++) for (let t = 0; t < e.length - 1; t++) {
			let r = t + n * e.length, a = r, o = r + e.length, s = r + e.length + 1, c = r + 1;
			i.push(a, o, c), i.push(s, c, o);
		}
		this.setIndex(i), this.setAttribute("position", new fr(a, 3)), this.setAttribute("uv", new fr(o, 2)), this.setAttribute("normal", new fr(c, 3));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.points, t.segments, t.phiStart, t.phiLength);
	}
}, ki = class e extends wr {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new fr(p, 3)), this.setAttribute("normal", new fr(m, 3)), this.setAttribute("uv", new fr(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
};
function Ai(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (Mi(i)) i.isRenderTargetTexture ? (U("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (Mi(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function ji(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = Ai(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function Mi(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Ni(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Pi(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Y.workingColorSpace;
}
var Fi = {
	clone: Ai,
	merge: ji
}, Ii = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", Li = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Ri = class extends Ar {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ii, this.fragmentShader = Li, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ai(e.uniforms), this.uniformsGroups = Ni(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new Z().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new K().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new q().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new X().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new J().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new qt().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, zi = class extends Ri {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Bi = class extends Ar {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Z(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Z(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Vi = class extends Ar {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Pe, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Hi = class extends Ar {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function Ui(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Wi(e) {
	return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Gi = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Ki = class extends Gi {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Ne,
			endingEnd: Ne
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case V:
				i = e, o = 2 * t - n;
				break;
			case H:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case V:
				a = e, s = 2 * n - t;
				break;
			case H:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, qi = class extends Gi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Ji = class extends Gi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Yi = class extends Gi {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = Qi(n, t, g, y, r);
			i[p] = Xi(x, o, _, b, m);
		}
		return i;
	}
};
function Xi(e, t, n, r, i) {
	let a = 1 - e;
	return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Zi(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Qi(e, t, n, r, i) {
	let a = (e - t) / (i - t);
	for (let o = 0; o < 8; o++) {
		let o = Xi(a, t, n, r, i) - e;
		if (Math.abs(o) < 1e-10) break;
		let s = Zi(a, t, n, r, i);
		if (Math.abs(s) < 1e-10) break;
		a = Math.max(0, Math.min(1, a - o / s));
	}
	return a;
}
var $i = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Ui(t, this.TimeBufferType), this.values = Ui(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Ui(e.times, Array),
				values: Ui(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t), Wi(e.settings) && (n.settings = {
				inTangents: Ui(e.settings.inTangents, Array),
				outTangents: Ui(e.settings.outTangents, Array)
			});
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Ji(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new qi(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Ki(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Yi(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case Ae:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case je:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Me:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case B: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return U("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return Ae;
			case this.InterpolantFactoryMethodLinear: return je;
			case this.InterpolantFactoryMethodSmooth: return Me;
			case this.InterpolantFactoryMethodBezier: return B;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			Wi(this.settings) && (ea(this.settings.inTangents, e), ea(this.settings.outTangents, e));
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (W("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (W("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				W("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				W("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && We(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				W("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Me, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, Wi(this.settings) && (r.settings = {
			inTangents: this.settings.inTangents.slice(),
			outTangents: this.settings.outTangents.slice()
		}), r;
	}
};
function ea(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
$i.prototype.ValueTypeName = "", $i.prototype.TimeBufferType = Float32Array, $i.prototype.ValueBufferType = Float32Array, $i.prototype.DefaultInterpolation = je;
var ta = class extends $i {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
ta.prototype.ValueTypeName = "bool", ta.prototype.ValueBufferType = Array, ta.prototype.DefaultInterpolation = Ae, ta.prototype.InterpolantFactoryMethodLinear = void 0, ta.prototype.InterpolantFactoryMethodSmooth = void 0;
var na = class extends $i {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
na.prototype.ValueTypeName = "color";
var ra = class extends $i {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
ra.prototype.ValueTypeName = "number";
var ia = class extends Gi {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Et.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, aa = class extends $i {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new ia(this.times, this.values, this.getValueSize(), e);
	}
};
aa.prototype.ValueTypeName = "quaternion", aa.prototype.InterpolantFactoryMethodSmooth = void 0;
var oa = class extends $i {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
oa.prototype.ValueTypeName = "string", oa.prototype.ValueBufferType = Array, oa.prototype.DefaultInterpolation = Ae, oa.prototype.InterpolantFactoryMethodLinear = void 0, oa.prototype.InterpolantFactoryMethodSmooth = void 0;
var sa = class extends $i {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
sa.prototype.ValueTypeName = "vector";
var ca = class extends xn {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new Z(e), this.intensity = t;
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, la = /*@__PURE__*/ new qt(), ua = /*@__PURE__*/ new q(), da = /*@__PURE__*/ new q(), fa = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new K(512, 512), this.mapType = d, this.map = null, this.mapPass = null, this.matrix = new qt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ui(), this._frameExtents = new K(1, 1), this._viewportCount = 1, this._viewports = [new X(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getCamera() {
		return this.camera;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera;
		ua.setFromMatrixPosition(e.matrixWorld), t.position.copy(ua), da.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(da), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
	}
	_updateMatrix(e, t, n, r) {
		la.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(la, e.coordinateSystem, e.reversedDepth);
		let i = this._frameExtents, a = r ? r.z / i.x : 1, o = r ? r.w / i.y : 1, s = r ? r.x / i.x : 0, c = r ? r.y / i.y : 0;
		e.coordinateSystem === 2001 || e.reversedDepth ? t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, .5, .5, 0, 0, 0, 1), t.multiply(la);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, pa = /*@__PURE__*/ new q(), ma = /*@__PURE__*/ new Et(), ha = /*@__PURE__*/ new q(), ga = class extends xn {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new qt(), this.projectionMatrix = new qt(), this.projectionMatrixInverse = new qt(), this.coordinateSystem = He, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(pa, ma, ha), ha.x === 1 && ha.y === 1 && ha.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(pa, ma, ha.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(pa, ma, ha), ha.x === 1 && ha.y === 1 && ha.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(pa, ma, ha.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, _a = /*@__PURE__*/ new q(), va = /*@__PURE__*/ new K(), ya = /*@__PURE__*/ new K(), ba = class extends ga {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = rt * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(nt * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return rt * 2 * Math.atan(Math.tan(nt * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		_a.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(_a.x, _a.y).multiplyScalar(-e / _a.z), _a.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(_a.x, _a.y).multiplyScalar(-e / _a.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, va, ya), t.subVectors(ya, va);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(nt * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, xa = class extends ga {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, Sa = class extends fa {
	constructor() {
		super(new xa(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, Ca = class extends ca {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(xn.DEFAULT_UP), this.updateMatrix(), this.target = new xn(), this.shadow = new Sa();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, wa = class extends wr {
	constructor() {
		super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = Infinity;
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
	}
}, Ta = -90, Ea = 1, Da = class extends xn {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new ba(Ta, Ea, e, t);
		r.layers = this.layers, this.add(r);
		let i = new ba(Ta, Ea, e, t);
		i.layers = this.layers, this.add(i);
		let a = new ba(Ta, Ea, e, t);
		a.layers = this.layers, this.add(a);
		let o = new ba(Ta, Ea, e, t);
		o.layers = this.layers, this.add(o);
		let s = new ba(Ta, Ea, e, t);
		s.layers = this.layers, this.add(s);
		let c = new ba(Ta, Ea, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, Oa = class extends ba {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, ka = "\\[\\]\\.:\\/", Aa = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), ja = "[^\\[\\]\\.:\\/]", Ma = "[^" + ka.replace("\\.", "") + "]", Na = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", ja), Pa = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", Ma), Fa = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", ja), Ia = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", ja), La = RegExp("^" + Na + Pa + Fa + Ia + "$"), Ra = [
	"material",
	"materials",
	"bones",
	"map"
], za = class {
	constructor(e, t, n) {
		let r = n || Ba.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, Ba = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(Aa, "");
	}
	static parseTrackName(e) {
		let t = La.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			Ra.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			U("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						W("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						W("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						W("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						W("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						W("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						W("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					W("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			W("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					W("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					W("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
Ba.Composite = za, Ba.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, Ba.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, Ba.prototype.GetterByBindingType = [
	Ba.prototype._getValue_direct,
	Ba.prototype._getValue_array,
	Ba.prototype._getValue_arrayElement,
	Ba.prototype._getValue_toArray
], Ba.prototype.SetterByBindingTypeAndVersioning = [
	[
		Ba.prototype._setValue_direct,
		Ba.prototype._setValue_direct_setNeedsUpdate,
		Ba.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		Ba.prototype._setValue_array,
		Ba.prototype._setValue_array_setNeedsUpdate,
		Ba.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		Ba.prototype._setValue_arrayElement,
		Ba.prototype._setValue_arrayElement_setNeedsUpdate,
		Ba.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		Ba.prototype._setValue_fromArray,
		Ba.prototype._setValue_fromArray_setNeedsUpdate,
		Ba.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Va = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = G(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(G(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
(class e {
	static {
		e.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
var Ha = class extends $e {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		this.domElement !== null && this.disconnect(), this.domElement = e;
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function Ua(e, t, n, r) {
	let i = Wa(r);
	switch (n) {
		case w: return e * t;
		case k: return e * t / i.components * i.byteLength;
		case A: return e * t / i.components * i.byteLength;
		case j: return e * t * 2 / i.components * i.byteLength;
		case ee: return e * t * 2 / i.components * i.byteLength;
		case T: return e * t * 3 / i.components * i.byteLength;
		case E: return e * t * 4 / i.components * i.byteLength;
		case te: return e * t * 4 / i.components * i.byteLength;
		case M:
		case ne: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case N:
		case re: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case ie:
		case ae: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case P:
		case F: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case oe:
		case se:
		case L:
		case ce: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case I:
		case le:
		case ue: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case de: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case fe: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case pe: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case me: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case he: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case ge: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case _e: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case ve: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case ye: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case be: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case xe: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case Se: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case Ce: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case we: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case Te:
		case R:
		case Ee: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case De:
		case Oe: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case ke:
		case z: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Wa(e) {
	switch (e) {
		case d:
		case f: return {
			byteLength: 1,
			components: 1
		};
		case m:
		case p:
		case v: return {
			byteLength: 2,
			components: 1
		};
		case y:
		case b: return {
			byteLength: 2,
			components: 4
		};
		case g:
		case h:
		case _: return {
			byteLength: 4,
			components: 1
		};
		case S:
		case C: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } })), typeof window < "u" && (window.__THREE__ ? U("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
// node_modules/three/build/three.module.js
function Ga() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		r = e.requestAnimationFrame(i), n(t, a);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Ka(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var Q = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_RETROREFLECTION\n		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );\n				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );\n				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );\n				return envMapColor.rgb * envMapIntensity;\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n		#ifdef USE_RETROREFLECTION\n			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n				#ifdef ENVMAP_TYPE_CUBE_UV\n					vec3 bentNormal = cross( bitangent, viewDir );\n					bentNormal = normalize( cross( bentNormal, bitangent ) );\n					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n					return getIBLRetroRadiance( viewDir, bentNormal, roughness );\n				#else\n					return vec3( 0.0 );\n				#endif\n			}\n		#endif\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_SUN_LIGHTS > 0\n	struct SunLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];\n	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {\n		light.color = sunLight.color;\n		light.direction = sunLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	material.retroreflectivity = retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	vec2 dfg;\n	vec3 multiScatteringCompensation;\n	#ifdef USE_RETROREFLECTION\n		float retroreflectivity;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0Dielectric;\n		vec3 iridescenceF0Metallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );\n		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );\n		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;\n	vec3 halfDir = normalize( directLight.direction + geometryViewDir );\n	float dotVH = saturate( dot( geometryViewDir, halfDir ) );\n	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );\n		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );\n		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );\n		F = mix( F, retroF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );\n	#endif\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );\n		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );\n	}\n#endif\n#ifdef STANDARD\n	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );\n	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;\n	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )\n		float EssMs = material.dfg.x + material.dfg.y;\n		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );\n	#endif\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )\n	SunLight sunLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {\n		sunLight = sunLights[ i ];\n		getSunLightInfo( sunLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )\n		sunLightShadow = sunLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_RETROREFLECTION\n		#ifdef USE_ANISOTROPY\n			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n		#else\n			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );\n		#endif\n		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );\n	#endif\n	radiance += iblRadiance;\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		#define SUN_LIGHT_CASCADES 2\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#endif\n		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n		struct SunLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		float getSunShadow(\n			#if defined( SHADOWMAP_TYPE_PCF )\n				sampler2DShadow shadowMap,\n			#else\n				sampler2D shadowMap,\n			#endif\n			SunLightShadow sunLightShadow,\n			int shadowIndex\n		) {\n			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );\n			float viewDepth = vSunShadowWorldPosition.w;\n			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;\n			float shadow = 1.0;\n			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {\n				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];\n				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {\n					float cascadeShadow = getShadow(\n						shadowMap,\n						sunLightShadow.shadowMapSize,\n						sunLightShadow.shadowIntensity,\n						sunLightShadow.shadowBias,\n						sunLightShadow.shadowRadius,\n						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition\n					);\n					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );\n				}\n			}\n			return shadow;\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );\n		vSunShadowWorldNormal = shadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {\n		sunLight = sunLightShadows[ i ];\n		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	uniform float retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, $ = {
	common: {
		diffuse: { value: /*@__PURE__*/ new Z(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new J() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new J() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new J() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new J() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new J() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new J() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new J() },
		normalScale: { value: /*@__PURE__*/ new K(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new J() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new J() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new J() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new J() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new Z(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		sunLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		sunLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		sunShadowMatrix: { value: [] },
		sunShadowCascade: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: /*@__PURE__*/ new q() },
		probesMax: { value: /*@__PURE__*/ new q() },
		probesResolution: { value: /*@__PURE__*/ new q() }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new Z(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new J() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new Z(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new K(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new J() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 }
	}
}, qa = {
	basic: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.fog
		]),
		vertexShader: Q.meshbasic_vert,
		fragmentShader: Q.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new Z(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Q.meshlambert_vert,
		fragmentShader: Q.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.specularmap,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new Z(0) },
				specular: { value: /*@__PURE__*/ new Z(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Q.meshphong_vert,
		fragmentShader: Q.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.envmap,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.roughnessmap,
			$.metalnessmap,
			$.fog,
			$.lights,
			{
				emissive: { value: /*@__PURE__*/ new Z(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Q.meshphysical_vert,
		fragmentShader: Q.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.aomap,
			$.lightmap,
			$.emissivemap,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.gradientmap,
			$.fog,
			$.lights,
			{ emissive: { value: /*@__PURE__*/ new Z(0) } }
		]),
		vertexShader: Q.meshtoon_vert,
		fragmentShader: Q.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			$.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: Q.meshmatcap_vert,
		fragmentShader: Q.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ ji([$.points, $.fog]),
		vertexShader: Q.points_vert,
		fragmentShader: Q.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: Q.linedashed_vert,
		fragmentShader: Q.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ ji([$.common, $.displacementmap]),
		vertexShader: Q.depth_vert,
		fragmentShader: Q.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.bumpmap,
			$.normalmap,
			$.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: Q.meshnormal_vert,
		fragmentShader: Q.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ ji([$.sprite, $.fog]),
		vertexShader: Q.sprite_vert,
		fragmentShader: Q.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new J() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Q.background_vert,
		fragmentShader: Q.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new J() }
		},
		vertexShader: Q.backgroundCube_vert,
		fragmentShader: Q.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: Q.cube_vert,
		fragmentShader: Q.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: Q.equirect_vert,
		fragmentShader: Q.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ ji([
			$.common,
			$.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new q() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: Q.distance_vert,
		fragmentShader: Q.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ ji([
			$.lights,
			$.fog,
			{
				color: { value: /*@__PURE__*/ new Z(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: Q.shadow_vert,
		fragmentShader: Q.shadow_frag
	}
};
qa.physical = {
	uniforms: /*@__PURE__*/ ji([qa.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new J() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new J() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new K(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new J() },
		dispersion: { value: 0 },
		retroreflectivity: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new J() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new J() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new Z(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new J() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new J() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new J() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new K() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new J() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new Z(0) },
		specularColor: { value: /*@__PURE__*/ new Z(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new J() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new J() },
		anisotropyVector: { value: /*@__PURE__*/ new K() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new J() }
	}]),
	vertexShader: Q.meshphysical_vert,
	fragmentShader: Q.meshphysical_frag
};
var Ja = {
	r: 0,
	b: 0,
	g: 0
}, Ya = /*@__PURE__*/ new qt(), Xa = /*@__PURE__*/ new J();
Xa.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Za(e, t, n, r, i, a) {
	let o = new Z(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (l === void 0 && (l = new Jr(new Si(1, 1, 1), new Ri({
			name: "BackgroundCubeMaterial",
			uniforms: Ai(qa.backgroundCube.uniforms),
			vertexShader: qa.backgroundCube.vertexShader,
			fragmentShader: qa.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ya.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Xa), l.material.toneMapped = Y.getTransfer(i.colorSpace) !== Re, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new Jr(new ki(2, 2), new Ri({
			name: "BackgroundMaterial",
			uniforms: Ai(qa.background.uniforms),
			vertexShader: qa.background.vertexShader,
			fragmentShader: qa.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = Y.getTransfer(i.colorSpace) !== Re, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(Ja, Pi(e)), n.buffers.color.setClear(Ja.r, Ja.g, Ja.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function Qa(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function $a(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function eo(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (U("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.logarithmicDepthBuffer === !0, f = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && f === !1 && U("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: d,
		reversedDepthBuffer: f,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function to(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new Or(), s = new J(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var no = 4, ro = 6, io = 20, ao = 256, oo = /*@__PURE__*/ new xa(), so = /*@__PURE__*/ new Z(), co = null, lo = 0, uo = 0, fo = !1, po = /*@__PURE__*/ new q(), mo = /*@__PURE__*/ new q(), ho = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = po } = i;
		co = this._renderer.getRenderTarget(), lo = this._renderer.getActiveCubeFace(), uo = this._renderer.getActiveMipmapLevel(), fo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = So(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = xo(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(co, lo, uo), this._renderer.xr.enabled = fo, e.scissorTest = !1, vo(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), co = this._renderer.getRenderTarget(), lo = this._renderer.getActiveCubeFace(), uo = this._renderer.getActiveMipmapLevel(), fo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: c,
			minFilter: c,
			generateMipmaps: !1,
			type: v,
			format: E,
			colorSpace: Ie,
			depthBuffer: !1
		}, r = _o(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _o(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods} = go(r)), this._blurMaterial = bo(r, e, t), this._ggxMaterial = yo(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Jr(new wr(), e);
		this._renderer.compile(t, oo);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new ba(90, 1, t, n), o = [
			1,
			-1,
			1,
			1,
			1,
			1
		], s = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], c = this._renderer, l = c.autoClear, u = c.toneMapping;
		c.getClearColor(so), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Jr(new Si(), new Ir({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
		m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(so), p = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
			let l = this._cubeSize;
			vo(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
		}
		c.toneMapping = u, c.autoClear = l, e.background = m;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = So()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = xo());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i;
		let o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		vo(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, oo);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
		o.material = a;
		let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (c * 1.25), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - no ? n - d + no : 0), m = 4 * (this._cubeSize - f);
		s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, vo(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, oo), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, vo(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, oo);
	}
	_blur(e, t, n, r) {
		let i = this._pingPongRenderTarget, a = Math.min(r, Math.PI) / Math.SQRT2;
		this._blurPass(e, i, t, n, a), this._blurPass(i, e, n, n, a);
	}
	_blurPass(e, t, n, r, i) {
		let a = this._renderer, o = this._blurMaterial, s = this._lodMeshes[r];
		s.material = o;
		let c = o.uniforms;
		c.envMap.value = e.texture, c.sigma.value = i, c.mipInt.value = this._lodMax - n;
		let l = this._sizeLods[r];
		vo(t, 3 * l * (r > this._lodMax - no ? r - this._lodMax + no : 0), 4 * (this._cubeSize - l), 3 * l, 2 * l), a.setRenderTarget(t), a.render(s, oo);
	}
};
function go(e) {
	let t = [], n = [], r = e, i = e - no + 1 + ro;
	for (let e = 0; e < i; e++) {
		let e = 2 ** r;
		t.push(e);
		let i = 1 / (e - 2), a = -i, o = 1 + i, s = [
			a,
			a,
			o,
			a,
			o,
			o,
			a,
			a,
			o,
			o,
			a,
			o
		], c = /* @__PURE__ */ new Float32Array(108), l = /* @__PURE__ */ new Float32Array(108);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			c.set(r, 18 * e);
			for (let t = 0; t < 6; t++) {
				let n = s[t * 2] * 2 - 1, r = s[t * 2 + 1] * 2 - 1;
				e === 0 ? mo.set(1, r, n) : e === 1 ? mo.set(-n, 1, -r) : e === 2 ? mo.set(-n, r, 1) : e === 3 ? mo.set(-1, r, -n) : e === 4 ? mo.set(-n, -1, r) : mo.set(n, r, -1), mo.toArray(l, (e * 6 + t) * 3);
			}
		}
		let u = new wr();
		u.setAttribute("position", new lr(c, 3)), u.setAttribute("outputDirection", new lr(l, 3)), n.push(new Jr(u, null)), r > no && r--;
	}
	return {
		lodMeshes: n,
		sizeLods: t
	};
}
function _o(e, t, n) {
	let r = new Wt(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function vo(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function yo(e, t, n) {
	return new Ri({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES: ao,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: Co(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function bo(e, t, n) {
	return new Ri({
		name: "SphericalGaussianBlur",
		defines: {
			SAMPLES: io,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			sigma: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: Co(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float sigma;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n			#define GOLDEN_ANGLE 2.39996322973\n\n			void main() {\n\n				if ( sigma == 0.0 ) {\n\n					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );\n					return;\n\n				}\n\n				vec3 outputDirection = normalize( vOutputDirection );\n\n				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );\n				vec3 tangent = normalize( cross( up, outputDirection ) );\n				vec3 bitangent = cross( outputDirection, tangent );\n\n				// Truncate the kernel at three standard deviations or at the antipode.\n				float thetaMax = min( 3.0 * sigma, PI );\n				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );\n\n				vec3 accumColor = vec3( 0.0 );\n				float accumWeight = 0.0;\n\n				for ( int i = 0; i < SAMPLES; i ++ ) {\n\n					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.\n					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );\n					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );\n					float phi = float( i ) * GOLDEN_ANGLE;\n\n					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;\n					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;\n\n					// Correct the planar sample density to solid angle.\n					float weight = sin( theta ) / theta;\n\n					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );\n					accumWeight += weight;\n\n				}\n\n				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function xo() {
	return new Ri({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: Co(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function So() {
	return new Ri({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: Co(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Co() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute vec3 outputDirection;\n\n		varying vec3 vOutputDirection;\n\n		void main() {\n\n			vOutputDirection = outputDirection;\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var wo = class extends Wt {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new vi(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new Si(5, 5, 5), i = new Ri({
			name: "CubemapFromEquirect",
			uniforms: Ai(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Jr(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = c), new Da(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function To(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new wo(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new ho(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new ho(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function Eo(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && Xe("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function Do(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t;
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? dr : ur)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function Oo(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function ko(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: W("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function Ao(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new X();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new Gt(h, p, m, u);
			g.type = _, g.needsUpdate = !0;
			let v = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * v;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new K(p, m)
			}, r.set(o, d);
			function y() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", y);
			}
			o.addEventListener("dispose", y);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function jo(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var Mo = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function No(e, t, n, r, i, a) {
	let o = new Wt(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		storeMultisampledDepthBuffer: !1,
		storeMultisampledStencilBuffer: !1,
		resolveDepthBuffer: !1,
		resolveStencilBuffer: !1
	}), s = null, c = null, l = new wr();
	l.setAttribute("position", new fr([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), l.setAttribute("uv", new fr([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let u = new zi({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), d = new Jr(l, u), f = new xa(-1, 1, 1, -1, 0, 1), p = null, m = null, h = !1, g, _ = null, y = [], b = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t);
		for (let n = 0; n < y.length; n++) {
			let r = y[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		y = e, b = y.length > 0 && y[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		y.length > 0 && s === null && (s = new Wt(t, n, {
			type: v,
			depthBuffer: !1,
			stencilBuffer: !1
		}), c = new Wt(t, n, {
			type: v,
			depthBuffer: !1,
			stencilBuffer: !1
		}));
		for (let e = 0; e < y.length; e++) {
			let r = y[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (h || e.toneMapping === 0 && y.length === 0) return !1;
		if (_ = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return b === !1 && e.setRenderTarget(o), g = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return b;
	}, this.end = function(e, t) {
		e.toneMapping = g, h = !0;
		let n = o, r = s;
		for (let i = 0; i < y.length; i++) {
			let a = y[i];
			a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1 && (n = r, r = r === s ? c : s));
		}
		if (p !== e.outputColorSpace || m !== e.toneMapping) {
			p = e.outputColorSpace, m = e.toneMapping, u.defines = {}, Y.getTransfer(p) === "srgb" && (u.defines.SRGB_TRANSFER = "");
			let t = Mo[m];
			t && (u.defines[t] = ""), u.needsUpdate = !0;
		}
		u.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(_), e.render(d, f), _ = null, h = !1;
	}, this.isCompositing = function() {
		return h;
	}, this.dispose = function() {
		o.dispose(), s !== null && s.dispose(), c !== null && c.dispose(), l.dispose(), u.dispose();
	};
}
var Po = /*@__PURE__*/ new Ht(), Fo = /*@__PURE__*/ new yi(1, 1), Io = /*@__PURE__*/ new Gt(), Lo = /*@__PURE__*/ new Kt(), Ro = /*@__PURE__*/ new vi(), zo = [], Bo = [], Vo = /* @__PURE__ */ new Float32Array(16), Ho = /* @__PURE__ */ new Float32Array(9), Uo = /* @__PURE__ */ new Float32Array(4);
function Wo(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = zo[i];
	if (a === void 0 && (a = new Float32Array(i), zo[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Go(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Ko(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function qo(e, t) {
	let n = Bo[t];
	n === void 0 && (n = new Int32Array(t), Bo[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Jo(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Yo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Go(n, t)) return;
		e.uniform2fv(this.addr, t), Ko(n, t);
	}
}
function Xo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Go(n, t)) return;
		e.uniform3fv(this.addr, t), Ko(n, t);
	}
}
function Zo(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Go(n, t)) return;
		e.uniform4fv(this.addr, t), Ko(n, t);
	}
}
function Qo(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Go(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Ko(n, t);
	} else {
		if (Go(n, r)) return;
		Uo.set(r), e.uniformMatrix2fv(this.addr, !1, Uo), Ko(n, r);
	}
}
function $o(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Go(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Ko(n, t);
	} else {
		if (Go(n, r)) return;
		Ho.set(r), e.uniformMatrix3fv(this.addr, !1, Ho), Ko(n, r);
	}
}
function es(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Go(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Ko(n, t);
	} else {
		if (Go(n, r)) return;
		Vo.set(r), e.uniformMatrix4fv(this.addr, !1, Vo), Ko(n, r);
	}
}
function ts(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function ns(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Go(n, t)) return;
		e.uniform2iv(this.addr, t), Ko(n, t);
	}
}
function rs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Go(n, t)) return;
		e.uniform3iv(this.addr, t), Ko(n, t);
	}
}
function is(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Go(n, t)) return;
		e.uniform4iv(this.addr, t), Ko(n, t);
	}
}
function as(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function os(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Go(n, t)) return;
		e.uniform2uiv(this.addr, t), Ko(n, t);
	}
}
function ss(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Go(n, t)) return;
		e.uniform3uiv(this.addr, t), Ko(n, t);
	}
}
function cs(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Go(n, t)) return;
		e.uniform4uiv(this.addr, t), Ko(n, t);
	}
}
function ls(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (Fo.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = Fo) : a = Po, n.setTexture2D(t || a, i);
}
function us(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Lo, i);
}
function ds(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Ro, i);
}
function fs(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Io, i);
}
function ps(e) {
	switch (e) {
		case 5126: return Jo;
		case 35664: return Yo;
		case 35665: return Xo;
		case 35666: return Zo;
		case 35674: return Qo;
		case 35675: return $o;
		case 35676: return es;
		case 5124:
		case 35670: return ts;
		case 35667:
		case 35671: return ns;
		case 35668:
		case 35672: return rs;
		case 35669:
		case 35673: return is;
		case 5125: return as;
		case 36294: return os;
		case 36295: return ss;
		case 36296: return cs;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return ls;
		case 35679:
		case 36299:
		case 36307: return us;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return ds;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return fs;
	}
}
function ms(e, t) {
	e.uniform1fv(this.addr, t);
}
function hs(e, t) {
	let n = Wo(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function gs(e, t) {
	let n = Wo(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function _s(e, t) {
	let n = Wo(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function vs(e, t) {
	let n = Wo(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function ys(e, t) {
	let n = Wo(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function bs(e, t) {
	let n = Wo(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function xs(e, t) {
	e.uniform1iv(this.addr, t);
}
function Ss(e, t) {
	e.uniform2iv(this.addr, t);
}
function Cs(e, t) {
	e.uniform3iv(this.addr, t);
}
function ws(e, t) {
	e.uniform4iv(this.addr, t);
}
function Ts(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Es(e, t) {
	e.uniform2uiv(this.addr, t);
}
function Ds(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Os(e, t) {
	e.uniform4uiv(this.addr, t);
}
function ks(e, t, n) {
	let r = this.cache, i = t.length, a = qo(n, i);
	Go(r, a) || (e.uniform1iv(this.addr, a), Ko(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? Fo : Po;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function As(e, t, n) {
	let r = this.cache, i = t.length, a = qo(n, i);
	Go(r, a) || (e.uniform1iv(this.addr, a), Ko(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Lo, a[e]);
}
function js(e, t, n) {
	let r = this.cache, i = t.length, a = qo(n, i);
	Go(r, a) || (e.uniform1iv(this.addr, a), Ko(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Ro, a[e]);
}
function Ms(e, t, n) {
	let r = this.cache, i = t.length, a = qo(n, i);
	Go(r, a) || (e.uniform1iv(this.addr, a), Ko(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Io, a[e]);
}
function Ns(e) {
	switch (e) {
		case 5126: return ms;
		case 35664: return hs;
		case 35665: return gs;
		case 35666: return _s;
		case 35674: return vs;
		case 35675: return ys;
		case 35676: return bs;
		case 5124:
		case 35670: return xs;
		case 35667:
		case 35671: return Ss;
		case 35668:
		case 35672: return Cs;
		case 35669:
		case 35673: return ws;
		case 5125: return Ts;
		case 36294: return Es;
		case 36295: return Ds;
		case 36296: return Os;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return ks;
		case 35679:
		case 36299:
		case 36307: return As;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return js;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Ms;
	}
}
var Ps = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = ps(t.type);
	}
}, Fs = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ns(t.type);
	}
}, Is = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Ls = /(\w+)(\])?(\[|\.)?/g;
function Rs(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function zs(e, t, n) {
	let r = e.name, i = r.length;
	for (Ls.lastIndex = 0;;) {
		let a = Ls.exec(r), o = Ls.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Rs(n, l === void 0 ? new Ps(s, e, t) : new Fs(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Is(s), Rs(n, e)), n = e;
		}
	}
}
var Bs = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			zs(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Vs(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Hs = 37297, Us = 0;
function Ws(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var Gs = /*@__PURE__*/ new J();
function Ks(e) {
	Y._getMatrix(Gs, Y.workingColorSpace, e);
	let t = `mat3( ${Gs.elements.map((e) => e.toFixed(4))} )`;
	switch (Y.getTransfer(e)) {
		case Le: return [t, "LinearTransferOETF"];
		case Re: return [t, "sRGBTransferOETF"];
		default: return U("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function qs(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + Ws(e.getShaderSource(t), r);
	}
	return i;
}
function Js(e, t) {
	let n = Ks(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var Ys = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function Xs(e, t) {
	let n = Ys[t];
	return n === void 0 ? (U("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Zs = /*@__PURE__*/ new q();
function Qs() {
	return Y.getLuminanceCoefficients(Zs), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${Zs.x.toFixed(4)}, ${Zs.y.toFixed(4)}, ${Zs.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function $s(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(nc).join("\n");
}
function ec(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function tc(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function nc(e) {
	return e !== "";
}
function rc(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ic(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var ac = /^[ \t]*#include +<([\w\d./]+)>/gm;
function oc(e) {
	return e.replace(ac, cc);
}
var sc = /* @__PURE__ */ new Map();
function cc(e, t) {
	let n = Q[t];
	if (n === void 0) {
		let e = sc.get(t);
		if (e !== void 0) n = Q[e], U("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	}
	return oc(n);
}
var lc = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function uc(e) {
	return e.replace(lc, dc);
}
function dc(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function fc(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var pc = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function mc(e) {
	return pc[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var hc = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
};
function gc(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : hc[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var _c = { 302: "ENVMAP_MODE_REFRACTION" };
function vc(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : _c[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var yc = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function bc(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : yc[e.combine] || "ENVMAP_BLENDING_NONE";
}
function xc(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function Sc(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = mc(n), l = gc(n), u = vc(n), d = bc(n), f = xc(n), p = $s(n), m = ec(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(nc).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(nc).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		fc(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(nc).join("\n"), _ = [
		fc(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.retroreflection ? "#define USE_RETROREFLECTION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : Q.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : Xs("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		Q.colorspace_pars_fragment,
		Js("linearToOutputTexel", n.outputColorSpace),
		Qs(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(nc).join("\n")), o = oc(o), o = rc(o, n), o = ic(o, n), s = oc(s), s = rc(s, n), s = ic(s, n), o = uc(o), s = uc(s), n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = Vs(i, i.VERTEX_SHADER, y), S = Vs(i, i.FRAGMENT_SHADER, b);
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h) || "", r = i.getShaderInfoLog(x) || "", a = i.getShaderInfoLog(S) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(h, i.LINK_STATUS) === !1) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
				else {
					let e = qs(i, x, "vertex"), n = qs(i, S, "fragment");
					W("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (u = !1) : U("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: g
				},
				fragmentShader: {
					log: c,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new Bs(i, h), T = tc(i, h);
	}
	let w;
	this.getUniforms = function() {
		return w === void 0 && C(this), w;
	};
	let T;
	this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return E === !1 && (E = i.getProgramParameter(h, Hs)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Us++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var Cc = 0, wc = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new Tc(e), t.set(e, n)), n;
	}
}, Tc = class {
	constructor(e) {
		this.id = Cc++, this.code = e, this.usedTimes = 0;
	}
};
function Ec(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function Dc(e, t, n, r, i, a) {
	let o = new an(), s = new wc(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = r.precision, p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function m(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function h(i, o, l, u, h, g) {
		let _ = u.fog, v = h.geometry, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, x = t.get(i.envMap || y, b), S = x && x.mapping === 306 ? x.image.height : null, C = p[i.type];
		i.precision !== null && (f = r.getMaxPrecision(i.precision), f !== i.precision && U("WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."));
		let w = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		v.morphAttributes.position !== void 0 && (E = 1), v.morphAttributes.normal !== void 0 && (E = 2), v.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = qa[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else {
			D = i.vertexShader, O = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), k = e.id, A = t.id;
		}
		let j = e.getRenderTarget(), ee = e.state.buffers.depth.getReversed(), te = h.isInstancedMesh === !0, M = h.isBatchedMesh === !0, ne = !!i.map, N = !!i.matcap, re = !!x, P = !!i.aoMap, ie = !!i.lightMap, F = !!i.bumpMap && i.wireframe === !1, ae = !!i.normalMap, oe = !!i.displacementMap, se = !!i.emissiveMap, I = !!i.metalnessMap, L = !!i.roughnessMap, ce = i.anisotropy > 0, le = i.clearcoat > 0, ue = i.dispersion > 0, de = i.retroreflectivity > 0, fe = i.iridescence > 0, pe = i.sheen > 0, me = i.transmission > 0, he = ce && !!i.anisotropyMap, ge = le && !!i.clearcoatMap, _e = le && !!i.clearcoatNormalMap, ve = le && !!i.clearcoatRoughnessMap, ye = fe && !!i.iridescenceMap, be = fe && !!i.iridescenceThicknessMap, xe = pe && !!i.sheenColorMap, Se = pe && !!i.sheenRoughnessMap, Ce = !!i.specularMap, we = !!i.specularColorMap, Te = !!i.specularIntensityMap, R = me && !!i.transmissionMap, Ee = me && !!i.thicknessMap, De = !!i.gradientMap, Oe = !!i.alphaMap, ke = i.alphaTest > 0, z = !!i.alphaHash, Ae = !!i.extensions, je = 0;
		i.toneMapped && (j === null || j.isXRRenderTarget === !0) && (je = e.toneMapping);
		let Me = {
			shaderID: C,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: D,
			fragmentShader: O,
			defines: i.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: f,
			batching: M,
			batchingColor: M && h._colorsTexture !== null,
			instancing: te,
			instancingColor: te && h.instanceColor !== null,
			instancingMorph: te && h.morphTexture !== null,
			outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : Y.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: ne,
			matcap: N,
			envMap: re,
			envMapMode: re && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: P,
			lightMap: ie,
			bumpMap: F,
			normalMap: ae,
			displacementMap: oe,
			emissiveMap: se,
			normalMapObjectSpace: ae && i.normalMapType === 1,
			normalMapTangentSpace: ae && i.normalMapType === 0,
			packedNormalMap: ae && i.normalMapType === 0 && Ec(i.normalMap.format),
			metalnessMap: I,
			roughnessMap: L,
			anisotropy: ce,
			anisotropyMap: he,
			clearcoat: le,
			clearcoatMap: ge,
			clearcoatNormalMap: _e,
			clearcoatRoughnessMap: ve,
			dispersion: ue,
			retroreflection: de,
			iridescence: fe,
			iridescenceMap: ye,
			iridescenceThicknessMap: be,
			sheen: pe,
			sheenColorMap: xe,
			sheenRoughnessMap: Se,
			specularMap: Ce,
			specularColorMap: we,
			specularIntensityMap: Te,
			transmission: me,
			transmissionMap: R,
			thicknessMap: Ee,
			gradientMap: De,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: Oe,
			alphaTest: ke,
			alphaHash: z,
			combine: i.combine,
			mapUv: ne && m(i.map.channel),
			aoMapUv: P && m(i.aoMap.channel),
			lightMapUv: ie && m(i.lightMap.channel),
			bumpMapUv: F && m(i.bumpMap.channel),
			normalMapUv: ae && m(i.normalMap.channel),
			displacementMapUv: oe && m(i.displacementMap.channel),
			emissiveMapUv: se && m(i.emissiveMap.channel),
			metalnessMapUv: I && m(i.metalnessMap.channel),
			roughnessMapUv: L && m(i.roughnessMap.channel),
			anisotropyMapUv: he && m(i.anisotropyMap.channel),
			clearcoatMapUv: ge && m(i.clearcoatMap.channel),
			clearcoatNormalMapUv: _e && m(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: ve && m(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: ye && m(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: be && m(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: xe && m(i.sheenColorMap.channel),
			sheenRoughnessMapUv: Se && m(i.sheenRoughnessMap.channel),
			specularMapUv: Ce && m(i.specularMap.channel),
			specularColorMapUv: we && m(i.specularColorMap.channel),
			specularIntensityMapUv: Te && m(i.specularIntensityMap.channel),
			transmissionMapUv: R && m(i.transmissionMap.channel),
			thicknessMapUv: Ee && m(i.thicknessMap.channel),
			alphaMapUv: Oe && m(i.alphaMap.channel),
			vertexTangents: !!v.attributes.tangent && (ae || ce),
			vertexNormals: !!v.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!v.attributes.color && v.attributes.color.itemSize === 4,
			pointsUvs: h.isPoints === !0 && !!v.attributes.uv && (ne || Oe),
			fog: !!_,
			useFog: i.fog === !0,
			fogExp2: !!_ && _.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || v.attributes.normal === void 0 && ae === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: ee,
			skinning: h.isSkinnedMesh === !0,
			hasPositionAttribute: v.attributes.position !== void 0,
			morphTargets: v.morphAttributes.position !== void 0,
			morphNormals: v.morphAttributes.normal !== void 0,
			morphColors: v.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numSunLights: o.sun.length,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numSunLightShadows: o.sunShadowMap.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: g.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: je,
			decodeVideoTexture: ne && i.map.isVideoTexture === !0 && Y.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: se && i.emissiveMap.isVideoTexture === !0 && Y.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: Ae && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (Ae && i.extensions.multiDraw === !0 || M) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Me.vertexUv1s = c.has(1), Me.vertexUv2s = c.has(2), Me.vertexUv3s = c.has(3), c.clear(), Me;
	}
	function g(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (_(n, t), v(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function _(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numSunLights), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numSunLightShadows), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function v(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.retroreflection && o.enable(24), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function y(e) {
		let t = p[e.type], n;
		if (t) {
			let e = qa[t];
			n = Fi.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function b(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new Sc(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function x(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function S(e) {
		s.remove(e);
	}
	function C() {
		s.dispose();
	}
	return {
		getParameters: h,
		getProgramCacheKey: g,
		getUniforms: y,
		acquireProgram: b,
		releaseProgram: x,
		releaseShaderCache: S,
		programs: l,
		dispose: C
	};
}
function Oc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function kc(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Ac(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function jc() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l, u) {
		u.reversedDepth === !0 && (c = -c);
		let d = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || kc), r.length > 1 && r.sort(t || Ac), i.length > 1 && i.sort(t || Ac);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function Mc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new jc(), e.set(t, [i])) : n >= r.length ? (i = new jc(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Nc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					direction: new q(),
					color: new Z()
				};
				break;
			case "SpotLight":
				n = {
					position: new q(),
					direction: new q(),
					color: new Z(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new q(),
					color: new Z(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new q(),
					skyColor: new Z(),
					groundColor: new Z()
				};
				break;
			case "RectAreaLight": n = {
				color: new Z(),
				position: new q(),
				halfWidth: new q(),
				halfHeight: new q()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Pc() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new K()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new K()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new K(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var Fc = 0;
function Ic(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Lc(e) {
	let t = new Nc(), n = Pc(), r = {
		version: 0,
		hash: {
			sunLength: -1,
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numSunShadows: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		sun: [],
		sunShadow: [],
		sunShadowMap: [],
		sunShadowMatrix: [],
		sunShadowCascade: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new q());
	let i = new q(), a = new qt(), o = new qt();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		i.sort(Ic);
		for (let e = 0, S = i.length; e < S; e++) {
			let S = i[e], C = S.color, w = S.intensity, T = S.distance, E = null;
			if (S.shadow && S.shadow.map && (E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture), S.isAmbientLight) a += C.r * w, o += C.g * w, s += C.b * w;
			else if (S.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w);
				x++;
			} else if (S.isSunLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()), r.sunShadow[l] = t, r.sunShadowMap[l] = E;
					let i = e.getViewportCount();
					for (let t = 0; t < i; t++) r.sunShadowMatrix[u + t] = e.getMatrix(t), r.sunShadowCascade[u + t] = e._cascadeData[t];
					u += i, l++;
				}
				r.sun[c] = e, c++;
			} else if (S.isDirectionalLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[d] = t, r.directionalShadowMap[d] = E, r.directionalShadowMatrix[d] = S.shadow.matrix, g++;
				}
				r.directional[d] = e, d++;
			} else if (S.isSpotLight) {
				let e = t.get(S);
				e.position.setFromMatrixPosition(S.matrixWorld), e.color.copy(C).multiplyScalar(w), e.distance = T, e.coneCos = Math.cos(S.angle), e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), e.decay = S.decay, r.spot[p] = e;
				let i = S.shadow;
				if (S.map && (r.spotLightMap[y] = S.map, y++, i.updateMatrices(S), S.castShadow && b++), r.spotLightMatrix[p] = i.matrix, S.castShadow) {
					let e = n.get(S);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[p] = e, r.spotShadowMap[p] = E, v++;
				}
				p++;
			} else if (S.isRectAreaLight) {
				let e = t.get(S);
				e.color.copy(C).multiplyScalar(w), e.halfWidth.set(S.width * .5, 0, 0), e.halfHeight.set(0, S.height * .5, 0), r.rectArea[m] = e, m++;
			} else if (S.isPointLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), e.distance = S.distance, e.decay = S.decay, S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[f] = t, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = S.shadow.matrix, _++;
				}
				r.point[f] = e, f++;
			} else if (S.isHemisphereLight) {
				let e = t.get(S);
				e.skyColor.copy(S.color).multiplyScalar(w), e.groundColor.copy(S.groundColor).multiplyScalar(w), r.hemi[h] = e, h++;
			}
		}
		m > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = $.LTC_FLOAT_1, r.rectAreaLTC2 = $.LTC_FLOAT_2) : (r.rectAreaLTC1 = $.LTC_HALF_1, r.rectAreaLTC2 = $.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let S = r.hash;
		(S.sunLength !== c || S.directionalLength !== d || S.pointLength !== f || S.spotLength !== p || S.rectAreaLength !== m || S.hemiLength !== h || S.numSunShadows !== l || S.numDirectionalShadows !== g || S.numPointShadows !== _ || S.numSpotShadows !== v || S.numSpotMaps !== y || S.numLightProbes !== x) && (r.sun.length = c, r.directional.length = d, r.spot.length = p, r.rectArea.length = m, r.point.length = f, r.hemi.length = h, r.sunShadow.length = l, r.sunShadowMap.length = l, r.sunShadowMatrix.length = u, r.sunShadowCascade.length = u, r.directionalShadow.length = g, r.directionalShadowMap.length = g, r.directionalShadowMatrix.length = g, r.pointShadow.length = _, r.pointShadowMap.length = _, r.pointShadowMatrix.length = _, r.spotShadow.length = v, r.spotShadowMap.length = v, r.spotLightMatrix.length = v + y - b, r.spotLightMap.length = y, r.numSpotLightShadowsWithMaps = b, r.numLightProbes = x, S.sunLength = c, S.directionalLength = d, S.pointLength = f, S.spotLength = p, S.rectAreaLength = m, S.hemiLength = h, S.numSunShadows = l, S.numDirectionalShadows = g, S.numPointShadows = _, S.numSpotShadows = v, S.numSpotMaps = y, S.numLightProbes = x, r.version = Fc++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isSunLight) {
				let e = r.sun[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), n++;
			} else if (p.isDirectionalLight) {
				let e = r.directional[s];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), s++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), o.identity(), a.copy(p.matrixWorld), a.premultiply(f), o.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Rc(e) {
	let t = new Lc(e), n = [], r = [], i = [];
	function a(e) {
		d.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c(e) {
		i.push(e);
	}
	function l() {
		t.setup(n);
	}
	function u(e) {
		t.setupView(n, e);
	}
	let d = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: d,
		setupLights: l,
		setupLightsView: u,
		pushLight: o,
		pushShadow: s,
		pushLightProbeGrid: c
	};
}
function zc(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Rc(e), t.set(n, [a])) : r >= i.length ? (a = new Rc(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Bc = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Vc = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Hc = [
	/*@__PURE__*/ new q(1, 0, 0),
	/*@__PURE__*/ new q(-1, 0, 0),
	/*@__PURE__*/ new q(0, 1, 0),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, 0, 1),
	/*@__PURE__*/ new q(0, 0, -1)
], Uc = [
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, 0, 1),
	/*@__PURE__*/ new q(0, 0, -1),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, -1, 0)
], Wc = /*@__PURE__*/ new qt(), Gc = /*@__PURE__*/ new q(), Kc = /*@__PURE__*/ new q();
function qc(e, t, n) {
	let r = new ui(), i = new K(), o = new K(), s = new X(), l = new Vi(), u = new Hi(), d = {}, f = n.maxTextureSize, p = {
		0: 1,
		1: 0,
		2: 2
	}, m = new Ri({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new K() },
			radius: { value: 4 }
		},
		vertexShader: Bc,
		fragmentShader: Vc
	}), h = m.clone();
	h.defines.HORIZONTAL_PASS = 1;
	let y = new wr();
	y.setAttribute("position", new lr(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let b = new Jr(y, m), x = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let S = this.type;
	this.render = function(t, n, l) {
		if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (U("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
		let u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), m = e.state;
		m.setBlending(0), m.buffers.depth.getReversed() === !0 ? m.buffers.color.setClear(0, 0, 0, 0) : m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1);
		let h = S !== this.type;
		h && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let u = 0, d = t.length; u < d; u++) {
			let d = t[u], p = d.shadow;
			if (p === void 0) {
				U("WebGLShadowMap:", d, "has no shadow.");
				continue;
			}
			if (p.autoUpdate === !1 && p.needsUpdate === !1) continue;
			i.copy(p.mapSize);
			let y = p.getFrameExtents();
			i.multiply(y), o.copy(p.mapSize), (i.x > f || i.y > f) && (i.x > f && (o.x = Math.floor(f / y.x), i.x = o.x * y.x, p.mapSize.x = o.x), i.y > f && (o.y = Math.floor(f / y.y), i.y = o.y * y.y, p.mapSize.y = o.y));
			let b = e.state.buffers.depth.getReversed();
			if (p.camera._reversedDepth = b, p.map === null || h === !0) {
				if (p.map !== null && (p.map.depthTexture !== null && (p.map.depthTexture.dispose(), p.map.depthTexture = null), p.map.dispose()), this.type === 3) {
					if (d.isPointLight) {
						U("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					p.map = new Wt(i.x, i.y, {
						format: j,
						type: v,
						minFilter: c,
						magFilter: c,
						generateMipmaps: !1
					}), p.map.texture.name = d.name + ".shadowMap", p.map.depthTexture = new yi(i.x, i.y, _), p.map.depthTexture.name = d.name + ".shadowMapDepth", p.map.depthTexture.format = D, p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a;
				} else d.isPointLight ? (p.map = new wo(i.x), p.map.depthTexture = new bi(i.x, g)) : (p.map = new Wt(i.x, i.y), p.map.depthTexture = new yi(i.x, i.y, g)), p.map.depthTexture.name = d.name + ".shadowMap", p.map.depthTexture.format = D, this.type === 1 ? (p.map.depthTexture.compareFunction = b ? 518 : 515, p.map.depthTexture.minFilter = c, p.map.depthTexture.magFilter = c) : (p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a);
				p.camera.updateProjectionMatrix();
			}
			p.map.isWebGLCubeRenderTarget !== !0 && (p.map.width !== i.x || p.map.height !== i.y) && p.map.setSize(i.x, i.y);
			let x = p.map.isWebGLCubeRenderTarget ? 6 : p.getViewportCount();
			d.isPointLight !== !0 && p.updateMatrices(d, l);
			for (let t = 0; t < x; t++) {
				let i = p.getCamera(t);
				if (d.isPointLight) {
					let e = p.camera, n = p.matrix, r = d.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Gc.setFromMatrixPosition(d.matrixWorld), e.position.copy(Gc), Kc.copy(e.position), Kc.add(Hc[t]), e.up.copy(Uc[t]), e.lookAt(Kc), e.updateMatrixWorld(), n.makeTranslation(-Gc.x, -Gc.y, -Gc.z), Wc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), p._frustum.setFromProjectionMatrix(Wc, e.coordinateSystem, e.reversedDepth);
				}
				if (p.map.isWebGLCubeRenderTarget) e.setRenderTarget(p.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(p.map), e.clear());
					let n = p.getViewport(t);
					s.set(o.x * n.x, o.y * n.y, o.x * n.z, o.y * n.w), m.viewport(s);
				}
				r = p.getFrustum(t), T(n, l, i, d, this.type);
			}
			p.isPointLightShadow !== !0 && this.type === 3 && C(p, l), p.needsUpdate = !1;
		}
		S = this.type, x.needsUpdate = !1, e.setRenderTarget(u, d, p);
	};
	function C(n, r) {
		let a = t.update(b);
		m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples, h.defines.VSM_SAMPLES = n.blurSamples, m.needsUpdate = !0, h.needsUpdate = !0), n.mapPass === null ? n.mapPass = new Wt(i.x, i.y, {
			format: j,
			type: v
		}) : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) && n.mapPass.setSize(n.map.width, n.map.height), m.uniforms.shadow_pass.value = n.map.depthTexture, m.uniforms.resolution.value.set(n.map.width, n.map.height), m.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, m, b, null), h.uniforms.shadow_pass.value = n.mapPass.texture, h.uniforms.resolution.value.set(n.map.width, n.map.height), h.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, h, b, null);
	}
	function w(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? u : l, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = d[e];
			r === void 0 && (r = {}, d[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", E)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? p[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function T(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = w(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = w(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) T(c[e], i, a, o, s);
	}
	function E(e) {
		e.target.removeEventListener("dispose", E);
		for (let t in d) {
			let n = d[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Jc(e, t) {
	function n() {
		let t = !1, n = new X(), r = null, i = new X(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? I(e.DEPTH_TEST) : L(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = Qe[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? I(e.STENCIL_TEST) : L(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Z(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, ee = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), te = !1, M = 0, ne = e.getParameter(e.VERSION);
	ne.indexOf("WebGL") === -1 ? ne.indexOf("OpenGL ES") !== -1 && (M = parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]), te = M >= 2) : (M = parseFloat(/^WebGL (\d)/.exec(ne)[1]), te = M >= 1);
	let N = null, re = {}, P = e.getParameter(e.SCISSOR_BOX), ie = e.getParameter(e.VIEWPORT), F = new X().fromArray(P), ae = new X().fromArray(ie);
	function oe(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let se = {};
	se[e.TEXTURE_2D] = oe(e.TEXTURE_2D, e.TEXTURE_2D, 1), se[e.TEXTURE_CUBE_MAP] = oe(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), se[e.TEXTURE_2D_ARRAY] = oe(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), se[e.TEXTURE_3D] = oe(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), I(e.DEPTH_TEST), o.setFunc(3), he(!1), ge(1), I(e.CULL_FACE), pe(0);
	function I(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function L(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function ce(t, n) {
		return f[t] !== n && (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function le(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function ue(t) {
		return h !== t && (e.useProgram(t), h = t, !0);
	}
	let de = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	de[103] = e.MIN, de[104] = e.MAX;
	let fe = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function pe(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) g === !0 && (L(e.BLEND), g = !1);
		else if (g === !1 && (I(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: W("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						W("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						W("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: W("WebGLState: Invalid blending: ", t);
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
		} else a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(de[n], de[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(fe[r], fe[i], fe[o], fe[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function me(t, n) {
		t.side === 2 ? L(e.CULL_FACE) : I(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), he(r), t.blending === 1 && t.transparent === !1 ? pe(0) : pe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? I(e.SAMPLE_ALPHA_TO_COVERAGE) : L(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function he(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function ge(t) {
		t === 0 ? L(e.CULL_FACE) : (I(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function _e(t) {
		t !== k && (te && e.lineWidth(t), k = t);
	}
	function ve(t, n, r) {
		t ? (I(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n), e.polygonOffset(n, r))) : L(e.POLYGON_OFFSET_FILL);
	}
	function ye(t) {
		t ? I(e.SCISSOR_TEST) : L(e.SCISSOR_TEST);
	}
	function be(t) {
		t === void 0 && (t = e.TEXTURE0 + ee - 1), N !== t && (e.activeTexture(t), N = t);
	}
	function xe(t, n, r) {
		r === void 0 && (r = N === null ? e.TEXTURE0 + ee - 1 : N);
		let i = re[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, re[r] = i), (i.type !== t || i.texture !== n) && (N !== r && (e.activeTexture(r), N = r), e.bindTexture(t, n || se[t]), i.type = t, i.texture = n);
	}
	function Se() {
		let t = re[N];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function Ce() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function we() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function R() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function De() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function Oe() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function z() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			W("WebGLState:", e);
		}
	}
	function je(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function Me(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function B(t) {
		F.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), F.copy(t));
	}
	function Ne(t) {
		ae.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), ae.copy(t));
	}
	function V(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function H(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function Pe() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, N = null, re = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Z(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, F.set(0, 0, e.canvas.width, e.canvas.height), ae.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: I,
		disable: L,
		bindFramebuffer: ce,
		drawBuffers: le,
		useProgram: ue,
		setBlending: pe,
		setMaterial: me,
		setFlipSided: he,
		setCullFace: ge,
		setLineWidth: _e,
		setPolygonOffset: ve,
		setScissorTest: ye,
		activeTexture: be,
		bindTexture: xe,
		unbindTexture: Se,
		compressedTexImage2D: Ce,
		compressedTexImage3D: we,
		texImage2D: z,
		texImage3D: Ae,
		pixelStorei: Me,
		getParameter: je,
		updateUBOMapping: V,
		uniformBlockBinding: H,
		texStorage2D: Oe,
		texStorage3D: ke,
		texSubImage2D: Te,
		texSubImage3D: R,
		compressedTexSubImage2D: Ee,
		compressedTexSubImage3D: De,
		scissor: B,
		viewport: Ne,
		reset: Pe
	};
}
function Yc(e, t, d, f, p, m, h) {
	let g = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, _ = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), v = new K(), y = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new Set(), x, S = /* @__PURE__ */ new WeakMap(), C = !1;
	try {
		C = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function w(e, t) {
		return C ? new OffscreenCanvas(e, t) : Ge("canvas");
	}
	function T(e, t, n) {
		let r = 1, i = je(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				x === void 0 && (x = w(n, a));
				let o = t ? w(n, a) : x;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), U("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && U("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function E(e) {
		return e.generateMipmaps;
	}
	function D(t) {
		e.generateMipmap(t);
	}
	function k(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function A(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			U("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || U("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? Le : Y.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function j(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, U("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function ee(e, t) {
		return E(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function te(e) {
		let t = e.target;
		t.removeEventListener("dispose", te), ne(t), t.isVideoTexture && y.delete(t), t.isHTMLTexture && b.delete(t);
	}
	function M(e) {
		let t = e.target;
		t.removeEventListener("dispose", M), re(t);
	}
	function ne(e) {
		let t = f.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, r = S.get(n);
		if (r) {
			let i = r[t.__cacheKey];
			i.usedTimes--, i.usedTimes === 0 && N(e), Object.keys(r).length === 0 && S.delete(n);
		}
		f.remove(e);
	}
	function N(t) {
		let n = f.get(t);
		e.deleteTexture(n.__webglTexture);
		let r = t.source, i = S.get(r);
		delete i[n.__cacheKey], h.memory.textures--;
	}
	function re(t) {
		let n = f.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), f.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let r = t.textures;
		for (let t = 0, n = r.length; t < n; t++) {
			let n = f.get(r[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), h.memory.textures--), f.remove(r[t]);
		}
		f.remove(t);
	}
	let P = 0;
	function ie() {
		P = 0;
	}
	function F() {
		return P;
	}
	function ae(e) {
		P = e;
	}
	function oe() {
		let e = P;
		return e >= p.maxTextures && U("WebGLTextures: Trying to use " + (e + 1) + " texture units while this GPU supports only " + p.maxTextures), P += 1, e;
	}
	function se(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function I(t, n) {
		let r = f.get(t);
		if (t.isVideoTexture && z(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && r.__version !== t.version) {
			let e = t.image;
			if (e === null) U("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) U("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				_e(r, t, n);
				return;
			}
		} else t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		d.bindTexture(e.TEXTURE_2D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function L(t, n) {
		let r = f.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version ? _e(r, t, n) : (t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null), d.bindTexture(e.TEXTURE_2D_ARRAY, r.__webglTexture, e.TEXTURE0 + n));
	}
	function ce(t, n) {
		let r = f.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version ? _e(r, t, n) : d.bindTexture(e.TEXTURE_3D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function le(t, n) {
		let r = f.get(t);
		t.isCubeDepthTexture !== !0 && t.version > 0 && r.__version !== t.version ? ve(r, t, n) : d.bindTexture(e.TEXTURE_CUBE_MAP, r.__webglTexture, e.TEXTURE0 + n);
	}
	let ue = {
		[n]: e.REPEAT,
		[r]: e.CLAMP_TO_EDGE,
		[i]: e.MIRRORED_REPEAT
	}, de = {
		[a]: e.NEAREST,
		[o]: e.NEAREST_MIPMAP_NEAREST,
		[s]: e.NEAREST_MIPMAP_LINEAR,
		[c]: e.LINEAR,
		[l]: e.LINEAR_MIPMAP_NEAREST,
		[u]: e.LINEAR_MIPMAP_LINEAR
	}, fe = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function pe(n, r) {
		if (r.type === 1015 && t.has("OES_texture_float_linear") === !1 && (r.magFilter === 1006 || r.magFilter === 1007 || r.magFilter === 1005 || r.magFilter === 1008 || r.minFilter === 1006 || r.minFilter === 1007 || r.minFilter === 1005 || r.minFilter === 1008) && U("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, ue[r.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ue[r.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ue[r.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, de[r.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, de[r.minFilter]), r.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, fe[r.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (r.magFilter === 1003 || r.minFilter !== 1005 && r.minFilter !== 1008 || r.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (r.anisotropy > 1 || f.get(r).__currentAnisotropy) {
				let i = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, p.getMaxAnisotropy())), f.get(r).__currentAnisotropy = r.anisotropy;
			}
		}
	}
	function me(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", te));
		let i = n.source, a = S.get(i);
		a === void 0 && (a = {}, S.set(i, a));
		let o = se(n);
		if (o !== t.__cacheKey) {
			a[o] === void 0 && (a[o] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, h.memory.textures++, r = !0), a[o].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && N(n)), t.__cacheKey = o, t.__webglTexture = a[o].texture;
		}
		return r;
	}
	function he(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function ge(t, n, r, i) {
		let a = t.updateRanges;
		if (a.length === 0) d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, n.width, n.height, r, i, n.data);
		else {
			a.sort((e, t) => e.start - t.start);
			let o = 0;
			for (let e = 1; e < a.length; e++) {
				let t = a[o], r = a[e], i = t.start + t.count, s = he(r.start, n.width, 4), c = he(t.start, n.width, 4);
				r.start <= i + 1 && s === c && he(r.start + r.count - 1, n.width, 4) === s ? t.count = Math.max(t.count, r.start + r.count - t.start) : (++o, a[o] = r);
			}
			a.length = o + 1;
			let s = d.getParameter(e.UNPACK_ROW_LENGTH), c = d.getParameter(e.UNPACK_SKIP_PIXELS), l = d.getParameter(e.UNPACK_SKIP_ROWS);
			d.pixelStorei(e.UNPACK_ROW_LENGTH, n.width);
			for (let t = 0, o = a.length; t < o; t++) {
				let o = a[t], s = Math.floor(o.start / 4), c = Math.ceil(o.count / 4), l = s % n.width, u = Math.floor(s / n.width), f = c;
				d.pixelStorei(e.UNPACK_SKIP_PIXELS, l), d.pixelStorei(e.UNPACK_SKIP_ROWS, u), d.texSubImage2D(e.TEXTURE_2D, 0, l, u, f, 1, r, i, n.data);
			}
			t.clearUpdateRanges(), d.pixelStorei(e.UNPACK_ROW_LENGTH, s), d.pixelStorei(e.UNPACK_SKIP_PIXELS, c), d.pixelStorei(e.UNPACK_SKIP_ROWS, l);
		}
	}
	function _e(t, n, r) {
		let i = e.TEXTURE_2D;
		(n.isDataArrayTexture || n.isCompressedArrayTexture) && (i = e.TEXTURE_2D_ARRAY), n.isData3DTexture && (i = e.TEXTURE_3D);
		let a = me(t, n), o = n.source;
		d.bindTexture(i, t.__webglTexture, e.TEXTURE0 + r);
		let s = f.get(o);
		if (o.version !== s.__version || a === !0) {
			if (d.activeTexture(e.TEXTURE0 + r), !(typeof ImageBitmap < "u" && n.image instanceof ImageBitmap)) {
				let t = Y.getPrimaries(Y.workingColorSpace), r = n.colorSpace === "" ? null : Y.getPrimaries(n.colorSpace), i = n.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment);
			let t = T(n.image, !1, p.maxTextureSize);
			t = Ae(n, t);
			let c = m.convert(n.format, n.colorSpace), l = m.convert(n.type), u = A(n.internalFormat, c, l, n.normalized, n.colorSpace, n.isVideoTexture);
			pe(i, n);
			let f, h = n.mipmaps, g = n.isVideoTexture !== !0, _ = s.__version === void 0 || a === !0, v = o.dataReady, y = ee(n, t);
			if (n.isDepthTexture) u = j(n.format === O, n.type), _ && (g ? d.texStorage2D(e.TEXTURE_2D, 1, u, t.width, t.height) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, null));
			else if (n.isDataTexture) {
				if (h.length > 0) {
					g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
					for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data);
					n.generateMipmaps = !1;
				} else g ? (_ && d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height), v && ge(n, t, c, l)) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, t.data);
			} else if (n.isCompressedTexture) {
				if (n.isCompressedArrayTexture) {
					g && _ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, h[0].width, h[0].height, t.depth);
					for (let r = 0, i = h.length; r < i; r++) if (f = h[r], n.format !== 1023) {
						if (c !== null) {
							if (g) {
								if (v) {
									if (n.layerUpdates.size > 0) {
										let t = Ua(f.width, f.height, n.format, n.type);
										for (let i of n.layerUpdates) {
											let n = f.data.subarray(i * t / f.data.BYTES_PER_ELEMENT, (i + 1) * t / f.data.BYTES_PER_ELEMENT);
											d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, i, f.width, f.height, 1, c, n);
										}
									} else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, f.data);
								}
							} else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, f.data, 0, 0);
						} else U("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else g ? v && d.texSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, l, f.data) : d.texImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, c, l, f.data);
					n.layerUpdates.size > 0 && n.clearLayerUpdates();
				} else {
					g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
					for (let t = 0, r = h.length; t < r; t++) f = h[t], n.format === 1023 ? g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data) : c === null ? U("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : g ? v && d.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, f.data) : d.compressedTexImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, f.data);
				}
			} else if (n.isDataArrayTexture) {
				if (g) {
					if (_ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, t.width, t.height, t.depth), v) {
						if (n.layerUpdates.size > 0) {
							let r = Ua(t.width, t.height, n.format, n.type);
							for (let i of n.layerUpdates) {
								let n = t.data.subarray(i * r / t.data.BYTES_PER_ELEMENT, (i + 1) * r / t.data.BYTES_PER_ELEMENT);
								d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, t.width, t.height, 1, c, l, n);
							}
							n.clearLayerUpdates();
						} else d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data);
					}
				} else d.texImage3D(e.TEXTURE_2D_ARRAY, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			} else if (n.isData3DTexture) g ? (_ && d.texStorage3D(e.TEXTURE_3D, y, u, t.width, t.height, t.depth), v && d.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data)) : d.texImage3D(e.TEXTURE_3D, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			else if (n.isFramebufferTexture) {
				if (_) {
					if (g) d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
					else {
						let n = t.width, r = t.height;
						for (let t = 0; t < y; t++) d.texImage2D(e.TEXTURE_2D, t, u, n, r, 0, c, l, null), n >>= 1, r >>= 1;
					}
				}
			} else if (n.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let r = e.canvas;
					if (r.hasAttribute("layoutsubtree") || r.setAttribute("layoutsubtree", "true"), t.parentNode !== r) {
						r.appendChild(t), b.add(n), r.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of b) t.includes(e.image) && (e.needsUpdate = !0);
						}, r.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (h.length > 0) {
				if (g && _) {
					let t = je(h[0]);
					d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
				}
				for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, c, l, f) : d.texImage2D(e.TEXTURE_2D, t, u, c, l, f);
				n.generateMipmaps = !1;
			} else if (g) {
				if (_) {
					let n = je(t);
					d.texStorage2D(e.TEXTURE_2D, y, u, n.width, n.height);
				}
				v && d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, c, l, t);
			} else d.texImage2D(e.TEXTURE_2D, 0, u, c, l, t);
			E(n) && D(i), s.__version = o.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function ve(t, n, r) {
		if (n.image.length !== 6) return;
		let i = me(t, n), a = n.source;
		d.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + r);
		let o = f.get(a);
		if (a.version !== o.__version || i === !0) {
			d.activeTexture(e.TEXTURE0 + r);
			let t = Y.getPrimaries(Y.workingColorSpace), s = n.colorSpace === "" ? null : Y.getPrimaries(n.colorSpace), c = n.colorSpace === "" || t === s ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, c);
			let l = n.isCompressedTexture || n.image[0].isCompressedTexture, u = n.image[0] && n.image[0].isDataTexture, f = [];
			for (let e = 0; e < 6; e++) !l && !u ? f[e] = T(n.image[e], !0, p.maxCubemapSize) : f[e] = u ? n.image[e].image : n.image[e], f[e] = Ae(n, f[e]);
			let h = f[0], g = m.convert(n.format, n.colorSpace), _ = m.convert(n.type), v = A(n.internalFormat, g, _, n.normalized, n.colorSpace), y = n.isVideoTexture !== !0, b = o.__version === void 0 || i === !0, x = a.dataReady, S = ee(n, h);
			pe(e.TEXTURE_CUBE_MAP, n);
			let C;
			if (l) {
				y && b && d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					C = f[t].mipmaps;
					for (let r = 0; r < C.length; r++) {
						let i = C[r];
						n.format === 1023 ? y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, g, _, i.data) : g === null ? U("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? x && d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (C = n.mipmaps, y && b) {
					C.length > 0 && S++;
					let t = je(f[0]);
					d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (u) {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, f[t].width, f[t].height, g, _, f[t].data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, f[t].width, f[t].height, 0, g, _, f[t].data);
					for (let n = 0; n < C.length; n++) {
						let r = C[n].image[t].image;
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, r.width, r.height, g, _, r.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, r.width, r.height, 0, g, _, r.data);
					}
				} else {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, f[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, g, _, f[t]);
					for (let n = 0; n < C.length; n++) {
						let r = C[n];
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, g, _, r.image[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, g, _, r.image[t]);
					}
				}
			}
			E(n) && D(e.TEXTURE_CUBE_MAP), o.__version = a.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function ye(t, n, r, i, a, o) {
		let s = m.convert(r.format, r.colorSpace), c = m.convert(r.type), l = A(r.internalFormat, s, c, r.normalized, r.colorSpace), u = f.get(n), p = f.get(r);
		if (p.__renderTarget = n, !u.__hasExternalTextures) {
			let t = Math.max(1, n.width >> o), r = Math.max(1, n.height >> o);
			a === e.TEXTURE_3D || a === e.TEXTURE_2D_ARRAY ? d.texImage3D(a, o, l, t, r, n.depth, 0, s, c, null) : d.texImage2D(a, o, l, t, r, 0, s, c, null);
		}
		d.bindFramebuffer(e.FRAMEBUFFER, t), ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, i, a, p.__webglTexture, 0, Oe(n)) : (a === e.TEXTURE_2D || a >= e.TEXTURE_CUBE_MAP_POSITIVE_X && a <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, i, a, p.__webglTexture, o), d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function be(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = j(n.stencilBuffer, a), s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			ke(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Oe(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Oe(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let a = t[i], o = m.convert(a.format, a.colorSpace), s = m.convert(a.type), c = A(a.internalFormat, o, s, a.normalized, a.colorSpace);
				ke(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Oe(n), c, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Oe(n), c, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, c, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function xe(t, n, r) {
		let i = n.isWebGLCubeRenderTarget === !0;
		if (d.bindFramebuffer(e.FRAMEBUFFER, t), !(n.depthTexture && n.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let a = f.get(n.depthTexture);
		if (a.__renderTarget = n, a.__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), i) {
			if (a.__webglInit === void 0 && (a.__webglInit = !0, n.depthTexture.addEventListener("dispose", te)), a.__webglTexture === void 0) {
				a.__webglTexture = e.createTexture(), d.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture), pe(e.TEXTURE_CUBE_MAP, n.depthTexture);
				let t = m.convert(n.depthTexture.format), r = m.convert(n.depthTexture.type), i;
				n.depthTexture.format === 1026 ? i = e.DEPTH_COMPONENT24 : n.depthTexture.format === 1027 && (i = e.DEPTH24_STENCIL8);
				for (let a = 0; a < 6; a++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, i, n.width, n.height, 0, t, r, null);
			}
		} else I(n.depthTexture, 0);
		let o = a.__webglTexture, s = Oe(n), c = i ? e.TEXTURE_CUBE_MAP_POSITIVE_X + r : e.TEXTURE_2D, l = n.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (n.depthTexture.format === 1026) ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, c, o, 0, s) : e.framebufferTexture2D(e.FRAMEBUFFER, l, c, o, 0);
		else if (n.depthTexture.format === 1027) ke(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, c, o, 0, s) : e.framebufferTexture2D(e.FRAMEBUFFER, l, c, o, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function Se(t) {
		let n = f.get(t), r = t.isWebGLCubeRenderTarget === !0;
		if (n.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (n.__depthDisposeCallback && n.__depthDisposeCallback(), e) {
				let t = () => {
					delete n.__boundDepthTexture, delete n.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), n.__depthDisposeCallback = t;
			}
			n.__boundDepthTexture = e;
		}
		if (t.depthTexture && !n.__autoAllocateDepthBuffer) {
			if (r) for (let e = 0; e < 6; e++) xe(n.__webglFramebuffer[e], t, e);
			else {
				let e = t.texture.mipmaps;
				e && e.length > 0 ? xe(n.__webglFramebuffer[0], t, 0) : xe(n.__webglFramebuffer, t, 0);
			}
		} else if (r) {
			n.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[r]), n.__webglDepthbuffer[r] === void 0) n.__webglDepthbuffer[r] = e.createRenderbuffer(), be(n.__webglDepthbuffer[r], t, !1);
			else {
				let i = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = n.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[0]) : d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer === void 0) n.__webglDepthbuffer = e.createRenderbuffer(), be(n.__webglDepthbuffer, t, !1);
			else {
				let r = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, i = n.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, i), e.framebufferRenderbuffer(e.FRAMEBUFFER, r, e.RENDERBUFFER, i);
			}
		}
		d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function Ce(t, n, r) {
		let i = f.get(t);
		n !== void 0 && ye(i.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), r !== void 0 && Se(t);
	}
	function we(t) {
		let n = t.texture, r = f.get(t), i = f.get(n);
		t.addEventListener("dispose", M);
		let a = t.textures, o = t.isWebGLCubeRenderTarget === !0, s = a.length > 1;
		if (s || (i.__webglTexture === void 0 && (i.__webglTexture = e.createTexture()), i.__version = n.version, h.memory.textures++), o) {
			r.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (n.mipmaps && n.mipmaps.length > 0) {
				r.__webglFramebuffer[t] = [];
				for (let i = 0; i < n.mipmaps.length; i++) r.__webglFramebuffer[t][i] = e.createFramebuffer();
			} else r.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (n.mipmaps && n.mipmaps.length > 0) {
				r.__webglFramebuffer = [];
				for (let t = 0; t < n.mipmaps.length; t++) r.__webglFramebuffer[t] = e.createFramebuffer();
			} else r.__webglFramebuffer = e.createFramebuffer();
			if (s) for (let t = 0, n = a.length; t < n; t++) {
				let n = f.get(a[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), h.memory.textures++);
			}
			if (t.samples > 0 && ke(t) === !1) {
				r.__webglMultisampledFramebuffer = e.createFramebuffer(), r.__webglColorRenderbuffer = [], d.bindFramebuffer(e.FRAMEBUFFER, r.__webglMultisampledFramebuffer);
				for (let n = 0; n < a.length; n++) {
					let i = a[n];
					r.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
					let o = m.convert(i.format, i.colorSpace), s = m.convert(i.type), c = A(i.internalFormat, o, s, i.normalized, i.colorSpace, t.isXRRenderTarget === !0), l = Oe(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, l, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (r.__webglDepthRenderbuffer = e.createRenderbuffer(), be(r.__webglDepthRenderbuffer, t, !0)), d.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (o) {
			d.bindTexture(e.TEXTURE_CUBE_MAP, i.__webglTexture), pe(e.TEXTURE_CUBE_MAP, n);
			for (let i = 0; i < 6; i++) if (n.mipmaps && n.mipmaps.length > 0) for (let a = 0; a < n.mipmaps.length; a++) ye(r.__webglFramebuffer[i][a], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, a);
			else ye(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0);
			E(n) && D(e.TEXTURE_CUBE_MAP), d.unbindTexture();
		} else if (s) {
			for (let n = 0, i = a.length; n < i; n++) {
				let i = a[n], o = f.get(i), s = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (s = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(s, o.__webglTexture), pe(s, i), ye(r.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0 + n, s, 0), E(i) && D(s);
			}
			d.unbindTexture();
		} else {
			let a = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (a = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(a, i.__webglTexture), pe(a, n), n.mipmaps && n.mipmaps.length > 0) for (let i = 0; i < n.mipmaps.length; i++) ye(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, a, i);
			else ye(r.__webglFramebuffer, t, n, e.COLOR_ATTACHMENT0, a, 0);
			E(n) && D(a), d.unbindTexture();
		}
		t.depthBuffer && Se(t);
	}
	function Te(e) {
		let t = e.textures;
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			if (E(r)) {
				let t = k(e), n = f.get(r).__webglTexture;
				d.bindTexture(t, n), D(t), d.unbindTexture();
			}
		}
	}
	let R = [], Ee = [];
	function De(t) {
		if (t.samples > 0) {
			if (ke(t) === !1) {
				let n = t.textures, r = t.width, i = t.height, a = e.COLOR_BUFFER_BIT, o = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, s = f.get(t), c = n.length > 1;
				if (c) for (let t = 0; t < n.length; t++) d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				d.bindFramebuffer(e.READ_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				let l = t.texture.mipmaps;
				l && l.length > 0 ? d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer[0]) : d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer);
				for (let l = 0; l < n.length; l++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (a |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (a |= e.STENCIL_BUFFER_BIT)), c) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, s.__webglColorRenderbuffer[l]);
						let t = f.get(n[l]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, r, i, 0, 0, r, i, a, e.NEAREST), _ === !0 && (R.length = 0, Ee.length = 0, R.push(e.COLOR_ATTACHMENT0 + l), t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && (R.push(o), Ee.push(o), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Ee)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, R));
				}
				if (d.bindFramebuffer(e.READ_FRAMEBUFFER, null), d.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), c) for (let t = 0; t < n.length; t++) {
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, s.__webglColorRenderbuffer[t]);
					let r = f.get(n[t]).__webglTexture;
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, r, 0);
				}
				d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && _) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function Oe(e) {
		return Math.min(p.maxSamples, e.samples);
	}
	function ke(e) {
		let n = f.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function z(e) {
		let t = h.render.frame;
		y.get(e) !== t && (y.set(e, t), e.update());
	}
	function Ae(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (Y.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && U("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : W("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function je(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (v.width = e.naturalWidth || e.width, v.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (v.width = e.displayWidth, v.height = e.displayHeight) : (v.width = e.width, v.height = e.height), v;
	}
	this.allocateTextureUnit = oe, this.resetTextureUnits = ie, this.getTextureUnits = F, this.setTextureUnits = ae, this.setTexture2D = I, this.setTexture2DArray = L, this.setTexture3D = ce, this.setTextureCube = le, this.rebindTextures = Ce, this.setupRenderTarget = we, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = De, this.setupDepthRenderbuffer = Se, this.setupFrameBufferTexture = ye, this.useMultisampledRTT = ke, this.isReversedDepthBuffer = function() {
		return d.buffers.depth.getReversed();
	};
}
function Xc(e, t) {
	function n(n, r = "") {
		let i, a = Y.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var Zc = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", Qc = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", $c = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new xi(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Ri({
				vertexShader: Zc,
				fragmentShader: Qc,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Jr(new ki(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, el = class extends $e {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, f = null, p = null, m = null, h = typeof XRWebGLBinding < "u", _ = new $c(), v = {}, y = t.getContextAttributes(), b = null, S = null, C = [], w = [], T = new K(), k = null, A = null, j = new ba();
		j.viewport = new X();
		let ee = new ba();
		ee.viewport = new X();
		let te = [j, ee], M = new Oa(), ne = null, N = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = C[e];
			return t === void 0 && (t = new wn(), C[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = C[e];
			return t === void 0 && (t = new wn(), C[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = C[e];
			return t === void 0 && (t = new wn(), C[e] = t), t.getHandSpace();
		};
		function re(e) {
			let t = w.indexOf(e.inputSource);
			if (t === -1) return;
			let n = C[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function P() {
			r.removeEventListener("select", re), r.removeEventListener("selectstart", re), r.removeEventListener("selectend", re), r.removeEventListener("squeeze", re), r.removeEventListener("squeezestart", re), r.removeEventListener("squeezeend", re), r.removeEventListener("end", P), r.removeEventListener("inputsourceschange", ie);
			for (let e = 0; e < C.length; e++) {
				let t = w[e];
				t !== null && (w[e] = null, C[e].disconnect(t));
			}
			ne = null, N = null, _.reset();
			for (let e in v) delete v[e];
			if (e.setRenderTarget(b), p = null, f = null, u = null, r = null, S = null, le.stop(), n.isPresenting = !1, e.setPixelRatio(k), e.setSize(T.width, T.height, !1), A !== null) {
				let e = A.camera;
				e.fov = A.fov, e.zoom = A.zoom, e.updateProjectionMatrix(), A = null;
			}
			n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && U("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && U("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return f === null ? p : f;
		}, this.getBinding = function() {
			return u === null && h && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return m;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (b = e.getRenderTarget(), r.addEventListener("select", re), r.addEventListener("selectstart", re), r.addEventListener("selectend", re), r.addEventListener("squeeze", re), r.addEventListener("squeezestart", re), r.addEventListener("squeezeend", re), r.addEventListener("end", P), r.addEventListener("inputsourceschange", ie), y.xrCompatible !== !0 && await t.makeXRCompatible(), k = e.getPixelRatio(), e.getSize(T), h && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					y.depth && (o = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = y.stencil ? O : D, a = y.stencil ? x : g);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), f = u.createProjectionLayer(s), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), S = new Wt(f.textureWidth, f.textureHeight, {
						format: E,
						type: d,
						depthTexture: new yi(f.textureWidth, f.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: y.stencil,
						colorSpace: e.outputColorSpace,
						samples: y.antialias ? 4 : 0,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: f.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: y.antialias,
						alpha: !0,
						depth: y.depth,
						stencil: y.stencil,
						framebufferScaleFactor: i
					};
					p = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), S = new Wt(p.framebufferWidth, p.framebufferHeight, {
						format: E,
						type: d,
						colorSpace: e.outputColorSpace,
						stencilBuffer: y.stencil,
						resolveDepthBuffer: p.ignoreDepthValues === !1,
						resolveStencilBuffer: p.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: p.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: p.ignoreDepthValues === !1
					});
				}
				S.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), le.setContext(r), le.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return _.getDepthTexture();
		};
		function ie(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = w.indexOf(n);
				r >= 0 && (w[r] = null, C[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = w.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < C.length; e++) if (e >= w.length) {
						w.push(n), r = e;
						break;
					} else if (w[e] === null) {
						w[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = C[r];
				i && i.connect(n);
			}
		}
		let F = new q(), ae = new q();
		function oe(e, t, n) {
			F.setFromMatrixPosition(t.matrixWorld), ae.setFromMatrixPosition(n.matrixWorld);
			let r = F.distanceTo(ae), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
				e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function se(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			_.texture !== null && (_.depthNear > 0 && (t = _.depthNear), _.depthFar > 0 && (n = _.depthFar)), M.near = ee.near = j.near = t, M.far = ee.far = j.far = n, (ne !== M.near || N !== M.far) && (r.updateRenderState({
				depthNear: M.near,
				depthFar: M.far
			}), ne = M.near, N = M.far), M.layers.mask = e.layers.mask | 6, j.layers.mask = M.layers.mask & -5, ee.layers.mask = M.layers.mask & -3;
			let i = e.parent, a = M.cameras;
			se(M, i);
			for (let e = 0; e < a.length; e++) se(a[e], i);
			a.length === 2 ? oe(M, j, ee) : M.projectionMatrix.copy(j.projectionMatrix), A === null && e.isPerspectiveCamera && (A = {
				camera: e,
				fov: e.fov,
				zoom: e.zoom
			}), I(e, M, i);
		};
		function I(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = rt * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return M;
		}, this.getFoveation = function() {
			if (f !== null || p !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, f !== null && (f.fixedFoveation = e), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return _.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return _.getMesh(M);
		}, this.getCameraTexture = function(e) {
			return v[e];
		};
		let L = null;
		function ce(t, i) {
			if (l = i.getViewerPose(c || a), m = i, l !== null) {
				let t = l.views;
				p !== null && (e.setRenderTargetFramebuffer(S, p.framebuffer), e.setRenderTarget(S));
				let i = !1;
				t.length !== M.cameras.length && (M.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (p !== null) a = p.getViewport(r);
					else {
						let t = u.getViewSubImage(f, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(S, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(S));
					}
					let o = te[n];
					o === void 0 && (o = new ba(), o.layers.enable(n), o.viewport = new X(), te[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (M.matrix.copy(o.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), i === !0 && M.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && _.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && h) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = v[n];
							e || (e = new xi(), v[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < C.length; e++) {
				let t = w[e], n = C[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			L && L(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), m = null;
		}
		let le = new Ga();
		le.setAnimationLoop(ce), this.setAnimationLoop = function(e) {
			L = e;
		}, this.dispose = function() {};
	}
}, tl = /*@__PURE__*/ new qt(), nl = /*@__PURE__*/ new J();
nl.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function rl(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Pi(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(tl.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(nl), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function il(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (g(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", v));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return W("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) p(t[n], e, n, a);
			else p(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(t, n, r, i) {
		if (h(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = _(i);
					m(i, t.__data, e), typeof i != "number" && typeof i != "boolean" && !i.isMatrix3 && !ArrayBuffer.isView(i) && (e += a.storage / Float32Array.BYTES_PER_ELEMENT);
				}
			} else m(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function m(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[0] = e : e.isMatrix3 ? (t[0] = e.elements[0], t[1] = e.elements[1], t[2] = e.elements[2], t[3] = 0, t[4] = e.elements[3], t[5] = e.elements[4], t[6] = e.elements[5], t[7] = 0, t[8] = e.elements[6], t[9] = e.elements[7], t[10] = e.elements[8], t[11] = 0) : ArrayBuffer.isView(e) ? t.set(new e.constructor(e.buffer, e.byteOffset, t.length)) : e.toArray(t, n);
	}
	function h(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return r[a] = typeof i == "number" || typeof i == "boolean" ? i : ArrayBuffer.isView(i) ? i.slice() : i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function g(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = _(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function _(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? U("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : U("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function v(t) {
		let n = t.target;
		n.removeEventListener("dispose", v);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function y() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: y
	};
}
var al = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), ol = null;
function sl() {
	return ol === null && (ol = new Zr(al, 16, 16, j, v), ol.name = "DFG_LUT", ol.minFilter = c, ol.magFilter = c, ol.wrapS = r, ol.wrapT = r, ol.generateMipmaps = !1, ol.needsUpdate = !0), ol;
}
var cl = class {
	constructor(e = {}) {
		let { canvas: t = Ke(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: f = !1, reversedDepthBuffer: p = !1, outputBufferType: h = d } = e;
		this.isWebGLRenderer = !0;
		let _;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			_ = n.getContextAttributes().alpha;
		} else _ = a;
		let S = h, C = /* @__PURE__ */ new Set([
			te,
			ee,
			A
		]), w = /* @__PURE__ */ new Set([
			d,
			g,
			m,
			x,
			y,
			b
		]), T = /* @__PURE__ */ new Uint32Array(4), E = /* @__PURE__ */ new Int32Array(4), D = new q(), O = null, k = null, j = [], M = [], ne = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			diagnostics: { keywords: !1 },
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let N = this, re = !1, P = null, ie = null, F = null, ae = null;
		this._outputColorSpace = Fe;
		let oe = 0, se = 0, I = null, L = -1, ce = null, le = new X(), ue = new X(), de = null, fe = new Z(0), pe = 0, me = t.width, he = t.height, ge = 1, _e = null, ve = null, ye = new X(0, 0, me, he), be = new X(0, 0, me, he), xe = !1, Se = new ui(), Ce = !1, we = !1, Te = new qt(), R = new q(), Ee = new X(), De = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, Oe = !1;
		function ke() {
			return I === null ? ge : 1;
		}
		let z = n;
		function Ae(e, n) {
			return t.getContext(e, n);
		}
		let je, Me, B, Ne, V, H, Pe, Ie, Le, Re, ze, Be, Ve, Ue, We, Ge, qe, Ye, Xe, Qe, $e, et, tt;
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: f
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", it, !1), t.addEventListener("webglcontextrestored", G, !1), t.addEventListener("webglcontextcreationerror", at, !1), z === null) {
				let t = "webgl2";
				if (z = Ae(t, e), z === null) throw Ae(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
			nt();
		} catch (e) {
			throw t.removeEventListener("webglcontextlost", it, !1), t.removeEventListener("webglcontextrestored", G, !1), t.removeEventListener("webglcontextcreationerror", at, !1), W("WebGLRenderer: " + e.message), e;
		}
		function nt() {
			je = new Eo(z), je.init(), $e = new Xc(z, je), Me = new eo(z, je, e, $e), B = new Jc(z, je), Me.reversedDepthBuffer && p && B.buffers.depth.setReversed(!0), ie = z.createFramebuffer(), F = z.createFramebuffer(), ae = z.createFramebuffer(), Ne = new ko(z), V = new Oc(), H = new Yc(z, je, B, V, Me, $e, Ne), Pe = new To(N), Ie = new Ka(z), et = new Qa(z, Ie), Le = new Do(z, Ie, Ne, et), Re = new jo(z, Le, Ie, et, Ne), Ye = new Ao(z, Me, H), We = new to(V), ze = new Dc(N, Pe, je, Me, et, We), Be = new rl(N, V), Ve = new Mc(), Ue = new zc(je), qe = new Za(N, Pe, B, Re, _, s), Ge = new qc(N, Re, Me), tt = new il(z, Ne, Me, B), Xe = new $a(z, je, Ne), Qe = new Oo(z, je, Ne), Ne.programs = ze.programs, N.capabilities = Me, N.extensions = je, N.properties = V, N.renderLists = Ve, N.shadowMap = Ge, N.state = B, N.info = Ne;
		}
		S !== 1009 && (ne = new No(S, t.width, t.height, o, r, i));
		let rt = new el(N, z);
		this.xr = rt, this.getContext = function() {
			return z;
		}, this.getContextAttributes = function() {
			return z.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = je.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = je.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return ge;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (ge = e, this.setSize(me, he, !1));
		}, this.getSize = function(e) {
			return e.set(me, he);
		}, this.setSize = function(e, n, r = !0) {
			rt.isPresenting ? U("WebGLRenderer: Can't change size while VR device is presenting.") : (me = e, he = n, t.width = Math.floor(e * ge), t.height = Math.floor(n * ge), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), ne !== null && ne.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(me * ge, he * ge).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			me = e, he = n, ge = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (S === 1009) W("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
			else {
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						U("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				ne.setEffects(e || []);
			}
		}, this.getCurrentViewport = function(e) {
			return e.copy(le);
		}, this.getViewport = function(e) {
			return e.copy(ye);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ye.set(e.x, e.y, e.z, e.w) : ye.set(e, t, n, r), B.viewport(le.copy(ye).multiplyScalar(ge).round());
		}, this.getScissor = function(e) {
			return e.copy(be);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? be.set(e.x, e.y, e.z, e.w) : be.set(e, t, n, r), B.scissor(ue.copy(be).multiplyScalar(ge).round());
		}, this.getScissorTest = function() {
			return xe;
		}, this.setScissorTest = function(e) {
			B.setScissorTest(xe = e);
		}, this.setOpaqueSort = function(e) {
			_e = e;
		}, this.setTransparentSort = function(e) {
			ve = e;
		}, this.getClearColor = function(e) {
			return e.copy(qe.getClearColor());
		}, this.setClearColor = function() {
			qe.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return qe.getClearAlpha();
		}, this.setClearAlpha = function() {
			qe.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (I !== null) {
					let t = I.texture.format;
					e = C.has(t);
				}
				if (e) {
					let e = I.texture.type, t = w.has(e), n = qe.getClearColor(), r = qe.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (T[0] = i, T[1] = a, T[2] = o, T[3] = r, z.clearBufferuiv(z.COLOR, 0, T)) : (E[0] = i, E[1] = a, E[2] = o, E[3] = r, z.clearBufferiv(z.COLOR, 0, E));
				} else r |= z.COLOR_BUFFER_BIT;
			}
			t && (r |= z.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= z.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && z.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), P = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", it, !1), t.removeEventListener("webglcontextrestored", G, !1), t.removeEventListener("webglcontextcreationerror", at, !1), qe.dispose(), Ve.dispose(), Ue.dispose(), V.dispose(), Pe.dispose(), Re.dispose(), et.dispose(), tt.dispose(), ze.dispose(), rt.dispose(), rt.removeEventListener("sessionstart", ft), rt.removeEventListener("sessionend", pt), mt.stop();
		};
		function it(e) {
			e.preventDefault(), Je("WebGLRenderer: Context Lost."), re = !0;
		}
		function G() {
			Je("WebGLRenderer: Context Restored."), re = !1;
			let e = Ne.autoReset, t = Ge.enabled, n = Ge.autoUpdate, r = Ge.needsUpdate, i = Ge.type;
			nt(), Ne.autoReset = e, Ge.enabled = t, Ge.autoUpdate = n, Ge.needsUpdate = r, Ge.type = i;
		}
		function at(e) {
			W("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function ot(e) {
			let t = e.target;
			t.removeEventListener("dispose", ot), st(t);
		}
		function st(e) {
			ct(e), V.remove(e);
		}
		function ct(e) {
			let t = V.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				ze.releaseProgram(e);
			}), e.isShaderMaterial && ze.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = De);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = wt(e, t, n, r, i);
			B.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = Le.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			et.setup(i, r, s, n, c);
			let h, g = Xe;
			if (c !== null && (h = Ie.get(c), g = Qe, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (B.setLineWidth(r.wireframeLinewidth * ke()), g.setMode(z.LINES)) : g.setMode(z.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), B.setLineWidth(e * ke()), i.isLineSegments ? g.setMode(z.LINES) : i.isLineLoop ? g.setMode(z.LINE_LOOP) : g.setMode(z.LINE_STRIP);
			} else i.isPoints ? g.setMode(z.POINTS) : i.isSprite && g.setMode(z.TRIANGLES);
			if (i.isBatchedMesh) {
				if (je.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Ie.get(c).bytesPerElement : 1, o = V.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(z, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function lt(e, t, n, r) {
			P !== null && e.isNodeMaterial && P.setObject(r, e), Ce === !0 && We.setState(e, n, !1), e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, bt(e, t, r), e.side = 0, e.needsUpdate = !0, bt(e, t, r), e.side = 2) : bt(e, t, r);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), P !== null && P.renderStart(e, t, n), k = Ue.get(n), k.init(t), M.push(k), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), k.setupLights(), P !== null && P.updateLights(k.state.lightsArray), we = this.localClippingEnabled, Ce = We.init(this.clippingPlanes, we), Ce === !0 && We.setGlobalState(this.clippingPlanes, t), P !== null && Ge.render(k.state.shadowsArray, n, t);
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let i = e.material;
				if (i) {
					if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
						let o = i[a];
						lt(o, n, t, e), r.add(o);
					}
					else lt(i, n, t, e), r.add(i);
				}
			}), k = M.pop(), P !== null && P.renderEnd(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						let t = V.get(e).currentProgram;
						(t === void 0 || t.isReady()) && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				je.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let ut = null;
		function dt(e) {
			ut && ut(e);
		}
		function ft() {
			mt.stop();
		}
		function pt() {
			mt.start();
		}
		let mt = new Ga();
		mt.setAnimationLoop(dt), typeof self < "u" && mt.setContext(self), this.setAnimationLoop = function(e) {
			ut = e, rt.setAnimationLoop(e), e === null ? mt.stop() : mt.start();
		}, rt.addEventListener("sessionstart", ft), rt.addEventListener("sessionend", pt), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				W("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (re === !0) return;
			P !== null && P.renderStart(e, t);
			let n = rt.enabled === !0 && rt.isPresenting === !0, r = ne !== null && (I === null || n) && ne.begin(N, I);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), rt.enabled === !0 && rt.isPresenting === !0 && (ne === null || ne.isCompositing() === !1) && (rt.cameraAutoUpdate === !0 && rt.updateCamera(t), t = rt.getCamera()), e.isScene === !0 && e.onBeforeRender(N, e, t, I), k = Ue.get(e, M.length), k.init(t), k.state.textureUnits = H.getTextureUnits(), M.push(k), Te.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Se.setFromProjectionMatrix(Te, He, t.reversedDepth), we = this.localClippingEnabled, Ce = We.init(this.clippingPlanes, we), O = Ve.get(e, j.length), O.init(), j.push(O), rt.enabled === !0 && rt.isPresenting === !0) {
				let e = N.xr.getDepthSensingMesh();
				e !== null && ht(e, t, -Infinity, N.sortObjects);
			}
			ht(e, t, 0, N.sortObjects), O.finish(), P !== null && P.updateLights(k.state.lightsArray), N.sortObjects === !0 && O.sort(_e, ve), Oe = rt.enabled === !1 || rt.isPresenting === !1 || rt.hasDepthSensing() === !1, Oe && qe.addToRenderList(O, e), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), Ce === !0 && We.beginShadows();
			let i = k.state.shadowsArray;
			if (Ge.render(i, e, t), Ce === !0 && We.endShadows(), (r && ne.hasRenderPass()) === !1) {
				let n = O.opaque, r = O.transmissive;
				if (k.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						_t(n, r, e, a);
					}
					Oe && qe.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						gt(O, e, n, n.viewport);
					}
				} else r.length > 0 && _t(n, r, e, t), Oe && qe.render(e), gt(O, e, t);
			}
			I !== null && se === 0 && (H.updateMultisampleRenderTarget(I), H.updateRenderTargetMipmap(I)), r && ne.end(N), e.isScene === !0 && e.onAfterRender(N, e, t), et.resetDefaultState(), L = -1, ce = null, M.pop(), M.length > 0 ? (k = M[M.length - 1], H.setTextureUnits(k.state.textureUnits), Ce === !0 && We.setGlobalState(N.clippingPlanes, k.state.camera)) : k = null, j.pop(), O = j.length > 0 ? j[j.length - 1] : null, P !== null && P.renderEnd();
		};
		function ht(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLightProbeGrid) k.pushLightProbeGrid(e);
				else if (e.isLight) k.pushLight(e), e.castShadow && k.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || e.intersectsFrustum(Se)) {
						r && Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);
						let i = Re.update(e), a = e.material;
						a.visible && O.push(e, i, a, n, Ee.z, null, t);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || e.intersectsFrustum(Se))) {
					let i = Re.update(e), a = e.material;
					if (r && (e.boundingSphere === void 0 ? (i.boundingSphere === null && i.computeBoundingSphere(), Ee.copy(i.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), Ee.copy(e.boundingSphere.center)), Ee.applyMatrix4(e.matrixWorld).applyMatrix4(Te)), Array.isArray(a)) {
						let r = i.groups;
						for (let o = 0, s = r.length; o < s; o++) {
							let s = r[o], c = a[s.materialIndex];
							c && c.visible && O.push(e, i, c, n, Ee.z, s, t);
						}
					} else a.visible && O.push(e, i, a, n, Ee.z, null, t);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) ht(i[e], t, n, r);
		}
		function gt(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			k.setupLightsView(n), Ce === !0 && We.setGlobalState(N.clippingPlanes, n), r && B.viewport(le.copy(r)), i.length > 0 && vt(i, t, n), a.length > 0 && vt(a, t, n), o.length > 0 && vt(o, t, n), B.buffers.depth.setTest(!0), B.buffers.depth.setMask(!0), B.buffers.color.setMask(!0), B.setPolygonOffset(!1);
		}
		function _t(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (k.state.transmissionRenderTarget[r.id] === void 0) {
				let e = je.has("EXT_color_buffer_half_float") || je.has("EXT_color_buffer_float");
				k.state.transmissionRenderTarget[r.id] = new Wt(1, 1, {
					generateMipmaps: !0,
					type: e ? v : d,
					minFilter: u,
					samples: Math.max(4, Me.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					storeMultisampledDepthBuffer: !1,
					storeMultisampledStencilBuffer: !1,
					colorSpace: Y.workingColorSpace
				});
			}
			let a = k.state.transmissionRenderTarget[r.id], o = r.viewport || le;
			a.setSize(o.z * N.transmissionResolutionScale, o.w * N.transmissionResolutionScale);
			let s = N.getRenderTarget(), c = N.getActiveCubeFace(), l = N.getActiveMipmapLevel();
			N.setRenderTarget(a), N.getClearColor(fe), pe = N.getClearAlpha(), pe < 1 && N.setClearColor(16777215, .5), N.clear(), Oe && qe.render(n);
			let f = N.toneMapping;
			N.toneMapping = 0;
			let p = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), k.setupLightsView(r), Ce === !0 && We.setGlobalState(N.clippingPlanes, r), vt(e, n, r), H.updateMultisampleRenderTarget(a), H.updateRenderTargetMipmap(a), je.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, yt(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (H.updateMultisampleRenderTarget(a), H.updateRenderTargetMipmap(a));
			}
			N.setRenderTarget(s, c, l), N.setClearColor(fe, pe), p !== void 0 && (r.viewport = p), N.toneMapping = f;
		}
		function vt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && yt(o, t, n, s, l, c);
			}
		}
		function yt(e, t, n, r, i, a) {
			P !== null && i.isNodeMaterial && P.setObject(e, i), e.onBeforeRender(N, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(N, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, N.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, N.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : N.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(N, t, n, r, i, a);
		}
		function bt(e, t, n) {
			t.isScene !== !0 && (t = De);
			let r = V.get(e), i = k.state.lights, a = k.state.shadowsArray, o = i.state.version, s = ze.getParameters(e, i.state, a, t, n, k.state.lightProbeGridArray), c = ze.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Pe.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", ot), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return St(e, s), d;
			} else s.uniforms = ze.getUniforms(e), P !== null && e.isNodeMaterial && P.build(e, n, s), e.onBeforeCompile(s, N), d = ze.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = We.uniform), St(e, s), r.needsLights = K(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.sunLights.value = i.state.sun, f.sunLightShadows.value = i.state.sunShadow, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.sunShadowMatrix.value = i.state.sunShadowMatrix, f.sunShadowCascade.value = i.state.sunShadowCascade, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = k.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
		}
		function xt(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Bs.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function St(e, t) {
			let n = V.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function Ct(e, t) {
			if (e.length === 0) return null;
			if (e.length === 1) return e[0].texture === null ? null : e[0];
			D.setFromMatrixPosition(t.matrixWorld);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				if (n.texture !== null && n.boundingBox.containsPoint(D)) return n;
			}
			return null;
		}
		function wt(e, t, n, r, i) {
			t.isScene !== !0 && (t = De), H.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = I === null ? N.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : Y.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Pe.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (I === null || I.isXRRenderTarget === !0) && (h = N.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = V.get(r), y = k.state.lights;
			if (Ce === !0 && (we === !0 || e !== ce)) {
				let t = e === ce && r.id === L;
				We.setState(r, e, t);
			}
			let b = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? b = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== We.numPlanes || v.numIntersection !== We.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _ ? !!v.lightProbeGrid != k.state.lightProbeGridArray.length > 0 && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = r.version);
			let x = v.currentProgram;
			b === !0 && (x = bt(r, t, i), P && r.isNodeMaterial && P.onUpdateProgram(r, x, v));
			let S = !1, C = !1, w = !1, T = x.getUniforms(), E = v.uniforms;
			if (B.useProgram(x.program) && (S = !0, C = !0, w = !0), r.id !== L && (L = r.id, C = !0), v.needsLights) {
				let e = Ct(k.state.lightProbeGridArray, i);
				v.lightProbeGrid !== e && (v.lightProbeGrid = e, C = !0);
			}
			if (S || ce !== e) {
				B.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), T.setValue(z, "projectionMatrix", e.projectionMatrix), T.setValue(z, "viewMatrix", e.matrixWorldInverse);
				let t = T.map.cameraPosition;
				t !== void 0 && t.setValue(z, R.setFromMatrixPosition(e.matrixWorld)), Me.logarithmicDepthBuffer && T.setValue(z, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && T.setValue(z, "isOrthographic", e.isOrthographicCamera === !0), ce !== e && (ce = e, C = !0, w = !0);
			}
			if (v.needsLights && (y.state.sunShadowMap.length > 0 && T.setValue(z, "sunShadowMap", y.state.sunShadowMap, H), y.state.directionalShadowMap.length > 0 && T.setValue(z, "directionalShadowMap", y.state.directionalShadowMap, H), y.state.spotShadowMap.length > 0 && T.setValue(z, "spotShadowMap", y.state.spotShadowMap, H), y.state.pointShadowMap.length > 0 && T.setValue(z, "pointShadowMap", y.state.pointShadowMap, H)), i.isSkinnedMesh) {
				T.setOptional(z, i, "bindMatrix"), T.setOptional(z, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), T.setValue(z, "boneTexture", e.boneTexture, H));
			}
			i.isBatchedMesh && (T.setOptional(z, i, "batchingTexture"), T.setValue(z, "batchingTexture", i._matricesTexture, H), T.setOptional(z, i, "batchingIdTexture"), T.setValue(z, "batchingIdTexture", i._indirectTexture, H), T.setOptional(z, i, "batchingColorTexture"), i._colorsTexture !== null && T.setValue(z, "batchingColorTexture", i._colorsTexture, H));
			let D = n.morphAttributes;
			if ((D.position !== void 0 || D.normal !== void 0 || D.color !== void 0) && Ye.update(i, n, x), (C || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, T.setValue(z, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (E.envMapIntensity.value = t.environmentIntensity), E.dfgLUT !== void 0 && (E.dfgLUT.value = sl()), C) {
				if (T.setValue(z, "toneMappingExposure", N.toneMappingExposure), v.needsLights && Tt(E, w), a && r.fog === !0 && Be.refreshFogUniforms(E, a), Be.refreshMaterialUniforms(E, r, ge, he, k.state.transmissionRenderTarget[e.id]), v.needsLights && v.lightProbeGrid) {
					let e = v.lightProbeGrid;
					E.probesSH.value = e.texture, E.probesMin.value.copy(e.boundingBox.min), E.probesMax.value.copy(e.boundingBox.max), E.probesResolution.value.copy(e.resolution);
				}
				Bs.upload(z, xt(v), E, H);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (Bs.upload(z, xt(v), E, H), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && T.setValue(z, "center", i.center), T.setValue(z, "modelViewMatrix", i.modelViewMatrix), T.setValue(z, "normalMatrix", i.normalMatrix), T.setValue(z, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					tt.update(n, x), tt.bind(n, x);
				}
			}
			return x;
		}
		function Tt(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.sunLights.needsUpdate = t, e.sunLightShadows.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function K(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return oe;
		}, this.getActiveMipmapLevel = function() {
			return se;
		}, this.getRenderTarget = function() {
			return I;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = V.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), V.get(e.texture).__webglTexture = t, V.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = V.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			I = e, oe = t, se = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = V.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					B.bindFramebuffer(z.FRAMEBUFFER, o.__webglFramebuffer), le.copy(e.viewport), ue.copy(e.scissor), de = e.scissorTest, B.viewport(le), B.scissor(ue), B.setScissorTest(de), L = -1;
					return;
				}
				if (o.__webglFramebuffer === void 0) H.setupRenderTarget(e);
				else if (o.__hasExternalTextures) H.rebindTextures(e, V.get(e.texture).__webglTexture, V.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && V.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						H.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = V.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && H.useMultisampledRTT(e) === !1 ? V.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, le.copy(e.viewport), ue.copy(e.scissor), de = e.scissorTest;
			} else le.copy(ye).multiplyScalar(ge).floor(), ue.copy(be).multiplyScalar(ge).floor(), de = xe;
			if (n !== 0 && (r = ie), B.bindFramebuffer(z.FRAMEBUFFER, r) && B.drawBuffers(e, r), B.viewport(le), B.scissor(ue), B.setScissorTest(de), i) {
				let r = V.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = V.get(e.textures[t]);
					z.framebufferTextureLayer(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = V.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, t.__webglTexture, n);
			}
			L = -1;
		};
		function Et(e) {
			let t = V.get(e);
			return (t.__readFormat !== e.format || t.__readType !== e.type) && (t.__readFormat = e.format, t.__readType = e.type, t.__formatReadable = Me.textureFormatReadable(e.format), t.__typeReadable = Me.textureTypeReadable(e.type)), t;
		}
		this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				W("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = V.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				B.bindFramebuffer(z.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s);
					let u = Et(o);
					if (u.__formatReadable === !1) {
						W("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (u.__typeReadable === !1) {
						W("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && z.readPixels(t, n, r, i, $e.convert(c), $e.convert(l), a);
				} finally {
					let e = I === null ? null : V.get(I).__webglFramebuffer;
					B.bindFramebuffer(z.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = V.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					B.bindFramebuffer(z.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s);
					let d = Et(o);
					if (d.__formatReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (d.__typeReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let f = z.createBuffer();
					z.bindBuffer(z.PIXEL_PACK_BUFFER, f), z.bufferData(z.PIXEL_PACK_BUFFER, a.byteLength, z.STREAM_READ), z.readPixels(t, n, r, i, $e.convert(l), $e.convert(u), 0), z.bindBuffer(z.PIXEL_PACK_BUFFER, null);
					let p = I === null ? null : V.get(I).__webglFramebuffer;
					B.bindFramebuffer(z.FRAMEBUFFER, p);
					let m = z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return z.flush(), await Ze(z, m, 4), z.bindBuffer(z.PIXEL_PACK_BUFFER, f), z.getBufferSubData(z.PIXEL_PACK_BUFFER, 0, a), z.bindBuffer(z.PIXEL_PACK_BUFFER, null), z.deleteBuffer(f), z.deleteSync(m), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			H.setTexture2D(e, 0), z.copyTexSubImage2D(z.TEXTURE_2D, n, 0, 0, o, s, i, a), B.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = $e.convert(t.format), _ = $e.convert(t.type), v;
			t.isData3DTexture ? (H.setTexture3D(t, 0), v = z.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (H.setTexture2DArray(t, 0), v = z.TEXTURE_2D_ARRAY) : (H.setTexture2D(t, 0), v = z.TEXTURE_2D), B.activeTexture(z.TEXTURE0), B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL, t.flipY), B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), B.pixelStorei(z.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = B.getParameter(z.UNPACK_ROW_LENGTH), b = B.getParameter(z.UNPACK_IMAGE_HEIGHT), x = B.getParameter(z.UNPACK_SKIP_PIXELS), S = B.getParameter(z.UNPACK_SKIP_ROWS), C = B.getParameter(z.UNPACK_SKIP_IMAGES);
			B.pixelStorei(z.UNPACK_ROW_LENGTH, h.width), B.pixelStorei(z.UNPACK_IMAGE_HEIGHT, h.height), B.pixelStorei(z.UNPACK_SKIP_PIXELS, l), B.pixelStorei(z.UNPACK_SKIP_ROWS, u), B.pixelStorei(z.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = V.get(e), r = V.get(t), h = V.get(n.__renderTarget), g = V.get(r.__renderTarget);
				B.bindFramebuffer(z.READ_FRAMEBUFFER, h.__webglFramebuffer), B.bindFramebuffer(z.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, V.get(e).__webglTexture, i, d + n), z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, V.get(t).__webglTexture, a, m + n)), z.blitFramebuffer(l, u, o, s, f, p, o, s, z.DEPTH_BUFFER_BIT, z.NEAREST);
				B.bindFramebuffer(z.READ_FRAMEBUFFER, null), B.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || V.has(e)) {
				let n = V.get(e), r = V.get(t);
				B.bindFramebuffer(z.READ_FRAMEBUFFER, F), B.bindFramebuffer(z.DRAW_FRAMEBUFFER, ae);
				for (let e = 0; e < c; e++) w ? z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : z.framebufferTexture2D(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, n.__webglTexture, i), T ? z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : z.framebufferTexture2D(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? z.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : z.copyTexSubImage2D(v, a, f, p, l, u, o, s) : z.blitFramebuffer(l, u, o, s, f, p, o, s, z.COLOR_BUFFER_BIT, z.NEAREST);
				B.bindFramebuffer(z.READ_FRAMEBUFFER, null), B.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? z.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? z.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : z.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? z.compressedTexSubImage2D(z.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, g, _, h);
			B.pixelStorei(z.UNPACK_ROW_LENGTH, y), B.pixelStorei(z.UNPACK_IMAGE_HEIGHT, b), B.pixelStorei(z.UNPACK_SKIP_PIXELS, x), B.pixelStorei(z.UNPACK_SKIP_ROWS, S), B.pixelStorei(z.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && z.generateMipmap(v), B.unbindTexture();
		}, this.initRenderTarget = function(e) {
			V.get(e).__webglFramebuffer === void 0 && H.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? H.setTextureCube(e, 0) : e.isData3DTexture ? H.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? H.setTexture2DArray(e, 0) : H.setTexture2D(e, 0), B.unbindTexture();
		}, this.resetState = function() {
			oe = 0, se = 0, I = null, B.reset(), et.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return He;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = Y._getDrawingBufferColorSpace(e), t.unpackColorSpace = Y._getUnpackColorSpace();
	}
}, ll = { type: "change" }, ul = { type: "start" }, dl = { type: "end" }, fl = new Fr(), pl = new Or(), ml = Math.cos(70 * Tt.DEG2RAD), hl = new q(), gl = 2 * Math.PI, _l = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, vl = 1e-6, yl = class extends Ha {
	constructor(n, r = null) {
		super(n, r), this.state = _l.NONE, this.target = new q(), this.cursor = new q(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: e.ROTATE,
			MIDDLE: e.DOLLY,
			RIGHT: e.PAN
		}, this.touches = {
			ONE: t.ROTATE,
			TWO: t.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new q(), this._lastQuaternion = new Et(), this._lastTargetPosition = new q(), this._quat = new Et().setFromUnitVectors(n.up, new q(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Va(), this._sphericalDelta = new Va(), this._scale = 1, this._panOffset = new q(), this._rotateStart = new K(), this._rotateEnd = new K(), this._rotateDelta = new K(), this._panStart = new K(), this._panEnd = new K(), this._panDelta = new K(), this._dollyStart = new K(), this._dollyEnd = new K(), this._dollyDelta = new K(), this._dollyDirection = new q(), this._mouse = new K(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = xl.bind(this), this._onPointerDown = bl.bind(this), this._onPointerUp = Sl.bind(this), this._onContextMenu = kl.bind(this), this._onMouseWheel = Tl.bind(this), this._onKeyDown = El.bind(this), this._onTouchStart = Dl.bind(this), this._onTouchMove = Ol.bind(this), this._onMouseDown = Cl.bind(this), this._onMouseMove = wl.bind(this), this._interceptControlDown = Al.bind(this), this._interceptControlUp = jl.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.state = _l.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents();
		let e = this.domElement.getRootNode();
		e.removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), e.removeEventListener("keyup", this._interceptControlUp, { capture: !0 }), this._controlActive = !1, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(ll), this.update(), this.state = _l.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		hl.copy(t).sub(this.target), hl.applyQuaternion(this._quat), this._spherical.setFromVector3(hl), this.autoRotate && this.state === _l.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += gl : n > Math.PI && (n -= gl), r < -Math.PI ? r += gl : r > Math.PI && (r -= gl), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (hl.setFromSpherical(this._spherical), hl.applyQuaternion(this._quatInverse), t.copy(this.target).add(hl), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = hl.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new q(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new q(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = hl.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (fl.origin.copy(this.object.position), fl.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(fl.direction)) < ml ? this.object.lookAt(this.target) : (pl.setFromNormalAndCoplanarPoint(this.object.up, this.target), fl.intersectPlane(pl, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > vl || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > vl || this._lastTargetPosition.distanceToSquared(this.target) > vl ? (this.dispatchEvent(ll), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? gl / 60 / 60 * this.autoRotateSpeed : gl / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		hl.setFromMatrixColumn(t, 0), hl.multiplyScalar(-e), this._panOffset.add(hl);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? hl.setFromMatrixColumn(t, 1) : (hl.setFromMatrixColumn(t, 0), hl.crossVectors(this.object.up, hl)), hl.multiplyScalar(e), this._panOffset.add(hl);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			hl.copy(r).sub(this.target);
			let i = hl.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(gl * this._rotateDelta.x / t.clientHeight), this._rotateUp(gl * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(gl * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-gl * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(gl * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-gl * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(gl * this._rotateDelta.x / t.clientHeight), this._rotateUp(gl * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, o = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new K(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function bl(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._isTrackingPointer(e) || (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function xl(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function Sl(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(dl), this.state = _l.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function Cl(t) {
	let n;
	switch (t.button) {
		case 0:
			n = this.mouseButtons.LEFT;
			break;
		case 1:
			n = this.mouseButtons.MIDDLE;
			break;
		case 2:
			n = this.mouseButtons.RIGHT;
			break;
		default: n = -1;
	}
	switch (n) {
		case e.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(t), this.state = _l.DOLLY;
			break;
		case e.ROTATE:
			if (t.ctrlKey || t.metaKey || t.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(t), this.state = _l.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(t), this.state = _l.ROTATE;
			}
			break;
		case e.PAN:
			if (t.ctrlKey || t.metaKey || t.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(t), this.state = _l.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(t), this.state = _l.PAN;
			}
			break;
		default: this.state = _l.NONE;
	}
	this.state !== _l.NONE && this.dispatchEvent(ul);
}
function wl(e) {
	switch (this.state) {
		case _l.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case _l.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case _l.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function Tl(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === _l.NONE && (e.preventDefault(), this.dispatchEvent(ul), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(dl));
}
function El(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function Dl(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case t.ROTATE:
					if (this.enableRotate === !1) return;
					this._handleTouchStartRotate(e), this.state = _l.TOUCH_ROTATE;
					break;
				case t.PAN:
					if (this.enablePan === !1) return;
					this._handleTouchStartPan(e), this.state = _l.TOUCH_PAN;
					break;
				default: this.state = _l.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case t.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = _l.TOUCH_DOLLY_PAN;
					break;
				case t.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = _l.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = _l.NONE;
			}
			break;
		default: this.state = _l.NONE;
	}
	this.state !== _l.NONE && this.dispatchEvent(ul);
}
function Ol(e) {
	switch (this._trackPointer(e), this.state) {
		case _l.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case _l.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case _l.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case _l.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = _l.NONE;
	}
}
function kl(e) {
	this.enabled !== !1 && e.preventDefault();
}
function Al(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function jl(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
// node_modules/lil-gui/dist/lil-gui.esm.js
var Ml = class e {
	constructor(t, n, r, i, a = "div") {
		this.parent = t, this.object = n, this.property = r, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement(a), this.domElement.classList.add("lil-controller"), this.domElement.classList.add(i), this.$name = document.createElement("div"), this.$name.classList.add("lil-name"), e.nextNameID = e.nextNameID || 0, this.$name.id = `lil-gui-name-${++e.nextNameID}`, this.$widget = document.createElement("div"), this.$widget.classList.add("lil-widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", (e) => e.stopPropagation()), this.domElement.addEventListener("keyup", (e) => e.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(r);
	}
	name(e) {
		return this._name = e, this.$name.textContent = e, this;
	}
	onChange(e) {
		return this._onChange = e, this;
	}
	_callOnChange() {
		this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0;
	}
	onFinishChange(e) {
		return this._onFinishChange = e, this;
	}
	_callOnFinishChange() {
		this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1;
	}
	reset() {
		return this.setValue(this.initialValue), this._callOnFinishChange(), this;
	}
	enable(e = !0) {
		return this.disable(!e);
	}
	disable(e = !0) {
		return e === this._disabled || (this._disabled = e, this.domElement.classList.toggle("lil-disabled", e), this.$disable.toggleAttribute("disabled", e)), this;
	}
	show(e = !0) {
		return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
	}
	hide() {
		return this.show(!1);
	}
	options(e) {
		let t = this.parent.add(this.object, this.property, e);
		return t.name(this._name), this.destroy(), t;
	}
	min(e) {
		return this;
	}
	max(e) {
		return this;
	}
	step(e) {
		return this;
	}
	decimals(e) {
		return this;
	}
	listen(e = !0) {
		return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
	}
	_listenCallback() {
		this._listenCallbackID = requestAnimationFrame(this._listenCallback);
		let e = this.save();
		e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e;
	}
	getValue() {
		return this.object[this.property];
	}
	setValue(e) {
		return this.getValue() !== e && (this.object[this.property] = e, this._callOnChange(), this.updateDisplay()), this;
	}
	updateDisplay() {
		return this;
	}
	load(e) {
		return this.setValue(e), this._callOnFinishChange(), this;
	}
	save() {
		return this.getValue();
	}
	destroy() {
		this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
	}
}, Nl = class extends Ml {
	constructor(e, t, n) {
		super(e, t, n, "lil-boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
			this.setValue(this.$input.checked), this._callOnFinishChange();
		}), this.$disable = this.$input, this.updateDisplay();
	}
	updateDisplay() {
		return this.$input.checked = this.getValue(), this;
	}
};
function Pl(e) {
	let t, n;
	return (t = e.match(/(#|0x)?([a-f0-9]{6})/i)) ? n = t[2] : (t = e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? n = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (n = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), n ? "#" + n : !1;
}
var Fl = {
	isPrimitive: !0,
	match: (e) => typeof e == "string",
	fromHexString: Pl,
	toHexString: Pl
}, Il = {
	isPrimitive: !0,
	match: (e) => typeof e == "number",
	fromHexString: (e) => parseInt(e.substring(1), 16),
	toHexString: (e) => "#" + e.toString(16).padStart(6, 0)
}, Ll = [
	Fl,
	Il,
	{
		isPrimitive: !1,
		match: (e) => Array.isArray(e) || ArrayBuffer.isView(e),
		fromHexString(e, t, n = 1) {
			let r = Il.fromHexString(e);
			t[0] = (r >> 16 & 255) / 255 * n, t[1] = (r >> 8 & 255) / 255 * n, t[2] = (r & 255) / 255 * n;
		},
		toHexString([e, t, n], r = 1) {
			r = 255 / r;
			let i = e * r << 16 ^ t * r << 8 ^ (n * r | 0);
			return Il.toHexString(i);
		}
	},
	{
		isPrimitive: !1,
		match: (e) => Object(e) === e,
		fromHexString(e, t, n = 1) {
			let r = Il.fromHexString(e);
			t.r = (r >> 16 & 255) / 255 * n, t.g = (r >> 8 & 255) / 255 * n, t.b = (r & 255) / 255 * n;
		},
		toHexString({ r: e, g: t, b: n }, r = 1) {
			r = 255 / r;
			let i = e * r << 16 ^ t * r << 8 ^ (n * r | 0);
			return Il.toHexString(i);
		}
	}
];
function Rl(e) {
	return Ll.find((t) => t.match(e));
}
var zl = class extends Ml {
	constructor(e, t, n, r) {
		super(e, t, n, "lil-color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("lil-display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = Rl(this.initialValue), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
			this._setValueFromHexString(this.$input.value);
		}), this.$input.addEventListener("blur", () => {
			this._callOnFinishChange();
		}), this.$text.addEventListener("input", () => {
			let e = Pl(this.$text.value);
			e && this._setValueFromHexString(e);
		}), this.$text.addEventListener("focus", () => {
			this._textFocused = !0, this.$text.select();
		}), this.$text.addEventListener("blur", () => {
			this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange();
		}), this.$disable = this.$text, this.updateDisplay();
	}
	reset() {
		return this._setValueFromHexString(this._initialValueHexString), this;
	}
	_setValueFromHexString(e) {
		if (this._format.isPrimitive) {
			let t = this._format.fromHexString(e);
			this.setValue(t);
		} else this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
	}
	save() {
		return this._format.toHexString(this.getValue(), this._rgbScale);
	}
	load(e) {
		return this._setValueFromHexString(e), this._callOnFinishChange(), this;
	}
	updateDisplay() {
		return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
	}
}, Bl = class extends Ml {
	constructor(e, t, n) {
		super(e, t, n, "lil-function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (e) => {
			e.preventDefault(), this.getValue().call(this.object), this._callOnChange();
		}), this.$button.addEventListener("touchstart", () => {}, { passive: !0 }), this.$disable = this.$button;
	}
}, Vl = class extends Ml {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, "lil-number"), this._initInput(), this.min(r), this.max(i);
		let o = a !== void 0;
		this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay();
	}
	decimals(e) {
		return this._decimals = e, this.updateDisplay(), this;
	}
	min(e) {
		return this._min = e, this._onUpdateMinMax(), this;
	}
	max(e) {
		return this._max = e, this._onUpdateMinMax(), this;
	}
	step(e, t = !0) {
		return this._step = e, this._stepExplicit = t, this;
	}
	updateDisplay() {
		let e = this.getValue();
		if (this._hasSlider) {
			let t = (e - this._min) / (this._max - this._min);
			t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = t * 100 + "%";
		}
		return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this;
	}
	_initInput() {
		this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
		let e = () => {
			let e = parseFloat(this.$input.value);
			isNaN(e) || (this._stepExplicit && (e = this._snap(e)), this.setValue(this._clamp(e)));
		}, t = (e) => {
			let t = parseFloat(this.$input.value);
			isNaN(t) || (this._snapClampSetValue(t + e), this.$input.value = this.getValue());
		}, n = (e) => {
			e.key === "Enter" && this.$input.blur(), e.code === "ArrowUp" && (e.preventDefault(), t(this._step * this._arrowKeyMultiplier(e))), e.code === "ArrowDown" && (e.preventDefault(), t(this._step * this._arrowKeyMultiplier(e) * -1));
		}, r = (e) => {
			this._inputFocused && (e.preventDefault(), t(this._step * this._normalizeMouseWheel(e)));
		}, i = !1, a, o, s, c, l, u = (e) => {
			a = e.clientX, o = s = e.clientY, i = !0, c = this.getValue(), l = 0, window.addEventListener("mousemove", d), window.addEventListener("mouseup", f);
		}, d = (e) => {
			if (i) {
				let t = e.clientX - a, n = e.clientY - o;
				Math.abs(n) > 5 ? (e.preventDefault(), this.$input.blur(), i = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(t) > 5 && f();
			}
			if (!i) {
				let t = e.clientY - s;
				l -= t * this._step * this._arrowKeyMultiplier(e), c + l > this._max ? l = this._max - c : c + l < this._min && (l = this._min - c), this._snapClampSetValue(c + l);
			}
			s = e.clientY;
		}, f = () => {
			this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", f);
		};
		this.$input.addEventListener("input", e), this.$input.addEventListener("keydown", n), this.$input.addEventListener("wheel", r, { passive: !1 }), this.$input.addEventListener("mousedown", u), this.$input.addEventListener("focus", () => {
			this._inputFocused = !0;
		}), this.$input.addEventListener("blur", () => {
			this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange();
		});
	}
	_initSlider() {
		this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("lil-slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("lil-fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("lil-has-slider");
		let e = (e, t, n, r, i) => (e - t) / (n - t) * (i - r) + r, t = (t) => {
			let n = this.$slider.getBoundingClientRect(), r = e(t, n.left, n.right, this._min, this._max);
			this._snapClampSetValue(r);
		}, n = (e) => {
			this._setDraggingStyle(!0), t(e.clientX), window.addEventListener("mousemove", r), window.addEventListener("mouseup", i);
		}, r = (e) => {
			t(e.clientX);
		}, i = () => {
			this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", i);
		}, a = !1, o, s, c = (e) => {
			e.preventDefault(), this._setDraggingStyle(!0), t(e.touches[0].clientX), a = !1;
		}, l = (e) => {
			e.touches.length > 1 || (this._hasScrollBar ? (o = e.touches[0].clientX, s = e.touches[0].clientY, a = !0) : c(e), window.addEventListener("touchmove", u, { passive: !1 }), window.addEventListener("touchend", d));
		}, u = (e) => {
			if (a) {
				let t = e.touches[0].clientX - o, n = e.touches[0].clientY - s;
				Math.abs(t) > Math.abs(n) ? c(e) : (window.removeEventListener("touchmove", u), window.removeEventListener("touchend", d));
			} else e.preventDefault(), t(e.touches[0].clientX);
		}, d = () => {
			this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", u), window.removeEventListener("touchend", d);
		}, f = this._callOnFinishChange.bind(this), p;
		this.$slider.addEventListener("mousedown", n), this.$slider.addEventListener("touchstart", l, { passive: !1 }), this.$slider.addEventListener("wheel", (e) => {
			if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && this._hasScrollBar) return;
			e.preventDefault();
			let t = this._normalizeMouseWheel(e) * this._step;
			this._snapClampSetValue(this.getValue() + t), this.$input.value = this.getValue(), clearTimeout(p), p = setTimeout(f, 400);
		}, { passive: !1 });
	}
	_setDraggingStyle(e, t = "horizontal") {
		this.$slider && this.$slider.classList.toggle("lil-active", e), document.body.classList.toggle("lil-dragging", e), document.body.classList.toggle(`lil-${t}`, e);
	}
	_getImplicitStep() {
		return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1;
	}
	_onUpdateMinMax() {
		!this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay());
	}
	_normalizeMouseWheel(e) {
		let { deltaX: t, deltaY: n } = e;
		return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, n = -e.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), t + -n;
	}
	_arrowKeyMultiplier(e) {
		let t = this._stepExplicit ? 1 : 10;
		return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t;
	}
	_snap(e) {
		let t = 0;
		return this._hasMin ? t = this._min : this._hasMax && (t = this._max), e -= t, e = Math.round(e / this._step) * this._step, e += t, e = parseFloat(e.toPrecision(15)), e;
	}
	_clamp(e) {
		return e < this._min && (e = this._min), e > this._max && (e = this._max), e;
	}
	_snapClampSetValue(e) {
		this.setValue(this._clamp(this._snap(e)));
	}
	get _hasScrollBar() {
		let e = this.parent.root.$children;
		return e.scrollHeight > e.clientHeight;
	}
	get _hasMin() {
		return this._min !== void 0;
	}
	get _hasMax() {
		return this._max !== void 0;
	}
}, Hl = class extends Ml {
	constructor(e, t, n, r) {
		super(e, t, n, "lil-option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("lil-display"), this.$select.addEventListener("change", () => {
			this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
		}), this.$select.addEventListener("focus", () => {
			this.$display.classList.add("lil-focus");
		}), this.$select.addEventListener("blur", () => {
			this.$display.classList.remove("lil-focus");
		}), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(r);
	}
	options(e) {
		return this._values = Array.isArray(e) ? e : Object.values(e), this._names = Array.isArray(e) ? e : Object.keys(e), this.$select.replaceChildren(), this._names.forEach((e) => {
			let t = document.createElement("option");
			t.textContent = e, this.$select.appendChild(t);
		}), this.updateDisplay(), this;
	}
	updateDisplay() {
		let e = this.getValue(), t = this._values.indexOf(e);
		return this.$select.selectedIndex = t, this.$display.textContent = t === -1 ? e : this._names[t], this;
	}
}, Ul = class extends Ml {
	constructor(e, t, n) {
		super(e, t, n, "lil-string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
			this.setValue(this.$input.value);
		}), this.$input.addEventListener("keydown", (e) => {
			e.code === "Enter" && this.$input.blur();
		}), this.$input.addEventListener("blur", () => {
			this._callOnFinishChange();
		}), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
	}
	updateDisplay() {
		return this.$input.value = this.getValue(), this;
	}
}, Wl = ".lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, \"Droid Sans Mono\", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.lil-root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n  background: var(--background-color);\n}\n.lil-gui.lil-root > .lil-title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.lil-root > .lil-children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.lil-root > .lil-children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.lil-auto-place, .lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-controller.lil-disabled {\n  opacity: 0.5;\n}\n.lil-controller.lil-disabled, .lil-controller.lil-disabled * {\n  pointer-events: none !important;\n}\n.lil-controller > .lil-name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-controller .lil-widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-controller.lil-string input {\n  color: var(--string-color);\n}\n.lil-controller.lil-boolean {\n  cursor: pointer;\n}\n.lil-controller.lil-color .lil-display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-controller.lil-color .lil-display:hover:before {\n    content: \" \";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-controller.lil-color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-controller.lil-color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-controller.lil-option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-controller.lil-option .lil-display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-controller.lil-option .lil-display.lil-focus {\n    background: var(--focus-color);\n  }\n}\n.lil-controller.lil-option .lil-display.lil-active {\n  background: var(--focus-color);\n}\n.lil-controller.lil-option .lil-display:after {\n  font-family: \"lil-gui\";\n  content: \"↕\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-controller.lil-option .lil-widget,\n.lil-controller.lil-option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-controller.lil-option .lil-widget:hover .lil-display {\n    background: var(--hover-color);\n  }\n}\n.lil-controller.lil-number input {\n  color: var(--number-color);\n}\n.lil-controller.lil-number.lil-has-slider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-controller.lil-number .lil-slider {\n  width: 100%;\n  height: var(--widget-height);\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-controller.lil-number .lil-slider:hover {\n    background: var(--hover-color);\n  }\n}\n.lil-controller.lil-number .lil-slider.lil-active {\n  background: var(--focus-color);\n}\n.lil-controller.lil-number .lil-slider.lil-active .lil-fill {\n  opacity: 0.95;\n}\n.lil-controller.lil-number .lil-fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-dragging * {\n  cursor: ew-resize !important;\n}\n.lil-dragging.lil-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .lil-title {\n  height: var(--title-height);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  width: 100%;\n  text-align: left;\n  background: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .lil-title:before {\n  font-family: \"lil-gui\";\n  content: \"▾\";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .lil-title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-dragging) .lil-gui .lil-title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .lil-title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.lil-root > .lil-title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.lil-closed > .lil-title:before {\n  content: \"▸\";\n}\n.lil-gui.lil-closed > .lil-children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.lil-closed:not(.lil-transition) > .lil-children {\n  display: none;\n}\n.lil-gui.lil-transition > .lil-children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .lil-children:empty:before {\n  content: \"Empty\";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .lil-controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .lil-title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .lil-children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .lil-controller {\n  border: none;\n}\n\n.lil-gui label, .lil-gui input, .lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n}\n.lil-gui input {\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: \"lil-gui\";\n  content: \"✓\";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  border: none;\n}\n.lil-gui .lil-controller button {\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n}\n@media (hover: hover) {\n  .lil-gui .lil-controller button:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui .lil-controller button:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui .lil-controller button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: \"lil-gui\";\n  src: url(\"data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=\") format(\"woff2\");\n}";
function Gl(e) {
	let t = document.createElement("style");
	t.innerHTML = e;
	let n = document.querySelector("head link[rel=stylesheet], head style");
	n ? document.head.insertBefore(t, n) : document.head.appendChild(t);
}
var Kl = !1, ql = class e {
	constructor({ parent: e, autoPlace: t = e === void 0, container: n, width: r, title: i = "Controls", closeFolders: a = !1, injectStyles: o = !0, touchStyles: s = !0 } = {}) {
		this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("button"), this.$title.classList.add("lil-title"), this.$title.setAttribute("aria-expanded", !0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("touchstart", () => {}, { passive: !0 }), this.$children = document.createElement("div"), this.$children.classList.add("lil-children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(i), this.parent ? (this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement)) : (this.domElement.classList.add("lil-root"), s && this.domElement.classList.add("lil-allow-touch-styles"), !Kl && o && (Gl(Wl), Kl = !0), n ? n.appendChild(this.domElement) : t && (this.domElement.classList.add("lil-auto-place", "autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this._closeFolders = a);
	}
	add(e, t, n, r, i) {
		if (Object(n) === n) return new Hl(this, e, t, n);
		let a = e[t];
		switch (typeof a) {
			case "number": return new Vl(this, e, t, n, r, i);
			case "boolean": return new Nl(this, e, t);
			case "string": return new Ul(this, e, t);
			case "function": return new Bl(this, e, t);
		}
		console.error("gui.add failed\n	property:", t, "\n	object:", e, "\n	value:", a);
	}
	addColor(e, t, n = 1) {
		return new zl(this, e, t, n);
	}
	addFolder(t) {
		let n = new e({
			parent: this,
			title: t
		});
		return this.root._closeFolders && n.close(), n;
	}
	load(e, t = !0) {
		return e.controllers && this.controllers.forEach((t) => {
			t instanceof Bl || t._name in e.controllers && t.load(e.controllers[t._name]);
		}), t && e.folders && this.folders.forEach((t) => {
			t._title in e.folders && t.load(e.folders[t._title]);
		}), this;
	}
	save(e = !0) {
		let t = {
			controllers: {},
			folders: {}
		};
		return this.controllers.forEach((e) => {
			if (!(e instanceof Bl)) {
				if (e._name in t.controllers) throw Error(`Cannot save GUI with duplicate property "${e._name}"`);
				t.controllers[e._name] = e.save();
			}
		}), e && this.folders.forEach((e) => {
			if (e._title in t.folders) throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);
			t.folders[e._title] = e.save();
		}), t;
	}
	open(e = !0) {
		return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("lil-closed", this._closed), this;
	}
	close() {
		return this.open(!1);
	}
	_setClosed(e) {
		this._closed !== e && (this._closed = e, this._callOnOpenClose(this));
	}
	show(e = !0) {
		return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
	}
	hide() {
		return this.show(!1);
	}
	openAnimated(e = !0) {
		return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
			let t = this.$children.clientHeight;
			this.$children.style.height = t + "px", this.domElement.classList.add("lil-transition");
			let n = (e) => {
				e.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("lil-transition"), this.$children.removeEventListener("transitionend", n));
			};
			this.$children.addEventListener("transitionend", n);
			let r = e ? this.$children.scrollHeight : 0;
			this.domElement.classList.toggle("lil-closed", !e), requestAnimationFrame(() => {
				this.$children.style.height = r + "px";
			});
		}), this;
	}
	title(e) {
		return this._title = e, this.$title.textContent = e, this;
	}
	reset(e = !0) {
		return (e ? this.controllersRecursive() : this.controllers).forEach((e) => e.reset()), this;
	}
	onChange(e) {
		return this._onChange = e, this;
	}
	_callOnChange(e) {
		this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, {
			object: e.object,
			property: e.property,
			value: e.getValue(),
			controller: e
		});
	}
	onFinishChange(e) {
		return this._onFinishChange = e, this;
	}
	_callOnFinishChange(e) {
		this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
			object: e.object,
			property: e.property,
			value: e.getValue(),
			controller: e
		});
	}
	onOpenClose(e) {
		return this._onOpenClose = e, this;
	}
	_callOnOpenClose(e) {
		this.parent && this.parent._callOnOpenClose(e), this._onOpenClose !== void 0 && this._onOpenClose.call(this, e);
	}
	destroy() {
		this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((e) => e.destroy());
	}
	controllersRecursive() {
		let e = Array.from(this.controllers);
		return this.folders.forEach((t) => {
			e = e.concat(t.controllersRecursive());
		}), e;
	}
	foldersRecursive() {
		let e = Array.from(this.folders);
		return this.folders.forEach((t) => {
			e = e.concat(t.foldersRecursive());
		}), e;
	}
}, Jl = new wr();
Jl.setAttribute("position", new fr([
	-1,
	-1,
	0,
	3,
	-1,
	0,
	-1,
	3,
	0
], 3));
var Yl = new xa(-1, 1, 1, -1, 0, 1), Xl = "\nin vec3 position;\nout vec2 vUv;\nvoid main() {\n  vUv = position.xy * 0.5 + 0.5;\n  gl_Position = vec4(position.xy, 0.0, 1.0);\n}";
function Zl(e, t = {}, n = {}) {
	return new zi({
		glslVersion: Ve,
		vertexShader: Xl,
		fragmentShader: e,
		uniforms: t,
		depthTest: !1,
		depthWrite: !1,
		...n
	});
}
var Ql = class {
	constructor(e) {
		this.mesh = new Jr(Jl, e), this.mesh.frustumCulled = !1;
	}
	get material() {
		return this.mesh.material;
	}
	set material(e) {
		this.mesh.material = e;
	}
	render(e, t) {
		e.setRenderTarget(t), e.render(this.mesh, Yl);
	}
}, $l = 8, eu = [
	600,
	85,
	12,
	2.1
], tu = 9.81, nu = 74e-6, ru = 300, iu = `
precision highp float;
precision highp int;
#define N 256
#define PI 3.14159265359
#define G ${tu.toFixed(2)}
#define ST ${nu.toExponential()}
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
float omega(float k) { return sqrt(G * k + ST * k * k * k); }
`, au = iu + "\nuniform vec4 uSpecA[2]; // scale, angle, spreadBlend, swell\nuniform vec4 uSpecB[2]; // alpha, peakOmega, gamma, shortWavesFade\nuniform vec4 uLength;\nuniform vec4 uCut;      // c0 hi, c1 hi, c2 hi, -\nuniform float uCapFade; // short-wave fade for cascade 3 (cascades 0-2 use uSpecB.w)\nuniform uint uSeed;\nout vec4 outColor;\n\nuvec2 pcg2d(uvec2 v) {\n  v = v * 1664525u + 1013904223u;\n  v.x += v.y * 1664525u; v.y += v.x * 1664525u;\n  v ^= v >> 16u;\n  v.x += v.y * 1664525u; v.y += v.x * 1664525u;\n  v ^= v >> 16u;\n  return v;\n}\n\nvec2 gauss(ivec2 id, int c) {\n  uvec2 h = pcg2d(uvec2(id) + uvec2(uint(c) * 7919u, uint(c) * 104729u) + uSeed);\n  float u1 = (float(h.x) + 1.0) / 4294967296.0;\n  float u2 = float(h.y) / 4294967296.0;\n  float r = sqrt(-2.0 * log(u1));\n  return r * vec2(cos(2.0 * PI * u2), sin(2.0 * PI * u2));\n}\n\nfloat jonswap(float w, vec4 a, vec4 b) {\n  float wp = b.y;\n  float sigma = w <= wp ? 0.07 : 0.09;\n  float r = exp(-(w - wp) * (w - wp) / (2.0 * sigma * sigma * wp * wp));\n  float iw = 1.0 / w;\n  float q = wp * iw;\n  return a.x * b.x * G * G * iw * iw * iw * iw * iw * exp(-1.25 * q * q * q * q) * pow(b.z, r);\n}\n\nfloat normalisation(float s) {\n  float s2 = s * s, s3 = s2 * s, s4 = s3 * s;\n  if (s < 5.0) return -0.000564 * s4 + 0.00776 * s3 - 0.044 * s2 + 0.192 * s + 0.163;\n  return -4.80e-08 * s4 + 1.07e-05 * s3 - 9.53e-04 * s2 + 5.90e-02 * s + 3.93e-01;\n}\n\nfloat directional(float theta, float w, vec4 a, vec4 b) {\n  float x = w / b.y;\n  float s = x > 1.0 ? 9.77 * pow(x, -2.5) : 6.97 * pow(x, 5.0);\n  s += 16.0 * tanh(min(x, 20.0)) * a.w * a.w;\n  float t = theta - a.y;\n  float cosine2s = normalisation(s) * pow(abs(cos(0.5 * t)), 2.0 * s);\n  return mix(2.0 / PI * cos(t) * cos(t), cosine2s, a.z);\n}\n\nvec2 h0(ivec2 id, int c) {\n  float L = uLength[c];\n  float dk = 2.0 * PI / L;\n  vec2 k = vec2(id - N / 2) * dk;\n  float kl = length(k);\n  float lo = c == 0 ? 1e-4 : uCut[c - 1];\n  float hi = c == 3 ? 1e4 : uCut[c];\n  if (kl < lo || kl > hi) return vec2(0.0);\n  float w = omega(kl);\n  float dwdk = (G + 3.0 * ST * kl * kl) / (2.0 * w);\n  float theta = atan(k.y, k.x);\n  float S = 0.0;\n  for (int i = 0; i < 2; i++) {\n    if (uSpecA[i].x <= 0.0) continue;\n    float fade = c == 3 ? uCapFade : uSpecB[i].w;\n    S += jonswap(w, uSpecA[i], uSpecB[i]) * directional(theta, w, uSpecA[i], uSpecB[i])\n       * exp(-fade * fade * kl * kl);\n  }\n  return gauss(id, c) * sqrt(2.0 * S * dwdk / kl * dk * dk);\n}\n\nvoid main() {\n  ivec2 p = ivec2(gl_FragCoord.xy);\n  int c = p.y / N;\n  ivec2 id = ivec2(p.x, p.y - c * N);\n  vec2 a = h0(id, c);\n  vec2 b = h0((N - id) % N, c);\n  outColor = vec4(a, b.x, -b.y); // h0(k), conj(h0(-k))\n}", ou = iu + `
uniform highp sampler2D uH0;
uniform vec4 uLength;
uniform float uTime;
layout(location = 0) out vec4 out0;
layout(location = 1) out vec4 out1;

// two real fields packed as one complex spectrum: IFFT(A + iB) = a + ib
vec2 pack2(vec2 a, vec2 b) { return vec2(a.x - b.y, a.y + b.x); }

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  vec2 k = vec2(ivec2(p.x, p.y - c * N) - N / 2) * (2.0 * PI / uLength[c]);
  float kl = length(k);
  float ik = kl > 1e-6 ? 1.0 / kl : 0.0;
  const float W0 = 2.0 * PI / ${ru.toFixed(1)};
  // ω = n·W0; phase reduced to [0, 2π) before sin/cos (the capillary cascade reaches ω ≈ 130)
  float ph = 2.0 * PI * fract(floor(omega(kl) / W0) * (uTime / ${ru.toFixed(1)}));
  vec2 e = vec2(cos(ph), sin(ph));
  vec4 h0 = texelFetch(uH0, p, 0);
  vec2 h = cmul(h0.xy, e) + cmul(h0.zw, vec2(e.x, -e.y));
  vec2 ih = vec2(-h.y, h.x);

  vec2 dx = ih * k.x * ik, dz = ih * k.y * ik;
  vec2 dxdx = -h * k.x * k.x * ik, dzdz = -h * k.y * k.y * ik, dxdz = -h * k.x * k.y * ik;
  vec2 dydx = ih * k.x, dydz = ih * k.y;

  out0 = vec4(pack2(dx, dz), pack2(h, dxdz));
  out1 = vec4(pack2(dydx, dydz), pack2(dxdx, dzdz));
}`, su = iu + "\nuniform highp sampler2D uIn0;\nuniform highp sampler2D uIn1;\nuniform int uSub;      // sub-transform size 2..N\nuniform int uVertical;\nlayout(location = 0) out vec4 out0;\nlayout(location = 1) out vec4 out1;\n\nvoid main() {\n  ivec2 p = ivec2(gl_FragCoord.xy);\n  int i = uVertical == 1 ? p.y % N : p.x;\n  int hs = uSub >> 1;\n  int e = (i / uSub) * hs + (i & (hs - 1));\n  ivec2 pe, po;\n  if (uVertical == 1) { int base = p.y - i; pe = ivec2(p.x, base + e); po = ivec2(p.x, base + e + N / 2); }\n  else { pe = ivec2(e, p.y); po = ivec2(e + N / 2, p.y); }\n  float a = 2.0 * PI * float(i & (uSub - 1)) / float(uSub);\n  vec2 tw = vec2(cos(a), sin(a));\n  vec4 e0 = texelFetch(uIn0, pe, 0), o0 = texelFetch(uIn0, po, 0);\n  vec4 e1 = texelFetch(uIn1, pe, 0), o1 = texelFetch(uIn1, po, 0);\n  out0 = vec4(e0.xy + cmul(tw, o0.xy), e0.zw + cmul(tw, o0.zw));\n  out1 = vec4(e1.xy + cmul(tw, o1.xy), e1.zw + cmul(tw, o1.zw));\n}", cu = iu + "\nuniform highp sampler2D uIn0;\nuniform highp sampler2D uIn1;\nuniform sampler2D uPrev;\nuniform int uCascade;\nuniform float uLambda;\nuniform float uDt;\nuniform float uFoamRecovery;\nlayout(location = 0) out vec4 outDisp;\nlayout(location = 1) out vec4 outSlope;\n\nvoid main() {\n  ivec2 id = ivec2(gl_FragCoord.xy);\n  ivec2 p = id + ivec2(0, uCascade * N);\n  // undo the centred-k frequency shift\n  float s = ((id.x + id.y) & 1) == 0 ? 1.0 : -1.0;\n  vec4 a = texelFetch(uIn0, p, 0) * s; // Dx, Dz, Dy, Dxz\n  vec4 b = texelFetch(uIn1, p, 0) * s; // Dyx, Dyz, Dxx, Dzz\n  float dxx = uLambda * b.z, dzz = uLambda * b.w, dxz = uLambda * a.w;\n  float jac = (1.0 + dxx) * (1.0 + dzz) - dxz * dxz;\n  vec2 slope = b.xy / max(vec2(1.0 + dxx, 1.0 + dzz), vec2(0.2));\n  float prev = texelFetch(uPrev, id, 0).w;\n  // foam follows the jacobian down instantly and recovers at a dt-based rate\n  float turb = min(jac, prev + uDt * uFoamRecovery / max(jac, 0.5));\n  outDisp = vec4(uLambda * a.x, a.z, uLambda * a.y, turb);\n  outSlope = vec4(slope, slope * slope);\n}";
function lu(e, t) {
	let n = t * 1e3;
	return {
		alpha: .076 * (tu * n / (e * e)) ** -.22,
		peakOmega: 22 * (e * n / (tu * tu)) ** -.33
	};
}
var uu = () => ({
	windSpeed: 9,
	windDirection: 20,
	fetchKm: 120,
	spreadBlend: .85,
	windSwell: .25,
	gamma: 3.3,
	shortWavesFade: .04,
	capillaryFade: .08,
	waveScale: 1,
	swellScale: .7,
	swellWindSpeed: 7,
	swellDirection: -15,
	swellFetchKm: 900,
	swellSwell: 1,
	choppiness: .85,
	foamRecovery: .7,
	timeScale: 1
}), du = class {
	constructor(e, t = uu()) {
		this.renderer = e, this.params = t, this.time = 0, this.dirty = !0, this.parity = 0;
		let r = {
			type: _,
			minFilter: a,
			magFilter: a,
			depthBuffer: !1,
			generateMipmaps: !1
		}, i = 256 * eu.length;
		this.h0RT = new Wt(256, i, r);
		let o = {
			...r,
			type: v,
			count: 2
		};
		this.ping = new Wt(256, i, o), this.pong = new Wt(256, i, o);
		let s = {
			type: v,
			minFilter: u,
			magFilter: c,
			wrapS: n,
			wrapT: n,
			generateMipmaps: !0,
			anisotropy: e.capabilities.getMaxAnisotropy(),
			depthBuffer: !1,
			count: 2
		};
		this.out = eu.map(() => [new Wt(256, 256, s), new Wt(256, 256, s)]);
		let l = e.getClearColor(new Z()), d = e.getClearAlpha();
		e.setClearColor(0, 1);
		for (let t of this.out) for (let n of t) e.setRenderTarget(n), e.clear(!0, !1, !1);
		e.setClearColor(l, d), e.setRenderTarget(null);
		let f = new X(...eu);
		this.initMat = Zl(au, {
			uSpecA: { value: [new X(), new X()] },
			uSpecB: { value: [new X(), new X()] },
			uLength: { value: f },
			uCut: { value: new X(...eu.slice(1).map((e) => 2 * Math.PI / e * 6), 0) },
			uCapFade: { value: 0 },
			uSeed: { value: 1337 }
		}), this.evolveMat = Zl(ou, {
			uH0: { value: this.h0RT.texture },
			uLength: { value: f },
			uTime: { value: 0 }
		}), this.fftMat = Zl(su, {
			uIn0: { value: null },
			uIn1: { value: null },
			uSub: { value: 2 },
			uVertical: { value: 0 }
		}), this.assembleMat = Zl(cu, {
			uIn0: { value: null },
			uIn1: { value: null },
			uPrev: { value: null },
			uCascade: { value: 0 },
			uLambda: { value: 1 },
			uDt: { value: 0 },
			uFoamRecovery: { value: .45 }
		}), this.quad = new Ql(this.initMat), this.lengths = eu, this.displacement = this.out.map((e) => e[0].textures[0]), this.slope = this.out.map((e) => e[0].textures[1]);
	}
	updateSpectrum() {
		let e = this.params, t = this.initMat.uniforms, n = lu(e.windSpeed, e.fetchKm), r = lu(e.swellWindSpeed, e.swellFetchKm), i = Tt.degToRad;
		t.uSpecA.value[0].set(e.waveScale, i(e.windDirection), e.spreadBlend, e.windSwell), t.uSpecB.value[0].set(n.alpha, n.peakOmega, e.gamma, e.shortWavesFade), t.uSpecA.value[1].set(e.swellScale * e.waveScale, i(e.swellDirection), 1, e.swellSwell), t.uSpecB.value[1].set(r.alpha, r.peakOmega, e.gamma, e.shortWavesFade), t.uCapFade.value = e.capillaryFade, this.quad.material = this.initMat, this.quad.render(this.renderer, this.h0RT), this.dirty = !1;
	}
	update(e, t) {
		let n = this.params;
		t?.begin("sim.evolve"), this.dirty && this.updateSpectrum(), e *= n.timeScale, this.time = (this.time + e) % ru;
		let r = this.renderer, i = this.quad;
		this.evolveMat.uniforms.uTime.value = this.time, i.material = this.evolveMat, i.render(r, this.ping), t?.begin("sim.fft");
		let a = this.ping, o = this.pong, s = this.fftMat.uniforms;
		i.material = this.fftMat;
		for (let e = 0; e < 2; e++) {
			s.uVertical.value = e;
			for (let e = 1; e <= $l; e++) s.uSub.value = 1 << e, s.uIn0.value = a.textures[0], s.uIn1.value = a.textures[1], i.render(r, o), [a, o] = [o, a];
		}
		t?.begin("sim.assemble");
		let c = this.assembleMat.uniforms;
		c.uIn0.value = a.textures[0], c.uIn1.value = a.textures[1], c.uLambda.value = n.choppiness, c.uDt.value = e, c.uFoamRecovery.value = n.foamRecovery, i.material = this.assembleMat;
		let l = this.parity ^ 1;
		for (let e = 0; e < this.out.length; e++) c.uCascade.value = e, c.uPrev.value = this.out[e][this.parity].textures[0], i.render(r, this.out[e][l]), this.displacement[e] = this.out[e][l].textures[0], this.slope[e] = this.out[e][l].textures[1];
		this.parity = l;
	}
}, fu = "\nuniform highp sampler2DShadow uFloatShadow;\nuniform mat4 uFloatShadowMatrix;\nuniform float uFloatShadowBias;   // depth units; 0 = no casters this frame\nfloat floatShadow(vec3 p) {\n  if (uFloatShadowBias <= 0.0) return 1.0;\n  vec3 sc = (uFloatShadowMatrix * vec4(p, 1.0)).xyz;\n  if (any(lessThan(sc, vec3(0.0))) || any(greaterThan(sc, vec3(1.0)))) return 1.0;\n  return texture(uFloatShadow, vec3(sc.xy, sc.z - uFloatShadowBias));\n}", pu = new q(), mu = class {
	constructor(e = 1024) {
		let t = new yi(e, e, _);
		t.compareFunction = 515, t.minFilter = t.magFilter = c, this.target = new Wt(e, e, {
			format: k,
			depthTexture: t,
			generateMipmaps: !1
		}), this.camera = new xa(), this.material = new Ir({
			colorWrite: !1,
			side: 2
		}), this.uniforms = {
			uFloatShadow: { value: t },
			uFloatShadowMatrix: { value: new qt() },
			uFloatShadowBias: { value: 0 }
		};
	}
	update(e, t, n, r) {
		let i = this.uniforms;
		if (this.ready ||= (this.clear(e), !0), !n.length || r.y <= .01) {
			i.uFloatShadowBias.value = 0;
			return;
		}
		pu.set(0, 0, 0);
		for (let e of n) pu.add(e.pos);
		pu.divideScalar(n.length);
		let a = 1;
		for (let e of n) a = Math.max(a, e.pos.distanceTo(pu) + e.radius);
		let o = this.camera;
		o.left = o.bottom = -a, o.right = o.top = a, o.near = 1, o.far = a + 3e3, o.position.copy(pu).addScaledVector(r, a + 20), o.lookAt(pu), o.updateProjectionMatrix(), o.updateMatrixWorld(), i.uFloatShadowMatrix.value.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1).multiply(o.projectionMatrix).multiply(o.matrixWorldInverse), i.uFloatShadowBias.value = .03 / (o.far - o.near);
		let s = e.getRenderTarget();
		t.overrideMaterial = this.material, e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.render(t, o), t.overrideMaterial = null, e.setRenderTarget(s);
	}
	clear(e) {
		let t = e.getRenderTarget();
		e.setRenderTarget(this.target), e.clear(!1, !0, !1), e.setRenderTarget(t);
	}
}, hu = 384, gu = 60, _u = 1, vu = 3e3, yu = 6e4;
function bu(e) {
	let t = 1 + 2 * Math.PI / e, n = [];
	for (let e = _u / 16; e < _u * .99; e *= 1.12) n.push(e);
	for (let e = _u; e < vu; e *= t) n.push(e);
	n.push(yu);
	let r = new Float32Array((1 + n.length * e) * 3), i = 3;
	for (let t of n) for (let n = 0; n < e; n++) {
		let a = n / e * Math.PI * 2;
		r[i++] = Math.cos(a) * t, r[i++] = 0, r[i++] = Math.sin(a) * t;
	}
	let a = [];
	for (let t = 0; t < e; t++) a.push(0, 1 + (t + 1) % e, 1 + t);
	for (let t = 0; t < n.length - 1; t++) {
		let n = 1 + t * e, r = n + e;
		for (let t = 0; t < e; t++) {
			let i = (t + 1) % e;
			a.push(n + t, n + i, r + t, n + i, r + i, r + t);
		}
	}
	let o = new wr();
	return o.setAttribute("position", new lr(r, 3)), o.setIndex(new lr(new Uint32Array(a), 1)), o;
}
var xu = "\nuniform sampler2D uShore;\nuniform sampler2D uTravel;   // wave travel time from the coast (s), propagation dir xz, shoaling\nuniform float uShoreExtent;\nuniform float uTime;\nuniform vec4 uShoreWave;   // amplitude, wavelength, speed, steepness\nuniform vec2 uSwellDir;    // propagation direction of the swell (xz)\n\nvec4 shoreSample(vec2 xz) {\n  vec2 uv = xz / uShoreExtent + 0.5;\n  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(-60.0, 1e4, 0.0, 0.0);\n  return textureLod(uShore, uv, 0.0);\n}\nvec4 travelSample(vec2 xz) {\n  vec2 uv = xz / uShoreExtent + 0.5;\n  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec4(0.0);\n  return textureLod(uTravel, uv, 0.0);\n}\n\nfloat hash12(vec2 p) {\n  vec3 p3 = fract(vec3(p.xyx) * 0.1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\nfloat vnoise(vec2 p) {\n  vec2 i = floor(p), f = fract(p);\n  vec2 u = f * f * (3.0 - 2.0 * f);\n  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + 1.0), u.x), u.y);\n}\n\n// phase offset along the coast, the slowly drifting sets, and how much of the swell a\n// coast facing dir receives\nfloat shoreNoisePhase(vec2 xz) { return vnoise(xz * 0.0042) * 9.0 + vnoise(xz * 0.011 + 7.0) * 2.5; }\nfloat shoreGroup(vec2 xz) { return 0.45 + 0.55 * vnoise(xz * 0.004 + vec2(uTime * 0.021, -uTime * 0.017)); }\nfloat shoreExposure(vec2 dir) { return mix(0.25, 1.0, smoothstep(-0.3, 0.7, dot(dir, uSwellDir))); }\nvec2 shoreDir(vec4 sh, vec4 tr) { return dot(tr.yz, tr.yz) > 0.25 ? normalize(tr.yz) : -sh.zw / max(length(sh.zw), 1e-3); }\n", Su = "\nvec3 swash(vec2 xz, float hgt) {\n  vec4 sh = shoreSample(xz);\n  if (hgt < -0.3 || sh.y > 60.0 || uShoreWave.x <= 0.0) return vec3(0.0);\n  vec2 dir = shoreDir(sh, travelSample(xz));\n  float R = 0.55 * uShoreWave.x * shoreExposure(dir) * shoreGroup(xz) * smoothstep(0.35, 0.8, length(sh.zw));\n  if (R < 0.02) return vec3(0.0);\n  if (hgt > R) return vec3(0.0, 0.0, 0.5 * smoothstep(1.5 * R, R, hgt));   // reached by bigger sets\n  float w = sqrt(9.81 * 6.2831853 / uShoreWave.y) * uShoreWave.z;\n  // fraction of a period since the last bore reached the waterline (tau = 0 there)\n  float s = fract((w * uTime + shoreNoisePhase(xz)) / 6.2831853);\n  float eta = R * (s < 0.3 ? sin(s / 0.3 * 1.5708) : cos((s - 0.3) / 0.7 * 1.5708));\n  float th = eta - hgt;\n  float edge = s < 0.35 ? smoothstep(-0.01, 0.0, th) * (1.0 - smoothstep(0.0, 0.05, th)) : 0.0;\n  // drying since the backwash uncovered this height\n  float sPass = 0.3 + 0.7 * acos(clamp(hgt / R, 0.0, 1.0)) / 1.5708;\n  float dry = (s > sPass ? s - sPass : s + 1.0 - sPass) * 6.2831853 / w;\n  return vec3(max(th, 0.0), edge, th > 0.0 ? 1.0 : exp(-dry / 5.0));\n}\n", Cu = `
#define N_TEX ${256 .toFixed(1)}
#define PI 3.14159265359
uniform sampler2D uDisp0, uDisp1, uDisp2;           // the capillary cascade is slopes only
uniform sampler2D uSlope0, uSlope1, uSlope2, uSlope3;
uniform vec4 uLength;
uniform vec2 uWaveDamp;    // depth where long swell fully exists, chop strength in shallows
uniform vec4 uImpact[8];      // x, z, age (s), amplitude (m); amplitude 0 = free slot
uniform float uImpactSize[8]; // splash radius (m)
${xu}

// Ripple rings from objects hitting the water (Cauchy-Poisson): by stationary phase a
// point impulse gives local wavenumber k = g t^2 / (4 r^2) at radius r and phase k r, so
// long waves race ahead and short ones trail inside. A splash of radius L excites
// ~ (kL)^2 exp(-(kL)^2); kMax band-limits to what the mesh or pixel can show.
// Returns (height, dh/dx, dh/dz).
vec3 impactWaves(vec2 xz, float kMax) {
  vec3 o = vec3(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 e = uImpact[i];
    if (e.w <= 0.0) continue;
    vec2 dv = xz - e.xy;
    float r = length(dv) + 1e-3, L = uImpactSize[i];
    float k = 9.81 * e.z * e.z / (4.0 * r * r);
    float kl2 = k * k * L * L;
    float amp = e.w * 2.72 * kl2 * exp(-kl2 - k * k / (kMax * kMax) - 0.12 * e.z) * L / (L + r);
    float ph = k * r;
    o.x += amp * cos(ph);
    o.yz += dv / r * (amp * k * sin(ph));
  }
  return o;
}

// FFT cascade weights by water depth: long swell is replaced by shore waves in the
// shallows, chop survives almost to the beach.
vec3 cascadeDamp(float depth) {
  float swell = smoothstep(2.0, uWaveDamp.x, depth);
  float chop = smoothstep(-0.4, 2.0, depth) * mix(uWaveDamp.y, 1.0, smoothstep(0.0, 10.0, depth));
  return vec3(swell, chop, chop);
}

// Travelling breakers on the eikonal travel-time field (shoreMap.js): phase = w (tau + t)
// with local wavenumber w / sqrt(g depth), so fronts slow down, bunch up and bend around
// the bathymetry on their way in. Gerstner push along the propagation direction, Green's
// law + ray-tube shoaling, breaking limit A <= 0.42*depth.
// Breaking crests pitch forward of their base (plunging lip), glow where thin (lip) and
// leave lace behind in the surf zone (residual).
// wave0 = (amplitude, k, omega, phase) and breaking (0..1) of the main train, for spray
struct Shore { vec3 disp; vec2 slope; float foam; vec4 wave0; float breaking0; vec2 dir; float lip; float residual; };
Shore shoreWaves(vec2 xz, vec4 sh) {
  Shore o = Shore(vec3(0.0), vec2(0.0), 0.0, vec4(0.0), 0.0, vec2(0.0), 0.0, 0.0);
  float depth = -sh.x, sdf = sh.y;
  float gl = length(sh.zw);
  float env = smoothstep(180.0, 70.0, sdf) * smoothstep(0.35, 0.8, gl) * smoothstep(-0.9, 0.5, depth);
  if (env <= 0.0 || uShoreWave.x <= 0.0) return o;
  vec4 tr = travelSample(xz);
  vec2 dir = shoreDir(sh, tr);
  o.dir = dir;
  // coasts facing the swell get the big sets, lee shores only small ones
  env *= shoreExposure(dir);
  float shoal = dot(tr.yz, tr.yz) > 0.25 ? tr.w : pow(clamp(max(depth, 0.6) / 14.0, 0.04, 1.0), -0.25);
  float cel = sqrt(9.81 * clamp(depth, 0.3, 14.0));
  float amax = 0.42 * max(depth, 0.0) + 0.14;
  float noisePhase = shoreNoisePhase(xz);
  float group = shoreGroup(xz);
  float pinch = 0.85;   // total horizontal compression allowed (Jacobian stays > 0.15)
  for (int i = 0; i < 2; i++) {
    float lambda = uShoreWave.y * (i == 0 ? 1.0 : 0.61);
    float w = sqrt(9.81 * 2.0 * PI / lambda) * uShoreWave.z;
    float k = w / cel;
    float a = min(uShoreWave.x * (i == 0 ? 1.0 : 0.45) * env * shoal * group, amax * (i == 0 ? 1.0 : 0.5));
    float ph = w * (tr.x + uTime) + noisePhase * (i == 0 ? 1.0 : 1.37) + float(i) * 2.1;
    float c = 0.5 + 0.5 * cos(ph);
    float s = sin(ph);
    const float P = 1.6;           // narrower crests, flatter troughs
    float cp = pow(c, P - 1.0);
    float rel = a / max(depth, 0.05);
    // sections of each crest break early or late (peeling), new layout every wave
    float cycle = floor((ph + PI) / (2.0 * PI));
    float early = vnoise(xz * 0.03 + vec2(cycle * 7.3, cycle * 3.1 + float(i) * 31.0));
    float breaking = smoothstep(0.12 + 0.14 * early, 0.3 + 0.2 * early, rel);
    // plunging only around the break point; the inner surf zone runs as a bore
    float pitch = i == 0 ? 2.0 * uShoreWave.w * a * smoothstep(0.16, 0.28, rel) * (1.0 - smoothstep(0.4, 0.6, rel)) : 0.0;
    // a heightfield can't overhang: the lean (up to 1.08 pitch k of compression just
    // ahead of the crest) and both trains' Gerstner pinch share one budget, so the
    // surface never folds over into a glassy fin
    pitch = min(pitch, 0.35 / (1.08 * k));
    pinch -= 1.08 * pitch * k;
    float qak = min(pinch, uShoreWave.w * a * k * 8.0);
    pinch -= qak;
    float c5 = c * c * c * c * c;
    o.disp.y += a * (2.0 * cp * c - 0.78);
    o.disp.xz += dir * ((qak / k) * s + pitch * c5 * c);
    o.slope += dir * (a * k * P * cp * s / max(1.0 - qak * cos(ph) + 3.0 * pitch * k * c5 * s, 0.2));
    // whitewater: on the crest and trailing behind it once the wave is near breaking
    float psi = mod(ph + PI, 2.0 * PI) - PI;
    float f = breaking * smoothstep(-0.45, 0.0, psi) * exp(-max(psi, 0.0) * 0.8);
    o.foam += f;
    if (i == 0) {
      o.wave0 = vec4(a, k, w, ph);
      o.breaking0 = breaking;
      o.lip = breaking * c5 * smoothstep(0.6, -0.2, psi);
      // (the lace outlives single crests: no peeling, or it would pop between waves)
      o.residual = smoothstep(0.18, 0.4, rel) * (0.3 + 0.45 * exp(-mod(ph, 2.0 * PI) * 0.4));
    }
  }
  return o;
}

// Full surface displacement at an undisplaced xz; lod per cascade (0 = finest).
vec3 waterDisplacement(vec2 xz, vec3 lod) {
  vec4 sh = shoreSample(xz);
  vec3 damp = cascadeDamp(-sh.x);
  vec3 d = textureLod(uDisp0, xz / uLength.x, max(lod.x, 0.0)).xyz * damp.x
         + textureLod(uDisp1, xz / uLength.y, max(lod.y, 0.0)).xyz * damp.y
         + textureLod(uDisp2, xz / uLength.z, max(lod.z, 0.0)).xyz * damp.z;
  d += shoreWaves(xz, sh).disp;
  // rings at their world position; cell size back from the finest lod
  d.y += impactWaves(xz + d.xz, 2.0 * N_TEX / (exp2(lod.z - 1.0) * uLength.z)).x;
  return d;
}

// Surface at world xz: invert the choppy horizontal displacement by fixed-point
// iteration, then read the height there. Returns the displacement; .y is the height.
vec3 waterAt(vec2 q, vec3 lod) {
  vec2 p = q;
  vec3 d = vec3(0.0);
  for (int i = 0; i < 4; i++) { d = waterDisplacement(p, lod); p = q - d.xz; }
  return waterDisplacement(p, lod);
}
`, wu = Cu + `
uniform float uGridScale;
uniform float uCellStep;
uniform float uWind;
out vec3 vWorld;
out vec2 vXZ;
out float vUnresolved;

void main() {
  vec2 local = position.xz;
  float r = length(local);
  float scale = r > ${(vu * 2).toFixed(1)} ? 1.0 : uGridScale;
  vec2 xz = cameraPosition.xz + local * scale;
  float cell = max(r, ${_u.toFixed(1)}) * uCellStep * scale;

  // +1 LOD bias: box-filtered mips still leak a little past Nyquist
  vec3 d = waterDisplacement(xz, log2(cell * N_TEX / uLength.xyz) + 1.0);
  // Cox-Munk mean square slope minus what the cascades carry (each one's 1x1 mip is its
  // mean square slope): the rest is sub-texel roughness
  vec4 m0 = textureLod(uSlope0, vec2(0.5), 8.0), m1 = textureLod(uSlope1, vec2(0.5), 8.0);
  vec4 m2 = textureLod(uSlope2, vec2(0.5), 8.0), m3 = textureLod(uSlope3, vec2(0.5), 8.0);
  vUnresolved = max(0.003 + 0.00512 * uWind - (m0.z + m0.w + m1.z + m1.w + m2.z + m2.w + m3.z + m3.w), 0.0);

  vXZ = xz;
  vWorld = vec3(xz.x + d.x, d.y, xz.y + d.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`, Tu = Cu + fu + "\nprecision highp sampler2DShadow;\nuniform vec2 uResolution;\nuniform vec2 uNearFar;\nuniform sampler2D uSceneColor;\nuniform sampler2D uSceneDepth;\nuniform sampler2D uReflection;\nuniform mat4 uReflMatrix;\nuniform samplerCube uSkyCube;\nuniform float uSkyMaxLod;\nuniform sampler2D uFoamTex;\nuniform sampler2DShadow uShadowMap;\nuniform mat4 uShadowMatrix;\nuniform float uShadowBias;  // depth units\nuniform vec3 uSunDir;\nuniform vec3 uSunColor;\nuniform vec3 uAbsorption;\nuniform vec3 uScatterColor;\nuniform vec3 uFoamTint;     // thin foam: the water colour showing through the bubbles\nuniform vec4 uSSS;          // peak strength, view strength, shadow strength, -\nuniform vec4 uFoam;         // bias, scale, shore band (m), brightness\nuniform vec4 uOptics;       // base roughness, refraction strength, reflection distortion, fog density\nuniform vec3 uCamForward;\nuniform int uDebug;\nuniform float uGlint;\nuniform float uCamSide;     // -1 camera above the surface, 1 below, 0 straddling it\nin vec3 vWorld;\nin vec2 vXZ;\nin float vUnresolved;\nout vec4 fragColor;\n\nfloat linearDepth(float d) {\n  float z = d * 2.0 - 1.0;\n  return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x));\n}\n\nfloat sunShadow(vec3 p) {\n  float s = 1.0;\n  vec4 sc = uShadowMatrix * vec4(p, 1.0);\n  // one hardware 2x2 PCF tap: texels are ~0.44 m, soft enough on moving water. The water\n  // casts nothing, so the bias only has to cover depth precision.\n  if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xyz, vec3(1.0)))) s = texture(uShadowMap, vec3(sc.xy, sc.z - uShadowBias));\n  return min(s, floatShadow(p));\n}\n\n// Poisson count with mean lam from one uniform number: inverse CDF, normal (logistic)\n// approximation for large means\nfloat poisson(float lam, float u) {\n  if (lam > 6.0) return max(0.0, lam + sqrt(lam) * log(u / (1.0 - u)) / 1.702);\n  float p = exp(-lam), F = p, n = 0.0;\n  for (int k = 0; k < 14; k++) { if (u <= F) break; n += 1.0; p *= lam / n; F += p; }\n  return n;\n}\n\nvec3 skyLod(vec3 dir, float lod) {\n  dir.y = max(dir.y, 0.0);\n  return textureLod(uSkyCube, dir, lod).rgb;\n}\n\nvoid main() {\n  // folded crests flip triangles; drop faces that can't face the camera's side\n  if (gl_FrontFacing ? uCamSide > 0.5 : uCamSide < -0.5) discard;\n  vec3 toCam = cameraPosition - vWorld;\n  float dist = length(toCam);\n  vec3 V = toCam / dist;\n  vec2 uv = gl_FragCoord.xy / uResolution;\n\n  // --- surface: slopes + slope variance from the three cascades -----------------\n  vec4 sh = shoreSample(vXZ);\n  float depthBelow = -sh.x;\n  vec3 damp = cascadeDamp(depthBelow);\n  vec4 s0 = texture(uSlope0, vXZ / uLength.x) * damp.x;\n  vec4 s1 = texture(uSlope1, vXZ / uLength.y) * damp.y;\n  vec4 s2 = texture(uSlope2, vXZ / uLength.z) * damp.z;\n  vec4 s3 = texture(uSlope3, vXZ / uLength.w) * damp.z;\n  s0.zw *= damp.x; s1.zw *= damp.y; s2.zw *= damp.z; s3.zw *= damp.z;   // second moments scale by damp^2\n  Shore shore = shoreWaves(vXZ, sh);\n  vec2 fwXZ = fwidth(vXZ);\n  vec3 imp = impactWaves(vWorld.xz, 2.0 / max(max(fwXZ.x, fwXZ.y), 1e-3));\n  vec2 slope = s0.xy + s1.xy + s2.xy + s3.xy + shore.slope + imp.yz;\n  vec2 variance = max(s0.zw - s0.xy * s0.xy, 0.0) + max(s1.zw - s1.xy * s1.xy, 0.0)\n                + max(s2.zw - s2.xy * s2.xy, 0.0) + max(s3.zw - s3.xy * s3.xy, 0.0);\n  vec3 Nrm = normalize(vec3(-slope.x, 1.0, -slope.y));\n  // the normal's tilt as a screen offset: project a small world step along it\n  vec3 vp = (viewMatrix * vec4(vWorld, 1.0)).xyz;\n  vec3 dv = mat3(viewMatrix) * vec3(Nrm.x, 0.0, Nrm.z);\n  vec2 nS = dv.xy - vp.xy / vp.z * dv.z;\n\n  // geometric specular AA (Kaplanyan): normal change across the pixel adds variance\n  vec3 dndx = dFdx(Nrm), dndy = dFdy(Nrm);\n  float geoVar = min(0.25 * (dot(dndx, dndx) + dot(dndy, dndy)), 0.18);\n  float alpha2 = uOptics.x * uOptics.x + vUnresolved * damp.z * damp.z + variance.x + variance.y + geoVar;\n  float alpha = sqrt(alpha2);\n\n  float NoV = max(dot(Nrm, V), 1e-4);\n  float NoL = dot(Nrm, uSunDir);\n  float shadow = sunShadow(vWorld);\n\n  // --- foam -------------------------------------------------------------------\n  float t0 = texture(uDisp0, vXZ / uLength.x).w, t1 = texture(uDisp1, vXZ / uLength.y).w, t2 = texture(uDisp2, vXZ / uLength.z).w;\n  float jac = mix(1.0, t0, damp.x) + mix(1.0, t1, damp.y) + mix(1.0, t2, damp.z) - 2.0;\n  float foam = clamp((uFoam.x - jac) * uFoam.y, 0.0, 1.0);\n\n  // --- seen from below: Snell's window + total internal reflection ---------------\n  // (the camera->surface water column is fogged later by the underwater pass)\n  if (!gl_FrontFacing) {\n    vec3 Nu = -Nrm;\n    float cosI = dot(V, Nu);\n    // outside Snell's window total internal reflection mirrors the deep water: the same\n    // colour the underwater pass fogs towards, for the reflected direction\n    vec3 Rd = reflect(-V, Nu);\n    vec3 ambientU = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);\n    vec3 deep = uScatterColor * (ambientU + uSunColor * max(uSunDir.y, 0.0)) * mix(0.55, 1.35, Rd.y * 0.5 + 0.5);\n    vec3 colU = deep;\n    // the window edge (critical angle) blurred by the sub-pixel roughness, so rough\n    // patches fade between window and mirror instead of switching\n    const float COS_CRIT = 0.6614;   // sqrt(1 - 1/1.33^2)\n    float edge = max(alpha * 1.5, 0.02);\n    float win = smoothstep(COS_CRIT - edge, COS_CRIT + edge, cosI);\n    if (win > 0.0) {\n      vec3 Tdir = refract(-V, Nu, 1.33);\n      if (dot(Tdir, Tdir) == 0.0) Tdir = normalize(-V - Nu * dot(-V, Nu));   // grazing, just past the edge\n      float cosT = max(dot(Tdir, Nrm), 0.0);\n      float Fu = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);\n      // sky through the window is the refracted direction (the 180-degree sky squeezed\n      // into the ~97-degree cone); anything opaque above water comes from the frame\n      vec2 wuv = uv + nS * 0.04;\n      vec3 above = textureLod(uSceneDepth, wuv, 0.0).r > 0.999999\n        ? skyLod(Tdir, clamp(log2(alpha * 900.0), 0.0, uSkyMaxLod)) : textureLod(uSceneColor, wuv, 0.0).rgb;\n      // sun through the window: GGX transmission lobe, widened by the roughness\n      float aT = max(alpha * 1.4, 0.03), mu = max(dot(Tdir, uSunDir), 0.0);\n      float dT = mu * mu * (aT * aT - 1.0) + 1.0;\n      float sunLobe = aT * aT / (PI * dT * dT) * 0.25;\n      colU = mix(deep, mix(above + uSunColor * sunLobe * shadow, deep, Fu), win);\n    }\n    colU *= 1.0 - 0.55 * max(foam, clamp(shore.foam, 0.0, 1.0));\n    // alpha tags what the pixel sees for the underwater pass: 0 underside, 2 top\n    // (everything else writes 1, so MSAA edge averages never look like the other face)\n    fragColor = vec4(colU, 0.0);\n    return;\n  }\n\n  // --- refraction + absorption -------------------------------------------------\n  float waterDepth = linearDepth(gl_FragCoord.z);\n  float sceneDepth = linearDepth(textureLod(uSceneDepth, uv, 0.0).r);\n  float viewCos = max(dot(-V, uCamForward), 0.05);\n  float thick = max(sceneDepth - waterDepth, 0.0) / viewCos;\n  vec2 ruv = uv + nS * uOptics.y * clamp(thick * 0.25, 0.0, 1.0) / max(waterDepth * 0.02, 1.0);\n  float rDepth = linearDepth(textureLod(uSceneDepth, ruv, 0.0).r);\n  // the offset landed on something in front of the water: fall back towards no offset,\n  // smoothly so object edges don't get a hard outline\n  float keep = smoothstep(waterDepth - 0.3, waterDepth + 0.3, rDepth);\n  ruv = mix(uv, ruv, keep);\n  thick = mix(thick, max(rDepth - waterDepth, 0.0) / viewCos, keep);\n  vec3 refracted = textureLod(uSceneColor, ruv, 0.0).rgb;\n  vec3 T = exp(-uAbsorption * thick);\n\n  // shoreline contact foam where the water gets thin (in the shallows only: around\n  // floating props it would be a white frill)\n  float contact = (1.0 - smoothstep(0.0, uFoam.z, thick * viewCos)) * smoothstep(6.0, 2.0, depthBelow);\n  foam = max(foam, contact * 0.9);\n  float shoreFoam = clamp(shore.foam, 0.0, 1.0);\n\n  // --- lighting ------------------------------------------------------------------\n  vec3 ambient = skyLod(vec3(0.0, 1.0, 0.0), uSkyMaxLod);\n  vec3 sun = uSunColor * shadow;\n  // in-scatter of the water column (sun + sky), then Atlas-style SSS on crests\n  vec3 inscatter = uScatterColor * (ambient + uSunColor * (0.3 + 0.7 * shadow) * max(uSunDir.y, 0.0));\n  float h = max(vWorld.y, 0.0);\n  float k1 = uSSS.x * h * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * pow(0.5 - 0.5 * NoL, 3.0);\n  float k2 = uSSS.y * pow(NoV, 2.0);\n  vec3 sss = (k1 + k2) * uScatterColor * sun + uSSS.z * max(NoL, 0.0) * uScatterColor * sun;\n  // thin breaking lips: sunlight through about a metre of water glows turquoise,\n  // strongest looking into the sun\n  sss += shore.lip * sun * exp(-uAbsorption * 2.0) * 0.06 * (0.3 + 2.5 * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 3.0));\n  vec3 body = refracted * T + (inscatter + sss) * (1.0 - T);\n\n  // Fresnel with roughness-aware F90 (Lagarde) so the rough far field doesn't go white\n  const float F0 = 0.02;\n  float F90 = max(1.0 - 0.7 * sqrt(alpha), F0);\n  float F = F0 + (F90 - F0) * pow(1.0 - NoV, 5.0);\n\n  // --- reflection: half-res planar (terrain) over the sky cube -----------------------\n  vec3 R = reflect(-V, Nrm);\n  R.y = abs(R.y);\n  float lod = clamp(log2(alpha * 650.0), 0.0, uSkyMaxLod);\n  vec3 refl = skyLod(R, lod);\n  // (premultiplied: the target clears to 0, so blurred mips fade to the sky, not black)\n  vec4 pc = uReflMatrix * vec4(vWorld.x, 0.0, vWorld.z, 1.0);\n  vec2 puv = pc.xy / pc.w + nS * uOptics.z / max(1.0, waterDepth * 0.01);\n  vec4 planar = textureLod(uReflection, puv, clamp(log2(alpha * 300.0), 0.0, 6.0));\n  refl = refl * (1.0 - planar.a) + planar.rgb;\n\n  // --- sun specular: GGX, alpha floored so the sun acts as a small area light ---------\n  float aS = max(alpha, 0.015);\n  float aS2 = aS * aS;\n  vec3 H = normalize(uSunDir + V);\n  float NoH = max(dot(Nrm, H), 0.0);\n  float nl = max(NoL, 0.0);\n  float dd = NoH * NoH * (aS2 - 1.0) + 1.0;\n  float D = aS2 / (PI * dd * dd);\n  float vis = 0.5 / (nl * sqrt(NoV * NoV * (1.0 - aS2) + aS2) + NoV * sqrt(nl * nl * (1.0 - aS2) + aS2) + 1e-5);\n  float Fs = F0 + (1.0 - F0) * pow(1.0 - max(dot(V, H), 0.0), 5.0);\n  vec3 spec = sun * (PI * D * vis * Fs * nl);\n\n  // glitter: the lobe as a finite number of sub-pixel facets. Per cell of about the\n  // pixel footprint the expected count mirroring the sun is lam = facet density * area *\n  // D * (sun solid angle / 4 VoH); a Poisson draw / lam scales the smooth lobe (mean 1,\n  // energy kept). Dense cells (close to the lobe core, far away) stay smooth, sparse\n  // ones break into points; each cell crossfades between draws so they twinkle.\n  if (uGlint > 0.0 && dot(spec, vec3(1.0)) > 0.02) {\n    const float FACETS = 2e4;   // per m^2 (calibration knob)\n    float lf = log2(max(max(fwXZ.x, fwXZ.y), 1e-3)) + 1.0;\n    float l0 = floor(lf);\n    float per = FACETS * D * NoH * 6.8e-5 / (4.0 * max(dot(V, H), 0.05));\n    float m = 0.0;\n    for (int j = 0; j < 2; j++) {\n      float l = l0 + float(j), sz = exp2(l);\n      vec2 cell = floor(vXZ / sz);\n      float lam = per * sz * sz;\n      float tt = uTime * 3.0 + hash12(cell + l * 17.17) * 64.0, it = floor(tt);\n      float n0 = poisson(lam, clamp(hash12(cell * 1.31 + it * 3.7), 1e-4, 0.9999));\n      float n1 = poisson(lam, clamp(hash12(cell * 1.31 + (it + 1.0) * 3.7), 1e-4, 0.9999));\n      m += (j == 0 ? 1.0 - (lf - l0) : lf - l0) * min(mix(n0, n1, smoothstep(0.0, 1.0, tt - it)) / max(lam, 1e-4), 300.0);\n    }\n    spec *= mix(1.0, m, uGlint * smoothstep(4.0, 30.0, dist));\n  }\n\n  vec3 col = mix(body, refl, F) + spec;\n\n  // --- foam surface: eroded by age via the pattern threshold, kills specular ----------\n  // erosion: dense foam is nearly solid, ageing foam thins out to the lace network\n  // (texture taps only where there is foam; most of the ocean has none). Each source\n  // also gives a billow height + gradient (world) and a density for the shading.\n  float cover = 0.0, pat = 0.0, fh = 0.5, dens = 0.0;\n  vec2 fg = vec2(0.0);\n  if (foam > 0.0) {\n    vec4 t0 = texture(uFoamTex, vXZ * 0.11);\n    pat = t0.r * 0.65 + texture(uFoamTex, vXZ * 0.031 + 0.37).r * 0.35;\n    cover = smoothstep(1.05 - foam, 1.3 - foam, pat) * sqrt(foam);\n    fh = t0.g; fg = (t0.ba - 0.5) * 64.0 * 0.11; dens = foam;\n  }\n  if (shoreFoam > 0.0) {\n    // whitewater rides shoreward with the bore: a world-space flow map at the phase\n    // speed, two phases crossfaded every half period (which also makes it churn). On the\n    // displaced surface, so the crest pinch doesn't squash it into streaks; a coordinate\n    // tied to the front direction would shear wherever the fronts curve.\n    const float FLOW_T = 2.5;   // s\n    vec2 vel = shore.dir * shore.wave0.z / max(shore.wave0.y, 1e-3);\n    float f0 = fract(uTime / FLOW_T), f1 = fract(uTime / FLOW_T + 0.5), wb = abs(2.0 * f0 - 1.0);\n    vec4 b0 = texture(uFoamTex, (vWorld.xz - vel * (f0 * FLOW_T)) * 0.15);\n    vec4 b1 = texture(uFoamTex, (vWorld.xz - vel * (f1 * FLOW_T)) * 0.15 + 0.43);\n    float sh_ = mix(b0.g, b1.g, wb);\n    float sPattern = mix(b0.r, b1.r, wb) * 0.3 + sh_ * 0.45 + texture(uFoamTex, vWorld.xz * 0.023 + 0.5).r * 0.25;\n    float sCover = smoothstep(1.0 - shoreFoam * 1.1, 1.2 - shoreFoam * 1.1, sPattern) * sqrt(shoreFoam);\n    if (sCover >= cover) {\n      pat = sPattern; fh = sh_; dens = shoreFoam;\n      fg = mix(b0.ba, b1.ba, wb) * (64.0 * 0.15) - 32.0 * 0.15;\n    }\n    cover = max(cover, sCover);\n  }\n  if (shore.residual > 0.0) {\n    // lace left behind in the surf zone, drifting shoreward (two-phase flow map)\n    float fp = fract(uTime / 8.0);\n    vec2 drift = shore.dir * 2.8;\n    float r0 = texture(uFoamTex, (vWorld.xz - drift * fp) * 0.06).r;\n    float r1 = texture(uFoamTex, (vWorld.xz - drift * fract(fp + 0.5)) * 0.06 + 0.5).r;\n    float rp = mix(r0, r1, abs(2.0 * fp - 1.0));\n    float rCover = smoothstep(1.2 - shore.residual, 1.35 - shore.residual, rp) * shore.residual;\n    if (rCover >= cover) { pat = rp; fh = 0.5; fg = vec2(0.0); dens = shore.residual * 0.5; }\n    cover = max(cover, rCover);\n  }\n  if (cover > 0.0) {\n    // billows bump the normal (whitewater is lumpy, thin lace lies flat) and shade\n    // their creases; thin foam is a bubble film tinted by the water under it, dense foam\n    // a bright diffuse white with a little sheen on the bubble tops\n    vec3 fN = normalize(Nrm - vec3(fg.x, 0.0, fg.y) * (0.03 + 0.12 * dens));\n    float fl = dot(fN, uSunDir);\n    float ao = mix(0.45, 1.0, smoothstep(0.15, 0.75, fh));\n    float solid = smoothstep(0.2, 0.9, dens * (0.55 + 0.7 * fh));\n    vec3 foamAlbedo = mix(uFoamTint, vec3(0.95), max(solid, smoothstep(0.3, 0.9, pat) * 0.6));\n    vec3 lit = sun * (0.15 + 0.85 * clamp(fl * 0.8 + 0.2, 0.0, 1.0)) * mix(ao, 1.0, 0.4) + ambient * 1.1 * ao;\n    // sun behind the crest shines through the thin foam on top\n    lit += sun * pow(clamp(dot(uSunDir, -V), 0.0, 1.0), 4.0) * 0.4 * (1.0 - solid);\n    vec3 foamCol = uFoam.w * foamAlbedo * lit;\n    foamCol += sun * pow(max(dot(fN, H), 0.0), 90.0) * 0.5 * smoothstep(0.55, 0.85, fh) * solid;\n    col = mix(col, foamCol, cover * mix(0.8, 1.0, solid));\n  }\n\n  // --- aerial perspective into the horizon sky ---------------------------------------\n  float fog = 1.0 - exp(-dist * uOptics.w);\n  col = mix(col, skyLod(-V, 3.0), fog);\n\n  if (uDebug == 1) col = Nrm * 0.5 + 0.5;\n  else if (uDebug == 2) col = spec;\n  else if (uDebug == 3) col = vec3(foam, cover, shoreFoam);\n  else if (uDebug == 4) col = vec3(alpha * 5.0, sqrt(geoVar) * 5.0, sqrt(variance.x + variance.y) * 5.0);\n  else if (uDebug == 5) col = vec3(F);\n  else if (uDebug == 6) col = body;\n  else if (uDebug == 7) col = refl;\n  fragColor = vec4(col, 2.0);\n}", Eu = class {
	constructor(e, t, n, r) {
		this.sim = e, this.uniforms = {
			uDisp0: { value: null },
			uDisp1: { value: null },
			uDisp2: { value: null },
			uSlope0: { value: null },
			uSlope1: { value: null },
			uSlope2: { value: null },
			uSlope3: { value: null },
			uLength: { value: new X(...e.lengths) },
			uWind: { value: 0 },
			uImpact: { value: Array.from({ length: 8 }, () => new X()) },
			uImpactSize: { value: Array(8).fill(1) },
			uShore: { value: t.texture },
			uTravel: { value: t.travel },
			uShoreExtent: { value: t.extent },
			uTime: { value: 0 },
			uShoreWave: { value: new X(.55, 30, 1, 1) },
			uWaveDamp: { value: new K(26, .55) },
			uSwellDir: { value: new K(1, 0) },
			uGridScale: { value: 1 },
			uCellStep: { value: 2 * Math.PI / hu },
			uResolution: { value: new K(1, 1) },
			uNearFar: { value: new K(.5, 8e4) },
			uSceneColor: { value: null },
			uSceneDepth: { value: null },
			uReflection: { value: null },
			uReflMatrix: { value: new qt() },
			uSkyCube: { value: n.cube },
			uSkyMaxLod: { value: Math.log2(n.cubeSize) },
			uFoamTex: { value: null },
			uShadowMap: { value: null },
			uShadowMatrix: { value: new qt() },
			uShadowBias: { value: 1e-5 },
			...r,
			uSunDir: { value: n.sunDir },
			uSunColor: { value: n.sunColor },
			uAbsorption: { value: new q(.42, .075, .048) },
			uScatterColor: { value: new Z(0, .05, .08) },
			uFoamTint: { value: new Z(.62, .78, .82) },
			uSSS: { value: new X(1.6, .06, .05, 0) },
			uFoam: { value: new X(.05, 1.3, .35, .85) },
			uOptics: { value: new X(.02, .06, .04, 1 / 18e3) },
			uCamForward: { value: new q() },
			uDebug: { value: 0 },
			uGlint: { value: .6 },
			uCamSide: { value: -1 }
		}, this.material = new Ri({
			glslVersion: Ve,
			vertexShader: wu,
			fragmentShader: Tu,
			uniforms: this.uniforms,
			side: 2
		}), this.grids = [bu(hu), bu(hu / 2)], this.mesh = new Jr(this.grids[0], this.material), this.mesh.frustumCulled = !1;
	}
	update(e, t) {
		let n = this.uniforms, r = this.sim;
		n.uDisp0.value = r.displacement[0], n.uDisp1.value = r.displacement[1], n.uDisp2.value = r.displacement[2], n.uSlope0.value = r.slope[0], n.uSlope1.value = r.slope[1], n.uSlope2.value = r.slope[2], n.uSlope3.value = r.slope[3], n.uWind.value = r.params.windSpeed, n.uTime.value = t;
		let i = Tt.degToRad(r.params.swellDirection);
		n.uSwellDir.value.set(-Math.cos(i), -Math.sin(i)), n.uGridScale.value = Math.max(1, Math.abs(e.position.y) / 2);
		let a = +(Math.abs(e.position.y) > gu);
		this.mesh.geometry = this.grids[a], n.uCellStep.value = 2 * Math.PI / (hu >> a), n.uNearFar.value.set(e.near, e.far), e.getWorldDirection(n.uCamForward.value);
	}
}, Du = 0x56bc75e2d63100000;
function Ou(e, t, n, r, i) {
	let a = 0;
	r[0] = 0, i[0] = -0x56bc75e2d63100000, i[1] = Du;
	for (let n = 1; n < t; n++) {
		let t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		for (; t <= i[a];) a--, t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		a++, r[a] = n, i[a] = t, i[a + 1] = Du;
	}
	a = 0;
	for (let o = 0; o < t; o++) {
		for (; i[a + 1] < o;) a++;
		n[o] = (o - r[a]) * (o - r[a]) + e[r[a]];
	}
}
function ku(e, t) {
	let n = new Float64Array(t * t);
	for (let t = 0; t < n.length; t++) n[t] = e[t] ? 0 : Du;
	let r = new Float64Array(t), i = new Float64Array(t), a = new Int32Array(t), o = new Float64Array(t + 1);
	for (let e = 0; e < t; e++) {
		for (let i = 0; i < t; i++) r[i] = n[i * t + e];
		Ou(r, t, i, a, o);
		for (let r = 0; r < t; r++) n[r * t + e] = i[r];
	}
	for (let e = 0; e < t; e++) {
		for (let i = 0; i < t; i++) r[i] = n[e * t + i];
		Ou(r, t, i, a, o);
		for (let r = 0; r < t; r++) n[e * t + r] = i[r];
	}
	return n;
}
var Au = (e, t) => e < 0 ? 0 : e > t ? t : e;
function ju(e, t, n) {
	let r = new Float32Array(e.length), i = new Float32Array(e.length), a = 2 * n + 1, o = t - 1;
	for (let i = 0; i < t; i++) {
		let s = i * t, c = 0;
		for (let t = -n; t <= n; t++) c += e[s + Au(t, o)];
		for (let i = 0; i < t; i++) r[s + i] = c / a, c += e[s + Au(i + n + 1, o)] - e[s + Au(i - n, o)];
	}
	for (let e = 0; e < t; e++) {
		let s = 0;
		for (let i = -n; i <= n; i++) s += r[Au(i, o) * t + e];
		for (let c = 0; c < t; c++) i[c * t + e] = s / a, s += r[Au(c + n + 1, o) * t + e] - r[Au(c - n, o) * t + e];
	}
	return i;
}
function Mu(e, t) {
	let n = new Zr(e, t, t, E, _);
	return n.minFilter = n.magFilter = c, n.wrapS = n.wrapT = r, n.needsUpdate = !0, n;
}
var Nu = 9.81, Pu = .3, Fu = 14, Iu = 64, Lu = 50, Ru = 3, zu = 300, Bu = 1 / 25;
function Vu(e, t) {
	let n = t * t, r = e.slice(), i = new Uint8Array(n), a = new Int32Array(n), o = new Int32Array(n);
	for (let s = 0; s < n; s++) {
		if (e[s] || i[s]) continue;
		let c = 0, l = 0;
		for (a[c++] = s, i[s] = 1; c > 0;) {
			let r = a[--c], s = r % t;
			o[l++] = r, s > 0 && !e[r - 1] && !i[r - 1] && (i[r - 1] = 1, a[c++] = r - 1), s < t - 1 && !e[r + 1] && !i[r + 1] && (i[r + 1] = 1, a[c++] = r + 1), r >= t && !e[r - t] && !i[r - t] && (i[r - t] = 1, a[c++] = r - t), r < n - t && !e[r + t] && !i[r + t] && (i[r + t] = 1, a[c++] = r + t);
		}
		if (l < Iu) for (let e = 0; e < l; e++) r[o[e]] = 1;
	}
	return r;
}
function Hu(e, t, n, r) {
	for (let i = 0; i < t.length; i++) t[i] = Math.sqrt(Nu * Math.min(Fu, Math.max(Pu, -e[i]))), n[i] = r / t[i];
}
function Uu(e, t, n, r, i, a) {
	let o = a + 2;
	t.fill(2);
	for (let e = 0; e < a; e++) t.fill(1, (e + 1) * o + 1, (e + 1) * o + 1 + a);
	for (let s = 0; s < a; s++) for (let c = 0; c < a; c++) {
		let l = s * a + c, u = r[l], d = n[l], f = Infinity, p = Infinity;
		if (c > 0 && r[l - 1] !== u && (f = d / (d - n[l - 1])), c < a - 1 && r[l + 1] !== u && (f = Math.min(f, d / (d - n[l + 1]))), s > 0 && r[l - a] !== u && (p = d / (d - n[l - a])), s < a - 1 && r[l + a] !== u && (p = Math.min(p, d / (d - n[l + a]))), f === Infinity && p === Infinity) continue;
		let m = f === Infinity ? p : p === Infinity ? f : f * p / (Math.sqrt(f * f + p * p) || 1), h = l + 2 * s + o + 1;
		e[h] = m * i[l], t[h] = 2;
	}
}
function Wu(e, t, n, r, i, a) {
	let o = r + 2, s = 0;
	for (let c = 0, l = a > 0 ? 0 : r - 1; c < r; c++, l += a) for (let a = 0, c = i > 0 ? 0 : r - 1; a < r; a++, c += i) {
		let i = l * r + c, a = i + 2 * l + o + 1;
		if (t[a] !== 1) continue;
		t[a] = 0;
		let u = e[a - 1], d = e[a + 1], f = e[a - o], p = e[a + o], m = u < d ? u : d, h = f < p ? f : p, g = n[i], _ = m > h ? m - h : h - m, v = _ >= g ? (m < h ? m : h) + g : .5 * (m + h + Math.sqrt(2 * g * g - _ * _));
		v < e[a] - 1e-4 && (e[a] = v, s++, t[a - 1] === 0 && (t[a - 1] = 1), t[a + 1] === 0 && (t[a + 1] = 1), t[a - o] === 0 && (t[a - o] = 1), t[a + o] === 0 && (t[a + o] = 1));
	}
	return s;
}
var Gu = (e, t, n, r) => Wu(e, t, n, r, 1, 1) + Wu(e, t, n, r, -1, 1) + Wu(e, t, n, r, 1, -1) + Wu(e, t, n, r, -1, -1);
function Ku(e, t, n) {
	let r = new Float32Array(n * n);
	for (let i = 0; i < n; i++) for (let a = 0; a < n; a++) {
		let o = i * n + a, s = e[o + 2 * i + n + 3];
		r[o] = s === Infinity ? 0 : t[o] ? s : -s;
	}
	return r;
}
function qu(e, t, n, r, i, a, o) {
	for (let s = 0; s < a; s++) {
		let c = s > 0 ? -a : 0, l = s < a - 1 ? a : 0;
		for (let u = 0; u < a; u++) {
			let d = s * a + u, f = u > 0 ? -1 : 0, p = e[d + +(u < a - 1)] - e[d + f], m = e[d + l] - e[d + c], h = Math.sqrt(p * p + m * m);
			h > 1e-9 && (n[d] = -p / h, r[d] = -m / h);
			let g = Math.min(1, Math.max(0, (h / (2 * o) * t[d] - .7) / .25));
			i[d] = g * g * (3 - 2 * g);
		}
	}
}
function Ju(e, t, n, r, i) {
	let a = new Float32Array(r * r);
	for (let o = 0; o < r; o++) {
		let s = o > 0 ? -r : 0, c = o < r - 1 ? r : 0;
		for (let l = 0; l < r; l++) {
			let u = o * r + l, d = l > 0 ? -1 : 0, f = -(e[u + +(l < r - 1)] - e[u + d] + t[u + c] - t[u + s]) / (2 * i);
			a[u] = Math.min(Bu, Math.max(-.04, f)) * n[u];
		}
	}
	return a;
}
function Yu(e, t, n, r, i, a) {
	let o = i >> 1, s = new Float32Array(o * o), c = Ru * a, l = Math.ceil(2.5 * Lu / c), u = new Float32Array(l);
	for (let e = 0; e < l; e++) u[e] = Math.exp(-e * c / Lu) * c;
	for (let c = 0; c < o; c++) for (let d = 0; d < o; d++) {
		let f = 2 * d, p = 2 * c, m = p * i + f, h = Math.min(1, Math.max(0, (zu - r[m]) / 80));
		if (r[m] < -3 * a || h === 0) continue;
		let g = f, _ = p, v = 0;
		for (let r = 0; r < l; r++) {
			let a = Math.min(i - 2, g | 0), o = Math.min(i - 2, _ | 0), s = o * i + a, c = g - a, l = _ - o, d = (1 - c) * (1 - l), f = c * (1 - l), p = (1 - c) * l, m = c * l;
			if (v += u[r] * (e[s] * d + e[s + 1] * f + e[s + i] * p + e[s + i + 1] * m), g -= Ru * (t[s] * d + t[s + 1] * f + t[s + i] * p + t[s + i + 1] * m), _ -= Ru * (n[s] * d + n[s + 1] * f + n[s + i] * p + n[s + i + 1] * m), g < 0 || _ < 0 || g > i - 1 || _ > i - 1) break;
		}
		s[c * o + d] = v * h;
	}
	return s;
}
function Xu(e, t, n, r, i, a, o) {
	let s = o >> 1, c = new Float32Array(o * o * 4);
	for (let l = 0; l < o; l++) {
		let u = Math.min(s - 1, l * .5), d = Math.min(s - 2, u | 0), f = u - d;
		for (let u = 0; u < o; u++) {
			let p = Math.min(s - 1, u * .5), m = Math.min(s - 2, p | 0), h = p - m, g = d * s + m, _ = (r[g] * (1 - h) + r[g + 1] * h) * (1 - f) + (r[g + s] * (1 - h) + r[g + s + 1] * h) * f, v = l * o + u, y = 1 / Math.sqrt(Math.sqrt(Math.min(1, Math.max(.04, Math.max(-i[v], .6) / Fu))));
			c[v * 4] = e[v], c[v * 4 + 1] = t[v], c[v * 4 + 2] = n[v], c[v * 4 + 3] = Math.min(2.5, Math.max(.3, _ === 0 ? y : y * Math.exp(.5 * _))) * a[v];
		}
	}
	return c;
}
function Zu(e, t, n, r, i) {
	let a = r * r, o = Vu(t, r), s = new Float32Array(a), c = new Float64Array(a);
	Hu(e, s, c, i);
	let l = new Float64Array((r + 2) * (r + 2)).fill(Infinity), u = new Uint8Array((r + 2) * (r + 2));
	Uu(l, u, e, o, c, r);
	for (let e = 0; e < 12 && Gu(l, u, c, r) > 0; e++);
	let d = ju(ju(Ku(l, o, r), r, 2), r, 2), f = new Float32Array(a), p = new Float32Array(a), m = new Float32Array(a);
	qu(d, s, f, p, m, r, i);
	let h = ju(ju(Ju(f, p, m, r, i), r, 2), r, 2), g = ju(ju(m, r, 2), r, 2), _ = Xu(d, f, p, Yu(h, f, p, n, r, i), e, g, r);
	return {
		travel: Mu(_, r),
		travelData: _
	};
}
function Qu(e, t, n = 512) {
	let r = t / n, i = new Float32Array(n * n), a = new Uint8Array(n * n), o = new Uint8Array(n * n);
	for (let r = 0; r < n; r++) for (let s = 0; s < n; s++) {
		let c = e(((s + .5) / n - .5) * t, ((r + .5) / n - .5) * t), l = r * n + s;
		i[l] = c, a[l] = c > 0, o[l] = c <= 0;
	}
	let s = ku(a, n), c = ku(o, n), l = new Float32Array(n * n);
	for (let e = 0; e < l.length; e++) l[e] = o[e] ? (Math.sqrt(s[e]) - .5) * r : -(Math.sqrt(c[e]) - .5) * r;
	l = ju(ju(l, n, 2), n, 2);
	let u = new Float32Array(n * n * 4);
	for (let e = 0; e < n; e++) for (let t = 0; t < n; t++) {
		let a = e * n + t, o = (e, t) => l[Math.min(n - 1, Math.max(0, t)) * n + Math.min(n - 1, Math.max(0, e))];
		u[a * 4] = i[a], u[a * 4 + 1] = l[a], u[a * 4 + 2] = (o(t + 1, e) - o(t - 1, e)) / (2 * r), u[a * 4 + 3] = (o(t, e + 1) - o(t, e - 1)) / (2 * r);
	}
	return {
		texture: Mu(u, n),
		extent: t,
		data: u,
		size: n,
		...Zu(i, o, l, n, r)
	};
}
// src/water/bakeTextures.js
var $u = "\nprecision highp float;\nin vec2 vUv;\nout vec4 outColor;\nvec2 hash22(vec2 p) {\n  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.xx + p3.yz) * p3.zy);\n}\n// tileable voronoi: cell ids wrap at period\nvec2 voronoi(vec2 p, float period) {\n  vec2 i = floor(p), f = fract(p);\n  float f1 = 8.0, f2 = 8.0;\n  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {\n    vec2 g = vec2(x, y);\n    vec2 o = hash22(mod(i + g, period));\n    float d = length(g + o - f);\n    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;\n  }\n  return vec2(f1, f2);\n}\n// cauliflower whitewater: every voronoi cell bulges (dome over the distance to its\n// edge, creased where cells meet), at three scales\nfloat billow(vec2 uv) {\n  vec2 a = voronoi(uv * 7.0 + 0.3, 7.0), b = voronoi(uv * 17.0 + 0.7, 17.0), c = voronoi(uv * 41.0 + 0.1, 41.0);\n  return 0.5 * sqrt(clamp((a.y - a.x) * 2.2, 0.0, 1.0)) + 0.32 * sqrt(clamp((b.y - b.x) * 2.2, 0.0, 1.0))\n       + 0.18 * sqrt(clamp((c.y - c.x) * 2.2, 0.0, 1.0));\n}\nvoid main() {\n  vec2 a = voronoi(vUv * 9.0, 9.0);\n  vec2 b = voronoi(vUv * 23.0 + 0.5, 23.0);\n  vec2 c = voronoi(vUv * 61.0, 61.0);\n  float lace = 1.0 - smoothstep(0.0, 0.22, a.y - a.x);\n  float fine = 1.0 - smoothstep(0.0, 0.16, b.y - b.x);\n  float bubbles = smoothstep(0.55, 0.15, c.x);\n  float v = lace * 0.55 + fine * 0.3 + bubbles * 0.25 + (1.0 - a.x) * 0.25;\n  const float e = 1.0 / 1024.0;\n  vec2 g = vec2(billow(vUv + vec2(e, 0.0)) - billow(vUv - vec2(e, 0.0)), billow(vUv + vec2(0.0, e)) - billow(vUv - vec2(0.0, e))) / (2.0 * e);\n  outColor = vec4(clamp(v * 0.85, 0.0, 1.0), billow(vUv), clamp(0.5 + g / 64.0, 0.0, 1.0));\n}";
function ed(e, t, r) {
	let i = new Wt(r, r, {
		wrapS: n,
		wrapT: n,
		minFilter: u,
		magFilter: c,
		generateMipmaps: !0,
		depthBuffer: !1,
		anisotropy: e.capabilities.getMaxAnisotropy()
	}), a = Zl(t);
	return new Ql(a).render(e, i), a.dispose(), e.setRenderTarget(null), i.texture;
}
function td(e) {
	return { foam: ed(e, $u, 512) };
}
// src/scene/atmosphere.js
var nd = 6360, rd = 6460, id = .01, ad = 256, od = 64, sd = 32, cd = 192, ld = 108;
function ud(e) {
	let t = e.turbidity * e.turbidity;
	return {
		rayleigh: [
			.005802,
			.013558,
			.0331
		].map((t) => t * e.rayleigh),
		mieScattering: .003996 * t,
		mieExtinction: .00444 * t,
		ozone: [
			65e-5,
			.001881,
			85e-6
		]
	};
}
function dd(e, t, n) {
	let r = e * (2 * nd + e) + n * (2 * (nd + e) * t + n);
	return r / (Math.sqrt(nd * nd + r) + nd);
}
function fd(e, t, n, r = [
	0,
	0,
	0
]) {
	let i = nd + t, a = Math.max(-i * n + Math.sqrt(Math.max(i * i * (n * n - 1) + rd * rd, 0)), 0), o = [
		0,
		0,
		0
	];
	for (let r = 0; r < 40; r++) {
		let i = Math.max(dd(t, n, a * ((r + .5) / 40) ** 2), 0), s = (2 * r + 1) * a / 1600, c = Math.exp(-i / 8) * s, l = Math.exp(-i / 1.2) * s, u = Math.max(0, 1 - Math.abs(i - 25) / 15) * s;
		for (let t = 0; t < 3; t++) o[t] += e.rayleigh[t] * c + e.mieExtinction * l + e.ozone[t] * u;
	}
	for (let e = 0; e < 3; e++) r[e] = Math.exp(-o[e]);
	return r;
}
var pd = id, md = `
precision highp float;
precision highp sampler2D;
#define PI 3.14159265359
const float RB = ${nd.toFixed(1)}, RT = ${rd.toFixed(1)}, OBS_H = ${id};
const float H_TOP = ${Math.sqrt(rd * rd - nd * nd).toFixed(4)};  // sqrt(RT^2 - RB^2)
const float MIE_G = 0.8;
const float GROUND_ALBEDO = 0.1;
const vec2 SKY_RES = vec2(${cd}.0, ${ld}.0);
uniform vec3 uRayleigh;     // Rayleigh scattering at sea level (1/km)
uniform vec2 uMie;          // aerosol scattering, extinction at sea level (1/km)
uniform vec3 uOzone;        // ozone absorption at the layer peak (1/km)
uniform float uSunIllum;    // sun illuminance outside the atmosphere
uniform sampler2D uTransLut;
uniform sampler2D uMsLut;
uniform sampler2D uSkyView;

vec2 toSub(vec2 u, vec2 n) { return u * (n - 1.0) / n + 0.5 / n; }
vec2 fromSub(vec2 u, vec2 n) { return (u - 0.5 / n) * n / (n - 1.0); }

// altitude after travelling t along a ray from altitude h with zenith cosine mu; r = radius
float altAt(float h, float mu, float t, out float r) {
  float q = h * (2.0 * RB + h) + t * (2.0 * (RB + h) * mu + t);  // r^2 - RB^2 without cancellation
  r = sqrt(RB * RB + q);
  return q / (r + RB);
}

struct Medium { vec3 ray; float mie; vec3 scat; vec3 ext; };
Medium medium(float h) {
  h = max(h, 0.0);
  float dM = exp(-h / 1.2);
  Medium m;
  m.ray = uRayleigh * exp(-h / 8.0);
  m.mie = uMie.x * dM;
  m.scat = m.ray + m.mie;
  m.ext = m.ray + uMie.y * dM + uOzone * max(0.0, 1.0 - abs(h - 25.0) / 15.0);  // ozone: tent 10..40 km
  return m;
}

float distTop(float r, float mu) { return max(-r * mu + sqrt(max(r * r * (mu * mu - 1.0) + RT * RT, 0.0)), 0.0); }

// Bruneton's transmittance parameterisation (covers the rays that miss the ground)
vec2 transUv(float h, float mu) {
  float r = RB + h, rho = sqrt(max(h, 0.0) * (2.0 * RB + h));
  float dMin = RT - r, dMax = rho + H_TOP;
  return vec2((distTop(r, mu) - dMin) / (dMax - dMin), rho / H_TOP);
}
vec3 transmittance(float h, float mu) { return textureLod(uTransLut, transUv(h, mu), 0.0).rgb; }

// 0 where the planet hides the sun from altitude h (radius r)
float sunVisible(float h, float r, float muS) { return step(-sqrt(max(h, 0.0) * (2.0 * RB + h)) / r, muS); }

// sky-view LUT, upper hemisphere only (the observer is at sea level): u = sqrt of the azimuth
// cosine to the sun, v = sqrt(elevation / 90deg) so texels crowd the horizon
vec3 skyView(vec3 d, vec3 sunDir) {
  float v = sqrt(asin(clamp(d.y, 0.0, 1.0)) / (0.5 * PI));
  float cosPhi = dot(d.xz, sunDir.xz) * inversesqrt(max(dot(d.xz, d.xz) * dot(sunDir.xz, sunDir.xz), 1e-12));
  float u = sqrt(clamp(0.5 - 0.5 * cosPhi, 0.0, 1.0));
  return textureLod(uSkyView, toSub(vec2(u, v), SKY_RES), 0.0).rgb;
}
`, hd = "\nin vec2 vUv;\nout vec4 fragColor;\n", gd = `
float rayleighPhase(float c) { return 0.0596831 * (1.0 + c * c); }
float miePhase(float c) {
  float k = 1.0 + MIE_G * MIE_G - 2.0 * MIE_G * c;
  return (1.0 - MIE_G * MIE_G) / (4.0 * PI * k * sqrt(k));
}
vec3 multiScatter(float h, float muS) {
  vec2 uv = clamp(vec2(muS * 0.5 + 0.5, h / (RT - RB)), 0.0, 1.0);
  return textureLod(uMsLut, toSub(uv, vec2(${sd}.0)), 0.0).rgb;
}
vec3 integrate(float h, float mu, float muS, float nu, int n, out vec3 fms) {
  float r0 = RB + h;
  float gd = r0 * r0 * (mu * mu - 1.0) + RB * RB;
  bool ground = mu < 0.0 && gd >= 0.0;
  float tMax = ground ? max(-r0 * mu - sqrt(gd), 0.0) : distTop(r0, mu);
#ifdef MS_PASS
  float pR = 1.0 / (4.0 * PI), pM = pR;
#else
  float pR = rayleighPhase(nu), pM = miePhase(nu);
#endif
  vec3 L = vec3(0.0), T = vec3(1.0);
  fms = vec3(0.0);
  float k = tMax / float(n * n);
  for (int i = 0; i < n; i++) {
    float fi = float(i);
    float t = k * (fi + 0.5) * (fi + 0.5), dt = k * (2.0 * fi + 1.0);
    float r;
    float ht = altAt(h, mu, t, r);
    float muSt = clamp((r0 * muS + t * nu) / r, -1.0, 1.0);
    Medium m = medium(ht);
    vec3 S = transmittance(ht, muSt) * sunVisible(ht, r, muSt) * (m.ray * pR + m.mie * pM);
#ifndef MS_PASS
    S += m.scat * multiScatter(ht, muSt);
#endif
    vec3 Ts = exp(-m.ext * dt);
    vec3 seg = (1.0 - Ts) / max(m.ext, vec3(1e-7));
    L += T * S * seg;
    fms += T * m.scat * seg;
    T *= Ts;
  }
#ifdef MS_PASS
  if (ground) {
    float muSg = clamp((r0 * muS + tMax * nu) / RB, -1.0, 1.0);
    L += T * transmittance(0.0, muSg) * max(muSg, 0.0) * (GROUND_ALBEDO / PI);
  }
#endif
  return L;
}
`, _d = md + hd + "\nvoid main() {\n  float rho = H_TOP * vUv.y;\n  float r = sqrt(rho * rho + RB * RB), h = rho * rho / (r + RB);\n  float dMin = RT - r, d = mix(dMin, rho + H_TOP, vUv.x);\n  float mu = d <= 0.0 ? 1.0 : clamp((H_TOP * H_TOP - rho * rho - d * d) / (2.0 * r * d), -1.0, 1.0);\n  vec3 od = vec3(0.0);\n  for (int i = 0; i < 40; i++) {\n    float fi = float(i), rr;\n    od += medium(altAt(h, mu, d * (fi + 0.5) * (fi + 0.5) / 1600.0, rr)).ext * (2.0 * fi + 1.0);\n  }\n  fragColor = vec4(exp(-od * (d / 1600.0)), 1.0);\n}", vd = "#define MS_PASS\n" + md + hd + gd + `
void main() {
  vec2 uv = fromSub(vUv, vec2(${sd}.0));
  float muS = uv.x * 2.0 - 1.0, h = max(uv.y * (RT - RB), OBS_H);
  float sinS = sqrt(max(1.0 - muS * muS, 0.0));
  vec3 L = vec3(0.0), F = vec3(0.0), fms;
  for (int j = 0; j < 8; j++) {
    float mu = 1.0 - 2.0 * (float(j) + 0.5) / 8.0, sinV = sqrt(1.0 - mu * mu);
    for (int i = 0; i < 8; i++) {
      float nu = cos(2.0 * PI * (float(i) + 0.5) / 8.0) * sinV * sinS + mu * muS;
      L += integrate(h, mu, muS, nu, 20, fms);
      F += fms;
    }
  }
  fragColor = vec4((L / 64.0) / (1.0 - F / 64.0), 1.0);
}`, yd = md + hd + gd + "\nuniform float uSunMu;\nvoid main() {\n  vec2 uv = fromSub(vUv, SKY_RES);\n  float cosPhi = 1.0 - 2.0 * uv.x * uv.x, elev = 0.5 * PI * uv.y * uv.y;\n  float mu = sin(elev), cosE = cos(elev);\n  vec3 v = vec3(cosE * cosPhi, mu, cosE * sqrt(max(1.0 - cosPhi * cosPhi, 0.0)));\n  vec3 s = vec3(sqrt(max(1.0 - uSunMu * uSunMu, 0.0)), uSunMu, 0.0);\n  vec3 fms;\n  fragColor = vec4(integrate(OBS_H, mu, uSunMu, dot(v, s), 32, fms) * uSunIllum, 1.0);\n}", bd = (e, t) => new Wt(e, t, {
	type: v,
	depthBuffer: !1,
	generateMipmaps: !1,
	minFilter: c,
	magFilter: c
}), xd = class {
	constructor() {
		this.transRT = bd(ad, od), this.msRT = bd(sd, sd), this.skyRT = bd(cd, ld), this.uniforms = {
			uRayleigh: { value: new q() },
			uMie: { value: new K() },
			uOzone: { value: new q() },
			uSunIllum: { value: 1 },
			uTransLut: { value: this.transRT.texture },
			uMsLut: { value: this.msRT.texture },
			uSkyView: { value: this.skyRT.texture }
		};
		let { uTransLut: e, uMsLut: t, uSkyView: n, ...r } = this.uniforms;
		this.transPass = new Ql(Zl(_d, r)), this.msPass = new Ql(Zl(vd, {
			...r,
			uTransLut: e
		})), this.skyPass = new Ql(Zl(yd, {
			...r,
			uTransLut: e,
			uMsLut: t,
			uSunMu: { value: 0 }
		}));
	}
	update(e, t, n, r) {
		let i = this.uniforms;
		i.uRayleigh.value.fromArray(t.rayleigh), i.uMie.value.set(t.mieScattering, t.mieExtinction), i.uOzone.value.fromArray(t.ozone), i.uSunIllum.value = r, this.skyPass.material.uniforms.uSunMu.value = n, this.transPass.render(e, this.transRT), this.msPass.render(e, this.msRT), this.skyPass.render(e, this.skyRT);
	}
}, Sd = 1024, Cd = 2.5, wd = "\nout vec3 vDir;\nvoid main() {\n  vDir = position;\n  vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);\n  gl_Position = p.xyww; // far plane\n}", Td = "\nuniform samplerCube uCube;\nuniform vec3 uSunDir;\nuniform vec3 uSunColor;\nin vec3 vDir;\nout vec4 fragColor;\nvoid main() {\n  vec3 d = normalize(vDir);\n  vec4 sky = textureLod(uCube, vec3(d.x, max(d.y, 0.0), d.z), 0.0);\n  float c = dot(d, uSunDir);\n  // 0.27 deg disc with limb darkening, plus a tight glow; hidden by clouds (cube alpha)\n  float disc = smoothstep(0.999985, 0.999992, c) * (0.6 + 0.4 * smoothstep(0.999985, 1.0, c));\n  vec3 col = sky.rgb + uSunColor * (disc * 900.0 + pow(max(c, 0.0), 2200.0) * 1.5) * step(0.0, d.y) * sky.a;\n  fragColor = vec4(col, 1.0);\n}", Ed = md + `
const float CLOUD_H = ${Cd.toFixed(2)};
const vec3 WATER = vec3(0.02, 0.035, 0.045);  // deep-water body reflectance for the lower hemisphere
uniform int uFace;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uCloudCoverage;
in vec2 vUv;
out vec4 fragColor;

vec3 faceDir(vec2 uv) {
  vec2 c = uv * 2.0 - 1.0;
  if (uFace == 0) return vec3(1.0, -c.y, -c.x);
  if (uFace == 1) return vec3(-1.0, -c.y, c.x);
  if (uFace == 2) return vec3(c.x, 1.0, c.y);
  if (uFace == 3) return vec3(c.x, -1.0, -c.y);
  if (uFace == 4) return vec3(c.x, -c.y, 1.0);
  return vec3(-c.x, -c.y, -1.0);
}

// cloud layer ported from three's Sky.js (static: time = 0, its cloudScale/elevation/density)
vec2 gradient(vec2 i) {
  vec3 p = fract(i.xyx * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yzx + 33.33);
  return fract((p.xx + p.yz) * p.zy) * 2.0 - 1.0;
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradient(i), f);
  float b = dot(gradient(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(gradient(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(gradient(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.6;
}
float fbm(vec2 p) {
  float s = 0.0, a = 1.0;
  for (int i = 0; i < 4; i++) { s += a * noise(p); a *= 0.5; p *= 2.0; }
  return s;
}

void main() {
  vec3 d = normalize(faceDir(vUv));
  vec3 up = skyView(vec3(0.0, 1.0, 0.0), uSunDir);
  if (d.y < 0.0) {
    // below the horizon: sea, Fresnel between the mirrored sky and a dark water body
    float F = 0.02 + 0.98 * pow(1.0 + d.y, 5.0);
    vec3 body = WATER * (uSunColor * max(uSunDir.y, 0.0) + up);
    fragColor = vec4(mix(body, skyView(vec3(d.x, -d.y, d.z), uSunDir), F), 1.0);
    return;
  }
  vec3 col = skyView(d, uSunDir);
  float vis = 1.0;
  if (d.y > 1e-3 && uCloudCoverage > 0.0) {
    vec2 p = d.xz / d.y * 0.396;   // cloudScale 2e-4 * 1000 / mix(1, 0.1, cloudElevation 0.55)
    float n = clamp(fbm(p) * 0.7 + 0.5, 0.0, 1.0);
    float th = 1.0 - clamp(uCloudCoverage + noise(p * 0.3) * 0.222, 0.0, 1.0);  // clear gaps / dense banks
    float fade = smoothstep(0.0, 0.063, d.y);
    float mask = smoothstep(th, th + 0.3, n) * fade;
    float depth = max(0.0, n - th);
    float beer = exp(-4.0 * depth);
    float shade = mix(0.45, 1.0, clamp(beer * (1.0 - beer * beer) * 2.6, 0.0, 1.0));  // beer-powder
    float c = dot(d, uSunDir);
    float silver = clamp(0.51 / pow(1.49 - c * 1.4, 1.5), 0.0, 3.0);  // HG g = 0.7 rim toward the sun
    float edge = mask * (1.0 - mask) * 4.0;
    float alpha = (1.0 - exp(-depth * 6.6)) * fade;                    // cloudDensity 0.55

    // the deck point along d: sunlight through the atmosphere (and planet shadow) to it, and the
    // eye-to-deck transmittance so distant clouds dissolve into the haze
    float r0 = RB + OBS_H, rc = RB + CLOUD_H;
    float t = -r0 * d.y + sqrt(r0 * r0 * d.y * d.y + (rc - r0) * (rc + r0));
    float muV = (r0 * d.y + t) / rc;
    float muS = clamp((r0 * uSunDir.y + t * c) / rc, -1.0, 1.0);
    vec3 sun = uSunIllum * transmittance(CLOUD_H, muS) * sunVisible(CLOUD_H, rc, muS) * 0.22;  // albedo/pi
    vec3 cloud = up + sun * (shade + silver * edge * 0.6);
    vec3 tv = clamp(transmittance(OBS_H, d.y) / max(transmittance(CLOUD_H, muV), vec3(1e-4)), 0.0, 1.0);
    col = mix(col, mix(col, cloud, tv), alpha);
    vis = 1.0 - alpha;
  }
  fragColor = vec4(col, vis);
}`, Dd = class {
	constructor(e) {
		this.renderer = e, this.cubeSize = Sd, this.sunDir = new q(0, 1, 0), this.sunColor = new q(1, 1, 1), this.params = {
			elevation: 3.5,
			azimuth: 205,
			turbidity: 2,
			rayleigh: 1,
			cloudCoverage: .38,
			sunIntensity: 9
		}, this.atmosphere = new xd(), this.cubeRT = new wo(Sd, {
			type: v,
			generateMipmaps: !0,
			depthBuffer: !1,
			minFilter: u,
			magFilter: c
		}), this.cube = this.cubeRT.texture, this.cubePass = new Ql(Zl(Ed, {
			...this.atmosphere.uniforms,
			uFace: { value: 0 },
			uSunDir: { value: this.sunDir },
			uSunColor: { value: this.sunColor },
			uCloudCoverage: { value: 0 }
		})), this.camera = new ga(), this.background = new Jr(new Si(1, 1, 1), new Ri({
			glslVersion: Ve,
			vertexShader: wd,
			fragmentShader: Td,
			uniforms: {
				uCube: { value: this.cube },
				uSunDir: { value: this.sunDir },
				uSunColor: { value: this.sunColor }
			},
			side: 1,
			depthWrite: !1
		})), this.background.frustumCulled = !1, this.background.renderOrder = 1e3;
	}
	update() {
		let e = this.params, t = this.renderer, n = Tt.degToRad(90 - e.elevation), r = Tt.degToRad(e.azimuth);
		this.sunDir.setFromSphericalCoords(1, n, r);
		let i = ud(e), a = fd(i, pd, Math.max(this.sunDir.y, 0)), o = Tt.smoothstep(e.elevation, -2, 2);
		this.sunColor.set(a[0], a[1], a[2]).multiplyScalar(e.sunIntensity * o);
		let s = t.getRenderTarget(), c = t.getActiveCubeFace(), l = t.getActiveMipmapLevel();
		this.atmosphere.update(t, i, this.sunDir.y, Math.PI * e.sunIntensity);
		let u = this.cubePass.material.uniforms;
		u.uCloudCoverage.value = e.cloudCoverage;
		for (let e = 0; e < 6; e++) u.uFace.value = e, this.cube.generateMipmaps = e === 5, t.setRenderTarget(this.cubeRT, e), t.render(this.cubePass.mesh, this.camera);
		t.setRenderTarget(s, c, l), this.cube.needsPMREMUpdate = !0;
	}
};
// node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function Od(e, t = !1) {
	let n = e[0].index !== null, r = new Set(Object.keys(e[0].attributes)), i = new Set(Object.keys(e[0].morphAttributes)), a = {}, o = {}, s = e[0].morphTargetsRelative, c = new wr(), l = 0;
	for (let u = 0; u < e.length; ++u) {
		let d = e[u], f = 0;
		if (n !== (d.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
		for (let e in d.attributes) {
			if (!r.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". All geometries must have compatible attributes; make sure \"" + e + "\" attribute exists among all geometries, or in none of them."), null;
			a[e] === void 0 && (a[e] = []), a[e].push(d.attributes[e]), f++;
		}
		if (f !== r.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". Make sure all geometries have the same number of attributes."), null;
		if (s !== d.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
		for (let e in d.morphAttributes) {
			if (!i.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ".  .morphAttributes must be consistent throughout all geometries."), null;
			o[e] === void 0 && (o[e] = []), o[e].push(d.morphAttributes[e]);
		}
		if (t) {
			let e;
			if (n) e = d.index.count;
			else if (d.attributes.position !== void 0) e = d.attributes.position.count;
			else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + u + ". The geometry must have either an index or a position attribute"), null;
			c.addGroup(l, e, u), l += e;
		}
	}
	if (n) {
		let t = 0, n = [];
		for (let r = 0; r < e.length; ++r) {
			let i = e[r].index;
			for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
			t += e[r].attributes.position.count;
		}
		c.setIndex(n);
	}
	for (let e in a) {
		let t = kd(a[e]);
		if (!t) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + e + " attribute."), null;
		c.setAttribute(e, t);
	}
	for (let e in o) {
		let t = o[e][0].length;
		if (t !== 0) {
			c.morphAttributes = c.morphAttributes || {}, c.morphAttributes[e] = [];
			for (let n = 0; n < t; ++n) {
				let t = [];
				for (let r = 0; r < o[e].length; ++r) t.push(o[e][r][n]);
				let r = kd(t);
				if (!r) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + e + " morphAttribute."), null;
				c.morphAttributes[e].push(r);
			}
		}
	}
	return c;
}
function kd(e) {
	let t, n, r, i = -1, a = 0;
	for (let o = 0; o < e.length; ++o) {
		let s = e[o];
		if (t === void 0 && (t = s.array.constructor), t !== s.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
		if (n === void 0 && (n = s.itemSize), n !== s.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
		if (r === void 0 && (r = s.normalized), r !== s.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
		if (i === -1 && (i = s.gpuType), i !== s.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
		a += s.count * n;
	}
	let o = new t(a), s = new lr(o, n, r), c = 0;
	for (let t = 0; t < e.length; ++t) {
		let r = e[t];
		if (r.isInterleavedBufferAttribute) {
			let e = c / n;
			for (let t = 0, i = r.count; t < i; t++) for (let i = 0; i < n; i++) {
				let n = r.getComponent(t, i);
				s.setComponent(t + e, i, n);
			}
		} else o.set(r.array, c);
		c += r.count * n;
	}
	return i !== void 0 && (s.gpuType = i), s;
}
function Ad(e, t = 1e-4) {
	t = Math.max(t, 2 ** -52);
	let n = {}, r = e.getIndex(), i = e.getAttribute("position"), a = r ? r.count : i.count, o = 0, s = Object.keys(e.attributes), c = {}, l = {}, u = [], d = [
		"getX",
		"getY",
		"getZ",
		"getW"
	], f = [
		"setX",
		"setY",
		"setZ",
		"setW"
	];
	for (let t = 0, n = s.length; t < n; t++) {
		let n = s[t], r = e.attributes[n];
		c[n] = new r.constructor(new r.array.constructor(r.count * r.itemSize), r.itemSize, r.normalized);
		let i = e.morphAttributes[n];
		i && (l[n] || (l[n] = []), i.forEach((e, t) => {
			let r = new e.array.constructor(e.count * e.itemSize);
			l[n][t] = new e.constructor(r, e.itemSize, e.normalized);
		}));
	}
	let p = t * .5, m = 10 ** Math.log10(1 / t), h = p * m;
	for (let t = 0; t < a; t++) {
		let i = r ? r.getX(t) : t, a = "";
		for (let t = 0, n = s.length; t < n; t++) {
			let n = s[t], r = e.getAttribute(n), o = r.itemSize;
			for (let e = 0; e < o; e++) a += `${Math.trunc(r[d[e]](i) * m + h)},`;
		}
		if (a in n) u.push(n[a]);
		else {
			for (let t = 0, n = s.length; t < n; t++) {
				let n = s[t], r = e.getAttribute(n), a = e.morphAttributes[n], u = r.itemSize, p = c[n], m = l[n];
				for (let e = 0; e < u; e++) {
					let t = d[e], n = f[e];
					if (p[n](o, r[t](i)), a) for (let e = 0, r = a.length; e < r; e++) m[e][n](o, a[e][t](i));
				}
			}
			n[a] = o, u.push(o), o++;
		}
	}
	let g = e.clone();
	for (let t in e.attributes) {
		let e = c[t];
		if (g.setAttribute(t, new e.constructor(e.array.slice(0, o * e.itemSize), e.itemSize, e.normalized)), t in l) for (let e = 0; e < l[t].length; e++) {
			let n = l[t][e];
			g.morphAttributes[t][e] = new n.constructor(n.array.slice(0, o * n.itemSize), n.itemSize, n.normalized);
		}
	}
	return g.setIndex(u), g;
}
// src/scene/noise.js
function jd(e, t, n) {
	let r = Math.imul(e, 374761393) ^ Math.imul(t, 668265263) ^ Math.imul(n, 2147483647);
	return r = Math.imul(r ^ r >>> 13, 1274126177), ((r ^ r >>> 16) >>> 0) / 4294967295;
}
function Md(e, t, n = 0) {
	let r = Math.floor(e), i = Math.floor(t), a = e - r, o = t - i, s = a * a * (3 - 2 * a), c = o * o * (3 - 2 * o), l = jd(r, i, n), u = jd(r + 1, i, n), d = jd(r, i + 1, n), f = jd(r + 1, i + 1, n);
	return (l + (u - l) * s + (d - l) * c + (l - u - d + f) * s * c) * 2 - 1;
}
function Nd(e, t, n = 5, r = 0) {
	let i = 0, a = .5, o = 0;
	for (let s = 0; s < n; s++) {
		i += a * Md(e, t, r + s * 17), o += a;
		let n = 1.6 * e - 1.2 * t, c = 1.2 * e + 1.6 * t;
		e = n, t = c, a *= .5;
	}
	return i / o;
}
function Pd(e, t, n = 5, r = 0) {
	let i = 0, a = .5, o = 0;
	for (let s = 0; s < n; s++) {
		let n = 1 - Math.abs(Md(e, t, r + s * 31));
		i += a * n * n, o += a;
		let c = 1.6 * e - 1.2 * t, l = 1.2 * e + 1.6 * t;
		e = c, t = l, a *= .5;
	}
	return i / o;
}
// src/scene/islandHeight.js
var Fd = 2400, Id = (e, t, n) => {
	let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
	return r * r * (3 - 2 * r);
};
function Ld(e, t) {
	let n = Nd(e * .0035 + 11.3, t * .0035 - 4.1, 4, 3), r = Math.hypot(e - 40 * n, t + 30 * n) * (1 + .32 * Nd(e * .003, t * .003, 3, 7)), i = 62 * Math.exp(-((r / 190) ** 2)) + 15 * Math.exp(-((r / 430) ** 2)) - 10;
	i -= 32 * Id(380, 1100, r);
	let a = Id(4, 40, i);
	return i += a * 26 * (Pd(e * .009, t * .009, 5, 1) - .45), i > 0 && i < 5 ? i *= .55 + .09 * i : i <= 0 && i > -14 && (i = -14 * (-i / 14) ** 1.8), i += 1.2 * Nd(e * .05, t * .05, 3, 9) * Id(-30, 2, i), i;
}
// src/scene/terrainGeometry.js
function Rd(e = 384, t = 256) {
	let n = new ki(Fd, Fd, e, e);
	n.rotateX(-Math.PI / 2);
	let i = n.attributes.position;
	for (let e = 0; e < i.count; e++) i.setY(e, Ld(i.getX(e), i.getZ(e)));
	let a = n.index.array, o = [];
	for (let e = 0; e < a.length; e += 3) Math.max(i.getY(a[e]), i.getY(a[e + 1]), i.getY(a[e + 2])) > -34 && o.push(a[e], a[e + 1], a[e + 2]);
	n.setIndex(o), n.computeVertexNormals(), n.computeBoundingSphere();
	let s = new Float32Array(t * t);
	for (let e = 0; e < t; e++) for (let n = 0; n < t; n++) {
		let r = ((n + .5) / t - .5) * Fd, i = ((e + .5) / t - .5) * Fd;
		s[e * t + n] = Ld(r, i);
	}
	let l = new Zr(s, t, t, k, _);
	return l.minFilter = l.magFilter = c, l.wrapS = l.wrapT = r, l.needsUpdate = !0, {
		geometry: n,
		heightMap: l
	};
}
// src/water/Caustics.js
var zd = eu[2], Bd = 1 / 1.33, Vd = 16, Hd = [{
	res: 512,
	format: k
}, {
	res: 256,
	format: j
}], Ud = [
	{
		depth: 1.5,
		target: 0,
		channel: 0,
		cells: 128,
		margin: 6
	},
	{
		depth: 4,
		target: 1,
		channel: 0,
		cells: 64,
		margin: 7
	},
	{
		depth: 10,
		target: 1,
		channel: 1,
		cells: 32,
		margin: 8
	}
], Wd = (e) => e.toPrecision(9), [Gd, Kd, qd] = Ud.map((e) => Wd(e.depth)), Jd = `
precision highp float;
in vec3 position;               // PlaneGeometry vertex: cell coords - uCells / 2
uniform highp sampler2D uSlope; // cascade 2 (sx, sz, ...)
uniform vec3 uSun;              // towards the sun
uniform float uDepth, uCells, uLod, uMargin, uRes;
out vec2 vOld;

// cubic B-spline from 4 bilinear taps (GPU Gems 2, ch. 20). The landed intensity goes
// with the slope's derivative, which bilinear makes piecewise constant: every slope texel
// would land as its own bead along the caustic lines.
vec2 slopeBSpline(vec2 uv, float lod) {
  vec2 size = vec2(textureSize(uSlope, int(lod)));
  vec2 st = uv * size - 0.5, i = floor(st), f = st - i;
  vec2 f2 = f * f, f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0, w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0, w3 = f3 / 6.0;
  vec2 g0 = w0 + w1, g1 = w2 + w3;
  vec2 h0 = (i - 0.5 + w1 / g0) / size, h1 = (i + 1.5 + w3 / g1) / size;
  return g0.y * (g0.x * textureLod(uSlope, h0, lod).xy + g1.x * textureLod(uSlope, vec2(h1.x, h0.y), lod).xy)
       + g1.y * (g0.x * textureLod(uSlope, vec2(h0.x, h1.y), lod).xy + g1.x * textureLod(uSlope, h1, lod).xy);
}

void main() {
  vec2 t = (position.xy + 0.5 * uCells + 0.5) / uCells;   // tile uv, at a texel centre of mip uLod
  vec2 s = slopeBSpline(t, uLod);
  vec3 r = refract(-uSun, normalize(vec3(-s.x, 1.0, -s.y)), ${Wd(Bd)});
  vec3 rf = refract(-uSun, vec3(0.0, 1.0, 0.0), ${Wd(Bd)});
  vec2 d = (r.xz / max(-r.y, 0.05) - rf.xz / -rf.y) * (uDepth / ${Wd(zd)});
  // ponytail: offsets past the margin (steep facets at low sun) are clamped, widen the margin if it shows
  d = clamp(d, -uMargin, uMargin);
  vOld = t * uRes;
  gl_Position = vec4((t + d) * 2.0 - 1.0, 0.0, 1.0);
}`, Yd = `
precision highp float;
uniform vec3 uMask;
in vec2 vOld;
out vec4 outColor;

void main() {
  // raster space is the landed space at one texel per pixel, so the landed area is 1 and
  // the ratio is the undisturbed area (in texels) per pixel
  vec2 a = dFdx(vOld), b = dFdy(vOld);
  outColor = vec4(uMask * min(abs(a.x * b.y - a.y * b.x), ${Wd(Vd)}), 0.0);
}`, Xd = `
uniform sampler2D uCaustics, uCausticsDeep;
const float CAUSTIC_TEXELS_PER_M = ${Wd(Hd[0].res / zd)};
float waveCaustic(vec2 entryXZ, float depth, float lod) {
  vec2 uv = entryXZ * ${Wd(1 / zd)};
  float v = textureLod(uCaustics, uv, lod).r;
  if (depth > ${Gd}) {
    // deep texels are 2x the near ones; past the deepest slice keep it, one mip blurrier
    // per doubling of depth
    vec2 d = textureLod(uCausticsDeep, uv, max(lod - 1.0, 0.0) + log2(max(depth / ${qd}, 1.0))).rg;
    v = depth < ${Kd} ? mix(v, d.r, (depth - ${Gd}) / (${Kd} - ${Gd}))
                      : mix(d.r, d.g, clamp((depth - ${Kd}) / (${qd} - ${Kd}), 0.0, 1.0));
  }
  return mix(1.0, v, clamp(depth / ${Gd}, 0.0, 1.0));   // no caustic at zero depth
}
`, Zd = new Z(), Qd = class {
	constructor(e, t) {
		this.renderer = e, this.sim = t, this.targets = Hd.map(({ res: e, format: t }) => new Wt(e, e, {
			type: v,
			format: t,
			samples: 4,
			minFilter: u,
			magFilter: c,
			wrapS: n,
			wrapT: n,
			generateMipmaps: !0,
			depthBuffer: !1
		})), this.uniforms = {
			uCaustics: { value: this.targets[0].texture },
			uCausticsDeep: { value: this.targets[1].texture }
		}, this.slope = { value: null }, this.sun = { value: new q() }, this.scenes = Hd.map(() => new Sn()), Ud.forEach(({ depth: e, target: t, channel: n, cells: r, margin: i }) => {
			let a = Zl(Yd, {
				uSlope: this.slope,
				uSun: this.sun,
				uRes: { value: Hd[t].res },
				uDepth: { value: e },
				uCells: { value: r },
				uLod: { value: Math.max(0, Math.log2(256 / r)) },
				uMargin: { value: (i - 1) / r },
				uMask: { value: new q().setComponent(n, 1) }
			}, {
				vertexShader: Jd,
				side: 2,
				blending: 5,
				blendSrc: 201,
				blendDst: 201
			}), o = r + 2 * i, s = new Jr(new ki(o, o, o, o), a);
			s.frustumCulled = !1, this.scenes[t].add(s);
		}), this.camera = new ga(), this.flat = !1, this.update(new q(0, -1, 0));
	}
	update(e) {
		let t = e.y > 0;
		if (!t && this.flat) return;
		this.flat = !t;
		let n = this.renderer, r = n.getRenderTarget(), i = n.getActiveCubeFace(), a = n.getActiveMipmapLevel(), o = n.getClearAlpha();
		n.getClearColor(Zd), this.sun.value.copy(e).normalize(), this.slope.value = this.sim.slope[2], n.setClearColor(t ? 0 : 16777215, 1), this.targets.forEach((e, r) => {
			this.scenes[r].visible = t, n.setRenderTarget(e), n.clear(!0, !1, !1), n.render(this.scenes[r], this.camera);
		}), n.setRenderTarget(r, i, a), n.setClearColor(Zd, o);
	}
}, $d = "\nvarying vec3 vWPos;\nvarying vec3 vWNrm;\n", ef = `
varying vec3 vWPos;
varying vec3 vWNrm;
uniform samplerCube uSkyCube;
uniform vec3 uAbsorption;
uniform vec3 uSunDirT;
uniform float uCausticStrength;
uniform float uFogDensity;
${Xd}
${fu}
${xu}
${Su}
float th(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float tn(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(th(i), th(i + vec2(1, 0)), u.x), mix(th(i + vec2(0, 1)), th(i + 1.0), u.x), u.y); }
// ripple marks: the phase along d (wavenumber w) is warped by noise of scale s and
// amplitude a (metres along d), so crests meander and fork where the warp gets steep
float ripplePhase(vec2 p, vec2 d, float w, float s, float a) {
  return w * (dot(p, d) + (tn(p * s) - 0.5) * a + (tn(p * s * 0.27 + 4.0) - 0.5) * a * 3.0);
}
// slope of h = amp (sin ph - 0.25 cos 2ph): sharp crests, broad troughs
vec2 rippleSlope(vec2 p, vec2 d, float w, float s, float a, float amp) {
  float ph = ripplePhase(p, d, w, s, a);
  vec2 grad = (vec2(ripplePhase(p + vec2(0.01, 0.0), d, w, s, a), ripplePhase(p + vec2(0.0, 0.01), d, w, s, a)) - ph) / 0.01;
  return grad * amp * (cos(ph) + 0.5 * sin(2.0 * ph));
}
uniform mat4 uSunShadowMatrix;
`, tf = "\n  float hgt = vWPos.y;\n  float flat_ = clamp(vWNrm.y, 0.0, 1.0);\n  float n1 = tn(vWPos.xz * 0.08), n2 = tn(vWPos.xz * 0.6), n3 = tn(vWPos.xz * 0.013);\n  vec3 sand = mix(vec3(0.80, 0.71, 0.53), vec3(0.72, 0.62, 0.45), n1) * (0.92 + 0.16 * n2);\n  vec3 seabed = mix(vec3(0.78, 0.72, 0.56), vec3(0.62, 0.58, 0.44), n1 * n3);\n  vec3 grass = mix(vec3(0.20, 0.30, 0.10), vec3(0.33, 0.37, 0.15), n1) * (0.85 + 0.3 * n2);\n  vec3 rock = mix(vec3(0.33, 0.31, 0.29), vec3(0.45, 0.41, 0.36), n2) * (0.8 + 0.4 * n3);\n#ifdef ROCK\n  vec3 albedo = rock * mix(0.9, 1.15, n1);\n#else\n  float sandLine = 2.4 + 1.6 * n3 + 0.8 * n1;\n  vec3 albedo = hgt < 0.0 ? seabed : sand;\n  albedo = mix(albedo, grass, smoothstep(sandLine, sandLine + 1.5, hgt) * smoothstep(0.62, 0.8, flat_));\n  albedo = mix(albedo, rock, smoothstep(0.78, 0.62, flat_) * smoothstep(-6.0, 1.0, hgt));\n  albedo = mix(albedo, rock * 1.1, smoothstep(38.0, 52.0, hgt + n1 * 8.0));\n#endif\n  // wet band above the waterline, plus where the swash has run (dries over seconds)\n  vec3 sw = swash(vWPos.xz, hgt);\n  float wet = max(1.0 - smoothstep(0.35, 1.3 + 0.5 * n1, hgt), sw.z);\n  albedo *= mix(1.0, 0.58, wet);\n  // the swash film itself: a faint water tint and foam on its leading edge\n  float film = smoothstep(0.0, 0.015, sw.x) * step(0.0, hgt);\n  albedo *= mix(vec3(1.0), vec3(0.78, 0.88, 0.92), film);\n  albedo = mix(albedo, vec3(0.92), sw.y * (0.5 + 0.5 * n2));\n  diffuseColor.rgb = albedo;\n", nf = "\n#ifndef ROCK\n  {\n    vec2 fw = fwidth(vWPos.xz);\n    float px = max(fw.x, fw.y);\n    if (px < 0.5) {   // both ripple bands are faded out beyond this\n    float sandMask = (1.0 - smoothstep(sandLine - 0.5, sandLine + 0.5, hgt)) * smoothstep(0.85, 0.95, flat_);\n    sandMask *= mix(1.0, 0.25, smoothstep(-0.3, 0.6, hgt)); // dry sand: faint wind ripples only\n    // long wave-formed ripples (~1.6 m) and short ones (~0.3 m), each fading in and out\n    // in patches\n    vec2 p = vWPos.xz;\n    vec2 d1 = normalize(vec2(0.8, 0.6) + (vec2(tn(p * 0.02), tn(p * 0.02 + 5.0)) - 0.5));\n    float a1 = 0.02 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.06 + 11.0)));\n    vec2 g = rippleSlope(p, d1, 3.9, 0.35, 0.8, a1) * (1.0 - smoothstep(0.15, 0.5, px));\n    if (px < 0.09) {\n      float a2 = 0.002 * (0.3 + 0.7 * smoothstep(0.25, 0.75, tn(p * 0.15 + 3.0)));\n      g += rippleSlope(p, normalize(d1 + vec2(-d1.y, d1.x) * 0.3), 21.0, 2.2, 0.1, a2) * (1.0 - smoothstep(0.03, 0.09, px));\n    }\n    vec3 nW = normalize(vWNrm - vec3(g.x, 0.0, g.y) * sandMask);\n    normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);\n    }\n  }\n#endif\n", rf = "\n  float wdepth = max(-vWPos.y, 0.0);\n  // sun and sky light reaching the bed through the water column (the sun along its\n  // refracted path)\n  vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);\n  float sunPath = wdepth / max(-rsun.y, 0.1);\n  diffuseColor.rgb *= exp(-uAbsorption * (sunPath * 0.6 + wdepth * 0.4));\n", af = Q.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );", "\n    getDirectionalLightInfo( directionalLight, directLight );\n    float under = smoothstep(0.05, -0.25, vWPos.y);\n    vec3 shadowAt = vWPos + vWNrm * 0.04;\n    bool viaSurface = false;\n    if (under > 0.0) {\n      vec3 rsun = refract(-uSunDirT, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);\n      viaSurface = rsun.y < -0.05 && under > 0.5;\n      if (viaSurface) shadowAt = vec3(vWPos.x - rsun.x / rsun.y * vWPos.y, 0.05, vWPos.z - rsun.z / rsun.y * vWPos.y);\n      directLight.direction = normalize(mix(directLight.direction, (viewMatrix * vec4(-rsun, 0.0)).xyz, under));\n      float Ft = 0.02 + 0.98 * pow(1.0 - max(uSunDirT.y, 0.0), 5.0);\n      directLight.color *= 1.0 - Ft * under;\n    }\n    directLight.color *= floatShadow(shadowAt);\n#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n    vec4 sunShadowCoord = viaSurface ? uSunShadowMatrix * vec4(shadowAt, 1.0) : vDirectionalShadowCoord[ 0 ];\n#endif\n").replace("vDirectionalShadowCoord[ i ]", "sunShadowCoord"), of = "\n  roughnessFactor = mix(mix(roughnessFactor, 0.32, wet * step(0.0, hgt)), 0.06, film);\n", sf = "\n  if (wdepth > 0.0 && rsun.y < -0.05) {\n    vec2 entry = vWPos.xz + rsun.xz / rsun.y * wdepth;   // where this light entered the surface\n    vec2 fwc = fwidth(entry);\n    float c = waveCaustic(entry, wdepth, log2(max(max(fwc.x, fwc.y) * CAUSTIC_TEXELS_PER_M, 1.0)));\n    reflectedLight.directDiffuse *= max(mix(1.0, c, uCausticStrength), 0.0);\n  }\n", cf = "\n  vec3 fdir = normalize(vWPos - cameraPosition);\n  float fogAmt = 1.0 - exp(-length(vWPos - cameraPosition) * uFogDensity);\n  outgoingLight = mix(outgoingLight, textureLod(uSkyCube, vec3(fdir.x, max(fdir.y, 0.0), fdir.z), 3.0).rgb, fogAmt);\n";
function lf(e, t, n) {
	let r = n !== "prop";
	n === "rock" && (e.defines = {
		...e.defines,
		ROCK: ""
	}), e.onBeforeCompile = (e) => {
		Object.assign(e.uniforms, t), e.vertexShader = e.vertexShader.replace("#include <common>", "#include <common>\n" + $d).replace("#include <project_vertex>", "#include <project_vertex>\n  vec4 wp = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n  wp = instanceMatrix * wp;\n#endif\n  vWPos = (modelMatrix * wp).xyz;\n  vec3 wn = objectNormal;\n#ifdef USE_INSTANCING\n  wn = mat3(instanceMatrix) * wn;\n#endif\n  vWNrm = normalize(mat3(modelMatrix) * wn);"), e.fragmentShader = e.fragmentShader.replace("#include <common>", "#include <common>\n" + ef).replace("#include <map_fragment>", "#include <map_fragment>\n" + (r ? tf : "") + rf).replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\n" + (r ? of : "")).replace("#include <normal_fragment_maps>", "#include <normal_fragment_maps>\n" + (r ? nf : "")).replace("#include <lights_fragment_begin>", af).replace("#include <lights_fragment_end>", "#include <lights_fragment_end>\n" + sf).replace("#include <opaque_fragment>", cf + "#include <opaque_fragment>");
	}, e.customProgramCacheKey = () => "gelatin-" + n;
}
function uf() {
	let e = new Di(1, 4);
	e.deleteAttribute("normal"), e.deleteAttribute("uv"), e = Ad(e);
	let t = e.attributes.position, n = new q();
	for (let e = 0; e < t.count; e++) {
		n.fromBufferAttribute(t, e);
		let r = Nd(n.x * 1.4 + 3, n.z * 1.4 + n.y * .7, 5, 21), i = Math.abs(Nd(n.x * 3.1, n.y * 3.1 + n.z, 3, 5));
		n.multiplyScalar(1 + .38 * r - .12 * i), n.y < -.2 && (n.y = -.2 + (n.y + .2) * .4), t.setXYZ(e, n.x, n.y, n.z);
	}
	return e.computeVertexNormals(), e;
}
function df(e, t) {
	let n = [];
	for (let r = 0; r < e * 6 && n.length < e; r++) {
		let r = t() * Math.PI * 2, i = 150;
		for (; i < 700 && Ld(Math.cos(r) * i, Math.sin(r) * i) > 0;) i += 4;
		i += (t() - .6) * 40;
		let a = Math.cos(r) * i, o = Math.sin(r) * i, s = Ld(a, o);
		if (s < -5 || s > 6) continue;
		let c = 1.5 + t() ** 2.2 * 9;
		n.push({
			x: a,
			z: o,
			y: s - c * .15,
			s: c
		});
		for (let r = 0; r < 3 && n.length < e; r++) {
			let e = a + (t() - .5) * c * 4, r = o + (t() - .5) * c * 4, i = c * (.25 + t() * .35);
			n.push({
				x: e,
				z: r,
				y: Ld(e, r) - i * .2,
				s: i
			});
		}
	}
	return n;
}
function ff({ sky: e, caustics: t, floatShadow: n, water: r, absorption: i, reflectionLayer: a = 1 }) {
	let o = {
		...n,
		...Object.fromEntries([
			"uShore",
			"uTravel",
			"uShoreExtent",
			"uTime",
			"uShoreWave",
			"uSwellDir"
		].map((e) => [e, r[e]])),
		...t,
		uSkyCube: { value: e.cube },
		uAbsorption: { value: i },
		uSunDirT: { value: e.sunDir },
		uSunShadowMatrix: { value: new qt() },
		uCausticStrength: { value: 1 },
		uFogDensity: { value: 1 / 18e3 }
	}, { geometry: s } = Rd(384), c = new Bi({
		roughness: .92,
		metalness: 0,
		envMapIntensity: .9
	});
	lf(c, o, "terrain");
	let l = new Jr(s, c);
	l.castShadow = l.receiveShadow = !0;
	let u = 7, d = () => (u = Math.imul(u, 1664525) + 1013904223 >>> 0) / 4294967296, f = df(90, d), p = new Bi({
		roughness: .85,
		metalness: 0,
		envMapIntensity: .9
	});
	lf(p, o, "rock");
	let m = new oi(uf(), p, f.length), h = new qt(), g = new Et(), _ = new rn(), v = new q();
	f.forEach((e, t) => {
		_.set(d() * .6, d() * Math.PI * 2, d() * .6), v.set(e.s * (.8 + d() * .6), e.s * (.5 + d() * .5), e.s * (.8 + d() * .6)), h.compose(new q(e.x, e.y, e.z), g.setFromEuler(_), v), m.setMatrixAt(t, h);
	}), m.computeBoundingSphere(), m.castShadow = m.receiveShadow = !0;
	let y = new Sn();
	y.add(l, m);
	for (let e of [l, m]) e.layers.enable(a);
	return {
		group: y,
		uniforms: o,
		patchProp: (e) => lf(e, o, "prop")
	};
}
// src/engine/PlanarReflection.js
var pf = new q(0, 1, 0), mf = new q(), hf = new q(), gf = new q(), _f = new qt(), vf = new Or(), yf = new X(), bf = new X(), xf = class {
	constructor(e = 1) {
		this.camera = new ba(), this.camera.layers.set(e), this.textureMatrix = new qt(), this.target = new Wt(1, 1, {
			type: v,
			generateMipmaps: !0,
			minFilter: u
		}), this.scale = .5;
	}
	setSize(e, t) {
		this.target.setSize(Math.max(1, Math.floor(e * this.scale)), Math.max(1, Math.floor(t * this.scale)));
	}
	render(e, t, n) {
		let r = this.camera;
		mf.setFromMatrixPosition(n.matrixWorld), _f.extractRotation(n.matrixWorld), hf.set(0, 0, -1).applyMatrix4(_f).add(mf), gf.set(hf.x, -hf.y, hf.z), r.position.set(mf.x, -mf.y, mf.z), r.up.set(0, 1, 0).applyMatrix4(_f).reflect(pf), r.lookAt(gf), r.far = n.far, r.updateMatrixWorld(), r.projectionMatrix.copy(n.projectionMatrix), this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1).multiply(r.projectionMatrix).multiply(r.matrixWorldInverse), vf.setFromNormalAndCoplanarPoint(pf, gf.set(0, 0, 0)).applyMatrix4(r.matrixWorldInverse), yf.set(vf.normal.x, vf.normal.y, vf.normal.z, vf.constant);
		let i = r.projectionMatrix.elements;
		bf.set((Math.sign(yf.x) + i[8]) / i[0], (Math.sign(yf.y) + i[9]) / i[5], -1, (1 + i[10]) / i[14]), yf.multiplyScalar(2 / yf.dot(bf)), i[2] = yf.x, i[6] = yf.y, i[10] = yf.z + 1, i[14] = yf.w, r.projectionMatrixInverse.copy(r.projectionMatrix).invert(), e.setRenderTarget(this.target), e.setClearColor(0, 0), e.clear(!0, !0, !1), e.render(t, r);
	}
}, Sf = 6, Cf = 32, wf = "\nin vec3 position;\nout vec2 vUv;\nvoid main() {\n  vUv = position.xy * 0.5 + 0.5;\n  gl_Position = vec4(position.xy, 0.0, 1.0);\n}", Tf = "\nprecision highp float;\nprecision highp sampler2D;\nin vec2 vUv;\nout vec4 fragColor;\n", Ef = "\nuniform sampler2D tSrc;\nuniform vec2 uTexel; // source texel size\n#ifdef PREFILTER\nuniform vec4 uCurve; // threshold-knee, 2*knee, 0.25/knee, threshold\nuniform float uClamp;\n#endif\n\nfloat luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }\n\nvec3 tap(vec2 o) {\n  vec3 c = texture(tSrc, vUv + o * uTexel).rgb;\n#ifdef PREFILTER\n  c = max(c, 0.0); // negatives (and NaN on most GPUs) -> 0\n  float l = max(luma(c), 1e-4);\n  c *= min(1.0, uClamp / l);\n  l = min(l, uClamp);\n  float q = clamp(l - uCurve.x, 0.0, uCurve.y);\n  c *= max(uCurve.z * q * q, l - uCurve.w) / l;\n#endif\n  return c;\n}\n\nvoid main() {\n  vec3 a = tap(vec2(-2.0, 2.0)), b = tap(vec2(0.0, 2.0)), c = tap(vec2(2.0, 2.0));\n  vec3 d = tap(vec2(-2.0, 0.0)), e = tap(vec2(0.0, 0.0)), f = tap(vec2(2.0, 0.0));\n  vec3 g = tap(vec2(-2.0, -2.0)), h = tap(vec2(0.0, -2.0)), i = tap(vec2(2.0, -2.0));\n  vec3 j = tap(vec2(-1.0, 1.0)), k = tap(vec2(1.0, 1.0)), l = tap(vec2(-1.0, -1.0)), m = tap(vec2(1.0, -1.0));\n  vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25;\n  vec3 g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25;\n  vec3 g4 = (j + k + l + m) * 0.25;\n#ifdef PREFILTER\n  float w0 = 0.125 / (1.0 + luma(g0)), w1 = 0.125 / (1.0 + luma(g1));\n  float w2 = 0.125 / (1.0 + luma(g2)), w3 = 0.125 / (1.0 + luma(g3));\n  float w4 = 0.5 / (1.0 + luma(g4));\n  vec3 r = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);\n#else\n  vec3 r = g4 * 0.5 + (g0 + g1 + g2 + g3) * 0.125;\n#endif\n  fragColor = vec4(r, 1.0);\n}", Df = "\nuniform sampler2D tSrc;\nuniform vec2 uTexel; // source (coarser) texel size\nvoid main() {\n  vec4 d = uTexel.xyxy * vec4(1.0, 1.0, -1.0, 0.0);\n  vec3 s = texture(tSrc, vUv - d.xy).rgb + texture(tSrc, vUv - d.wy).rgb * 2.0 + texture(tSrc, vUv - d.zy).rgb\n    + texture(tSrc, vUv + d.zw).rgb * 2.0 + texture(tSrc, vUv).rgb * 4.0 + texture(tSrc, vUv + d.xw).rgb * 2.0\n    + texture(tSrc, vUv + d.zy).rgb + texture(tSrc, vUv + d.wy).rgb * 2.0 + texture(tSrc, vUv + d.xy).rgb;\n  fragColor = vec4(s * (1.0 / 16.0), 1.0);\n}", Of = `
uniform sampler2D tSrc;
uniform vec2 uJitter; // [0,1)^2
void main() {
  float s = 0.0;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec2 o = (vec2(float(i), float(j)) + uJitter) * 0.25 - 0.5;
    vec3 c = max(texture(tSrc, vUv + o * ${(1 / Cf).toFixed(8)}).rgb, 0.0);
    s += log2(clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4, 64.0));
  }
  fragColor = vec4(s * (1.0 / 16.0), 0.0, 0.0, 1.0);
}`, kf = "\nuniform sampler2D tSrc;  // metering target, linear filtered\nuniform sampler2D tPrev; // previous 1x1 state\nuniform vec2 uK;         // blend factor when scene brightens (x) / darkens (y); 1 = snap\nuniform vec2 uRange;     // allowed log2 luminance range (from min/max exposure)\nvoid main() {\n  float sum = 0.0;\n  for (int j = 0; j < 16; j++) for (int i = 0; i < 16; i++)\n    sum += texture(tSrc, (vec2(float(i), float(j)) + 0.5) * (1.0 / 16.0)).r;\n  float t = clamp(sum * (1.0 / 256.0), uRange.x, uRange.y);\n  float prev = texelFetch(tPrev, ivec2(0), 0).r;\n  float k = t > prev ? uK.x : uK.y;\n  float s = k >= 1.0 ? t : prev + (t - prev) * k;\n  if (isnan(s)) s = t;\n  fragColor = vec4(s, 0.0, 0.0, 1.0);\n}", Af = "\nuniform sampler2D tHdr;\nuniform sampler2D tBloom;\nuniform sampler2D tExp;   // 1x1 adapted log2 average luminance\nuniform float uExposure;  // exposure compensation (auto) or absolute exposure\nuniform float uAuto;      // 1 = auto exposure\nuniform vec3 uExpo;       // keyValue, minExposure, maxExposure\nuniform float uBloom;\nuniform vec2 uLook;       // AgX look: power (contrast), saturation\nuniform float uFrame;     // 0..255, dither seed\nuniform float uDroplets;  // 0..1\nuniform float uTime;      // seconds, wraps at 4096\nuniform float uAspect;    // width / height\nuniform float uResY;      // height in pixels\n\nconst mat3 SRGB_TO_REC2020 = mat3(\n  vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.0880), vec3(0.0433, 0.0113, 0.8956));\nconst mat3 REC2020_TO_SRGB = mat3(\n  vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -0.0083, 1.1187));\nconst mat3 AGX_INSET = mat3(\n  vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),\n  vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),\n  vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));\nconst mat3 AGX_OUTSET = mat3(\n  vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),\n  vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),\n  vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));\nconst float AGX_MIN_EV = -12.47393;\nconst float AGX_MAX_EV = 4.026069;\n\nvec3 agxContrast(vec3 x) {\n  vec3 x2 = x * x, x4 = x2 * x2;\n  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;\n}\n\nvec3 agx(vec3 c) {\n  c = AGX_INSET * (SRGB_TO_REC2020 * c);\n  c = clamp((log2(max(c, 1e-10)) - AGX_MIN_EV) / (AGX_MAX_EV - AGX_MIN_EV), 0.0, 1.0);\n  c = agxContrast(c);\n  // AgX \"punchy\"-style look in the encoded domain\n  c = pow(max(c, 0.0), vec3(uLook.x));\n  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));\n  c = l + uLook.y * (c - l);\n  c = AGX_OUTSET * c;\n  return clamp(REC2020_TO_SRGB * pow(max(c, 0.0), vec3(2.2)), 0.0, 1.0);\n}\n\n// Dave Hoskins hash without sine\nvec3 hash33(vec3 p) {\n  p = fract(p * vec3(0.1031, 0.1030, 0.0973));\n  p += dot(p, p.yxz + 33.33);\n  return fract((p.xxy + p.yxx) * p.zyx);\n}\n\n// ---- lens droplets (only evaluated when uDroplets > 0) -----------------------------------------\n// All lengths are in screen-height units (p = vUv * vec2(aspect, 1)). Each drop is a tiny lens: the\n// image under it is sampled from the mirrored side of its centre, sample = centre - (K-1) * d, so it\n// looks inverted and slightly magnified, with a faint dark rim.\nconst float DROP_K = 1.8;\n\n// d: pixel - drop centre, r: radius. Returns (uv offset, darkening).\nvec3 lensDrop(vec2 d, float r) {\n  float dist = length(d);\n  float cov = clamp((r - dist) * uResY + 0.5, 0.0, 1.0); // 1px AA\n  if (cov <= 0.0) return vec3(0.0);\n  return vec3(-d * DROP_K * cov, 0.22 * smoothstep(0.6, 1.0, dist / r) * cov);\n}\n\n// One drop (at most) per grid cell, kept inside its cell so only the own cell is tested.\nvec3 dropLayer(vec2 p, float scale, float density, float seed) {\n  vec2 q = p * scale + seed * 17.31;\n  vec2 id = floor(q);\n  vec3 h = hash33(vec3(id, seed)), g = hash33(vec3(id + 57.0, seed));\n  if (h.x > density) return vec3(0.0);\n  float fade = clamp((uDroplets - g.x * 0.8) * 6.0, 0.0, 1.0); // drops dry up one by one (order = g.x)\n  float rf = mix(0.10, 0.24, h.y * h.y);                          // radius, cell units\n  vec2 c = rf + vec2(h.z, g.y) * (1.0 - 2.0 * rf);\n  return lensDrop((fract(q) - c) / scale, rf * fade / scale);\n}\n\n// A drop sliding down the lens, leaving a thin wet trail above it. speed in cycles/s.\n// Head enters above the screen and leaves below with its trail fully off-screen, so the wrap never pops.\nvec3 streak(vec2 p, float id, float speed, float amp) {\n  const float R = 0.016, L = 0.45, W = 0.0035;\n  float u = uTime * speed + id * 0.37;\n  float cyc = mod(floor(u), 128.0), f = fract(u);\n  f += 0.012 * sin(f * 47.0); // stick-slip\n  vec3 h = hash33(vec3(id, cyc, 5.1));\n  float x0 = (0.08 + 0.84 * h.x) * uAspect;\n  float hy = mix(1.0 + R, -R - L, f);\n  float hx = x0 + 0.006 * sin(hy * 14.0 + h.y * 6.28);\n  vec3 o = lensDrop(p - vec2(hx, hy), R * amp);\n  float ty = p.y - hy;\n  if (ty > 0.0 && ty < L) {\n    float a = smoothstep(0.0, 0.03, ty) * (1.0 - ty / L) * amp;\n    float tx = (p.x - x0 - 0.006 * sin(p.y * 14.0 + h.y * 6.28)) / W;\n    float cov = clamp((1.0 - abs(tx)) * W * uResY + 0.5, 0.0, 1.0) * a;\n    o += vec3(-tx * W * DROP_K * cov, 0.0, 0.12 * smoothstep(0.5, 1.0, abs(tx)) * cov);\n  }\n  return o;\n}\n\n// Returns (uv offset, darkening).\nvec3 droplets() {\n  vec2 p = vUv * vec2(uAspect, 1.0);\n  float sa = smoothstep(0.0, 0.4, uDroplets);\n  vec3 a = dropLayer(p, 6.0, 0.30, 0.0) + dropLayer(p, 10.0, 0.20, 1.0) + dropLayer(p, 17.0, 0.06, 2.0)\n    + streak(p, 0.0, 0.0625, sa) + streak(p, 1.0, 0.03125, sa);\n  return vec3(a.xy / vec2(uAspect, 1.0), min(a.z, 0.5));\n}\n\nvoid main() {\n  float ex = uExposure;\n  if (uAuto > 0.5) ex *= clamp(uExpo.x * exp2(-texelFetch(tExp, ivec2(0), 0).r), uExpo.y, uExpo.z);\n\n  vec2 uv = vUv;\n  float dark = 0.0;\n  if (uDroplets > 0.001) {\n    vec3 dr = droplets();\n    uv += dr.xy;\n    dark = dr.z;\n  }\n\n  vec3 c = (texture(tHdr, uv).rgb + texture(tBloom, uv).rgb * uBloom) * (ex * (1.0 - dark));\n  vec2 d = (vUv - 0.5) * 1.41421356; // |d|^2 = 1 at corners\n  c = agx(c) * (1.0 - 0.08 * dot(d, d));\n  vec3 o = mix(pow(c, vec3(1.0 / 2.4)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));\n\n  // TPDF dither, +-1/255, after sRGB encoding and before the 8-bit store\n  vec3 n = hash33(vec3(gl_FragCoord.xy, uFrame)) + hash33(vec3(gl_FragCoord.xy, uFrame + 17.0));\n  fragColor = vec4(o + (n - 1.0) * (1.0 / 255.0), 1.0);\n}", jf = (e, t, n = {}, r = {}) => new zi({
	glslVersion: Ve,
	vertexShader: wf,
	fragmentShader: Tf + e,
	uniforms: t,
	defines: n,
	depthTest: !1,
	depthWrite: !1,
	...r
}), Mf = class {
	params = {
		exposure: 1,
		autoExposure: !0,
		keyValue: .18,
		adaptUp: 2.5,
		adaptDown: 1,
		minExposure: .05,
		maxExposure: 20,
		bloomStrength: .06,
		bloomThreshold: 1,
		bloomClamp: 64,
		contrast: 1.12,
		saturation: 1.3,
		droplets: 0
	};
	constructor(e) {
		this.renderer = e, this.geometry = new wr(), this.geometry.setAttribute("position", new fr([
			-1,
			-1,
			0,
			3,
			-1,
			0,
			-1,
			3,
			0
		], 3)), this.mesh = new Jr(this.geometry), this.mesh.frustumCulled = !1, this.camera = new xa(-1, 1, 1, -1, 0, 1);
		let t = () => ({
			tSrc: { value: null },
			uTexel: { value: null }
		});
		this.matPre = jf(Ef, {
			...t(),
			uCurve: { value: new X() },
			uClamp: { value: 64 }
		}, { PREFILTER: 1 }), this.matDown = jf(Ef, t()), this.matUp = jf(Df, t(), {}, {
			blending: 5,
			blendEquation: 100,
			blendSrc: 201,
			blendDst: 201
		}), this.matMeter = jf(Of, {
			tSrc: { value: null },
			uJitter: { value: new K() }
		}), this.matAdapt = jf(kf, {
			tSrc: { value: null },
			tPrev: { value: null },
			uK: { value: new K(1, 1) },
			uRange: { value: new K(-8, 4) }
		}), this.matComp = jf(Af, {
			tHdr: { value: null },
			tBloom: { value: null },
			tExp: { value: null },
			uExposure: { value: 1 },
			uAuto: { value: 1 },
			uExpo: { value: new q(.18, .05, 20) },
			uBloom: { value: 0 },
			uLook: { value: new K(1, 1) },
			uFrame: { value: 0 },
			uDroplets: { value: 0 },
			uTime: { value: 0 },
			uAspect: { value: 1 },
			uResY: { value: 1 }
		}), this.levels = [], this.texel = [new K()];
		for (let e = 0; e < Sf; e++) this.levels.push(new Wt(1, 1, {
			type: v,
			format: E,
			minFilter: c,
			magFilter: c,
			wrapS: r,
			wrapT: r,
			depthBuffer: !1,
			stencilBuffer: !1,
			generateMipmaps: !1
		})), this.texel.push(new K());
		this.meterRT = new Wt(Cf, Cf, {
			type: v,
			format: E,
			minFilter: c,
			magFilter: c,
			depthBuffer: !1,
			stencilBuffer: !1,
			generateMipmaps: !1
		});
		let n = e.extensions.has("EXT_color_buffer_float");
		this.adapt = [0, 1].map(() => new Wt(1, 1, {
			type: n ? _ : v,
			format: E,
			minFilter: a,
			magFilter: a,
			depthBuffer: !1,
			stencilBuffer: !1,
			generateMipmaps: !1
		})), this._cur = 0, this._snap = !0, this._frame = 0, this._time = 0;
		let i = e.getDrawingBufferSize(new K());
		this.setSize(i.x, i.y);
	}
	setSize(e, t) {
		let n = Math.max(1, Math.floor(e)), r = Math.max(1, Math.floor(t));
		this.matComp.uniforms.uAspect.value = n / r, this.matComp.uniforms.uResY.value = r, this._snap = !0, this.texel[0].set(1 / n, 1 / r);
		for (let e = 0; e < Sf; e++) n = Math.max(1, Math.floor(n / 2)), r = Math.max(1, Math.floor(r / 2)), this.levels[e].setSize(n, r), this.texel[e + 1].set(1 / n, 1 / r);
	}
	_pass(e, t) {
		this.mesh.material = e, this.renderer.setRenderTarget(t), this.renderer.render(this.mesh, this.camera);
	}
	_blit(e, t, n, r) {
		e.uniforms.tSrc.value = t, e.uniforms.uTexel.value = n, this._pass(e, r);
	}
	_meterExposure(e, t) {
		let n = this.params, r = this.matMeter.uniforms, i = this.matAdapt.uniforms, a = this._frame;
		r.tSrc.value = e, r.uJitter.value.set(a * .7548776662466927 % 1, a * .5698402909980532 % 1), this._pass(this.matMeter, this.meterRT);
		let o = Math.max(n.keyValue, 1e-4), s = Math.max(Math.min(n.minExposure, n.maxExposure), 1e-4), c = Math.max(n.minExposure, n.maxExposure, 1e-4);
		i.tSrc.value = this.meterRT.texture, i.tPrev.value = this.adapt[this._cur].texture, i.uK.value.set(this._snap ? 1 : 1 - Math.exp(-t * n.adaptUp), this._snap ? 1 : 1 - Math.exp(-t * n.adaptDown)), i.uRange.value.set(Math.log2(o / c), Math.log2(o / s)), this._cur ^= 1, this._pass(this.matAdapt, this.adapt[this._cur]), this._snap = !1;
	}
	render(e, t = 1 / 60) {
		let n = this.renderer, r = this.params, i = this.levels, a = this.texel;
		t = t > 0 ? Math.min(t, 1) : 0, this._frame = this._frame + 1 & 255, this._time = (this._time + t) % 4096;
		let o = n.getRenderTarget(), s = n.autoClear, c = n.info.autoReset;
		n.autoClear = !1, n.info.autoReset = !1, r.autoExposure ? this._meterExposure(e, t) : this._snap = !0;
		let l = r.bloomThreshold, u = Math.max(l * .5, 1e-4), d = this.matPre.uniforms;
		if (d.uCurve.value.set(l - u, 2 * u, .25 / u, l), d.uClamp.value = r.bloomClamp, r.bloomStrength > 0) {
			this._blit(this.matPre, e, a[0], i[0]);
			for (let e = 1; e < Sf; e++) this._blit(this.matDown, i[e - 1].texture, a[e], i[e]);
			for (let e = 4; e >= 0; e--) this._blit(this.matUp, i[e + 1].texture, a[e + 2], i[e]);
		}
		let f = this.matComp.uniforms;
		f.tHdr.value = e, f.tBloom.value = i[0].texture, f.tExp.value = this.adapt[this._cur].texture, f.uExposure.value = r.exposure, f.uAuto.value = +!!r.autoExposure, f.uExpo.value.set(r.keyValue, Math.min(r.minExposure, r.maxExposure), Math.max(r.minExposure, r.maxExposure)), f.uLook.value.set(r.contrast, r.saturation), f.uBloom.value = r.bloomStrength, f.uFrame.value = this._frame, f.uDroplets.value = Math.min(Math.max(r.droplets, 0), 1), f.uTime.value = this._time, this._pass(this.matComp, null), n.setRenderTarget(o), n.autoClear = s, n.info.autoReset = c;
	}
	dispose() {
		for (let e of this.levels) e.dispose();
		this.meterRT.dispose();
		for (let e of this.adapt) e.dispose();
		for (let e of [
			this.matPre,
			this.matDown,
			this.matUp,
			this.matMeter,
			this.matAdapt,
			this.matComp
		]) e.dispose();
		this.geometry.dispose();
	}
}, Nf = class {
	constructor(e) {
		this.gl = e, this.ext = e.getExtension("EXT_disjoint_timer_query_webgl2"), this.pending = [], this.current = null, this.frame = null, this.ms = {}, this.total = 0;
	}
	get available() {
		return !!this.ext;
	}
	beginFrame() {
		this.ext && (this.frame = []);
	}
	begin(e) {
		if (!this.ext || !this.frame) return;
		this.end();
		let t = this.gl.createQuery();
		this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, t), this.current = {
			label: e,
			q: t
		};
	}
	end() {
		this.current &&= (this.gl.endQuery(this.ext.TIME_ELAPSED_EXT), this.frame.push(this.current), null);
	}
	endFrame() {
		if (!this.ext || !this.frame || (this.end(), this.pending.push(this.frame), this.frame = null, this.keep)) return;
		let e = this.gl, t = e.getParameter(this.ext.GPU_DISJOINT_EXT);
		for (; this.pending.length;) {
			let n = this.pending[0];
			if (!e.getQueryParameter(n[n.length - 1].q, e.QUERY_RESULT_AVAILABLE)) break;
			this.pending.shift();
			let r = 0;
			for (let { label: i, q: a } of n) {
				let n = e.getQueryParameter(a, e.QUERY_RESULT) / 1e6;
				e.deleteQuery(a), t || (this.ms[i] = this.ms[i] === void 0 ? n : this.ms[i] * .95 + n * .05, r += n);
			}
			t || (this.total = this.total ? this.total * .95 + r * .05 : r);
		}
		this.pending.length > 8 && this.pending.splice(0, this.pending.length - 8).flat().forEach(({ q: t }) => e.deleteQuery(t));
	}
	drain() {
		let e = this.gl, t = {}, n = this.pending.length;
		for (let n of this.pending) for (let { label: r, q: i } of n) e.getQueryParameter(i, e.QUERY_RESULT_AVAILABLE) && (t[r] = (t[r] || 0) + e.getQueryParameter(i, e.QUERY_RESULT) / 1e6), e.deleteQuery(i);
		this.pending = [];
		for (let e in t) t[e] /= n;
		return t;
	}
}, Pf = `
precision highp float;
precision highp int;
${Cu}
uniform highp sampler2D uQueries;
out vec4 outColor;
void main() {
  vec2 q = texelFetch(uQueries, ivec2(gl_FragCoord.xy), 0).xy;
  vec3 d = waterAt(q, vec3(0.0));
  outColor = vec4(d.y, d.x, d.z, 1.0);
}`, Ff = class {
	constructor(e, t, n = 256) {
		this.renderer = e, this.capacity = n, this.input = new Zr(new Float32Array(n * 4), n, 1, E, _), this.target = new Wt(n, 1, {
			type: _,
			minFilter: a,
			magFilter: a,
			depthBuffer: !1,
			generateMipmaps: !1
		}), this.quad = new Ql(Zl(Pf, {
			...t.uniforms,
			uQueries: { value: this.input }
		})), this.inFlight = 0, this.result = new Float32Array(n * 4), this.resultCount = 0, this.resultTag = -1, this.resultTime = 0;
	}
	submit(e, t, n, r) {
		if (this.inFlight >= 2 || t === 0) return;
		t = Math.min(t, this.capacity);
		let i = this.input.image.data;
		for (let n = 0; n < t; n++) i[n * 4] = e[n * 2], i[n * 4 + 1] = e[n * 2 + 1];
		this.input.needsUpdate = !0, this.quad.render(this.renderer, this.target), this.inFlight++;
		let a = new Float32Array(t * 4);
		this.renderer.readRenderTargetPixelsAsync(this.target, 0, 0, t, 1, a).then(() => {
			this.result.set(a), this.resultCount = t, this.resultTag = n, this.resultTime = r;
		}).catch(() => {}).finally(() => {
			this.inFlight--;
		});
	}
}, If = `
precision highp float;
precision highp int;
precision highp sampler2DShadow;
${Cu}
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
vec3 viewPos(vec2 uv, float ndcZ) {
  vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, ndcZ, 1.0);
  return v.xyz / v.w;
}
`, Lf = If + "\nin vec2 vUv;\nout vec4 outColor;\nvoid main() {\n  vec3 nearW = (uCamWorld * vec4(viewPos(vUv, -1.0), 1.0)).xyz;\n  outColor = vec4(waterAt(nearW.xz, vec3(0.0)).y - nearW.y, 0.0, 0.0, 1.0);\n}", Rf = If + Xd + fu + "\nuniform highp sampler2D tDepth;\nuniform highp sampler2DShadow uShadowMap;\nuniform mat4 uShadowMatrix;\nuniform float uShadowBias;\nuniform vec3 uAbsorption;\nuniform vec3 uSunDir;\nuniform vec4 uUnder;   // scattering coefficient (1/m), shaft strength, shaft range (m), -\nuniform float uFrame;  // frame index mod 64, rotates the jitter\nin vec2 vUv;\nout vec4 outColor;\n\n// light reaching a point in the water came through the surface at entry; it is lit if\n// the entry point is (terrain and floater shadows, as seen on the water surface)\nfloat lightAt(vec2 entry) {\n  vec3 e = vec3(entry.x, 0.0, entry.y);\n  vec4 sc = uShadowMatrix * vec4(e, 1.0);\n  float s = 1.0;\n  if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xyz, vec3(1.0)))) s = texture(uShadowMap, vec3(sc.xy, sc.z - uShadowBias));\n  return min(s, floatShadow(e));\n}\n\n// per half-res pixel: in-scattered sun along the view ray (without the sun colour and\n// strength), and the distance the composite uses to upsample without halos\nvoid main() {\n  float z = texture(tDepth, vUv).r;\n  vec3 hitV = viewPos(vUv, z * 2.0 - 1.0);\n  float dist = z > 0.999999 ? 1e5 : length(hitV);\n  vec3 dir = normalize(mat3(uCamWorld) * hitV);\n  vec3 camPos = uCamWorld[3].xyz;\n  vec3 sigT = uAbsorption + uUnder.x;\n  vec3 rs = refract(-uSunDir, vec3(0.0, 1.0, 0.0), 1.0 / 1.33);\n  vec3 acc = vec3(0.0);\n  if (rs.y < -0.05) {\n    float range = min(dist, uUnder.z);\n    const int STEPS = 24;\n    float stepL = range / float(STEPS);\n    // interleaved gradient noise, shifted by the golden ratio each frame\n    float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))) + uFrame * 0.618034);\n    float mu = dot(dir, -rs);\n    const float g = 0.7;\n    float phase = (1.0 - g * g) / (4.0 * PI * pow(1.0 + g * g - 2.0 * g * mu, 1.5)) + 0.04;\n    // prefilter along the ray: mip from how far one step moves through the 12 m pattern\n    // (rays sweeping across the caustics average to haze, rays along the light keep shafts)\n    vec2 dbase = dir.xz - rs.xz / rs.y * dir.y;\n    float lod = max(log2(max(length(dbase) * stepL * CAUSTIC_TEXELS_PER_M, 1.0)), 1.0);\n    for (int i = 0; i < STEPS; i++) {\n      float s = (float(i) + jit) * stepL;\n      vec3 p = camPos + dir * s;\n      float pd = -p.y;\n      if (pd <= 0.0) continue;\n      vec2 entry = p.xz + rs.xz / rs.y * pd;\n      acc += waveCaustic(entry, pd, lod) * lightAt(entry) * exp(-sigT * (s + pd / -rs.y)) * smoothstep(0.0, 0.6, pd);\n    }\n    acc *= phase * stepL;\n  }\n  outColor = vec4(acc, dist);\n}", zf = If + "\nuniform sampler2D tColor;\nuniform highp sampler2D tDepth;\nuniform sampler2D tLens;\nuniform highp sampler2D tShafts;\nuniform samplerCube uSkyCube;\nuniform float uSkyMaxLod;\nuniform vec3 uAbsorption;\nuniform vec3 uScatterColor;\nuniform vec3 uSunDir;\nuniform vec3 uSunColor;\nuniform vec4 uUnder;   // scattering coefficient (1/m), shaft strength, shaft range (m), meniscus darkening\nuniform float uFull;   // 1: camera deep enough that the whole near plane is submerged\nin vec2 vUv;\nout vec4 outColor;\n\n// alpha tag from the water pass: 0 underside, 1 no water, 2 top (edges average between)\nfloat isFront(float a) { return step(1.5, a); }\nfloat isBack(float a) { return step(a, 0.5); }\n\n// half-res shafts back to full res, weighting the 4 nearest by distance agreement so\n// shafts in front of an object don't bleed onto it\nvec3 shafts(vec2 uv, float dist) {\n  vec2 hs = vec2(textureSize(tShafts, 0));\n  vec2 st = uv * hs - 0.5;\n  vec2 f = fract(st);\n  ivec2 i0 = ivec2(floor(st));\n  vec3 sum = vec3(0.0);\n  float wsum = 1e-5;\n  for (int k = 0; k < 4; k++) {\n    ivec2 o = ivec2(k & 1, k >> 1);\n    vec4 t = texelFetch(tShafts, clamp(i0 + o, ivec2(0), ivec2(hs) - 1), 0);\n    float w = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y)\n            / (1e-3 + abs(t.a - dist) / max(dist, 0.5));\n    sum += t.rgb * w;\n    wsum += w;\n  }\n  return sum / wsum;\n}\n\nvoid main() {\n  float d = uFull > 0.5 ? 10.0 : texture(tLens, vUv).r;   // lens depth\n\n  // where the pixel sees the water surface, its facing decides; elsewhere the lens\n  // test. That keeps the split consistent with the mesh even where its coarse fan\n  // around the lens disagrees with the exact height.\n  vec4 src = texture(tColor, vUv);\n  bool under = isBack(src.a) > 0.5 || (isFront(src.a) < 0.5 && d > 0.0);\n\n  // meniscus: a dark line where the top of the surface meets its underside on screen\n  float meniscus = 1.0;\n  if (uFull < 0.5) {\n    vec2 px = 2.0 / vec2(textureSize(tColor, 0));\n    float f = 0.0, b = 0.0;\n    for (int i = 0; i < 4; i++) {\n      vec2 o = vec2(i == 0 ? px.x : i == 1 ? -px.x : 0.0, i == 2 ? px.y : i == 3 ? -px.y : 0.0);\n      float a = texture(tColor, vUv + o).a;\n      f += isFront(a);\n      b += isBack(a);\n    }\n    // only near the lens: far front/back boundaries are folded crests, not the waterline\n    meniscus -= uUnder.w * max(isFront(src.a) * min(b, 1.0), isBack(src.a) * min(f, 1.0))\n              * smoothstep(0.35, 0.1, abs(d));\n  }\n  if (!under) {\n    outColor = vec4(src.rgb * meniscus, 1.0);\n    return;\n  }\n  d = max(d, 0.0);\n\n  // slight refractive wobble of the whole image\n  vec2 uv = vUv + vec2(sin(vUv.y * 37.0 + uTime * 1.9), cos(vUv.x * 29.0 + uTime * 1.6)) * 0.0012;\n  vec3 col = texture(tColor, uv).rgb;\n  float z = texture(tDepth, uv).r;\n  vec3 hitV = viewPos(uv, z * 2.0 - 1.0);\n  float dist = z > 0.999999 ? 1e5 : length(hitV);\n  vec3 dir = normalize(mat3(uCamWorld) * hitV);\n\n  vec3 sigT = uAbsorption + uUnder.x;\n  // in-scatter: the surface underside's deep-water colour, darker with depth and\n  // brighter looking up towards the light\n  vec3 ambient = textureLod(uSkyCube, vec3(0.0, 1.0, 0.0), uSkyMaxLod).rgb;\n  vec3 fogCol = uScatterColor * (ambient + uSunColor * max(uSunDir.y, 0.0))\n              * exp(-uAbsorption * d * 0.5) * mix(0.55, 1.35, dir.y * 0.5 + 0.5);\n  vec3 T = exp(-sigT * dist);\n  col = col * T + fogCol * (1.0 - T);\n  if (uUnder.y > 0.0) col += uSunColor * shafts(uv, dist) * (uUnder.x * uUnder.y);\n\n  outColor = vec4(col * meniscus, 1.0);\n}", Bf = class {
	constructor(e, t, n) {
		this.params = {
			scattering: .03,
			shafts: 2,
			shaftRange: 40,
			meniscus: .5
		}, this.uniforms = {
			...e.uniforms,
			tColor: { value: null },
			tDepth: { value: null },
			...n,
			tLens: { value: null },
			tShafts: { value: null },
			uInvProj: { value: t.projectionMatrixInverse },
			uCamWorld: { value: t.matrixWorld },
			uUnder: { value: new X() },
			uFull: { value: 0 },
			uFrame: { value: 0 }
		}, this.quad = new Ql(Zl(zf, this.uniforms)), this.shaftQuad = new Ql(Zl(Rf, this.uniforms)), this.lensQuad = new Ql(Zl(Lf, this.uniforms));
		let r = {
			type: _,
			minFilter: a,
			magFilter: a,
			depthBuffer: !1,
			generateMipmaps: !1
		};
		this.lens = new Wt(64, 36, {
			...r,
			type: v,
			minFilter: c,
			magFilter: c
		}), this.uniforms.tLens.value = this.lens.texture, this.shaftRT = new Wt(1, 1, r), this.uniforms.tShafts.value = this.shaftRT.texture, this.target = null;
	}
	setSize(e, t) {
		this.target?.dispose(), this.target = new Wt(e, t, {
			type: v,
			depthBuffer: !1,
			generateMipmaps: !1
		}), this.shaftRT.setSize(Math.ceil(e / 2), Math.ceil(t / 2));
	}
	render(e, t, n) {
		let r = this.uniforms, i = this.params;
		return r.tColor.value = t.texture, r.tDepth.value = t.depthTexture, r.uUnder.value.set(i.scattering, i.shafts, i.shaftRange, i.meniscus), r.uFull.value = +!!n, r.uFrame.value = (r.uFrame.value + 1) % 64, n || this.lensQuad.render(e, this.lens), i.shafts > 0 && this.shaftQuad.render(e, this.shaftRT), this.quad.render(e, this.target), this.target.texture;
	}
}, Vf = `
precision highp float;
${Cu}
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform samplerCube uSkyCube;
uniform float uSkyMaxLod;
uniform vec3 uSpray;        // amount, size, max distance
out vec2 vUv;
out float vAlpha;
out vec3 vLight;
out float vSeed;
out float vViewZ;

// camera-facing quad of the given size at p; droplets: strong forward scattering of the
// sun + sky ambient
void billboard(vec3 p, float size) {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 view = viewMatrix * vec4(p + (right * position.x + up * position.y) * size, 1.0);
  gl_Position = projectionMatrix * view;
  vViewZ = -view.z;
  vUv = position.xy;
  float mu = dot(normalize(p - cameraPosition), uSunDir);
  const float g = 0.6;
  float phase = (1.0 - g * g) / (4.0 * PI * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
  vec3 sky = textureLod(uSkyCube, vec3(0.0, 1.0, 0.0), uSkyMaxLod).rgb;
  vLight = 0.9 * (uSunColor * (0.25 + 1.6 * phase) + sky * 1.1);
}
`, Hf = Vf + "\nin vec4 aEmit;              // emitter xz, two randoms\n\nvoid main() {\n  vAlpha = 0.0;\n  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);   // dead instances fall outside the clip volume\n  vec2 e = aEmit.xy;\n  float r1 = aEmit.z, r2 = aEmit.w;\n  vec2 toE = e - cameraPosition.xz;\n  if (dot(toE, toE) > uSpray.z * uSpray.z) return;\n\n  Shore s = shoreWaves(e, shoreSample(e));\n  float a = s.wave0.x, k = s.wave0.y, w = s.wave0.z;\n  float strength = s.breaking0 * smoothstep(0.08, 0.35, a);\n  if (strength <= 0.01) return;\n  // seconds since the crest passed this emitter, staggered per particle\n  float psi = mod(s.wave0.w + PI, 2.0 * PI) - PI;\n  float age = psi / w - r1 * 0.3;\n  float life = 0.9 + 1.5 * r2;\n  if (age < 0.0 || age > life) return;\n\n  // thrown with the crest (towards the beach) and up, slowed by air drag\n  const float KD = 1.7, G = 9.81;\n  float ex = (1.0 - exp(-KD * age)) / KD;\n  float c = w / k;\n  vec2 side = vec2(-s.dir.y, s.dir.x) * (fract(r1 * 31.7) - 0.5) * 1.6;\n  vec2 xz = e + side + s.dir * c * (0.25 + 0.45 * fract(r2 * 17.3)) * ex;\n  float vy = (1.2 + 3.2 * fract(r1 * 7.9)) * sqrt(a);\n  float y = 1.1 * a + (vy + G / KD) * ex - G * age / KD;\n  if (y < -0.3) return;\n\n  float size = (0.1 + 0.6 * age) * (0.6 + 0.8 * fract(r2 * 5.3)) * uSpray.y * sqrt(a / 0.5);\n  billboard(vec3(xz.x, y, xz.y), size);\n  vSeed = r1;\n  vAlpha = strength * uSpray.x * smoothstep(0.0, 0.12, age) * pow(1.0 - age / life, 1.5)\n         * smoothstep(-0.3, 0.2, y) * smoothstep(uSpray.z, uSpray.z * 0.7, sqrt(dot(toE, toE)))\n         * smoothstep(2.5, 10.0, vViewZ);   // no giant blobs on the lens\n}", Uf = Vf + "\nvoid main() {\n  vAlpha = 0.0;\n  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);\n  vec4 e = uImpact[gl_InstanceID % 8];\n  float L = uImpactSize[gl_InstanceID % 8];\n  float r1 = hash12(vec2(float(gl_InstanceID), 1.7)), r2 = hash12(vec2(float(gl_InstanceID), 8.3));\n  float r3 = hash12(vec2(float(gl_InstanceID), 4.1));\n  float life = 0.5 + 1.1 * r2;\n  float age = e.z;\n  if (e.w <= 0.0 || age > life) return;\n  const float KD = 1.2, G = 9.81;\n  float ex = (1.0 - exp(-KD * age)) / KD;\n  float ang = r1 * 2.0 * PI;\n  vec2 out_ = vec2(cos(ang), sin(ang));\n  float strength = sqrt(e.w / 0.2);\n  float vy = (1.5 + 4.0 * r3 * r3) * strength;\n  vec2 xz = e.xy + out_ * (L * (0.6 + 0.5 * r2) + (0.5 + 2.0 * r3) * strength * ex);\n  float y = (vy + G / KD) * ex - G * age / KD;\n  if (y < -0.2) return;\n  billboard(vec3(xz.x, y, xz.y), (0.05 + 0.25 * age) * (0.5 + r2) * uSpray.y);\n  vSeed = r1;\n  vAlpha = uSpray.x * 0.6 * smoothstep(0.0, 0.05, age) * pow(1.0 - age / life, 1.5)\n         * smoothstep(-0.2, 0.1, y) * smoothstep(1.0, 4.0, vViewZ);\n}", Wf = "\nprecision highp float;\nuniform sampler2D uSceneDepth;\nuniform sampler2D uFoamTex;\nuniform vec2 uResolution;\nuniform vec2 uNearFar;\nin vec2 vUv;\nin float vAlpha;\nin vec3 vLight;\nin float vSeed;\nin float vViewZ;\nout vec4 fragColor;\n\nvoid main() {\n  float r = length(vUv);\n  if (vAlpha <= 0.0 || r > 1.0) discard;\n  // soft gaussian puff, broken up only at low frequency so it reads as mist\n  float n = texture(uFoamTex, vUv * 0.08 + vSeed * 17.0).r;\n  float a = vAlpha * exp(-3.5 * r * r) * (0.5 + n);\n  // soft against the opaque scene (the water surface itself is handled by the depth test)\n  float d = texelFetch(uSceneDepth, ivec2(gl_FragCoord.xy), 0).r * 2.0 - 1.0;\n  float sceneZ = 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - d * (uNearFar.y - uNearFar.x));\n  a *= clamp((sceneZ - vViewZ) / 0.8, 0.0, 1.0);\n  fragColor = vec4(vLight * a, a);\n}";
function Gf(e, t) {
	let { data: n, size: r, extent: i } = e, a = new Float32Array(t * 4), o = 11, s = 0, c = () => (o = Math.imul(o, 1664525) + 1013904223 >>> 0) / 4294967296;
	for (let e = 0; s < t && e < t * 400; e++) {
		let e = Math.floor(c() * r), t = Math.floor(c() * r), o = (t * r + e) * 4, l = -n[o], u = n[o + 1];
		l < .3 || l > 3.2 || u > 150 || (a.set([
			((e + c()) / r - .5) * i,
			((t + c()) / r - .5) * i,
			c(),
			c()
		], s * 4), s++);
	}
	return {
		data: a.subarray(0, s * 4),
		count: s
	};
}
function Kf(e) {
	let t = new wa();
	return t.setAttribute("position", new fr([
		-1,
		-1,
		0,
		1,
		-1,
		0,
		1,
		1,
		0,
		-1,
		1,
		0
	], 3)), t.setIndex([
		0,
		1,
		2,
		0,
		2,
		3
	]), t.instanceCount = e, t;
}
var qf = class {
	constructor(e, t, n = 15e4) {
		let r = Gf(t, n), i = Kf(r.count);
		i.setAttribute("aEmit", new Qr(r.data, 4)), this.params = {
			amount: 1,
			size: 1,
			distance: 350
		}, this.uniforms = {
			...e.uniforms,
			uSpray: { value: new q() }
		};
		let a = (e) => new Ri({
			glslVersion: Ve,
			vertexShader: e,
			fragmentShader: Wf,
			uniforms: this.uniforms,
			transparent: !0,
			depthWrite: !1,
			blending: 5,
			blendSrc: 201,
			blendDst: 205,
			blendSrcAlpha: 200,
			blendDstAlpha: 201
		});
		this.mesh = new Jr(i, a(Hf)), this.mesh.frustumCulled = !1, this.splash = new Jr(Kf(1280), a(Uf)), this.splash.frustumCulled = !1;
	}
	update() {
		let e = this.params;
		this.uniforms.uSpray.value.set(e.amount, e.size, e.distance), this.mesh.visible = this.splash.visible = e.amount > 0;
	}
}, Jf = 24, Yf = `
in vec3 aSeed;
uniform float uTime;
uniform vec3 uScatterColor;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uPx;      // pixels per metre at 1 m (projection scale)
out vec3 vCol;
void main() {
  // slow drift + wobble, wrapped into a box centred on the camera
  vec3 p = aSeed * ${Jf.toFixed(1)} + vec3(0.11, -0.03, 0.07) * uTime
         + 0.3 * sin(uTime * (0.3 + aSeed.yzx) + aSeed.zxy * 40.0);
  p = cameraPosition + mod(p - cameraPosition + ${(Jf / 2).toFixed(1)}, ${Jf.toFixed(1)}) - ${(Jf / 2).toFixed(1)};
  vec4 view = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  float size = (0.004 + 0.01 * fract(aSeed.x * 91.7)) * uPx / max(-view.z, 0.1);
  gl_PointSize = clamp(size, 1.0, 6.0);
  vCol = uScatterColor * (uSunColor * max(uSunDir.y, 0.0) + 1.0) * 4.0 * (0.4 + fract(aSeed.y * 37.1));
  // too close to the lens: skip
  if (-view.z < 0.4 || p.y > 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`, Xf = "\nprecision highp float;\nin vec3 vCol;\nout vec4 fragColor;\nvoid main() {\n  if (length(gl_PointCoord - 0.5) > 0.5) discard;\n  fragColor = vec4(vCol, 1.0);\n}", Zf = class {
	constructor(e, t = 6e3) {
		let n = new Float32Array(t * 3), r = 3;
		for (let e = 0; e < n.length; e++) n[e] = (r = Math.imul(r, 1664525) + 1013904223 >>> 0) / 4294967296;
		let i = new wr();
		i.setAttribute("position", new lr(new Float32Array(t * 3), 3)), i.setAttribute("aSeed", new lr(n, 3));
		let a = e.uniforms;
		this.uniforms = {
			uTime: a.uTime,
			uScatterColor: a.uScatterColor,
			uSunColor: a.uSunColor,
			uSunDir: a.uSunDir,
			uPx: { value: 1e3 }
		}, this.mesh = new gi(i, new Ri({
			glslVersion: Ve,
			vertexShader: Yf,
			fragmentShader: Xf,
			uniforms: this.uniforms
		})), this.mesh.frustumCulled = !1, this.mesh.renderOrder = 1;
	}
	update(e, t, n) {
		this.mesh.visible = n, this.uniforms.uPx.value = t / (2 * Math.tan(Tt.degToRad(e.fov) / 2));
	}
}, Qf = [
	"crate",
	"barrel",
	"buoy",
	"boat"
], $f = (e, t = 1) => new Z(e).multiplyScalar(t);
function ep(e) {
	return () => {
		e = e + 1831565813 | 0;
		let t = Math.imul(e ^ e >>> 15, 1 | e);
		return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function tp(e, t) {
	let n = new Float32Array(e * 3);
	for (let r = 0; r < e; r++) {
		let e = t(r);
		n[r * 3] = e.r, n[r * 3 + 1] = e.g, n[r * 3 + 2] = e.b;
	}
	return new lr(n, 3);
}
var np = (e, t) => e.setAttribute("color", tp(e.attributes.position.count, () => t)), rp = (e, t, n, r, i, a, o) => np(new Si(e, t, n).translate(r, i, a), o);
function ip(e) {
	let t = 0;
	for (let n = 1; n < e.length; n++) {
		let r = e[n - 1], i = e[n];
		t += Math.PI * Math.abs(i.y - r.y) * (r.x * r.x + r.x * i.x + i.x * i.x) / 3;
	}
	return t;
}
function ap(e) {
	let t = e.attributes.position, n = new q(), r = new q(), i = new q(), a = 0, o = 0;
	for (let e = 0; e < t.count; e += 3) {
		n.fromBufferAttribute(t, e), r.fromBufferAttribute(t, e + 1), i.fromBufferAttribute(t, e + 2);
		let s = n.x + r.x + i.x, c = n.dot(r.cross(i)) / 6;
		a += c, o += c * s / 4;
	}
	return {
		vol: a,
		cx: o / a
	};
}
function op() {
	let e = ep(11), t = .9, n = .09, r = .45 - n / 2, i = [rp(.84, .84, .84, 0, 0, 0, $f(3023127))];
	for (let a = 0; a < 3; a++) for (let o of [-1, 1]) for (let s of [-1, 1]) {
		let c = [
			n,
			n,
			n
		], l = [
			0,
			0,
			0
		];
		c[a] = t, l[(a + 1) % 3] = o * r, l[(a + 2) % 3] = s * r, i.push(rp(...c, ...l, $f(7228719, .9 + .2 * e())));
	}
	for (let t = 0; t < 3; t++) for (let n of [-1, 1]) {
		let r = (t + 1) % 3, a = (t + 2) % 3;
		for (let o = 0; o < 5; o++) {
			let s = [
				0,
				0,
				0
			], c = [
				0,
				0,
				0
			];
			s[t] = .04, s[r] = .78, s[a] = .13599999999999998, c[t] = n * .41000000000000003, c[a] = (o + .5 - 5 / 2) * .144, i.push(rp(...s, ...c, $f(11041611, .85 + .3 * e())));
		}
	}
	let a = t / 4, o = [];
	for (let e of [-.225, a]) for (let t of [-.225, a]) for (let n of [-.225, a]) o.push(new q(e, t, n));
	return {
		geo: Od(i),
		rough: .85,
		metal: 0,
		volume: t ** 3,
		density: 550,
		samples: o,
		cellHeight: t / 2
	};
}
function sp() {
	let e = .95, t = .27, n = [
		[-.44, -.375],
		[-.22, -.17],
		[-.035, .035],
		[.17, .22],
		[.375, .44]
	], r = (e) => n.some(([t, n]) => e > t && e < n), i = [];
	for (let t = 0; t <= 40; t++) i.push(-.95 / 2 + e * t / 40);
	for (let [e, t] of n) i.push(e - .0015, e + .0015, t - .0015, t + .0015);
	i.sort((e, t) => e - t);
	let a = i.map((n) => new K(t + .04999999999999999 * (1 - (2 * n / e) ** 2) + (r(n) ? .012 : 0), n)), o = new Oi(a, 24), s = ep(5), c = Array.from({ length: 24 }, () => .85 + .3 * s()), l = $f(9255725), u = $f(2764082), d = o.attributes.position;
	o.setAttribute("color", tp(d.count, (e) => r(d.getY(e)) ? u : l.clone().multiplyScalar(c[Math.floor(e / a.length) % 24]))), o.rotateZ(Math.PI / 2);
	let f = [$f(10252872), $f(7294511)], p = [-1, 1].map((n) => {
		let r = new Ci(t, 24).rotateY(n * Math.PI / 2).translate(n * e / 2, 0, 0);
		return r.setAttribute("color", tp(r.attributes.position.count, (e) => f[+!!e]));
	}), m = [];
	for (let t of [
		-3 * e / 8,
		-.95 / 8,
		e / 8,
		3 * e / 8
	]) for (let e of [-.14, .14]) m.push(new q(t, e, 0));
	return {
		geo: Od([o, ...p]),
		rough: .7,
		metal: .1,
		volume: ip(a),
		density: 420,
		samples: m,
		cellHeight: .32
	};
}
function cp() {
	let e = .5, t = .1, n = .06, r = .11, i = Math.sqrt(e * e - t * t), a = Math.asin(i / e), o = [];
	for (let t = 0; t <= 40; t++) o.push(e * Math.sin(-a + 2 * a * t / 40));
	for (let e of [-.11, r]) o.push(e - .003, e + .003);
	o.sort((e, t) => e - t);
	let s = [
		new K(0, -.8),
		new K(t, -.8),
		...o.map((t) => new K(Math.sqrt(e * e - t * t), t)),
		new K(t, .56),
		new K(0, .56)
	], c = $f(12855838), l = $f(15262936), u = $f(2764082), d = new Oi(s, 28), f = d.attributes.position;
	d.setAttribute("color", tp(f.count, (e) => {
		let t = f.getY(e);
		return t < -i + 1e-4 || t > i - 1e-4 ? u : Math.abs(t) <= r ? l : c;
	}));
	let p = [
		d,
		np(new wi(.022, .028, .45, 8).translate(0, .775, 0), $f(8093831)),
		np(new wi(.1, .1, .016, 12).translate(0, 1, 0), u),
		np(new Ti(.1, .15, 12).translate(0, 1.225, 0), c)
	];
	for (let e = 0; e < 4; e++) {
		let t = Math.PI / 4 + e * Math.PI / 2;
		p.push(np(new wi(.008, .008, .15, 4).translate(.085 * Math.cos(t), 1.083, .085 * Math.sin(t)), u));
	}
	p.forEach((e) => e.translate(0, n, 0));
	let m = .19, h = [];
	for (let e of [-.19, m]) for (let t of [-.19, m]) for (let r of [-.19, m]) h.push(new q(e, n + t, r));
	return {
		geo: Od(p),
		rough: .45,
		metal: .05,
		volume: ip(s),
		density: 300,
		samples: h,
		cellHeight: e
	};
}
function lp() {
	let e = (e, t, n, r) => {
		let i = e + .5, a = Math.abs(2 * n), o = t + .5, s = i < .4 ? .62 + .38 * Math.sin(i / .4 * Math.PI / 2) : Math.max(.02, 1 - ((i - .4) / .6) ** 1.8), c = Math.max(0, (i - .3) / .7), l = Math.max(0, (.3 - i) / .3), u = .4 + .22 * c * c + .05 * l * l, d = -.2 + .2 * Math.max(0, (i - .5) / .5) ** 1.6 + .05 * (1 - i) ** 2 + .2 * a ** 1.5;
		return r.set(e * 3.6, d + (u - d) * o, 2 * n * .65 * s * (.8 + .2 * o));
	}, t = new Si(1, 1, 1, 24, 5, 8), n = t.attributes.position, r = t.index, i = n.array.slice(), a = new q();
	for (let t = 0; t < n.count; t++) e(i[t * 3], i[t * 3 + 1], i[t * 3 + 2], a), n.setXYZ(t, a.x, a.y, a.z);
	t.computeVertexNormals();
	let o = ep(3), s = $f(1850948), c = $f(2789260), l = $f(15328988), u = $f(4861984), d = [
		s,
		s,
		c,
		l,
		u
	], f = Array.from({ length: 8 }, (e, t) => t === 0 || t === 7 ? u : $f(11568725, .9 + .2 * o())), p = [];
	for (let { start: e, count: n, materialIndex: a } of t.groups) for (let t = e; t < e + n; t += 3) {
		let e = 0, n = 0;
		for (let a = 0; a < 3; a++) {
			let o = r.getX(t + a);
			e += i[o * 3 + 1], n += i[o * 3 + 2];
		}
		e = e / 3 + .5, n = n / 3 + .5, p[t / 3] = a === 3 ? s : a === 2 ? f[Math.floor(n * 8)] : d[Math.floor(e * 5)];
	}
	let m = t.toNonIndexed();
	m.setAttribute("color", tp(m.attributes.position.count, (e) => p[Math.floor(e / 3)]));
	let { vol: h, cx: g } = ap(m), _ = [m];
	for (let t of [-.1, .12]) e(t, .5, .5, a), _.push(rp(.26, .045, a.z * 2 * .76, a.x, a.y + .0125, 0, $f(11897432)).toNonIndexed());
	let v = [];
	for (let t = 0; t < 4; t++) for (let n of [-.25, .25]) for (let r of [-.25, .25]) v.push(e((t + .5) / 4 - .5, n, r, new q()));
	let y = Od(_).translate(-g, 0, 0);
	return v.forEach((e) => e.x -= g), {
		geo: y,
		rough: .55,
		metal: 0,
		volume: h,
		density: 280,
		samples: v,
		cellHeight: .3
	};
}
var up = {
	crate: op,
	barrel: sp,
	buoy: cp,
	boat: lp
};
function dp(e, t) {
	let n = up[e];
	if (!n) throw Error(`unknown floater kind: ${e}`);
	let { geo: r, rough: i, metal: a, ...o } = n(), s = new Bi({
		vertexColors: !0,
		roughness: i,
		metalness: a
	});
	t(s);
	let c = new Jr(r, s);
	return c.name = `floater-${e}`, c.castShadow = !1, c.receiveShadow = !0, c.layers.enable(1), r.computeBoundingBox(), {
		kind: e,
		object: c,
		size: r.boundingBox.getSize(new q()),
		volume: o.volume,
		density: o.density,
		samples: o.samples,
		cellHeight: o.cellHeight
	};
}
// src/scene/floaters.js
var fp = 1025, pp = 9.81, mp = 1 / 240, hp = 28, gp = new q(), _p = new q(), vp = new q(), yp = new q(), bp = new q(), xp = new J(), Sp = new J(), Cp = new Et(), wp = new q(), Tp = new q(), Ep = new qt(), Dp = class {
	constructor(e) {
		this.desc = e, this.object = e.object, this.mass = e.density * e.volume;
		let t = e.size, n = this.mass;
		this.invInertia = new q(12 / (n * (t.y * t.y + t.z * t.z)), 12 / (n * (t.x * t.x + t.z * t.z)), 12 / (n * (t.x * t.x + t.y * t.y))), this.pos = new q(), this.vel = new q(), this.quat = new Et(), this.angVel = new q(), this.radius = e.size.length() / 2, this.wet = !1;
		let r = e.samples.length;
		this.cellVolume = e.volume / r, this.cellMass = n / r, this.world = e.samples.map(() => new q()), this.water = new Float32Array(r * 4), this.lastDisp = new Float32Array(r * 3).fill(NaN);
	}
	place(e, t) {
		this.pos.copy(e), this.vel.set(0, 0, 0), this.angVel.set(0, 0, 0), this.quat.setFromAxisAngle(gp.set(0, 1, 0), t), this.water.fill(0), this.lastDisp.fill(NaN), this.updateWorld();
	}
	updateWorld() {
		for (let e = 0; e < this.world.length; e++) this.world[e].copy(this.desc.samples[e]).applyQuaternion(this.quat).add(this.pos);
	}
}, Op = class {
	constructor({ scene: e, heightAt: t, patchMaterial: n }) {
		this.scene = new An(), e.add(this.scene), this.heightAt = t, this.patchMaterial = n, this.bodies = [], this.layout = 0, this.points = /* @__PURE__ */ new Float32Array(1024), this.count = 0, this.params = {
			drag: 1.6,
			angularDrag: .8,
			buoyancy: 1
		}, this.time = 0, this.impacts = [];
	}
	add(e, t, n = Math.random() * Math.PI * 2) {
		if (this.bodies.length >= hp) {
			let e = this.bodies.shift();
			this.scene.remove(e.object);
		}
		let r = new Dp(dp(e, this.patchMaterial));
		return r.place(t, n), this.scene.add(r.object), this.bodies.push(r), this.layout++, r;
	}
	clear() {
		for (let e of this.bodies) this.scene.remove(e.object);
		this.bodies.length = 0, this.layout++;
	}
	spawn(e, t) {
		this.clear();
		let n = vp.copy(t).setY(0).normalize(), r = new q(-n.z, 0, n.x), i = (t, i) => new q().copy(e).addScaledVector(n, t).addScaledVector(r, i).setY(.2);
		this.add("boat", i(22, -4), Math.atan2(n.x, n.z) + 1.2), this.add("buoy", i(38, 9)), [
			[12, 3],
			[16, -9],
			[27, 6],
			[31, -1],
			[19, 12]
		].forEach(([e, t]) => this.add("crate", i(e, t))), [
			[14, -2],
			[24, 14],
			[34, -8]
		].forEach(([e, t]) => this.add("barrel", i(e, t)));
	}
	collectPoints(e) {
		let t = 0;
		for (let n of e) this.points[t++] = n.x, this.points[t++] = n.z;
		for (let e of this.bodies) for (let n of e.world) this.points[t++] = n.x, this.points[t++] = n.z;
		return this.count = t / 2, this.points;
	}
	ingest(e, t) {
		if (e.resultTag !== this.layout || e.resultTime === this.lastResultTime) return;
		let n = this.lastResultTime === void 0 ? 0 : e.resultTime - this.lastResultTime;
		this.lastResultTime = e.resultTime;
		let r = e.result, i = t;
		for (let t of this.bodies) for (let a = 0; a < t.world.length; a++, i++) {
			if (i >= e.resultCount) return;
			let o = r[i * 4], s = r[i * 4 + 1], c = r[i * 4 + 2], l = t.water, u = t.lastDisp;
			if (l[a * 4] = o, n > 1e-4 && !Number.isNaN(u[a * 3])) {
				let e = (e, t) => Math.max(-t, Math.min(t, e));
				l[a * 4 + 1] = e((s - u[a * 3]) / n, 3), l[a * 4 + 2] = e((o - u[a * 3 + 1]) / n, .8), l[a * 4 + 3] = e((c - u[a * 3 + 2]) / n, 3);
			}
			u[a * 3] = s, u[a * 3 + 1] = o, u[a * 3 + 2] = c;
		}
	}
	step(e) {
		e = Math.min(e, 1 / 20), this.time += e;
		let t = Math.max(1, Math.ceil(e / mp)), n = e / t;
		for (let e = 0; e < t; e++) for (let e of this.bodies) this.integrate(e, n);
		for (let e of this.bodies) e.object.position.copy(e.pos), e.object.quaternion.copy(e.quat);
	}
	integrate(e, t) {
		let n = this.params, r = vp.set(0, -e.mass * pp, 0), i = bp.set(0, 0, 0), a = e.desc.cellHeight, o = !1;
		e.updateWorld();
		for (let t = 0; t < e.world.length; t++) {
			let s = e.world[t], c = e.water;
			_p.subVectors(s, e.pos), yp.copy(e.angVel).cross(_p).add(e.vel);
			let l = Tt.clamp((c[t * 4] - s.y) / a + .5, 0, 1);
			if (l > 0) {
				o = !0, gp.set(0, fp * pp * e.cellVolume * l * n.buoyancy, 0);
				let a = n.drag * e.cellMass * l;
				gp.x -= (yp.x - c[t * 4 + 1]) * a, gp.y -= (yp.y - c[t * 4 + 2]) * a * 1.5, gp.z -= (yp.z - c[t * 4 + 3]) * a, r.add(gp), i.add(Tp.copy(_p).cross(gp));
			}
			let u = this.heightAt(s.x, s.z) - s.y;
			if (u > 0) {
				let t = e.cellMass * 900;
				gp.set(-yp.x * e.cellMass * 6, u * t - yp.y * e.cellMass * 40, -yp.z * e.cellMass * 6), r.add(gp), i.add(Tp.copy(_p).cross(gp));
			}
		}
		if (o && !e.wet && e.vel.y < -1.5) {
			let t = e.desc.size;
			this.impacts.push({
				x: e.pos.x,
				z: e.pos.z,
				t: this.time,
				amp: Math.min(.35, .03 * -e.vel.y * Math.min(t.x, t.z)),
				size: Math.max(t.x, t.z) * .5
			}), this.impacts.length > 8 && this.impacts.shift();
		}
		e.wet = o, e.vel.addScaledVector(r, t / e.mass), e.pos.addScaledVector(e.vel, t), xp.setFromMatrix4(Ep.makeRotationFromQuaternion(e.quat)), Sp.copy(xp).transpose(), wp.copy(i).applyMatrix3(Sp).multiply(e.invInertia).applyMatrix3(xp), e.angVel.addScaledVector(wp, t), e.angVel.multiplyScalar(Math.exp(-n.angularDrag * t));
		let s = e.angVel.length();
		s > 1e-6 && (Cp.setFromAxisAngle(gp.copy(e.angVel).divideScalar(s), s * t), e.quat.premultiply(Cp).normalize());
	}
}, kp = 1;
function Ap(e = {}) {
	let t = e.canvas;
	if (!t) throw Error("createOcean: options.canvas is required");
	let n = e.container || null, r = e.showGui !== !1, i = e.title || "Water", a = e.hud || {}, o = typeof e.onStats == "function" ? e.onStats : null, s = typeof e.onReady == "function" ? e.onReady : null, c = e.autostart !== !1, l = new cl({
		canvas: t,
		antialias: !1,
		depth: !1,
		stencil: !1,
		alpha: !1,
		powerPreference: "high-performance"
	});
	l.autoClear = !1, l.shadowMap.enabled = !0, l.shadowMap.type = 1, l.shadowMap.autoUpdate = !1;
	let u = new URLSearchParams(location.search), d = e.mobile ?? (u.has("mobile") || !u.has("desktop") && matchMedia("(pointer: coarse)").matches), f = e.quality || (d ? {
		resolution: .6,
		msaa: 2,
		reflections: !0,
		reflectionScale: .35,
		autoResolution: !0
	} : {
		resolution: 1,
		msaa: 4,
		reflections: !0,
		reflectionScale: .5
	});
	document.body.classList.toggle("mobile", d);
	let p = new ba(50, 1, .5, 8e4), m = new yl(p, t);
	m.enableDamping = !0, m.maxDistance = 6e3;
	let h = new Dd(l), g = Qu(Ld, 1800, 512), y = td(l), b = new du(l, uu()), x = new Qd(l, b), S = new mu(), C = new Eu(b, g, h, S.uniforms);
	C.uniforms.uFoamTex.value = y.foam;
	let w = new An();
	w.environment = h.cube, w.add(h.background);
	let T = ff({
		sky: h,
		caustics: x.uniforms,
		floatShadow: S.uniforms,
		water: C.uniforms,
		absorption: C.uniforms.uAbsorption.value,
		reflectionLayer: kp
	});
	w.add(T.group);
	let E = new Ca(16777215, Math.PI);
	E.castShadow = !0, E.shadow.mapSize.set(4096, 4096), Object.assign(E.shadow.camera, {
		left: -900,
		right: 900,
		top: 900,
		bottom: -900,
		near: 10,
		far: 5e3
	}), E.shadow.bias = -4e-4, E.shadow.normalBias = .6, w.add(E, E.target), C.uniforms.uShadowMatrix.value = T.uniforms.uSunShadowMatrix.value = E.shadow.matrix, C.uniforms.uShadowBias.value = .05 / (E.shadow.camera.far - E.shadow.camera.near);
	let D = new Ff(l, C, 512), O = new Op({
		scene: w,
		heightAt: Ld,
		patchMaterial: T.patchProp
	}), k = new Bf(C, p, x.uniforms), A = 0, j = !1, ee = 1, te = { underwater: .55 }, M = new xf(kp);
	C.uniforms.uReflMatrix.value = M.textureMatrix;
	let ne = new Zr(/* @__PURE__ */ new Uint8Array(4), 1, 1);
	ne.needsUpdate = !0;
	let N = new An(), re = new Ql(Zl("\nprecision highp float;\nuniform sampler2D uTex;\nin vec2 vUv;\nout vec4 outColor;\nvoid main() { outColor = texture(uTex, vUv); }", { uTex: { value: null } }));
	re.mesh.renderOrder = -1, /OculusBrowser/.test(navigator.userAgent) && N.add(re.mesh);
	let P = new qf(C, g), ie = new Zf(C);
	N.add(C.mesh, P.mesh, P.splash, ie.mesh);
	let F = C.uniforms, ae = new Mf(l);
	ae.params.bloomStrength = .05, ae.params.bloomThreshold = 1.5, d && (ae.params.bloomStrength = 0);
	let oe = null;
	function se() {
		let e = l.getDrawingBufferSize(new K());
		oe?.dispose(), oe = new Wt(e.x, e.y, {
			type: v,
			samples: f.msaa,
			generateMipmaps: !1,
			depthTexture: new yi(e.x, e.y, _)
		}), re.material.uniforms.uTex.value = oe.texture, C.uniforms.uSceneColor.value = oe.texture, C.uniforms.uSceneDepth.value = oe.depthTexture, C.uniforms.uResolution.value.copy(e), M.scale = f.reflectionScale, M.setSize(e.x, e.y), ae.setSize(e.x, e.y), k.setSize(e.x, e.y);
	}
	function I() {
		l.setPixelRatio(Math.min(window.devicePixelRatio, 2) * f.resolution), l.setSize(window.innerWidth, window.innerHeight), p.aspect = window.innerWidth / window.innerHeight, p.updateProjectionMatrix(), se();
	}
	window.addEventListener("resize", I);
	let L = !0;
	function ce() {
		h.update(), E.position.copy(h.sunDir).multiplyScalar(2e3), E.color.setRGB(h.sunColor.x, h.sunColor.y, h.sunColor.z).multiplyScalar(1 / Math.max(h.sunColor.x, 1e-4)), E.intensity = Math.PI * Math.max(h.sunColor.x, 1e-4), l.shadowMap.needsUpdate = !0, L = !1;
	}
	function le(e) {
		let t = Tt.degToRad(e), n = 100;
		for (; n < 800 && Ld(Math.cos(t) * n, Math.sin(t) * n) > 0;) n += 2;
		return new K(Math.cos(t) * n, Math.sin(t) * n);
	}
	function ue() {
		return Math.atan2(h.sunDir.z, h.sunDir.x);
	}
	function de(e, t) {
		Object.assign(h.params, {
			elevation: e,
			azimuth: t
		}), pe?.controllers.forEach((e) => e.updateDisplay()), ce();
	}
	let fe = {
		"Golden hour": () => {
			de(3.5, 205);
			let e = ue(), t = le(Tt.radToDeg(e) + 18);
			p.position.set(t.x + Math.cos(e) * 120, 5, t.y + Math.sin(e) * 120), m.target.set(t.x + Math.cos(e) * 400, 0, t.y + Math.sin(e) * 400);
		},
		Breakers: () => {
			de(22, 205);
			let e = ue() + 1.9, t = le(Tt.radToDeg(e));
			p.position.set(t.x + Math.cos(e) * 35 + Math.sin(e) * 40, 3.2, t.y + Math.sin(e) * 35 - Math.cos(e) * 40), m.target.set(t.x - Math.sin(e) * 30, 0, t.y + Math.cos(e) * 30);
		},
		Lagoon: () => {
			de(52, 205);
			let e = ue() + Math.PI, t = le(Tt.radToDeg(e));
			p.position.set(t.x * .86, 28, t.y * .86), m.target.set(t.x * 1.25, 0, t.y * 1.25);
		},
		"Open ocean": () => {
			de(14, 205);
			let e = ue() + .5;
			p.position.set(Math.cos(e) * 1500, 9, Math.sin(e) * 1500), m.target.set(Math.cos(e) * 2400, 0, Math.sin(e) * 2400 + 600);
		},
		Aerial: () => {
			de(30, 205), p.position.set(900, 420, 900), m.target.set(0, 0, 0);
		},
		Flotsam: () => {
			de(26, 205);
			let e = ue() + 1.2, t = le(Tt.radToDeg(e)), n = new K(Math.cos(e), Math.sin(e)), r = new K(-n.y, n.x);
			p.position.set(t.x + n.x * 75 + r.x * 10, 4.5, t.y + n.y * 75 + r.y * 10), m.target.set(t.x + n.x * 45 - r.x * 15, 0, t.y + n.y * 45 - r.y * 15), O.spawn(p.position, m.target.clone().sub(p.position));
		},
		Underwater: () => {
			de(48, 205);
			let e = ue() + Math.PI + .3, t = 200;
			for (; t < 1e3 && Ld(Math.cos(e) * t, Math.sin(e) * t) > -9;) t += 2;
			let n = Math.cos(e) * t, r = Math.sin(e) * t;
			p.position.set(n, -3.2, r), m.target.set(n - Math.cos(e) * 25, -1.8, r - Math.sin(e) * 25), O.spawn(p.position, m.target.clone().sub(p.position));
		}
	}, pe = null, me = null, he = null, ge = {
		view: e.view || "Golden hour",
		benchmark: () => Ne(),
		exposure: 1
	};
	if (r) {
		me = new ql({
			title: i,
			container: n || void 0,
			injectStyles: !1
		}), d && me.close(), me.add(ge, "view", Object.keys(fe)).name("camera").onChange((e) => fe[e]()), me.add(ge, "benchmark").name("benchmark (uncapped)"), pe = me.addFolder("Sun & sky"), pe.add(h.params, "elevation", -2, 70, .1).onChange(() => L = !0), pe.add(h.params, "azimuth", 0, 360, .5).onChange(() => L = !0), pe.add(h.params, "sunIntensity", 0, 20, .1).onChange(() => L = !0), pe.add(h.params, "cloudCoverage", 0, 1, .01).onChange(() => L = !0), pe.add(h.params, "turbidity", 1, 10, .1).onChange(() => L = !0);
		let e = b.params, t = () => b.dirty = !0, r = me.addFolder("Waves");
		r.add(e, "windSpeed", 1, 25, .1).onChange(t), r.add(e, "windDirection", -180, 180, 1).onChange(t), r.add(e, "fetchKm", 5, 1e3, 1).onChange(t), r.add(e, "waveScale", 0, 3, .01).onChange(t), r.add(e, "spreadBlend", 0, 1, .01).onChange(t), r.add(e, "swellScale", 0, 3, .01).onChange(t), r.add(e, "swellDirection", -180, 180, 1).onChange(t), r.add(e, "choppiness", 0, 2, .01), r.add(e, "timeScale", 0, 3, .01);
		let a = {
			amplitude: F.uShoreWave.value.x,
			wavelength: F.uShoreWave.value.y,
			speed: F.uShoreWave.value.z,
			steepness: F.uShoreWave.value.w
		}, o = () => F.uShoreWave.value.set(a.amplitude, a.wavelength, a.speed, a.steepness), s = me.addFolder("Shore waves");
		s.add(a, "amplitude", 0, 1.5, .01).onChange(o), s.add(a, "wavelength", 8, 60, .5).onChange(o), s.add(a, "speed", .3, 2, .01).onChange(o), s.add(a, "steepness", 0, 1.5, .01).onChange(o), s.add(P.params, "amount", 0, 3, .01).name("spray"), s.add(P.params, "size", .2, 3, .01).name("spray size");
		let c = {
			clear: {
				absorption: [
					.42,
					.075,
					.048
				],
				scatter: [
					0,
					.05,
					.08
				],
				foam: [
					.62,
					.78,
					.82
				],
				turbidity: .03
			},
			tropical: {
				absorption: [
					.36,
					.045,
					.06
				],
				scatter: [
					0,
					.085,
					.085
				],
				foam: [
					.66,
					.86,
					.84
				],
				turbidity: .02
			},
			"toxic green": {
				absorption: [
					.45,
					.1,
					1.1
				],
				scatter: [
					.05,
					.1,
					.004
				],
				foam: [
					.74,
					.84,
					.42
				],
				turbidity: .08
			},
			purple: {
				absorption: [
					.22,
					.85,
					.1
				],
				scatter: [
					.05,
					0,
					.09
				],
				foam: [
					.8,
					.66,
					.88
				],
				turbidity: .04
			},
			"rust orange": {
				absorption: [
					.1,
					.34,
					1.2
				],
				scatter: [
					.11,
					.035,
					.004
				],
				foam: [
					.9,
					.72,
					.55
				],
				turbidity: .1
			},
			"murky brown": {
				absorption: [
					.55,
					.62,
					.9
				],
				scatter: [
					.045,
					.045,
					.022
				],
				foam: [
					.78,
					.74,
					.6
				],
				turbidity: .25
			}
		}, l = me.addFolder("Water"), u = {
			preset: "clear",
			roughness: F.uOptics.value.x,
			refraction: F.uOptics.value.y,
			reflectionDistort: F.uOptics.value.z,
			sssPeak: F.uSSS.value.x,
			sssView: F.uSSS.value.y,
			foamBias: F.uFoam.value.x,
			foamScale: F.uFoam.value.y,
			shoreFoamBand: F.uFoam.value.z,
			foamRecovery: e.foamRecovery,
			caustics: T.uniforms.uCausticStrength.value,
			scatter: "#" + F.uScatterColor.value.getHexString(),
			clarity: 1
		}, m = F.uAbsorption.value.clone(), g = () => {
			F.uOptics.value.x = u.roughness, F.uOptics.value.y = u.refraction, F.uOptics.value.z = u.reflectionDistort, F.uSSS.value.x = u.sssPeak, F.uSSS.value.y = u.sssView, F.uFoam.value.x = u.foamBias, F.uFoam.value.y = u.foamScale, F.uFoam.value.z = u.shoreFoamBand, e.foamRecovery = u.foamRecovery, T.uniforms.uCausticStrength.value = u.caustics, F.uScatterColor.value.set(u.scatter), F.uAbsorption.value.copy(m).multiplyScalar(1 / u.clarity);
		};
		l.add(u, "preset", Object.keys(c)).name("colour preset").onChange(() => {
			let e = c[u.preset];
			m.fromArray(e.absorption), u.scatter = "#" + new Z().fromArray(e.scatter).getHexString(), F.uFoamTint.value.fromArray(e.foam), k.params.scattering = e.turbidity, g(), me.controllersRecursive().forEach((e) => e.updateDisplay());
		}), l.add(u, "clarity", .2, 4, .01).onChange(g), l.addColor(u, "scatter").onChange(g), l.add(u, "roughness", .005, .2, .001).onChange(g), l.add(u, "refraction", 0, .2, .001).onChange(g), l.add(u, "reflectionDistort", 0, .2, .001).onChange(g), l.add(u, "sssPeak", 0, 6, .01).onChange(g), l.add(u, "sssView", 0, .5, .001).onChange(g), l.add(u, "foamBias", -.5, 1.5, .01).onChange(g), l.add(u, "foamScale", 0, 6, .01).onChange(g), l.add(u, "foamRecovery", .05, 3, .01).onChange(g), l.add(u, "shoreFoamBand", 0, 2, .01).onChange(g), l.add(u, "caustics", 0, 2, .01).onChange(g), l.add(F.uGlint, "value", 0, 1, .01).name("glitter");
		let _ = me.addFolder("Floaters & underwater"), v = (e) => {
			let t = p.getWorldDirection(new q()).setY(0).normalize();
			return p.position.clone().addScaledVector(t, e);
		}, y = {
			spawn: () => O.spawn(p.position, p.getWorldDirection(new q())),
			drop: () => O.add(Qf[Math.floor(Math.random() * Qf.length)], v(14).setY(Math.max(A, 0) + 4)),
			clear: () => O.clear()
		};
		_.add(y, "spawn").name("spawn flotsam ahead"), _.add(y, "drop").name("drop random prop"), _.add(y, "clear"), _.add(O.params, "drag", 0, 6, .01), _.add(O.params, "angularDrag", 0, 4, .01), _.add(O.params, "buoyancy", 0, 2, .01), _.add(k.params, "scattering", 0, .5, .001), _.add(k.params, "shafts", 0, 4, .01), _.add(k.params, "shaftRange", 5, 120, 1), _.add(k.params, "meniscus", 0, 1, .01), _.add(te, "underwater", .2, 2, .01).name("underwater exposure");
		let x = me.addFolder("Post");
		x.add(ge, "exposure", .25, 4, .01).name("exposure comp"), x.add(ae.params, "autoExposure"), x.add(ae.params, "keyValue", .05, .6, .01), x.add(ae.params, "bloomStrength", 0, .5, .001), x.add(ae.params, "bloomThreshold", 0, 10, .01), x.add(ae.params, "contrast", .7, 1.6, .01), x.add(ae.params, "saturation", 0, 2, .01);
		let S = me.addFolder("Quality");
		he = S.add(f, "resolution", .25, 1, .05).onFinishChange(I), d && S.add(f, "autoResolution").name("auto resolution"), S.add(f, "msaa", [
			2,
			4,
			8
		]).onChange(se), S.add(f, "reflections"), S.add(f, "reflectionScale", .25, 1, .05).onFinishChange(se), [
			r,
			s,
			l,
			_,
			x
		].forEach((e) => e.close());
	}
	let _e = l.getContext(), ve = new Nf(_e), ye = 0;
	function be(e) {
		ye += e, L && ce(), ve.beginFrame(), D.resultCount > 0 && (A = D.result[0]), O.ingest(D, 1), O.step(e), ve.begin("floatShadow"), S.update(l, O.scene, O.bodies, h.sunDir);
		for (let e = 0; e < 8; e++) {
			let t = O.impacts[e], n = t ? O.time - t.t : 1e9;
			F.uImpact.value[e].set(t?.x ?? 0, t?.z ?? 0, n, n < 30 ? t.amp : 0), F.uImpactSize.value[e] = t?.size ?? 1;
		}
		b.update(e, ve), ve.begin("caustics"), x.update(h.sunDir), C.update(p, ye % 3600), P.update(), ve.begin("query");
		let t = O.collectPoints([p.position]);
		D.submit(t, O.count, O.layout, ye);
		let n = p.position.y, r = n < A - .3, i = n < A + 1.2;
		F.uCamSide.value = n > A + .5 ? -1 : +(n < A - .5), ie.update(p, oe.height, i), ee += ((r ? te.underwater : 1) - ee) * Math.min(1, e * 3), ae.params.exposure = ge.exposure * ee, ae.params.droplets = j && !r ? 1 : r ? 0 : Math.max(0, ae.params.droplets - e / 5), j = r, ve.begin("reflection"), f.reflections && !r ? (M.render(l, w, p), F.uReflection.value = M.target.texture) : F.uReflection.value = ne, ve.begin("opaque"), l.setRenderTarget(oe), l.setClearColor(0, 1), l.clear(!0, !0, !1), l.render(w, p), ve.begin("water"), F.uShadowMap.value = E.shadow.map.depthTexture, oe.resolveDepthBuffer = i, l.render(N, p), oe.resolveDepthBuffer = !0;
		let a = oe.texture;
		i && (ve.begin("underwater"), a = k.render(l, oe, n < A - .8)), ve.begin("post"), ae.render(a, e), ve.endFrame();
	}
	function xe() {
		let e = Ld(p.position.x, p.position.z) + .8;
		p.position.y < e && (p.position.y = e);
	}
	async function Se() {
		let e = _e.fenceSync(_e.SYNC_GPU_COMMANDS_COMPLETE, 0);
		for (_e.flush(); _e.clientWaitSync(e, 0, 0) === _e.TIMEOUT_EXPIRED;) await new Promise((e) => setTimeout(e, 1));
		_e.deleteSync(e);
	}
	let Ce = !1;
	async function we(e = 300) {
		if (Ce) return null;
		Ce = !0, ve.drain();
		for (let e = 0; e < 20; e++) be(1 / 200);
		await Se(), ve.drain(), ve.keep = !0;
		let t = performance.now();
		for (let t = 0; t < e; t++) be(1 / 200);
		await Se();
		let n = (performance.now() - t) / e, r = ve.drain();
		ve.keep = !1, Ce = !1;
		let i = l.getDrawingBufferSize(new K()), a = Object.values(r).reduce((e, t) => e + t, 0);
		return ke = `benchmark ${n.toFixed(2)} ms/frame = ${(1e3 / n).toFixed(0)} fps${ve.available ? ` (GPU ${a.toFixed(2)} ms)` : ""}` + Object.entries(r).map(([e, t]) => `
  ${e.padEnd(12)} ${t.toFixed(3)} ms`).join(""), console.log(`${i.x}×${i.y} ${ke}`), {
			ms: n,
			gpu: a,
			passes: r
		};
	}
	let Te = (e) => document.getElementById(e), R = e.perfPanel === !1 ? {} : {
		gpu: Te("pGpu"),
		spec: Te("pSpec"),
		fps: Te("pFps"),
		mode: Te("pMode"),
		ms: Te("pMs"),
		graph: Te("pGraph"),
		uncap: Te("pUncap"),
		bench: Te("pBench"),
		hud: Te("hud")
	};
	if (R.fps && R.graph && R.uncap && R.bench, R.gpu) {
		let e = _e.getExtension("WEBGL_debug_renderer_info"), t = e ? _e.getParameter(e.UNMASKED_RENDERER_WEBGL) : "unknown GPU";
		R.gpu.textContent = t.split(", ")[1]?.replace(/ \(0x.*$/, "") || t;
	}
	let Ee = null;
	if (R.graph) try {
		Ee = R.graph.getContext("2d");
	} catch {
		Ee = null;
	}
	let De = a.fps || null, Oe = a.stat || null, ke = "", z = 0, Ae = performance.now(), je = performance.now(), Me = !1, B = [];
	R.uncap && (R.uncap.onclick = () => {
		Me = !Me, R.uncap.textContent = Me ? "Cap to display" : "Uncap FPS", R.uncap.classList.toggle("on", Me), B.length = 0;
	});
	function Ne() {
		!R.bench || R.bench.disabled ? R.bench || we() : (R.bench.disabled = !0, R.bench.textContent = "Benchmarking…", new Promise((e) => requestAnimationFrame(() => setTimeout(e))).then(() => we()).then(() => {
			R.bench.disabled = !1, R.bench.textContent = "Run benchmark";
		}));
	}
	R.bench && (R.bench.onclick = Ne);
	function V(e) {
		let t = z * 1e3 / (e - Ae), n = l.getDrawingBufferSize(new K());
		R.spec && (R.spec.textContent = `${n.x}×${n.y} · ${f.msaa}× MSAA · ${d ? "mobile" : "desktop"} profile`), R.fps && (R.fps.textContent = t.toFixed(0)), R.mode && (R.mode.textContent = Me ? "UNCAPPED" : "VSYNC"), R.ms && (R.ms.textContent = `${(1e3 / t).toFixed(2)} ms/frame`), De && (De.textContent = t.toFixed(0));
		let r = p.position.y < A - .3;
		if (Oe && (Oe.textContent = `${n.x}×${n.y} · ${f.msaa}× msaa · ${d ? "mobile" : "desktop"} · ${r ? "submerged" : "surface"} · ${A.toFixed(2)} m`), o && o({
			fps: t,
			size: {
				x: n.x,
				y: n.y
			},
			camWater: A,
			submerged: r,
			mobile: d
		}), B.push(t), B.length > 40 && B.shift(), Ee) {
			let { width: e, height: t } = R.graph, n = Math.min(...B) * .9, r = Math.max(...B) * 1.05;
			Ee.clearRect(0, 0, e, t), Ee.beginPath(), B.forEach((i, a) => Ee.lineTo(e * a / Math.max(1, B.length - 1), t - t * (i - n) / (r - n || 1))), Ee.strokeStyle = "#2cc9ff", Ee.lineWidth = 3, Ee.stroke();
		}
		if (R.hud) {
			let e = "";
			if (ve.available && ve.total > 0) {
				e += `GPU timers ${ve.total.toFixed(2)} ms${Me ? "" : " (vsync-idle clocks)"}`;
				for (let [t, n] of Object.entries(ve.ms)) e += `\n  ${t.padEnd(10)} ${n.toFixed(3)} ms`;
			}
			ke && (e += `${e ? "\n" : ""}${ke}`), R.hud.textContent = e;
		}
		z = 0, Ae = e;
	}
	let H = {
		n: -240,
		missed: 0,
		clean: 0,
		top: f.resolution,
		cap30: !1,
		odd: !1
	};
	function Pe(e) {
		if (e > 250 || ++H.n <= 0 || (e > (H.cap30 ? 40 : 20) && H.missed++, H.n < 120 || H.cap30)) return;
		let t = f.resolution, n = H.missed / H.n;
		H.n = H.missed = 0, n > .04 ? (H.clean = 0, t > .5 ? Fe(t - .05) : n > .25 && (H.cap30 = !0)) : n <= .01 && ++H.clean >= 3 && t < H.top && (H.clean = 0, Fe(t + .05));
	}
	function Fe(e) {
		f.resolution = Math.round(e * 20) / 20, he?.updateDisplay(), I(), H.n = -60;
	}
	let Ie = !0;
	function Le(e) {
		let t = Math.min((e - je) / 1e3, .1);
		je = e, m.update(), xe(), be(t), z++, e - Ae > 500 && V(e), Ie && (Ie = !1, s?.({ app: Ge }));
	}
	let Re = 0;
	function ze(e) {
		Me ? He() : (H.cap30 && (H.odd = !H.odd) || (Ce ? je = e : (f.autoResolution && Pe(e - je), Le(e))), Re = requestAnimationFrame(ze));
	}
	let Be = [], Ve = new MessageChannel();
	Ve.port1.onmessage = He;
	function He() {
		if (!Me || document.hidden) Be.splice(0).forEach((e) => _e.deleteSync(e)), Re = requestAnimationFrame(ze);
		else {
			for (; Be.length && _e.clientWaitSync(Be[0], 0, 0) !== _e.TIMEOUT_EXPIRED;) _e.deleteSync(Be.shift());
			Be.length < 3 && !Ce && (Le(performance.now()), Be.push(_e.fenceSync(_e.SYNC_GPU_COMMANDS_COMPLETE, 0)), _e.flush()), Ve.port2.postMessage(0);
		}
	}
	I(), ce(), fe[ge.view]?.(), m.update();
	function Ue(e) {
		fe[e] && (ge.view = e, fe[e]());
	}
	function We() {
		cancelAnimationFrame(Re), me?.destroy(), l.dispose();
	}
	let Ge = {
		canvas: t,
		renderer: l,
		camera: p,
		controls: m,
		scene: w,
		sky: h,
		post: ae,
		surface: C,
		ocean: b,
		terrain: T,
		timer: ve,
		views: fe,
		quality: f,
		floaters: O,
		query: D,
		underwater: k,
		spray: P,
		snow: ie,
		caustics: x,
		floatShadow: S,
		gui: me,
		camWater: () => A,
		markSun: () => L = !0,
		setView: Ue,
		runBenchmark: we,
		dispose: We
	};
	return window.app = Ge, window.runBenchmark = we, c && (Re = requestAnimationFrame(ze)), Ge;
}
export { Ap as createOcean, Ap as default };
