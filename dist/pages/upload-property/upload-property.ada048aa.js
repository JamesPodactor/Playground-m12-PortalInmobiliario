// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aN4KM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "054276b2ada048aa";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1pyLr":[function(require,module,exports) {
var _uploadPropertyApi = require("./upload-property.api");
var _uploadPropertyHelpers = require("./upload-property.helpers");
var _helpers = require("../../common/helpers");
var _uploadPropertyValidations = require("./upload-property.validations");
var _uploadPropertyMappers = require("./upload-property.mappers");
let newProperty = {
    title: "",
    notes: "",
    email: "",
    phone: "",
    price: "",
    saleTypes: [],
    address: "",
    city: "",
    province: "",
    squareMeter: "",
    rooms: "",
    bathrooms: "",
    locationUrl: "",
    newFeature: "",
    mainFeatures: [],
    equipments: [],
    images: ""
};
Promise.all([
    (0, _uploadPropertyApi.getSaleTypeList)(),
    (0, _uploadPropertyApi.getProvinceList)(),
    (0, _uploadPropertyApi.getEquipments)()
]).then(([saleTypeList, provinceList, equipmentList])=>{
    (0, _uploadPropertyHelpers.setCheckboxList)(saleTypeList, "saleTypes");
    setSalesEvents(saleTypeList);
    (0, _uploadPropertyHelpers.setOptionList)(provinceList, "province");
    (0, _uploadPropertyHelpers.setCheckboxList)(equipmentList, "equipments");
    setEquipmentEvents(equipmentList);
});
const addSaleType = (value)=>{
    newProperty = {
        ...newProperty,
        saleTypes: [
            ...newProperty.saleTypes,
            value
        ]
    };
};
const removeSaleType = (value)=>{
    const idElement = newProperty.saleTypes.indexOf(value);
    newProperty = newProperty.saleTypes.filter((element)=>{});
};
const addEquipment = (value)=>{
    newProperty = {
        ...newProperty,
        equipments: [
            ...newProperty.equipments,
            value
        ]
    };
};
const removeEquipment = (value)=>{
    const idCheckbox = newProperty.equipment.indexOf(value);
    newProperty = newProperty.equipment.filter((element)=>{});
};
// DATOS GENERALES ________________________________________________________
(0, _helpers.onUpdateField)("title", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        title: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("title", newProperty.title).then((result)=>{
        (0, _helpers.onSetError)("title", result);
    });
});
(0, _helpers.onUpdateField)("notes", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        notes: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("notes", newProperty.notes).then((result)=>{
        (0, _helpers.onSetError)("notes", result);
    });
});
(0, _helpers.onUpdateField)("email", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        email: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("email", newProperty.email).then((result)=>{
        (0, _helpers.onSetError)("email", result);
    });
});
(0, _helpers.onUpdateField)("phone", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        phone: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("phone", newProperty.phone).then((result)=>{
        (0, _helpers.onSetError)("phone", result);
    });
});
(0, _helpers.onUpdateField)("price", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        price: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("price", newProperty.price).then((result)=>{
        (0, _helpers.onSetError)("price", result);
    });
});
const setSalesEvents = (list)=>{
    list.forEach((element)=>{
        const id = (0, _uploadPropertyHelpers.formatCheckboxId)(element);
        (0, _helpers.onUpdateField)(id, (event)=>{
            const value = event.target.value;
            event.target.checked ? addSaleType(value) : removeSaleType(value);
        });
    });
};
// DATOS DE LA VIVIENDA ___________________________________________________
(0, _helpers.onUpdateField)("address", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        address: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("address", newProperty.address).then((result)=>{
        (0, _helpers.onSetError)("address", result);
    });
});
(0, _helpers.onUpdateField)("city", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        city: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("city", newProperty.city).then((result)=>{
        (0, _helpers.onSetError)("city", result);
    });
});
(0, _helpers.onUpdateField)("province", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        province: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("province", newProperty.province).then((result)=>{
        (0, _helpers.onSetError)("province", result);
    });
});
(0, _helpers.onUpdateField)("squareMeter", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        squareMeter: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("squareMeter", newProperty.squareMeter).then((result)=>{
        (0, _helpers.onSetError)("squareMeter", result);
    });
});
(0, _helpers.onUpdateField)("rooms", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        rooms: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("rooms", newProperty.rooms).then((result)=>{
        (0, _helpers.onSetError)("rooms", result);
    });
});
(0, _helpers.onUpdateField)("bathrooms", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        bathrooms: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("bathrooms", newProperty.bathrooms).then((result)=>{
        (0, _helpers.onSetError)("bathrooms", result);
    });
});
(0, _helpers.onUpdateField)("locationUrl", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        locationUrl: value
    };
    (0, _uploadPropertyValidations.formValidation).validateField("locationUrl", newProperty.locationUrl).then((result)=>{
        (0, _helpers.onSetError)("locationUrl", result);
    });
});
(0, _helpers.onSubmitForm)("insert-feature-button", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        newFeature: [
            ...newProperty.newFeature,
            value
        ]
    };
    (0, _uploadPropertyHelpers.onAddFeature)(value);
    const featureId = (0, _uploadPropertyHelpers.formatDeleteFeatureButtonId)(value);
    (0, _helpers.onSubmitForm)(featureId, (event)=>{
        (0, _uploadPropertyHelpers.onRemoveFeature)(value);
        const id = newProperty.newFeature.indexOf(value);
        newProperty = newProperty.newFeature.filter((element)=>{});
    });
});
const setEquipmentEvents = (list)=>{
    list.forEach((element)=>{
        const id = (0, _uploadPropertyHelpers.formatCheckboxId)(element);
        (0, _helpers.onUpdateField)(id, (event)=>{
            const value = event.target.value;
            event.target.checked ? addEquipment(value) : removeEquipment(value);
        });
    });
};
// SUBIR FOTOS_____________________________________________________________
const setImage = (image)=>{
    const id = (0, _uploadPropertyHelpers.onAddImage)(image);
    (0, _helpers.onUpdateField)(id, (event)=>{
        event.target.value;
    });
};
(0, _helpers.onUpdateField)("images", (event)=>{
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        images: value
    };
});
(0, _helpers.onSubmitForm)("save-button", ()=>{
    console.log(newProperty);
    (0, _uploadPropertyValidations.formValidation).validateForm(newProperty).then((result)=>{
        (0, _helpers.onSetFormErrors)(result);
        if (result.succeeded) {
            const apiNewProperty = (0, _uploadPropertyMappers.mapPropertyVmToApi)(newProperty);
            (0, _uploadPropertyApi.updateProperty)(apiNewProperty).then((response)=>{
                alert("Nueva propiedad creada con \xe9xito");
            });
        }
    });
});

},{"./upload-property.api":"dsXzM","./upload-property.helpers":"fPeMT","../../common/helpers":"tIcrk","./upload-property.validations":"71Ojx","./upload-property.mappers":"jeZJk"}],"dsXzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSaleTypeList", ()=>getSaleTypeList);
parcelHelpers.export(exports, "getProvinceList", ()=>getProvinceList);
parcelHelpers.export(exports, "getEquipments", ()=>getEquipments);
parcelHelpers.export(exports, "updateProperty", ()=>updateProperty);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const saleTypeListUrl = `${"http://localhost:3000/api"}/saleTypes`;
const getSaleTypeList = ()=>(0, _axiosDefault.default).get(saleTypeListUrl).then(({ data  })=>data);
const provinceListUrl = `${"http://localhost:3000/api"}/provinces`;
const getProvinceList = ()=>(0, _axiosDefault.default).get(provinceListUrl).then(({ data  })=>data);
const equipmentUrl = `${"http://localhost:3000/api"}/equipments`;
const getEquipments = ()=>(0, _axiosDefault.default).get(equipmentUrl).then(({ data  })=>data);
const propertyUrl = `${"http://localhost:3000/api"}/properties`;
const updateProperty = (prop)=>(0, _axiosDefault.default).post(`${propertyUrl}`, prop).then(({ data  })=>data);

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fPeMT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatCheckboxId", ()=>formatCheckboxId);
parcelHelpers.export(exports, "setCheckboxList", ()=>setCheckboxList);
parcelHelpers.export(exports, "setOptionList", ()=>setOptionList);
parcelHelpers.export(exports, "formatDeleteFeatureButtonId", ()=>formatDeleteFeatureButtonId);
parcelHelpers.export(exports, "onAddFeature", ()=>onAddFeature);
parcelHelpers.export(exports, "onRemoveFeature", ()=>onRemoveFeature);
parcelHelpers.export(exports, "onAddImage", ()=>onAddImage);
const formatCheckboxId = (item)=>`${item.id}-${item.name}`;
const getCheckbox = (item)=>{
    const container = document.createElement("label");
    container.classList.add("checkbox-contenedor");
    container.textContent = item.name;
    const input = document.createElement("input");
    input.id = formatCheckboxId(item);
    input.value = item.id;
    input.type = "checkbox";
    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");
    container.appendChild(input);
    container.appendChild(checkmark);
    return container;
};
const setCheckboxList = (list, id)=>{
    const listElement = document.getElementById(id);
    list.forEach((item)=>{
        const checkbox = getCheckbox(item);
        listElement.appendChild(checkbox);
    });
};
const getOption = (item)=>{
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    return option;
};
const setOptionList = (list, id)=>{
    const listElement = document.getElementById(id);
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Provincia";
    listElement.appendChild(defaultOption);
    list.forEach((item)=>{
        const option = getOption(item);
        listElement.appendChild(option);
    });
};
const formatDeleteFeatureButtonId = (feature)=>`delete-${feature}-button`;
const onAddFeature = (feature)=>{
    const mainFeaturesElement = document.getElementById("mainFeatures");
    const featureContainer = document.createElement("div");
    featureContainer.id = `delete-${feature}`;
    featureContainer.classList.add("feature");
    const deleteButton = document.createElement("button");
    deleteButton.id = formatDeleteFeatureButtonId(feature);
    deleteButton.type = "button";
    const featureElement = document.createElement("span");
    featureElement.textContent = feature;
    featureContainer.appendChild(deleteButton);
    featureContainer.appendChild(featureElement);
    mainFeaturesElement.appendChild(featureContainer);
    const newFeatureElement = document.getElementById("newFeature");
    newFeatureElement.value = "";
};
const onRemoveFeature = (feature)=>{
    const mainFeaturesElement = document.getElementById("mainFeatures");
    const featureContainer = document.getElementById(`delete-${feature}`);
    mainFeaturesElement.removeChild(featureContainer);
};
const onAddImage = (image)=>{
    const imagesElement = document.getElementById("images");
    const addImageButton = document.getElementById("add-image-button");
    const imageContainerElement = document.createElement("div");
    imageContainerElement.classList.add("add_img");
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageContainerElement.appendChild(imageElement);
    imagesElement.insertBefore(imageContainerElement, addImageButton);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tIcrk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementHelpers = require("./element.helpers");
parcelHelpers.exportAll(_elementHelpers, exports);

},{"./element.helpers":"lvY4R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71Ojx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formValidation", ()=>formValidation);
var _fonk = require("@lemoncode/fonk");
var _fonkIsNumberValidator = require("@lemoncode/fonk-is-number-validator");
var _fonkIsUrlValidator = require("@lemoncode/fonk-is-url-validator");
const validationSchema = {
    field: {
        title: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        notes: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        email: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonk.Validators).email,
                message: "Introduzca un email v\xe1lido"
            }
        ],
        phone: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonk.Validators).pattern,
                customArgs: {
                    pattern: /^(6|7|8|9)\d{8}$/
                },
                message: "Introduzca un tel\xe9fono v\xe1lido"
            }
        ],
        price: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonkIsNumberValidator.isNumber).validator,
                message: "Introduzca una cantidad v\xe1lida"
            }
        ],
        saleTypes: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        address: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        city: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        city: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        province: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ],
        squareMeter: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonkIsNumberValidator.isNumber).validator,
                message: "Introduzca un n\xfamero v\xe1lido"
            }
        ],
        rooms: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonkIsNumberValidator.isNumber).validator,
                message: "Introduzca un n\xfamero v\xe1lido"
            }
        ],
        bathrooms: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonkIsNumberValidator.isNumber).validator,
                message: "Introduzca un n\xfamero v\xe1lido"
            }
        ],
        locationUrl: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            },
            {
                validator: (0, _fonkIsUrlValidator.isUrl).validator,
                message: "Introduzca un Url v\xe1lido"
            }
        ],
        equipments: [
            {
                validator: (0, _fonk.Validators).required,
                message: "Campo requerido"
            }
        ]
    }
};
const formValidation = (0, _fonk.createFormValidation)(validationSchema);

},{"@lemoncode/fonk":"lVeW7","@lemoncode/fonk-is-number-validator":"Dd9bI","@lemoncode/fonk-is-url-validator":"CHSfk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Dd9bI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>validator$1);
var VALIDATOR_TYPE = "IS_NUMBER";
var defaultCustomArgs = {
    strictTypes: false
};
var setCustomArgs = function setCustomArgs(customArgs) {
    return defaultCustomArgs = customArgs;
};
var defaultMessage = "Must be a number";
var setErrorMessage = function setErrorMessage(message) {
    return defaultMessage = message;
};
var isDefined = function isDefined(value) {
    return value !== void 0 && value !== null && value !== "";
};
var validateType = function validateType(value, args) {
    return !args.strictTypes || typeof value === "number";
};
var validate = function validate(value) {
    return !isNaN(Number(value));
};
var validator = function validator(fieldValidatorArgs) {
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage : _fieldValidatorArgs$m, _fieldValidatorArgs$c = fieldValidatorArgs.customArgs, customArgs = _fieldValidatorArgs$c === void 0 ? defaultCustomArgs : _fieldValidatorArgs$c;
    var succeeded = !isDefined(value) || validateType(value, customArgs) && validate(value);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : message,
        type: VALIDATOR_TYPE
    };
};
var validator$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setCustomArgs: setCustomArgs,
    setErrorMessage: setErrorMessage,
    validator: validator
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CHSfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isUrl", ()=>validator$1);
var _fonk = require("@lemoncode/fonk");
var VALIDATOR_TYPE = "IS_URL";
var defaultMessage = "Provided value is not a valid url";
var setErrorMessage = function setErrorMessage(message) {
    return defaultMessage = message;
};
var isDefined = function isDefined(value) {
    return value !== void 0 && value !== null && value !== "";
};
var regex = /^(?:((?:(?:https?|ftp):\/\/))|(?:www.))+(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/;
var isUrl = function isUrl(url) {
    return regex.test(url);
};
var validator = function validator(fieldValidatorArgs) {
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage : _fieldValidatorArgs$m, customArgs = fieldValidatorArgs.customArgs;
    var succeeded = !isDefined(value) || isUrl(value);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : (0, _fonk.parseMessageWithCustomArgs)(message || defaultMessage, customArgs),
        type: VALIDATOR_TYPE
    };
};
var validator$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage,
    validator: validator
});

},{"@lemoncode/fonk":"lVeW7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeZJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapPropertyVmToApi", ()=>mapPropertyVmToApi);
const mapPropertyVmToApi = (prop)=>{
    return {
        title: prop.title,
        notes: prop.notes,
        email: prop.email,
        phone: prop.phone,
        price: prop.price,
        saleTypes: prop.saleTypes,
        address: prop.address,
        city: prop.city,
        province: prop.province,
        squareMeter: prop.squareMeter,
        rooms: prop.rooms,
        bathrooms: prop.bathrooms,
        locationUrl: prop.locationUrl,
        newFeature: prop.newFeature,
        mainFeatures: prop.mainFeatures,
        equipmentIds: getEquipmentID(prop.equipments, equipments),
        images: prop.images
    };
};
const getEquipmentID = (equipmentId, equipmentName)=>{
    return equipmentId.map((apiEquipment)=>{
        const filteredEquipment = equipmentName.find((equipment)=>{
            return equipment.name === apiEquipment;
        });
        return filteredEquipment.id;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aN4KM","1pyLr"], "1pyLr", "parcelRequire4bdb")

//# sourceMappingURL=upload-property.ada048aa.js.map
