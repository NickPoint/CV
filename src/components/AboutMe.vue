<template>
  <b-container>
    <div class="div-heading">
      <h2>About Me</h2>
      <h6>My story</h6>
    </div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <b-row>
      <b-col class="col-6">
        <table>
          <tr>
            <td>Age:</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Residence:</td>
            <td>Ukraine</td>
          </tr>
          <tr>
            <td>Degree:</td>
            <td>2 year of Computer Science</td>
          </tr>
        </table>
      </b-col>
      <b-col class="col-6">
        <table>
          <tr>
            <td>E-mail:</td>
            <td>
              <a href="mailto:nikita.voevudsky@gmail.com"
                >nikita.voevudsky@gmail.com</a
              >
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td><a href="tel:+37258348070">+372 5834 8070</a></td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>Tartu, Estonia</td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
td:first-child {
  padding-right: 1rem;
}
</style>
