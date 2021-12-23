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
        var repetido = Boolean(this.courses.find(element => element.name === this.courseName.trim() ? true : false));
        this.messageHandler(repetido);
        if(this.courseName != null && this.courseName.trim().length > 0 && this.courseHours > 0 && !repetido) {
            this.courses.push({name: this.courseName.trim(), hours: this.courseHours});
            this.getTotalTime();
            this.showAlertNoItems();
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
      }, 
      messageHandler(repetido) {
        if(repetido) {
          this.showCourseReapeat = true;
        } else {
          this.showCourseReapeat = false;
        } 
        if(this.courseHours <= 0) {
          this.showHoursMinus = true;
        } else {
          this.showHoursMinus = false;
        }
        if(this.courseName === null || this.courseName.trim().length == 0) {
          this.showNameEmpty = true;
        } else {
          this.showNameEmpty = false;
        }
      }
    }
  })