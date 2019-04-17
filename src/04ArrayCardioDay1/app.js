(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.logTableImpl = function(a) {
  return console.table(a);
};

},{}],2:[function(require,module,exports){
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var Data_String_Utils = require("../Data.String.Utils/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Effect = require("../Effect/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var ExerciseData = require("../ExerciseData/index.js");
var Web_DOM_Node = require("../Web.DOM.Node/index.js");
var Web_DOM_NodeList = require("../Web.DOM.NodeList/index.js");
var Web_DOM_ParentNode = require("../Web.DOM.ParentNode/index.js");
var Web_HTML = require("../Web.HTML/index.js");
var Web_HTML_HTMLDocument = require("../Web.HTML.HTMLDocument/index.js");
var Web_HTML_Window = require("../Web.HTML.Window/index.js");
var transportation = Data_Foldable.foldr(Data_Foldable.foldableArray)(function (a) {
    return function (b) {
        return Data_Map_Internal.insertWith(Data_Ord.ordString)(function (n) {
            return function (v) {
                return n + 1 | 0;
            };
        })(a)(1)(b);
    };
})(Data_Map_Internal.empty);
var totalYears = Data_Foldable.foldr(Data_Foldable.foldableArray)(function (b) {
    return function (a) {
        return a + (b.passed - b.year | 0) | 0;
    };
})(0);
var orderedByYear = Data_Array.sortBy(function (a) {
    return function (b) {
        return Data_Ord.compare(Data_Ord.ordInt)(a.year)(b.year);
    };
});
var orderedByOldest = Data_Array.sortBy(function (a) {
    return function (b) {
        var $13 = (a.passed - a.year | 0) > (b.passed - b.year | 0);
        if ($13) {
            return Data_Ordering.LT.value;
        };
        return Data_Ordering.GT.value;
    };
});
var logTable = function (a) {
    return function () {
        return $foreign.logTableImpl(a);
    };
};
var getElements = function (dictBind) {
    return function (dictMonadEffect) {
        return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(dictBind))(Control_Monad_Reader_Class.ask(Control_Monad_Reader_Trans.monadAskReaderT(dictMonadEffect.Monad0())))(function (v) {
            return Control_Bind.bindFlipped(Control_Bind.bindFn)(Control_Applicative.pure(Control_Applicative.applicativeFn))(Effect_Class.liftEffect(Control_Monad_Reader_Trans.monadEffectReader(dictMonadEffect)))(Web_DOM_ParentNode.querySelectorAll(v.targetElement)(v.parentNode));
        });
    };
};

// Notes: toParentNode :: Element -> ParentNode
var getElement = function (dictBind) {
    return function (dictMonadEffect) {
        return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(dictBind))(Control_Monad_Reader_Class.ask(Control_Monad_Reader_Trans.monadAskReaderT(dictMonadEffect.Monad0())))(function (v) {
            return Control_Bind.bindFlipped(Control_Bind.bindFn)(Control_Applicative.pure(Control_Applicative.applicativeFn))(Effect_Class.liftEffect(Control_Monad_Reader_Trans.monadEffectReader(dictMonadEffect)))(Web_DOM_ParentNode.querySelector(v.targetElement)(v.parentNode));
        });
    };
};
var fullNames = Data_Functor.map(Data_Functor.functorArray)(function (inv) {
    return inv.first + (" " + inv.last);
});
var effParentNode = function __do() {
    var $28 = Control_Bind.bind(Effect.bindEffect)(Web_HTML.window)(Web_HTML_Window.document)();
    return Web_HTML_HTMLDocument.toParentNode($28);
};
var bornBy1500 = (function () {
    var isBortBetween = function (startDate) {
        return function (endDate) {
            return function (inventor) {
                return inventor.year >= startDate && inventor.year <= endDate;
            };
        };
    };
    return Data_Array.filter(isBortBetween(1500)(1600));
})();
var alpha = Data_Array.sortBy(function (a) {
    return function (b) {
        var v = Data_Array.index(Data_String_Common.split(", ")(a))(0);
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Ordering.LT.value;
        };
        if (v instanceof Data_Maybe.Just) {
            var v1 = Data_Array.index(Data_String_Common.split(", ")(b))(0);
            if (v1 instanceof Data_Maybe.Nothing) {
                return Data_Ordering.LT.value;
            };
            if (v1 instanceof Data_Maybe.Just) {
                return Data_Ord.compare(Data_Ord.ordString)(v.value0)(v1.value0);
            };
            throw new Error("Failed pattern match at ArrayCardioDay1 (line 88, column 16 - line 90, column 51): " + [ v1.constructor.name ]);
        };
        throw new Error("Failed pattern match at ArrayCardioDay1 (line 85, column 12 - line 90, column 51): " + [ v.constructor.name ]);
    };
});
var main = function __do() {
    var v = effParentNode();
    var v1 = Control_Monad_Reader_Trans.runReaderT(getElements(Effect.bindEffect)(Effect_Class.monadEffectEffect))({
        parentNode: v,
        targetElement: "a"
    })();
    logTable(bornBy1500(ExerciseData.inventorList))();
    Effect_Console.logShow(Data_Show.showArray(Data_Show.showString))(fullNames(ExerciseData.inventorList))();
    logTable(orderedByYear(ExerciseData.inventorList))();
    Effect_Console.logShow(Data_Show.showInt)(totalYears(ExerciseData.inventorList))();
    logTable(orderedByOldest(ExerciseData.inventorList))();
    var v2 = Web_DOM_NodeList.toArray(v1)();
    var v3 = Data_Traversable.traverse(Data_Traversable.traversableArray)(Effect.applicativeEffect)(Web_DOM_Node.textContent)(v2)();
    Effect_Console.logShow(Data_Show.showArray(Data_Show.showString))(Data_Array.filter(Data_String_Utils.includes("de"))(v3))();
    Effect_Console.logShow(Data_Show.showArray(Data_Show.showString))(alpha(ExerciseData.people))();
    return Effect_Console.logShow(Data_Map_Internal.showMap(Data_Show.showString)(Data_Show.showInt))(transportation(ExerciseData.ranData))();
};
module.exports = {
    logTable: logTable,
    effParentNode: effParentNode,
    getElement: getElement,
    getElements: getElements,
    bornBy1500: bornBy1500,
    fullNames: fullNames,
    orderedByYear: orderedByYear,
    totalYears: totalYears,
    orderedByOldest: orderedByOldest,
    alpha: alpha,
    transportation: transportation,
    main: main,
    logTableImpl: $foreign.logTableImpl
};

},{"../Control.Applicative/index.js":5,"../Control.Bind/index.js":11,"../Control.Monad.Reader.Class/index.js":19,"../Control.Monad.Reader.Trans/index.js":20,"../Data.Array/index.js":36,"../Data.Foldable/index.js":59,"../Data.Functor/index.js":64,"../Data.Map.Internal/index.js":76,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Show/index.js":109,"../Data.String.Common/index.js":113,"../Data.String.Utils/index.js":120,"../Data.Traversable/index.js":125,"../Effect.Class/index.js":135,"../Effect.Console/index.js":137,"../Effect/index.js":143,"../ExerciseData/index.js":144,"../Web.DOM.Node/index.js":153,"../Web.DOM.NodeList/index.js":155,"../Web.DOM.ParentNode/index.js":158,"../Web.HTML.HTMLDocument/index.js":161,"../Web.HTML.Window/index.js":163,"../Web.HTML/index.js":165,"./foreign.js":1}],3:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Alt = function (Functor0, alt) {
    this.Functor0 = Functor0;
    this.alt = alt;
};
var altArray = new Alt(function () {
    return Data_Functor.functorArray;
}, Data_Semigroup.append(Data_Semigroup.semigroupArray));
var alt = function (dict) {
    return dict.alt;
};
module.exports = {
    Alt: Alt,
    alt: alt,
    altArray: altArray
};

},{"../Data.Functor/index.js":64,"../Data.Semigroup/index.js":105}],4:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Alternative = function (Applicative0, Plus1) {
    this.Applicative0 = Applicative0;
    this.Plus1 = Plus1;
};
var alternativeArray = new Alternative(function () {
    return Control_Applicative.applicativeArray;
}, function () {
    return Control_Plus.plusArray;
});
module.exports = {
    Alternative: Alternative,
    alternativeArray: alternativeArray
};

},{"../Control.Applicative/index.js":5,"../Control.Plus/index.js":30}],5:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Apply = require("../Control.Apply/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Applicative = function (Apply0, pure) {
    this.Apply0 = Apply0;
    this.pure = pure;
};
var pure = function (dict) {
    return dict.pure;
};
var unless = function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (!v) {
                return v1;
            };
            if (v) {
                return pure(dictApplicative)(Data_Unit.unit);
            };
            throw new Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
var when = function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (v) {
                return v1;
            };
            if (!v) {
                return pure(dictApplicative)(Data_Unit.unit);
            };
            throw new Error("Failed pattern match at Control.Applicative (line 57, column 1 - line 57, column 63): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
var liftA1 = function (dictApplicative) {
    return function (f) {
        return function (a) {
            return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
        };
    };
};
var applicativeFn = new Applicative(function () {
    return Control_Apply.applyFn;
}, function (x) {
    return function (v) {
        return x;
    };
});
var applicativeArray = new Applicative(function () {
    return Control_Apply.applyArray;
}, function (x) {
    return [ x ];
});
module.exports = {
    Applicative: Applicative,
    pure: pure,
    liftA1: liftA1,
    unless: unless,
    when: when,
    applicativeFn: applicativeFn,
    applicativeArray: applicativeArray
};

},{"../Control.Apply/index.js":7,"../Data.Unit/index.js":133}],6:[function(require,module,exports){
"use strict";

exports.arrayApply = function (fs) {
  return function (xs) {
    var l = fs.length;
    var k = xs.length;
    var result = new Array(l*k);
    var n = 0;
    for (var i = 0; i < l; i++) {
      var f = fs[i];
      for (var j = 0; j < k; j++) {
        result[n++] = f(xs[j]);
      }
    }
    return result;
  };
};

},{}],7:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Apply = function (Functor0, apply) {
    this.Functor0 = Functor0;
    this.apply = apply;
};
var applyFn = new Apply(function () {
    return Data_Functor.functorFn;
}, function (f) {
    return function (g) {
        return function (x) {
            return f(x)(g(x));
        };
    };
});
var applyArray = new Apply(function () {
    return Data_Functor.functorArray;
}, $foreign.arrayApply);
var apply = function (dict) {
    return dict.apply;
};
var applyFirst = function (dictApply) {
    return function (a) {
        return function (b) {
            return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"])(a))(b);
        };
    };
};
var applySecond = function (dictApply) {
    return function (a) {
        return function (b) {
            return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(a))(b);
        };
    };
};
var lift2 = function (dictApply) {
    return function (f) {
        return function (a) {
            return function (b) {
                return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
            };
        };
    };
};
var lift3 = function (dictApply) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c);
                };
            };
        };
    };
};
var lift4 = function (dictApply) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d);
                    };
                };
            };
        };
    };
};
var lift5 = function (dictApply) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return apply(dictApply)(apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d))(e);
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    Apply: Apply,
    apply: apply,
    applyFirst: applyFirst,
    applySecond: applySecond,
    lift2: lift2,
    lift3: lift3,
    lift4: lift4,
    lift5: lift5,
    applyFn: applyFn,
    applyArray: applyArray
};

},{"../Control.Category/index.js":12,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"./foreign.js":6}],8:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Biapplicative = function (Biapply0, bipure) {
    this.Biapply0 = Biapply0;
    this.bipure = bipure;
};
var bipure = function (dict) {
    return dict.bipure;
};
module.exports = {
    bipure: bipure,
    Biapplicative: Biapplicative
};

},{}],9:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Function = require("../Data.Function/index.js");
var Biapply = function (Bifunctor0, biapply) {
    this.Bifunctor0 = Bifunctor0;
    this.biapply = biapply;
};
var biapply = function (dict) {
    return dict.biapply;
};
var biapplyFirst = function (dictBiapply) {
    return function (a) {
        return function (b) {
            return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn))))(a))(b);
        };
    };
};
var biapplySecond = function (dictBiapply) {
    return function (a) {
        return function (b) {
            return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"])(Data_Function["const"]))(a))(b);
        };
    };
};
var bilift2 = function (dictBiapply) {
    return function (f) {
        return function (g) {
            return function (a) {
                return function (b) {
                    return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b);
                };
            };
        };
    };
};
var bilift3 = function (dictBiapply) {
    return function (f) {
        return function (g) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return biapply(dictBiapply)(biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b))(c);
                    };
                };
            };
        };
    };
};
module.exports = {
    biapply: biapply,
    Biapply: Biapply,
    biapplyFirst: biapplyFirst,
    biapplySecond: biapplySecond,
    bilift2: bilift2,
    bilift3: bilift3
};

},{"../Control.Category/index.js":12,"../Data.Bifunctor/index.js":43,"../Data.Function/index.js":61}],10:[function(require,module,exports){
"use strict";

exports.arrayBind = function (arr) {
  return function (f) {
    var result = [];
    for (var i = 0, l = arr.length; i < l; i++) {
      Array.prototype.push.apply(result, f(arr[i]));
    }
    return result;
  };
};

},{}],11:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Function = require("../Data.Function/index.js");
var Discard = function (discard) {
    this.discard = discard;
};
var Bind = function (Apply0, bind) {
    this.Apply0 = Apply0;
    this.bind = bind;
};
var discard = function (dict) {
    return dict.discard;
};
var bindFn = new Bind(function () {
    return Control_Apply.applyFn;
}, function (m) {
    return function (f) {
        return function (x) {
            return f(m(x))(x);
        };
    };
});
var bindArray = new Bind(function () {
    return Control_Apply.applyArray;
}, $foreign.arrayBind);
var bind = function (dict) {
    return dict.bind;
};
var bindFlipped = function (dictBind) {
    return Data_Function.flip(bind(dictBind));
};
var composeKleisliFlipped = function (dictBind) {
    return function (f) {
        return function (g) {
            return function (a) {
                return bindFlipped(dictBind)(f)(g(a));
            };
        };
    };
};
var composeKleisli = function (dictBind) {
    return function (f) {
        return function (g) {
            return function (a) {
                return bind(dictBind)(f(a))(g);
            };
        };
    };
};
var discardUnit = new Discard(function (dictBind) {
    return bind(dictBind);
});
var ifM = function (dictBind) {
    return function (cond) {
        return function (t) {
            return function (f) {
                return bind(dictBind)(cond)(function (cond$prime) {
                    if (cond$prime) {
                        return t;
                    };
                    return f;
                });
            };
        };
    };
};
var join = function (dictBind) {
    return function (m) {
        return bind(dictBind)(m)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    Bind: Bind,
    bind: bind,
    bindFlipped: bindFlipped,
    Discard: Discard,
    discard: discard,
    join: join,
    composeKleisli: composeKleisli,
    composeKleisliFlipped: composeKleisliFlipped,
    ifM: ifM,
    bindFn: bindFn,
    bindArray: bindArray,
    discardUnit: discardUnit
};

},{"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Function/index.js":61,"./foreign.js":10}],12:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Category = function (Semigroupoid0, identity) {
    this.Semigroupoid0 = Semigroupoid0;
    this.identity = identity;
};
var identity = function (dict) {
    return dict.identity;
};
var categoryFn = new Category(function () {
    return Control_Semigroupoid.semigroupoidFn;
}, function (x) {
    return x;
});
module.exports = {
    Category: Category,
    identity: identity,
    categoryFn: categoryFn
};

},{"../Control.Semigroupoid/index.js":31}],13:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Comonad = function (Extend0, extract) {
    this.Extend0 = Extend0;
    this.extract = extract;
};
var extract = function (dict) {
    return dict.extract;
};
module.exports = {
    Comonad: Comonad,
    extract: extract
};

},{}],14:[function(require,module,exports){
"use strict";

exports.arrayExtend = function(f) {
  return function(xs) {
    return xs.map(function (_, i, xs) {
      return f(xs.slice(i));
    });
  };
};

},{}],15:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Extend = function (Functor0, extend) {
    this.Functor0 = Functor0;
    this.extend = extend;
};
var extendFn = function (dictSemigroup) {
    return new Extend(function () {
        return Data_Functor.functorFn;
    }, function (f) {
        return function (g) {
            return function (w) {
                return f(function (w$prime) {
                    return g(Data_Semigroup.append(dictSemigroup)(w)(w$prime));
                });
            };
        };
    });
};
var extendArray = new Extend(function () {
    return Data_Functor.functorArray;
}, $foreign.arrayExtend);
var extend = function (dict) {
    return dict.extend;
};
var extendFlipped = function (dictExtend) {
    return function (w) {
        return function (f) {
            return extend(dictExtend)(f)(w);
        };
    };
};
var duplicate = function (dictExtend) {
    return extend(dictExtend)(Control_Category.identity(Control_Category.categoryFn));
};
var composeCoKleisliFlipped = function (dictExtend) {
    return function (f) {
        return function (g) {
            return function (w) {
                return f(extend(dictExtend)(g)(w));
            };
        };
    };
};
var composeCoKleisli = function (dictExtend) {
    return function (f) {
        return function (g) {
            return function (w) {
                return g(extend(dictExtend)(f)(w));
            };
        };
    };
};
module.exports = {
    Extend: Extend,
    extend: extend,
    extendFlipped: extendFlipped,
    composeCoKleisli: composeCoKleisli,
    composeCoKleisliFlipped: composeCoKleisliFlipped,
    duplicate: duplicate,
    extendFn: extendFn,
    extendArray: extendArray
};

},{"../Control.Category/index.js":12,"../Data.Functor/index.js":64,"../Data.Semigroup/index.js":105,"./foreign.js":14}],16:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Unit = require("../Data.Unit/index.js");
var Lazy = function (defer) {
    this.defer = defer;
};
var lazyUnit = new Lazy(function (v) {
    return Data_Unit.unit;
});
var lazyFn = new Lazy(function (f) {
    return function (x) {
        return f(Data_Unit.unit)(x);
    };
});
var defer = function (dict) {
    return dict.defer;
};
var fix = function (dictLazy) {
    return function (f) {
        var go = defer(dictLazy)(function (v) {
            return f(go);
        });
        return go;
    };
};
module.exports = {
    defer: defer,
    Lazy: Lazy,
    fix: fix,
    lazyFn: lazyFn,
    lazyUnit: lazyUnit
};

},{"../Data.Unit/index.js":133}],17:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var MonadCont = function (Monad0, callCC) {
    this.Monad0 = Monad0;
    this.callCC = callCC;
};
var callCC = function (dict) {
    return dict.callCC;
};
module.exports = {
    MonadCont: MonadCont,
    callCC: callCC
};

},{}],18:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var MonadThrow = function (Monad0, throwError) {
    this.Monad0 = Monad0;
    this.throwError = throwError;
};
var MonadError = function (MonadThrow0, catchError) {
    this.MonadThrow0 = MonadThrow0;
    this.catchError = catchError;
};
var throwError = function (dict) {
    return dict.throwError;
};
var monadThrowMaybe = new MonadThrow(function () {
    return Data_Maybe.monadMaybe;
}, Data_Function["const"](Data_Maybe.Nothing.value));
var monadThrowEither = new MonadThrow(function () {
    return Data_Either.monadEither;
}, Data_Either.Left.create);
var monadThrowEffect = new MonadThrow(function () {
    return Effect.monadEffect;
}, Effect_Exception.throwException);
var monadErrorMaybe = new MonadError(function () {
    return monadThrowMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Data_Maybe.Nothing) {
            return v1(Data_Unit.unit);
        };
        if (v instanceof Data_Maybe.Just) {
            return new Data_Maybe.Just(v.value0);
        };
        throw new Error("Failed pattern match at Control.Monad.Error.Class (line 79, column 1 - line 79, column 50): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var monadErrorEither = new MonadError(function () {
    return monadThrowEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Left) {
            return v1(v.value0);
        };
        if (v instanceof Data_Either.Right) {
            return new Data_Either.Right(v.value0);
        };
        throw new Error("Failed pattern match at Control.Monad.Error.Class (line 72, column 1 - line 72, column 53): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var monadErrorEffect = new MonadError(function () {
    return monadThrowEffect;
}, Data_Function.flip(Effect_Exception.catchException));
var catchError = function (dict) {
    return dict.catchError;
};
var catchJust = function (dictMonadError) {
    return function (p) {
        return function (act) {
            return function (handler) {
                var handle = function (e) {
                    var v = p(e);
                    if (v instanceof Data_Maybe.Nothing) {
                        return throwError(dictMonadError.MonadThrow0())(e);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return handler(v.value0);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Error.Class (line 57, column 5 - line 59, column 26): " + [ v.constructor.name ]);
                };
                return catchError(dictMonadError)(act)(handle);
            };
        };
    };
};
var $$try = function (dictMonadError) {
    return function (a) {
        return catchError(dictMonadError)(Data_Functor.map(((((dictMonadError.MonadThrow0()).Monad0()).Bind1()).Apply0()).Functor0())(Data_Either.Right.create)(a))(function ($21) {
            return Control_Applicative.pure(((dictMonadError.MonadThrow0()).Monad0()).Applicative0())(Data_Either.Left.create($21));
        });
    };
};
var withResource = function (dictMonadError) {
    return function (acquire) {
        return function (release) {
            return function (kleisli) {
                return Control_Bind.bind(((dictMonadError.MonadThrow0()).Monad0()).Bind1())(acquire)(function (v) {
                    return Control_Bind.bind(((dictMonadError.MonadThrow0()).Monad0()).Bind1())($$try(dictMonadError)(kleisli(v)))(function (v1) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(((dictMonadError.MonadThrow0()).Monad0()).Bind1())(release(v))(function () {
                            return Data_Either.either(throwError(dictMonadError.MonadThrow0()))(Control_Applicative.pure(((dictMonadError.MonadThrow0()).Monad0()).Applicative0()))(v1);
                        });
                    });
                });
            };
        };
    };
};
module.exports = {
    catchError: catchError,
    throwError: throwError,
    MonadThrow: MonadThrow,
    MonadError: MonadError,
    catchJust: catchJust,
    "try": $$try,
    withResource: withResource,
    monadThrowEither: monadThrowEither,
    monadErrorEither: monadErrorEither,
    monadThrowMaybe: monadThrowMaybe,
    monadErrorMaybe: monadErrorMaybe,
    monadThrowEffect: monadThrowEffect,
    monadErrorEffect: monadErrorEffect
};

},{"../Control.Applicative/index.js":5,"../Control.Bind/index.js":11,"../Data.Either/index.js":51,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Unit/index.js":133,"../Effect.Exception/index.js":139,"../Effect/index.js":143}],19:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var MonadAsk = function (Monad0, ask) {
    this.Monad0 = Monad0;
    this.ask = ask;
};
var MonadReader = function (MonadAsk0, local) {
    this.MonadAsk0 = MonadAsk0;
    this.local = local;
};
var monadAskFun = new MonadAsk(function () {
    return Control_Monad.monadFn;
}, Control_Category.identity(Control_Category.categoryFn));
var monadReaderFun = new MonadReader(function () {
    return monadAskFun;
}, Control_Semigroupoid.composeFlipped(Control_Semigroupoid.semigroupoidFn));
var local = function (dict) {
    return dict.local;
};
var ask = function (dict) {
    return dict.ask;
};
var asks = function (dictMonadAsk) {
    return function (f) {
        return Data_Functor.map((((dictMonadAsk.Monad0()).Bind1()).Apply0()).Functor0())(f)(ask(dictMonadAsk));
    };
};
module.exports = {
    ask: ask,
    local: local,
    MonadAsk: MonadAsk,
    asks: asks,
    MonadReader: MonadReader,
    monadAskFun: monadAskFun,
    monadReaderFun: monadReaderFun
};

},{"../Control.Category/index.js":12,"../Control.Monad/index.js":27,"../Control.Semigroupoid/index.js":31,"../Data.Functor/index.js":64}],20:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Cont_Class = require("../Control.Monad.Cont.Class/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Distributive = require("../Data.Distributive/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var ReaderT = function (x) {
    return x;
};
var withReaderT = function (f) {
    return function (v) {
        return function ($66) {
            return v(f($66));
        };
    };
};
var runReaderT = function (v) {
    return v;
};
var newtypeReaderT = new Data_Newtype.Newtype(function (n) {
    return n;
}, ReaderT);
var monadTransReaderT = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return function ($67) {
        return ReaderT(Data_Function["const"]($67));
    };
});
var mapReaderT = function (f) {
    return function (v) {
        return function ($68) {
            return f(v($68));
        };
    };
};
var functorReaderT = function (dictFunctor) {
    return new Data_Functor.Functor(function ($69) {
        return mapReaderT(Data_Functor.map(dictFunctor)($69));
    });
};
var distributiveReaderT = function (dictDistributive) {
    return new Data_Distributive.Distributive(function () {
        return functorReaderT(dictDistributive.Functor0());
    }, function (dictFunctor) {
        return function (f) {
            return function ($70) {
                return Data_Distributive.distribute(distributiveReaderT(dictDistributive))(dictFunctor)(Data_Functor.map(dictFunctor)(f)($70));
            };
        };
    }, function (dictFunctor) {
        return function (a) {
            return function (e) {
                return Data_Distributive.collect(dictDistributive)(dictFunctor)(function (r) {
                    return r(e);
                })(a);
            };
        };
    });
};
var applyReaderT = function (dictApply) {
    return new Control_Apply.Apply(function () {
        return functorReaderT(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return function (r) {
                return Control_Apply.apply(dictApply)(v(r))(v1(r));
            };
        };
    });
};
var bindReaderT = function (dictBind) {
    return new Control_Bind.Bind(function () {
        return applyReaderT(dictBind.Apply0());
    }, function (v) {
        return function (k) {
            return function (r) {
                return Control_Bind.bind(dictBind)(v(r))(function (a) {
                    var v1 = k(a);
                    return v1(r);
                });
            };
        };
    });
};
var semigroupReaderT = function (dictApply) {
    return function (dictSemigroup) {
        return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyReaderT(dictApply))(Data_Semigroup.append(dictSemigroup)));
    };
};
var applicativeReaderT = function (dictApplicative) {
    return new Control_Applicative.Applicative(function () {
        return applyReaderT(dictApplicative.Apply0());
    }, function ($71) {
        return ReaderT(Data_Function["const"](Control_Applicative.pure(dictApplicative)($71)));
    });
};
var monadReaderT = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeReaderT(dictMonad.Applicative0());
    }, function () {
        return bindReaderT(dictMonad.Bind1());
    });
};
var monadAskReaderT = function (dictMonad) {
    return new Control_Monad_Reader_Class.MonadAsk(function () {
        return monadReaderT(dictMonad);
    }, Control_Applicative.pure(dictMonad.Applicative0()));
};
var monadReaderReaderT = function (dictMonad) {
    return new Control_Monad_Reader_Class.MonadReader(function () {
        return monadAskReaderT(dictMonad);
    }, withReaderT);
};
var monadContReaderT = function (dictMonadCont) {
    return new Control_Monad_Cont_Class.MonadCont(function () {
        return monadReaderT(dictMonadCont.Monad0());
    }, function (f) {
        return function (r) {
            return Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
                var v = f(function ($72) {
                    return ReaderT(Data_Function["const"](c($72)));
                });
                return v(r);
            });
        };
    });
};
var monadEffectReader = function (dictMonadEffect) {
    return new Effect_Class.MonadEffect(function () {
        return monadReaderT(dictMonadEffect.Monad0());
    }, function ($73) {
        return Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadEffect.Monad0())(Effect_Class.liftEffect(dictMonadEffect)($73));
    });
};
var monadRecReaderT = function (dictMonadRec) {
    return new Control_Monad_Rec_Class.MonadRec(function () {
        return monadReaderT(dictMonadRec.Monad0());
    }, function (k) {
        return function (a) {
            var k$prime = function (r) {
                return function (a$prime) {
                    var v = k(a$prime);
                    return Control_Bind.bindFlipped((dictMonadRec.Monad0()).Bind1())(Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0()))(v(r));
                };
            };
            return function (r) {
                return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(k$prime(r))(a);
            };
        };
    });
};
var monadStateReaderT = function (dictMonadState) {
    return new Control_Monad_State_Class.MonadState(function () {
        return monadReaderT(dictMonadState.Monad0());
    }, function ($74) {
        return Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadState.Monad0())(Control_Monad_State_Class.state(dictMonadState)($74));
    });
};
var monadTellReaderT = function (dictMonadTell) {
    return new Control_Monad_Writer_Class.MonadTell(function () {
        return monadReaderT(dictMonadTell.Monad0());
    }, function ($75) {
        return Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadTell.Monad0())(Control_Monad_Writer_Class.tell(dictMonadTell)($75));
    });
};
var monadWriterReaderT = function (dictMonadWriter) {
    return new Control_Monad_Writer_Class.MonadWriter(function () {
        return monadTellReaderT(dictMonadWriter.MonadTell0());
    }, mapReaderT(Control_Monad_Writer_Class.listen(dictMonadWriter)), mapReaderT(Control_Monad_Writer_Class.pass(dictMonadWriter)));
};
var monadThrowReaderT = function (dictMonadThrow) {
    return new Control_Monad_Error_Class.MonadThrow(function () {
        return monadReaderT(dictMonadThrow.Monad0());
    }, function ($76) {
        return Control_Monad_Trans_Class.lift(monadTransReaderT)(dictMonadThrow.Monad0())(Control_Monad_Error_Class.throwError(dictMonadThrow)($76));
    });
};
var monadErrorReaderT = function (dictMonadError) {
    return new Control_Monad_Error_Class.MonadError(function () {
        return monadThrowReaderT(dictMonadError.MonadThrow0());
    }, function (v) {
        return function (h) {
            return function (r) {
                return Control_Monad_Error_Class.catchError(dictMonadError)(v(r))(function (e) {
                    var v1 = h(e);
                    return v1(r);
                });
            };
        };
    });
};
var monoidReaderT = function (dictApplicative) {
    return function (dictMonoid) {
        return new Data_Monoid.Monoid(function () {
            return semigroupReaderT(dictApplicative.Apply0())(dictMonoid.Semigroup0());
        }, Control_Applicative.pure(applicativeReaderT(dictApplicative))(Data_Monoid.mempty(dictMonoid)));
    };
};
var altReaderT = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorReaderT(dictAlt.Functor0());
    }, function (v) {
        return function (v1) {
            return function (r) {
                return Control_Alt.alt(dictAlt)(v(r))(v1(r));
            };
        };
    });
};
var plusReaderT = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altReaderT(dictPlus.Alt0());
    }, Data_Function["const"](Control_Plus.empty(dictPlus)));
};
var alternativeReaderT = function (dictAlternative) {
    return new Control_Alternative.Alternative(function () {
        return applicativeReaderT(dictAlternative.Applicative0());
    }, function () {
        return plusReaderT(dictAlternative.Plus1());
    });
};
var monadZeroReaderT = function (dictMonadZero) {
    return new Control_MonadZero.MonadZero(function () {
        return alternativeReaderT(dictMonadZero.Alternative1());
    }, function () {
        return monadReaderT(dictMonadZero.Monad0());
    });
};
var monadPlusReaderT = function (dictMonadPlus) {
    return new Control_MonadPlus.MonadPlus(function () {
        return monadZeroReaderT(dictMonadPlus.MonadZero0());
    });
};
module.exports = {
    ReaderT: ReaderT,
    runReaderT: runReaderT,
    withReaderT: withReaderT,
    mapReaderT: mapReaderT,
    newtypeReaderT: newtypeReaderT,
    functorReaderT: functorReaderT,
    applyReaderT: applyReaderT,
    applicativeReaderT: applicativeReaderT,
    altReaderT: altReaderT,
    plusReaderT: plusReaderT,
    alternativeReaderT: alternativeReaderT,
    bindReaderT: bindReaderT,
    monadReaderT: monadReaderT,
    monadZeroReaderT: monadZeroReaderT,
    semigroupReaderT: semigroupReaderT,
    monoidReaderT: monoidReaderT,
    monadPlusReaderT: monadPlusReaderT,
    monadTransReaderT: monadTransReaderT,
    monadEffectReader: monadEffectReader,
    monadContReaderT: monadContReaderT,
    monadThrowReaderT: monadThrowReaderT,
    monadErrorReaderT: monadErrorReaderT,
    monadAskReaderT: monadAskReaderT,
    monadReaderReaderT: monadReaderReaderT,
    monadStateReaderT: monadStateReaderT,
    monadTellReaderT: monadTellReaderT,
    monadWriterReaderT: monadWriterReaderT,
    distributiveReaderT: distributiveReaderT,
    monadRecReaderT: monadRecReaderT
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad.Cont.Class/index.js":17,"../Control.Monad.Error.Class/index.js":18,"../Control.Monad.Reader.Class/index.js":19,"../Control.Monad.Rec.Class/index.js":21,"../Control.Monad.State.Class/index.js":24,"../Control.Monad.Trans.Class/index.js":25,"../Control.Monad.Writer.Class/index.js":26,"../Control.Monad/index.js":27,"../Control.MonadPlus/index.js":28,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Distributive/index.js":50,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Semigroup/index.js":105,"../Effect.Class/index.js":135}],21:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var Loop = (function () {
    function Loop(value0) {
        this.value0 = value0;
    };
    Loop.create = function (value0) {
        return new Loop(value0);
    };
    return Loop;
})();
var Done = (function () {
    function Done(value0) {
        this.value0 = value0;
    };
    Done.create = function (value0) {
        return new Done(value0);
    };
    return Done;
})();
var MonadRec = function (Monad0, tailRecM) {
    this.Monad0 = Monad0;
    this.tailRecM = tailRecM;
};
var tailRecM = function (dict) {
    return dict.tailRecM;
};
var tailRecM2 = function (dictMonadRec) {
    return function (f) {
        return function (a) {
            return function (b) {
                return tailRecM(dictMonadRec)(function (o) {
                    return f(o.a)(o.b);
                })({
                    a: a,
                    b: b
                });
            };
        };
    };
};
var tailRecM3 = function (dictMonadRec) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return tailRecM(dictMonadRec)(function (o) {
                        return f(o.a)(o.b)(o.c);
                    })({
                        a: a,
                        b: b,
                        c: c
                    });
                };
            };
        };
    };
};
var tailRec = function (f) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Loop) {
                $copy_v = f(v.value0);
                return;
            };
            if (v instanceof Done) {
                $tco_done = true;
                return v.value0;
            };
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 91, column 3 - line 91, column 25): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($53) {
        return go(f($53));
    };
};
var monadRecMaybe = new MonadRec(function () {
    return Data_Maybe.monadMaybe;
}, function (f) {
    return function (a0) {
        var g = function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return new Done(Data_Maybe.Nothing.value);
            };
            if (v instanceof Data_Maybe.Just && v.value0 instanceof Loop) {
                return new Loop(f(v.value0.value0));
            };
            if (v instanceof Data_Maybe.Just && v.value0 instanceof Done) {
                return new Done(new Data_Maybe.Just(v.value0.value0));
            };
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 127, column 7 - line 127, column 31): " + [ v.constructor.name ]);
        };
        return tailRec(g)(f(a0));
    };
});
var monadRecIdentity = new MonadRec(function () {
    return Data_Identity.monadIdentity;
}, function (f) {
    var runIdentity = function (v) {
        return v;
    };
    return function ($54) {
        return Data_Identity.Identity(tailRec(function ($55) {
            return runIdentity(f($55));
        })($54));
    };
});
var monadRecFunction = new MonadRec(function () {
    return Control_Monad.monadFn;
}, function (f) {
    return function (a0) {
        return function (e) {
            return tailRec(function (a) {
                return f(a)(e);
            })(a0);
        };
    };
});
var monadRecEither = new MonadRec(function () {
    return Data_Either.monadEither;
}, function (f) {
    return function (a0) {
        var g = function (v) {
            if (v instanceof Data_Either.Left) {
                return new Done(new Data_Either.Left(v.value0));
            };
            if (v instanceof Data_Either.Right && v.value0 instanceof Loop) {
                return new Loop(f(v.value0.value0));
            };
            if (v instanceof Data_Either.Right && v.value0 instanceof Done) {
                return new Done(new Data_Either.Right(v.value0.value0));
            };
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 119, column 7 - line 119, column 33): " + [ v.constructor.name ]);
        };
        return tailRec(g)(f(a0));
    };
});
var monadRecEffect = new MonadRec(function () {
    return Effect.monadEffect;
}, function (f) {
    return function (a) {
        var fromDone = function (v) {
            if (v instanceof Done) {
                return v.value0;
            };
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 111, column 30 - line 111, column 44): " + [ v.constructor.name ]);
        };
        return function __do() {
            var v = Control_Bind.bindFlipped(Effect.bindEffect)(Effect_Ref["new"])(f(a))();
            (function () {
                while (!(function __do() {
                    var v1 = Effect_Ref.read(v)();
                    if (v1 instanceof Loop) {
                        var v2 = f(v1.value0)();
                        var v3 = Effect_Ref.write(v2)(v)();
                        return false;
                    };
                    if (v1 instanceof Done) {
                        return true;
                    };
                    throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 102, column 22 - line 107, column 28): " + [ v1.constructor.name ]);
                })()) {

                };
                return {};
            })();
            return Data_Functor.map(Effect.functorEffect)(fromDone)(Effect_Ref.read(v))();
        };
    };
});
var functorStep = new Data_Functor.Functor(function (f) {
    return function (m) {
        if (m instanceof Loop) {
            return new Loop(m.value0);
        };
        if (m instanceof Done) {
            return new Done(f(m.value0));
        };
        throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 25, column 8 - line 25, column 48): " + [ m.constructor.name ]);
    };
});
var forever = function (dictMonadRec) {
    return function (ma) {
        return tailRecM(dictMonadRec)(function (u) {
            return Data_Functor.voidRight((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(new Loop(u))(ma);
        })(Data_Unit.unit);
    };
};
var bifunctorStep = new Data_Bifunctor.Bifunctor(function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Loop) {
                return new Loop(v(v2.value0));
            };
            if (v2 instanceof Done) {
                return new Done(v1(v2.value0));
            };
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 27, column 1 - line 27, column 41): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
});
module.exports = {
    Loop: Loop,
    Done: Done,
    MonadRec: MonadRec,
    tailRec: tailRec,
    tailRecM: tailRecM,
    tailRecM2: tailRecM2,
    tailRecM3: tailRecM3,
    forever: forever,
    functorStep: functorStep,
    bifunctorStep: bifunctorStep,
    monadRecIdentity: monadRecIdentity,
    monadRecEffect: monadRecEffect,
    monadRecFunction: monadRecFunction,
    monadRecEither: monadRecEither,
    monadRecMaybe: monadRecMaybe
};

},{"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Bifunctor/index.js":43,"../Data.Either/index.js":51,"../Data.Functor/index.js":64,"../Data.Identity/index.js":69,"../Data.Maybe/index.js":79,"../Data.Unit/index.js":133,"../Effect.Ref/index.js":141,"../Effect/index.js":143}],22:[function(require,module,exports){
"use strict";

exports.map_ = function (f) {
  return function (a) {
    return function () {
      return f(a());
    };
  };
};

exports.pure_ = function (a) {
  return function () {
    return a;
  };
};

exports.bind_ = function (a) {
  return function (f) {
    return function () {
      return f(a())();
    };
  };
};

exports.run = function (f) {
  return f();
};

exports["while"] = function (f) {
  return function (a) {
    return function () {
      while (f()) {
        a();
      }
    };
  };
};

exports["for"] = function (lo) {
  return function (hi) {
    return function (f) {
      return function () {
        for (var i = lo; i < hi; i++) {
          f(i)();
        }
      };
    };
  };
};

exports.foreach = function (as) {
  return function (f) {
    return function () {
      for (var i = 0, l = as.length; i < l; i++) {
        f(as[i])();
      }
    };
  };
};

exports.new = function (val) {
  return function () {
    return { value: val };
  };
};

exports.read = function (ref) {
  return function () {
    return ref.value;
  };
};

exports["modify'"] = function (f) {
  return function (ref) {
    return function () {
      var t = f(ref.value);
      ref.value = t.state;
      return t.value;
    };
  };
};

exports.write = function (a) {
  return function (ref) {
    return function () {
      return ref.value = a; // eslint-disable-line no-return-assign
    };
  };
};

},{}],23:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var modify = function (f) {
    return $foreign["modify'"](function (s) {
        var s$prime = f(s);
        return {
            state: s$prime,
            value: s$prime
        };
    });
};
var functorST = new Data_Functor.Functor($foreign.map_);
var monadST = new Control_Monad.Monad(function () {
    return applicativeST;
}, function () {
    return bindST;
});
var bindST = new Control_Bind.Bind(function () {
    return applyST;
}, $foreign.bind_);
var applyST = new Control_Apply.Apply(function () {
    return functorST;
}, Control_Monad.ap(monadST));
var applicativeST = new Control_Applicative.Applicative(function () {
    return applyST;
}, $foreign.pure_);
var monadRecST = new Control_Monad_Rec_Class.MonadRec(function () {
    return monadST;
}, function (f) {
    return function (a) {
        var isLooping = function (v) {
            if (v instanceof Control_Monad_Rec_Class.Loop) {
                return true;
            };
            return false;
        };
        var fromDone = function (v) {
            if (v instanceof Control_Monad_Rec_Class.Done) {
                return v.value0;
            };
            throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 54, column 32 - line 54, column 46): " + [ v.constructor.name ]);
        };
        return Control_Bind.bind(bindST)(Control_Bind.bindFlipped(bindST)($foreign["new"])(f(a)))(function (v) {
            return Control_Bind.discard(Control_Bind.discardUnit)(bindST)($foreign["while"](Data_Functor.map(functorST)(isLooping)($foreign.read(v)))(Control_Bind.bind(bindST)($foreign.read(v))(function (v1) {
                if (v1 instanceof Control_Monad_Rec_Class.Loop) {
                    return Control_Bind.bind(bindST)(f(v1.value0))(function (v2) {
                        return Data_Functor["void"](functorST)($foreign.write(v2)(v));
                    });
                };
                if (v1 instanceof Control_Monad_Rec_Class.Done) {
                    return Control_Applicative.pure(applicativeST)(Data_Unit.unit);
                };
                throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 46, column 18 - line 50, column 28): " + [ v1.constructor.name ]);
            })))(function () {
                return Data_Functor.map(functorST)(fromDone)($foreign.read(v));
            });
        });
    };
});
module.exports = {
    modify: modify,
    functorST: functorST,
    applyST: applyST,
    applicativeST: applicativeST,
    bindST: bindST,
    monadST: monadST,
    monadRecST: monadRecST,
    map_: $foreign.map_,
    pure_: $foreign.pure_,
    bind_: $foreign.bind_,
    run: $foreign.run,
    "while": $foreign["while"],
    "for": $foreign["for"],
    foreach: $foreign.foreach,
    "new": $foreign["new"],
    read: $foreign.read,
    "modify'": $foreign["modify'"],
    write: $foreign.write
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad.Rec.Class/index.js":21,"../Control.Monad/index.js":27,"../Data.Functor/index.js":64,"../Data.Unit/index.js":133,"./foreign.js":22}],24:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var MonadState = function (Monad0, state) {
    this.Monad0 = Monad0;
    this.state = state;
};
var state = function (dict) {
    return dict.state;
};
var put = function (dictMonadState) {
    return function (s) {
        return state(dictMonadState)(function (v) {
            return new Data_Tuple.Tuple(Data_Unit.unit, s);
        });
    };
};
var modify_ = function (dictMonadState) {
    return function (f) {
        return state(dictMonadState)(function (s) {
            return new Data_Tuple.Tuple(Data_Unit.unit, f(s));
        });
    };
};
var modify = function (dictMonadState) {
    return function (f) {
        return state(dictMonadState)(function (s) {
            var s$prime = f(s);
            return new Data_Tuple.Tuple(s$prime, s$prime);
        });
    };
};
var gets = function (dictMonadState) {
    return function (f) {
        return state(dictMonadState)(function (s) {
            return new Data_Tuple.Tuple(f(s), s);
        });
    };
};
var get = function (dictMonadState) {
    return state(dictMonadState)(function (s) {
        return new Data_Tuple.Tuple(s, s);
    });
};
module.exports = {
    state: state,
    MonadState: MonadState,
    get: get,
    gets: gets,
    put: put,
    modify: modify,
    modify_: modify_
};

},{"../Data.Tuple/index.js":127,"../Data.Unit/index.js":133}],25:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var MonadTrans = function (lift) {
    this.lift = lift;
};
var lift = function (dict) {
    return dict.lift;
};
module.exports = {
    lift: lift,
    MonadTrans: MonadTrans
};

},{}],26:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var MonadTell = function (Monad0, tell) {
    this.Monad0 = Monad0;
    this.tell = tell;
};
var MonadWriter = function (MonadTell0, listen, pass) {
    this.MonadTell0 = MonadTell0;
    this.listen = listen;
    this.pass = pass;
};
var tell = function (dict) {
    return dict.tell;
};
var pass = function (dict) {
    return dict.pass;
};
var listen = function (dict) {
    return dict.listen;
};
var listens = function (dictMonadWriter) {
    return function (f) {
        return function (m) {
            return Control_Bind.bind(((dictMonadWriter.MonadTell0()).Monad0()).Bind1())(listen(dictMonadWriter)(m))(function (v) {
                return Control_Applicative.pure(((dictMonadWriter.MonadTell0()).Monad0()).Applicative0())(new Data_Tuple.Tuple(v.value0, f(v.value1)));
            });
        };
    };
};
var censor = function (dictMonadWriter) {
    return function (f) {
        return function (m) {
            return pass(dictMonadWriter)(Control_Bind.bind(((dictMonadWriter.MonadTell0()).Monad0()).Bind1())(m)(function (v) {
                return Control_Applicative.pure(((dictMonadWriter.MonadTell0()).Monad0()).Applicative0())(new Data_Tuple.Tuple(v, f));
            }));
        };
    };
};
module.exports = {
    listen: listen,
    pass: pass,
    tell: tell,
    MonadTell: MonadTell,
    MonadWriter: MonadWriter,
    listens: listens,
    censor: censor
};

},{"../Control.Applicative/index.js":5,"../Control.Bind/index.js":11,"../Data.Tuple/index.js":127}],27:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Monad = function (Applicative0, Bind1) {
    this.Applicative0 = Applicative0;
    this.Bind1 = Bind1;
};
var whenM = function (dictMonad) {
    return function (mb) {
        return function (m) {
            return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
                return Control_Applicative.when(dictMonad.Applicative0())(v)(m);
            });
        };
    };
};
var unlessM = function (dictMonad) {
    return function (mb) {
        return function (m) {
            return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
                return Control_Applicative.unless(dictMonad.Applicative0())(v)(m);
            });
        };
    };
};
var monadFn = new Monad(function () {
    return Control_Applicative.applicativeFn;
}, function () {
    return Control_Bind.bindFn;
});
var monadArray = new Monad(function () {
    return Control_Applicative.applicativeArray;
}, function () {
    return Control_Bind.bindArray;
});
var liftM1 = function (dictMonad) {
    return function (f) {
        return function (a) {
            return Control_Bind.bind(dictMonad.Bind1())(a)(function (v) {
                return Control_Applicative.pure(dictMonad.Applicative0())(f(v));
            });
        };
    };
};
var ap = function (dictMonad) {
    return function (f) {
        return function (a) {
            return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                });
            });
        };
    };
};
module.exports = {
    Monad: Monad,
    liftM1: liftM1,
    ap: ap,
    whenM: whenM,
    unlessM: unlessM,
    monadFn: monadFn,
    monadArray: monadArray
};

},{"../Control.Applicative/index.js":5,"../Control.Bind/index.js":11}],28:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_MonadZero = require("../Control.MonadZero/index.js");
var MonadPlus = function (MonadZero0) {
    this.MonadZero0 = MonadZero0;
};
var monadPlusArray = new MonadPlus(function () {
    return Control_MonadZero.monadZeroArray;
});
module.exports = {
    MonadPlus: MonadPlus,
    monadPlusArray: monadPlusArray
};

},{"../Control.MonadZero/index.js":29}],29:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var MonadZero = function (Alternative1, Monad0) {
    this.Alternative1 = Alternative1;
    this.Monad0 = Monad0;
};
var monadZeroArray = new MonadZero(function () {
    return Control_Alternative.alternativeArray;
}, function () {
    return Control_Monad.monadArray;
});
var guard = function (dictMonadZero) {
    return function (v) {
        if (v) {
            return Control_Applicative.pure((dictMonadZero.Alternative1()).Applicative0())(Data_Unit.unit);
        };
        if (!v) {
            return Control_Plus.empty((dictMonadZero.Alternative1()).Plus1());
        };
        throw new Error("Failed pattern match at Control.MonadZero (line 54, column 1 - line 54, column 52): " + [ v.constructor.name ]);
    };
};
module.exports = {
    MonadZero: MonadZero,
    guard: guard,
    monadZeroArray: monadZeroArray
};

},{"../Control.Alternative/index.js":4,"../Control.Applicative/index.js":5,"../Control.Monad/index.js":27,"../Control.Plus/index.js":30,"../Data.Unit/index.js":133}],30:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Plus = function (Alt0, empty) {
    this.Alt0 = Alt0;
    this.empty = empty;
};
var plusArray = new Plus(function () {
    return Control_Alt.altArray;
}, [  ]);
var empty = function (dict) {
    return dict.empty;
};
module.exports = {
    Plus: Plus,
    empty: empty,
    plusArray: plusArray
};

},{"../Control.Alt/index.js":3}],31:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Semigroupoid = function (compose) {
    this.compose = compose;
};
var semigroupoidFn = new Semigroupoid(function (f) {
    return function (g) {
        return function (x) {
            return f(g(x));
        };
    };
});
var compose = function (dict) {
    return dict.compose;
};
var composeFlipped = function (dictSemigroupoid) {
    return function (f) {
        return function (g) {
            return compose(dictSemigroupoid)(g)(f);
        };
    };
};
module.exports = {
    compose: compose,
    Semigroupoid: Semigroupoid,
    composeFlipped: composeFlipped,
    semigroupoidFn: semigroupoidFn
};

},{}],32:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Monad_ST_Internal = require("../Control.Monad.ST.Internal/index.js");
var Data_Array_ST = require("../Data.Array.ST/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Iterator = (function () {
    function Iterator(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Iterator.create = function (value0) {
        return function (value1) {
            return new Iterator(value0, value1);
        };
    };
    return Iterator;
})();
var peek = function (v) {
    return function __do() {
        var v1 = Control_Monad_ST_Internal.read(v.value1)();
        return v.value0(v1);
    };
};
var next = function (v) {
    return function __do() {
        var v1 = Control_Monad_ST_Internal.read(v.value1)();
        var v2 = Control_Monad_ST_Internal.modify(function (v2) {
            return v2 + 1 | 0;
        })(v.value1)();
        return v.value0(v1);
    };
};
var pushWhile = function (p) {
    return function (iter) {
        return function (array) {
            return function __do() {
                var v = Control_Monad_ST_Internal["new"](false)();
                while (Data_Functor.map(Control_Monad_ST_Internal.functorST)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean))(Control_Monad_ST_Internal.read(v))()) {
                    (function __do() {
                        var v1 = peek(iter)();
                        if (v1 instanceof Data_Maybe.Just && p(v1.value0)) {
                            var v2 = Data_Array_ST.push(v1.value0)(array)();
                            return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(next(iter))();
                        };
                        return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Control_Monad_ST_Internal.write(true)(v))();
                    })();
                };
                return {};
            };
        };
    };
};
var pushAll = pushWhile(Data_Function["const"](true));
var iterator = function (f) {
    return Data_Functor.map(Control_Monad_ST_Internal.functorST)(Iterator.create(f))(Control_Monad_ST_Internal["new"](0));
};
var iterate = function (iter) {
    return function (f) {
        return function __do() {
            var v = Control_Monad_ST_Internal["new"](false)();
            while (Data_Functor.map(Control_Monad_ST_Internal.functorST)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean))(Control_Monad_ST_Internal.read(v))()) {
                (function __do() {
                    var v1 = next(iter)();
                    if (v1 instanceof Data_Maybe.Just) {
                        return f(v1.value0)();
                    };
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Control_Monad_ST_Internal.write(true)(v))();
                    };
                    throw new Error("Failed pattern match at Data.Array.ST.Iterator (line 42, column 5 - line 44, column 47): " + [ v1.constructor.name ]);
                })();
            };
            return {};
        };
    };
};
var exhausted = function ($27) {
    return Data_Functor.map(Control_Monad_ST_Internal.functorST)(Data_Maybe.isNothing)(peek($27));
};
module.exports = {
    iterator: iterator,
    iterate: iterate,
    next: next,
    peek: peek,
    exhausted: exhausted,
    pushWhile: pushWhile,
    pushAll: pushAll
};

},{"../Control.Monad.ST.Internal/index.js":23,"../Data.Array.ST/index.js":34,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Maybe/index.js":79}],33:[function(require,module,exports){
"use strict";

exports.empty = function () {
  return [];
};

exports.peekImpl = function (just) {
  return function (nothing) {
    return function (i) {
      return function (xs) {
        return function () {
          return i >= 0 && i < xs.length ? just(xs[i]) : nothing;
        };
      };
    };
  };
};

exports.poke = function (i) {
  return function (a) {
    return function (xs) {
      return function () {
        var ret = i >= 0 && i < xs.length;
        if (ret) xs[i] = a;
        return ret;
      };
    };
  };
};

exports.pushAll = function (as) {
  return function (xs) {
    return function () {
      return xs.push.apply(xs, as);
    };
  };
};

exports.splice = function (i) {
  return function (howMany) {
    return function (bs) {
      return function (xs) {
        return function () {
          return xs.splice.apply(xs, [i, howMany].concat(bs));
        };
      };
    };
  };
};

exports.copyImpl = function (xs) {
  return function () {
    return xs.slice();
  };
};

exports.sortByImpl = function (comp) {
  return function (xs) {
    return function () {
      return xs.sort(function (x, y) {
        return comp(x)(y);
      });
    };
  };
};

exports.toAssocArray = function (xs) {
  return function () {
    var n = xs.length;
    var as = new Array(n);
    for (var i = 0; i < n; i++) as[i] = { value: xs[i], index: i };
    return as;
  };
};

},{}],34:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_ST_Internal = require("../Control.Monad.ST.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var unsafeThaw = function ($11) {
    return Control_Applicative.pure(Control_Monad_ST_Internal.applicativeST)($11);
};
var unsafeFreeze = function ($12) {
    return Control_Applicative.pure(Control_Monad_ST_Internal.applicativeST)($12);
};
var thaw = $foreign.copyImpl;
var withArray = function (f) {
    return function (xs) {
        return function __do() {
            var v = thaw(xs)();
            var v1 = f(v)();
            return unsafeFreeze(v)();
        };
    };
};
var sortBy = function (comp) {
    var comp$prime = function (x) {
        return function (y) {
            var v = comp(x)(y);
            if (v instanceof Data_Ordering.GT) {
                return 1;
            };
            if (v instanceof Data_Ordering.EQ) {
                return 0;
            };
            if (v instanceof Data_Ordering.LT) {
                return -1 | 0;
            };
            throw new Error("Failed pattern match at Data.Array.ST (line 94, column 15 - line 99, column 1): " + [ v.constructor.name ]);
        };
    };
    return $foreign.sortByImpl(comp$prime);
};
var sortWith = function (dictOrd) {
    return function (f) {
        return sortBy(Data_Ord.comparing(dictOrd)(f));
    };
};
var sort = function (dictOrd) {
    return sortBy(Data_Ord.compare(dictOrd));
};
var run = function (st) {
    return Control_Bind.bind(Control_Monad_ST_Internal.bindST)(st)(unsafeFreeze)();
};
var push = function (a) {
    return $foreign.pushAll([ a ]);
};
var peek = $foreign.peekImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var modify = function (i) {
    return function (f) {
        return function (xs) {
            return function __do() {
                var v = peek(i)(xs)();
                if (v instanceof Data_Maybe.Just) {
                    return $foreign.poke(i)(f(v.value0))(xs)();
                };
                if (v instanceof Data_Maybe.Nothing) {
                    return false;
                };
                throw new Error("Failed pattern match at Data.Array.ST (line 156, column 3 - line 158, column 26): " + [ v.constructor.name ]);
            };
        };
    };
};
var freeze = $foreign.copyImpl;
module.exports = {
    run: run,
    withArray: withArray,
    peek: peek,
    push: push,
    modify: modify,
    sort: sort,
    sortBy: sortBy,
    sortWith: sortWith,
    freeze: freeze,
    thaw: thaw,
    unsafeFreeze: unsafeFreeze,
    unsafeThaw: unsafeThaw,
    empty: $foreign.empty,
    poke: $foreign.poke,
    pushAll: $foreign.pushAll,
    splice: $foreign.splice,
    toAssocArray: $foreign.toAssocArray
};

},{"../Control.Applicative/index.js":5,"../Control.Bind/index.js":11,"../Control.Monad.ST.Internal/index.js":23,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"./foreign.js":33}],35:[function(require,module,exports){
"use strict";

//------------------------------------------------------------------------------
// Array creation --------------------------------------------------------------
//------------------------------------------------------------------------------

exports.range = function (start) {
  return function (end) {
    var step = start > end ? -1 : 1;
    var result = new Array(step * (end - start) + 1);
    var i = start, n = 0;
    while (i !== end) {
      result[n++] = i;
      i += step;
    }
    result[n] = i;
    return result;
  };
};

var replicateFill = function (count) {
  return function (value) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value);
  };
};

var replicatePolyfill = function (count) {
  return function (value) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value;
    }
    return result;
  };
};

// In browsers that have Array.prototype.fill we use it, as it's faster.
exports.replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;

exports.fromFoldableImpl = (function () {
  function Cons(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  var emptyList = {};

  function curryCons(head) {
    return function (tail) {
      return new Cons(head, tail);
    };
  }

  function listToArray(list) {
    var result = [];
    var count = 0;
    var xs = list;
    while (xs !== emptyList) {
      result[count++] = xs.head;
      xs = xs.tail;
    }
    return result;
  }

  return function (foldr) {
    return function (xs) {
      return listToArray(foldr(curryCons)(emptyList)(xs));
    };
  };
})();

//------------------------------------------------------------------------------
// Array size ------------------------------------------------------------------
//------------------------------------------------------------------------------

exports.length = function (xs) {
  return xs.length;
};

//------------------------------------------------------------------------------
// Extending arrays ------------------------------------------------------------
//------------------------------------------------------------------------------

exports.cons = function (e) {
  return function (l) {
    return [e].concat(l);
  };
};

exports.snoc = function (l) {
  return function (e) {
    var l1 = l.slice();
    l1.push(e);
    return l1;
  };
};

//------------------------------------------------------------------------------
// Non-indexed reads -----------------------------------------------------------
//------------------------------------------------------------------------------

exports["uncons'"] = function (empty) {
  return function (next) {
    return function (xs) {
      return xs.length === 0 ? empty({}) : next(xs[0])(xs.slice(1));
    };
  };
};

//------------------------------------------------------------------------------
// Indexed operations ----------------------------------------------------------
//------------------------------------------------------------------------------

exports.indexImpl = function (just) {
  return function (nothing) {
    return function (xs) {
      return function (i) {
        return i < 0 || i >= xs.length ? nothing :  just(xs[i]);
      };
    };
  };
};

exports.findIndexImpl = function (just) {
  return function (nothing) {
    return function (f) {
      return function (xs) {
        for (var i = 0, l = xs.length; i < l; i++) {
          if (f(xs[i])) return just(i);
        }
        return nothing;
      };
    };
  };
};

exports.findLastIndexImpl = function (just) {
  return function (nothing) {
    return function (f) {
      return function (xs) {
        for (var i = xs.length - 1; i >= 0; i--) {
          if (f(xs[i])) return just(i);
        }
        return nothing;
      };
    };
  };
};

exports._insertAt = function (just) {
  return function (nothing) {
    return function (i) {
      return function (a) {
        return function (l) {
          if (i < 0 || i > l.length) return nothing;
          var l1 = l.slice();
          l1.splice(i, 0, a);
          return just(l1);
        };
      };
    };
  };
};

exports._deleteAt = function (just) {
  return function (nothing) {
    return function (i) {
      return function (l) {
        if (i < 0 || i >= l.length) return nothing;
        var l1 = l.slice();
        l1.splice(i, 1);
        return just(l1);
      };
    };
  };
};

exports._updateAt = function (just) {
  return function (nothing) {
    return function (i) {
      return function (a) {
        return function (l) {
          if (i < 0 || i >= l.length) return nothing;
          var l1 = l.slice();
          l1[i] = a;
          return just(l1);
        };
      };
    };
  };
};

//------------------------------------------------------------------------------
// Transformations -------------------------------------------------------------
//------------------------------------------------------------------------------

exports.reverse = function (l) {
  return l.slice().reverse();
};

exports.concat = function (xss) {
  if (xss.length <= 10000) {
    // This method is faster, but it crashes on big arrays.
    // So we use it when can and fallback to simple variant otherwise.
    return Array.prototype.concat.apply([], xss);
  }

  var result = [];
  for (var i = 0, l = xss.length; i < l; i++) {
    var xs = xss[i];
    for (var j = 0, m = xs.length; j < m; j++) {
      result.push(xs[j]);
    }
  }
  return result;
};

exports.filter = function (f) {
  return function (xs) {
    return xs.filter(f);
  };
};

exports.partition = function (f) {
  return function (xs) {
    var yes = [];
    var no  = [];
    for (var i = 0; i < xs.length; i++) {
      var x = xs[i];
      if (f(x))
        yes.push(x);
      else
        no.push(x);
    }
    return { yes: yes, no: no };
  };
};

//------------------------------------------------------------------------------
// Sorting ---------------------------------------------------------------------
//------------------------------------------------------------------------------

exports.sortImpl = function (f) {
  return function (l) {
    return l.slice().sort(function (x, y) {
      return f(x)(y);
    });
  };
};

//------------------------------------------------------------------------------
// Subarrays -------------------------------------------------------------------
//------------------------------------------------------------------------------

exports.slice = function (s) {
  return function (e) {
    return function (l) {
      return l.slice(s, e);
    };
  };
};

exports.take = function (n) {
  return function (l) {
    return n < 1 ? [] : l.slice(0, n);
  };
};

exports.drop = function (n) {
  return function (l) {
    return n < 1 ? l : l.slice(n);
  };
};

//------------------------------------------------------------------------------
// Zipping ---------------------------------------------------------------------
//------------------------------------------------------------------------------

exports.zipWith = function (f) {
  return function (xs) {
    return function (ys) {
      var l = xs.length < ys.length ? xs.length : ys.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(xs[i])(ys[i]);
      }
      return result;
    };
  };
};

//------------------------------------------------------------------------------
// Partial ---------------------------------------------------------------------
//------------------------------------------------------------------------------

exports.unsafeIndexImpl = function (xs) {
  return function (n) {
    return xs[n];
  };
};

},{}],36:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_ST_Internal = require("../Control.Monad.ST.Internal/index.js");
var Data_Array_ST = require("../Data.Array.ST/index.js");
var Data_Array_ST_Iterator = require("../Data.Array.ST.Iterator/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_Traversable.traversableArray)(dictApplicative)($foreign.zipWith(f)(xs)(ys));
            };
        };
    };
};
var zip = $foreign.zipWith(Data_Tuple.Tuple.create);
var updateAtIndices = function (dictFoldable) {
    return function (us) {
        return function (xs) {
            return Data_Array_ST.withArray(function (res) {
                return Data_Foldable.traverse_(Control_Monad_ST_Internal.applicativeST)(dictFoldable)(function (v) {
                    return Data_Array_ST.poke(v.value0)(v.value1)(res);
                })(us);
            })(xs)();
        };
    };
};
var updateAt = $foreign["_updateAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var unsafeIndex = function (dictPartial) {
    return $foreign.unsafeIndexImpl;
};
var uncons = $foreign["uncons'"](Data_Function["const"](Data_Maybe.Nothing.value))(function (x) {
    return function (xs) {
        return new Data_Maybe.Just({
            head: x,
            tail: xs
        });
    };
});
var toUnfoldable = function (dictUnfoldable) {
    return function (xs) {
        var len = $foreign.length(xs);
        var f = function (i) {
            if (i < len) {
                return new Data_Maybe.Just(new Data_Tuple.Tuple(unsafeIndex()(xs)(i), i + 1 | 0));
            };
            if (Data_Boolean.otherwise) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Array (line 143, column 3 - line 145, column 26): " + [ i.constructor.name ]);
        };
        return Data_Unfoldable.unfoldr(dictUnfoldable)(f)(0);
    };
};
var takeEnd = function (n) {
    return function (xs) {
        return $foreign.drop($foreign.length(xs) - n | 0)(xs);
    };
};
var tail = $foreign["uncons'"](Data_Function["const"](Data_Maybe.Nothing.value))(function (v) {
    return function (xs) {
        return new Data_Maybe.Just(xs);
    };
});
var sortBy = function (comp) {
    return function (xs) {
        var comp$prime = function (x) {
            return function (y) {
                var v = comp(x)(y);
                if (v instanceof Data_Ordering.GT) {
                    return 1;
                };
                if (v instanceof Data_Ordering.EQ) {
                    return 0;
                };
                if (v instanceof Data_Ordering.LT) {
                    return -1 | 0;
                };
                throw new Error("Failed pattern match at Data.Array (line 702, column 15 - line 707, column 1): " + [ v.constructor.name ]);
            };
        };
        return $foreign.sortImpl(comp$prime)(xs);
    };
};
var sortWith = function (dictOrd) {
    return function (f) {
        return sortBy(Data_Ord.comparing(dictOrd)(f));
    };
};
var sort = function (dictOrd) {
    return function (xs) {
        return sortBy(Data_Ord.compare(dictOrd))(xs);
    };
};
var singleton = function (a) {
    return [ a ];
};
var $$null = function (xs) {
    return $foreign.length(xs) === 0;
};
var nubByEq = function (eq) {
    return function (xs) {
        return (function __do() {
            var v = Data_Array_ST.empty();
            Control_Monad_ST_Internal.foreach(xs)(function (x) {
                return function __do() {
                    var v1 = Data_Functor.map(Control_Monad_ST_Internal.functorST)(function ($113) {
                        return !Data_Foldable.any(Data_Foldable.foldableArray)(Data_HeytingAlgebra.heytingAlgebraBoolean)(function (v1) {
                            return eq(v1)(x);
                        })($113);
                    })(Data_Array_ST.unsafeFreeze(v))();
                    return Control_Applicative.when(Control_Monad_ST_Internal.applicativeST)(v1)(Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Data_Array_ST.push(x)(v)))();
                };
            })();
            return Data_Array_ST.unsafeFreeze(v)();
        })();
    };
};
var nubEq = function (dictEq) {
    return nubByEq(Data_Eq.eq(dictEq));
};
var modifyAtIndices = function (dictFoldable) {
    return function (is) {
        return function (f) {
            return function (xs) {
                return Data_Array_ST.withArray(function (res) {
                    return Data_Foldable.traverse_(Control_Monad_ST_Internal.applicativeST)(dictFoldable)(function (i) {
                        return Data_Array_ST.modify(i)(f)(res);
                    })(is);
                })(xs)();
            };
        };
    };
};
var mapWithIndex = function (f) {
    return function (xs) {
        return $foreign.zipWith(f)($foreign.range(0)($foreign.length(xs) - 1 | 0))(xs);
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())($foreign.cons)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(some(dictAlternative)(dictLazy)(v))(Control_Applicative.pure(dictAlternative.Applicative0())([  ]));
        };
    };
};
var insertAt = $foreign["_insertAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var init = function (xs) {
    if ($$null(xs)) {
        return Data_Maybe.Nothing.value;
    };
    if (Data_Boolean.otherwise) {
        return new Data_Maybe.Just($foreign.slice(0)($foreign.length(xs) - 1 | 0)(xs));
    };
    throw new Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [ xs.constructor.name ]);
};
var index = $foreign.indexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var last = function (xs) {
    return index(xs)($foreign.length(xs) - 1 | 0);
};
var unsnoc = function (xs) {
    return Control_Apply.apply(Data_Maybe.applyMaybe)(Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return function (v1) {
            return {
                init: v,
                last: v1
            };
        };
    })(init(xs)))(last(xs));
};
var modifyAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                return updateAt(i)(f(x))(xs);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)(index(xs)(i));
        };
    };
};
var span = function (p) {
    return function (arr) {
        var go = function ($copy_i) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(i) {
                var v = index(arr)(i);
                if (v instanceof Data_Maybe.Just) {
                    var $77 = p(v.value0);
                    if ($77) {
                        $copy_i = i + 1 | 0;
                        return;
                    };
                    $tco_done = true;
                    return new Data_Maybe.Just(i);
                };
                if (v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.Array (line 834, column 5 - line 836, column 25): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_i);
            };
            return $tco_result;
        };
        var breakIndex = go(0);
        if (breakIndex instanceof Data_Maybe.Just && breakIndex.value0 === 0) {
            return {
                init: [  ],
                rest: arr
            };
        };
        if (breakIndex instanceof Data_Maybe.Just) {
            return {
                init: $foreign.slice(0)(breakIndex.value0)(arr),
                rest: $foreign.slice(breakIndex.value0)($foreign.length(arr))(arr)
            };
        };
        if (breakIndex instanceof Data_Maybe.Nothing) {
            return {
                init: arr,
                rest: [  ]
            };
        };
        throw new Error("Failed pattern match at Data.Array (line 821, column 3 - line 827, column 30): " + [ breakIndex.constructor.name ]);
    };
};
var takeWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).init;
    };
};
var unzip = function (xs) {
    return (function __do() {
        var v = Data_Array_ST.empty();
        var v1 = Data_Array_ST.empty();
        var v2 = Data_Array_ST_Iterator.iterator(function (v2) {
            return index(xs)(v2);
        })();
        Data_Array_ST_Iterator.iterate(v2)(function (v3) {
            return function __do() {
                Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Data_Array_ST.push(v3.value0)(v))();
                return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Data_Array_ST.push(v3.value1)(v1))();
            };
        })();
        var v3 = Data_Array_ST.unsafeFreeze(v)();
        var v4 = Data_Array_ST.unsafeFreeze(v1)();
        return new Data_Tuple.Tuple(v3, v4);
    })();
};
var head = function (xs) {
    return index(xs)(0);
};
var nubBy = function (comp) {
    return function (xs) {
        var indexedAndSorted = sortBy(function (x) {
            return function (y) {
                return comp(Data_Tuple.snd(x))(Data_Tuple.snd(y));
            };
        })(mapWithIndex(Data_Tuple.Tuple.create)(xs));
        var v = head(indexedAndSorted);
        if (v instanceof Data_Maybe.Nothing) {
            return [  ];
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Functor.map(Data_Functor.functorArray)(Data_Tuple.snd)(sortWith(Data_Ord.ordInt)(Data_Tuple.fst)((function __do() {
                var v1 = Data_Array_ST.unsafeThaw(singleton(v.value0))();
                Control_Monad_ST_Internal.foreach(indexedAndSorted)(function (v2) {
                    return function __do() {
                        var v3 = Data_Functor.map(Control_Monad_ST_Internal.functorST)(function ($114) {
                            return Data_Tuple.snd((function ($115) {
                                return Data_Maybe.fromJust()(last($115));
                            })($114));
                        })(Data_Array_ST.unsafeFreeze(v1))();
                        return Control_Applicative.when(Control_Monad_ST_Internal.applicativeST)(Data_Eq.notEq(Data_Ordering.eqOrdering)(comp(v3)(v2.value1))(Data_Ordering.EQ.value))(Data_Functor["void"](Control_Monad_ST_Internal.functorST)(Data_Array_ST.push(v2)(v1)))();
                    };
                })();
                return Data_Array_ST.unsafeFreeze(v1)();
            })()));
        };
        throw new Error("Failed pattern match at Data.Array (line 903, column 17 - line 911, column 29): " + [ v.constructor.name ]);
    };
};
var nub = function (dictOrd) {
    return nubBy(Data_Ord.compare(dictOrd));
};
var groupBy = function (op) {
    return function (xs) {
        return (function __do() {
            var v = Data_Array_ST.empty();
            var v1 = Data_Array_ST_Iterator.iterator(function (v1) {
                return index(xs)(v1);
            })();
            Data_Array_ST_Iterator.iterate(v1)(function (x) {
                return Data_Functor["void"](Control_Monad_ST_Internal.functorST)(function __do() {
                    var v2 = Data_Array_ST.empty();
                    var v3 = Data_Array_ST.push(x)(v2)();
                    Data_Array_ST_Iterator.pushWhile(op(x))(v1)(v2)();
                    var v4 = Data_Array_ST.unsafeFreeze(v2)();
                    return Data_Array_ST.push(v4)(v)();
                });
            })();
            return Data_Array_ST.unsafeFreeze(v)();
        })();
    };
};
var group = function (dictEq) {
    return function (xs) {
        return groupBy(Data_Eq.eq(dictEq))(xs);
    };
};
var group$prime = function (dictOrd) {
    return function ($116) {
        return group(dictOrd.Eq0())(sort(dictOrd)($116));
    };
};
var fromFoldable = function (dictFoldable) {
    return $foreign.fromFoldableImpl(Data_Foldable.foldr(dictFoldable));
};
var foldRecM = function (dictMonadRec) {
    return function (f) {
        return function (a) {
            return function (array) {
                var go = function (res) {
                    return function (i) {
                        if (i >= $foreign.length(array)) {
                            return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Done(res));
                        };
                        if (Data_Boolean.otherwise) {
                            return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(f(res)(unsafeIndex()(array)(i)))(function (v) {
                                return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Loop({
                                    a: v,
                                    b: i + 1 | 0
                                }));
                            });
                        };
                        throw new Error("Failed pattern match at Data.Array (line 1101, column 3 - line 1105, column 42): " + [ res.constructor.name, i.constructor.name ]);
                    };
                };
                return Control_Monad_Rec_Class.tailRecM2(dictMonadRec)(go)(a)(0);
            };
        };
    };
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (a) {
            return $foreign["uncons'"](function (v) {
                return Control_Applicative.pure(dictMonad.Applicative0())(a);
            })(function (b) {
                return function (bs) {
                    return Control_Bind.bind(dictMonad.Bind1())(f(a)(b))(function (a$prime) {
                        return foldM(dictMonad)(f)(a$prime)(bs);
                    });
                };
            });
        };
    };
};
var findLastIndex = $foreign.findLastIndexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var insertBy = function (cmp) {
    return function (x) {
        return function (ys) {
            var i = Data_Maybe.maybe(0)(function (v) {
                return v + 1 | 0;
            })(findLastIndex(function (y) {
                return Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(x)(y))(Data_Ordering.GT.value);
            })(ys));
            return Data_Maybe.fromJust()(insertAt(i)(x)(ys));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var findIndex = $foreign.findIndexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return $foreign.filter(function (x) {
                return Data_Maybe.isJust(findIndex(eq(x))(ys));
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).rest;
    };
};
var dropEnd = function (n) {
    return function (xs) {
        return $foreign.take($foreign.length(xs) - n | 0)(xs);
    };
};
var deleteAt = $foreign["_deleteAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var deleteBy = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2.length === 0) {
                return [  ];
            };
            return Data_Maybe.maybe(v2)(function (i) {
                return Data_Maybe.fromJust()(deleteAt(i)(v2));
            })(findIndex(v(v1))(v2));
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Data_Semigroup.append(Data_Semigroup.semigroupArray)(xs)(Data_Foldable.foldl(Data_Foldable.foldableArray)(Data_Function.flip(deleteBy(eq)))(nubByEq(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return Data_Foldable.foldr(Data_Foldable.foldableArray)($$delete(dictEq));
};
var concatMap = Data_Function.flip(Control_Bind.bind(Control_Bind.bindArray));
var mapMaybe = function (f) {
    return concatMap(function ($117) {
        return Data_Maybe.maybe([  ])(singleton)(f($117));
    });
};
var filterA = function (dictApplicative) {
    return function (p) {
        return function ($118) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(mapMaybe(function (v) {
                if (v.value1) {
                    return new Data_Maybe.Just(v.value0);
                };
                return Data_Maybe.Nothing.value;
            }))(Data_Traversable.traverse(Data_Traversable.traversableArray)(dictApplicative)(function (x) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Tuple.Tuple.create(x))(p(x));
            })($118));
        };
    };
};
var catMaybes = mapMaybe(Control_Category.identity(Control_Category.categoryFn));
var alterAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                var v = f(x);
                if (v instanceof Data_Maybe.Nothing) {
                    return deleteAt(i)(xs);
                };
                if (v instanceof Data_Maybe.Just) {
                    return updateAt(i)(v.value0)(xs);
                };
                throw new Error("Failed pattern match at Data.Array (line 544, column 10 - line 546, column 32): " + [ v.constructor.name ]);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)(index(xs)(i));
        };
    };
};
module.exports = {
    fromFoldable: fromFoldable,
    toUnfoldable: toUnfoldable,
    singleton: singleton,
    some: some,
    many: many,
    "null": $$null,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    unsnoc: unsnoc,
    index: index,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    updateAtIndices: updateAtIndices,
    modifyAt: modifyAt,
    modifyAtIndices: modifyAtIndices,
    alterAt: alterAt,
    concatMap: concatMap,
    filterA: filterA,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    mapWithIndex: mapWithIndex,
    sort: sort,
    sortBy: sortBy,
    sortWith: sortWith,
    takeEnd: takeEnd,
    takeWhile: takeWhile,
    dropEnd: dropEnd,
    dropWhile: dropWhile,
    span: span,
    group: group,
    "group'": group$prime,
    groupBy: groupBy,
    nub: nub,
    nubEq: nubEq,
    nubBy: nubBy,
    nubByEq: nubByEq,
    union: union,
    unionBy: unionBy,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    intersect: intersect,
    intersectBy: intersectBy,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    foldM: foldM,
    foldRecM: foldRecM,
    unsafeIndex: unsafeIndex,
    range: $foreign.range,
    replicate: $foreign.replicate,
    length: $foreign.length,
    cons: $foreign.cons,
    snoc: $foreign.snoc,
    reverse: $foreign.reverse,
    concat: $foreign.concat,
    filter: $foreign.filter,
    partition: $foreign.partition,
    slice: $foreign.slice,
    take: $foreign.take,
    drop: $foreign.drop,
    zipWith: $foreign.zipWith
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Lazy/index.js":16,"../Control.Monad.Rec.Class/index.js":21,"../Control.Monad.ST.Internal/index.js":23,"../Data.Array.ST.Iterator/index.js":32,"../Data.Array.ST/index.js":34,"../Data.Boolean/index.js":45,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Traversable/index.js":125,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"./foreign.js":35}],37:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Bifoldable = function (bifoldMap, bifoldl, bifoldr) {
    this.bifoldMap = bifoldMap;
    this.bifoldl = bifoldl;
    this.bifoldr = bifoldr;
};
var bifoldr = function (dict) {
    return dict.bifoldr;
};
var bitraverse_ = function (dictBifoldable) {
    return function (dictApplicative) {
        return function (f) {
            return function (g) {
                return bifoldr(dictBifoldable)(function ($97) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(f($97));
                })(function ($98) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(g($98));
                })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
            };
        };
    };
};
var bifor_ = function (dictBifoldable) {
    return function (dictApplicative) {
        return function (t) {
            return function (f) {
                return function (g) {
                    return bitraverse_(dictBifoldable)(dictApplicative)(f)(g)(t);
                };
            };
        };
    };
};
var bisequence_ = function (dictBifoldable) {
    return function (dictApplicative) {
        return bitraverse_(dictBifoldable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
    };
};
var bifoldl = function (dict) {
    return dict.bifoldl;
};
var bifoldableJoker = function (dictFoldable) {
    return new Bifoldable(function (dictMonoid) {
        return function (v) {
            return function (r) {
                return function (v1) {
                    return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(r)(v1);
                };
            };
        };
    }, function (v) {
        return function (r) {
            return function (u) {
                return function (v1) {
                    return Data_Foldable.foldl(dictFoldable)(r)(u)(v1);
                };
            };
        };
    }, function (v) {
        return function (r) {
            return function (u) {
                return function (v1) {
                    return Data_Foldable.foldr(dictFoldable)(r)(u)(v1);
                };
            };
        };
    });
};
var bifoldableClown = function (dictFoldable) {
    return new Bifoldable(function (dictMonoid) {
        return function (l) {
            return function (v) {
                return function (v1) {
                    return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(l)(v1);
                };
            };
        };
    }, function (l) {
        return function (v) {
            return function (u) {
                return function (v1) {
                    return Data_Foldable.foldl(dictFoldable)(l)(u)(v1);
                };
            };
        };
    }, function (l) {
        return function (v) {
            return function (u) {
                return function (v1) {
                    return Data_Foldable.foldr(dictFoldable)(l)(u)(v1);
                };
            };
        };
    });
};
var bifoldMapDefaultR = function (dictBifoldable) {
    return function (dictMonoid) {
        return function (f) {
            return function (g) {
                return bifoldr(dictBifoldable)(function ($99) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(f($99));
                })(function ($100) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(g($100));
                })(Data_Monoid.mempty(dictMonoid));
            };
        };
    };
};
var bifoldMapDefaultL = function (dictBifoldable) {
    return function (dictMonoid) {
        return function (f) {
            return function (g) {
                return bifoldl(dictBifoldable)(function (m) {
                    return function (a) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(m)(f(a));
                    };
                })(function (m) {
                    return function (b) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(m)(g(b));
                    };
                })(Data_Monoid.mempty(dictMonoid));
            };
        };
    };
};
var bifoldMap = function (dict) {
    return dict.bifoldMap;
};
var bifoldableFlip = function (dictBifoldable) {
    return new Bifoldable(function (dictMonoid) {
        return function (r) {
            return function (l) {
                return function (v) {
                    return bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v);
                };
            };
        };
    }, function (r) {
        return function (l) {
            return function (u) {
                return function (v) {
                    return bifoldl(dictBifoldable)(l)(r)(u)(v);
                };
            };
        };
    }, function (r) {
        return function (l) {
            return function (u) {
                return function (v) {
                    return bifoldr(dictBifoldable)(l)(r)(u)(v);
                };
            };
        };
    });
};
var bifoldableWrap = function (dictBifoldable) {
    return new Bifoldable(function (dictMonoid) {
        return function (l) {
            return function (r) {
                return function (v) {
                    return bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v);
                };
            };
        };
    }, function (l) {
        return function (r) {
            return function (u) {
                return function (v) {
                    return bifoldl(dictBifoldable)(l)(r)(u)(v);
                };
            };
        };
    }, function (l) {
        return function (r) {
            return function (u) {
                return function (v) {
                    return bifoldr(dictBifoldable)(l)(r)(u)(v);
                };
            };
        };
    });
};
var bifoldlDefault = function (dictBifoldable) {
    return function (f) {
        return function (g) {
            return function (z) {
                return function (p) {
                    return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(bifoldMap(dictBifoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function ($101) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(f)($101)));
                    })(function ($102) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(g)($102)));
                    })(p)))(z);
                };
            };
        };
    };
};
var bifoldrDefault = function (dictBifoldable) {
    return function (f) {
        return function (g) {
            return function (z) {
                return function (p) {
                    return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(bifoldMap(dictBifoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function ($103) {
                        return Data_Monoid_Endo.Endo(f($103));
                    })(function ($104) {
                        return Data_Monoid_Endo.Endo(g($104));
                    })(p))(z);
                };
            };
        };
    };
};
var bifoldableProduct = function (dictBifoldable) {
    return function (dictBifoldable1) {
        return new Bifoldable(function (dictMonoid) {
            return function (l) {
                return function (r) {
                    return function (v) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v.value0))(bifoldMap(dictBifoldable1)(dictMonoid)(l)(r)(v.value1));
                    };
                };
            };
        }, function (l) {
            return function (r) {
                return function (u) {
                    return function (m) {
                        return bifoldlDefault(bifoldableProduct(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
                    };
                };
            };
        }, function (l) {
            return function (r) {
                return function (u) {
                    return function (m) {
                        return bifoldrDefault(bifoldableProduct(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
                    };
                };
            };
        });
    };
};
var bifold = function (dictBifoldable) {
    return function (dictMonoid) {
        return bifoldMap(dictBifoldable)(dictMonoid)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
    };
};
var biany = function (dictBifoldable) {
    return function (dictBooleanAlgebra) {
        return function (p) {
            return function (q) {
                return function ($105) {
                    return Data_Newtype.unwrap(Data_Newtype.newtypeDisj)(bifoldMap(dictBifoldable)(Data_Monoid_Disj.monoidDisj(dictBooleanAlgebra.HeytingAlgebra0()))(function ($106) {
                        return Data_Monoid_Disj.Disj(p($106));
                    })(function ($107) {
                        return Data_Monoid_Disj.Disj(q($107));
                    })($105));
                };
            };
        };
    };
};
var biall = function (dictBifoldable) {
    return function (dictBooleanAlgebra) {
        return function (p) {
            return function (q) {
                return function ($108) {
                    return Data_Newtype.unwrap(Data_Newtype.newtypeConj)(bifoldMap(dictBifoldable)(Data_Monoid_Conj.monoidConj(dictBooleanAlgebra.HeytingAlgebra0()))(function ($109) {
                        return Data_Monoid_Conj.Conj(p($109));
                    })(function ($110) {
                        return Data_Monoid_Conj.Conj(q($110));
                    })($108));
                };
            };
        };
    };
};
module.exports = {
    bifoldMap: bifoldMap,
    bifoldl: bifoldl,
    bifoldr: bifoldr,
    Bifoldable: Bifoldable,
    bifoldrDefault: bifoldrDefault,
    bifoldlDefault: bifoldlDefault,
    bifoldMapDefaultR: bifoldMapDefaultR,
    bifoldMapDefaultL: bifoldMapDefaultL,
    bifold: bifold,
    bitraverse_: bitraverse_,
    bifor_: bifor_,
    bisequence_: bisequence_,
    biany: biany,
    biall: biall,
    bifoldableClown: bifoldableClown,
    bifoldableJoker: bifoldableJoker,
    bifoldableFlip: bifoldableFlip,
    bifoldableProduct: bifoldableProduct,
    bifoldableWrap: bifoldableWrap
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Endo/index.js":84,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Semigroup/index.js":105,"../Data.Unit/index.js":133}],38:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Clown = function (x) {
    return x;
};
var showClown = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Clown " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordClown = function (dictOrd) {
    return dictOrd;
};
var newtypeClown = new Data_Newtype.Newtype(function (n) {
    return n;
}, Clown);
var functorClown = new Data_Functor.Functor(function (v) {
    return function (v1) {
        return v1;
    };
});
var eqClown = function (dictEq) {
    return dictEq;
};
var bifunctorClown = function (dictFunctor) {
    return new Data_Bifunctor.Bifunctor(function (f) {
        return function (v) {
            return function (v1) {
                return Data_Functor.map(dictFunctor)(f)(v1);
            };
        };
    });
};
var biapplyClown = function (dictApply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorClown(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return Control_Apply.apply(dictApply)(v)(v1);
        };
    });
};
var biapplicativeClown = function (dictApplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyClown(dictApplicative.Apply0());
    }, function (a) {
        return function (v) {
            return Control_Applicative.pure(dictApplicative)(a);
        };
    });
};
module.exports = {
    Clown: Clown,
    newtypeClown: newtypeClown,
    eqClown: eqClown,
    ordClown: ordClown,
    showClown: showClown,
    functorClown: functorClown,
    bifunctorClown: bifunctorClown,
    biapplyClown: biapplyClown,
    biapplicativeClown: biapplicativeClown
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Data.Bifunctor/index.js":43,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Show/index.js":109}],39:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Flip = function (x) {
    return x;
};
var showFlip = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Flip " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordFlip = function (dictOrd) {
    return dictOrd;
};
var newtypeFlip = new Data_Newtype.Newtype(function (n) {
    return n;
}, Flip);
var functorFlip = function (dictBifunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Bifunctor.lmap(dictBifunctor)(f)(v);
        };
    });
};
var eqFlip = function (dictEq) {
    return dictEq;
};
var bifunctorFlip = function (dictBifunctor) {
    return new Data_Bifunctor.Bifunctor(function (f) {
        return function (g) {
            return function (v) {
                return Data_Bifunctor.bimap(dictBifunctor)(g)(f)(v);
            };
        };
    });
};
var biapplyFlip = function (dictBiapply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorFlip(dictBiapply.Bifunctor0());
    }, function (v) {
        return function (v1) {
            return Control_Biapply.biapply(dictBiapply)(v)(v1);
        };
    });
};
var biapplicativeFlip = function (dictBiapplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyFlip(dictBiapplicative.Biapply0());
    }, function (a) {
        return function (b) {
            return Control_Biapplicative.bipure(dictBiapplicative)(b)(a);
        };
    });
};
module.exports = {
    Flip: Flip,
    newtypeFlip: newtypeFlip,
    eqFlip: eqFlip,
    ordFlip: ordFlip,
    showFlip: showFlip,
    functorFlip: functorFlip,
    bifunctorFlip: bifunctorFlip,
    biapplyFlip: biapplyFlip,
    biapplicativeFlip: biapplicativeFlip
};

},{"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Data.Bifunctor/index.js":43,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Show/index.js":109}],40:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Joker = function (x) {
    return x;
};
var showJoker = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Joker " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordJoker = function (dictOrd) {
    return dictOrd;
};
var newtypeJoker = new Data_Newtype.Newtype(function (n) {
    return n;
}, Joker);
var functorJoker = function (dictFunctor) {
    return new Data_Functor.Functor(function (g) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(g)(v);
        };
    });
};
var eqJoker = function (dictEq) {
    return dictEq;
};
var bifunctorJoker = function (dictFunctor) {
    return new Data_Bifunctor.Bifunctor(function (v) {
        return function (g) {
            return function (v1) {
                return Data_Functor.map(dictFunctor)(g)(v1);
            };
        };
    });
};
var biapplyJoker = function (dictApply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorJoker(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return Control_Apply.apply(dictApply)(v)(v1);
        };
    });
};
var biapplicativeJoker = function (dictApplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyJoker(dictApplicative.Apply0());
    }, function (v) {
        return function (b) {
            return Control_Applicative.pure(dictApplicative)(b);
        };
    });
};
module.exports = {
    Joker: Joker,
    newtypeJoker: newtypeJoker,
    eqJoker: eqJoker,
    ordJoker: ordJoker,
    showJoker: showJoker,
    functorJoker: functorJoker,
    bifunctorJoker: bifunctorJoker,
    biapplyJoker: biapplyJoker,
    biapplicativeJoker: biapplicativeJoker
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Data.Bifunctor/index.js":43,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Show/index.js":109}],41:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Product = (function () {
    function Product(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Product.create = function (value0) {
        return function (value1) {
            return new Product(value0, value1);
        };
    };
    return Product;
})();
var showProduct = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            return "(Product " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
        });
    };
};
var eqProduct = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
            };
        });
    };
};
var ordProduct = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqProduct(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
            };
        });
    };
};
var bifunctorProduct = function (dictBifunctor) {
    return function (dictBifunctor1) {
        return new Data_Bifunctor.Bifunctor(function (f) {
            return function (g) {
                return function (v) {
                    return new Product(Data_Bifunctor.bimap(dictBifunctor)(f)(g)(v.value0), Data_Bifunctor.bimap(dictBifunctor1)(f)(g)(v.value1));
                };
            };
        });
    };
};
var biapplyProduct = function (dictBiapply) {
    return function (dictBiapply1) {
        return new Control_Biapply.Biapply(function () {
            return bifunctorProduct(dictBiapply.Bifunctor0())(dictBiapply1.Bifunctor0());
        }, function (v) {
            return function (v1) {
                return new Product(Control_Biapply.biapply(dictBiapply)(v.value0)(v1.value0), Control_Biapply.biapply(dictBiapply1)(v.value1)(v1.value1));
            };
        });
    };
};
var biapplicativeProduct = function (dictBiapplicative) {
    return function (dictBiapplicative1) {
        return new Control_Biapplicative.Biapplicative(function () {
            return biapplyProduct(dictBiapplicative.Biapply0())(dictBiapplicative1.Biapply0());
        }, function (a) {
            return function (b) {
                return new Product(Control_Biapplicative.bipure(dictBiapplicative)(a)(b), Control_Biapplicative.bipure(dictBiapplicative1)(a)(b));
            };
        });
    };
};
module.exports = {
    Product: Product,
    eqProduct: eqProduct,
    ordProduct: ordProduct,
    showProduct: showProduct,
    bifunctorProduct: bifunctorProduct,
    biapplyProduct: biapplyProduct,
    biapplicativeProduct: biapplicativeProduct
};

},{"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Data.Bifunctor/index.js":43,"../Data.Eq/index.js":55,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Show/index.js":109}],42:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Wrap = function (x) {
    return x;
};
var showWrap = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Wrap " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var ordWrap = function (dictOrd) {
    return dictOrd;
};
var newtypeWrap = new Data_Newtype.Newtype(function (n) {
    return n;
}, Wrap);
var functorWrap = function (dictBifunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Bifunctor.rmap(dictBifunctor)(f)(v);
        };
    });
};
var eqWrap = function (dictEq) {
    return dictEq;
};
var bifunctorWrap = function (dictBifunctor) {
    return new Data_Bifunctor.Bifunctor(function (f) {
        return function (g) {
            return function (v) {
                return Data_Bifunctor.bimap(dictBifunctor)(f)(g)(v);
            };
        };
    });
};
var biapplyWrap = function (dictBiapply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorWrap(dictBiapply.Bifunctor0());
    }, function (v) {
        return function (v1) {
            return Control_Biapply.biapply(dictBiapply)(v)(v1);
        };
    });
};
var biapplicativeWrap = function (dictBiapplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyWrap(dictBiapplicative.Biapply0());
    }, function (a) {
        return function (b) {
            return Control_Biapplicative.bipure(dictBiapplicative)(a)(b);
        };
    });
};
module.exports = {
    Wrap: Wrap,
    newtypeWrap: newtypeWrap,
    eqWrap: eqWrap,
    ordWrap: ordWrap,
    showWrap: showWrap,
    functorWrap: functorWrap,
    bifunctorWrap: bifunctorWrap,
    biapplyWrap: biapplyWrap,
    biapplicativeWrap: biapplicativeWrap
};

},{"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Data.Bifunctor/index.js":43,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Show/index.js":109}],43:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Bifunctor = function (bimap) {
    this.bimap = bimap;
};
var bimap = function (dict) {
    return dict.bimap;
};
var lmap = function (dictBifunctor) {
    return function (f) {
        return bimap(dictBifunctor)(f)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var rmap = function (dictBifunctor) {
    return bimap(dictBifunctor)(Control_Category.identity(Control_Category.categoryFn));
};
module.exports = {
    bimap: bimap,
    Bifunctor: Bifunctor,
    lmap: lmap,
    rmap: rmap
};

},{"../Control.Category/index.js":12}],44:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Bifoldable = require("../Data.Bifoldable/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Bifunctor_Clown = require("../Data.Bifunctor.Clown/index.js");
var Data_Bifunctor_Flip = require("../Data.Bifunctor.Flip/index.js");
var Data_Bifunctor_Joker = require("../Data.Bifunctor.Joker/index.js");
var Data_Bifunctor_Product = require("../Data.Bifunctor.Product/index.js");
var Data_Bifunctor_Wrap = require("../Data.Bifunctor.Wrap/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Bitraversable = function (Bifoldable1, Bifunctor0, bisequence, bitraverse) {
    this.Bifoldable1 = Bifoldable1;
    this.Bifunctor0 = Bifunctor0;
    this.bisequence = bisequence;
    this.bitraverse = bitraverse;
};
var bitraverse = function (dict) {
    return dict.bitraverse;
};
var lfor = function (dictBitraversable) {
    return function (dictApplicative) {
        return function (t) {
            return function (f) {
                return bitraverse(dictBitraversable)(dictApplicative)(f)(Control_Applicative.pure(dictApplicative))(t);
            };
        };
    };
};
var ltraverse = function (dictBitraversable) {
    return function (dictApplicative) {
        return function (f) {
            return bitraverse(dictBitraversable)(dictApplicative)(f)(Control_Applicative.pure(dictApplicative));
        };
    };
};
var rfor = function (dictBitraversable) {
    return function (dictApplicative) {
        return function (t) {
            return function (f) {
                return bitraverse(dictBitraversable)(dictApplicative)(Control_Applicative.pure(dictApplicative))(f)(t);
            };
        };
    };
};
var rtraverse = function (dictBitraversable) {
    return function (dictApplicative) {
        return bitraverse(dictBitraversable)(dictApplicative)(Control_Applicative.pure(dictApplicative));
    };
};
var bitraversableJoker = function (dictTraversable) {
    return new Bitraversable(function () {
        return Data_Bifoldable.bifoldableJoker(dictTraversable.Foldable1());
    }, function () {
        return Data_Bifunctor_Joker.bifunctorJoker(dictTraversable.Functor0());
    }, function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Joker.Joker)(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v));
        };
    }, function (dictApplicative) {
        return function (v) {
            return function (r) {
                return function (v1) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Joker.Joker)(Data_Traversable.traverse(dictTraversable)(dictApplicative)(r)(v1));
                };
            };
        };
    });
};
var bitraversableClown = function (dictTraversable) {
    return new Bitraversable(function () {
        return Data_Bifoldable.bifoldableClown(dictTraversable.Foldable1());
    }, function () {
        return Data_Bifunctor_Clown.bifunctorClown(dictTraversable.Functor0());
    }, function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Clown.Clown)(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v));
        };
    }, function (dictApplicative) {
        return function (l) {
            return function (v) {
                return function (v1) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Clown.Clown)(Data_Traversable.traverse(dictTraversable)(dictApplicative)(l)(v1));
                };
            };
        };
    });
};
var bisequenceDefault = function (dictBitraversable) {
    return function (dictApplicative) {
        return bitraverse(dictBitraversable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
    };
};
var bisequence = function (dict) {
    return dict.bisequence;
};
var bitraversableFlip = function (dictBitraversable) {
    return new Bitraversable(function () {
        return Data_Bifoldable.bifoldableFlip(dictBitraversable.Bifoldable1());
    }, function () {
        return Data_Bifunctor_Flip.bifunctorFlip(dictBitraversable.Bifunctor0());
    }, function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Flip.Flip)(bisequence(dictBitraversable)(dictApplicative)(v));
        };
    }, function (dictApplicative) {
        return function (r) {
            return function (l) {
                return function (v) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Flip.Flip)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v));
                };
            };
        };
    });
};
var bitraversableProduct = function (dictBitraversable) {
    return function (dictBitraversable1) {
        return new Bitraversable(function () {
            return Data_Bifoldable.bifoldableProduct(dictBitraversable.Bifoldable1())(dictBitraversable1.Bifoldable1());
        }, function () {
            return Data_Bifunctor_Product.bifunctorProduct(dictBitraversable.Bifunctor0())(dictBitraversable1.Bifunctor0());
        }, function (dictApplicative) {
            return function (v) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Product.Product.create)(bisequence(dictBitraversable)(dictApplicative)(v.value0)))(bisequence(dictBitraversable1)(dictApplicative)(v.value1));
            };
        }, function (dictApplicative) {
            return function (l) {
                return function (r) {
                    return function (v) {
                        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Product.Product.create)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v.value0)))(bitraverse(dictBitraversable1)(dictApplicative)(l)(r)(v.value1));
                    };
                };
            };
        });
    };
};
var bitraversableWrap = function (dictBitraversable) {
    return new Bitraversable(function () {
        return Data_Bifoldable.bifoldableWrap(dictBitraversable.Bifoldable1());
    }, function () {
        return Data_Bifunctor_Wrap.bifunctorWrap(dictBitraversable.Bifunctor0());
    }, function (dictApplicative) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Wrap.Wrap)(bisequence(dictBitraversable)(dictApplicative)(v));
        };
    }, function (dictApplicative) {
        return function (l) {
            return function (r) {
                return function (v) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Bifunctor_Wrap.Wrap)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v));
                };
            };
        };
    });
};
var bitraverseDefault = function (dictBitraversable) {
    return function (dictApplicative) {
        return function (f) {
            return function (g) {
                return function (t) {
                    return bisequence(dictBitraversable)(dictApplicative)(Data_Bifunctor.bimap(dictBitraversable.Bifunctor0())(f)(g)(t));
                };
            };
        };
    };
};
var bifor = function (dictBitraversable) {
    return function (dictApplicative) {
        return function (t) {
            return function (f) {
                return function (g) {
                    return bitraverse(dictBitraversable)(dictApplicative)(f)(g)(t);
                };
            };
        };
    };
};
module.exports = {
    Bitraversable: Bitraversable,
    bitraverse: bitraverse,
    bisequence: bisequence,
    bitraverseDefault: bitraverseDefault,
    bisequenceDefault: bisequenceDefault,
    ltraverse: ltraverse,
    rtraverse: rtraverse,
    bifor: bifor,
    lfor: lfor,
    rfor: rfor,
    bitraversableClown: bitraversableClown,
    bitraversableJoker: bitraversableJoker,
    bitraversableFlip: bitraversableFlip,
    bitraversableProduct: bitraversableProduct,
    bitraversableWrap: bitraversableWrap
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Bifoldable/index.js":37,"../Data.Bifunctor.Clown/index.js":38,"../Data.Bifunctor.Flip/index.js":39,"../Data.Bifunctor.Joker/index.js":40,"../Data.Bifunctor.Product/index.js":41,"../Data.Bifunctor.Wrap/index.js":42,"../Data.Bifunctor/index.js":43,"../Data.Functor/index.js":64,"../Data.Traversable/index.js":125}],45:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var otherwise = true;
module.exports = {
    otherwise: otherwise
};

},{}],46:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var BooleanAlgebraRecord = function (HeytingAlgebraRecord0) {
    this.HeytingAlgebraRecord0 = HeytingAlgebraRecord0;
};
var BooleanAlgebra = function (HeytingAlgebra0) {
    this.HeytingAlgebra0 = HeytingAlgebra0;
};
var booleanAlgebraUnit = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraUnit;
});
var booleanAlgebraRecordNil = new BooleanAlgebraRecord(function () {
    return Data_HeytingAlgebra.heytingAlgebraRecordNil;
});
var booleanAlgebraRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictBooleanAlgebraRecord) {
            return function (dictBooleanAlgebra) {
                return new BooleanAlgebraRecord(function () {
                    return Data_HeytingAlgebra.heytingAlgebraRecordCons(dictIsSymbol)(dictCons)(dictBooleanAlgebraRecord.HeytingAlgebraRecord0())(dictBooleanAlgebra.HeytingAlgebra0());
                });
            };
        };
    };
};
var booleanAlgebraRecord = function (dictRowToList) {
    return function (dictBooleanAlgebraRecord) {
        return new BooleanAlgebra(function () {
            return Data_HeytingAlgebra.heytingAlgebraRecord(dictRowToList)(dictBooleanAlgebraRecord.HeytingAlgebraRecord0());
        });
    };
};
var booleanAlgebraFn = function (dictBooleanAlgebra) {
    return new BooleanAlgebra(function () {
        return Data_HeytingAlgebra.heytingAlgebraFunction(dictBooleanAlgebra.HeytingAlgebra0());
    });
};
var booleanAlgebraBoolean = new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraBoolean;
});
module.exports = {
    BooleanAlgebra: BooleanAlgebra,
    BooleanAlgebraRecord: BooleanAlgebraRecord,
    booleanAlgebraBoolean: booleanAlgebraBoolean,
    booleanAlgebraUnit: booleanAlgebraUnit,
    booleanAlgebraFn: booleanAlgebraFn,
    booleanAlgebraRecord: booleanAlgebraRecord,
    booleanAlgebraRecordNil: booleanAlgebraRecordNil,
    booleanAlgebraRecordCons: booleanAlgebraRecordCons
};

},{"../Data.HeytingAlgebra/index.js":68}],47:[function(require,module,exports){
"use strict";

exports.topInt = 2147483647;
exports.bottomInt = -2147483648;

exports.topChar = String.fromCharCode(65535);
exports.bottomChar = String.fromCharCode(0);

exports.topNumber = Number.POSITIVE_INFINITY;
exports.bottomNumber = Number.NEGATIVE_INFINITY;

},{}],48:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Bounded = function (Ord0, bottom, top) {
    this.Ord0 = Ord0;
    this.bottom = bottom;
    this.top = top;
};
var top = function (dict) {
    return dict.top;
};
var boundedUnit = new Bounded(function () {
    return Data_Ord.ordUnit;
}, Data_Unit.unit, Data_Unit.unit);
var boundedOrdering = new Bounded(function () {
    return Data_Ord.ordOrdering;
}, Data_Ordering.LT.value, Data_Ordering.GT.value);
var boundedNumber = new Bounded(function () {
    return Data_Ord.ordNumber;
}, $foreign.bottomNumber, $foreign.topNumber);
var boundedInt = new Bounded(function () {
    return Data_Ord.ordInt;
}, $foreign.bottomInt, $foreign.topInt);
var boundedChar = new Bounded(function () {
    return Data_Ord.ordChar;
}, $foreign.bottomChar, $foreign.topChar);
var boundedBoolean = new Bounded(function () {
    return Data_Ord.ordBoolean;
}, false, true);
var bottom = function (dict) {
    return dict.bottom;
};
module.exports = {
    Bounded: Bounded,
    bottom: bottom,
    top: top,
    boundedBoolean: boundedBoolean,
    boundedInt: boundedInt,
    boundedChar: boundedChar,
    boundedOrdering: boundedOrdering,
    boundedUnit: boundedUnit,
    boundedNumber: boundedNumber
};

},{"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Unit/index.js":133,"./foreign.js":47}],49:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Ring = require("../Data.Ring/index.js");
var CommutativeRingRecord = function (RingRecord0) {
    this.RingRecord0 = RingRecord0;
};
var CommutativeRing = function (Ring0) {
    this.Ring0 = Ring0;
};
var commutativeRingUnit = new CommutativeRing(function () {
    return Data_Ring.ringUnit;
});
var commutativeRingRecordNil = new CommutativeRingRecord(function () {
    return Data_Ring.ringRecordNil;
});
var commutativeRingRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictCommutativeRingRecord) {
            return function (dictCommutativeRing) {
                return new CommutativeRingRecord(function () {
                    return Data_Ring.ringRecordCons(dictIsSymbol)(dictCons)(dictCommutativeRingRecord.RingRecord0())(dictCommutativeRing.Ring0());
                });
            };
        };
    };
};
var commutativeRingRecord = function (dictRowToList) {
    return function (dictCommutativeRingRecord) {
        return new CommutativeRing(function () {
            return Data_Ring.ringRecord(dictRowToList)(dictCommutativeRingRecord.RingRecord0());
        });
    };
};
var commutativeRingNumber = new CommutativeRing(function () {
    return Data_Ring.ringNumber;
});
var commutativeRingInt = new CommutativeRing(function () {
    return Data_Ring.ringInt;
});
var commutativeRingFn = function (dictCommutativeRing) {
    return new CommutativeRing(function () {
        return Data_Ring.ringFn(dictCommutativeRing.Ring0());
    });
};
module.exports = {
    CommutativeRing: CommutativeRing,
    CommutativeRingRecord: CommutativeRingRecord,
    commutativeRingInt: commutativeRingInt,
    commutativeRingNumber: commutativeRingNumber,
    commutativeRingUnit: commutativeRingUnit,
    commutativeRingFn: commutativeRingFn,
    commutativeRingRecord: commutativeRingRecord,
    commutativeRingRecordNil: commutativeRingRecordNil,
    commutativeRingRecordCons: commutativeRingRecordCons
};

},{"../Data.Ring/index.js":99}],50:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Distributive = function (Functor0, collect, distribute) {
    this.Functor0 = Functor0;
    this.collect = collect;
    this.distribute = distribute;
};
var distributiveIdentity = new Distributive(function () {
    return Data_Identity.functorIdentity;
}, function (dictFunctor) {
    return function (f) {
        return function ($11) {
            return Data_Identity.Identity(Data_Functor.map(dictFunctor)(function ($12) {
                return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(f($12));
            })($11));
        };
    };
}, function (dictFunctor) {
    return function ($13) {
        return Data_Identity.Identity(Data_Functor.map(dictFunctor)(Data_Newtype.unwrap(Data_Identity.newtypeIdentity))($13));
    };
});
var distribute = function (dict) {
    return dict.distribute;
};
var distributiveFunction = new Distributive(function () {
    return Data_Functor.functorFn;
}, function (dictFunctor) {
    return function (f) {
        return function ($14) {
            return distribute(distributiveFunction)(dictFunctor)(Data_Functor.map(dictFunctor)(f)($14));
        };
    };
}, function (dictFunctor) {
    return function (a) {
        return function (e) {
            return Data_Functor.map(dictFunctor)(function (v) {
                return v(e);
            })(a);
        };
    };
});
var cotraverse = function (dictDistributive) {
    return function (dictFunctor) {
        return function (f) {
            return function ($15) {
                return Data_Functor.map(dictDistributive.Functor0())(f)(distribute(dictDistributive)(dictFunctor)($15));
            };
        };
    };
};
var collectDefault = function (dictDistributive) {
    return function (dictFunctor) {
        return function (f) {
            return function ($16) {
                return distribute(dictDistributive)(dictFunctor)(Data_Functor.map(dictFunctor)(f)($16));
            };
        };
    };
};
var collect = function (dict) {
    return dict.collect;
};
var distributeDefault = function (dictDistributive) {
    return function (dictFunctor) {
        return collect(dictDistributive)(dictFunctor)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    collect: collect,
    distribute: distribute,
    Distributive: Distributive,
    distributeDefault: distributeDefault,
    collectDefault: collectDefault,
    cotraverse: cotraverse,
    distributiveIdentity: distributiveIdentity,
    distributiveFunction: distributiveFunction
};

},{"../Control.Category/index.js":12,"../Data.Functor/index.js":64,"../Data.Identity/index.js":69,"../Data.Newtype/index.js":87}],51:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Bifoldable = require("../Data.Bifoldable/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Bitraversable = require("../Data.Bitraversable/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Left = (function () {
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    return Left;
})();
var Right = (function () {
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    return Right;
})();
var showEither = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            if (v instanceof Left) {
                return "(Left " + (Data_Show.show(dictShow)(v.value0) + ")");
            };
            if (v instanceof Right) {
                return "(Right " + (Data_Show.show(dictShow1)(v.value0) + ")");
            };
            throw new Error("Failed pattern match at Data.Either (line 163, column 1 - line 163, column 61): " + [ v.constructor.name ]);
        });
    };
};
var note$prime = function (f) {
    return Data_Maybe["maybe'"](function ($198) {
        return Left.create(f($198));
    })(Right.create);
};
var note = function (a) {
    return Data_Maybe.maybe(new Left(a))(Right.create);
};
var functorEither = new Data_Functor.Functor(function (f) {
    return function (m) {
        if (m instanceof Left) {
            return new Left(m.value0);
        };
        if (m instanceof Right) {
            return new Right(f(m.value0));
        };
        throw new Error("Failed pattern match at Data.Either (line 38, column 8 - line 38, column 52): " + [ m.constructor.name ]);
    };
});
var functorWithIndexEither = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorEither;
}, function (f) {
    return Data_Functor.map(functorEither)(f(Data_Unit.unit));
});
var invariantEither = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorEither));
var fromRight = function (dictPartial) {
    return function (v) {
        if (v instanceof Right) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.Either (line 261, column 1 - line 261, column 52): " + [ v.constructor.name ]);
    };
};
var fromLeft = function (dictPartial) {
    return function (v) {
        if (v instanceof Left) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.Either (line 256, column 1 - line 256, column 51): " + [ v.constructor.name ]);
    };
};
var foldableEither = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            if (v instanceof Left) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v instanceof Right) {
                return f(v.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 187, column 1 - line 187, column 47): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Left) {
                return z;
            };
            if (v1 instanceof Right) {
                return v(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 187, column 1 - line 187, column 47): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Left) {
                return z;
            };
            if (v1 instanceof Right) {
                return v(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.Either (line 187, column 1 - line 187, column 47): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var foldableWithIndexEither = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableEither;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            if (v instanceof Left) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v instanceof Right) {
                return f(Data_Unit.unit)(v.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 195, column 1 - line 195, column 70): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Left) {
                return z;
            };
            if (v1 instanceof Right) {
                return v(Data_Unit.unit)(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 195, column 1 - line 195, column 70): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Left) {
                return z;
            };
            if (v1 instanceof Right) {
                return v(Data_Unit.unit)(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.Either (line 195, column 1 - line 195, column 70): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var traversableEither = new Data_Traversable.Traversable(function () {
    return foldableEither;
}, function () {
    return functorEither;
}, function (dictApplicative) {
    return function (v) {
        if (v instanceof Left) {
            return Control_Applicative.pure(dictApplicative)(new Left(v.value0));
        };
        if (v instanceof Right) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Right.create)(v.value0);
        };
        throw new Error("Failed pattern match at Data.Either (line 211, column 1 - line 211, column 53): " + [ v.constructor.name ]);
    };
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Left) {
                return Control_Applicative.pure(dictApplicative)(new Left(v1.value0));
            };
            if (v1 instanceof Right) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Right.create)(v(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Either (line 211, column 1 - line 211, column 53): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
});
var traversableWithIndexEither = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexEither;
}, function () {
    return functorWithIndexEither;
}, function () {
    return traversableEither;
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Left) {
                return Control_Applicative.pure(dictApplicative)(new Left(v1.value0));
            };
            if (v1 instanceof Right) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Right.create)(v(Data_Unit.unit)(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Either (line 217, column 1 - line 217, column 76): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
});
var extendEither = new Control_Extend.Extend(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Left) {
            return new Left(v1.value0);
        };
        return new Right(v(v1));
    };
});
var eqEither = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                if (x instanceof Left && y instanceof Left) {
                    return Data_Eq.eq(dictEq)(x.value0)(y.value0);
                };
                if (x instanceof Right && y instanceof Right) {
                    return Data_Eq.eq(dictEq1)(x.value0)(y.value0);
                };
                return false;
            };
        });
    };
};
var ordEither = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqEither(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                if (x instanceof Left && y instanceof Left) {
                    return Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                };
                if (x instanceof Left) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof Left) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof Right && y instanceof Right) {
                    return Data_Ord.compare(dictOrd1)(x.value0)(y.value0);
                };
                throw new Error("Failed pattern match at Data.Either (line 179, column 8 - line 179, column 64): " + [ x.constructor.name, y.constructor.name ]);
            };
        });
    };
};
var eq1Either = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqEither(dictEq)(dictEq1));
    });
};
var ord1Either = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Either(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordEither(dictOrd)(dictOrd1));
    });
};
var either = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Left) {
                return v(v2.value0);
            };
            if (v2 instanceof Right) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var hush = either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create);
var isLeft = either(Data_Function["const"](true))(Data_Function["const"](false));
var isRight = either(Data_Function["const"](false))(Data_Function["const"](true));
var choose = function (dictAlt) {
    return function (a) {
        return function (b) {
            return Control_Alt.alt(dictAlt)(Data_Functor.map(dictAlt.Functor0())(Left.create)(a))(Data_Functor.map(dictAlt.Functor0())(Right.create)(b));
        };
    };
};
var boundedEither = function (dictBounded) {
    return function (dictBounded1) {
        return new Data_Bounded.Bounded(function () {
            return ordEither(dictBounded.Ord0())(dictBounded1.Ord0());
        }, new Left(Data_Bounded.bottom(dictBounded)), new Right(Data_Bounded.top(dictBounded1)));
    };
};
var bifunctorEither = new Data_Bifunctor.Bifunctor(function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Left) {
                return new Left(v(v2.value0));
            };
            if (v2 instanceof Right) {
                return new Right(v1(v2.value0));
            };
            throw new Error("Failed pattern match at Data.Either (line 46, column 1 - line 46, column 45): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
});
var bifoldableEither = new Data_Bifoldable.Bifoldable(function (dictMonoid) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Left) {
                    return v(v2.value0);
                };
                if (v2 instanceof Right) {
                    return v1(v2.value0);
                };
                throw new Error("Failed pattern match at Data.Either (line 203, column 1 - line 203, column 47): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
            };
        };
    };
}, function (v) {
    return function (v1) {
        return function (z) {
            return function (v2) {
                if (v2 instanceof Left) {
                    return v(z)(v2.value0);
                };
                if (v2 instanceof Right) {
                    return v1(z)(v2.value0);
                };
                throw new Error("Failed pattern match at Data.Either (line 203, column 1 - line 203, column 47): " + [ v.constructor.name, v1.constructor.name, z.constructor.name, v2.constructor.name ]);
            };
        };
    };
}, function (v) {
    return function (v1) {
        return function (z) {
            return function (v2) {
                if (v2 instanceof Left) {
                    return v(v2.value0)(z);
                };
                if (v2 instanceof Right) {
                    return v1(v2.value0)(z);
                };
                throw new Error("Failed pattern match at Data.Either (line 203, column 1 - line 203, column 47): " + [ v.constructor.name, v1.constructor.name, z.constructor.name, v2.constructor.name ]);
            };
        };
    };
});
var bitraversableEither = new Data_Bitraversable.Bitraversable(function () {
    return bifoldableEither;
}, function () {
    return bifunctorEither;
}, function (dictApplicative) {
    return function (v) {
        if (v instanceof Left) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Left.create)(v.value0);
        };
        if (v instanceof Right) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Right.create)(v.value0);
        };
        throw new Error("Failed pattern match at Data.Either (line 221, column 1 - line 221, column 53): " + [ v.constructor.name ]);
    };
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Left) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Left.create)(v(v2.value0));
                };
                if (v2 instanceof Right) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Right.create)(v1(v2.value0));
                };
                throw new Error("Failed pattern match at Data.Either (line 221, column 1 - line 221, column 53): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
            };
        };
    };
});
var applyEither = new Control_Apply.Apply(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Left) {
            return new Left(v.value0);
        };
        if (v instanceof Right) {
            return Data_Functor.map(functorEither)(v.value0)(v1);
        };
        throw new Error("Failed pattern match at Data.Either (line 82, column 1 - line 82, column 41): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindEither = new Control_Bind.Bind(function () {
    return applyEither;
}, either(function (e) {
    return function (v) {
        return new Left(e);
    };
})(function (a) {
    return function (f) {
        return f(a);
    };
}));
var semigroupEither = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (x) {
        return function (y) {
            return Control_Apply.apply(applyEither)(Data_Functor.map(functorEither)(Data_Semigroup.append(dictSemigroup))(x))(y);
        };
    });
};
var applicativeEither = new Control_Applicative.Applicative(function () {
    return applyEither;
}, Right.create);
var monadEither = new Control_Monad.Monad(function () {
    return applicativeEither;
}, function () {
    return bindEither;
});
var altEither = new Control_Alt.Alt(function () {
    return functorEither;
}, function (v) {
    return function (v1) {
        if (v instanceof Left) {
            return v1;
        };
        return v;
    };
});
module.exports = {
    Left: Left,
    Right: Right,
    either: either,
    choose: choose,
    isLeft: isLeft,
    isRight: isRight,
    fromLeft: fromLeft,
    fromRight: fromRight,
    note: note,
    "note'": note$prime,
    hush: hush,
    functorEither: functorEither,
    functorWithIndexEither: functorWithIndexEither,
    invariantEither: invariantEither,
    bifunctorEither: bifunctorEither,
    applyEither: applyEither,
    applicativeEither: applicativeEither,
    altEither: altEither,
    bindEither: bindEither,
    monadEither: monadEither,
    extendEither: extendEither,
    showEither: showEither,
    eqEither: eqEither,
    eq1Either: eq1Either,
    ordEither: ordEither,
    ord1Either: ord1Either,
    boundedEither: boundedEither,
    foldableEither: foldableEither,
    foldableWithIndexEither: foldableWithIndexEither,
    bifoldableEither: bifoldableEither,
    traversableEither: traversableEither,
    traversableWithIndexEither: traversableWithIndexEither,
    bitraversableEither: bitraversableEither,
    semigroupEither: semigroupEither
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Extend/index.js":15,"../Control.Monad/index.js":27,"../Data.Bifoldable/index.js":37,"../Data.Bifunctor/index.js":43,"../Data.Bitraversable/index.js":44,"../Data.Bounded/index.js":48,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.Functor.Invariant/index.js":62,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Unit/index.js":133}],52:[function(require,module,exports){
"use strict";

exports.toCharCode = function (c) {
  return c.charCodeAt(0);
};

exports.fromCharCode = function (c) {
  return String.fromCharCode(c);
};

},{}],53:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Cardinality = function (x) {
    return x;
};
var Enum = function (Ord0, pred, succ) {
    this.Ord0 = Ord0;
    this.pred = pred;
    this.succ = succ;
};
var BoundedEnum = function (Bounded0, Enum1, cardinality, fromEnum, toEnum) {
    this.Bounded0 = Bounded0;
    this.Enum1 = Enum1;
    this.cardinality = cardinality;
    this.fromEnum = fromEnum;
    this.toEnum = toEnum;
};
var toEnum = function (dict) {
    return dict.toEnum;
};
var succ = function (dict) {
    return dict.succ;
};
var upFromIncluding = function (dictEnum) {
    return function (dictUnfoldable1) {
        return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(Control_Apply.apply(Control_Apply.applyFn)(Data_Tuple.Tuple.create)(succ(dictEnum)));
    };
};
var showCardinality = new Data_Show.Show(function (v) {
    return "(Cardinality " + (Data_Show.show(Data_Show.showInt)(v) + ")");
});
var pred = function (dict) {
    return dict.pred;
};
var ordCardinality = Data_Ord.ordInt;
var newtypeCardinality = new Data_Newtype.Newtype(function (n) {
    return n;
}, Cardinality);
var fromEnum = function (dict) {
    return dict.fromEnum;
};
var toEnumWithDefaults = function (dictBoundedEnum) {
    return function (low) {
        return function (high) {
            return function (x) {
                var v = toEnum(dictBoundedEnum)(x);
                if (v instanceof Data_Maybe.Just) {
                    return v.value0;
                };
                if (v instanceof Data_Maybe.Nothing) {
                    var $54 = x < fromEnum(dictBoundedEnum)(Data_Bounded.bottom(dictBoundedEnum.Bounded0()));
                    if ($54) {
                        return low;
                    };
                    return high;
                };
                throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): " + [ v.constructor.name ]);
            };
        };
    };
};
var eqCardinality = Data_Eq.eqInt;
var enumUnit = new Enum(function () {
    return Data_Ord.ordUnit;
}, Data_Function["const"](Data_Maybe.Nothing.value), Data_Function["const"](Data_Maybe.Nothing.value));
var enumTuple = function (dictEnum) {
    return function (dictBoundedEnum) {
        return new Enum(function () {
            return Data_Tuple.ordTuple(dictEnum.Ord0())((dictBoundedEnum.Enum1()).Ord0());
        }, function (v) {
            return Data_Maybe.maybe(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Function.flip(Data_Tuple.Tuple.create)(Data_Bounded.top(dictBoundedEnum.Bounded0())))(pred(dictEnum)(v.value0)))(function ($96) {
                return Data_Maybe.Just.create(Data_Tuple.Tuple.create(v.value0)($96));
            })(pred(dictBoundedEnum.Enum1())(v.value1));
        }, function (v) {
            return Data_Maybe.maybe(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Function.flip(Data_Tuple.Tuple.create)(Data_Bounded.bottom(dictBoundedEnum.Bounded0())))(succ(dictEnum)(v.value0)))(function ($97) {
                return Data_Maybe.Just.create(Data_Tuple.Tuple.create(v.value0)($97));
            })(succ(dictBoundedEnum.Enum1())(v.value1));
        });
    };
};
var enumOrdering = new Enum(function () {
    return Data_Ord.ordOrdering;
}, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_Ordering.EQ) {
        return new Data_Maybe.Just(Data_Ordering.LT.value);
    };
    if (v instanceof Data_Ordering.GT) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    throw new Error("Failed pattern match at Data.Enum (line 72, column 1 - line 72, column 39): " + [ v.constructor.name ]);
}, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    if (v instanceof Data_Ordering.EQ) {
        return new Data_Maybe.Just(Data_Ordering.GT.value);
    };
    if (v instanceof Data_Ordering.GT) {
        return Data_Maybe.Nothing.value;
    };
    throw new Error("Failed pattern match at Data.Enum (line 72, column 1 - line 72, column 39): " + [ v.constructor.name ]);
});
var enumMaybe = function (dictBoundedEnum) {
    return new Enum(function () {
        return Data_Maybe.ordMaybe((dictBoundedEnum.Enum1()).Ord0());
    }, function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Maybe.Nothing.value;
        };
        if (v instanceof Data_Maybe.Just) {
            return new Data_Maybe.Just(pred(dictBoundedEnum.Enum1())(v.value0));
        };
        throw new Error("Failed pattern match at Data.Enum (line 80, column 1 - line 80, column 54): " + [ v.constructor.name ]);
    }, function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return new Data_Maybe.Just(new Data_Maybe.Just(Data_Bounded.bottom(dictBoundedEnum.Bounded0())));
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Maybe.Just.create)(succ(dictBoundedEnum.Enum1())(v.value0));
        };
        throw new Error("Failed pattern match at Data.Enum (line 80, column 1 - line 80, column 54): " + [ v.constructor.name ]);
    });
};
var enumInt = new Enum(function () {
    return Data_Ord.ordInt;
}, function (n) {
    var $67 = n > Data_Bounded.bottom(Data_Bounded.boundedInt);
    if ($67) {
        return new Data_Maybe.Just(n - 1 | 0);
    };
    return Data_Maybe.Nothing.value;
}, function (n) {
    var $68 = n < Data_Bounded.top(Data_Bounded.boundedInt);
    if ($68) {
        return new Data_Maybe.Just(n + 1 | 0);
    };
    return Data_Maybe.Nothing.value;
});
var enumFromTo = function (dictEnum) {
    return function (dictUnfoldable1) {
        var go = function (step) {
            return function (op) {
                return function (to) {
                    return function (a) {
                        return new Data_Tuple.Tuple(a, Control_Bind.bind(Data_Maybe.bindMaybe)(step(a))(function (a$prime) {
                            return Data_Functor.voidLeft(Data_Maybe.functorMaybe)(Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(op(a$prime)(to)))(a$prime);
                        }));
                    };
                };
            };
        };
        return function (v) {
            return function (v1) {
                if (Data_Eq.eq((dictEnum.Ord0()).Eq0())(v)(v1)) {
                    return Data_Unfoldable1.singleton(dictUnfoldable1)(v);
                };
                if (Data_Ord.lessThan(dictEnum.Ord0())(v)(v1)) {
                    return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(go(succ(dictEnum))(Data_Ord.lessThanOrEq(dictEnum.Ord0()))(v1))(v);
                };
                if (Data_Boolean.otherwise) {
                    return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(go(pred(dictEnum))(Data_Ord.greaterThanOrEq(dictEnum.Ord0()))(v1))(v);
                };
                throw new Error("Failed pattern match at Data.Enum (line 183, column 14 - line 187, column 51): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    };
};
var enumFromThenTo = function (dictUnfoldable) {
    return function (dictFunctor) {
        return function (dictBoundedEnum) {
            var go = function (step) {
                return function (to) {
                    return function (e) {
                        if (e <= to) {
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(e, e + step | 0));
                        };
                        if (Data_Boolean.otherwise) {
                            return Data_Maybe.Nothing.value;
                        };
                        throw new Error("Failed pattern match at Data.Enum (line 214, column 5 - line 216, column 28): " + [ step.constructor.name, to.constructor.name, e.constructor.name ]);
                    };
                };
            };
            return function (a) {
                return function (b) {
                    return function (c) {
                        var c$prime = fromEnum(dictBoundedEnum)(c);
                        var b$prime = fromEnum(dictBoundedEnum)(b);
                        var a$prime = fromEnum(dictBoundedEnum)(a);
                        return Data_Functor.map(dictFunctor)(function ($98) {
                            return Data_Maybe.fromJust()(toEnum(dictBoundedEnum)($98));
                        })(Data_Unfoldable.unfoldr(dictUnfoldable)(go(b$prime - a$prime | 0)(c$prime))(a$prime));
                    };
                };
            };
        };
    };
};
var enumEither = function (dictBoundedEnum) {
    return function (dictBoundedEnum1) {
        return new Enum(function () {
            return Data_Either.ordEither((dictBoundedEnum.Enum1()).Ord0())((dictBoundedEnum1.Enum1()).Ord0());
        }, function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function ($99) {
                    return Data_Maybe.Just.create(Data_Either.Left.create($99));
                })(pred(dictBoundedEnum.Enum1())(v.value0));
            };
            if (v instanceof Data_Either.Right) {
                return Data_Maybe.maybe(new Data_Maybe.Just(new Data_Either.Left(Data_Bounded.top(dictBoundedEnum.Bounded0()))))(function ($100) {
                    return Data_Maybe.Just.create(Data_Either.Right.create($100));
                })(pred(dictBoundedEnum1.Enum1())(v.value0));
            };
            throw new Error("Failed pattern match at Data.Enum (line 86, column 1 - line 86, column 75): " + [ v.constructor.name ]);
        }, function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Maybe.maybe(new Data_Maybe.Just(new Data_Either.Right(Data_Bounded.bottom(dictBoundedEnum1.Bounded0()))))(function ($101) {
                    return Data_Maybe.Just.create(Data_Either.Left.create($101));
                })(succ(dictBoundedEnum.Enum1())(v.value0));
            };
            if (v instanceof Data_Either.Right) {
                return Data_Maybe.maybe(Data_Maybe.Nothing.value)(function ($102) {
                    return Data_Maybe.Just.create(Data_Either.Right.create($102));
                })(succ(dictBoundedEnum1.Enum1())(v.value0));
            };
            throw new Error("Failed pattern match at Data.Enum (line 86, column 1 - line 86, column 75): " + [ v.constructor.name ]);
        });
    };
};
var enumBoolean = new Enum(function () {
    return Data_Ord.ordBoolean;
}, function (v) {
    if (v) {
        return new Data_Maybe.Just(false);
    };
    return Data_Maybe.Nothing.value;
}, function (v) {
    if (!v) {
        return new Data_Maybe.Just(true);
    };
    return Data_Maybe.Nothing.value;
});
var downFromIncluding = function (dictEnum) {
    return function (dictUnfoldable1) {
        return Data_Unfoldable1.unfoldr1(dictUnfoldable1)(Control_Apply.apply(Control_Apply.applyFn)(Data_Tuple.Tuple.create)(pred(dictEnum)));
    };
};
var diag = function (a) {
    return new Data_Tuple.Tuple(a, a);
};
var downFrom = function (dictEnum) {
    return function (dictUnfoldable) {
        return Data_Unfoldable.unfoldr(dictUnfoldable)(function ($103) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(diag)(pred(dictEnum)($103));
        });
    };
};
var upFrom = function (dictEnum) {
    return function (dictUnfoldable) {
        return Data_Unfoldable.unfoldr(dictUnfoldable)(function ($104) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(diag)(succ(dictEnum)($104));
        });
    };
};
var defaultToEnum = function (dictBounded) {
    return function (dictEnum) {
        return function (i$prime) {
            var go = function ($copy_i) {
                return function ($copy_x) {
                    var $tco_var_i = $copy_i;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(i, x) {
                        var $82 = i === 0;
                        if ($82) {
                            $tco_done = true;
                            return new Data_Maybe.Just(x);
                        };
                        var v = succ(dictEnum)(x);
                        if (v instanceof Data_Maybe.Just) {
                            $tco_var_i = i - 1 | 0;
                            $copy_x = v.value0;
                            return;
                        };
                        if (v instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return Data_Maybe.Nothing.value;
                        };
                        throw new Error("Failed pattern match at Data.Enum (line 293, column 12 - line 295, column 33): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_i, $copy_x);
                    };
                    return $tco_result;
                };
            };
            var $85 = i$prime < 0;
            if ($85) {
                return Data_Maybe.Nothing.value;
            };
            return go(i$prime)(Data_Bounded.bottom(dictBounded));
        };
    };
};
var defaultSucc = function (toEnum$prime) {
    return function (fromEnum$prime) {
        return function (a) {
            return toEnum$prime(fromEnum$prime(a) + 1 | 0);
        };
    };
};
var defaultPred = function (toEnum$prime) {
    return function (fromEnum$prime) {
        return function (a) {
            return toEnum$prime(fromEnum$prime(a) - 1 | 0);
        };
    };
};
var defaultFromEnum = function (dictEnum) {
    var go = function ($copy_i) {
        return function ($copy_x) {
            var $tco_var_i = $copy_i;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(i, x) {
                var v = pred(dictEnum)(x);
                if (v instanceof Data_Maybe.Just) {
                    $tco_var_i = i + 1 | 0;
                    $copy_x = v.value0;
                    return;
                };
                if (v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return i;
                };
                throw new Error("Failed pattern match at Data.Enum (line 306, column 5 - line 308, column 19): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_i, $copy_x);
            };
            return $tco_result;
        };
    };
    return go(0);
};
var defaultCardinality = function (dictBounded) {
    return function (dictEnum) {
        var go = function ($copy_i) {
            return function ($copy_x) {
                var $tco_var_i = $copy_i;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(i, x) {
                    var v = succ(dictEnum)(x);
                    if (v instanceof Data_Maybe.Just) {
                        $tco_var_i = i + 1 | 0;
                        $copy_x = v.value0;
                        return;
                    };
                    if (v instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return i;
                    };
                    throw new Error("Failed pattern match at Data.Enum (line 273, column 5 - line 275, column 19): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_i, $copy_x);
                };
                return $tco_result;
            };
        };
        return Cardinality(go(1)(Data_Bounded.bottom(dictBounded)));
    };
};
var charToEnum = function (v) {
    if (v >= Data_Bounded.bottom(Data_Bounded.boundedInt) && v <= Data_Bounded.top(Data_Bounded.boundedInt)) {
        return new Data_Maybe.Just($foreign.fromCharCode(v));
    };
    return Data_Maybe.Nothing.value;
};
var enumChar = new Enum(function () {
    return Data_Ord.ordChar;
}, defaultPred(charToEnum)($foreign.toCharCode), defaultSucc(charToEnum)($foreign.toCharCode));
var cardinality = function (dict) {
    return dict.cardinality;
};
var boundedEnumUnit = new BoundedEnum(function () {
    return Data_Bounded.boundedUnit;
}, function () {
    return enumUnit;
}, 1, Data_Function["const"](0), function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Data_Unit.unit);
    };
    return Data_Maybe.Nothing.value;
});
var boundedEnumOrdering = new BoundedEnum(function () {
    return Data_Bounded.boundedOrdering;
}, function () {
    return enumOrdering;
}, 3, function (v) {
    if (v instanceof Data_Ordering.LT) {
        return 0;
    };
    if (v instanceof Data_Ordering.EQ) {
        return 1;
    };
    if (v instanceof Data_Ordering.GT) {
        return 2;
    };
    throw new Error("Failed pattern match at Data.Enum (line 137, column 1 - line 137, column 53): " + [ v.constructor.name ]);
}, function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Data_Ordering.LT.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Data_Ordering.EQ.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Data_Ordering.GT.value);
    };
    return Data_Maybe.Nothing.value;
});
var boundedEnumChar = new BoundedEnum(function () {
    return Data_Bounded.boundedChar;
}, function () {
    return enumChar;
}, $foreign.toCharCode(Data_Bounded.top(Data_Bounded.boundedChar)) - $foreign.toCharCode(Data_Bounded.bottom(Data_Bounded.boundedChar)) | 0, $foreign.toCharCode, charToEnum);
var boundedEnumBoolean = new BoundedEnum(function () {
    return Data_Bounded.boundedBoolean;
}, function () {
    return enumBoolean;
}, 2, function (v) {
    if (!v) {
        return 0;
    };
    if (v) {
        return 1;
    };
    throw new Error("Failed pattern match at Data.Enum (line 118, column 1 - line 118, column 51): " + [ v.constructor.name ]);
}, function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(false);
    };
    if (v === 1) {
        return new Data_Maybe.Just(true);
    };
    return Data_Maybe.Nothing.value;
});
module.exports = {
    Enum: Enum,
    succ: succ,
    pred: pred,
    BoundedEnum: BoundedEnum,
    cardinality: cardinality,
    toEnum: toEnum,
    fromEnum: fromEnum,
    toEnumWithDefaults: toEnumWithDefaults,
    Cardinality: Cardinality,
    enumFromTo: enumFromTo,
    enumFromThenTo: enumFromThenTo,
    upFrom: upFrom,
    upFromIncluding: upFromIncluding,
    downFrom: downFrom,
    downFromIncluding: downFromIncluding,
    defaultSucc: defaultSucc,
    defaultPred: defaultPred,
    defaultCardinality: defaultCardinality,
    defaultToEnum: defaultToEnum,
    defaultFromEnum: defaultFromEnum,
    enumBoolean: enumBoolean,
    enumInt: enumInt,
    enumChar: enumChar,
    enumUnit: enumUnit,
    enumOrdering: enumOrdering,
    enumMaybe: enumMaybe,
    enumEither: enumEither,
    enumTuple: enumTuple,
    boundedEnumBoolean: boundedEnumBoolean,
    boundedEnumChar: boundedEnumChar,
    boundedEnumUnit: boundedEnumUnit,
    boundedEnumOrdering: boundedEnumOrdering,
    newtypeCardinality: newtypeCardinality,
    eqCardinality: eqCardinality,
    ordCardinality: ordCardinality,
    showCardinality: showCardinality
};

},{"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.MonadZero/index.js":29,"../Data.Boolean/index.js":45,"../Data.Bounded/index.js":48,"../Data.Either/index.js":51,"../Data.Eq/index.js":55,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Show/index.js":109,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"../Data.Unfoldable1/index.js":131,"../Data.Unit/index.js":133,"./foreign.js":52}],54:[function(require,module,exports){
"use strict";

exports.refEq = function (r1) {
  return function (r2) {
    return r1 === r2;
  };
};

exports.eqArrayImpl = function (f) {
  return function (xs) {
    return function (ys) {
      if (xs === ys) return true;
      if (xs.length !== ys.length) return false;
      for (var i = 0; i < xs.length; i++) {
        if (!f(xs[i])(ys[i])) return false;
      }
      return true;
    };
  };
};

},{}],55:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var EqRecord = function (eqRecord) {
    this.eqRecord = eqRecord;
};
var Eq1 = function (eq1) {
    this.eq1 = eq1;
};
var Eq = function (eq) {
    this.eq = eq;
};
var eqVoid = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqUnit = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqString = new Eq($foreign.refEq);
var eqRowNil = new EqRecord(function (v) {
    return function (v1) {
        return function (v2) {
            return true;
        };
    };
});
var eqRecord = function (dict) {
    return dict.eqRecord;
};
var eqRec = function (dictRowToList) {
    return function (dictEqRecord) {
        return new Eq(eqRecord(dictEqRecord)(Type_Data_RowList.RLProxy.value));
    };
};
var eqNumber = new Eq($foreign.refEq);
var eqInt = new Eq($foreign.refEq);
var eqChar = new Eq($foreign.refEq);
var eqBoolean = new Eq($foreign.refEq);
var eq1 = function (dict) {
    return dict.eq1;
};
var eq = function (dict) {
    return dict.eq;
};
var eqArray = function (dictEq) {
    return new Eq($foreign.eqArrayImpl(eq(dictEq)));
};
var eq1Array = new Eq1(function (dictEq) {
    return eq(eqArray(dictEq));
});
var eqRowCons = function (dictEqRecord) {
    return function (dictCons) {
        return function (dictIsSymbol) {
            return function (dictEq) {
                return new EqRecord(function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = eqRecord(dictEqRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var get = Record_Unsafe.unsafeGet(key);
                            return eq(dictEq)(get(ra))(get(rb)) && tail;
                        };
                    };
                });
            };
        };
    };
};
var notEq = function (dictEq) {
    return function (x) {
        return function (y) {
            return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
        };
    };
};
var notEq1 = function (dictEq1) {
    return function (dictEq) {
        return function (x) {
            return function (y) {
                return eq(eqBoolean)(eq1(dictEq1)(dictEq)(x)(y))(false);
            };
        };
    };
};
module.exports = {
    Eq: Eq,
    eq: eq,
    notEq: notEq,
    Eq1: Eq1,
    eq1: eq1,
    notEq1: notEq1,
    EqRecord: EqRecord,
    eqRecord: eqRecord,
    eqBoolean: eqBoolean,
    eqInt: eqInt,
    eqNumber: eqNumber,
    eqChar: eqChar,
    eqString: eqString,
    eqUnit: eqUnit,
    eqVoid: eqVoid,
    eqArray: eqArray,
    eqRec: eqRec,
    eq1Array: eq1Array,
    eqRowNil: eqRowNil,
    eqRowCons: eqRowCons
};

},{"../Data.Symbol/index.js":122,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148,"./foreign.js":54}],56:[function(require,module,exports){
"use strict";

exports.intDegree = function (x) {
  return Math.min(Math.abs(x), 2147483647);
};

// See the Euclidean definition in
// https://en.m.wikipedia.org/wiki/Modulo_operation.
exports.intDiv = function (x) {
  return function (y) {
    if (y === 0) return 0;
    return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
  };
};

exports.intMod = function (x) {
  return function (y) {
    if (y === 0) return 0;
    var yy = Math.abs(y);
    return ((x % yy) + yy) % yy;
  };
};

exports.numDiv = function (n1) {
  return function (n2) {
    return n1 / n2;
  };
};

},{}],57:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var EuclideanRing = function (CommutativeRing0, degree, div, mod) {
    this.CommutativeRing0 = CommutativeRing0;
    this.degree = degree;
    this.div = div;
    this.mod = mod;
};
var mod = function (dict) {
    return dict.mod;
};
var gcd = function ($copy_dictEq) {
    return function ($copy_dictEuclideanRing) {
        return function ($copy_a) {
            return function ($copy_b) {
                var $tco_var_dictEq = $copy_dictEq;
                var $tco_var_dictEuclideanRing = $copy_dictEuclideanRing;
                var $tco_var_a = $copy_a;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(dictEq, dictEuclideanRing, a, b) {
                    var $7 = Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0()));
                    if ($7) {
                        $tco_done = true;
                        return a;
                    };
                    $tco_var_dictEq = dictEq;
                    $tco_var_dictEuclideanRing = dictEuclideanRing;
                    $tco_var_a = b;
                    $copy_b = mod(dictEuclideanRing)(a)(b);
                    return;
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_dictEq, $tco_var_dictEuclideanRing, $tco_var_a, $copy_b);
                };
                return $tco_result;
            };
        };
    };
};
var euclideanRingNumber = new EuclideanRing(function () {
    return Data_CommutativeRing.commutativeRingNumber;
}, function (v) {
    return 1;
}, $foreign.numDiv, function (v) {
    return function (v1) {
        return 0.0;
    };
});
var euclideanRingInt = new EuclideanRing(function () {
    return Data_CommutativeRing.commutativeRingInt;
}, $foreign.intDegree, $foreign.intDiv, $foreign.intMod);
var div = function (dict) {
    return dict.div;
};
var lcm = function (dictEq) {
    return function (dictEuclideanRing) {
        return function (a) {
            return function (b) {
                var $8 = Data_Eq.eq(dictEq)(a)(Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0())) || Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0()));
                if ($8) {
                    return Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0());
                };
                return div(dictEuclideanRing)(Data_Semiring.mul(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0())(a)(b))(gcd(dictEq)(dictEuclideanRing)(a)(b));
            };
        };
    };
};
var degree = function (dict) {
    return dict.degree;
};
module.exports = {
    EuclideanRing: EuclideanRing,
    degree: degree,
    div: div,
    mod: mod,
    gcd: gcd,
    lcm: lcm,
    euclideanRingInt: euclideanRingInt,
    euclideanRingNumber: euclideanRingNumber
};

},{"../Data.CommutativeRing/index.js":49,"../Data.Eq/index.js":55,"../Data.Semiring/index.js":107,"./foreign.js":56}],58:[function(require,module,exports){
"use strict";

exports.foldrArray = function (f) {
  return function (init) {
    return function (xs) {
      var acc = init;
      var len = xs.length;
      for (var i = len - 1; i >= 0; i--) {
        acc = f(xs[i])(acc);
      }
      return acc;
    };
  };
};

exports.foldlArray = function (f) {
  return function (init) {
    return function (xs) {
      var acc = init;
      var len = xs.length;
      for (var i = 0; i < len; i++) {
        acc = f(acc)(xs[i]);
      }
      return acc;
    };
  };
};

},{}],59:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Foldable = function (foldMap, foldl, foldr) {
    this.foldMap = foldMap;
    this.foldl = foldl;
    this.foldr = foldr;
};
var foldr = function (dict) {
    return dict.foldr;
};
var indexr = function (dictFoldable) {
    return function (idx) {
        var go = function (a) {
            return function (cursor) {
                if (cursor.elem instanceof Data_Maybe.Just) {
                    return cursor;
                };
                var $106 = cursor.pos === idx;
                if ($106) {
                    return {
                        elem: new Data_Maybe.Just(a),
                        pos: cursor.pos
                    };
                };
                return {
                    pos: cursor.pos + 1 | 0,
                    elem: cursor.elem
                };
            };
        };
        return function ($193) {
            return (function (v) {
                return v.elem;
            })(foldr(dictFoldable)(go)({
                elem: Data_Maybe.Nothing.value,
                pos: 0
            })($193));
        };
    };
};
var $$null = function (dictFoldable) {
    return foldr(dictFoldable)(function (v) {
        return function (v1) {
            return false;
        };
    })(true);
};
var oneOf = function (dictFoldable) {
    return function (dictPlus) {
        return foldr(dictFoldable)(Control_Alt.alt(dictPlus.Alt0()))(Control_Plus.empty(dictPlus));
    };
};
var oneOfMap = function (dictFoldable) {
    return function (dictPlus) {
        return function (f) {
            return foldr(dictFoldable)(function ($194) {
                return Control_Alt.alt(dictPlus.Alt0())(f($194));
            })(Control_Plus.empty(dictPlus));
        };
    };
};
var traverse_ = function (dictApplicative) {
    return function (dictFoldable) {
        return function (f) {
            return foldr(dictFoldable)(function ($195) {
                return Control_Apply.applySecond(dictApplicative.Apply0())(f($195));
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var for_ = function (dictApplicative) {
    return function (dictFoldable) {
        return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
    };
};
var sequence_ = function (dictApplicative) {
    return function (dictFoldable) {
        return traverse_(dictApplicative)(dictFoldable)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var foldl = function (dict) {
    return dict.foldl;
};
var indexl = function (dictFoldable) {
    return function (idx) {
        var go = function (cursor) {
            return function (a) {
                if (cursor.elem instanceof Data_Maybe.Just) {
                    return cursor;
                };
                var $109 = cursor.pos === idx;
                if ($109) {
                    return {
                        elem: new Data_Maybe.Just(a),
                        pos: cursor.pos
                    };
                };
                return {
                    pos: cursor.pos + 1 | 0,
                    elem: cursor.elem
                };
            };
        };
        return function ($196) {
            return (function (v) {
                return v.elem;
            })(foldl(dictFoldable)(go)({
                elem: Data_Maybe.Nothing.value,
                pos: 0
            })($196));
        };
    };
};
var intercalate = function (dictFoldable) {
    return function (dictMonoid) {
        return function (sep) {
            return function (xs) {
                var go = function (v) {
                    return function (x) {
                        if (v.init) {
                            return {
                                init: false,
                                acc: x
                            };
                        };
                        return {
                            init: false,
                            acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                        };
                    };
                };
                return (foldl(dictFoldable)(go)({
                    init: true,
                    acc: Data_Monoid.mempty(dictMonoid)
                })(xs)).acc;
            };
        };
    };
};
var length = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(function (c) {
            return function (v) {
                return Data_Semiring.add(dictSemiring)(Data_Semiring.one(dictSemiring))(c);
            };
        })(Data_Semiring.zero(dictSemiring));
    };
};
var maximumBy = function (dictFoldable) {
    return function (cmp) {
        var max$prime = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return new Data_Maybe.Just(v1);
                };
                if (v instanceof Data_Maybe.Just) {
                    return new Data_Maybe.Just((function () {
                        var $116 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.GT.value);
                        if ($116) {
                            return v.value0;
                        };
                        return v1;
                    })());
                };
                throw new Error("Failed pattern match at Data.Foldable (line 389, column 3 - line 389, column 27): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return foldl(dictFoldable)(max$prime)(Data_Maybe.Nothing.value);
    };
};
var maximum = function (dictOrd) {
    return function (dictFoldable) {
        return maximumBy(dictFoldable)(Data_Ord.compare(dictOrd));
    };
};
var minimumBy = function (dictFoldable) {
    return function (cmp) {
        var min$prime = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return new Data_Maybe.Just(v1);
                };
                if (v instanceof Data_Maybe.Just) {
                    return new Data_Maybe.Just((function () {
                        var $120 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.LT.value);
                        if ($120) {
                            return v.value0;
                        };
                        return v1;
                    })());
                };
                throw new Error("Failed pattern match at Data.Foldable (line 402, column 3 - line 402, column 27): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return foldl(dictFoldable)(min$prime)(Data_Maybe.Nothing.value);
    };
};
var minimum = function (dictOrd) {
    return function (dictFoldable) {
        return minimumBy(dictFoldable)(Data_Ord.compare(dictOrd));
    };
};
var product = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(Data_Semiring.mul(dictSemiring))(Data_Semiring.one(dictSemiring));
    };
};
var sum = function (dictFoldable) {
    return function (dictSemiring) {
        return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
    };
};
var foldableMultiplicative = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableMaybe = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v instanceof Data_Maybe.Just) {
                return f(v.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 129, column 41): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return z;
            };
            if (v1 instanceof Data_Maybe.Just) {
                return v(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 129, column 41): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return z;
            };
            if (v1 instanceof Data_Maybe.Just) {
                return v(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 129, column 41): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var foldableDual = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableDisj = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableConj = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableAdditive = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldMapDefaultR = function (dictFoldable) {
    return function (dictMonoid) {
        return function (f) {
            return foldr(dictFoldable)(function (x) {
                return function (acc) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldableArray = new Foldable(function (dictMonoid) {
    return foldMapDefaultR(foldableArray)(dictMonoid);
}, $foreign.foldlArray, $foreign.foldrArray);
var foldMapDefaultL = function (dictFoldable) {
    return function (dictMonoid) {
        return function (f) {
            return foldl(dictFoldable)(function (acc) {
                return function (x) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(x));
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldMap = function (dict) {
    return dict.foldMap;
};
var foldableFirst = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return foldMap(foldableMaybe)(dictMonoid)(f)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldl(foldableMaybe)(f)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldr(foldableMaybe)(f)(z)(v);
        };
    };
});
var foldableLast = new Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return foldMap(foldableMaybe)(dictMonoid)(f)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldl(foldableMaybe)(f)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return foldr(foldableMaybe)(f)(z)(v);
        };
    };
});
var foldlDefault = function (dictFoldable) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(foldMap(dictFoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function ($197) {
                    return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(c)($197)));
                })(xs)))(u);
            };
        };
    };
};
var foldrDefault = function (dictFoldable) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function ($198) {
                    return Data_Monoid_Endo.Endo(c($198));
                })(xs))(u);
            };
        };
    };
};
var surroundMap = function (dictFoldable) {
    return function (dictSemigroup) {
        return function (d) {
            return function (t) {
                return function (f) {
                    var joined = function (a) {
                        return function (m) {
                            return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(a))(m));
                        };
                    };
                    return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
                };
            };
        };
    };
};
var surround = function (dictFoldable) {
    return function (dictSemigroup) {
        return function (d) {
            return surroundMap(dictFoldable)(dictSemigroup)(d)(Control_Category.identity(Control_Category.categoryFn));
        };
    };
};
var foldM = function (dictFoldable) {
    return function (dictMonad) {
        return function (f) {
            return function (a0) {
                return foldl(dictFoldable)(function (ma) {
                    return function (b) {
                        return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f)(b));
                    };
                })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
            };
        };
    };
};
var fold = function (dictFoldable) {
    return function (dictMonoid) {
        return foldMap(dictFoldable)(dictMonoid)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var findMap = function (dictFoldable) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing) {
                    return p(v1);
                };
                return v;
            };
        };
        return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
    };
};
var find = function (dictFoldable) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_Maybe.Nothing && p(v1)) {
                    return new Data_Maybe.Just(v1);
                };
                return v;
            };
        };
        return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
    };
};
var any = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Newtype.newtypeDisj)(Data_Newtype.newtypeDisj)(Data_Monoid_Disj.Disj)(foldMap(dictFoldable)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra)));
    };
};
var elem = function (dictFoldable) {
    return function (dictEq) {
        return function ($199) {
            return any(dictFoldable)(Data_HeytingAlgebra.heytingAlgebraBoolean)(Data_Eq.eq(dictEq)($199));
        };
    };
};
var notElem = function (dictFoldable) {
    return function (dictEq) {
        return function (x) {
            return function ($200) {
                return !elem(dictFoldable)(dictEq)(x)($200);
            };
        };
    };
};
var or = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return any(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var all = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Newtype.newtypeConj)(Data_Newtype.newtypeConj)(Data_Monoid_Conj.Conj)(foldMap(dictFoldable)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra)));
    };
};
var and = function (dictFoldable) {
    return function (dictHeytingAlgebra) {
        return all(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    Foldable: Foldable,
    foldr: foldr,
    foldl: foldl,
    foldMap: foldMap,
    foldrDefault: foldrDefault,
    foldlDefault: foldlDefault,
    foldMapDefaultL: foldMapDefaultL,
    foldMapDefaultR: foldMapDefaultR,
    fold: fold,
    foldM: foldM,
    traverse_: traverse_,
    for_: for_,
    sequence_: sequence_,
    oneOf: oneOf,
    oneOfMap: oneOfMap,
    intercalate: intercalate,
    surroundMap: surroundMap,
    surround: surround,
    and: and,
    or: or,
    all: all,
    any: any,
    sum: sum,
    product: product,
    elem: elem,
    notElem: notElem,
    indexl: indexl,
    indexr: indexr,
    find: find,
    findMap: findMap,
    maximum: maximum,
    maximumBy: maximumBy,
    minimum: minimum,
    minimumBy: minimumBy,
    "null": $$null,
    length: length,
    foldableArray: foldableArray,
    foldableMaybe: foldableMaybe,
    foldableFirst: foldableFirst,
    foldableLast: foldableLast,
    foldableAdditive: foldableAdditive,
    foldableDual: foldableDual,
    foldableDisj: foldableDisj,
    foldableConj: foldableConj,
    foldableMultiplicative: foldableMultiplicative
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Plus/index.js":30,"../Data.Eq/index.js":55,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Maybe/index.js":79,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Endo/index.js":84,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Unit/index.js":133,"./foreign.js":58}],60:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Tuple = (function () {
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    return Tuple;
})();
var FoldableWithIndex = function (Foldable0, foldMapWithIndex, foldlWithIndex, foldrWithIndex) {
    this.Foldable0 = Foldable0;
    this.foldMapWithIndex = foldMapWithIndex;
    this.foldlWithIndex = foldlWithIndex;
    this.foldrWithIndex = foldrWithIndex;
};
var foldrWithIndex = function (dict) {
    return dict.foldrWithIndex;
};
var traverseWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                return function ($46) {
                    return Control_Apply.applySecond(dictApplicative.Apply0())(f(i)($46));
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var forWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return Data_Function.flip(traverseWithIndex_(dictApplicative)(dictFoldableWithIndex));
    };
};
var foldrDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldrWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldlWithIndex = function (dict) {
    return dict.foldlWithIndex;
};
var foldlDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldlWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldableWithIndexMultiplicative = new FoldableWithIndex(function () {
    return Data_Foldable.foldableMultiplicative;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableMultiplicative)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
});
var foldableWithIndexMaybe = new FoldableWithIndex(function () {
    return Data_Foldable.foldableMaybe;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
});
var foldableWithIndexLast = new FoldableWithIndex(function () {
    return Data_Foldable.foldableLast;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableLast)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableLast)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableLast)(f(Data_Unit.unit));
});
var foldableWithIndexFirst = new FoldableWithIndex(function () {
    return Data_Foldable.foldableFirst;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableFirst)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
});
var foldableWithIndexDual = new FoldableWithIndex(function () {
    return Data_Foldable.foldableDual;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableDual)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableDual)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableDual)(f(Data_Unit.unit));
});
var foldableWithIndexDisj = new FoldableWithIndex(function () {
    return Data_Foldable.foldableDisj;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableDisj)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
});
var foldableWithIndexConj = new FoldableWithIndex(function () {
    return Data_Foldable.foldableConj;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableConj)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableConj)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableConj)(f(Data_Unit.unit));
});
var foldableWithIndexAdditive = new FoldableWithIndex(function () {
    return Data_Foldable.foldableAdditive;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableAdditive)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
});
var foldWithIndexM = function (dictFoldableWithIndex) {
    return function (dictMonad) {
        return function (f) {
            return function (a0) {
                return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                    return function (ma) {
                        return function (b) {
                            return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f(i))(b));
                        };
                    };
                })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
            };
        };
    };
};
var foldMapWithIndexDefaultR = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                return function (x) {
                    return function (acc) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(f(i)(x))(acc);
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldableWithIndexArray = new FoldableWithIndex(function () {
    return Data_Foldable.foldableArray;
}, function (dictMonoid) {
    return foldMapWithIndexDefaultR(foldableWithIndexArray)(dictMonoid);
}, function (f) {
    return function (z) {
        return function ($47) {
            return Data_Foldable.foldl(Data_Foldable.foldableArray)(function (y) {
                return function (v) {
                    return f(v.value0)(y)(v.value1);
                };
            })(z)(Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Tuple.create)($47));
        };
    };
}, function (f) {
    return function (z) {
        return function ($48) {
            return Data_Foldable.foldr(Data_Foldable.foldableArray)(function (v) {
                return function (y) {
                    return f(v.value0)(v.value1)(y);
                };
            })(z)(Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Tuple.create)($48));
        };
    };
});
var foldMapWithIndexDefaultL = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                return function (acc) {
                    return function (x) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)(x));
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldMapWithIndex = function (dict) {
    return dict.foldMapWithIndex;
};
var foldlWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function (i) {
                    return function ($49) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo(Data_Function.flip(c(i))($49)));
                    };
                })(xs)))(u);
            };
        };
    };
};
var foldrWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function (i) {
                    return function ($50) {
                        return Data_Monoid_Endo.Endo(c(i)($50));
                    };
                })(xs))(u);
            };
        };
    };
};
var surroundMapWithIndex = function (dictFoldableWithIndex) {
    return function (dictSemigroup) {
        return function (d) {
            return function (t) {
                return function (f) {
                    var joined = function (i) {
                        return function (a) {
                            return function (m) {
                                return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(i)(a))(m));
                            };
                        };
                    };
                    return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
                };
            };
        };
    };
};
var foldMapDefault = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(Data_Function["const"](f));
        };
    };
};
var findWithIndex = function (dictFoldableWithIndex) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                return function (v2) {
                    if (v1 instanceof Data_Maybe.Nothing && p(v)(v2)) {
                        return new Data_Maybe.Just({
                            index: v,
                            value: v2
                        });
                    };
                    return v1;
                };
            };
        };
        return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
    };
};
var anyWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            return function ($51) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeDisj)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra))(function (i) {
                    return function ($52) {
                        return Data_Monoid_Disj.Disj(t(i)($52));
                    };
                })($51));
            };
        };
    };
};
var allWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            return function ($53) {
                return Data_Newtype.unwrap(Data_Newtype.newtypeConj)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra))(function (i) {
                    return function ($54) {
                        return Data_Monoid_Conj.Conj(t(i)($54));
                    };
                })($53));
            };
        };
    };
};
module.exports = {
    FoldableWithIndex: FoldableWithIndex,
    foldrWithIndex: foldrWithIndex,
    foldlWithIndex: foldlWithIndex,
    foldMapWithIndex: foldMapWithIndex,
    foldrWithIndexDefault: foldrWithIndexDefault,
    foldlWithIndexDefault: foldlWithIndexDefault,
    foldMapWithIndexDefaultR: foldMapWithIndexDefaultR,
    foldMapWithIndexDefaultL: foldMapWithIndexDefaultL,
    foldWithIndexM: foldWithIndexM,
    traverseWithIndex_: traverseWithIndex_,
    forWithIndex_: forWithIndex_,
    surroundMapWithIndex: surroundMapWithIndex,
    allWithIndex: allWithIndex,
    anyWithIndex: anyWithIndex,
    findWithIndex: findWithIndex,
    foldrDefault: foldrDefault,
    foldlDefault: foldlDefault,
    foldMapDefault: foldMapDefault,
    foldableWithIndexArray: foldableWithIndexArray,
    foldableWithIndexMaybe: foldableWithIndexMaybe,
    foldableWithIndexFirst: foldableWithIndexFirst,
    foldableWithIndexLast: foldableWithIndexLast,
    foldableWithIndexAdditive: foldableWithIndexAdditive,
    foldableWithIndexDual: foldableWithIndexDual,
    foldableWithIndexDisj: foldableWithIndexDisj,
    foldableWithIndexConj: foldableWithIndexConj,
    foldableWithIndexMultiplicative: foldableWithIndexMultiplicative
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.FunctorWithIndex/index.js":66,"../Data.Maybe/index.js":79,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Endo/index.js":84,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Semigroup/index.js":105,"../Data.Unit/index.js":133}],61:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Boolean = require("../Data.Boolean/index.js");
var on = function (f) {
    return function (g) {
        return function (x) {
            return function (y) {
                return f(g(x))(g(y));
            };
        };
    };
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var $$const = function (a) {
    return function (v) {
        return a;
    };
};
var applyN = function (f) {
    var go = function ($copy_n) {
        return function ($copy_acc) {
            var $tco_var_n = $copy_n;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(n, acc) {
                if (n <= 0) {
                    $tco_done = true;
                    return acc;
                };
                if (Data_Boolean.otherwise) {
                    $tco_var_n = n - 1 | 0;
                    $copy_acc = f(acc);
                    return;
                };
                throw new Error("Failed pattern match at Data.Function (line 94, column 3 - line 96, column 37): " + [ n.constructor.name, acc.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_n, $copy_acc);
            };
            return $tco_result;
        };
    };
    return go;
};
var applyFlipped = function (x) {
    return function (f) {
        return f(x);
    };
};
var apply = function (f) {
    return function (x) {
        return f(x);
    };
};
module.exports = {
    flip: flip,
    "const": $$const,
    apply: apply,
    applyFlipped: applyFlipped,
    applyN: applyN,
    on: on
};

},{"../Data.Boolean/index.js":45}],62:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Invariant = function (imap) {
    this.imap = imap;
};
var invariantMultiplicative = new Invariant(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
var invariantEndo = new Invariant(function (ab) {
    return function (ba) {
        return function (v) {
            return function ($31) {
                return ab(v(ba($31)));
            };
        };
    };
});
var invariantDual = new Invariant(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
var invariantDisj = new Invariant(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
var invariantConj = new Invariant(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
var invariantAdditive = new Invariant(function (f) {
    return function (v) {
        return function (v1) {
            return f(v1);
        };
    };
});
var imapF = function (dictFunctor) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(f);
        };
    };
};
var invariantArray = new Invariant(imapF(Data_Functor.functorArray));
var invariantFn = new Invariant(imapF(Data_Functor.functorFn));
var imap = function (dict) {
    return dict.imap;
};
module.exports = {
    imap: imap,
    Invariant: Invariant,
    imapF: imapF,
    invariantFn: invariantFn,
    invariantArray: invariantArray,
    invariantAdditive: invariantAdditive,
    invariantConj: invariantConj,
    invariantDisj: invariantDisj,
    invariantDual: invariantDual,
    invariantEndo: invariantEndo,
    invariantMultiplicative: invariantMultiplicative
};

},{"../Data.Functor/index.js":64}],63:[function(require,module,exports){
"use strict";

exports.arrayMap = function (f) {
  return function (arr) {
    var l = arr.length;
    var result = new Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(arr[i]);
    }
    return result;
  };
};

},{}],64:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Functor = function (map) {
    this.map = map;
};
var map = function (dict) {
    return dict.map;
};
var mapFlipped = function (dictFunctor) {
    return function (fa) {
        return function (f) {
            return map(dictFunctor)(f)(fa);
        };
    };
};
var $$void = function (dictFunctor) {
    return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
};
var voidLeft = function (dictFunctor) {
    return function (f) {
        return function (x) {
            return map(dictFunctor)(Data_Function["const"](x))(f);
        };
    };
};
var voidRight = function (dictFunctor) {
    return function (x) {
        return map(dictFunctor)(Data_Function["const"](x));
    };
};
var functorFn = new Functor(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
var functorArray = new Functor($foreign.arrayMap);
var flap = function (dictFunctor) {
    return function (ff) {
        return function (x) {
            return map(dictFunctor)(function (f) {
                return f(x);
            })(ff);
        };
    };
};
module.exports = {
    Functor: Functor,
    map: map,
    mapFlipped: mapFlipped,
    "void": $$void,
    voidRight: voidRight,
    voidLeft: voidLeft,
    flap: flap,
    functorFn: functorFn,
    functorArray: functorArray
};

},{"../Control.Semigroupoid/index.js":31,"../Data.Function/index.js":61,"../Data.Unit/index.js":133,"./foreign.js":63}],65:[function(require,module,exports){
"use strict";

exports.mapWithIndexArray = function (f) {
  return function (xs) {
    var l = xs.length;
    var result = Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(i)(xs[i]);
    }
    return result;
  };
};

},{}],66:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Maybe_First = require("../Data.Maybe.First/index.js");
var Data_Maybe_Last = require("../Data.Maybe.Last/index.js");
var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var FunctorWithIndex = function (Functor0, mapWithIndex) {
    this.Functor0 = Functor0;
    this.mapWithIndex = mapWithIndex;
};
var mapWithIndex = function (dict) {
    return dict.mapWithIndex;
};
var mapDefault = function (dictFunctorWithIndex) {
    return function (f) {
        return mapWithIndex(dictFunctorWithIndex)(Data_Function["const"](f));
    };
};
var functorWithIndexMultiplicative = new FunctorWithIndex(function () {
    return Data_Monoid_Multiplicative.functorMultiplicative;
}, function (f) {
    return Data_Functor.map(Data_Monoid_Multiplicative.functorMultiplicative)(f(Data_Unit.unit));
});
var functorWithIndexMaybe = new FunctorWithIndex(function () {
    return Data_Maybe.functorMaybe;
}, function (f) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(f(Data_Unit.unit));
});
var functorWithIndexLast = new FunctorWithIndex(function () {
    return Data_Maybe_Last.functorLast;
}, function (f) {
    return Data_Functor.map(Data_Maybe_Last.functorLast)(f(Data_Unit.unit));
});
var functorWithIndexFirst = new FunctorWithIndex(function () {
    return Data_Maybe_First.functorFirst;
}, function (f) {
    return Data_Functor.map(Data_Maybe_First.functorFirst)(f(Data_Unit.unit));
});
var functorWithIndexDual = new FunctorWithIndex(function () {
    return Data_Monoid_Dual.functorDual;
}, function (f) {
    return Data_Functor.map(Data_Monoid_Dual.functorDual)(f(Data_Unit.unit));
});
var functorWithIndexDisj = new FunctorWithIndex(function () {
    return Data_Monoid_Disj.functorDisj;
}, function (f) {
    return Data_Functor.map(Data_Monoid_Disj.functorDisj)(f(Data_Unit.unit));
});
var functorWithIndexConj = new FunctorWithIndex(function () {
    return Data_Monoid_Conj.functorConj;
}, function (f) {
    return Data_Functor.map(Data_Monoid_Conj.functorConj)(f(Data_Unit.unit));
});
var functorWithIndexArray = new FunctorWithIndex(function () {
    return Data_Functor.functorArray;
}, $foreign.mapWithIndexArray);
var functorWithIndexAdditive = new FunctorWithIndex(function () {
    return Data_Monoid_Additive.functorAdditive;
}, function (f) {
    return Data_Functor.map(Data_Monoid_Additive.functorAdditive)(f(Data_Unit.unit));
});
module.exports = {
    FunctorWithIndex: FunctorWithIndex,
    mapWithIndex: mapWithIndex,
    mapDefault: mapDefault,
    functorWithIndexArray: functorWithIndexArray,
    functorWithIndexMaybe: functorWithIndexMaybe,
    functorWithIndexFirst: functorWithIndexFirst,
    functorWithIndexLast: functorWithIndexLast,
    functorWithIndexAdditive: functorWithIndexAdditive,
    functorWithIndexDual: functorWithIndexDual,
    functorWithIndexConj: functorWithIndexConj,
    functorWithIndexDisj: functorWithIndexDisj,
    functorWithIndexMultiplicative: functorWithIndexMultiplicative
};

},{"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Maybe.First/index.js":77,"../Data.Maybe.Last/index.js":78,"../Data.Maybe/index.js":79,"../Data.Monoid.Additive/index.js":80,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Multiplicative/index.js":85,"../Data.Unit/index.js":133,"./foreign.js":65}],67:[function(require,module,exports){
"use strict";

exports.boolConj = function (b1) {
  return function (b2) {
    return b1 && b2;
  };
};

exports.boolDisj = function (b1) {
  return function (b2) {
    return b1 || b2;
  };
};

exports.boolNot = function (b) {
  return !b;
};

},{}],68:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_Row = require("../Type.Data.Row/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var HeytingAlgebraRecord = function (conjRecord, disjRecord, ffRecord, impliesRecord, notRecord, ttRecord) {
    this.conjRecord = conjRecord;
    this.disjRecord = disjRecord;
    this.ffRecord = ffRecord;
    this.impliesRecord = impliesRecord;
    this.notRecord = notRecord;
    this.ttRecord = ttRecord;
};
var HeytingAlgebra = function (conj, disj, ff, implies, not, tt) {
    this.conj = conj;
    this.disj = disj;
    this.ff = ff;
    this.implies = implies;
    this.not = not;
    this.tt = tt;
};
var ttRecord = function (dict) {
    return dict.ttRecord;
};
var tt = function (dict) {
    return dict.tt;
};
var notRecord = function (dict) {
    return dict.notRecord;
};
var not = function (dict) {
    return dict.not;
};
var impliesRecord = function (dict) {
    return dict.impliesRecord;
};
var implies = function (dict) {
    return dict.implies;
};
var heytingAlgebraUnit = new HeytingAlgebra(function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
}, function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
}, Data_Unit.unit, function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
}, function (v) {
    return Data_Unit.unit;
}, Data_Unit.unit);
var heytingAlgebraRecordNil = new HeytingAlgebraRecord(function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
}, function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
}, function (v) {
    return function (v1) {
        return {};
    };
}, function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
}, function (v) {
    return function (v1) {
        return {};
    };
}, function (v) {
    return function (v1) {
        return {};
    };
});
var ffRecord = function (dict) {
    return dict.ffRecord;
};
var ff = function (dict) {
    return dict.ff;
};
var disjRecord = function (dict) {
    return dict.disjRecord;
};
var disj = function (dict) {
    return dict.disj;
};
var heytingAlgebraBoolean = new HeytingAlgebra($foreign.boolConj, $foreign.boolDisj, false, function (a) {
    return function (b) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
    };
}, $foreign.boolNot, true);
var conjRecord = function (dict) {
    return dict.conjRecord;
};
var heytingAlgebraRecord = function (dictRowToList) {
    return function (dictHeytingAlgebraRecord) {
        return new HeytingAlgebra(conjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), disjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), ffRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value), impliesRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), notRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), ttRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value));
    };
};
var conj = function (dict) {
    return dict.conj;
};
var heytingAlgebraFunction = function (dictHeytingAlgebra) {
    return new HeytingAlgebra(function (f) {
        return function (g) {
            return function (a) {
                return conj(dictHeytingAlgebra)(f(a))(g(a));
            };
        };
    }, function (f) {
        return function (g) {
            return function (a) {
                return disj(dictHeytingAlgebra)(f(a))(g(a));
            };
        };
    }, function (v) {
        return ff(dictHeytingAlgebra);
    }, function (f) {
        return function (g) {
            return function (a) {
                return implies(dictHeytingAlgebra)(f(a))(g(a));
            };
        };
    }, function (f) {
        return function (a) {
            return not(dictHeytingAlgebra)(f(a));
        };
    }, function (v) {
        return tt(dictHeytingAlgebra);
    });
};
var heytingAlgebraRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictHeytingAlgebraRecord) {
            return function (dictHeytingAlgebra) {
                return new HeytingAlgebraRecord(function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = conjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(conj(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
                        };
                    };
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = disjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(disj(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
                        };
                    };
                }, function (v) {
                    return function (row) {
                        var tail = ffRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
                        var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                        var insert = Record_Unsafe.unsafeSet(key);
                        return insert(ff(dictHeytingAlgebra))(tail);
                    };
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = impliesRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(implies(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
                        };
                    };
                }, function (v) {
                    return function (row) {
                        var tail = notRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
                        var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                        var insert = Record_Unsafe.unsafeSet(key);
                        var get = Record_Unsafe.unsafeGet(key);
                        return insert(not(dictHeytingAlgebra)(get(row)))(tail);
                    };
                }, function (v) {
                    return function (row) {
                        var tail = ttRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
                        var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                        var insert = Record_Unsafe.unsafeSet(key);
                        return insert(tt(dictHeytingAlgebra))(tail);
                    };
                });
            };
        };
    };
};
module.exports = {
    HeytingAlgebra: HeytingAlgebra,
    tt: tt,
    ff: ff,
    implies: implies,
    conj: conj,
    disj: disj,
    not: not,
    HeytingAlgebraRecord: HeytingAlgebraRecord,
    ffRecord: ffRecord,
    ttRecord: ttRecord,
    impliesRecord: impliesRecord,
    conjRecord: conjRecord,
    disjRecord: disjRecord,
    notRecord: notRecord,
    heytingAlgebraBoolean: heytingAlgebraBoolean,
    heytingAlgebraUnit: heytingAlgebraUnit,
    heytingAlgebraFunction: heytingAlgebraFunction,
    heytingAlgebraRecord: heytingAlgebraRecord,
    heytingAlgebraRecordNil: heytingAlgebraRecordNil,
    heytingAlgebraRecordCons: heytingAlgebraRecordCons
};

},{"../Data.Symbol/index.js":122,"../Data.Unit/index.js":133,"../Record.Unsafe/index.js":146,"../Type.Data.Row/index.js":147,"../Type.Data.RowList/index.js":148,"./foreign.js":67}],69:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Identity = function (x) {
    return x;
};
var showIdentity = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Identity " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringIdentity = function (dictSemiring) {
    return dictSemiring;
};
var semigroupIdenity = function (dictSemigroup) {
    return dictSemigroup;
};
var ringIdentity = function (dictRing) {
    return dictRing;
};
var ordIdentity = function (dictOrd) {
    return dictOrd;
};
var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
    return n;
}, Identity);
var monoidIdentity = function (dictMonoid) {
    return dictMonoid;
};
var lazyIdentity = function (dictLazy) {
    return dictLazy;
};
var heytingAlgebraIdentity = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorIdentity = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var functorWithIndexIdentity = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorIdentity;
}, function (f) {
    return function (v) {
        return f(Data_Unit.unit)(v);
    };
});
var invariantIdentity = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorIdentity));
var foldableIdentity = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v)(z);
        };
    };
});
var foldableWithIndexIdentity = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableIdentity;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(Data_Unit.unit)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(v)(z);
        };
    };
});
var traversableIdentity = new Data_Traversable.Traversable(function () {
    return foldableIdentity;
}, function () {
    return functorIdentity;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Identity)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Identity)(f(v));
        };
    };
});
var traversableWithIndexIdentity = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexIdentity;
}, function () {
    return functorWithIndexIdentity;
}, function () {
    return traversableIdentity;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Identity)(f(Data_Unit.unit)(v));
        };
    };
});
var foldable1Identity = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableIdentity;
}, function (dictSemigroup) {
    return function (v) {
        return v;
    };
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
});
var traversable1Identity = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1Identity;
}, function () {
    return traversableIdentity;
}, function (dictApply) {
    return function (v) {
        return Data_Functor.map(dictApply.Functor0())(Identity)(v);
    };
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictApply.Functor0())(Identity)(f(v));
        };
    };
});
var extendIdentity = new Control_Extend.Extend(function () {
    return functorIdentity;
}, function (f) {
    return function (m) {
        return f(m);
    };
});
var euclideanRingIdentity = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqIdentity = function (dictEq) {
    return dictEq;
};
var eq1Identity = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqIdentity(dictEq));
});
var ord1Identity = new Data_Ord.Ord1(function () {
    return eq1Identity;
}, function (dictOrd) {
    return Data_Ord.compare(ordIdentity(dictOrd));
});
var comonadIdentity = new Control_Comonad.Comonad(function () {
    return extendIdentity;
}, function (v) {
    return v;
});
var commutativeRingIdentity = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedIdentity = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraIdentity = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyIdentity = new Control_Apply.Apply(function () {
    return functorIdentity;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindIdentity = new Control_Bind.Bind(function () {
    return applyIdentity;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeIdentity = new Control_Applicative.Applicative(function () {
    return applyIdentity;
}, Identity);
var monadIdentity = new Control_Monad.Monad(function () {
    return applicativeIdentity;
}, function () {
    return bindIdentity;
});
var altIdentity = new Control_Alt.Alt(function () {
    return functorIdentity;
}, function (x) {
    return function (v) {
        return x;
    };
});
module.exports = {
    Identity: Identity,
    newtypeIdentity: newtypeIdentity,
    eqIdentity: eqIdentity,
    ordIdentity: ordIdentity,
    boundedIdentity: boundedIdentity,
    heytingAlgebraIdentity: heytingAlgebraIdentity,
    booleanAlgebraIdentity: booleanAlgebraIdentity,
    semigroupIdenity: semigroupIdenity,
    monoidIdentity: monoidIdentity,
    semiringIdentity: semiringIdentity,
    euclideanRingIdentity: euclideanRingIdentity,
    ringIdentity: ringIdentity,
    commutativeRingIdentity: commutativeRingIdentity,
    lazyIdentity: lazyIdentity,
    showIdentity: showIdentity,
    eq1Identity: eq1Identity,
    ord1Identity: ord1Identity,
    functorIdentity: functorIdentity,
    functorWithIndexIdentity: functorWithIndexIdentity,
    invariantIdentity: invariantIdentity,
    altIdentity: altIdentity,
    applyIdentity: applyIdentity,
    applicativeIdentity: applicativeIdentity,
    bindIdentity: bindIdentity,
    monadIdentity: monadIdentity,
    extendIdentity: extendIdentity,
    comonadIdentity: comonadIdentity,
    foldableIdentity: foldableIdentity,
    foldable1Identity: foldable1Identity,
    foldableWithIndexIdentity: foldableWithIndexIdentity,
    traversableIdentity: traversableIdentity,
    traversable1Identity: traversable1Identity,
    traversableWithIndexIdentity: traversableWithIndexIdentity
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Comonad/index.js":13,"../Control.Extend/index.js":15,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Functor.Invariant/index.js":62,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Semigroup.Foldable/index.js":101,"../Data.Semigroup.Traversable/index.js":103,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Unit/index.js":133}],70:[function(require,module,exports){
"use strict";

exports.defer = function (thunk) {
  var v = null;
  return function() {
    if (thunk === undefined) return v;

    v = thunk();
    thunk = undefined; // eslint-disable-line no-param-reassign
    return v;
  };
};

exports.force = function (l) {
  return l();
};

},{}],71:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_BooleanAlgebra = require("../Data.BooleanAlgebra/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var showLazy = function (dictShow) {
    return new Data_Show.Show(function (x) {
        return "(defer \\_ -> " + (Data_Show.show(dictShow)($foreign.force(x)) + ")");
    });
};
var semiringLazy = function (dictSemiring) {
    return new Data_Semiring.Semiring(function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_Semiring.add(dictSemiring)($foreign.force(a))($foreign.force(b));
            });
        };
    }, function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_Semiring.mul(dictSemiring)($foreign.force(a))($foreign.force(b));
            });
        };
    }, $foreign.defer(function (v) {
        return Data_Semiring.one(dictSemiring);
    }), $foreign.defer(function (v) {
        return Data_Semiring.zero(dictSemiring);
    }));
};
var semigroupLazy = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_Semigroup.append(dictSemigroup)($foreign.force(a))($foreign.force(b));
            });
        };
    });
};
var ringLazy = function (dictRing) {
    return new Data_Ring.Ring(function () {
        return semiringLazy(dictRing.Semiring0());
    }, function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_Ring.sub(dictRing)($foreign.force(a))($foreign.force(b));
            });
        };
    });
};
var monoidLazy = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupLazy(dictMonoid.Semigroup0());
    }, $foreign.defer(function (v) {
        return Data_Monoid.mempty(dictMonoid);
    }));
};
var lazyLazy = new Control_Lazy.Lazy(function (f) {
    return $foreign.defer(function (v) {
        return $foreign.force(f(Data_Unit.unit));
    });
});
var functorLazy = new Data_Functor.Functor(function (f) {
    return function (l) {
        return $foreign.defer(function (v) {
            return f($foreign.force(l));
        });
    };
});
var functorWithIndexLazy = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorLazy;
}, function (f) {
    return Data_Functor.map(functorLazy)(f(Data_Unit.unit));
});
var invariantLazy = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorLazy));
var foldableLazy = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (l) {
            return f($foreign.force(l));
        };
    };
}, function (f) {
    return function (z) {
        return function (l) {
            return f(z)($foreign.force(l));
        };
    };
}, function (f) {
    return function (z) {
        return function (l) {
            return f($foreign.force(l))(z);
        };
    };
});
var foldableWithIndexLazy = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableLazy;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(foldableLazy)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(foldableLazy)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(foldableLazy)(f(Data_Unit.unit));
});
var traversableLazy = new Data_Traversable.Traversable(function () {
    return foldableLazy;
}, function () {
    return functorLazy;
}, function (dictApplicative) {
    return function (l) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function ($42) {
            return $foreign.defer(Data_Function["const"]($42));
        })($foreign.force(l));
    };
}, function (dictApplicative) {
    return function (f) {
        return function (l) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function ($43) {
                return $foreign.defer(Data_Function["const"]($43));
            })(f($foreign.force(l)));
        };
    };
});
var traversableWithIndexLazy = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexLazy;
}, function () {
    return functorWithIndexLazy;
}, function () {
    return traversableLazy;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(traversableLazy)(dictApplicative)(f(Data_Unit.unit));
    };
});
var foldable1Lazy = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableLazy;
}, function (dictSemigroup) {
    return Data_Semigroup_Foldable.fold1Default(foldable1Lazy)(dictSemigroup);
}, function (dictSemigroup) {
    return function (f) {
        return function (l) {
            return f($foreign.force(l));
        };
    };
});
var traversable1Lazy = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1Lazy;
}, function () {
    return traversableLazy;
}, function (dictApply) {
    return function (l) {
        return Data_Functor.map(dictApply.Functor0())(function ($44) {
            return $foreign.defer(Data_Function["const"]($44));
        })($foreign.force(l));
    };
}, function (dictApply) {
    return function (f) {
        return function (l) {
            return Data_Functor.map(dictApply.Functor0())(function ($45) {
                return $foreign.defer(Data_Function["const"]($45));
            })(f($foreign.force(l)));
        };
    };
});
var extendLazy = new Control_Extend.Extend(function () {
    return functorLazy;
}, function (f) {
    return function (x) {
        return $foreign.defer(function (v) {
            return f(x);
        });
    };
});
var eqLazy = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(dictEq)($foreign.force(x))($foreign.force(y));
        };
    });
};
var ordLazy = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqLazy(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(dictOrd)($foreign.force(x))($foreign.force(y));
        };
    });
};
var eq1Lazy = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqLazy(dictEq));
});
var ord1Lazy = new Data_Ord.Ord1(function () {
    return eq1Lazy;
}, function (dictOrd) {
    return Data_Ord.compare(ordLazy(dictOrd));
});
var comonadLazy = new Control_Comonad.Comonad(function () {
    return extendLazy;
}, $foreign.force);
var commutativeRingLazy = function (dictCommutativeRing) {
    return new Data_CommutativeRing.CommutativeRing(function () {
        return ringLazy(dictCommutativeRing.Ring0());
    });
};
var euclideanRingLazy = function (dictEuclideanRing) {
    return new Data_EuclideanRing.EuclideanRing(function () {
        return commutativeRingLazy(dictEuclideanRing.CommutativeRing0());
    }, function ($46) {
        return Data_EuclideanRing.degree(dictEuclideanRing)($foreign.force($46));
    }, function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_EuclideanRing.div(dictEuclideanRing)($foreign.force(a))($foreign.force(b));
            });
        };
    }, function (a) {
        return function (b) {
            return $foreign.defer(function (v) {
                return Data_EuclideanRing.mod(dictEuclideanRing)($foreign.force(a))($foreign.force(b));
            });
        };
    });
};
var boundedLazy = function (dictBounded) {
    return new Data_Bounded.Bounded(function () {
        return ordLazy(dictBounded.Ord0());
    }, $foreign.defer(function (v) {
        return Data_Bounded.bottom(dictBounded);
    }), $foreign.defer(function (v) {
        return Data_Bounded.top(dictBounded);
    }));
};
var applyLazy = new Control_Apply.Apply(function () {
    return functorLazy;
}, function (f) {
    return function (x) {
        return $foreign.defer(function (v) {
            return $foreign.force(f)($foreign.force(x));
        });
    };
});
var bindLazy = new Control_Bind.Bind(function () {
    return applyLazy;
}, function (l) {
    return function (f) {
        return $foreign.defer(function (v) {
            return $foreign.force(f($foreign.force(l)));
        });
    };
});
var heytingAlgebraLazy = function (dictHeytingAlgebra) {
    return new Data_HeytingAlgebra.HeytingAlgebra(function (a) {
        return function (b) {
            return Control_Apply.apply(applyLazy)(Data_Functor.map(functorLazy)(Data_HeytingAlgebra.conj(dictHeytingAlgebra))(a))(b);
        };
    }, function (a) {
        return function (b) {
            return Control_Apply.apply(applyLazy)(Data_Functor.map(functorLazy)(Data_HeytingAlgebra.disj(dictHeytingAlgebra))(a))(b);
        };
    }, $foreign.defer(function (v) {
        return Data_HeytingAlgebra.ff(dictHeytingAlgebra);
    }), function (a) {
        return function (b) {
            return Control_Apply.apply(applyLazy)(Data_Functor.map(functorLazy)(Data_HeytingAlgebra.implies(dictHeytingAlgebra))(a))(b);
        };
    }, function (a) {
        return Data_Functor.map(functorLazy)(Data_HeytingAlgebra.not(dictHeytingAlgebra))(a);
    }, $foreign.defer(function (v) {
        return Data_HeytingAlgebra.tt(dictHeytingAlgebra);
    }));
};
var booleanAlgebraLazy = function (dictBooleanAlgebra) {
    return new Data_BooleanAlgebra.BooleanAlgebra(function () {
        return heytingAlgebraLazy(dictBooleanAlgebra.HeytingAlgebra0());
    });
};
var applicativeLazy = new Control_Applicative.Applicative(function () {
    return applyLazy;
}, function (a) {
    return $foreign.defer(function (v) {
        return a;
    });
});
var monadLazy = new Control_Monad.Monad(function () {
    return applicativeLazy;
}, function () {
    return bindLazy;
});
module.exports = {
    semiringLazy: semiringLazy,
    ringLazy: ringLazy,
    commutativeRingLazy: commutativeRingLazy,
    euclideanRingLazy: euclideanRingLazy,
    eqLazy: eqLazy,
    eq1Lazy: eq1Lazy,
    ordLazy: ordLazy,
    ord1Lazy: ord1Lazy,
    boundedLazy: boundedLazy,
    semigroupLazy: semigroupLazy,
    monoidLazy: monoidLazy,
    heytingAlgebraLazy: heytingAlgebraLazy,
    booleanAlgebraLazy: booleanAlgebraLazy,
    functorLazy: functorLazy,
    functorWithIndexLazy: functorWithIndexLazy,
    foldableLazy: foldableLazy,
    foldableWithIndexLazy: foldableWithIndexLazy,
    foldable1Lazy: foldable1Lazy,
    traversableLazy: traversableLazy,
    traversableWithIndexLazy: traversableWithIndexLazy,
    traversable1Lazy: traversable1Lazy,
    invariantLazy: invariantLazy,
    applyLazy: applyLazy,
    applicativeLazy: applicativeLazy,
    bindLazy: bindLazy,
    monadLazy: monadLazy,
    extendLazy: extendLazy,
    comonadLazy: comonadLazy,
    showLazy: showLazy,
    lazyLazy: lazyLazy,
    defer: $foreign.defer,
    force: $foreign.force
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Comonad/index.js":13,"../Control.Extend/index.js":15,"../Control.Lazy/index.js":16,"../Control.Monad/index.js":27,"../Data.BooleanAlgebra/index.js":46,"../Data.Bounded/index.js":48,"../Data.CommutativeRing/index.js":49,"../Data.Eq/index.js":55,"../Data.EuclideanRing/index.js":57,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.Functor.Invariant/index.js":62,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.HeytingAlgebra/index.js":68,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Ring/index.js":99,"../Data.Semigroup.Foldable/index.js":101,"../Data.Semigroup.Traversable/index.js":103,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Unit/index.js":133,"./foreign.js":70}],72:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var List = function (x) {
    return x;
};
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var nil = List(Data_Lazy.defer(function (v) {
    return Nil.value;
}));
var newtypeNonEmptyList = new Data_Newtype.Newtype(function (n) {
    return n;
}, NonEmptyList);
var newtypeList = new Data_Newtype.Newtype(function (n) {
    return n;
}, List);
var step = function ($215) {
    return Data_Lazy.force(Data_Newtype.unwrap(newtypeList)($215));
};
var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
    return function (ys) {
        var go = function (v) {
            if (v instanceof Nil) {
                return step(ys);
            };
            if (v instanceof Cons) {
                return new Cons(v.value0, Data_Semigroup.append(semigroupList)(v.value1)(ys));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 98, column 5 - line 98, column 21): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var showList = function (dictShow) {
    return new Data_Show.Show(function (xs) {
        var go = function (v) {
            if (v instanceof Nil) {
                return "Nil";
            };
            if (v instanceof Cons) {
                return "(Cons " + (Data_Show.show(dictShow)(v.value0) + (" " + (go(step(v.value1)) + ")")));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 64, column 5 - line 65, column 5): " + [ v.constructor.name ]);
        };
        return "fromStrict (" + (go(step(xs)) + ")");
    });
};
var showNonEmptyList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyList " + (Data_Show.show(Data_Lazy.showLazy(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow))))(v) + ")");
    });
};
var monoidList = new Data_Monoid.Monoid(function () {
    return semigroupList;
}, nil);
var lazyList = new Control_Lazy.Lazy(function (f) {
    return List(Data_Lazy.defer(function ($216) {
        return step(f($216));
    }));
});
var functorList = new Data_Functor.Functor(function (f) {
    return function (xs) {
        var go = function (v) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return new Cons(f(v.value0), Data_Functor.map(functorList)(f)(v.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 107, column 5 - line 107, column 17): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var functorNonEmptyList = new Data_Functor.Functor(function (f) {
    return function (v) {
        return Data_Functor.map(Data_Lazy.functorLazy)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(functorList))(f))(v);
    };
});
var eq1List = new Data_Eq.Eq1(function (dictEq) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return true;
                        };
                        if (v instanceof Cons && (v1 instanceof Cons && Data_Eq.eq(dictEq)(v.value0)(v1.value0))) {
                            $tco_var_v = step(v.value1);
                            $copy_v1 = step(v1.value1);
                            return;
                        };
                        $tco_done = true;
                        return false;
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(step(xs))(step(ys));
        };
    };
});
var eqList = function (dictEq) {
    return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
};
var eqNonEmptyList = function (dictEq) {
    return Data_Lazy.eqLazy(Data_NonEmpty.eqNonEmpty(eq1List)(dictEq));
};
var ord1List = new Data_Ord.Ord1(function () {
    return eq1List;
}, function (dictOrd) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.EQ.value;
                        };
                        if (v instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.LT.value;
                        };
                        if (v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.GT.value;
                        };
                        if (v instanceof Cons && v1 instanceof Cons) {
                            var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
                            if (v2 instanceof Data_Ordering.EQ) {
                                $tco_var_v = step(v.value1);
                                $copy_v1 = step(v1.value1);
                                return;
                            };
                            $tco_done = true;
                            return v2;
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy.Types (line 84, column 5 - line 84, column 20): " + [ v.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(step(xs))(step(ys));
        };
    };
});
var ordList = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqList(dictOrd.Eq0());
    }, Data_Ord.compare1(ord1List)(dictOrd));
};
var ordNonEmptyList = function (dictOrd) {
    return Data_Lazy.ordLazy(Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd));
};
var cons = function (x) {
    return function (xs) {
        return List(Data_Lazy.defer(function (v) {
            return new Cons(x, xs);
        }));
    };
};
var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldl(foldableList)(function (b) {
            return function (a) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(b)(f(a));
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (op) {
    var go = function ($copy_b) {
        return function ($copy_xs) {
            var $tco_var_b = $copy_b;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(b, xs) {
                var v = step(xs);
                if (v instanceof Nil) {
                    $tco_done = true;
                    return b;
                };
                if (v instanceof Cons) {
                    $tco_var_b = op(b)(v.value0);
                    $copy_xs = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 122, column 7 - line 124, column 40): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_b, $copy_xs);
            };
            return $tco_result;
        };
    };
    return go;
}, function (op) {
    return function (z) {
        return function (xs) {
            var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(cons))(nil);
            return Data_Foldable.foldl(foldableList)(Data_Function.flip(op))(z)(rev(xs));
        };
    };
});
var extendList = new Control_Extend.Extend(function () {
    return functorList;
}, function (f) {
    return function (l) {
        var go = function (a) {
            return function (v) {
                var acc$prime = cons(a)(v.acc);
                return {
                    val: cons(f(acc$prime))(v.val),
                    acc: acc$prime
                };
            };
        };
        var v = step(l);
        if (v instanceof Nil) {
            return nil;
        };
        if (v instanceof Cons) {
            return cons(f(l))((Data_Foldable.foldr(foldableList)(go)({
                val: nil,
                acc: nil
            })(v.value1)).val);
        };
        throw new Error("Failed pattern match at Data.List.Lazy.Types (line 194, column 5 - line 197, column 55): " + [ v.constructor.name ]);
    };
});
var extendNonEmptyList = new Control_Extend.Extend(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        var go = function (a) {
            return function (v1) {
                return {
                    val: cons(f(Data_Lazy.defer(function (v2) {
                        return new Data_NonEmpty.NonEmpty(a, v1.acc);
                    })))(v1.val),
                    acc: cons(a)(v1.acc)
                };
            };
        };
        var v1 = Data_Lazy.force(v);
        return NonEmptyList(Data_Lazy.defer(function (v2) {
            return new Data_NonEmpty.NonEmpty(f(v), (Data_Foldable.foldr(foldableList)(go)({
                val: nil,
                acc: nil
            })(v1.value1)).val);
        }));
    };
});
var foldableNonEmptyList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return Data_Foldable.foldMap(Data_NonEmpty.foldableNonEmpty(foldableList))(dictMonoid)(f)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_Foldable.foldl(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_Foldable.foldr(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
        };
    };
});
var foldableWithIndexList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableList;
}, function (dictMonoid) {
    return function (f) {
        return Data_FoldableWithIndex.foldlWithIndex(foldableWithIndexList)(function (i) {
            return function (acc) {
                return function ($217) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)($217));
                };
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    return function (acc) {
        return function ($218) {
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v) {
                return function (a) {
                    return new Data_Tuple.Tuple(v.value0 + 1 | 0, f(v.value0)(v.value1)(a));
                };
            })(new Data_Tuple.Tuple(0, acc))($218));
        };
    };
}, function (f) {
    return function (b) {
        return function (xs) {
            var v = (function () {
                var rev = Data_Foldable.foldl(foldableList)(function (v1) {
                    return function (a) {
                        return new Data_Tuple.Tuple(v1.value0 + 1 | 0, cons(a)(v1.value1));
                    };
                });
                return rev(new Data_Tuple.Tuple(0, nil))(xs);
            })();
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v1) {
                return function (a) {
                    return new Data_Tuple.Tuple(v1.value0 - 1 | 0, f(v1.value0 - 1 | 0)(a)(v1.value1));
                };
            })(new Data_Tuple.Tuple(v.value0, b))(v.value1));
        };
    };
});
var foldableWithIndexNonEmptyList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableNonEmptyList;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return Data_FoldableWithIndex.foldMapWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(dictMonoid)(function ($219) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($219));
            })(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldlWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($220) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($220));
            })(b)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldrWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($221) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($221));
            })(b)(Data_Lazy.force(v));
        };
    };
});
var functorWithIndexList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorList;
}, function (f) {
    return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
        return function (x) {
            return function (acc) {
                return cons(f(i)(x))(acc);
            };
        };
    })(nil);
});
var functorWithIndexNonEmptyList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        return NonEmptyList(Data_Lazy.defer(function (v1) {
            return Data_FunctorWithIndex.mapWithIndex(Data_NonEmpty.functorWithIndex(functorWithIndexList))(function ($222) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($222));
            })(Data_Lazy.force(v));
        }));
    };
});
var toList = function (v) {
    return Control_Lazy.defer(lazyList)(function (v1) {
        var v2 = Data_Lazy.force(v);
        return cons(v2.value0)(v2.value1);
    });
};
var semigroupNonEmptyList = new Data_Semigroup.Semigroup(function (v) {
    return function (as$prime) {
        var v1 = Data_Lazy.force(v);
        return Data_Lazy.defer(function (v2) {
            return new Data_NonEmpty.NonEmpty(v1.value0, Data_Semigroup.append(semigroupList)(v1.value1)(toList(as$prime)));
        });
    };
});
var traversableList = new Data_Traversable.Traversable(function () {
    return foldableList;
}, function () {
    return functorList;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApplicative) {
    return function (f) {
        return Data_Foldable.foldr(foldableList)(function (a) {
            return function (b) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(a)))(b);
            };
        })(Control_Applicative.pure(dictApplicative)(nil));
    };
});
var traversableNonEmptyList = new Data_Traversable.Traversable(function () {
    return foldableNonEmptyList;
}, function () {
    return functorNonEmptyList;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
            return NonEmptyList(Data_Lazy.defer(function (v1) {
                return xxs;
            }));
        })(Data_Traversable.sequence(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(Data_Lazy.force(v)));
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                return NonEmptyList(Data_Lazy.defer(function (v1) {
                    return xxs;
                }));
            })(Data_Traversable.traverse(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(f)(Data_Lazy.force(v)));
        };
    };
});
var traversableWithIndexList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexList;
}, function () {
    return functorWithIndexList;
}, function () {
    return traversableList;
}, function (dictApplicative) {
    return function (f) {
        return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
            return function (a) {
                return function (b) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(i)(a)))(b);
                };
            };
        })(Control_Applicative.pure(dictApplicative)(nil));
    };
});
var traversableWithIndexNonEmptyList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexNonEmptyList;
}, function () {
    return functorWithIndexNonEmptyList;
}, function () {
    return traversableNonEmptyList;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                return NonEmptyList(Data_Lazy.defer(function (v1) {
                    return xxs;
                }));
            })(Data_TraversableWithIndex.traverseWithIndex(Data_NonEmpty.traversableWithIndexNonEmpty(traversableWithIndexList))(dictApplicative)(function ($223) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($223));
            })(Data_Lazy.force(v)));
        };
    };
});
var unfoldable1List = new Data_Unfoldable1.Unfoldable1((function () {
    var go = function (f) {
        return function (b) {
            return Control_Lazy.defer(lazyList)(function (v) {
                var v1 = f(b);
                if (v1.value1 instanceof Data_Maybe.Just) {
                    return cons(v1.value0)(go(f)(v1.value1.value0));
                };
                if (v1.value1 instanceof Data_Maybe.Nothing) {
                    return cons(v1.value0)(nil);
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 146, column 28 - line 148, column 33): " + [ v1.constructor.name ]);
            });
        };
    };
    return go;
})());
var unfoldableList = new Data_Unfoldable.Unfoldable(function () {
    return unfoldable1List;
}, (function () {
    var go = function (f) {
        return function (b) {
            return Control_Lazy.defer(lazyList)(function (v) {
                var v1 = f(b);
                if (v1 instanceof Data_Maybe.Nothing) {
                    return nil;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return cons(v1.value0.value0)(go(f)(v1.value0.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 152, column 28 - line 154, column 39): " + [ v1.constructor.name ]);
            });
        };
    };
    return go;
})());
var unfoldable1NonEmptyList = new Data_Unfoldable1.Unfoldable1(function (f) {
    return function (b) {
        return NonEmptyList(Data_Lazy.defer(function (v) {
            return Data_Unfoldable1.unfoldr1(Data_NonEmpty.unfoldable1NonEmpty(unfoldableList))(f)(b);
        }));
    };
});
var comonadNonEmptyList = new Control_Comonad.Comonad(function () {
    return extendNonEmptyList;
}, function (v) {
    return Data_NonEmpty.head(Data_Lazy.force(v));
});
var monadList = new Control_Monad.Monad(function () {
    return applicativeList;
}, function () {
    return bindList;
});
var bindList = new Control_Bind.Bind(function () {
    return applyList;
}, function (xs) {
    return function (f) {
        var go = function (v) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return step(Data_Semigroup.append(semigroupList)(f(v.value0))(Control_Bind.bind(bindList)(v.value1)(f)));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 175, column 5 - line 175, column 17): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var applyList = new Control_Apply.Apply(function () {
    return functorList;
}, Control_Monad.ap(monadList));
var applicativeList = new Control_Applicative.Applicative(function () {
    return applyList;
}, function (a) {
    return cons(a)(nil);
});
var applyNonEmptyList = new Control_Apply.Apply(function () {
    return functorNonEmptyList;
}, function (v) {
    return function (v1) {
        var v2 = Data_Lazy.force(v1);
        var v3 = Data_Lazy.force(v);
        return Data_Lazy.defer(function (v4) {
            return new Data_NonEmpty.NonEmpty(v3.value0(v2.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v3.value1)(cons(v2.value0)(nil)))(Control_Apply.apply(applyList)(cons(v3.value0)(v3.value1))(v2.value1)));
        });
    };
});
var bindNonEmptyList = new Control_Bind.Bind(function () {
    return applyNonEmptyList;
}, function (v) {
    return function (f) {
        var v1 = Data_Lazy.force(v);
        var v2 = Data_Lazy.force(Data_Newtype.unwrap(newtypeNonEmptyList)(f(v1.value0)));
        return Data_Lazy.defer(function (v3) {
            return new Data_NonEmpty.NonEmpty(v2.value0, Data_Semigroup.append(semigroupList)(v2.value1)(Control_Bind.bind(bindList)(v1.value1)(function ($224) {
                return toList(f($224));
            })));
        });
    };
});
var altNonEmptyList = new Control_Alt.Alt(function () {
    return functorNonEmptyList;
}, Data_Semigroup.append(semigroupNonEmptyList));
var altList = new Control_Alt.Alt(function () {
    return functorList;
}, Data_Semigroup.append(semigroupList));
var plusList = new Control_Plus.Plus(function () {
    return altList;
}, nil);
var alternativeList = new Control_Alternative.Alternative(function () {
    return applicativeList;
}, function () {
    return plusList;
});
var monadZeroList = new Control_MonadZero.MonadZero(function () {
    return alternativeList;
}, function () {
    return monadList;
});
var monadPlusList = new Control_MonadPlus.MonadPlus(function () {
    return monadZeroList;
});
var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
    return applyNonEmptyList;
}, function (a) {
    return Data_Lazy.defer(function (v) {
        return Data_NonEmpty.singleton(plusList)(a);
    });
});
var monadNonEmptyList = new Control_Monad.Monad(function () {
    return applicativeNonEmptyList;
}, function () {
    return bindNonEmptyList;
});
module.exports = {
    List: List,
    Nil: Nil,
    Cons: Cons,
    step: step,
    nil: nil,
    cons: cons,
    NonEmptyList: NonEmptyList,
    toList: toList,
    newtypeList: newtypeList,
    showList: showList,
    eqList: eqList,
    eq1List: eq1List,
    ordList: ordList,
    ord1List: ord1List,
    lazyList: lazyList,
    semigroupList: semigroupList,
    monoidList: monoidList,
    functorList: functorList,
    functorWithIndexList: functorWithIndexList,
    foldableList: foldableList,
    foldableWithIndexList: foldableWithIndexList,
    unfoldable1List: unfoldable1List,
    unfoldableList: unfoldableList,
    traversableList: traversableList,
    traversableWithIndexList: traversableWithIndexList,
    applyList: applyList,
    applicativeList: applicativeList,
    bindList: bindList,
    monadList: monadList,
    altList: altList,
    plusList: plusList,
    alternativeList: alternativeList,
    monadZeroList: monadZeroList,
    monadPlusList: monadPlusList,
    extendList: extendList,
    newtypeNonEmptyList: newtypeNonEmptyList,
    eqNonEmptyList: eqNonEmptyList,
    ordNonEmptyList: ordNonEmptyList,
    showNonEmptyList: showNonEmptyList,
    functorNonEmptyList: functorNonEmptyList,
    applyNonEmptyList: applyNonEmptyList,
    applicativeNonEmptyList: applicativeNonEmptyList,
    bindNonEmptyList: bindNonEmptyList,
    monadNonEmptyList: monadNonEmptyList,
    altNonEmptyList: altNonEmptyList,
    extendNonEmptyList: extendNonEmptyList,
    comonadNonEmptyList: comonadNonEmptyList,
    semigroupNonEmptyList: semigroupNonEmptyList,
    foldableNonEmptyList: foldableNonEmptyList,
    traversableNonEmptyList: traversableNonEmptyList,
    unfoldable1NonEmptyList: unfoldable1NonEmptyList,
    functorWithIndexNonEmptyList: functorWithIndexNonEmptyList,
    foldableWithIndexNonEmptyList: foldableWithIndexNonEmptyList,
    traversableWithIndexNonEmptyList: traversableWithIndexNonEmptyList
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Comonad/index.js":13,"../Control.Extend/index.js":15,"../Control.Lazy/index.js":16,"../Control.Monad/index.js":27,"../Control.MonadPlus/index.js":28,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.Lazy/index.js":71,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.NonEmpty/index.js":88,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"../Data.Unfoldable1/index.js":131}],73:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_List_Lazy_Types = require("../Data.List.Lazy.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Pattern = function (x) {
    return x;
};
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            var go = function (v) {
                return function (v1) {
                    if (v instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v instanceof Data_List_Lazy_Types.Cons && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(f(v.value0)(v1.value0), zipWith(f)(v.value1)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 693, column 3 - line 693, column 35): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Control_Apply.apply(Data_Lazy.applyLazy)(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs)))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(ys));
        };
    };
};
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_List_Lazy_Types.traversableList)(dictApplicative)(zipWith(f)(xs)(ys));
            };
        };
    };
};
var zip = zipWith(Data_Tuple.Tuple.create);
var updateAt = function (n) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(x, v1.value1);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, updateAt(v - 1 | 0)(x)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 367, column 3 - line 367, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var unzip = Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(function (v) {
    return function (v1) {
        return new Data_Tuple.Tuple(Data_List_Lazy_Types.cons(v.value0)(v1.value0), Data_List_Lazy_Types.cons(v.value1)(v1.value1));
    };
})(new Data_Tuple.Tuple(Data_List_Lazy_Types.nil, Data_List_Lazy_Types.nil));
var uncons = function (xs) {
    var v = Data_List_Lazy_Types.step(xs);
    if (v instanceof Data_List_Lazy_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Lazy_Types.Cons) {
        return new Data_Maybe.Just({
            head: v.value0,
            tail: v.value1
        });
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 285, column 13 - line 287, column 44): " + [ v.constructor.name ]);
};
var toUnfoldable = function (dictUnfoldable) {
    return Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(uncons(xs));
    });
};
var takeWhile = function (p) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
            return new Data_List_Lazy_Types.Cons(v.value0, takeWhile(p)(v.value1));
        };
        return Data_List_Lazy_Types.Nil.value;
    };
    return function ($249) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($249)));
    };
};
var take = function (n) {
    var go = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                return new Data_List_Lazy_Types.Cons(v1.value0, take(v - 1 | 0)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 517, column 3 - line 517, column 32): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var $124 = n <= 0;
    if ($124) {
        return Data_Function["const"](Data_List_Lazy_Types.nil);
    };
    return function ($250) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($250)));
    };
};
var tail = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.tail;
    })(uncons(xs));
};
var stripPrefix = function (dictEq) {
    return function (v) {
        return function (s) {
            var go = function (prefix) {
                return function (input) {
                    var v1 = Data_List_Lazy_Types.step(prefix);
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Done(input));
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = Data_List_Lazy_Types.step(input);
                        if (v2 instanceof Data_List_Lazy_Types.Cons && Data_Eq.eq(dictEq)(v1.value0)(v2.value0)) {
                            return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Loop({
                                a: v1.value1,
                                b: v2.value1
                            }));
                        };
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 499, column 21 - line 503, column 19): " + [ v1.constructor.name ]);
                };
            };
            return Control_Monad_Rec_Class.tailRecM2(Control_Monad_Rec_Class.monadRecMaybe)(go)(v)(s);
        };
    };
};
var span = function (p) {
    return function (xs) {
        var v = uncons(xs);
        if (v instanceof Data_Maybe.Just && p(v.value0.head)) {
            var v1 = span(p)(v.value0.tail);
            return {
                init: Data_List_Lazy_Types.cons(v.value0.head)(v1.init),
                rest: v1.rest
            };
        };
        return {
            init: Data_List_Lazy_Types.nil,
            rest: xs
        };
    };
};
var snoc = function (xs) {
    return function (x) {
        return Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.cons(x)(Data_List_Lazy_Types.nil))(xs);
    };
};
var singleton = function (a) {
    return Data_List_Lazy_Types.cons(a)(Data_List_Lazy_Types.nil);
};
var showPattern = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Pattern " + (Data_Show.show(Data_List_Lazy_Types.showList(dictShow))(v) + ")");
    });
};
var scanrLazy = function (f) {
    return function (acc) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var acc$prime = f(v.value0)(acc);
                    return Data_List_Lazy_Types.Cons.create(acc$prime)(scanrLazy(f)(acc$prime)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 764, column 5 - line 764, column 27): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var reverse = function (xs) {
    return Control_Lazy.defer(Data_List_Lazy_Types.lazyList)(function (v) {
        return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(Data_List_Lazy_Types.cons))(Data_List_Lazy_Types.nil)(xs);
    });
};
var replicateM = function (dictMonad) {
    return function (n) {
        return function (m) {
            if (n < 1) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Control_Bind.bind(dictMonad.Bind1())(m)(function (v) {
                    return Control_Bind.bind(dictMonad.Bind1())(replicateM(dictMonad)(n - 1 | 0)(m))(function (v1) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.cons(v)(v1));
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 161, column 1 - line 161, column 62): " + [ n.constructor.name, m.constructor.name ]);
        };
    };
};
var repeat = function (x) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
        return Data_List_Lazy_Types.cons(x)(xs);
    });
};
var replicate = function (i) {
    return function (xs) {
        return take(i)(repeat(xs));
    };
};
var range = function (start) {
    return function (end) {
        if (start > end) {
            var g = function (x) {
                if (x >= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x - 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 148, column 13 - line 149, column 38): " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(g)(start);
        };
        if (Data_Boolean.otherwise) {
            var f = function (x) {
                if (x <= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x + 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 153, column 5 - line 154, column 30): " + [ x.constructor.name ]);
            };
            return Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList)(f)(start);
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 145, column 1 - line 145, column 32): " + [ start.constructor.name, end.constructor.name ]);
    };
};
var partition = function (f) {
    var go = function (x) {
        return function (v) {
            var $154 = f(x);
            if ($154) {
                return {
                    yes: Data_List_Lazy_Types.cons(x)(v.yes),
                    no: v.no
                };
            };
            return {
                yes: v.yes,
                no: Data_List_Lazy_Types.cons(x)(v.no)
            };
        };
    };
    return Data_Foldable.foldr(Data_List_Lazy_Types.foldableList)(go)({
        yes: Data_List_Lazy_Types.nil,
        no: Data_List_Lazy_Types.nil
    });
};
var $$null = function ($251) {
    return Data_Maybe.isNothing(uncons($251));
};
var newtypePattern = new Data_Newtype.Newtype(function (n) {
    return n;
}, Pattern);
var mapMaybe = function (f) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                var v1 = f(v.value0);
                if (v1 instanceof Data_Maybe.Nothing) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v1.value0, mapMaybe(f)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 460, column 5 - line 462, column 39): " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 458, column 3 - line 458, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($252) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($252)));
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Data_List_Lazy_Types.cons)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(some(dictAlternative)(dictLazy)(v))(Control_Applicative.pure(dictAlternative.Applicative0())(Data_List_Lazy_Types.nil));
        };
    };
};
var length = Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(function (l) {
    return function (v) {
        return l + 1 | 0;
    };
})(0);
var last = (function () {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if ($$null(v.value1)) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($253) {
        return go(Data_List_Lazy_Types.step($253));
    };
})();
var iterate = function (f) {
    return function (x) {
        return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (xs) {
            return Data_List_Lazy_Types.cons(x)(Data_Functor.map(Data_List_Lazy_Types.functorList)(f)(xs));
        });
    };
};
var insertAt = function (v) {
    return function (x) {
        return function (xs) {
            if (v === 0) {
                return Data_List_Lazy_Types.cons(x)(xs);
            };
            var go = function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, insertAt(v - 1 | 0)(x)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 340, column 3 - line 340, column 22): " + [ v1.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var init = (function () {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons) {
            if ($$null(v.value1)) {
                return new Data_Maybe.Just(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(Data_List_Lazy_Types.cons(v.value0))(go(Data_List_Lazy_Types.step(v.value1)));
            };
        };
        return Data_Maybe.Nothing.value;
    };
    return function ($254) {
        return go(Data_List_Lazy_Types.step($254));
    };
})();
var index = function (xs) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons && v1 === 0) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = Data_List_Lazy_Types.step(v.value1);
                    $copy_v1 = v1 - 1 | 0;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 299, column 3 - line 299, column 21): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Lazy_Types.step(xs));
};
var head = function (xs) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.head;
    })(uncons(xs));
};
var transpose = function (xs) {
    var v = uncons(xs);
    if (v instanceof Data_Maybe.Nothing) {
        return xs;
    };
    if (v instanceof Data_Maybe.Just) {
        var v1 = uncons(v.value0.head);
        if (v1 instanceof Data_Maybe.Nothing) {
            return transpose(v.value0.tail);
        };
        if (v1 instanceof Data_Maybe.Just) {
            return Data_List_Lazy_Types.cons(Data_List_Lazy_Types.cons(v1.value0.head)(mapMaybe(head)(v.value0.tail)))(transpose(Data_List_Lazy_Types.cons(v1.value0.tail)(mapMaybe(tail)(v.value0.tail))));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 734, column 7 - line 738, column 72): " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 730, column 3 - line 738, column 72): " + [ v.constructor.name ]);
};
var groupBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            var v1 = span(eq(v.value0))(v.value1);
            return new Data_List_Lazy_Types.Cons(Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(v.value0, v1.init);
            }), groupBy(eq)(v1.rest));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 588, column 3 - line 588, column 15): " + [ v.constructor.name ]);
    };
    return function ($255) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($255)));
    };
};
var group = function (dictEq) {
    return groupBy(Data_Eq.eq(dictEq));
};
var fromStep = function ($256) {
    return Data_List_Lazy_Types.List(Control_Applicative.pure(Data_Lazy.applicativeLazy)($256));
};
var insertBy = function (cmp) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var v1 = cmp(x)(v.value0);
                    if (v1 instanceof Data_Ordering.GT) {
                        return new Data_List_Lazy_Types.Cons(v.value0, insertBy(cmp)(x)(v.value1));
                    };
                    return new Data_List_Lazy_Types.Cons(x, fromStep(v));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 235, column 3 - line 235, column 22): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var fromFoldable = function (dictFoldable) {
    return Data_Foldable.foldr(dictFoldable)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.nil);
};
var foldrLazy = function (dictLazy) {
    return function (op) {
        return function (z) {
            var go = function (xs) {
                var v = Data_List_Lazy_Types.step(xs);
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    return Control_Lazy.defer(dictLazy)(function (v1) {
                        return op(v.value0)(go(v.value1));
                    });
                };
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return z;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 756, column 13 - line 758, column 15): " + [ v.constructor.name ]);
            };
            return go;
        };
    };
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (a) {
            return function (xs) {
                var v = uncons(xs);
                if (v instanceof Data_Maybe.Nothing) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(a);
                };
                if (v instanceof Data_Maybe.Just) {
                    return Control_Bind.bind(dictMonad.Bind1())(f(a)(v.value0.head))(function (a$prime) {
                        return foldM(dictMonad)(f)(a$prime)(v.value0.tail);
                    });
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 747, column 5 - line 750, column 54): " + [ v.constructor.name ]);
            };
        };
    };
};
var findIndex = function (fn) {
    var go = function (n) {
        return function (list) {
            return Control_Bind.bind(Data_Maybe.bindMaybe)(uncons(list))(function (v) {
                var $207 = fn(v.head);
                if ($207) {
                    return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(n);
                };
                return go(n + 1 | 0)(v.tail);
            });
        };
    };
    return go(0);
};
var findLastIndex = function (fn) {
    return function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
            return (length(xs) - 1 | 0) - v | 0;
        })(findIndex(fn)(reverse(xs)));
    };
};
var filterM = function (dictMonad) {
    return function (p) {
        return function (list) {
            var v = uncons(list);
            if (v instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Lazy_Types.nil);
            };
            if (v instanceof Data_Maybe.Just) {
                return Control_Bind.bind(dictMonad.Bind1())(p(v.value0.head))(function (v1) {
                    return Control_Bind.bind(dictMonad.Bind1())(filterM(dictMonad)(p)(v.value0.tail))(function (v2) {
                        return Control_Applicative.pure(dictMonad.Applicative0())((function () {
                            if (v1) {
                                return Data_List_Lazy_Types.cons(v.value0.head)(v2);
                            };
                            return v2;
                        })());
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 443, column 5 - line 448, column 48): " + [ v.constructor.name ]);
        };
    };
};
var filter = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if (p(v.value0)) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v.value0, filter(p)(v.value1));
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 428, column 3 - line 428, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($257) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($257)));
    };
};
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return filter(function (x) {
                return Data_Foldable.any(Data_List_Lazy_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean)(eq(x))(ys);
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var nubBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            return new Data_List_Lazy_Types.Cons(v.value0, nubBy(eq)(filter(function (y) {
                return !eq(v.value0)(y);
            })(v.value1)));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 621, column 3 - line 621, column 15): " + [ v.constructor.name ]);
    };
    return function ($258) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($258)));
    };
};
var nub = function (dictEq) {
    return nubBy(Data_Eq.eq(dictEq));
};
var eqPattern = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(Data_List_Lazy_Types.eqList(dictEq))(x)(y);
        };
    });
};
var ordPattern = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqPattern(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(Data_List_Lazy_Types.ordList(dictOrd))(x)(y);
        };
    });
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
                $copy_v = Data_List_Lazy_Types.step(v.value1);
                return;
            };
            $tco_done = true;
            return fromStep(v);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($259) {
        return go(Data_List_Lazy_Types.step($259));
    };
};
var drop = function (n) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v === 0) {
                    $tco_done = true;
                    return v1;
                };
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = v - 1 | 0;
                    $copy_v1 = Data_List_Lazy_Types.step(v1.value1);
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 536, column 3 - line 536, column 15): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return function ($260) {
        return Data_List_Lazy_Types.List(Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)($260)));
    };
};
var slice = function (start) {
    return function (end) {
        return function (xs) {
            return take(end - start | 0)(drop(start)(xs));
        };
    };
};
var deleteBy = function (eq) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    if (eq(x)(v.value0)) {
                        return Data_List_Lazy_Types.step(v.value1);
                    };
                    if (Data_Boolean.otherwise) {
                        return new Data_List_Lazy_Types.Cons(v.value0, deleteBy(eq)(x)(v.value1));
                    };
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 650, column 3 - line 650, column 15): " + [ v.constructor.name ]);
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip(deleteBy(eq)))(nubBy(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var deleteAt = function (n) {
    return function (xs) {
        var go = function (v) {
            return function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                    return Data_List_Lazy_Types.step(v1.value1);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, deleteAt(v - 1 | 0)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 353, column 3 - line 353, column 17): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
    };
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return Data_Foldable.foldl(Data_List_Lazy_Types.foldableList)(Data_Function.flip($$delete(dictEq)));
};
var cycle = function (xs) {
    return Control_Lazy.fix(Data_List_Lazy_Types.lazyList)(function (ys) {
        return Data_Semigroup.append(Data_List_Lazy_Types.semigroupList)(xs)(ys);
    });
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Lazy_Types.bindList));
var concat = function (v) {
    return Control_Bind.bind(Data_List_Lazy_Types.bindList)(v)(Control_Category.identity(Control_Category.categoryFn));
};
var catMaybes = mapMaybe(Control_Category.identity(Control_Category.categoryFn));
var alterAt = function (n) {
    return function (f) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = f(v1.value0);
                        if (v2 instanceof Data_Maybe.Nothing) {
                            return Data_List_Lazy_Types.step(v1.value1);
                        };
                        if (v2 instanceof Data_Maybe.Just) {
                            return new Data_List_Lazy_Types.Cons(v2.value0, v1.value1);
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy (line 394, column 22 - line 396, column 26): " + [ v2.constructor.name ]);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, alterAt(v - 1 | 0)(f)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 393, column 3 - line 393, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Functor.map(Data_Lazy.functorLazy)(go(n))(Data_Newtype.unwrap(Data_List_Lazy_Types.newtypeList)(xs));
        };
    };
};
var modifyAt = function (n) {
    return function (f) {
        return alterAt(n)(function ($261) {
            return Data_Maybe.Just.create(f($261));
        });
    };
};
module.exports = {
    toUnfoldable: toUnfoldable,
    fromFoldable: fromFoldable,
    singleton: singleton,
    range: range,
    replicate: replicate,
    replicateM: replicateM,
    some: some,
    many: many,
    repeat: repeat,
    iterate: iterate,
    cycle: cycle,
    "null": $$null,
    length: length,
    snoc: snoc,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    index: index,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    modifyAt: modifyAt,
    alterAt: alterAt,
    reverse: reverse,
    concat: concat,
    concatMap: concatMap,
    filter: filter,
    filterM: filterM,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    Pattern: Pattern,
    stripPrefix: stripPrefix,
    slice: slice,
    take: take,
    takeWhile: takeWhile,
    drop: drop,
    dropWhile: dropWhile,
    span: span,
    group: group,
    groupBy: groupBy,
    partition: partition,
    nub: nub,
    nubBy: nubBy,
    union: union,
    unionBy: unionBy,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    intersect: intersect,
    intersectBy: intersectBy,
    zipWith: zipWith,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    transpose: transpose,
    foldM: foldM,
    foldrLazy: foldrLazy,
    scanrLazy: scanrLazy,
    eqPattern: eqPattern,
    ordPattern: ordPattern,
    newtypePattern: newtypePattern,
    showPattern: showPattern
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Lazy/index.js":16,"../Control.Monad.Rec.Class/index.js":21,"../Data.Boolean/index.js":45,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Lazy/index.js":71,"../Data.List.Lazy.Types/index.js":72,"../Data.Maybe/index.js":79,"../Data.Newtype/index.js":87,"../Data.NonEmpty/index.js":88,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129}],74:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var toList = function (v) {
    return new Cons(v.value0, v.value1);
};
var newtypeNonEmptyList = new Data_Newtype.Newtype(function (n) {
    return n;
}, NonEmptyList);
var nelCons = function (a) {
    return function (v) {
        return new Data_NonEmpty.NonEmpty(a, new Cons(v.value0, v.value1));
    };
};
var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldl(foldableList)(function (acc) {
            return function ($174) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f($174));
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    var go = function ($copy_b) {
        return function ($copy_v) {
            var $tco_var_b = $copy_b;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(b, v) {
                if (v instanceof Nil) {
                    $tco_done = true;
                    return b;
                };
                if (v instanceof Cons) {
                    $tco_var_b = f(b)(v.value0);
                    $copy_v = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Types (line 81, column 12 - line 83, column 30): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_b, $copy_v);
            };
            return $tco_result;
        };
    };
    return go;
}, function (f) {
    return function (b) {
        var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value);
        return function ($175) {
            return Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b)(rev($175));
        };
    };
});
var foldableNonEmptyList = Data_NonEmpty.foldableNonEmpty(foldableList);
var foldableWithIndexList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableList;
}, function (dictMonoid) {
    return function (f) {
        return Data_FoldableWithIndex.foldlWithIndex(foldableWithIndexList)(function (i) {
            return function (acc) {
                return function ($176) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)($176));
                };
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    return function (acc) {
        return function ($177) {
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v) {
                return function (a) {
                    return new Data_Tuple.Tuple(v.value0 + 1 | 0, f(v.value0)(v.value1)(a));
                };
            })(new Data_Tuple.Tuple(0, acc))($177));
        };
    };
}, function (f) {
    return function (b) {
        return function (xs) {
            var v = (function () {
                var rev = Data_Foldable.foldl(foldableList)(function (v1) {
                    return function (a) {
                        return new Data_Tuple.Tuple(v1.value0 + 1 | 0, new Cons(a, v1.value1));
                    };
                });
                return rev(new Data_Tuple.Tuple(0, Nil.value))(xs);
            })();
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v1) {
                return function (a) {
                    return new Data_Tuple.Tuple(v1.value0 - 1 | 0, f(v1.value0 - 1 | 0)(a)(v1.value1));
                };
            })(new Data_Tuple.Tuple(v.value0, b))(v.value1));
        };
    };
});
var foldableWithIndexNonEmptyList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableNonEmptyList;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return Data_FoldableWithIndex.foldMapWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(dictMonoid)(function ($178) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($178));
            })(v);
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldlWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($179) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($179));
            })(b)(v);
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldrWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($180) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($180));
            })(b)(v);
        };
    };
});
var functorList = new Data_Functor.Functor(function (f) {
    return Data_Foldable.foldr(foldableList)(function (x) {
        return function (acc) {
            return new Cons(f(x), acc);
        };
    })(Nil.value);
});
var functorNonEmptyList = Data_NonEmpty.functorNonEmpty(functorList);
var functorWithIndexList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorList;
}, function (f) {
    return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
        return function (x) {
            return function (acc) {
                return new Cons(f(i)(x), acc);
            };
        };
    })(Nil.value);
});
var functorWithIndexNonEmptyList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorNonEmptyList;
}, function (fn) {
    return function (v) {
        return NonEmptyList(Data_FunctorWithIndex.mapWithIndex(Data_NonEmpty.functorWithIndex(functorWithIndexList))(function ($181) {
            return fn(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($181));
        })(v));
    };
});
var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
    return function (ys) {
        return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
    };
});
var monoidList = new Data_Monoid.Monoid(function () {
    return semigroupList;
}, Nil.value);
var semigroupNonEmptyList = new Data_Semigroup.Semigroup(function (v) {
    return function (as$prime) {
        return new Data_NonEmpty.NonEmpty(v.value0, Data_Semigroup.append(semigroupList)(v.value1)(toList(as$prime)));
    };
});
var showList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        if (v instanceof Nil) {
            return "Nil";
        };
        return "(" + (Data_Foldable.intercalate(foldableList)(Data_Monoid.monoidString)(" : ")(Data_Functor.map(functorList)(Data_Show.show(dictShow))(v)) + " : Nil)");
    });
};
var showNonEmptyList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyList " + (Data_Show.show(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow)))(v) + ")");
    });
};
var traversableList = new Data_Traversable.Traversable(function () {
    return foldableList;
}, function () {
    return functorList;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApplicative) {
    return function (f) {
        return function ($182) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value))(Data_Foldable.foldl(foldableList)(function (acc) {
                return function ($183) {
                    return Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc)(f($183));
                };
            })(Control_Applicative.pure(dictApplicative)(Nil.value))($182));
        };
    };
});
var traversableNonEmptyList = Data_NonEmpty.traversableNonEmpty(traversableList);
var traversableWithIndexList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexList;
}, function () {
    return functorWithIndexList;
}, function () {
    return traversableList;
}, function (dictApplicative) {
    return function (f) {
        var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value);
        return function ($184) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(rev)(Data_FoldableWithIndex.foldlWithIndex(foldableWithIndexList)(function (i) {
                return function (acc) {
                    return function ($185) {
                        return Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc)(f(i)($185));
                    };
                };
            })(Control_Applicative.pure(dictApplicative)(Nil.value))($184));
        };
    };
});
var traversableWithIndexNonEmptyList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexNonEmptyList;
}, function () {
    return functorWithIndexNonEmptyList;
}, function () {
    return traversableNonEmptyList;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(NonEmptyList)(Data_TraversableWithIndex.traverseWithIndex(Data_NonEmpty.traversableWithIndexNonEmpty(traversableWithIndexList))(dictApplicative)(function ($186) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($186));
            })(v));
        };
    };
});
var unfoldable1List = new Data_Unfoldable1.Unfoldable1(function (f) {
    return function (b) {
        var go = function ($copy_source) {
            return function ($copy_memo) {
                var $tco_var_source = $copy_source;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(source, memo) {
                    var v = f(source);
                    if (v.value1 instanceof Data_Maybe.Just) {
                        $tco_var_source = v.value1.value0;
                        $copy_memo = new Cons(v.value0, memo);
                        return;
                    };
                    if (v.value1 instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value)(new Cons(v.value0, memo));
                    };
                    throw new Error("Failed pattern match at Data.List.Types (line 105, column 22 - line 107, column 61): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_source, $copy_memo);
                };
                return $tco_result;
            };
        };
        return go(b)(Nil.value);
    };
});
var unfoldableList = new Data_Unfoldable.Unfoldable(function () {
    return unfoldable1List;
}, function (f) {
    return function (b) {
        var go = function ($copy_source) {
            return function ($copy_memo) {
                var $tco_var_source = $copy_source;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(source, memo) {
                    var v = f(source);
                    if (v instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value)(memo);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        $tco_var_source = v.value0.value1;
                        $copy_memo = new Cons(v.value0.value0, memo);
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List.Types (line 112, column 22 - line 114, column 52): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_source, $copy_memo);
                };
                return $tco_result;
            };
        };
        return go(b)(Nil.value);
    };
});
var unfoldable1NonEmptyList = Data_NonEmpty.unfoldable1NonEmpty(unfoldableList);
var foldable1NonEmptyList = Data_NonEmpty.foldable1NonEmpty(foldableList);
var extendNonEmptyList = new Control_Extend.Extend(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        var go = function (a) {
            return function (v1) {
                return {
                    val: new Cons(f(new Data_NonEmpty.NonEmpty(a, v1.acc)), v1.val),
                    acc: new Cons(a, v1.acc)
                };
            };
        };
        return new Data_NonEmpty.NonEmpty(f(v), (Data_Foldable.foldr(foldableList)(go)({
            val: Nil.value,
            acc: Nil.value
        })(v.value1)).val);
    };
});
var extendList = new Control_Extend.Extend(function () {
    return functorList;
}, function (f) {
    return function (v) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            var go = function (a$prime) {
                return function (v1) {
                    var acc$prime = new Cons(a$prime, v1.acc);
                    return {
                        val: new Cons(f(acc$prime), v1.val),
                        acc: acc$prime
                    };
                };
            };
            return new Cons(f(v), (Data_Foldable.foldr(foldableList)(go)({
                val: Nil.value,
                acc: Nil.value
            })(v.value1)).val);
        };
        throw new Error("Failed pattern match at Data.List.Types (line 152, column 1 - line 152, column 35): " + [ f.constructor.name, v.constructor.name ]);
    };
});
var eq1List = new Data_Eq.Eq1(function (dictEq) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    return function ($copy_v2) {
                        var $tco_var_v = $copy_v;
                        var $tco_var_v1 = $copy_v1;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1, v2) {
                            if (!v2) {
                                $tco_done = true;
                                return false;
                            };
                            if (v instanceof Nil && v1 instanceof Nil) {
                                $tco_done = true;
                                return v2;
                            };
                            if (v instanceof Cons && v1 instanceof Cons) {
                                $tco_var_v = v.value1;
                                $tco_var_v1 = v1.value1;
                                $copy_v2 = v2 && Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                                return;
                            };
                            $tco_done = true;
                            return false;
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                        };
                        return $tco_result;
                    };
                };
            };
            return go(xs)(ys)(true);
        };
    };
});
var eqList = function (dictEq) {
    return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
};
var eqNonEmptyList = function (dictEq) {
    return Data_NonEmpty.eqNonEmpty(eq1List)(dictEq);
};
var ord1List = new Data_Ord.Ord1(function () {
    return eq1List;
}, function (dictOrd) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.EQ.value;
                        };
                        if (v instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.LT.value;
                        };
                        if (v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.GT.value;
                        };
                        if (v instanceof Cons && v1 instanceof Cons) {
                            var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
                            if (v2 instanceof Data_Ordering.EQ) {
                                $tco_var_v = v.value1;
                                $copy_v1 = v1.value1;
                                return;
                            };
                            $tco_done = true;
                            return v2;
                        };
                        throw new Error("Failed pattern match at Data.List.Types (line 55, column 5 - line 55, column 20): " + [ v.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(xs)(ys);
        };
    };
});
var ordList = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqList(dictOrd.Eq0());
    }, Data_Ord.compare1(ord1List)(dictOrd));
};
var ordNonEmptyList = function (dictOrd) {
    return Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd);
};
var comonadNonEmptyList = new Control_Comonad.Comonad(function () {
    return extendNonEmptyList;
}, function (v) {
    return v.value0;
});
var applyList = new Control_Apply.Apply(function () {
    return functorList;
}, function (v) {
    return function (v1) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.List.Types (line 127, column 1 - line 127, column 33): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var applyNonEmptyList = new Control_Apply.Apply(function () {
    return functorNonEmptyList;
}, function (v) {
    return function (v1) {
        return new Data_NonEmpty.NonEmpty(v.value0(v1.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v.value1)(new Cons(v1.value0, Nil.value)))(Control_Apply.apply(applyList)(new Cons(v.value0, v.value1))(v1.value1)));
    };
});
var bindList = new Control_Bind.Bind(function () {
    return applyList;
}, function (v) {
    return function (v1) {
        if (v instanceof Nil) {
            return Nil.value;
        };
        if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(v1(v.value0))(Control_Bind.bind(bindList)(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.List.Types (line 134, column 1 - line 134, column 31): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindNonEmptyList = new Control_Bind.Bind(function () {
    return applyNonEmptyList;
}, function (v) {
    return function (f) {
        var v1 = f(v.value0);
        return new Data_NonEmpty.NonEmpty(v1.value0, Data_Semigroup.append(semigroupList)(v1.value1)(Control_Bind.bind(bindList)(v.value1)(function ($187) {
            return toList(f($187));
        })));
    };
});
var applicativeList = new Control_Applicative.Applicative(function () {
    return applyList;
}, function (a) {
    return new Cons(a, Nil.value);
});
var monadList = new Control_Monad.Monad(function () {
    return applicativeList;
}, function () {
    return bindList;
});
var altNonEmptyList = new Control_Alt.Alt(function () {
    return functorNonEmptyList;
}, Data_Semigroup.append(semigroupNonEmptyList));
var altList = new Control_Alt.Alt(function () {
    return functorList;
}, Data_Semigroup.append(semigroupList));
var plusList = new Control_Plus.Plus(function () {
    return altList;
}, Nil.value);
var alternativeList = new Control_Alternative.Alternative(function () {
    return applicativeList;
}, function () {
    return plusList;
});
var monadZeroList = new Control_MonadZero.MonadZero(function () {
    return alternativeList;
}, function () {
    return monadList;
});
var monadPlusList = new Control_MonadPlus.MonadPlus(function () {
    return monadZeroList;
});
var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
    return applyNonEmptyList;
}, function ($188) {
    return NonEmptyList(Data_NonEmpty.singleton(plusList)($188));
});
var monadNonEmptyList = new Control_Monad.Monad(function () {
    return applicativeNonEmptyList;
}, function () {
    return bindNonEmptyList;
});
var traversable1NonEmptyList = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1NonEmptyList;
}, function () {
    return traversableNonEmptyList;
}, function (dictApply) {
    return Data_Semigroup_Traversable.traverse1(traversable1NonEmptyList)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.mapFlipped(dictApply.Functor0())(Data_Foldable.foldl(foldableList)(function (acc) {
                return function ($189) {
                    return Control_Apply.lift2(dictApply)(Data_Function.flip(nelCons))(acc)(f($189));
                };
            })(Data_Functor.map(dictApply.Functor0())(Control_Applicative.pure(applicativeNonEmptyList))(f(v.value0)))(v.value1))(function (v1) {
                return Data_Foldable.foldl(foldableList)(Data_Function.flip(nelCons))(Control_Applicative.pure(applicativeNonEmptyList)(v1.value0))(v1.value1);
            });
        };
    };
});
module.exports = {
    Nil: Nil,
    Cons: Cons,
    NonEmptyList: NonEmptyList,
    toList: toList,
    nelCons: nelCons,
    showList: showList,
    eqList: eqList,
    eq1List: eq1List,
    ordList: ordList,
    ord1List: ord1List,
    semigroupList: semigroupList,
    monoidList: monoidList,
    functorList: functorList,
    functorWithIndexList: functorWithIndexList,
    foldableList: foldableList,
    foldableWithIndexList: foldableWithIndexList,
    unfoldable1List: unfoldable1List,
    unfoldableList: unfoldableList,
    traversableList: traversableList,
    traversableWithIndexList: traversableWithIndexList,
    applyList: applyList,
    applicativeList: applicativeList,
    bindList: bindList,
    monadList: monadList,
    altList: altList,
    plusList: plusList,
    alternativeList: alternativeList,
    monadZeroList: monadZeroList,
    monadPlusList: monadPlusList,
    extendList: extendList,
    newtypeNonEmptyList: newtypeNonEmptyList,
    eqNonEmptyList: eqNonEmptyList,
    ordNonEmptyList: ordNonEmptyList,
    showNonEmptyList: showNonEmptyList,
    functorNonEmptyList: functorNonEmptyList,
    applyNonEmptyList: applyNonEmptyList,
    applicativeNonEmptyList: applicativeNonEmptyList,
    bindNonEmptyList: bindNonEmptyList,
    monadNonEmptyList: monadNonEmptyList,
    altNonEmptyList: altNonEmptyList,
    extendNonEmptyList: extendNonEmptyList,
    comonadNonEmptyList: comonadNonEmptyList,
    semigroupNonEmptyList: semigroupNonEmptyList,
    foldableNonEmptyList: foldableNonEmptyList,
    traversableNonEmptyList: traversableNonEmptyList,
    foldable1NonEmptyList: foldable1NonEmptyList,
    unfoldable1NonEmptyList: unfoldable1NonEmptyList,
    functorWithIndexNonEmptyList: functorWithIndexNonEmptyList,
    foldableWithIndexNonEmptyList: foldableWithIndexNonEmptyList,
    traversableWithIndexNonEmptyList: traversableWithIndexNonEmptyList,
    traversable1NonEmptyList: traversable1NonEmptyList
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Comonad/index.js":13,"../Control.Extend/index.js":15,"../Control.Monad/index.js":27,"../Control.MonadPlus/index.js":28,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.NonEmpty/index.js":88,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup.Traversable/index.js":103,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"../Data.Unfoldable1/index.js":131}],75:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Pattern = function (x) {
    return x;
};
var updateAt = function (v) {
    return function (v1) {
        return function (v2) {
            if (v === 0 && v2 instanceof Data_List_Types.Cons) {
                return new Data_Maybe.Just(new Data_List_Types.Cons(v1, v2.value1));
            };
            if (v2 instanceof Data_List_Types.Cons) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(function (v3) {
                    return new Data_List_Types.Cons(v2.value0, v3);
                })(updateAt(v - 1 | 0)(v1)(v2.value1));
            };
            return Data_Maybe.Nothing.value;
        };
    };
};
var unzip = Data_Foldable.foldr(Data_List_Types.foldableList)(function (v) {
    return function (v1) {
        return new Data_Tuple.Tuple(new Data_List_Types.Cons(v.value0, v1.value0), new Data_List_Types.Cons(v.value1, v1.value1));
    };
})(new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_List_Types.Nil.value));
var uncons = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Types.Cons) {
        return new Data_Maybe.Just({
            head: v.value0,
            tail: v.value1
        });
    };
    throw new Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [ v.constructor.name ]);
};
var toUnfoldable = function (dictUnfoldable) {
    return Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(uncons(xs));
    });
};
var tail = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Types.Cons) {
        return new Data_Maybe.Just(v.value1);
    };
    throw new Error("Failed pattern match at Data.List (line 245, column 1 - line 245, column 43): " + [ v.constructor.name ]);
};
var stripPrefix = function (dictEq) {
    return function (v) {
        return function (s) {
            var go = function (prefix) {
                return function (input) {
                    if (prefix instanceof Data_List_Types.Cons && (input instanceof Data_List_Types.Cons && Data_Eq.eq(dictEq)(prefix.value0)(input.value0))) {
                        return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Loop({
                            a: prefix.value1,
                            b: input.value1
                        }));
                    };
                    if (prefix instanceof Data_List_Types.Nil) {
                        return Data_Maybe.Just.create(new Control_Monad_Rec_Class.Done(input));
                    };
                    return Data_Maybe.Nothing.value;
                };
            };
            return Control_Monad_Rec_Class.tailRecM2(Control_Monad_Rec_Class.monadRecMaybe)(go)(v)(s);
        };
    };
};
var span = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
            var v2 = span(v)(v1.value1);
            return {
                init: new Data_List_Types.Cons(v1.value0, v2.init),
                rest: v2.rest
            };
        };
        return {
            init: Data_List_Types.Nil.value,
            rest: v1
        };
    };
};
var snoc = function (xs) {
    return function (x) {
        return Data_Foldable.foldr(Data_List_Types.foldableList)(Data_List_Types.Cons.create)(new Data_List_Types.Cons(x, Data_List_Types.Nil.value))(xs);
    };
};
var singleton = function (a) {
    return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
};
var sortBy = function (cmp) {
    var merge = function (v) {
        return function (v1) {
            if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1.value0))(Data_Ordering.GT.value)) {
                    return new Data_List_Types.Cons(v1.value0, merge(v)(v1.value1));
                };
                if (Data_Boolean.otherwise) {
                    return new Data_List_Types.Cons(v.value0, merge(v.value1)(v1));
                };
            };
            if (v instanceof Data_List_Types.Nil) {
                return v1;
            };
            if (v1 instanceof Data_List_Types.Nil) {
                return v;
            };
            throw new Error("Failed pattern match at Data.List (line 473, column 3 - line 473, column 38): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var mergePairs = function (v) {
        if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(merge(v.value0)(v.value1.value0), mergePairs(v.value1.value1));
        };
        return v;
    };
    var mergeAll = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return v.value0;
            };
            $copy_v = mergePairs(v);
            return;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var sequences = function (v) {
        if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
            if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v.value1.value0))(Data_Ordering.GT.value)) {
                return descending(v.value1.value0)(singleton(v.value0))(v.value1.value1);
            };
            if (Data_Boolean.otherwise) {
                return ascending(v.value1.value0)(function (v1) {
                    return new Data_List_Types.Cons(v.value0, v1);
                })(v.value1.value1);
            };
        };
        return singleton(v);
    };
    var descending = function ($copy_a) {
        return function ($copy_as) {
            return function ($copy_v) {
                var $tco_var_a = $copy_a;
                var $tco_var_as = $copy_as;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(a, as, v) {
                    if (v instanceof Data_List_Types.Cons && Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                        $tco_var_a = v.value0;
                        $tco_var_as = new Data_List_Types.Cons(a, as);
                        $copy_v = v.value1;
                        return;
                    };
                    $tco_done = true;
                    return new Data_List_Types.Cons(new Data_List_Types.Cons(a, as), sequences(v));
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                };
                return $tco_result;
            };
        };
    };
    var ascending = function ($copy_a) {
        return function ($copy_as) {
            return function ($copy_v) {
                var $tco_var_a = $copy_a;
                var $tco_var_as = $copy_as;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(a, as, v) {
                    if (v instanceof Data_List_Types.Cons && Data_Eq.notEq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                        $tco_var_a = v.value0;
                        $tco_var_as = function (ys) {
                            return as(new Data_List_Types.Cons(a, ys));
                        };
                        $copy_v = v.value1;
                        return;
                    };
                    $tco_done = true;
                    return new Data_List_Types.Cons(as(singleton(a)), sequences(v));
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                };
                return $tco_result;
            };
        };
    };
    return function ($337) {
        return mergeAll(sequences($337));
    };
};
var sort = function (dictOrd) {
    return function (xs) {
        return sortBy(Data_Ord.compare(dictOrd))(xs);
    };
};
var tails = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return singleton(Data_List_Types.Nil.value);
    };
    if (v instanceof Data_List_Types.Cons) {
        return new Data_List_Types.Cons(v, tails(v.value1));
    };
    throw new Error("Failed pattern match at Data.List (line 626, column 1 - line 626, column 43): " + [ v.constructor.name ]);
};
var showPattern = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Pattern " + (Data_Show.show(Data_List_Types.showList(dictShow))(v) + ")");
    });
};
var reverse = (function () {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            var $tco_var_acc = $copy_acc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(acc, v) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return acc;
                };
                if (v instanceof Data_List_Types.Cons) {
                    $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                    $copy_v = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [ acc.constructor.name, v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Types.Nil.value);
})();
var take = (function () {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_acc = $copy_acc;
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v, v1) {
                    if (v < 1) {
                        $tco_done = true;
                        return reverse(acc);
                    };
                    if (v1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return reverse(acc);
                    };
                    if (v1 instanceof Data_List_Types.Cons) {
                        $tco_var_acc = new Data_List_Types.Cons(v1.value0, acc);
                        $tco_var_v = v - 1 | 0;
                        $copy_v1 = v1.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List (line 520, column 3 - line 520, column 35): " + [ acc.constructor.name, v.constructor.name, v1.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
    };
    return go(Data_List_Types.Nil.value);
})();
var takeWhile = function (p) {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            var $tco_var_acc = $copy_acc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(acc, v) {
                if (v instanceof Data_List_Types.Cons && p(v.value0)) {
                    $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                    $copy_v = v.value1;
                    return;
                };
                $tco_done = true;
                return reverse(acc);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Types.Nil.value);
};
var unsnoc = function (lst) {
    var go = function ($copy_v) {
        return function ($copy_acc) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, acc) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return new Data_Maybe.Just({
                        revInit: acc,
                        last: v.value0
                    });
                };
                if (v instanceof Data_List_Types.Cons) {
                    $tco_var_v = v.value1;
                    $copy_acc = new Data_List_Types.Cons(v.value0, acc);
                    return;
                };
                throw new Error("Failed pattern match at Data.List (line 270, column 3 - line 270, column 23): " + [ v.constructor.name, acc.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_acc);
            };
            return $tco_result;
        };
    };
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (h) {
        return {
            init: reverse(h.revInit),
            last: h.last
        };
    })(go(lst)(Data_List_Types.Nil.value));
};
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    return function ($copy_acc) {
                        var $tco_var_v = $copy_v;
                        var $tco_var_v1 = $copy_v1;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1, acc) {
                            if (v instanceof Data_List_Types.Nil) {
                                $tco_done = true;
                                return acc;
                            };
                            if (v1 instanceof Data_List_Types.Nil) {
                                $tco_done = true;
                                return acc;
                            };
                            if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                                $tco_var_v = v.value1;
                                $tco_var_v1 = v1.value1;
                                $copy_acc = new Data_List_Types.Cons(f(v.value0)(v1.value0), acc);
                                return;
                            };
                            throw new Error("Failed pattern match at Data.List (line 718, column 3 - line 718, column 21): " + [ v.constructor.name, v1.constructor.name, acc.constructor.name ]);
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_acc);
                        };
                        return $tco_result;
                    };
                };
            };
            return reverse(go(xs)(ys)(Data_List_Types.Nil.value));
        };
    };
};
var zip = zipWith(Data_Tuple.Tuple.create);
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_List_Types.traversableList)(dictApplicative)(zipWith(f)(xs)(ys));
            };
        };
    };
};
var range = function (start) {
    return function (end) {
        if (start === end) {
            return singleton(start);
        };
        if (Data_Boolean.otherwise) {
            var go = function ($copy_s) {
                return function ($copy_e) {
                    return function ($copy_step) {
                        return function ($copy_rest) {
                            var $tco_var_s = $copy_s;
                            var $tco_var_e = $copy_e;
                            var $tco_var_step = $copy_step;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(s, e, step, rest) {
                                if (s === e) {
                                    $tco_done = true;
                                    return new Data_List_Types.Cons(s, rest);
                                };
                                if (Data_Boolean.otherwise) {
                                    $tco_var_s = s + step | 0;
                                    $tco_var_e = e;
                                    $tco_var_step = step;
                                    $copy_rest = new Data_List_Types.Cons(s, rest);
                                    return;
                                };
                                throw new Error("Failed pattern match at Data.List (line 148, column 3 - line 149, column 65): " + [ s.constructor.name, e.constructor.name, step.constructor.name, rest.constructor.name ]);
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_s, $tco_var_e, $tco_var_step, $copy_rest);
                            };
                            return $tco_result;
                        };
                    };
                };
            };
            return go(end)(start)((function () {
                var $223 = start > end;
                if ($223) {
                    return 1;
                };
                return -1 | 0;
            })())(Data_List_Types.Nil.value);
        };
        throw new Error("Failed pattern match at Data.List (line 144, column 1 - line 144, column 32): " + [ start.constructor.name, end.constructor.name ]);
    };
};
var partition = function (p) {
    return function (xs) {
        var select = function (x) {
            return function (v) {
                var $226 = p(x);
                if ($226) {
                    return {
                        no: v.no,
                        yes: new Data_List_Types.Cons(x, v.yes)
                    };
                };
                return {
                    no: new Data_List_Types.Cons(x, v.no),
                    yes: v.yes
                };
            };
        };
        return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
            no: Data_List_Types.Nil.value,
            yes: Data_List_Types.Nil.value
        })(xs);
    };
};
var $$null = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return true;
    };
    return false;
};
var newtypePattern = new Data_Newtype.Newtype(function (n) {
    return n;
}, Pattern);
var mapWithIndex = Data_FunctorWithIndex.mapWithIndex(Data_List_Types.functorWithIndexList);
var mapMaybe = function (f) {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            var $tco_var_acc = $copy_acc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(acc, v) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return reverse(acc);
                };
                if (v instanceof Data_List_Types.Cons) {
                    var v1 = f(v.value0);
                    if (v1 instanceof Data_Maybe.Nothing) {
                        $tco_var_acc = acc;
                        $copy_v = v.value1;
                        return;
                    };
                    if (v1 instanceof Data_Maybe.Just) {
                        $tco_var_acc = new Data_List_Types.Cons(v1.value0, acc);
                        $copy_v = v.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List (line 419, column 5 - line 421, column 32): " + [ v1.constructor.name ]);
                };
                throw new Error("Failed pattern match at Data.List (line 417, column 3 - line 417, column 27): " + [ acc.constructor.name, v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Types.Nil.value);
};
var manyRec = function (dictMonadRec) {
    return function (dictAlternative) {
        return function (p) {
            var go = function (acc) {
                return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(Control_Alt.alt((dictAlternative.Plus1()).Alt0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Control_Monad_Rec_Class.Loop.create)(p))(Control_Applicative.pure(dictAlternative.Applicative0())(new Control_Monad_Rec_Class.Done(Data_Unit.unit))))(function (v) {
                    return Control_Applicative.pure(dictAlternative.Applicative0())(Data_Bifunctor.bimap(Control_Monad_Rec_Class.bifunctorStep)(function (v1) {
                        return new Data_List_Types.Cons(v1, acc);
                    })(function (v1) {
                        return reverse(acc);
                    })(v));
                });
            };
            return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go)(Data_List_Types.Nil.value);
        };
    };
};
var someRec = function (dictMonadRec) {
    return function (dictAlternative) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Data_List_Types.Cons.create)(v))(manyRec(dictMonadRec)(dictAlternative)(v));
        };
    };
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Apply.apply((dictAlternative.Applicative0()).Apply0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Data_List_Types.Cons.create)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(some(dictAlternative)(dictLazy)(v))(Control_Applicative.pure(dictAlternative.Applicative0())(Data_List_Types.Nil.value));
        };
    };
};
var length = Data_Foldable.foldl(Data_List_Types.foldableList)(function (acc) {
    return function (v) {
        return acc + 1 | 0;
    };
})(0);
var last = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
            $tco_done = true;
            return new Data_Maybe.Just(v.value0);
        };
        if (v instanceof Data_List_Types.Cons) {
            $copy_v = v.value1;
            return;
        };
        $tco_done = true;
        return Data_Maybe.Nothing.value;
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};
var insertBy = function (v) {
    return function (x) {
        return function (v1) {
            if (v1 instanceof Data_List_Types.Nil) {
                return singleton(x);
            };
            if (v1 instanceof Data_List_Types.Cons) {
                var v2 = v(x)(v1.value0);
                if (v2 instanceof Data_Ordering.GT) {
                    return new Data_List_Types.Cons(v1.value0, insertBy(v)(x)(v1.value1));
                };
                return new Data_List_Types.Cons(x, v1);
            };
            throw new Error("Failed pattern match at Data.List (line 216, column 1 - line 216, column 68): " + [ v.constructor.name, x.constructor.name, v1.constructor.name ]);
        };
    };
};
var insertAt = function (v) {
    return function (v1) {
        return function (v2) {
            if (v === 0) {
                return new Data_Maybe.Just(new Data_List_Types.Cons(v1, v2));
            };
            if (v2 instanceof Data_List_Types.Cons) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(function (v3) {
                    return new Data_List_Types.Cons(v2.value0, v3);
                })(insertAt(v - 1 | 0)(v1)(v2.value1));
            };
            return Data_Maybe.Nothing.value;
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var init = function (lst) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
        return v.init;
    })(unsnoc(lst));
};
var index = function ($copy_v) {
    return function ($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
            if (v instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Data_List_Types.Cons && v1 === 0) {
                $tco_done = true;
                return new Data_Maybe.Just(v.value0);
            };
            if (v instanceof Data_List_Types.Cons) {
                $tco_var_v = v.value1;
                $copy_v1 = v1 - 1 | 0;
                return;
            };
            throw new Error("Failed pattern match at Data.List (line 281, column 1 - line 281, column 44): " + [ v.constructor.name, v1.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_v, $copy_v1);
        };
        return $tco_result;
    };
};
var head = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Types.Cons) {
        return new Data_Maybe.Just(v.value0);
    };
    throw new Error("Failed pattern match at Data.List (line 230, column 1 - line 230, column 22): " + [ v.constructor.name ]);
};
var transpose = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return Data_List_Types.Nil.value;
    };
    if (v instanceof Data_List_Types.Cons && v.value0 instanceof Data_List_Types.Nil) {
        return transpose(v.value1);
    };
    if (v instanceof Data_List_Types.Cons && v.value0 instanceof Data_List_Types.Cons) {
        return new Data_List_Types.Cons(new Data_List_Types.Cons(v.value0.value0, mapMaybe(head)(v.value1)), transpose(new Data_List_Types.Cons(v.value0.value1, mapMaybe(tail)(v.value1))));
    };
    throw new Error("Failed pattern match at Data.List (line 752, column 1 - line 752, column 54): " + [ v.constructor.name ]);
};
var groupBy = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v1 instanceof Data_List_Types.Cons) {
            var v2 = span(v(v1.value0))(v1.value1);
            return new Data_List_Types.Cons(new Data_NonEmpty.NonEmpty(v1.value0, v2.init), groupBy(v)(v2.rest));
        };
        throw new Error("Failed pattern match at Data.List (line 605, column 1 - line 605, column 80): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var group = function (dictEq) {
    return groupBy(Data_Eq.eq(dictEq));
};
var group$prime = function (dictOrd) {
    return function ($338) {
        return group(dictOrd.Eq0())(sort(dictOrd)($338));
    };
};
var fromFoldable = function (dictFoldable) {
    return Data_Foldable.foldr(dictFoldable)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
};
var foldM = function (dictMonad) {
    return function (v) {
        return function (a) {
            return function (v1) {
                if (v1 instanceof Data_List_Types.Nil) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(a);
                };
                if (v1 instanceof Data_List_Types.Cons) {
                    return Control_Bind.bind(dictMonad.Bind1())(v(a)(v1.value0))(function (a$prime) {
                        return foldM(dictMonad)(v)(a$prime)(v1.value1);
                    });
                };
                throw new Error("Failed pattern match at Data.List (line 763, column 1 - line 763, column 72): " + [ v.constructor.name, a.constructor.name, v1.constructor.name ]);
            };
        };
    };
};
var findIndex = function (fn) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v1 instanceof Data_List_Types.Cons) {
                    if (fn(v1.value0)) {
                        $tco_done = true;
                        return new Data_Maybe.Just(v);
                    };
                    if (Data_Boolean.otherwise) {
                        $tco_var_v = v + 1 | 0;
                        $copy_v1 = v1.value1;
                        return;
                    };
                };
                if (v1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List (line 301, column 3 - line 301, column 35): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(0);
};
var findLastIndex = function (fn) {
    return function (xs) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
            return (length(xs) - 1 | 0) - v | 0;
        })(findIndex(fn)(reverse(xs)));
    };
};
var filterM = function (dictMonad) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Types.Nil) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Data_List_Types.Nil.value);
            };
            if (v1 instanceof Data_List_Types.Cons) {
                return Control_Bind.bind(dictMonad.Bind1())(v(v1.value0))(function (v2) {
                    return Control_Bind.bind(dictMonad.Bind1())(filterM(dictMonad)(v)(v1.value1))(function (v3) {
                        return Control_Applicative.pure(dictMonad.Applicative0())((function () {
                            if (v2) {
                                return new Data_List_Types.Cons(v1.value0, v3);
                            };
                            return v3;
                        })());
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List (line 403, column 1 - line 403, column 75): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
var filter = function (p) {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            var $tco_var_acc = $copy_acc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(acc, v) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return reverse(acc);
                };
                if (v instanceof Data_List_Types.Cons) {
                    if (p(v.value0)) {
                        $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                        $copy_v = v.value1;
                        return;
                    };
                    if (Data_Boolean.otherwise) {
                        $tco_var_acc = acc;
                        $copy_v = v.value1;
                        return;
                    };
                };
                throw new Error("Failed pattern match at Data.List (line 390, column 3 - line 390, column 27): " + [ acc.constructor.name, v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Types.Nil.value);
};
var intersectBy = function (v) {
    return function (v1) {
        return function (v2) {
            if (v1 instanceof Data_List_Types.Nil) {
                return Data_List_Types.Nil.value;
            };
            if (v2 instanceof Data_List_Types.Nil) {
                return Data_List_Types.Nil.value;
            };
            return filter(function (x) {
                return Data_Foldable.any(Data_List_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean)(v(x))(v2);
            })(v1);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var nubBy = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v1 instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v1.value0, nubBy(v)(filter(function (y) {
                return !v(v1.value0)(y);
            })(v1.value1)));
        };
        throw new Error("Failed pattern match at Data.List (line 644, column 1 - line 644, column 59): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var nub = function (dictEq) {
    return nubBy(Data_Eq.eq(dictEq));
};
var eqPattern = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(Data_List_Types.eqList(dictEq))(x)(y);
        };
    });
};
var ordPattern = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqPattern(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(Data_List_Types.ordList(dictOrd))(x)(y);
        };
    });
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Data_Eq.eq(dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Types.Cons && p(v.value0)) {
                $copy_v = v.value1;
                return;
            };
            $tco_done = true;
            return v;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return go;
};
var dropEnd = function (n) {
    return function (xs) {
        return take(length(xs) - n | 0)(xs);
    };
};
var drop = function ($copy_v) {
    return function ($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
            if (v < 1) {
                $tco_done = true;
                return v1;
            };
            if (v1 instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return Data_List_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Types.Cons) {
                $tco_var_v = v - 1 | 0;
                $copy_v1 = v1.value1;
                return;
            };
            throw new Error("Failed pattern match at Data.List (line 543, column 1 - line 543, column 42): " + [ v.constructor.name, v1.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_v, $copy_v1);
        };
        return $tco_result;
    };
};
var slice = function (start) {
    return function (end) {
        return function (xs) {
            return take(end - start | 0)(drop(start)(xs));
        };
    };
};
var takeEnd = function (n) {
    return function (xs) {
        return drop(length(xs) - n | 0)(xs);
    };
};
var deleteBy = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Data_List_Types.Nil) {
                return Data_List_Types.Nil.value;
            };
            if (v2 instanceof Data_List_Types.Cons && v(v1)(v2.value0)) {
                return v2.value1;
            };
            if (v2 instanceof Data_List_Types.Cons) {
                return new Data_List_Types.Cons(v2.value0, deleteBy(v)(v1)(v2.value1));
            };
            throw new Error("Failed pattern match at Data.List (line 671, column 1 - line 671, column 67): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Data_Semigroup.append(Data_List_Types.semigroupList)(xs)(Data_Foldable.foldl(Data_List_Types.foldableList)(Data_Function.flip(deleteBy(eq)))(nubBy(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var deleteAt = function (v) {
    return function (v1) {
        if (v === 0 && v1 instanceof Data_List_Types.Cons) {
            return new Data_Maybe.Just(v1.value1);
        };
        if (v1 instanceof Data_List_Types.Cons) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(function (v2) {
                return new Data_List_Types.Cons(v1.value0, v2);
            })(deleteAt(v - 1 | 0)(v1.value1));
        };
        return Data_Maybe.Nothing.value;
    };
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return Data_Foldable.foldl(Data_List_Types.foldableList)(Data_Function.flip($$delete(dictEq)));
};
var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Types.bindList));
var concat = function (v) {
    return Control_Bind.bind(Data_List_Types.bindList)(v)(Control_Category.identity(Control_Category.categoryFn));
};
var catMaybes = mapMaybe(Control_Category.identity(Control_Category.categoryFn));
var alterAt = function (v) {
    return function (v1) {
        return function (v2) {
            if (v === 0 && v2 instanceof Data_List_Types.Cons) {
                return Data_Maybe.Just.create((function () {
                    var v3 = v1(v2.value0);
                    if (v3 instanceof Data_Maybe.Nothing) {
                        return v2.value1;
                    };
                    if (v3 instanceof Data_Maybe.Just) {
                        return new Data_List_Types.Cons(v3.value0, v2.value1);
                    };
                    throw new Error("Failed pattern match at Data.List (line 352, column 3 - line 354, column 23): " + [ v3.constructor.name ]);
                })());
            };
            if (v2 instanceof Data_List_Types.Cons) {
                return Data_Functor.map(Data_Maybe.functorMaybe)(function (v3) {
                    return new Data_List_Types.Cons(v2.value0, v3);
                })(alterAt(v - 1 | 0)(v1)(v2.value1));
            };
            return Data_Maybe.Nothing.value;
        };
    };
};
var modifyAt = function (n) {
    return function (f) {
        return alterAt(n)(function ($339) {
            return Data_Maybe.Just.create(f($339));
        });
    };
};
module.exports = {
    toUnfoldable: toUnfoldable,
    fromFoldable: fromFoldable,
    singleton: singleton,
    range: range,
    some: some,
    someRec: someRec,
    many: many,
    manyRec: manyRec,
    "null": $$null,
    length: length,
    snoc: snoc,
    insert: insert,
    insertBy: insertBy,
    head: head,
    last: last,
    tail: tail,
    init: init,
    uncons: uncons,
    unsnoc: unsnoc,
    index: index,
    elemIndex: elemIndex,
    elemLastIndex: elemLastIndex,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    insertAt: insertAt,
    deleteAt: deleteAt,
    updateAt: updateAt,
    modifyAt: modifyAt,
    alterAt: alterAt,
    reverse: reverse,
    concat: concat,
    concatMap: concatMap,
    filter: filter,
    filterM: filterM,
    mapMaybe: mapMaybe,
    catMaybes: catMaybes,
    mapWithIndex: mapWithIndex,
    sort: sort,
    sortBy: sortBy,
    Pattern: Pattern,
    stripPrefix: stripPrefix,
    slice: slice,
    take: take,
    takeEnd: takeEnd,
    takeWhile: takeWhile,
    drop: drop,
    dropEnd: dropEnd,
    dropWhile: dropWhile,
    span: span,
    group: group,
    "group'": group$prime,
    groupBy: groupBy,
    partition: partition,
    nub: nub,
    nubBy: nubBy,
    union: union,
    unionBy: unionBy,
    "delete": $$delete,
    deleteBy: deleteBy,
    difference: difference,
    intersect: intersect,
    intersectBy: intersectBy,
    zipWith: zipWith,
    zipWithA: zipWithA,
    zip: zip,
    unzip: unzip,
    transpose: transpose,
    foldM: foldM,
    eqPattern: eqPattern,
    ordPattern: ordPattern,
    newtypePattern: newtypePattern,
    showPattern: showPattern
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Lazy/index.js":16,"../Control.Monad.Rec.Class/index.js":21,"../Data.Bifunctor/index.js":43,"../Data.Boolean/index.js":45,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.HeytingAlgebra/index.js":68,"../Data.List.Types/index.js":74,"../Data.Maybe/index.js":79,"../Data.Newtype/index.js":87,"../Data.NonEmpty/index.js":88,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"../Data.Unit/index.js":133}],76:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Lazy = require("../Data.List.Lazy/index.js");
var Data_List_Lazy_Types = require("../Data.List.Lazy.Types/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Leaf = (function () {
    function Leaf() {

    };
    Leaf.value = new Leaf();
    return Leaf;
})();
var Two = (function () {
    function Two(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Two.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Two(value0, value1, value2, value3);
                };
            };
        };
    };
    return Two;
})();
var Three = (function () {
    function Three(value0, value1, value2, value3, value4, value5, value6) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
        this.value6 = value6;
    };
    Three.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return function (value6) {
                                return new Three(value0, value1, value2, value3, value4, value5, value6);
                            };
                        };
                    };
                };
            };
        };
    };
    return Three;
})();
var TwoLeft = (function () {
    function TwoLeft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoLeft(value0, value1, value2);
            };
        };
    };
    return TwoLeft;
})();
var TwoRight = (function () {
    function TwoRight(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoRight(value0, value1, value2);
            };
        };
    };
    return TwoRight;
})();
var ThreeLeft = (function () {
    function ThreeLeft(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeLeft(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    return ThreeLeft;
})();
var ThreeMiddle = (function () {
    function ThreeMiddle(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeMiddle.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeMiddle(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    return ThreeMiddle;
})();
var ThreeRight = (function () {
    function ThreeRight(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeRight(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    return ThreeRight;
})();
var KickUp = (function () {
    function KickUp(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    KickUp.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new KickUp(value0, value1, value2, value3);
                };
            };
        };
    };
    return KickUp;
})();
var values = function (v) {
    if (v instanceof Leaf) {
        return Data_List_Types.Nil.value;
    };
    if (v instanceof Two) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(values(v.value3)));
    };
    if (v instanceof Three) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value3))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value5))(values(v.value6)))));
    };
    throw new Error("Failed pattern match at Data.Map.Internal (line 612, column 1 - line 612, column 40): " + [ v.constructor.name ]);
};
var size = function (v) {
    if (v instanceof Leaf) {
        return 0;
    };
    if (v instanceof Two) {
        return (1 + size(v.value0) | 0) + size(v.value3) | 0;
    };
    if (v instanceof Three) {
        return ((2 + size(v.value0) | 0) + size(v.value3) | 0) + size(v.value6) | 0;
    };
    throw new Error("Failed pattern match at Data.Map.Internal (line 662, column 1 - line 662, column 35): " + [ v.constructor.name ]);
};
var singleton = function (k) {
    return function (v) {
        return new Two(Leaf.value, k, v, Leaf.value);
    };
};
var toUnfoldable = function (dictUnfoldable) {
    return function (m) {
        var go = function ($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Types.Cons) {
                    if (v.value0 instanceof Leaf) {
                        $copy_v = v.value1;
                        return;
                    };
                    if (v.value0 instanceof Two && (v.value0.value0 instanceof Leaf && v.value0.value3 instanceof Leaf)) {
                        $tco_done = true;
                        return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), v.value1));
                    };
                    if (v.value0 instanceof Two && v.value0.value0 instanceof Leaf) {
                        $tco_done = true;
                        return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), new Data_List_Types.Cons(v.value0.value3, v.value1)));
                    };
                    if (v.value0 instanceof Two) {
                        $copy_v = new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(singleton(v.value0.value1)(v.value0.value2), new Data_List_Types.Cons(v.value0.value3, v.value1)));
                        return;
                    };
                    if (v.value0 instanceof Three) {
                        $copy_v = new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(singleton(v.value0.value1)(v.value0.value2), new Data_List_Types.Cons(v.value0.value3, new Data_List_Types.Cons(singleton(v.value0.value4)(v.value0.value5), new Data_List_Types.Cons(v.value0.value6, v.value1)))));
                        return;
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 577, column 18 - line 586, column 71): " + [ v.value0.constructor.name ]);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 576, column 3 - line 576, column 19): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
            };
            return $tco_result;
        };
        return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_List_Types.Cons(m, Data_List_Types.Nil.value));
    };
};
var toAscArray = toUnfoldable(Data_Unfoldable.unfoldableArray);
var toUnfoldableUnordered = function (dictUnfoldable) {
    return function (m) {
        var go = function ($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Types.Cons) {
                    if (v.value0 instanceof Leaf) {
                        $copy_v = v.value1;
                        return;
                    };
                    if (v.value0 instanceof Two) {
                        $tco_done = true;
                        return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(v.value0.value3, v.value1))));
                    };
                    if (v.value0 instanceof Three) {
                        $tco_done = true;
                        return Data_Maybe.Just.create(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value1, v.value0.value2), new Data_List_Types.Cons(singleton(v.value0.value4)(v.value0.value5), new Data_List_Types.Cons(v.value0.value0, new Data_List_Types.Cons(v.value0.value3, new Data_List_Types.Cons(v.value0.value6, v.value1))))));
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 598, column 18 - line 603, column 77): " + [ v.value0.constructor.name ]);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 597, column 3 - line 597, column 19): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
            };
            return $tco_result;
        };
        return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_List_Types.Cons(m, Data_List_Types.Nil.value));
    };
};
var showTree = function (dictShow) {
    return function (dictShow1) {
        return function (v) {
            if (v instanceof Leaf) {
                return "Leaf";
            };
            if (v instanceof Two) {
                return "Two (" + (showTree(dictShow)(dictShow1)(v.value0) + (") (" + (Data_Show.show(dictShow)(v.value1) + (") (" + (Data_Show.show(dictShow1)(v.value2) + (") (" + (showTree(dictShow)(dictShow1)(v.value3) + ")")))))));
            };
            if (v instanceof Three) {
                return "Three (" + (showTree(dictShow)(dictShow1)(v.value0) + (") (" + (Data_Show.show(dictShow)(v.value1) + (") (" + (Data_Show.show(dictShow1)(v.value2) + (") (" + (showTree(dictShow)(dictShow1)(v.value3) + (") (" + (Data_Show.show(dictShow)(v.value4) + (") (" + (Data_Show.show(dictShow1)(v.value5) + (") (" + (showTree(dictShow)(dictShow1)(v.value6) + ")")))))))))))));
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 153, column 1 - line 153, column 62): " + [ v.constructor.name ]);
        };
    };
};
var showMap = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (m) {
            return "(fromFoldable " + (Data_Show.show(Data_Show.showArray(Data_Tuple.showTuple(dictShow)(dictShow1)))(toAscArray(m)) + ")");
        });
    };
};
var lookupLE = function (dictOrd) {
    return function (k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function (v) {
            if (v instanceof Leaf) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Two) {
                var v2 = comp(k)(v.value1);
                if (v2 instanceof Data_Ordering.EQ) {
                    return new Data_Maybe.Just({
                        key: v.value1,
                        value: v.value2
                    });
                };
                if (v2 instanceof Data_Ordering.GT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value3)));
                };
                if (v2 instanceof Data_Ordering.LT) {
                    return go(v.value0);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 225, column 33 - line 228, column 20): " + [ v2.constructor.name ]);
            };
            if (v instanceof Three) {
                var v3 = comp(k)(v.value4);
                if (v3 instanceof Data_Ordering.EQ) {
                    return new Data_Maybe.Just({
                        key: v.value4,
                        value: v.value5
                    });
                };
                if (v3 instanceof Data_Ordering.GT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value4,
                        value: v.value5
                    })(go(v.value6)));
                };
                if (v3 instanceof Data_Ordering.LT) {
                    return go(new Two(v.value0, v.value1, v.value2, v.value3));
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 229, column 45 - line 232, column 36): " + [ v3.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 224, column 5 - line 224, column 22): " + [ v.constructor.name ]);
        };
        return go;
    };
};
var lookupGE = function (dictOrd) {
    return function (k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function (v) {
            if (v instanceof Leaf) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Two) {
                var v2 = comp(k)(v.value1);
                if (v2 instanceof Data_Ordering.EQ) {
                    return new Data_Maybe.Just({
                        key: v.value1,
                        value: v.value2
                    });
                };
                if (v2 instanceof Data_Ordering.LT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value0)));
                };
                if (v2 instanceof Data_Ordering.GT) {
                    return go(v.value3);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 259, column 33 - line 262, column 21): " + [ v2.constructor.name ]);
            };
            if (v instanceof Three) {
                var v3 = comp(k)(v.value1);
                if (v3 instanceof Data_Ordering.EQ) {
                    return new Data_Maybe.Just({
                        key: v.value1,
                        value: v.value2
                    });
                };
                if (v3 instanceof Data_Ordering.LT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value0)));
                };
                if (v3 instanceof Data_Ordering.GT) {
                    return go(new Two(v.value3, v.value4, v.value5, v.value6));
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 263, column 45 - line 266, column 37): " + [ v3.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 258, column 5 - line 258, column 22): " + [ v.constructor.name ]);
        };
        return go;
    };
};
var lookup = function (dictOrd) {
    return function (k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function ($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
                if (v instanceof Leaf) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Two) {
                    var v2 = comp(k)(v.value1);
                    if (v2 instanceof Data_Ordering.EQ) {
                        $tco_done = true;
                        return new Data_Maybe.Just(v.value2);
                    };
                    if (v2 instanceof Data_Ordering.LT) {
                        $copy_v = v.value0;
                        return;
                    };
                    $copy_v = v.value3;
                    return;
                };
                if (v instanceof Three) {
                    var v3 = comp(k)(v.value1);
                    if (v3 instanceof Data_Ordering.EQ) {
                        $tco_done = true;
                        return new Data_Maybe.Just(v.value2);
                    };
                    var v4 = comp(k)(v.value4);
                    if (v4 instanceof Data_Ordering.EQ) {
                        $tco_done = true;
                        return new Data_Maybe.Just(v.value5);
                    };
                    if (v3 instanceof Data_Ordering.LT) {
                        $copy_v = v.value0;
                        return;
                    };
                    if (v4 instanceof Data_Ordering.GT) {
                        $copy_v = v.value6;
                        return;
                    };
                    $copy_v = v.value3;
                    return;
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 200, column 5 - line 200, column 22): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
            };
            return $tco_result;
        };
        return go;
    };
};
var member = function (dictOrd) {
    return function (k) {
        return function (m) {
            return Data_Maybe.isJust(lookup(dictOrd)(k)(m));
        };
    };
};
var keys = function (v) {
    if (v instanceof Leaf) {
        return Data_List_Types.Nil.value;
    };
    if (v instanceof Two) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(keys(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value1))(keys(v.value3)));
    };
    if (v instanceof Three) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(keys(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value1))(Data_Semigroup.append(Data_List_Types.semigroupList)(keys(v.value3))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value4))(keys(v.value6)))));
    };
    throw new Error("Failed pattern match at Data.Map.Internal (line 606, column 1 - line 606, column 38): " + [ v.constructor.name ]);
};
var isSubmap = function (dictOrd) {
    return function (dictEq) {
        return function (m1) {
            return function (m2) {
                var f = function (v) {
                    return Data_Eq.eq(Data_Maybe.eqMaybe(dictEq))(lookup(dictOrd)(v.value0)(m2))(new Data_Maybe.Just(v.value1));
                };
                return Data_Foldable.all(Data_List_Lazy_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean)(f)(toUnfoldable(Data_List_Lazy_Types.unfoldableList)(m1));
            };
        };
    };
};
var isEmpty = function (v) {
    if (v instanceof Leaf) {
        return true;
    };
    return false;
};
var functorMap = new Data_Functor.Functor(function (v) {
    return function (v1) {
        if (v1 instanceof Leaf) {
            return Leaf.value;
        };
        if (v1 instanceof Two) {
            return new Two(Data_Functor.map(functorMap)(v)(v1.value0), v1.value1, v(v1.value2), Data_Functor.map(functorMap)(v)(v1.value3));
        };
        if (v1 instanceof Three) {
            return new Three(Data_Functor.map(functorMap)(v)(v1.value0), v1.value1, v(v1.value2), Data_Functor.map(functorMap)(v)(v1.value3), v1.value4, v(v1.value5), Data_Functor.map(functorMap)(v)(v1.value6));
        };
        throw new Error("Failed pattern match at Data.Map.Internal (line 96, column 1 - line 96, column 39): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var functorWithIndexMap = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorMap;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Leaf) {
            return Leaf.value;
        };
        if (v1 instanceof Two) {
            return new Two(Data_FunctorWithIndex.mapWithIndex(functorWithIndexMap)(v)(v1.value0), v1.value1, v(v1.value1)(v1.value2), Data_FunctorWithIndex.mapWithIndex(functorWithIndexMap)(v)(v1.value3));
        };
        if (v1 instanceof Three) {
            return new Three(Data_FunctorWithIndex.mapWithIndex(functorWithIndexMap)(v)(v1.value0), v1.value1, v(v1.value1)(v1.value2), Data_FunctorWithIndex.mapWithIndex(functorWithIndexMap)(v)(v1.value3), v1.value4, v(v1.value4)(v1.value5), Data_FunctorWithIndex.mapWithIndex(functorWithIndexMap)(v)(v1.value6));
        };
        throw new Error("Failed pattern match at Data.Map.Internal (line 101, column 1 - line 101, column 59): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var fromZipper = function ($copy_dictOrd) {
    return function ($copy_v) {
        return function ($copy_tree) {
            var $tco_var_dictOrd = $copy_dictOrd;
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(dictOrd, v, tree) {
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return tree;
                };
                if (v instanceof Data_List_Types.Cons) {
                    if (v.value0 instanceof TwoLeft) {
                        $tco_var_dictOrd = dictOrd;
                        $tco_var_v = v.value1;
                        $copy_tree = new Two(tree, v.value0.value0, v.value0.value1, v.value0.value2);
                        return;
                    };
                    if (v.value0 instanceof TwoRight) {
                        $tco_var_dictOrd = dictOrd;
                        $tco_var_v = v.value1;
                        $copy_tree = new Two(v.value0.value0, v.value0.value1, v.value0.value2, tree);
                        return;
                    };
                    if (v.value0 instanceof ThreeLeft) {
                        $tco_var_dictOrd = dictOrd;
                        $tco_var_v = v.value1;
                        $copy_tree = new Three(tree, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
                        return;
                    };
                    if (v.value0 instanceof ThreeMiddle) {
                        $tco_var_dictOrd = dictOrd;
                        $tco_var_v = v.value1;
                        $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, tree, v.value0.value3, v.value0.value4, v.value0.value5);
                        return;
                    };
                    if (v.value0 instanceof ThreeRight) {
                        $tco_var_dictOrd = dictOrd;
                        $tco_var_v = v.value1;
                        $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, tree);
                        return;
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 418, column 3 - line 423, column 88): " + [ v.value0.constructor.name ]);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 415, column 1 - line 415, column 80): " + [ v.constructor.name, tree.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_tree);
            };
            return $tco_result;
        };
    };
};
var insert = function (dictOrd) {
    return function (k) {
        return function (v) {
            var up = function ($copy_v1) {
                return function ($copy_v2) {
                    var $tco_var_v1 = $copy_v1;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v1, v2) {
                        if (v1 instanceof Data_List_Types.Nil) {
                            $tco_done = true;
                            return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
                        };
                        if (v1 instanceof Data_List_Types.Cons) {
                            if (v1.value0 instanceof TwoLeft) {
                                $tco_done = true;
                                return fromZipper(dictOrd)(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                            };
                            if (v1.value0 instanceof TwoRight) {
                                $tco_done = true;
                                return fromZipper(dictOrd)(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                            };
                            if (v1.value0 instanceof ThreeLeft) {
                                $tco_var_v1 = v1.value1;
                                $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                                return;
                            };
                            if (v1.value0 instanceof ThreeMiddle) {
                                $tco_var_v1 = v1.value1;
                                $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                                return;
                            };
                            if (v1.value0 instanceof ThreeRight) {
                                $tco_var_v1 = v1.value1;
                                $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
                                return;
                            };
                            throw new Error("Failed pattern match at Data.Map.Internal (line 454, column 5 - line 459, column 108): " + [ v1.value0.constructor.name, v2.constructor.name ]);
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 451, column 3 - line 451, column 56): " + [ v1.constructor.name, v2.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v1, $copy_v2);
                    };
                    return $tco_result;
                };
            };
            var comp = Data_Ord.compare(dictOrd);
            var down = function ($copy_ctx) {
                return function ($copy_v1) {
                    var $tco_var_ctx = $copy_ctx;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(ctx, v1) {
                        if (v1 instanceof Leaf) {
                            $tco_done = true;
                            return up(ctx)(new KickUp(Leaf.value, k, v, Leaf.value));
                        };
                        if (v1 instanceof Two) {
                            var v2 = comp(k)(v1.value1);
                            if (v2 instanceof Data_Ordering.EQ) {
                                $tco_done = true;
                                return fromZipper(dictOrd)(ctx)(new Two(v1.value0, k, v, v1.value3));
                            };
                            if (v2 instanceof Data_Ordering.LT) {
                                $tco_var_ctx = new Data_List_Types.Cons(new TwoLeft(v1.value1, v1.value2, v1.value3), ctx);
                                $copy_v1 = v1.value0;
                                return;
                            };
                            $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(v1.value0, v1.value1, v1.value2), ctx);
                            $copy_v1 = v1.value3;
                            return;
                        };
                        if (v1 instanceof Three) {
                            var v3 = comp(k)(v1.value1);
                            if (v3 instanceof Data_Ordering.EQ) {
                                $tco_done = true;
                                return fromZipper(dictOrd)(ctx)(new Three(v1.value0, k, v, v1.value3, v1.value4, v1.value5, v1.value6));
                            };
                            var v4 = comp(k)(v1.value4);
                            if (v4 instanceof Data_Ordering.EQ) {
                                $tco_done = true;
                                return fromZipper(dictOrd)(ctx)(new Three(v1.value0, v1.value1, v1.value2, v1.value3, k, v, v1.value6));
                            };
                            if (v3 instanceof Data_Ordering.LT) {
                                $tco_var_ctx = new Data_List_Types.Cons(new ThreeLeft(v1.value1, v1.value2, v1.value3, v1.value4, v1.value5, v1.value6), ctx);
                                $copy_v1 = v1.value0;
                                return;
                            };
                            if (v3 instanceof Data_Ordering.GT && v4 instanceof Data_Ordering.LT) {
                                $tco_var_ctx = new Data_List_Types.Cons(new ThreeMiddle(v1.value0, v1.value1, v1.value2, v1.value4, v1.value5, v1.value6), ctx);
                                $copy_v1 = v1.value3;
                                return;
                            };
                            $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(v1.value0, v1.value1, v1.value2, v1.value3, v1.value4, v1.value5), ctx);
                            $copy_v1 = v1.value6;
                            return;
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 434, column 3 - line 434, column 55): " + [ ctx.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_ctx, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return down(Data_List_Types.Nil.value);
        };
    };
};
var pop = function (dictOrd) {
    return function (k) {
        var up = function ($copy_ctxs) {
            return function ($copy_tree) {
                var $tco_var_ctxs = $copy_ctxs;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(ctxs, tree) {
                    if (ctxs instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return tree;
                    };
                    if (ctxs instanceof Data_List_Types.Cons) {
                        if (ctxs.value0 instanceof TwoLeft && (ctxs.value0.value2 instanceof Leaf && tree instanceof Leaf)) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value));
                        };
                        if (ctxs.value0 instanceof TwoRight && (ctxs.value0.value0 instanceof Leaf && tree instanceof Leaf)) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value));
                        };
                        if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Two) {
                            $tco_var_ctxs = ctxs.value1;
                            $copy_tree = new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3);
                            return;
                        };
                        if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Two) {
                            $tco_var_ctxs = ctxs.value1;
                            $copy_tree = new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree);
                            return;
                        };
                        if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6)));
                        };
                        if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree)));
                        };
                        if (ctxs.value0 instanceof ThreeLeft && (ctxs.value0.value2 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                        };
                        if (ctxs.value0 instanceof ThreeMiddle && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                        };
                        if (ctxs.value0 instanceof ThreeRight && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value3 instanceof Leaf && tree instanceof Leaf))) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value4, ctxs.value0.value5, Leaf.value));
                        };
                        if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Two) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                        };
                        if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Two) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                        };
                        if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Two) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0, ctxs.value0.value5.value1, ctxs.value0.value5.value2, ctxs.value0.value5.value3)));
                        };
                        if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Two) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3, ctxs.value0.value4, ctxs.value0.value5, tree)));
                        };
                        if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                        };
                        if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                        };
                        if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0), ctxs.value0.value5.value1, ctxs.value0.value5.value2, new Two(ctxs.value0.value5.value3, ctxs.value0.value5.value4, ctxs.value0.value5.value5, ctxs.value0.value5.value6)));
                        };
                        if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Three) {
                            $tco_done = true;
                            return fromZipper(dictOrd)(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3), ctxs.value0.value3.value4, ctxs.value0.value3.value5, new Two(ctxs.value0.value3.value6, ctxs.value0.value4, ctxs.value0.value5, tree)));
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 511, column 9 - line 528, column 136): " + [ ctxs.value0.constructor.name, tree.constructor.name ]);
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 508, column 5 - line 528, column 136): " + [ ctxs.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_ctxs, $copy_tree);
                };
                return $tco_result;
            };
        };
        var removeMaxNode = function ($copy_ctx) {
            return function ($copy_m) {
                var $tco_var_ctx = $copy_ctx;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(ctx, m) {
                    if (m instanceof Two && (m.value0 instanceof Leaf && m.value3 instanceof Leaf)) {
                        $tco_done = true;
                        return up(ctx)(Leaf.value);
                    };
                    if (m instanceof Two) {
                        $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                        $copy_m = m.value3;
                        return;
                    };
                    if (m instanceof Three && (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf))) {
                        $tco_done = true;
                        return up(new Data_List_Types.Cons(new TwoRight(Leaf.value, m.value1, m.value2), ctx))(Leaf.value);
                    };
                    if (m instanceof Three) {
                        $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
                        $copy_m = m.value6;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 540, column 5 - line 544, column 107): " + [ m.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_ctx, $copy_m);
                };
                return $tco_result;
            };
        };
        var maxNode = function ($copy_m) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(m) {
                if (m instanceof Two && m.value3 instanceof Leaf) {
                    $tco_done = true;
                    return {
                        key: m.value1,
                        value: m.value2
                    };
                };
                if (m instanceof Two) {
                    $copy_m = m.value3;
                    return;
                };
                if (m instanceof Three && m.value6 instanceof Leaf) {
                    $tco_done = true;
                    return {
                        key: m.value4,
                        value: m.value5
                    };
                };
                if (m instanceof Three) {
                    $copy_m = m.value6;
                    return;
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 531, column 33 - line 535, column 45): " + [ m.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_m);
            };
            return $tco_result;
        };
        var comp = Data_Ord.compare(dictOrd);
        var down = function ($copy_ctx) {
            return function ($copy_m) {
                var $tco_var_ctx = $copy_ctx;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(ctx, m) {
                    if (m instanceof Leaf) {
                        $tco_done = true;
                        return Data_Maybe.Nothing.value;
                    };
                    if (m instanceof Two) {
                        var v = comp(k)(m.value1);
                        if (m.value3 instanceof Leaf && v instanceof Data_Ordering.EQ) {
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, up(ctx)(Leaf.value)));
                        };
                        if (v instanceof Data_Ordering.EQ) {
                            var max = maxNode(m.value0);
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, removeMaxNode(new Data_List_Types.Cons(new TwoLeft(max.key, max.value, m.value3), ctx))(m.value0)));
                        };
                        if (v instanceof Data_Ordering.LT) {
                            $tco_var_ctx = new Data_List_Types.Cons(new TwoLeft(m.value1, m.value2, m.value3), ctx);
                            $copy_m = m.value0;
                            return;
                        };
                        $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                        $copy_m = m.value3;
                        return;
                    };
                    if (m instanceof Three) {
                        var leaves = (function () {
                            if (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf)) {
                                return true;
                            };
                            return false;
                        })();
                        var v = comp(k)(m.value4);
                        var v3 = comp(k)(m.value1);
                        if (leaves && v3 instanceof Data_Ordering.EQ) {
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, fromZipper(dictOrd)(ctx)(new Two(Leaf.value, m.value4, m.value5, Leaf.value))));
                        };
                        if (leaves && v instanceof Data_Ordering.EQ) {
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value5, fromZipper(dictOrd)(ctx)(new Two(Leaf.value, m.value1, m.value2, Leaf.value))));
                        };
                        if (v3 instanceof Data_Ordering.EQ) {
                            var max = maxNode(m.value0);
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, removeMaxNode(new Data_List_Types.Cons(new ThreeLeft(max.key, max.value, m.value3, m.value4, m.value5, m.value6), ctx))(m.value0)));
                        };
                        if (v instanceof Data_Ordering.EQ) {
                            var max = maxNode(m.value3);
                            $tco_done = true;
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value5, removeMaxNode(new Data_List_Types.Cons(new ThreeMiddle(m.value0, m.value1, m.value2, max.key, max.value, m.value6), ctx))(m.value3)));
                        };
                        if (v3 instanceof Data_Ordering.LT) {
                            $tco_var_ctx = new Data_List_Types.Cons(new ThreeLeft(m.value1, m.value2, m.value3, m.value4, m.value5, m.value6), ctx);
                            $copy_m = m.value0;
                            return;
                        };
                        if (v3 instanceof Data_Ordering.GT && v instanceof Data_Ordering.LT) {
                            $tco_var_ctx = new Data_List_Types.Cons(new ThreeMiddle(m.value0, m.value1, m.value2, m.value4, m.value5, m.value6), ctx);
                            $copy_m = m.value3;
                            return;
                        };
                        $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
                        $copy_m = m.value6;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 481, column 34 - line 504, column 80): " + [ m.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_ctx, $copy_m);
                };
                return $tco_result;
            };
        };
        return down(Data_List_Types.Nil.value);
    };
};
var foldableMap = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (m) {
            return Data_Foldable.foldMap(Data_List_Types.foldableList)(dictMonoid)(f)(values(m));
        };
    };
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldl(Data_List_Types.foldableList)(f)(z)(values(m));
        };
    };
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldr(Data_List_Types.foldableList)(f)(z)(values(m));
        };
    };
});
var traversableMap = new Data_Traversable.Traversable(function () {
    return foldableMap;
}, function () {
    return functorMap;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableMap)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            if (v instanceof Leaf) {
                return Control_Applicative.pure(dictApplicative)(Leaf.value);
            };
            if (v instanceof Two) {
                return Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Two.create)(Data_Traversable.traverse(traversableMap)(dictApplicative)(f)(v.value0)))(Control_Applicative.pure(dictApplicative)(v.value1)))(f(v.value2)))(Data_Traversable.traverse(traversableMap)(dictApplicative)(f)(v.value3));
            };
            if (v instanceof Three) {
                return Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Three.create)(Data_Traversable.traverse(traversableMap)(dictApplicative)(f)(v.value0)))(Control_Applicative.pure(dictApplicative)(v.value1)))(f(v.value2)))(Data_Traversable.traverse(traversableMap)(dictApplicative)(f)(v.value3)))(Control_Applicative.pure(dictApplicative)(v.value4)))(f(v.value5)))(Data_Traversable.traverse(traversableMap)(dictApplicative)(f)(v.value6));
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 119, column 1 - line 119, column 47): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
});
var foldSubmap = function (dictOrd) {
    return function (dictMonoid) {
        return function (kmin) {
            return function (kmax) {
                return function (f) {
                    var tooSmall = (function () {
                        if (kmin instanceof Data_Maybe.Just) {
                            return function (k) {
                                return Data_Ord.lessThan(dictOrd)(k)(kmin.value0);
                            };
                        };
                        if (kmin instanceof Data_Maybe.Nothing) {
                            return Data_Function["const"](false);
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 319, column 7 - line 323, column 22): " + [ kmin.constructor.name ]);
                    })();
                    var tooLarge = (function () {
                        if (kmax instanceof Data_Maybe.Just) {
                            return function (k) {
                                return Data_Ord.greaterThan(dictOrd)(k)(kmax.value0);
                            };
                        };
                        if (kmax instanceof Data_Maybe.Nothing) {
                            return Data_Function["const"](false);
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 326, column 7 - line 330, column 22): " + [ kmax.constructor.name ]);
                    })();
                    var inBounds = (function () {
                        if (kmin instanceof Data_Maybe.Just && kmax instanceof Data_Maybe.Just) {
                            return function (k) {
                                return Data_Ord.lessThanOrEq(dictOrd)(kmin.value0)(k) && Data_Ord.lessThanOrEq(dictOrd)(k)(kmax.value0);
                            };
                        };
                        if (kmin instanceof Data_Maybe.Just && kmax instanceof Data_Maybe.Nothing) {
                            return function (k) {
                                return Data_Ord.lessThanOrEq(dictOrd)(kmin.value0)(k);
                            };
                        };
                        if (kmin instanceof Data_Maybe.Nothing && kmax instanceof Data_Maybe.Just) {
                            return function (k) {
                                return Data_Ord.lessThanOrEq(dictOrd)(k)(kmax.value0);
                            };
                        };
                        if (kmin instanceof Data_Maybe.Nothing && kmax instanceof Data_Maybe.Nothing) {
                            return Data_Function["const"](true);
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 333, column 7 - line 341, column 21): " + [ kmin.constructor.name, kmax.constructor.name ]);
                    })();
                    var go = function (v) {
                        if (v instanceof Leaf) {
                            return Data_Monoid.mempty(dictMonoid);
                        };
                        if (v instanceof Two) {
                            return Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $633 = tooSmall(v.value1);
                                if ($633) {
                                    return Data_Monoid.mempty(dictMonoid);
                                };
                                return go(v.value0);
                            })())(Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $634 = inBounds(v.value1);
                                if ($634) {
                                    return f(v.value1)(v.value2);
                                };
                                return Data_Monoid.mempty(dictMonoid);
                            })())((function () {
                                var $635 = tooLarge(v.value1);
                                if ($635) {
                                    return Data_Monoid.mempty(dictMonoid);
                                };
                                return go(v.value3);
                            })()));
                        };
                        if (v instanceof Three) {
                            return Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $640 = tooSmall(v.value1);
                                if ($640) {
                                    return Data_Monoid.mempty(dictMonoid);
                                };
                                return go(v.value0);
                            })())(Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $641 = inBounds(v.value1);
                                if ($641) {
                                    return f(v.value1)(v.value2);
                                };
                                return Data_Monoid.mempty(dictMonoid);
                            })())(Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $642 = tooSmall(v.value4) || tooLarge(v.value1);
                                if ($642) {
                                    return Data_Monoid.mempty(dictMonoid);
                                };
                                return go(v.value3);
                            })())(Data_Semigroup.append(dictMonoid.Semigroup0())((function () {
                                var $643 = inBounds(v.value4);
                                if ($643) {
                                    return f(v.value4)(v.value5);
                                };
                                return Data_Monoid.mempty(dictMonoid);
                            })())((function () {
                                var $644 = tooLarge(v.value4);
                                if ($644) {
                                    return Data_Monoid.mempty(dictMonoid);
                                };
                                return go(v.value6);
                            })()))));
                        };
                        throw new Error("Failed pattern match at Data.Map.Internal (line 359, column 10 - line 371, column 54): " + [ v.constructor.name ]);
                    };
                    return go;
                };
            };
        };
    };
};
var findMin = (function () {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v1 instanceof Leaf) {
                    $tco_done = true;
                    return v;
                };
                if (v1 instanceof Two) {
                    $tco_var_v = new Data_Maybe.Just({
                        key: v1.value1,
                        value: v1.value2
                    });
                    $copy_v1 = v1.value0;
                    return;
                };
                if (v1 instanceof Three) {
                    $tco_var_v = new Data_Maybe.Just({
                        key: v1.value1,
                        value: v1.value2
                    });
                    $copy_v1 = v1.value0;
                    return;
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 297, column 5 - line 297, column 22): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(Data_Maybe.Nothing.value);
})();
var lookupGT = function (dictOrd) {
    return function (k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function (v) {
            if (v instanceof Leaf) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Two) {
                var v2 = comp(k)(v.value1);
                if (v2 instanceof Data_Ordering.EQ) {
                    return findMin(v.value3);
                };
                if (v2 instanceof Data_Ordering.LT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value0)));
                };
                if (v2 instanceof Data_Ordering.GT) {
                    return go(v.value3);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 276, column 33 - line 279, column 21): " + [ v2.constructor.name ]);
            };
            if (v instanceof Three) {
                var v3 = comp(k)(v.value1);
                if (v3 instanceof Data_Ordering.EQ) {
                    return findMin(new Two(v.value3, v.value4, v.value5, v.value6));
                };
                if (v3 instanceof Data_Ordering.LT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value0)));
                };
                if (v3 instanceof Data_Ordering.GT) {
                    return go(new Two(v.value3, v.value4, v.value5, v.value6));
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 280, column 45 - line 283, column 37): " + [ v3.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 275, column 5 - line 275, column 22): " + [ v.constructor.name ]);
        };
        return go;
    };
};
var findMax = (function () {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v1 instanceof Leaf) {
                    $tco_done = true;
                    return v;
                };
                if (v1 instanceof Two) {
                    $tco_var_v = new Data_Maybe.Just({
                        key: v1.value1,
                        value: v1.value2
                    });
                    $copy_v1 = v1.value3;
                    return;
                };
                if (v1 instanceof Three) {
                    $tco_var_v = new Data_Maybe.Just({
                        key: v1.value4,
                        value: v1.value5
                    });
                    $copy_v1 = v1.value6;
                    return;
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 289, column 5 - line 289, column 22): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(Data_Maybe.Nothing.value);
})();
var lookupLT = function (dictOrd) {
    return function (k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function (v) {
            if (v instanceof Leaf) {
                return Data_Maybe.Nothing.value;
            };
            if (v instanceof Two) {
                var v2 = comp(k)(v.value1);
                if (v2 instanceof Data_Ordering.EQ) {
                    return findMax(v.value0);
                };
                if (v2 instanceof Data_Ordering.GT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value1,
                        value: v.value2
                    })(go(v.value3)));
                };
                if (v2 instanceof Data_Ordering.LT) {
                    return go(v.value0);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 242, column 33 - line 245, column 20): " + [ v2.constructor.name ]);
            };
            if (v instanceof Three) {
                var v3 = comp(k)(v.value4);
                if (v3 instanceof Data_Ordering.EQ) {
                    return findMax(new Two(v.value0, v.value1, v.value2, v.value3));
                };
                if (v3 instanceof Data_Ordering.GT) {
                    return Data_Maybe.Just.create(Data_Maybe.fromMaybe({
                        key: v.value4,
                        value: v.value5
                    })(go(v.value6)));
                };
                if (v3 instanceof Data_Ordering.LT) {
                    return go(new Two(v.value0, v.value1, v.value2, v.value3));
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 246, column 45 - line 249, column 36): " + [ v3.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 241, column 5 - line 241, column 22): " + [ v.constructor.name ]);
        };
        return go;
    };
};
var eqMap = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (m1) {
            return function (m2) {
                return Data_Eq.eq(Data_Eq.eqArray(Data_Tuple.eqTuple(dictEq)(dictEq1)))(toAscArray(m1))(toAscArray(m2));
            };
        });
    };
};
var ordMap = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqMap(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (m1) {
            return function (m2) {
                return Data_Ord.compare(Data_Ord.ordArray(Data_Tuple.ordTuple(dictOrd)(dictOrd1)))(toAscArray(m1))(toAscArray(m2));
            };
        });
    };
};
var eq1Map = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqMap(dictEq)(dictEq1));
    });
};
var ord1Map = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Map(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordMap(dictOrd)(dictOrd1));
    });
};
var empty = Leaf.value;
var fromFoldable = function (dictOrd) {
    return function (dictFoldable) {
        return Data_Foldable.foldl(dictFoldable)(function (m) {
            return function (v) {
                return insert(dictOrd)(v.value0)(v.value1)(m);
            };
        })(empty);
    };
};
var filterWithKey = function (dictOrd) {
    return function (predicate) {
        return function ($758) {
            return fromFoldable(dictOrd)(Data_List_Lazy_Types.foldableList)(Data_List_Lazy.filter(Data_Tuple.uncurry(predicate))(toUnfoldable(Data_List_Lazy_Types.unfoldableList)($758)));
        };
    };
};
var filter = function (dictOrd) {
    return function (predicate) {
        return filterWithKey(dictOrd)(Data_Function["const"](predicate));
    };
};
var filterKeys = function (dictOrd) {
    return function (predicate) {
        return filterWithKey(dictOrd)(function ($759) {
            return Data_Function["const"](predicate($759));
        });
    };
};
var fromFoldableWithIndex = function (dictOrd) {
    return function (dictFoldableWithIndex) {
        return Data_FoldableWithIndex.foldlWithIndex(dictFoldableWithIndex)(function (k) {
            return function (m) {
                return function (v) {
                    return insert(dictOrd)(k)(v)(m);
                };
            };
        })(empty);
    };
};
var intersectionWith = function (dictOrd) {
    return function (f) {
        return function (m1) {
            return function (m2) {
                var go = function ($copy_v) {
                    return function ($copy_v1) {
                        return function ($copy_m) {
                            var $tco_var_v = $copy_v;
                            var $tco_var_v1 = $copy_v1;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(v, v1, m) {
                                if (v instanceof Data_List_Types.Nil) {
                                    $tco_done = true;
                                    return m;
                                };
                                if (v1 instanceof Data_List_Types.Nil) {
                                    $tco_done = true;
                                    return m;
                                };
                                if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                                    var v2 = Data_Ord.compare(dictOrd)(v.value0.value0)(v1.value0.value0);
                                    if (v2 instanceof Data_Ordering.LT) {
                                        $tco_var_v = v.value1;
                                        $tco_var_v1 = v1;
                                        $copy_m = m;
                                        return;
                                    };
                                    if (v2 instanceof Data_Ordering.EQ) {
                                        $tco_var_v = v.value1;
                                        $tco_var_v1 = v1.value1;
                                        $copy_m = insert(dictOrd)(v.value0.value0)(f(v.value0.value1)(v1.value0.value1))(m);
                                        return;
                                    };
                                    if (v2 instanceof Data_Ordering.GT) {
                                        $tco_var_v = v;
                                        $tco_var_v1 = v1.value1;
                                        $copy_m = m;
                                        return;
                                    };
                                    throw new Error("Failed pattern match at Data.Map.Internal (line 641, column 5 - line 644, column 27): " + [ v2.constructor.name ]);
                                };
                                throw new Error("Failed pattern match at Data.Map.Internal (line 638, column 3 - line 638, column 17): " + [ v.constructor.name, v1.constructor.name, m.constructor.name ]);
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_m);
                            };
                            return $tco_result;
                        };
                    };
                };
                return go(toUnfoldable(Data_List_Types.unfoldableList)(m1))(toUnfoldable(Data_List_Types.unfoldableList)(m2))(empty);
            };
        };
    };
};
var intersection = function (dictOrd) {
    return intersectionWith(dictOrd)(Data_Function["const"]);
};
var $$delete = function (dictOrd) {
    return function (k) {
        return function (m) {
            return Data_Maybe.maybe(m)(Data_Tuple.snd)(pop(dictOrd)(k)(m));
        };
    };
};
var difference = function (dictOrd) {
    return function (m1) {
        return function (m2) {
            return Data_Foldable.foldl(Data_List_Types.foldableList)(Data_Function.flip($$delete(dictOrd)))(m1)(keys(m2));
        };
    };
};
var checkValid = function (tree) {
    var allHeights = function (v) {
        if (v instanceof Leaf) {
            return Control_Applicative.pure(Data_List_Types.applicativeList)(0);
        };
        if (v instanceof Two) {
            return Data_Functor.map(Data_List_Types.functorList)(function (n) {
                return n + 1 | 0;
            })(Data_Semigroup.append(Data_List_Types.semigroupList)(allHeights(v.value0))(allHeights(v.value3)));
        };
        if (v instanceof Three) {
            return Data_Functor.map(Data_List_Types.functorList)(function (n) {
                return n + 1 | 0;
            })(Data_Semigroup.append(Data_List_Types.semigroupList)(allHeights(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(allHeights(v.value3))(allHeights(v.value6))));
        };
        throw new Error("Failed pattern match at Data.Map.Internal (line 188, column 3 - line 188, column 36): " + [ v.constructor.name ]);
    };
    return Data_List.length(Data_List.nub(Data_Eq.eqInt)(allHeights(tree))) === 1;
};
var asList = Control_Category.identity(Control_Category.categoryFn);
var foldableWithIndexMap = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableMap;
}, function (dictMonoid) {
    return function (f) {
        return function (m) {
            return Data_Foldable.foldMap(Data_List_Types.foldableList)(dictMonoid)(Data_Tuple.uncurry(f))(asList(toUnfoldable(Data_List_Types.unfoldableList)(m)));
        };
    };
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldl(Data_List_Types.foldableList)(function ($760) {
                return Data_Tuple.uncurry(Data_Function.flip(f)($760));
            })(z)(asList(toUnfoldable(Data_List_Types.unfoldableList)(m)));
        };
    };
}, function (f) {
    return function (z) {
        return function (m) {
            return Data_Foldable.foldr(Data_List_Types.foldableList)(Data_Tuple.uncurry(f))(z)(asList(toUnfoldable(Data_List_Types.unfoldableList)(m)));
        };
    };
});
var mapMaybeWithKey = function (dictOrd) {
    return function (f) {
        return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexMap)(function (k) {
            return function (a) {
                return function (acc) {
                    return Data_Maybe.maybe(acc)(function (b) {
                        return insert(dictOrd)(k)(b)(acc);
                    })(f(k)(a));
                };
            };
        })(empty);
    };
};
var mapMaybe = function (dictOrd) {
    return function ($761) {
        return mapMaybeWithKey(dictOrd)(Data_Function["const"]($761));
    };
};
var traversableWithIndexMap = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexMap;
}, function () {
    return functorWithIndexMap;
}, function () {
    return traversableMap;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            if (v instanceof Leaf) {
                return Control_Applicative.pure(dictApplicative)(Leaf.value);
            };
            if (v instanceof Two) {
                return Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Two.create)(Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexMap)(dictApplicative)(f)(v.value0)))(Control_Applicative.pure(dictApplicative)(v.value1)))(f(v.value1)(v.value2)))(Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexMap)(dictApplicative)(f)(v.value3));
            };
            if (v instanceof Three) {
                return Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Three.create)(Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexMap)(dictApplicative)(f)(v.value0)))(Control_Applicative.pure(dictApplicative)(v.value1)))(f(v.value1)(v.value2)))(Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexMap)(dictApplicative)(f)(v.value3)))(Control_Applicative.pure(dictApplicative)(v.value4)))(f(v.value4)(v.value5)))(Data_TraversableWithIndex.traverseWithIndex(traversableWithIndexMap)(dictApplicative)(f)(v.value6));
            };
            throw new Error("Failed pattern match at Data.Map.Internal (line 136, column 1 - line 136, column 67): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
});
var alter = function (dictOrd) {
    return function (f) {
        return function (k) {
            return function (m) {
                var v = f(lookup(dictOrd)(k)(m));
                if (v instanceof Data_Maybe.Nothing) {
                    return $$delete(dictOrd)(k)(m);
                };
                if (v instanceof Data_Maybe.Just) {
                    return insert(dictOrd)(k)(v.value0)(m);
                };
                throw new Error("Failed pattern match at Data.Map.Internal (line 549, column 15 - line 551, column 25): " + [ v.constructor.name ]);
            };
        };
    };
};
var fromFoldableWith = function (dictOrd) {
    return function (dictFoldable) {
        return function (f) {
            var combine = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_Maybe.Just) {
                        return Data_Maybe.Just.create(f(v)(v1.value0));
                    };
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return new Data_Maybe.Just(v);
                    };
                    throw new Error("Failed pattern match at Data.Map.Internal (line 566, column 3 - line 566, column 38): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return Data_Foldable.foldl(dictFoldable)(function (m) {
                return function (v) {
                    return alter(dictOrd)(combine(v.value1))(v.value0)(m);
                };
            })(empty);
        };
    };
};
var insertWith = function (dictOrd) {
    return function (f) {
        return function (k) {
            return function (v) {
                return alter(dictOrd)(function ($762) {
                    return Data_Maybe.Just.create(Data_Maybe.maybe(v)(Data_Function.flip(f)(v))($762));
                })(k);
            };
        };
    };
};
var unionWith = function (dictOrd) {
    return function (f) {
        return function (m1) {
            return function (m2) {
                var go = function (m) {
                    return function (v) {
                        return alter(dictOrd)(function ($763) {
                            return Data_Maybe.Just.create(Data_Maybe.maybe(v.value1)(f(v.value1))($763));
                        })(v.value0)(m);
                    };
                };
                return Data_Foldable.foldl(Data_List_Types.foldableList)(go)(m2)(toUnfoldable(Data_List_Types.unfoldableList)(m1));
            };
        };
    };
};
var union = function (dictOrd) {
    return unionWith(dictOrd)(Data_Function["const"]);
};
var semigroupMap = function (dictOrd) {
    return new Data_Semigroup.Semigroup(union(dictOrd));
};
var monoidMap = function (dictOrd) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMap(dictOrd);
    }, empty);
};
var submap = function (dictOrd) {
    return function (kmin) {
        return function (kmax) {
            return foldSubmap(dictOrd)(monoidMap(dictOrd))(kmin)(kmax)(singleton);
        };
    };
};
var unions = function (dictOrd) {
    return function (dictFoldable) {
        return Data_Foldable.foldl(dictFoldable)(union(dictOrd))(empty);
    };
};
var update = function (dictOrd) {
    return function (f) {
        return function (k) {
            return function (m) {
                return alter(dictOrd)(Data_Maybe.maybe(Data_Maybe.Nothing.value)(f))(k)(m);
            };
        };
    };
};
module.exports = {
    showTree: showTree,
    empty: empty,
    isEmpty: isEmpty,
    singleton: singleton,
    checkValid: checkValid,
    insert: insert,
    insertWith: insertWith,
    lookup: lookup,
    lookupLE: lookupLE,
    lookupLT: lookupLT,
    lookupGE: lookupGE,
    lookupGT: lookupGT,
    findMin: findMin,
    findMax: findMax,
    foldSubmap: foldSubmap,
    submap: submap,
    fromFoldable: fromFoldable,
    fromFoldableWith: fromFoldableWith,
    fromFoldableWithIndex: fromFoldableWithIndex,
    toUnfoldable: toUnfoldable,
    toUnfoldableUnordered: toUnfoldableUnordered,
    "delete": $$delete,
    pop: pop,
    member: member,
    alter: alter,
    update: update,
    keys: keys,
    values: values,
    union: union,
    unionWith: unionWith,
    unions: unions,
    intersection: intersection,
    intersectionWith: intersectionWith,
    difference: difference,
    isSubmap: isSubmap,
    size: size,
    filterWithKey: filterWithKey,
    filterKeys: filterKeys,
    filter: filter,
    mapMaybeWithKey: mapMaybeWithKey,
    mapMaybe: mapMaybe,
    eq1Map: eq1Map,
    eqMap: eqMap,
    ord1Map: ord1Map,
    ordMap: ordMap,
    showMap: showMap,
    semigroupMap: semigroupMap,
    monoidMap: monoidMap,
    functorMap: functorMap,
    functorWithIndexMap: functorWithIndexMap,
    foldableMap: foldableMap,
    foldableWithIndexMap: foldableWithIndexMap,
    traversableMap: traversableMap,
    traversableWithIndexMap: traversableWithIndexMap
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.HeytingAlgebra/index.js":68,"../Data.List.Lazy.Types/index.js":72,"../Data.List.Lazy/index.js":73,"../Data.List.Types/index.js":74,"../Data.List/index.js":75,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129}],77:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var First = function (x) {
    return x;
};
var showFirst = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "First (" + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
    });
};
var semigroupFirst = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v instanceof Data_Maybe.Just) {
            return v;
        };
        return v1;
    };
});
var ordFirst = function (dictOrd) {
    return Data_Maybe.ordMaybe(dictOrd);
};
var ord1First = Data_Maybe.ord1Maybe;
var newtypeFirst = new Data_Newtype.Newtype(function (n) {
    return n;
}, First);
var monoidFirst = new Data_Monoid.Monoid(function () {
    return semigroupFirst;
}, Data_Maybe.Nothing.value);
var monadFirst = Data_Maybe.monadMaybe;
var invariantFirst = Data_Maybe.invariantMaybe;
var functorFirst = Data_Maybe.functorMaybe;
var extendFirst = Data_Maybe.extendMaybe;
var eqFirst = function (dictEq) {
    return Data_Maybe.eqMaybe(dictEq);
};
var eq1First = Data_Maybe.eq1Maybe;
var boundedFirst = function (dictBounded) {
    return Data_Maybe.boundedMaybe(dictBounded);
};
var bindFirst = Data_Maybe.bindMaybe;
var applyFirst = Data_Maybe.applyMaybe;
var applicativeFirst = Data_Maybe.applicativeMaybe;
var altFirst = new Control_Alt.Alt(function () {
    return functorFirst;
}, Data_Semigroup.append(semigroupFirst));
var plusFirst = new Control_Plus.Plus(function () {
    return altFirst;
}, Data_Monoid.mempty(monoidFirst));
var alternativeFirst = new Control_Alternative.Alternative(function () {
    return applicativeFirst;
}, function () {
    return plusFirst;
});
var monadZeroFirst = new Control_MonadZero.MonadZero(function () {
    return alternativeFirst;
}, function () {
    return monadFirst;
});
module.exports = {
    First: First,
    newtypeFirst: newtypeFirst,
    eqFirst: eqFirst,
    eq1First: eq1First,
    ordFirst: ordFirst,
    ord1First: ord1First,
    boundedFirst: boundedFirst,
    functorFirst: functorFirst,
    invariantFirst: invariantFirst,
    applyFirst: applyFirst,
    applicativeFirst: applicativeFirst,
    bindFirst: bindFirst,
    monadFirst: monadFirst,
    extendFirst: extendFirst,
    showFirst: showFirst,
    semigroupFirst: semigroupFirst,
    monoidFirst: monoidFirst,
    altFirst: altFirst,
    plusFirst: plusFirst,
    alternativeFirst: alternativeFirst,
    monadZeroFirst: monadZeroFirst
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],78:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Last = function (x) {
    return x;
};
var showLast = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Last " + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
    });
};
var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v1 instanceof Data_Maybe.Just) {
            return v1;
        };
        if (v1 instanceof Data_Maybe.Nothing) {
            return v;
        };
        throw new Error("Failed pattern match at Data.Maybe.Last (line 52, column 1 - line 52, column 45): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var ordLast = function (dictOrd) {
    return Data_Maybe.ordMaybe(dictOrd);
};
var ord1Last = Data_Maybe.ord1Maybe;
var newtypeLast = new Data_Newtype.Newtype(function (n) {
    return n;
}, Last);
var monoidLast = new Data_Monoid.Monoid(function () {
    return semigroupLast;
}, Data_Maybe.Nothing.value);
var monadLast = Data_Maybe.monadMaybe;
var invariantLast = Data_Maybe.invariantMaybe;
var functorLast = Data_Maybe.functorMaybe;
var extendLast = Data_Maybe.extendMaybe;
var eqLast = function (dictEq) {
    return Data_Maybe.eqMaybe(dictEq);
};
var eq1Last = Data_Maybe.eq1Maybe;
var boundedLast = function (dictBounded) {
    return Data_Maybe.boundedMaybe(dictBounded);
};
var bindLast = Data_Maybe.bindMaybe;
var applyLast = Data_Maybe.applyMaybe;
var applicativeLast = Data_Maybe.applicativeMaybe;
var altLast = new Control_Alt.Alt(function () {
    return functorLast;
}, Data_Semigroup.append(semigroupLast));
var plusLast = new Control_Plus.Plus(function () {
    return altLast;
}, Data_Monoid.mempty(monoidLast));
var alternativeLast = new Control_Alternative.Alternative(function () {
    return applicativeLast;
}, function () {
    return plusLast;
});
var monadZeroLast = new Control_MonadZero.MonadZero(function () {
    return alternativeLast;
}, function () {
    return monadLast;
});
module.exports = {
    Last: Last,
    newtypeLast: newtypeLast,
    eqLast: eqLast,
    eq1Last: eq1Last,
    ordLast: ordLast,
    ord1Last: ord1Last,
    boundedLast: boundedLast,
    functorLast: functorLast,
    invariantLast: invariantLast,
    applyLast: applyLast,
    applicativeLast: applicativeLast,
    bindLast: bindLast,
    monadLast: monadLast,
    extendLast: extendLast,
    showLast: showLast,
    semigroupLast: semigroupLast,
    monoidLast: monoidLast,
    altLast: altLast,
    plusLast: plusLast,
    alternativeLast: alternativeLast,
    monadZeroLast: monadZeroLast
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],79:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Nothing = (function () {
    function Nothing() {

    };
    Nothing.value = new Nothing();
    return Nothing;
})();
var Just = (function () {
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    return Just;
})();
var showMaybe = function (dictShow) {
    return new Data_Show.Show(function (v) {
        if (v instanceof Just) {
            return "(Just " + (Data_Show.show(dictShow)(v.value0) + ")");
        };
        if (v instanceof Nothing) {
            return "Nothing";
        };
        throw new Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 205, column 47): " + [ v.constructor.name ]);
    });
};
var semigroupMaybe = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            if (v instanceof Nothing) {
                return v1;
            };
            if (v1 instanceof Nothing) {
                return v;
            };
            if (v instanceof Just && v1 instanceof Just) {
                return new Just(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Maybe (line 174, column 1 - line 174, column 62): " + [ v.constructor.name, v1.constructor.name ]);
        };
    });
};
var optional = function (dictAlternative) {
    return function (a) {
        return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0())(Just.create)(a))(Control_Applicative.pure(dictAlternative.Applicative0())(Nothing.value));
    };
};
var monoidMaybe = function (dictSemigroup) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMaybe(dictSemigroup);
    }, Nothing.value);
};
var maybe$prime = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v(Data_Unit.unit);
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 230, column 1 - line 230, column 62): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var maybe = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v;
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var isNothing = maybe(true)(Data_Function["const"](false));
var isJust = maybe(false)(Data_Function["const"](true));
var functorMaybe = new Data_Functor.Functor(function (v) {
    return function (v1) {
        if (v1 instanceof Just) {
            return new Just(v(v1.value0));
        };
        return Nothing.value;
    };
});
var invariantMaybe = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorMaybe));
var fromMaybe$prime = function (a) {
    return maybe$prime(a)(Control_Category.identity(Control_Category.categoryFn));
};
var fromMaybe = function (a) {
    return maybe(a)(Control_Category.identity(Control_Category.categoryFn));
};
var fromJust = function (dictPartial) {
    return function (v) {
        if (v instanceof Just) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [ v.constructor.name ]);
    };
};
var extendMaybe = new Control_Extend.Extend(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Nothing) {
            return Nothing.value;
        };
        return new Just(v(v1));
    };
});
var eqMaybe = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            if (x instanceof Nothing && y instanceof Nothing) {
                return true;
            };
            if (x instanceof Just && y instanceof Just) {
                return Data_Eq.eq(dictEq)(x.value0)(y.value0);
            };
            return false;
        };
    });
};
var ordMaybe = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqMaybe(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            if (x instanceof Nothing && y instanceof Nothing) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Nothing) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Nothing) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Just && y instanceof Just) {
                return Data_Ord.compare(dictOrd)(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 194, column 8 - line 194, column 51): " + [ x.constructor.name, y.constructor.name ]);
        };
    });
};
var eq1Maybe = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqMaybe(dictEq));
});
var ord1Maybe = new Data_Ord.Ord1(function () {
    return eq1Maybe;
}, function (dictOrd) {
    return Data_Ord.compare(ordMaybe(dictOrd));
});
var boundedMaybe = function (dictBounded) {
    return new Data_Bounded.Bounded(function () {
        return ordMaybe(dictBounded.Ord0());
    }, Nothing.value, new Just(Data_Bounded.top(dictBounded)));
};
var applyMaybe = new Control_Apply.Apply(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Just) {
            return Data_Functor.map(functorMaybe)(v.value0)(v1);
        };
        if (v instanceof Nothing) {
            return Nothing.value;
        };
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 67, column 35): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var bindMaybe = new Control_Bind.Bind(function () {
    return applyMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Just) {
            return v1(v.value0);
        };
        if (v instanceof Nothing) {
            return Nothing.value;
        };
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 125, column 33): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var applicativeMaybe = new Control_Applicative.Applicative(function () {
    return applyMaybe;
}, Just.create);
var monadMaybe = new Control_Monad.Monad(function () {
    return applicativeMaybe;
}, function () {
    return bindMaybe;
});
var altMaybe = new Control_Alt.Alt(function () {
    return functorMaybe;
}, function (v) {
    return function (v1) {
        if (v instanceof Nothing) {
            return v1;
        };
        return v;
    };
});
var plusMaybe = new Control_Plus.Plus(function () {
    return altMaybe;
}, Nothing.value);
var alternativeMaybe = new Control_Alternative.Alternative(function () {
    return applicativeMaybe;
}, function () {
    return plusMaybe;
});
var monadZeroMaybe = new Control_MonadZero.MonadZero(function () {
    return alternativeMaybe;
}, function () {
    return monadMaybe;
});
module.exports = {
    Nothing: Nothing,
    Just: Just,
    maybe: maybe,
    "maybe'": maybe$prime,
    fromMaybe: fromMaybe,
    "fromMaybe'": fromMaybe$prime,
    isJust: isJust,
    isNothing: isNothing,
    fromJust: fromJust,
    optional: optional,
    functorMaybe: functorMaybe,
    applyMaybe: applyMaybe,
    applicativeMaybe: applicativeMaybe,
    altMaybe: altMaybe,
    plusMaybe: plusMaybe,
    alternativeMaybe: alternativeMaybe,
    bindMaybe: bindMaybe,
    monadMaybe: monadMaybe,
    monadZeroMaybe: monadZeroMaybe,
    extendMaybe: extendMaybe,
    invariantMaybe: invariantMaybe,
    semigroupMaybe: semigroupMaybe,
    monoidMaybe: monoidMaybe,
    eqMaybe: eqMaybe,
    eq1Maybe: eq1Maybe,
    ordMaybe: ordMaybe,
    ord1Maybe: ord1Maybe,
    boundedMaybe: boundedMaybe,
    showMaybe: showMaybe
};

},{"../Control.Alt/index.js":3,"../Control.Alternative/index.js":4,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Category/index.js":12,"../Control.Extend/index.js":15,"../Control.Monad/index.js":27,"../Control.MonadZero/index.js":29,"../Control.Plus/index.js":30,"../Data.Bounded/index.js":48,"../Data.Eq/index.js":55,"../Data.Function/index.js":61,"../Data.Functor.Invariant/index.js":62,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Unit/index.js":133}],80:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Additive = function (x) {
    return x;
};
var showAdditive = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Additive " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupAdditive = function (dictSemiring) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Semiring.add(dictSemiring)(v)(v1);
        };
    });
};
var ordAdditive = function (dictOrd) {
    return dictOrd;
};
var monoidAdditive = function (dictSemiring) {
    return new Data_Monoid.Monoid(function () {
        return semigroupAdditive(dictSemiring);
    }, Data_Semiring.zero(dictSemiring));
};
var functorAdditive = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqAdditive = function (dictEq) {
    return dictEq;
};
var eq1Additive = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqAdditive(dictEq));
});
var ord1Additive = new Data_Ord.Ord1(function () {
    return eq1Additive;
}, function (dictOrd) {
    return Data_Ord.compare(ordAdditive(dictOrd));
});
var boundedAdditive = function (dictBounded) {
    return dictBounded;
};
var applyAdditive = new Control_Apply.Apply(function () {
    return functorAdditive;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindAdditive = new Control_Bind.Bind(function () {
    return applyAdditive;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeAdditive = new Control_Applicative.Applicative(function () {
    return applyAdditive;
}, Additive);
var monadAdditive = new Control_Monad.Monad(function () {
    return applicativeAdditive;
}, function () {
    return bindAdditive;
});
module.exports = {
    Additive: Additive,
    eqAdditive: eqAdditive,
    eq1Additive: eq1Additive,
    ordAdditive: ordAdditive,
    ord1Additive: ord1Additive,
    boundedAdditive: boundedAdditive,
    showAdditive: showAdditive,
    functorAdditive: functorAdditive,
    applyAdditive: applyAdditive,
    applicativeAdditive: applicativeAdditive,
    bindAdditive: bindAdditive,
    monadAdditive: monadAdditive,
    semigroupAdditive: semigroupAdditive,
    monoidAdditive: monoidAdditive
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109}],81:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Conj = function (x) {
    return x;
};
var showConj = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Conj " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringConj = function (dictHeytingAlgebra) {
    return new Data_Semiring.Semiring(function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
        };
    }, function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
        };
    }, Data_HeytingAlgebra.ff(dictHeytingAlgebra), Data_HeytingAlgebra.tt(dictHeytingAlgebra));
};
var semigroupConj = function (dictHeytingAlgebra) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
        };
    });
};
var ordConj = function (dictOrd) {
    return dictOrd;
};
var monoidConj = function (dictHeytingAlgebra) {
    return new Data_Monoid.Monoid(function () {
        return semigroupConj(dictHeytingAlgebra);
    }, Data_HeytingAlgebra.tt(dictHeytingAlgebra));
};
var functorConj = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqConj = function (dictEq) {
    return dictEq;
};
var eq1Conj = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqConj(dictEq));
});
var ord1Conj = new Data_Ord.Ord1(function () {
    return eq1Conj;
}, function (dictOrd) {
    return Data_Ord.compare(ordConj(dictOrd));
});
var boundedConj = function (dictBounded) {
    return dictBounded;
};
var applyConj = new Control_Apply.Apply(function () {
    return functorConj;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindConj = new Control_Bind.Bind(function () {
    return applyConj;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeConj = new Control_Applicative.Applicative(function () {
    return applyConj;
}, Conj);
var monadConj = new Control_Monad.Monad(function () {
    return applicativeConj;
}, function () {
    return bindConj;
});
module.exports = {
    Conj: Conj,
    eqConj: eqConj,
    eq1Conj: eq1Conj,
    ordConj: ordConj,
    ord1Conj: ord1Conj,
    boundedConj: boundedConj,
    showConj: showConj,
    functorConj: functorConj,
    applyConj: applyConj,
    applicativeConj: applicativeConj,
    bindConj: bindConj,
    monadConj: monadConj,
    semigroupConj: semigroupConj,
    monoidConj: monoidConj,
    semiringConj: semiringConj
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109}],82:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Disj = function (x) {
    return x;
};
var showDisj = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Disj " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringDisj = function (dictHeytingAlgebra) {
    return new Data_Semiring.Semiring(function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
        };
    }, function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
        };
    }, Data_HeytingAlgebra.tt(dictHeytingAlgebra), Data_HeytingAlgebra.ff(dictHeytingAlgebra));
};
var semigroupDisj = function (dictHeytingAlgebra) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
        };
    });
};
var ordDisj = function (dictOrd) {
    return dictOrd;
};
var monoidDisj = function (dictHeytingAlgebra) {
    return new Data_Monoid.Monoid(function () {
        return semigroupDisj(dictHeytingAlgebra);
    }, Data_HeytingAlgebra.ff(dictHeytingAlgebra));
};
var functorDisj = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqDisj = function (dictEq) {
    return dictEq;
};
var eq1Disj = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqDisj(dictEq));
});
var ord1Disj = new Data_Ord.Ord1(function () {
    return eq1Disj;
}, function (dictOrd) {
    return Data_Ord.compare(ordDisj(dictOrd));
});
var boundedDisj = function (dictBounded) {
    return dictBounded;
};
var applyDisj = new Control_Apply.Apply(function () {
    return functorDisj;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindDisj = new Control_Bind.Bind(function () {
    return applyDisj;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeDisj = new Control_Applicative.Applicative(function () {
    return applyDisj;
}, Disj);
var monadDisj = new Control_Monad.Monad(function () {
    return applicativeDisj;
}, function () {
    return bindDisj;
});
module.exports = {
    Disj: Disj,
    eqDisj: eqDisj,
    eq1Disj: eq1Disj,
    ordDisj: ordDisj,
    ord1Disj: ord1Disj,
    boundedDisj: boundedDisj,
    showDisj: showDisj,
    functorDisj: functorDisj,
    applyDisj: applyDisj,
    applicativeDisj: applicativeDisj,
    bindDisj: bindDisj,
    monadDisj: monadDisj,
    semigroupDisj: semigroupDisj,
    monoidDisj: monoidDisj,
    semiringDisj: semiringDisj
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.HeytingAlgebra/index.js":68,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109}],83:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Dual = function (x) {
    return x;
};
var showDual = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Dual " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupDual = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Semigroup.append(dictSemigroup)(v1)(v);
        };
    });
};
var ordDual = function (dictOrd) {
    return dictOrd;
};
var monoidDual = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupDual(dictMonoid.Semigroup0());
    }, Data_Monoid.mempty(dictMonoid));
};
var functorDual = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqDual = function (dictEq) {
    return dictEq;
};
var eq1Dual = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqDual(dictEq));
});
var ord1Dual = new Data_Ord.Ord1(function () {
    return eq1Dual;
}, function (dictOrd) {
    return Data_Ord.compare(ordDual(dictOrd));
});
var boundedDual = function (dictBounded) {
    return dictBounded;
};
var applyDual = new Control_Apply.Apply(function () {
    return functorDual;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindDual = new Control_Bind.Bind(function () {
    return applyDual;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeDual = new Control_Applicative.Applicative(function () {
    return applyDual;
}, Dual);
var monadDual = new Control_Monad.Monad(function () {
    return applicativeDual;
}, function () {
    return bindDual;
});
module.exports = {
    Dual: Dual,
    eqDual: eqDual,
    eq1Dual: eq1Dual,
    ordDual: ordDual,
    ord1Dual: ord1Dual,
    boundedDual: boundedDual,
    showDual: showDual,
    functorDual: functorDual,
    applyDual: applyDual,
    applicativeDual: applicativeDual,
    bindDual: bindDual,
    monadDual: monadDual,
    semigroupDual: semigroupDual,
    monoidDual: monoidDual
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],84:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Endo = function (x) {
    return x;
};
var showEndo = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Endo " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupEndo = function (dictSemigroupoid) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Control_Semigroupoid.compose(dictSemigroupoid)(v)(v1);
        };
    });
};
var ordEndo = function (dictOrd) {
    return dictOrd;
};
var monoidEndo = function (dictCategory) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEndo(dictCategory.Semigroupoid0());
    }, Control_Category.identity(dictCategory));
};
var eqEndo = function (dictEq) {
    return dictEq;
};
var boundedEndo = function (dictBounded) {
    return dictBounded;
};
module.exports = {
    Endo: Endo,
    eqEndo: eqEndo,
    ordEndo: ordEndo,
    boundedEndo: boundedEndo,
    showEndo: showEndo,
    semigroupEndo: semigroupEndo,
    monoidEndo: monoidEndo
};

},{"../Control.Category/index.js":12,"../Control.Semigroupoid/index.js":31,"../Data.Monoid/index.js":86,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],85:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Multiplicative = function (x) {
    return x;
};
var showMultiplicative = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Multiplicative " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupMultiplicative = function (dictSemiring) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Semiring.mul(dictSemiring)(v)(v1);
        };
    });
};
var ordMultiplicative = function (dictOrd) {
    return dictOrd;
};
var monoidMultiplicative = function (dictSemiring) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMultiplicative(dictSemiring);
    }, Data_Semiring.one(dictSemiring));
};
var functorMultiplicative = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqMultiplicative = function (dictEq) {
    return dictEq;
};
var eq1Multiplicative = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqMultiplicative(dictEq));
});
var ord1Multiplicative = new Data_Ord.Ord1(function () {
    return eq1Multiplicative;
}, function (dictOrd) {
    return Data_Ord.compare(ordMultiplicative(dictOrd));
});
var boundedMultiplicative = function (dictBounded) {
    return dictBounded;
};
var applyMultiplicative = new Control_Apply.Apply(function () {
    return functorMultiplicative;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindMultiplicative = new Control_Bind.Bind(function () {
    return applyMultiplicative;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeMultiplicative = new Control_Applicative.Applicative(function () {
    return applyMultiplicative;
}, Multiplicative);
var monadMultiplicative = new Control_Monad.Monad(function () {
    return applicativeMultiplicative;
}, function () {
    return bindMultiplicative;
});
module.exports = {
    Multiplicative: Multiplicative,
    eqMultiplicative: eqMultiplicative,
    eq1Multiplicative: eq1Multiplicative,
    ordMultiplicative: ordMultiplicative,
    ord1Multiplicative: ord1Multiplicative,
    boundedMultiplicative: boundedMultiplicative,
    showMultiplicative: showMultiplicative,
    functorMultiplicative: functorMultiplicative,
    applyMultiplicative: applyMultiplicative,
    applicativeMultiplicative: applicativeMultiplicative,
    bindMultiplicative: bindMultiplicative,
    monadMultiplicative: monadMultiplicative,
    semigroupMultiplicative: semigroupMultiplicative,
    monoidMultiplicative: monoidMultiplicative
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109}],86:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var MonoidRecord = function (SemigroupRecord0, memptyRecord) {
    this.SemigroupRecord0 = SemigroupRecord0;
    this.memptyRecord = memptyRecord;
};
var Monoid = function (Semigroup0, mempty) {
    this.Semigroup0 = Semigroup0;
    this.mempty = mempty;
};
var monoidUnit = new Monoid(function () {
    return Data_Semigroup.semigroupUnit;
}, Data_Unit.unit);
var monoidString = new Monoid(function () {
    return Data_Semigroup.semigroupString;
}, "");
var monoidRecordNil = new MonoidRecord(function () {
    return Data_Semigroup.semigroupRecordNil;
}, function (v) {
    return {};
});
var monoidOrdering = new Monoid(function () {
    return Data_Ordering.semigroupOrdering;
}, Data_Ordering.EQ.value);
var monoidArray = new Monoid(function () {
    return Data_Semigroup.semigroupArray;
}, [  ]);
var memptyRecord = function (dict) {
    return dict.memptyRecord;
};
var monoidRecord = function (dictRowToList) {
    return function (dictMonoidRecord) {
        return new Monoid(function () {
            return Data_Semigroup.semigroupRecord(dictRowToList)(dictMonoidRecord.SemigroupRecord0());
        }, memptyRecord(dictMonoidRecord)(Type_Data_RowList.RLProxy.value));
    };
};
var mempty = function (dict) {
    return dict.mempty;
};
var monoidFn = function (dictMonoid) {
    return new Monoid(function () {
        return Data_Semigroup.semigroupFn(dictMonoid.Semigroup0());
    }, function (v) {
        return mempty(dictMonoid);
    });
};
var monoidRecordCons = function (dictIsSymbol) {
    return function (dictMonoid) {
        return function (dictCons) {
            return function (dictMonoidRecord) {
                return new MonoidRecord(function () {
                    return Data_Semigroup.semigroupRecordCons(dictIsSymbol)(dictCons)(dictMonoidRecord.SemigroupRecord0())(dictMonoid.Semigroup0());
                }, function (v) {
                    var tail = memptyRecord(dictMonoidRecord)(Type_Data_RowList.RLProxy.value);
                    var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                    var insert = Record_Unsafe.unsafeSet(key);
                    return insert(mempty(dictMonoid))(tail);
                });
            };
        };
    };
};
var power = function (dictMonoid) {
    return function (x) {
        var go = function (p) {
            if (p <= 0) {
                return mempty(dictMonoid);
            };
            if (p === 1) {
                return x;
            };
            if (Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(p)(2) === 0) {
                var x$prime = go(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(p)(2));
                return Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(x$prime);
            };
            if (Data_Boolean.otherwise) {
                var x$prime = go(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(p)(2));
                return Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(x));
            };
            throw new Error("Failed pattern match at Data.Monoid (line 66, column 3 - line 66, column 17): " + [ p.constructor.name ]);
        };
        return go;
    };
};
var guard = function (dictMonoid) {
    return function (v) {
        return function (v1) {
            if (v) {
                return v1;
            };
            if (!v) {
                return mempty(dictMonoid);
            };
            throw new Error("Failed pattern match at Data.Monoid (line 74, column 1 - line 74, column 49): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
module.exports = {
    Monoid: Monoid,
    mempty: mempty,
    power: power,
    guard: guard,
    MonoidRecord: MonoidRecord,
    memptyRecord: memptyRecord,
    monoidUnit: monoidUnit,
    monoidOrdering: monoidOrdering,
    monoidFn: monoidFn,
    monoidString: monoidString,
    monoidArray: monoidArray,
    monoidRecord: monoidRecord,
    monoidRecordNil: monoidRecordNil,
    monoidRecordCons: monoidRecordCons
};

},{"../Data.Boolean/index.js":45,"../Data.EuclideanRing/index.js":57,"../Data.Ordering/index.js":97,"../Data.Semigroup/index.js":105,"../Data.Symbol/index.js":122,"../Data.Unit/index.js":133,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148}],87:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");
var Data_Semigroup_First = require("../Data.Semigroup.First/index.js");
var Data_Semigroup_Last = require("../Data.Semigroup.Last/index.js");
var Newtype = function (unwrap, wrap) {
    this.unwrap = unwrap;
    this.wrap = wrap;
};
var wrap = function (dict) {
    return dict.wrap;
};
var unwrap = function (dict) {
    return dict.unwrap;
};
var underF2 = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        return function ($66) {
                            return function ($67) {
                                return Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1))(Data_Function.on(f)(Data_Functor.map(dictFunctor)(wrap(dictNewtype)))($66)($67));
                            };
                        };
                    };
                };
            };
        };
    };
};
var underF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        return function ($68) {
                            return Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1))(f(Data_Functor.map(dictFunctor)(wrap(dictNewtype))($68)));
                        };
                    };
                };
            };
        };
    };
};
var under2 = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                return function ($69) {
                    return function ($70) {
                        return unwrap(dictNewtype1)(Data_Function.on(f)(wrap(dictNewtype))($69)($70));
                    };
                };
            };
        };
    };
};
var under = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                return function ($71) {
                    return unwrap(dictNewtype1)(f(wrap(dictNewtype)($71)));
                };
            };
        };
    };
};
var un = function (dictNewtype) {
    return function (v) {
        return unwrap(dictNewtype);
    };
};
var traverse = function (dictFunctor) {
    return function (dictNewtype) {
        return function (v) {
            return function (f) {
                return function ($72) {
                    return Data_Functor.map(dictFunctor)(wrap(dictNewtype))(f(unwrap(dictNewtype)($72)));
                };
            };
        };
    };
};
var overF2 = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        return function ($73) {
                            return function ($74) {
                                return Data_Functor.map(dictFunctor1)(wrap(dictNewtype1))(Data_Function.on(f)(Data_Functor.map(dictFunctor)(unwrap(dictNewtype)))($73)($74));
                            };
                        };
                    };
                };
            };
        };
    };
};
var overF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        return function ($75) {
                            return Data_Functor.map(dictFunctor1)(wrap(dictNewtype1))(f(Data_Functor.map(dictFunctor)(unwrap(dictNewtype))($75)));
                        };
                    };
                };
            };
        };
    };
};
var over2 = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                return function ($76) {
                    return function ($77) {
                        return wrap(dictNewtype1)(Data_Function.on(f)(unwrap(dictNewtype))($76)($77));
                    };
                };
            };
        };
    };
};
var over = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (v) {
            return function (f) {
                return function ($78) {
                    return wrap(dictNewtype1)(f(unwrap(dictNewtype)($78)));
                };
            };
        };
    };
};
var op = function (dictNewtype) {
    return un(dictNewtype);
};
var newtypeMultiplicative = new Newtype(function (v) {
    return v;
}, Data_Monoid_Multiplicative.Multiplicative);
var newtypeLast = new Newtype(function (v) {
    return v;
}, Data_Semigroup_Last.Last);
var newtypeFirst = new Newtype(function (v) {
    return v;
}, Data_Semigroup_First.First);
var newtypeEndo = new Newtype(function (v) {
    return v;
}, Data_Monoid_Endo.Endo);
var newtypeDual = new Newtype(function (v) {
    return v;
}, Data_Monoid_Dual.Dual);
var newtypeDisj = new Newtype(function (v) {
    return v;
}, Data_Monoid_Disj.Disj);
var newtypeConj = new Newtype(function (v) {
    return v;
}, Data_Monoid_Conj.Conj);
var newtypeAdditive = new Newtype(function (v) {
    return v;
}, Data_Monoid_Additive.Additive);
var collect = function (dictFunctor) {
    return function (dictNewtype) {
        return function (v) {
            return function (f) {
                return function ($79) {
                    return wrap(dictNewtype)(f(Data_Functor.map(dictFunctor)(unwrap(dictNewtype))($79)));
                };
            };
        };
    };
};
var alaF = function (dictFunctor) {
    return function (dictFunctor1) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (v) {
                    return function (f) {
                        return function ($80) {
                            return Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1))(f(Data_Functor.map(dictFunctor)(wrap(dictNewtype))($80)));
                        };
                    };
                };
            };
        };
    };
};
var ala = function (dictFunctor) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (v) {
                return function (f) {
                    return Data_Functor.map(dictFunctor)(unwrap(dictNewtype))(f(wrap(dictNewtype1)));
                };
            };
        };
    };
};
module.exports = {
    unwrap: unwrap,
    wrap: wrap,
    Newtype: Newtype,
    un: un,
    op: op,
    ala: ala,
    alaF: alaF,
    over: over,
    overF: overF,
    under: under,
    underF: underF,
    over2: over2,
    overF2: overF2,
    under2: under2,
    underF2: underF2,
    traverse: traverse,
    collect: collect,
    newtypeAdditive: newtypeAdditive,
    newtypeMultiplicative: newtypeMultiplicative,
    newtypeConj: newtypeConj,
    newtypeDisj: newtypeDisj,
    newtypeDual: newtypeDual,
    newtypeEndo: newtypeEndo,
    newtypeFirst: newtypeFirst,
    newtypeLast: newtypeLast
};

},{"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Monoid.Additive/index.js":80,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Endo/index.js":84,"../Data.Monoid.Multiplicative/index.js":85,"../Data.Semigroup.First/index.js":100,"../Data.Semigroup.Last/index.js":102}],88:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var NonEmpty = (function () {
    function NonEmpty(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    NonEmpty.create = function (value0) {
        return function (value1) {
            return new NonEmpty(value0, value1);
        };
    };
    return NonEmpty;
})();
var unfoldable1NonEmpty = function (dictUnfoldable) {
    return new Data_Unfoldable1.Unfoldable1(function (f) {
        return function (b) {
            return Data_Tuple.uncurry(NonEmpty.create)(Data_Functor.map(Data_Tuple.functorTuple)(Data_Unfoldable.unfoldr(dictUnfoldable)(Data_Functor.map(Data_Maybe.functorMaybe)(f)))(f(b)));
        };
    });
};
var tail = function (v) {
    return v.value1;
};
var singleton = function (dictPlus) {
    return function (a) {
        return new NonEmpty(a, Control_Plus.empty(dictPlus));
    };
};
var showNonEmpty = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            return "(NonEmpty " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
        });
    };
};
var oneOf = function (dictAlternative) {
    return function (v) {
        return Control_Alt.alt((dictAlternative.Plus1()).Alt0())(Control_Applicative.pure(dictAlternative.Applicative0())(v.value0))(v.value1);
    };
};
var head = function (v) {
    return v.value0;
};
var functorNonEmpty = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (m) {
            return new NonEmpty(f(m.value0), Data_Functor.map(dictFunctor)(f)(m.value1));
        };
    });
};
var functorWithIndex = function (dictFunctorWithIndex) {
    return new Data_FunctorWithIndex.FunctorWithIndex(function () {
        return functorNonEmpty(dictFunctorWithIndex.Functor0());
    }, function (f) {
        return function (v) {
            return new NonEmpty(f(Data_Maybe.Nothing.value)(v.value0), Data_FunctorWithIndex.mapWithIndex(dictFunctorWithIndex)(function ($146) {
                return f(Data_Maybe.Just.create($146));
            })(v.value1));
        };
    });
};
var fromNonEmpty = function (f) {
    return function (v) {
        return f(v.value0)(v.value1);
    };
};
var foldl1 = function (dictFoldable) {
    return function (f) {
        return function (v) {
            return Data_Foldable.foldl(dictFoldable)(f)(v.value0)(v.value1);
        };
    };
};
var foldableNonEmpty = function (dictFoldable) {
    return new Data_Foldable.Foldable(function (dictMonoid) {
        return function (f) {
            return function (v) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f)(v.value1));
            };
        };
    }, function (f) {
        return function (b) {
            return function (v) {
                return Data_Foldable.foldl(dictFoldable)(f)(f(b)(v.value0))(v.value1);
            };
        };
    }, function (f) {
        return function (b) {
            return function (v) {
                return f(v.value0)(Data_Foldable.foldr(dictFoldable)(f)(b)(v.value1));
            };
        };
    });
};
var foldableWithIndexNonEmpty = function (dictFoldableWithIndex) {
    return new Data_FoldableWithIndex.FoldableWithIndex(function () {
        return foldableNonEmpty(dictFoldableWithIndex.Foldable0());
    }, function (dictMonoid) {
        return function (f) {
            return function (v) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(f(Data_Maybe.Nothing.value)(v.value0))(Data_FoldableWithIndex.foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(function ($147) {
                    return f(Data_Maybe.Just.create($147));
                })(v.value1));
            };
        };
    }, function (f) {
        return function (b) {
            return function (v) {
                return Data_FoldableWithIndex.foldlWithIndex(dictFoldableWithIndex)(function ($148) {
                    return f(Data_Maybe.Just.create($148));
                })(f(Data_Maybe.Nothing.value)(b)(v.value0))(v.value1);
            };
        };
    }, function (f) {
        return function (b) {
            return function (v) {
                return f(Data_Maybe.Nothing.value)(v.value0)(Data_FoldableWithIndex.foldrWithIndex(dictFoldableWithIndex)(function ($149) {
                    return f(Data_Maybe.Just.create($149));
                })(b)(v.value1));
            };
        };
    });
};
var traversableNonEmpty = function (dictTraversable) {
    return new Data_Traversable.Traversable(function () {
        return foldableNonEmpty(dictTraversable.Foldable1());
    }, function () {
        return functorNonEmpty(dictTraversable.Functor0());
    }, function (dictApplicative) {
        return function (v) {
            return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(NonEmpty.create)(v.value0))(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v.value1));
        };
    }, function (dictApplicative) {
        return function (f) {
            return function (v) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(NonEmpty.create)(f(v.value0)))(Data_Traversable.traverse(dictTraversable)(dictApplicative)(f)(v.value1));
            };
        };
    });
};
var traversableWithIndexNonEmpty = function (dictTraversableWithIndex) {
    return new Data_TraversableWithIndex.TraversableWithIndex(function () {
        return foldableWithIndexNonEmpty(dictTraversableWithIndex.FoldableWithIndex1());
    }, function () {
        return functorWithIndex(dictTraversableWithIndex.FunctorWithIndex0());
    }, function () {
        return traversableNonEmpty(dictTraversableWithIndex.Traversable2());
    }, function (dictApplicative) {
        return function (f) {
            return function (v) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(NonEmpty.create)(f(Data_Maybe.Nothing.value)(v.value0)))(Data_TraversableWithIndex.traverseWithIndex(dictTraversableWithIndex)(dictApplicative)(function ($150) {
                    return f(Data_Maybe.Just.create($150));
                })(v.value1));
            };
        };
    });
};
var foldable1NonEmpty = function (dictFoldable) {
    return new Data_Semigroup_Foldable.Foldable1(function () {
        return foldableNonEmpty(dictFoldable);
    }, function (dictSemigroup) {
        return Data_Semigroup_Foldable.foldMap1(foldable1NonEmpty(dictFoldable))(dictSemigroup)(Control_Category.identity(Control_Category.categoryFn));
    }, function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return Data_Foldable.foldl(dictFoldable)(function (s) {
                    return function (a1) {
                        return Data_Semigroup.append(dictSemigroup)(s)(f(a1));
                    };
                })(f(v.value0))(v.value1);
            };
        };
    });
};
var eqNonEmpty = function (dictEq1) {
    return function (dictEq) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq1(dictEq1)(dictEq)(x.value1)(y.value1);
            };
        });
    };
};
var ordNonEmpty = function (dictOrd1) {
    return function (dictOrd) {
        return new Data_Ord.Ord(function () {
            return eqNonEmpty(dictOrd1.Eq10())(dictOrd.Eq0());
        }, function (x) {
            return function (y) {
                var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare1(dictOrd1)(dictOrd)(x.value1)(y.value1);
            };
        });
    };
};
var eq1NonEmpty = function (dictEq1) {
    return new Data_Eq.Eq1(function (dictEq) {
        return Data_Eq.eq(eqNonEmpty(dictEq1)(dictEq));
    });
};
var ord1NonEmpty = function (dictOrd1) {
    return new Data_Ord.Ord1(function () {
        return eq1NonEmpty(dictOrd1.Eq10());
    }, function (dictOrd) {
        return Data_Ord.compare(ordNonEmpty(dictOrd1)(dictOrd));
    });
};
module.exports = {
    NonEmpty: NonEmpty,
    singleton: singleton,
    foldl1: foldl1,
    fromNonEmpty: fromNonEmpty,
    oneOf: oneOf,
    head: head,
    tail: tail,
    showNonEmpty: showNonEmpty,
    eqNonEmpty: eqNonEmpty,
    eq1NonEmpty: eq1NonEmpty,
    ordNonEmpty: ordNonEmpty,
    ord1NonEmpty: ord1NonEmpty,
    functorNonEmpty: functorNonEmpty,
    functorWithIndex: functorWithIndex,
    foldableNonEmpty: foldableNonEmpty,
    foldableWithIndexNonEmpty: foldableWithIndexNonEmpty,
    traversableNonEmpty: traversableNonEmpty,
    traversableWithIndexNonEmpty: traversableWithIndexNonEmpty,
    foldable1NonEmpty: foldable1NonEmpty,
    unfoldable1NonEmpty: unfoldable1NonEmpty
};

},{"../Control.Alt/index.js":3,"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Control.Plus/index.js":30,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Semigroup.Foldable/index.js":101,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Tuple/index.js":127,"../Data.Unfoldable/index.js":129,"../Data.Unfoldable1/index.js":131}],89:[function(require,module,exports){
"use strict";

exports["null"] = null;

exports.nullable = function (a, r, f) {
  return a == null ? r : f(a);
};

exports.notNull = function (x) {
  return x;
};

},{}],90:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var toNullable = Data_Maybe.maybe($foreign["null"])($foreign.notNull);
var toMaybe = function (n) {
    return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
};
var showNullable = function (dictShow) {
    return new Data_Show.Show(function ($5) {
        return Data_Maybe.maybe("null")(Data_Show.show(dictShow))(toMaybe($5));
    });
};
var eqNullable = function (dictEq) {
    return new Data_Eq.Eq(Data_Function.on(Data_Eq.eq(Data_Maybe.eqMaybe(dictEq)))(toMaybe));
};
var ordNullable = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqNullable(dictOrd.Eq0());
    }, Data_Function.on(Data_Ord.compare(Data_Maybe.ordMaybe(dictOrd)))(toMaybe));
};
var eq1Nullable = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqNullable(dictEq));
});
var ord1Nullable = new Data_Ord.Ord1(function () {
    return eq1Nullable;
}, function (dictOrd) {
    return Data_Ord.compare(ordNullable(dictOrd));
});
module.exports = {
    toMaybe: toMaybe,
    toNullable: toNullable,
    showNullable: showNullable,
    eqNullable: eqNullable,
    eq1Nullable: eq1Nullable,
    ordNullable: ordNullable,
    ord1Nullable: ord1Nullable,
    "null": $foreign["null"],
    notNull: $foreign.notNull
};

},{"../Data.Eq/index.js":55,"../Data.Function/index.js":61,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Show/index.js":109,"./foreign.js":89}],91:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Max = function (x) {
    return x;
};
var showMax = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Max " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupMax = function (dictOrd) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Ord.max(dictOrd)(v)(v1);
        };
    });
};
var newtypeMax = new Data_Newtype.Newtype(function (n) {
    return n;
}, Max);
var monoidMax = function (dictBounded) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMax(dictBounded.Ord0());
    }, Data_Bounded.bottom(dictBounded));
};
var eqMax = function (dictEq) {
    return dictEq;
};
var ordMax = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqMax(dictOrd.Eq0());
    }, function (v) {
        return function (v1) {
            return Data_Ord.compare(dictOrd)(v)(v1);
        };
    });
};
module.exports = {
    Max: Max,
    newtypeMax: newtypeMax,
    eqMax: eqMax,
    ordMax: ordMax,
    semigroupMax: semigroupMax,
    monoidMax: monoidMax,
    showMax: showMax
};

},{"../Data.Bounded/index.js":48,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],92:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Min = function (x) {
    return x;
};
var showMin = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Min " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupMin = function (dictOrd) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Ord.min(dictOrd)(v)(v1);
        };
    });
};
var newtypeMin = new Data_Newtype.Newtype(function (n) {
    return n;
}, Min);
var monoidMin = function (dictBounded) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMin(dictBounded.Ord0());
    }, Data_Bounded.top(dictBounded));
};
var eqMin = function (dictEq) {
    return dictEq;
};
var ordMin = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqMin(dictOrd.Eq0());
    }, function (v) {
        return function (v1) {
            return Data_Ord.compare(dictOrd)(v)(v1);
        };
    });
};
module.exports = {
    Min: Min,
    newtypeMin: newtypeMin,
    eqMin: eqMin,
    ordMin: ordMin,
    semigroupMin: semigroupMin,
    monoidMin: monoidMin,
    showMin: showMin
};

},{"../Data.Bounded/index.js":48,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],93:[function(require,module,exports){
"use strict";

exports.unsafeCompareImpl = function (lt) {
  return function (eq) {
    return function (gt) {
      return function (x) {
        return function (y) {
          return x < y ? lt : x === y ? eq : gt;
        };
      };
    };
  };
};

},{}],94:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
module.exports = {
    unsafeCompare: unsafeCompare
};

},{"../Data.Ordering/index.js":97,"./foreign.js":93}],95:[function(require,module,exports){
"use strict";

exports.ordArrayImpl = function (f) {
  return function (xs) {
    return function (ys) {
      var i = 0;
      var xlen = xs.length;
      var ylen = ys.length;
      while (i < xlen && i < ylen) {
        var x = xs[i];
        var y = ys[i];
        var o = f(x)(y);
        if (o !== 0) {
          return o;
        }
        i++;
      }
      if (xlen === ylen) {
        return 0;
      } else if (xlen > ylen) {
        return -1;
      } else {
        return 1;
      }
    };
  };
};

},{}],96:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Ord_Unsafe = require("../Data.Ord.Unsafe/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var OrdRecord = function (EqRecord0, compareRecord) {
    this.EqRecord0 = EqRecord0;
    this.compareRecord = compareRecord;
};
var Ord1 = function (Eq10, compare1) {
    this.Eq10 = Eq10;
    this.compare1 = compare1;
};
var Ord = function (Eq0, compare) {
    this.Eq0 = Eq0;
    this.compare = compare;
};
var ordVoid = new Ord(function () {
    return Data_Eq.eqVoid;
}, function (v) {
    return function (v1) {
        return Data_Ordering.EQ.value;
    };
});
var ordUnit = new Ord(function () {
    return Data_Eq.eqUnit;
}, function (v) {
    return function (v1) {
        return Data_Ordering.EQ.value;
    };
});
var ordString = new Ord(function () {
    return Data_Eq.eqString;
}, Data_Ord_Unsafe.unsafeCompare);
var ordRecordNil = new OrdRecord(function () {
    return Data_Eq.eqRowNil;
}, function (v) {
    return function (v1) {
        return function (v2) {
            return Data_Ordering.EQ.value;
        };
    };
});
var ordOrdering = new Ord(function () {
    return Data_Ordering.eqOrdering;
}, function (v) {
    return function (v1) {
        if (v instanceof Data_Ordering.LT && v1 instanceof Data_Ordering.LT) {
            return Data_Ordering.EQ.value;
        };
        if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.EQ) {
            return Data_Ordering.EQ.value;
        };
        if (v instanceof Data_Ordering.GT && v1 instanceof Data_Ordering.GT) {
            return Data_Ordering.EQ.value;
        };
        if (v instanceof Data_Ordering.LT) {
            return Data_Ordering.LT.value;
        };
        if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.LT) {
            return Data_Ordering.GT.value;
        };
        if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.GT) {
            return Data_Ordering.LT.value;
        };
        if (v instanceof Data_Ordering.GT) {
            return Data_Ordering.GT.value;
        };
        throw new Error("Failed pattern match at Data.Ord (line 73, column 1 - line 73, column 37): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var ordNumber = new Ord(function () {
    return Data_Eq.eqNumber;
}, Data_Ord_Unsafe.unsafeCompare);
var ordInt = new Ord(function () {
    return Data_Eq.eqInt;
}, Data_Ord_Unsafe.unsafeCompare);
var ordChar = new Ord(function () {
    return Data_Eq.eqChar;
}, Data_Ord_Unsafe.unsafeCompare);
var ordBoolean = new Ord(function () {
    return Data_Eq.eqBoolean;
}, Data_Ord_Unsafe.unsafeCompare);
var compareRecord = function (dict) {
    return dict.compareRecord;
};
var ordRecord = function (dictRowToList) {
    return function (dictOrdRecord) {
        return new Ord(function () {
            return Data_Eq.eqRec(dictRowToList)(dictOrdRecord.EqRecord0());
        }, compareRecord(dictOrdRecord)(Type_Data_RowList.RLProxy.value));
    };
};
var compare1 = function (dict) {
    return dict.compare1;
};
var compare = function (dict) {
    return dict.compare;
};
var comparing = function (dictOrd) {
    return function (f) {
        return function (x) {
            return function (y) {
                return compare(dictOrd)(f(x))(f(y));
            };
        };
    };
};
var greaterThan = function (dictOrd) {
    return function (a1) {
        return function (a2) {
            var v = compare(dictOrd)(a1)(a2);
            if (v instanceof Data_Ordering.GT) {
                return true;
            };
            return false;
        };
    };
};
var greaterThanOrEq = function (dictOrd) {
    return function (a1) {
        return function (a2) {
            var v = compare(dictOrd)(a1)(a2);
            if (v instanceof Data_Ordering.LT) {
                return false;
            };
            return true;
        };
    };
};
var signum = function (dictOrd) {
    return function (dictRing) {
        return function (x) {
            var $43 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));
            if ($43) {
                return Data_Semiring.one(dictRing.Semiring0());
            };
            return Data_Ring.negate(dictRing)(Data_Semiring.one(dictRing.Semiring0()));
        };
    };
};
var lessThan = function (dictOrd) {
    return function (a1) {
        return function (a2) {
            var v = compare(dictOrd)(a1)(a2);
            if (v instanceof Data_Ordering.LT) {
                return true;
            };
            return false;
        };
    };
};
var lessThanOrEq = function (dictOrd) {
    return function (a1) {
        return function (a2) {
            var v = compare(dictOrd)(a1)(a2);
            if (v instanceof Data_Ordering.GT) {
                return false;
            };
            return true;
        };
    };
};
var max = function (dictOrd) {
    return function (x) {
        return function (y) {
            var v = compare(dictOrd)(x)(y);
            if (v instanceof Data_Ordering.LT) {
                return y;
            };
            if (v instanceof Data_Ordering.EQ) {
                return x;
            };
            if (v instanceof Data_Ordering.GT) {
                return x;
            };
            throw new Error("Failed pattern match at Data.Ord (line 128, column 3 - line 131, column 12): " + [ v.constructor.name ]);
        };
    };
};
var min = function (dictOrd) {
    return function (x) {
        return function (y) {
            var v = compare(dictOrd)(x)(y);
            if (v instanceof Data_Ordering.LT) {
                return x;
            };
            if (v instanceof Data_Ordering.EQ) {
                return x;
            };
            if (v instanceof Data_Ordering.GT) {
                return y;
            };
            throw new Error("Failed pattern match at Data.Ord (line 119, column 3 - line 122, column 12): " + [ v.constructor.name ]);
        };
    };
};
var ordArray = function (dictOrd) {
    return new Ord(function () {
        return Data_Eq.eqArray(dictOrd.Eq0());
    }, (function () {
        var toDelta = function (x) {
            return function (y) {
                var v = compare(dictOrd)(x)(y);
                if (v instanceof Data_Ordering.EQ) {
                    return 0;
                };
                if (v instanceof Data_Ordering.LT) {
                    return 1;
                };
                if (v instanceof Data_Ordering.GT) {
                    return -1 | 0;
                };
                throw new Error("Failed pattern match at Data.Ord (line 66, column 7 - line 71, column 1): " + [ v.constructor.name ]);
            };
        };
        return function (xs) {
            return function (ys) {
                return compare(ordInt)(0)($foreign.ordArrayImpl(toDelta)(xs)(ys));
            };
        };
    })());
};
var ord1Array = new Ord1(function () {
    return Data_Eq.eq1Array;
}, function (dictOrd) {
    return compare(ordArray(dictOrd));
});
var ordRecordCons = function (dictOrdRecord) {
    return function (dictCons) {
        return function (dictIsSymbol) {
            return function (dictOrd) {
                return new OrdRecord(function () {
                    return Data_Eq.eqRowCons(dictOrdRecord.EqRecord0())(dictCons)(dictIsSymbol)(dictOrd.Eq0());
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var left = compare(dictOrd)(Record_Unsafe.unsafeGet(key)(ra))(Record_Unsafe.unsafeGet(key)(rb));
                            var $49 = Data_Eq.notEq(Data_Ordering.eqOrdering)(left)(Data_Ordering.EQ.value);
                            if ($49) {
                                return left;
                            };
                            return compareRecord(dictOrdRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                        };
                    };
                });
            };
        };
    };
};
var clamp = function (dictOrd) {
    return function (low) {
        return function (hi) {
            return function (x) {
                return min(dictOrd)(hi)(max(dictOrd)(low)(x));
            };
        };
    };
};
var between = function (dictOrd) {
    return function (low) {
        return function (hi) {
            return function (x) {
                if (lessThan(dictOrd)(x)(low)) {
                    return false;
                };
                if (greaterThan(dictOrd)(x)(hi)) {
                    return false;
                };
                return true;
            };
        };
    };
};
var abs = function (dictOrd) {
    return function (dictRing) {
        return function (x) {
            var $53 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));
            if ($53) {
                return x;
            };
            return Data_Ring.negate(dictRing)(x);
        };
    };
};
module.exports = {
    Ord: Ord,
    compare: compare,
    Ord1: Ord1,
    compare1: compare1,
    lessThan: lessThan,
    lessThanOrEq: lessThanOrEq,
    greaterThan: greaterThan,
    greaterThanOrEq: greaterThanOrEq,
    comparing: comparing,
    min: min,
    max: max,
    clamp: clamp,
    between: between,
    abs: abs,
    signum: signum,
    OrdRecord: OrdRecord,
    compareRecord: compareRecord,
    ordBoolean: ordBoolean,
    ordInt: ordInt,
    ordNumber: ordNumber,
    ordString: ordString,
    ordChar: ordChar,
    ordUnit: ordUnit,
    ordVoid: ordVoid,
    ordArray: ordArray,
    ordOrdering: ordOrdering,
    ord1Array: ord1Array,
    ordRecordNil: ordRecordNil,
    ordRecordCons: ordRecordCons,
    ordRecord: ordRecord
};

},{"../Data.Eq/index.js":55,"../Data.Ord.Unsafe/index.js":94,"../Data.Ordering/index.js":97,"../Data.Ring/index.js":99,"../Data.Semiring/index.js":107,"../Data.Symbol/index.js":122,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148,"./foreign.js":95}],97:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var LT = (function () {
    function LT() {

    };
    LT.value = new LT();
    return LT;
})();
var GT = (function () {
    function GT() {

    };
    GT.value = new GT();
    return GT;
})();
var EQ = (function () {
    function EQ() {

    };
    EQ.value = new EQ();
    return EQ;
})();
var showOrdering = new Data_Show.Show(function (v) {
    if (v instanceof LT) {
        return "LT";
    };
    if (v instanceof GT) {
        return "GT";
    };
    if (v instanceof EQ) {
        return "EQ";
    };
    throw new Error("Failed pattern match at Data.Ordering (line 26, column 1 - line 26, column 39): " + [ v.constructor.name ]);
});
var semigroupOrdering = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v instanceof LT) {
            return LT.value;
        };
        if (v instanceof GT) {
            return GT.value;
        };
        if (v instanceof EQ) {
            return v1;
        };
        throw new Error("Failed pattern match at Data.Ordering (line 21, column 1 - line 21, column 49): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var invert = function (v) {
    if (v instanceof GT) {
        return LT.value;
    };
    if (v instanceof EQ) {
        return EQ.value;
    };
    if (v instanceof LT) {
        return GT.value;
    };
    throw new Error("Failed pattern match at Data.Ordering (line 33, column 1 - line 33, column 31): " + [ v.constructor.name ]);
};
var eqOrdering = new Data_Eq.Eq(function (v) {
    return function (v1) {
        if (v instanceof LT && v1 instanceof LT) {
            return true;
        };
        if (v instanceof GT && v1 instanceof GT) {
            return true;
        };
        if (v instanceof EQ && v1 instanceof EQ) {
            return true;
        };
        return false;
    };
});
module.exports = {
    LT: LT,
    GT: GT,
    EQ: EQ,
    invert: invert,
    eqOrdering: eqOrdering,
    semigroupOrdering: semigroupOrdering,
    showOrdering: showOrdering
};

},{"../Data.Eq/index.js":55,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],98:[function(require,module,exports){
"use strict";

exports.intSub = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x - y | 0;
  };
};

exports.numSub = function (n1) {
  return function (n2) {
    return n1 - n2;
  };
};

},{}],99:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var RingRecord = function (SemiringRecord0, subRecord) {
    this.SemiringRecord0 = SemiringRecord0;
    this.subRecord = subRecord;
};
var Ring = function (Semiring0, sub) {
    this.Semiring0 = Semiring0;
    this.sub = sub;
};
var subRecord = function (dict) {
    return dict.subRecord;
};
var sub = function (dict) {
    return dict.sub;
};
var ringUnit = new Ring(function () {
    return Data_Semiring.semiringUnit;
}, function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
});
var ringRecordNil = new RingRecord(function () {
    return Data_Semiring.semiringRecordNil;
}, function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
});
var ringRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictRingRecord) {
            return function (dictRing) {
                return new RingRecord(function () {
                    return Data_Semiring.semiringRecordCons(dictIsSymbol)(dictCons)(dictRingRecord.SemiringRecord0())(dictRing.Semiring0());
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = subRecord(dictRingRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(sub(dictRing)(get(ra))(get(rb)))(tail);
                        };
                    };
                });
            };
        };
    };
};
var ringRecord = function (dictRowToList) {
    return function (dictRingRecord) {
        return new Ring(function () {
            return Data_Semiring.semiringRecord(dictRowToList)(dictRingRecord.SemiringRecord0());
        }, subRecord(dictRingRecord)(Type_Data_RowList.RLProxy.value));
    };
};
var ringNumber = new Ring(function () {
    return Data_Semiring.semiringNumber;
}, $foreign.numSub);
var ringInt = new Ring(function () {
    return Data_Semiring.semiringInt;
}, $foreign.intSub);
var ringFn = function (dictRing) {
    return new Ring(function () {
        return Data_Semiring.semiringFn(dictRing.Semiring0());
    }, function (f) {
        return function (g) {
            return function (x) {
                return sub(dictRing)(f(x))(g(x));
            };
        };
    });
};
var negate = function (dictRing) {
    return function (a) {
        return sub(dictRing)(Data_Semiring.zero(dictRing.Semiring0()))(a);
    };
};
module.exports = {
    Ring: Ring,
    sub: sub,
    negate: negate,
    RingRecord: RingRecord,
    subRecord: subRecord,
    ringInt: ringInt,
    ringNumber: ringNumber,
    ringUnit: ringUnit,
    ringFn: ringFn,
    ringRecord: ringRecord,
    ringRecordNil: ringRecordNil,
    ringRecordCons: ringRecordCons
};

},{"../Data.Semiring/index.js":107,"../Data.Symbol/index.js":122,"../Data.Unit/index.js":133,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148,"./foreign.js":98}],100:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var First = function (x) {
    return x;
};
var showFirst = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(First " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupFirst = new Data_Semigroup.Semigroup(function (x) {
    return function (v) {
        return x;
    };
});
var ordFirst = function (dictOrd) {
    return dictOrd;
};
var functorFirst = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqFirst = function (dictEq) {
    return dictEq;
};
var eq1First = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqFirst(dictEq));
});
var ord1First = new Data_Ord.Ord1(function () {
    return eq1First;
}, function (dictOrd) {
    return Data_Ord.compare(ordFirst(dictOrd));
});
var boundedFirst = function (dictBounded) {
    return dictBounded;
};
var applyFirst = new Control_Apply.Apply(function () {
    return functorFirst;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindFirst = new Control_Bind.Bind(function () {
    return applyFirst;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeFirst = new Control_Applicative.Applicative(function () {
    return applyFirst;
}, First);
var monadFirst = new Control_Monad.Monad(function () {
    return applicativeFirst;
}, function () {
    return bindFirst;
});
module.exports = {
    First: First,
    eqFirst: eqFirst,
    eq1First: eq1First,
    ordFirst: ordFirst,
    ord1First: ord1First,
    boundedFirst: boundedFirst,
    showFirst: showFirst,
    functorFirst: functorFirst,
    applyFirst: applyFirst,
    applicativeFirst: applicativeFirst,
    bindFirst: bindFirst,
    monadFirst: monadFirst,
    semigroupFirst: semigroupFirst
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],101:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord_Max = require("../Data.Ord.Max/index.js");
var Data_Ord_Min = require("../Data.Ord.Min/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var JoinWith = function (x) {
    return x;
};
var Act = function (x) {
    return x;
};
var Foldable1 = function (Foldable0, fold1, foldMap1) {
    this.Foldable0 = Foldable0;
    this.fold1 = fold1;
    this.foldMap1 = foldMap1;
};
var semigroupJoinWith = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return JoinWith(function (j) {
                return Data_Semigroup.append(dictSemigroup)(v(j))(Data_Semigroup.append(dictSemigroup)(j)(v1(j)));
            });
        };
    });
};
var semigroupAct = function (dictApply) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Control_Apply.applySecond(dictApply)(v)(v1);
        };
    });
};
var joinee = function (v) {
    return v;
};
var getAct = function (v) {
    return v;
};
var foldMap1 = function (dict) {
    return dict.foldMap1;
};
var intercalateMap = function (dictFoldable1) {
    return function (dictSemigroup) {
        return function (j) {
            return function (f) {
                return function (foldable) {
                    return joinee(foldMap1(dictFoldable1)(semigroupJoinWith(dictSemigroup))(function ($43) {
                        return JoinWith(Data_Function["const"](f($43)));
                    })(foldable))(j);
                };
            };
        };
    };
};
var intercalate = function (dictFoldable1) {
    return function (dictSemigroup) {
        return Data_Function.flip(intercalateMap(dictFoldable1)(dictSemigroup))(Control_Category.identity(Control_Category.categoryFn));
    };
};
var maximum = function (dictOrd) {
    return function (dictFoldable1) {
        return Data_Newtype.ala(Data_Functor.functorFn)(Data_Ord_Max.newtypeMax)(Data_Ord_Max.newtypeMax)(Data_Ord_Max.Max)(foldMap1(dictFoldable1)(Data_Ord_Max.semigroupMax(dictOrd)));
    };
};
var minimum = function (dictOrd) {
    return function (dictFoldable1) {
        return Data_Newtype.ala(Data_Functor.functorFn)(Data_Ord_Min.newtypeMin)(Data_Ord_Min.newtypeMin)(Data_Ord_Min.Min)(foldMap1(dictFoldable1)(Data_Ord_Min.semigroupMin(dictOrd)));
    };
};
var traverse1_ = function (dictFoldable1) {
    return function (dictApply) {
        return function (f) {
            return function (t) {
                return Data_Functor.voidRight(dictApply.Functor0())(Data_Unit.unit)(getAct(foldMap1(dictFoldable1)(semigroupAct(dictApply))(function ($44) {
                    return Act(f($44));
                })(t)));
            };
        };
    };
};
var for1_ = function (dictFoldable1) {
    return function (dictApply) {
        return Data_Function.flip(traverse1_(dictFoldable1)(dictApply));
    };
};
var sequence1_ = function (dictFoldable1) {
    return function (dictApply) {
        return traverse1_(dictFoldable1)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var fold1Default = function (dictFoldable1) {
    return function (dictSemigroup) {
        return foldMap1(dictFoldable1)(dictSemigroup)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var foldableDual = new Foldable1(function () {
    return Data_Foldable.foldableDual;
}, function (dictSemigroup) {
    return fold1Default(foldableDual)(dictSemigroup);
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
});
var foldableMultiplicative = new Foldable1(function () {
    return Data_Foldable.foldableMultiplicative;
}, function (dictSemigroup) {
    return fold1Default(foldableMultiplicative)(dictSemigroup);
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
});
var fold1 = function (dict) {
    return dict.fold1;
};
var foldMap1Default = function (dictFoldable1) {
    return function (dictFunctor) {
        return function (dictSemigroup) {
            return function (f) {
                return function ($45) {
                    return fold1(dictFoldable1)(dictSemigroup)(Data_Functor.map(dictFunctor)(f)($45));
                };
            };
        };
    };
};
module.exports = {
    Foldable1: Foldable1,
    foldMap1: foldMap1,
    fold1: fold1,
    traverse1_: traverse1_,
    for1_: for1_,
    sequence1_: sequence1_,
    foldMap1Default: foldMap1Default,
    fold1Default: fold1Default,
    intercalate: intercalate,
    intercalateMap: intercalateMap,
    maximum: maximum,
    minimum: minimum,
    foldableDual: foldableDual,
    foldableMultiplicative: foldableMultiplicative
};

},{"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Foldable/index.js":59,"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Ord.Max/index.js":91,"../Data.Ord.Min/index.js":92,"../Data.Semigroup/index.js":105,"../Data.Unit/index.js":133}],102:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Last = function (x) {
    return x;
};
var showLast = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Last " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
    return function (x) {
        return x;
    };
});
var ordLast = function (dictOrd) {
    return dictOrd;
};
var functorLast = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqLast = function (dictEq) {
    return dictEq;
};
var eq1Last = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqLast(dictEq));
});
var ord1Last = new Data_Ord.Ord1(function () {
    return eq1Last;
}, function (dictOrd) {
    return Data_Ord.compare(ordLast(dictOrd));
});
var boundedLast = function (dictBounded) {
    return dictBounded;
};
var applyLast = new Control_Apply.Apply(function () {
    return functorLast;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindLast = new Control_Bind.Bind(function () {
    return applyLast;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeLast = new Control_Applicative.Applicative(function () {
    return applyLast;
}, Last);
var monadLast = new Control_Monad.Monad(function () {
    return applicativeLast;
}, function () {
    return bindLast;
});
module.exports = {
    Last: Last,
    eqLast: eqLast,
    eq1Last: eq1Last,
    ordLast: ordLast,
    ord1Last: ord1Last,
    boundedLast: boundedLast,
    showLast: showLast,
    functorLast: functorLast,
    applyLast: applyLast,
    applicativeLast: applicativeLast,
    bindLast: bindLast,
    monadLast: monadLast,
    semigroupLast: semigroupLast
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Ord/index.js":96,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109}],103:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Traversable1 = function (Foldable10, Traversable1, sequence1, traverse1) {
    this.Foldable10 = Foldable10;
    this.Traversable1 = Traversable1;
    this.sequence1 = sequence1;
    this.traverse1 = traverse1;
};
var traverse1 = function (dict) {
    return dict.traverse1;
};
var sequence1Default = function (dictTraversable1) {
    return function (dictApply) {
        return traverse1(dictTraversable1)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var traversableDual = new Traversable1(function () {
    return Data_Semigroup_Foldable.foldableDual;
}, function () {
    return Data_Traversable.traversableDual;
}, function (dictApply) {
    return sequence1Default(traversableDual)(dictApply);
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictApply.Functor0())(Data_Monoid_Dual.Dual)(f(v));
        };
    };
});
var traversableMultiplicative = new Traversable1(function () {
    return Data_Semigroup_Foldable.foldableMultiplicative;
}, function () {
    return Data_Traversable.traversableMultiplicative;
}, function (dictApply) {
    return sequence1Default(traversableMultiplicative)(dictApply);
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictApply.Functor0())(Data_Monoid_Multiplicative.Multiplicative)(f(v));
        };
    };
});
var sequence1 = function (dict) {
    return dict.sequence1;
};
var traverse1Default = function (dictTraversable1) {
    return function (dictApply) {
        return function (f) {
            return function (ta) {
                return sequence1(dictTraversable1)(dictApply)(Data_Functor.map((dictTraversable1.Traversable1()).Functor0())(f)(ta));
            };
        };
    };
};
module.exports = {
    sequence1: sequence1,
    traverse1: traverse1,
    Traversable1: Traversable1,
    traverse1Default: traverse1Default,
    sequence1Default: sequence1Default,
    traversableDual: traversableDual,
    traversableMultiplicative: traversableMultiplicative
};

},{"../Control.Category/index.js":12,"../Data.Functor/index.js":64,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Multiplicative/index.js":85,"../Data.Semigroup.Foldable/index.js":101,"../Data.Traversable/index.js":125}],104:[function(require,module,exports){
"use strict";

exports.concatString = function (s1) {
  return function (s2) {
    return s1 + s2;
  };
};

exports.concatArray = function (xs) {
  return function (ys) {
    if (xs.length === 0) return ys;
    if (ys.length === 0) return xs;
    return xs.concat(ys);
  };
};

},{}],105:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Data_Void = require("../Data.Void/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var SemigroupRecord = function (appendRecord) {
    this.appendRecord = appendRecord;
};
var Semigroup = function (append) {
    this.append = append;
};
var semigroupVoid = new Semigroup(function (v) {
    return Data_Void.absurd;
});
var semigroupUnit = new Semigroup(function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
});
var semigroupString = new Semigroup($foreign.concatString);
var semigroupRecordNil = new SemigroupRecord(function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
});
var semigroupArray = new Semigroup($foreign.concatArray);
var appendRecord = function (dict) {
    return dict.appendRecord;
};
var semigroupRecord = function (dictRowToList) {
    return function (dictSemigroupRecord) {
        return new Semigroup(appendRecord(dictSemigroupRecord)(Type_Data_RowList.RLProxy.value));
    };
};
var append = function (dict) {
    return dict.append;
};
var semigroupFn = function (dictSemigroup) {
    return new Semigroup(function (f) {
        return function (g) {
            return function (x) {
                return append(dictSemigroup)(f(x))(g(x));
            };
        };
    });
};
var semigroupRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictSemigroupRecord) {
            return function (dictSemigroup) {
                return new SemigroupRecord(function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = appendRecord(dictSemigroupRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(append(dictSemigroup)(get(ra))(get(rb)))(tail);
                        };
                    };
                });
            };
        };
    };
};
module.exports = {
    Semigroup: Semigroup,
    append: append,
    SemigroupRecord: SemigroupRecord,
    appendRecord: appendRecord,
    semigroupString: semigroupString,
    semigroupUnit: semigroupUnit,
    semigroupVoid: semigroupVoid,
    semigroupFn: semigroupFn,
    semigroupArray: semigroupArray,
    semigroupRecord: semigroupRecord,
    semigroupRecordNil: semigroupRecordNil,
    semigroupRecordCons: semigroupRecordCons
};

},{"../Data.Symbol/index.js":122,"../Data.Unit/index.js":133,"../Data.Void/index.js":134,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148,"./foreign.js":104}],106:[function(require,module,exports){
"use strict";

exports.intAdd = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x + y | 0;
  };
};

exports.intMul = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x * y | 0;
  };
};

exports.numAdd = function (n1) {
  return function (n2) {
    return n1 + n2;
  };
};

exports.numMul = function (n1) {
  return function (n2) {
    return n1 * n2;
  };
};

},{}],107:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_Row = require("../Type.Data.Row/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var SemiringRecord = function (addRecord, mulRecord, oneRecord, zeroRecord) {
    this.addRecord = addRecord;
    this.mulRecord = mulRecord;
    this.oneRecord = oneRecord;
    this.zeroRecord = zeroRecord;
};
var Semiring = function (add, mul, one, zero) {
    this.add = add;
    this.mul = mul;
    this.one = one;
    this.zero = zero;
};
var zeroRecord = function (dict) {
    return dict.zeroRecord;
};
var zero = function (dict) {
    return dict.zero;
};
var semiringUnit = new Semiring(function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
}, function (v) {
    return function (v1) {
        return Data_Unit.unit;
    };
}, Data_Unit.unit, Data_Unit.unit);
var semiringRecordNil = new SemiringRecord(function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
}, function (v) {
    return function (v1) {
        return function (v2) {
            return {};
        };
    };
}, function (v) {
    return function (v1) {
        return {};
    };
}, function (v) {
    return function (v1) {
        return {};
    };
});
var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
var oneRecord = function (dict) {
    return dict.oneRecord;
};
var one = function (dict) {
    return dict.one;
};
var mulRecord = function (dict) {
    return dict.mulRecord;
};
var mul = function (dict) {
    return dict.mul;
};
var addRecord = function (dict) {
    return dict.addRecord;
};
var semiringRecord = function (dictRowToList) {
    return function (dictSemiringRecord) {
        return new Semiring(addRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value), mulRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value), oneRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value), zeroRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value));
    };
};
var add = function (dict) {
    return dict.add;
};
var semiringFn = function (dictSemiring) {
    return new Semiring(function (f) {
        return function (g) {
            return function (x) {
                return add(dictSemiring)(f(x))(g(x));
            };
        };
    }, function (f) {
        return function (g) {
            return function (x) {
                return mul(dictSemiring)(f(x))(g(x));
            };
        };
    }, function (v) {
        return one(dictSemiring);
    }, function (v) {
        return zero(dictSemiring);
    });
};
var semiringRecordCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictSemiringRecord) {
            return function (dictSemiring) {
                return new SemiringRecord(function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = addRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(add(dictSemiring)(get(ra))(get(rb)))(tail);
                        };
                    };
                }, function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = mulRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            var get = Record_Unsafe.unsafeGet(key);
                            return insert(mul(dictSemiring)(get(ra))(get(rb)))(tail);
                        };
                    };
                }, function (v) {
                    return function (v1) {
                        var tail = oneRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value);
                        var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                        var insert = Record_Unsafe.unsafeSet(key);
                        return insert(one(dictSemiring))(tail);
                    };
                }, function (v) {
                    return function (v1) {
                        var tail = zeroRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value);
                        var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                        var insert = Record_Unsafe.unsafeSet(key);
                        return insert(zero(dictSemiring))(tail);
                    };
                });
            };
        };
    };
};
module.exports = {
    Semiring: Semiring,
    add: add,
    zero: zero,
    mul: mul,
    one: one,
    SemiringRecord: SemiringRecord,
    addRecord: addRecord,
    mulRecord: mulRecord,
    oneRecord: oneRecord,
    zeroRecord: zeroRecord,
    semiringInt: semiringInt,
    semiringNumber: semiringNumber,
    semiringFn: semiringFn,
    semiringUnit: semiringUnit,
    semiringRecord: semiringRecord,
    semiringRecordNil: semiringRecordNil,
    semiringRecordCons: semiringRecordCons
};

},{"../Data.Symbol/index.js":122,"../Data.Unit/index.js":133,"../Record.Unsafe/index.js":146,"../Type.Data.Row/index.js":147,"../Type.Data.RowList/index.js":148,"./foreign.js":106}],108:[function(require,module,exports){
"use strict";

exports.showIntImpl = function (n) {
  return n.toString();
};

exports.showNumberImpl = function (n) {
  var str = n.toString();
  return isNaN(str + ".0") ? str : str + ".0";
};

exports.showCharImpl = function (c) {
  var code = c.charCodeAt(0);
  if (code < 0x20 || code === 0x7F) {
    switch (c) {
      case "\x07": return "'\\a'";
      case "\b": return "'\\b'";
      case "\f": return "'\\f'";
      case "\n": return "'\\n'";
      case "\r": return "'\\r'";
      case "\t": return "'\\t'";
      case "\v": return "'\\v'";
    }
    return "'\\" + code.toString(10) + "'";
  }
  return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
};

exports.showStringImpl = function (s) {
  var l = s.length;
  return "\"" + s.replace(
    /[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
    function (c, i) {
      switch (c) {
        case "\"":
        case "\\":
          return "\\" + c;
        case "\x07": return "\\a";
        case "\b": return "\\b";
        case "\f": return "\\f";
        case "\n": return "\\n";
        case "\r": return "\\r";
        case "\t": return "\\t";
        case "\v": return "\\v";
      }
      var k = i + 1;
      var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
      return "\\" + c.charCodeAt(0).toString(10) + empty;
    }
  ) + "\"";
};

exports.showArrayImpl = function (f) {
  return function (xs) {
    var ss = [];
    for (var i = 0, l = xs.length; i < l; i++) {
      ss[i] = f(xs[i]);
    }
    return "[" + ss.join(",") + "]";
  };
};

exports.cons = function (head) {
  return function (tail) {
    return [head].concat(tail);
  };
};

exports.join = function (separator) {
  return function (xs) {
    return xs.join(separator);
  };
};

},{}],109:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var ShowRecordFields = function (showRecordFields) {
    this.showRecordFields = showRecordFields;
};
var Show = function (show) {
    this.show = show;
};
var showString = new Show($foreign.showStringImpl);
var showRecordFieldsNil = new ShowRecordFields(function (v) {
    return function (v1) {
        return [  ];
    };
});
var showRecordFields = function (dict) {
    return dict.showRecordFields;
};
var showRecord = function (dictRowToList) {
    return function (dictShowRecordFields) {
        return new Show(function (record) {
            var v = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
            if (v.length === 0) {
                return "{}";
            };
            return $foreign.join(" ")([ "{", $foreign.join(", ")(v), "}" ]);
        });
    };
};
var showNumber = new Show($foreign.showNumberImpl);
var showInt = new Show($foreign.showIntImpl);
var showChar = new Show($foreign.showCharImpl);
var showBoolean = new Show(function (v) {
    if (v) {
        return "true";
    };
    if (!v) {
        return "false";
    };
    throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 20, column 37): " + [ v.constructor.name ]);
});
var show = function (dict) {
    return dict.show;
};
var showArray = function (dictShow) {
    return new Show($foreign.showArrayImpl(show(dictShow)));
};
var showRecordFieldsCons = function (dictIsSymbol) {
    return function (dictShowRecordFields) {
        return function (dictShow) {
            return new ShowRecordFields(function (v) {
                return function (record) {
                    var tail = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
                    var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                    var focus = Record_Unsafe.unsafeGet(key)(record);
                    return $foreign.cons($foreign.join(": ")([ key, show(dictShow)(focus) ]))(tail);
                };
            });
        };
    };
};
module.exports = {
    Show: Show,
    show: show,
    ShowRecordFields: ShowRecordFields,
    showRecordFields: showRecordFields,
    showBoolean: showBoolean,
    showInt: showInt,
    showNumber: showNumber,
    showChar: showChar,
    showString: showString,
    showArray: showArray,
    showRecord: showRecord,
    showRecordFieldsNil: showRecordFieldsNil,
    showRecordFieldsCons: showRecordFieldsCons
};

},{"../Data.Symbol/index.js":122,"../Record.Unsafe/index.js":146,"../Type.Data.RowList/index.js":148,"./foreign.js":108}],110:[function(require,module,exports){
"use strict";

exports.fromCharArray = function (a) {
  return a.join("");
};

exports.toCharArray = function (s) {
  return s.split("");
};

exports.singleton = function (c) {
  return c;
};

exports._charAt = function (just) {
  return function (nothing) {
    return function (i) {
      return function (s) {
        return i >= 0 && i < s.length ? just(s.charAt(i)) : nothing;
      };
    };
  };
};

exports._toChar = function (just) {
  return function (nothing) {
    return function (s) {
      return s.length === 1 ? just(s) : nothing;
    };
  };
};

exports.length = function (s) {
  return s.length;
};

exports.countPrefix = function (p) {
  return function (s) {
    var i = 0;
    while (i < s.length && p(s.charAt(i))) i++;
    return i;
  };
};

exports._indexOf = function (just) {
  return function (nothing) {
    return function (x) {
      return function (s) {
        var i = s.indexOf(x);
        return i === -1 ? nothing : just(i);
      };
    };
  };
};

exports["_indexOf'"] = function (just) {
  return function (nothing) {
    return function (x) {
      return function (startAt) {
        return function (s) {
          if (startAt < 0 || startAt > s.length) return nothing;
          var i = s.indexOf(x, startAt);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };
};

exports._lastIndexOf = function (just) {
  return function (nothing) {
    return function (x) {
      return function (s) {
        var i = s.lastIndexOf(x);
        return i === -1 ? nothing : just(i);
      };
    };
  };
};

exports["_lastIndexOf'"] = function (just) {
  return function (nothing) {
    return function (x) {
      return function (startAt) {
        return function (s) {
          if (startAt < 0 || startAt > s.length) return nothing;
          var i = s.lastIndexOf(x, startAt);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };
};

exports.take = function (n) {
  return function (s) {
    return s.substr(0, n);
  };
};

exports.drop = function (n) {
  return function (s) {
    return s.substring(n);
  };
};

exports._slice = function (b) {
  return function (e) {
    return function (s) {
      return s.slice(b,e);
    };
  };
};

exports.splitAt = function (i) {
  return function (s) {
    return { before: s.substring(0, i), after: s.substring(i) };
  };
};

},{}],111:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_String_Unsafe = require("../Data.String.Unsafe/index.js");
var uncons = function (v) {
    if (v === "") {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just({
        head: Data_String_Unsafe.charAt(0)(v),
        tail: $foreign.drop(1)(v)
    });
};
var toChar = $foreign["_toChar"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var takeWhile = function (p) {
    return function (s) {
        return $foreign.take($foreign.countPrefix(p)(s))(s);
    };
};
var takeRight = function (i) {
    return function (s) {
        return $foreign.drop($foreign.length(s) - i | 0)(s);
    };
};
var slice = function (b) {
    return function (e) {
        return function (s) {
            var l = $foreign.length(s);
            var norm = function (x) {
                if (x < 0) {
                    return l + x | 0;
                };
                if (Data_Boolean.otherwise) {
                    return x;
                };
                throw new Error("Failed pattern match at Data.String.CodeUnits (line 314, column 5 - line 315, column 27): " + [ x.constructor.name ]);
            };
            var e$prime = norm(e);
            var b$prime = norm(b);
            var $7 = b$prime < 0 || (b$prime >= l || (e$prime < 0 || (e$prime > l || b$prime > e$prime)));
            if ($7) {
                return Data_Maybe.Nothing.value;
            };
            return new Data_Maybe.Just($foreign["_slice"](b)(e)(s));
        };
    };
};
var lastIndexOf$prime = $foreign["_lastIndexOf'"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var lastIndexOf = $foreign["_lastIndexOf"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var stripSuffix = function (v) {
    return function (str) {
        var v1 = lastIndexOf(v)(str);
        if (v1 instanceof Data_Maybe.Just && v1.value0 === ($foreign.length(str) - $foreign.length(v) | 0)) {
            return Data_Maybe.Just.create($foreign.take(v1.value0)(str));
        };
        return Data_Maybe.Nothing.value;
    };
};
var indexOf$prime = $foreign["_indexOf'"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var indexOf = $foreign["_indexOf"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var stripPrefix = function (v) {
    return function (str) {
        var v1 = indexOf(v)(str);
        if (v1 instanceof Data_Maybe.Just && v1.value0 === 0) {
            return Data_Maybe.Just.create($foreign.drop($foreign.length(v))(str));
        };
        return Data_Maybe.Nothing.value;
    };
};
var dropWhile = function (p) {
    return function (s) {
        return $foreign.drop($foreign.countPrefix(p)(s))(s);
    };
};
var dropRight = function (i) {
    return function (s) {
        return $foreign.take($foreign.length(s) - i | 0)(s);
    };
};
var contains = function (pat) {
    return function ($16) {
        return Data_Maybe.isJust(indexOf(pat)($16));
    };
};
var charAt = $foreign["_charAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
module.exports = {
    stripPrefix: stripPrefix,
    stripSuffix: stripSuffix,
    contains: contains,
    charAt: charAt,
    toChar: toChar,
    uncons: uncons,
    indexOf: indexOf,
    "indexOf'": indexOf$prime,
    lastIndexOf: lastIndexOf,
    "lastIndexOf'": lastIndexOf$prime,
    takeRight: takeRight,
    takeWhile: takeWhile,
    dropRight: dropRight,
    dropWhile: dropWhile,
    slice: slice,
    singleton: $foreign.singleton,
    fromCharArray: $foreign.fromCharArray,
    toCharArray: $foreign.toCharArray,
    length: $foreign.length,
    countPrefix: $foreign.countPrefix,
    take: $foreign.take,
    drop: $foreign.drop,
    splitAt: $foreign.splitAt
};

},{"../Data.Boolean/index.js":45,"../Data.Maybe/index.js":79,"../Data.String.Unsafe/index.js":118,"./foreign.js":110}],112:[function(require,module,exports){
"use strict";

exports._localeCompare = function (lt) {
  return function (eq) {
    return function (gt) {
      return function (s1) {
        return function (s2) {
          var result = s1.localeCompare(s2);
          return result < 0 ? lt : result > 0 ? gt : eq;
        };
      };
    };
  };
};

exports.replace = function (s1) {
  return function (s2) {
    return function (s3) {
      return s3.replace(s1, s2);
    };
  };
};

exports.replaceAll = function (s1) {
  return function (s2) {
    return function (s3) {
      return s3.replace(new RegExp(s1.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), s2); // eslint-disable-line no-useless-escape
    };
  };
};

exports.split = function (sep) {
  return function (s) {
    return s.split(sep);
  };
};

exports.toLower = function (s) {
  return s.toLowerCase();
};

exports.toUpper = function (s) {
  return s.toUpperCase();
};

exports.trim = function (s) {
  return s.trim();
};

exports.joinWith = function (s) {
  return function (xs) {
    return xs.join(s);
  };
};

},{}],113:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var $$null = function (s) {
    return s === "";
};
var localeCompare = $foreign["_localeCompare"](Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
module.exports = {
    "null": $$null,
    localeCompare: localeCompare,
    replace: $foreign.replace,
    replaceAll: $foreign.replaceAll,
    split: $foreign.split,
    toLower: $foreign.toLower,
    toUpper: $foreign.toUpper,
    trim: $foreign.trim,
    joinWith: $foreign.joinWith
};

},{"../Data.Ordering/index.js":97,"./foreign.js":112}],114:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var RegexFlags = (function () {
    function RegexFlags(value0) {
        this.value0 = value0;
    };
    RegexFlags.create = function (value0) {
        return new RegexFlags(value0);
    };
    return RegexFlags;
})();
var unicode = new RegexFlags({
    global: false,
    ignoreCase: false,
    multiline: false,
    sticky: false,
    unicode: true
});
var sticky = new RegexFlags({
    global: false,
    ignoreCase: false,
    multiline: false,
    sticky: true,
    unicode: false
});
var showRegexFlags = new Data_Show.Show(function (v) {
    var usedFlags = Data_Semigroup.append(Data_Semigroup.semigroupArray)([  ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)(Data_Functor.voidLeft(Data_Functor.functorArray)(Control_MonadZero.guard(Control_MonadZero.monadZeroArray)(v.value0.global))("global"))(Data_Semigroup.append(Data_Semigroup.semigroupArray)(Data_Functor.voidLeft(Data_Functor.functorArray)(Control_MonadZero.guard(Control_MonadZero.monadZeroArray)(v.value0.ignoreCase))("ignoreCase"))(Data_Semigroup.append(Data_Semigroup.semigroupArray)(Data_Functor.voidLeft(Data_Functor.functorArray)(Control_MonadZero.guard(Control_MonadZero.monadZeroArray)(v.value0.multiline))("multiline"))(Data_Semigroup.append(Data_Semigroup.semigroupArray)(Data_Functor.voidLeft(Data_Functor.functorArray)(Control_MonadZero.guard(Control_MonadZero.monadZeroArray)(v.value0.sticky))("sticky"))(Data_Functor.voidLeft(Data_Functor.functorArray)(Control_MonadZero.guard(Control_MonadZero.monadZeroArray)(v.value0.unicode))("unicode"))))));
    var $6 = Data_Eq.eq(Data_Eq.eqArray(Data_Eq.eqString))(usedFlags)([  ]);
    if ($6) {
        return "noFlags";
    };
    return "(" + (Data_String_Common.joinWith(" <> ")(usedFlags) + ")");
});
var semigroupRegexFlags = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return new RegexFlags({
            global: v.value0.global || v1.value0.global,
            ignoreCase: v.value0.ignoreCase || v1.value0.ignoreCase,
            multiline: v.value0.multiline || v1.value0.multiline,
            sticky: v.value0.sticky || v1.value0.sticky,
            unicode: v.value0.unicode || v1.value0.unicode
        });
    };
});
var noFlags = new RegexFlags({
    global: false,
    ignoreCase: false,
    multiline: false,
    sticky: false,
    unicode: false
});
var multiline = new RegexFlags({
    global: false,
    ignoreCase: false,
    multiline: true,
    sticky: false,
    unicode: false
});
var monoidRegexFlags = new Data_Monoid.Monoid(function () {
    return semigroupRegexFlags;
}, noFlags);
var ignoreCase = new RegexFlags({
    global: false,
    ignoreCase: true,
    multiline: false,
    sticky: false,
    unicode: false
});
var global = new RegexFlags({
    global: true,
    ignoreCase: false,
    multiline: false,
    sticky: false,
    unicode: false
});
var eqRegexFlags = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return v.value0.global === v1.value0.global && (v.value0.ignoreCase === v1.value0.ignoreCase && (v.value0.multiline === v1.value0.multiline && (v.value0.sticky === v1.value0.sticky && v.value0.unicode === v1.value0.unicode)));
    };
});
module.exports = {
    RegexFlags: RegexFlags,
    noFlags: noFlags,
    global: global,
    ignoreCase: ignoreCase,
    multiline: multiline,
    sticky: sticky,
    unicode: unicode,
    semigroupRegexFlags: semigroupRegexFlags,
    monoidRegexFlags: monoidRegexFlags,
    eqRegexFlags: eqRegexFlags,
    showRegexFlags: showRegexFlags
};

},{"../Control.MonadZero/index.js":29,"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Semigroup/index.js":105,"../Data.Show/index.js":109,"../Data.String.Common/index.js":113}],115:[function(require,module,exports){
"use strict";

exports["showRegex'"] = function (r) {
  return "" + r;
};

exports["regex'"] = function (left) {
  return function (right) {
    return function (s1) {
      return function (s2) {
        try {
          return right(new RegExp(s1, s2));
        } catch (e) {
          return left(e.message);
        }
      };
    };
  };
};

exports.source = function (r) {
  return r.source;
};

exports["flags'"] = function (r) {
  return {
    multiline: r.multiline,
    ignoreCase: r.ignoreCase,
    global: r.global,
    sticky: !!r.sticky,
    unicode: !!r.unicode
  };
};

exports.test = function (r) {
  return function (s) {
    var lastIndex = r.lastIndex;
    var result = r.test(s);
    r.lastIndex = lastIndex;
    return result;
  };
};

exports._match = function (just) {
  return function (nothing) {
    return function (r) {
      return function (s) {
        var m = s.match(r);
        if (m == null || m.length === 0) {
          return nothing;
        } else {
          for (var i = 0; i < m.length; i++) {
            m[i] = m[i] == null ? nothing : just(m[i]);
          }
          return just(m);
        }
      };
    };
  };
};

exports.replace = function (r) {
  return function (s1) {
    return function (s2) {
      return s2.replace(r, s1);
    };
  };
};

exports["replace'"] = function (r) {
  return function (f) {
    return function (s2) {
      return s2.replace(r, function (match) {
        return f(match)(Array.prototype.splice.call(arguments, 1, arguments.length - 3));
      });
    };
  };
};

exports._search = function (just) {
  return function (nothing) {
    return function (r) {
      return function (s) {
        var result = s.search(r);
        return result === -1 ? nothing : just(result);
      };
    };
  };
};

exports.split = function (r) {
  return function (s) {
    return s.split(r);
  };
};

},{}],116:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_Regex_Flags = require("../Data.String.Regex.Flags/index.js");
var showRegex = new Data_Show.Show($foreign["showRegex'"]);
var search = $foreign["_search"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var renderFlags = function (v) {
    return (function () {
        if (v.value0.global) {
            return "g";
        };
        return "";
    })() + ((function () {
        if (v.value0.ignoreCase) {
            return "i";
        };
        return "";
    })() + ((function () {
        if (v.value0.multiline) {
            return "m";
        };
        return "";
    })() + ((function () {
        if (v.value0.sticky) {
            return "y";
        };
        return "";
    })() + (function () {
        if (v.value0.unicode) {
            return "u";
        };
        return "";
    })())));
};
var regex = function (s) {
    return function (f) {
        return $foreign["regex'"](Data_Either.Left.create)(Data_Either.Right.create)(s)(renderFlags(f));
    };
};
var parseFlags = function (s) {
    return new Data_String_Regex_Flags.RegexFlags({
        global: Data_String_CodeUnits.contains("g")(s),
        ignoreCase: Data_String_CodeUnits.contains("i")(s),
        multiline: Data_String_CodeUnits.contains("m")(s),
        sticky: Data_String_CodeUnits.contains("y")(s),
        unicode: Data_String_CodeUnits.contains("u")(s)
    });
};
var match = $foreign["_match"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var flags = function ($8) {
    return Data_String_Regex_Flags.RegexFlags.create($foreign["flags'"]($8));
};
module.exports = {
    regex: regex,
    flags: flags,
    renderFlags: renderFlags,
    parseFlags: parseFlags,
    match: match,
    search: search,
    showRegex: showRegex,
    source: $foreign.source,
    test: $foreign.test,
    replace: $foreign.replace,
    "replace'": $foreign["replace'"],
    split: $foreign.split
};

},{"../Data.Either/index.js":51,"../Data.Maybe/index.js":79,"../Data.Show/index.js":109,"../Data.String.CodeUnits/index.js":111,"../Data.String.Regex.Flags/index.js":114,"./foreign.js":115}],117:[function(require,module,exports){
"use strict";

exports.charAt = function (i) {
  return function (s) {
    if (i >= 0 && i < s.length) return s.charAt(i);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
};

exports.char = function (s) {
  if (s.length === 1) return s.charAt(0);
  throw new Error("Data.String.Unsafe.char: Expected string of length 1.");
};

},{}],118:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
module.exports = {
    "char": $foreign["char"],
    charAt: $foreign.charAt
};

},{"./foreign.js":117}],119:[function(require,module,exports){
"use strict";

function _codePointAt (just) {
  return function (nothing) {
    return function (i) {
      return function (s) {
        var codePointArray = Array.from(s);
        var isWithinRange  = i >= 0 && i < codePointArray.length;

        return isWithinRange ? just(codePointArray[i].codePointAt(0)) : nothing;
      };
    };
  };
}

function _codePointAtP (just) {
  return function (nothing) {
    return function (i) {
      return function (s) {
        return i >= 0 && i < s.length ? just(s.codePointAt(i)) : nothing;
      };
    };
  };
}

function endsWith (searchString) {
  return function (s) {
    return s.endsWith(searchString);
  };
}

function endsWithP (searchString) {
  return function (position) {
    return function (s) {
      return s.endsWith(searchString, position);
    };
  };
}

function escapeRegex (str) {
  return str.replace(/[.*+?^${}()|[\]\-\\]/g, "\\$&");
}

function fromCharArray (array) {
  return array.join("");
}

function includes (searchString) {
  return function (str) {
    return str.includes(searchString);
  };
}

function includesP (needle) {
  return function (position) {
    return function (haystack) {
      // For negative `position` values, we search from the beginning of the
      // string. This is in accordance with the native
      // `String.prototype.include` function.
      var pos = Math.max(0, position);

      // Converting to arrays takes care of any surrogate code points
      var needleA    = Array.from(needle);
      var haystackA  = Array.from(haystack).slice(pos);
      var needleALen = needleA.length;

      var maxIndex = haystackA.length + 1 - needleALen;
      var found    = false;
      var i;

      // Naive implementation, at some point we should check whether Boyer-Moore
      // or Knuth-Morris-Pratt are worthwhile
      for (i = 0; i < maxIndex; i++) {
        if (needleA.every(function (e, j) { return e === haystackA[i+j]; })) {
          found = true;
          break;
        }
      }

      return found;
    };
  };
}

function length (str) {
  return Array.from(str).length;
}

function lines (str) {
  // See http://www.unicode.org/reports/tr18/#RL1.6
  return str.split(/\r\n|[\n\v\f\r\u0085\u2028\u2029]/);
}

function normalize (str) {
  return str.normalize();
}

function _normalizeP (normalizationForm) {
  return function (str) {
    return str.normalize(normalizationForm);
  };
}

function _repeat (just) {
  return function (nothing) {
    return function (n) {
      return function (str) {
        var result;

        try {
          result = just(str.repeat(n));
        }
        catch (error) {
          result = nothing;
        }

        return result;
      };
    };
  };
}

function startsWith (searchString) {
  return function (s) {
    return s.startsWith(searchString);
  };
}

function startsWithP (searchString) {
  return function (position) {
    return function (s) {
      return s.startsWith(searchString, position);
    };
  };
}

function stripChars (chars) {
  return function (s) {
    return s.replace(RegExp("[" + escapeRegex(chars) + "]", "g"), "");
  };
}

function stripDiacritics (str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function toCharArray (str) {
  return Array.from(str);
}

function unsafeCodePointAt (i) {
  return function (s) {
    var codePointArray = Array.from(s);
    var isWithinRange = i >= 0 && i < codePointArray.length;

    if (isWithinRange) {
      return codePointArray[i].codePointAt(0);
    }
    else {
      throw new Error("Data.String.Utils.unsafeCodePointAt: Invalid index");
    }
  };
}

function unsafeCodePointAtP (i) {
  return function (s) {
    if (i >= 0 && i < s.length) {
      return s.codePointAt(i);
    }
    else {
      throw new Error("Data.String.Utils.unsafeCodePointAt': Invalid index");
    }
  };
}

function unsafeRepeat (n) {
  return function (str) {
    try {
      return str.repeat(n);
    }
    catch (error) {
      throw new Error("Data.String.Utils.unsafeRepeat: Invalid count");
    }
  };
}

function words (s) {
  return s.split(/\s+/);
}

exports._codePointAt       = _codePointAt;
exports._codePointAtP      = _codePointAtP;
exports.endsWith           = endsWith;
exports.endsWithP          = endsWithP;
exports.escapeRegex        = escapeRegex;
exports.fromCharArray      = fromCharArray;
exports.includes           = includes;
exports.includesP          = includesP;
exports.length             = length;
exports.lines              = lines;
exports.normalize          = normalize;
exports._normalizeP        = _normalizeP;
exports._repeat            = _repeat;
exports.startsWith         = startsWith;
exports.startsWithP        = startsWithP;
exports.stripChars         = stripChars;
exports.stripDiacritics    = stripDiacritics;
exports.toCharArray        = toCharArray;
exports.unsafeCodePointAt  = unsafeCodePointAt;
exports.unsafeCodePointAtP = unsafeCodePointAtP;
exports.unsafeRepeat       = unsafeRepeat;
exports.words              = words;

},{}],120:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Regex = require("../Data.String.Regex/index.js");
var Data_String_Regex_Flags = require("../Data.String.Regex.Flags/index.js");
var NFC = (function () {
    function NFC() {

    };
    NFC.value = new NFC();
    return NFC;
})();
var NFD = (function () {
    function NFD() {

    };
    NFD.value = new NFD();
    return NFD;
})();
var NFKC = (function () {
    function NFKC() {

    };
    NFKC.value = new NFKC();
    return NFKC;
})();
var NFKD = (function () {
    function NFKD() {

    };
    NFKD.value = new NFKD();
    return NFKD;
})();
var unsafeCodePointAt$prime = $foreign.unsafeCodePointAtP;
var startsWith$prime = $foreign.startsWithP;
var showNormalizationForm = new Data_Show.Show(function (v) {
    if (v instanceof NFC) {
        return "NFC";
    };
    if (v instanceof NFD) {
        return "NFD";
    };
    if (v instanceof NFKC) {
        return "NFKC";
    };
    if (v instanceof NFKD) {
        return "NFKD";
    };
    throw new Error("Failed pattern match at Data.String.Utils (line 237, column 1 - line 237, column 57): " + [ v.constructor.name ]);
});
var replaceAll = (function () {
    var mkRegex = function (str) {
        return Data_Either.fromRight()(Data_String_Regex.regex($foreign.escapeRegex(str))(Data_String_Regex_Flags.global));
    };
    return function ($3) {
        return Data_String_Regex.replace(mkRegex($3));
    };
})();
var repeat = $foreign["_repeat"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var normalize$prime = function ($4) {
    return $foreign["_normalizeP"](Data_Show.show(showNormalizationForm)($4));
};
var mapChars = function (f) {
    return function ($5) {
        return $foreign.fromCharArray(Data_Functor.map(Data_Functor.functorArray)(f)($foreign.toCharArray($5)));
    };
};
var includes$prime = $foreign.includesP;
var filter = function (p) {
    return function ($6) {
        return $foreign.fromCharArray(Data_Array.filter(p)($foreign.toCharArray($6)));
    };
};
var endsWith$prime = $foreign.endsWithP;
var codePointAt$prime = $foreign["_codePointAtP"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var codePointAt = $foreign["_codePointAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var charAt = function (n) {
    return function (str) {
        return Data_Array.index($foreign.toCharArray(str))(n);
    };
};
module.exports = {
    NFC: NFC,
    NFD: NFD,
    NFKC: NFKC,
    NFKD: NFKD,
    charAt: charAt,
    codePointAt: codePointAt,
    "codePointAt'": codePointAt$prime,
    "endsWith'": endsWith$prime,
    filter: filter,
    "includes'": includes$prime,
    mapChars: mapChars,
    "normalize'": normalize$prime,
    repeat: repeat,
    replaceAll: replaceAll,
    "startsWith'": startsWith$prime,
    "unsafeCodePointAt'": unsafeCodePointAt$prime,
    showNormalizationForm: showNormalizationForm,
    endsWith: $foreign.endsWith,
    escapeRegex: $foreign.escapeRegex,
    fromCharArray: $foreign.fromCharArray,
    includes: $foreign.includes,
    length: $foreign.length,
    lines: $foreign.lines,
    normalize: $foreign.normalize,
    startsWith: $foreign.startsWith,
    stripChars: $foreign.stripChars,
    stripDiacritics: $foreign.stripDiacritics,
    toCharArray: $foreign.toCharArray,
    unsafeCodePointAt: $foreign.unsafeCodePointAt,
    unsafeRepeat: $foreign.unsafeRepeat,
    words: $foreign.words
};

},{"../Data.Array/index.js":36,"../Data.Either/index.js":51,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Show/index.js":109,"../Data.String.Regex.Flags/index.js":114,"../Data.String.Regex/index.js":116,"./foreign.js":119}],121:[function(require,module,exports){
"use strict";

// module Data.Symbol

exports.unsafeCoerce = function (arg) {
  return arg;
};


},{}],122:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var SProxy = (function () {
    function SProxy() {

    };
    SProxy.value = new SProxy();
    return SProxy;
})();
var IsSymbol = function (reflectSymbol) {
    this.reflectSymbol = reflectSymbol;
};
var reifySymbol = function (s) {
    return function (f) {
        return $foreign.unsafeCoerce(function (dictIsSymbol) {
            return f(dictIsSymbol);
        })({
            reflectSymbol: function (v) {
                return s;
            }
        })(SProxy.value);
    };
};
var reflectSymbol = function (dict) {
    return dict.reflectSymbol;
};
module.exports = {
    IsSymbol: IsSymbol,
    reflectSymbol: reflectSymbol,
    reifySymbol: reifySymbol,
    SProxy: SProxy
};

},{"./foreign.js":121}],123:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var StateR = function (x) {
    return x;
};
var StateL = function (x) {
    return x;
};
var stateR = function (v) {
    return v;
};
var stateL = function (v) {
    return v;
};
var functorStateR = new Data_Functor.Functor(function (f) {
    return function (k) {
        return function (s) {
            var v = stateR(k)(s);
            return {
                accum: v.accum,
                value: f(v.value)
            };
        };
    };
});
var functorStateL = new Data_Functor.Functor(function (f) {
    return function (k) {
        return function (s) {
            var v = stateL(k)(s);
            return {
                accum: v.accum,
                value: f(v.value)
            };
        };
    };
});
var applyStateR = new Control_Apply.Apply(function () {
    return functorStateR;
}, function (f) {
    return function (x) {
        return function (s) {
            var v = stateR(x)(s);
            var v1 = stateR(f)(v.accum);
            return {
                accum: v1.accum,
                value: v1.value(v.value)
            };
        };
    };
});
var applyStateL = new Control_Apply.Apply(function () {
    return functorStateL;
}, function (f) {
    return function (x) {
        return function (s) {
            var v = stateL(f)(s);
            var v1 = stateL(x)(v.accum);
            return {
                accum: v1.accum,
                value: v.value(v1.value)
            };
        };
    };
});
var applicativeStateR = new Control_Applicative.Applicative(function () {
    return applyStateR;
}, function (a) {
    return function (s) {
        return {
            accum: s,
            value: a
        };
    };
});
var applicativeStateL = new Control_Applicative.Applicative(function () {
    return applyStateL;
}, function (a) {
    return function (s) {
        return {
            accum: s,
            value: a
        };
    };
});
module.exports = {
    StateL: StateL,
    stateL: stateL,
    StateR: StateR,
    stateR: stateR,
    functorStateL: functorStateL,
    applyStateL: applyStateL,
    applicativeStateL: applicativeStateL,
    functorStateR: functorStateR,
    applyStateR: applyStateR,
    applicativeStateR: applicativeStateR
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Data.Functor/index.js":64}],124:[function(require,module,exports){
"use strict";

// jshint maxparams: 3

exports.traverseArrayImpl = function () {
  function array1(a) {
    return [a];
  }

  function array2(a) {
    return function (b) {
      return [a, b];
    };
  }

  function array3(a) {
    return function (b) {
      return function (c) {
        return [a, b, c];
      };
    };
  }

  function concat2(xs) {
    return function (ys) {
      return xs.concat(ys);
    };
  }

  return function (apply) {
    return function (map) {
      return function (pure) {
        return function (f) {
          return function (array) {
            function go(bot, top) {
              switch (top - bot) {
              case 0: return pure([]);
              case 1: return map(array1)(f(array[bot]));
              case 2: return apply(map(array2)(f(array[bot])))(f(array[bot + 1]));
              case 3: return apply(apply(map(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
              default:
                // This slightly tricky pivot selection aims to produce two
                // even-length partitions where possible.
                var pivot = bot + Math.floor((top - bot) / 4) * 2;
                return apply(map(concat2)(go(bot, pivot)))(go(pivot, top));
              }
            }
            return go(0, array.length);
          };
        };
      };
    };
  };
}();

},{}],125:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Maybe_First = require("../Data.Maybe.First/index.js");
var Data_Maybe_Last = require("../Data.Maybe.Last/index.js");
var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");
var Data_Traversable_Accum_Internal = require("../Data.Traversable.Accum.Internal/index.js");
var Traversable = function (Foldable1, Functor0, sequence, traverse) {
    this.Foldable1 = Foldable1;
    this.Functor0 = Functor0;
    this.sequence = sequence;
    this.traverse = traverse;
};
var traverse = function (dict) {
    return dict.traverse;
};
var traversableMultiplicative = new Traversable(function () {
    return Data_Foldable.foldableMultiplicative;
}, function () {
    return Data_Monoid_Multiplicative.functorMultiplicative;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Multiplicative.Multiplicative)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Multiplicative.Multiplicative)(f(v));
        };
    };
});
var traversableMaybe = new Traversable(function () {
    return Data_Foldable.foldableMaybe;
}, function () {
    return Data_Maybe.functorMaybe;
}, function (dictApplicative) {
    return function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return Control_Applicative.pure(dictApplicative)(Data_Maybe.Nothing.value);
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe.Just.create)(v.value0);
        };
        throw new Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 86, column 47): " + [ v.constructor.name ]);
    };
}, function (dictApplicative) {
    return function (v) {
        return function (v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictApplicative)(Data_Maybe.Nothing.value);
            };
            if (v1 instanceof Data_Maybe.Just) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe.Just.create)(v(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 86, column 47): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
});
var traversableDual = new Traversable(function () {
    return Data_Foldable.foldableDual;
}, function () {
    return Data_Monoid_Dual.functorDual;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Dual.Dual)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Dual.Dual)(f(v));
        };
    };
});
var traversableDisj = new Traversable(function () {
    return Data_Foldable.foldableDisj;
}, function () {
    return Data_Monoid_Disj.functorDisj;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Disj.Disj)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Disj.Disj)(f(v));
        };
    };
});
var traversableConj = new Traversable(function () {
    return Data_Foldable.foldableConj;
}, function () {
    return Data_Monoid_Conj.functorConj;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Conj.Conj)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Conj.Conj)(f(v));
        };
    };
});
var traversableAdditive = new Traversable(function () {
    return Data_Foldable.foldableAdditive;
}, function () {
    return Data_Monoid_Additive.functorAdditive;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Additive.Additive)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Monoid_Additive.Additive)(f(v));
        };
    };
});
var sequenceDefault = function (dictTraversable) {
    return function (dictApplicative) {
        return traverse(dictTraversable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var traversableArray = new Traversable(function () {
    return Data_Foldable.foldableArray;
}, function () {
    return Data_Functor.functorArray;
}, function (dictApplicative) {
    return sequenceDefault(traversableArray)(dictApplicative);
}, function (dictApplicative) {
    return $foreign.traverseArrayImpl(Control_Apply.apply(dictApplicative.Apply0()))(Data_Functor.map((dictApplicative.Apply0()).Functor0()))(Control_Applicative.pure(dictApplicative));
});
var sequence = function (dict) {
    return dict.sequence;
};
var traversableFirst = new Traversable(function () {
    return Data_Foldable.foldableFirst;
}, function () {
    return Data_Maybe_First.functorFirst;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe_First.First)(sequence(traversableMaybe)(dictApplicative)(v));
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe_First.First)(traverse(traversableMaybe)(dictApplicative)(f)(v));
        };
    };
});
var traversableLast = new Traversable(function () {
    return Data_Foldable.foldableLast;
}, function () {
    return Data_Maybe_Last.functorLast;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe_Last.Last)(sequence(traversableMaybe)(dictApplicative)(v));
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe_Last.Last)(traverse(traversableMaybe)(dictApplicative)(f)(v));
        };
    };
});
var traverseDefault = function (dictTraversable) {
    return function (dictApplicative) {
        return function (f) {
            return function (ta) {
                return sequence(dictTraversable)(dictApplicative)(Data_Functor.map(dictTraversable.Functor0())(f)(ta));
            };
        };
    };
};
var mapAccumR = function (dictTraversable) {
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateR(traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateR)(function (a) {
                    return function (s) {
                        return f(s)(a);
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanr = function (dictTraversable) {
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumR(dictTraversable)(function (b) {
                    return function (a) {
                        var b$prime = f(a)(b);
                        return {
                            accum: b$prime,
                            value: b$prime
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var mapAccumL = function (dictTraversable) {
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateL(traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateL)(function (a) {
                    return function (s) {
                        return f(s)(a);
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanl = function (dictTraversable) {
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumL(dictTraversable)(function (b) {
                    return function (a) {
                        var b$prime = f(b)(a);
                        return {
                            accum: b$prime,
                            value: b$prime
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var $$for = function (dictApplicative) {
    return function (dictTraversable) {
        return function (x) {
            return function (f) {
                return traverse(dictTraversable)(dictApplicative)(f)(x);
            };
        };
    };
};
module.exports = {
    Traversable: Traversable,
    traverse: traverse,
    sequence: sequence,
    traverseDefault: traverseDefault,
    sequenceDefault: sequenceDefault,
    "for": $$for,
    scanl: scanl,
    scanr: scanr,
    mapAccumL: mapAccumL,
    mapAccumR: mapAccumR,
    traversableArray: traversableArray,
    traversableMaybe: traversableMaybe,
    traversableFirst: traversableFirst,
    traversableLast: traversableLast,
    traversableAdditive: traversableAdditive,
    traversableDual: traversableDual,
    traversableConj: traversableConj,
    traversableDisj: traversableDisj,
    traversableMultiplicative: traversableMultiplicative
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Category/index.js":12,"../Data.Foldable/index.js":59,"../Data.Functor/index.js":64,"../Data.Maybe.First/index.js":77,"../Data.Maybe.Last/index.js":78,"../Data.Maybe/index.js":79,"../Data.Monoid.Additive/index.js":80,"../Data.Monoid.Conj/index.js":81,"../Data.Monoid.Disj/index.js":82,"../Data.Monoid.Dual/index.js":83,"../Data.Monoid.Multiplicative/index.js":85,"../Data.Traversable.Accum.Internal/index.js":123,"./foreign.js":124}],126:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Traversable_Accum_Internal = require("../Data.Traversable.Accum.Internal/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var TraversableWithIndex = function (FoldableWithIndex1, FunctorWithIndex0, Traversable2, traverseWithIndex) {
    this.FoldableWithIndex1 = FoldableWithIndex1;
    this.FunctorWithIndex0 = FunctorWithIndex0;
    this.Traversable2 = Traversable2;
    this.traverseWithIndex = traverseWithIndex;
};
var traverseWithIndexDefault = function (dictTraversableWithIndex) {
    return function (dictApplicative) {
        return function (f) {
            return function ($19) {
                return Data_Traversable.sequence(dictTraversableWithIndex.Traversable2())(dictApplicative)(Data_FunctorWithIndex.mapWithIndex(dictTraversableWithIndex.FunctorWithIndex0())(f)($19));
            };
        };
    };
};
var traverseWithIndex = function (dict) {
    return dict.traverseWithIndex;
};
var traverseDefault = function (dictTraversableWithIndex) {
    return function (dictApplicative) {
        return function (f) {
            return traverseWithIndex(dictTraversableWithIndex)(dictApplicative)(Data_Function["const"](f));
        };
    };
};
var traversableWithIndexMultiplicative = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexMultiplicative;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexMultiplicative;
}, function () {
    return Data_Traversable.traversableMultiplicative;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableMultiplicative)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexMaybe = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexMaybe;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexMaybe;
}, function () {
    return Data_Traversable.traversableMaybe;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableMaybe)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexLast = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexLast;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexLast;
}, function () {
    return Data_Traversable.traversableLast;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableLast)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexFirst = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexFirst;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexFirst;
}, function () {
    return Data_Traversable.traversableFirst;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableFirst)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexDual = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexDual;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexDual;
}, function () {
    return Data_Traversable.traversableDual;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableDual)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexDisj = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexDisj;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexDisj;
}, function () {
    return Data_Traversable.traversableDisj;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableDisj)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexConj = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexConj;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexConj;
}, function () {
    return Data_Traversable.traversableConj;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableConj)(dictApplicative)(f(Data_Unit.unit));
    };
});
var traversableWithIndexArray = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexArray;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexArray;
}, function () {
    return Data_Traversable.traversableArray;
}, function (dictApplicative) {
    return traverseWithIndexDefault(traversableWithIndexArray)(dictApplicative);
});
var traversableWithIndexAdditive = new TraversableWithIndex(function () {
    return Data_FoldableWithIndex.foldableWithIndexAdditive;
}, function () {
    return Data_FunctorWithIndex.functorWithIndexAdditive;
}, function () {
    return Data_Traversable.traversableAdditive;
}, function (dictApplicative) {
    return function (f) {
        return Data_Traversable.traverse(Data_Traversable.traversableAdditive)(dictApplicative)(f(Data_Unit.unit));
    };
});
var mapAccumRWithIndex = function (dictTraversableWithIndex) {
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateR(traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateR)(function (i) {
                    return function (a) {
                        return function (s) {
                            return f(i)(s)(a);
                        };
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanrWithIndex = function (dictTraversableWithIndex) {
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumRWithIndex(dictTraversableWithIndex)(function (i) {
                    return function (b) {
                        return function (a) {
                            var b$prime = f(i)(a)(b);
                            return {
                                accum: b$prime,
                                value: b$prime
                            };
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var mapAccumLWithIndex = function (dictTraversableWithIndex) {
    return function (f) {
        return function (s0) {
            return function (xs) {
                return Data_Traversable_Accum_Internal.stateL(traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateL)(function (i) {
                    return function (a) {
                        return function (s) {
                            return f(i)(s)(a);
                        };
                    };
                })(xs))(s0);
            };
        };
    };
};
var scanlWithIndex = function (dictTraversableWithIndex) {
    return function (f) {
        return function (b0) {
            return function (xs) {
                return (mapAccumLWithIndex(dictTraversableWithIndex)(function (i) {
                    return function (b) {
                        return function (a) {
                            var b$prime = f(i)(b)(a);
                            return {
                                accum: b$prime,
                                value: b$prime
                            };
                        };
                    };
                })(b0)(xs)).value;
            };
        };
    };
};
var forWithIndex = function (dictApplicative) {
    return function (dictTraversableWithIndex) {
        return Data_Function.flip(traverseWithIndex(dictTraversableWithIndex)(dictApplicative));
    };
};
module.exports = {
    TraversableWithIndex: TraversableWithIndex,
    traverseWithIndex: traverseWithIndex,
    traverseWithIndexDefault: traverseWithIndexDefault,
    forWithIndex: forWithIndex,
    scanlWithIndex: scanlWithIndex,
    mapAccumLWithIndex: mapAccumLWithIndex,
    scanrWithIndex: scanrWithIndex,
    mapAccumRWithIndex: mapAccumRWithIndex,
    traverseDefault: traverseDefault,
    traversableWithIndexArray: traversableWithIndexArray,
    traversableWithIndexMaybe: traversableWithIndexMaybe,
    traversableWithIndexFirst: traversableWithIndexFirst,
    traversableWithIndexLast: traversableWithIndexLast,
    traversableWithIndexAdditive: traversableWithIndexAdditive,
    traversableWithIndexDual: traversableWithIndexDual,
    traversableWithIndexConj: traversableWithIndexConj,
    traversableWithIndexDisj: traversableWithIndexDisj,
    traversableWithIndexMultiplicative: traversableWithIndexMultiplicative
};

},{"../Data.FoldableWithIndex/index.js":60,"../Data.Function/index.js":61,"../Data.FunctorWithIndex/index.js":66,"../Data.Traversable.Accum.Internal/index.js":123,"../Data.Traversable/index.js":125,"../Data.Unit/index.js":133}],127:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Bifoldable = require("../Data.Bifoldable/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Bitraversable = require("../Data.Bitraversable/index.js");
var Data_BooleanAlgebra = require("../Data.BooleanAlgebra/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");
var Data_Distributive = require("../Data.Distributive/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Maybe_First = require("../Data.Maybe.First/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var Tuple = (function () {
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    return Tuple;
})();
var uncurry = function (f) {
    return function (v) {
        return f(v.value0)(v.value1);
    };
};
var swap = function (v) {
    return new Tuple(v.value1, v.value0);
};
var snd = function (v) {
    return v.value1;
};
var showTuple = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            return "(Tuple " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
        });
    };
};
var semiringTuple = function (dictSemiring) {
    return function (dictSemiring1) {
        return new Data_Semiring.Semiring(function (v) {
            return function (v1) {
                return new Tuple(Data_Semiring.add(dictSemiring)(v.value0)(v1.value0), Data_Semiring.add(dictSemiring1)(v.value1)(v1.value1));
            };
        }, function (v) {
            return function (v1) {
                return new Tuple(Data_Semiring.mul(dictSemiring)(v.value0)(v1.value0), Data_Semiring.mul(dictSemiring1)(v.value1)(v1.value1));
            };
        }, new Tuple(Data_Semiring.one(dictSemiring), Data_Semiring.one(dictSemiring1)), new Tuple(Data_Semiring.zero(dictSemiring), Data_Semiring.zero(dictSemiring1)));
    };
};
var semigroupoidTuple = new Control_Semigroupoid.Semigroupoid(function (v) {
    return function (v1) {
        return new Tuple(v1.value0, v.value1);
    };
});
var semigroupTuple = function (dictSemigroup) {
    return function (dictSemigroup1) {
        return new Data_Semigroup.Semigroup(function (v) {
            return function (v1) {
                return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), Data_Semigroup.append(dictSemigroup1)(v.value1)(v1.value1));
            };
        });
    };
};
var ringTuple = function (dictRing) {
    return function (dictRing1) {
        return new Data_Ring.Ring(function () {
            return semiringTuple(dictRing.Semiring0())(dictRing1.Semiring0());
        }, function (v) {
            return function (v1) {
                return new Tuple(Data_Ring.sub(dictRing)(v.value0)(v1.value0), Data_Ring.sub(dictRing1)(v.value1)(v1.value1));
            };
        });
    };
};
var monoidTuple = function (dictMonoid) {
    return function (dictMonoid1) {
        return new Data_Monoid.Monoid(function () {
            return semigroupTuple(dictMonoid.Semigroup0())(dictMonoid1.Semigroup0());
        }, new Tuple(Data_Monoid.mempty(dictMonoid), Data_Monoid.mempty(dictMonoid1)));
    };
};
var lookup = function (dictFoldable) {
    return function (dictEq) {
        return function (a) {
            return function ($312) {
                return Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst)(Data_Foldable.foldMap(dictFoldable)(Data_Maybe_First.monoidFirst)(function (v) {
                    var $163 = Data_Eq.eq(dictEq)(a)(v.value0);
                    if ($163) {
                        return new Data_Maybe.Just(v.value1);
                    };
                    return Data_Maybe.Nothing.value;
                })($312));
            };
        };
    };
};
var heytingAlgebraTuple = function (dictHeytingAlgebra) {
    return function (dictHeytingAlgebra1) {
        return new Data_HeytingAlgebra.HeytingAlgebra(function (v) {
            return function (v1) {
                return new Tuple(Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.conj(dictHeytingAlgebra1)(v.value1)(v1.value1));
            };
        }, function (v) {
            return function (v1) {
                return new Tuple(Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.disj(dictHeytingAlgebra1)(v.value1)(v1.value1));
            };
        }, new Tuple(Data_HeytingAlgebra.ff(dictHeytingAlgebra), Data_HeytingAlgebra.ff(dictHeytingAlgebra1)), function (v) {
            return function (v1) {
                return new Tuple(Data_HeytingAlgebra.implies(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.implies(dictHeytingAlgebra1)(v.value1)(v1.value1));
            };
        }, function (v) {
            return new Tuple(Data_HeytingAlgebra.not(dictHeytingAlgebra)(v.value0), Data_HeytingAlgebra.not(dictHeytingAlgebra1)(v.value1));
        }, new Tuple(Data_HeytingAlgebra.tt(dictHeytingAlgebra), Data_HeytingAlgebra.tt(dictHeytingAlgebra1)));
    };
};
var functorTuple = new Data_Functor.Functor(function (f) {
    return function (m) {
        return new Tuple(m.value0, f(m.value1));
    };
});
var functorWithIndexTuple = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorTuple;
}, function (f) {
    return Data_Functor.map(functorTuple)(f(Data_Unit.unit));
});
var invariantTuple = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorTuple));
var fst = function (v) {
    return v.value0;
};
var lazyTuple = function (dictLazy) {
    return function (dictLazy1) {
        return new Control_Lazy.Lazy(function (f) {
            return new Tuple(Control_Lazy.defer(dictLazy)(function (v) {
                return fst(f(Data_Unit.unit));
            }), Control_Lazy.defer(dictLazy1)(function (v) {
                return snd(f(Data_Unit.unit));
            }));
        });
    };
};
var foldableTuple = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(z)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(v.value1)(z);
        };
    };
});
var foldableWithIndexTuple = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableTuple;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(Data_Unit.unit)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(z)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(v.value1)(z);
        };
    };
});
var traversableTuple = new Data_Traversable.Traversable(function () {
    return foldableTuple;
}, function () {
    return functorTuple;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tuple.create(v.value0))(v.value1);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tuple.create(v.value0))(f(v.value1));
        };
    };
});
var traversableWithIndexTuple = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexTuple;
}, function () {
    return functorWithIndexTuple;
}, function () {
    return traversableTuple;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tuple.create(v.value0))(f(Data_Unit.unit)(v.value1));
        };
    };
});
var foldable1Tuple = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableTuple;
}, function (dictSemigroup) {
    return function (v) {
        return v.value1;
    };
}, function (dictSemigroup) {
    return function (f) {
        return function (v) {
            return f(v.value1);
        };
    };
});
var traversable1Tuple = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1Tuple;
}, function () {
    return traversableTuple;
}, function (dictApply) {
    return function (v) {
        return Data_Functor.map(dictApply.Functor0())(Tuple.create(v.value0))(v.value1);
    };
}, function (dictApply) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictApply.Functor0())(Tuple.create(v.value0))(f(v.value1));
        };
    };
});
var extendTuple = new Control_Extend.Extend(function () {
    return functorTuple;
}, function (f) {
    return function (v) {
        return new Tuple(v.value0, f(v));
    };
});
var eqTuple = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
            };
        });
    };
};
var ordTuple = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqTuple(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
            };
        });
    };
};
var eq1Tuple = function (dictEq) {
    return new Data_Eq.Eq1(function (dictEq1) {
        return Data_Eq.eq(eqTuple(dictEq)(dictEq1));
    });
};
var ord1Tuple = function (dictOrd) {
    return new Data_Ord.Ord1(function () {
        return eq1Tuple(dictOrd.Eq0());
    }, function (dictOrd1) {
        return Data_Ord.compare(ordTuple(dictOrd)(dictOrd1));
    });
};
var distributiveTuple = function (dictTypeEquals) {
    return new Data_Distributive.Distributive(function () {
        return functorTuple;
    }, function (dictFunctor) {
        return Data_Distributive.collectDefault(distributiveTuple(dictTypeEquals))(dictFunctor);
    }, function (dictFunctor) {
        return function ($313) {
            return Tuple.create(Type_Equality.from(dictTypeEquals)(Data_Unit.unit))(Data_Functor.map(dictFunctor)(snd)($313));
        };
    });
};
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(new Tuple(a, b));
        };
    };
};
var comonadTuple = new Control_Comonad.Comonad(function () {
    return extendTuple;
}, snd);
var commutativeRingTuple = function (dictCommutativeRing) {
    return function (dictCommutativeRing1) {
        return new Data_CommutativeRing.CommutativeRing(function () {
            return ringTuple(dictCommutativeRing.Ring0())(dictCommutativeRing1.Ring0());
        });
    };
};
var boundedTuple = function (dictBounded) {
    return function (dictBounded1) {
        return new Data_Bounded.Bounded(function () {
            return ordTuple(dictBounded.Ord0())(dictBounded1.Ord0());
        }, new Tuple(Data_Bounded.bottom(dictBounded), Data_Bounded.bottom(dictBounded1)), new Tuple(Data_Bounded.top(dictBounded), Data_Bounded.top(dictBounded1)));
    };
};
var booleanAlgebraTuple = function (dictBooleanAlgebra) {
    return function (dictBooleanAlgebra1) {
        return new Data_BooleanAlgebra.BooleanAlgebra(function () {
            return heytingAlgebraTuple(dictBooleanAlgebra.HeytingAlgebra0())(dictBooleanAlgebra1.HeytingAlgebra0());
        });
    };
};
var bifunctorTuple = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            return new Tuple(f(v.value0), g(v.value1));
        };
    };
});
var bifoldableTuple = new Data_Bifoldable.Bifoldable(function (dictMonoid) {
    return function (f) {
        return function (g) {
            return function (v) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(g(v.value1));
            };
        };
    };
}, function (f) {
    return function (g) {
        return function (z) {
            return function (v) {
                return g(f(z)(v.value0))(v.value1);
            };
        };
    };
}, function (f) {
    return function (g) {
        return function (z) {
            return function (v) {
                return f(v.value0)(g(v.value1)(z));
            };
        };
    };
});
var bitraversableTuple = new Data_Bitraversable.Bitraversable(function () {
    return bifoldableTuple;
}, function () {
    return bifunctorTuple;
}, function (dictApplicative) {
    return function (v) {
        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tuple.create)(v.value0))(v.value1);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (g) {
            return function (v) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tuple.create)(f(v.value0)))(g(v.value1));
            };
        };
    };
});
var biapplyTuple = new Control_Biapply.Biapply(function () {
    return bifunctorTuple;
}, function (v) {
    return function (v1) {
        return new Tuple(v.value0(v1.value0), v.value1(v1.value1));
    };
});
var biapplicativeTuple = new Control_Biapplicative.Biapplicative(function () {
    return biapplyTuple;
}, Tuple.create);
var applyTuple = function (dictSemigroup) {
    return new Control_Apply.Apply(function () {
        return functorTuple;
    }, function (v) {
        return function (v1) {
            return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v.value1(v1.value1));
        };
    });
};
var bindTuple = function (dictSemigroup) {
    return new Control_Bind.Bind(function () {
        return applyTuple(dictSemigroup);
    }, function (v) {
        return function (f) {
            var v1 = f(v.value1);
            return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v1.value1);
        };
    });
};
var applicativeTuple = function (dictMonoid) {
    return new Control_Applicative.Applicative(function () {
        return applyTuple(dictMonoid.Semigroup0());
    }, Tuple.create(Data_Monoid.mempty(dictMonoid)));
};
var monadTuple = function (dictMonoid) {
    return new Control_Monad.Monad(function () {
        return applicativeTuple(dictMonoid);
    }, function () {
        return bindTuple(dictMonoid.Semigroup0());
    });
};
module.exports = {
    Tuple: Tuple,
    fst: fst,
    snd: snd,
    curry: curry,
    uncurry: uncurry,
    swap: swap,
    lookup: lookup,
    showTuple: showTuple,
    eqTuple: eqTuple,
    eq1Tuple: eq1Tuple,
    ordTuple: ordTuple,
    ord1Tuple: ord1Tuple,
    boundedTuple: boundedTuple,
    semigroupoidTuple: semigroupoidTuple,
    semigroupTuple: semigroupTuple,
    monoidTuple: monoidTuple,
    semiringTuple: semiringTuple,
    ringTuple: ringTuple,
    commutativeRingTuple: commutativeRingTuple,
    heytingAlgebraTuple: heytingAlgebraTuple,
    booleanAlgebraTuple: booleanAlgebraTuple,
    functorTuple: functorTuple,
    functorWithIndexTuple: functorWithIndexTuple,
    invariantTuple: invariantTuple,
    bifunctorTuple: bifunctorTuple,
    applyTuple: applyTuple,
    biapplyTuple: biapplyTuple,
    applicativeTuple: applicativeTuple,
    biapplicativeTuple: biapplicativeTuple,
    bindTuple: bindTuple,
    monadTuple: monadTuple,
    extendTuple: extendTuple,
    comonadTuple: comonadTuple,
    lazyTuple: lazyTuple,
    foldableTuple: foldableTuple,
    foldable1Tuple: foldable1Tuple,
    foldableWithIndexTuple: foldableWithIndexTuple,
    bifoldableTuple: bifoldableTuple,
    traversableTuple: traversableTuple,
    traversable1Tuple: traversable1Tuple,
    traversableWithIndexTuple: traversableWithIndexTuple,
    bitraversableTuple: bitraversableTuple,
    distributiveTuple: distributiveTuple
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Biapplicative/index.js":8,"../Control.Biapply/index.js":9,"../Control.Bind/index.js":11,"../Control.Comonad/index.js":13,"../Control.Extend/index.js":15,"../Control.Lazy/index.js":16,"../Control.Monad/index.js":27,"../Control.Semigroupoid/index.js":31,"../Data.Bifoldable/index.js":37,"../Data.Bifunctor/index.js":43,"../Data.Bitraversable/index.js":44,"../Data.BooleanAlgebra/index.js":46,"../Data.Bounded/index.js":48,"../Data.CommutativeRing/index.js":49,"../Data.Distributive/index.js":50,"../Data.Eq/index.js":55,"../Data.Foldable/index.js":59,"../Data.FoldableWithIndex/index.js":60,"../Data.Functor.Invariant/index.js":62,"../Data.Functor/index.js":64,"../Data.FunctorWithIndex/index.js":66,"../Data.HeytingAlgebra/index.js":68,"../Data.Maybe.First/index.js":77,"../Data.Maybe/index.js":79,"../Data.Monoid/index.js":86,"../Data.Newtype/index.js":87,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Ring/index.js":99,"../Data.Semigroup.Foldable/index.js":101,"../Data.Semigroup.Traversable/index.js":103,"../Data.Semigroup/index.js":105,"../Data.Semiring/index.js":107,"../Data.Show/index.js":109,"../Data.Traversable/index.js":125,"../Data.TraversableWithIndex/index.js":126,"../Data.Unit/index.js":133,"../Type.Equality/index.js":149}],128:[function(require,module,exports){
"use strict";

exports.unfoldrArrayImpl = function (isNothing) {
  return function (fromJust) {
    return function (fst) {
      return function (snd) {
        return function (f) {
          return function (b) {
            var result = [];
            var value = b;
            while (true) { // eslint-disable-line no-constant-condition
              var maybe = f(value);
              if (isNothing(maybe)) return result;
              var tuple = fromJust(maybe);
              result.push(fst(tuple));
              value = snd(tuple);
            }
          };
        };
      };
    };
  };
};

},{}],129:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Unfoldable = function (Unfoldable10, unfoldr) {
    this.Unfoldable10 = Unfoldable10;
    this.unfoldr = unfoldr;
};
var unfoldr = function (dict) {
    return dict.unfoldr;
};
var unfoldableArray = new Unfoldable(function () {
    return Data_Unfoldable1.unfoldable1Array;
}, $foreign.unfoldrArrayImpl(Data_Maybe.isNothing)(Data_Maybe.fromJust())(Data_Tuple.fst)(Data_Tuple.snd));
var replicate = function (dictUnfoldable) {
    return function (n) {
        return function (v) {
            var step = function (i) {
                var $7 = i <= 0;
                if ($7) {
                    return Data_Maybe.Nothing.value;
                };
                return new Data_Maybe.Just(new Data_Tuple.Tuple(v, i - 1 | 0));
            };
            return unfoldr(dictUnfoldable)(step)(n);
        };
    };
};
var replicateA = function (dictApplicative) {
    return function (dictUnfoldable) {
        return function (dictTraversable) {
            return function (n) {
                return function (m) {
                    return Data_Traversable.sequence(dictTraversable)(dictApplicative)(replicate(dictUnfoldable)(n)(m));
                };
            };
        };
    };
};
var none = function (dictUnfoldable) {
    return unfoldr(dictUnfoldable)(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Unit.unit);
};
var fromMaybe = function (dictUnfoldable) {
    return unfoldr(dictUnfoldable)(function (b) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Function.flip(Data_Tuple.Tuple.create)(Data_Maybe.Nothing.value))(b);
    });
};
module.exports = {
    Unfoldable: Unfoldable,
    unfoldr: unfoldr,
    replicate: replicate,
    replicateA: replicateA,
    none: none,
    fromMaybe: fromMaybe,
    unfoldableArray: unfoldableArray
};

},{"../Data.Function/index.js":61,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Traversable/index.js":125,"../Data.Tuple/index.js":127,"../Data.Unfoldable1/index.js":131,"../Data.Unit/index.js":133,"./foreign.js":128}],130:[function(require,module,exports){
"use strict";

exports.unfoldr1ArrayImpl = function (isNothing) {
  return function (fromJust) {
    return function (fst) {
      return function (snd) {
        return function (f) {
          return function (b) {
            var result = [];
            var value = b;
            while (true) { // eslint-disable-line no-constant-condition
              var tuple = f(value);
              result.push(fst(tuple));
              var maybe = snd(tuple);
              if (isNothing(maybe)) return result;
              value = fromJust(maybe);
            }
          };
        };
      };
    };
  };
};

},{}],131:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Unfoldable1 = function (unfoldr1) {
    this.unfoldr1 = unfoldr1;
};
var unfoldr1 = function (dict) {
    return dict.unfoldr1;
};
var unfoldable1Array = new Unfoldable1($foreign.unfoldr1ArrayImpl(Data_Maybe.isNothing)(Data_Maybe.fromJust())(Data_Tuple.fst)(Data_Tuple.snd));
var replicate1 = function (dictUnfoldable1) {
    return function (n) {
        return function (v) {
            var step = function (i) {
                if (i <= 0) {
                    return new Data_Tuple.Tuple(v, Data_Maybe.Nothing.value);
                };
                if (Data_Boolean.otherwise) {
                    return new Data_Tuple.Tuple(v, new Data_Maybe.Just(i - 1 | 0));
                };
                throw new Error("Failed pattern match at Data.Unfoldable1 (line 47, column 5 - line 47, column 39): " + [ i.constructor.name ]);
            };
            return unfoldr1(dictUnfoldable1)(step)(n - 1 | 0);
        };
    };
};
var replicate1A = function (dictApply) {
    return function (dictUnfoldable1) {
        return function (dictTraversable1) {
            return function (n) {
                return function (m) {
                    return Data_Semigroup_Traversable.sequence1(dictTraversable1)(dictApply)(replicate1(dictUnfoldable1)(n)(m));
                };
            };
        };
    };
};
var singleton = function (dictUnfoldable1) {
    return replicate1(dictUnfoldable1)(1);
};
var range = function (dictUnfoldable1) {
    return function (start) {
        return function (end) {
            var go = function (delta) {
                return function (i) {
                    var i$prime = i + delta | 0;
                    return new Data_Tuple.Tuple(i, (function () {
                        var $8 = i === end;
                        if ($8) {
                            return Data_Maybe.Nothing.value;
                        };
                        return new Data_Maybe.Just(i$prime);
                    })());
                };
            };
            var delta = (function () {
                var $9 = end >= start;
                if ($9) {
                    return 1;
                };
                return -1 | 0;
            })();
            return unfoldr1(dictUnfoldable1)(go(delta))(start);
        };
    };
};
module.exports = {
    Unfoldable1: Unfoldable1,
    unfoldr1: unfoldr1,
    replicate1: replicate1,
    replicate1A: replicate1A,
    singleton: singleton,
    range: range,
    unfoldable1Array: unfoldable1Array
};

},{"../Data.Boolean/index.js":45,"../Data.Maybe/index.js":79,"../Data.Semigroup.Traversable/index.js":103,"../Data.Tuple/index.js":127,"./foreign.js":130}],132:[function(require,module,exports){
"use strict";

exports.unit = {};

},{}],133:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Show = require("../Data.Show/index.js");
var showUnit = new Data_Show.Show(function (v) {
    return "unit";
});
module.exports = {
    showUnit: showUnit,
    unit: $foreign.unit
};

},{"../Data.Show/index.js":109,"./foreign.js":132}],134:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Show = require("../Data.Show/index.js");
var Void = function (x) {
    return x;
};
var absurd = function (a) {
    var spin = function ($copy_v) {
        var $tco_result;
        function $tco_loop(v) {
            $copy_v = v;
            return;
        };
        while (!false) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return spin(a);
};
var showVoid = new Data_Show.Show(absurd);
module.exports = {
    absurd: absurd,
    showVoid: showVoid
};

},{"../Data.Show/index.js":109}],135:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Effect = require("../Effect/index.js");
var MonadEffect = function (Monad0, liftEffect) {
    this.Monad0 = Monad0;
    this.liftEffect = liftEffect;
};
var monadEffectEffect = new MonadEffect(function () {
    return Effect.monadEffect;
}, Control_Category.identity(Control_Category.categoryFn));
var liftEffect = function (dict) {
    return dict.liftEffect;
};
module.exports = {
    liftEffect: liftEffect,
    MonadEffect: MonadEffect,
    monadEffectEffect: monadEffectEffect
};

},{"../Control.Category/index.js":12,"../Effect/index.js":143}],136:[function(require,module,exports){
"use strict";

exports.log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

exports.warn = function (s) {
  return function () {
    console.warn(s);
    return {};
  };
};

exports.error = function (s) {
  return function () {
    console.error(s);
    return {};
  };
};

exports.info = function (s) {
  return function () {
    console.info(s);
    return {};
  };
};

exports.time = function (s) {
  return function () {
    console.time(s);
    return {};
  };
};

exports.timeEnd = function (s) {
  return function () {
    console.timeEnd(s);
    return {};
  };
};

},{}],137:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Show = require("../Data.Show/index.js");
var warnShow = function (dictShow) {
    return function (a) {
        return $foreign.warn(Data_Show.show(dictShow)(a));
    };
};
var logShow = function (dictShow) {
    return function (a) {
        return $foreign.log(Data_Show.show(dictShow)(a));
    };
};
var infoShow = function (dictShow) {
    return function (a) {
        return $foreign.info(Data_Show.show(dictShow)(a));
    };
};
var errorShow = function (dictShow) {
    return function (a) {
        return $foreign.error(Data_Show.show(dictShow)(a));
    };
};
module.exports = {
    logShow: logShow,
    warnShow: warnShow,
    errorShow: errorShow,
    infoShow: infoShow,
    log: $foreign.log,
    warn: $foreign.warn,
    error: $foreign.error,
    info: $foreign.info,
    time: $foreign.time,
    timeEnd: $foreign.timeEnd
};

},{"../Data.Show/index.js":109,"./foreign.js":136}],138:[function(require,module,exports){
"use strict";

exports.showErrorImpl = function (err) {
  return err.stack || err.toString();
};

exports.error = function (msg) {
  return new Error(msg);
};

exports.message = function (e) {
  return e.message;
};

exports.name = function (e) {
  return e.name || "Error";
};

exports.stackImpl = function (just) {
  return function (nothing) {
    return function (e) {
      return e.stack ? just(e.stack) : nothing;
    };
  };
};

exports.throwException = function (e) {
  return function () {
    throw e;
  };
};

exports.catchException = function (c) {
  return function (t) {
    return function () {
      try {
        return t();
      } catch (e) {
        if (e instanceof Error || Object.prototype.toString.call(e) === "[object Error]") {
          return c(e)();
        } else {
          return c(new Error(e.toString()))();
        }
      }
    };
  };
};

},{}],139:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Effect = require("../Effect/index.js");
var $$try = function (action) {
    return $foreign.catchException(function ($0) {
        return Control_Applicative.pure(Effect.applicativeEffect)(Data_Either.Left.create($0));
    })(Data_Functor.map(Effect.functorEffect)(Data_Either.Right.create)(action));
};
var $$throw = function ($1) {
    return $foreign.throwException($foreign.error($1));
};
var stack = $foreign.stackImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var showError = new Data_Show.Show($foreign.showErrorImpl);
module.exports = {
    stack: stack,
    "throw": $$throw,
    "try": $$try,
    showError: showError,
    error: $foreign.error,
    message: $foreign.message,
    name: $foreign.name,
    throwException: $foreign.throwException,
    catchException: $foreign.catchException
};

},{"../Control.Applicative/index.js":5,"../Data.Either/index.js":51,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Show/index.js":109,"../Effect/index.js":143,"./foreign.js":138}],140:[function(require,module,exports){
"use strict";

exports.new = function (val) {
  return function () {
    return { value: val };
  };
};

exports.read = function (ref) {
  return function () {
    return ref.value;
  };
};

exports["modify'"] = function (f) {
  return function (ref) {
    return function () {
      var t = f(ref.value);
      ref.value = t.state;
      return t.value;
    };
  };
};

exports.write = function (val) {
  return function (ref) {
    return function () {
      ref.value = val;
      return {};
    };
  };
};

},{}],141:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Effect = require("../Effect/index.js");
var modify = function (f) {
    return $foreign["modify'"](function (s) {
        var s$prime = f(s);
        return {
            state: s$prime,
            value: s$prime
        };
    });
};
var modify_ = function (f) {
    return function (s) {
        return Data_Functor["void"](Effect.functorEffect)(modify(f)(s));
    };
};
module.exports = {
    modify: modify,
    modify_: modify_,
    "new": $foreign["new"],
    read: $foreign.read,
    "modify'": $foreign["modify'"],
    write: $foreign.write
};

},{"../Data.Functor/index.js":64,"../Effect/index.js":143,"./foreign.js":140}],142:[function(require,module,exports){
"use strict";

exports.pureE = function (a) {
  return function () {
    return a;
  };
};

exports.bindE = function (a) {
  return function (f) {
    return function () {
      return f(a())();
    };
  };
};

exports.untilE = function (f) {
  return function () {
    while (!f());
    return {};
  };
};

exports.whileE = function (f) {
  return function (a) {
    return function () {
      while (f()) {
        a();
      }
      return {};
    };
  };
};

exports.forE = function (lo) {
  return function (hi) {
    return function (f) {
      return function () {
        for (var i = lo; i < hi; i++) {
          f(i)();
        }
      };
    };
  };
};

exports.foreachE = function (as) {
  return function (f) {
    return function () {
      for (var i = 0, l = as.length; i < l; i++) {
        f(as[i])();
      }
    };
  };
};

},{}],143:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var monadEffect = new Control_Monad.Monad(function () {
    return applicativeEffect;
}, function () {
    return bindEffect;
});
var bindEffect = new Control_Bind.Bind(function () {
    return applyEffect;
}, $foreign.bindE);
var applyEffect = new Control_Apply.Apply(function () {
    return functorEffect;
}, Control_Monad.ap(monadEffect));
var applicativeEffect = new Control_Applicative.Applicative(function () {
    return applyEffect;
}, $foreign.pureE);
var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
var semigroupEffect = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyEffect)(Data_Semigroup.append(dictSemigroup)));
};
var monoidEffect = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffect(dictMonoid.Semigroup0());
    }, $foreign.pureE(Data_Monoid.mempty(dictMonoid)));
};
module.exports = {
    functorEffect: functorEffect,
    applyEffect: applyEffect,
    applicativeEffect: applicativeEffect,
    bindEffect: bindEffect,
    monadEffect: monadEffect,
    semigroupEffect: semigroupEffect,
    monoidEffect: monoidEffect,
    untilE: $foreign.untilE,
    whileE: $foreign.whileE,
    forE: $foreign.forE,
    foreachE: $foreign.foreachE
};

},{"../Control.Applicative/index.js":5,"../Control.Apply/index.js":7,"../Control.Bind/index.js":11,"../Control.Monad/index.js":27,"../Data.Functor/index.js":64,"../Data.Monoid/index.js":86,"../Data.Semigroup/index.js":105,"./foreign.js":142}],144:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var ranData = [ "car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck" ];
var people = [ "Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick", "Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", "Bellow, Saul", "Benchley, Robert", "Benenson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana", "Bent, Silas", "Bentsen, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, Sandra", "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bevan, Aneurin", "Bevel, Ken", "Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Biondo, Frank", "Birrell, Augustine", "Black, Elk", "Blair, Robert", "Blair, Tony", "Blake, William" ];
var inventorList = [ {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
}, {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
}, {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
}, {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
}, {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
}, {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
}, {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
}, {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
}, {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
}, {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
}, {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
}, {
    first: "Hanna",
    last: "Hammarstr\xf6m",
    year: 1829,
    passed: 1909
} ];
module.exports = {
    inventorList: inventorList,
    people: people,
    ranData: ranData
};

},{}],145:[function(require,module,exports){
"use strict";

exports.unsafeHas = function (label) {
  return function (rec) {
    return {}.hasOwnProperty.call(rec, label);
  };
};

exports.unsafeGet = function (label) {
  return function (rec) {
    return rec[label];
  };
};

exports.unsafeSet = function (label) {
  return function (value) {
    return function (rec) {
      var copy = {};
      for (var key in rec) {
        if ({}.hasOwnProperty.call(rec, key)) {
          copy[key] = rec[key];
        }
      }
      copy[label] = value;
      return copy;
    };
  };
};

exports.unsafeDelete = function (label) {
  return function (rec) {
    var copy = {};
    for (var key in rec) {
      if (key !== label && {}.hasOwnProperty.call(rec, key)) {
        copy[key] = rec[key];
      }
    }
    return copy;
  };
};

},{}],146:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
module.exports = {
    unsafeHas: $foreign.unsafeHas,
    unsafeGet: $foreign.unsafeGet,
    unsafeSet: $foreign.unsafeSet,
    unsafeDelete: $foreign.unsafeDelete
};

},{"./foreign.js":145}],147:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var RProxy = (function () {
    function RProxy() {

    };
    RProxy.value = new RProxy();
    return RProxy;
})();
module.exports = {
    RProxy: RProxy
};

},{}],148:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var RLProxy = (function () {
    function RLProxy() {

    };
    RLProxy.value = new RLProxy();
    return RLProxy;
})();
module.exports = {
    RLProxy: RLProxy
};

},{}],149:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var TypeEquals = function (from, to) {
    this.from = from;
    this.to = to;
};
var to = function (dict) {
    return dict.to;
};
var refl = new TypeEquals(function (a) {
    return a;
}, function (a) {
    return a;
});
var from = function (dict) {
    return dict.from;
};
module.exports = {
    TypeEquals: TypeEquals,
    to: to,
    from: from,
    refl: refl
};

},{}],150:[function(require,module,exports){
"use strict";

// module Unsafe.Coerce

exports.unsafeCoerce = function (x) {
  return x;
};

},{}],151:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
module.exports = {
    unsafeCoerce: $foreign.unsafeCoerce
};

},{"./foreign.js":150}],152:[function(require,module,exports){
"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};

exports.nodeTypeIndex = function (node) {
  return node.nodeType;
};

exports.nodeName = function (node) {
  return node.nodeName;
};

exports.baseURI = getEffProp("baseURI");

exports._ownerDocument = getEffProp("ownerDocument");

exports._parentNode = getEffProp("parentNode");

exports._parentElement = getEffProp("parentElement");

exports.hasChildNodes = function (node) {
  return function () {
    return node.hasChildNodes();
  };
};

exports.childNodes = getEffProp("childNodes");

exports._firstChild = getEffProp("firstChild");

exports._lastChild = getEffProp("lastChild");

exports._previousSibling = getEffProp("previousSibling");

exports._nextSibling = getEffProp("nextSibling");

exports.nodeValue = getEffProp("nodeValue");

exports.setNodeValue = function (value) {
  return function (node) {
    return function () {
      node.nodeValue = value;
      return {};
    };
  };
};

exports.textContent = getEffProp("textContent");

exports.setTextContent = function (value) {
  return function (node) {
    return function () {
      node.textContent = value;
      return {};
    };
  };
};

exports.normalize = function (node) {
  return function () {
    node.normalize();
    return {};
  };
};

exports.clone = function (node) {
  return function () {
    return node.cloneNode(false);
  };
};

exports.deepClone = function (node) {
  return function () {
    return node.cloneNode(true);
  };
};

exports.isEqualNode = function (node1) {
  return function (node2) {
    return function () {
      return node1.isEqualNode(node2);
    };
  };
};

exports.compareDocumentPositionBits = function (node1) {
  return function (node2) {
    return function () {
      return node1.compareDocumentPosition(node2);
    };
  };
};

exports.contains = function (node1) {
  return function (node2) {
    return function () {
      return node1.contains(node2);
    };
  };
};

exports._lookupPrefix = function (prefix) {
  return function (node) {
    return function () {
      return node.lookupPrefix(prefix);
    };
  };
};

exports._lookupNamespaceURI = function (ns) {
  return function (node) {
    return function () {
      return node.lookupNamespaceURI(ns);
    };
  };
};

exports.isDefaultNamespace = function (ns) {
  return function (node) {
    return function () {
      return node.isDefaultNamespace(ns);
    };
  };
};

exports.insertBefore = function (node1) {
  return function (node2) {
    return function (parent) {
      return function () {
        return parent.insertBefore(node1, node2);
      };
    };
  };
};

exports.appendChild = function (node) {
  return function (parent) {
    return function () {
      return parent.appendChild(node);
    };
  };
};

exports.replaceChild = function (newChild) {
  return function (oldChild) {
    return function (parent) {
      return function () {
        return parent.replaceChild(newChild, oldChild);
      };
    };
  };
};

exports.removeChild = function (node) {
  return function (parent) {
    return function () {
      return parent.removeChild(node);
    };
  };
};

},{}],153:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_DOM_NodeType = require("../Web.DOM.NodeType/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var previousSibling = function ($1) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_previousSibling"]($1));
};
var parentNode = function ($2) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_parentNode"]($2));
};
var parentElement = function ($3) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_parentElement"]($3));
};
var ownerDocument = function ($4) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_ownerDocument"]($4));
};
var nodeType = function (dictPartial) {
    return function ($5) {
        return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(Web_DOM_NodeType.boundedEnumNodeType)($foreign.nodeTypeIndex($5)));
    };
};
var nextSibling = function ($6) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_nextSibling"]($6));
};
var lookupPrefix = function (p) {
    return function ($7) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_lookupPrefix"](p)($7));
    };
};
var lookupNamespaceURI = function (ns) {
    return function ($8) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_lookupNamespaceURI"](ns)($8));
    };
};
var lastChild = function ($9) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_lastChild"]($9));
};
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Node");
var firstChild = function ($10) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_firstChild"]($10));
};
module.exports = {
    fromEventTarget: fromEventTarget,
    toEventTarget: toEventTarget,
    nodeType: nodeType,
    ownerDocument: ownerDocument,
    parentNode: parentNode,
    parentElement: parentElement,
    firstChild: firstChild,
    lastChild: lastChild,
    previousSibling: previousSibling,
    nextSibling: nextSibling,
    lookupPrefix: lookupPrefix,
    lookupNamespaceURI: lookupNamespaceURI,
    nodeTypeIndex: $foreign.nodeTypeIndex,
    nodeName: $foreign.nodeName,
    baseURI: $foreign.baseURI,
    hasChildNodes: $foreign.hasChildNodes,
    childNodes: $foreign.childNodes,
    nodeValue: $foreign.nodeValue,
    setNodeValue: $foreign.setNodeValue,
    textContent: $foreign.textContent,
    setTextContent: $foreign.setTextContent,
    normalize: $foreign.normalize,
    clone: $foreign.clone,
    deepClone: $foreign.deepClone,
    isEqualNode: $foreign.isEqualNode,
    compareDocumentPositionBits: $foreign.compareDocumentPositionBits,
    contains: $foreign.contains,
    isDefaultNamespace: $foreign.isDefaultNamespace,
    insertBefore: $foreign.insertBefore,
    appendChild: $foreign.appendChild,
    replaceChild: $foreign.replaceChild,
    removeChild: $foreign.removeChild
};

},{"../Data.Enum/index.js":53,"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Nullable/index.js":90,"../Effect/index.js":143,"../Unsafe.Coerce/index.js":151,"../Web.DOM.NodeType/index.js":156,"../Web.Internal.FFI/index.js":167,"./foreign.js":152}],154:[function(require,module,exports){
"use strict";

exports.length = function (list) {
  return function () {
    return list.length;
  };
};

exports.toArray = function (list) {
  return function () {
    return [].slice.call(list);
  };
};

exports._item = function (index) {
  return function (list) {
    return function () {
      return list.item(index);
    };
  };
};

},{}],155:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var item = function (i) {
    return function ($0) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_item"](i)($0));
    };
};
module.exports = {
    item: item,
    length: $foreign.length,
    toArray: $foreign.toArray
};

},{"../Data.Functor/index.js":64,"../Data.Nullable/index.js":90,"../Effect/index.js":143,"./foreign.js":154}],156:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var ElementNode = (function () {
    function ElementNode() {

    };
    ElementNode.value = new ElementNode();
    return ElementNode;
})();
var AttributeNode = (function () {
    function AttributeNode() {

    };
    AttributeNode.value = new AttributeNode();
    return AttributeNode;
})();
var TextNode = (function () {
    function TextNode() {

    };
    TextNode.value = new TextNode();
    return TextNode;
})();
var CDATASectionNode = (function () {
    function CDATASectionNode() {

    };
    CDATASectionNode.value = new CDATASectionNode();
    return CDATASectionNode;
})();
var EntityReferenceNode = (function () {
    function EntityReferenceNode() {

    };
    EntityReferenceNode.value = new EntityReferenceNode();
    return EntityReferenceNode;
})();
var EntityNode = (function () {
    function EntityNode() {

    };
    EntityNode.value = new EntityNode();
    return EntityNode;
})();
var ProcessingInstructionNode = (function () {
    function ProcessingInstructionNode() {

    };
    ProcessingInstructionNode.value = new ProcessingInstructionNode();
    return ProcessingInstructionNode;
})();
var CommentNode = (function () {
    function CommentNode() {

    };
    CommentNode.value = new CommentNode();
    return CommentNode;
})();
var DocumentNode = (function () {
    function DocumentNode() {

    };
    DocumentNode.value = new DocumentNode();
    return DocumentNode;
})();
var DocumentTypeNode = (function () {
    function DocumentTypeNode() {

    };
    DocumentTypeNode.value = new DocumentTypeNode();
    return DocumentTypeNode;
})();
var DocumentFragmentNode = (function () {
    function DocumentFragmentNode() {

    };
    DocumentFragmentNode.value = new DocumentFragmentNode();
    return DocumentFragmentNode;
})();
var NotationNode = (function () {
    function NotationNode() {

    };
    NotationNode.value = new NotationNode();
    return NotationNode;
})();
var toEnumNodeType = function (v) {
    if (v === 1) {
        return new Data_Maybe.Just(ElementNode.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(AttributeNode.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(TextNode.value);
    };
    if (v === 4) {
        return new Data_Maybe.Just(CDATASectionNode.value);
    };
    if (v === 5) {
        return new Data_Maybe.Just(EntityReferenceNode.value);
    };
    if (v === 6) {
        return new Data_Maybe.Just(EntityNode.value);
    };
    if (v === 7) {
        return new Data_Maybe.Just(ProcessingInstructionNode.value);
    };
    if (v === 8) {
        return new Data_Maybe.Just(CommentNode.value);
    };
    if (v === 9) {
        return new Data_Maybe.Just(DocumentNode.value);
    };
    if (v === 10) {
        return new Data_Maybe.Just(DocumentTypeNode.value);
    };
    if (v === 11) {
        return new Data_Maybe.Just(DocumentFragmentNode.value);
    };
    if (v === 12) {
        return new Data_Maybe.Just(NotationNode.value);
    };
    return Data_Maybe.Nothing.value;
};
var fromEnumNodeType = function (v) {
    if (v instanceof ElementNode) {
        return 1;
    };
    if (v instanceof AttributeNode) {
        return 2;
    };
    if (v instanceof TextNode) {
        return 3;
    };
    if (v instanceof CDATASectionNode) {
        return 4;
    };
    if (v instanceof EntityReferenceNode) {
        return 5;
    };
    if (v instanceof EntityNode) {
        return 6;
    };
    if (v instanceof ProcessingInstructionNode) {
        return 7;
    };
    if (v instanceof CommentNode) {
        return 8;
    };
    if (v instanceof DocumentNode) {
        return 9;
    };
    if (v instanceof DocumentTypeNode) {
        return 10;
    };
    if (v instanceof DocumentFragmentNode) {
        return 11;
    };
    if (v instanceof NotationNode) {
        return 12;
    };
    throw new Error("Failed pattern match at Web.DOM.NodeType (line 54, column 1 - line 54, column 36): " + [ v.constructor.name ]);
};
var eqNodeType = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof ElementNode && y instanceof ElementNode) {
            return true;
        };
        if (x instanceof AttributeNode && y instanceof AttributeNode) {
            return true;
        };
        if (x instanceof TextNode && y instanceof TextNode) {
            return true;
        };
        if (x instanceof CDATASectionNode && y instanceof CDATASectionNode) {
            return true;
        };
        if (x instanceof EntityReferenceNode && y instanceof EntityReferenceNode) {
            return true;
        };
        if (x instanceof EntityNode && y instanceof EntityNode) {
            return true;
        };
        if (x instanceof ProcessingInstructionNode && y instanceof ProcessingInstructionNode) {
            return true;
        };
        if (x instanceof CommentNode && y instanceof CommentNode) {
            return true;
        };
        if (x instanceof DocumentNode && y instanceof DocumentNode) {
            return true;
        };
        if (x instanceof DocumentTypeNode && y instanceof DocumentTypeNode) {
            return true;
        };
        if (x instanceof DocumentFragmentNode && y instanceof DocumentFragmentNode) {
            return true;
        };
        if (x instanceof NotationNode && y instanceof NotationNode) {
            return true;
        };
        return false;
    };
});
var ordNodeType = new Data_Ord.Ord(function () {
    return eqNodeType;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(fromEnumNodeType(x))(fromEnumNodeType(y));
    };
});
var enumNodeType = new Data_Enum.Enum(function () {
    return ordNodeType;
}, Data_Enum.defaultPred(toEnumNodeType)(fromEnumNodeType), Data_Enum.defaultSucc(toEnumNodeType)(fromEnumNodeType));
var boundedNodeType = new Data_Bounded.Bounded(function () {
    return ordNodeType;
}, ElementNode.value, NotationNode.value);
var boundedEnumNodeType = new Data_Enum.BoundedEnum(function () {
    return boundedNodeType;
}, function () {
    return enumNodeType;
}, 12, fromEnumNodeType, toEnumNodeType);
module.exports = {
    ElementNode: ElementNode,
    AttributeNode: AttributeNode,
    TextNode: TextNode,
    CDATASectionNode: CDATASectionNode,
    EntityReferenceNode: EntityReferenceNode,
    EntityNode: EntityNode,
    ProcessingInstructionNode: ProcessingInstructionNode,
    CommentNode: CommentNode,
    DocumentNode: DocumentNode,
    DocumentTypeNode: DocumentTypeNode,
    DocumentFragmentNode: DocumentFragmentNode,
    NotationNode: NotationNode,
    eqNodeType: eqNodeType,
    ordNodeType: ordNodeType,
    boundedNodeType: boundedNodeType,
    enumNodeType: enumNodeType,
    boundedEnumNodeType: boundedEnumNodeType
};

},{"../Data.Bounded/index.js":48,"../Data.Enum/index.js":53,"../Data.Eq/index.js":55,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96}],157:[function(require,module,exports){
"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};

exports.children = getEffProp("children");

exports._firstElementChild = getEffProp("firstElementChild");

exports._lastElementChild = getEffProp("lastElementChild");

exports.childElementCount = getEffProp("childElementCount");

exports._querySelector = function (selector) {
  return function (node) {
    return function () {
      return node.querySelector(selector);
    };
  };
};

exports.querySelectorAll = function (selector) {
  return function (node) {
    return function () {
      return node.querySelectorAll(selector);
    };
  };
};

},{}],158:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Effect = require("../Effect/index.js");
var QuerySelector = function (x) {
    return x;
};
var querySelector = function (qs) {
    return function ($3) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_querySelector"](qs)($3));
    };
};
var ordQuerySelector = Data_Ord.ordString;
var newtypeQuerySelector = new Data_Newtype.Newtype(function (n) {
    return n;
}, QuerySelector);
var lastElementChild = function ($4) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_lastElementChild"]($4));
};
var firstElementChild = function ($5) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_firstElementChild"]($5));
};
var eqQuerySelector = Data_Eq.eqString;
module.exports = {
    firstElementChild: firstElementChild,
    lastElementChild: lastElementChild,
    QuerySelector: QuerySelector,
    querySelector: querySelector,
    eqQuerySelector: eqQuerySelector,
    ordQuerySelector: ordQuerySelector,
    newtypeQuerySelector: newtypeQuerySelector,
    children: $foreign.children,
    childElementCount: $foreign.childElementCount,
    querySelectorAll: $foreign.querySelectorAll
};

},{"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Nullable/index.js":90,"../Data.Ord/index.js":96,"../Effect/index.js":143,"./foreign.js":157}],159:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Loading = (function () {
    function Loading() {

    };
    Loading.value = new Loading();
    return Loading;
})();
var Interactive = (function () {
    function Interactive() {

    };
    Interactive.value = new Interactive();
    return Interactive;
})();
var Complete = (function () {
    function Complete() {

    };
    Complete.value = new Complete();
    return Complete;
})();
var showReadyState = new Data_Show.Show(function (v) {
    if (v instanceof Loading) {
        return "Loading";
    };
    if (v instanceof Interactive) {
        return "Interactive";
    };
    if (v instanceof Complete) {
        return "Complete";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 15, column 10 - line 20, column 1): " + [ v.constructor.name ]);
});
var print = function (v) {
    if (v instanceof Loading) {
        return "loading";
    };
    if (v instanceof Interactive) {
        return "interactive";
    };
    if (v instanceof Complete) {
        return "complete";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 21, column 9 - line 26, column 1): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "loading") {
        return new Data_Maybe.Just(Loading.value);
    };
    if (v === "interactive") {
        return new Data_Maybe.Just(Interactive.value);
    };
    if (v === "complete") {
        return new Data_Maybe.Just(Complete.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqReadyState = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Loading && y instanceof Loading) {
            return true;
        };
        if (x instanceof Interactive && y instanceof Interactive) {
            return true;
        };
        if (x instanceof Complete && y instanceof Complete) {
            return true;
        };
        return false;
    };
});
var ordReadyState = new Data_Ord.Ord(function () {
    return eqReadyState;
}, function (x) {
    return function (y) {
        if (x instanceof Loading && y instanceof Loading) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Loading) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Loading) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Interactive && y instanceof Interactive) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Interactive) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Interactive) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Complete && y instanceof Complete) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 12, column 8 - line 12, column 48): " + [ x.constructor.name, y.constructor.name ]);
    };
});
module.exports = {
    Loading: Loading,
    Interactive: Interactive,
    Complete: Complete,
    print: print,
    parse: parse,
    eqReadyState: eqReadyState,
    ordReadyState: ordReadyState,
    showReadyState: showReadyState
};

},{"../Data.Eq/index.js":55,"../Data.Maybe/index.js":79,"../Data.Ord/index.js":96,"../Data.Ordering/index.js":97,"../Data.Show/index.js":109}],160:[function(require,module,exports){
"use strict";

exports._body = function (doc) {
  return function () {
    return doc.body;
  };
};

exports._readyState = function (doc) {
  return function () {
    return doc.readyState;
  };
};

exports._activeElement = function (doc) {
  return function () {
    return doc.activeElement;
  };
};

exports._currentScript = function (doc) {
  return function () {
    return doc.currentScript;
  };
};

exports.referrer = function (doc) {
  return function () {
    return doc.referrer;
  };
};

exports.title = function (doc) {
  return function () {
    return doc.title;
  };
};

exports.setTitle = function (title) {
  return function (doc) {
    return function () {
      doc.title = title;
      return {};
    };
  };
};
},{}],161:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_HTML_HTMLDocument_ReadyState = require("../Web.HTML.HTMLDocument.ReadyState/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toDocument = Unsafe_Coerce.unsafeCoerce;
var readyState = function ($0) {
    return Data_Functor.map(Effect.functorEffect)(function ($1) {
        return Data_Maybe.fromMaybe(Web_HTML_HTMLDocument_ReadyState.Loading.value)(Web_HTML_HTMLDocument_ReadyState.parse($1));
    })($foreign["_readyState"]($0));
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNonElementParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromDocument = Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var currentScript = function ($2) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_currentScript"]($2));
};
var body = function ($3) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_body"]($3));
};
var activeElement = function ($4) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_activeElement"]($4));
};
module.exports = {
    fromDocument: fromDocument,
    fromNode: fromNode,
    fromParentNode: fromParentNode,
    fromNonElementParentNode: fromNonElementParentNode,
    fromEventTarget: fromEventTarget,
    toDocument: toDocument,
    toNode: toNode,
    toParentNode: toParentNode,
    toNonElementParentNode: toNonElementParentNode,
    toEventTarget: toEventTarget,
    body: body,
    readyState: readyState,
    activeElement: activeElement,
    currentScript: currentScript,
    referrer: $foreign.referrer,
    title: $foreign.title,
    setTitle: $foreign.setTitle
};

},{"../Data.Functor/index.js":64,"../Data.Maybe/index.js":79,"../Data.Nullable/index.js":90,"../Effect/index.js":143,"../Unsafe.Coerce/index.js":151,"../Web.HTML.HTMLDocument.ReadyState/index.js":159,"../Web.Internal.FFI/index.js":167,"./foreign.js":160}],162:[function(require,module,exports){
"use strict";

exports.document = function (window) {
  return function () {
    return window.document;
  };
};

exports.navigator = function (window) {
  return function () {
    return window.navigator;
  };
};

exports.location = function (window) {
  return function () {
    return window.location;
  };
};

exports.history = function(window) {
  return function() {
    return window.history;
  };
};

exports.innerWidth = function (window) {
  return function () {
    return window.innerWidth;
  };
};

exports.innerHeight = function (window) {
  return function () {
    return window.innerHeight;
  };
};

exports.alert = function (str) {
  return function (window) {
    return function () {
      window.alert(str);
      return {};
    };
  };
};

exports.confirm = function (str) {
  return function (window) {
    return function () {
      return window.confirm(str);
    };
  };
};

exports.moveBy = function (xDelta) {
  return function (yDelta) {
    return function (window) {
      return function () {
        window.moveBy(xDelta, yDelta);
        return {};
      };
    };
  };
};

exports.moveTo = function (width) {
  return function (height) {
    return function (window) {
      return function () {
        window.moveTo(width, height);
        return {};
      };
    };
  };
};

exports._open = function (url) {
  return function (name) {
    return function (features) {
      return function (window) {
        return function () {
          return window.open(url, name, features);
        };
      };
    };
  };
};

exports.outerHeight = function (window) {
  return function () {
    return window.outerHeight;
  };
};

exports.outerWidth = function (window) {
  return function () {
    return window.outerWidth;
  };
};

exports.print = function (window) {
  return function () {
    window.print();
    return {};
  };
};

exports._prompt = function (str) {
  return function (defaultText) {
    return function (window) {
      return function () {
        return window.prompt(str, defaultText);
      };
    };
  };
};

exports.resizeBy = function (xDelta) {
  return function (yDelta) {
    return function (window) {
      return function () {
        window.resizeBy(xDelta, yDelta);
        return {};
      };
    };
  };
};

exports.resizeTo = function (width) {
  return function (height) {
    return function (window) {
      return function () {
        window.resizeTo(width, height);
        return {};
      };
    };
  };
};

exports.screenX = function (window) {
  return function () {
    return window.screenX;
  };
};

exports.screenY = function (window) {
  return function () {
    return window.screenY;
  };
};

exports.scroll = function (xCoord) {
  return function (yCoord) {
    return function (window) {
      return function () {
        window.scroll(xCoord, yCoord);
        return {};
      };
    };
  };
};

exports.scrollBy = function (xCoord) {
  return function (yCoord) {
    return function (window) {
      return function () {
        window.scrollBy(xCoord, yCoord);
        return {};
      };
    };
  };
};

exports.scrollX = function (window) {
  return function () {
    return window.scrollX;
  };
};

exports.scrollY = function (window) {
  return function () {
    return window.scrollY;
  };
};

exports.localStorage = function (window) {
  return function () {
    return window.localStorage;
  };
};

exports.sessionStorage = function (window) {
  return function () {
    return window.sessionStorage;
  };
};

exports._requestAnimationFrame = function(fn) {
  return function(window) {
    return function() {
      return window.requestAnimationFrame(fn);
    };
  };
};

exports._cancelAnimationFrame = function(id) {
  return function(window) {
    return function() {
      return window.cancelAnimationFrame(id);
    };
  };
};

exports._requestIdleCallback = function(opts) {
  return function(fn) {
    return function(window) {
      return function() {
        return window.requestIdleCallback(fn, opts);
      };
    };
  };
};

exports._cancelIdleCallback = function(id) {
  return function(window) {
    return function() {
      return window.cancelIdleCallback(id);
    };
  };
};

},{}],163:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var RequestIdleCallbackId = function (x) {
    return x;
};
var RequestAnimationFrameId = function (x) {
    return x;
};
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var requestIdleCallback = function (opts) {
    return function (fn) {
        return function ($30) {
            return Data_Functor.map(Effect.functorEffect)(RequestIdleCallbackId)($foreign["_requestIdleCallback"](opts)(fn)($30));
        };
    };
};
var requestAnimationFrame = function (fn) {
    return function ($31) {
        return Data_Functor.map(Effect.functorEffect)(RequestAnimationFrameId)($foreign["_requestAnimationFrame"](fn)($31));
    };
};
var promptDefault = function (msg) {
    return function (defaultText) {
        return function (window) {
            return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_prompt"](msg)(defaultText)(window));
        };
    };
};
var prompt = function (msg) {
    return function (window) {
        return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_prompt"](msg)("")(window));
    };
};
var open = function (url$prime) {
    return function (name) {
        return function (features) {
            return function (window) {
                return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)($foreign["_open"](url$prime)(name)(features)(window));
            };
        };
    };
};
var newtypeRequestIdleCallbackId = new Data_Newtype.Newtype(function (n) {
    return n;
}, RequestIdleCallbackId);
var newtypeRequestAnimationFrameId = new Data_Newtype.Newtype(function (n) {
    return n;
}, RequestAnimationFrameId);
var eqRequestIdleCallbackId = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordRequestIdleCallbackId = new Data_Ord.Ord(function () {
    return eqRequestIdleCallbackId;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
var eqRequestAnimationFrameId = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordRequestAnimationFrameId = new Data_Ord.Ord(function () {
    return eqRequestAnimationFrameId;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
var cancelIdleCallback = function (idAF) {
    return $foreign["_cancelIdleCallback"](Data_Newtype.unwrap(newtypeRequestIdleCallbackId)(idAF));
};
var cancelAnimationFrame = function (idAF) {
    return $foreign["_cancelAnimationFrame"](Data_Newtype.unwrap(newtypeRequestAnimationFrameId)(idAF));
};
module.exports = {
    toEventTarget: toEventTarget,
    open: open,
    prompt: prompt,
    promptDefault: promptDefault,
    requestAnimationFrame: requestAnimationFrame,
    cancelAnimationFrame: cancelAnimationFrame,
    requestIdleCallback: requestIdleCallback,
    cancelIdleCallback: cancelIdleCallback,
    newtypeRequestAnimationFrameId: newtypeRequestAnimationFrameId,
    eqRequestAnimationFrameId: eqRequestAnimationFrameId,
    ordRequestAnimationFrameId: ordRequestAnimationFrameId,
    newtypeRequestIdleCallbackId: newtypeRequestIdleCallbackId,
    eqRequestIdleCallbackId: eqRequestIdleCallbackId,
    ordRequestIdleCallbackId: ordRequestIdleCallbackId,
    document: $foreign.document,
    navigator: $foreign.navigator,
    location: $foreign.location,
    history: $foreign.history,
    innerWidth: $foreign.innerWidth,
    innerHeight: $foreign.innerHeight,
    alert: $foreign.alert,
    confirm: $foreign.confirm,
    moveBy: $foreign.moveBy,
    moveTo: $foreign.moveTo,
    outerHeight: $foreign.outerHeight,
    outerWidth: $foreign.outerWidth,
    print: $foreign.print,
    resizeBy: $foreign.resizeBy,
    resizeTo: $foreign.resizeTo,
    screenX: $foreign.screenX,
    screenY: $foreign.screenY,
    scroll: $foreign.scroll,
    scrollBy: $foreign.scrollBy,
    scrollX: $foreign.scrollX,
    scrollY: $foreign.scrollY,
    localStorage: $foreign.localStorage,
    sessionStorage: $foreign.sessionStorage
};

},{"../Data.Eq/index.js":55,"../Data.Functor/index.js":64,"../Data.Newtype/index.js":87,"../Data.Nullable/index.js":90,"../Data.Ord/index.js":96,"../Effect/index.js":143,"../Unsafe.Coerce/index.js":151,"./foreign.js":162}],164:[function(require,module,exports){
/* global window */
"use strict";

exports.window = function () {
  return window;
};

},{}],165:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
module.exports = {
    window: $foreign.window
};

},{"./foreign.js":164}],166:[function(require,module,exports){
"use strict";

exports._unsafeReadProtoTagged = function (nothing, just, name, value) {
  if (typeof window !== "undefined") {
    var ty = window[name];
    if (ty != null && value instanceof ty) {
      return just(value);
    }
    return nothing;
  } 
  var obj = value;
  while (obj != null) {
    var proto = Object.getPrototypeOf(obj);
    var constructorName = proto.constructor.name;
    if (constructorName === name) {
      return just(value);
    } else if (constructorName === "Object") {
      return nothing;
    }
    obj = proto;
  }
  return nothing;
};

},{}],167:[function(require,module,exports){
// Generated by purs version 0.12.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var unsafeReadProtoTagged = function (name) {
    return function (value) {
        return $foreign["_unsafeReadProtoTagged"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, name, value);
    };
};
module.exports = {
    unsafeReadProtoTagged: unsafeReadProtoTagged
};

},{"../Data.Maybe/index.js":79,"./foreign.js":166}],168:[function(require,module,exports){
require('ArrayCardioDay1').main();

},{"ArrayCardioDay1":2}]},{},[168]);
