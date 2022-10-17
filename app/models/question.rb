class Question < ApplicationRecord
    belongs_to :information
    # has_many :options, dependent: :destroy
end
