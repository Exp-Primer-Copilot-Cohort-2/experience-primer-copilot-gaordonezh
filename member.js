function skillsMember() {
    return {
        restruct: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}