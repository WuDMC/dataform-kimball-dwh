
function fix_dropoff_time() {
  return `case
      when dropoff_datetime < pickup_datetime then pickup_datetime
      else dropoff_datetime
    end
  `;
}

module.exports = {
  fix_dropoff_time
};