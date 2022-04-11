let coursTemplate = `
<div class="cours-template">
  <h1>{{ classe }} - {{ upperFirstLetter(name) }}</h1>
    <ul class="parent">
      <div v-for="month in cours">
        <li>{{ month.name }}</li>
        <ul>
          <li v-for="lesson in month.lessons">
            <a :href="lesson.link">{{ lesson.day }} - {{ lesson.title }}</a>
          </li>
        </ul>
      </div>
      <div>
        <li>Utilitaires:</li>
        <ul>
          <div v-for="util in utils">
            <li>
              <a :href="util.link">{{ util.title }}</a>
            </li>
          </div>
        </ul>
      </div>
    </ul>
</div>
`;
