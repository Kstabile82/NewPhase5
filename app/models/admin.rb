class Admin < ApplicationRecord
    has_secure_password
    belongs_to: :rescue
    validates :name, presence: true
end
