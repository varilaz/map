
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:['jquery-ui-1.10.3.custom.min.js'],complete:init});function init(){sym.$('spain2').draggable();sym.$('portugal2').draggable();sym.$('pt').droppable({drop:function(){sym.getSymbol("portugal2").play();}});sym.$('sp').droppable({drop:function(){sym.getSymbol("spain2").play();}});}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'spain'
(function(symbolName){})("spain");
//Edge symbol end:'spain'

//=========================================================

//Edge symbol: 'portugal'
(function(symbolName){})("portugal");
//Edge symbol end:'portugal'
})(jQuery,AdobeEdge,"EDGE-177853578");