import $ from 'jquery';
import M from 'materialize-css';

const util = {
    // Generate Random Unique GUID
    guid: () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },

    // Render Modal for Messages
    showModal: (title, content, options) => {
        // Generate Modal
        const uniqueId = util.guid();
        let html = '';
        html += '<div id="' + uniqueId + '" class="modal modal-fixed-footer">';
        html += '   <div class="modal-content">';
        html += '      <h4>' + title + '</h4>';
        html += '      <p>' + content + '</p>';
        html += '   </div>';
        html += '   <div class="modal-footer">';
        html += '      <a href="#" class="modal-close waves-effect waves-green btn-flat">Close</a>';
        html += '   </div>';
        html += '</div>';   

        // Render Modal
        $('body').append(html);
        const instance = new M.Modal($('#' + uniqueId));
        instance.animateIn();

        // Close Btn Event
        $('#' + uniqueId).find('a.modal-close').on('click', function () {
            instance.animateOut();
        })

        // Destroy Modal on Hidden
        $('#' + uniqueId).on('hidden.bs.modal', function () {
            alert('closed Modal');
            $('#' + uniqueId).remove();
        })
    },

    showToast: (content) => {
        M.toast(content, 5000);
    }
}

export default util;