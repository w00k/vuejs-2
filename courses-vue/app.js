new Vue({
    el: '#app',
    
    data () {
      return {
        courseName: null,
        courseHours: null,
        courses: [
        ],
        totalTime: 0,
        showAlert: true,
        showCourseReapeat: false,
        showNameEmpty: false,
        showHoursMinus: false
      }
    },
    
    computed: {},

    watch: {
      showAlert() {},
      showCourseReapeat() {}
    },
    
    methods: {
      addCourse() {
        if(this.courseName != null && this.courseName.length > 0 && this.courseHours > 0) {
          var repetido = Boolean(this.courses.find(element => element.name === this.courseName ? true : false));
          if(!repetido) {
            this.courses.push({name: this.courseName, hours: this.courseHours});
            this.getTotalTime();
            this.showAlertNoItems();
            this.showCourseReapeat = false;
            this.showHoursMinus = false;
            this.showNameEmpty = false;
          } else {
            this.showCourseReapeat = true;
          } 
        } else {
          if(this.courseHours < 0) {
            this.showHoursMinus = true;
          } 
          if(this.courseName === null || this.courseName.length == 0) {
            this.showNameEmpty = true;
          }
        }
      },
      getTotalTime() {
        totalTime = 0;
        this.courses.forEach(element => {
          totalTime = parseInt(element.hours, 10) + totalTime;
        });
        this.totalTime = totalTime;
      },
      showAlertNoItems() {
        if(this.courses.length > 0) {
          this.showAlert = false;
        }
      }
    }
  })