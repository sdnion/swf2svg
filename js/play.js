function playAll(svg, animations, frameLength){
	function playElement(element, frameData, clip){
		if (clip == 0){
			var during = frameLength * frameData[clip].frame;
			var setInitial = function(){
				element.attr(frameData[0].animation)
				if (frameData.length > 1)
					playElement(element, frameData, 1);
			}
			setTimeout(setInitial, during)
		}else {
			var frameDiff = 1;
			if (clip < frameData.length)
				frameDiff = frameData[clip].frame - frameData[clip - 1].frame;
			else
				//return;
				clip = 0;
			element.animate(frameData[clip].animation, frameLength * frameDiff, function(){
				playElement(element, frameData, clip + 1);
			});
		}
	}
	animations.forEach(function(e){
		var element = svg.select('#'+e.elementID)
		if (e.frameData.length > 0)
			playElement(element, e.frameData, 0);
	});
}

(function (){
	var ground = Snap("#test");
	var FPSSnapSVG = 12;
	var frameLength = 1000.0/FPSSnapSVG;
	Snap.load(svgInfo.fileName, function(svgElement){
		playAll(svgElement, svgInfo.animations, frameLength);
		ground.append(svgElement);
	});
})();