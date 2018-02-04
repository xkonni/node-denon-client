const InputOptions = require('./options/input_options');
const MuteOptions = require('./options/mute_options');
const PowerOptions = require('./options/power_options');
const SurroundOptions = require('./options/surround_options');
const VolumeOptions = require('./options/volume_options');
const DisplayDimOptions = require('./options/display_dim_options');
const Zone1Options = require('./options/zone_1_options');
const Zone2Options = require('./options/zone_2_options');

/**
 * Offers option classes to ease requests.
 *
 * @class Options
 */

module.exports = {
  /**
   * @property InputOptions
   * @type {InputOptions}
   */
  InputOptions: InputOptions,
  /**
   * @property MuteOptions
   * @type {MuteOptions}
   */
  MuteOptions: MuteOptions,
  /**
   * @property PowerOptions
   * @type {PowerOptions}
   */
  PowerOptions: PowerOptions,
  /**
   * @property SurroundOptions
   * @type {SurroundOptions}
   */
  SurroundOptions: SurroundOptions,
  /**
   * @property VolumeOptions
   * @type {VolumeOptions}
   */
  VolumeOptions: VolumeOptions,

  /**
   * @property DisplayDimOptions
   * @type {DisplayDimOptions}
   */
  DisplayDimOptions: DisplayDimOptions,

  /**
   * @property Zone1Options
   * @type {Zone1Options}
   */
  Zone1Options: Zone1Options,

  /**
   * @property Zone2Options
   * @type {Zone2Options}
   */
  Zone2Options: Zone2Options,
}
