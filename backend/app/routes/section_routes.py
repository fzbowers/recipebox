from flask import Blueprint

bp = Blueprint('section', __name__)

@bp.route('/sections', methods=['POST'])
def create_section():
    return 'x'