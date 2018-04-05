// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var issues = [
  'Experimental data for dielectric constants not complete',
  'Initial charge parameters needs improvement',
  'Fitting on interaction energies not good enough',
  'Evaluation on surface tension objectives too slow',
  'Not enough memory when using PBC box size larger than 5 nm',
];
var conclusions = [
  'High surface tension lead to more structured bahavior',
  'Structural parametrization allows flexible fitting of dielectric constant',
  'MP2 interaction energies are within 1 kcal/mol to CCSD(T) values',
];
var todos = [
  'Decrease the weight for density target',
  'Implement analytic gradient forluma for surface tension parameterization',
  'Try Tip4P model',
  'Write the paper',
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  issues,
  conclusions,
  todos
};
