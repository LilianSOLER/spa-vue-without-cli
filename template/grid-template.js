const gridTemplate = `<div class="grid-template">
	<h1>{{ title }}</h1>
	<ul class="parent">
		<div v-for="content in contents">
			<li>{{ content.title }}</li>
			<ul>
				<li v-for="subContent in content.subContents">
					<a :href="subContent.link">{{ subContent.title }}</a>
				</li>
			</ul>
		</div>
	</ul>
</div>`;
