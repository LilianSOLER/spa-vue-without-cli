let Student = {
	template: coursTemplate,
	data() {
		return {
			name: StudentInfoData.name,
			classe: StudentInfoData.class,
			cours: StudentInfoData.cours,
			utils: StudentInfoData.utils,
		};
	},
	methods: {
		upperFirstLetter(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
};
