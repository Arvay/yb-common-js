module.exports = function () {
    this.name = 'niii',
    this.videoStatus = function f(status) {
        switch (status) {
            case -1:
                return '失效'
            case 0:
                return '预告'
            case 1:
                return '直播中'
            case 2:
                return '直播暂停'
            case 3:
                return '直播结束'
            case 4:
                return '稍后继续'
            case 5:
                return '正在转码'
            case 6:
                return '转码失败'
            case 7:
                return '未发布'
            case 8:
                return '点播'
            case 9:
                return '直播回放'
            case 11:
                return '尚未开始'
            case 12:
                return '即将开始'
            default:
                return '未知状态'
        }
    }
}
