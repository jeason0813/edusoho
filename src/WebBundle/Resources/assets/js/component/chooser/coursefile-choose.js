/**
 * Created by Simon on 31/10/2016.
 */

class CourseFileChoose {

    constructor($container, mediaType) {
        this.container = $container;
        this.mediaType = mediaType;
        this._init();
        this._initEvent();
    }

    _init() {
        this._loadList();
        this._initTabs();
    }

    _initEvent() {
        $(this.container).on('click', '.pagination a', this._paginationList.bind(this));
        $(this.container).on('click', '.file-browser-item', this._onSelectFile.bind(this));

        $(this.container).on('click', 'js-choose-trigger',this._open)
    }

    _initTabs() {
        $("#material a").click(function (e) {
            e.preventDefault();

            $(this).tab('show')
        });
    }

    _loadList() {
        let $containter = $('[data-role=course-file-browser]');
        let url = $containter.data('url');

        $containter.load(url, function () {
            console.log('page is on loading');
        })
    }

    _paginationList(event) {
        event.stopImmediatePropagation();
        let $that = $(event.currentTarget);
        console.log('_paginationList');
        $('input[name=page]').val($that.html());
        this._loadList();
    }


    _close() {
        $('.file-chooser-main').addClass('hidden');
        $('.file-chooser-bar').removeClass('hidden');
    }

    _open() {
        $('.file-chooser-bar').addClass('hidden');
        $('.file-chooser-main').removeClass('hidden');
    }

    _onSelectFile(event) {
        var $that = $(event.currentTarget);
        var file = $that.data();
        this._onChange(file);
        this._close();
        console.log($that, $that.data())
    }

    _onChange(file) {
        var value = file ? JSON.stringify(file) : '';
        $('[name="media"]').val(value);
        $('input[name=mediaId]').val(file.id);
        $('[data-role="placeholder"]').html(file.name);
    }

}


new CourseFileChoose($('#chooser-course-panel'), 'video');