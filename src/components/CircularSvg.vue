<template>
  <div>
    <div class="relative">
      <div class="absolute-center">
        <svg
          class="circle-svg"
          viewBox="0 0 500 500">
          <defs>
            <path
              id="textcircle_top"
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250">
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="20s"
                type="rotate"
                from="0 250 250"
                to="360 250 250"
                repeatCount="indefinite" />
            </path>
          </defs>
          <text
            class="circle-text"
            dy="70"
            textLength="1220">
            <textPath xlink:href="#textcircle_top">
              Code with love 💜 and music 📻
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CircularSvg",
};
</script>

<style>
.circle-text {
	font-size: 35px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 5px;
	fill: rgb(212, 35, 212);
}

.circle-svg {
	height: 195px;
	width: 195px;
}

.absolute-center {
	position: absolute;
	left: 33%;
	transform: translate(-40%, -40%);
	bottom: 0%;
}

@media (max-width: 640px) {
.absolute-center {
	position: absolute;
	left: 13%;
	transform: translate(-40%, -40%);
	padding-bottom: 8%;
}
.circle-svg {
	width: 140px;
}
}

</style>