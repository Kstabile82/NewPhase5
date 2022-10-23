class Information < ApplicationRecord
    belongs_to :rescue
    has_many :questions, dependent: :destroy
    has_many :options, through: :questions
end
