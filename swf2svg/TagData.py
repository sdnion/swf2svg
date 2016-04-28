class TagData:
    def __init__(self, content):
        self.content = content
        self.size = len(self.content)
        self.tag_id = None
        self.id = None


class ShowFrame(TagData):
    def __init__(self):
        super().__init__(b'')
        self.tag_id = 1

    def __str__(self):
        return "ShowFrame"


class DoAction(TagData):
    def __init__(self):
        super().__init__(b'')
        self.tag_id = 12

    def __str__(self):
        return "DoAction"


class End(TagData):
    def __init__(self):
        super().__init__(b'')
        self.tag_id = 0

    def __str__(self):
        return "End"

